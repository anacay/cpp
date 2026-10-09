# Release record: CPP R2

The community opens: the repository is public, Discussions are on, the Discuss and Suggest-an-edit links work, and each author's note has its own thread.

| | |
|---|---|
| Date | 8 October 2026 |
| Worker | `cpp-anacay` |
| Live version | `d1ab21fd-1bf5-43f2-93f8-a80d54b73d26`, deployed at 100% (the phone fix to the Discuss bar; see the updates below) |
| Previous versions | `3dd24dcc-b656-4e59-be21-8ce8e6b7993f` (the new request-for-comments box); `aa749940-ce70-44b4-992d-8b5035055599` (Reply links point to the threads); `4e921705-2668-4040-8eb1-f25624957826` (`community.open = true`, before the threads existed) |
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

## Still open

- Pin discussion #1 in the web UI.
- Check the selection bar once in a real browser, and once on a phone: select a passage on section 13 and tap **Discuss this passage**.
- Turn off per-version preview URLs if cpp.anacay.org must be the only address even for unpromoted versions.
- The LinkedIn group: set `community.linkedin` when it exists.

## Rollback

From `site/`: `npx wrangler versions deploy 3dd24dcc-b656-4e59-be21-8ce8e6b7993f@100%` to undo only the phone fix, `aa749940-ce70-44b4-992d-8b5035055599@100%` to go back before the new box, or `4e921705-2668-4040-8eb1-f25624957826@100%` to go back before the threads. Then flip the repo back to private only if the community has to close. Making the repo private again does not withdraw copies already made under the licences.
