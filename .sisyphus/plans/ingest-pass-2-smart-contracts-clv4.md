# Ingest Pass 2: Smart Contracts CLv4

> **Executor**: Antigravity (Gemini)
> **Reviewer**: OpenCode/Sisyphus (GLM-5.1)
> **Status**: Ready for execution
> **Date**: 2026-05-06

---

## Pre-Flight Checklist (MANDATORY — Do First)

### 1. Dedup Check
- [ ] Search `wiki/log.md` for `raw/smart-contracts-clv4/` — should return NO results (new ingest)
- [ ] Grep `wiki/*.md` frontmatter `sources:` for `raw/smart-contracts-clv4/` — should return NO results
- If found anywhere → STOP and report. Do NOT ingest.

### 2. Pre-Ingest Snapshot
- [ ] Create feature branch: `git checkout -b feature/ingest-smart-contracts-clv4 dev`
- [ ] Run: `git add wiki/ && git commit -m "snapshot: pre-ingest smart-contracts-clv4"`
- NEVER commit directly to `master` or `dev`.

---

## Raw Sources (Input)

All files in `raw/smart-contracts-clv4/` (36 files):

### Tier 1: Introduction & Top-Level (5 files)

| # | File | Lines | Topic |
|---|------|-------|-------|
| 1 | `reference_contracts_introduction.md` | 55 | Smart Contract intro, template/instance, deployment methods |
| 2 | `reference_contracts_sdk_download.md` | 13 | SDK download, pip install |
| 3 | `reference_contracts_contracts_api_4xx.md` | 50 | CLv4 documentation index |
| 4 | `reference_contracts_contracts_api_4xx_overview.md` | 50 | Smart Contract overview: hooks, metadata, parameters |
| 5 | `reference_contracts_contracts_api_4xx_common_examples.md` | 11 | Examples index |

### Tier 2: Core Concepts (2 files, ~3,054 lines)

| # | File | Lines | Topic |
|---|------|-------|-------|
| 6 | `reference_contracts_contracts_api_4xx_concepts.md` | 2,711 | **Core concepts**: parameters, all 14 hooks, data fetching, posting instructions, timezones, compatibility tables |
| 7 | `reference_contracts_contracts_api_4xx_version_notes.md` | 343 | CLv4 changes from v3, conversion guide, release notes (4.5.0→5.7.0) |

### Tier 3: Supervisor Contracts (6 files, ~393 lines)

| # | File | Lines | Topic |
|---|------|-------|-------|
| 8 | `reference_contracts_contracts_api_4xx_supervisor_overview.md` | 110 | Supervisor entry points, execution modes, data scope |
| 9 | `reference_contracts_contracts_api_4xx_supervisor_contracts_api_reference4xx.md` | 22 | Supervisor API index |
| 10 | `reference_contracts_contracts_api_4xx_supervisor_contracts_api_reference4xx_metadata.md` | 41 | Supervisor metadata fields |
| 11 | `reference_contracts_contracts_api_4xx_supervisor_contracts_api_reference4xx_hooks.md` | 134 | Supervisor hook signatures |
| 12 | `reference_contracts_contracts_api_4xx_supervisor_contracts_api_reference4xx_hook_requirements.md` | 42 | Supervisor @requires parameters |
| 13 | `reference_contracts_contracts_api_4xx_supervisor_contracts_api_reference4xx_account_fetcher_requirements.md` | 10 | Supervisor @fetch_account_data types |
| 14 | `reference_contracts_contracts_api_4xx_supervisor_contracts_api_reference4xx_vault.md` | 44 | Supervisor Vault object |

### Tier 4: Smart Contract API Reference (6 files, ~852 lines)

| # | File | Lines | Topic |
|---|------|-------|-------|
| 15 | `reference_contracts_contracts_api_4xx_smart_contracts_api_reference4xx.md` | 22 | Smart Contract API index |
| 16 | `reference_contracts_contracts_api_4xx_smart_contracts_api_reference4xx_metadata.md` | 71 | Smart Contract metadata fields |
| 17 | `reference_contracts_contracts_api_4xx_smart_contracts_api_reference4xx_hooks.md` | 382 | **All 14 hook signatures** |
| 18 | `reference_contracts_contracts_api_4xx_smart_contracts_api_reference4xx_hook_requirements.md` | 19 | @requires parameters |
| 19 | `reference_contracts_contracts_api_4xx_smart_contracts_api_reference4xx_account_fetcher_requirements.md` | 27 | @fetch_account_data types |
| 20 | `reference_contracts_contracts_api_4xx_smart_contracts_api_reference4xx_vault.md` | 331 | **Smart Contract Vault object** |

