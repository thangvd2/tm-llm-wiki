# Z.AI GLM Coding Plan — Usage Policy Reference

> Source: https://docs.z.ai/devpack/usage-policy + https://docs.z.ai/legal-agreement/subscription-terms
> Retrieved: 2026-04-21
> Purpose: Project-specific guide for using GLM Coding Plan compliantly within TM LLM Wiki.

---

## What GLM Coding Plan Covers

Subscription for **AI-powered coding** within **designated coding/IDE tools** (OpenCode, Claude Code, Kilo Code, etc.). Quota is **personal-use only**, tied to a single account.

---

## TM LLM Wiki: How Each Operation Maps to Coding Scenarios

Every wiki operation produces or modifies **files in the git repo**. This is the key justification — all work is development activity.

| Wiki Operation | What Happens (File-Level) | Coding Scenario |
|----------------|---------------------------|-----------------|
| **Ingest** | Read `raw/*.md` → Write/update 10-15 files in `wiki/` → Update `index.md` + `log.md` | ✅ File I/O within a git repo. Code generation (markdown) with structured output. |
| **Query** | Read `wiki/index.md` → Read relevant wiki pages → Write answer page to `wiki/` → Update `index.md` | ✅ Search + synthesis + file creation within codebase. |
| **Lint** | Scan all `wiki/*.md` → Check for orphans, contradictions, stale claims → Write fixes to wiki pages | ✅ Static analysis + automated refactoring of markdown files. |
| **Scrape** | Run `scripts/scrape-*.js` → Write output to `raw/{section}/` → Download images to `raw/{section}/_assets/` | ✅ Script execution + file generation within project structure. |
| **Review** | Read files across `wiki/`, `raw/`, `scripts/`, `.ai-sync/` → Report issues → Edit files | ✅ Code review with file-level modifications. |
| **Config update** | Edit `.ai-sync/RULES.md` or `CONTEXT.md` → Run `sync.py` → Commit generated configs | ✅ Config management + build step. |

### Why This Is Coding, Not General Chat

- Every operation has **inputs** (files in repo) and **outputs** (new/modified files in repo)
- The project has **version control** (git), **build steps** (`sync.py`), **linting** (`ruff check`), **structure** (directory conventions)
- Wiki pages are **generated artifacts** — like compiled output from source code
- The `raw/` directory is **source code** (immutable inputs), `wiki/` is **compiled output** (LLM-generated)

---

## Allowed Usage

| Activity | Why OK |
|----------|--------|
| Write/edit/review wiki pages in OpenCode | Produces files in git repo |
| Use subagents (explore, oracle, librarian) for wiki operations | Explicitly allowed: *"use methods like Subagent to make concurrent model calls"* |
| Run scraping scripts, process output | Script execution within project, output goes to repo |
| Ingest sources, build wiki structure | File creation/editing within codebase |
| Cross-reference, detect contradictions | Static analysis over markdown files |
| Query wiki and file answers back | Read → synthesize → write, all within repo |

---

## Prohibited Usage

| Activity | Consequence |
|----------|-------------|
| Share account with others | Account ban |
| Use for non-coding requests (general Q&A unrelated to this repo) | Throttle (auto-lifted when coding resumes) |
| Call Z.AI API directly from scripts or external apps | Account ban |
| Resell/redistribute quota | Account ban |
| **3+ violations** | Permanent account ban |

---

## Risk Control

Z.AI **automatically detects**:
- Non-coding usage → restrict benefits, auto-lift when coding usage resumes
- Account sharing → restrict/suspend/ban
- Bulk/automated usage on behalf of others → same

---

## TM LLM Wiki: Practical Guidelines

### 1. Frame Every Request as a Repo Operation

| ❌ Risky (non-coding framing) | ✅ Safe (coding framing) |
|-------------------------------|--------------------------|
| "Explain how Vault Core Smart Contracts work" | "Ingest `raw/smart-contracts-clv4/` and create wiki pages for Smart Contract concepts" |
| "What is the financial model?" | "Create `wiki/concept-financial-model.md` from `raw/vault-core-overview/vault_core_overview_financial_model.md`" |
| "Summarize this document" | "Process this source through ingest pipeline, update index.md and log.md" |
| "Compare X and Y" | "Create analysis page `wiki/analysis-x-vs-y.md` with cross-references" |
| "Check for problems" | "Run lint operation on wiki/, report orphans and contradictions" |

### 2. Off-Peak for Heavy Operations

Batch operations should run during off-peak (higher concurrency):
- Scrape 50+ pages from Thought Machine portal
- Batch-ingest multiple sources at once
- Full wiki lint pass across all pages

### 3. Reasonable Concurrency

- 2-5 parallel subagents: fine for explore/librarian research
- Don't fire 10+ agents simultaneously for trivial tasks
- Oracle/Metis/Momus are expensive — use sparingly, only for genuine need

### 4. All Work Stays in OpenCode

- Scraping via Playwright scripts in `scripts/` ✅
- Ingest via OpenCode file operations ✅
- Calling Z.AI API from custom Python script ❌

### 5. Single User, Single Account

Never share credentials. TM LLM Wiki is a personal project by a single developer.

---

## Decision Framework

```
User request → Can it be framed as a file operation within this repo?
  YES → Coding scenario → Safe to proceed
  NO  → Is it general knowledge/Q&A with no repo output?
        YES → Non-coding → Reframe or avoid
        NO  → Unclear → Reframe as repo work before proceeding

Every wiki operation should:
1. READ from files in the repo (raw/, wiki/, scripts/, .ai-sync/)
2. PROCESS via LLM reasoning
3. WRITE to files in the repo (wiki/, index.md, log.md)
4. VERIFY via lint/diagnostics

If step 3 is missing, the request may not be a coding scenario.
```

---

## Key Quotes from Policy

> *"The GLM Coding Plan is a subscription service designed for developers' code-assistance scenarios."*

> *"The usage quota under this plan may only be used within coding/IDE tools designated or recognized by Z.ai."*

> *"If the system detects that the subscription is being used for requests clearly unrelated to coding scenarios, certain subscription benefits may be restricted to maintain fairness and platform stability. Once normal coding-related usage resumes, these restrictions may be automatically lifted."*

> *"Violating the Usage Rules three or more times will result in an account ban."*
