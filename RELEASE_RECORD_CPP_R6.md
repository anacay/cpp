# Release record: CPP R6

Case 3: Kuantillion Cloud, the second working note ("Second lives"), and a site-wide on-ramp for new practitioners. Case 3 is the practice's second problem-space case, and the first with the practice's answer beside it: the full case, a strategy page and an execution plan. The seed paper's text is unchanged; it stays at v7.9.

| | |
|---|---|
| Date | 30 October 2026 |
| Worker | `cpp-anacay` |
| Live version | *(filled in at deploy)* |
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

## Process

The guide edits are small fixes under HOW_IT_GROWS: links, definitions and wording that match the cited source. Case 3 and the note are new content. They are published as drafts open for argument, as Case 2 was, and each gets a discussion with an open period. The open proposals (#9, #12, #17, #18, #20) are untouched.

## Commits

cpp (`anacay/cpp`): branch `case3-fleet-flash`, 147 commits on `81b523c`, one per change. The numbered change list, with each commit, is kept with the release materials.

## Checks (before deploy)

- **Build:** `npm run build`, all checks passed (74 pages, 7,612 internal links and anchors resolved).
- **Seed text:** unchanged (check 1).
- **Scripts:** no new scripts; the case bar is CSS only (check 4).
- **Text check:** the Case 3 pages, the note and the changed pages were scanned for the private terms and real company names; no matches.

## Deploy

*(filled in at deploy)*

## Live checks

*(filled in at deploy)*

## Rollback

`npx wrangler versions deploy 70fab4fd-8b15-4f81-910c-bc6e8709ff30@100%` returns the site to R5.
