# Release record: CPP R6

Case 3: Kuantillion Cloud, the second working note ("Second lives"), and a site-wide on-ramp for new practitioners. Case 3 is the practice's second problem-space case, and the first with the practice's answer beside it: the full case, a strategy page and an execution plan. The seed paper's text is unchanged; it stays at v7.9.

| | |
|---|---|
| Date | 30 October 2026 |
| Worker | `cpp-anacay` |
| Live version | `0f5907c3-e62f-480d-88e9-ec44ebcef81c` |
| Previous version | `70fab4fd-8b15-4f81-910c-bc6e8709ff30` (R5, 30 Oct) |
| Indexable | Yes (unchanged) |

## What changed for readers

**Case 3: Kuantillion Cloud** (new). Kuantillion Cloud is a fictional company. The case is built from public information, under the problem-space case rules on the Cases page.
- `/cases/kuantillion-cloud/`: the case page, with "Before you start", reading times and exercises by level.
- `/cases/kuantillion-cloud-full/`: the full case. It covers getting the most value from older SSDs across a hyperscale fleet during the 2026 flash shortage. It sets out eight decisions and two sub-decisions, eighteen causal chains, seven scenarios, measures of success, a confidence ledger and sixteen open questions. The SSD field studies and sanitization standards it relies on are listed with links.
- `/cases/kuantillion-cloud-practice/`: how the practice solves it. The strategy, the breakdown and the order, with each decision argued through the body of knowledge and linked to the guide, the glossary and the seed paper. Every judgment that goes past the paper is marked.
- `/cases/kuantillion-cloud-plan/`: the execution plan. Roles and decision rights, days 1–90, seven program gates, the standing cadence, rules agreed in advance, measures, experiments, signposts, a risk register, two incident playbooks and templates.
- Two figures: the drive-outcome flow and the decision dependency map.

**Working note 2: Second lives** (new). `/notes/second-lives/`: what planning loses when supply comes back out of the fleet in parts, of uncertain condition, as a byproduct of other decisions. Status: draft, open for argument.

**Site-wide.**
- **Homepage:** the "New to the role" card links its routes in.
- **Learning path:** a "Start here" path at `/body-of-knowledge/#start-here`. "The work and the path" now opens with where to start.
- **Glossary:** it becomes the practice's glossary. The seed terms are unchanged, 14 practice terms and 9 Case 3 terms are added, and terms link to their concept pages.
- **Mechanism anchors:** each of the thirteen mechanisms has its own anchor (`#m1`–`#m13`).
- **Case context bar:** case pages carry one, and the comment box sits below the table of contents.
- **Heading links:** every heading has a self-link with a short alias.
- **Concept pages:** NMU and month offsets are defined at first use, and glossary terms are linked at first use.
- **Cases index:** it no longer says cases come without answers, and the Case 2 blurb mentions its companion page.

## How it was made and checked

The case was written from public sources and tested before release:
- **Qualification.** Three agents qualified on the body of knowledge by exam and re-test.
- **Independent drafts.** A lead application and an independent design were written blind to each other, then compared and merged.
- **Review panel.** Six reviewers browsed the draft from different entry points: a hyperscale planner, a finance and FinOps lead, a storage reliability engineer, a newcomer, a program manager arriving cold, and an operations-research academic. Their 94-item backlog was implemented in full, and the problem space was revised to match (revision 2).
- **Verification.** Independent rounds checked meaning against the seed, links, consistency across pages and arithmetic, until clean.
- **Pre-deploy pass.** A final pass (a cold read by a senior practitioner, visual and mobile checks, and a link and copy proof) led to 10 fixes, listed in [PR #24](https://github.com/anacay/cpp/pull/24).

## Process

The guide edits are small fixes under HOW_IT_GROWS: links, definitions and wording that match the cited source. Case 3 and the note are new content. They are published as drafts open for argument, as Case 2 was, and each gets a discussion with an open period. The open proposals (#9, #12, #17, #18, #20) are untouched.

## Commits

cpp (`anacay/cpp`), one commit per change:
- Branch `case3-fleet-flash`: 147 commits on `81b523c`, ending `6ba4afc`. The numbered change list, with each commit, is kept with the release materials.
- Branch `case3-r6-fixes`: the 10 pre-deploy fixes on `6ba4afc`, ending `f1a6537`.

## Checks (before deploy)

- **Build:** `npm run build`, all checks passed (74 pages; 7,612 internal links and anchors resolved before the fixes, 7,639 after).
- **Seed text:** unchanged (check 1).
- **Scripts:** no new scripts; the case bar is CSS only (check 4).
- **Text check:** the Case 3 pages, the note and the changed pages were scanned for the private terms and real company names; no matches.

## Deploy

Merged as [PR #23](https://github.com/anacay/cpp/pull/23) with a merge commit, `60835af`, on 30 October 2026. Its version (`ac2c2693-5f8b-492b-96c9-41fbd3b91273`) was uploaded and previewed but not deployed. The pre-deploy fixes were merged as [PR #24](https://github.com/anacay/cpp/pull/24) with a merge commit, `14669ff`, then rebuilt from main (74 pages, all checks passed) and deployed in two stages:

```
npx wrangler versions upload                                          # version 0f5907c3-e62f-480d-88e9-ec44ebcef81c
npx wrangler versions deploy 0f5907c3-e62f-480d-88e9-ec44ebcef81c@100%  # after preview checks and approval
npx wrangler triggers deploy                                          # cpp.anacay.org (custom domain)
```

Preview checks passed on both version preview URLs. On `ac2c2693`: /, /body-of-knowledge/#start-here, /glossary/#case-3-terms, /cases/, /cases/kuantillion-cloud/, /cases/kuantillion-cloud-practice/#p4, /cases/kuantillion-cloud-plan/#gate-3, /notes/second-lives/ and /guide/concepts/operating-mechanisms/#m5. On `0f5907c3`: the case page shows "The answer, in brief" second, with the comment box collapsed; /cases/kuantillion-cloud-plan/#gate-3, /cases/kuantillion-cloud-full/, /notes/second-lives/ and /cases/ ("five rules", "five minutes").

## Live checks

On 30 October 2026, at https://cpp.anacay.org:
- 200 for /, /body-of-knowledge/, /glossary/, /cases/, the four Case 3 pages, /notes/second-lives/ and /guide/concepts/operating-mechanisms/.
- No `X-Robots-Tag` header and no noindex meta on those pages; robots.txt allows all.
- The case bar shows on the four Case 3 pages. /cases/kuantillion-cloud/ shows "The situation", then "The answer, in brief", with the comment box collapsed.
- #start-here, #case-3-terms, #p4 ("P4. Size and source legacy spares"), #gate-3 ("G3: the drive record, designed (G3a) and live (G3b)") and #m5 (the Fulfillment ledger row) land on the right targets.
- `/sitemap.xml` lists 73 URLs, including the four Case 3 URLs and /notes/second-lives/.
- `/feed.xml` has 16 items, including "New case study: Kuantillion Cloud" and "New working note: Second lives".

## Rollback

`npx wrangler versions deploy 70fab4fd-8b15-4f81-910c-bc6e8709ff30@100%` returns the site to R5.
