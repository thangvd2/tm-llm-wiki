# Shared Coding Rules

> **AUTO-GENERATED into AGENTS.md and .agents/rules/project-rules.md. DO NOT edit those files directly.**
> Edit this file, then run `python .ai-sync/sync.py`.

---

## BRANCH RULES (MANDATORY)

- NEVER commit directly to `master` or `dev`. Both are protected.
- ALWAYS create a feature branch from `dev`: `git checkout -b {type}/{description} dev`
- Branch naming: `feature/`, `fix/`, `security/`, `refactor/`, `docs/`, `chore/`
- After work is done: `gh pr create --base dev`
- Feature PR → dev: use `--squash` (keep dev history clean: 1 feature = 1 commit)
- Release PR → master: use `--merge` (keep shared history, prevent future conflicts)
- NEVER merge any PR without explicit user confirmation. Always ask first.

## RELEASE RULES (MANDATORY)

- Release PR is ALWAYS `dev` → `master`, merged with `gh pr merge <N> --merge` (NOT --squash)
- ALWAYS update `VERSION`, relevant source headers, and `RELEASE_NOTES.md` ON `dev` BEFORE creating release PR
- NEVER squash or rebase dev → master — this destroys shared history and causes permanent conflicts
- Full process: see `CONTRIBUTING.md` → "Release Process (dev → master)"

## PHASE/FEATURE DEVELOPMENT WORKFLOW (MANDATORY)

Every new feature or phase follows this 5-step workflow. Do NOT skip steps.

### Step 1: Consult Gemini on direction

Before creating any plan files, ask Gemini to evaluate the proposed direction.
Present 3-4 candidate options with trade-offs. Gemini's evaluation informs
the choice — the user makes the final decision.

### Step 2: Create plan files (if applicable)

For multi-step features, create a plan directory with:
- `INDEX.md` — overview, architecture, sub-task table, design decisions
- Sub-task files — one per sub-task (interface, behavior, constraints,
  completion criteria as checkboxes, target files)

For single-step features, document the approach in the PR description.

Branch: `docs/feature-N-plans` or `feature/feature-name` from `dev`.

### Step 3: Gemini review of plan (multiple rounds)

Gemini reviews the plan PR. Fix all REAL issues. Re-review until Gemini
confirms all fixes (CONFIRMED verdict). Merge the plan PR only after
Gemini confirmation.

### Step 4: Implement

Create branch from `dev`. Implement all sub-tasks. Run lint + tests before
committing. Push and create PR.

### Step 5: Gemini review of implementation (multiple rounds)

Gemini reviews the implementation PR using the review prompt pattern (see
GEMINI CONSULTATION PROTOCOL below). Fix all REAL issues (FALSE POSITIVE
issues may be skipped with justification). Re-review until Gemini gives
CONFIRMED verdict with 0 REAL issues. Ask the user for merge confirmation.

**Anti-false-positive rules:** For each Gemini finding, classify as:
- REAL → fix it
- SPECULATIVE → consider fixing if low-cost
- FALSE POSITIVE → skip, note in response

## MANUAL VS AI-AGENT DECISION

For each feature, decide whether to implement manually or delegate to an
AI agent (OpenCode/GLM, agy/Gemini, etc.).

### 3-Question Checklist (ask in order)

1. **Does it modify core control flow or state management?**
   → If YES: implement manually (bugs here cause loops, silent skips, corruption)
2. **Does it run `git`/`gh`/`subprocess` commands that could fail silently?**
   → If YES: implement manually (LLM agents miss edge cases)
3. **Is it a safety-critical gate?** (test skip, merge gate, auth check)
   → If YES: implement manually (wrong skip ships untested code)
   → If NO to all: AI agent is fine

### What each method is good for

**Manual (direct implementation + Gemini review):**
- Core control flow, state management, security logic
- Subprocess/git logic (file detection, branch operations)
- Safety gates (test skip, merge decisions)
- New architectural patterns

**AI Agent (builder implements + Gemini reviews + fix loop):**
- Config fields + docs (mechanical)
- Isolated utility modules (pure functions, no side effects)
- Test coverage expansion
- CRUD-style features

### Default rule

**Manual implementation is the default** for core/safety-critical changes.
AI agents are reserved for mechanical/doc/test work.

## GEMINI CONSULTATION PROTOCOL

### When to consult Gemini (3 mandatory points)

| Point | When | What for |
|-------|------|----------|
| **Before planning** | After choosing a direction | Design evaluation — present options, get recommendation |
| **After planning** | Plan/PR created, before implementation | Plan review — catch design flaws before coding |
| **After implementation** | Implementation PR created, before merge | Code review — fresh-context verification |

### Review prompt generation (MANDATORY pattern)

