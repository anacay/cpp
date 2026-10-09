# Release record: CPP R2

The community opens: the repository is public, Discussions are on, the Discuss and Suggest-an-edit links work, and each author's note has its own thread.

| | |
|---|---|
| Date | 8 October 2026 |
| Worker | `cpp-anacay` |
| Live version | `4522d28f-3634-49f7-8d38-fe9ba738b62a`, deployed at 100% (v7.7 and the pre-review pass, 9 Oct; see the updates below) |
| Previous versions | `d1ab21fd-1bf5-43f2-93f8-a80d54b73d26` (the phone fix to the Discuss bar); `3dd24dcc-b656-4e59-be21-8ce8e6b7993f` (the new request-for-comments box); `aa749940-ce70-44b4-992d-8b5035055599` (Reply links point to the threads); `4e921705-2668-4040-8eb1-f25624957826` (`community.open = true`, before the threads existed) |
| Address | `cpp.anacay.org` only: `workers_dev` is false, and the workers.dev address returns Cloudflare's `error code: 1042` (404). Per-version preview URLs stay on (`preview_urls: true`) for review before each promote |
| Indexable | No (`site.indexable = false`, unchanged) |
| Repository | `anacay/cpp`, **public**, Discussions on |
| `community.open` | true |
| `community.linkedin` | empty: no group yet, so /join/ still says "The group is opening soon." |

## GitHub

- **Discussion categories:** Sections, Proposals, Terms, Cases, Sources and Governance, all open-ended (created in the web UI by Guillermo, who also deleted the defaults). Slugs match `.github/DISCUSSION_TEMPLATE/`. Sections has no form (`sections.yml` removed), so the site's prefilled text always arrives.
- **Labels:** fix, term, proposal, case, source, section.
- **New issue:** the five forms and the two contact links show (checked by Guillermo).
- **Welcome discussion:** https://github.com/anacay/cpp/discussions/1, in Governance, with the title and body from `community/welcome-discussion.md`. **Pinning is still to do in the web UI:** GitHub's API has no way to pin a discussion.
- **Author's notes:** 12 threads in Sections, #2 to #13, posted by `npm run seed-discussions -- --post` after the dry run was approved. All 12 notes were approved, with no draft flags.

## Site changes in this release

- "Who's behind this" (home, /about/, nav), from `site.founder`.
- Newcomer help: a resting "Select any sentence to comment" tip, an "or email" link in the selection bar and on each note, and the "New here?" box at /join/#new.
- `community.open = true`.
- Each author's note's "Reply on GitHub" link now opens its own thread. `seed-discussions --post` writes `body-of-knowledge/rfc/threads.json` (passage → thread URL), and `src/lib/notes.mjs` uses it, falling back to a new discussion. All 12 entries were checked against the thread titles.

## Build

`npm run build`: all checks passed (63 pages).

## Live checks

On https://cpp.anacay.org/paper/13-where-this-breaks/:

