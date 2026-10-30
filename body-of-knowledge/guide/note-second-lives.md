---
title: Second lives
short: Capacity that comes back out of the fleet arrives in parts, of uncertain condition, as a byproduct of other decisions. The second emerging-topics working note.
kind: note
order: 5
cadence: quarterly
altitude: portfolio, region
levels: practicing, leading, supply
seed: 4, 5.2, 5.4, 6, 6.1, 6.2, 6.3, 6.4, 6.6, 6.7, 8.2, 9.2, 10.1, 11, 13
---

*Stage: working note. Status: draft, open for argument. The question: what does capacity planning lose when supply comes back out of the fleet in parts, of uncertain condition, as a byproduct of decisions made for other reasons, and what replaces it? Related: Section 6, Section 6.2, Section 6.6, Section 6.7, Section 8.2. Discussion: to be opened under Proposals.*

## The seed

This note grew from a problem-space case, [Case 3](case-fleet-flash.md). The case is a hyperscale fleet trying to reuse its older solid-state drives during a flash shortage. Two independent applications of the practice to that case hit the same wall at the same place.

The seed paper already has the starting line. "Decommission is negative supply" (Section 6.7). "A retirement is a supply order with a minus sign. It has a date, and it slips, usually because tenants can't migrate off in time" (Section 6.7). Netting already counts what is "due back from reclaim" (Section 6).

That works while what comes back is the same thing that left. This note asks what happens when it isn't: when a retirement returns capacity in a different form, of uneven quality, on a schedule set by someone else's decision.

## Agreeing on the words

**Byproduct supply** is supply that nobody ordered. It falls out of a decision made for another reason, most often retiring a machine. Its size, timing and quality are set by that decision, not by a purchase order.

**Harvest** is the parts a retirement releases: drives, memory, cards. A harvested part must pass gates before it is supply. It must fit a slot, run on a platform, pass a test and, for anything that held data, be provably erased.

**Condition** is how sound a supplied unit is: its wear, its error history, its age. A **grade** is a condition band that a plan can price and place.

**Regained fungibility** is what disassembly buys. The paper says "Every step down the chain spends some fungibility" (Section 6.2). Taking a machine apart runs that chain backward. Parts can serve more uses than the machine they came from, but only after the gates.

**Exit** is selling or recycling capacity out of the fleet.

One distinction carries the note. **Returned capacity** comes back in the form it left, like the reclaim in the paper's worked case. **Harvested capacity** comes back as parts, in a new form.

## Why it matters

The paper's supply machinery is built for things that are ordered. The claim of this note is that byproduct supply breaks four of its quiet assumptions, and that the fixes are small if made deliberately. Here is the chain of reasoning, one small step at a time. Each step is open to challenge.

**1. A retirement is also a delivery.** The paper books a retirement as negative supply (Section 6.7). For parts, the same retirement is positive supply: a harvest, dated, that can slip. The netting rule already covers it in part: "Each of those is a forecast too, so give each a date and an owner" (Section 8.2, step 5). What is new is that one event writes two lines, a minus for machines and a plus for parts [argued].

**2. One decision moves demand and supply in opposite directions.** The paper already prices keeping old hardware. Its bridge table lists "Defer decommission of older hardware", with a main cost of "Power, efficiency and reliability penalty" (Section 6.4). It also names deferring a decommission as a finance decision: it "extends depreciation on an asset finance had written off its plan" (Section 10.1). What it doesn't net is the other side of the same choice. Keeping a platform raises its need for spare parts and also cuts the harvest that would supply them. The paper checks shared drivers among launches (Section 6.6) and among supply sources: "Check supply for shared drivers" (Section 6.7). It never checks one driver shared across demand and supply with opposite signs. Netted separately, a keep decision can leave both lines wrong at once, and the miss then "looks like a supply failure" (Section 6) [argued].