> **Note:** This pattern complements the EXTERNAL REVIEWER INTEGRATION section
> below — same two-part prompt structure. Keep both in sync if either changes.

Always use a **two-part** prompt: (1) base rules context, (2) specific
verification instructions.

**Step 1:** Build the base prompt with project rules + context.

**Step 2:** Append specific context + verification steps, then invoke agy:

```bash
agy -p "<base prompt with project rules>

CONTEXT: <what this PR does and why — 2-3 sentences>

Files changed:
- <file1> — <what changed>
- <file2> — <what changed>

YOUR TASK — fresh-context verification per project rules. READ-ONLY: do NOT
modify files or commit.

1. READ <specific files + line numbers to check>
2. READ <the code the PR claims to fix/modify>
3. VERIFY <each factual claim — with how to check>
4. CHECK <for regressions / scope / completeness>

Report as CONFIRMED / CHALLENGE / ADDITIONAL CONCERN. 2-pass review." \
  --model "Gemini 3.5 Flash (High)" \
  --dangerously-skip-permissions --add-dir "$(pwd)" --print-timeout 3600s
```

**Why two-part:** The base prompt injects project rules consistently. The
appended section adds PR-specific targets that change every review.

Key: "fresh-context" + "READ-ONLY" frames independent check; numbered READ
steps prevent skimming; VERIFY forces claim-checking before flagging.

### Multi-round review pattern

Gemini reviews are iterative. Continue fixing + re-reviewing until:
- Plan review: Gemini confirms all fixes (CONFIRMED verdict)
- Implementation review: Gemini gives CONFIRMED with 0 REAL issues
  (FALSE POSITIVE issues may be skipped with justification)

### Issue tracing rules

Before fixing any Gemini finding:
1. Trace each issue to the actual code (read the file + line)
2. Classify: REAL / SPECULATIVE / FALSE POSITIVE
3. Fix only REAL issues
4. Note skipped issues in the response
5. After fixing, re-request Gemini review

## POST-FEATURE CHECKLIST (MANDATORY)

After each feature/phase ships, verify these items that are easy to miss:

1. **`--help` on every new CLI command** — Run `<command> --help` and verify
   it produces valid output (not an error).
2. **Write a learnings doc** — After complex work, write a reference doc to
   `docs/learnings/` with format `YYYY-MM-DD-short-description.md`. Document
   what was learned, what went wrong, and what to do differently next time.
3. **Check docs/learnings/ at session start** — Before starting a new task,
   read relevant learnings per the MEMORY SYSTEM quick router table.
4. **Update INDEX.md** — If using phase files, mark sub-tasks as Shipped
   with PR number + version after merge.


## BEFORE EVERY COMMIT

1. `ruff check .` — must pass on changed files
2. Wiki integrity check — after every ingest, verify `index.md` and `log.md` are updated, no orphan pages introduced
3. Linter/diagnostics on changed files — no new errors
4. No hardcode secrets/credentials
5. No silent `except: pass` — must log the error
6. If ANY file in `.ai-sync/` was edited — run `python .ai-sync/sync.py` to regenerate platform configs, then commit the generated files in the SAME commit

## WIKI INTEGRITY RULES (MANDATORY)

- Raw sources are **IMMUTABLE** — LLM never modifies files in `raw/` directory
- Raw sources are organized by product and version: `raw/vault-core/5.8/`, `raw/additional-products/latest-YYYY-MM/`
- After every ingest, verify `index.md` and `log.md` are updated
- No orphan pages introduced — every wiki page must be linked from `index.md` or another page
- Every wiki page must have at least one inbound link (checkable via Obsidian graph view)
- Every wiki page MUST include `vault_version` frontmatter field for version provenance
- Version-related callouts (use exact format for grep-ability):
  - `> **SUPERSEDED (vX.Y):**` — claim replaced by newer version, link to successor
  - `> **DEPRECATED (vX.Y):**` — still functional but vendor advises migration
  - `> **STALE:**` — last verified against old version, needs re-verification
  - `> **CONTRADICTION:**` — two pages disagree, investigate version conflict
- When re-scraping a new VC version: create new `raw/vault-core/X.Y/` folder, do NOT overwrite old version folders
- Breaking changes between versions get dedicated `analysis-` pages (e.g., `analysis-vault-core-5.9-breaking-changes.md`)

## INGEST PROTECTION RULES (MANDATORY)

### Rollback Protection (Undo Bad Ingest)

- **BEFORE every ingest**: create a git snapshot commit of all current wiki files
  - `git add wiki/ && git commit -m "snapshot: pre-ingest [source-name]"`
  - If ingest result is unsatisfactory: `git revert HEAD` or `git reset --soft HEAD~1` to restore
  - Each ingest = 1 atomic commit → easy to revert cleanly without partial state
