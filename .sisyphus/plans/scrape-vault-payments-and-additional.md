# Scrape Plan: Vault Payments + Additional Product Offerings

> **Executor**: Antigravity (Gemini)
> **Reviewer**: OpenCode/Sisyphus (GLM-5.1)
> **Date**: 2026-04-21
> **Sitemaps**: `raw/_sitemap-vault-payments.md`, `raw/_sitemap-additional-products.md`

---

## Sitemap Summary (MAPPED ✅)

### Vault Payments — 180 pages

| Section | Pages | Description |
|---------|-------|-------------|
| Introduction & Tutorials | 17 | Overview, sandbox, 14 tutorials |
| Concepts (using_vault_payments) | 23 | API, tokens, instructions/flows, routing, rules, integrations, scheduling, etc. |
| Vault Payments App | 4 | Authentication, user management, provisioning |
| API Reference | 81 | Payments API, Streaming API, Flows API (massive — payloads, schemes, cards, etc.) |
| Account to Account | 2 | Instant payments, On-Us |
| Cards | 15 | Concepts, tutorials, Mastercard, Visa DPS, 3DS |
| Configuration Library | 36 | TM Credit Transfer, TM Direct Debit, SEPA Instant TIPS, SEPA Credit Transfer |
| Release Notes | 2 | Product updates, changelog |

### Additional Product Offerings — 69 pages

| Section | Pages | Description |
|---------|-------|-------------|
| Hibernator | 14 | Overview, installation, best practices, FAQs, permissions, schedules, troubleshooting |
| Remote Access Tool | 8 | Architecture, installation, FAQs, change log |
| Vault Bridge | 46 | Concepts, console, API, environment/installation, apps (6 apps) |
| Customer Data Mastery (BETA) | 1 | Landing page |

---

## Step 1: Fix `scrape-turndown.js` for New URL Patterns

The current `urlToFilename()` (~line 92) only strips `/vault-core/5-8/EN/`. Update it:

```javascript
// REPLACE the existing urlToFilename function with:
function urlToFilename(urlPath) {
  let name = urlPath
    .replace(/^\/vault-core\/[\d-]+\/EN\//, "")
    .replace(/^\/vault-payments\/latest\/EN\//, "")
    .replace(/^\/additional-product-offerings\/latest\/EN\//, "")
    .replace(/\//g, "_")
    .replace(/[^a-zA-Z0-9_-]/g, "");
  if (!name || name.length < 3) name = "index";
  return name + ".md";
}
```

---

## Step 2: Add New Sections to `SCRAPE_SECTIONS`

Add to `scrape-turndown.js` `SCRAPE_SECTIONS` object (keep existing sections).

### Vault Payments URLs (180 pages)

