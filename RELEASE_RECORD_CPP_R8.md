# Release record: CPP R8

The Commons. R8 is the community release: one stream on GitHub Discussions where capacity planners ask, answer and share, with its rules, tags, doors and credit on the site. The standing principle is one way to interact until activity demands more. One branch, one pull request and one deploy. The seed paper's text is unchanged; it stays at v7.9.

| | |
|---|---|
| Date | (filled in at deploy) |
| Worker | `cpp-anacay` |
| Live version | (filled in at deploy) |
| Previous version | `938c3000-e940-428b-886e-b13d1b0cd0ce` (R7, 31 Oct) |
| Indexable | Yes (unchanged) |

## What changed for readers

**The Commons** (new). One stream, The Commons category on GitHub Discussions: short posts, replies in threads, tags and reactions. The best threads become CPP pages, credited by name with consent.
- `/commons/`: a "Post your first question" link, how The Commons works, the NDA rule and no hiring or selling (`#room-rules`), starter tags, how threads become CPP pages, and "Who runs this" (`#who`). Calls, reviews, working groups, a digest and more roles are listed once, as later.
- `/circle/`: the founding circle and what members commit to (one post or reply a month, in The Commons). No names are listed until at least three members have signed off in writing.
- `/roles/`: six role cards, two marked "later". Each gives duties, hours, a term, a hand-raise in The Commons and a one-message step-down. Each card shows "Open" or a consented name.
- `/working-groups/`: later. The first group forms when a topic in The Commons outgrows a thread; WG1 ("Scoring declarations": Q2, Q10 and Q7) would come first, with no dates yet.
- `/agenda/`: ten workstreams of open problems, each with a stream tag. Each item has a source, a thread, a status and a good-first flag.
- `/sharing-safely/`: the disclosure ladder, contributing in a personal capacity, supply data, an illustrative worked example, ten checks, a private pre-check and what happens if something slips.
- `/contributors/`: CONTRIBUTORS.md, rendered.

**Start here** (new). `/start/` has eight doors by kind of reader, with a "Your words, our words" box. Four doors have their own pages: `/start/new/`, `/start/sre/`, `/start/finance/` and `/start/supply/`. Each door ends with three open problems and one first contribution.

**Tools** (new). `/tools/` has cadence agendas, a decision-rights canvas, a "split the miss" CSV (illustrative) and the Learning walk-through with an answer key. They are static files.

**Site-wide.**
- **Nav:** "Start here" comes first, and "The Commons" sits before "Join in". The footer adds The Commons, Sharing safely, Contributors, Agenda and Tools.
- **Home:**
  - The line "A place for the craft. No jobs, no recruiting, no selling." sits under the hero.
  - The "Why now" lead-in no longer says labs hire for the role. The quote stays.
  - "People who hire planners" is now "People who lead planning teams".
  - A new "Program managers" card links its door.
  - The New, and Finance and supply, cards link their doors.
  - The satellite fact is dropped.
  - "Start with the open questions" opens `/agenda/`.
- **Credit:**
  - Case and note pages carry a byline from frontmatter.
  - A "Changes to this page" footer renders from `changed-because.json` on guide, case, note, paper and founding-document pages. The file is empty, so nothing shows yet.
- **/glossary/:** a `#your-words` crosswalk, labeled "Pointers, not definitions." It adds no new definitions.
- **/related-work/:** "CPP and FinOps: who does what" (`#cpp-and-finops`), with the licence note.
- **Private routes:** wherever ROADMAP.md says "say so in Governance", it now adds "or write to cpp@anacay.org", and points to /roles/. Every private route says the founder reads cpp@anacay.org. GOVERNANCE.md is unchanged from R7 (see Process).
- **Who runs this:** /commons/#who says Guillermo founded CPP and stewards it, with Anacay's disclosed support. What the community makes belongs to it, credited by name. Roles open as people step forward, and governance widens as the community grows. /circle/ and /roles/ point to it.
- **/join/:** "New to GitHub? Create a free account in two minutes", then The Commons and a first post. A username can be a handle. The only private route is a pre-check of anything sensitive at cpp@anacay.org, read by the founder.
- **Consistency fixes:**
  - CONTRIBUTORS.md credits the paper at v7.9.
  - The guide is "draft v0.2, inside seed edition v0.1".
  - The executive summary's reading time is counted from its text: 5 minutes, not a fixed 10.
  - /privacy/ and the config comment drop the LinkedIn group.
- **Feed:** the RSS title names calls and agenda changes. Call items appear only once a call is confirmed; today the call is "later".

