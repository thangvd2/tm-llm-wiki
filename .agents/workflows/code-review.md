# Code Review Workflow

> **Agent-assisted code review procedure.**
> Use this workflow when reviewing PRs or preparing code for review.
> Shared between OpenCode and Antigravity.

---

## Phase 1: Context Gathering

Before reviewing any code:
1. **Read the PR description** — What problem does this solve? What approach? Known limitations?
2. **Check architecture decisions** — Does this relate to any existing ADR or constraint?
3. **Identify scope** — How many files changed? What subsystems affected?

## Phase 2: Security Review

### Mandatory Checks
- [ ] No hardcoded secrets
- [ ] No eval() or dynamic code execution
- [ ] No unsanitized user input
- [ ] No SQL string interpolation
- [ ] Auth checks on all protected routes
- [ ] Input validation present

## Phase 3: Code Quality Review

### Structure
- [ ] Files under 300 lines
- [ ] Functions under 50 lines
- [ ] Nesting under 3 levels
- [ ] Clear separation of concerns
- [ ] No circular dependencies

### Patterns
- [ ] Error handling is explicit (no bare catch)
- [ ] Types are complete (no `any`)
- [ ] Resources are properly closed
- [ ] Thread safety verified (if applicable)

## Phase 4: Test Coverage

### Required Tests
- [ ] Happy path covered
- [ ] Edge cases handled
- [ ] Error paths tested
- [ ] Integration points verified

## Phase 5: Review Summary

Generate structured review:
- 🟢 **Approved Items** — Good practices observed
- 🟡 **Suggestions** — Optional improvements (non-blocking)
- 🔴 **Required Changes** — Must fix before merge
- 📋 **Verification** — Tests pass, build succeeds, no new warnings

## Decision Matrix

| Finding | Severity | Action |
|---------|----------|--------|
| Security vulnerability | 🔴 Critical | Block merge, fix immediately |
| Missing tests | 🔴 High | Block merge |
| Type errors | 🔴 High | Block merge |
| Lint violations | 🟡 Medium | Fix or document exception |
| Style inconsistencies | 🟡 Medium | Suggest fix |
| Minor improvements | 🟢 Low | Optional |

## Anti-False-Positive Rules (MANDATORY)

When flagging a potential issue during code review, you MUST:
1. **Read ALL files in the dependency chain** — not just the immediate file.
2. **Trace the FULL call path** — callers, callees, related modules.
3. **Check mitigations FIRST** — before flagging, ask: "Is this already handled elsewhere?"
4. **Provide FOR and AGAINST evidence** — every flagged issue MUST include:
   - EVIDENCE FOR: why this seems like a real issue (with file:line)
   - EVIDENCE AGAINST: why this might NOT be a real issue — check guards, related code, production config
   - DEPENDENCY CHAIN: list ALL related files/modules that affect this issue
5. **Classify before reporting** — every issue gets one of:
   - `REAL`: Confirmed with full dependency trace. Has user impact.
   - `SPECULATIVE`: Plausible but unverified. Needs deeper investigation.
   - `FALSE POSITIVE`: Initially seemed real, but mitigated elsewhere.

**Issue without full dependency trace = SPECULATIVE, not actionable.**
**Issue without AGAINST evidence = incomplete review.**

## Review Prompt Template (For Delegated Reviews)

When firing explore/librarian agents for code review, include this structure in the prompt:

```
For EACH potential issue found, you MUST provide:

1. ISSUE: [one-line description]
2. FILES READ: [list ALL files you actually read to verify this — not just where the issue appears]
3. EVIDENCE FOR: [why this seems like a real issue, with file:line references]
4. EVIDENCE AGAINST: [why this might NOT be a real issue — check mitigations, guards,
   fallbacks, related modules, production config. If you cannot find any against-evidence,
   state "No against-evidence found after checking [files checked]"]
5. DEPENDENCY CHAIN: [list all related files/modules that could affect whether this is real]
6. VERDICT: REAL / SPECULATIVE / FALSE POSITIVE

DO NOT flag issues without reading the full dependency chain.
DO NOT skip AGAINST evidence — it is MANDATORY.
```

## 2-Pass Review Process (For Release Reviews & Security Audits)

For release PRs, security audits, and critical code changes — use this two-pass process:

**Pass 1 — Flag issues (broad scan):**
- Review different areas (backend, frontend, tests)
- Flag potential issues using the evidence template above
- Collect ALL flagged issues — do not filter yet

**Pass 2 — Verify issues (deep investigation):**
- For EACH flagged issue, investigate to verify
- The verifier MUST:
  - Read the FULL dependency chain (not just the file where the issue was found)
  - Trace every lock acquisition, every fallback path, every related module
  - Provide FOR and AGAINST evidence
  - Give final verdict: REAL, SPECULATIVE, or FALSE POSITIVE
- Only REAL issues are reported to the user
- SPECULATIVE issues are reported with clear caveat
- FALSE POSITIVE issues are documented with explanation of why they're safe

**Why 2 passes?** A single pass creates confirmation bias — agents find "evidence" to support their initial concern without checking if it's already mitigated. Two passes separate "detection" (Pass 1) from "verification" (Pass 2), dramatically reducing false positives.
