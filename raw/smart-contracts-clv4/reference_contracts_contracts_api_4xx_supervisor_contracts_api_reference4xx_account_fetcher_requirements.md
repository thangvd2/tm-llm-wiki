---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/account_fetcher_requirements"
title: "Account Fetcher Requirements"
scraped_at: "2026-04-20T18:20:44.209Z"
images: 0
---

# Account Fetcher Requirements

## [](#balances "Copy link to heading")balances

**Type:** `Dict[str, List[str]]`

Account Balances data requirements grouped by supervisee aliases. Balances data, as specified in the fetchers with the provided IDs, will be fetched and made available in a contract hook. The IDs and aliases must be unique and a fetcher with each ID must be defined in the Supervisor Contract metadata.