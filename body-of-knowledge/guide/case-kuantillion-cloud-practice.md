---
title: Kuantillion Cloud: how the practice solves it
short: A practitioner's strategy for Case 3. How to see the problem through the body of knowledge, break it into decisions and sequence the work, with every move linked to its theory.
kind: case
order: 3.2
cadence: all
altitude: all
levels: learning, practicing, leading
seed: 4, 5.1, 5.2, 5.3, 5.4, 6, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 8, 8.2, 9.1, 9.2, 9.3, 10, 10.1, 10.2, 10.3, 10.4, 11, 12, 13, 14, Appendix A
---

This page is the strategy for [Case 3](case-kuantillion-cloud.md). It shows how a practitioner would tackle the case with the practice's body of knowledge. You'll see how to frame the problem, how to break it down and what order to work it in.

Two companion pages sit beside it. The [full case](case-kuantillion-cloud-full.md) sets out the problem in detail and prescribes nothing. The [execution plan](case-kuantillion-cloud-plan.md) turns this strategy into owners, dates, gates and tables. You don't need either to follow this page. Each section carries enough context to stand on its own.

Section numbers refer to the seed paper, *The Coefficient Is an Agreement*. Mechanism numbers refer to its thirteen mechanisms (Section 9.2), explained on [the operating mechanisms](concept-operating-mechanisms.md). The paper is "a practitioner synthesis, not a model, and untested" (Abstract), and so is everything here.

Read the labels this way. A quote with a Section is the paper's own text. *Applied here* or *our reading* marks the paper's rule used on something it wasn't written for. [argued] marks a rule this page adds. [unmeasured] marks a number nobody has published. Every invented number is labeled illustrative.

One scope note. Flash stranded inside running machines is in scope only through matching and allocation, and it is sized separately from the harvest.

## The problem in brief

