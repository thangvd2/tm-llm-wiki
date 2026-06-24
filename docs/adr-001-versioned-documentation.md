# ADR-001: Versioned Documentation Strategy

## Status

Accepted (2026-06-16)

## Context

Thought Machine ships Vault Core on a roughly quarterly minor cadence (5.0 through 5.8 so far) and a yearly major. Every release comes with refreshed documentation, and those docs are gated behind TM Auth. When a major sunsets, the old versioned portal URLs can disappear without notice.

The two cadences carry different risks. A minor release is mostly additive: new endpoints, new parameters, new enum values. Old claims usually still hold, and the main job is recording that a page was checked against the new minor. A major release is destructive: APIs get removed, behaviors change, and a claim that was true in 5.x may be flatly wrong in 6.0. The versioning strategy has to handle both, which is why the callout vocabulary distinguishes DEPRECATED (vendor advises migration, still works) from SUPERSEDED (behavior replaced outright).

Before this decision, the wiki had no version tracking worth speaking of. The only place a version appeared was buried inside the `source_url` path of a raw file. A claim on a wiki page might say "Smart Contracts deploy via Edge Functions," but nothing recorded whether that was true in 5.4, in 5.8, or in some mix of the two. The synthesis layer was a flattened soup of facts drawn from whatever happened to be scraped last. Compounding the risk, the docs sit behind TM Auth, so a URL that worked at ingest time may later return a login wall or a 404. If provenance is not captured locally at ingest, it cannot be recovered later from the upstream source.

This turns into a real problem the moment 5.9 or 6.0 docs arrive. There is no way to answer: was this claim already checked against the new version? Is it still current, or did the release notes contradict it? Should the page be rewritten, or appended to? Without version provenance, re-ingesting a new release silently overwrites older knowledge, and contradictions hide instead of surfacing.

Concretely, a re-ingest without version tracking plays out like this: the LLM scrapes 5.9, notices a Smart Contracts page now mentions a new deployment flag, edits the `entity-smart-contracts.md` page to mention the flag, and moves on. A reader six months later cannot tell whether the flag existed in 5.8, whether the old behavior still works, or whether the page has been checked against 5.9 at all. The wiki degrades into an unattributed merge of the most recent scrape, and the raw snapshots, which do preserve version, are never consulted because nothing points back to them.

The goal of this ADR is to make version a first-class, queryable property of every wiki page, not an accident of when a source was scraped.

Scope note: this ADR governs Vault Core versioning specifically, since VC is the product with the quarterly release cadence and the most version-sensitive content. Other TM products tracked under `raw/additional-products/` (Hibernator, Vault Bridge, and so on) follow the same frontmatter and callout conventions, but their versions are tracked under their own folder roots rather than under `vault-core/`. The mechanisms below are general; the version numbers are VC-specific.

## Decision

Adopt a multi-layer version tracking strategy. No single mechanism is enough on its own; the layers reinforce each other. Raw snapshots preserve the immutable source per version, frontmatter records provenance per page, callouts record transitions inline, a content-type policy keeps each kind of page aging appropriately, and breaking changes are corralled into dedicated pages so they stay discoverable. Each layer answers a different question: "what did the source say?", "when was this checked?", "what replaced it?", "how should this page type age?", and "where do I find the upgrade story?"

### 1. Raw sources organized by version

Mirror the Docusaurus snapshot pattern. Each Vault Core minor gets its own folder under `raw/`:

```
raw/vault-core/5.8/<section>/
raw/vault-core/5.9/<section>/   (future)
```

Old version folders are never overwritten when a new release is ingested. This preserves the immutable source of truth for every version the wiki has ever seen, so any wiki claim can be traced back to the exact source it came from. A new release means a new folder, full stop.

### 2. Wiki frontmatter `vault_version` field

Every wiki page carries a `vault_version` block in its frontmatter, modeled on Kubernetes' `min-kubernetes-server-version` convention:

```yaml
vault_version:
  introduced: "5.0"            # when the fact or feature first appeared
  verified: ["5.6", "5.8"]     # versions explicitly checked against
  current: true                # does this reflect the latest known state?
```

`introduced` records the first version a fact showed up. `verified` lists every version the page was explicitly checked against, not every version that exists. `current` flags whether the page still reflects the latest release and flips to `false` once a newer release supersedes the claim. This keeps provenance queryable by Dataview and grep, not buried in prose.

Because the field is structured YAML, it composes with Obsidian's Dataview plugin. A query like "list every page verified against 5.8 but not yet against 5.9" becomes a one-liner rather than a manual audit:

```dataview
LIST FROM "wiki"
WHERE contains(vault_version.verified, "5.8")
  AND !contains(vault_version.verified, "5.9")
  AND vault_version.current = true
```

