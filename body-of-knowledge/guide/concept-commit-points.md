---
title: Commit points and the commit-point method
short: Each supply layer has a last date it can be ordered; the method reads how firm a launch is at each one and decides what to commit, in what form, and who owns the rest.
kind: concept
order: 35
cadence: annual, quarterly, monthly, weekly
altitude: region, portfolio, launch
levels: practicing, leading, supply
seed: 6.5, 8, Appendix A
---

## The idea

**Two clocks.** Demand information firms up on one clock; supply commitments run on another. The power for a launch's building may be ordered before anyone hears the rumor. Alphabet's chief executive put the supply side plainly: "how we close the gap this year is a function of what we have done in the prior years" [90].

**A commit point per layer.** Each layer's commit point is its need date minus its cautious lead time. What matters there is the residual uncertainty: how much of the declaration is still open when that layer must be ordered. Hixson and Guliani point at the same quantity, the "sensitivity" of estimates "to their time horizon" [6].

![Two lanes: the demand clock narrows at decision events; the supply clock shows each layer's commit point with the range still open above it.](../seed/figures/B4.svg)

*From the seed paper, Figure 22.* At each layer's commit point, the range still open, not the point forecast, picks the instrument.

## Where it shows up on the map

Commit points are not a column. Each lands in the cadence its lead time forces (seed paper, Sections 6.2 and 6.5). The table is the one on [the map](the-map.md); timings vary by operator and market:

| Supply layer | Typical commit point | Lands in | The declaration is usually |
|---|---|---|---|
| Land, power, building shell | One to several years ahead | Annual | Intent, or none |
| Long-haul network; large contracts | Several quarters | Annual or quarterly | Intent to Dated |
| Machines and parts | One to three quarters | Quarterly | Dated |
| Machines from a stocked pool | Weeks; at configuration in the worked example | Monthly | Configured |
| Turn-up and allocation | Weeks per job; the rate is staffed months ahead | Monthly | Configured |
| Job placement and admission | Minutes to days | Weekly | Live |

Layers that commit before any declaration exists are served by the portfolio envelope. With the method, the worked example's high-memory commit point moves to −11, at Intent, so it lands in the [annual](stage-annual.md) column. The stage pages say what lands in each: [annual](stage-annual.md), [quarterly](stage-quarterly.md), [monthly](stage-monthly.md) and [weekly](stage-weekly.md).

## How to use it

The method asks, per layer: when must this be ordered, how firm is the launch by then, and what do we commit? Appendix A of the seed paper has the worksheet.

1. **List the layers** with usual and cautious lead times ([supply layers](concept-supply-layers-and-lead-times.md)).
2. **Find each need date and commit point.** Need date is the next layer's start; commit point is that minus the cautious lead time.
3. **Read the stage and open range at each commit point** ([declarations](concept-demand-and-declarations.md)). Ask whether the attribute that drives the layer is known by then.
4. **Choose how far up the range to cover**, using the layer's shortage-to-idle ratio ([buffers](concept-buffers-and-reserves.md)).
5. **Net** against on hand, on order, due back and retiring, each dated and owned.
6. **Split each layer** into firm (to the base), flexible (options or a launch reserve) and named (a bridge with an owner).
7. **Agree change bands per stage** with the declaring team; supply signs them too.
8. **Write it down and get supply's answer** in four artifacts: the declaration register, the commit-point map, the supply request and answer, and the fulfillment ledger.

When a commit point falls before the event that would size it, you have three choices. Ask for the decision earlier, buy an option past the event, or commit to the stage's record and name the owner of the residual. Write down which.

**What each side owes the other.** Planning owes supply, per layer and before its commit point, six things. They are the net requirement by shape, site and need date; the stage and open range; the signed band; accepted substitutes; the ramp; and the rank under shortage. Supply answers each line with a dated commit or a named gap. Both sides get scored.

In the running example, a cautious lead time and a real need date move the high-memory commit point from −6 to −11 months (illustrative). That's while the launch is still an intent. Step 3 then catches the stored-data question in time. The cost is about one machine of spare at the 40,000 landing.

Use the method knowing what it isn't. It isn't an estimator: its ratios and bands write judgment down. It's untested, and it isn't optimal; a data scientist could do better. Its blind spots are coefficient drift, correlated launches and demand nobody can declare. See [limits](limits.md).

## What goes wrong

- Every layer timed to launch day, so slow layers commit too late.
- The driving attribute (region, tier, hardware class, data stored) is never asked by its commit point.
- Approvals treated as firm before supply answers.

## Where this comes from

Seed paper, Sections 6.5 and 8, and Appendix A. Hixson and Guliani supply the frame: plan at least as far ahead as the order time, and use fungibility [6]. Olavson supplies base-and-high consensus [8]. Operations research supplies the rest [70, 71, 73, 76–78]. The 2026 SRE chapter supplies pieces of the read half [7]. The per-layer walk tied to a launch's stage is the seed paper's addition.