```javascript
"vault-payments": [
  // Introduction & Tutorials
  "/vault-payments/latest/EN/introduction_to_vault_payments/vault_payments_overview",
  "/vault-payments/latest/EN/introduction_to_vault_payments/sandbox_quick_start",
  "/vault-payments/latest/EN/introduction_to_vault_payments/tutorials",
  "/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/submit_outbound_instant_payment",
  "/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/writing_an_instruction_flow",
  "/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/adding_unit_tests",
  "/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/adding_parameters_to_an_instruction_flow",
  "/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/create_a_rule_to_block_payments",
  "/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/setup_rule_management_resources",
  "/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/integrating_an_external_system",
  "/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/adding_a_manual_decision_to_an_instruction_flow",
  "/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/scheduling_instructions_with_a_calendar",
  "/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/integrating_a_payment_scheme",
  "/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/creating_new_dashboards",
  "/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/creating_templates",
  "/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/advanced_template_authoring",
  "/vault-payments/latest/EN/introduction_to_vault_payments/tutorials/provisioning_using_clu",
  // Concepts
  "/vault-payments/latest/EN/using_vault_payments/vault_payments_api",
  "/vault-payments/latest/EN/using_vault_payments/vault_payments_api/permission_scopes",
  "/vault-payments/latest/EN/using_vault_payments/vault_tokens",
  "/vault-payments/latest/EN/using_vault_payments/instructions_and_flows",
  "/vault-payments/latest/EN/using_vault_payments/instructions_and_flows/steps",
  "/vault-payments/latest/EN/using_vault_payments/instructions_and_flows/additional_modules",
  "/vault-payments/latest/EN/using_vault_payments/instructions_and_flows/handling_errored_instructions",
  "/vault-payments/latest/EN/using_vault_payments/routing",
  "/vault-payments/latest/EN/using_vault_payments/parameters",
  "/vault-payments/latest/EN/using_vault_payments/rules",
  "/vault-payments/latest/EN/using_vault_payments/integrations",
  "/vault-payments/latest/EN/using_vault_payments/cores",
  "/vault-payments/latest/EN/using_vault_payments/scheduling",
  "/vault-payments/latest/EN/using_vault_payments/manual_decisions",
  "/vault-payments/latest/EN/using_vault_payments/kafka_streaming",
  "/vault-payments/latest/EN/using_vault_payments/membership_directories",
  "/vault-payments/latest/EN/using_vault_payments/mandates",
  "/vault-payments/latest/EN/using_vault_payments/files",
  "/vault-payments/latest/EN/using_vault_payments/dashboards",
  "/vault-payments/latest/EN/using_vault_payments/tasks",
  "/vault-payments/latest/EN/using_vault_payments/templates",
  "/vault-payments/latest/EN/using_vault_payments/clu",
  "/vault-payments/latest/EN/using_vault_payments/instruction_batch_processing",
  // App
  "/vault-payments/latest/EN/app/authentication",
  "/vault-payments/latest/EN/app/user_access_management",
  "/vault-payments/latest/EN/app/user_provisioning",
  "/vault-payments/latest/EN/app/using_the_app",
  // API Reference (Flows API is massive)
  "/vault-payments/latest/EN/api/payments_api",
  "/vault-payments/latest/EN/api/streaming_api",
  "/vault-payments/latest/EN/api/flows",
  "/vault-payments/latest/EN/api/flows/flows_api",
  "/vault-payments/latest/EN/api/flows/flows_api/api_error_code",
  "/vault-payments/latest/EN/api/flows/flows_api/calendars",
  "/vault-payments/latest/EN/api/flows/flows_api/card/addendum",
  "/vault-payments/latest/EN/api/flows/flows_api/card/administrative",
  "/vault-payments/latest/EN/api/flows/flows_api/card/authorisation",
  "/vault-payments/latest/EN/api/flows/flows_api/card/cardmanagement",
  "/vault-payments/latest/EN/api/flows/flows_api/card/common/indicators",
  "/vault-payments/latest/EN/api/flows/flows_api/card/common",
  "/vault-payments/latest/EN/api/flows/flows_api/card/financial",
  "/vault-payments/latest/EN/api/flows/flows_api/card/inquiry",
  "/vault-payments/latest/EN/api/flows/flows_api/card/reversal",
  "/vault-payments/latest/EN/api/flows/flows_api/collections",
  "/vault-payments/latest/EN/api/flows/flows_api/common",
  "/vault-payments/latest/EN/api/flows/flows_api/constraints",
  "/vault-payments/latest/EN/api/flows/flows_api/errors",
  "/vault-payments/latest/EN/api/flows/flows_api/http",
  "/vault-payments/latest/EN/api/flows/flows_api/iban",
  "/vault-payments/latest/EN/api/flows/flows_api/identifiers",
  "/vault-payments/latest/EN/api/flows/flows_api/instruction",
  "/vault-payments/latest/EN/api/flows/flows_api/logging",
  "/vault-payments/latest/EN/api/flows/flows_api/mandates",
  "/vault-payments/latest/EN/api/flows/flows_api/membershipdirectories",
  "/vault-payments/latest/EN/api/flows/flows_api/manualdecisions",
  "/vault-payments/latest/EN/api/flows/flows_api/payloads/administrativeinitiation",
  "/vault-payments/latest/EN/api/flows/flows_api/payloads/authorisationinitiation",
  "/vault-payments/latest/EN/api/flows/flows_api/payloads/banktocustomeraccountreport",
  "/vault-payments/latest/EN/api/flows/flows_api/payloads/banktocustomerdebitcreditnotification",
  "/vault-payments/latest/EN/api/flows/flows_api/payloads/claimnonreceipt",
  "/vault-payments/latest/EN/api/flows/flows_api/payloads/common",
  "/vault-payments/latest/EN/api/flows/flows_api/payloads/creditorpaymentactivationrequest",
  "/vault-payments/latest/EN/api/flows/flows_api/payloads/creditorpaymentactivationrequeststatusreport",
  "/vault-payments/latest/EN/api/flows/flows_api/payloads/customercredittransferinitiation",
  "/vault-payments/latest/EN/api/flows/flows_api/payloads/customerdirectdebitinitiation",
  "/vault-payments/latest/EN/api/flows/flows_api/payloads/customerpaymentstatusreport",
  "/vault-payments/latest/EN/api/flows/flows_api/payloads/fileactioninitiation",
  "/vault-payments/latest/EN/api/flows/flows_api/payloads/financialinitiation",
  "/vault-payments/latest/EN/api/flows/flows_api/payloads/financialinstitutioncredittransfer",
  "/vault-payments/latest/EN/api/flows/flows_api/payloads/fitoficustomercredittransfer",
  "/vault-payments/latest/EN/api/flows/flows_api/payloads/fitoficustomerdirectdebit",
  "/vault-payments/latest/EN/api/flows/flows_api/payloads/fitofipaymentcancellationrequest",
  "/vault-payments/latest/EN/api/flows/flows_api/payloads/fitofipaymentstatusreport",
  "/vault-payments/latest/EN/api/flows/flows_api/payloads/fitofipaymentstatusrequest",
  "/vault-payments/latest/EN/api/flows/flows_api/payloads/frauddispositioninitiation",
  "/vault-payments/latest/EN/api/flows/flows_api/payloads/inquiryinitiation",
  "/vault-payments/latest/EN/api/flows/flows_api/payloads/investigationrequest",
  "/vault-payments/latest/EN/api/flows/flows_api/payloads/investigationresponse",
  "/vault-payments/latest/EN/api/flows/flows_api/payloads/mandateacceptancereport",
  "/vault-payments/latest/EN/api/flows/flows_api/payloads/mandateinitiationrequest",
  "/vault-payments/latest/EN/api/flows/flows_api/payloads/messagereject",
  "/vault-payments/latest/EN/api/flows/flows_api/payloads/paymentreturn",
  "/vault-payments/latest/EN/api/flows/flows_api/payloads/receiptacknowledgement",
  "/vault-payments/latest/EN/api/flows/flows_api/payloads/requesttomodifypayment",
  "/vault-payments/latest/EN/api/flows/flows_api/payloads/resolutionofinvestigation",
  "/vault-payments/latest/EN/api/flows/flows_api/payloads/reversalinitiation",
  "/vault-payments/latest/EN/api/flows/flows_api/payloads/systemeventnotification",
  "/vault-payments/latest/EN/api/flows/flows_api/postinginstruction",
  "/vault-payments/latest/EN/api/flows/flows_api/ranges",
  "/vault-payments/latest/EN/api/flows/flows_api/reasoncodes",
  "/vault-payments/latest/EN/api/flows/flows_api/retry",
  "/vault-payments/latest/EN/api/flows/flows_api/routing",
  "/vault-payments/latest/EN/api/flows/flows_api/sequences",
  "/vault-payments/latest/EN/api/flows/flows_api/test",
  "/vault-payments/latest/EN/api/flows/flows_api/schemes/eu/tips",
  "/vault-payments/latest/EN/api/flows/flows_api/schemes/eu/tips/common",
  "/vault-payments/latest/EN/api/flows/flows_api/schemes/eu/tips/customer_credit_transfer_initiation",
  "/vault-payments/latest/EN/api/flows/flows_api/schemes/eu/tips/customer_payment_status_report",
  "/vault-payments/latest/EN/api/flows/flows_api/schemes/eu/tips/fi_to_fi_customer_credit_transfer",
  "/vault-payments/latest/EN/api/flows/flows_api/schemes/eu/tips/fi_to_fi_payment_cancellation_request",
  "/vault-payments/latest/EN/api/flows/flows_api/schemes/eu/tips/fi_to_fi_payment_status_report",
  "/vault-payments/latest/EN/api/flows/flows_api/schemes/eu/tips/fi_to_fi_payment_status_request",
  "/vault-payments/latest/EN/api/flows/flows_api/schemes/eu/tips/payment_return",
  "/vault-payments/latest/EN/api/flows/flows_api/schemes/eu/tips/resolution_of_investigation",
  "/vault-payments/latest/EN/api/flows/python_subset",
  "/vault-payments/latest/EN/api/flows/sdk_download",
  "/vault-payments/latest/EN/api/openmetrics_api",
  "/vault-payments/latest/EN/api/aggregations",
  "/vault-payments/latest/EN/api/search_query_language",
  // Account to Account
  "/vault-payments/latest/EN/account_to_account/tminstant_a2a",
  "/vault-payments/latest/EN/account_to_account/tmonus_a2a",
  // Cards
  "/vault-payments/latest/EN/cards/concepts",
  "/vault-payments/latest/EN/cards/tutorials",
  "/vault-payments/latest/EN/cards/tutorials/set_up_and_issue_a_virtual_card",
  "/vault-payments/latest/EN/cards/tutorials/link_a_card_to_an_account",
  "/vault-payments/latest/EN/cards/tutorials/activate_a_card",
  "/vault-payments/latest/EN/cards/tutorials/make_a_card_payment",
  "/vault-payments/latest/EN/cards/tutorials/freeze_and_unfreeze_a_card",
  "/vault-payments/latest/EN/cards/tutorials/encryption",
  "/vault-payments/latest/EN/cards/tutorials/set_up_a_card_product",
  "/vault-payments/latest/EN/cards/mastercard",
  "/vault-payments/latest/EN/cards/mastercard/report",
  "/vault-payments/latest/EN/cards/3ds",
  "/vault-payments/latest/EN/cards/reference",
  "/vault-payments/latest/EN/cards/reference/decline_recommendations",
  "/vault-payments/latest/EN/cards/visa_dps",
  // Configuration Library
  "/vault-payments/latest/EN/configuration_library/example",
  "/vault-payments/latest/EN/configuration_library/example/tm_credit_transfer",
  "/vault-payments/latest/EN/configuration_library/example/tm_credit_transfer/scheme_overview",
  "/vault-payments/latest/EN/configuration_library/example/tm_credit_transfer/inbound_journeys",
  "/vault-payments/latest/EN/configuration_library/example/tm_credit_transfer/outbound_journeys",
  "/vault-payments/latest/EN/configuration_library/example/tm_credit_transfer/changelog",
  "/vault-payments/latest/EN/configuration_library/example/tm_credit_transfer/tutorials",
  "/vault-payments/latest/EN/configuration_library/example/tm_credit_transfer/tutorials/process_inbound_credit_transfers",
  "/vault-payments/latest/EN/configuration_library/example/tm_credit_transfer/tutorials/return_inbound_credit_transfers",
  "/vault-payments/latest/EN/configuration_library/example/tm_credit_transfer/tutorials/send_outbound_credit_transfers",
  "/vault-payments/latest/EN/configuration_library/example/tm_direct_debit",
  "/vault-payments/latest/EN/configuration_library/example/tm_direct_debit/scheme_overview",
  "/vault-payments/latest/EN/configuration_library/example/tm_direct_debit/inbound_collection_journeys",
  "/vault-payments/latest/EN/configuration_library/example/tm_direct_debit/outbound_collection_journeys",
  "/vault-payments/latest/EN/configuration_library/example/tm_direct_debit/mandate_issuance_journeys",
  "/vault-payments/latest/EN/configuration_library/example/tm_direct_debit/changelog",
  "/vault-payments/latest/EN/configuration_library/example/tm_direct_debit/tutorials",
  "/vault-payments/latest/EN/configuration_library/example/tm_direct_debit/tutorials/issue_a_mandate",
  "/vault-payments/latest/EN/configuration_library/example/tm_direct_debit/tutorials/send_an_outbound_collection",
  "/vault-payments/latest/EN/configuration_library/europe",
  "/vault-payments/latest/EN/configuration_library/europe/sepa_instant_tips",
  "/vault-payments/latest/EN/configuration_library/europe/sepa_instant_tips/inbound_payment_journeys",
  "/vault-payments/latest/EN/configuration_library/europe/sepa_instant_tips/outbound_payment_journeys",
  "/vault-payments/latest/EN/configuration_library/europe/sepa_instant_tips/inbound_payment_recall_journeys",
  "/vault-payments/latest/EN/configuration_library/europe/sepa_instant_tips/outbound_payment_recall_journeys",
  "/vault-payments/latest/EN/configuration_library/europe/sepa_instant_tips/outbound_payment_status_request_journeys",
  "/vault-payments/latest/EN/configuration_library/europe/sepa_instant_tips/connecting_to_tips_via_swift_agi_gateway",
  "/vault-payments/latest/EN/configuration_library/europe/sepa_instant_tips/working_with_tips_membership_directory",
  "/vault-payments/latest/EN/configuration_library/europe/sepa_instant_tips/change_log",
  "/vault-payments/latest/EN/configuration_library/europe/sepa_credit_transfer",
  "/vault-payments/latest/EN/configuration_library/europe/sepa_credit_transfer/scheme_overview",
  "/vault-payments/latest/EN/configuration_library/europe/sepa_credit_transfer/inbound_journeys",
  "/vault-payments/latest/EN/configuration_library/europe/sepa_credit_transfer/outbound_journeys",
  "/vault-payments/latest/EN/configuration_library/europe/sepa_credit_transfer/inbound_recall_journeys",
  "/vault-payments/latest/EN/configuration_library/europe/sepa_credit_transfer/outbound_recall_journeys",
  "/vault-payments/latest/EN/configuration_library/europe/sepa_credit_transfer/changelog",
  // Release Notes
  "/vault-payments/latest/EN/release_notes/product_updates",
  "/vault-payments/latest/EN/release_notes/changelog",
],
```

