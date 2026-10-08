---
title: "The map: altitude and cadence"
short: One picture that connects the high level to the low level over time. Every page in this guide sits somewhere on it.
kind: foundation
order: 2
cadence: all
altitude: all
levels: all
seed: 5.4, 6.2, 6.5, 9.1, 7, Appendix A
---

Capacity planning happens at several altitudes at once, on several clocks at once. A budget decision made a year out and a bridge arranged this week are parts of the same plan. The map puts them on one page, so you can see how they connect. [argued]

## Two axes

**Cadence, left to right.** The planning cycle runs annual, quarterly, monthly, weekly and post-launch. Each cycle commits only what its lead time forces, slowest first (seed paper, Section 9.1). Weekly here is the seed paper's "continuous steering". The cycle is a loop. The post-launch review feeds the next quarterly intake (seed paper, Figure 37), and through it the next annual plan. [argued]

**Altitude, top to bottom.**

- **Envelope:** capital and the whole fleet. The budget, the cut line, strategic bets on demand.
- **Region or site:** place. Land, power, buildings, network, machines arriving.
- **Portfolio:** all launches and asks together. Forecasts, declarations, the ranked list, the ledger.
- **Launch:** one product's step change, moving through its stages.
- **Unit:** one shared service. Its coefficient, its shapes, its alerts.

![A grid. Columns are the planning cadence: annual, quarterly, monthly, weekly and post-launch, with an arrow from post-launch back to annual. Rows are altitudes: envelope, region or site, portfolio, launch and unit. Each cell names the work at that altitude and cadence. Dots mark supply commit points in the region row: annual, quarterly, monthly and weekly.](figures/G1_map.svg)

*The map.* Each cell is the work at one altitude and one cadence. Dots mark supply commit points: each layer commits in the cadence its lead time forces. Schematic. [argued]

## Where one launch sits in time

The columns are cycles, not dates. But for one launch, they line up roughly with time to launch. This guide uses the timing of the seed paper's worked example (Appendix A). [argued]

| Column | For one launch, roughly | Where its declaration usually is |
|---|---|---|
| Annual | A year or more before launch | Intent, from about −12 months |
| Quarterly | Two to three quarters before | Dated, from −6 |
| Monthly | The last quarter | Configured, from −3 |
| Weekly | The last weeks, and the ramp | Configured, then Live |
| Post-launch | About a month after, then each cycle | Live, then Organic |

The seed paper's two-clocks figure uses a longer horizon (Section 6.5): there, Intent runs from about −18 months and network commits at −15. The pattern is the same; only the dates stretch.

## Commit points are placed by lead time

Commit points aren't a column. Each supply layer commits at its need date minus its cautious lead time (seed paper, Section 6.2). So the slow layers commit in the slow cycles, and the fast ones in the fast cycles. The seed paper's table of layers gives the usual pattern (Section 6.5); the stocked-pool row comes from its worked example (Appendix A). Timings vary by operator and market:

| Supply layer | Typical commit point | Lands in | The declaration is usually |
|---|---|---|---|
| Land, power, building shell | One to several years ahead | Annual | Intent, or none |
| Long-haul network; large contracts | Several quarters | Annual or quarterly | Intent to Dated |
| Machines and parts | One to three quarters | Quarterly | Dated |
| Machines from a stocked pool | Weeks; at configuration in the worked example | Monthly | Configured |
| Turn-up and allocation | Weeks per job; the rate is staffed months ahead | Monthly | Configured |
| Job placement and admission | Minutes to days | Weekly | Live |

This is the seed paper's "two clocks" (Section 6.5). Demand firms up on one clock; supply commits on another. The further left a layer's commit point, the more of the demand is still open when you buy it. See [commit points](concept-commit-points.md).

## One launch, traced

Here is the seed paper's worked example on the map: Product A's launch on Service X (Section 7 and Appendix A). All numbers are illustrative.

