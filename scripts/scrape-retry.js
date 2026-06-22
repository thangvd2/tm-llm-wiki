/**
 * Re-scrape empty/thin pages with better content detection.
 * Targets pages with < 1000 chars that likely failed to load.
 *
 * Usage:  node scripts/scrape-retry.js
 */
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");
const { BASE_URL, BROWSER_DATA, VC_RAW_DIR, VC_VERSION_URL, resolveVersionUrls, urlToRelPath, urlToFilename } = require("./scrape-config");

// Pages to re-scrape (all under 1000 chars from first pass)
const RETRY_PAGES = {
  "vault-core-overview": [
    "/vault-core/5-8/EN/vault_core_overview/what_is_vault_core",
    "/vault-core/5-8/EN/vault_core_overview/financial_model",
    "/vault-core/5-8/EN/vault_core_overview/coexistence",
    "/vault-core/5-8/EN/vault_core_overview/architecture",
    "/vault-core/5-8/EN/vault_core_overview/vault_security",
    "/vault-core/5-8/EN/vault_core_overview/whats_new_in_vc5/overview",
    "/vault-core/5-8/EN/vault_core_overview/whats_new_in_vc5/service_compatibility",
  ],
  "smart-contracts-clv4": [
    "/vault-core/5-8/EN/reference/contracts/sdk_download",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/supervisor_overview",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/concepts",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/version_notes",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/fixed_values",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/account_fetcher_requirements",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/contract_modules_overview",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/development_and_testing",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_examples",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_examples/generic",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/performance_considerations",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/best_practice_guidelines",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/running_contracts_in_production",
    "/vault-core/5-8/EN/reference/contracts/contract_simulation",
    "/vault-core/5-8/EN/reference/contracts/contracts_transaction_bridge",
  ],
};

function htmlToBasicMd(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<nav[\s\S]*?<\/nav>/gi, "")
    .replace(/<footer[\s\S]*?<\/footer>/gi, "")
    .replace(/<header[\s\S]*?<\/header>/gi, "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<\/h([1-6])>/gi, (_, level) => "\n" + "#".repeat(parseInt(level)) + " ")
    .replace(/<h([1-6])([^>]*)>/gi, (_, level) => "\n" + "#".repeat(parseInt(level)) + " ")
    .replace(/<\/li>/gi, "\n")
    .replace(/<li[^>]*>/gi, "- ")
    .replace(/<\/div>/gi, "\n")
    .replace(/<\/tr>/gi, "\n")
    .replace(/<td[^>]*>/gi, "| ")
    .replace(/<th[^>]*>/gi, "| ")
    .replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, "[$2]($1)")
    .replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, "**$1**")
    .replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, "*$1*")
    .replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, "`$1`")
    .replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, "\n```\n$1\n```\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

async function scrapePageWithRetry(page, urlPath) {
  const url = BASE_URL + urlPath;

  // Navigate with longer timeout
  await page.goto(url, { waitUntil: "networkidle", timeout: 45000 });

  // Wait for content to actually render - look for main content selectors
  // The portal uses various content containers
  try {
    await page.waitForFunction(
      () => {
        const selectors = [
          "article",
          "[class*='content']",
          "[class*='markdown']",
          "[class*='document']",
          "[class*='page-content']",
          "main p",
          "main li",
        ];
        for (const sel of selectors) {
          const el = document.querySelector(sel);
          if (el && el.textContent.trim().length > 100) return true;
        }
        // Fallback: check if body has substantial text
        const body = document.body;
        const text = body ? body.textContent.trim() : "";
        return text.length > 500;
      },
      { timeout: 10000 }
    );
  } catch {
    // Content might still be loading, give it more time
    await page.waitForTimeout(3000);
  }

  const title = await page.title();

  // Try multiple content selectors, pick the one with most content
  const result = await page.evaluate(() => {
    const selectors = [
      { sel: "article", name: "article" },
      { sel: "[class*='markdown']", name: "markdown" },
      { sel: "[class*='content-body']", name: "content-body" },
      { sel: "[class*='page-content']", name: "page-content" },
      { sel: "[class*='document']", name: "document" },
      { sel: "main", name: "main" },
      { sel: "[role='main']", name: "role-main" },
      { sel: ".content", name: "content" },
      { sel: "#content", name: "content-id" },
      { sel: "body", name: "body" },
    ];

    let bestHtml = "";
    let bestLen = 0;
    let bestSel = "none";

    for (const { sel, name } of selectors) {
      const el = document.querySelector(sel);
      if (el) {
        const html = el.innerHTML;
        // Strip tags to get text length
        const textLen = el.textContent.trim().length;
        if (textLen > bestLen) {
          bestLen = textLen;
          bestHtml = html;
          bestSel = name;
        }
      }
    }

    return { html: bestHtml, textLen: bestLen, selector: bestSel };
  });

  const md = htmlToBasicMd(result.html);

  const frontmatter = [
    "---",
    `source_url: "${url}"`,
    `title: "${(title || "").replace(/"/g, '\\"')}"`,
    `scraped_at: "${new Date().toISOString()}"`,
    `selector: "${result.selector}"`,
    "---",
    "",
    `# ${title || urlPath.split("/").pop()}`,
    "",
    md,
  ].join("\n");

  return { title, md: frontmatter, url, textLen: result.textLen, selector: result.selector };
}

async function main() {
  if (!fs.existsSync(BROWSER_DATA)) {
    console.error("ERROR: No browser session. Run scrape-login.js first.");
    process.exit(1);
  }

  const browser = await chromium.launchPersistentContext(BROWSER_DATA, {
    headless: false,
    viewport: { width: 1400, height: 900 },
    channel: "chrome",
  });

  const page = browser.pages()[0] || (await browser.newPage());

  const sections = resolveVersionUrls(RETRY_PAGES);

  let improved = 0;
  let unchanged = 0;

  for (const [section, urls] of Object.entries(sections)) {
    console.log(`\n=== Re-scraping: ${section} (${urls.length} pages) ===`);

    for (const urlPath of urls) {
      try {
        const relPath = urlToRelPath(urlPath);
        const filename = urlToFilename(urlPath);
        const targetDir = path.join(VC_RAW_DIR, relPath);
        fs.mkdirSync(targetDir, { recursive: true });
        const filepath = path.join(targetDir, filename);
        const oldSize = fs.existsSync(filepath) ? fs.statSync(filepath).size : 0;

        const result = await scrapePageWithRetry(page, urlPath);
        fs.writeFileSync(filepath, result.md);

        const newSize = result.md.length;
        const status = newSize > oldSize * 1.2 ? "IMPROVED" : "SAME";
        if (newSize > oldSize * 1.2) improved++;
        else unchanged++;

        console.log(
          `  ${status}: ${filename} (${oldSize} → ${newSize} chars, sel=${result.selector}, text=${result.textLen})`
        );
      } catch (e) {
        console.error(`  ERROR: ${urlPath} — ${e.message}`);
      }
    }
  }

  console.log(`\n=== DONE ===`);
  console.log(`Improved: ${improved}`);
  console.log(`Unchanged: ${unchanged}`);

  await browser.close();
}

main().catch((e) => {
  console.error("Fatal:", e.message);
  process.exit(1);
});
