# Ingest Pass 1: Vault Core Overview

> **Executor**: Antigravity (Gemini)
> **Reviewer**: OpenCode/Sisyphus (GLM-5.1)
> **Status**: Ready for execution
> **Date**: 2026-04-21

---

## Pre-Flight Checklist (MANDATORY — Do First)

### 1. Dedup Check
- [ ] Search `wiki/log.md` for `raw/vault-core-overview/` — should return NO results (first ingest)
- [ ] Grep `wiki/*.md` frontmatter `sources:` for `raw/vault-core-overview/` — should return NO results
- If found anywhere → STOP and report. Do NOT ingest.

### 2. Pre-Ingest Snapshot
- [ ] Run: `git add wiki/ && git commit -m "snapshot: pre-ingest vault-core-overview"`
- If this fails because no git repo → create git repo first: `git init && git add . && git commit -m "init: project setup"`
- If on `master` or `dev` branch → STOP. Create feature branch first: `git checkout -b feature/ingest-vault-core-overview dev`

---

## Raw Sources (Input)

All files in `raw/vault-core-overview/`:

| # | File | Size | Topic | Images |
|---|------|------|-------|--------|
| 1 | `vault_core_overview.md` | 1.2 KB | Landing page / index (links to sub-pages) | 0 |
| 2 | `vault_core_overview_what_is_vault_core.md` | 17.4 KB | Core concepts: ledger, accounts, balances, postings, smart contracts, hooks, schedules, parameters, lifecycle, streaming events | 2 |
| 3 | `vault_core_overview_architecture.md` | 8.9 KB | Cloud-native architecture, Kubernetes, scaling, resilience, HA, security (encryption + auth) | 4 |
| 4 | `vault_core_overview_financial_model.md` | 12.6 KB | EOD process, postings in financial model, source of truth vs SoR, EOD position, typical implementation | 4 |
| 5 | `vault_core_overview_coexistence.md` | 37.3 KB | Legacy coexistence, migration strategies, architectural patterns, mediator, domain APIs, data hubs | 10 |
| 6 | `vault_core_overview_vault_security.md` | 31.1 KB | Security model, shared responsibility, compliance, data encryption, authentication, access control | 5 |
| 7 | `vault_core_overview_whats_new_in_vc5.md` | 1.2 KB | VC5 landing page (links to sub-pages) | 0 |
| 8 | `vault_core_overview_whats_new_in_vc5_overview.md` | 48 KB | Detailed VC5 changes: accounts, postings, parameters, schedules, contracts | 3 |
| 9 | `vault_core_overview_whats_new_in_vc5_service_compatibility.md` | 3.1 KB | Service compatibility matrix, required switch order | 1 |
| 10 | `vault_core_overview_whats_new_in_vc5_extensions.md` | 1.5 KB | VC5 extensions: processing groups, high-volume accounts, hibernator, adjustments | 0 |

**Total**: ~162 KB raw text, 29 images

---

## Wiki Pages to Create (Output)

Create the following pages in `wiki/`. Each page MUST have frontmatter and cross-references.

### Entity Pages

#### `entity-vault-core.md`
- **Source**: `vault_core_overview_what_is_vault_core.md` (primary) + `vault_core_overview.md`
- **Content**: What is Vault Core, conceptual model overview, core capabilities (real-time ledger, cloud-native, highly available)
- **Key topics to extract**:
  - Digital core banking system definition
  - Real-time ledger (append-only)
  - High availability and scalability
  - Streaming events
- **Cross-ref to**: `concept-architecture.md`, `concept-financial-model.md`, `concept-security.md`
- **Images to view**: `uuid-c0ef1fee-..._vaultcor.webp` (conceptual model diagram)

### Concept Pages

