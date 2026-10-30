---
title: Popcorn Pajamas: how the practice approaches it
short: Each of the case's sixteen problems mapped to the seed paper, and seven places where the body of knowledge runs out.
kind: case
order: 2.2
cadence: all
altitude: all
levels: learning, practicing, leading
seed: 4, 5, 5.4, 6, 8, 9.2, 10.1, 14
---

The [Popcorn Pajamas case](case-popcorn-pajamas-full.md) describes a problem space and stops there. This note asks the next question: what does the practice's current body of knowledge say about each problem, and where does it run out? Section numbers refer to the seed paper, *The Coefficient Is an Agreement*. Mechanism numbers refer to its thirteen mechanisms (Section 9.2).

Treat this as a first pass, not an answer key. Where the paper has nothing to say, we say so. Those gaps are the most useful part.

## The short version

Popcorn Pajamas' problem is the paper's problem at an unusual scale and shape. Four of the paper's ideas carry most of the weight:

- **A coefficient is an agreement** (Section 5). The case runs on conversion ratios nobody has versioned. The next section walks through four of them.
- **Step changes are declarations that mature** (Section 5.4). Live events, launches and games are demand with no history. The paper's answer is to stop forecasting them as multipliers and have their owners declare them in priced units, in stages.
- **Approval is not allocation** (Section 6). An approved number still has to become boxes of the right class, at the right site, filled in time, inside someone else's building. At Popcorn Pajamas the gap runs through host networks.
- **The commit-point method** (Section 8). Ask each supply layer's question at the date it must be ordered. Popcorn Pajamas runs one 12–18-month trigger for every layer, and component lead times now consume most or all of it. The conclusion the paper licenses: the single trigger should become a per-layer commit-point map (mechanism 13), because components, host consent, ports, fill nights and cloud reservations run on different clocks.

Parts of the case go past the paper. Supply is partly a barter with no price. Some demand is censored by its own admission control. Capacity runs out on the request path, not only on bytes. The list at the end names seven such places where the practice needs new work.

## The title claim, in this case

The paper's title claim is easy to miss here, because the drifted coefficients look like facts of life. Four exhibits:

- **Site capacity is one agreed number hiding three.** The published unit is Gbps before shed. But each box also binds on storage and fill, so a site inside its band can still shed when the catalog doesn't fit or fill can't finish. The agreed number and the real conversion have drifted apart (Section 5).
- **Generation breaks are unrestated.** Per-box storage fell from 354 to 120 TB while throughput rose 25×. Without restating history through the break (Section 5.3; mechanism 6), a fleet growing about 24% a year against 2% viewing growth cannot be decomposed by owner. The case's "deliberate reserve or stranded?" question is unanswerable for exactly this reason.
- **Live's booking coefficient moved silently.** Variable-bitrate admission reserves each stream's nominal bitrate, so live books more planned capacity than measured traffic shows. That is a coefficient change that needed a version and an effective date (Section 5.2).
- **The largest layer has no rate at all.** The embedded tier is a barter, with no money in either direction. The backward reading of the coefficient — the price a stream pays — simply doesn't exist, so streams compete for capital by negotiation (Section 4, and P8 below).

## The thirteen mechanisms, audited

Read against Section 9.2, from what the case makes public:

| # | Mechanism | At Popcorn Pajamas |
|---|---|---|
| 1 | Declared demand in priced units | Partial: live forecasts are shared with hosts, but internal asks arrive without cost discipline |
| 2 | Prior ask beside prior actual | Not visible |
| 3 | Coefficient register and versioned rate card | Missing: generation, codec and admission changes are unrestated |
| 4 | Owned unused and unallocated lines | Partial: miss and shed measures exist, yet reserve and stranding still look identical |
| 5 | Fulfillment ledger | Missing: the augment crosses six to eight teams with no end-to-end record |
| 6 | Discontinuity register | Missing |
| 7 | Commitments that become institutions | Missing: pushing back on asks is persuasion, not a signed forecast |
| 8 | Efficiency landing rule | Missing: codec gains are booked, their backfill nights are not |
| 9 | Cadence aligned to lead time | Partial: the cadence exists, but its trigger was calibrated when hardware was the fast part |
| 10 | Standing arbitration forum | Missing: "arbitration by negotiation" is one of the case's own failure modes |
| 11 | Supply plan of record and commitment register | Missing: no dated-commit-or-named-gap discipline from hosts, vendors or the cloud |
| 12 | Declaration register | Partial: the rights calendar and staged games investment are the raw material, with no stages, scoring or expiry |
| 13 | Commit-point map | Missing: one trigger stands in for every layer's commit point |

