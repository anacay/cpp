---
title: "Weekly: steer, bridge, test before launch"
short: Between monthly reviews, you arbitrate, broker trades, run the bridges, test the coefficient before launch and keep the ledger true.
kind: stage
order: 13
cadence: weekly
altitude: envelope, region, portfolio, launch, unit
levels: learning, practicing
seed: 9.1, 9.3, 5.2, 5.4, 6.4, 6.2, 6.5, 6.7, 7, 10.2, 10.4, 13, Appendix A
---

## What happens at this cadence

The seed paper calls this cycle *continuous steering*. You arbitrate, broker, run bridges and keep the fulfillment ledger current (Section 9.1 of the seed paper). It serves live and configured launches, the right-hand end of the commit-point timeline. Most of the work is small and frequent. Its value is that problems surface while something can still move.

- **Envelope:** normally nothing new is decided here. If a cut or a supply slip lands mid-cycle, the cut line moves in the re-cut order agreed beforehand.
- **Region or site:** shortages in one shape at one site, moves between regions, and turn-up queues. Delivered-but-not-live is where backlogs quietly age [argued].
- **Portfolio:** escalations, brokered trades and overrides, each logged. The ledger stays current.
- **Launch:** pre-launch tests measure the coefficient before launch [7]. Slips are recorded and supply is re-pegged.
- **Unit:** tuning, and admission control at the top of a peak [33]. The two alerts belong to [post-launch](stage-post-launch.md).

## Commit points that land here

Job placement and admission commit here, at Live, in minutes to days. Turn-up and allocation committed monthly; here you run the queue against the staffed rate. A bridge also has a lead time. It works on your clock only if it was arranged before you needed it (Section 6.4). So the weekly cycle mostly spends options set up earlier. See [the map](the-map.md) and [commit points](concept-commit-points.md).

## What you do

**Run the bridges.** When approved demand can't be sourced in time, you bridge, fastest lever first. Charge each premium to its cause, such as a late ask or a forecast miss. The full lever list is in [approval and allocation](concept-approval-and-allocation.md).

**Broker.** One team holds capacity it doesn't need; another needs that shape, there, now. Resource, amount, place and time must all match. That knowledge comes from a weekly habit of asking teams what's coming and what's idle [argued]. Log every trade, so what the broker knows outlives the broker (Section 10.4).

**Apply shortage rules agreed beforehand.** A delivery short in one shape at one site needs its own rule: who goes short first. The forum agrees it in advance; supply carries it out. Written during the shortage, it's a negotiation (Section 9.3). Don't split a shortage pro rata: rules that reward bigger orders teach teams to pad [A5]. A ranked list doesn't reward padding [argued].

**Watch turn-up.** A slipped batch queues at turn-up with everything else that slipped, so a supply slip often shows up twice. Per-site turn-up throughput often binds [argued].

**Test before launch.** A configured declaration can carry a coefficient measured in pre-launch tests [7], rather than guessed. The SRE chapter suggests reusing its ratios in "pre-launch performance testing and A/B testing" [7]. Where the test disagrees with the declared coefficient, raise it now. See [the coefficient](concept-the-coefficient.md).

**Handle escalations and overrides openly.** An override is allowed, but it is logged with what moved down, and its bridges are charged to it (Section 10.2).

**Say no with a path forward.** Under real scarcity, refuse in writing. Cite the binding dimension and the cut line. Offer a re-shaped ask, a phased launch, placement elsewhere or a dated slot next cycle. A refusal with no path gets routed around (Section 9.1).

Learning planners usually work this cycle on single services and launches. Practicing planners take the escalations and broker across the portfolio [argued]. See [people](people.md) and [operating mechanisms](concept-operating-mechanisms.md).

![Two paths. An envelope cut or supply slip moves the cut line in an order agreed beforehand. A shortage in one shape at one site follows a rule, agreed beforehand, for who goes short first. Both ask whether a bridge can cover what is displaced; each premium goes to its cause.](../seed/figures/E15.svg)

*From the seed paper, Figure 38.* Name what's displaced, bridge what can be bridged and charge each premium to its cause. Bridge speeds are the paper's judgment.

## The example, at this cadence

Product A's launch on Service X, from launch to about +3 months. All numbers are illustrative.

- **Envelope.** —
- **Region or site.** Without the method, X runs a bridge from launch until the high-memory machines arrive at +3, about a quarter. Four standard machines from the pool run for their memory, with their CPU stranded. The pool is owed four, with a date and an owner.
- **Portfolio.** A release of X has raised CPU per call, so the extra installed cores also come from bridges. Until they land, X runs inside its own buffers: a dated ledger item owned by X.
- **Launch.** The launch slips six weeks. Without the method, nobody records it. With the method (Appendix A): the slip is recorded, and the launch reserve is re-pegged to another X tenant. A pre-launch test might have caught the higher coefficient [argued].
- **Unit.** CPU per call has risen from 2.5 ms to 3.125 ms, so CPU runs out first. With the method (Appendix A): admission control on launch day handles the transient spike, owned by A with X.

## What goes wrong

- A bridge is arranged after it is needed, so it arrives too late to help.
- Shortage rules are written during the shortage, and the loudest team wins.
- Trades live in one person's head and become an invisible second forum.
- A "no" comes without a path, and demand routes around the plan.
- A launch's coefficient is first measured on live traffic, after the machines were bought.

## How to tell it's working

The commit-point map's test applies: bridge premiums shrink, and fewer orders are placed after their commit point (mechanism 13). For the forum, watch decisions reopened and overrides; that has no failing test yet. The seed paper adds a *shortage budget* as an analogy, not a result. At a 4 : 1 ratio, about one launch in five should need a bridge at that layer (Section 10.2). Far fewer for two years suggests padding; far more suggests optimistic records.

## What it hands on

From [monthly](stage-monthly.md): a ledger with named gaps, owned bridges and a ranked list. To [post-launch](stage-post-launch.md): live launches, their measured coefficients, the bridge premiums and their causes, recorded slips, and replenishments still owed.

| Artifact | Mechanism | Owner | Comes from | Goes to |
|---|---|---|---|---|
| Fulfillment ledger: bridges, replenishments owed | 5 | Planning carries the gap; each performer owns its entry | Monthly ledger | Post-launch review |
| Forum decision log: overrides, brokered trades, escalations | 10 | Named executive forum, run by planning | Monthly ranked list | Post-launch; next quarterly re-rank |
| Commitment register: re-pegged supply | 11 | Supply chain, with planning and finance | Monthly commits | Post-launch scoring of promises |
| Declaration register: slips recorded | 12 | Declaring team; planning keeps it | Monthly Configured entries | Post-launch scoring |

Placing each artifact at this cadence is the guide's reading [argued].

## Where this comes from

Seed paper, Sections 5.2, 5.4, 6.2, 6.4, 6.5, 6.7, 7, 9.1, 9.3, 10.2, 10.4 and 13, and Appendix A. Pre-launch tests and the measuring loop come from the 2026 SRE chapter [7]. Its Meet case ran a daily loop asking whether there were enough resources for the load expected a week out, and bridged by borrowing from other teams [7]. Admission control at the top of a predictable peak follows Alibaba's account [33].
