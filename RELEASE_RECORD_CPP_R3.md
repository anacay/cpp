# Release record: CPP R3

v7.8, the credit pass: the seed edition is rebuilt from paper v7.8, which re-checks credit against Hixson and Guliani (2015) and the 2026 SRE chapter and repairs reference links. The 9 October review pass (accessibility fixes) ships with it, and anacay.org gets its share card.

| | |
|---|---|
| Date | 9 October 2026 (10 October UTC) |
| Worker | `cpp-anacay` |
| Live version | `b602ee90-4f3d-4754-86c7-16635ee2bda9`, deployed at 100% |
| Previous version | `4522d28f-3634-49f7-8d38-fe9ba738b62a` (v7.7 and the pre-review pass, R2) |
| anacay.org worker | `anacay-org`, live version `22cc3c23-3169-4b3e-a4ff-066b337cb003` (previous `634f296a-e898-4772-a98b-31cd57346b43`) |
| Indexable | No (unchanged) |

## What changed for readers

- **Credit (v7.8).** More of the frame is credited to Hixson and Guliani: blow-up factors as an early form of the coefficient, the fast lane, one plan for several products' upside, and the limits small companies face. The 2026 SRE chapter's link to error budgets is quoted again, and its stockout resiliency is named. /changes/ and the footer now say version 7.8.
- **Reference links.** References 14, 15, 22, 38, 46, 48 and 49 have repaired or updated links. The two summaries on maaw.info, broken in the review pass's link report, now point to archived copies.
- **Related work.** The Hixson and Guliani entry introduces its opening quote differently. The words quoted are the same.
- **Figure.** E5 updated from the paper.
- **Downloads.** The PDF, iPad PDF and EPUB are now v7.8. The old v7.6 and v7.7 download URLs return a 301 to the matching v7.8 file, so links shared earlier keep working.
- **Accessibility (from the review pass).** Better contrast on the level labels, a unique landmark on /join/, the comment tip placed inside a landmark, and tap targets of at least 24px. See `REVIEW_PASS_OCT9.md`.
- **anacay.org.** Links to anacay.org now show a share card ("Built by people, for people", 1200×627) in link previews.

## Commits

cpp (`anacay/cpp`, `main`):

- `ebc649a`, `2412e1c`: the review pass (accessibility fixes, then `REVIEW_PASS_OCT9.md`). `review-pass-oct9` was merged into `main` as a fast-forward from `229a000`.
- `897a047`: "v7.8: credit pass against Hixson & Guliani and the 2026 SRE chapter; reference links". 40 files: seed edition and guide text, references, figure E5, `paper.config.json`, `versions.json`, generated manifest, figures and downloads data, `related-work.astro`, `_redirects`, and the three v7.8 downloads (the three v7.7 files removed with `git rm`).

anacay.org (`anacay/anacay-org`, `main`):

- `a1a886c`: "anacay.org: add social share card (og/twitter meta, og/card.jpg)". `share-card` was merged into `main` as a fast-forward from `9a919e9`.

## Checks

- **Text check:** the added lines were searched against the author's private term list before the commit. No new terms. The only matches were words already live in earlier versions, all in published reference titles or the paper's existing vocabulary, and the counts were the same before and after.
- **Build:** `npm run build`, all checks passed (63 pages, dist 36.0 MB, 168 manifest blocks, 61 figure blocks, 5275 internal links).
- **Local:** under `wrangler dev`, the v7.6 and v7.7 PDF, iPad PDF and EPUB URLs returned 301 to the v7.8 files. The v7.8 PDF returned 200 (`application/pdf`).
- **Preview:** https://b602ee90-cpp-anacay.martinez-giol.workers.dev returned 200, with v7.8 on /changes/ and the v7.7 PDF returning 301. Approved by Guillermo.
- **anacay.org preview:** https://22cc3c23-anacay-org.martinez-giol.workers.dev had the og:image tag, and `/og/card.jpg` returned 200 (`image/jpeg`). The image carries no metadata beyond its size and colour space. Approved by Guillermo.

## Deploy

- cpp: `wrangler versions deploy b602ee90-…@100%`, then `wrangler triggers deploy` (custom domain `cpp.anacay.org`).
- anacay.org: `wrangler versions deploy 22cc3c23-…@100%`, then `wrangler triggers deploy` (`anacay.org` and `www.anacay.org`).

## Live checks

- `curl -I https://cpp.anacay.org` returned `HTTP/2 200`, with CSP and HSTS headers present.
- `/downloads/The_Coefficient_Is_an_Agreement_v7_7.pdf` returned 301 to `/downloads/The_Coefficient_Is_an_Agreement_v7_8.pdf`. The v7.8 PDF, iPad PDF and EPUB all returned 200.
- /changes/ shows v7.8.
- A check a few seconds after the deploy still saw the old site (`cf-cache-status: HIT`). About a minute later it was new, and it stayed new on three repeat checks, with and without a query string.
- `https://anacay.org` and `https://www.anacay.org` returned 200. The page has `<meta property="og:image" content="https://anacay.org/og/card.jpg">`, and the card returned 200 (`image/jpeg`).

## Housekeeping

- The `review-pass-oct9` (cpp) and `share-card` (anacay-org) branches were deleted after the merge, locally and on GitHub.

## History rewrite, 9 October: R2 reworded

One line of `RELEASE_RECORD_CPP_R2.md` (in the history-rewrite section) quoted part of the removed internal notes. It was reworded in `a08eac8` to describe the scrub without quoting it, and the history was rewritten so that no commit contains the quoted part.

- **Tool:** `git filter-repo --replace-text` with one rule, limited to that one quoted fragment and replacing it with `[removed]`. The rules file was kept outside the repo and deleted afterwards.
- **Checks:** searching the full history finds no term from the private list except the published title of reference 87. The latest files are the same as before the rewrite, and all commits are kept.
- **Old hashes:** hashes from `229a000` onward changed. Hashes cited before this section (including those in `REVIEW_PASS_OCT9.md`) are from before the rewrite. Look up the new ones here.

| Old | New | Commit | Had the line |
|---|---|---|---|
| `2f04c51` | `229a000` | Release record R2: history rewrite, old to new commit hashes | yes |
| `145ef64` | `ebc649a` | Accessibility: level-label contrast, unique landmark on /join/, tip in a landmark, 24px tap targets | yes |
| `91412a9` | `2412e1c` | Review pass, 9 October: links, accessibility and performance, anacay.org share card | yes |
| `5ffecdb` | `897a047` | v7.8: credit pass against Hixson & Guliani and the 2026 SRE chapter; reference links | yes |
| `012727b` | `701a067` | Release record R3: v7.8 credit pass and the anacay.org share card (b602ee90, 22cc3c23) | yes |
| `38e10a7` | `a08eac8` | Release record R2: describe the history rewrite without quoting the removed line | no (never pushed) |

## Still open

- Carried over from R2: pin discussion #1, ask GitHub Support to purge the old commits (now including the five marked "yes" above), check the selection bar in a real browser and on a phone, and set `community.linkedin` once the group exists.
- Check the anacay.org card in a share debugger (for example the LinkedIn Post Inspector), now that it is live.

## Rollback

- cpp, from `site/`: `npx wrangler versions deploy 4522d28f-3634-49f7-8d38-fe9ba738b62a@100%` returns to v7.7. That version carries its own v7.7 files and redirects, so the v7.7 URLs work again, but the v7.8 download URLs would return 404.
- anacay.org, from `anacay-org/`: `npx wrangler versions deploy 634f296a-e898-4772-a98b-31cd57346b43@100%` removes the share card.
