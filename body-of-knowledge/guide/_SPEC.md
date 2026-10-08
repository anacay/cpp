# Guide spec (for writers; not published)

The **guide** is the body of knowledge written as reference, not argument. The seed paper (*The Coefficient Is an Agreement*, v7.6, `body-of-knowledge/seed/`) stays whole beside it. Every guide page draws from the seed and says where. This is a **draft for the author's review** (version label: "Guide, draft v0.2").

## The two organizing ideas

**1. The map: altitude × cadence, run as a living loop.**

Cadence columns (the paper's §9.1 cadence; "weekly" is the paper's "continuous steering"):
`annual` → `quarterly` → `monthly` → `weekly` → `post-launch` ↺ (post-launch feeds the next annual plan).

Altitude rows, high to low:
- `envelope`: capital and the whole fleet. Budget, the cut line, strategic bets, depreciation.
- `region`: region or site; place. Power, land, buildings, network, machines arriving, turn-up.
- `portfolio`: all launches and asks together. Forecasts, declarations, the ranked list, the fulfillment ledger.
- `launch`: one product's step change. Its declaration moving through stages.
- `unit`: one shared service. Its coefficient, shapes, alerts, efficiency.

Commit points are not a column. Each supply layer's commit point lands in the cadence its lead time forces: power, land and buildings at annual; network and long-lead machines at quarterly; standard machines at monthly; configuration and moves at weekly.

First-pass grid (check every cell against the paper before relying on it):

| Altitude / Cadence | Annual | Quarterly | Monthly | Weekly | Post-launch |
|---|---|---|---|---|---|
| Envelope | Budget; strategic bets on demand | Re-plan the envelope | Track spend vs plan | — | Restate, re-baseline |
| Region / site | Land, power, shells; long-haul network ◆ | Machines and parts; placement ◆ | Pool machines; turn-up slots ◆ | Job placement; bridges ◆ | Stranded capacity, reclaim |
| Portfolio | Strategic bets, declared intent | Forecast, declarations firm up | Fulfillment ledger | Escalations | Variance by owner |
| Launch | Intent | Dated, then configured | Commit or name the gap ◆ | Pre-launch tests | Live, then organic |
| Unit | — | Coefficient agreed | Shape, place, time | Tuning | Two alerts, efficiency |

**2. The path: who usually works where.** Argued from experience, never presented as measured.
- `learning`: unit and launch rows, weekly to monthly. Demand side, inside the broker role.
- `practicing`: the portfolio, monthly to quarterly, with the commit points. The broker.
- `leading`: envelope and region, annual and quarterly; holds or runs the decision rights. The broker at full scope.
- `capital`: crosses to the capital corner of the handshake: budgets, the envelope, strategic bets, depreciation, financing. Prices the agreement.
- `supply`: crosses to the supply corner: sites, power, contracts, lead times, vendors. Owns the clock others plan against.
The path runs up the middle as the broker, then forks to capital or supply. "Strategic bets" is the term for large, uncertain demand bets at the envelope or portfolio level.

## The running example
Use the seed paper's case (Section 7 and Appendix A): **Product A**, the largest caller of **Service X** (a shared document store). Peak rises from 400,000 to 500,000 requests per second: 40,000 organic, 60,000 from a launch planned for the start of the second quarter. Intent from −12 months, Dated from −6, Configured from −3, launch at 0. High-memory machines take two quarters; standard machines come from a stocked pool in weeks. Without the method, the memory need surfaced at −3; high-memory machines arrived at +3; standard machines bridged. The launch landed at 40,000. All numbers illustrative. Don't invent a new case; trace this one.

## Files
One Markdown file per page in `body-of-knowledge/guide/`, with frontmatter:

```
---
title: Annual: the envelope and strategic bets
short: One sentence, plain, that says what the page is for. Rendered as "In short".
kind: stage            # foundation | stage | across | concept
order: 10
cadence: annual        # one or more of: annual, quarterly, monthly, weekly, post-launch, all
altitude: envelope, region, portfolio   # one or more of: envelope, region, portfolio, launch, unit, all
levels: leading, capital, supply        # one or more of: learning, practicing, leading, capital, supply, all
seed: 9.1, 6.2, 6.5, Appendix B         # seed-paper sections this page draws from
---
```