Kuantillion Cloud is a fictional hyperscale operator. It runs one of the largest computing fleets in the world and plans about $200 billion of capital spending in 2026. Even so, it reports more demand than it can supply ([the full case, section 1](case-kuantillion-cloud-full.md#1-executive-summary)).

**The shock.** New enterprise flash now costs three to four times what it did a year earlier. Next year's supply from the flash makers is largely pledged to their biggest buyers already. Any flash Kuantillion Cloud didn't contract for in advance is hard to get at any price.

**The old flash.** Kuantillion Cloud retires machines every year and takes them apart. In 2024 it wiped and then reused or resold over 3 million drives. Its reports never say how many of those were solid-state drives (SSDs). Older flash also sits idle inside machines that are still running. One peer cloud measured 54% of its server SSD capacity stranded that way ([section 4.1](case-kuantillion-cloud-full.md#4-1-four-populations)).

**Where a drive can go.** When a host retires, it can be kept, redeployed whole to lighter work, or taken apart. A harvested drive then has four sinks ([section 5](case-kuantillion-cloud-full.md#5-demand-four-places-a-legacy-drive-can-go)):

- a workload that tolerates older flash;
- the pool of repair spares for old platforms;
- an upgrade or a new build;
- exit, through resale, recycling or the shredder.

**Why that is hard.** A drive isn't one quantity. It has five dimensions: capacity, performance, remaining endurance, fit and condition history. Each sink prices a different one. Spares price fit, workloads price capacity and latency, and resale prices provable condition. No shared unit or internal price exists for any of them.

**The gates.** Ten gates stand between a retired host and a second life ([section 6](case-kuantillion-cloud-full.md#6-supply-the-gates)). They include physical fit, protocol, qualification, firmware, observability, condition, change windows, systems of record, systems complexity and sanitization. A drive that can't be provably erased is destroyed.

**The risk.** Nobody has published how reused drives behave in a second life. The evidence suggests parity early, then rising and correlated failure. At one operator, out-of-warranty legacy drives were 22% of drives but 77% of failures in a quarter. Two firmware bugs killed drives at fixed ages, about 3.7 and 4.6 years ([section 6.1](case-kuantillion-cloud-full.md#6-1-what-is-actually-known-about-second-lives)).

**A leak upstream.** At one large cloud, 34.4% of SSD failure tickets weren't the drive at all. Every wrongly pulled drive inflates spare use and can strand a healthy drive ([section 4.4](case-kuantillion-cloud-full.md#4-4-the-leak-upstream-of-the-cage-drives-pulled-that-were-never-bad)).

**The money.** A used drive's replacement value runs about $190–640 per terabyte across the case's range. Its book value is near zero past a six-year accounting life. The central fork is what kind of value a reused drive creates ([section 7.1](case-kuantillion-cloud-full.md#7-1-the-anchor-question-what-kind-of-value-is-this)). If flash contracts can flex, it avoids a purchase. If they are firm, it adds capacity to a sold-out fleet. Those are different numbers, with different beneficiaries.

**The size.** The SSD harvest could be under 1% or near 30% of a year's new flash (illustrative). That range decides whether this is spares housekeeping or supply strategy.

**The organization.** Allocation and value recovery sit in different groups. The technicians who pull drives are measured on ticket speed, which pushes drives toward the shredder. Three of the case's decisions have no public owner at all ([section 10.2](case-kuantillion-cloud-full.md#10-2-the-team-map-and-the-seams-between-them)).

**Two futures.** On Path A, flash stays tight through 2028. On Path B, it eases from late 2027 and high-capacity drives get cheap first ([section 8](case-kuantillion-cloud-full.md#8-two-futures-and-the-signposts-between-them)). A good answer has to work under both.

**The decisions.** The case breaks the problem into eight decisions and two sub-decisions ([section 11](case-kuantillion-cloud-full.md#11-problem-decomposition)):

| | Decision |
|---|---|
| P1 | One record per drive |
| P2 | When the host goes: keep, redeploy whole or harvest |
| P2a | The wear policy that shapes tomorrow's harvest |
| P3 | Match legacy flash to workloads |
| P4 | Size and source legacy spares |
| P5 | Use legacy flash in upgrades and builds |
| P6 | Allocate the harvest across sinks |
| P6, commitment | How much of a harvest to count on before it arrives |
| P7 | Run the reverse pipeline at the needed rate |
| P8 | Make reuse something teams choose |

## How a practitioner tackles it: the strategy

### The stance

Kuantillion Cloud's problem is the paper's problem run backwards. The paper follows capacity from approval to live service. Here capacity comes back out of live service. You must price it, book it and hand it out again.

That inversion is the key to using the body of knowledge here. Almost every tool in the practice still works, pointed the other way. A retirement becomes a delivery. The reverse pipeline becomes a turn-up layer. A harvest becomes a supply declaration that firms up in stages. Where a tool doesn't turn around, you've found a limit of the practice.

You also start from the planner's real position. The planner sits in the middle, "usually owning no capacity and no budget" (Section 10). So your strategy is a set of agreements, not a set of orders. [People: brokering the handshake](people.md) explains where that standing comes from.

The practice's [principles](principles.md) set the stance. Each one points at a specific move in this case.

- **A coefficient is an agreement.** The wear price, spares per failure and usable terabytes per retiring drive all look like physics. Each moves someone's plan or bill, and nobody owns them.
- **Approval is not allocation.** A drive approved for a sink can still fail a gate, or be promised twice. The gap needs a ledger.
- **Commit only what the lead time forces.** Last-time buys and decommission dates commit long before the need is known. Map them.
- **Every number has an owner.** Three decisions have none. Name them.
- **Name the gap.** A harvest that won't arrive on time is a named gap, not a surprise.
- **Agree the rules before you need them.** The shortage rule and the landing rule must exist before drives are scarce or savings appear.
- **Say what's unmeasured.** Second-life failure rates, gate yields and the capacity value of a terabyte are unpublished. Build the strategy so the first pilot measures them.

### The moves that matter most, and why they come first

Five moves carry most of the weight. Each removes a large uncertainty for little cost, and each sets up the next.

1. **Find out what exists.** The public record is silent on any program. Silence could mean a program run quietly, one tried and dropped, or none. Designing before you know wastes the most effort of anything here.
2. **Size the problem and name its value anchor.** "Below materiality, the mechanisms cost more than they return" (Section 13). The ratio of harvest to new flash sets the program's class. The flash contracts settle which kind of value a drive creates. Nothing else can be priced until both are known.
3. **Book each retirement in both directions.** The register of mechanism 11 already holds "decommissions as dated supply steps" (Section 9.2). Applied here, the same retirement is also a delivery of drives, booked the same way. That one move turns a byproduct into supply you can plan against.
4. **Give every drive one record and every gap an owner.** Without a record, a drive can be promised twice or lost from custody. Without a forum, the loudest sink wins. And "Shortage rules come before the shortage" (Section 9.3), so the forum must exist early to agree them.
5. **Prove fulfillment with spares, then extend.** Spares are the harvest's most predictable claim and its value floor. The paper's order of change is "prove fulfillment first" (Section 10.4); we apply it to reused drives. Workloads, the riskier sink, come after trust exists.

These five come first because they share one property. Each one is cheap, fast and decides whether the expensive work is worth doing. Everything else in this page depends on their answers. The [execution plan](case-kuantillion-cloud-plan.md) gives them owners and dates.

**What the paper licenses, and what we add.**

- Book every planned decommission as a dated supply step (mechanism 11). Applied here, it is booked in both directions: hosts out, drives in.
- Applied here to harvest: treat it as uncommitted until supply answers with a dated commit or a named gap (Section 6.1). Peg each drive lot to one sink (Section 6.4).
- Declare which price each decision uses (Section 4). Price keeping a host at its avoidable carrying cost, not at long-run incremental cost [argued].
- Give allocation a standing forum (mechanism 10, applied here to drives) and a shortage rule agreed before the shortage (Section 9.3).
- Size spares as a named, signed buffer (Section 6.3). Read misdiagnosis as the bias the paper says to correct at intake.
- Name each cohort of drives as a shared driver, our reading of Section 6.6, and cap its share of any failure domain [argued].

**Where the practice runs out.** Six gaps matter most. They are byproduct supply, condition as a dimension of supply, quality that fails after delivery, exit as a sink, the cost of a shape, and wear across two lives. [Where the theory runs out](#where-the-theory-runs-out) maps each to the literature that studied it.

### The theory map

Each concept below does work in this case. The table tells you where to read the theory, and where on this page it is applied.

| Concept | Guide page | Seed | Glossary term | Where it does work here |
|---|---|---|---|---|
| The coefficient | [The coefficient](concept-the-coefficient.md) | Sections 5.1–5.3 | [coefficient](/glossary/#term-coefficient) | The wear price, spares per failure, usable terabytes per retiring drive; P2a, P4 |
| Three prices | [Three prices](concept-three-prices.md) | Section 4 | [cut line](/glossary/#term-cut-line), [unallocated line](/glossary/#term-unallocated-line) | The value anchor, keeping hosts, ranking sinks; P2, P6 |
| Declarations | [Demand and declarations](concept-demand-and-declarations.md) | Sections 5.4, 6.7 | [declaration](/glossary/#term-declaration), [stage](/glossary/#term-stage) | Harvest as a staged supply declaration; build programs; P5, P6 commitment |
| Approval and allocation | [Approval and allocation](concept-approval-and-allocation.md) | Sections 6, 6.1, 6.4 | [fulfillment](/glossary/#term-fulfillment), [pegging](/glossary/#term-pegging) | Five dimensions, the drive ledger, bridges; P1, P3, P6 |
| Buffers and reserves | [Buffers and reserves](concept-buffers-and-reserves.md) | Sections 6.3, 6.6, 10.2 | [shortage-to-idle ratio](/glossary/#term-shortage-to-idle-ratio), [stocked pool](/glossary/#term-stocked-pool) | The spares pool, misdiagnosis, cohort risk; P4, P3 |
| Supply layers and lead times | [Supply layers and lead times](concept-supply-layers-and-lead-times.md) | Sections 6.2, 6.4, 6.7 | [supply layer](/glossary/#term-supply-layer), [turn-up](/glossary/#term-turn-up) | The reverse pipeline as turn-up; contracts and push-out; P7, P5 |
| Commit points | [Commit points](concept-commit-points.md) | Sections 6.5, 8, Appendix A | [commit point](/glossary/#term-commit-point), [the three choices](/glossary/#term-the-three-choices) | Last-time buys; decommission dates; the booking rule; P4, P6 commitment |
| The measuring loop | [The measuring loop](concept-measuring-loop.md) | Sections 5.2, 5.4 | [coefficient](/glossary/#term-coefficient) | Endurance used by cohort; the healthy share of pulls; P2a, P4 |
| The operating mechanisms | [The operating mechanisms](concept-operating-mechanisms.md) | Sections 9.1–9.3 | [forum](/glossary/#term-forum), [unallocated line](/glossary/#term-unallocated-line) | The audit of thirteen; the forum; the stranded line; P6, P8 |
| People and seams | [People](people.md) | Sections 10, 10.1–10.4, 14 | [named gap](/glossary/#term-named-gap) | Owners, seams, incentives, legitimacy; P1, P8 |
| Limits | [Limits](limits.md), [Settings](settings.md) | Sections 12, 13 | — | Materiality, no reference class, the stop rule; sequencing |

## The problem through the practice's lenses

Each lens below is one concept from the guide, in the guide's order. For each, you get the idea in brief, how it reframes the problem, what it reveals that the case alone doesn't, and which decisions it bears on. Read the one you need; each stands alone.

### The coefficient

**The idea.** A caller's bill on a shared service is roughly volume × coefficient × rate. The [coefficient](/glossary/#term-coefficient) is resource used per unit of volume. Read forward, it forecasts load. Read backward, it is a price. So the paper's first claim is that a coefficient is an agreement. It "holds only while someone owns it, versions it and restates it when hardware or measurement changes" (Abstract). [The coefficient](concept-the-coefficient.md) sets out the full idea, with the register that holds it.

**How it reframes the problem.** The case's numbers look like physics or accounting. Our reading is that each is an agreement nobody signed. Six exhibits show it.

- **The wear price.** Kuantillion Cloud prices flash wear per byte written, at a rate set by each model's rated endurance. That is a coefficient and a rate in one number. "If α moves, the fleet plan and the bill move together" (Section 5.2). It is set on rated endurance, not what remains. When a drive starts a second life, the basis changes. Our reading: that is a re-grain, "a change in how the metric is measured" (Section 5.3). Nobody versions it or owns it in public. Mechanism 3 is the register it lacks.
- **Spares per failure.** Spares need is read from repair tickets. At one peer, about a third of SSD failure tickets weren't the drive at all. Pulls can then run up to about 1.5 times true failures, as a ceiling. Read for spares, when diagnosis improves, the ruler changes: "Price series are adjusted for such events, not forecast through them" (Section 5.3).
- **Usable terabytes per retiring drive.** The coefficient that turns a retirement into supply is SSD share × capacity × yield. No operator publishes the yield [unmeasured]. The paper says every netting term "is a forecast too", and each needs "a date and an owner" (Section 8.2). A yield that disappoints "looks like a supply failure", as the paper says of a slipped decommission (Section 6).
- **The drive's value.** The case carries a replacement value of about $190–640 per TB. Book value is near zero past the six-year life, and no transfer price exists. "Useful life alone is a large lever that moves both ways" (Section 4). Here a drive past its accounting life is worth far more than its book value.
- **The planning unit.** Quota and terabytes carry capacity and drop the other four dimensions. "The unit's weights decide which asks look cheap" (Section 6.1). The scarce dimension differs by sink: fit for spares, fit and qualification for upgrades, provable condition for resale. Read for drives, each sink's shadow price falls on a different dimension.
- **The generation break.** An older write-intensive drive can out-endure a new high-capacity drive per terabyte. Power per terabyte differs about 10–60 times across the same break. Averaging across it is "Forecasting through breaks" (mechanism 6). The paper's answer is to restate "per service, measured" (Section 5.3). Applied here, the unit is the cohort.

**What it reveals.** Each of these numbers moves someone's plan or bill, and none has an owner, a version or an effective date. The case reads them as unknowns to be measured. The lens reads them as agreements to be made. That changes the first job from research to governance. The paper asks you to version both rate and coefficient (Section 5.2), and mechanism 3 is where they live.

It also reveals why the generation break matters so much. A fleet-wide average of failure rate, endurance or power per terabyte blends cohorts that behave differently. Planning on that average forecasts through a break. The cohort, not the fleet or the generation, becomes the grain of every coefficient here.

**Decisions it bears on.** P2a, the wear price, is a coefficient read backward. P4 sizes spares on a per-failure coefficient that misdiagnosis distorts. P6 needs a transfer price, which is a rate. P1 holds the fields every coefficient is computed from.

### Three prices

**The idea.** "What does capacity cost?" is three questions. Who pays uses the average loaded rate. Should we build uses long-run incremental cost. Who gets scarce capacity now uses the shadow price. "One number for all three misleads on at least one" (Executive summary). [Three prices](concept-three-prices.md) gives the hotel example and the table of misuses.

**How it reframes the problem.** The case asks what a reused drive is worth. The lens says that question has no single answer. It depends on which decision is asking. Section 4's table names each price's misuse. Long-run incremental cost "Misleads when used for" "Pricing capacity that already exists" (Section 4). And on capacity already paid for, "that job costs little until capacity binds" (Section 4, marked as the author's judgment).

So each decision in the case gets its own price. The third column is our reading:

| Question | Price | In this case |
|---|---|---|
| Should we buy new flash? | Long-run incremental cost (Section 4) | The cost of the purchase a reused drive would avoid |
| Who gets the scarce drive now? | Shadow price (Section 4) | The value of capacity where it binds; zero in slack |
| Who pays when a sink takes a drive? | Average loaded rate (Section 4) | The transfer price, shown back first |
| Do we keep this old host running? | Avoidable carrying cost [argued] | Power, space, repairs, technician hours, and the stranding of its other parts |

Our reading: keeping a host prices existing capacity, so long-run incremental cost is the wrong tool for it. That is why the last row adds a price the paper doesn't name.

**The anchor fork.** The case's central fork is what kind of value a reused drive creates. If Kuantillion Cloud's flash contracts are flexible in volume, a reused drive avoids a purchase. That is the long-run incremental cost row. If they are firm, a reused drive adds capacity to a sold-out fleet. That is the shadow price row.

Applied here: under firm contracts and persistent stockouts, scarcity is the paper's condition, and "the cost that matters becomes the best claim displaced" (Section 11). So compute both anchors, and route harvest by the shadow price while stockouts last.

The contracts settle the fork, and you already hold the instrument. Mechanism 11's register carries "contracts with liability schedule (owed if cancelled, by date), reschedule terms, owner". So read the flash contracts into it first.

Read the push-out terms, not only the cancel terms. "the right to push out is often worth more than the right to walk away" (Section 6.2). Where a firm contract can be pushed out, reuse avoids a purchase *in time*. Our reading: the avoided-purchase anchor then holds for the length of the push.

**The capacity anchor, as a formula.** Nothing public gives the capacity anchor an input [unmeasured]. So carry it as a formula, with each term a parameter you fill from internal data:

*Capacity value per TB = value of a short TB-month × months filled before new supply × share of those months with a real stockout.*

Fill the first term from internal stockout cost per zone, starting with capacity errors that name local SSD. Fill the second from the lead time on new flash. Fill the third from stockout counts by zone.

For example, if a short TB-month is worth $40 (illustrative), and 12 months follow, then 25% filled gives $120 per TB and 75% gives $360. At 75%, the capacity anchor passes the $192 floor once a TB-month is worth about $21. It passes the $636 ceiling at about $71. That first term decides the stress case where contracts are firm and stockouts persist. So measure it first.

Net value after the pipeline runs from about $25 to $570 per TB in the case's illustrative range. Its sign turns more on whether a sink exists, and on which anchor applies, than on pipeline cost.

**What it reveals.** Two things the case leaves open. First, book value is the wrong price for a reused drive. Section 4's useful-life lever is the reason: book value depends on a life someone chose. The [case's measures of success](case-kuantillion-cloud-full.md#14-1-criteria) rule it out too.

Second, the anchor fork isn't a research question. It is a contract-reading question, and the register to answer it already exists in the practice. That turns the case's biggest unknown into a few weeks of work.

**Decisions it bears on.** P2 compares avoidable carry with capacity value. P6 ranks sinks by shadow price and charges by transfer price. P6's commitment question decides who pays when harvest fails. P8's scorecard must state which anchor it uses.

### Declarations

**The idea.** A step change in demand has no history to extend. So it enters the plan as a [declaration](/glossary/#term-declaration): a signed statement of expected demand, in units the planner already prices. A declaration firms up in [stages](/glossary/#term-stage), and "promotion needs the evidence in its row" (Section 5.4). Each stage licenses only its own supply action. [Demand and declarations](concept-demand-and-declarations.md) has the stage table and the scoring rules.

Supply has stages too. Supply declarations firm up in stages: "planned, contracted, under construction, delivered, live" (Section 6.7). "So score each supply declaration like a demand declaration, promised size and date against actual" (Section 6.7).

**How it reframes the problem.** A retirement is the paper's own example of a supply step. "A retirement is a supply order with a minus sign. It has a date, and it slips, usually because tenants can't migrate off in time" (Section 6.7).

Applied here, the same retirement writes a second line with a plus sign: the drives it releases. So a harvest is a staged supply declaration. Its stages are planned, dated, drained, harvested, tested and available. Each stage has a record, and each can be scored promised against actual.

The demand side has declarations too. A step change "enters the plan as a declaration in units the planner already prices" (Section 5.4). Applied here, each build or upgrade program that wants reused drives is a declaration on mechanism 12, with stages, bands and shared drivers.

**What it reveals.** The case treats harvest as a flow with an unknown size. The lens turns it into a forecast with a known structure. Each stage has evidence to enter, a record of how past harvests at that stage turned out, and a supply action it licenses. A planned retirement licenses little. A drained host licenses more. A tested drive licenses a firm booking.

It also reveals what to score. The case can't say how reliable harvest is, because nobody scores it. Scoring each stage, by cohort and site, builds the error bands the case asks for. It is the same move the paper makes for launches.

And it reveals a coupling the paper never names. One retirement moves demand and supply at once, in opposite directions. Keeping a platform raises its spares need and cuts the harvest that feeds it. [Second lives](note-second-lives.md) takes that up as new work.

**Decisions it bears on.** P6's commitment question is this lens applied directly. P5 declares build programs. P2 decides retirement dates, which are the declaration's first stage. P4 relies on harvest arriving when declared.

### Approval and allocation

**The idea.** The paper's second claim is that approval is not allocation. An ask approved in a common unit still needs machines of the right shape, in the right place, on time. A common unit "prices; it doesn't clear" (Section 6.1). The gap between approved and delivered needs an owner and a ledger. [Approval and allocation](concept-approval-and-allocation.md) walks the seven steps from declared to productive.

Three kinds of gap exist. Capped issue limits approval to what supply can source. Designed over-issue sells beyond supply "under a stated firmness class (firm, best-effort, preemptible), so holders know their odds" (Section 6.1). The undesigned gap is an approval treated as firm that supply can't meet.

**How it reframes the problem.** Read for drives, the shape has five dimensions: capacity, performance, endurance, fit and condition. A cost-weighted unit "under-prices asks heavy on what's scarce" (Section 6.1). Condition has no place in the paper's unit. That is why terabytes alone can't allocate the harvest.

Claim 2 shows up three ways in this case.

- A drive approved for a sink can still fail one of the case's ten gates.
- A drive promised to two sinks is an undesigned gap on both.
- A decommission that slips leaves a booked harvest with nowhere to come from. "A reclaim that doesn't happen, or a decommission that slips, becomes a shortage that looks like a supply failure" (Section 6).

Mechanism 5's ledger tracks the gap: "Planning carries the gap; each step's performer owns its entry". Applied here, the ledger runs backwards, from in service to harvested to tested to available.

[Pegging](/glossary/#term-pegging) ties each drive to one claim. "Pegging makes the cheapest bridge possible" (Section 6.4).

**What it reveals.** The case lists the gates as obstacles. The lens shows they are the allocation layer itself. A drive isn't supply until it clears the gates for a specific sink. So harvest stays uncommitted until supply answers with a dated commit or a [named gap](/glossary/#term-named-gap).

It also reveals that designed over-issue is the tool for workloads. A reused-flash class with a stated firmness is honest over-issue. Selling it as ordinary capacity would be an undesigned gap waiting for its first cohort failure.

And it reveals a bridge the case only hints at. Keeping old hardware is a [bridge](/glossary/#term-bridge) in the paper's own table. "Defer decommission of older hardware" works only "if not yet retired and if its space and power aren't needed by incoming hardware" (Section 6.4). That condition is the test for redeploying hosts whole.

**Decisions it bears on.** P1 is the ledger. P3 offers the class. P6 pegs and allocates. P2 uses the bridge condition. P6's commitment question decides when a harvest counts as committed.

### Buffers and reserves

**The idea.** A plan with one line called headroom hides several buffers, each with its own owner and sizing. A buffer is a priced decision. The [shortage-to-idle ratio](/glossary/#term-shortage-to-idle-ratio) weighs the cost of running short against the cost of holding spare. That ratio sets how far up the range to cover, the newsvendor fraction [78]. [Buffers and reserves](concept-buffers-and-reserves.md) covers sizing, pooling and the shortage budget.

**How it reframes the problem.** The spares pool is the "inventory buffer (parts and ready machines in stock)" (Section 6.3). "Someone funds and replenishes it, so a draw on it is a debt with a date" (Section 6.3). "Component inventory is planned to high quantile forecasts" (Section 6.3). So spares are a [stocked pool](/glossary/#term-stocked-pool) with a signed ratio, not a habit.

The lens also separates two kinds of error. "Persistent bias is different: correct it at intake (Section 9.3), don't buffer it" (Section 6.3). Read for drives, misdiagnosis is that bias. Size the pool on true failures, not pulls. The difference is large: sized from pulls at a 25% misdiagnosis rate (illustrative), a pool runs about a third larger.

**Pooling and its limit.** Pooling is the main economy of buffers. Section 6.3, quoting [7], says to provision for "the peak of the summed demands, rather than the sum of their individual peaks". But "Correlation and heavy tails erode the gain" (Section 6.3). Aged drives are exactly where correlation hides.

That is where the correlation rule comes in. "Name the driver; don't infer independence from a low measured correlation" (Section 6.6). Our reading: a cohort of drives, by model, firmware and age, is a shared driver. A million-drive study in the case found failures cluster by node and rack, more so with age.

**The shortage budget.** At 80% cover, "about one launch in five should need a bridge at that layer" (Section 10.2). The paper calls this "an analogy, not a result" (Section 10.2). Applied here, a cohort stands in for a launch. That gives the spares pool a backtest: count the bridges.

**What it reveals.** The case asks how many spares to hold. The lens asks two prior questions. How much is a missed repair worth against an idle spare? And how much of the observed demand is bias? Answering the second shrinks the pool before any sizing begins. The case calls diagnosis the cheapest supply; the lens says why.

It also reveals that risk from reused drives is a buffer question. Redundancy already absorbs some device loss. A cohort cap per failure domain keeps correlated failure inside what redundancy was sized for [argued].

**Decisions it bears on.** P4 is this lens. P3 needs the cohort cap. P5 spreads reused drives across failure domains. P7's turnaround sets how much stock sits in resupply.

### Supply layers and lead times

**The idea.** Supply comes in [layers](/glossary/#term-supply-layer), each with its own [lead time](/glossary/#term-lead-time) and contract terms. Slow layers must be bought long before demand firms up. Turn-up is a layer too. "Turn-up is a rate, not an order. It's set by people, dock space, test positions and network ports, staffed months ahead, so it works like a checkout line" (Section 6.2). [Supply layers and lead times](concept-supply-layers-and-lead-times.md) has the layer table and the contract terms.

**How it reframes the problem.** The reverse pipeline is a [turn-up](/glossary/#term-turn-up) layer run backwards. Harvesting, erasing and testing drives is staffed like turn-up, not bought like machines. In a passage marked as experience, per-site throughput, "with retests and refresh work competing for the same crews, often binds" (Section 6.2). Here the pipeline shares crews with repairs.

The layers of reused supply stack like the paper's. A retirement date comes first. Then the host must be drained, then harvested, then sanitized and tested, then qualified for its target platform. Each step is a layer whose start is the previous one's finish.

New flash is a layer too, bought under contracts. "the right to push out is often worth more than the right to walk away" (Section 6.2). The paper says that about slipped launches. We apply it to new orders behind an uncertain harvest.

**Options and postponement.** The paper keeps supply "generic until the decision that says which shape" (Section 6.2). Applied here, that is a storage policy. Erase, quick-screen and hold. Run the full test only when a claim arrives. The case's studied ground backs it: the test gate is a dial you set apart from volume.

**What it reveals.** The case lists labor as a constraint. The lens shows it is a rate that must be staffed months ahead. The case bounds the work at 250–750 technician-years for three million drives a year (illustrative). That is a staffing program, unless it lands on the same sites and quarters as repairs.

It also reveals the slip that shows up twice. "a supply slip often shows up twice" (Section 6.2). A slipped retirement delays the harvest, then lands it on top of the next batch. Leveling retirements across quarters is a supply-layer fix, not a pipeline fix.

And it reveals qualification as a layer. Re-shaping after an order can mean "change fees, rework, a new test cycle and a new lead time" (Section 6.1). Qualification slots are scarce, and every new grade or platform pairing spends them.

**Decisions it bears on.** P7 is this lens. P5 needs qualification slots. P4 uses push-out on new orders. P6 uses postponement in its storage policy.

### Commit points

**The idea.** Each supply layer has a [commit point](/glossary/#term-commit-point): its need date minus its cautious lead time. What matters there is how much of the demand is still uncertain. The commit-point method (Section 8) walks each layer through eight steps. [Commit points and the commit-point method](concept-commit-points.md) gives the steps and the worksheet.

When a commit point falls before the event that would size it, you have [three choices](/glossary/#term-the-three-choices) (Section 6.5). Ask for the decision earlier. Buy an option past the event. Or commit to the stage's record and name the owner of the residual. Write down which, in a [decision note](/glossary/#term-decision-note).

**How it reframes the problem.** Two of the case's decisions are commit points in disguise. A last-time buy for an old drive model must be placed years before the need is known. That is a commit point before the event that would size it. A decommission date is also a commit point. Once set, it fixes when drives arrive and when the old platform's spares need ends.

The method's sixth step splits each layer into [firm, flexible and named](/glossary/#term-firm-flexible-named) slices. Firm covers up to the base. Flexible covers the rest of the range as options or reserves. Named is a bridge with an owner. Applied here, that is how to book a harvest you can't yet count on.

**What it reveals.** The case asks how to forecast harvest. The lens asks what you must commit before the forecast firms up, and in what form. That question has an answer even when the forecast doesn't.

It also reveals what to write down. A last-time buy placed without a decision note can't be learned from. A note records "what was known, when, by whom, and what would have changed it" (Section 6.5). Over a few cycles, those notes become the record that sizes the next buy.

**Decisions it bears on.** P4's last-time buys. P6's commitment question uses the firm, flexible and named split. P2's retirement dates. P5 walks each build program through the method.

### The measuring loop

**The idea.** Pick a business driver, instrument it with the resources it uses, and "Compute the ratio continuously" (Section 5.2). Alert when the ratio shifts or when use departs from forecast. The paper's addition is that a shift is a new version of a price, not a quiet edit. [The measuring loop](concept-measuring-loop.md) lays out the eight steps and the two alerts.

**How it reframes the problem.** Applied here, the ratio is endurance used per year, by cohort and tier. That ratio decides what tomorrow's harvest is worth. Kuantillion Cloud can already set each drive's wear rate in software. Where wear binds, today's placement shapes the condition of the harvest two or three years out.

A second ratio watches diagnosis: the healthy share of pulled drives, by site. It is the intake bias the buffers lens names. When it moves, the coefficient behind spares moves too.

**What it reveals.** The case says nobody owns the link from placement to harvest. The lens says the link is a ratio, and a ratio can be watched before anyone decides to price it. Measure endurance used by cohort now. Price it only when a second-life value exists to price it against.

It also reveals the pilot's real job. "The rollout is the measurement" (Section 5.4). "Phasing the first region small buys the real coefficient cheaply" (Section 5.4). The first redeployed cohort is how you learn the second-life failure curve, which nobody has published [unmeasured].

**Decisions it bears on.** P2a watches endurance. P4 watches the healthy share. P3's pilot measures second-life hazard. P1 holds the telemetry the loop needs.

### The operating mechanisms

**The idea.** Thirteen artifacts keep the agreement true from one cycle to the next. Each has an owner and an indicator. They do four jobs: keep demand honest, keep price honest, keep supply honest, and make decisions stick. Nine decision rights sit beside them. [The operating mechanisms](concept-operating-mechanisms.md) lists them all.

**How it reframes the problem.** Read the thirteen against what the case makes public for legacy flash. *Partial* means the artifact exists elsewhere in the fleet or covers one dimension. *Missing* means none is visible in the public record for legacy flash. Every status is our reading.

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

**What it reveals.** Six mechanisms matter most here. Mechanism 11, because harvest is supply; without it, approvals are "treated as firm before supply answers" (Section 9.2). Mechanism 5, because it stops the double promise. Mechanism 10, because without a forum "Escalation by volume" decides (Section 9.2). Then mechanisms 3, 13 and 8: the drive's price, last-time buys, and the landing rule.

The audit also reveals that most of the work is extension, not invention. Seven of the thirteen exist in part somewhere in the fleet. The program's job is to carry them past the point where a drive leaves its host.

**The stranded stock, on its own line.** The flow ratio doesn't gate the stranded stock. The case says the stock is likely larger than the flow. Illustratively, recovering the gap between 54% and 19% stranding on about 100 EB installed frees about 35 EB, once.

So size the stock early too, from flash use across the fleet, by resource and site. Put it on its own owned line. The artifact of mechanism 4 is "Each its own line in every report", owned by the "Service owner (not necessarily the cause)". Section 14 gives the unused lines to platform leaders. Applied here, the storage systems own the stranded line, and finance keeps score. The stock's own go or no-go is a reclaim pilot.

**Decisions it bears on.** Every decision, but most directly P6 (mechanisms 5, 10 and 11), P8 (mechanisms 7 and 8), P4 and P5 (mechanism 13), and P2a (mechanism 3).

### People and seams

**The idea.** Every capacity plan is a handshake among capital, demand and supply. None can close it alone. The planner sits in the middle with no budget, trading in information, timing, trust and credible commitments. Conflict runs along three seams. [People: brokering the handshake](people.md) covers the seams, the right to refuse, and legitimacy.

**How it reframes the problem.** The case's organizational findings stop being background and become the design. Allocation and value recovery are hired into different groups. Technicians are measured on ticket speed. New drives are capital, while harvest labor is operating cost. Each is a seam.

Our reading of where they sit: hosts and harvest sit on seam 3, between planning and supply. Keeping hosts and the capital-operating split sit on seam 2, between planning and finance. Grades and wear sit on seam 1, between the platform and the tiers it serves (Section 10.1).

Seam 3 needs five artifacts both sides sign. One is "a definition of done for each handoff" (Section 10.1). The paper writes that for handoffs such as "delivered" and "live". Applied here, the handoffs are a drive's off-host states.

**Section 14's six roles, applied here.** The paper names six roles and the promises each keeps (Section 14). Who holds each in this case is our reading.

- **Platform leaders** own "the unused and unallocated lines" (Section 14). Here, the storage systems own the stranded line.
- **Planning** "keeps the fulfillment ledger, carries the gap" (Section 14). Here, it keeps the drive record and the harvest declaration.
- **Finance** declares what "fully loaded" contains (Section 14). Here, it also signs the transfer price and the incident cost bound.
- **Product leaders** "sign what they change" (Section 14). Here, they are the workload owners who take the reused class.
- **A standing forum** "owns the ranked list and the cut line" (Section 14). Here, it ranks the four sinks.
- **Supply chain** answers every approved ask "with a dated commit or a named gap" (Section 14). Here, harvest is one of its sources.

**What it reveals.** Three decisions have no public owner: the drive record, the wear price and allocation. The paper's remedy is to "lay the charters over the chain that delivers the product, end to end, and name an owner for every gap" (Section 10.2). Applied here, allocation gets a standing forum (mechanism 10).

It also reveals why adoption is a legitimacy problem, not a pricing one. "Past a point, legitimacy matters more than precision in whether anyone acts on the number" (Section 10.4). Tiers that fear second-class capacity will play "Reliability as trump card". Its counter is "Named buffers (Section 6.3), each sized by its owner" (Section 10.3).

And it reveals the incentive gap as measurable. The case's multitask finding predicts scrapping wherever harvest value goes unmeasured. The fix is a measure, not a reorganization.

**Decisions it bears on.** P8 is this lens. P1 assigns field owners. P6 needs the forum. P2 sits on seam 2. P2a sits on seam 1.

## Breaking it down: the decisions

The case breaks the problem into eight decisions and two sub-decisions. Each section below opens with what the decision is and why it's hard here. Then it argues the answer: which lenses combine, where they pull against each other, and where it lands. The futures are the case's: Path A stays tight through 2028, and Path B eases from late 2027.

This is reasoning, not a work order. Owners appear only where the argument needs them. The [execution plan](case-kuantillion-cloud-plan.md) assigns the rest.

### P1. One record per drive

*A drive passes through many hands after it leaves its host: decommission crews, test benches, cages, security and resale partners. Each keeps its own records, and no single record follows the drive. Without one, a drive can be promised twice, graded on stale data or lost from custody ([case, P1](case-kuantillion-cloud-full.md#p1-one-record-per-drive)).*

**The lenses that combine.** The coefficient lens needs the fields every price is computed from. Approval and allocation needs a ledger. People and seams needs an owner for each handoff. The grain problem names the trap: "Someone has to own the roll-up, and the data a decision needs often sits one level below it" (Section 5.1).

**Where they pull against each other.** A record rich enough to grade drives is expensive to keep fresh. A record cheap enough to keep is too thin to grade on. The paper doesn't settle that trade, because its unit has no condition.

**The answer.** Keep one record per drive. Its states are in service, harvested, in test, spare and out of custody. Our reading: that is mechanism 5's ledger run backwards. The record's design follows from the lenses.

- Define *harvested*, *tested*, *erased* and *available*, and who accepts each. Applied here, those are seam 3's definitions of done.
- Give each field an owner, the group that does that step. Mechanism 5's rule is "each step's performer owns its entry". Planning keeps the record but owns no field.
- Set freshness by what the field drives: continuous for health telemetry, at every state change for custody [argued].
- Add the fields the gates name: a SKU for a regraded drive, its grade, its costing basis and its firmware baseline.
- Add a reuse-eligibility field: free, constrained or forbidden. Some customer, government or sovereign contracts may limit used parts or data-bearing media. P3 treats it as a placement constraint [argued].
- Reconcile the record with the erasure log at every off-host state. Treat each gap as the leading sign of a custody incident [argued].

**Blind cohorts.** Older drives that predate newer telemetry fields are partly blind. Our reading is that they are steps with no reference class, where the paper says you "bound it, phase it and buy options" (Section 13). They go first to loss-absorbing tiers or to exit [argued]. [Limits](limits.md) explains the no-reference-class case.

**Custody.** Proving erasure is a security discipline, not capacity planning. [The practice's Charter](/charter/) says of neighboring fields: "We link to them rather than rewrite them". It doesn't name erasure among them, so treating it that way is our reading. The practice's part is the record, not the erasure method.

**Why it comes early.** Every later decision reads from this record. But it doesn't need to be complete to start. Build the off-host fields first, because that is where the record is missing today.

### P2. When the host goes: keep, redeploy whole, or harvest

*Every retiring host has three options, not two. Keep it running, redeploy it whole to a lighter workload class, or take it apart and harvest its drives. Redeploying whole skips most of the ten gates. A program that prices drives without pricing that option will take apart hosts it should have moved ([case, P2](case-kuantillion-cloud-full.md#p2-when-does-the-host-go)).*

**The lenses that combine.** Three prices supplies the cost comparison. Approval and allocation supplies the bridge condition. Declarations supplies the retirement as a dated, slipping step. People and seams says who must sign.

The paper says a lot here already.

- "A retirement is a supply order with a minus sign. It has a date, and it slips, usually because tenants can't migrate off in time" (Section 6.7).
- Keeping old hardware is a bridge. Its cost is a "Power, efficiency and reliability penalty" (Section 6.4).
- "In my experience, the fastest bridge for a late new site is often an older one" (Section 6.7).
- It is a finance decision too: "Deferring a decommission extends depreciation on an asset finance had written off its plan" (Section 10.1).

**Where they pull against each other.** The natural price for keeping capacity is long-run incremental cost. But Section 4 says that price "Misleads when used for" "Pricing capacity that already exists" (Section 4). So the paper's own price table rules out its most obvious tool. We add a fourth price, avoidable carrying cost [argued].

**The answer.** Put all three branches on one sheet, per cohort. The case finds that the answer differs by cohort, not by generation. The sheet's lines are this page's [argued]:

| Line | Keep | Redeploy whole | Harvest |
|---|---|---|---|
| Avoidable carry: power, space, repairs, technician hours, stranding of its other parts | Paid | Paid, in a lighter class | Avoided |
| Value of the host's capacity: the shadow price in stockout zones, zero in slack | Kept | Kept, at the lower class's price | Lost |
| Harvest value: yield × each sink's next-best-source value − pipeline cost | — | — | Gained |
| The lighter class's value to its tenants | — | Gained | — |
| Depreciation, noted by finance | Extended | Extended | Written off |

Read it down each column. Keep a host when its capacity's value exceeds its avoidable carry. Harvest when the harvest value is larger [argued].

**Redeploying whole.** A whole host can go to a lighter workload class. That is designed over-issue "under a stated firmness class" (Section 6.1); applied here, the object is a whole host. Our reading is that Section 6.4's bridge condition is this branch's test. Where the host isn't in the way and a lighter class exists, redeploy it whole before you take it apart [argued].

**The coupling.** Keeping a platform raises its spares need and cuts the harvest that feeds it. Net both effects on the same ledger line: minus host capacity, plus drives [argued]. The paper checks shared drivers among launches (Section 6.6) and within supply (Section 6.7). It never checks one driver across demand and supply with opposite signs. [Second lives](note-second-lives.md) takes this up.

**Who must sign.** Finance signs every keep past plan, because the depreciation line is theirs. Drive values from the forum become a required input to the retirement decision. That is the one ownership change this decision needs.

**Futures.** Under Path A, keeping and redeploying whole win more often. Under Path B, retire sooner, because harvest value falls first for high-capacity parts.

### P2a. The wear sub-decision

*Kuantillion Cloud can set each drive's wear rate in software, and prices wear per byte written. Where wear binds, today's placement decides the condition of the drives harvested two or three years from now. No team owns that link, and no price carries the second life's value back to the first ([case, P2](case-kuantillion-cloud-full.md#p2-when-does-the-host-go)).*

**The lenses that combine.** The coefficient lens: a coefficient read backward is a price (Section 5.2), and our reading is that the wear price is one. It needs "a version, an effective date, an owner and a valid range" (Section 9.2). The measuring loop: "Compute the ratio continuously" (Section 5.2). Applied here, the ratio is endurance used per year, by cohort and tier.

**Where they pull against each other.** The coefficient lens says price the wear now. The measuring loop says watch it first. Pricing wear today would need a second-life value, and nobody has one yet.

**The answer.** Measure now, price later. Report endurance used by cohort at the quarterly supply review. Change first-life placement only after the workload pilot gives a second-life value to price against [argued].

Ownership follows mechanism 3, whose owner is the "Service owner, with finance". Our reading makes the flash platform the service owner, because it holds qualification and health telemetry.

**Futures.** Under Path A endurance is dearer, so the wear price rises. Under Path B it falls.

**Where the paper runs out.** The paper prices use per unit of time. Endurance is a stock one tenant depletes, lowering the drive's value in a later use. Nothing carries that second-life value back into the first-life price.

### P3. Match legacy flash to workloads

*Older flash can serve workloads that tolerate it: caches, replicated tiers, cold data. But no tier has agreed to take reused capacity, no grades exist, and every new grade adds a shape the fleet's systems must carry. Stranded flash in running machines belongs here too ([case, P3](case-kuantillion-cloud-full.md#p3-match-legacy-flash-to-workloads)).*

**The lenses that combine.** Approval and allocation supplies the firmness class and the five-dimension shape. Buffers and reserves supplies pooling and the cohort as a shared driver. The coefficient lens supplies the price per dimension. The measuring loop supplies the pilot.

The paper's own lines:

- An approved unit must still become "storage capacity *and* access rate (IOPS), which are separate resources" (Section 6.1).
- "Much efficiency comes from re-shaping an ask rather than cutting it" (Section 6.1). In a passage the paper marks as experience, it questions the assumption, not the total. Applied here, ask which part of a tier really needs new drives.
- Designed over-issue sells "under a stated firmness class (firm, best-effort, preemptible), so holders know their odds" (Section 6.1).
- A higher availability tier "is a driver and belongs in the rate" (Section 5.2).

**Where they pull against each other.** Approval and allocation wants grades fine enough to match each drive to its best use. Every grade is a new SKU, qualification combination, placement constraint and forecast category. That is the case's grading tax, and its strongest counter-argument. The paper has no price for a shape's complexity.

**The answer.** Offer reused flash as its own class. State its guarantee and its evidence bar, and price it by dimension: capacity, IOPS, remaining endurance and fit. The class is the inward version of the customer tools the case describes: preemptible pools, queues and fallbacks across shapes.

**Start with a provisional three-grade rule** [argued]. Revisit it after the pilot.

| Grade | Rule | Where it can go |
|---|---|---|
| 1 | Observable cohort; safe firmware; under the wear and error thresholds | Durable tiers, once the evidence bar is met |
| 2 | Observable, but outside one threshold, or within a year of a known firmware fault age | Loss-absorbing tiers and spares only |
| 3 | Blind, or failing any threshold | Exit or destroy |

For example, a wear threshold might be half of rated endurance used (illustrative). The thresholds themselves are [unmeasured].

**Cap the tiers.** Cap the tier count at what the fleet's backlog and solver categories show its systems can carry [argued]. Three grades fit inside any sensible cap.

**Chain the classes, don't multiply them.** Jordan and Graves found that limited flexibility "yields most of the benefits of total flexibility" [77] (Section 6.2). Their limit is on links: each plant builds "only a few products" (Section 6.2). The paper reads that across to two machine shapes per workload, linked in a chain. It calls that "an analogy, not a result tested on fleets" (Section 6.2). Applied here, link each tier to a few sinks and each sink to a few tiers.

**Pilot small.** "Phasing the first region small buys the real coefficient cheaply" (Section 5.4). Applied here, the first unit is a cohort, placed in caches and replicated tiers that absorb device loss by design.

**Concentration.** Our reading: name each cohort as a shared driver: "Name the driver; don't infer independence from a low measured correlation" (Section 6.6). Cap a cohort's share of any one failure domain [argued]. For example, if a domain holds 2,000 drives, a 10% cap is 200 (illustrative).

**The risk budget** [argued]. Reused capacity needs a signed limit on how much risk it may carry, agreed before volume grows. It has three parts.

1. A cohort cap per failure domain. Reliability engineering sets it, because the paper gives that group the right: "Reliability buffers: reliability engineering" (Section 9.2).
2. An evidence bar per tier, rising only with scored outcomes. Caches start lower, durable tiers higher.
3. An incident cost bound, signed by finance before volume grows.

**The stranded stock.** Applied here, stranded flash in running machines goes on its own owned line (mechanism 4). Recover it two ways. One is pooling where you can reach it, minding the correlation caveat. The other is reclaim, a bridge of "Days to weeks" (Section 6.4). Freed capacity lands under the landing rule (mechanism 8).

**Futures.** Under Path A, workloads are the option on the upside. Under Path B, the case expects this sink to shrink fastest, because new flash competes there directly. The class must be able to close cohort by cohort without stranding its tenants.

### P4. Size and source legacy spares

*Old platforms need spare drives that fit them, and vendors stop making small, older models. Harvest is the cheap source, but it arrives only when another platform retires. Spares demand is read from repair tickets, and a third of SSD tickets at one peer weren't the drive ([case, P4](case-kuantillion-cloud-full.md#p4-size-and-source-legacy-spares)).*

**The lenses that combine.** Buffers and reserves sizes the pool. Commit points handles last-time buys. Supply layers handles the two sources and push-out. The coefficient lens corrects the per-failure ratio for misdiagnosis.

**Where they pull against each other.** The buffers lens wants a pool sized to a high quantile. The commit-points lens says the biggest choice, the last-time buy, must be made before the quantile is known. And the declarations lens says harvest, the cheapest source, is itself uncertain.

**The answer, in four parts.**

*First, size on true failures.* Read misdiagnosis as intake bias and correct it before sizing. Take one installed cohort of 200,000 drives failing at 1.5% a year (illustrative). That is 3,000 true failures, about 8.2 a day. The case cites Palm's theorem for the pipeline: stock in resupply depends on the mean turnaround.

| Turnaround | Mean in resupply | Pool at 80% cover | Pool at 95% cover |
|---|---|---|---|
| 30 days | 247 | 260 | 273 |
| 10 days | 82 | 90 | 97 |

The table assumes failures arrive as a Poisson process. Each cover level is the exact Poisson quantile.

- Sized from pulls at a 25% misdiagnosis rate (illustrative), the 30-day pool at 80% would be 344, not 260.
- Cutting turnaround from 30 to 10 days lowers the pool by about 8.5 drives per day saved. That is roughly one day of true demand, plus a little safety stock.
- This holds while untested harvest is on hand. If harvest itself is short, the decommission date binds, not the turnaround.

The cheapest supply is fewer wrongful pulls. For SSD tickets, add a reseat-and-re-test step before any pull. The healthy share of pulled drives, by site, is its test [argued].

*Second, choose consciously at each last-time buy.* A last-time buy is a commit point before the event that would size it. Section 6.5 gives three choices for that. Applied here:

1. "Ask for the decision earlier" (Section 6.5): get the platform's retirement dated before the vendor's end-of-life window.
2. "Buy an option that carries the commitment past the event" (Section 6.5): a reschedulable last-time buy.
3. "Commit to the stage's record and name the owner of the residual" (Section 6.5): commit on the harvest forecast, with spares planning as owner.

Write down which one you chose.

*Third, run two sources as one policy.* Harvest is the cheap, uncertain source; new purchase is the dear, nominally reliable one. The case's studied ground gives the shape: one order-up-to level for each source [argued]. In 2026, new purchase may be the slower one.

When harvested drives land, a planned new order for the same platform isn't needed for a while. Later harvest may still slip. So push the new order out rather than cancel it. That is the push-out right from the supply-layers lens, applied to orders behind an uncertain harvest.

*Fourth, backtest with bridges.* Count one cover decision per cohort per year. For example, 20 platform cohorts should need about 4 bridges a year (illustrative). Far fewer means the pool is padded. Far more means the ratio or the forecast is off. "launches tied to one driver spend the budget together" (Section 10.2), so expect bridges to cluster by cohort.

**Where to stock.** Stock drives at site cages. Stock whole spare hosts only for platforms whose chassis must be replaced with the drive, the case's legacy-card example. Hold untested harvest at a regional depot [argued].

**Fail-in-place.** A server that keeps running with a dead drive declares it can take a shortfall. That is Section 6.7's question, "how much shortfall, for how long, can it take?", which the paper calls its own exploration. Carry the cost of degraded capacity on its own line [argued].

**Who signs.** The ratio is signed by finance and product, as Section 9.2's decision rights require. Finance funds the pool. A signed ratio is what stops "Reliability as trump card" (Section 10.3) from setting it instead.

**Futures.** Under Path A, harvest is the main source for old platforms, and last-time buys get dearer. Under Path B, the case expects spares to erode more slowly than other sinks. Re-sign the ratio each year as new compatible drives get easier to buy.

### P5. Use legacy flash in upgrades and builds

*Harvested drives can extend the life of machines that need more flash, or go into new builds that accept older parts. But each pairing of drive and platform must clear fit and qualification. Planning hosts, spares and builds separately overbooks the same technicians and drives ([case, P5](case-kuantillion-cloud-full.md#p5-use-legacy-flash-in-upgrades-and-builds)).*

**The lenses that combine.** Declarations treats each program as a step change. Commit points walks each through the method. Supply layers treats qualification as a staffed layer. Buffers and reserves keeps cohorts apart.

The paper's own lines:

- A step change "enters the plan as a declaration in units the planner already prices" (Section 5.4). Applied here, each build or upgrade program is a declaration on mechanism 12, with stages, bands and shared drivers.
- Re-shaping after an order can mean "change fees, rework, a new test cycle and a new lead time" (Section 6.1).
- "A written table of substitutions per workload class keeps commitments fungible, and needn't be complete" (Section 6.2).

**Where they pull against each other.** Upgrades want the drives that fit best. Spares want the same drives, for the same old platforms. Without one ranked list, both sinks plan on the same stock.

**The answer.**

- Walk each program through the commit-point method (Section 8). Applied here, the layers are qualification slots, harvest of the fitting generation, technician hours and change windows.
- Staff qualification as a rate, like turn-up: "set by people, dock space, test positions and network ports" (Section 6.2). That is our reading.
- Fill the substitution table from the fit gate: which drives fit which slots, backplanes and platforms.
- Choose machines for added flash by binding dimension: upgrade the machines whose flash binds while their other parts sit idle [argued].
- Register firmware baselines as cohort breaks on mechanism 6. Its artifact lists "Hardware changes, migrations, re-grains"; a firmware baseline is our addition.
- Don't pack same-age drives into one box. Name the cohort as a shared driver, as Section 6.6 asks for any shared driver, and spread reused drives across failure domains inside a build [argued].

The case warns that planning these separately overbooks the same technicians and drives. Our reading: one ranked list in one forum (mechanism 10) is the guard.

**Futures.** Under Path A, life extension substitutes for new machines. Under both paths, this sink closes as the build mix moves to new form factors. Our reading: record the closing date in mechanism 13's column for "cost to change shape after commit".

### P6. Allocate the harvest across sinks

*Four sinks want the same drives, and each prices a different dimension. Nobody allocates physical harvest across them today. Without a rule, the loudest sink wins, or one drive is promised to two. Holding drives for later is a bet on prices, and the program's own volume moves those prices ([case, P6](case-kuantillion-cloud-full.md#p6-allocate-the-harvest-across-sinks)).*

**The lenses that combine.** Three prices supplies the ranking price. The operating mechanisms supply the forum. Approval and allocation supplies pegging. Supply layers supplies postponement. People and seams supplies the transfer price and showback order.

The paper's own lines:

- A standing forum holds the "Ranked list, cut line, decision log with overrides and brokered trades" (Section 9.2). It is a "Named executive forum, run by planning" (Section 9.2).
- The shadow price is "What one more unit of the binding resource is worth; zero for slack" (Section 4).
- "Agree it in the forum beforehand; supply carries it out. Written during the shortage, it's a negotiation. And don't split a shortage pro rata" (Section 9.3).
- "what the broker knows should outlive the broker" (Section 6.4).

**Where they pull against each other.** The shadow price ranks claims, but it can't be computed directly across unlike units. The transfer price charges sinks, but it isn't a ranking. And holding drives for a better claim conflicts with releasing them before prices fall.

**The answer: rank by next-best source.** Value each claim at the cost of that sink's next-best source on that date [argued]:

| Sink | Next-best source, and its cost |
|---|---|
| Spares | The bridge for a missed repair, from Section 6.4's bridge table |
| Workloads | The capacity value in stockout zones; elsewhere, the cost of new flash |
| Builds and upgrades | The cost of the new machine the drives displace |
| Exit | Net resale, after the discount for unseen history and pipeline cost |

Score the rule after two cycles. Under scarcity this approximates the shadow price at each sink's binding dimension. It avoids converting units nobody agreed on.

**The shortage rule.** Agree it before the shortage. Our proposal: spares for platforms with no other source go short last, because a missed repair has no bridge [argued].

**Peg and log.** Peg every tested drive to one claim, and log every trade, so one drive is never promised twice. The log is how the broker's knowledge outlives the broker.

**One storage policy** [argued]. Erase, quick-screen and hold. Run the full test when a claim arrives. Applied here, that keeps supply "generic until the decision that says which shape" (Section 6.2).

**Who pays.** Set the transfer price on usable, yield-adjusted capacity. It is pipeline cost per usable TB, plus carry, plus a risk loading drawn from the incident bound [argued]. For example, a 2 TB drive costing $40 to process at 80% yield is $25 per usable TB. Add $2 of carry and $5 of risk loading, and it is about $32 per TB (illustrative).

Show it back for a full cycle before anyone is billed. The paper's order is "Move to attributed cost only after a full cycle of showback" (Section 10.4). The forum ranks on next-best-source value, not on this price.

**When to release held stock.** Holding is a priced position. The paper's option rule is "write down the trigger for converting options into orders" (Section 6.2). Applied here, write the release trigger before you hold [argued]:

- release a cohort's held drives when their next-best-source value falls below net resale for two quarterly price prints running; or
- release when a drive's shelf time passes two re-test cycles with no claim.

Release in steps, under the cap below.

**The program moves its own market.** At this volume Kuantillion Cloud isn't a price taker in the used market. Its own retention moves the price its retention is judged against, and a rival's program would move it too. Three rules follow [argued]. Cap resale releases per model per quarter. Read vendor warranty and end-of-life terms at the annual cycle, and again after any peer announcement. Track the large operators' resale volumes as a signpost. Price feedback itself is [unmeasured].

**Futures.** Under Path A, the shadow price is high and holding is rational. Under Path B, release on the trigger; the rate card falls toward resale value, and exit rises in rank.

### P6, the commitment question

*A harvest is promised long before the drives exist. Retirements slip when tenants can't move, and gates reject an unknown share. Count on too much and every sink plans on drives that never come. Count on too little and new flash is bought that wasn't needed ([case, P6](case-kuantillion-cloud-full.md#p6-allocate-the-harvest-across-sinks)).*

**The lenses that combine.** Declarations supplies the stages and their scoring. Approval and allocation supplies the uncommitted label. Commit points supplies the firm, flexible and named split.

- "An approval becomes capped issue when supply answers it with a dated commit or a named gap" (Section 6.1). Until then, "label it *uncommitted*, a firmness class of its own, so its holder knows the odds" (Section 6.1).
- Supply declarations firm up in stages: "planned, contracted, under construction, delivered, live" (Section 6.7).
- Netting treats what's due back as a forecast: "Each of those is a forecast too, so give each a date and an owner" (Section 8.2).

**Where they pull against each other.** The commit-point method books firm to the base. But a harvest's base is unknown until its stage record builds up. Booking to the base too early books phantom supply.

**The answer.** Applied here, a retirement's harvest is a staged supply declaration. Its stages are planned, dated, drained, harvested, tested and available. Score each stage promised against actual.

**One booking rule** [argued]. Book firm only to the stage record's lower quantile until the drives are drained. Then book to the base, the stage record's middle, as Section 8.2's split uses a base scenario. Above the firm slice, hold options on new purchase. Above that, name a bridge with an owner.

**An estimate.** Read the booking as a share of what is scheduled.

- On-time share, about 50–70%. Our estimate rests on retirements waiting for new halls, and on the case's report that 30–50% of large 2026 data-center capacity may be delayed [argued].
- Gate yield is unpublished [unmeasured]. Our working figure is about 80% for recent, observable cohorts, and lower for blind ones [argued].
- So expect about 40–56% of scheduled drives on the date. For a retiring batch of 40,000 drives (illustrative), that is about 16,000–22,400.

**Who pays when harvest fails to arrive.** Finance agrees it in advance. The paper's right for bands has finance "agreeing who pays for a change outside them" (Section 9.2); we extend it to harvest.

**Futures.** Under Path A, decommissions slip more, so the lower quantile sits lower. Under Path B it can rise.

### P7. Run the reverse pipeline at the needed rate

*Harvesting, erasing, testing and shipping drives takes skilled hands. The same technicians also repair machines, and they are measured on ticket speed. If the pipeline is short, harvest piles up untested and spares starve. If it is padded, crews sit idle ([case, P7](case-kuantillion-cloud-full.md#p7-run-the-reverse-pipeline-at-the-needed-rate)).*

**The lenses that combine.** Supply layers treats the pipeline as turn-up. Buffers and reserves sets the cover point for a rate. Commit points says when staffing must be committed.

- For turn-up, "its ratio sets how much rate to staff, not how much to buy" (Section 6.5).
- "a supply slip often shows up twice" (Section 6.2).

**Where they pull against each other.** The paper staffs turn-up at the median, because a short rate costs little. But a short pipeline here starves spares, whose shortage cost is higher. The lenses agree on the method and disagree on the ratio.

**The answer.**

- Applied here, staff the pipeline to the median of expected retirements. Section 6.5 sets turn-up, a rate, at the median, in "this paper's argument (not a published result)" (Section 6.5). Keep surge crews on contract.
- Book harvest and re-power slots like turn-up slots, "booked ahead like an appointment" (Appendix A). That is our reading, using the [turn-up slot](/glossary/#term-turn-up-slot).
- Level retirements across quarters where change windows allow, so slipped batches don't arrive together.
- Watch harvested-but-not-graded drives. The paper says "delivered-but-not-live is where fulfillment backlogs quietly age" (Section 6.2); we apply it to the cage.

**Turnaround is inventory, with a condition.** Each day cut from mean turnaround frees about one day of true demand from the spares pool. Per million installed drives, that is about 27–68 drives a day. It holds while untested harvest is on hand. When harvest itself is short, the decommission date binds.

**Where the capacity sits.** Put test and erasure capacity at the large decommissioning sites. Hold untested drives at a regional depot. Ship to demand only against a claim [argued].

**Labor.** The case bounds the work at 250–750 technician-years for three million drives a year (illustrative). That is a staffing program, unless it lands on the same sites and quarters as repairs.

**Futures.** Under Path A, the case expects the pipeline to be the program's ceiling. You may argue for staffing above the median there, because a short pipeline starves spares, whose shortage cost is higher than turn-up's [argued]. Under Path B, staff to the median.

### P8. Make reuse something teams choose

*Reused capacity works only if tiers accept it and technicians harvest rather than shred. Today tiers have no reason to trust it, technicians have a reason to scrap, and the program's costs land in a different budget from its benefits ([case, P8](case-kuantillion-cloud-full.md#p8-make-reuse-something-teams-choose)).*

**The lenses that combine.** People and seams carries most of this. The operating mechanisms supply the landing rule and signed commitments. Three prices supplies the premium charged to its cause.

- "Past a point, legitimacy matters more than precision in whether anyone acts on the number" (Section 10.4).
- Recovered capacity "has to land where the recoverer sees it" (Section 9.3). "A rule agreed in advance is a contract; one proposed after the savings appear is a request" (Section 9.3).
- "Reliability as trump card" is a named game. Its counter is "Named buffers (Section 6.3), each sized by its owner" (Section 10.3).
- "A consumer who can challenge a coefficient, and sometimes wins, trusts the rest of the bill" (Section 10.4).
- "Engineers need their own coefficient, reproducible from their telemetry, with forecast error treated as data, not fault" (Section 10.4).
- Escalate in steps: "nudges before bills, bills before constraints" (Section 10.4).

**Where they pull against each other.** Pricing pressure would push tiers to take reused capacity. Legitimacy says pressure before trust backfires. The paper's answer is order: prove fulfillment, show back, then bill.

**The answer.**

- Agree the landing rule early: shares booked as savings, returned to the recoverer and held centrally (Section 9.3). Applied here, the pipeline is a recoverer, so it gets credit for part of the capital it saves.
- Write the reuse commitment into the annual capacity agreement. Mechanism 7 does that for forecasts and efficiency; applied here, so enforcement doesn't rest on one person.
- Let tiers challenge a grade or a price, and sometimes win. Our reading: a grade is a coefficient.
- Enter reused capacity where loss is cheapest: caches and replicated tiers first. That rests on Section 5.4's phasing, not on Section 10.4.
- Prove fulfillment first, with spares, and give tiers that take reused capacity a right to return it (Section 10.4). Applied here, the paper wrote these for moving teams onto shared pools.
- Add a second technician metric: harvest value recovered per site [argued]. The case's multitask finding predicts scrapping wherever harvest value goes unmeasured.
- Change the value-recovery team's cash measure, so it stops pulling drives toward resale ahead of internal reuse [argued].
- Face the capital and operating split. The pipeline's cost lands in this quarter's operating budget, its benefit in next year's capital. Our reading: that is seam 2's ground (Section 10.1), and the landing rule is how you face it.
- Show the premium back first. When a sink refuses harvest and its new drives need a bridge, the paper's rule is "Charge the premium to whoever caused it" (Section 6.4). Extending it to refused harvest is ours. For the first cycle, show it back; bill it only after.

**Futures.** Under Path B, new drives get cheap and the second-class risk grows. The scorecard must report the stated anchor and whether reuse displaced a purchase, not just dollars.

## Sequencing: why this order

The order of work follows one rule. Each step waits on the evidence in its row. The paper's rule for declarations is that "promotion needs the evidence in its row" (Section 5.4). We apply it to the program's own gates.

Two of the practice's ideas set the order. The first is the [stage](/glossary/#term-stage): a step licenses only the action its evidence supports. The second is the commit point: commit only what the lead time forces, and hold the rest as options. Read together, they say this. Do first what is cheap and decides whether the rest is worth doing. Do last what is slow to learn and easy to reverse.

### What must be known before what

The decisions depend on each other, and the dependencies fix most of the order.

- **Existence before design.** You can't design a program that already runs, or one that was declined for a reason that still holds.
- **Size and anchor before everything priced.** P2's keep sheet, P6's ranking and P8's scorecard all need the anchor. The class decides how much of the rest runs at all.
- **The record before allocation.** P6 can't peg drives that have no record. P1's off-host fields come before the forum ranks.
- **Hosts and allocation together.** P2 needs drive values from P6, and P6 needs dated retirements from P2. They start in the same gate.
- **Spares before workloads.** Spares prove fulfillment cheaply and set the value floor. Workloads need trust that spares build.
- **The pilot before the wear price.** P2a can't price wear until the pilot gives a second-life value.

![How the eight decisions depend on each other: P1 feeds every decision, P2 feeds the four sinks, and all feed P6.](figures/fleet-flash-dependencies.svg)

*The case's dependency map. Solid arrows feed. Dashed arrows are slower feedback or a slow link; two of them close loops (P6 to P2, P8 to P3).*

### Week one: does a program already exist?

The public record is silent. The case reads that silence three ways: a program run quietly, one tried and dropped, or none. Test all three before you design anything.

Talk to the owners one to one, before any form goes out. Section 9.3 gives that advice for demand intake; we borrow it for a program audit. Sort what you hear into Section 10.4's three kinds: a "fact", an "assumption" or an "ask" (Section 10.4).

Four questions carry the week.

1. What happens to a pulled SSD today? If a program runs, audit it against the thirteen mechanisms and add only what's missing.
2. Was flash reuse ever evaluated and declined? If so, read the record as a decision note: "what was known, when, by whom, and what would have changed it" (Section 6.5). The paper defines the note for commit points; we use it for a program decision. Re-test the decline against today's prices.
3. Are last-time buys made for legacy drive models, and by whom?
4. Which gates did the memory-reclaim program actually cross? That program is the nearest precedent, and its history is the cheapest evidence you can get.

If the decline still holds, stop. The center then moves to redeploying whole hosts (see P2). The plan's [first 90 days](case-kuantillion-cloud-plan.md#3-the-first-30-60-and-90-days) lists the requests and dates.

### Size it before you build it

Nothing gets built until you know the problem's class. "Below materiality, the mechanisms cost more than they return" (Section 13).

The ratio is the SSD harvest, before yield, divided by a year's new flash. The case bounds it loosely (illustrative):

| | Value | Basis |
|---|---|---|
| SSD harvest | 0.3, 1.8 or 6.0 EB a year | 3M drives × 10/30/50% SSD × 1/2/4 TB |
| New flash a year | 20–180 EB | Server spend × 5–15% flash ÷ $100–300 per TB |
| Ratio | 0.2% to 30% | Harvest ÷ new flash |

Both halves are knowable inside Kuantillion Cloud in days. The ratio then sets the class. The thresholds are this page's [argued]:

| Ratio | Class | What runs |
|---|---|---|
| Under 1% | Spares continuity | A minimum drive record, spares, the pipeline and exit |
| 1–5% | Mixed | The above, plus allocation as a monthly forum line and one workload pilot |
| Over 5% | Supply strategy | Everything on this page |

"Stop at the step where the next one costs more than it saves" (Section 12). The paper writes that for mid-sized companies; we apply it to the program's steps. [Settings](settings.md) explains how much of the discipline a setting needs.

The stranded stock is sized at the same time, on its own line. Its go or no-go is a reclaim pilot, not the flow ratio.

### The gates, in brief

Six gates follow week one. Each opens only on its evidence. The plan's [gates](case-kuantillion-cloud-plan.md#4-the-gates) give each one's entry, exit, artifacts and owner.

| Gate | What must be known to pass | What it licenses |
|---|---|---|
| 0 | Whether a program exists or was declined | Design, or an audit, or a stop |
| 1 | The class, the anchor, the stranded stock's size | The forum chartered; the shortage and landing rules signed |
| 2 | How many tiers the systems can carry; whether hosts can be redeployed whole | A tier cap; the redeploy-whole test |
| 3 | The drive record's off-host fields, each with an owner | Pegging and allocation |
| 4 | Yields, technician minutes, misdiagnosis | Hosts and allocation together; spares and the pipeline first; the risk budget |
| 5 | Second-life hazard in a pilot cohort | A reused-flash class; build programs on reused drives |
| 6 | A second-life value to price wear against | The wear price, registered and versioned |

Three ordering choices need their reasons.

- **The forum starts small.** You charter it at Gate 1 only to sign the shortage rule and the landing rule. "Shortage rules come before the shortage" (Section 9.3), so the forum must exist to agree them. It starts ranking claims at Gate 4 [argued].
- **Spares go first inside Gate 4.** Spares are the harvest's most predictable claim and its value floor. Starting there proves fulfillment before you ask anyone to trust reused capacity.
- **The wear link goes last.** The case's own best guess is that placement shapes the harvest little today, except in write-heavy and low-endurance cohorts.

### The cadence, in brief

The cycles nest, slowest outside (Section 9.1). Annual work signs ratios, rules and last-time buys. The quarterly supply review reads the harvest forecast by stage. Monthly, supply updates harvest commits and the forum re-ranks. Pegging and reconciliation run continuously.

"In my experience, the step most often missing is the supply review" (Section 9.1). Our reading: here it is the main meeting, because supply is a byproduct of other decisions. A vendor's end-of-life notice triggers an off-cycle review. [The map](the-map.md) shows where each cadence sits, and the plan's [standing cadence](case-kuantillion-cloud-plan.md#5-standing-cadence) gives the agenda.

## Where the theory runs out

The practice was built for capacity that is ordered. Kuantillion Cloud's supply comes back out of the fleet. Eight places show where the body of knowledge stops. Each is a limit of the practice, not of this case.

For each gap, the full case's studied ground names a shelf of older literature that studied the same shape ([section A.3](case-kuantillion-cloud-full.md#a-3-the-studied-ground)). The case's eight shelves are closed loops, random yield and dual sourcing, capacity expansion, storage theory, lemons and winner-picking, maintenance and replacement, repairables queueing, and multitask incentives. Every mapping below is [argued]; none of those authors wrote about SSDs.

1. **Byproduct supply.** A retirement that is also a delivery, coupled to demand for the same parts, with opposite signs. The paper checks shared drivers within demand and within supply, never across them. See [Second lives](note-second-lives.md). *Neighboring theory:* closed loops treat returns' quantity, quality and timing as decisions. Capacity expansion treats the keep decision as a build-ahead trade with the build already sunk.
2. **Condition as a dimension of supply.** The paper's unit has shape, place and time, not condition. See [Second lives](note-second-lives.md). *Neighboring theory:* maintenance and replacement says fixed-age rules pay only when hazard rises with age. Since SSD hazard tracks age poorly, condition-based rules win. Random yield says yield's distribution, not just its mean, sets safety stock.
3. **Quality that fails after delivery.** The shortage-to-idle frame assumes delivered capacity works. See [Second lives](note-second-lives.md). *Neighboring theory:* maintenance and replacement on shared budgets, where per-asset optima are infeasible together. Repairables queueing on how shortfall depends on mean resupply time.
4. **Exit as a sink.** Selling capacity out of the fleet, into a market the seller moves. See [Second lives](note-second-lives.md). *Neighboring theory:* lemons markets, where unverifiable quality drags price to average. Used-goods markets that survive as discounts and volumes.
5. **The cost of a shape.** No price for the planning cost of one more grade or SKU. It sits beside [Buildings at AI density](note-buildings-at-ai-density.md)'s question of what flexibility costs. *Neighboring theory:* limited flexibility, chained, which the paper already reads across as an analogy. Winner-picking, where headquarters moves a scarce resource to its best internal use.
6. **Wear across two lives.** First-life use spends second-life value nobody prices. *Neighboring theory:* parallel replacement, where faster technical progress shortens life in the current use only.
7. **Stock that gains or loses value while held.** The same gap as [Popcorn Pajamas](case-popcorn-pajamas-practice.md)' components that appreciate. *Neighboring theory:* storage theory's convenience yield, high when stocks are thin and gone in a glut. A caged drive is worth resale plus that yield.
8. **Right total, wrong form factor.** The variance split has no mix term. [Buildings at AI density](note-buildings-at-ai-density.md) proposes one for halls; drives need it too. *Neighboring theory:* capacity expansion's question of what type to build, not only when and how much.

**Where the studied ground already helps.** Four results fill places where the paper is thin. Each mapping is [argued].

- **Thresholds for allocation.** For stock with random demand and random returns, the optimal policy is a few thresholds: repair, buy and scrap levels (Simpson, 1978). The release trigger and the grades take that shape.
- **Two order-up-to levels for spares.** With a cheap slow source and a dear fast one, one level per source captures nearly all the value (Veeraraghavan and Scheller-Wolf, 2008).
- **Holding value as a curve.** Stock in hand earns a convenience yield that is high when cover is thin and vanishes in a glut (Working, 1949). That is the release trigger's logic.
- **Harvest as an alternate source.** Against rare but long disruptions, a second source tends to beat a stockpile (Tomlin, 2006). That is the framing finance already knows.

The incentive shelf adds one more reading. Multitask agency theory predicts that measuring technicians only on ticket speed produces scrapping. It also favors putting measured and unmeasured tasks in different jobs. On that reading, the gap is the missing measure, not the job split. P8 adds the measure.

[Limits](limits.md) lists what the practice as a whole hasn't measured. If you've planned capacity that comes back out of a fleet, the practice would like to hear how you handled it.

## How you'll know the strategy is working

The tests below are this page's, and none has been run. The paper says the same of its own: "the tests of Section 9.2 have not been run" (Section 13).

Each test can fail, and each maps to one of the case's criteria ([section 14.1](case-kuantillion-cloud-full.md#14-1-criteria)).

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

**Report numbers as a set.** The case names eight numbers, each with a denominator [argued]:

- purchases avoided, against the plan of record, under the declared anchor;
- net value per harvested drive, after pipeline cost and yield;
- spares fill rate and repair time, per repair, by platform;
- stranded flash, as a share of installed flash;
- harvest-to-redeploy time and yield, per drive harvested;
- the healthy share, per drive pulled;
- endurance used at harvest, by cohort;
- embodied carbon, per drive redeployed, stating whether reuse displaced a purchase.

Finance keeps score. The paper says so for the unallocated line: "Finance, not planning, should keep the score, or the indicators become self-assessment" (Section 9.3). Read them as a set, because any one rewarded alone gets gamed. The plan's [measures](case-kuantillion-cloud-plan.md#7-measures) give targets and cadence.

**How it fails, and the counter built in.** Each failure mode the case names has a counter somewhere in this strategy, and an early sign to watch.

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

**When something goes wrong** [argued]. A cohort that fails together, or a drive found outside custody, tests trust more than capacity. The response follows from the risk budget: freeze the cohort, draw on the incident bound, re-rank its claims and publish its record to the affected tiers. Resume only after the evidence bar is re-tested. For a custody incident, drive security also runs its own response; the practice's part is the record. The plan's [risk register and playbook](case-kuantillion-cloud-plan.md#10-risk-register-and-incident-playbook) has the steps.

## What would change the answer

**Five findings would change the strategy.**

| If this turns out true | Then |
|---|---|
| Materiality is well under 1% | Drop to spares continuity, and stop there (Section 12, applied here) |
| A graded program with a shared price exists | Allocation and adoption become an audit, not a build |
| Second-life failures beat new drives' rates from year one | Close the workload sink; keep spares and exit |
| Contracts are fully flexible and Path B comes early | The avoided-purchase anchor shrinks; the program shrinks to spares and exit |
| Reuse was declined for complexity | Re-center on redeploying whole hosts |

**The case's eight assumptions, and how each is tested.** The case lists assumptions any answer must test. Each test below is cheap, and most run in the first quarter. The plan's [experiments](case-kuantillion-cloud-plan.md#8-experiments) give owners and dates.

- Replacement cost is the right anchor: compute both anchors per zone.
- Reuse displaces purchases at all: read cancel and push-out terms into mechanism 11.
- The materiality ratio is large enough: the Gate 1 computation.
- Net value stays positive after the pipeline: time-and-motion and yield logs at one site.
- Stranded capacity is recoverable: a reclaim pilot on one pooled tier.
- The host-cost logic holds: the keep sheet for one retiring cohort.
- Spares demand is what failure rates say: re-test pulled drives at one site, and measure fail-in-place's avoided demand.
- Internal prices can carry these values: one cycle of showback.

"The rollout is the measurement" (Section 5.4). The pilot cohort answers the case's most load-bearing question: where second-life hazard crosses the new-drive curve [unmeasured].

**Our seven assumptions, each with a falsifier** [argued]. These are the assumptions this strategy rests on.

| Assumption | Falsifier |
|---|---|
| The harvest behaves like a supply declaration that firms up in stages | Decommission dates show no stage structure; slips are uniform from plan to drain |
| The contract register can settle the anchor fork | The commitments have no readable liability or reschedule terms |
| A forum can rank four sinks with unlike units | Ranked lists are reopened as often as negotiated splits ("Decisions reopened", mechanism 10's indicator) |
| A stated lower-assurance class will be taken up | Uptake stays low after the class's guarantee and evidence are stated |
| Cohort is the right shared driver | Failures correlate more on site or workload than on model, firmware and age |
| Misdiagnosis is bias, not dispersion | The healthy share of pulled drives swings widely with no persistent level |
| The materiality ratio is the right gate | The program is worth running at a low ratio, because one stockout's shadow price dominates (scenario S5) |

**Signposts between the two futures.** The case's signposts are read at the quarterly supply review ([section 8](case-kuantillion-cloud-full.md#8-two-futures-and-the-signposts-between-them)). Each points toward Path A or Path B, and the strategy's levers move with them [argued].

- Toward Path B: contract prices flatten, used prices fall on high-capacity models first, makers' inventory builds, or large operators' resale recovers. The strategy lowers the rate card, arms the release trigger and loosens the resale cap.
- Toward Path A: makers' committed output passes three-quarters, new fab dates slip, or large buyers sign long-term agreements with floors. The strategy weights the capacity anchor, raises last-time-buy cover and keeps pipeline staffing.
- Either way: older, smaller drive models get scarcer, and cold data keeps moving to QLC. Review last-time buys and keep the wear watch on QLC cohorts.

The plan's [signposts to actions](case-kuantillion-cloud-plan.md#9-signposts-to-actions) table pairs each signpost with its action.

**The case's seven scenarios, and where this page answers each.** Each links to the scenario in the full case, then to its answer here.

- **[S1. The shortage ends early](case-kuantillion-cloud-full.md#s1-the-shortage-ends-early).** [P6](#p6-allocate-the-harvest-across-sinks): the release trigger, and the shortage rule, which keeps a spares floor.
- **[S2. A redeployed cohort fails together](case-kuantillion-cloud-full.md#s2-a-redeployed-cohort-fails-together).** [P3](#p3-match-legacy-flash-to-workloads): the cohort cap and the risk budget; and the incident response above.
- **[S3. A data-bearing drive surfaces outside custody](case-kuantillion-cloud-full.md#s3-a-data-bearing-drive-surfaces-outside-custody).** [P1](#p1-one-record-per-drive): reconciliation at every off-host state; and the incident response above.
- **[S4. Decommissions slip while spares demand rises](case-kuantillion-cloud-full.md#s4-decommissions-slip-while-spares-demand-rises).** [P6, the commitment question](#p6-the-commitment-question): the booking rule; and [P4](#p4-size-and-source-legacy-spares): push out, don't cancel.
- **[S5. The commitments prove firm and stockouts persist](case-kuantillion-cloud-full.md#s5-the-commitments-prove-firm-and-stockouts-persist).** [Three prices](#three-prices): the anchor fork and the capacity anchor; and P6's ranking by shadow price.
- **[S6. A rival announces flash reuse at scale](case-kuantillion-cloud-full.md#s6-a-rival-announces-flash-reuse-at-scale).** [P6](#p6-allocate-the-harvest-across-sinks): the program moves its own market.
- **[S7. Low-endurance flash meets write-heavy work](case-kuantillion-cloud-full.md#s7-low-endurance-flash-meets-write-heavy-work).** [P2a](#p2a-the-wear-sub-decision): the wear ratio by cohort. The price across two lives is still a gap ([where the theory runs out](#where-the-theory-runs-out), item 6).

## Where this comes from

Seed paper: Sections 4, 5.1–5.4, 6, 6.1–6.7, 8, 8.2, 9.1–9.3, 10, 10.1–10.4, 11, 12, 13 and 14, and Appendix A. The guide's concept pages: [the coefficient](concept-the-coefficient.md), [three prices](concept-three-prices.md), [demand and declarations](concept-demand-and-declarations.md), [approval and allocation](concept-approval-and-allocation.md), [buffers and reserves](concept-buffers-and-reserves.md), [supply layers and lead times](concept-supply-layers-and-lead-times.md), [commit points](concept-commit-points.md), [the measuring loop](concept-measuring-loop.md) and [the operating mechanisms](concept-operating-mechanisms.md). Also [people](people.md), [principles](principles.md), [settings](settings.md) and [limits](limits.md).

The case: [Case 3](case-kuantillion-cloud-full.md), and its [execution plan](case-kuantillion-cloud-plan.md). Literature: the references the case cites in its studied ground. Every number is illustrative unless the case tags it otherwise; the arithmetic is reproducible on request.
