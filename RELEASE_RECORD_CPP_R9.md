# Release record: CPP R9

Pre-employment protection. R9 makes the practice's state before 8 November 2026 accurate, honest and dated. It settles who holds the copyright and where the cases' figures come from. It marks which pages the first author no longer edits, and what the practice asks of contributors. A second, stacked branch, R9b, holds the few lines that become true only on the founder's start date. It ships separately, on that date.

| | |
|---|---|
| Date | Built 6 November 2026; to ship from the founder's Mac by Sunday 8 November 2026 |
| Worker | `cpp-anacay` |
| Live version | (fill in at deploy) |
| Previous version | `00ef3b12-dfec-417e-baa5-ce39b1a43874` (R8, 2 Nov) |
| Baseline tag | `pre-employment-baseline-2026-11-08`, on main after the R9 merge |
| Indexable | Yes (unchanged) |

## What changed for readers

**Case 3, Kuantillion Cloud.** Each of its four pages opens with a dated provenance note. The case, strategy and plan were written and first published from 30 October to 2 November 2026, and revised for rounding and corrections on 8 November 2026. The case draws on research into hyperscale operators. Where it uses public figures about the case company, they come from one such public company, rounded and adjusted for illustration. Readers should treat them as orders of magnitude. The full case's closing note says the same. The byline on all four pages adds: "Frozen for its first author since 8 November 2026. Open to everyone else's edits."

**Case 3's numbers.** The numbers review is applied. The dollar test no longer counts yield twice: $18M and $670M a year, so the verdict holds. The server-life change is a two-year extension. Field-study citations now match their papers, and endurance is stated per year on every page. Figures about the case company are rounded. Figures that couldn't be confirmed are softened ("reported", "several million"). The commitments line adds "over $900 billion by 30 September 2026".

**Case 2, Popcorn Pajamas.** The three pages carry the same kind of provenance note, with the streaming industry in place of hyperscale operators. The numbers review is applied. The fleet count now uses the company's own 2022 figure, so the box count is nearly flat. The scale model's lower bound is 50 Tbps, and its ratios are recomputed. Five source mismatches are corrected, and one row for an event that never happened is deleted. Company figures are rounded, and four invented inputs gain labels.

**The notes, the guide and the home page.** Both working notes gain a dated provenance line, and Second lives joins the Case 3 freeze. The Buildings note corrects a cancelled expansion and cites the right grid-wait source. Two guide pages gain a label and a horizon note. The home page's capex fact is about $200 billion, raised twice since February.

**Who holds the copyright.** Guillermo Martinez and the contributors hold the copyright in the text, the figures and the site code, each for their own contributions. Text and figures are CC BY-SA 4.0; code is MIT. Both licences are irrevocable. Anacay LLC hosts the practice and pays its running costs; it holds no rights in the content. `NOTICE`, `LICENSE-CODE`, the README and `/license/` say so.

**Support.** Anacay pays for the hosting, the domains, the email and API usage. The founder's work on CPP is his own, done pro bono.

**No private review.** The private pre-check is retired. No page, form or role offers it. The cpp@anacay.org inbox is for conduct and admin only.

**Asks and promises.** The author's notes and agenda ask for public sources, general methods or synthetic examples. The NDA rule names demand forecasts. The roadmap, start page and open questions no longer promise future work by the author.

**Principles, draft v0** (new). `/principles/` carries the one-page draft for discussion, posted 8 November 2026. It says nobody can sign it yet, lists three contested principles as questions, and shows where each line comes from.

**About.** "How this is written" dates the seed paper: written July to October 2026, first published 8 October 2026.

## Changes

| Commit | Theme | Source |
|---|---|---|
| R9-01 | Check 8's term list moves to a private, gitignored file; the R8 record and an OPERATIONS.md heading no longer name terms | audit #2, #18 |
| R9-02 | Case 3: provenance note, closing note, freeze line | audit #3, #4 |
| R9-03 | Popcorn Pajamas and the notes: provenance; the dated seed line on /about/ | audit #7 |
| R9-04 | NOTICE, /license/ "Who holds the copyright", README licence line | audit #5 |
| R9-05 | Support: stewardship time | audit #10 |
| R9-06 | CONTRIBUTING.md Licence section; a required licence checkbox on every form | audit #11 (a, c, d) |
| R9-07 | Pre-check paused (superseded by R9-13) | audit #13 |
| R9-08 | Author's notes, agenda and welcome text ask for public sources; stale promises fixed | audit #14, #16 |
| R9-09 | The NDA rule names demand forecasts, word for word everywhere | audit #14 |
| R9-10 | `/principles/`, draft v0 | principles v0 |
| R9-11 | Release record | |
| R9-12 | Copyright: the founder holds text and code; Anacay hosts and pays | decision 1 |
| R9-13 | The private pre-check is retired, with its role and links | decision 2 |
| R9-14 | Case 3 and Popcorn: figures rounded and adjusted, on every provenance and closing note | decision 3 |
| R9-15 | Case 3 numbers review | decision 4 (review G) |
| R9-16 | Popcorn Pajamas numbers review | decision 4 (review H) |
| R9-17 | Home page, guide and note numbers review | decision 4 (review I) |
| R9-18 | Tighter language in the R9 text and on /principles/ | decision 5 |
| R9-19 | Release record update | decision 8 |