The ones that matter most here: the commit-point map (13), because the binding failure is lead times outrunning one undifferentiated trigger; the fulfillment ledger (5), because the augment chain is long, multi-party and unowned; and the declaration register (12), because live, games and launches are the demand that breaks the plan. Then the coefficient register (3), the forum (10) and the supply register (11).

## Problem by problem

### Demand

**P2. Inorganic demand on a smooth-curve plan.** This is the paper's core. Section 5.4 replaces "double it" with a declaration in units the planner already prices, firmed up in five stages from intent to organic. A launch is a rumor at the annual plan and a configuration weeks out, the staircase the paper draws. Mechanism 12 (the declaration register) keeps each step change's owner, stage, size range and record. Where a team can't declare, the planner scales the nearest analog and names the differences.

**P3. Live events on partner-hosted hardware.** Live is a declaration with an unusually long calendar: dates are known years out, sizes are not. The paper's stages fit, with one twist. The reference class has to come from the world record, not Popcorn Pajamas' own history, because a rival's peak now sits above it. Shortfall tolerance (a field in mechanism 12, proposed in Section 6.7) says how much shortfall, for how long, each event can take, which bounds how much early or partial supply it can use. And Q4 is a shared driver (Section 6.6): the holiday peak, the football slate and the biggest premieres land together by construction, so no pooling credit applies inside it. The paper doesn't cover the host side: the reserve sits in buildings Popcorn Pajamas doesn't control.

**P7. Games under censored demand.** The paper's forecast record assumes you can see actual use. Games break that: rejected sessions never appear in the actuals. The practice would treat rejection telemetry as part of the declaration's record, so the stage scores measure demand, not admitted demand. Section 11 goes further: where the owner holds the dial, the declaration can be the admission policy itself — the sites, the cap and the accepted rejection band — with the team scored on keeping it. This is new ground and worth a thread of its own.

### Supply