### Tier 5: Common Types (6 files, ~9,207 lines)

| # | File | Lines | Topic |
|---|------|-------|-------|
| 21 | `reference_contracts_contracts_api_4xx_common_types_4xx.md` | 25 | Common types index |
| 22 | `reference_contracts_contracts_api_4xx_common_types_4xx_builtins.md` | 236 | Allowed Python builtins |
| 23 | `reference_contracts_contracts_api_4xx_common_types_4xx_native_objects.md` | 142 | Allowed Python modules |
| 24 | `reference_contracts_contracts_api_4xx_common_types_4xx_fixed_values.md` | 13 | Fixed string constants |
| 25 | `reference_contracts_contracts_api_4xx_common_types_4xx_enums.md` | 310 | All 16 CLv4 enums |
| 26 | `reference_contracts_contracts_api_4xx_common_types_4xx_classes.md` | 8,320 | **All CLv4 class definitions** (largest file) |
| 27 | `reference_contracts_contracts_api_4xx_common_types_4xx_decorators.md` | 161 | @fetch_account_data and @requires specs |

### Tier 6: Contract Modules (2 files, ~39 lines)

| # | File | Lines | Topic |
|---|------|-------|-------|
| 28 | `reference_contracts_contracts_api_4xx_contract_modules_overview.md` | 22 | Contract Modules overview |
| 29 | `reference_contracts_contracts_api_4xx_contract_modules_api_reference4xx.md` | 17 | Contract Module metadata |

### Tier 7: Development Lifecycle (5 files, ~908 lines)

| # | File | Lines | Topic |
|---|------|-------|-------|
| 30 | `reference_contracts_contracts_api_4xx_development_and_testing.md` | 214 | Dev workflow, SDK, testing strategies |
| 31 | `reference_contracts_contract_simulation.md` | 271 | Simulation API for testing |
| 32 | `reference_contracts_contracts_api_4xx_performance_considerations.md` | 88 | Performance guidelines |
| 33 | `reference_contracts_contracts_api_4xx_running_contracts_in_production.md` | 135 | Production monitoring |
| 34 | `reference_contracts_contracts_api_4xx_best_practice_guidelines.md` | 205 | Best practices |

### Tier 8: Cross-Cutting (2 files, ~629 lines)

| # | File | Lines | Topic |
|---|------|-------|-------|
| 35 | `reference_contracts_contracts_transaction_bridge.md` | 61 | Transaction Bridge auto-creation |
| 36 | `reference_contracts_contracts_api_4xx_common_examples_generic.md` | 568 | Practical code examples |

**Total**: ~14,992 lines raw text, 13 images

---

## Wiki Pages to Create (Output)

### Creation Order (dependencies)

Pages are ordered by dependency — earlier pages are referenced by later ones.

### Page 1: `source-smart-contracts-clv4.md`
- **Category**: source
- **Raw files**: All 36 files (summarized per tier)
- **Description**: Per-section summary of every document in the CLv4 source. Maps each tier to extracted wiki concepts and cross-references.
- **Frontmatter**:
  ```yaml
  tags: [source, smart-contracts, clv4]
  products: [vault-core, smart-contracts]
  sources: [raw/smart-contracts-clv4/]
  last_updated: 2026-05-06
  ```
- **Content**: Summarize each of the 8 tiers above with 2-3 sentences. Link to the wiki pages that expand on each tier.

### Page 2: `entity-smart-contract.md`
- **Category**: entity
- **Raw files**: `introduction`, `overview`, `sdk_download`, `contract_modules_overview`, `contract_modules_api_reference4xx`, `common_types_4xx` (index), `common_types_4xx_builtins`, `common_types_4xx_native_objects`, `common_types_4xx_fixed_values`
- **Description**: The Smart Contract as a product component. Structure (hooks + metadata + parameters), deployment methods (Core API, Dashboard, CLU), template vs instance, versioning, allowed Python builtins/native modules, Contract Modules.
- **Frontmatter**:
  ```yaml
  tags: [entity, smart-contracts, clv4]
  products: [vault-core, smart-contracts]
  sources: [raw/smart-contracts-clv4/]
  last_updated: 2026-05-06
  ```
