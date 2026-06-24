/**
 * Step 2: Scrape pages from Vault Portal using saved session.
 * Uses persistent browser context (same as login) so session is preserved.
 *
 * Usage:  node scripts/scrape-pages.js <url> <output-filename>
 *   or:   node scripts/scrape-pages.js --map   (to generate sitemap)
 *
 * Output goes to raw/ directory as markdown files.
 */
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");
const { BASE_URL, BROWSER_DATA, VC_RAW_DIR, AP_RAW_DIR, SITEMAPS_DIR, resolveRawDir, urlToRelPath, urlToFilename } = require("./scrape-config");

fs.mkdirSync(VC_RAW_DIR, { recursive: true });
fs.mkdirSync(AP_RAW_DIR, { recursive: true });
fs.mkdirSync(SITEMAPS_DIR, { recursive: true });

function slugify(url) {
  // Convert URL path to a safe filename
  try {
    const u = new URL(url);
    let slug = u.pathname
      .replace(/^\/+|\/+$/g, "")
      .replace(/\//g, "_")
      .replace(/[^a-zA-Z0-9_-]/g, "");
    if (!slug) slug = "index";
    return slug;
  } catch {
    return "page_" + Date.now();
  }
}

function htmlToBasicMd(html, url) {
  // Strip scripts, styles, nav, footer
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

async function scrapePage(page, url) {
  console.log(`Navigating to: ${url}`);
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });

  // Wait for main content to load
  await page.waitForTimeout(2000);

  const title = await page.title();
  const content = await page.evaluate(() => {
    // Try to find main content area, fallback to body
    const main =
      document.querySelector("main") ||
      document.querySelector("[role='main']") ||
      document.querySelector(".content") ||
      document.querySelector("#content") ||
      document.querySelector("article") ||
      document.body;
    return main.innerHTML;
  });

  const md = htmlToBasicMd(content, url);

  // Add frontmatter
  const frontmatter = [
    "---",
    `source_url: "${url}"`,
    `title: "${title.replace(/"/g, '\\"')}"`,
    `scraped_at: "${new Date().toISOString()}"`,
    "---",
    "",
    `# ${title}`,
    "",
    md,
  ].join("\n");

  return { title, md: frontmatter, url };
}

async function getSitemap(page, baseUrl) {
  // Extract all links from the current page that belong to the same domain
  const links = await page.evaluate((base) => {
    const anchors = Array.from(document.querySelectorAll("a[href]"));
    return anchors
      .map((a) => {
        const href = a.href;
        const text = a.textContent.trim();
        return { href, text };
      })
      .filter(
        (l) =>
          l.href.startsWith(base) &&
          !l.href.includes("#") &&
          !l.href.endsWith(".pdf") &&
          !l.href.endsWith(".zip")
      );
  }, baseUrl);

  // Deduplicate
  const seen = new Set();
  return links.filter((l) => {
    if (seen.has(l.href)) return false;
    seen.add(l.href);
    return true;
  });
}

async function main() {
  const args = process.argv.slice(2);

  if (!fs.existsSync(BROWSER_DATA)) {
    console.error(
      "ERROR: No browser session found. Run scrape-login.js first."
    );
    process.exit(1);
  }

  // Use persistent context (same as login) to reuse session
  const browser = await chromium.launchPersistentContext(BROWSER_DATA, {
    headless: false,
    viewport: { width: 1400, height: 900 },
    channel: "chrome",
  });

  const page = browser.pages()[0] || (await browser.newPage());

  try {
    if (args[0] === "--map") {
      // Generate sitemap from a URL
      const url = args[1] || "https://vault-portal.thoughtmachine.net/";
      await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
      const links = await getSitemap(page, "https://vault-portal.thoughtmachine.net");

      const mapFile = path.join(SITEMAPS_DIR, "_sitemap.md");
      const lines = [
        "# Vault Portal Sitemap",
        "",
        `Generated: ${new Date().toISOString()}`,
        `Source: ${url}`,
        "",
        "| URL | Link Text |",
        "|-----|-----------|",
      ];
      for (const l of links) {
        lines.push(`| ${l.href} | ${l.text} |`);
      }
      fs.writeFileSync(mapFile, lines.join("\n"));
      console.log(`\nSitemap saved: ${mapFile}`);
      console.log(`Total links found: ${links.length}`);
    } else if (args[0] === "--map-all") {
      // Crawl multiple entry points to build comprehensive sitemap
      const entryPoints = [
        "https://vault-portal.thoughtmachine.net/",
        "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN",
        "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/product_library",
        "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/product_library/product_specifications",
        "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/product_library/release_information/downloads",
        "https://vault-portal.thoughtmachine.net/delivery-framework/latest/EN",
      ];

      const allLinks = [];
      const seen = new Set();

      for (const ep of entryPoints) {
        console.log(`\nMapping: ${ep}`);
        try {
          await page.goto(ep, { waitUntil: "networkidle", timeout: 30000 });
          await page.waitForTimeout(1500);
          const links = await getSitemap(
            page,
            "https://vault-portal.thoughtmachine.net"
          );
          for (const l of links) {
            if (!seen.has(l.href)) {
              seen.add(l.href);
              allLinks.push({ ...l, found_on: ep });
            }
          }
          console.log(`  Found ${links.length} links`);
        } catch (e) {
          console.log(`  Error: ${e.message}`);
        }
      }

      const mapFile = path.join(SITEMAPS_DIR, "_sitemap-full.md");
      const lines = [
        "# Vault Portal Full Sitemap",
        "",
        `Generated: ${new Date().toISOString()}`,
        `Entry points: ${entryPoints.length}`,
        `Total unique links: ${allLinks.length}`,
        "",
        "| # | URL | Link Text | Found On |",
        "|---|-----|-----------|----------|",
      ];
      allLinks.forEach((l, i) => {
        lines.push(
          `| ${i + 1} | ${l.href} | ${l.text.replace(/\|/g, "\\|")} | ${l.found_on} |`
        );
      });
      fs.writeFileSync(mapFile, lines.join("\n"));
      console.log(`\nFull sitemap saved: ${mapFile}`);
      console.log(`Total unique links: ${allLinks.length}`);
    } else if (args.length >= 1) {
      // Scrape single page
      const url = args[0];
      const result = await scrapePage(page, url);

      const portalPath = url.replace(BASE_URL, "");
      const relPath = urlToRelPath(portalPath);
      const filename = args[1] || urlToFilename(portalPath);
      const targetDir = path.join(resolveRawDir(portalPath), relPath);
      fs.mkdirSync(targetDir, { recursive: true });
      const filepath = path.join(targetDir, filename);
      fs.writeFileSync(filepath, result.md);
      console.log(`\nSaved: ${filepath}`);
      console.log(`Title: ${result.title}`);
      console.log(`Content length: ${result.md.length} chars`);
    } else {
      console.log("Usage:");
      console.log(
        "  node scripts/scrape-pages.js --map [url]            Generate sitemap"
      );
      console.log(
        "  node scripts/scrape-pages.js --map-all              Map all entry points"
      );
      console.log(
        "  node scripts/scrape-pages.js <url> [filename]       Scrape single page"
      );
    }
  } finally {
    await browser.close();
  }
}

main().catch((e) => {
  console.error("Error:", e.message);
  process.exit(1);
});