**P9. Absorb the component shock.** Section 6.2 says supply is ordered long before it arrives and bought through contracts; since slips are the common miss, the right to push a delivery out is often worth more than the right to cancel. Section 6.7 says supply has step changes too, declared in stages. The flash shock is one: a supply step change that has eaten most of the augment window. The commit-point method (Section 8) moves each question to the date its component must be ordered — which is the per-layer map of mechanism 13, not the single trigger. The quarterly supply review (Section 9.1, and the practice's [Discussion #12](https://github.com/anacay/cpp/discussions/12)) is where the shock gets worked: supply names the gap so demand can reshape to fit, and every temporary workaround is tracked until it is reversed once supply returns to normal. Mechanism 11 records long-term agreements as contracts with liability schedules, which is what makes them comparable as options.

**P10. Manage the installed fleet.** Section 6.3 treats buffers as a priced, named decision, so deliberate reserve has an owner and a reason. Mechanism 4 then puts the rest of the unused capacity on its own owned line; with rates set on practical capacity (Section 4), the fleet's nameplate residual decomposes into named lines instead of a mystery. Mechanism 6 (the discontinuity register) records each Popper generation as a break in the coefficients, so 354 TB boxes and 120 TB boxes aren't averaged together. One more layer sits under all of this: incentives ([Discussion #9](https://github.com/anacay/cpp/discussions/9)). A slipped launch's reserve hides because releasing it feels unsafe, and at Popcorn Pajamas it can hide inside a host's network, visible only as a small utilization dip. Detection comes first; then exchanges — lending with recall, return with interest — make volunteering cheaper than being found.

**P15. Backbone and interconnect.** This is a long-lead supply layer with its own commit point. The commit-point map (mechanism 13) would give it its own row, as the paper does for long-haul network and large supply contracts, with a usual and a cautious lead time.

**P16. The fill calendar.** The paper has no direct answer. Fill is a scarce, shared, time-bound resource, closer to the paper's shadow price (Section 4) than to anything it schedules. In Q4, one more box-night has a high shadow price; in Q2 it is near zero. That suggests pricing fill nights by season rather than first come, first served. It's an open question for the practice.

**P4. Request-path headroom.** The paper is mostly about bytes, machines and power. The case shows a peak that fails while links have room. The practice should treat the request path as a supply layer of its own, with its own coefficient (starts per viewer per minute), its own owner, and a dated commit in the form of a passed load test (mechanism 11, run across the interface). Today that sits outside most capacity plans, including the paper's.

### Allocation

**P1. Size a site with three coupled limits.** This is Section 6.1's stranding problem in a new form. A single-dimension unit (Gbps) prices one dimension and hides the binding one, the same failure Section 6.1 describes for weighted units. At a storage-bound site, throughput is stranded the way cores are stranded at a memory-bound machine. The paper's fix: name the binding dimension per site and price it by its shadow price, not its cost share.

**P5. Owned, cloud or production estate.** Section 6.4 (bridges and clearing) applies: cloud capacity can serve as a bridge, a named stopgap with an owner. Section 6.5's two clocks apply too, because owned capacity must be committed long before demand like games is known. The games breakeven in the case is the paper's long-run incremental cost (Section 4) applied to one stream.

**P6. Capacity in networks Popcorn Pajamas does not control.** This is the paper's third seam (planning and supply, Section 10.1) with a twist: part of supply is a partner who is paid in kind. The paper's five shared artifacts still help, especially a dated answer or a named gap for every augment; Section 6.7's supplier scoring suggests going further and treating hosts as a supply party, with stages, promised-versus-actual scoring, and forecasts owed before the hosts' own commit points. The slip problem compounds here: a reserve a slipped launch holds inside a host's network is doubly hidden (Discussion #9), so the augment conversation should carry the slip question too. But the paper assumes supply is bought. A barter that regulators may re-price is new territory.

**P8. Compare streams for the same capital.** Section 6.1 says a common unit prices but doesn't clear. Popcorn Pajamas has no common unit at all. The paper suggests three prices for three questions (Section 4). An average rate answers who pays. Long-run incremental cost answers what to build. A shadow price answers who gets scarce capacity now. The standing forum (mechanism 10) ranks the streams against a cut line and logs overrides.

**P13. Reserve per failure domain.** The paper treats buffers as a priced decision (Section 6.3) and leaves reliability buffers to reliability engineering (Figure 40). Sign the shortage-to-idle ratio per layer in advance, then backtest it: count bridges per layer against what the signed ratio implies (Section 10.2). The case adds a useful demand on the plan: overlay the live calendar on the evacuation math, because a failure and a peak can coincide.

### Governance

**P11. Govern the forecast.** Mechanism 2 (prior ask beside prior actual) and the stage scoring in Section 5.4 give the forecast a memory. The case's live transition from Finance-led to signal-led planning is the paper's second seam, between planning and finance, in motion (Section 10.1). The paper's advice is to make the transition explicit: who declares, who scores, who signs.

**P12. Plan the planners.** Section 10.4 (legitimacy, change and staffing) applies directly. The case's seat history is a good example of a function growing a seat each time the problem grew a dimension. The paper's six roles (Section 14) are a check: does each promise have someone keeping it?

**P14. Price the rights calendar.** Rights signed into the 2030s are capacity commitments made outside the capacity organization. The paper's tool is the declaration, made at the earliest stage. Our application attaches a cost range to it: planning hands the rights process a marginal capacity cost per peak stream, by region and tier, before deals sign — a cost range, not a veto.

## The organization as part of the answer

The case's organization section shows a planning team that recommends while others buy, install and host. That is the paper's description of the planner: sitting in the middle, usually with no capacity and no budget, trading in information, timing, trust and credible commitments (Figure 41). Popcorn Pajamas' augment crosses six to eight teams. Each hand-off is a place for the fulfillment ledger (mechanism 5) to record who owns the gap.

Two of the practice's open discussions run straight through this case. Discussion #9 holds the incentive layer: the forces that keep a slipped reserve hidden, and the handshakes that make honest reporting the sensible choice. Discussion #12 holds the supply review's purpose: name the gap so demand can reshape, and track every shortage workaround until it is reversed. Both would need a host-side version here, because the capacity in question sits in other people's buildings.

## Where the practice needs new work

1. **Barter supply.** How to plan capacity paid for in kind, and what changes if regulators force a price into it.
2. **Censored demand.** How to score declarations when the system's own controls hide part of the demand.
3. **The request path as supply.** A coefficient and an owner for starts, manifests and ad events.
4. **Fill as a priced calendar.** Whether scarce overnight windows should carry a seasonal shadow price.
5. **Reference classes from rivals.** How to size a step change when the best evidence is someone else's record.
6. **Components that appreciate.** The buffer arithmetic (Section 6.3) assumes excess costs carrying. Flash rose in price while held, flipping the frame toward speculation. The practice needs a rule for when buying ahead stops.
7. **Streams that substitute bytes and add requests.** Section 6.6 handles demand that peaks together. It says nothing about streams that cancel on one layer and stack on another. Planning bytes on net and requests on gross, with separate owners, is the candidate rule.

Each is a candidate discussion. If you've worked on one of these, the practice would like to hear how you handled it.