**3. The delivered unit has a condition.** The paper knows supply can come back worse. In a passage it marks "In my experience", it says deferring a decommission "gives worse hardware, sooner" (Section 6.7). It also knows value is not proportional to completeness: "A rack missing one cable isn't 99% of a rack." (Section 6.7). But its unit has dimensions of shape only: "storage capacity *and* access rate (IOPS), which are separate resources" (Section 6.1). Firmness classes tell holders whether capacity will arrive, "so holders know their odds" (Section 6.1). Supply is scored on "Promised versus actual dates and sizes, by stage" (Section 9.2, mechanism 11). None of these carries a per-unit condition that a plan can price or score. The remaining gap is that dimension, not the idea that old hardware is worse [argued; how widely condition varies within a model is unmeasured].

**4. Condition can fail after delivery, and as a cohort.** The paper already buffers failures. Redundancy (N+k) is one of its named buffers, and it cites one operator's split of "2% for random failures and 4% for correlated failures" (Section 6.3). For accelerator fleets, work lost to failures is "owned by its cause: infrastructure for hardware failures" (Section 11). The correlation rule applies directly: "Name the driver; don't infer independence from a low measured correlation" (Section 6.6). What is missing is narrower: a failure rate that depends on the grade of the supply delivered, so that choosing a grade changes the buffer it needs. Today the buffer is sized for the fleet, not priced into the grade [argued].

**5. A fleet can sell what it doesn't use, and its sales move the price.** The paper prices excess as, in its author's reading of the literature, "mainly carrying a unit until demand grows into it" (Section 6.3), and limits it through contract terms (Section 6.2). Its three prices are all internal (Section 4). Byproduct supply adds a fourth sink: resale. A buyer outside the fleet can't see a part's history, so the market prices used parts at average quality. A large fleet that holds back its sales also thins the used market it is judging against [argued; the price effect is unmeasured].

**6. Disassembly regains fungibility at the price of the gates.** A retired machine can be kept, redeployed whole to lighter work, or taken apart. Redeploying it whole skips most gates and keeps the machine's narrow fit. Taking it apart buys wider fit and pays every gate. The paper prices the forward chain, which spends fungibility. It has nothing on the reverse [argued].

## How it applies

If capacity can come back out of the fleet, the practice can book it deliberately. Each mechanism below is a candidate, not a recommendation.

**One ledger line for coupled demand and supply.** Where one decision moves a part's demand and its supply in opposite directions, net both on the same fulfillment ledger line (mechanism 5). Register the decision as a shared driver of both. The supply register already names "shared dependencies" (Section 6.7); this extends it across the demand side [argued].

**Harvest as a staged supply declaration.** Book a harvest the way the paper books supply steps: in stages, "planned, contracted, under construction, delivered, live" (Section 6.7), scored promised against actual. For harvest, the stages might read planned retirement, machine drained, parts pulled, gates passed, available. Book into plans only what a stage's record supports, and label the rest uncommitted (Section 6.1) [argued].

**Condition on the rate card and in the score.** Carry condition as its own dimension where supply varies in it. Price each grade, and version the price "like a price list, with effective dates and a change log" (Section 5.2). Score supply on delivered quality by cohort, beside size and date [argued].

**A three-part risk budget, signed before volume grows.**
- A cohort cap per failure domain, set by reliability engineering, which already holds the right to set reliability buffers (Section 9.2).
- An evidence bar per grade, raised only as outcomes come in. The paper's own phrase fits: "The rollout is the measurement" (Section 5.4).
- An incident cost bound, signed by finance before the first large redeployment.

A shortage caused by a delivered unit failing counts against the ratio at the time it occurs [argued].

**Exit as a priced floor.** Value exit at realizable resale, net of the buyer's discount and the cost of the gates. Use it as the floor beside the internal shadow price, "What one more unit of the binding resource is worth; zero for slack" (Section 4). Whoever is measured on cash recovered sits on the planning-and-finance seam (Section 10.1), so the floor needs finance's signature [argued].