- **Discuss:** opens `github.com/anacay/cpp/discussions/new?category=sections` with the title `Section 13, Where this breaks, and what is unknown: ` filled in. It fills in the title only, with no quoted passage: the passage is quoted by the selection bar (below).
- **Suggest an edit:** `github.com/anacay/cpp/edit/main/body-of-knowledge/seed/13-where-this-breaks.md`.
- **See the discussion:** the Sections category, searched for the section's name.
- **Reply on GitHub:** the page's 7 notes link to their threads (#13, #2, #3, #4, #7, #5, #6). Threads are readable without a login (#2 returned 200).
- **Selection bar:** the live `comment.js`, run against the live page in jsdom with a passage selected, shows **Discuss this passage** and **or email**, hides the tip while the bar is up, and builds `discussions/new?category=sections` with the title prefilled and a body starting `> <the selected passage>` and a link back to it. This was not checked in a real browser: none was available.
- **Tip:** "Select any sentence to comment. How it works" (→ /join/#new) is added at the foot of the page. 43 of the 62 pages in the sitemap load `comment.js`: the reading pages.
- **/join/#new:** the "New here? How commenting works" box is present.
- **"Opening soon":** gone from section 13, /open-questions/ and the home page. The only "opening soon" left is the LinkedIn group line on /join/, which is expected.
- **workers.dev:** `https://cpp-anacay.martinez-giol.workers.dev/` returns 404 `error code: 1042`. The site isn't served there.
- **anacay.com:** unchanged (etag `e2b113528f2a0a5892580e80e714382b`, the same as before R1).

## Update, same day: the request-for-comments box

- `RfcHint.astro` became a boxed call to action: a "Request for comments" kicker, "Comment on any sentence", a CSS-only demo of a selection sweeping across a sample sentence and the Discuss button rising (still under reduced motion), a phone hint, the page's count of author's notes, and links. It now also shows on guide pages (`src/pages/guide/[...slug].astro`). Commit `c0b1a21`.
- `npm run build`: all checks passed (63 pages).
- Deployed as `3dd24dcc-b656-4e59-be21-8ce8e6b7993f` at 100%.
- Live: `/paper/1-introduction/` and `/guide/annual/` both show the box (kicker, lead and demo present, old `rfc-hint` gone), and the live stylesheet `/_astro/Base.BUKnxGyi.css` carries the animation. A check about 30 seconds after the deploy still saw the old pages (`cf-cache-status: HIT`); about a minute later they were new.

## Update, same day: the Discuss bar on phones

- `public/comment.js`: on a phone, the first touch of a tap clears the selection, which used to hide the bar before its button could be tapped. On touch screens (`(pointer: coarse)`) the bar now stays up for 8 seconds after the selection clears; elsewhere it stays up for 1.5 seconds if the pointer went down on the bar. It closes after **Discuss this passage** is followed, with the x, or with Escape. The script still makes no requests and stores nothing. Commit `ae57e03`.
- `npm run build`: all checks passed (63 pages).
- Deployed as `d1ab21fd-1bf5-43f2-93f8-a80d54b73d26` at 100%.
- Live, a minute after the deploy: `/comment.js` returns 200 (`text/javascript`), contains `pointer: coarse`, and is byte-identical to the committed file. Not yet tried on a real phone.

## Update, 9 October: v7.7 and the pre-review pass

- **Commit `969d16c`:** "v7.7 and the pre-review pass: prior-art labels, home page framing, share card, preview bots, JSON-LD, OPERATIONS.md". It covers 35 files: seed edition text and figures (E4, E5) from paper v7.7, the guide, the home page, related work, `Base.astro` (share card, JSON-LD), `robots.txt.js` (link-preview bots), `check.mjs`, `versions.json`, `site/public/og/card.jpg`, the v7.7 PDF, iPad PDF and EPUB, and the new `OPERATIONS.md`. The three v7.6 downloads were removed with `git rm`.
- **Commit `aa3f46c`:** `site/public/_redirects` sends the three old v7.6 download URLs to their v7.7 files with a 301.
- **Build:** all checks passed (63 pages, dist 36.0 MB). The paper folder wasn't reachable, so the sync kept `src/generated/`, which is already v7.7 (manifest "v7.7 draft").
- **Preview:** `178dbf86-d850-4f31-b986-d0484d7a60d5` without the redirects, then `4522d28f-3634-49f7-8d38-fe9ba738b62a` with them. On the second, all three old URLs returned 301 to their v7.7 files and `/_redirects` returned 404. Approved.
- **Deployed:** `4522d28f-3634-49f7-8d38-fe9ba738b62a` at 100%.
- **Live checks:**
  - `/downloads/` lists only the v7.7 files. The v7.7 PDF returns 200 (`application/pdf`, 5,390,381 bytes).
  - `/downloads/The_Coefficient_Is_an_Agreement_v7_6.pdf` returns 301 to the v7.7 PDF.
  - `/robots.txt` allows LinkedInBot, Slackbot, Slackbot-LinkExpanding, Twitterbot, facebookexternalhit, WhatsApp, Discordbot and TelegramBot, and keeps `User-agent: *` / `Disallow: /`. `X-Robots-Tag: noindex, nofollow` is unchanged.
  - The home page has `<meta property="og:image" content="https://cpp.anacay.org/og/card.jpg">`, and the card returns 200 (`image/jpeg`).
  - anacay.com's etag is now `1ed79932f4838b7e842cbd38125c7bdf` (it was `e2b113528f2a0a5892580e80e714382b`). That change didn't come from this work: nothing here touches anacay.com.

## History rewrite, 9 October: the private list removed

The first commit put the author's private list of banned terms into `body-of-knowledge/guide/_SPEC.md`. It stayed in every commit up to the one before `969d16c`, which replaced it in the working file. The public history has been rewritten so that no commit contains it.

- **Tool:** `git filter-repo --replace-text` (2.47.0) with one rule. It replaces the line starting `- **Banned words:** [removed]` with: "- **Banned words:** the author keeps a private list of terms that must never appear (internal names and phrasing from past employers). Editors get it privately; it is never committed here."
- **Push:** `origin` re-added; `main` force-pushed (`e67dd05` → `b570e2b`) after checking that GitHub's `main` was still `e67dd05`.
- **Checks:** Searching the full history (`git log --all -p`) for a term from the list finds 0 matches. The 15 commits are all kept, and the latest files are unchanged. https://github.com/anacay/cpp/blob/main/body-of-knowledge/guide/_SPEC.md shows the new line, and the page has none of the listed terms.
- **Still to do:** the old commits still open on github.com by hash (`/commit/98ab77f` and `/commit/013657a` returned 200 after the push). GitHub Support has to purge them. Send them the 12 old commits marked "yes" below, plus the old blob `af0c0a1f6ef903c6de4ce490e2754a0f2c477ee8` (`_SPEC.md` with the list). Clones or forks made while the repo was public keep the old history.
- **Old hashes in this record:** the commit hashes cited above (`c0b1a21`, `ae57e03`, `969d16c`, `aa3f46c` and so on) are from before the rewrite. Look up the new ones here.

| Old | New | Commit | Had the list |
|---|---|---|---|
| `98ab77f` | `10be3d1` | The Capacity Planning Practice: seed edition v0.1, site and founding documents | yes |
| `6bd874a` | `bd6f500` | site: add wrangler as a dev dependency for deploys | yes |
| `69bc357` | `a665849` | Release R1: cpp.anacay.org live, not indexable; custom domain route enabled | yes |
| `62faff4` | `48e2acc` | site: add "Who's behind this" section; serve only on cpp.anacay.org (workers_dev off) | yes |
| `275e02c` | `c3610ad` | Newcomer help: resting comment tip, email fallback, /join/#new box; welcome discussion text; drop Sections form so prefilled text arrives | yes |
| `f39d5be` | `003a9e1` | Open the community: community.open = true | yes |
| `4452215` | `87aa256` | Author's notes: Reply links open each note's own thread (seed-discussions writes rfc/threads.json) | yes |
| `6964ae1` | `de42070` | Release record R2: community open | yes |
| `c0b1a21` | `0dc556d` | Request-for-comments box: clearer call to action with a CSS demo of selecting text; shown on guide pages too | yes |
| `30ccff3` | `c732a11` | Release record R2: request-for-comments box update | yes |
| `ae57e03` | `3dff26c` | comment.js: keep the Discuss bar up after a tap clears the selection (8 s on touch screens) | yes |
| `013657a` | `30b6faa` | Release record R2: Discuss bar phone fix (d1ab21fd) | yes |
| `969d16c` | `20e9fa2` | v7.7 and the pre-review pass: prior-art labels, home page framing, share card, preview bots, JSON-LD, OPERATIONS.md | no |
| `aa3f46c` | `7d793e0` | site: 301 the old v7.6 download URLs to the v7.7 files | no |
| `e67dd05` | `b570e2b` | Release record R2: v7.7 and the pre-review pass (4522d28f) | no |

## Still open

- Pin discussion #1 in the web UI.
- Ask GitHub Support to purge the old commits and the old `_SPEC.md` blob (see the history rewrite above).
- Check the selection bar once in a real browser, and once on a phone: select a passage on section 13 and tap **Discuss this passage**.
- Turn off per-version preview URLs if cpp.anacay.org must be the only address even for unpromoted versions.
- The LinkedIn group: set `community.linkedin` when it exists.

## Rollback

From `site/`: `npx wrangler versions deploy d1ab21fd-1bf5-43f2-93f8-a80d54b73d26@100%` to go back before v7.7 (the old download URLs then work again), `3dd24dcc-b656-4e59-be21-8ce8e6b7993f@100%` to undo only the phone fix, `aa749940-ce70-44b4-992d-8b5035055599@100%` to go back before the new box, or `4e921705-2668-4040-8eb1-f25624957826@100%` to go back before the threads. Then flip the repo back to private only if the community has to close. Making the repo private again does not withdraw copies already made under the licences.
