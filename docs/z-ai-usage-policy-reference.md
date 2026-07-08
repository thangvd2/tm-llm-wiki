# Z.AI GLM Coding Plan — Usage Policy Reference

> Sources (retrieved 2026-07-06):
> - Overview: https://docs.z.ai/devpack/overview
> - Usage Policy: https://docs.z.ai/devpack/usage-policy
> - Tool Integration: https://docs.z.ai/devpack/tool/others
> - Subscription Terms: https://docs.z.ai/legal-agreement/subscription-terms
>
> Purpose: Project-specific guide for using GLM Coding Plan compliantly within TM LLM Wiki.
> Re-check periodically — Z.ai may adjust products, pricing, and rules (see Subscription Terms §3 "Service and Fee Adjustments").

---

## What GLM Coding Plan Covers

A subscription package designed specifically for **AI-powered coding**, usable within **officially supported coding/IDE tools**. Quota is **personal-use only**, tied to a single account.

### Supported Tools

The plan applies to coding tools such as **Claude Code, Cline, and OpenCode** (plus any other tools explicitly recognized by Z.ai — check the Tool Integration page for the current list).

### Supported Models

All plans support **GLM-5.2**, GLM-5-Turbo, and GLM-4.7.

### Pricing

Starts at **$18/month** (Lite). Pro and Max tiers target high-frequency, complex projects.

---

## Quota & Limits

Usage is capped on a **5-hour** and **weekly** basis (visible in Usage Statistics). One prompt ≈ 15–20 model invocations. The monthly available quota is roughly **15–30× the subscription fee** (weekly caps already factored in).

| Plan   | 5-Hour Limit (dynamically refreshed; resets 5h after consumption) | Weekly Limit (resets every 7 days) |
|--------|-------------------------------------------------------------------|------------------------------------|
| Lite   | ~80 prompts                                                       | ~400 prompts                       |
| Pro    | ~400 prompts                                                      | ~2,000 prompts                     |
| Max    | ~1,600 prompts                                                    | ~8,000 prompts                     |

### Rate / Concurrency

Rate (concurrency) limits follow **Max > Pro > Lite** and are dynamically adjusted by the platform based on resource availability.

Recommended concurrent projects:
- **Lite** — a single project at a time
- **Pro** — 1–2 projects simultaneously
- **Max** — 2+ projects simultaneously

Within a project you may use **Subagents** for concurrent model calls (explicitly supported).

### Exclusive MCP Access

All plans include **Vision Understanding, Web Search MCP, Web Reader MCP, and Zread MCP**.

| MCP                             | Limit basis                                                                                          |
|---------------------------------|------------------------------------------------------------------------------------------------------|
| Web Search / Web Reader / Zread | Shared **monthly** quota: Lite=100, Pro=1,000, Max=4,000. Unavailable until next cycle once exhausted. |
| Vision Understanding            | Shares the model's **5-hour** prompt pool. Resets at the end of the 5-hour window.                   |

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
| Write/edit/review code (and wiki pages) in supported coding tools | Core use case |
| Use subagents (explore, oracle, librarian) for concurrent model calls | Explicitly supported |
| Run scraping scripts, process output, ingest sources, build wiki structure | Script execution + file generation within project structure |
| Lint, detect contradictions, cross-reference, query wiki and file answers back | Static analysis + file creation within codebase |
| Rate/concurrency within plan tier | Lite = 1 project, Pro = 1–2, Max = 2+ concurrent |

## Prohibited Usage

| Activity | Consequence |
|----------|-------------|
| Share account/credentials with anyone (colleagues, friends, customers, orgs) — by sharing, renting, lending, transferring, or sublicensing | Feature restriction, quota reduction, suspend/terminate, quota reclaim |
| Use quota for general-purpose API access, or invoke model APIs directly from your own apps, bots, websites, SaaS, or systems | Benefit restriction / account action |
| Resell, repackage, aggregate, proxy, or provide GLM Coding Plan to third parties (paid or free); offer model capabilities as a service to others | Benefit restriction / account action |
| Use through unsupported tools (e.g., SDK-based access or unauthorized third-party integrations) | Benefit restriction |
| Bulk / automated usage on behalf of others | Same as above |
| **More than 3 violations** of the Usage Rules | **Permanent account ban** |