#### `concept-architecture.md`
- **Source**: `vault_core_overview_architecture.md`
- **Content**: Cloud-native architecture, microservices, Kubernetes, scaling, resilience, HA, disaster recovery
- **Key topics to extract**:
  - Distributed system on Kubernetes
  - Microservices architecture
  - Scaling (stateless app layer, Postgres, Kafka)
  - Resilience (HA + DR)
  - High availability (3-zone deployment, Postgres replication, Kafka brokers)
  - High-level architecture diagram (legacy vs modern)
  - Security: data encryption (TLS, AES 256), authentication (SAML, JWT, mTLS, ACLs, SASL)
- **Cross-ref to**: `entity-vault-core.md`, `concept-security.md`
- **Images to view**: All 4 architecture images

#### `concept-financial-model.md`
- **Source**: `vault_core_overview_financial_model.md`
- **Content**: Financial model, postings, EOD process, source of truth vs SoR
- **Key topics to extract**:
  - Ledger as ordered list of fund movements
  - Postings as sole mechanism for fund movements
  - Source of truth vs system of record
  - Three timestamps on each posting
  - EOD process: BAU, 1º cut-off, 2º cut-off, grace period, overnight postings, completion
  - Two EOD position options (at 2º cut-off vs at 1º cut-off)
  - Typical EOD implementation (6-step flow)
  - Schedule code, schedule events, schedule tags, operation events
- **Cross-ref to**: `entity-vault-core.md`, `concept-postings.md`
- **Images to view**: All 4 financial model images

#### `concept-postings.md`
- **Source**: `vault_core_overview_what_is_vault_core.md` (Postings, Posting Batches, Posting Types sections)
- **Content**: Postings model, accounts (customer + internal), balances (dimensions), posting instructions, batches, types, payment devices
- **Key topics to extract**:
  - Customer accounts vs Internal accounts
  - Balance dimensions: asset classes, denominations, addresses, phases
  - Posting = single credit or debit
  - Double-entry bookkeeping
  - Posting Instruction Batches (atomic accept/reject)
  - Posting types (outbound/inbound hard settlement, etc.)
  - Payment devices
- **Cross-ref to**: `concept-financial-model.md`, `concept-smart-contracts.md`

#### `concept-smart-contracts.md`
- **Source**: `vault_core_overview_what_is_vault_core.md` (Smart Contracts, Hooks, Schedules, Parameters, Lifecycle sections)
- **Content**: Smart contracts as business logic encapsulation, hooks, schedules, parameters, lifecycle
- **Key topics to extract**:
  - Smart contracts = terms and conditions of the account
  - Parameterisation for shared functionality
  - Hooks: activation, pre-posting, post-posting, scheduled event, conversion, pre/post-parameter, derived parameters, deactivation
  - Schedules: regular cadence operations (fees, interest accrual)
  - Parameters: global, template, instance levels; time-series representation
  - Account lifecycle: activation → operational → maintenance → closure
- **Cross-ref to**: `entity-vault-core.md`, `concept-postings.md`, `concept-financial-model.md`
- **Images to view**: `uuid-59572bf8-..._vaultcor.webp` (hooks lifecycle diagram)

#### `concept-coexistence.md`
- **Source**: `vault_core_overview_coexistence.md`
- **Content**: Coexistence with legacy cores, migration strategies, architectural patterns
- **Key topics to extract**:
  - Definition: running legacy core alongside Vault Core
  - Migration: incremental vs big bang
  - Strategic enabler (M&A scenarios)
  - Architectural options (channels, integration/middleware, cores)
  - Key components: mediator, domain APIs
  - Data hubs: online and offline
  - Fund transfers across cores
  - E2E product process execution
- **Cross-ref to**: `entity-vault-core.md`, `concept-architecture.md`
- **Images to view**: All 10 coexistence images (this page is diagram-heavy)