- **Cross-refs**: → `concept-smart-contracts`, `concept-sc-hooks`, `concept-parameters`, `entity-supervisor-contract`

### Page 3: `entity-supervisor-contract.md`
- **Category**: entity
- **Raw files**: `supervisor_overview`, `supervisor_contracts_api_reference4xx` (all 5 sub-pages)
- **Description**: Supervisor Contract component. Entry points (Plan vs Account), execution modes (UNSUPERVISED/INVOKED/OVERRIDE), data scope (OWN/INVOKED/ALL), flexible supervision, metadata, Vault object (plan_id, supervisees, get_hook_result).
- **Frontmatter**:
  ```yaml
  tags: [entity, supervisor, smart-contracts, clv4]
  products: [vault-core, smart-contracts]
  sources: [raw/smart-contracts-clv4/]
  last_updated: 2026-05-06
  ```
- **Cross-refs**: → `entity-smart-contract`, `concept-sc-hooks`, `ref-clv4-hook-signatures`

### Page 4: `concept-sc-hooks.md`
- **Category**: concept
- **Raw files**: `concepts` (hooks table), `smart_contracts_api_reference4xx_hooks`, `supervisor_contracts_api_reference4xx_hooks`, `version_notes` (hook changes)
- **Description**: Complete hook lifecycle and reference. All 14 Smart Contract hooks + 5 Supervisor hooks, organized by lifecycle phase (Activation → Operational → Maintenance → Closure). Hot path concept. Hook return values, directives-as-classes, missing/empty hook rules, CLv3→CLv4 hook renames.
- **Frontmatter**:
  ```yaml
  tags: [concept, hooks, smart-contracts, clv4]
  products: [vault-core, smart-contracts]
  sources: [raw/smart-contracts-clv4/]
  last_updated: 2026-05-06
  ```
- **Cross-refs**: → `entity-smart-contract`, `entity-supervisor-contract`, `ref-clv4-hook-signatures`, `ref-clv4-classes`

### Page 5: `concept-parameters.md`
- **Category**: concept
- **Raw files**: `concepts` (parameters section, account_attributes), `smart_contracts_api_reference4xx_metadata` (parameters/expected_parameters)
- **Description**: Parameters deep-dive. Three tiers (Global/Template/Instance), expected parameters, parameter shapes, update permissions, derived parameters, Account Attributes (Decimal/DateTime/String), attribute_hook.
- **Frontmatter**:
  ```yaml
  tags: [concept, parameters, smart-contracts, clv4]
  products: [vault-core, smart-contracts]
  sources: [raw/smart-contracts-clv4/]
  last_updated: 2026-05-06
  ```
- **Cross-refs**: → `entity-smart-contract`, `concept-sc-hooks`, `ref-clv4-enums` (ParameterLevel)

### Page 6: `concept-sc-data-fetching.md`
- **Category**: concept
- **Raw files**: `concepts` (data fetching, requirements, range specifiers), `decorators`, `smart_contracts_api_reference4xx_hook_requirements`, `smart_contracts_api_reference4xx_account_fetcher_requirements`, `supervisor_contracts_api_reference4xx_hook_requirements`, `supervisor_contracts_api_reference4xx_account_fetcher_requirements`
- **Description**: Data fetching architecture. `@fetch_account_data` vs `@requires`. All fetcher types (Balances/Postings/Parameters/Flags/Calendars), range specifiers, `live` modifier, supervisor data scope, observation time semantics, performance implications.
- **Frontmatter**:
  ```yaml
  tags: [concept, data-fetching, smart-contracts, clv4]
  products: [vault-core, smart-contracts]
  sources: [raw/smart-contracts-clv4/]
  last_updated: 2026-05-06
  ```
- **Cross-refs**: → `concept-sc-hooks`, `entity-smart-contract`, `ref-clv4-classes`

