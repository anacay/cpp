# Release record: CPP R9

Pre-employment protection. R9 makes the practice's state before 8 November 2026 accurate, honest and dated: who holds the copyright, where the cases' figures come from, which pages the first author no longer edits, and what the practice asks of contributors. A second, stacked branch, R9b, holds the few lines that become true only on the founder's start date. It ships separately, on that date.

| | |
|---|---|
| Date | Built 6 November 2026; to ship from the founder's Mac by Sunday 8 November 2026 |
| Worker | `cpp-anacay` |
| Live version | (fill in at deploy) |
| Previous version | `00ef3b12-dfec-417e-baa5-ce39b1a43874` (R8, 2 Nov) |
| Baseline tag | `pre-employment-baseline-2026-11-08`, on main after the R9 merge |
| Indexable | Yes (unchanged) |

## What changed for readers

**Case 3, Kuantillion Cloud.** Each of its four pages opens with a dated provenance note. It says when the case, strategy and plan were written, that they use public sources only, that tagged figures are real public figures used unchanged, and that only the name is invented. The full case's closing note now says the same. The byline on all four pages adds: "Frozen for its first author since 8 November 2026. Open to everyone else's edits." No other Case 3 text changed.

**Case 2 and the notes.** The three Popcorn Pajamas pages open with a dated provenance note, and the full case's closing note is corrected the same way. Both working notes gain a dated provenance line. Second lives joins the Case 3 freeze.

**Who holds the copyright.** `/license/` has a new section: text and figures are copyright 2026 Guillermo Martinez and contributors (CC BY-SA 4.0); site code is copyright 2026 Anacay LLC and contributors (MIT). Both licences are irrevocable. A `NOTICE` file in the repository says the same.

**Principles, draft v0** (new). `/principles/` carries the one-page draft for discussion, posted 8 November 2026. It marks itself a draft, says nobody can sign it yet, and lists three contested principles as questions. It also says how it will be decided and where each line comes from. The Commons links to it.

**Safer sharing.** The private pre-check is paused until an independent pre-check reviewer is named. No page promises a reply time. The cpp@anacay.org inbox is described as for conduct and admin only, not for case material.

**Asks and promises.** The author's notes and agenda now ask for public sources, general methods or synthetic examples, not for how things work at anyone's employer. The NDA rule names demand forecasts. The roadmap, start page and open questions no longer promise future work by the author.

**Support.** "Editing time" becomes "Stewardship time": Anacay keeps the accounts, domain and hosting, and the founder's part is his own.

**About.** "How this is written" dates the seed paper: written July to October 2026, first published 8 October 2026.

## Changes

| Commit | Theme | Audit finding |
|---|---|---|
| R9-01 | The term list for check 8 moves to a private, gitignored file; the R8 record and an OPERATIONS.md heading no longer name terms | #2, #18 |
| R9-02 | Case 3: provenance note, honest closing note, freeze line | #3, #4 |
| R9-03 | Popcorn Pajamas and the notes: provenance; the dated seed line on /about/ | #7 |
| R9-04 | NOTICE, /license/ "Who holds the copyright", README licence line | #5 |
| R9-05 | Support: stewardship time; the conflicts line says only what is true today | #10 |
| R9-06 | CONTRIBUTING.md Licence section; a required licence checkbox on every form | #11 (a, c, d) |
| R9-07 | The private pre-check is paused; the inbox is for conduct and admin | #13 |
| R9-08 | Author's notes, agenda and welcome text ask for public sources; stale promises fixed | #14, #16 |
| R9-09 | The NDA rule names demand forecasts, word for word everywhere | #14 |
| R9-10 | `/principles/`, draft v0 | principles v0 |

Each default the founder may override sits in its own commit, so it can be dropped on its own.

**Check 8.** It now reads its patterns from `site/.banned-terms` (or `$CPP_BANNED_FILE`): one regex per line, then a tab and its flags. The file is gitignored and travels privately. Without it, check 8 warns and checks placeholders only. The `.refs` exemption is unchanged.

**Not in R9, on purpose.**
- GOVERNANCE.md is unchanged. The ownership wording for its "steward doesn't own the content" line, the DCO rule, an acting editor, a co-steward and stepping back from authorship all go to a governance proposal, with its open period.
- No employment claim appears anywhere. Those lines are in R9b.
- The author bio and disclaimer (audit #8) come from the private paper draft, not this repository. See R9b below.

## R9b: start-day patch

Branch `r9b-startday`, stacked on `r9-preemployment`. Merge and deploy it on the start date, not before.

| Commit | Change | Audit finding |
|---|---|---|
| R9b-01 | `/about/#independence`: the Independence section, naming no employer (Variant A) | #9 |
| R9b-02 | Behind: "He takes part as an individual". Support: the start-date conflicts sentence, linked to Independence | #10, #15 |
| R9b-03 | EDITORS.md: sector, status and step-back | #15 |

**The bio.** The "About the author; disclaimer" block is manifest block 167. It is generated from the private draft `drafts/v7_9.md` in the paper folder by `web/build_manifest.py`, and copied into `site/src/generated/manifest.json` by `npm run sync`. The PDF and EPUB carry the same text. Editing the manifest by hand would leave the downloads disagreeing with the page, so R9b doesn't. The founder changes the draft, rebuilds the manifest and downloads, and commits the synced files on the start date (runbook step 10).

## Checks (before deploy)

- **Build:** `npm run build` on both branches, with the private term list in place: checks 1–11 and the extras PASS, "all checks passed". 88 HTML pages and 87 sitemap URLs (one new page, `/principles/`). Check 11 covers 14 community pages, now including `/principles/`.
- **Without the term list:** check 8 warns, notes it, and checks placeholders only.
- **Link crawl:** the built site served locally and crawled from `/`: 178 URLs, 87 HTML pages, 3,560 anchor links, no broken links or missing anchors.
- **Terms:** every committed file in the R9 and R9b diffs is clean against the private list. A scan of the whole tree at the R9b tip matches only one cited paper title, in the reference list and the generated manifest, which reference lists exempt.
- **Screenshots:** `/cases/kuantillion-cloud/`, `/license/`, `/principles/` and `/join/` at 390 and 1440 px. No console errors, CSP violations or horizontal overflow.
- **Scripts:** none added (check 4).

## Deploy

(Fill in from the runbook: merge commit, preview version, live version, IndexNow count, tag, release and Wayback snapshots.)

## Rollback

```
npx wrangler versions deploy 00ef3b12-dfec-417e-baa5-ce39b1a43874@100%   # returns the site to R8
```