#### `concept-security.md`
- **Source**: `vault_core_overview_vault_security.md` + `vault_core_overview_architecture.md` (security sections)
- **Content**: Security model, shared responsibility, compliance, encryption, authentication, access control
- **Key topics to extract**:
  - Shared responsibility model (bank-hosted vs SaaS)
  - Compliance certifications (ISO 27001, ISO 22301, SOC 2 Type 2)
  - Data encryption (TLS in transit, AES 256 at rest, CMK for bank-hosted)
  - Authentication (SAML for UI, JWT for API, mTLS/ACLs/SASL for streaming)
  - Access control (interactive + programmatic)
  - Security in product development lifecycle
- **Cross-ref to**: `entity-vault-core.md`, `concept-architecture.md`
- **Images to view**: All 5 security images

### Source Page

#### `source-vault-core-overview.md`
- **Source**: ALL 10 raw files
- **Content**: Per-section summaries of each raw document. This is the "filing" page — structured summary of what was ingested.
- **Structure**:
  ```markdown
  ## What is Vault Core?
  [2-3 sentence summary of key takeaways from vault_core_overview_what_is_vault_core.md]

  ## Architecture
  [2-3 sentence summary of key takeaways from vault_core_overview_architecture.md]

  ## Financial Model
  [...]

  ## Coexistence
  [...]

  ## Security
  [...]

  ## What's New in VC5 — Overview
  [...]

  ## What's New in VC5 — Service Compatibility
  [...]

  ## What's New in VC5 — Extensions
  [...]
  ```
- **Cross-ref to**: All entity and concept pages created above

### Reference Page

#### `ref-vc5-service-compatibility.md`
- **Source**: `vault_core_overview_whats_new_in_vc5_service_compatibility.md`
- **Content**: Service compatibility matrix, accounts/CL version compatibility, required switch order
- **Key data to preserve**:
  - Service compatibility table (Accounts version × CL version × Parameters × Processing Groups × Adjustments)
  - Accounts/CL version compatibility table (VC 4.6/4.7 through 7.X)
  - Required switch order (CLv4 upgrade → timezone → v2 accounts → parameters)
- **Cross-ref to**: `entity-vault-core.md`

---

## Page Creation Order

Create pages in this order to ensure cross-references are valid:

1. **`entity-vault-core.md`** — foundation page, no cross-refs needed
2. **`concept-postings.md`** — depends on entity-vault-core only
3. **`concept-smart-contracts.md`** — depends on entity-vault-core, concept-postings
4. **`concept-financial-model.md`** — depends on entity-vault-core, concept-postings
5. **`concept-architecture.md`** — depends on entity-vault-core
6. **`concept-security.md`** — depends on entity-vault-core, concept-architecture
7. **`concept-coexistence.md`** — depends on entity-vault-core, concept-architecture
8. **`ref-vc5-service-compatibility.md`** — standalone reference
9. **`source-vault-core-overview.md`** — depends on all above (cross-links to all)
10. **Update `wiki/index.md`** — uncomment/create entries for all new pages
11. **Append to `wiki/log.md`** — add ingest entry

---

## Frontmatter Template

Every wiki page MUST have this frontmatter:

```yaml
---
tags: [category-tag, product-area-tag]
products: [vault-core]
sources:
  - raw/vault-core-overview/vault_core_overview_what_is_vault_core.md
  - raw/vault-core-overview/vault_core_overview.md
last_updated: 2026-04-21
---
```

Adjust `tags`, `products`, and `sources` per page. Use realistic tags, not generic ones.

---

## Cross-Reference Format

Use Obsidian wiki links: `[[entity-vault-core]]`, `[[concept-architecture]]`, etc.

Every page must:
- Link TO at least 2 other wiki pages (outbound links)
- Be linked FROM at least 1 other page or `index.md` (inbound links)

---

## Image Handling

Per the build guide:
1. **Read the text first** — process markdown content normally
2. **Then view images separately** — use the multimodal-looker or image reading tool on key images referenced in each raw file
3. Images that are purely decorative or duplicative of text → skip
4. Images that contain unique architectural diagrams, flowcharts, or matrices → describe in wiki page text