### Page 7: `concept-clv4-posting-instructions.md`
- **Category**: concept
- **Raw files**: `concepts` (financial concepts, posting instruction compatibility tables)
- **Description**: All 9 posting instruction types and their fields. Client Transactions, Phase concept, credit vs debit, Posting vs PostingInstruction, PostingInstructionsDirective limits.
- **Frontmatter**:
  ```yaml
  tags: [concept, posting-instructions, financial-model, clv4]
  products: [vault-core, smart-contracts]
  sources: [raw/smart-contracts-clv4/]
  last_updated: 2026-05-06
  ```
- **Cross-refs**: → `concept-postings`, `concept-financial-model`, `ref-clv4-classes`

### Page 8: `concept-clv3-to-clv4-migration.md`
- **Category**: concept
- **Raw files**: `version_notes`
- **Description**: CLv4 migration guide. Benefits (performance 2-4x), key changes (hook renames, directives-as-classes, timezone pytz→zoneinfo, postings refactoring), conversion process (translate→test→deploy→convert), supervised account conversion, release notes timeline (4.5.0→5.7.0).
- **Frontmatter**:
  ```yaml
  tags: [concept, migration, clv4, versioning]
  products: [vault-core, smart-contracts]
  sources: [raw/smart-contracts-clv4/]
  last_updated: 2026-05-06
  ```
- **Cross-refs**: → `concept-sc-hooks`, `concept-sc-data-fetching`, `concept-clv4-posting-instructions`

### Page 9: `concept-transaction-bridge.md`
- **Category**: concept
- **Raw files**: `contracts_transaction_bridge`
- **Description**: Contracts Transaction Bridge — auto-creation of Experience Layer Transactions from Smart Contract postings. Kafka consumption, criteria table, DLQ handling.
- **Frontmatter**:
  ```yaml
  tags: [concept, transaction-bridge, integration]
  products: [vault-core, smart-contracts]
  sources: [raw/smart-contracts-clv4/]
  last_updated: 2026-05-06
  ```
- **Cross-refs**: → `concept-postings`, `entity-vault-core`

### Page 10: `analysis-clv4-development-lifecycle.md`
- **Category**: analysis
- **Raw files**: `development_and_testing`, `contract_simulation`, `running_contracts_in_production`, `performance_considerations`, `best_practice_guidelines`, `common_examples_generic`
- **Description**: Cross-cutting analysis of the full development lifecycle. Dev setup (SDK, IDE), testing pyramid (unit/simulation/E2E/accelerated), simulation API deep-dive, performance optimization (hot path, data fetching, empty hooks), production monitoring, Python best practices, idempotency, financial consistency. Include key code examples from `common_examples_generic`.
- **Frontmatter**:
  ```yaml
  tags: [analysis, development, testing, production, clv4]
  products: [vault-core, smart-contracts]
  sources: [raw/smart-contracts-clv4/]
  last_updated: 2026-05-06
  ```
- **Cross-refs**: → `entity-smart-contract`, `concept-sc-hooks`, `concept-sc-data-fetching`

### Page 11: `ref-clv4-enums.md`
- **Category**: ref
- **Raw files**: `common_types_4xx_enums`, `common_types_4xx_fixed_values`
- **Description**: Complete enum lookup table. All 16 CLv4 enums with values and brief descriptions. Fixed string constants.
- **Frontmatter**:
  ```yaml
  tags: [reference, enums, clv4, api]
  products: [vault-core, smart-contracts]
  sources: [raw/smart-contracts-clv4/]
  last_updated: 2026-05-06
  ```
- **Cross-refs**: → `ref-clv4-classes`, `ref-clv4-hook-signatures`

### Page 12: `ref-clv4-classes.md`
- **Category**: ref
- **Raw files**: `common_types_4xx_classes`
- **Description**: Class reference catalog (condensed from 8,320 raw lines). Organized by: Hook Arguments/Results, Posting Instructions, Balance/Fetcher, Parameter, Schedule/Event, Notification/Directive, Supervisor-specific. Each class: constructor, key attributes, key methods.
- **Frontmatter**:
  ```yaml
  tags: [reference, classes, clv4, api]
  products: [vault-core, smart-contracts]
  sources: [raw/smart-contracts-clv4/]
  last_updated: 2026-05-06
  ```
- **Cross-refs**: → `ref-clv4-enums`, `ref-clv4-hook-signatures`, `concept-sc-hooks`