### Additional Products URLs (69 pages)

```javascript
"additional-products": [
  // Hibernator
  "/additional-product-offerings/latest/EN/hibernator",
  "/additional-product-offerings/latest/EN/hibernator/overview",
  "/additional-product-offerings/latest/EN/hibernator/overview/installation",
  "/additional-product-offerings/latest/EN/hibernator/overview/overview",
  "/additional-product-offerings/latest/EN/hibernator/best_practices",
  "/additional-product-offerings/latest/EN/hibernator/faqs",
  "/additional-product-offerings/latest/EN/hibernator/permissions",
  "/additional-product-offerings/latest/EN/hibernator/product_description",
  "/additional-product-offerings/latest/EN/hibernator/release_notes",
  "/additional-product-offerings/latest/EN/hibernator/schedule_types",
  "/additional-product-offerings/latest/EN/hibernator/troubleshooting",
  "/additional-product-offerings/latest/EN/hibernator/uninstalling_hibernator",
  "/additional-product-offerings/latest/EN/hibernator/vulnerability_reports/1.0/vulnerability_report",
  "/additional-product-offerings/latest/EN/hibernator/vulnerability_reports/1.1/vulnerability_report",
  // Remote Access Tool
  "/additional-product-offerings/latest/EN/remote-access-tool",
  "/additional-product-offerings/latest/EN/remote-access-tool/about_this_guide",
  "/additional-product-offerings/latest/EN/remote-access-tool/architecture_overview",
  "/additional-product-offerings/latest/EN/remote-access-tool/change_log",
  "/additional-product-offerings/latest/EN/remote-access-tool/faqs",
  "/additional-product-offerings/latest/EN/remote-access-tool/installation_guide",
  "/additional-product-offerings/latest/EN/remote-access-tool/product_description",
  "/additional-product-offerings/latest/EN/remote-access-tool/vulnerability_reports/master/vulnerability_report",
  // Vault Bridge
  "/additional-product-offerings/latest/EN/vault-bridge",
  "/additional-product-offerings/latest/EN/vault-bridge/concepts",
  "/additional-product-offerings/latest/EN/vault-bridge/concepts/vault_bridge_overview",
  "/additional-product-offerings/latest/EN/vault-bridge/concepts/integrations",
  "/additional-product-offerings/latest/EN/vault-bridge/concepts/console",
  "/additional-product-offerings/latest/EN/vault-bridge/concepts/console/authentication",
  "/additional-product-offerings/latest/EN/vault-bridge/concepts/console/roles",
  "/additional-product-offerings/latest/EN/vault-bridge/api",
  "/additional-product-offerings/latest/EN/vault-bridge/api/overview",
  "/additional-product-offerings/latest/EN/vault-bridge/api/overview/permission_scopes",
  "/additional-product-offerings/latest/EN/vault-bridge/api/bridge_api",
  "/additional-product-offerings/latest/EN/vault-bridge/api/integrations_http_proxy",
  "/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation",
  "/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/overview",
  "/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/surrounding_infrastructure",
  "/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/surrounding_infrastructure/requirements_for_cloud_providers",
  "/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/surrounding_infrastructure/configuring_kubernetes",
  "/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/surrounding_infrastructure/istio",
  "/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/surrounding_infrastructure/secrets_manager",
  "/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/surrounding_infrastructure/relational_database",
  "/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/surrounding_infrastructure/observability",
  "/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/bridge_infrastructure",
  "/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/bridge_infrastructure/object_storage",
  "/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/bridge_infrastructure/sensitive_data",
  "/additional-product-offerings/latest/EN/vault-bridge/environment_and_installation/bridge_installation",
  "/additional-product-offerings/latest/EN/vault-bridge/applications",
  "/additional-product-offerings/latest/EN/vault-bridge/applications/application-installation",
  "/additional-product-offerings/latest/EN/vault-bridge/applications/application-updates-rollbacks",
  "/additional-product-offerings/latest/EN/vault-bridge/applications/product-management",
  "/additional-product-offerings/latest/EN/vault-bridge/applications/product-management/installation",
  "/additional-product-offerings/latest/EN/vault-bridge/applications/product-management/releases",
  "/additional-product-offerings/latest/EN/vault-bridge/applications/accounts",
  "/additional-product-offerings/latest/EN/vault-bridge/applications/accounts/installation",
  "/additional-product-offerings/latest/EN/vault-bridge/applications/accounts/releases",
  "/additional-product-offerings/latest/EN/vault-bridge/applications/dlq-inspector",
  "/additional-product-offerings/latest/EN/vault-bridge/applications/dlq-inspector/installation",
  "/additional-product-offerings/latest/EN/vault-bridge/applications/dlq-inspector/releases",
  "/additional-product-offerings/latest/EN/vault-bridge/applications/jobs",
  "/additional-product-offerings/latest/EN/vault-bridge/applications/jobs/installation",
  "/additional-product-offerings/latest/EN/vault-bridge/applications/jobs/releases",
  "/additional-product-offerings/latest/EN/vault-bridge/applications/processing-groups",
  "/additional-product-offerings/latest/EN/vault-bridge/applications/processing-groups/installation",
  "/additional-product-offerings/latest/EN/vault-bridge/applications/processing-groups/releases",
  "/additional-product-offerings/latest/EN/vault-bridge/applications/usage",
  "/additional-product-offerings/latest/EN/vault-bridge/applications/usage/installation",
  "/additional-product-offerings/latest/EN/vault-bridge/applications/usage/releases",
  // Customer Data Mastery (BETA)
  "/additional-product-offerings/latest/EN/customer-data-mastery",
],
```

