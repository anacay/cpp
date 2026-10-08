<!-- Seed edition, v0.1, built from the working paper, version 7.6. Licensed CC BY-SA 4.0. Site page: https://cpp.anacay.org/paper/1-introduction/ -->

# 1. Introduction: a close forecast and a wide miss

*In short: a team can land within 4% of its forecast and still be 30% over its bill. That's because two of the three numbers behind the bill belong to someone else.*

Picture the year-end review. A product team forecast its demand on a shared service within 4%, yet its bill came in 30% over plan. A release had raised the service's CPU cost per call, and a re-priced power contract had moved its rate. No process surfaced either change in advance (Section 7 works the case with invented figures).

The arithmetic isn't the hard part: requests × calls per request × CPU per call, summed over callers at the shared peak, plus buffers, times a rate. Large operators have published systems that do it at scale [1, 2]. Plans built on them still miss, in my experience more often because of the agreements around the formula than the formula itself. Hence two claims:

1. **A coefficient is an agreement** between the parties who supply and consume shared capacity, and it holds only while the agreement is kept. Someone declares demand in agreed units, owns the coefficient when it drifts, and signs the forecast. Someone carries the gap when approved demand can't become machines, and owns the cost nobody can attribute.
2. **Approval is not allocation** (*allocation* here means placing demand on physical machines). Approving demand in a common unit prices it, so unlike asks can be compared, but doesn't source it. The distance between "approved" and "live" (Figure 15), in shape, place and time, needs a named owner. Much of the largest demand arrives as step changes (launches, events, new products) that must be supplied before they firm up. And supply has step changes of its own (Sections 5.4 and 6.5–6.7).

Section 8 turns the two claims into a method for one launch, the commit-point method. Both claims come down to a handshake among three parties: capital, which funds; supply, which builds; and demand, which uses. The planner brokers it, usually with no capacity or budget of its own (Section 10).

**How to read this paper.** Sections 1 to 4 lay the foundations: why bills miss, why cost follows the caller, what's already published and capacity's three prices. Read Section 3, above all on Hixson and Guliani, before judging what's new. Sections 5 to 8 are the mechanics: the coefficient, the declaration and the supply order. Then come one invented service (Section 7) and a method built from it (Section 8, with a worksheet in Appendix A). Sections 9, 10, 12 and 14 cover running it, and Sections 11 and 13 cover AI fleets and what's unmeasured. Appendix B collects the public record on supply. New to planning? Read 1, 2, 4, 5.2, 5.4, 6.5, 7, 8 and 14. Each section opens with an *In short* line.

**Contributions.** The additions are operating mechanisms, each with an owner, a failure mode and an indicator; Section 9.2 lists all thirteen. Six carry the argument:

- a coefficient register that keeps each coefficient versioned and open to challenge (mechanism 3);
- an owner and a ledger for the gap between approval and usable machines (5);
- prior actuals in the intake (2), extending published intake and scoring practice (Section 3) by scoring step changes by stage;
- a rule, agreed in advance, for who keeps capacity a team saves (8);
- a register of launches and how firm each is (12);
- a map of when each kind of supply must be ordered (13).

The method of Section 8 writes its answers into the last two.

None of the parts is new. Nesting commitments by lead time comes from hierarchical planning [3]; rewarding recovered cost, from gain-sharing [4]; mapping service costs to consumers, from IT financial management [5]. Hixson and Guliani's capacity planning article supplies the frame: organic versus inorganic growth, and budgets bounded by lead time. Its third piece is capacity built on company-wide trends and assigned to a product late (*fungible*: able to serve whichever product turns out to need it) [6]. The 2026 SRE chapter, which Hixson co-wrote, adds the fullest public account of demand types, supply dimensions and pooling [7]. Consensus forecasting [8] and reference class forecasting [9, 10] supply the inside and outside views (Sections 3 and 5.4); supply-chain practice supplies netting, time fences, quantity-flexibility contracts and postponement (Sections 6 and 8). This is a practitioner synthesis, and it describes no particular organization. Where the paper says "in my experience," it marks judgment drawn from practice and the published accounts, not any one organization's process.

**Terms.** Three carry the paper. The **driver** (volume, *V*) is what causes load, and the **coefficient** (α) is resource used per unit of driver. The **rate** (*r*) is cost per unit of resource, by default the average loaded rate (Section 4). A few more are listed after Section 14. Figure 4 shows who owns each.

![Equation card: cost equals volume times coefficient times rate. Volume is owned by the product team and moves with its product. The coefficient is owned by the shared service and moves with code, cache behavior, request mix, data size and hardware. The rate is owned by the service owner with finance and moves with its cost structure. Example: 0.4 calls at 2.5 ms gives 1.0 ms per request, at $0.12 per busy core-hour. Illustrative numbers.](figures/D1.svg)

*Figure 4. The bill multiplies three numbers. The team that forecasts its demand owns only the first.*