### Page 13: `ref-clv4-hook-signatures.md`
- **Category**: ref
- **Raw files**: `smart_contracts_api_reference4xx_vault`, `smart_contracts_api_reference4xx_metadata`, `supervisor_contracts_api_reference4xx_metadata`
- **Description**: API reference for Vault Object and metadata. Smart Contract Vault Object (all attributes + methods), Supervisor Vault Object, Smart Contract metadata fields, Supervisor metadata fields.
- **Frontmatter**:
  ```yaml
  tags: [reference, api, vault-object, clv4]
  products: [vault-core, smart-contracts]
  sources: [raw/smart-contracts-clv4/]
  last_updated: 2026-05-06
  ```
- **Cross-refs**: → `ref-clv4-classes`, `ref-clv4-enums`, `concept-sc-hooks`

---

## Existing Pages to UPDATE

### `concept-smart-contracts.md`
- Add cross-references at the bottom:
  ```
  > **See also**: [[entity-smart-contract]] for the component reference, [[concept-sc-hooks]] for hook lifecycle, [[concept-parameters]] for parameter tiers
  ```
- Do NOT rewrite — the high-level overview is valid.

### `wiki/index.md`
- Uncomment the following placeholders and fill in descriptions:
  - `entity-smart-contract` — Smart Contract component: structure, deployment, modules
  - `entity-supervisor-contract` — Supervisor Contract: entry points, execution modes, data scope
  - `concept-sc-hooks` — Hook lifecycle: all 14 SC hooks + 5 Supervisor hooks
  - `concept-parameters` — Parameter tiers, shapes, derived parameters, account attributes
  - `source-smart-contracts-clv4` — Per-section summary of CLv4 documentation
  - `ref-clv4-enums` — All 16 CLv4 enum definitions
  - `ref-clv4-classes` — Class reference catalog for all CLv4 types
  - `ref-clv4-hook-signatures` — Vault Object API reference and metadata fields
- Add new entries (not previously placeholder'd):
  - `concept-sc-data-fetching` — Data fetching: @fetch_account_data, @requires, range specifiers
  - `concept-clv4-posting-instructions` — Posting instruction types and compatibility
  - `concept-clv3-to-clv4-migration` — CLv3→CLv4 migration guide
  - `concept-transaction-bridge` — Experience Layer Transaction auto-creation
  - `analysis-clv4-development-lifecycle` — Dev/test/perf/prod lifecycle analysis

### `wiki/log.md`
- Append new entry:
  ```markdown
  ## [2026-05-06] Ingest — Smart Contracts CLv4

  - **Operation**: INGEST (new)
  - **Sources**: `raw/smart-contracts-clv4/` (36 files, ~14,992 lines)
  - **Pages created**: 13 new wiki pages
  - **Pages updated**: concept-smart-contracts.md, index.md, log.md
  - **Content ratio**: ~14,992 lines raw → ~1,800 lines wiki (~12% compression)
  - **Notes**: Second ingest pass. CLv4 Smart Contracts API reference with 8 tiers covering introduction, concepts, supervisor, API reference, common types, modules, development, and cross-cutting concerns.
  ```

---

## Summary

| Metric | Value |
|--------|-------|
| Raw files | 36 |
| Raw lines | ~14,992 |
| New wiki pages | 13 |
| Updated wiki pages | 3 (concept-smart-contracts, index, log) |
| Entity pages | 2 (smart-contract, supervisor-contract) |
| Concept pages | 6 (hooks, parameters, data-fetching, posting-instructions, version-migration, transaction-bridge) |
| Source pages | 1 (smart-contracts-clv4) |
| Analysis pages | 1 (development-lifecycle) |
| Reference pages | 3 (enums, classes, hook-signatures) |

---

## Post-Ingest Verification (MANDATORY)

- [ ] All 13 new pages exist in `wiki/`
- [ ] Each page has frontmatter with tags, products, sources, last_updated
- [ ] Each page has ≥1 `[[wiki link]]` cross-reference
- [ ] `wiki/index.md` updated — all new pages listed
- [ ] `wiki/log.md` appended with entry
- [ ] No orphan pages — every page linked from index or another page
- [ ] No modifications to any file in `raw/`
- [ ] `concept-smart-contracts.md` updated with cross-references
- [ ] All pages under 300 lines (or justified)