---

## Risk Control & Appeals

Z.AI **automatically detects** account sharing, unsupported-tool usage, bulk/automated usage on behalf of others, and resale. Responses include rate limiting, account freezing, and other restrictions.

**If flagged:** view the risk notice on the **Plan Overview page** in the console and **submit an appeal** from there.

---

## Subscription, Renewal & Refunds

- **Auto-renews** at the end of each billing cycle.
- **Charge order:** bonus balance → cash balance → linked payment method (e.g., WeChat Pay, Alipay).
- **Cancel** via *Profile icon → Payment Method → Subscription* (left menu). To avoid the next renewal charge:
  - Usage Policy page: cancel **at least 3 days** before the next billing date.
  - Subscription Terms §2: cancel **at least 24 hours** before the end of the current term.
  - → **Cancel early (≥3 days) to be safe.** Cancellation keeps access until the paid term ends.
- **Refunds:** once purchased, the subscription is considered confirmed and **refunds are not supported** — even if quota is unused.
- **Liability cap:** Z.ai's total direct liability is capped at the amount you spent in the most recent calendar month (except where law requires otherwise).

---

## Tool Configuration (Coding Endpoint)

GLM Coding Plan supports both **Anthropic** and **OpenAI** protocols. Configure the correct Base URL:

| Protocol                  | Base URL                                  |
|---------------------------|-------------------------------------------|
| Anthropic Messages        | `https://api.z.ai/api/anthropic`          |
| OpenAI Chat Completions   | `https://api.z.ai/api/coding/paas/v4`     |

- API Provider (e.g. in Cline): `OpenAI Compatible`
- Model code examples: `glm-5.2`, `glm-5-turbo`, `glm-4.7`
- Context window: **GLM-5.2 = 1,000,000**; other models = 200,000
- Uncheck "Support Images" unless using Vision.

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

### 4. All Work Stays in Supported Coding Tools

- Scraping via Playwright scripts in `scripts/` (executed through OpenCode) ✅
- Ingest via OpenCode file operations ✅
- Calling Z.AI API directly from custom Python/JS scripts or external apps ❌

### 5. Single User, Single Account

Never share credentials. TM LLM Wiki is a personal project by a single developer.

---

## Decision Framework

```
User request → Can it be framed as a file operation within this repo, in a supported tool?
  YES → Coding scenario → Safe to proceed
  NO  → Does it require direct API access or use outside supported tools?
        YES → Prohibited → Do not proceed
        NO  → General Q&A / non-codebase work → Avoid or minimize; keep it incidental

Every wiki operation should:
1. READ from files in the repo (raw/, wiki/, scripts/, .ai-sync/)
2. PROCESS via LLM reasoning
3. WRITE to files in the repo (wiki/, index.md, log.md)
4. VERIFY via lint/diagnostics

If step 3 is missing, the request may not be a coding scenario.
```

---

## Key Quotes from Policy

> *"The GLM Coding Plan is a subscription package designed specifically for AI-powered coding."* — Overview

> *"Subscription benefits are exclusive to the subscriber: Account sharing or multi-user access is prohibited."* — Usage Policy

> *"GLM Coding Plan may only be used within officially supported tools and products. Use in unsupported tools may result in restricted benefits."* — Usage Policy

> *"If the system detects usage through unauthorized or unsupported tools (such as SDK-based access or other third-party integrations), some subscription benefits may be restricted to ensure fairness and service stability."* — Subscription Terms §4.2

> *"You may not resell, sub-resell, repackage, aggregate, proxy or otherwise provide the GLM Coding Plan to any third party, whether on a paid or free basis."* — Subscription Terms §4.2

> *"Violations of the Usage Rules may trigger risk control measures, including rate limiting, account freezing, or other restrictions. Accounts with more than three violations may be banned."* — Usage Policy

> *"Once a subscription service is purchased, it is considered confirmed, and refunds are not supported. Even if you have not used up your plan, the fees cannot be refunded."* — Usage Policy (Refund Policy)