The callouts, by contrast, are plain text with fixed prefixes, so they are queried with grep rather than Dataview. `grep -rn "> \*\*STALE:\*\*" wiki/` lists every page overdue for a re-check, and `grep -rn "> \*\*CONTRADICTION:\*\*" wiki/` lists every unresolved conflict. The two query surfaces cover different needs: Dataview answers "which versions was this checked against," and grep answers "which claims are in a transitional state." Both are needed because frontmatter records page-level provenance while callouts record claim-level transitions inside a page.

### 3. Four-state callout vocabulary

Borrow Wikipedia's template vocabulary for version transitions. Four callouts, each with a fixed prefix so they are grep-able across the whole wiki:

- `> **SUPERSEDED (vX.Y):**` - a claim was replaced by newer behavior in version X.Y. Link to the successor.
- `> **DEPRECATED (vX.Y):**` - still functional, but the vendor advises migration. Removal expected next major.
- `> **STALE:**` - last verified against an old version, needs a re-check.
- `> **CONTRADICTION:**` - two pages disagree. Investigate the version conflict.

Keeping the vocabulary fixed and small means a lint pass can scan the whole wiki for stale or contested claims without parsing free text. A worked example, in the body of a page:

```markdown
Smart Contracts are deployed through the Edge Functions runtime.

> **SUPERSEDED (v5.9):** As of 5.9, deployment uses the Contract Runtime v2.
> See [[entity-contract-runtime-v2]].
```

The old claim stays in the page for readers tracing history; the callout tells them it no longer holds and where to look instead.

### 4. Per-content-type versioning policy

Not every page type ages the same way, so a single uniform policy fails. Treating a type reference table the same as a cross-cutting analysis would either freeze the analysis (bad, it should evolve) or churn the reference table (bad, readers want a stable snapshot). Apply the Diataxis-style distinction between stable reference and evolving narrative:

- **`ref-` pages** (API signatures, type lookups, enum tables): fully versioned. Keep a copy per version, since reference material is version-coupled and readers want the exact shape at a given release. A reader asking "what did the `PostingInstruction` type look like in 5.6?" should get a 5.6-specific page, not a latest page with caveats.
- **`entity-` / `concept-` pages**: update in place. When a release changes behavior, edit the page and annotate the replaced claim with a SUPERSEDED callout pointing to the new behavior. The narrative stays single-sourced, and the page always reflects the latest known state.
- **`analysis-` pages** (cross-cuts, deep dives): append new sections over time, marking earlier sections SUPERSEDED rather than deleting them. The evolution of the analysis is itself useful evidence of how understanding shifted across versions.
- **`source-` pages**: immutable. A source page is a frozen summary of one raw document and is never edited after creation. If the same source is re-scraped under a new version, it lands in a new version folder and gets a new source page.

### 5. Breaking changes get dedicated analysis pages

Follow Stripe's version-change-module pattern. When a minor or major introduces a breaking change, it gets its own `analysis-` page (for example, `analysis-vault-core-5.9-breaking-changes.md`) that collects the change, the affected pages, and the migration path in one place. This keeps breaking changes discoverable instead of scattered as individual callouts across dozens of pages, and gives a reader upgrading from 5.8 to 5.9 a single entry point.

A breaking-change page typically contains four things: a one-paragraph summary of what changed and why, a list of affected `entity-` and `ref-` pages with links, the version range it applies to (set in frontmatter as `introduced: "5.9"`), and a migration walkthrough. Keeping these in one page means an upgrade effort has a checklist rather than a scavenger hunt across the graph.

### 6. How the layers compose during ingest

The mechanisms are not independent checkboxes. A single ingest of a new release threads through all of them, which is what makes the strategy coherent rather than a pile of conventions. The ingest workflow for, say, Vault Core 5.9 runs roughly as follows:

1. Land the new raw snapshot under `raw/vault-core/5.9/`. The 5.8 folder is untouched.
2. For each existing wiki page, diff the 5.9 source against the 5.8 source for the same section. If nothing changed, append `"5.9"` to the page's `verified` list and leave the body alone.
3. If a claim changed, edit the page body, wrap the old claim in a SUPERSEDED callout, and update `verified` to include `"5.9"`. Leave `current: true` since the page now reflects the latest.
4. If a claim was removed entirely with no successor, add a DEPRECATED callout and set `current: false`.
5. If the release notes contradict a page but the source of truth is unclear, drop a CONTRADICTION callout for a human to resolve rather than guessing.
6. If the release introduces a breaking change, spin up a dedicated `analysis-vault-core-5.9-breaking-changes.md` page and link it from the affected entity pages.

The point is that every step has a defined home. There is no free-form decision about where version information goes, which is what keeps the wiki consistent as it grows and as the LLM context resets between sessions.

## Consequences

