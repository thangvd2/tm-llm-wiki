const path = require("path");

const versionArg = process.argv.find((a) => /^\d+\.\d+$/.test(a));
const VC_VERSION = versionArg || "5.8";
const VC_VERSION_URL = VC_VERSION.replace(".", "-");
const DATE_STAMP = new Date().toISOString().slice(0, 7);

const portalIdx = process.argv.indexOf("--portal");
const PORTAL_FILTER = portalIdx >= 0 ? process.argv[portalIdx + 1] : null;

const parallelIdx = process.argv.indexOf("--parallel");
const CONCURRENCY = parallelIdx >= 0 ? parseInt(process.argv[parallelIdx + 1]) || 1 : 1;

const EXCLUDE_PATTERNS = [
  "/reference/payments_hub/",
  "/reference/workflows-tickets/",
  "/reference/contracts/contracts_api_3xx/",
  "/tutorials/workflows",
  "/survey",
];

const ROOT = path.join(__dirname, "..");
const RAW_DIR = path.join(ROOT, "raw");
const SITEMAPS_DIR = path.join(RAW_DIR, "_sitemaps");
const BROWSER_DATA = path.join(ROOT, "tmp", "browser-data");
const BASE_URL = "https://vault-portal.thoughtmachine.net";

const PORTALS = {
  "vault-core": {
    versioned: true,
    urlSegment: "/vault-core/" + VC_VERSION_URL + "/EN",
    rawDir: path.join(RAW_DIR, "vault-core", VC_VERSION),
  },
  "vault-payments": {
    versioned: false,
    urlSegment: "/vault-payments/latest/EN",
    rawDir: path.join(RAW_DIR, "vault-payments", "latest-" + DATE_STAMP),
  },
  "additional-product-offerings": {
    versioned: false,
    urlSegment: "/additional-product-offerings/latest/EN",
    rawDir: path.join(RAW_DIR, "additional-products", "latest-" + DATE_STAMP),
  },
  "policy": {
    versioned: false,
    urlSegment: "/policy/latest/EN",
    rawDir: path.join(RAW_DIR, "policy", "latest-" + DATE_STAMP),
  },
  "learning": {
    versioned: false,
    urlSegment: "/learning/latest/EN",
    rawDir: path.join(RAW_DIR, "learning", "latest-" + DATE_STAMP),
  },
  "partners": {
    versioned: false,
    urlSegment: "/partners/latest/EN",
    rawDir: path.join(RAW_DIR, "partners", "latest-" + DATE_STAMP),
  },
  "delivery-framework": {
    versioned: false,
    urlSegment: "/delivery-framework/latest/EN",
    rawDir: path.join(RAW_DIR, "delivery-framework", "latest-" + DATE_STAMP),
  },
};

const VC_RAW_DIR = PORTALS["vault-core"].rawDir;
const AP_RAW_DIR = PORTALS["additional-product-offerings"].rawDir;
const VC_URL_PREFIX = PORTALS["vault-core"].urlSegment;

const SCRAPE_PORTALS = PORTAL_FILTER
  ? [PORTAL_FILTER]
  : Object.keys(PORTALS);

function detectPortal(urlPath) {
  for (const [name, portal] of Object.entries(PORTALS)) {
    if (urlPath.startsWith("/" + name + "/") || urlPath.includes("/" + name + "/")) {
      return name;
    }
  }
  return null;
}

function stripPortalPrefix(urlPath) {
  for (const portal of Object.values(PORTALS)) {
    const stripped = urlPath.replace(new RegExp("^" + portal.urlSegment + "/?"), "");
    if (stripped !== urlPath) return stripped;
  }
  return urlPath;
}

function urlToRelPath(urlPath) {
  const segments = stripPortalPrefix(urlPath).split("/").filter(Boolean);
  if (segments.length <= 1) return "";
  return segments.slice(0, -1).join("/") + "/";
}

function urlToFilename(urlPath) {
  const segments = stripPortalPrefix(urlPath).split("/").filter(Boolean);
  const last = (segments[segments.length - 1] || "index").replace(/[^a-zA-Z0-9_-]/g, "");
  return (last.length < 3 ? "index" : last) + ".md";
}

function resolveVersionUrls(sections) {
  const resolved = {};
  for (const [section, urls] of Object.entries(sections)) {
    if (PORTAL_FILTER) {
      const portal = detectPortal(urls[0] || "");
      if (portal !== PORTAL_FILTER) continue;
    }
    resolved[section] = urls.map((u) => {
      const portal = detectPortal(u);
      if (portal && PORTALS[portal].versioned) {
        return u.replace(
          new RegExp("^/" + portal + "/[^/]+/EN"),
          PORTALS[portal].urlSegment
        );
      }
      return u;
    });
  }
  return resolved;
}

function resolveRawDir(url) {
  const portal = detectPortal(url);
  if (portal) return PORTALS[portal].rawDir;
  return VC_RAW_DIR;
}

module.exports = {
  VC_VERSION,
  VC_VERSION_URL,
  VC_URL_PREFIX,
  DATE_STAMP,
  PORTALS,
  PORTAL_FILTER,
  SCRAPE_PORTALS,
  CONCURRENCY,
  EXCLUDE_PATTERNS,
  RAW_DIR,
  VC_RAW_DIR,
  AP_RAW_DIR,
  SITEMAPS_DIR,
  BROWSER_DATA,
  BASE_URL,
  resolveVersionUrls,
  resolveRawDir,
  detectPortal,
  urlToRelPath,
  urlToFilename,
};
