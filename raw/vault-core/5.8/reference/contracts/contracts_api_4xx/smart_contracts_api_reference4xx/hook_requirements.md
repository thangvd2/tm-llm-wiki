---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/contracts/contracts_api_4xx/smart_contracts_api_reference4xx/hook_requirements"
title: "Hook Requirements"
scraped_at: "2026-06-17T15:40:14.008Z"
images: 0
---

# Hook Requirements

## [](#calendar "Copy link to heading")calendar

**Type:** `List[str]`

Calendar events of specified calendars within the time window \[`effective_datetime` - 3 months, `effective_datetime` + 3 months) will be fetched and available in a contract hook.

## [](#flags "Copy link to heading")flags

**Type:** `bool`

Full historical account and customer flags timeseries data will be fetched and available in a contract hook.

## [](#last_execution_datetime "Copy link to heading")last\_execution\_datetime

**Type:** `List[str]`

Last execution datetime for requested event\_type(s) will be fetched and available in a contract hook.

## [](#parameters "Copy link to heading")parameters

**Type:** `bool`

Full historical contract parameter timeseries data (up until `effective_datetime`) will be fetched and available in a contract hook; however, converting an Account to a new product version will mean that the Account can only retrieve the Template Parameter history of the *new* product version.