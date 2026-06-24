---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/reference/contracts/contracts_api_4xx/supervisor_contracts_api_reference4xx/hook_requirements"
title: "Hook Requirements"
scraped_at: "2026-06-22T19:17:43.755Z"
images: 0
---

# Hook Requirements

## [](#balances "Copy link to heading")balances

**Type:** `str`

**Allowed Quantity Units:** `day, month, year, latest, live`

**Only allowed with additional requirements:** `data_scope:` all, invoked

Historical data requirements: specified amount of Account balances data points will be retrieved and will be available in a Contract Hook. This requirement is only supported for supervisee data.

## [](#calendar "Copy link to heading")calendar

**Type:** `List[str]`

Calendar events of specified calendars within the time window \[`effective_datetime` - 3 months, `effective_datetime` + 3 months) will be fetched and available in a contract hook.

## [](#data_scope "Copy link to heading")data\_scope

**Type:** `str`

**Allowed Quantity Units:** `own, all, invoked`

**Unit hook restrictions:**       `invoked`: Only supported in `post_posting_hook`, `pre_posting_hook`

Defines the scope of the historical data that are required for the Hook execution. If set to 'own', only Plan data will be retrieved. If set to 'all', both Plan and supervised Accounts data will be available to the Supervisor Contract Hook. If set to 'invoked', the Plan and the relevant supervised Account data will be passed into the supervisor execution. If not set, defaults to 'own'.

## [](#flags "Copy link to heading")flags

**Type:** `bool`

**Only allowed with additional requirements:** `data_scope:` all, invoked

Historical data requirements: full Account and customer flags timeseries data will be retrieved and will be available in a Contract Hook. This requirement is only supported for supervisee data.

## [](#last_execution_datetime "Copy link to heading")last\_execution\_datetime

**Type:** `List[str]`

**Only allowed with additional requirements:** `data_scope:` all, invoked

Historical data requirements: last execution datetime for requested event\_type(s) will be retrieved and will be available in a Contract Hook. This requirement is only supported for supervisee data.

## [](#parameters "Copy link to heading")parameters

**Type:** `bool`

**Only allowed with additional requirements:** `data_scope:` all, invoked

Historical data requirements: full contract parameter timeseries data will be retrieved and will be available in a Contract Hook. This requirement is only supported for supervisee data.

## [](#postings "Copy link to heading")postings

**Type:** `str`

**Allowed Quantity Units:** `day, month, year, latest, live`

**Only allowed with additional requirements:** `data_scope:` all, invoked

Historical data requirements: specified amount of Account postings data points will be retrieved and will be available in a Contract Hook. This requirement is only supported for supervisee data. `latest` and `latest live` are not valid for postings, and will therefore return no data when used to fetch postings. This is because postings are valued at discrete timestamps, and `latest live` and `latest` request a view of the data at an exact point in time.

## [](#supervisee_hook_directives "Copy link to heading")supervisee\_hook\_directives

**Type:** `str`

**Allowed Quantity Units:** `none, all, invoked`

**Unit hook restrictions:**       `invoked`: Only supported in `post_posting_hook`       `all`: Only supported in `scheduled_event_hook`

Defines whether the Supervisee Hooks need to be executed and their instructed Hook Directives need to be available in the Supervisor Contract Hook. If set to 'none', the supervised Smart Contract hooks are not executed. If set to 'all', the supervised Smart Contract hooks of all Accounts are executed and their instructed hook directives are made available in the Supervisor Contract. If set to 'invoked', the supervisee hook of the relevant Account will be run with any directives being passed back into the supervisor hook execution. If not set, defaults to 'none'.