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
