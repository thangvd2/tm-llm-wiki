/**
 * Canonical scraper with turndown (proper tables) + image downloading.
 * Discovers pages dynamically from portal navigation.
 *
 * Usage:
 *   node scripts/scrape-turndown.js [version] [--portal name] [--parallel N]
 *
 * Examples:
 *   node scripts/scrape-turndown.js 5.9
 *   node scripts/scrape-turndown.js 5.9 --portal vault-core
 *   node scripts/scrape-turndown.js 5.9 --parallel 3
 */
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");
const TurndownService = require("turndown");
const turndownPluginGfm = require("turndown-plugin-gfm");
const {
  BASE_URL,
  BROWSER_DATA,
  PORTALS,
  SCRAPE_PORTALS,
  CONCURRENCY,
  EXCLUDE_PATTERNS,
  VC_RAW_DIR,
  AP_RAW_DIR,
  detectPortal,
} = require("./scrape-config");

const td = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
  emDelimiter: "*",
  strongDelimiter: "**",
});
const { gfm } = turndownPluginGfm;
td.use(gfm);

td.addRule("codeblock", {
  filter: ["pre"],
  replacement: function (content, node) {
    const code = node.querySelector("code");
    const lang = code ? (code.className || "").replace("language-", "").replace("highlight-", "") : "";
    return `\n\`\`\`${lang}\n${content.trim()}\n\`\`\`\n`;
  },
});

