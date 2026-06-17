---
tags: [concept, data-fetching, performance, clv4]
products: [vault-core, smart-contracts]
sources: [raw/vault-core/5.8/smart-contracts-clv4/]
vault_version:
  introduced: "4.5"
  verified: ["5.8"]
  current: true
last_updated: 2026-05-06
---

# Data Fetching

Smart Contracts execute in a strictly controlled sandbox. They cannot make arbitrary database queries or external network requests. Instead, they must statically declare their data requirements upfront so Vault can retrieve the necessary information before the hook executes.

## @fetch_account_data vs @requires

CLv4 introduces two decorators for declaring data requirements:

1. `@fetch_account_data` (Optimised Data Fetching): The modern, highly recommended approach. It offers granular control over data retrieval (intervals vs. observations) and is the **only supported way** to retrieve postings and balances for Smart Contracts. Fetchers are defined in the Contract metadata and referenced by ID in the decorator.
2. `@requires` (Legacy/Basic Fetching): The older mechanism. In Smart Contracts, it is strictly used to fetch basic `parameters`, `flags`, `calendar` events, and `last_execution_datetime`. Supervisor Contracts still rely on `@requires` for fetching supervisee `postings` and `balances`, though they also support `@fetch_account_data` for specific data types.

## Fetcher Types

The optimised `@fetch_account_data` supports several fetcher types, categorized into **Intervals** (a period of time) and **Observations** (a specific point in time):
- Balances (`BalancesObservationFetcher`, `BalancesIntervalFetcher`)
- Postings (`PostingsIntervalFetcher` - no observation fetcher as postings are discrete events)
- Expected Parameters
- Flags
- Calendars
- Last Scheduled Event DateTimes

## Range Specifiers & The `live` Modifier

When using `@requires` (especially in Supervisor Contracts), time range specifiers limit the amount of historical data fetched:
- **Duration**: `1 day`, `3 months`, `1 year` (fetches data for the specified duration backward from the hook's `effective_datetime`).
- **`latest`**: Fetches the most recent value at the hook's `effective_datetime`. (Not valid for postings).

### The `live` Modifier
By default, Vault fetches data based on the hook's `effective_datetime`. If a schedule is delayed, the data is still fetched exactly as it was at the effective time.
The `live` modifier changes this to fetch data up to the actual **execution time** (System `UTC NOW()`).
- `latest live`: The absolute current balance.
- `1 day live`: The past 24 hours of data from the `effective_datetime`, extending all the way up to the current execution time.

## Observation Time Semantics (scheduled_event_hook)

The `scheduled_event_hook` is unique because it is point-in-time. When fetching data using optimised fetchers, it must specify the observation time perspective:
- `DefinedDateTime.EFFECTIVE_DATETIME`: Resolves data exactly as it would have appeared at the effective time, ignoring any backdated postings that arrived between the effective time and execution time.
- `DefinedDateTime.LIVE`: Includes all changes up to the execution time. This makes the hook non-deterministic (running it again later might yield different results if new data arrived).

## Supervisor Data Scope

When fetching data for supervised accounts, Supervisor Contracts must use the `data_scope` requirement to prevent fetching massive amounts of unnecessary data:
- **OWN**: Only Plan data is retrieved.
- **INVOKED**: Plan data + data for the specific account(s) that triggered the hook.
- **ALL**: Plan data + data for *all* accounts associated with the Plan.

---

> **See also**:
> - [[concept-sc-hooks]] for understanding `effective_datetime` vs execution time.
> - [[entity-supervisor-contract]] for more details on Supervisor data scopes.