---

## Step 3: Run Scraper (2 Separate Runs)

**IMPORTANT**: 180 + 69 = 249 pages is too many for one run. Split into separate runs:

### Run 1: Additional Products (~69 pages) — smaller, do first
- Only add `"additional-products"` to `SCRAPE_SECTIONS`
- Comment out `"vault-core-overview"` and `"smart-contracts-clv4"` to avoid re-scraping
- Run: `node scripts/scrape-turndown.js`
- Verify: `raw/additional-products/` should have ~69 md files

### Run 2: Vault Payments (~180 pages) — larger
- Replace `"additional-products"` with `"vault-payments"` in `SCRAPE_SECTIONS`
- Run: `node scripts/scrape-turndown.js`
- Verify: `raw/vault-payments/` should have ~180 md files

---

## Step 4: Verify Output

For each section:
- [ ] File count matches expected URL count (±2 for landing pages)
- [ ] `_image-manifest.md` generated
- [ ] Spot-check 3-4 files for content quality (not empty, tables OK, images local)
- [ ] No empty files (< 100 chars = likely auth expired or page didn't load)

---

## MUST DO

1. Fix `urlToFilename()` first (Step 1)
2. Run in 2 separate batches — don't try 249 pages at once
3. Verify auth session before each run
4. Keep existing SCRAPE_SECTIONS entries (just comment out to skip re-scraping)
5. Verify output after each run

## MUST NOT DO

1. Do NOT modify `raw/vault-core-overview/` or `raw/smart-contracts-clv4/`
2. Do NOT run all 249 pages in one batch
3. Do NOT skip `urlToFilename()` fix — filenames will be wrong
4. Do NOT scrape if browser session expired (re-run `scrape-login.js` first)
