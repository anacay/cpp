# Release record: CPP R5

Discoverability and canon errata. Discoverability (pass 2): real dates, an RSS feed and a citation block. Canon errata: a citation audit of the whole body of knowledge found wrong section credits, two version labels and three smaller inconsistencies, all corrected here. The seed paper's text is unchanged; it stays at v7.9.

| | |
|---|---|
| Date | 30 October 2026 |
| Worker | `cpp-anacay` |
| Live version | *(filled in at deploy)* |
| Previous version | `bb587cd0` (Emerging topics and note 1, 28 Oct) |
| Indexable | Yes (unchanged) |

## Why the errata went in without an open period

HOW_IT_GROWS routes small fixes ("corrections that match a cited source") to one editor with no waiting period. Most items below are of that kind. The rest are small clarifications that change no claim. They went in under a one-time exception decided by the founder, recorded here as the rules ask. At the time, the body of knowledge had one outside reader, who had finished his review, so no one's reading was disturbed. Anything that changes what the practice claims stays on the full consensus loop. The open proposals (#9, #12, #17, #18, #20) are untouched.

## What changed for readers

**Discoverability (commit `63bdf07`).**
- The sitemap carries real last-modified dates from git.
- A new `/feed.xml` (RSS) lists paper versions, cases and notes.
- Articles carry published and modified dates in their metadata.
- /about/ gains a "Cite it" block.

**Canon errata (commit on branch `canon-errata-r5`).**

| Where | What changed | Why |
| --- | --- | --- |
| `note-buildings-at-ai-density.md` | "The paper already reads this across to machine shapes" now cites Section 6.2, not 8.3 | Chained flexibility and the machine-shape read-across are in Section 6.2 (and 8.5), not 8.3 |
| Same note, sources line | Section 6.2 now credited for "fungibility, postponement and chained flexibility"; Section 8.3 for "accepted substitutes"; Section 8.2 for "walking the commit points" | The old line credited 8.3 with chained flexibility, and 8.2 with a "ladder" the paper never names |
| Same note, steps 1 and 6 and "How it applies" | Removed references to a "flexibility flag" in Section 8.3, and the "ladder" wording | The seed paper has no flag. Section 8.3 lists accepted substitutes. The points now rest on what the paper says; no argument changed |
| `case-popcorn-pajamas-practice.md`, P3 | Shortfall tolerance described as Section 6.7's proposal and mechanism 12's field: how much shortfall, for how long, an event can take | The old wording ("decides how much of the high scenario to hold") said more than Section 6.7 does |
| `principles.md` | "Commit only what the lead time forces" now carries its evidence label, [argued] | It was the only principle without one |
| `CHARTER.md`, `guide/_SPEC.md` | The seed paper is version 7.9, not 7.6 | Stale labels; the seed edition is built from v7.9 |
| `guide/_SPEC.md` | Post-launch feeds the next quarterly intake and, through it, the annual plan | Matches Section 9.1, Figure 37 and the post-launch page |
| `guide/_SPEC.md` | One rule added: where a guide page and the seed differ, the seed governs until the guide is corrected | No canon file said which text wins |

**Found, not changed.** These need a decision, not a correction, and are logged for the editor:
- Section 14 names six roles, while Figure 40 sets decision rights against a different set. This is already queued as paper edit 2, with the executive sponsor.
- Section 9.2 says finance and product sign the shortage-to-idle ratios; Section 14 lists finance only.
- Appendix A.4 orders a high-memory machine firm while the launch is still an intent; Section 5.4 allows only options or cancelable commitments at intent.
- Mechanism 5's ledger columns and Figure 15's funnel steps differ, though both have seven entries.
- Four evidence-label systems coexist (HOW_IT_GROWS, the paper's prose, Figure 48's ledger and the case tiers), with no mapping between them.
- "The stable core" (30-day rule) is not yet defined, as the Charter itself notes.

## Commits

cpp (`anacay/cpp`):
- `63bdf07`: "Discoverability: real dates, an RSS feed, and a citation block".
- This commit: "Canon errata R5: section credits, version labels, one evidence label".

## Checks (before deploy)

- **Build:** `npm run build`, all checks passed (69 pages, 5,965 internal links, 150 outbound reference links, sitemap 68 URLs).
- **Rendered note:** no "flag" or "ladder" remains, and the machine-shape read-across links to Section 6.2's anchor.
- **Text check:** the added lines were searched against the private term list; no matches.

## Deploy

*(filled in at deploy)*

## Live checks

*(filled in at deploy)*

## Rollback

`npx wrangler versions deploy bb587cd0@100%` returns the site to R4 plus note 1 (28 Oct).
