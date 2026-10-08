<!-- Seed edition, v0.1, built from the working paper, version 7.6. Licensed CC BY-SA 4.0. Site page: https://cpp.anacay.org/one-page/ -->

# One page

**The problem.** A team can forecast its demand on a shared service within 4% and still see its bill 30% over plan. That's because two of the three numbers behind the bill belong to someone else: how much resource each request uses, and what that resource costs. And an approved ask can still leave a launch without machines it can use.

**Two claims and a method**

- **A coefficient is an agreement.** One service release raised CPU per call and moved a caller's bill more than the caller's own forecast miss did (Section 7).
- **Approval is not allocation, in shape, place and time.** An ask was approved as four units of capacity, because the intake asked only about CPU. It needed 4.8 once its memory was counted, and the machines arrived a quarter after launch (Sections 6 and 7).
- **The commit-point method.** Ask each supply layer's question at the date it must be ordered (its *commit point*), not at launch (Section 8).

**The method, for one launch**

1. List every supply layer and its lead time in a slow case: for example, if machines usually take one quarter but one order in five takes two, plan on two.
2. Work back from the date capacity must be live to each layer's commit point.
3. At each commit point, note how firm the launch will be, and whether what drives that layer is known yet.
4. Cover more of the range of likely demand where running short costs more than holding spare.
5. Subtract what's on hand, on order or due back, each with a date and an owner.
6. Split each layer: firm orders, options or a reserve, and a named stopgap (a *bridge*) with an owner.
7. Agree how much size and date may still move at each stage.
8. Write it down, and get supply's answer: a delivery date or a named shortfall (a *named gap*).

Figure 3 draws the eight steps as decisions.

![Flowchart for one declaration. Step 1 lists every supply layer with a usual and a cautious lead time. Step 2 works back from launch: each need date is the next layer's start, and each commit point is the need date minus the cautious lead time. For each layer, slowest first, a diamond asks whether any declaration exists at the commit point. If not, the portfolio envelope serves the layer and the launch's claim is recorded. If so, step 3 reads the stage and the range still open. A second diamond asks whether the attribute that drives the layer is known by then. If not, the planner picks one of three choices (ask earlier, buy an option past the event, or commit to the stage's record and name the owner of the residual) and writes a decision note. Steps 4 to 8 follow: cover up the range by the shortage-to-idle ratio, net against what's on hand, on order, due back and retiring, split into firm, flexible and named, agree change bands, and write it down in four artifacts. A final diamond takes supply's answer, and either branch makes the approval capped issue: a dated commit makes it firm; a named gap is capped issue with the gap named and a bridge owned, with an owner and a ready-by date. A loop back says each stage move is checked against its band; outside the band is a priced event.](figures/E2.svg)

*Figure 3. The commit-point method for one launch. Two questions decide the path at each layer: does a declaration exist yet, and is what drives this layer known by its commit point? Every path ends in a written answer from supply, and either answer makes the approval capped issue. A way to think it through, not a model; the method is untested (Section 13).*

**Five questions for your own planning**

1. Who owns each coefficient behind our largest bills, and when did it last change?
2. When a bill missed, did we split the miss into volume, coefficient and rate?
3. Has supply answered every approved ask with a date or a named gap?
4. For our next launch, what is the slowest layer's commit point, and will we know what drives it by then?
5. What did each team ask for last year, and what did it use?

**What it doesn't claim.** It's a practitioner synthesis, not a model; its numbers are illustrative unless cited, and the method hasn't been tested (Sections 8.6 and 13).

---
