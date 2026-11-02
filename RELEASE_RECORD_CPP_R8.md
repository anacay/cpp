# Release record: CPP R8

The Practice Room. R8 is the community release: a room for capacity planners to work the open problems together, with its rules, roles, doors and credit on the site. One branch, one pull request and one deploy. The seed paper's text is unchanged; it stays at v7.9.

| | |
|---|---|
| Date | (filled in at deploy) |
| Worker | `cpp-anacay` |
| Live version | (filled in at deploy) |
| Previous version | `938c3000-e940-428b-886e-b13d1b0cd0ce` (R7, 31 Oct) |
| Indexable | Yes (unchanged) |

## What changed for readers

**The Practice Room** (new). It is the community's room, where planners work the open problems together. What they conclude is published on the site, credited by name.
- `/community/`: the hub. It covers what the room is, the rhythm, the channels, how a call runs, bring-your-problem reviews (`#reviews`), the room rules (`#room-rules`), how to get in and who runs it. No call date is shown until the founding circle confirms.
- `/circle/`: the founding circle and what members commit to. No names are listed until at least three members have signed off in writing.
- `/roles/`: eight role cards. Each gives duties, hours, a term, a private hand-raise and a one-message step-down. Each card shows "Open" or a consented name.
- `/working-groups/`: how a working group runs, the WG1 charter ("Scoring declarations": Q2, Q10 and Q7; lead open) and WG2 next.
- `/agenda/`: ten workstreams of open problems. Each item has a source, a thread, a status and a good-first flag.
- `/sharing-safely/`: the disclosure ladder, contributing in a personal capacity, supply data, an illustrative worked example, ten checks, a private pre-check and what happens if something slips.
- `/contributors/`: CONTRIBUTORS.md, rendered.

**Start here** (new). `/start/` has eight doors by kind of reader, with a "Your words, our words" box. Four doors have their own pages: `/start/new/`, `/start/sre/`, `/start/finance/` and `/start/supply/`. Each door ends with three open problems and one first contribution.

**Tools** (new). `/tools/` has cadence agendas, a decision-rights canvas, a "split the miss" CSV (illustrative) and the Learning walk-through with an answer key. They are static files.

**Site-wide.**
- **Nav:** "Start here" comes first, and "The Practice Room" sits before "Join in". The footer adds the Practice Room, Sharing safely, Contributors, Agenda and Tools.
- **Home:**
  - The line "A place for the craft. No jobs, no recruiting, no selling." sits under the hero.
  - The "Why now" lead-in no longer says labs hire for the role. The quote stays.
  - "People who hire planners" is now "People who lead planning teams".
  - A new "Program managers" card links its door.
  - The New, and Finance and supply, cards link their doors.
  - The satellite fact is dropped.
  - "Start with the open questions" opens `/agenda/`.
- **/join/:** rebuilt around the room, with private routes and the no-hiring line. "Opening soon" is gone. LinkedIn carries news only.
- **Credit:**
  - Case and note pages carry a byline from frontmatter.
  - A "Changes to this page" footer renders from `changed-because.json` on guide, case, note, paper and founding-document pages. The file is empty, so nothing shows yet.
- **/glossary/:** a `#your-words` crosswalk, labeled "Pointers, not definitions." It adds no new definitions.
- **/related-work/:** "CPP and FinOps: who does what" (`#cpp-and-finops`), with the licence note.
- **Private routes:** wherever ROADMAP.md and GOVERNANCE.md say "say so in Governance", they now add "or write to cpp@anacay.org". Both also point to /roles/.
- **Consistency fixes:**
  - CONTRIBUTORS.md credits the paper at v7.9.
  - The guide is "draft v0.2, inside seed edition v0.1".
  - The executive summary's reading time is counted from its text: 5 minutes, not a fixed 10.
  - /privacy/ and the config comment drop the LinkedIn group.
- **Feed:** the RSS title names calls and agenda changes. Call items appear only once a call is confirmed.

## Changes

People, dates and statuses live in `site/src/data/room.mjs`. A confirmed call date, a consented name or a channel host is therefore a data-only redeploy. A name renders only with `consent: true`.