**Second-life hazard as a step with no record.** Until a cohort's second life has been observed, the paper's fallback applies: "bound it, phase it and buy options" (Section 13). Place the first cohort where device loss is absorbed by design, such as a cache. Spread it across failure domains, and track it by power-on hours [argued, applying Section 13's no-reference-class rule].

**An invented example, labeled illustrative.**
- A platform has 100,000 installed drives, failing at 2% a year. The plan retires a quarter of the platform mid-year.
- On the plan, the remaining 75,000 drives need 1,500 spares a year. The retirement releases 25,000 drives, of which 20,000 pass the gates at an 80% yield. Spares are booked from that harvest.
- Then the platform is kept a year longer. Now 100,000 drives need spares, and older ones fail more: say 2,500 a year at 1.25 times the rate. The harvest is zero.
- Two separate lines, each correct for the plan, miss together: demand is 1,000 higher and the supply booked against it never arrives.
- On one coupled line, the keep decision would have shown both effects before it was made.

Every number here is invented to show the shape.

## Where we're unsure

Open questions, each an invitation. The thread for all of them is still to be opened.

1. **How strong is the coupling?** How much does keeping a platform raise its spares need, and how much harvest does it forgo, platform by platform? [unmeasured]
2. **Where does the second-life hazard cross the new-part curve?** Whether reused parts fail like new ones early and faster later, and where any crossover sits, is not published. [unmeasured]
3. **What does each gate cost and yield?** Fit, qualification, test and erasure. No operator publishes these yields. [unmeasured]
4. **Is regained fungibility worth its gates?** When does redeploying a machine whole beat taking it apart? Is the answer a property of the platform or of the shortage? [argued]
5. **How far does a large seller move the used market?** And does a fleet's own retention set the price its retention is judged against? [unmeasured]
6. **Who owns the coupled line?** Lifecycle, spares or planning, and at what cadence? [argued]

## Where this comes from

The note's framing and mistakes are the practice's own.

**Seed paper:**
- [Section 6](https://cpp.anacay.org/paper/6-approval-is-not-allocation/): netting, shape, supply chain, correlation and supply steps.
- [Section 8.2](https://cpp.anacay.org/paper/8-the-commit-point-method/): netting, each term dated and owned.
- [Section 9.2](https://cpp.anacay.org/paper/9-the-operating-discipline/): mechanisms 5 and 11, and the decision rights.
- [Section 13](https://cpp.anacay.org/paper/13-where-this-breaks/): limits.
- [Section 4](https://cpp.anacay.org/paper/4-three-prices-three-questions/) and [Section 5](https://cpp.anacay.org/paper/5-coefficients-are-agreements/): prices and versioning.
- [Section 10](https://cpp.anacay.org/paper/10-people/) and [Section 11](https://cpp.anacay.org/paper/11-what-changes-in-the-ai-era/): the planning-and-finance seam, and failure ownership.

**Related records:**
- The Popcorn Pajamas practice note's gap 1, barter supply, shares this note's starting point: the paper assumes supply is bought (practice note, P6), and both cases bring in supply that isn't.
- Its gap 7 covers opposite-sign coupling across layers; this note covers it across demand and supply.
- Held stock that gains or loses value is carried in a separate Proposals discussion.

**The studied ground.** The sources below are new to this note. Each links to the cited work itself, as the buildings note does (DOIs checked 30 October 2026).

- Guide, V. D. R., & Van Wassenhove, L. N. (2009). *The evolution of closed-loop supply chain research.* Operations Research 57(1): https://doi.org/10.1287/opre.1080.0628
- Fleischmann, M., and colleagues (1997). *Quantitative models for reverse logistics: a review.* European Journal of Operational Research 103(1): https://doi.org/10.1016/S0377-2217(97)00230-0
- Yano, C. A., & Lee, H. L. (1995). *Lot sizing with random yields: a review.* Operations Research 43(2): https://doi.org/10.1287/opre.43.2.311
- Simpson, V. P. (1978). *Optimum solution structure for a repairable inventory problem.* Operations Research 26(2): https://doi.org/10.1287/opre.26.2.270
- Akerlof, G. A. (1970). *The market for ‘lemons’: quality uncertainty and the market mechanism.* Quarterly Journal of Economics 84(3): https://doi.org/10.2307/1879431
- Hendel, I., & Lizzeri, A. (1999). *Adverse selection in durable goods markets.* American Economic Review 89(5): https://doi.org/10.1257/aer.89.5.1097

Their application to capacity planning is argued, not measured.
