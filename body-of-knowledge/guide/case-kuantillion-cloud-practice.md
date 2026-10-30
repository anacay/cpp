---
title: Kuantillion Cloud: how the practice solves it
short: Each of the case's eight decisions and two sub-decisions answered from the seed paper, with what to do first, who owns it, how you'll know it's working, and where the body of knowledge runs out.
kind: case
order: 3.2
cadence: all
altitude: all
levels: learning, practicing, leading
seed: 4, 5.1, 5.2, 5.3, 5.4, 6, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 8, 8.2, 9.1, 9.2, 9.3, 10, 10.1, 10.2, 10.3, 10.4, 11, 12, 13, 14, Appendix A
---

[Case 3](case-kuantillion-cloud-full.md) describes a problem space and stops there. A hyperscale fleet, called Kuantillion Cloud here, harvests millions of components a year. It also holds older flash in running machines, while new flash costs three to four times last year's price. This page asks the next question: what does the practice tell you to do with them?

Section numbers refer to the seed paper, *The Coefficient Is an Agreement*. Mechanism numbers refer to its thirteen mechanisms (Section 9.2). The paper is "a practitioner synthesis, not a model, and untested" (Abstract), and so is everything here.

Read the labels this way. A quote with a Section is the paper's own text. *Applied here* or *our reading* marks the paper's rule used on something it wasn't written for. [argued] marks a rule this page adds. [unmeasured] marks a number nobody has published. Every invented number is labeled illustrative.

One scope note. Flash stranded inside running machines is in scope only through matching and allocation, and it is sized separately from the harvest.

## The short version

Kuantillion Cloud's problem is the paper's problem run backwards. The paper follows capacity from approval to live. Here capacity comes back out of live service, and you must price it, book it and hand it out again.

Five of the paper's ideas carry most of the weight.

- **A retirement is a supply step, and here it is a delivery too.** "A retirement is a supply order with a minus sign. It has a date, and it slips" (Section 6.7). The register of mechanism 11 already holds "decommissions as dated supply steps". Applied here, the same retirement is also a delivery of drives, booked the same way. What the paper lacks is supply that falls out of someone else's decision, tied to demand for the same parts. The [Second lives](note-second-lives.md) note takes that up.
- **Each question gets its own price.** Who pays, whether to build, and who gets scarce capacity now are three questions. "One number for all three misleads on at least one" (Executive summary). Section 4's table also says where each price misleads, and that turns out to matter here.
- **Approval is not allocation, in five dimensions.** Read for drives, the shape has five dimensions: capacity, performance, endurance, fit and condition. A common unit "prices; it doesn't clear" (Section 6.1), and a cost-weighted unit "under-prices asks heavy on what's scarce" (Section 6.1). Condition has no place in the paper's unit.
- **Every number has an owner, and every gap is named.** Three of the case's decisions have no public owner. The paper's remedy is to "lay the charters over the chain that delivers the product, end to end, and name an owner for every gap" (Section 10.2). Applied here, allocation gets a standing forum (mechanism 10).
- **The reverse pipeline is a rate.** "Turn-up is a rate, not an order" (Section 6.2). Applied here, harvesting, testing and erasing drives is staffed and booked like turn-up.

**What to do first.** Three moves come before anything is built.

1. In week one, find out whether a program already exists, or was tried and dropped.
2. Size the problem. The ratio of harvest to new flash sets its class, and the stranded stock is sized beside it.
3. Settle the value anchor from the flash contracts, and put a number on the capacity anchor.

Then the work runs through six gates, spares and the pipeline first.

**What the paper licenses, and what we add.**

- Book every planned decommission as a dated supply step (mechanism 11). Applied here, it is booked in both directions: hosts out, drives in.
- Applied here to harvest: treat it as uncommitted until supply answers with a dated commit or a named gap (Section 6.1). Peg each drive lot to one sink (Section 6.4).
- Declare which price each decision uses (Section 4). Price keeping a host at its avoidable carrying cost, not at long-run incremental cost [argued].
- Give allocation a standing forum (mechanism 10, applied here to drives) and a shortage rule agreed before the shortage (Section 9.3).
- Size spares as a named, signed buffer (Section 6.3). Read misdiagnosis as the bias the paper says to correct at intake.
- Name each cohort of drives as a shared driver, our reading of Section 6.6, and cap its share of any failure domain [argued].

**Where the practice runs out.** Supply that is a byproduct, condition as a dimension of supply, the cost of adding a shape, and wear that crosses two lives. The last section names them.

## The title claim, in this case

The coefficients here look like physics or accounting. Our reading is that each is an agreement nobody signed. The paper's first claim says a coefficient "holds only while someone owns it, versions it and restates it when hardware or measurement changes" (Abstract). Six exhibits:

- **The wear price.** Kuantillion Cloud prices flash wear per byte written, at a rate set by each model's rated endurance. That is a coefficient and a rate in one number. "If α moves, the fleet plan and the bill move together" (Section 5.2). It is set on rated endurance, not what remains. When a drive starts a second life, the basis changes. Our reading: that is a re-grain, "a change in how the metric is measured" (Section 5.3). Nobody versions it or owns it in public. Mechanism 3 is the register it lacks.
- **Spares per failure.** Spares need is read from repair tickets. At one peer, about a third of SSD failure tickets weren't the drive at all. Pulls can then run up to about 1.5 times true failures, as a ceiling. Read for spares, when diagnosis improves, the ruler changes: "Price series are adjusted for such events, not forecast through them" (Section 5.3).
- **Usable terabytes per retiring drive.** The coefficient that turns a retirement into supply is SSD share × capacity × yield. No operator publishes the yield [unmeasured]. The paper says every netting term "is a forecast too", and each needs "a date and an owner" (Section 8.2). A yield that disappoints "looks like a supply failure", as the paper says of a slipped decommission (Section 6).
- **The drive's value.** The case carries a replacement value of about $190–640 per TB. Book value is near zero past the six-year life, and no transfer price exists. "Useful life alone is a large lever that moves both ways" (Section 4). Here a drive past its accounting life is worth far more than its book value.
- **The planning unit.** Quota and terabytes carry capacity and drop the other four dimensions. "The unit's weights decide which asks look cheap" (Section 6.1). The scarce dimension differs by sink: fit for spares, fit and qualification for upgrades, provable condition for resale. Read for drives, each sink's shadow price falls on a different dimension.
- **The generation break.** An older write-intensive drive can out-endure a new high-capacity drive per terabyte. Power per terabyte differs about 10–60 times across the same break. Averaging across it is "Forecasting through breaks" (mechanism 6). The paper's answer is to restate "per service, measured" (Section 5.3). Applied here, the unit is the cohort.

Each of these numbers moves someone's plan or bill, and none has an owner, a version or an effective date. The paper asks you to version both rate and coefficient (Section 5.2), and mechanism 3 is where they live.

**Claim 2 shows up three ways.**

