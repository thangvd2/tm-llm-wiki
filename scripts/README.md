# Scripts

Utility scripts for TM LLM Wiki — scraping Vault Portal docs and managing project versions.

## Prerequisites

- **Node.js** 18+ and `npm install` (playwright, turndown, turndown-plugin-gfm)
- **Chrome** installed (Playwright uses it for headed scraping)
- **Python 3.10+** for version scripts

## Architecture

```
scripts/
├── scrape-config.js       Central config — version, paths, portal registry, CLI parsing
├── scrape-login.js        Step 1: manual login, saves browser session
├── scrape-turndown.js     Step 2: canonical scraper (dynamic discovery + turndown + images)
├── scrape-batch.js        Legacy batch scraper (basic HTML conversion, hardcoded URLs)
├── scrape-retry.js        Re-scrape thin/empty pages with better content detection
├── scrape-pages.js        Ad-hoc single-page scrape or sitemap generation
├── bump_version.py        Bump project version across all files
└── check_version_consistency.py  Verify version references are consistent
```

## Scrape Workflow

### Step 1: Login

```bash
node scripts/scrape-login.js
```

Opens Chrome to the Vault Portal. Log in manually, press ENTER to save the session to `tmp/browser-data/`.

### Step 2: Scrape

```bash
# Scrape all 7 portals at VC 5.9
node scripts/scrape-turndown.js 5.9

# Scrape only one portal
node scripts/scrape-turndown.js 5.9 --portal vault-core

# Scrape with 3 concurrent portals (WARNING: may hit rate limits)
node scripts/scrape-turndown.js 5.9 --parallel 3
```

The scraper **dynamically discovers pages** by reading each portal's left navigation. No hardcoded URL lists — new pages are picked up automatically, removed pages are dropped.

### What gets scraped

7 portal bases on the Vault Portal:

| Portal | URL pattern | Versioned? | Output folder |
|--------|-------------|------------|---------------|
| Vault Core | `/vault-core/{version}/EN` | Yes (5.8, 5.9, ...) | `raw/vault-core/{version}/` |
| Vault Payments | `/vault-payments/latest/EN` | No | `raw/vault-payments/latest-{YYYY-MM}/` |
| Additional Products | `/additional-product-offerings/latest/EN` | No | `raw/additional-products/latest-{YYYY-MM}/` |
| Policy | `/policy/latest/EN` | No | `raw/policy/latest-{YYYY-MM}/` |
| Learning | `/learning/latest/EN` | No | `raw/learning/latest-{YYYY-MM}/` |
| Partners | `/partners/latest/EN` | No | `raw/partners/latest-{YYYY-MM}/` |
| Delivery Framework | `/delivery-framework/latest/EN` | No | `raw/delivery-framework/latest-{YYYY-MM}/` |

Non-versioned portals use a date stamp (`latest-2026-06`) since the portal only exposes `/latest/`. Each scrape creates a new folder — old folders are immutable snapshots.

### Exclusions

Some VC sub-sections are excluded by default (configured in `scrape-config.js`):

- `/reference/payments_hub/`
- `/reference/workflows-tickets/`
- `/reference/contracts/contracts_api_3xx/`
- `/tutorials/workflows`
- `/survey`

### Output

Pages go directly into each portal's `rawDir` (no subfolders). Each portal gets an `_image-manifest.md` tracking downloaded images, plus an `_assets/` folder for images.

### Timing output

Every run shows per-portal progress, rate (pages/min), and a summary table:

```
[vault-core] 50/515 pages (42.1 pages/min)
[vault-core] DONE: 515 pages, 228/635 images in 12m45s

============================================================
DONE in 14m30s
============================================================
Pages scraped: 903
Rate: 62.3 pages/min

Per-portal breakdown:
  vault-core                      515 pages   228/635 images    12m45s
  additional-product-offerings    236 pages    47/152 images     5m12s
  ...
```

### Step 3: Retry failed pages (optional)

```bash
node scripts/scrape-retry.js 5.9
```

Re-scrapes pages known to be thin or empty. Uses better content detection (multiple CSS selectors, waits for render).

### Ad-hoc scraping

```bash
# Scrape a single page (auto-detects portal from URL)
node scripts/scrape-pages.js "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/some-page"

# Generate sitemaps
node scripts/scrape-pages.js 5.9 --map
node scripts/scrape-pages.js 5.9 --map-all
```

## Re-scraping for a New Version

```bash
node scripts/scrape-login.js          # login if session expired
node scripts/scrape-turndown.js 5.9   # one command, done
```

The version argument flows through `scrape-config.js` into:
- Output folder: `raw/vault-core/5.9/` (old `5.8/` untouched)
- URL paths: `/vault-core/5-9/EN/...` (auto-discovered from portal navigation)
- Filenames: version prefix stripped correctly

If no version is passed, defaults to `5.8`.

## scrape-config.js

Central config module imported by all scrape scripts. Controls:

| Setting | Source | Default |
|---------|--------|---------|
| `VC_VERSION` | CLI arg (`5.9`) | `5.8` |
| `PORTAL_FILTER` | CLI arg (`--portal vault-core`) | All 7 portals |
| `CONCURRENCY` | CLI arg (`--parallel 3`) | `1` (sequential) |
| `EXCLUDE_PATTERNS` | Hardcoded in config | payments_hub, workflows, CLv3, survey |
| `PORTALS` | Hardcoded in config | 7 portal definitions (URL segment + output path) |

To add a new portal or change exclusions, edit `scrape-config.js`.

## Version Scripts

### bump_version.py

```bash
python scripts/bump_version.py <new_version>
# Example: python scripts/bump_version.py 0.2.0
```

Updates: `VERSION` file, Python file headers, frontend file headers, `README.md`, and `package.json`.

### check_version_consistency.py

```bash
python scripts/check_version_consistency.py
```

- Exit code `0` — all versions consistent
- Exit code `1` — mismatch found (prints details)

## Notes

- All scrape scripts require `scrape-login.js` to have been run first (creates `tmp/browser-data/`).
- Scrape output goes to `raw/` which is **immutable** — never edit scraped files directly.
- The `tmp/` directory (browser session data) should not be committed to git.
- The `--parallel` flag may trigger HTTP 429 (Too Many Requests) from the Vault Portal. If this happens, use the default (sequential).
