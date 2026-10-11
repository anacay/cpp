# Release record: CPP R4

v7.9, adjacent fields and new evidence: the seed edition is rebuilt from paper v7.9, which tests the paper against fields that solved neighbouring problems first and adds nine new sources, cited as A1 to A9.

| | |
|---|---|
| Date | 10 October 2026 |
| Worker | `cpp-anacay` |
| Live version | `bacf1c4b-bc3d-4578-b0d2-c6f3e9f1828c`, deployed at 100% (Section 6.4 clarity fix, 11 Oct; see After release). Before it, `1acc116e-5b87-4206-98a8-79421ec77325` (reference links and screen-reader labels, 10 Oct) and `81a5e1a5-e19f-48a4-bb4d-0ee69717040b` (the community changes). v7.9 itself was `c510ec8c-972e-48bd-b0b4-3c4fa95f7b78` |
| Previous version | `b602ee90-4f3d-4754-86c7-16635ee2bda9` (v7.8, R3) |
| Indexable | No (unchanged) |

## What changed for readers

- **Adjacent fields (v7.9).** Telephone engineering joins the discipline's lineage. New evidence: why not to split a shortage pro rata, why to name shared drivers rather than trust a low correlation, how grid queues handled speculative requests, and measured AI demand. One labeled exploration: some AI demand is better declared as a policy than a forecast. /changes/ and the footer now say version 7.9.
- **New sources.** /references/ has a new list, "Sources added in version 7.9", with A1 to A9. They are cited as [A1] to [A9] until the next full renumbering by first appearance.
- **Guide.** The weekly stage adds: don't split a shortage pro rata, because rules that reward bigger orders teach teams to pad [A5]. Buffers and reserves adds: name the shared driver rather than trust a low measured correlation [A4].
- **Downloads.** The PDF, iPad PDF and EPUB are now v7.9. The old v7.6, v7.7 and v7.8 download URLs return a 301 to the matching v7.9 file.
- **Figures.** Unchanged.

## Commits

cpp (`anacay/cpp`, `main`):

- `7e40ec2`: "v7.9: adjacent fields and new evidence; sources A1–A9". 34 files: seed edition text and references, two guide pages, `paper.config.json`, `versions.json`, the generated manifest and downloads data, `paper.mjs` (one line: the "Sources added in version" heading is read as a reference list), `_redirects`, and the three v7.9 downloads (the three v7.8 files removed with `git rm`).

## Checks

- **Diff review:** the changed files matched the expected list. `RELEASE_RECORD*`, `REVIEW_PASS_OCT9.md` and `OPERATIONS.md` were unchanged. Figures E4 and E5 were kept at their previous versions, because the incoming copies had no wording change.
- **Text check:** the added lines were searched against the author's private term list before the commit. The only match was the published title of reference 87, already live.
- **Build:** `npm run build`, all checks passed (63 pages, dist 36.1 MB, 169 manifest blocks, 61 figure blocks, 148 outbound reference links, 5280 internal links).
- **Sources:** the nine A1 to A9 links respond. One (A2, Microsoft Research) returns 403 to scripts and 200 to a browser.
- **Local:** under `wrangler dev`, the nine old download URLs (v7.6, v7.7, v7.8; PDF, iPad PDF and EPUB) returned 301 to the v7.9 files. The three v7.9 files returned 200.
- **Preview:** https://c510ec8c-cpp-anacay.martinez-giol.workers.dev returned 200, with v7.9 on /changes/, the new list on /references/, and the v7.8 PDF returning 301. Approved by Guillermo.

## Deploy

- `wrangler versions deploy c510ec8c-…@100%`, then `wrangler triggers deploy` (custom domain `cpp.anacay.org`).

## Live checks

About a minute after the deploy:

- `curl -I https://cpp.anacay.org` returned `HTTP/2 200`, with CSP and HSTS headers present.
- The v7.8, v7.7 and v7.6 PDF URLs returned 301 to `/downloads/The_Coefficient_Is_an_Agreement_v7_9.pdf`.
- The v7.9 PDF (5,413,942 bytes), iPad PDF (13,844,625 bytes) and EPUB (15,334,683 bytes) returned 200 with the right content types.
- /changes/ shows "Adjacent fields and new evidence (v7.9)", /references/ shows "Sources added in version 7.9", and the home page footer says version 7.9.