function fmtDuration(ms) {
  if (ms < 1000) return ms + "ms";
  if (ms < 60000) return (ms / 1000).toFixed(1) + "s";
  const m = Math.floor(ms / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  return `${m}m${s}s`;
}

function urlToFilename(urlPath) {
  let name = urlPath;
  for (const portal of Object.values(PORTALS)) {
    name = name.replace(new RegExp("^" + portal.urlSegment + "/?"), "");
  }
  name = name.replace(/\//g, "_").replace(/[^a-zA-Z0-9_-]/g, "");
  if (!name || name.length < 3) name = "index";
  return name + ".md";
}

function imageFilename(src) {
  try {
    const u = new URL(src);
    const parts = u.pathname.split("/").filter(Boolean);
    const filename = parts[parts.length - 1] || "image";
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
    const base64 = await page.evaluate(async (url) => {
      const response = await fetch(url);
      if (!response.ok) return { status: response.status, data: null };
      const blob = await response.blob();
      const reader = new FileReader();
      return new Promise((resolve) => {
        reader.onloadend = () => resolve({ status: 200, data: reader.result.split(",")[1] });
        reader.readAsDataURL(blob);
      });
    }, imgSrc);

    if (base64 && base64.data) {
      fs.writeFileSync(destPath, Buffer.from(base64.data, "base64"));
      return true;
    }
  } catch (e) {
  }
  return false;
}

async function discoverPagesForPortal(page, portalName) {
  const portal = PORTALS[portalName];
  if (!portal) return [];

  const baseUrl = BASE_URL + portal.urlSegment;
  await page.goto(baseUrl, { waitUntil: "networkidle", timeout: 45000 });
  await page.waitForTimeout(2000);

  const links = await page.evaluate((prefix) => {
    const seen = new Set();
    const results = [];
    for (const a of document.querySelectorAll("a[href]")) {
      let href = a.getAttribute("href") || "";
      if (href.startsWith(prefix) && !href.includes("#")) {
        if (!seen.has(href)) {
          seen.add(href);
          results.push(href);
        }
      }
    }
    return results;
  }, portal.urlSegment);

  return links.filter((u) => !EXCLUDE_PATTERNS.some((p) => u.includes(p)));
}

async function scrapePageFull(page, urlPath, sectionDir) {
  const url = BASE_URL + urlPath;
  await page.goto(url, { waitUntil: "networkidle", timeout: 45000 });

  try {
    await page.waitForFunction(
      () => document.body && document.body.textContent.trim().length > 500,
      { timeout: 10000 }
    );
  } catch {
    await page.waitForTimeout(3000);
  }

  const title = await page.title();

  const data = await page.evaluate((baseUrl) => {
    const main =
      document.querySelector("article") ||
      document.querySelector("[class*='markdown']") ||
      document.querySelector("[class*='content-body']") ||
      document.querySelector("main") ||
      document.body;

    const clone = main.cloneNode(true);
    for (const sel of ["nav", "footer", "header", "[class*='sidebar']", "[class*='nav-']", "[class*='menu']", "[class*='breadcrumb']", "[class*='toc']", "[class*='search']"]) {
      clone.querySelectorAll(sel).forEach((el) => el.remove());
    }

    const images = [];
    clone.querySelectorAll("img").forEach((img) => {
      const src = img.getAttribute("src") || img.getAttribute("data-src") || "";
      if (src && !src.startsWith("data:")) {
        try { images.push(new URL(src, baseUrl).href); } catch {}
      }
    });

    return { html: clone.innerHTML, images };
  }, url);

  const sectionAssetsDir = path.join(sectionDir, "_assets");
  fs.mkdirSync(sectionAssetsDir, { recursive: true });

  const imageMap = {};
  let downloadedCount = 0;
  for (const imgSrc of data.images) {
    const localName = imageFilename(imgSrc);
    const localPath = path.join(sectionAssetsDir, localName);
    const relativePath = `_assets/${localName}`;

    if (fs.existsSync(localPath)) {
      imageMap[imgSrc] = relativePath;
      downloadedCount++;
    } else if (await downloadImage(page, imgSrc, localPath)) {
      imageMap[imgSrc] = relativePath;
      downloadedCount++;
    }
  }

  let md = td.turndown(data.html);
  for (const [originalUrl, localPath] of Object.entries(imageMap)) {
    md = md.split(originalUrl).join(localPath);
    try {
      md = md.split(new URL(originalUrl).pathname).join(localPath);
    } catch {}
  }

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

async function scrapePortal(browser, portalName) {
  const portal = PORTALS[portalName];
  if (!portal) return { portal: portalName, pages: 0, images: 0, downloaded: 0, duration: 0, error: "unknown portal" };

  const sectionDir = portal.rawDir;
  fs.mkdirSync(sectionDir, { recursive: true });

  const page = await browser.newPage();
  const portalStart = Date.now();

  console.log(`\n[${portalName}] Discovering pages...`);
  const discoverStart = Date.now();
  const urls = await discoverPagesForPortal(page, portalName);
  const discoverMs = Date.now() - discoverStart;
  console.log(`[${portalName}] Found ${urls.length} pages (${fmtDuration(discoverMs)})`);

  let totalPages = 0;
  let totalImages = 0;
  let totalDownloaded = 0;
  const manifest = [];

  for (const urlPath of urls) {
    try {
      const result = await scrapePageFull(page, urlPath, sectionDir);
      const filename = urlToFilename(urlPath);
      fs.writeFileSync(path.join(sectionDir, filename), result.md);
      totalPages++;
      totalImages += result.images;
      totalDownloaded += result.downloaded;

      if (totalPages % 50 === 0) {
        const elapsed = Date.now() - portalStart;
        const rate = (totalPages / (elapsed / 60000)).toFixed(1);
        console.log(`[${portalName}] ${totalPages}/${urls.length} pages (${rate} pages/min)`);
      }

      manifest.push({
        page: filename,
        source_url: BASE_URL + urlPath,
        images_found: result.images,
        images_downloaded: result.downloaded,
        files: Object.entries(result.imageMap || {}).map(([url, local]) => ({ url, local })),
      });
    } catch (e) {
      console.error(`[${portalName}] ERROR: ${urlPath} — ${e.message}`);
    }
  }

  const manifestPath = path.join(sectionDir, "_image-manifest.md");
  const manifestLines = [
    `# Image Manifest: ${portalName}`,
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    "| Page | Images Found | Downloaded | Local Files |",
    "|------|-------------|------------|-------------|",
  ];
  for (const entry of manifest) {
    const files = entry.files.map((f) => f.local).join(", ");
    manifestLines.push(`| ${entry.page} | ${entry.images_found} | ${entry.images_downloaded} | ${files || "—"} |`);
  }
  fs.writeFileSync(manifestPath, manifestLines.join("\n"));

  const duration = Date.now() - portalStart;
  console.log(`[${portalName}] DONE: ${totalPages} pages, ${totalDownloaded}/${totalImages} images in ${fmtDuration(duration)}`);

  await page.close();
  return { portal: portalName, pages: totalPages, images: totalImages, downloaded: totalDownloaded, duration };
}

async function runParallel(browser, items, concurrency, fn) {
  const results = [];
  let index = 0;

  async function worker() {
    while (index < items.length) {
      const current = items[index++];
      try {
        const result = await fn(browser, current);
        results.push(result);
      } catch (e) {
        console.error(`[${current}] FATAL: ${e.message}`);
        results.push({ portal: current, pages: 0, images: 0, downloaded: 0, duration: 0, error: e.message });
      }
    }
  }

  const workers = [];
  for (let i = 0; i < Math.min(concurrency, items.length); i++) {
    workers.push(worker());
  }
  await Promise.all(workers);
  return results;
}

async function main() {
  if (!fs.existsSync(BROWSER_DATA)) {
    console.error("ERROR: No browser session. Run scrape-login.js first.");
    process.exit(1);
  }

  const scriptStart = Date.now();
  console.log(`Portals: ${SCRAPE_PORTALS.join(", ")}`);
  console.log(`Concurrency: ${CONCURRENCY}`);

  const browser = await chromium.launchPersistentContext(BROWSER_DATA, {
    headless: false,
    viewport: { width: 1400, height: 900 },
    channel: "chrome",
  });

  const results = await runParallel(browser, SCRAPE_PORTALS, CONCURRENCY, scrapePortal);

  await browser.close();

  const totalDuration = Date.now() - scriptStart;
  const totalPages = results.reduce((s, r) => s + r.pages, 0);
  const totalImages = results.reduce((s, r) => s + r.images, 0);
  const totalDownloaded = results.reduce((s, r) => s + r.downloaded, 0);

  console.log(`\n${"=".repeat(60)}`);
  console.log(`DONE in ${fmtDuration(totalDuration)}`);
  console.log(`${"=".repeat(60)}`);
  console.log(`Pages scraped: ${totalPages}`);
  console.log(`Images found: ${totalImages}`);
  console.log(`Images downloaded: ${totalDownloaded}`);
  console.log(`Rate: ${(totalPages / (totalDuration / 60000)).toFixed(1)} pages/min`);
  console.log(`VC output: ${VC_RAW_DIR}`);
  console.log(`AP output: ${AP_RAW_DIR}`);
  console.log(`\nPer-portal breakdown:`);
  for (const r of results) {
    const rate = r.duration > 0 ? (r.pages / (r.duration / 60000)).toFixed(1) : "0";
    console.log(`  ${r.portal.padEnd(30)} ${String(r.pages).padStart(4)} pages  ${String(r.downloaded).padStart(4)}/${r.images} images  ${fmtDuration(r.duration).padStart(8)}  (${rate} p/m)${r.error ? "  ERROR: " + r.error : ""}`);
  }
}

main().catch((e) => {
  console.error("Fatal:", e.message);
  process.exit(1);
});
