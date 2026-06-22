---
tags: [concept, migration, clv4, versioning]
products: [vault-core, smart-contracts]
sources: [raw/vault-core/5.8/reference/contracts/]
vault_version:
  introduced: "4.5"
  verified: ["5.8"]
  current: true
last_updated: 2026-05-06
---

# CLv4 Migration Guide

The Contracts Language API major version 4 (CLv4) introduces significant backwards-incompatible changes from CLv3, offering massive performance improvements, better developer tooling, and a modernized Python architecture.

## Benefits of CLv4

- **Performance (2-4x Speedup)**: Custom validation replaces blanket run-time type checking. Accessing balance timeseries is ~2x faster, fetching postings is ~3x faster, and `pre_posting_hook` execution without data fetching is ~4x faster than CLv3.
- **Python Module Compatibility**: Contracts are now valid Python modules. They support standard IDE autocomplete, type hints, and linters. The `contracts_api` package allows for seamless local unit testing via the Contracts SDK.
- **Extensibility**: The API is designed so new backwards-compatible features are introduced in Vault releases without needing minor/patch API version bumps (all stay on `4.0.0`).

## Key API Changes

- **Hook Renames**: All hooks were renamed to align with Vault terminology.
- **Hook Return Values & Directives**: Hooks now return specific Result class instances (e.g., `PrePostingHookResult`) instead of calling `vault` methods. Actions are instructed by returning Directive classes (e.g., `PostingInstructionsDirective`, `AccountNotificationDirective`).
- **Schedules**: The `execution_schedules` hook was removed. Instead, the `activation_hook` and `conversion_hook` now return account/plan schedules directly.
- **Rejections**: Raising exceptions is no longer supported. To reject an action, hooks return a `Rejection` object.
- **Timezone Handling**: The `pytz` library was replaced with `zoneinfo`. All internal `datetime` objects are now timezone-aware and in UTC. `events_timezone` handles schedule CRON alignments.
- **Postings Refactoring**: The concept of "batches" is abstracted away. Different instruction types (e.g., `Transfer`, `Settlement`) are now distinct classes.

## Conversion Process

Migrating existing CLv3 products to CLv4 requires a systematic approach:

1. **Translate**: Rewrite the Smart Contract into CLv4 syntax. Do not introduce new business features during this step.
2. **Test**: Rewrite unit tests using the CLv4 SDK. Run existing Simulation and E2E tests (which are API-agnostic) to guarantee no behavioral regressions.
3. **Deploy**: Upload the translated template to Vault to generate a new Product Version ID.
4. **Convert**: Use the Core API endpoints (`AccountUpdate` / `AccountMigration`) to convert test accounts first, verify, and then convert customer accounts.

### Converting Supervised Accounts
If accounts are supervised by a Supervisor Contract:
1. Translate and upload both the Smart Contract and the Supervisor Contract.
2. Disassociate the supervised accounts from the Plan.
3. Convert the individual accounts to the new Smart Contract version.
4. Convert the Plan to the new Supervisor Contract version.
5. Reassociate the accounts to the Plan.

## Release Notes Timeline (4.5.0 → 5.7.0)

While the API remains version `4.0.0`, Vault Core updates introduce new features:
- **4.5.0**: Initial CLv4 release.
- **5.0.0**: `activation_hook` and `conversion_hook` can return `Rejection`. Expected parameters introduced. `deactivation_hook` can reject account closures.
- **5.2.0**: Added data fetching support for Flags.
- **5.4.0**: Added `non_blocking_rejection_reasons` for scheduled posting instructions.
- **5.5.0**: `PrePostingHookResult` can enrich proposed posting instructions with metadata.
- **5.7.0**: Added data fetching support for Calendars and LastScheduledEventDateTimes.

---

> **See also**: 
> - [[concept-sc-hooks]] for the full list of renamed hooks.
> - [[concept-sc-data-fetching]] for optimized data fetching patterns.
> - [[concept-clv4-posting-instructions]] for the new instruction classes.