**Positive.** Version provenance is now queryable. A Dataview query or a grep for `verified: ["5.8"]` returns every page checked against 5.8, and a grep for `> **STALE:**` returns everything overdue for a re-check. Obsidian's graph view shows version relationships between pages. Re-ingesting a new version is safe: old raw snapshots are preserved untouched, and the wiki pages explicitly record what changed versus what carried over.

**Positive.** Contradictions surface instead of hiding. When 5.9 docs disagree with a claim verified against 5.8, the lint pass flags a CONTRADICTION callout rather than silently overwriting the older fact. The wiki degrades gracefully under version pressure instead of collapsing into an unattributed merge.

**Negative.** Every wiki page now carries three extra frontmatter fields. That is real maintenance overhead for a hand-curated wiki, and the initial backfill required touching all 22 existing pages.

**Negative.** The policy is only as good as the LLM's discipline during ingest. If a page gets updated without bumping `verified` or flipping `current`, the provenance quietly rots, and a stale `current: true` is worse than no field at all because it looks authoritative.

**Negative.** There is a learning curve. The four callouts and the content-type policy only help if the ingest workflow applies them consistently, which depends on the schema document staying precise about when each callout fires.

**Mitigation.** The `vault_version` field is simple YAML, and the LLM populates it during ingest as part of the standard workflow. The lint pass treats a missing or malformed `vault_version` block as an error, and treats a `current: true` page whose `verified` list does not include the latest known release as a STALE warning. Drift gets caught rather than accumulating.

**Mitigation (recovery).** Because the wiki is a git repo and every ingest is an atomic commit preceded by a snapshot, a botched version update is recoverable. If an ingest mislabels provenance or overwrites a callout incorrectly, `git revert` restores the prior wiki state without touching the immutable raw snapshots. Version tracking is additive metadata on top of an already version-controlled artifact, so the blast radius of a mistake is one commit, not permanent knowledge loss.

## Alternatives Considered

1. **Branch-per-version (Antora pattern).** Keep one git branch per Vault Core version, with docs merged across branches. Rejected because this wiki is LLM-generated synthesis, not a 1:1 mirror of upstream docs. Synthesis pages cross-reference freely across versions, and maintaining those references across branches creates merge hell on every ingest. The knowledge graph is meant to be flat and browsable, not split into parallel version tracks.

2. **Folder-per-version inside the wiki itself.** Mirror `raw/vault-core/5.8/` with `wiki/vault-core/5.8/`. Rejected because it fragments the knowledge graph. Obsidian's graph view and backlinks work best when there is one canonical page per concept, not five near-duplicates across version folders. Cross-references become version-pinned, which defeats the point of a synthesis layer that cuts across versions.

3. **Tags-only approach** (the prior state). Use Obsidian tags like `vc-5.8` to mark version provenance. Rejected because tags are unstructured strings. They cannot express "introduced in 5.0, verified against 5.8" as a range, they cannot be queried for "which pages were verified against a version newer than 5.6," and they accumulate inconsistency as different ingests apply slightly different tag spellings.

4. **No version tracking.** Rejected because documentation drifts silently. Claims become unreproducible, and the moment a new major lands, the wiki has no way to distinguish what still holds from what is obsolete. This is the failure mode this ADR exists to prevent.

5. **Single-snapshot, no history.** Keep only the latest raw snapshot and the latest wiki state, discarding older versions on each ingest. Rejected because it destroys the ability to write migration guides or answer "what changed between 5.8 and 5.9?" Storage is cheap; provenance is not. The raw snapshots are small markdown files, and keeping one folder per version costs almost nothing while enabling every other layer in this strategy.

## References

Each external pattern informed a specific layer of this decision:

- Docusaurus versioning (snapshot per version): https://docusaurus.io/docs/versioning - basis for the `raw/vault-core/<version>/` folder layout in layer 1.
- Kubernetes `min-kubernetes-server-version` convention: https://kubernetes.io/docs/contribute/style/style-guide/ - basis for the `vault_version.introduced` field in layer 2.
- Stripe API versioning: https://stripe.com/blog/api-versioning - basis for the dedicated breaking-change analysis pages in layer 5.
- Diataxis framework (reference vs. tutorial vs. explanation): https://diataxis.fr/ - basis for the per-content-type aging policy in layer 4.
- Wikipedia template vocabulary (`{{Superseded}}`, `{{Deprecated}}`, `{{Historical}}`): https://en.wikipedia.org/wiki/Template:Superseded - basis for the fixed callout prefixes in layer 3.

## Related

The operational enforcement of this strategy lives in `AGENTS.md` (Wiki Schema, Version Tracking, and Callout Vocabulary sections) and in `CONTRIBUTING.md`. Those documents define the lint checks and ingest workflow that consume the fields and callouts introduced here. This ADR records the why; those documents record the how.
