/**
 * Batch scrape: Vault Core Overview + Smart Contracts CLv4 (skip CLv3)
 * Uses persistent browser context from scrape-login.js session.
 *
 * Usage:  node scripts/scrape-batch.js
 * Output: raw/vault-core/5.8/vault-core-overview/ and raw/vault-core/5.8/smart-contracts-clv4/
 */
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");
const { BASE_URL, BROWSER_DATA, VC_RAW_DIR, VC_VERSION_URL, resolveVersionUrls } = require("./scrape-config");

// URLs to scrape, organized by section
const SCRAPE_SECTIONS = {
  "vault-core-overview": [
    "/vault-core/5-8/EN/vault_core_overview",
    "/vault-core/5-8/EN/vault_core_overview/what_is_vault_core",
    "/vault-core/5-8/EN/vault_core_overview/financial_model",
    "/vault-core/5-8/EN/vault_core_overview/coexistence",
    "/vault-core/5-8/EN/vault_core_overview/architecture",
    "/vault-core/5-8/EN/vault_core_overview/vault_security",
    "/vault-core/5-8/EN/vault_core_overview/whats_new_in_vc5",
    "/vault-core/5-8/EN/vault_core_overview/whats_new_in_vc5/overview",
    "/vault-core/5-8/EN/vault_core_overview/whats_new_in_vc5/service_compatibility",
    "/vault-core/5-8/EN/vault_core_overview/whats_new_in_vc5/extensions",
  ],
  "smart-contracts-clv4": [
    "/vault-core/5-8/EN/reference/contracts/introduction",
    "/vault-core/5-8/EN/reference/contracts/sdk_download",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/overview",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/supervisor_overview",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/contract_modules_overview",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/concepts",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/version_notes",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/builtins",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/classes",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/decorators",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/enums",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/fixed_values",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_types_4xx/native_objects",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/metadata",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hooks",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/account_fetcher_requirements",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/vault",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/metadata",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hooks",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hook_requirements",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/account_fetcher_requirements",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/vault",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/contract_modules_api_reference4xx",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/development_and_testing",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_examples",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/common_examples/generic",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/performance_considerations",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/running_contracts_in_production",
    "/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/best_practice_guidelines",
    "/vault-core/5-8/EN/reference/contracts/contract_simulation",
    "/vault-core/5-8/EN/reference/contracts/contracts_transaction_bridge",
  ],
};

function urlToFilename(urlPath, section) {
  // Convert URL path to a readable filename
  // Remove the common prefix
  let name = urlPath
    .replace(new RegExp("^/vault-core/" + VC_VERSION_URL + "/EN/"), "")
    .replace(/^\/vault-core\/latest\/EN\//, "")
    .replace(/\//g, "_")
    .replace(/[^a-zA-Z0-9_-]/g, "");
  if (!name || name.length < 3) name = "index";
  return name + ".md";
}

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

async function scrapePage(page, urlPath) {
  const url = BASE_URL + urlPath;
  console.log(`  Scraping: ${urlPath}`);

  await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(1500);

  const title = await page.title();
  const content = await page.evaluate(() => {
    const main =
      document.querySelector("main") ||
      document.querySelector("[role='main']") ||
      document.querySelector(".content") ||
      document.querySelector("#content") ||
      document.querySelector("article") ||
      document.body;
    return main.innerHTML;
  });

  const md = htmlToBasicMd(content);

  const frontmatter = [
    "---",
    `source_url: "${url}"`,
    `title: "${(title || "").replace(/"/g, '\\"')}"`,
    `scraped_at: "${new Date().toISOString()}"`,
    "---",
    "",
    `# ${title || urlPath.split("/").pop()}`,
    "",
    md,
  ].join("\n");

  return { title, md: frontmatter, url };
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

  const sections = resolveVersionUrls(SCRAPE_SECTIONS);

  let totalScraped = 0;
  let totalErrors = 0;

  for (const [section, urls] of Object.entries(sections)) {
    const sectionDir = path.join(VC_RAW_DIR, section);
    fs.mkdirSync(sectionDir, { recursive: true });

    console.log(`\n=== Section: ${section} (${urls.length} pages) ===`);

    for (const urlPath of urls) {
      try {
        const result = await scrapePage(page, urlPath);
        const filename = urlToFilename(urlPath, section);
        const filepath = path.join(sectionDir, filename);
        fs.writeFileSync(filepath, result.md);
        totalScraped++;
        console.log(`    OK: ${filename} (${result.md.length} chars)`);
      } catch (e) {
        totalErrors++;
        console.error(`    ERROR: ${urlPath} — ${e.message}`);
      }
    }
  }

  console.log(`\n=== DONE ===`);
  console.log(`Scraped: ${totalScraped} pages`);
  console.log(`Errors: ${totalErrors} pages`);
  console.log(`Output: ${VC_RAW_DIR}`);

  await browser.close();
}

main().catch((e) => {
  console.error("Fatal:", e.message);
  process.exit(1);
});
