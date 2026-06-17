# TM LLM Wiki — Index

> Content catalog. Updated on every ingest. Organized by category.
> Cross-references use `[[wiki links]]` format (Obsidian-compatible).

## Naming Convention

- Pages: `{category-prefix}-{human-readable-name}.md`
- Prefixes: `entity-`, `concept-`, `source-`, `analysis-`, `ref-`
- Frontmatter: tags, products, sources, vault_version, last_updated

## Entities

> Specific products, components, tools.

- [[entity-vault-core]] — Thought Machine's cloud-native core banking system
- [[entity-smart-contract]] — Smart Contract entity running on CLv4
- [[entity-supervisor-contract]] — Supervisor Contract entity for cross-account operations
<!-- entity-edge-functions.md -->

## Concepts

> Abstract ideas, frameworks, patterns, how things work.

- [[concept-architecture]] — Cloud-native distributed architecture, Kubernetes, scaling, HA
- [[concept-financial-model]] — EOD process, postings model, balance derivation
- [[concept-coexistence]] — Legacy core coexistence and migration strategies
- [[concept-security]] — Security model, shared responsibility, compliance, encryption
- [[concept-postings]] — Postings model, accounts, balances, double-entry bookkeeping
- [[concept-smart-contracts]] — Smart contract business logic, hooks, schedules, parameters
- [[concept-sc-hooks]] — The 13 CLv4 hooks and Hot Path execution
- [[concept-parameters]] — Expected parameters, attributes, and scopes
- [[concept-sc-data-fetching]] — Optimal data fetching via @fetch_account_data
- [[concept-clv4-posting-instructions]] — Constructing and processing postings
- [[concept-transaction-bridge]] — Automatic conversion of postings to Transactions
- [[concept-clv3-to-clv4-migration]] — Migrating from CLv3 to CLv4

## Sources

> Per-section summaries of ingested raw documents.

- [[source-vault-core-overview]] — Per-section summary of all Vault Core overview documents
- [[source-smart-contracts-clv4]] — Per-section summary of CLv4 Smart Contracts documentation

## Analyses

> Cross-product comparisons, deep-dives, synthesis pages.

- [[analysis-clv4-development-lifecycle]] — Development, simulation, and accelerated testing

## Reference

> API signatures, type definitions, enum values, lookup tables.

- [[ref-vc5-service-compatibility]] — VC5 service compatibility matrix and switch order
- [[ref-clv4-enums]] — CLv4 Enumerations reference
- [[ref-clv4-classes]] — CLv4 Classes overview and categories
- [[ref-clv4-hook-signatures]] — CLv4 Hook Signatures and Vault Object APIs
