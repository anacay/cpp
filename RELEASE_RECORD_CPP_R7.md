# Release record: CPP R7

IndexNow, and separators so that words no longer run together in search snippets and screen readers. A small release in four deploys (PRs #26–#29), recorded together. Nothing changes on screen. The seed paper's text is unchanged; it stays at v7.9.

| | |
|---|---|
| Date | 31 October 2026 |
| Worker | `cpp-anacay` |
| Live version | `938c3000-e940-428b-886e-b13d1b0cd0ce` |
| Previous version | `0f5907c3-e62f-480d-88e9-ec44ebcef81c` (R6, 30 Oct) |
| Indexable | Yes (unchanged) |

## What changed for readers

**Search snippets and screen readers.** Google showed the Case 3 card on /body-of-knowledge/ as "Kuantillion CloudRead the case page". The card's title and description were adjacent inline spans with no separator, and they ran together once the tags were stripped. The same pattern was in 379 places across the site. Each place now has a visually hidden separator (`.sr-only`):
- `:` between a label and its text ("Next: Executive summary")
- `·` between running pieces ("Illustrative numbers. · Open full size")
- `.` after a number or letter ("1. Introduction", "A. A worksheet…")

Each separator uses a non-breaking space so it can't collapse. Screen readers hear the same pauses. Nothing changes on screen.

**Search engines.** cpp.anacay.org now uses IndexNow. Every sitemap URL is submitted after each deploy.

## Changes

**[PR #26](https://github.com/anacay/cpp/pull/26): IndexNow key file.**
- `site/public/921f6f2cf2490490cf43e1c4b329031c.txt`, served at https://cpp.anacay.org/921f6f2cf2490490cf43e1c4b329031c.txt. It contains only the key, with no newline. It must stay in place.
- `site/scripts/indexnow-submit.sh`, committed to main. It checks that the live key file matches, reads the live sitemap and posts every URL in one request. It fails unless the response is 200 or 202.
- `OPERATIONS.md` (committed to main): the release checklist runs `bash scripts/indexnow-submit.sh` from `site/` after the live checks.
- Version `4418bb01-3d6f-4c4f-96c5-414e6c03cccd`; previous `0f5907c3-e62f-480d-88e9-ec44ebcef81c` (R6).

**[PR #27](https://github.com/anacay/cpp/pull/27): body of knowledge separators.**
- /body-of-knowledge/: separators between the label, title and description in the five card lists (learning path, cycle, concepts, shelf, seed layers). The snippet now reads "Kuantillion Cloud: Read the case page…".
- Version `0e5afd8a-5d7d-4d77-bb3b-53976f7549ae`; previous `4418bb01-3d6f-4c4f-96c5-414e6c03cccd`.

**[PR #28](https://github.com/anacay/cpp/pull/28): home and paper index separators.**
- The home page path cards ("Start: Principles").
- Every list on /paper/, plus a hidden `.` after the section numbers and appendix letters ("1. Introduction: a close forecast and a wide miss: …").
- Version `434286c1-c324-4151-bd43-45346363890d`; previous `0e5afd8a-5d7d-4d77-bb3b-53976f7549ae`.

**[PR #29](https://github.com/anacay/cpp/pull/29): site-wide fused-text sweep and check 7.**
- A new scanner, `site/scripts/fused-text.mjs`, strips tags the way a search snippet does: inline elements join with no space, and block elements break. It flags a lowercase letter, digit or sentence punctuation followed directly by a capital in the next text node. Only joins between two text nodes count, so real words and code are never flagged. Before the fix it found 379 joins on 74 pages.

  | Component | Source | Joins |
  |---|---|---|
  | Help build links ("DiscussAsk…") | `HelpBuild.astro` | 156 |
  | Pager ("NextExecutive summary") | `Pager.astro`, guide, cases and notes `[...slug].astro` | 95 |
  | Figure links ("In context: One pageOpen full size") | `paper.mjs` | 66 |
  | Guide figure captions ("…numbers.Open full size") | `guide.mjs`, the body of knowledge map | 29 |
  | Author's-note markers ("12The planner…") | `notes.mjs` | 11 |
  | Learning-path numbers ("1The one page") | `body-of-knowledge.astro` | 8 |
  | Case bar ("The full caseReusing…") | `CaseBar.astro` | 7 |
  | Home facts ("945 TWhData centres’…") | `index.astro` | 4 |
  | Downloads ("…v7_9.pdfPDF · 5.2 MB") | `downloads.astro` | 3 |

- The `:` separators added in #27 and #28 now use the non-breaking space too.
- The author's-note separator sits inside the `data-apparatus` marker, which check 1 already skips.
- **Check 7** ("No words fused across a tag boundary") runs the scanner on every build and fails it on any hit.
- Version `938c3000-e940-428b-886e-b13d1b0cd0ce`; previous `434286c1-c324-4151-bd43-45346363890d`.

## Process

These are site fixes, not content changes, so they needed no open period under HOW_IT_GROWS. The open proposals (#9, #12, #17, #18, #20) are untouched.

## Commits

cpp (`anacay/cpp`):
- #26: `002911b` on branch `indexnow-key`, merged as `910107b`. Direct to main: `7550fb4` (submit script) and `9d78668` (OPERATIONS.md step).
- #27: `698fcc7` on branch `bok-card-separators`, merged as `3ad456e`.
- #28: `16f7840` on branch `home-paper-card-separators`, merged as `d646edb`.
- #29: `7700da0` on branch `fused-text-sweep`, merged as `972df17`.

## Checks (before deploy)

- **Build:** each release was built from main after its merge commit, and all checks passed (74 pages, 7,639 internal links and anchors resolved).
- **Seed text:** unchanged (check 1) in all four builds. Figures and captions were unchanged (check 2).
- **Scanner:** 0 fused joins in 74 pages after #29 (379 before). Check 7 passes and catches the original "CloudRead" markup in a test. The scanner did not exist for #26–#28; its 0 covers the final state, including their separators.
- **Visual:** before/after screenshots compared the #28 version (`434286c1`, preview URL) with #29 (live). They covered desktop 1440 and mobile 390, full-page, dark mode:
  - a case page (/cases/kuantillion-cloud-full/: pager, case bar, help links)
  - /paper/
  - a paper section with figure links (/paper/5-coefficients-are-agreements/)
  - a guide page with a caption (/guide/concepts/buffers-and-reserves/)
  - /downloads/
  - the home page facts

  All 12 pairs are pixel-identical: same heights, no changed pixels. The markup differed between the two (separators added), so the comparison was not of identical builds. #27 and #28 were checked on their preview URLs for the markup, not by screenshot.
- **Preview:**
  - #27: the separator on /body-of-knowledge/.
  - #28: separators on / (7) and /paper/ (39).
  - #29: 0 scanner hits on 10 preview pages covering every component, all 200.

## Deploy

Each PR was merged with a merge commit, rebuilt from main and deployed in two stages, then triggers were deployed:

```
npx wrangler versions upload                                            # #26 4418bb01, #27 0e5afd8a, #28 434286c1, #29 938c3000
npx wrangler versions deploy <id>@100%                                  # after the preview check
npx wrangler triggers deploy                                            # cpp.anacay.org (custom domain)
bash scripts/indexnow-submit.sh                                         # from site/, after the live checks
```

As a non-content release, it needed no approval stop.

## Live checks

On 31 October 2026, at https://cpp.anacay.org:
- The key file returns exactly `921f6f2cf2490490cf43e1c4b329031c` (32 bytes, `text/plain`).
- /body-of-knowledge/ (#27), / and /paper/ (#28) carry the separators.
- After #29, all 73 sitemap pages scanned live: 0 fused joins.
- IndexNow, 73 URLs each time: HTTP 202 after #26, then 200 after #27, #28 and #29.

## Rollback

Each version returns the site to the state before the next one:

```
npx wrangler versions deploy 434286c1-c324-4151-bd43-45346363890d@100%   # undo #29 (back to #28)
npx wrangler versions deploy 0e5afd8a-5d7d-4d77-bb3b-53976f7549ae@100%   # undo #28 (back to #27)
npx wrangler versions deploy 4418bb01-3d6f-4c4f-96c5-414e6c03cccd@100%   # undo #27 (back to #26)
npx wrangler versions deploy 0f5907c3-e62f-480d-88e9-ec44ebcef81c@100%   # undo #26: returns the site to R6
```

Rolling back past #26 takes the key file offline. IndexNow submissions fail until it is redeployed.
