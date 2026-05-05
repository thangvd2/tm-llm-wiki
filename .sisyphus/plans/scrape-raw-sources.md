# Scrape Raw Sources — Guideline & Plan

> **Executor**: Antigravity (Gemini)
> **Reviewer**: OpenCode/Sisyphus (GLM-5.1)
> **Date**: 2026-04-21

---

## Part 1: Scrape Guideline

### How Scraping Works

The scraping pipeline uses **Playwright** (headed Chrome) with **turndown** (HTML→Markdown) to download pages from the authenticated TM Vault Portal.

### Architecture

```
scripts/scrape-login.js      ← Step 1: Opens Chrome, user logs in manually, saves session
tmp/browser-data/            ← Persistent browser session (cookies, auth)
scripts/scrape-turndown.js   ← Step 2: Uses saved session to scrape pages
raw/{section}/               ← Output: markdown files
raw/{section}/_assets/       ← Output: downloaded images
raw/{section}/_image-manifest.md  ← Output: image mapping per section
```

### Key Script: `scrape-turndown.js`

This is the main scraper. It:
1. Launches Chrome with the saved session from `scrape-login.js`
2. Navigates to each URL in `SCRAPE_SECTIONS`
3. Waits for SPA content to render (content-aware wait: body text > 500 chars)
4. Extracts `article` / `main` content, strips nav/footer/sidebar
5. Converts HTML → Markdown using turndown with GFM tables
6. Downloads all images to `raw/{section}/_assets/`
7. Replaces image URLs in markdown with local paths
8. Adds YAML frontmatter (source_url, title, scraped_at, images count)
9. Generates `_image-manifest.md` per section

### How to Add a New Section to Scrape

Edit `scripts/scrape-turndown.js`. Find the `SCRAPE_SECTIONS` object (~line 39) and add a new key:

```javascript
const SCRAPE_SECTIONS = {
  "vault-core-overview": [ /* already done */ ],
  "smart-contracts-clv4": [ /* already done */ ],

  // ADD NEW SECTION HERE:
  "section-name": [
    "/vault-core/5-8/EN/path/to/page1",
    "/vault-core/5-8/EN/path/to/page2",
    // ... all URLs from _sitemap-full.md for this section
  ],
};
```

### URL Naming Convention

- URLs are relative to `https://vault-portal.thoughtmachine.net`
- The `urlToFilename()` function converts paths to filenames:
  - `/vault-core/5-8/EN/vault_core_overview/what_is_vault_core` → `vault_core_overview_what_is_vault_core.md`
  - Strips `/vault-core/5-8/EN/` prefix, replaces `/` with `_`

### Image Handling

- Images download to `raw/{section}/_assets/`
- Filenames: `{original-name}_{url-hash-8chars}.{ext}`
- Image manifest tracks: page → images found → downloaded → local paths
- Per-section: one `_assets/` dir, one `_image-manifest.md`

### Prerequisites

1. **Node.js** installed
2. **Playwright** installed: `npm install playwright`
3. **turndown** + **turndown-plugin-gfm** installed: `npm install turndown turndown-plugin-gfm`
4. **Authenticated session**: Run `node scripts/scrape-login.js` first, log in manually in Chrome, close browser when done

### Common Issues & Fixes

| Issue | Cause | Fix |
|-------|-------|-----|
| Pages appear empty | SPA content hasn't loaded yet | Script has content-aware wait (500+ chars). If still failing, increase timeout |
| Images not downloading | Auth expired | Re-run `scrape-login.js` |
| Tables malformed | HTML tables with complex structure | turndown-plugin-gfm handles most. Complex nested tables may need manual cleanup |
| `browser-data` not found | First run | Run `scrape-login.js` first to create session |
| Rate limiting | Too many requests | Add delay between pages (currently no delay) |

### Running a Scrape

```bash
# 1. Ensure authenticated session exists
node scripts/scrape-login.js
# (Log in manually in Chrome, then close browser)

# 2. Edit scrape-turndown.js to add new section URLs
# (edit SCRAPE_SECTIONS object)

# 3. Run the scraper
node scripts/scrape-turndown.js

# 4. Verify output
ls raw/{section-name}/
cat raw/{section-name}/_image-manifest.md
```

---

## Part 2: Scrape Plan — Remaining Sources

### Already Scraped (DO NOT re-scrape)

| Section | Pages | Images | Status |
|---------|-------|--------|--------|
| `vault-core-overview` | 10 | 29 | ✅ Done |
| `smart-contracts-clv4` | 36 | 13 | ✅ Done |

### Sections to Scrape (from `_sitemap-full.md`)

Based on the 499-URL sitemap, here are the remaining sections grouped by topic:

---

#### Batch 1: Core API Reference (~12 pages)
> **Priority**: High — core integration knowledge

| Section name | URLs (sitemap #) |
|---|---|
| `api-reference` | 125-136 |

**URLs:**
```
/vault-core/5-8/EN/api/overview
/vault-core/5-8/EN/api/core_api
/vault-core/5-8/EN/api/edge_functions_api
/vault-core/5-8/EN/api/edge_functions_api/edge_functions_streaming_api
/vault-core/5-8/EN/api/access_control_api
/vault-core/5-8/EN/api/postings_api
/vault-core/5-8/EN/api/audit_api
/vault-core/5-8/EN/api/data_loader_api
/vault-core/5-8/EN/api/workflows_api
/vault-core/5-8/EN/api/experience_layer_api
/vault-core/5-8/EN/api/payments_hub_api
```

---

#### Batch 2: Reference — Accounts, Balances, Postings, Parameters (~20 pages)
> **Priority**: High — operational reference

| Section name | URLs (sitemap #) |
|---|---|
| `ref-accounts-balances` | 138-153 |
| `ref-postings-parameters` | 229-244 |

**URLs:**
```
/vault-core/5-8/EN/reference/accounts/accounts_version_1
/vault-core/5-8/EN/reference/accounts/accounts_version_2
/vault-core/5-8/EN/reference/accounts/switching_from_v1_to_v2_accounts_api
/vault-core/5-8/EN/reference/accounts/account_attributes
/vault-core/5-8/EN/reference/accounts/high_volume_accounts
/vault-core/5-8/EN/reference/balances
/vault-core/5-8/EN/reference/balances/balance_milestone_reconciler
/vault-core/5-8/EN/reference/postings
/vault-core/5-8/EN/reference/adjustments
/vault-core/5-8/EN/reference/flags
/vault-core/5-8/EN/reference/dlq
/vault-core/5-8/EN/reference/parameters
/vault-core/5-8/EN/reference/parameters/switching_to_core_api_parameters
/vault-core/5-8/EN/reference/parameters/building_and_managing_the_parameter_value_hierarchy
/vault-core/5-8/EN/reference/parameters/using_core_api_parameters
/vault-core/5-8/EN/reference/processing_groups
/vault-core/5-8/EN/reference/calendar
/vault-core/5-8/EN/reference/scheduler
/vault-core/5-8/EN/reference/plans
/vault-core/5-8/EN/reference/policies
/vault-core/5-8/EN/reference/policies/opa-policies
/vault-core/5-8/EN/reference/policies/legacy-policies
```

---

#### Batch 3: Reference — Edge Functions (~15 pages)
> **Priority**: Medium — extension platform

| Section name | URLs (sitemap #) |
|---|---|
| `ref-edge-functions` | 212-228 |

**URLs:**
```
/vault-core/5-8/EN/reference/edge_functions/overview_and_getting_started
/vault-core/5-8/EN/reference/edge_functions/overview_and_getting_started/overview_key_features_and_benefits
/vault-core/5-8/EN/reference/edge_functions/overview_and_getting_started/installation_guide
/vault-core/5-8/EN/reference/edge_functions/overview_and_getting_started/quick_start_guide
/vault-core/5-8/EN/reference/edge_functions/overview_and_getting_started/edge_functions_code_samples
/vault-core/5-8/EN/reference/edge_functions/overview_and_getting_started/observability_and_disaster_recovery
/vault-core/5-8/EN/reference/edge_functions/overview_and_getting_started/triggers_overview
/vault-core/5-8/EN/reference/edge_functions/managing_triggers
/vault-core/5-8/EN/reference/edge_functions/sdk_reference
/vault-core/5-8/EN/reference/edge_functions/sdk_reference/edge_api_library_reference
/vault-core/5-8/EN/reference/edge_functions/sdk_reference/vc_api_library_reference
/vault-core/5-8/EN/reference/edge_functions/sample_edge_functions_download
/vault-core/5-8/EN/reference/edge_functions/allowed_imports
/vault-core/5-8/EN/reference/edge_functions/sdk_download
/vault-core/5-8/EN/reference/edge_functions/sdk_download/edge_api_library
/vault-core/5-8/EN/reference/edge_functions/sdk_download/vc_api_library
```

---

#### Batch 4: Reference — Payments Hub (~15 pages)
> **Priority**: Medium — payment processing

| Section name | URLs (sitemap #) |
|---|---|
| `ref-payments-hub` | 244-267 |

**URLs:**
```
/vault-core/5-8/EN/reference/payments_hub/working-with-the-payments-hub
/vault-core/5-8/EN/reference/payments_hub/working-with-the-payments-hub/payments
/vault-core/5-8/EN/reference/payments_hub/working-with-the-payments-hub/payments/working-with-payments
/vault-core/5-8/EN/reference/payments_hub/working-with-the-payments-hub/payments/execution-plans
/vault-core/5-8/EN/reference/payments_hub/working-with-the-payments-hub/payments/working-with-payment-reversals
/vault-core/5-8/EN/reference/payments_hub/working-with-the-payments-hub/payments/working-with-payment-actions
/vault-core/5-8/EN/reference/payments_hub/working-with-the-payments-hub/payments/using-payments-with-onus
/vault-core/5-8/EN/reference/payments_hub/working-with-the-payments-hub/payments/using-payments-with-fps
/vault-core/5-8/EN/reference/payments_hub/working-with-the-payments-hub/payments/payments_transaction_bridge
/vault-core/5-8/EN/reference/payments_hub/working-with-the-payments-hub/schemes
/vault-core/5-8/EN/reference/payments_hub/working-with-the-payments-hub/scheme-messages
/vault-core/5-8/EN/reference/payments_hub/working-with-the-payments-hub/region-uk
/vault-core/5-8/EN/reference/payments_hub/about_the_payments_hub
/vault-core/5-8/EN/reference/payments_hub/prerequisites
```

---

#### Batch 5: Reference — Workflows, Operations Dashboard (~20 pages)
> **Priority**: Medium — operational tooling

| Section name | URLs (sitemap #) |
|---|---|
| `ref-workflows` | 259-272 |
| `ref-ops-dashboard` | 273-280 |

**URLs:**
```
/vault-core/5-8/EN/reference/workflows-tickets/introduction-to-workflows
/vault-core/5-8/EN/reference/workflows-tickets/states-and-transitions
/vault-core/5-8/EN/reference/workflows-tickets/workflow-actions
/vault-core/5-8/EN/reference/workflows-tickets/workflow-auto-instantiations
/vault-core/5-8/EN/reference/workflows-tickets/workflow-state-expiry
/vault-core/5-8/EN/reference/workflows-tickets/children-workflows
/vault-core/5-8/EN/reference/workflows-tickets/tickets-from-workflows
/vault-core/5-8/EN/reference/workflows-tickets/workflow-and-ticket-uis
/vault-core/5-8/EN/reference/workflows-tickets/disabling-workflows
/vault-core/5-8/EN/reference/workflows-tickets/workflow-simulation
/vault-core/5-8/EN/reference/workflows-tickets/workflow-recovery
/vault-core/5-8/EN/reference/workflows-tickets/appendix
/vault-core/5-8/EN/reference/workflows-tickets/workflow-schema-changelogs
/vault-core/5-8/EN/reference/core_apps_and_operations_dashboard/ops_dashboard
/vault-core/5-8/EN/reference/core_apps_and_operations_dashboard/dlq_inspector
/vault-core/5-8/EN/reference/core_apps_and_operations_dashboard/vault_jobs
/vault-core/5-8/EN/reference/core_apps_and_operations_dashboard/usage_monitor
/vault-core/5-8/EN/reference/core_apps_and_operations_dashboard/vault_lookup
/vault-core/5-8/EN/reference/core_apps_and_operations_dashboard/vault_accounts
/vault-core/5-8/EN/reference/core_apps_and_operations_dashboard/processing_groups
```

---

#### Batch 6: Tutorials (~15 pages)
> **Priority**: Medium — practical guides

| Section name | URLs (sitemap #) |
|---|---|
| `tutorials` | 281-296 |

**URLs:**
```
/vault-core/5-8/EN/tutorials/smart-contracts
/vault-core/5-8/EN/tutorials/edge_functions_tutorials
/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_write_an_edge_function
/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_upload_an_edge_function
/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_update_an_edge_function
/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_write_a_unit_test_for_an_edge_function
/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_test_an_edge_function
/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_execute_an_edge_function
/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_retry_an_execution
/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_create_a_trigger
/vault-core/5-8/EN/tutorials/edge_functions_tutorials/how_to_manually_retry_triggered_operations
/vault-core/5-8/EN/tutorials/edge_functions_tutorials/troubleshooting
/vault-core/5-8/EN/tutorials/restrictions
/vault-core/5-8/EN/tutorials/postingsapi
/vault-core/5-8/EN/tutorials/workflows
/vault-core/5-8/EN/tutorials/switching_services
```

---

#### Batch 7: Product Library (~70 pages)
> **Priority**: Medium — pre-built product specs

| Section name | URLs (sitemap #) |
|---|---|
| `product-library` | 297-373 |

**URLs** (70 pages — see `_sitemap-full.md` rows 297-373 for full list). Products covered:
- BNPL, Credit Card, Current Account, Home Loan Redraw, Line of Credit, Loan, Mortgage
- Savings Account, Shariah Savings Account, Time Deposit, US Checking, US Savings, Wallet
- Common business features (account, currency, deposits, fees, interest, limits, overdraft)
- Integration guides, release notes, downloads

---

#### Batch 8: Environment & Installation (~90 pages)
> **Priority**: Low — infrastructure/deployment details

| Section name | URLs (sitemap #) |
|---|---|
| `environment-installation` | 39-124 |

**URLs** (90 pages — see `_sitemap-full.md` rows 39-124). Topics:
- Infrastructure docs (Kubernetes, Istio, Kafka, Postgres, secrets managers)
- Observability & monitoring
- SAML/OIDC authentication setup
- TMComponent Operator
- Disaster recovery, advanced deployment modes
- Migration to Vault
- SaaS deployment
- Streaming (Kafka Connect, Kafka Auth)

---

#### Batch 9: Delivery Framework (~110 pages)
> **Priority**: Low — project management methodology

| Section name | URLs (sitemap #) |
|---|---|
| `delivery-framework` | 21-23, 381-499 |

**URLs** (110+ pages). Workstreams:
- Governance, Enablement, Testing, Business
- Infrastructure, Architecture, Integrations
- Vault Core Configuration, Production Readiness
- Migration

---

### Execution Strategy

Scrape in priority order. Each batch = 1 run of `scrape-turndown.js`.

**Recommended order:**
1. **Batch 1** (API Reference) — 12 pages
2. **Batch 2** (Accounts, Balances, Postings, Parameters) — ~22 pages
3. **Batch 3** (Edge Functions) — ~16 pages
4. **Batch 4** (Payments Hub) — ~14 pages
5. **Batch 5** (Workflows, Ops Dashboard) — ~20 pages
6. **Batch 6** (Tutorials) — ~16 pages
7. **Batch 7** (Product Library) — ~70 pages
8. **Batch 8** (Environment & Installation) — ~90 pages
9. **Batch 9** (Delivery Framework) — ~110 pages

**Total remaining**: ~370 pages, ~370+ images estimated

### How to Execute Each Batch

For each batch:

1. **Edit** `scripts/scrape-turndown.js` — add/replace the section in `SCRAPE_SECTIONS`:
   ```javascript
   const SCRAPE_SECTIONS = {
     // Keep existing sections (vault-core-overview, smart-contracts-clv4) — they'll be skipped if files exist
     // Add new section:
     "api-reference": [
       "/vault-core/5-8/EN/api/overview",
       "/vault-core/5-8/EN/api/core_api",
       // ... all URLs for this batch
     ],
   };
   ```

2. **Ensure authenticated session**: Check `tmp/browser-data/` exists. If not, run `node scripts/scrape-login.js` and log in.

3. **Run scraper**: `node scripts/scrape-turndown.js`

4. **Verify output**:
   - Check `raw/{section-name}/` has the expected number of `.md` files
   - Check `raw/{section-name}/_image-manifest.md` for image counts
   - Spot-check 2-3 files for content quality (not empty, tables rendered, images local)

5. **Commit** (when ready): `git add raw/{section-name}/ && git commit -m "scrape: {section-name} ({N} pages)"`

### MUST DO

- Always ensure browser session is authenticated before scraping
- Add new sections to `SCRAPE_SECTIONS` — don't remove existing ones (they won't re-scrape if files exist)
- Verify output after each batch (file count + spot-check content)
- Keep the existing sections in `SCRAPE_SECTIONS` intact — the script processes all sections but only writes new files

### MUST NOT DO

- Do NOT modify files in `raw/vault-core-overview/` or `raw/smart-contracts-clv4/` — they're already done
- Do NOT remove existing `SCRAPE_SECTIONS` entries
- Do NOT skip the authentication check — unauthenticated scraping will get empty/login pages
- Do NOT scrape all 370 pages in one run — do batch by batch (10-20 pages per run is safest)
- Do NOT commit without verifying output first

### Skip Rules

- **Skip all CLv3 pages** (per user instruction) — sitemap #181-209 (`contracts_api_3xx/*`)
- **Skip landing/index pages** that are just link collections with no real content (like `vault_core_overview.md` — already scraped, but useful as navigation)
- **Skip survey pages** (`/survey`)
- **Skip release notes** for older versions unless specifically needed

### Files to Modify

Only one file needs modification for each batch: `scripts/scrape-turndown.js`
- Edit the `SCRAPE_SECTIONS` object (~line 39-90)
- Add the new section key and URL array
- Keep existing sections intact
