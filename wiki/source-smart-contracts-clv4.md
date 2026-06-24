---
tags: [source, clv4]
products: [vault-core, smart-contracts]
sources: [raw/vault-core/5.8/reference/contracts/]
vault_version:
  introduced: "4.5"
  verified: ["5.8"]
  current: true
last_updated: 2026-05-06
---

# Source: Smart Contracts CLv4

This page provides a summary of the raw technical documentation ingested from the `raw/vault-core/5.8/reference/contracts/` directory. The source material outlines the complete reference for Contracts Language Version 4 (CLv4).

## Overview & Concepts
- **Concepts**: Details the fundamental shift from CLv3 to CLv4, introducing strict native Python execution, the removal of `vault` API instruction methods, and the introduction of deterministic directives and rejections.
- **Version Notes**: Outlines the migration strategy from CLv3 to CLv4 and details all backward-incompatible changes.
- **Transaction Bridge**: Details how core postings are automatically translated into Experience Layer Transactions.

## Types & API References
- **Common Types**: Documents the structure of data models such as `Balances`, `ScheduledEvent`, and `PostingInstructions`.
- **Enums**: Defines the 16 core enumerations used across all contract interactions (e.g., `HookName`, `Phase`).
- **Decorators**: Details the `@fetch_account_data` and `@requires` decorators used for upfront data loading.

## Smart Contract APIs
- **Hooks**: Documents the precise signatures and return types (`HookResult`) for the 13 supported Smart Contract hooks.
- **Vault Object**: Details the `vault` execution context provided to hooks, including data fetching mechanisms (`get_balances_observation`, `get_posting_instructions`, etc.).
- **Metadata**: Details the static metadata configuration block required at the top of every contract.

## Supervisor Contracts APIs
- **Supervisor Overview**: Explains the difference between instance-level accounts and cross-account orchestration plans.
- **Supervisor Hooks**: Details the 5 supported hooks for Supervisor Contracts and the execution modes (`INVOKED` vs `OVERRIDE`).

## Development & Testing
- **Contract Simulation**: Explains the `v1/contracts:simulate` endpoint for fast, in-memory testing.
- **Best Practices**: Outlines performance considerations, such as minimizing fetched data and preferring discrete interval fetchers over wide ranges.
