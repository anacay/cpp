# Release record: CPP R14

An open room. On the night of 18–19 November 2026, five independent reviews looked at the site end to end: technical SEO, answer engines, a newcomer walkthrough, house rules and the backlog. The site was sound. The gap was the room: newcomers found good content, then an empty Commons with no obvious first step. R14 tells the truth about that and makes it an invitation: the room is new, and the first posts shape it. It also closes the house-rule and search findings.

| | |
|---|---|
| Date | 19 November 2026 |
| Worker | `cpp-anacay` |
| Live version | `b7273348-2961-4e69-be1f-67178036f868`, deployed 2026-11-19 from merge commit `cc981e0` |
| Previous version | R13, `9776861b-9e8c-4bb1-a8ba-f743bd2e575d` |

## What changed

**The room**
- **Live threads:** the home page, /join/ and /commons/ say "The room is new. Your first post shapes it." They point at three live threads: Introduce yourself, forecasting a launch with no history (#44) and planning accelerators (#45). The home page's first button is now "Join The Commons".
- **No duplicate posts:** on /questions/, answers that already have a live thread link to it ("Join the live thread") instead of opening a duplicate post.
- **The rule on /join/:** /join/ shows the NDA rule on the page, word for word.
- **Leading:** "Lead something small" gets a button to a thread where people say what they'll take on.
- **A new door:** chip and accelerator experts get their own door on /start/.
- **Thread numbers:** the thread numbers live in one place, `THREADS` in `site/src/data/room.mjs`.

**House rules**
- **GOVERNANCE.md:**
  - the steward confirms nominations as a person ("he"), not "it";
  - the handover reads "the steward hands over; Anacay, as host, transfers what it holds", so the host never acts in the steward's place;
  - "recruit" becomes "invite".
- **Other text:**
  - EDITORS.md lists the founder's sector, not an employer column entry for the host;
  - ROADMAP.md and the LinkedIn kit lose "hire".
- **Config and links:**
  - the config key `site.steward` (which held Anacay) is now `site.host`;
  - the paper's structured data names the practice, not Anacay, as publisher;
  - the footer names the steward, the host and the copyright holders.

**Search and answer engines**
- **Titles:**
  - guide, case, note and tool pages carry "infrastructure" in their search titles;
  - the fallback title suffix is "Infrastructure capacity planning";
  - the home H1 says "infrastructure capacity planning".
- **Descriptions:**
  - the flagship pages' descriptions are rewritten to fit, with no cut-off "…";
  - guide pages can set their own `description:` when `short` is long.
- **One answer per question:** /what-is-capacity-planning/ reuses the /questions/ wording where both answer the same question. Its DefinedTerm is "Infrastructure capacity planning".
- **Structured data:**
  - guide, case and note pages point at the site's `#website` and `#practice` entities instead of declaring their own;
  - the paper's citation list drops editors' working notes and no longer cuts names mid-word.
- **llms-full.txt** leads with the scope, the short answers, how to join and the rule, then the paper.
- **Sitemap and citation:**
  - every sitemap URL has a lastmod;
  - CITATION.cff says "infrastructure" and gives the edition (0.1) with the paper version.
- **Images:**
  - `favicon.ico` and `apple-touch-icon.png` are added;
  - a new share card (`/og/card-r14.jpg`, new name so link previews refresh) says "For infrastructure capacity planners".

**GitHub, done with the release (script `github_housekeeping_r14.py`)**
- **Labels:** the tag labels are created; #44 is labelled forecasting and #45 gpu.
- **#34 (an acting editor and co-steward proposal):** marked [Superseded], with a banner pointing at #46. Closed as outdated and locked.
- **NDA wording:** #31's NDA sentence now includes "demand forecasts". The old welcome #1 points at #31.
- **#36:** "the founder or the steward" becomes "the steward".
- **New threads:** "Introduce yourself" and "Lead something small" are created in The Commons.
- **Old branches:** the merged branches r8-community, r8-record, r9-1-principles and r9-preemployment are deleted.

URLs are unchanged. `/og/card.jpg` is retired for `/og/card-r14.jpg`.

## Not in R14
- **The author note in the paper ("Several cited works are by authors at the author's former employer…"):** it lives in the private draft and the PDF/EPUB. It waits for the founder's decision and a paper rebuild.
- **GitHub Support purge:** the pull-request refs #30, #32 and #33 still hold pre-rewrite commits. The request is in `r9/GITHUB_SUPPORT_REQUEST.md` and goes to GitHub Support by hand.