## After release

Later changes, same day.

- **Three new threads**, in Sections: [#14](https://github.com/anacay/cpp/discussions/14) "For agent-driven demand, is the declaration a cap rather than a forecast?", [#15](https://github.com/anacay/cpp/discussions/15) "When a market price exists, is the coefficient still an agreement?" and [#16](https://github.com/anacay/cpp/discussions/16) "Could this community build the dataset the field is missing?". Each has an open-question author's note on its passage (notes 13 to 15, in Sections 11, 14 and 13), and each note's "Reply on GitHub" link opens its thread (`threads.json`). `seed-discussions` now keeps links already in `threads.json`, so a re-run doesn't post these again (dry run: all 15 notes skipped as linked).
- **Roadmap:** a new section, "Open work on the seed paper", lists what still needs doing: fold A1 to A9 into the numbering, sturdier links for references 76 and 113, screen-reader labels for the guide's level labels, the three open threads, and the untested method.
- **Commit:** `5040f5d`.
- **Checks:** the posted thread texts and the notes were searched against the private term list (no matches). `npm run build`, all checks passed (63 pages). Preview `81a5e1a5` approved by Guillermo.
- **Deployed:** `81a5e1a5-e19f-48a4-bb4d-0ee69717040b` at 100%, then `wrangler triggers deploy`.
- **Live, a minute later:** `https://cpp.anacay.org` returned 200. /roadmap/ shows the new section. Sections 11, 14 and 13 each link their new note to #14, #15 and #16, and /open-questions/ lists all three. The v7.8 PDF URL still returns 301 to v7.9.
- **Reference links and screen-reader labels** (`bf463fc`, deployed as `1acc116e-5b87-4206-98a8-79421ec77325` at 100%, then `wrangler triggers deploy`): refs 76, 101 (author added) and 113 (and its B.6 copy) have sturdier links, with no wording or numbering change; the guide's "Usually done by" levels now announce "(usually)" or "(less often)" to screen readers; the two finished items left the roadmap, and the 7.9 row on /changes/ notes the link refresh; figure SVGs re-synced from the paper; provenance metadata added in transfer removed; content unchanged. All checks passed (63 pages, 150 reference links); preview approved by Guillermo; live checks a minute later found the new links, the labels and the updated downloads.
- **Section 6.4, bridge premiums explained plainly** (`6660092`, 11 Oct, deployed as `bacf1c4b-bc3d-4578-b0d2-c6f3e9f1828c` at 100%, then `wrangler triggers deploy`): the "Every bridge carries a premium" paragraph rewritten in plain steps with a short example; no claim, source, number or figure changed. Changed: the 6.4 page text, the seed copy of Section 6, the generated manifest, the three v7.9 downloads and their sizes in `downloads.json`. Ref 51 keeps its old Kubecost link. Added text searched against the private patterns (no matches). All checks passed (63 pages); preview approved by Guillermo. Live a minute later: /paper/6-approval-is-not-allocation/ returned 200 with the new paragraph and without the old one; the three downloads returned 200 at the new sizes; the v7.8 PDF still returns 301 to v7.9. Rollback: `npx wrangler versions deploy 1acc116e-5b87-4206-98a8-79421ec77325@100%`.

## Still open

- Carried over: pin discussion #1, ask GitHub Support to purge the old commits, check the selection bar in a real browser and on a phone, set `community.linkedin` once the group exists, and check the anacay.org card in a share debugger.

## Rollback

- From `site/`: `npx wrangler versions deploy 81a5e1a5-e19f-48a4-bb4d-0ee69717040b@100%` undoes only the link and label changes. `npx wrangler versions deploy c510ec8c-972e-48bd-b0b4-3c4fa95f7b78@100%` removes only the community changes (the threads stay open on GitHub). `npx wrangler versions deploy b602ee90-4f3d-4754-86c7-16635ee2bda9@100%` returns to v7.8. That version carries its own v7.8 files and redirects, so the v7.8 URLs work again, but the v7.9 download URLs would return 404.