**Check 8.** It reads its patterns from `site/.banned-terms` (or `$CPP_BANNED_FILE`): one regex per line, then a tab and its flags. The file is gitignored and travels privately. Without it, check 8 warns and checks placeholders only. The `.refs` exemption is unchanged.

**Numbers reviews, applied.**
- **Case 3:** 56 edits. They cover all 45 replacements in the review, minus the five provenance strings that R9-14 replaces, plus 11 more. The extras are the endurance basis on four lines, five softened stranding figures, two flash-market softenings and one missed growth multiple. One industry-shipment figure is kept as is, as the review advised.
- **Popcorn Pajamas:** 87 edits. They cover every arithmetic, source, rounding and label fix, plus four softened figures that couldn't be confirmed. One unsourced clause is cut. The review's six "sources to add" are not added, because each would name the real company, which Further reading avoids.
- **Paper, guide and notes:** five of six non-seed fixes. The charter's capex line is a cited fact in a founding document. Changing it changes the claim and its source, so it needs the open period. It goes to a proposal. The seed-paper fixes can't be made here: the seed is generated from a private draft.
- **Dependent math.** Recomputed after every change: the dollar test, the price range, the resale shares, the commitments ratio, the flow ratio, the scale-model ratios, the all-in cost and the viewing average. Every page still closes, and figures that repeat across pages agree.

**Not in R9, on purpose.**
- GOVERNANCE.md is unchanged. Its ownership wording, the DCO rule, an acting editor, a co-steward and stepping back from authorship go to a governance proposal, with its open period.
- CHARTER.md is unchanged. Its capex line goes to a proposal.
- No employment claim appears anywhere. Those lines are in R9b.
- The author bio and disclaimer (audit #8) come from the private paper draft, not this repository. See R9b below.

## R9b: start-day patch

Branch `r9b-startday`, stacked on `r9-preemployment`. Merge and deploy it on the start date, not before.

| Commit | Change | Source |
|---|---|---|
| R9b-01 | `/about/#independence`: the Independence section, naming no employer. Anacay hosts and pays, and holds no rights in the content | audit #9, decision 1 |
| R9b-02 | Behind: "He takes part as an individual". Support: the start-date conflicts sentence, linked to Independence | audit #10, #15 |
| R9b-03 | EDITORS.md: sector, status and step-back | audit #15 |

**The bio.** The "About the author; disclaimer" block is manifest block 167. It is generated from the private draft `drafts/v7_9.md` in the paper folder, and copied into `site/src/generated/manifest.json` by `npm run sync`. The PDF and EPUB carry the same text. Editing the manifest by hand would leave the downloads disagreeing with the page, so R9b doesn't. The founder changes the draft, rebuilds the manifest and downloads, and commits the synced files on the start date.

## History purge

Two history rewrites removed a list of terms that should not have been published. The first ran on 9 October 2026 (see the R2 record). The second is the optional rewrite in the R9 runbook. GitHub Support was never asked to purge the first. One request now covers both: cached commit views, the pull-request refs that keep old commits, and fork copies. The affected pull requests are #30 and #32, plus the R9 pull request if it is opened before the rewrite. No pull request existed before 9 October. The request names no term.

## Checks (before deploy)

- **Build:** `npm run build` on both branches, with the private term list in place: checks 1–11 and the extras PASS, "all checks passed". 88 HTML pages and 87 sitemap URLs. Check 11 covers 14 community pages, including `/principles/`.
- **Without the term list:** check 8 warns, notes it, and checks placeholders only.
- **Link crawl:** the built site served locally and crawled from `/`, on both branches: no broken links or missing anchors.
- **Terms:** every committed file in the R9 and R9b diffs is clean against the private list.
- **Screenshots:** `/`, `/cases/kuantillion-cloud/`, `/cases/popcorn-pajamas/`, `/license/`, `/support/`, `/join/` and `/principles/` at 390 and 1440 px. No console errors or horizontal overflow.
- **Scripts:** none added (check 4).

## Deploy

(Fill in from the runbook: merge commit, preview version, live version, IndexNow count, tag, release, Wayback snapshots and the GitHub Support request.)

## Rollback

```
npx wrangler versions deploy 00ef3b12-dfec-417e-baa5-ce39b1a43874@100%   # returns the site to R8
```
