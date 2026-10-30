# Release record: CPP R5

Discoverability and canon errata. Discoverability (pass 2): real dates, an RSS feed and a citation block. Canon errata: a citation audit of the whole body of knowledge found wrong section credits, two version labels, dropped evidence labels and smaller inconsistencies, all corrected here. The seed paper's text is unchanged; it stays at v7.9.

| | |
|---|---|
| Date | 30 October 2026 |
| Worker | `cpp-anacay` |
| Live version | `70fab4fd-8b15-4f81-910c-bc6e8709ff30` |
| Previous version | `bb587cd0-334c-43e2-b6cb-5ea0854a95c0` (Emerging topics and note 1, 28 Oct) |
| Indexable | Yes (unchanged) |

## Why the errata went in without an open period

HOW_IT_GROWS routes small fixes ("corrections that match a cited source") to one editor with no waiting period. Most items below are of that kind. The rest are small clarifications that change no claim. They went in under a one-time exception decided by the founder, recorded here as the rules ask. At the time, the body of knowledge had one outside reader, who had finished his review, so no one's reading was disturbed. Anything that changes what the practice claims stays on the full consensus loop. The open proposals (#9, #12, #17, #18, #20) are untouched.

## What changed for readers

**Discoverability (commit `63bdf07`).**
- The sitemap carries real last-modified dates from git.
- A new `/feed.xml` (RSS) lists paper versions, cases and notes.
- Articles carry published and modified dates in their metadata.
- /about/ gains a "Cite it" block.

**Canon errata (two commits on branch `canon-errata-r5`).**

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
| `case-popcorn-pajamas-practice.md`, P3 | Shortfall tolerance now carries its label: proposed in Section 6.7 "as the author's exploration" | Section 6.7 calls the field "my exploration"; the note had dropped the label |
| Same note, P13 | The bridge-count backtest now carries Section 10.2's label, "an analogy, not a result" | The note gave it as an instruction without the label |
| Same note, P7 | Section 11's idea is given as "one way to think about it", for agent fleets; carrying it over to games is marked as the note's extension | The note presented the extension as Section 11's own content |
| Same note, mechanism audit table | Mechanism 9's full name: "Cadence aligned to lead time and launch calendar" | The name was shortened |
| `principles.md` | "Name the gap" gains its source line: Sections 6.1, 8.3 and 9.1 ("Saying no"), and mechanism 11 | It was the only principle with no source |

**Found, not changed.** These need a decision, not a correction, and are logged for the editor:
- Section 14 names six roles, while Figure 40 sets decision rights against a different set. This is already queued as paper edit 2, with the executive sponsor.
- Section 9.2 says finance and product sign the shortage-to-idle ratios; Section 14 lists finance only.
- Appendix A.4 orders a high-memory machine firm while the launch is still an intent; Section 5.4 allows only options or cancelable commitments at intent.
- Mechanism 5's ledger columns and Figure 15's funnel steps differ, though both have seven entries.
- Four evidence-label systems coexist (HOW_IT_GROWS, the paper's prose, Figure 48's ledger and the case tiers), with no mapping between them.
- "The stable core" (30-day rule) is not yet defined, as the Charter itself notes.
- "Firm" is used two ways. Section 10.1 and Figure 35's caption call an approval firm once supply has answered it with either branch. Figure 35's alt text and Figure 3's alt text keep "firm" for a dated commit, and call a named gap "capped issue". The seed text changes only in a paper edit.
- Section 6.1 cites Section 10.1 for "capped issue", a term Section 10.1 doesn't use. This depends on the item above.
- Mechanism 12 lists shortfall tolerance, and mechanism 13's indicator relies on the shortage budget, without the labels Sections 6.7 and 10.2 give them. The guide pages now carry the labels; the seed's table rows change only in a paper edit.

## Commits

cpp (`anacay/cpp`):
- `63bdf07`: "Discoverability: real dates, an RSS feed, and a citation block".
- `4fec59c`: "Canon errata R5: section credits, version labels, one evidence label".
- `1617900`: "Canon errata R5, second pass: labels carried into the practice note, one principle source".

## Checks (before deploy)

- **Build:** `npm run build`, all checks passed (69 pages, 5,969 internal links, 150 outbound reference links, sitemap 68 URLs).
- **Rendered note:** no "flag" or "ladder" remains, and the machine-shape read-across links to Section 6.2's anchor.
- **Text check:** the added lines were searched against the private term list; no matches.

## Deploy

Merged as [PR #22](https://github.com/anacay/cpp/pull/22) with a merge commit, `2ad6588`, on 30 October 2026, then rebuilt from main (69 pages, all checks passed) and deployed in two stages:

```
npx wrangler versions upload                                          # version 70fab4fd-8b15-4f81-910c-bc6e8709ff30
npx wrangler versions deploy 70fab4fd-8b15-4f81-910c-bc6e8709ff30@100%  # after preview checks and approval
npx wrangler triggers deploy                                          # cpp.anacay.org (custom domain)
```

Preview checks on the version preview URL passed: the feed, /about/#cite, the buildings note (no "flag", Section 6.2 linked, sources line updated), /guide/principles/ and the practice page's P3, P7 and P13 labels.

## Live checks

On 30 October 2026, at https://cpp.anacay.org:
- `curl -I` returns 200.
- `/feed.xml` is valid RSS 2.0, with 14 items, each with a title, link, guid and date.
- /about/ has the "Cite it" section.
- `/sitemap.xml` lists 68 URLs with 25 lastmod values.
- /notes/buildings-at-ai-density/: no "flag" or "ladder", the machine-shape read-across links to Section 6.2, and the sources line is the corrected one. `article:modified_time` (2026-10-30T00:58:41Z) is later than `article:published_time` (2026-10-28T15:52:59-04:00).
- /guide/principles/: "Commit only what the lead time forces" ends in [argued] (7 labels, up from 6), and "Name the gap" has its source line.
- The Popcorn Pajamas practice page carries the P3, P7 and P13 labels.

## Rollback

`npx wrangler versions deploy bb587cd0-334c-43e2-b6cb-5ea0854a95c0@100%` returns the site to R4 plus note 1 (28 Oct).
