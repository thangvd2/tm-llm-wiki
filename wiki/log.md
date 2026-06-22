# TM LLM Wiki — Log

> Chronological append-only record. Each entry prefixed with date and operation type.
> Parseable: `grep "^## \[" log.md | tail -5` gives last 5 entries.

## Format Template

```
## [YYYY-MM-DD] operation | Title

- **Source**: path or URL (if applicable)
- **Pages updated**: list of wiki pages touched
- **Summary**: 1-2 sentence description of what happened
```

## Entries

<!-- Entries appended below this line -->

## [2026-05-06] ingest | Vault Core Smart Contracts CLv4

- **Sources**: raw/vault-core/5.8/reference/contracts/ (multiple files)
- **Pages created**: entity-smart-contract, entity-supervisor-contract, concept-sc-hooks, concept-parameters, concept-sc-data-fetching, concept-clv4-posting-instructions, concept-transaction-bridge, concept-clv3-to-clv4-migration, analysis-clv4-development-lifecycle, ref-clv4-enums, ref-clv4-classes, ref-clv4-hook-signatures
- **Pages updated**: concept-smart-contracts, index.md, log.md
- **Summary**: Ingested Tier 1-8 of Vault Core CLv4 Smart Contract documentation. Synthesized concepts, parameters, lifecycle, references, and integration details into the wiki.

## [2026-04-21] ingest | Vault Core Overview

- **Sources**: raw/vault-core/5.8/vault_core_overview/ (10 files, ~162 KB)
- **Pages created**: entity-vault-core, concept-architecture, concept-financial-model, concept-postings, concept-smart-contracts, concept-coexistence, concept-security, ref-vc5-service-compatibility, source-vault-core-overview
- **Pages updated**: index.md, log.md
- **Summary**: Ingested all Vault Core overview documentation. Created 9 wiki pages covering core concepts, architecture, financial model, security, coexistence, and VC5 changes.

---

## 2026-06-16 — Version tracking infrastructure

**Operation**: Schema migration
**Vault version**: 5.8
**Pages touched**: All 22 content pages + index.md + log.md
**Sources**: N/A (schema change, no new raw sources)

**Changes**:
- Added `vault_version` frontmatter field to all wiki pages (introduced/verified/current)
- Restructured `raw/` to version-pinned folders: `raw/vault-core/5.8/<section>/`
- Added DEPRECATED and STALE callout types alongside existing SUPERSEDED/CONTRADICTION
- Renamed the CLv4 migration page → `concept-clv3-to-clv4-migration` (disambiguate from future VC version migration pages)
- Updated all `sources:` paths to reflect new raw/ structure