| Item | What | Main files |
|---|---|---|
| R8-00 | Shared foundations: nav, room data, components, route stubs, checks 8–11 | `Base.astro`, `room.mjs`, `start-paths.mjs`, `RoomRule.astro`, `NextCall.astro`, `community.mjs`, `routes.mjs`, `check.mjs` |
| R8-01 | /join/ reworked around the room | `join.astro` |
| R8-02 | Home page reframed (steering S§3.1) | `index.astro` |
| R8-03 | Four inconsistency fixes | `CONTRIBUTORS.md`, `body-of-knowledge.astro`, `index.astro`, `summary.astro`, `join.astro`, `privacy.astro`, `paper.config.json` |
| R8-04 | Private route beside every "say so in Governance" | `ROADMAP.md`, `GOVERNANCE.md` |
| R8-05 | /community/ | `community.astro` |
| R8-06 | /circle/ | `circle.astro` |
| R8-07 | /sharing-safely/; linked from CONTRIBUTING and the case templates | `SHARING_SAFELY.md`, `CONTRIBUTING.md`, `.github/…/cases.yml`, `4-share-a-case.yml` |
| R8-08 | Interim room rules; Code of Conduct proposal staged | `community.astro`, `community/coc-proposal.md` |
| R8-09 | /roles/ | `roles.astro` |
| R8-10 | /working-groups/ | `working-groups.astro` |
| R8-11 | /start/ and four doors; glossary crosswalk | `start/index.astro`, `start/[door].astro`, `start-paths.mjs`, `glossary.astro` |
| R8-12 | /contributors/, bylines, "Changed because of" | `CONTRIBUTORS.md`, `Byline.astro`, `ChangedBecause.astro`, `changed-because.json`, `guide.mjs`, guide frontmatter |
| R8-13 | /agenda/ and feed additions | `agenda.astro`, `agenda.mjs`, `feed.xml.js` |
| R8-14 | Review format and private intake template | `community.astro`, `.github/DISCUSSION_TEMPLATE/review-intake.yml` |
| R8-15 | GitHub kit for the founder (categories, pins, labels, Terms threads) | `community/github-kit.md` |
| R8-16 | CPP and FinOps: who does what | `related-work.astro` |
| R8-17 | /tools/ starter pack | `tools.astro`, `site/public/tools/` |
| R8-18 | Integration: links in and out, footer, llms.txt | several |

**New checks**, run on every build:
- **8.** No banned term and no placeholder text, on every page. Reference lists are exempt, because one cited paper's title matches a term.
- **9.** No hiring words on the community pages and the doors, except inside `[data-rule]`, where the rule itself is stated. No hire or recruit verbs on `/`.
- **10.** No name of anyone without consent in `room.mjs`.
- **11.** Sentences of 30 words or fewer on the community pages and the doors.

## Process

The new pages and the hand-raise lines change no body-of-knowledge claim. So they are treated as small fixes under HOW_IT_GROWS, with no open period (ROADMAP §6.7, a founder decision). The Code of Conduct proposal is staged in `community/coc-proposal.md`; `CODE_OF_CONDUCT.md` is unchanged until it closes. The open proposals (#9, #12, #17, #18, #20) are untouched.

## Commits

cpp (`anacay/cpp`), branch `r8-community` from main `f3b9a18`: 25 item commits (foundations, one or more per item, follow-ups and integration), ending `ba88669`, then this record. This record is the last commit on the branch.
- Merged as PR (filled in at deploy), with merge commit (filled in at deploy).

## Checks (before deploy)

- **Build:** `npm run build` on `r8-community` passes all checks: 87 pages, 86 sitemap URLs and 9,145 internal links and anchors resolved.
- **Seed text:** unchanged (check 1). Figures and captions are unchanged (check 2).
- **Scripts:** no new scripts (check 4). Interactive needs are `mailto:` or GitHub links.
- **Public writing:** checks 8–11 pass. A separate grep of every line added since `f3b9a18` found no banned terms, including the case-sensitive ones. Its hiring words all sit in rule statements or in the staged Code of Conduct proposal. The `/tools/` static files are clean.
- **Consent:** `room.mjs` lists only the founder, and the circle is empty. The call status is `pending`, so no date appears anywhere.
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