Key images worth viewing and describing:
- `uuid-c0ef1fee-...` — Vault Core conceptual model (entity-vault-core)
- `uuid-59572bf8-...` — Smart Contract hooks lifecycle diagram (concept-smart-contracts)
- `high-level-architecture.B8mENjDW_...` — High-level architecture (concept-architecture)
- `eod-terms.BtrrWyBH_...` — EOD process terms diagram (concept-financial-model)
- `coexistence-components.DqsZnwg0_...` — Coexistence components (concept-coexistence)
- `bank-hosted-responsibility-model.of97HuC_...` — Shared responsibility (concept-security)

---

## Update index.md

Replace the HTML comments with actual links and one-line descriptions:

```markdown
## Entities

- [[entity-vault-core]] — Thought Machine's cloud-native core banking system

## Concepts

- [[concept-architecture]] — Cloud-native distributed architecture, Kubernetes, scaling, HA
- [[concept-financial-model]] — EOD process, postings model, balance derivation
- [[concept-coexistence]] — Legacy core coexistence and migration strategies
- [[concept-security]] — Security model, shared responsibility, compliance, encryption
- [[concept-postings]] — Postings model, accounts, balances, double-entry bookkeeping
- [[concept-smart-contracts]] — Smart contract business logic, hooks, schedules, parameters

## Sources

- [[source-vault-core-overview]] — Per-section summary of all Vault Core overview documents

## Reference

- [[ref-vc5-service-compatibility]] — VC5 service compatibility matrix and switch order
```

---

## Append to log.md

Add this entry after all pages are created:

```markdown
## [2026-04-21] ingest | Vault Core Overview

- **Sources**: raw/vault-core-overview/ (10 files, ~162 KB)
- **Pages created**: entity-vault-core, concept-architecture, concept-financial-model, concept-postings, concept-smart-contracts, concept-coexistence, concept-security, ref-vc5-service-compatibility, source-vault-core-overview
- **Pages updated**: index.md, log.md
- **Summary**: Ingested all Vault Core overview documentation. Created 9 wiki pages covering core concepts, architecture, financial model, security, coexistence, and VC5 changes.
```

---

## Post-Ingest Verification

After creating all pages, verify:

- [ ] Every wiki page has frontmatter with tags, products, sources, last_updated
- [ ] Every wiki page has ≥1 outbound `[[wiki link]]`
- [ ] No wiki page is an orphan (all linked from index.md or another page)
- [ ] `index.md` has entries for all 9 new pages
- [ ] `log.md` has entry with sources listed
- [ ] No files in `raw/` were modified
- [ ] No content contradicts across pages (or flagged with `> **CONTRADICTION**:` if found)
- [ ] `git diff wiki/` looks clean — no accidental inclusions

---

## MUST DO

1. Read ALL raw source files before writing any wiki page — understand the full picture first
2. Follow the page creation order above — later pages reference earlier ones
3. Use EXACTLY the frontmatter template provided
4. Use `[[wiki links]]` format for all cross-references
5. Keep pages concise — extract and synthesize, don't copy-paste raw content
6. View key images (listed above) and describe important diagrams in text
7. Preserve the service compatibility tables in ref-vc5-service-compatibility.md as proper GFM tables
8. Update index.md by replacing HTML comments with actual links
9. Append to log.md (do NOT overwrite existing content)

## MUST NOT DO

1. Do NOT modify any files in `raw/` directory
2. Do NOT create pages longer than ~200 lines — synthesize, don't transcribe
3. Do NOT use HTML in wiki pages (use markdown only)
4. Do NOT leave placeholder content like "TODO" or "TBD" — each page must be complete
5. Do NOT skip the pre-flight checklist (dedup check + snapshot commit)
6. Do NOT commit without running the post-ingest verification
7. Do NOT include raw markdown artifacts (broken links, `[](#...)` anchor copy artifacts) in wiki pages
8. Do NOT ingest on `master` or `dev` branch — use feature branch
