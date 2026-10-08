<!-- Seed edition, v0.1, built from the working paper, version 7.6. Licensed CC BY-SA 4.0. Site page: https://cpp.anacay.org/paper/4-three-prices-three-questions/ -->

# 4. Three prices, three questions

*In short: "what does capacity cost?" is three questions (who pays, should we build, who gets it now), and each needs its own price.*

Ask what new capacity costs and you can get three numbers, each right for a different question. A hotel shows why (Figure 7). The year's bill over the room-nights it can sell gives each guest's fair share. Building a new wing takes another number: its cost per room added. Neither says who gets the last room on a sold-out night, worth what the turned-away guest would have paid. On a half-empty night, one more guest costs little more than clean sheets. Capacity works the same way:

| Price | What it is | Question it answers | Misleads when used for |
|---|---|---|---|
| **Average loaded rate** | Fully loaded pool cost ÷ practical capacity; charged on coincident-peak contribution (Section 5.2) where capacity is peak-sized | Who pays? | Marginal decisions: too high in slack, too low under scarcity |
| **Long-run incremental cost** | Cost of the next increment of supply per unit of driver | Should this growth be built for? | Pricing capacity that already exists |
| **Shadow price** | What one more unit of the binding resource is worth; zero for slack | Who gets scarce capacity now? | Recovering fixed cost; budgeting |

![Three hotel scenes. A ledger gives each guest's share of the year's bill: the average loaded rate, which answers who pays. A new wing's cost per room: long-run incremental cost, which answers whether to build. The last room on a sold-out night is worth what the turned-away guest would pay: the shadow price, which answers who gets scarce capacity; on a half-empty night it is near zero.](figures/C1.svg)

*Figure 7. One hotel, three prices: a fair share of what already runs, the cost of building more, and the worth of the last room when it's scarce. Asking one number to do all three misleads on at least one.*

Machines are re-bought on a refresh cycle and facilities extended in blocks. So, with stable prices and technology, an attributed average rate approximates the cost of the next envelope (the capacity budget for a planning horizon). It also signals whoever causes demand. It's a poor guide to running one more job on capacity already paid for. In my judgment, that job costs little (mainly energy) until capacity binds: one resource runs out first (planners call it the binding constraint).

Then one more unit of that resource has a value of its own, like the hotel's last room: the **shadow price**. It's zero for a resource that isn't scarce, and possibly well above its cost share for the one that runs out first. In Section 7, Product A needs 0.8 TB more memory than its CPU-sized machines bring. With only standard 200 GB machines, that's four extra machines, about five times what Section 7's unit weights say that memory is worth (Section 6.1 does the arithmetic). Textbooks call it the dual value of the capacity constraint [35]. Machines come whole, so any computed value is an estimate that jumps at machine boundaries. Internal markets try to discover it, following Hirshleifer's rule of pricing internal transfers at marginal cost [36].

**Isn't any split arbitrary?** An economist will say dividing joint cost is. Thomas called such allocations "incorrigible," neither verifiable nor refutable [37], and the Technology Business Management (TBM) Council's cost allocation guidance concedes that "choosing appropriate weighting factors can be subjective" [38]. The practical answer is the table: stop asking one price to do three jobs. Two bodies of work narrow what's left. Axiomatic cost allocation (the Shapley value and its descendants) chooses a split by stated properties [39–42]. Peak-load pricing assigns capacity cost to the demand present at the peak the capacity was built for [43, 44]. Neither removes judgment; both make it declared and defensible.

"Fully loaded" must be declared too: depreciation over a stated useful life, contracted power, space, network, staff and ideally a capital charge. Useful life alone is a large lever that moves both ways. Meta extended the useful life of non-AI servers from four years to five during 2022, in two steps [45]. Amazon shortened a subset of servers and networking equipment from six years to five from January 2025, citing the pace of AI and machine-learning technology [46].

**Divide by what you can use, not what got used.** Illustratively, a $9.0M pool with 65M core-hours *used* costs about $0.138 per core-hour. If one consumer leaves and usage falls to 45M, the rate becomes $0.20. Every remaining bill rises about 44% with no change in behavior, which gives the next consumer a reason to leave. Utility economists call the loop a death spiral [47]. Time-driven activity-based costing breaks it. Set the rate on *practical capacity* (usable after redundancy, maintenance reserve and queueing headroom; Section 6.3), and report the unused remainder as its own owned line, the *unused line* [48, 49]. Illustratively, 75M core-hours of practical capacity gives $9.0M ÷ 75M = $0.12, the rate Section 7 uses. After the consumer leaves, it's still $0.12. The 30M idle core-hours (10M already idle plus the 20M it stopped using), $3.6M, sit on the unused line, not on everyone else's bill. Figure 8 draws both rates.

![Two panels for a $9.0 million pool. Rate on usage: 65 million core-hours gives about $0.138; when one consumer leaves and usage falls to 45 million, the rate becomes $0.20, up 44%. Rate on practical capacity of 75 million: $0.12 before and after; the 30 million idle core-hours, $3.6 million, sit on the service's unused line. Illustrative.](figures/C2.svg)

*Figure 8. Set the rate on usage and one departure raises every other bill, inviting the next. Set it on practical capacity and the idle remainder becomes its own owned line. Illustrative.*

The honest design **attributes** what can be measured and **apportions** what can't (headroom, idle capacity, platform overhead, rootless background work) under a declared policy. Cloud tools encode versions of it. Google Kubernetes Engine (GKE) cost allocation charges on "resource requests, not resources consumed" and reports capacity neither requested nor reserved for system overhead as `kube:unallocated` [50]. Kubecost charges the greater of request and usage, and lets idle cost be hidden, shown as its own line or shared [51].
