/**
 * Full re-scrape with turndown (proper tables) + image downloading.
 * Re-scrapes all Vault Core Overview + Smart Contracts CLv4 pages.
 *
 * Usage:  node scripts/scrape-turndown.js
 */
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");
const TurndownService = require("turndown");
const turndownPluginGfm = require("turndown-plugin-gfm");

const BASE_URL = "https://vault-portal.thoughtmachine.net";
const BROWSER_DATA = path.join(__dirname, "..", "tmp", "browser-data");
const RAW_DIR = path.join(__dirname, "..", "raw");

// Turndown setup with GFM tables
const td = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
  emDelimiter: "*",
  strongDelimiter: "**",
});
const { gfm } = turndownPluginGfm;
td.use(gfm);

// Keep code blocks as-is
td.addRule("codeblock", {
  filter: ["pre"],
  replacement: function (content, node) {
    const code = node.querySelector("code");
    const lang = code ? (code.className || "").replace("language-", "").replace("highlight-", "") : "";
    return `\n\`\`\`${lang}\n${content.trim()}\n\`\`\`\n`;
  },
});

// All URLs to scrape
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

function urlToFilename(urlPath) {
  let name = urlPath
    .replace(/^\/vault-core\/5-8\/EN\//, "")
    .replace(/\//g, "_")
    .replace(/[^a-zA-Z0-9_-]/g, "");
  if (!name || name.length < 3) name = "index";
  return name + ".md";
}

function resolveUrl(base, relative) {
  try {
    return new URL(relative, base).href;
  } catch {
    return relative;
  }
}

function imageFilename(src) {
  try {
    const u = new URL(src);
    const parts = u.pathname.split("/").filter(Boolean);
    const filename = parts[parts.length - 1] || "image";
    // Add hash prefix to avoid collisions
    const hash = u.pathname.replace(/[^a-zA-Z0-9]/g, "").slice(0, 8);
    const ext = path.extname(filename) || ".png";
    const base = path.basename(filename, ext).slice(0, 40);
    return `${base}_${hash}${ext}`;
  } catch {
    return `image_${Date.now()}.png`;
  }
}

async function downloadImage(page, imgSrc, destPath) {
  try {
    const response = await page.request.get(imgSrc, { timeout: 15000 });
    if (response.ok()) {
      const buffer = await response.body();
      fs.writeFileSync(destPath, buffer);
      return true;
    }
  } catch (e) {
    // Silent fail
  }
  return false;
}

async function scrapePageFull(page, urlPath, section) {
  const url = BASE_URL + urlPath;
  console.log(`  Scraping: ${urlPath}`);

  await page.goto(url, { waitUntil: "networkidle", timeout: 45000 });

  // Wait for content to render
  try {
    await page.waitForFunction(
      () => {
        const body = document.body;
        return body && body.textContent.trim().length > 500;
      },
      { timeout: 10000 }
    );
  } catch {
    await page.waitForTimeout(3000);
  }

  const title = await page.title();

  // Extract content HTML and image sources
  const data = await page.evaluate((baseUrl) => {
    const main =
      document.querySelector("article") ||
      document.querySelector("[class*='markdown']") ||
      document.querySelector("[class*='content-body']") ||
      document.querySelector("main") ||
      document.body;

    // Strip nav, footer, sidebar
    const clone = main.cloneNode(true);
    const removeSelectors = ["nav", "footer", "header", "[class*='sidebar']", "[class*='nav-']", "[class*='menu']", "[class*='breadcrumb']", "[class*='toc']", "[class*='search']"];
    for (const sel of removeSelectors) {
      clone.querySelectorAll(sel).forEach((el) => el.remove());
    }

    // Collect images with resolved URLs
    const images = [];
    clone.querySelectorAll("img").forEach((img) => {
      const src = img.getAttribute("src") || img.getAttribute("data-src") || "";
      if (src && !src.startsWith("data:")) {
        try {
          const resolved = new URL(src, baseUrl).href;
          images.push(resolved);
        } catch {}
      }
    });

    return {
      html: clone.innerHTML,
      images: images,
    };
  }, url);

  // Download images into per-section assets dir
  const sectionAssetsDir = path.join(RAW_DIR, section, "_assets");
  fs.mkdirSync(sectionAssetsDir, { recursive: true });

  const imageMap = {}; // original URL → local relative path from markdown
  let downloadedCount = 0;
  for (const imgSrc of data.images) {
    const localName = imageFilename(imgSrc);
    const localPath = path.join(sectionAssetsDir, localName);
    // Relative from the markdown file's section dir to the _assets subfolder
    const relativePath = `_assets/${localName}`;

    if (fs.existsSync(localPath)) {
      imageMap[imgSrc] = relativePath;
      downloadedCount++;
    } else if (await downloadImage(page, imgSrc, localPath)) {
      imageMap[imgSrc] = relativePath;
      downloadedCount++;
    }
  }

  // Convert HTML to markdown with turndown
  let md = td.turndown(data.html);

  // Replace image URLs with local paths (handle both absolute and relative URLs)
  for (const [originalUrl, localPath] of Object.entries(imageMap)) {
    // Replace full URL
    md = md.split(originalUrl).join(localPath);
    // Also replace the relative path (turndown may output relative paths)
    try {
      const urlObj = new URL(originalUrl);
      const relativePath = urlObj.pathname;
      md = md.split(relativePath).join(localPath);
    } catch {}
  }

  // Build final document
  const frontmatter = [
    "---",
    `source_url: "${url}"`,
    `title: "${(title || "").replace(/"/g, '\\"')}"`,
    `scraped_at: "${new Date().toISOString()}"`,
    `images: ${downloadedCount}`,
    "---",
    "",
    `# ${title || urlPath.split("/").pop()}`,
    "",
    md,
  ].join("\n");

  return { title, md: frontmatter, url, images: data.images.length, downloaded: downloadedCount, imageMap };
}

async function main() {
  if (!fs.existsSync(BROWSER_DATA)) {
    console.error("ERROR: No browser session. Run scrape-login.js first.");
    process.exit(1);
  }

  // Ensure raw dir exists
  fs.mkdirSync(RAW_DIR, { recursive: true });

  const browser = await chromium.launchPersistentContext(BROWSER_DATA, {
    headless: false,
    viewport: { width: 1400, height: 900 },
    channel: "chrome",
  });

  const page = browser.pages()[0] || (await browser.newPage());

  let totalPages = 0;
  let totalImages = 0;
  let totalDownloaded = 0;

  for (const [section, urls] of Object.entries(SCRAPE_SECTIONS)) {
    const sectionDir = path.join(RAW_DIR, section);
    fs.mkdirSync(sectionDir, { recursive: true });

    console.log(`\n=== Section: ${section} (${urls.length} pages) ===`);

    // Track per-page image mappings for manifest
    const manifest = [];

    for (const urlPath of urls) {
      try {
        const result = await scrapePageFull(page, urlPath, section);
        const filename = urlToFilename(urlPath);
        const filepath = path.join(sectionDir, filename);
        fs.writeFileSync(filepath, result.md);
        totalPages++;
        totalImages += result.images;
        totalDownloaded += result.downloaded;
        console.log(
          `    OK: ${filename} (${result.md.length} chars, ${result.downloaded}/${result.images} images)`
        );

        // Track for manifest
        const pageImages = Object.entries(result.imageMap || {}).map(
          ([url, local]) => ({ url, local })
        );
        manifest.push({
          page: filename,
          source_url: BASE_URL + urlPath,
          images_found: result.images,
          images_downloaded: result.downloaded,
          files: pageImages,
        });
      } catch (e) {
        console.error(`    ERROR: ${urlPath} — ${e.message}`);
      }
    }

    // Write per-section image manifest
    const manifestPath = path.join(sectionDir, "_image-manifest.md");
    const manifestLines = [
      `# Image Manifest: ${section}`,
      "",
      `Generated: ${new Date().toISOString()}`,
      "",
      "| Page | Images Found | Downloaded | Local Files |",
      "|------|-------------|------------|-------------|",
    ];
    for (const entry of manifest) {
      const files = entry.files.map((f) => f.local).join(", ");
      manifestLines.push(
        `| ${entry.page} | ${entry.images_found} | ${entry.images_downloaded} | ${files || "—"} |`
      );
    }
    manifestLines.push("", "---", "");
    // Detailed mapping
    for (const entry of manifest) {
      if (entry.files.length > 0) {
        manifestLines.push(`## ${entry.page}`, "");
        for (const f of entry.files) {
          manifestLines.push(`- \`${f.local}\` ← ${f.url}`);
        }
        manifestLines.push("");
      }
    }
    fs.writeFileSync(manifestPath, manifestLines.join("\n"));
    console.log(`  Manifest: ${manifestPath}`);
  }

  console.log(`\n=== DONE ===`);
  console.log(`Pages scraped: ${totalPages}`);
  console.log(`Images found: ${totalImages}`);
  console.log(`Images downloaded: ${totalDownloaded}`);
  console.log(`Output: ${RAW_DIR}`);

  await browser.close();
}

main().catch((e) => {
  console.error("Fatal:", e.message);
  process.exit(1);
});