- A drive approved for a sink can still fail one of the case's ten gates.
- A drive promised to two sinks is an undesigned gap on both.
- A decommission that slips leaves a booked harvest with nowhere to come from. "A reclaim that doesn't happen, or a decommission that slips, becomes a shortage that looks like a supply failure" (Section 6).

Mechanism 5's ledger tracks the gap: "Planning carries the gap; each step's performer owns its entry".

## Size it and name the anchor first

Nothing gets built until you know the problem's class and its value anchor. "Below materiality, the mechanisms cost more than they return" (Section 13).

### The materiality ratio

The ratio is the SSD harvest, before yield, divided by a year's new flash. The case bounds it loosely (illustrative):

| | Value | Basis |
|---|---|---|
| SSD harvest | 0.3, 1.8 or 6.0 EB a year | 3M drives × 10/30/50% SSD × 1/2/4 TB |
| New flash a year | 20–180 EB | Server spend × 5–15% flash ÷ $100–300 per TB |
| Ratio | 0.2% to 30% | Harvest ÷ new flash |

Both halves are knowable inside Kuantillion Cloud in days. Planning computes them in week two. The ratio then sets the class. The thresholds are this page's [argued]:

| Ratio | Class | What runs |
|---|---|---|
| Under 1% | Spares continuity | A minimum drive record, spares, the pipeline and exit |
| 1–5% | Mixed | The above, plus allocation as a monthly forum line and one workload pilot |
| Over 5% | Supply strategy | Everything below |

"Stop at the step where the next one costs more than it saves" (Section 12). The paper writes that for mid-sized companies; we apply it to the program's steps.

### The stranded stock, sized on its own

The flow ratio doesn't gate the stranded stock. The case says the stock is likely larger than the flow. Illustratively, recovering the gap between 54% and 19% stranding on about 100 EB installed frees about 35 EB, once.

So size the stock at Gate 1 too, from fleet flash use by resource and site. Put it on its own owned line. The artifact of mechanism 4 is "Each its own line in every report", owned by the "Service owner (not necessarily the cause)". Section 14 gives the unused lines to platform leaders. Applied here, the storage systems own the stranded line, and finance keeps score. The stock's own go or no-go is a reclaim pilot.

### The anchor fork, from the contract register

The case's central fork is this. If Kuantillion Cloud's flash contracts are flexible in volume, a reused drive avoids a purchase. If they are firm, a reused drive adds capacity to a sold-out fleet.

You already hold the instrument. Mechanism 11's register carries "contracts with liability schedule (owed if cancelled, by date), reschedule terms, owner". So read the flash contracts into it first.

Read the push-out terms, not only the cancel terms. "the right to push out is often worth more than the right to walk away" (Section 6.2). Where a firm contract can be pushed out, reuse avoids a purchase *in time*. Our reading: the avoided-purchase anchor then holds for the length of the push.

### Three prices, used where the paper says they work

Section 4's table names each price's misuse. Long-run incremental cost "Misleads when used for" "Pricing capacity that already exists" (Section 4). And on capacity already paid for, "that job costs little until capacity binds" (Section 4, marked as the author's judgment). The third column is our reading:

| Question | Price | In this case |
|---|---|---|
| Should we buy new flash? | Long-run incremental cost (Section 4) | The cost of the purchase a reused drive would avoid |
| Who gets the scarce drive now? | Shadow price (Section 4) | The value of capacity where it binds; zero in slack |
| Who pays when a sink takes a drive? | Average loaded rate (Section 4) | The transfer price, shown back first |
| Do we keep this old host running? | Avoidable carrying cost [argued] | Power, space, repairs, technician hours, and the stranding of its other parts |

Our reading: keeping a host prices existing capacity, so long-run incremental cost is the wrong tool for it. Applied here: under firm contracts and persistent stockouts, scarcity is the paper's condition, and "the cost that matters becomes the best claim displaced" (Section 11). So compute both anchors, and route harvest by the shadow price while stockouts last.

Don't price a reused drive at its book value. The [case's measures of success](case-kuantillion-cloud-full.md) rule it out, and Section 4's useful-life lever is the reason: book value depends on a life someone chose.

### The capacity anchor, as a formula

Nothing public gives the capacity anchor an input [unmeasured]. So carry it as a formula, with each term a parameter you fill from internal data:

*Capacity value per TB = value of a short TB-month × months filled before new supply × share of those months with a real stockout.*

Fill the terms this way:

- the first term from internal stockout cost per zone, starting with capacity errors that name local SSD;
- the second from the lead time on new flash;
- the third from stockout counts by zone.

For example, if a short TB-month is worth $40 (illustrative), and 12 months follow, then 25% filled gives $120 per TB and 75% gives $360. At 75%, the capacity anchor passes the $192 floor once a TB-month is worth about $21, and the $636 ceiling at about $71. That first term decides the stress case where contracts are firm and stockouts persist. So measure it first.

Net value after the pipeline runs from about $25 to $570 per TB in the case's illustrative range. Its sign turns more on whether a sink exists, and on which anchor applies, than on pipeline cost.

## The thirteen mechanisms, audited

Read against Section 9.2, from what the case makes public. *Partial* means the artifact exists elsewhere in the fleet or covers one dimension. *Missing* means none is visible in the public record for legacy flash. Every status is our reading.

| # | Mechanism | For legacy flash |
|---|---|---|
| 1 | Declared demand in priced units | Partial: quota in abstract units carries capacity and drops the rest |
| 2 | Prior ask beside prior actual | Missing: spares are sized from ticket history, misdiagnosis included |
| 3 | Coefficient register and versioned rate card | Partial: wear is priced by model; no versions, no transfer price, no grades |
| 4 | Owned unused and unallocated lines | Partial: stranding is someone's remit, but no owned line exists |
| 5 | Fulfillment ledger | Partial for virtual quota; missing once a drive leaves its host |
| 6 | Discontinuity register | Missing: generation breaks and firmware faults aren't registered |
| 7 | Commitments that become institutions | Missing: reuse-first is stated policy, not a signed commitment |
| 8 | Efficiency landing rule | Partial: reclaimed virtual capacity funds new grants; physical drives don't |
| 9 | Cadence aligned to lead time | Partial: long horizons exist; no harvest cadence |
| 10 | Standing arbitration forum | Missing: no allocator of physical harvest across sinks |
| 11 | Supply plan of record and commitment register | Partial: supply has service levels; harvest gets no dated commit |
| 12 | Declaration register | Partial: launches are declared; decommissions and builds on reused drives aren't |
| 13 | Commit-point map | Missing: last-time buys and decommission dates aren't mapped |

On mechanism 7, the artifact is a "Signed forecast and efficiency commitment in the annual capacity agreement" (Section 9.2). A stated policy is raw material for one, not the thing itself.

**Six matter most here.** Mechanism 11, because harvest is supply; without it, approvals are "treated as firm before supply answers" (Section 9.2). Mechanism 5, because it stops the double promise. Mechanism 10, because without a forum "Escalation by volume" decides (Section 9.2). Then mechanisms 3, 13 and 8: the drive's price, last-time buys, and the landing rule.