![The same grid with eight numbered steps traced in blue: Intent at about −12, a share of the envelope held, Dated at −6, high-memory machines committed at −6 without asking about stored data, Configured at −3 when the memory need surfaces, standard machines from the pool bridging, the launch landing at 40k with high-memory machines arriving at +3, and the measured coefficient becoming the next one.](figures/G2_trace.svg)

*One launch, traced.* The seed paper's worked example in eight steps. Illustrative numbers.

1. **Annual, launch row.** About a year out, Product A plans a launch on Service X. It's an Intent: a size range and a rough date.
2. **Annual, portfolio row.** A share of the envelope is held for it, sized from how past intents turned out.
3. **Quarterly, launch row.** At −6 months it's Dated: a base of 60,000 and a high of 90,000 requests per second.
4. **Quarterly, region row.** High-memory machines take two quarters, so they commit at −6. Nobody asked how much data the launch would store.
5. **Monthly, launch row.** At −3 it's Configured, and the memory need surfaces. High-memory machines are ordered now, a quarter late.
6. **Weekly, region row.** Standard machines from the stocked pool run as a bridge, carrying memory they weren't sized for.
7. **Post-launch, launch row.** The launch lands at 40,000. The high-memory machines arrive at +3, a quarter after launch.
8. **Post-launch, unit row.** The measured coefficient becomes Service X's next one. It feeds the next quarterly intake and, through it, the next annual plan.

## The same launch, with the method

With the [commit-point method](concept-commit-points.md), a cautious lead time and a real need date move the high-memory commit point to −11, while the launch is still an Intent. Stored data gets asked about at −12, before the slow layer commits (seed paper, Section 8.4). The question moves left on the map, to the column where it can still change the order.

![The same grid traced with the commit-point method in eight steps: Intent at −12 with stored data asked as a range and change bands agreed; high-memory machines committed at −11, at Intent, with power earlier at −20; Dated at −6, inside the band agreed at intent; Configured at −3, sized to 70k; machines on the dock by −2 and ready at −1; no bridge at the base, with a bridge named in advance above 70k; landing at 40k recorded as a band breach on the declaration; about 1.0 NMU of spare, priced and owned, and the next coefficient.](figures/G2b_trace_method.svg)

*The same launch, with the method.* The slow question moves into the annual column. Illustrative numbers, from the seed paper's Appendix A walk.

Compare the two traces. Without the method, the path zigzags right and down: the question arrives after the order, and a bridge pays for it. With it, the slow decision sits in the column where its lead time puts it. The method doesn't make the forecast more accurate. It moves the hard question to the date it was needed, and it gives every surprise an owner (Section 8.4). Its cost is visible too: about 1.0 NMU held above the base, about $26,280 a year of idle at the 40,000 landing (illustrative).

## How to use the map

- **To find your work.** Find your altitude and cadence. The pages for that column tell you what's yours there.
- **To see hand-offs.** Read a column top to bottom to see how one cycle connects the budget to the service. Read a row left to right to see how one thing firms up over time.
- **To find gaps.** A cell nobody owns in your organization is where surprises come from. [argued]

Every page in this guide has a strip at the top showing its cadence, its altitude and the levels that usually do that work.

## The stage pages

- [Annual: the envelope and strategic bets](stage-annual.md)
- [Quarterly: forecast, declare, agree the coefficients](stage-quarterly.md)
- [Monthly: commit, fulfil, name the gap](stage-monthly.md)
- [Weekly: steer, bridge, test before launch](stage-weekly.md)
- [Post-launch: measure, restate, re-baseline](stage-post-launch.md)

## Where this comes from

- The cadence: the seed paper, Section 9.1, after sales and operations planning [23] and hierarchical production planning [3].
- Declaration stages: Section 5.4. Supply layers and commit points: Sections 6.2 and 6.5, and Appendix B.
- The worked example: Section 7 and Appendix A.
- Laying cadence against altitude as one map is this guide's addition. [argued]