- **NEVER ingest without a pre-ingest snapshot.** No exceptions.

### Dedup Protection (Avoid Re-ingesting Same Source)

- **BEFORE every ingest**: check if source(s) were already processed:
  1. Check `log.md` — search for the raw source path (e.g. `raw/vault-core-overview/`)
  2. Check wiki page frontmatter `sources:` field — grep for the raw source path
  3. If source already appears in log AND on wiki pages → **SKIP** (already ingested)
  4. If source appears in log but wiki pages seem incomplete → **APPEND** (add missing content, do not recreate existing pages)
  5. If source not found anywhere → **NEW INGEST** (proceed normally)
- **NEVER assume a source hasn't been ingested.** Always verify first.
- Every `log.md` entry MUST include `sources:` listing all raw files processed in that ingest

## CODE RULES

- Match existing patterns in the codebase
- Files > 300 lines need justification in commit/PR
- No `as any`, `@ts-ignore`, `@ts-expect-error`
- No deleting tests to make them pass
- Bug fixes: fix minimally, never refactor while fixing
- New Python dependencies: add to `requirements-dev.txt` (dev) or `requirements.txt` (prod) AND explain why

## MANDATORY PRE-PUSH REVIEW (EVERY FEATURE)

Before pushing ANY new feature or significant change:
1. **Self-review**: Audit code for edge cases, race conditions, thread safety, and error handling
2. **Test coverage**: New backend logic MUST have corresponding tests. No exceptions.
3. **No tests = not done**: If you can't write tests for it, explain why in the PR and flag it as untested
4. **Thread safety audit**: Any code using threading, locks, timers, or shared state MUST be reviewed for:
   - Lock ordering (deadlock risk)
   - Race conditions (concurrent access without locks)
   - Resource leaks (timers, threads, connections not cleaned up)
   - Stale references (captured variables in callbacks that may be outdated)

## CODE REVIEW RULES

- All code reviews MUST follow the 2-pass process and evidence template in `.ai-sync/workflows/code-review.md`
- Every flagged issue MUST include FOR and AGAINST evidence + full dependency trace
- Issues without dependency trace = SPECULATIVE. Issues without AGAINST evidence = incomplete
- Verdicts: REAL (confirmed) / SPECULATIVE (unverified) / FALSE POSITIVE (mitigated)

## MANDATORY SELF-VERIFICATION CHECKLIST (BEFORE SAYING "DONE")
You MUST NOT report a task as complete until EVERY item below passes.
No exceptions. If you skip any item, the user WILL find the bug on double-check.

### For EVERY code change (Python, YAML):
- [ ] NOT on `master` or `dev` — must be on a feature branch (`feature/`, `fix/`, `security/`, `refactor/`, `docs/`, `chore/`)
- [ ] `ruff check .` passes on changed files
- [ ] `lsp_diagnostics` shows no NEW errors on changed files
- [ ] No duplicate lines, duplicate comments, or copy-paste artifacts
- [ ] No unused imports, unused variables, or dead code left behind
- [ ] Every new shared state variable has cleanup path on shutdown/exit
- [ ] Git diff reviewed line-by-line — no accidental inclusions (log files, screenshots)

### For wiki changes (markdown pages):
- [ ] `index.md` updated with new/modified pages
- [ ] `log.md` appended with entry (date, operation, pages touched, vault_version)
- [ ] No orphan pages — all new pages linked from index or another page
- [ ] Cross-references use `[[wiki links]]` format (Obsidian-compatible)
- [ ] No modifications to files in `raw/` directory
- [ ] `vault_version` frontmatter field present on all content pages
- [ ] Version conflicts flagged with appropriate callout (`SUPERSEDED` / `DEPRECATED` / `STALE` / `CONTRADICTION`)
- [ ] Frontmatter (if present) follows established YAML schema

### For backend Python changes:
- [ ] `pytest tests/ -q` passes (or specific test file if targeted)
- [ ] New functions with threading/locks/timers: verify lock ordering, cancel paths, cleanup on error

### For CI/YAML changes:
- [ ] YAML syntax valid (no duplicate keys, correct indentation)
- [ ] New jobs added to branch protection required checks
- [ ] Path filters cover all relevant file patterns
- [ ] If adding `if:` conditions — verified that skipped jobs still satisfy branch protection

### For docs/config changes (AGENTS.md, CONTRIBUTING.md, VERSION):
- [ ] VERSION file matches source headers
- [ ] Cross-references between docs are accurate (section names, file paths)
- [ ] No contradictory rules between AGENTS.md and CONTRIBUTING.md

### For release PRs:
- [ ] `gh pr merge <N> --merge` (NOT --squash)
- [ ] VERSION, source headers, RELEASE_NOTES.md all updated on dev BEFORE creating PR