## What to do first: the sequence

Each step waits on the evidence in its row. The paper's rule for declarations is that "promotion needs the evidence in its row" (Section 5.4). We apply it to the program's own gates.

### Week one: does a program already exist?

The public record is silent. The case reads that silence three ways: a program run quietly, one tried and dropped, or none. Test all three before you design anything.

Talk to the owners one to one, before any form goes out. Section 9.3 gives that advice for demand intake; we borrow it for a program audit. Sort what you hear into Section 10.4's three kinds: a "fact", an "assumption" or an "ask" (Section 10.4).

Ask four questions:

1. What happens to a pulled SSD today? If a program runs, audit it against the thirteen mechanisms and add only what's missing.
2. Was flash reuse ever evaluated and declined? If so, read the record as a decision note: "what was known, when, by whom, and what would have changed it" (Section 6.5). The paper defines the note for commit points; we use it for a program decision. Re-test the decline against today's prices.
3. Are last-time buys made for legacy drive models, and by whom?
4. Which gates did the memory-reclaim program actually cross? That program is the nearest precedent, and its history is the cheapest evidence you can get.

If the decline still holds, stop. The center then moves to redeploying whole hosts (see P2). Planning runs week one, as broker.

### The first 30 days

| Request | From | Due |
|---|---|---|
| Harvest log split by SSD and HDD, and by cohort | Reverse logistics | Week 2 |
| Flash deployed, in TB, by quarter | Supply, with finance | Week 2 |
| Flash contracts: cancel, push-out and volume terms | Supply, with finance | Week 4 |
| Zone stockout counts that name local SSD | Capacity planning | Week 4 |
| Fleet flash use by resource and site, for the stranded stock | Storage systems | Week 4 |
| A misdiagnosis sample: pulled drives re-tested at one site | Spares planning | Week 4 |
| Decommission schedule with stage dates | Lifecycle transitions | Week 2 |
| The memory-reclaim program's gate history | Supply chain | Week 1 |

The owners and dates are illustrative; adjust them to the teams you find.

### The gates

| Gate | Work | Exit, and who | Open questions it answers |
|---|---|---|---|
| 0 | Week one | One of the three readings recorded; planning | Whether a program exists; whether it was declined; last-time buys; the memory precedent |
| 1 | Size and anchor: materiality; the stranded stock; the contract register; the capacity formula. Charter the forum to sign two rules | Go or stop, with a decision note; planning and finance. The shortage rule and the landing rule signed | Materiality; contract flexibility; stranded stock size |
| 2 | Counter-arguments: count qualification backlog and solver categories; read decommission records by branch; check whether the solvers reach devices | A tier cap chosen; a test for redeploying hosts whole | Tier count; intact redeployment; solver reach |
| 3 | The drive record, off-host fields first | Field owners named; planning keeps the record | — |
| 4 | Hosts and allocation together; inside them, spares and the pipeline first | Decommissions on the register; spares ratio signed; pipeline staffed; the forum ranking; the risk budget set | Yields; technician minutes; misdiagnosis; who allocates |
| 5 | Workloads and builds: a pilot in loss-absorbing tiers; build programs declared | A reused-flash class offered; a substitution table | Hazard crossover; stranded stock recoverable |
| 6 | The wear link | Wear price registered, owned and versioned | How far placement shapes harvest |

Three ordering notes.

- **The forum starts small.** You charter it at Gate 1 only to sign the shortage rule and the landing rule. "Shortage rules come before the shortage" (Section 9.3), so the forum must exist to agree them. It starts ranking claims at Gate 4 [argued].
- **Spares go first inside Gate 4.** Spares are the harvest's most predictable claim and its value floor. Starting there proves fulfillment before you ask anyone to trust reused capacity. The paper's order of change is "prove fulfillment first" (Section 10.4); we apply it to reused drives.
- **The wear link goes last.** The case's own best guess is that placement shapes the harvest little today, except in write-heavy and low-endurance cohorts.

## Decision by decision

Each decision gives what the paper says, what you do, how the two futures change it, and where the paper runs out. Owners and cadence are collected in the next section. The futures are the case's: Path A stays tight through 2028, and Path B eases from late 2027.

### P1. One record per drive

**What the paper says.** This is the grain problem: "Someone has to own the roll-up, and the data a decision needs often sits one level below it" (Section 5.1). Each handoff needs "a definition of done for each handoff" (Section 10.1). The paper writes that for seam 3's handoffs, such as "delivered" and "live". Applied here, the handoffs are a drive's off-host states.

**What you do.**

- Keep one record per drive. Its states are in service, harvested, in test, spare and out of custody. Our reading: that is mechanism 5's ledger run backwards.
- Define *harvested*, *tested*, *erased* and *available*, and who accepts each.
- Give each field an owner, the group that does that step. Mechanism 5's rule is "each step's performer owns its entry". Condition and qualification go to flash platform engineering, state and location to fleet provisioning, custody to drive security. Planning keeps the record.
- Set a freshness standard per field: continuous for health telemetry, at every state change for custody [argued].
- Add the fields the case's gates name: a SKU for a regraded drive, its grade, its costing basis and its firmware baseline.
- Add a reuse-eligibility field: free, constrained or forbidden. Some customer, government or sovereign contracts may limit used parts or data-bearing media. Whoever owns those contracts fills it in, and P3 treats it as a placement constraint [argued].
- Reconcile the record with the erasure log at every off-host state. Treat each gap as the leading sign of a custody incident [argued].

**Blind cohorts.** Older drives that predate newer telemetry fields are partly blind. Our reading is that they are steps with no reference class, where the paper says you "bound it, phase it and buy options" (Section 13). They go first to loss-absorbing tiers or to exit [argued].