## Changes

The stream, its tags, the people and the statuses live in `site/src/data/room.mjs`. A new tag or a consented name is therefore a data-only redeploy. A name renders only with `consent: true`.

| Item | What | Main files |
|---|---|---|
| R8-00 | Shared foundations: nav, room data, components, route stubs, checks 8–11 | `Base.astro`, `room.mjs`, `start-paths.mjs`, `RoomRule.astro`, `NextCall.astro`, `community.mjs`, `routes.mjs`, `check.mjs` |
| R8-01 | /join/ reworked around the room | `join.astro` |
| R8-02 | Home page reframed (steering S§3.1) | `index.astro` |
| R8-03 | Four inconsistency fixes | `CONTRIBUTORS.md`, `body-of-knowledge.astro`, `index.astro`, `summary.astro`, `join.astro`, `privacy.astro`, `paper.config.json` |
| R8-04 | Private route beside "say so in Governance" (GOVERNANCE.md part reverted in R8-fix-3) | `ROADMAP.md` |
| R8-05 | /commons/ | `community.astro` |
| R8-06 | /circle/ | `circle.astro` |
| R8-07 | /sharing-safely/; linked from CONTRIBUTING and the case templates | `SHARING_SAFELY.md`, `CONTRIBUTING.md`, `.github/…/cases.yml`, `4-share-a-case.yml` |
| R8-08 | Interim room rules; Code of Conduct proposal staged | `community.astro`, `community/coc-proposal.md` |
| R8-09 | /roles/ | `roles.astro` |
| R8-10 | /working-groups/ | `working-groups.astro` |
| R8-11 | /start/ and four doors; glossary crosswalk | `start/index.astro`, `start/[door].astro`, `start-paths.mjs`, `glossary.astro` |
| R8-12 | /contributors/, bylines, "Changed because of" | `CONTRIBUTORS.md`, `Byline.astro`, `ChangedBecause.astro`, `changed-because.json`, `guide.mjs`, guide frontmatter |
| R8-13 | /agenda/ and feed additions | `agenda.astro`, `agenda.mjs`, `feed.xml.js` |
| R8-14 | Review format and private intake template (deferred in R8-fix-11; the template is deleted) | `community.astro` |
| R8-15 | GitHub kit for the founder (categories, pins, labels, Terms threads) | `community/github-kit.md` |
| R8-16 | CPP and FinOps: who does what | `related-work.astro` |
| R8-17 | /tools/ starter pack | `tools.astro`, `site/public/tools/` |
| R8-18 | Integration: links in and out, footer, llms.txt | several |
| R8-fix-1 | Private routes say who reads cpp@anacay.org today (the founder), no reply promises in a co-organizer's name | `room.mjs` (`inboxLine()`), `join.astro`, `roles.astro`, `circle.astro`, `community.astro`, `SHARING_SAFELY.md`, `github-kit.md` |
| R8-fix-2 | "Status: being set up" block; the future tense for the Slack, greeters, hosts, digest and call; how to hear when the call is set | `room.mjs` (`status`), `RoomStatus.astro`, `NextCall.astro`, `community.astro`, `join.astro`, `start/[door].astro`, `github-kit.md` |
| R8-fix-3 | One account of who runs CPP today (`ownershipLine()`); co-organizer rules marked proposed; GOVERNANCE.md restored to R7 | `community.astro`, `circle.astro`, `roles.astro`, `index.astro`, `GOVERNANCE.md` |
| R8-fix-4 | Code of Conduct proposal argued on the merits, no invented claims; 60-day open period, closable at 30 | `coc-proposal.md`, `github-kit.md`, `community.astro` |
| R8-fix-5 | "Open volunteer roles"; home source cited as a public role description | `community.astro`, `index.astro` |
| R8-fix-6 | Door times summed from steps; agenda counts and good-first flags; WG1 attribution; "a reviewer who knows supply" | `start-paths.mjs`, `agenda.mjs`, `working-groups.astro`, `roles.astro`, `review-intake.yml` |
| R8-fix-7 | Doors fit their readers: answer key, newcomer problems, head-of-planning circle step and Q3, supply writing line | `start-paths.mjs`, `start/[door].astro`, `notes/[...slug].astro`, `glossary.astro`, `the-work-and-the-path.md` |
| R8-fix-8 | Illustrative labels on the ladder; estimated hours; one open-roles count; README | `SHARING_SAFELY.md`, `roles.astro`, `README.md` |
| R8-fix-9 | Re-check after the fixes | `community.astro` |
| R8-fix-10 | Founder decision: founder and steward, keeping editor, admin and conduct roles while leadership grows from members. "Who runs this" on /commons/; co-organizers and other roles are open volunteer roles; every step-back, handover and founder's-employer line removed; the founder closes the CoC proposal | `room.mjs`, `RoomStatus.astro`, `community.astro`, `circle.astro`, `roles.astro`, `join.astro`, `index.astro`, `SHARING_SAFELY.md`, `github-kit.md`, `coc-proposal.md` |
| R8-fix-11 | One stream: The Commons is The Commons category on GitHub Discussions. Slack, channels, greeters, the status banner and the call line removed; tags replace channels; /join/ leads with a GitHub account; calls, reviews, working groups, a digest and most roles marked later; the kit is one category, tag labels and a welcome post | `room.mjs`, `community.astro`, `join.astro`, `circle.astro`, `roles.astro`, `working-groups.astro`, `agenda.mjs`, `agenda.astro`, `start/`, `feed.xml.js`, `llms.txt.js`, `related-work.astro`, `SHARING_SAFELY.md`, `github-kit.md`, `coc-proposal.md`; deleted `RoomStatus.astro`, `NextCall.astro`, `review-intake.yml` |
| R8-fix-12 | All the people in one place, many ways to arrive. `streamPost()`, `firstQuestion()` and `tagForPath()` in `room.mjs` build every stream link. comment.js and the per-page "Talk about this page/case/note" links open prefilled The Commons posts (Sections retired for new posts). Doors on agenda items, /start/ doors, the home hero, /join/, /commons/, glossary terms and the footer. Top nav cut from 11 items to 7 | `room.mjs`, `comment.js`, `HelpBuild.astro`, `Base.astro`, `community.mjs`, `notes.mjs`, `agenda.astro`, `start/`, `index.astro`, `join.astro`, `community.astro`, `circle.astro`, `roles.astro`, `glossary.astro`, `site.css`, `github-kit.md` |
| R8-fix-13 | The founder named the place The Commons. Renamed everywhere; the page moves to /commons/ with a 301 from /community/ in `_redirects`; the GitHub category is "The Commons", slug `commons`, in every new-discussion link; a four-sentence "Why The Commons" with Ostrom references; a /start/ door for resource and quota managers (#path-resource-managers) | `commons.astro` (moved from `community.astro`), `room.mjs`, `comment.js`, `_redirects`, `routes.mjs`, `Base.astro`, `start-paths.mjs`, `start/index.astro`, every community page, `github-kit.md`, `coc-proposal.md` |

**New checks**, run on every build:
- **8.** No banned term and no placeholder text, on every page. Reference lists are exempt, because one cited paper's title matches a term.
- **9.** No hiring words on the community pages and the doors, except inside `[data-rule]`, where the rule itself is stated. No hire or recruit verbs on `/`.
- **10.** No name of anyone without consent in `room.mjs`.
- **11.** Sentences of 30 words or fewer on the community pages and the doors.

## Process

The new pages and the ROADMAP.md hand-raise lines change no body-of-knowledge claim or governance rule. So they are treated as small fixes under HOW_IT_GROWS, with no open period (ROADMAP §6.7, a founder decision). Two independent reviews (a persona re-walk and an audit) found that R8-04's GOVERNANCE.md edit changed how editors are nominated without the 30-day (60 with one editor) open period. It was reverted, so GOVERNANCE.md is unchanged from R7. Rules on /roles/ that go beyond GOVERNANCE.md are marked proposed. The Code of Conduct proposal is staged in `community/coc-proposal.md`, with a 60-day open period, closable at 30 once two editors are confirmed; `CODE_OF_CONDUCT.md` is unchanged until it closes. The open proposals (#9, #12, #17, #18, #20) are untouched.

## Commits

cpp (`anacay/cpp`), branch `r8-community` from main `f3b9a18`: 50 commits for the items, follow-ups, integration, nine review fixes (R8-fix-1 to R8-fix-9), four R8-fix-10 commits for the founder's role, five R8-fix-11 commits for the one-stream principle three R8-fix-12 commits for the doors and three R8-fix-13 commits for The Commons, then this record, 55 in all. The two earlier record updates are among them. This record is the last commit on the branch.
- Merged as PR (filled in at deploy), with merge commit (filled in at deploy).

## Checks (before deploy)

- **Build:** `npm run build` on `r8-community` passes all checks: 87 pages, 86 sitemap URLs and 8,748 internal links (fewer than before because the nav and footer are shorter) and anchors resolved. Refresh the figure from the build on main at deploy.
- **Seed text:** unchanged (check 1). Figures and captions are unchanged (check 2).
- **Scripts:** no new scripts (check 4). Interactive needs are `mailto:` or GitHub links.
- **Public writing:** checks 8–11 pass. A separate grep of every line added since `f3b9a18` found no banned terms, including the case-sensitive ones. Its hiring words all sit in rule statements, source comments, the GitHub kit or the staged Code of Conduct proposal, plus the steering decision's home lead-in. The `/tools/` static files are clean.
- **Consent:** `room.mjs` lists only the founder, and the circle is empty. The call status is `later`, so no date appears anywhere. Every site link to Discussions uses an existing category: `practice` (The Commons, created in runbook step 5b) or `sections` (the per-page Discuss links, as in R7).
- **Reviews:** VERIFY_PERSONAS (B1–B3, S1–S9, N1–N6) and VERIFY_AUDIT (1–18), both on 2 November 2026. All blockers and shoulds are fixed in R8-fix-1 to R8-fix-9, except those left to the founder (below).
- **Paths to The Commons (R8-fix-12).** A crawl of all 87 built pages found a direct link to a new The Commons post on every page (the footer's "Post in The Commons"), so posting takes one click from anywhere. A Playwright walk at 390 px and 1440 px, with GitHub stubbed, followed three paths from each start page. There was no horizontal scroll at either width:
  - `/`: "Ask in The Commons" (1 click, `#first-question`); nav "The Commons", then "Post your first question" (2 clicks); footer "Post in The Commons" (1 click).
  - `/cases/kuantillion-cloud/`: "Talk about this case" (1 click, title "Guide: Case 3: Kuantillion Cloud: ", `#supply`); the same nav and footer paths.
  - `/agenda/#q12`: its thread, Discussion #13 (1 click). `/agenda/#censored`, which has no thread: "Discuss in The Commons" (1 click, prefilled with the problem, `#forecasting` and the source link). The same nav and footer paths.
  - `/guide/concepts/commit-points/`: "Talk about this page" (1 click, `#supply`); the same nav and footer paths.
  - Also checked: "Ask about this term" on /glossary/, and "Post it in The Commons" on /start/supply/.
- **The Commons (R8-fix-13).** After the rename, a grep of the built site for "Practice Room", "Practice stream" and "the stream" found no matches. Every one of the 277 new-discussion links uses `category=commons`. /community/ does not exist in dist; `_redirects` sends it to /commons/. The crawl still finds a direct post link on all 87 pages. The Playwright walk at 390 and 1440 px passes from /, a case page, an agenda item and a guide page. The Ostrom facts were checked on 3 November 2026 at https://www.nobelprize.org/prizes/economic-sciences/2009/ostrom/facts/: the 2009 Sveriges Riksbank Prize in Economic Sciences in Memory of Alfred Nobel, shared with Oliver E. Williamson, "for her analysis of economic governance, especially the commons". The book is *Governing the Commons* (Cambridge University Press, 1990).
- **Prefill, as documented.** The links set `category`, `title` and `body`. No GitHub documentation page describes these new-discussion URL parameters. The community requests for them, [#3799](https://github.com/orgs/commons/discussions/3799) and [#4571](https://github.com/orgs/commons/discussions/4571), are unanswered, and labels can't be set by URL. So the tag goes in the body as a word, and the runbook checks the prefill live on test posts.
- **Left to the founder:** whether to replace or unlink the home page's cited role description; the program-manager claim on the home card (steering copy, unsourced); proposing in Governance the co-organizer role, private nominations and the LinkedIn-group wording in GOVERNANCE.md, CHARTER.md and CODE_OF_CONDUCT.md.
- **From main:** (filled in at deploy)
- **Preview:** (filled in at deploy)

## Deploy

Merged with a merge commit, rebuilt from main and deployed in two stages, after the preview checks and the founder's approval:

```
npx wrangler versions upload                                            # version (filled in at deploy)
npx wrangler versions deploy <id>@100%                                  # after preview checks and approval
npx wrangler triggers deploy                                            # cpp.anacay.org (custom domain)
bash scripts/indexnow-submit.sh                                         # from site/, after the live checks
```

## Live checks

(filled in at deploy)

## Rollback

```
npx wrangler versions deploy 938c3000-e940-428b-886e-b13d1b0cd0ce@100%   # returns the site to R7
```
