# Project Context

> **This file is the SINGLE SOURCE OF TRUTH for project context.**
> Both OpenCode (AGENTS.md) and Antigravity (.agents/rules/project-rules.md) are AUTO-GENERATED from this file.
> **DO NOT edit generated files directly.** Edit .ai-sync/ files, then run `python .ai-sync/sync.py`.

---

## Project: Thought Machine LLM Wiki (TM LLM Wiki)

Personal knowledge base where LLM incrementally builds and maintains a persistent wiki of structured, interlinked markdown files from raw sources. 3-layer architecture: raw sources (immutable) → wiki (LLM-generated) → schema (agent config). 3 operations: ingest (process source → update 10-15 wiki pages), query (search wiki → answer with citations → file answers back), lint (health-check: contradictions, orphans, stale claims). Compounding knowledge artifact — not RAG.

## Tech Stack

- **Core**: Python 3.10+, Markdown, Git (versioning)
- **Viewer**: Obsidian (graph view, backlinks, Dataview plugin)
- **Optional**: FastAPI (web interface), SQLite (metadata), qmd (search)
- **Infrastructure**: GitHub Actions CI

## Versioning

- **PATCH** (x.x.Z): bugfix only
- **MINOR** (x.Y.0): new feature, backward-compatible
- **MAJOR** (X.0.0): breaking change (wiki schema, directory structure, page format)
- Update `VERSION` file + relevant headers + `RELEASE_NOTES.md` on release

## Language

- User communicates in Vietnamese
- Wiki content, code, comments, commit messages in English
- Respond in Vietnamese unless user uses English

## Key Constraints

- Single developer (sole GitHub account)
- Branch and release rules: see RULES.md
- LLM writes wiki (human curates sources)
- Wiki is a git repo of markdown files
- Raw sources are IMMUTABLE — LLM never modifies files in `raw/`
- Z.AI usage policy: see `docs/z-ai-usage-policy-reference.md`

## Project Structure

```
tm_llm_wiki/
├── wiki/                          ← LLM-generated wiki pages (LLM writes here)
│   ├── index.md                   ← Content catalog (updated on every ingest)
│   └── log.md                     ← Chronological append-only log
├── raw/                           ← Immutable source documents (scraper writes here)
│   ├── vault-core/                ← Vault Core docs, version-pinned
│   │   ├── 5.8/                   ← One folder per VC minor version
│   │   └── 5.9/
│   ├── vault-payments/            ← Non-versioned portals use date-stamped folders
│   │   └── latest-YYYY-MM/
│   ├── additional-products/
│   │   └── latest-YYYY-MM/
│   ├── policy/                    ← Policy documents
│   │   └── latest-YYYY-MM/
│   ├── learning/                  ← Learning pathways
│   │   └── latest-YYYY-MM/
│   ├── partners/                  ← Partner enablement
│   │   └── latest-YYYY-MM/
│   ├── delivery-framework/        ← Delivery framework guides
│   │   └── latest-YYYY-MM/
│   └── _sitemaps/                 ← Portal sitemaps for discovery
├── .ai-sync/                      ← Single source of truth for AI config
├── .agents/                       ← AUTO-GENERATED for Antigravity
├── scripts/                       ← Scraper + version management scripts
├── AGENTS.md                      ← AUTO-GENERATED for OpenCode
├── CONTRIBUTING.md                ← Branch rules, release process
└── VERSION                        ← Current version
```

## Wiki Schema

### Page Naming
- Format: `{prefix}-{human-readable-name}.md`
- Prefixes: `entity-` (products/components), `concept-` (ideas/patterns), `source-` (raw source summaries), `analysis-` (cross-cuts), `ref-` (API/type lookup)

### Frontmatter (every wiki page MUST have)
```yaml
---
tags: [category, product-area]
products: [vault-core, smart-contracts]
sources: [raw/vault-core/5.8/path/to/source.md]
vault_version:
  introduced: "5.0"          # When this fact/feature first appeared (null = unknown)
  verified: ["5.8"]          # Versions explicitly checked against
  current: true              # Is this the latest known state?
last_updated: YYYY-MM-DD
---
```

### Version Tracking

TM Vault Core releases ~quarterly minors (5.0 → 5.8) and ~yearly majors. Each release may change documentation. The wiki tracks version provenance to handle drift:

- **`vault_version.introduced`**: The VC version where this fact/feature first appeared (Kubernetes `min-version` pattern)
- **`vault_version.verified`**: List of VC versions this page was explicitly checked against
- **`vault_version.current`**: `true` if this reflects the latest known state; `false` if superseded
- When a feature is deprecated: set `current: false`, add `superseded_by: "[[new-page]]"`, use `> **DEPRECATED (vX.Y):**` callout
- When a claim is replaced: keep old content, add `> **SUPERSEDED (vX.Y):**` callout linking to successor

### Callout Vocabulary (Version-Related)

| Callout | Meaning | When to use |
|---------|---------|-------------|
| `> **SUPERSEDED (vX.Y):**` | Replaced by a newer version | Claim replaced by new behavior in version X.Y |
| `> **DEPRECATED (vX.Y):**` | Still works but vendor advises migration | API/feature deprecated in X.Y, removal expected next major |
| `> **STALE:**` | Last verified against old version, needs re-check | No source checked since specified version |
| `> **CONTRADICTION:**` | Two pages disagree | Cross-version conflicts detected during lint |

### Categories
- **Entities**: Specific products, components, tools (Vault Core, Smart Contracts, Edge Functions)
- **Concepts**: Abstract ideas, frameworks, patterns (Financial Model, Hooks, Parameters)
- **Sources**: Per-section summaries of ingested raw documents
- **Analyses**: Cross-product comparisons, deep-dives, synthesis
- **Reference**: API signatures, type definitions, enum values, lookup tables

### Cross-References
- Use `[[wiki links]]` format (Obsidian-compatible)
- Every page must have ≥1 inbound link (checkable via Obsidian graph view)