**Custody.** Proving erasure is a security discipline, not capacity planning. [The practice's Charter](/charter/) says of neighboring fields: "We link to them rather than rewrite them". It doesn't name erasure among them, so treating it that way is our reading.

### P2. When the host goes: keep, redeploy whole, or harvest

**What the paper says.**

- "A retirement is a supply order with a minus sign. It has a date, and it slips, usually because tenants can't migrate off in time" (Section 6.7).
- Keeping old hardware is a bridge. "Defer decommission of older hardware" works only "if not yet retired and if its space and power aren't needed by incoming hardware" (Section 6.4). Its cost is a "Power, efficiency and reliability penalty" (Section 6.4).
- "In my experience, the fastest bridge for a late new site is often an older one" (Section 6.7).
- It is a finance decision too: "Deferring a decommission extends depreciation on an asset finance had written off its plan" (Section 10.1).

**What you do.** Put all three branches on one sheet, per cohort. The case finds that the answer differs by cohort, not by generation. The sheet's lines are this page's [argued]:

| Line | Keep | Redeploy whole | Harvest |
|---|---|---|---|
| Avoidable carry: power, space, repairs, technician hours, stranding of its other parts | Paid | Paid, in a lighter class | Avoided |
| Value of the host's capacity: the shadow price in stockout zones, zero in slack | Kept | Kept, at the lower class's price | Lost |
| Harvest value: yield × each sink's next-best-source value − pipeline cost | — | — | Gained |
| The lighter class's value to its tenants | — | Gained | — |
| Depreciation, noted by finance | Extended | Extended | Written off |

Read it down each column. Keep a host when its capacity's value exceeds its avoidable carry, and harvest when the harvest value is larger [argued]. Don't price keeping at long-run incremental cost. Section 4 says that price "Misleads when used for" "Pricing capacity that already exists" (Section 4).

**Redeploying whole.** A whole host can go to a lighter workload class. That is designed over-issue "under a stated firmness class" (Section 6.1); applied here, the object is a whole host. Our reading is that Section 6.4's bridge condition is this branch's test. Where the host isn't in the way and a lighter class exists, redeploy it whole before you take it apart [argued].

**The coupling.** Keeping a platform raises its spares need and cuts the harvest that feeds it. Net both effects on the same ledger line: minus host capacity, plus drives [argued]. The paper checks shared drivers among launches (Section 6.6) and within supply (Section 6.7). It never checks one driver across demand and supply with opposite signs. The [Second lives](note-second-lives.md) note takes this up.

**Futures.** Under Path A, keeping and redeploying whole win more often. Under Path B, retire sooner, because harvest value falls first for high-capacity parts.

### P2a. The wear sub-decision

**What the paper says.** A coefficient read backward is a price (Section 5.2); our reading is that the wear price is one. It needs "a version, an effective date, an owner and a valid range" (Section 9.2). The measuring loop says to "Compute the ratio continuously" (Section 5.2). Applied here, the ratio is endurance used per year, by cohort and tier.

**What you do.** Flash platform engineering owns the wear price, with finance. Mechanism 3's owner is the "Service owner, with finance"; our reading makes the platform the service owner. Measure endurance used by cohort now, and report it at the quarterly supply review. Change first-life placement only after the workload pilot gives a second-life value to price against [argued].

**Futures.** Under Path A endurance is dearer, so the wear price rises. Under Path B it falls.

**Where the paper runs out.** The paper prices use per unit of time. Endurance is a stock one tenant depletes, lowering the drive's value in a later use. Nothing carries that second-life value back into the first-life price.

### P3. Match legacy flash to workloads

**What the paper says.**

- An approved unit must still become "storage capacity *and* access rate (IOPS), which are separate resources" (Section 6.1).
- "Much efficiency comes from re-shaping an ask rather than cutting it" (Section 6.1). In a passage the paper marks as experience, it questions the assumption, not the total. Applied here, ask which part of a tier really needs new drives.
- Designed over-issue sells "under a stated firmness class (firm, best-effort, preemptible), so holders know their odds" (Section 6.1).
- A higher availability tier "is a driver and belongs in the rate" (Section 5.2).

**What you do.** Offer reused flash as its own class. State its guarantee and its evidence bar, and price it by dimension: capacity, IOPS, remaining endurance and fit. The class is the inward version of the customer tools the case describes: preemptible pools, queues and fallbacks across shapes.

**Start with a provisional three-grade rule** [argued]. Revisit it after the pilot.

| Grade | Rule | Where it can go |
|---|---|---|
| 1 | Observable cohort; safe firmware; under the wear and error thresholds | Durable tiers, once the evidence bar is met |
| 2 | Observable, but outside one threshold, or within a year of a known firmware fault age | Loss-absorbing tiers and spares only |
| 3 | Blind, or failing any threshold | Exit or destroy |

For example, a wear threshold might be half of rated endurance used (illustrative). The thresholds themselves are [unmeasured]. Three grades fit inside any tier cap Gate 2 sets.

**Pilot small.** "Phasing the first region small buys the real coefficient cheaply" (Section 5.4). Applied here, the first unit is a cohort, placed in caches and replicated tiers that absorb device loss by design.

**Chain the classes, don't multiply them.** Jordan and Graves found that limited flexibility "yields most of the benefits of total flexibility" [77] (Section 6.2). Their limit is on links: each plant builds "only a few products" (Section 6.2). The paper reads that across to two machine shapes per workload, linked in a chain. It calls that "an analogy, not a result tested on fleets" (Section 6.2). Applied here, link each tier to a few sinks and each sink to a few tiers.

**Cap the tiers.** Each graded tier adds a SKU, a qualification combination, a placement constraint and a forecast category. That is the case's grading tax, and its strongest counter-argument. So cap the tier count at what Gate 2's count of backlog and solver categories shows the systems can carry [argued]. The paper has no price for a shape's complexity.

**The stranded stock.** Applied here, stranded flash in running machines goes on its own owned line (mechanism 4). Recover it two ways:

- By pooling where you can reach it. Section 6.3, quoting [7], says to provision for "the peak of the summed demands, rather than the sum of their individual peaks". But "Correlation and heavy tails erode the gain" (Section 6.3).
- By reclaim, a bridge of "Days to weeks" (Section 6.4). Freed capacity lands under the landing rule (mechanism 8).

**Concentration.** Our reading: name each cohort as a shared driver: "Name the driver; don't infer independence from a low measured correlation" (Section 6.6). Cap a cohort's share of any one failure domain [argued]. For example, if a domain holds 2,000 drives, a 10% cap is 200 (illustrative).

**Futures.** Under Path A, workloads are the option on the upside. Under Path B, the case expects this sink to shrink fastest, because new flash competes there directly. The class must be able to close cohort by cohort without stranding its tenants.

### P4. Size and source legacy spares

**What the paper says.**

- The pool is the "inventory buffer (parts and ready machines in stock)" (Section 6.3). "Someone funds and replenishes it, so a draw on it is a debt with a date" (Section 6.3).
- Size it by the shortage-to-idle ratio, the newsvendor fraction [78] (Section 6.3). "Component inventory is planned to high quantile forecasts" (Section 6.3).
- "Persistent bias is different: correct it at intake (Section 9.3), don't buffer it" (Section 6.3). Read for drives, misdiagnosis is that bias. Size the pool on true failures, not pulls.

**The pool, illustrated.** Take one installed cohort of 200,000 drives failing at 1.5% a year (illustrative). That is 3,000 true failures, about 8.2 a day. The case cites Palm's theorem for the pipeline: stock in resupply depends on the mean turnaround.

| Turnaround | Mean in resupply | Pool at 80% cover | Pool at 95% cover |
|---|---|---|---|
| 30 days | 247 | 260 | 273 |
| 10 days | 82 | 90 | 97 |

The table assumes failures arrive as a Poisson process, and uses the normal approximation to it for the cover levels.

- Sized from pulls at a 25% misdiagnosis rate (illustrative), the 30-day pool at 80% would be 344, not 260.
- Cutting turnaround from 30 to 10 days lowers the pool by about 8.5 drives per day saved. That is roughly one day of true demand, plus a little safety stock.
- This holds while untested harvest is on hand. If harvest itself is short, the decommission date binds, not the turnaround.

**Reduce wrongful pulls at the source.** The case calls diagnosis the cheapest supply. For SSD tickets, add a reseat-and-re-test step before any pull. Machine-health engineering owns it, and the healthy share of pulled drives, by site, is its test [argued].

**Last-time buys.** A last-time buy must be placed years before the need is known. That is a commit point before the event that would size it. Section 6.5 gives three choices for that. Applied here:

1. "Ask for the decision earlier" (Section 6.5): get the platform's retirement dated before the vendor's end-of-life window.
2. "Buy an option that carries the commitment past the event" (Section 6.5): a reschedulable last-time buy.
3. "Commit to the stage's record and name the owner of the residual" (Section 6.5): commit on the harvest forecast, with spares planning as owner.

Write down which one you chose.

**Two sources, one policy.** Harvest is the cheap, uncertain source; new purchase is the dear, nominally reliable one. The case's studied ground gives the shape: one order-up-to level for each source [argued]. In 2026, new purchase may be the slower one.

**Push out, don't cancel.** When harvested drives land, a planned new order for the same platform isn't needed for a while. Later harvest may still slip. "the right to push out is often worth more than the right to walk away" (Section 6.2). The paper says that about slipped launches; we apply it to new orders behind an uncertain harvest.

**Where to stock.** Stock drives at site cages. Stock whole spare hosts only for platforms whose chassis must be replaced with the drive, the case's legacy-card example. Hold untested harvest at a regional depot [argued].

**Fail-in-place.** A server that keeps running with a dead drive declares it can take a shortfall. That is Section 6.7's question, "how much shortfall, for how long, can it take?", which the paper calls its own exploration. Carry the cost of degraded capacity on its own line [argued].

**Count the bridges.** At 80% cover, "about one launch in five should need a bridge at that layer" (Section 10.2). The paper calls this "an analogy, not a result" (Section 10.2). Applied here, a cohort stands in for a launch. Count one cover decision per cohort per year. For example, 20 platform cohorts should need about 4 bridges a year (illustrative). Far fewer means the pool is padded. Far more means the ratio or the forecast is off. "launches tied to one driver spend the budget together" (Section 10.2), so expect bridges to cluster by cohort.

**Futures.** Under Path A, harvest is the main source for old platforms, and last-time buys get dearer. Under Path B, the case expects spares to erode more slowly than other sinks. Re-sign the ratio each year as new compatible drives get easier to buy.

### P5. Use legacy flash in upgrades and builds

**What the paper says.**

- A step change "enters the plan as a declaration in units the planner already prices" (Section 5.4). Applied here, each build or upgrade program is a declaration on mechanism 12, with stages, bands and shared drivers.
- Re-shaping after an order can mean "change fees, rework, a new test cycle and a new lead time" (Section 6.1).
- "A written table of substitutions per workload class keeps commitments fungible, and needn't be complete" (Section 6.2).

**What you do.**

- Walk each program through the commit-point method (Section 8). Applied here, the layers are qualification slots, harvest of the fitting generation, technician hours and change windows.
- Staff qualification as a rate, like turn-up: "set by people, dock space, test positions and network ports" (Section 6.2). That is our reading.
- Fill the substitution table from the fit gate: which drives fit which slots, backplanes and platforms.
- Choose machines for added flash by binding dimension: upgrade the machines whose flash binds while their other parts sit idle [argued].
- Register firmware baselines as cohort breaks on mechanism 6. Its artifact lists "Hardware changes, migrations, re-grains"; a firmware baseline is our addition.
- Don't pack same-age drives into one box. Name the cohort as a shared driver, as Section 6.6 asks for any shared driver, and spread reused drives across failure domains inside a build [argued].

The case warns that planning hosts, spares and builds separately overbooks the same technicians and drives. Our reading: one ranked list in one forum (mechanism 10) is the guard.

**Futures.** Under Path A, life extension substitutes for new machines. Under both paths, this sink closes as the build mix moves to new form factors. Our reading: record the closing date in mechanism 13's column for "cost to change shape after commit".

### P6. Allocate the harvest across sinks

**What the paper says.**

- A standing forum holds the "Ranked list, cut line, decision log with overrides and brokered trades" (Section 9.2). It is a "Named executive forum, run by planning" (Section 9.2).
- The shadow price is "What one more unit of the binding resource is worth; zero for slack" (Section 4).
- "Agree it in the forum beforehand; supply carries it out. Written during the shortage, it's a negotiation. And don't split a shortage pro rata" (Section 9.3).
- "Pegging makes the cheapest bridge possible" (Section 6.4).
- "what the broker knows should outlive the broker" (Section 6.4).

**How the forum ranks.** Value each claim at the cost of that sink's next-best source on that date [argued]:

| Sink | Next-best source, and its cost |
|---|---|
| Spares | The bridge for a missed repair, from Section 6.4's bridge table |
| Workloads | The capacity value in stockout zones; elsewhere, the cost of new flash |
| Builds and upgrades | The cost of the new machine the drives displace |
| Exit | Net resale, after the discount for unseen history and pipeline cost |

Score the rule after two cycles. Under scarcity this approximates the shadow price at each sink's binding dimension.

**The shortage rule.** Agree it at Gate 1. Our proposal: spares for platforms with no other source go short last, because a missed repair has no bridge [argued].

**Peg and log.** Peg every tested drive to one claim, and log every trade, so one drive is never promised twice.

**One storage policy** [argued]. Erase, quick-screen and hold. Run the full test when a claim arrives. Applied here, that keeps supply "generic until the decision that says which shape" (Section 6.2). The case's studied ground backs it: the test gate is a dial you set apart from volume.

**Who pays.** Set the transfer price on usable, yield-adjusted capacity. It is pipeline cost per usable TB, plus carry, plus a risk loading drawn from the incident bound [argued]. For example, a 2 TB drive costing $40 to process at 80% yield is $25 per usable TB. Add $2 of carry and $5 of risk loading, and it is about $32 per TB (illustrative). Show it back for a full cycle before anyone is billed. The paper's order is "Move to attributed cost only after a full cycle of showback" (Section 10.4). The forum ranks on next-best-source value, not on this price.

**When to release held stock.** Holding is a priced position. The paper's option rule is "write down the trigger for converting options into orders" (Section 6.2). Applied here, write the release trigger before you hold [argued]:

- release a cohort's held drives when their next-best-source value falls below net resale for two quarterly price prints running; or
- release when a drive's shelf time passes two re-test cycles with no claim.

Release in steps, under the cap below.

**The program moves its own market.** At this volume Kuantillion Cloud isn't a price taker in the used market. Its own retention moves the price its retention is judged against, and a rival's program would move it too. Three rules [argued]:

1. Cap resale releases per model per quarter.
2. Read vendor warranty and end-of-life terms at the annual cycle, and again after any peer announcement.
3. Track the large operators' resale volumes as a signpost.

Supply chain owns these. Price feedback itself is [unmeasured].

**Futures.** Under Path A, the shadow price is high and holding is rational. Under Path B, release on the trigger; the rate card falls toward resale value, and exit rises in rank.

### P6, the commitment question

**What the paper says.**

- "An approval becomes capped issue when supply answers it with a dated commit or a named gap" (Section 6.1). Until then, "label it *uncommitted*, a firmness class of its own, so its holder knows the odds" (Section 6.1).
- Supply declarations firm up in stages: "planned, contracted, under construction, delivered, live" (Section 6.7). "So score each supply declaration like a demand declaration, promised size and date against actual" (Section 6.7).
- Netting treats what's due back as a forecast: "Each of those is a forecast too, so give each a date and an owner" (Section 8.2).

**What you do.** Applied here, a retirement's harvest is a staged supply declaration. Its stages are planned, dated, drained, harvested, tested and available. Score each stage promised against actual.

**One booking rule** [argued]. Book firm only to the stage record's lower quantile until the drives are drained. Then book to the base, the stage record's middle, as Section 8.2's split uses a base scenario. Above the firm slice, hold options on new purchase. Above that, name a bridge with an owner.

**An estimate.** Read the booking as a share of what is scheduled.

- On-time share, about 50–70%. Our estimate rests on retirements waiting for new halls, and on the case's report that 30–50% of large 2026 data-center capacity may be delayed [argued].
- Gate yield is unpublished [unmeasured]. Our working figure is about 80% for recent, observable cohorts, and lower for blind ones [argued].
- So expect about 40–56% of scheduled drives on the date. For a retiring batch of 40,000 drives (illustrative), that is about 16,000–22,400.

**Who pays when harvest fails to arrive.** Finance agrees it in advance. The paper's right for bands has finance "agreeing who pays for a change outside them" (Section 9.2); we extend it to harvest.

**Futures.** Under Path A, decommissions slip more, so the lower quantile sits lower. Under Path B it can rise.

### P7. Run the reverse pipeline at the needed rate

**What the paper says.**

- "Turn-up is a rate, not an order. It's set by people, dock space, test positions and network ports, staffed months ahead, so it works like a checkout line" (Section 6.2). Applied here, harvesting, erasing and testing is that kind of layer.
- In a passage marked as experience, per-site throughput, "with retests and refresh work competing for the same crews, often binds" (Section 6.2). Here the pipeline shares crews with repairs.
- For turn-up, "its ratio sets how much rate to staff, not how much to buy" (Section 6.5).
- "a supply slip often shows up twice" (Section 6.2).

**What you do.**

- Applied here, staff the pipeline to the median of expected retirements. Section 6.5 sets turn-up, a rate, at the median, in "this paper's argument (not a published result)" (Section 6.5). Keep surge crews on contract.
- Book harvest and re-power slots like turn-up slots, "booked ahead like an appointment" (Appendix A). That is our reading.
- Level retirements across quarters where change windows allow, so slipped batches don't arrive together.
- Watch harvested-but-not-graded drives. The paper says "delivered-but-not-live is where fulfillment backlogs quietly age" (Section 6.2); we apply it to the cage.

**Turnaround is inventory, with a condition.** Each day cut from mean turnaround frees about one day of true demand from the spares pool. Per million installed drives, that is about 27–68 drives a day. It holds while untested harvest is on hand. When harvest itself is short, the decommission date binds.

**Where the capacity sits.** Put test and erasure capacity at the large decommissioning sites. Hold untested drives at a regional depot. Ship to demand only against a claim [argued].

**Labor.** The case bounds the work at 250–750 technician-years for three million drives a year (illustrative). That is a staffing program, unless it lands on the same sites and quarters as repairs.

**Futures.** Under Path A, the case expects the pipeline to be the program's ceiling. You may argue for staffing above the median there, because a short pipeline starves spares, whose shortage cost is higher than turn-up's [argued]. Under Path B, staff to the median.

### P8. Make reuse something teams choose

**What the paper says.**

- "Past a point, legitimacy matters more than precision in whether anyone acts on the number" (Section 10.4).
- Recovered capacity "has to land where the recoverer sees it" (Section 9.3). "A rule agreed in advance is a contract; one proposed after the savings appear is a request" (Section 9.3).
- "Reliability as trump card" is a named game. Its counter is "Named buffers (Section 6.3), each sized by its owner" (Section 10.3).
- "A consumer who can challenge a coefficient, and sometimes wins, trusts the rest of the bill" (Section 10.4).
- "Engineers need their own coefficient, reproducible from their telemetry, with forecast error treated as data, not fault" (Section 10.4).
- Escalate in steps: "nudges before bills, bills before constraints" (Section 10.4).

**What you do.**

- Agree the landing rule at Gate 1: shares booked as savings, returned to the recoverer and held centrally (Section 9.3). Applied here, the pipeline is a recoverer, so it gets credit for part of the capital it saves.
- Write the reuse commitment into the annual capacity agreement. Mechanism 7 does that for forecasts and efficiency; applied here, so enforcement doesn't rest on one person.
- Let tiers challenge a grade or a price, and sometimes win. Our reading: a grade is a coefficient.
- Enter reused capacity where loss is cheapest: caches and replicated tiers first. That rests on Section 5.4's phasing, not on Section 10.4.
- Prove fulfillment first, with spares, and give tiers that take reused capacity a right to return it (Section 10.4). Applied here, the paper wrote these for moving teams onto shared pools.
- Add a second technician metric: harvest value recovered per site [argued]. The case's multitask finding predicts scrapping wherever harvest value goes unmeasured.
- Change the value-recovery team's cash measure, so it stops pulling drives toward resale ahead of internal reuse [argued].
- Face the capital and operating split. The pipeline's cost lands in this quarter's operating budget, its benefit in next year's capital. Our reading: that is seam 2's ground (Section 10.1), and the landing rule is how you face it.
- Show the premium back first. When a sink refuses harvest and its new drives need a bridge, the paper's rule is "Charge the premium to whoever caused it" (Section 6.4). Extending it to refused harvest is ours. For the first cycle, show it back; bill it only after.

**Futures.** Under Path B, new drives get cheap and the second-class risk grows. The scorecard must report the stated anchor and whether reuse displaced a purchase, not just dollars.

## Who does what, and when

The planner sits in the middle, "usually owning no capacity and no budget" (Section 10). So every change below is a proposal to the forum and finance. Its standing, in the paper's experience, comes "from the number and the team's own signature" (Section 9.1).

**Section 14's six roles, applied here.** The paper names six roles and the promises each keeps (Section 14). Who holds each in this case is our reading.

- **Platform leaders** own "the unused and unallocated lines" (Section 14). Here, the storage systems own the stranded line.
- **Planning** "keeps the fulfillment ledger, carries the gap" (Section 14). Here, it keeps the drive record and the harvest declaration.
- **Finance** declares what "fully loaded" contains (Section 14). Here, it also signs the transfer price and the incident cost bound.
- **Product leaders** "sign what they change" (Section 14). Here, they are the workload owners who take the reused class.
- **A standing forum** "owns the ranked list and the cut line" (Section 14). Here, it ranks the four sinks.
- **Supply chain** answers every approved ask "with a dated commit or a named gap" (Section 14). Here, harvest is one of its sources.

**Decision rights.** The table names who decides and who signs. **Change** marks a move from today's owner in the case.

| Decision | Decides | Signs | Change |
|---|---|---|---|
| P1 Drive record | Planning keeps it; each field owned by its performer | Field owners | **Change:** unowned today |
| P2 Host timing | Lifecycle transitions and fleet provisioning | Finance, for every keep past plan | **Change:** drive values from the forum are a required input |
| P2a Wear price | Flash platform engineering | Finance, for the price | **Change:** unowned today |
| P3 Workloads | Schedulers and storage systems offer the class | Each tier owner accepts it, with its evidence bar | **Change:** acceptance becomes signed |
| Stranded line | Storage systems, as service owner | Finance keeps score (mechanism 4) | **Change:** new line |
| P4 Spares | Spares planning, to the signed ratio | Finance and product sign the ratio (Section 9.2); finance funds the pool | **Change:** ratio signed in advance |
| P5 Builds | Fleet shaping and hardware engineering, as declaring team | The declaring team and supply sign the same bands (Section 8.2) | **Change:** programs declared |
| P6 Allocation | The forum, run by planning | Finance, on the rate card and who-pays rules | **Change:** unowned today |
| P6 Commitment | Supply answers with a commit or a gap (Section 9.2) | Finance agrees who pays if harvest fails | **Change:** never firm before supply answers |
| P7 Pipeline | Reverse logistics with data-center operations | Drive security, per erasure | **Change:** staffed to a signed plan |
| P8 Choice | The forum, through the landing rule, the class and the metrics | Planning with finance (mechanism 8); leaders (mechanism 7) | **Change:** from leadership in general to the forum |
| Risk budget | Reliability engineering, for the cohort cap | Finance, for the incident bound; tier owners, for their bars | **Change:** new |

**Gate owners**, read from the remits in the case's team map:

- hardware engineering: physical fit, protocol and backplane;
- flash platform engineering: qualification, firmware, observability and condition;
- data-center operations: change windows;
- fleet provisioning: systems of record;
- planning, with the solver team: systems complexity;
- drive security: erasure.

**The risk budget** [argued], set at Gate 4:

1. A cohort cap per failure domain, set by reliability engineering. "Reliability buffers: reliability engineering" (Section 9.2).
2. An evidence bar per tier, rising only with scored outcomes. Caches start lower, durable tiers higher.
3. An incident cost bound, signed by finance before volume grows.

**Cadence.** The cycles nest, slowest outside (Section 9.1). Applied here:

| Cycle | What happens |
|---|---|
| Annual | Sign the spares ratio and harvest bands; agree the landing and shortage rules; lay the charters over the chain; review last-time buys and materiality; read vendor terms |
| Quarterly | The supply review: harvest forecast by stage, decommission slips, qualification slots, endurance by cohort, the rate card against the signposts |
| Monthly | Supply updates harvest commits and named gaps; the forum re-ranks |
| Continuous | Pegging, reconciliation, brokering drives between sites |
| After each pilot | Second-life outcomes update yield, hazard and the evidence bar |

"In my experience, the step most often missing is the supply review" (Section 9.1). Our reading: here it is the main meeting, because supply is a byproduct of other decisions. A vendor's end-of-life notice triggers an off-cycle review.

**Seams**, our reading. Hosts and harvest sit on seam 3, between planning and supply. Keeping hosts and the capital-operating split sit on seam 2. Grades and wear sit on seam 1, between the platform and the tiers it serves (Section 10.1).

## How you'll know it's working

The tests below are this page's, and none has been run. The paper says the same of its own: "the tests of Section 9.2 have not been run" (Section 13).

| Criterion from the case | Test that can fail |
|---|---|
| All four sinks together | No sink's fill falls below its signed cover point while another holds idle harvest |
| Current, owned drive facts | Reconciliation gaps fall to zero and stay there |
| A declared anchor under both futures | Rate-card versions track the signposts within a quarter |
| Capability, not age | Grade predicts second-life failure better than age alone |
| Gates as hard constraints | No drive reaches a sink with an open gate |
| Reliability visible to users | Uptake of the class rises as its record builds |
| Incentives where the work happens | Reuse holds at sites under ticket pressure |
| A few honest numbers | Numbers reported as a set, none rewarded alone |
| Held to outcomes | Predicted and realized failures converge by cohort |
| Known separated from assumed | Every assumption has an owner and a test date |
| Harvest forecast with error bands | The promised-actual gap on harvest narrows |
| Cadence matched to clocks | No last-time buy placed after its commit point |

The last two follow the paper's own tests for mechanisms 11 and 13 (Section 9.2). Error bands come from scoring each retirement stage by cohort and site [argued].

**The case's eight numbers, with denominators** [argued]:

- purchases avoided, against the plan of record, under the declared anchor;
- net value per harvested drive, after pipeline cost and yield;
- spares fill rate and repair time, per repair, by platform;
- stranded flash, as a share of installed flash;
- harvest-to-redeploy time and yield, per drive harvested;
- the healthy share, per drive pulled;
- endurance used at harvest, by cohort;
- embodied carbon, per drive redeployed, stating whether reuse displaced a purchase.

Finance keeps score. The paper says so for the unallocated line: "Finance, not planning, should keep the score, or the indicators become self-assessment" (Section 9.3).

| Failure mode | Counter | Early sign |
|---|---|---|
| Placement-only program | Spares first; one ranked list | Repair times on old platforms |
| Keep everything | Keep priced at avoidable carry; finance signs | Cost per useful TB on old cohorts |
| Holding past the option's decay | The written release trigger | Drives past re-test date |
| Phantom supply | Booked only as capped issue; pegging | Commit-to-deliver gaps |
| Second-class capacity | A stated class; a challenge channel | Asks naming new hardware |
| Misdiagnosis drain | Reseat and re-test; bias corrected at intake | Healthy share of pulls |
| Shape sprawl | Three grades inside the tier cap | Solver categories growing |
| Correlated concentration | Cohort cap per domain | Same-cohort racks |
| Firmware time bombs | Firmware baseline as a gate | Unpatched redeployed drives |
| Blind spots | Blind cohorts to loss-absorbing tiers or exit | Missing health fields |
| Erasure bottleneck | A staffed rate; one signer per drive | Queue age |
| Custody incident | Reconciliation at every off-host state | Any record–log gap |
| Incentive drift | Landing rule; second technician metric | Reuse at pressured sites |
| Wear spent blindly | Endurance by cohort, quarterly | Endurance at harvest |
| Fighting the last shortage | Quarterly rate card; release trigger | Contract prices flattening |

**If something goes wrong** [argued]. For a cohort that fails together, or a drive found outside custody:

1. Freeze redeployment of the affected cohort.
2. Draw on the incident bound.
3. Re-rank the cohort's claims in the forum.
4. Publish the cohort's record to the affected tiers, through the challenge channel.
5. Re-test the evidence bar before you resume.

For a custody incident, drive security also runs its own response; the practice's part is the record.

## What would change the answer

| If this turns out true | Then |
|---|---|
| Materiality is well under 1% | Drop to spares continuity, and stop there (Section 12, applied here) |
| A graded program with a shared price exists | Allocation and adoption become an audit, not a build |
| Second-life failures beat new drives' rates from year one | Close the workload sink; keep spares and exit |
| Contracts are fully flexible and Path B comes early | The avoided-purchase anchor shrinks; the program shrinks to spares and exit |
| Reuse was declined for complexity | Re-center on redeploying whole hosts |

**The case's eight assumptions, each with a test** (owners and dates illustrative):

| Assumption | Test | Owner, by |
|---|---|---|
| Replacement cost is the right anchor | Compute both anchors per zone | Planning and finance, week 6 |
| Reuse displaces purchases at all | Read cancel and push-out terms into mechanism 11 | Supply and finance, week 6 |
| The materiality ratio is large enough | Gate 1 | Planning, week 2 |
| Net value stays positive after the pipeline | Time-and-motion and yield logs at one site | Reverse logistics, quarter 1 |
| Stranded capacity is recoverable | Reclaim pilot on one pooled tier | Storage systems, quarter 2 |
| The host-cost logic holds | The keep sheet for one retiring cohort | Lifecycle transitions and finance, quarter 1 |
| Spares demand is what failure rates say | Re-test pulled drives at one site; measure fail-in-place's avoided demand | Spares planning, quarter 1 |
| Internal prices can carry these values | One cycle of showback | Planning and finance, quarters 2–3 |

**Our seven assumptions, each with a falsifier** [argued]. These are the assumptions this page's design rests on.

| Assumption | Falsifier |
|---|---|
| The harvest behaves like a supply declaration that firms up in stages | Decommission dates show no stage structure; slips are uniform from plan to drain |
| The contract register can settle the anchor fork | The commitments have no readable liability or reschedule terms |
| A forum can rank four sinks with unlike units | Ranked lists are reopened as often as negotiated splits ("Decisions reopened", mechanism 10's indicator) |
| A stated lower-assurance class will be taken up | Uptake stays low after the class's guarantee and evidence are stated |
| Cohort is the right shared driver | Failures correlate more on site or workload than on model, firmware and age |
| Misdiagnosis is bias, not dispersion | The healthy share of pulled drives swings widely with no persistent level |
| The materiality ratio is the right gate | The program is worth running at a low ratio, because one stockout's shadow price dominates (scenario S5) |

"The rollout is the measurement" (Section 5.4). The pilot cohort answers the case's most load-bearing question: where second-life hazard crosses the new-drive curve [unmeasured].

**Signposts and actions** [argued]. The case's signposts are read at the quarterly supply review.

| Signpost | Action |
|---|---|
| Contract prices flatten two quarters running | Lower the rate card; arm the release trigger |
| Used prices fall, high-capacity models first | Run the release trigger's price test |
| Makers' committed output passes three-quarters | Raise last-time-buy cover |
| New fab dates slip | Hold; keep Path A staffing |
| Large buyers sign new long-term agreements with floors | Treat contracts as firm; weight the capacity anchor |
| Large operators' resale volumes recover | Count it as Path B evidence; loosen the resale cap |
| Makers' inventory builds; spot falls below contract | Shorten holding; prefer exit for marginal grades |
| Capex guidance is trimmed or shifts away from storage | Re-test materiality |
| PC drive configurations are restored | Path B evidence; review workload pricing |
| Small, older drive models get scarcer | Review last-time buys |
| Disk stays allocated, and cold data keeps moving to QLC | Path A evidence; keep the wear watch on QLC cohorts |

**The case's seven scenarios, and where this page answers each.**

- **S1. The shortage ends early.** P6, *When to release held stock*, and P6's shortage rule, which keeps a spares floor.
- **S2. A redeployed cohort fails together.** P3, *Concentration*; the risk budget; and *If something goes wrong*.
- **S3. A data-bearing drive surfaces outside custody.** P1, reconciliation at every off-host state; and *If something goes wrong*.
- **S4. Decommissions slip while spares demand rises.** P6, the commitment question, and its booking rule; P4, *Push out, don't cancel*.
- **S5. The commitments prove firm and stockouts persist.** The anchor fork and the capacity anchor; P6, *How the forum ranks*, by shadow price.
- **S6. A rival announces flash reuse at scale.** P6, *The program moves its own market*.
- **S7. Low-endurance flash meets write-heavy work.** P2a, the wear price by cohort. The price across two lives is still a gap (new work, item 6).

## What the studied ground adds

The case maps each decision onto older literatures. Four results fill places where the paper is thin. Each mapping is [argued].

- **Thresholds for allocation.** For stock with random demand and random returns, the optimal policy is a few thresholds: repair, buy and scrap levels (Simpson, 1978). The release trigger and the grades take that shape.
- **Two order-up-to levels for spares.** With a cheap slow source and a dear fast one, one level per source captures nearly all the value (Veeraraghavan and Scheller-Wolf, 2008).
- **Holding value as a curve.** Stock in hand earns a convenience yield that is high when cover is thin and vanishes in a glut (Working, 1949). That is the release trigger's logic.
- **Harvest as an alternate source.** Against rare but long disruptions, a second source tends to beat a stockpile (Tomlin, 2006). That is the framing finance already knows.

## Where the practice needs new work

1. **Byproduct supply.** A retirement that is also a delivery, coupled to demand for the same parts, with opposite signs. See [Second lives](note-second-lives.md).
2. **Condition as a dimension of supply.** The paper's unit has shape, place and time, not condition. See [Second lives](note-second-lives.md).
3. **Quality that fails after delivery.** The shortage-to-idle frame assumes delivered capacity works. See [Second lives](note-second-lives.md).
4. **Exit as a sink.** Selling capacity out of the fleet, into a market the seller moves. See [Second lives](note-second-lives.md).
5. **The cost of a shape.** No price for the planning cost of one more grade or SKU. It sits beside [Buildings at AI density](note-buildings-at-ai-density.md)'s question of what flexibility costs.
6. **Wear across two lives.** First-life use spends second-life value nobody prices.
7. **Stock that gains or loses value while held.** The same gap as [Popcorn Pajamas](case-popcorn-pajamas-practice.md)' components that appreciate.
8. **Right total, wrong form factor.** The variance split has no mix term. [Buildings at AI density](note-buildings-at-ai-density.md) proposes one for halls; drives need it too.

If you've planned capacity that comes back out of a fleet, the practice would like to hear how you handled it.

## Where this comes from

Seed paper: Sections 4, 5.1–5.4, 6, 6.1–6.7, 8, 8.2, 9.1–9.3, 10, 10.1–10.4, 11, 12, 13 and 14, and Appendix A. The case: [Case 3](case-kuantillion-cloud-full.md). Literature: the references the case cites in its studied ground. Every number is illustrative unless the case tags it otherwise; the arithmetic is reproducible on request.