Then the body. No H1 (the title is the H1). Use `##` for sections, `###` sparingly.

### Page pattern: stage pages (one per cadence)
1. `## What happens at this cadence`: one short paragraph, then one bullet per altitude row (Envelope, Region or site, Portfolio, Launch, Unit) saying what happens at that altitude in this column. This is how the page connects high level to low level.
2. `## Commit points that land here`: which supply layers commit at this cadence and why (lead time).
3. `## What you do`: what the planner does here, written to "you". Where useful, say which level usually does it (learning, practicing, leading; or the capital or supply side).
4. `## The example, at this cadence`: what happens to Product A's launch on Service X at this cadence.
5. `## What goes wrong`: 3–5 bullets.
6. `## How to tell it's working`: indicators, from the paper's tests where they exist; otherwise say none is tested yet.
7. `## What it hands on`: what this cadence receives from the one before and passes to the next (and for post-launch, back to annual).
8. `## Where this comes from`: seed-paper sections, and the public sources behind them with their [n] numbers. Credit prior art generously.

### Page pattern: concept pages
1. `## The idea` 2. `## Where it shows up on the map` (cadence × altitude, in words or a small table) 3. `## How to use it` 4. `## What goes wrong` 5. `## Where this comes from`.

### Across pages (people, settings, cases, limits) choose sections that fit, but end with `## Where this comes from`.

## Conventions the site understands
- **Citations:** `[7]`, `[1, 6]` use the seed paper's reference numbers; they link to the reference list. Only cite a number for what that source actually says in the paper. Check the paper's own use of it.
- **Seed paper links:** write "seed paper, Section 6.2" or "(Section 6.2 of the seed paper)". The words "Section 6.2", "Figure 22", "Appendix A" auto-link to the paper. Don't write "Section N" for anything that isn't a seed-paper section.
- **Links between guide pages:** `[the commit-point method](concept-commit-points.md)` (the file name). The site rewrites them.
- **Evidence labels:** after a claim that comes from practice, add ` [argued]`; after a claim nobody has measured publicly, add ` [unmeasured]`. Published claims carry their citation number. Use labels where they help; not on every sentence.
- **Figures from the seed paper:** `![alt text](../seed/figures/E17.svg)` then a caption line in italics that starts with "*From the seed paper, Figure 41.* …". Use the alt text and caption meaning from the paper; keep them short. Only use figures that exist in `body-of-knowledge/seed/figures/`. Use at most two per page, only where they carry the point.
- **Tables:** fine, keep them small.

## Voice and rules (non-negotiable)
- Plain, casual, serious. No hype. No spotlight on the author. Address the reader as "you" (an individual planner choosing and growing in the discipline).
- Sentences of 30 words or fewer. One idea per sentence.
- "Frameworks", never "models" (except quoting a source).
- Hypotheticals start "For example, if…". Every invented number is labeled illustrative.
- Prior art credited generously: Hixson and Guliani [6], the 2026 SRE chapter [7], Auxon [1], Olavson [8], etc., as the paper does.
- **Public-writing rules:** no internal system names of any company (publicly documented ones the paper cites, such as Auxon, are fine), no confidential figures, no real internal ratios or coefficients, no named individuals other than cited authors and publicly quoted executives, no implication of private data access, the subject is the discipline not any employer, every example invented and labeled.
- **Banned words:** the author keeps a private list of terms that must never appear (internal names and phrasing from past employers). Editors get it privately; it is never committed here.
- Don't state anything as fact the paper doesn't support. If the guide adds a new idea (for example the map itself, or the career path), mark it [argued].
- Short quotations from cited works only, with the citation.
- Length: stage pages about 700–1,100 words; concept pages 400–700; across pages 600–1,000.
