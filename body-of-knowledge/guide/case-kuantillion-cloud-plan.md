---
title: Kuantillion Cloud: the execution plan
short: The practice's answer to Case 3, turned into a plan a program lead can run: who decides what, the first 90 days, seven decision gates (G0–G6), the standing cadence, the rules to sign, the measures, the experiments and the playbook.
kind: case
order: 3.3
cadence: all
altitude: all
levels: practicing, leading, capital, supply
seed: 4, 5.2, 5.3, 5.4, 6, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 8.2, 9.1, 9.2, 9.3, 10, 10.1, 10.2, 10.3, 10.4, 12, 13, 14, Appendix A
---

*Kuantillion Cloud is a fictional company. Any resemblance to real companies reflects problems the industry shares.*

This page is the execution plan for [Case 3](case-kuantillion-cloud.md). [The strategy page](case-kuantillion-cloud-practice.md) says why each move is right. This page says who does it, in what order, and how you'll know it worked.

**How to read the labels.** A quote with a Section is the seed paper's own text. Rules this plan adds are marked [argued]. Quantities nobody has published are [unmeasured]. Every number is illustrative unless the case tags it otherwise. Every owner and date is a proposal, to be adjusted to the teams you find. The seed paper is "a practitioner synthesis, not a model, and untested" (Abstract), and so is this plan.

## 1. What this plan delivers, and the decision it serves

**The situation.** Kuantillion Cloud runs a hyperscale fleet. It retires millions of components a year, over 3 million of them drives in 2024. It also holds older flash idle inside running machines. New enterprise flash now costs three to four times last year's price, and next year's supply is largely pledged. The [full case](case-kuantillion-cloud-full.md) sets this out.

**The decision this plan serves.** Should Kuantillion Cloud run a program for its older flash, and at what size? If yes, how should it split each usable drive among four sinks? Those sinks are workloads, repair spares, upgrades and builds, and exit through resale or recycling.

**What the plan delivers, in order.**

1. Within one week, an answer to whether a program already exists, or was tried and dropped.
2. Within 30 days, the problem's class: spares continuity, mixed, or supply strategy. Beside it, the value anchor read from the flash contracts.
3. Within 90 days, the rules signed in advance, spares and the reverse pipeline staffed to a signed plan, and allocation running in a standing [forum](/glossary/#term-forum).
4. Over the following year, a pilot of reused flash in tiers that absorb device loss, and experiments that test the case's eight stated assumptions.

**What it rests on.** Five ideas from the seed paper carry it.

- A retirement is a dated supply step that slips (Section 6.7). Here it also delivers drives.
- Each pricing question gets its own price ([three prices](concept-three-prices.md); Section 4).
- An approval is not an allocation ([approval and allocation](concept-approval-and-allocation.md); Section 6.1).
- Every number has an owner, and every gap is named ([principles](principles.md)).
- [Turn-up](/glossary/#term-turn-up) is a staffed rate (Section 6.2). Applied here, so is the reverse pipeline.

**What it doesn't do.** It doesn't settle questions the practice can't yet answer. The [Second lives](note-second-lives.md) working note holds those: supply that is a byproduct, the condition of a drive as a dimension of supply, and exit as a sink.

## 2. Roles and decision rights

The planner sits in the middle, "usually owning no capacity and no budget" (Section 10). So every change below is a proposal to the forum and finance. Its standing comes, in the paper's experience, "from the number and the team's own signature" (Section 9.1). See [people](people.md) for how that works without a budget.

**The groups.** This table extends the case's team map. The first nine rows are the case's; the rest are groups the case names elsewhere, or that this plan defines [argued].

| Group | Role in this plan |
|---|---|
| Capacity planning and forecasting ("planning") | Runs the program as broker; keeps the drive record and the [fulfillment](/glossary/#term-fulfillment) ledger; runs the forum |
| Fleet provisioning | Supply answers for harvest; state and location fields; systems of record |
| Flash platform engineering | Condition, qualification and firmware fields; the wear price; grades |
| Drive security engineering | Erasure and custody |
| Machine-health engineering | Diagnosis before a pull; the reseat-and-re-test step |
| Data-center operations | Change windows; physical work |
| Spares planning | The spares pool and its ratio; last-time buys |
| Reverse logistics and value recovery | The pipeline: harvest, test, erase, ship; exit |
| Lifecycle transitions | Retirement dates and the keep, redeploy or harvest sheet |
| Storage systems and schedulers | The reused-flash class; the stranded line |
| The solver team, inside capacity planning | Counts solver categories; tests whether the solvers reach physical devices |
| Fleet shaping and hardware engineering | Build and upgrade programs; physical fit, protocol and backplane |
| Supply chain | Owns the memory-reclaim program, the nearest precedent; vendor terms |
| Tier owners | The owners of the workloads and storage tiers that take reused flash: the case's resource managers. They are "product" in the seed paper's terms |
| Reliability engineering | Cohort caps per failure domain |
| Finance | Keeps score; signs the rules that say who pays |

"Supply" in the tables below means fleet provisioning and spares planning together, the groups that answer for drives.

**Decision rights, RACI-style.** R does the work, A decides, S signs, C is consulted. **Change** marks a move from today's owner in the case.

| Decision | R | A | S | C | Change |
|---|---|---|---|---|---|
| P1 Drive record | Each field's performer | Planning keeps the record | Field owners | Drive security | **Change:** unowned today |
| P2 Keep, redeploy or harvest | Lifecycle transitions | Lifecycle transitions with fleet provisioning | Finance, for every keep past plan | The forum, for drive values | **Change:** drive values a required input |
| P2a Wear price | Flash platform engineering | Flash platform engineering | Finance | Storage systems | **Change:** unowned today |
| P3 Reused-flash class | Storage systems | Storage systems | Each tier owner accepts, with its evidence bar | Reliability engineering | **Change:** acceptance becomes signed |
| Stranded line | Storage systems | Storage systems, as service owner | Finance keeps score | Fleet provisioning; planning | **Change:** new line |
| P4 Spares ratio | Spares planning | Finance and tier owners (product, in the seed's terms) jointly | Finance and tier owners | Supply, for idle cost and liability terms | **Change:** signed in advance |
| P5 Build programs | Fleet shaping and hardware engineering | Same, as declaring team | Declaring team signs the [change bands](/glossary/#term-change-band) | Supply and planning set the bands | **Change:** programs declared |
| P6 Allocation | Planning | The forum, run by planning | Finance, on the rate card | Every sink | **Change:** unowned today |
| P6 Commitment | Fleet provisioning | Fleet provisioning, answering each claim with a dated commit or a named gap | Finance agrees who pays if harvest fails | Planning | **Change:** never firm before supply answers |
| P7 Pipeline rate | Reverse logistics with data-center operations | Reverse logistics | Drive security, per erasure | Spares planning | **Change:** staffed to a signed plan |
| P8 Landing rule and metrics | Planning proposes | The forum ratifies | Finance signs | Every group | **Change:** from leadership in general to the forum |
| Risk budget | Reliability engineering | Reliability engineering, for the cohort cap | Finance, for the incident bound; tier owners, for their bars | Planning | **Change:** new |

Three rights come straight from the seed paper's list (Section 9.2):

- The shortage-to-idle ratios belong to "finance and product jointly; supply provides the cost of idle and the liability terms".
- Change bands belong to "supply and planning, signed by the declaring team, with finance agreeing who pays for a change outside them".
- "Reliability buffers: reliability engineering".

Assigning them to these groups is this plan's reading [argued]. The ratio and the bands are separate rights, signed separately.

**Why storage systems own the stranded line.** The case's team map gives stranding to fleet provisioning. Mechanism 4's owner is the "Service owner (not necessarily the cause)" (Section 9.2), and the storage systems serve the stranded flash. So they own the line, and fleet provisioning is consulted [argued].

**The landing rule, one statement used everywhere** [argued]. Planning proposes it, finance signs it, and the forum ratifies it.

**Technical-gate owners.** Each of the case's eleven technical gates has one owner [argued]:

- fleet shaping and hardware engineering: physical fit, and protocol and backplane;
- flash platform engineering: qualification, firmware and provenance, observability, and condition;
- data-center operations: change windows;
- fleet provisioning: systems of record;
- planning, with the solver team: systems complexity;
- drive security engineering: sanitization;
- finance, with legal and tax: jurisdiction, for any drive that crosses a legal entity or a border.

**Seams.** Hosts and harvest sit on seam 3, between planning and supply. Keeping hosts, and the split between capital and operating budgets, sit on seam 2, between planning and finance. Grades and wear sit on seam 1, between product and platform (Section 10.1). Mapping them this way is this plan's reading.

## 3. The first 30, 60 and 90 days

Day 1 is the day the program lead is named. Each action has one owner and one output. Owners and days are proposals [argued].

### Days 1–5: does a program already exist?

The public record is silent, and the case reads that silence three ways. A program may run quietly, one may have been tried and dropped, or none exists. Test all three before you design anything.

Talk to the owners one to one, before any form goes out. Section 9.3 gives that advice for demand intake; this plan borrows it. Sort what you hear into "a fact", "an assumption" or "an ask" (Section 10.4).

| Day | Action | Owner | Output |
|---|---|---|---|
| 1–3 | Ask what happens to a pulled SSD today, site by site | Planning | A one-page flow, each step owned |
| 1–3 | Ask whether flash reuse was ever evaluated and declined | Planning | The record, read as a [decision note](/glossary/#term-decision-note) |
| 2–4 | Ask whether last-time buys are made for legacy drive models, and by whom | Planning, with spares planning | A list of models and windows |
| 2–4 | Ask which gates the memory-reclaim program crossed | Planning, with supply chain | Its gate history |
| 5 | Record one of the three readings | Planning | A decision note: "what was known, when, by whom, and what would have changed it" (Section 6.5) |

**Go or stop.**

- If a program runs, audit it against the [thirteen mechanisms](concept-operating-mechanisms.md) and add only what's missing.
- If a decline still holds at today's prices, stop. The center then moves to redeploying whole hosts.
- If neither, go to G1.

### Days 6–30: size it and read the contracts

| By day | Action | Owner | Output |
|---|---|---|---|
| 10 | Pull the harvest log, split by SSD and disk, and by cohort | Reverse logistics | Harvest TB by quarter and cohort |
| 10 | Pull flash deployed, in TB, by quarter | Fleet provisioning, with finance | The materiality denominator |
| 10 | Pull the decommission schedule with stage dates | Lifecycle transitions | Retirements, staged |
| 14 | Compute the materiality ratio and the class (experiment 3) | Planning | The class, from the table under G1 |
| 20 | Read every flash contract's cancel, push-out and volume terms into the supply register (experiment 2) | Fleet provisioning, with finance | Mechanism 11's contract lines |
| 20 | Count zone stockouts that name local SSD | Planning | The capacity anchor's inputs |
| 20 | Measure flash use by resource and site | Storage systems | The stranded stock, sized |
| 25 | Compute both value anchors per zone (experiment 1) | Planning, with finance | The anchor, declared for G1 |
| 25 | Re-test a sample of pulled drives at one site (experiment 7 starts) | Machine-health engineering | A first healthy share |
| 30 | Charter the forum for two rules: it agrees the shortage rule and ratifies the landing rule | Planning | A charter; both rules drafted |
| 30 | G1 decision | Planning and finance | Go or stop, with a decision note |

### Days 31–60: counter-arguments and the record

| By day | Action | Owner | Output |
|---|---|---|---|
| 40 | Count the qualification backlog and solver categories | Planning, with the solver team | A tier cap |
| 40 | Read decommission records by branch: kept, redeployed whole, harvested | Lifecycle transitions | A test for redeploying whole |
| 45 | Agree the shortage rule in the forum; sign the landing rule | The forum, for the shortage rule; for the landing rule, planning proposes, finance signs, the forum ratifies | Both rules in force |
| 50 | Name an owner for each drive-record field, off-host fields first | Planning | The record's field list, owned |
| 55 | Fill the keep, redeploy or harvest sheet for one retiring cohort (experiment 6) | Lifecycle transitions, with finance | One cohort decided |
| 60 | G2 and G3 decisions | Planning | Exit criteria met, or named gaps |

### Days 61–90: spares and the pipeline first

| By day | Action | Owner | Output |
|---|---|---|---|
| 70 | Sign the spares shortage-to-idle ratio per platform | Finance and tier owners | A signed ratio |
| 70 | Add or confirm the triage sequence before any SSD pull: slot check, cable swap, reboot, re-test | Machine-health engineering | The sequence confirmed, or live at two sites |
| 75 | Staff the pipeline to the median of expected retirements, with surge crews on contract | Reverse logistics | A staffed rate and booked slots |
| 80 | Put every planned decommission on the supply register as a dated step, both ways | Fleet provisioning | Hosts out, drives in |
| 85 | Set the risk budget's three parts | Reliability engineering; finance; tier owners | Cap, bar and bound signed |
| 90 | The forum ranks its first harvest; supply answers each claim | The forum; fleet provisioning | First ledger lines, each pegged |

**Why spares go first.** Spares are the harvest's most predictable claim and its value floor. The paper's order of change is "prove fulfillment first" (Section 10.4); this plan applies it to reused drives.

## 4. The gates

This plan uses "gate" in two senses. The program's seven **decision gates**, G0 to G6, are the steps of this plan. The case's eleven **technical gates** are the tests every drive must pass before reuse, such as fit, qualification, sanitization and jurisdiction ([full case, section 6](case-kuantillion-cloud-full.md#6-supply-the-gates)). This section is about the decision gates.

Each decision gate opens only on the evidence in its row. The paper's rule for declarations is that "promotion needs the evidence in its row" (Section 5.4). This plan applies it to the program's own gates [argued]. Each artifact names its mechanism, linked to [the operating mechanisms](concept-operating-mechanisms.md).

### G0: existence test

- **When.** Days 1–5.
- **Purpose.** Don't build what exists, or what was rightly declined.
- **Entry evidence.** A named program lead.
- **Work.** The days 1–5 interviews.
- **Exit criteria.** One of three readings recorded: exists, declined, or absent.
- **Artifacts.** A decision note.
- **Owner.** Planning.
- **Go or stop.** Go if absent, or if a decline fails today's prices. Stop if a decline still holds. If a program exists, audit it against the thirteen mechanisms. Then either enter G1 with that program as the base, or stop with a decision note.

### G1: size and anchor

- **When.** Day 30.
- **Purpose.** Know the problem's class and its value anchor before building anything. "Below materiality, the mechanisms cost more than they return" (Section 13).
- **Entry evidence.** G0 reads absent, or a decline that no longer holds.
- **Work.**
  - The materiality ratio.
  - The stranded stock, sized on its own.
  - The contracts read into the supply register.
  - The capacity anchor's inputs.
- **Exit criteria.**
  - The class chosen.
  - The anchor declared.
  - The forum chartered for two rules: it agrees the shortage rule, and it ratifies the landing rule that planning proposes and finance signs.
- **Artifacts.**
  - Contract lines on the supply plan of record ([mechanism 11](concept-operating-mechanisms.md)).
  - The stranded line, owned ([mechanism 4](concept-operating-mechanisms.md)).
  - A decision note.
- **Owner.** Planning, with finance.
- **Class table** [argued]. The ratio is the SSD harvest, before yield, divided by a year's new flash. The case bounds it at about 0.2–30%, with central cells near 1–10% (illustrative).

| Ratio | Class | What runs |
|---|---|---|
| Under 1% | Spares continuity | A minimum drive record, spares, the pipeline and exit |
| 1–5% | Mixed | The above, plus allocation as a monthly forum line and one workload pilot |
| Over 5% | Supply strategy | Every decision gate below |

- **Stranded stock, beside it.** The ratio doesn't gate the stranded stock, which the case says is likely larger than the flow. Illustratively, recovering the gap between 54% and 19% stranding on about 100 EB installed frees about 35 EB, once.
- **Go or stop.** Go at the class's scope. "Stop at the step where the next one costs more than it saves" (Section 12). The paper writes that for mid-sized companies; this plan applies it to the program's own steps.

### G2: counter-arguments

- **When.** Day 60.
- **Purpose.** Test the two hypotheses that could move the center: the grading tax, and redeploying whole hosts.
- **Entry evidence.** G1 says go.
- **Work.**
  - Count the qualification backlog and solver categories.
  - Read decommission records by branch.
  - Check whether the solvers reach physical devices.
- **Exit criteria.**
  - A tier cap.
  - A test for redeploying whole.
- **Artifacts.**
  - The tier cap, as a decision note.
  - The keep, redeploy or harvest sheet's test.
- **Owner.** Planning, with the solver team and lifecycle transitions.
- **Go or stop.** If the systems can carry no more than one grade, run spares and exit only. If redeploying whole usually wins, re-center there.

### G3: the drive record

- **When.** Day 60, decided with G2.
- **Purpose.** One record every decision can cite.
- **Entry evidence.** G2 exit.
- **Work.**
  - Name an owner for each field, off-host fields first.
  - Define each handoff.
  - Reconcile the record with the erasure log.
- **Exit criteria.**
  - Every field owned.
  - Each off-host state defined, with who accepts it.
- **Artifacts.** The drive record (the templates below give its fields). The fulfillment ledger, run backwards ([mechanism 5](concept-operating-mechanisms.md)).
- **Owner.** Planning keeps it; each field's performer owns its entry.
- **Go or stop.** Don't move a drive between sinks on a record with an open reconciliation gap.

### G4: hosts and allocation, spares and pipeline first

- **When.** Day 90.
- **Purpose.** Clear the coupled decisions together: when hosts go, how harvest is split, how many spares, how fast the pipeline.
- **Entry evidence.** G3 exit.
- **Work.**
  - Decommissions on the register.
  - The spares ratio signed.
  - The pipeline staffed.
  - The forum ranking harvest.
  - The risk budget set.
- **Exit criteria.**
  - Every harvest claim answered with a dated commit or a [named gap](/glossary/#term-named-gap).
  - Each tested drive pegged to one claim.
- **Artifacts.**
  - Ledger lines ([mechanism 5](concept-operating-mechanisms.md)).
  - Supply answers ([mechanism 11](concept-operating-mechanisms.md)).
  - The [commit-point map](concept-commit-points.md) for last-time buys and decommissions ([mechanism 13](concept-operating-mechanisms.md)).
  - The forum's decision log ([mechanism 10](concept-operating-mechanisms.md)).
- **Owner.** The forum, run by planning; fleet provisioning for supply answers.
- **Go or stop.** Hold G5 until spares fill holds at the signed cover point for one quarter.

### G5: workloads and builds

- **When.** No earlier than day 180: one quarter of spares fill after G4.
- **Purpose.** Offer reused flash as its own class, and declare build programs.
- **Entry evidence.** G4 exit, and the tier cap from G2.
- **Work.**
  - A pilot cohort in caches and replicated tiers.
  - Build programs declared, with stages and bands.
- **Exit criteria.**
  - A reused-flash class offered, with its guarantee and evidence bar.
  - A substitution table.
- **Artifacts.**
  - Declaration entries for builds ([mechanism 12](concept-operating-mechanisms.md)).
  - The class on the rate card ([mechanism 3](concept-operating-mechanisms.md)).
- **Owner.** Storage systems; fleet shaping and hardware engineering.
- **Go or stop.** Stop widening the class if the pilot's failure rate breaks its evidence bar.

### G6: the wear link

- **When.** After the pilot's first second-life outcomes; no date is set.
- **Purpose.** Price first-life wear against second-life value.
- **Entry evidence.** G5's pilot gives a second-life value to price against.
- **Work.**
  - Register the wear price, owned and versioned.
  - Report endurance used by cohort quarterly.
- **Exit criteria.** The wear price on the rate card with an effective date.
- **Artifacts.** The coefficient register and versioned rate card ([mechanism 3](concept-operating-mechanisms.md)).
- **Owner.** Flash platform engineering, with finance.
- **Go or stop.** Change first-life placement only where endurance used at harvest is shown to change second-life value.

**Why the wear link goes last.** The case's own best guess is that placement shapes the harvest little today, except in write-heavy and low-endurance cohorts.

## 5. Standing cadence

The cycles nest, slowest outside: "Each cycle commits only what its lead time forces" (Section 9.1). See [annual](stage-annual.md), [quarterly](stage-quarterly.md), [monthly](stage-monthly.md), [weekly](stage-weekly.md) and [post-launch](stage-post-launch.md).

| Cycle | Forum | Inputs | Outputs | Decisions |
|---|---|---|---|---|
| Weekly | Planning's working session | Ledger lines; reconciliation gaps; cage aging; repair tickets | Pegging and reconciliation, run continuously and reviewed weekly; brokered trades, logged | Which tested drive goes where |
| Monthly | The forum | Supply answers; harvest by stage; spares fill | Re-ranked claims; updated commits and named gaps | The ranking; any override, logged with what moved down |
| Quarterly | The supply review | Harvest forecast by stage and cohort; decommission slips; qualification slots; endurance by cohort; the signposts | Rate card version; release trigger tests; last-time-buy commit points | Rate card changes; releases; last-time buys |
| Annual | The forum, with finance | Materiality; last year's scores; vendor terms | Signed ratios, bands, landing and shortage rules; the charter overlay | Program scope; reuse commitment in the annual capacity agreement |
| After each pilot | The forum | Second-life outcomes | Updated yield, hazard and evidence bar | Widen, hold or close the class |

"In my experience, the step most often missing is the supply review" (Section 9.1). Here it is the main meeting, because supply is a byproduct of other decisions [argued]. A vendor's end-of-life notice triggers an off-cycle review.

**Annual signatures, kept separate.**

- Finance and tier owners sign the spares ratio.
- Supply and planning set the harvest change bands, and each declaring sink signs them.
- Planning proposes the landing rule, finance signs it and the forum ratifies it (mechanism 8).

**The charter overlay.** "Once a year, lay the charters over the chain that delivers the product, end to end, and name an owner for every gap" (Section 10.2).

## 6. Rules agreed in advance

"A rule agreed in advance is a contract; one proposed after the savings appear is a request" (Section 9.3). Each rule below is written so the forum can sign it. Each is this plan's [argued], built on the seed text it cites.

**Booking rule** [argued]. Applies to every planned retirement's harvest.
- Book harvest firm only to the stage record's lower quantile until the drives are drained.
- Then book to the stage record's middle.
- Above the firm slice, hold [options](/glossary/#term-option) on new purchase. Above that, name a [bridge](/glossary/#term-bridge) with an owner.
- Label harvest *uncommitted* until supply answers with a dated commit or a named gap.
- Basis: "Until then, label it *uncommitted*, a firmness class of its own" (Section 6.1); the [firm, flexible and named](/glossary/#term-firm-flexible-named) split (Section 8.2).
- **Working estimate:** about 50–70% of scheduled retirements land on their date [argued]. Technical-gate yield is about 80% for observable cohorts [argued; the real yield is unmeasured]. So expect about 40–56% of scheduled drives on the date. For a batch of 40,000 drives (illustrative), that is about 16,000–22,400.

**Ranking unit** [argued]. The forum ranks each claim at the cost of that sink's next-best source on that date:

| Sink | Next-best source, and its cost |
|---|---|
| Spares | The bridge for a missed repair, from Section 6.4's bridge table |
| Workloads | The capacity value in stockout zones; elsewhere, the cost of new flash |
| Builds and upgrades | The cost of the new machine the drives displace |
| Exit | Net resale, after the discount for unseen history and the pipeline's cost |

Under scarcity this approximates the shadow price, "What one more unit of the binding resource is worth; zero for slack" (Section 4). Score the rule after two cycles.

**Three-grade starter rule** [argued]. Revisit after the pilot.

| Grade | Rule | Where it can go |
|---|---|---|
| 1 | Observable cohort; safe firmware; under the wear and error thresholds | Durable tiers, once the evidence bar is met |
| 2 | Observable, but outside one threshold, or within a year of a known firmware fault age | Loss-absorbing tiers and spares only |
| 3 | Blind, or failing any threshold | Exit or destroy |

The thresholds are [unmeasured]. For example, a wear threshold might be half of rated endurance used (illustrative). Three grades fit inside a tier cap of three or more. At a cap of two, merge grades 1 and 2 into one reusable grade, limited to loss-absorbing tiers and spares, and keep grade 3 for exit [argued]. At a cap of one, G2's rule governs: run spares and exit only.

**Transfer price, with showback first** [argued].
- The price is set on usable, yield-adjusted capacity: pipeline cost per usable TB, plus carry, plus a risk loading drawn from the incident bound.
- For example, a 2 TB drive costing $40 to process at 80% yield is $25 per usable TB. Add $2 of carry and $5 of risk loading, and it is about $32 per TB (illustrative).
- Show it back for a full cycle before anyone is billed: "Move to attributed cost only after a full cycle of showback" (Section 10.4).
- The forum ranks on next-best-source value, not on this price.

**Release trigger** [argued]. Write it before you hold. The paper's option rule is "write down the trigger for converting options into orders" (Section 6.2).
- Release a cohort's held drives when their next-best-source value falls below net resale for two quarterly price prints running.
- Or release when a drive's shelf time passes two re-test cycles with no claim.
- Release in steps, under a cap on resale per model per quarter.

**Landing rule** [argued].
- Shares are booked as savings, returned to the recoverer and held centrally. That is the split Section 9.3 offers as an example.
- The pipeline counts as a recoverer, so it gets credit for part of the capital it saves.
- Planning proposes it, finance signs it and the forum ratifies it (mechanism 8), before any recovery is counted.

**Shortage rule** [argued]. "Agree it in the forum beforehand; supply carries it out. Written during the shortage, it's a negotiation. And don't split a shortage pro rata" (Section 9.3). Who goes short, last to first:
1. Spares for platforms with no other source go short last, because a missed repair has no bridge.
2. Spares for platforms that new drives can still serve.
3. Claims backed by a signed build program.
4. Workload claims, ranked by next-best-source value.
5. Exit goes short first.

**Who pays when harvest fails to arrive** [argued]. Finance agrees it in advance, as the paper has finance agree "who pays for a change outside" the bands (Section 9.2).

## 7. Measures

Finance keeps score: "Finance, not planning, should keep the score, or the indicators become self-assessment" (Section 9.3). Read the measures as a set, because "any indicator in Section 9.2 can be gamed once rewarded" (Section 13).

Targets are this plan's proposals [argued]. None of these tests has been run.

| Measure | Denominator | Target | Test that can fail |
|---|---|---|---|
| Purchases avoided | Per TB in the plan of record, under the declared anchor | Rises while stockouts last | Reported without the anchor, or with no displaced purchase |
| Net value per harvested drive | Per drive harvested, after pipeline cost and yield | Positive by cohort | Negative for a cohort two quarters running |
| Spares fill rate | Per repair, by platform | At or above the signed cover point | Fill below cover while another sink holds idle harvest |
| Time to repair, old platforms | Per repair | Not rising | Rising as harvest is diverted elsewhere |
| Stranded flash | Share of installed flash | Falls after the reclaim pilot | Flat after pooling |
| Harvest-to-redeploy time | Per drive harvested | Falls quarter on quarter | Harvested-but-not-graded drives aging |
| Yield | Per drive harvested, by cohort and gate | Known by cohort | Unknown for any cohort in the pilot |
| Healthy share of pulls | Per drive pulled, by site | Known by site, then falling where triage was missing | Unknown after day 90, or no change where triage was added |
| Endurance used at harvest | Per drive, by cohort | Known by cohort | Missing for write-heavy cohorts |
| Embodied carbon preserved | Per drive redeployed | Reported with its additionality | Claimed where no purchase was displaced |
| Harvest promised against actual | Per retirement, by stage | The gap narrows | No narrowing after two cycles |
| Last-time buys after their commit point | Per last-time buy | Zero | Any order placed late |
| Bridges for spares | Per platform cohort per year | About one in five at 80% cover | Far fewer two years running, or far more |
| Reconciliation gaps | Per off-host state change | Zero, held | Any gap that persists |

**Two of the tests follow the paper's own.**
- For mechanism 11: "the gap between promised and actual delivery dates narrows" (Section 9.2).
- For mechanism 13: "fewer orders are placed after their commit point, and their bridge premiums shrink" (Section 9.2).

**The bridge count is an analogy.** At 80% cover, "about one launch in five should need a bridge at that layer" (Section 10.2). The paper calls this "an analogy, not a result" (Section 10.2). Here a platform cohort stands in for a launch. For example, 20 platform cohorts should need about four bridges a year (illustrative).

## 8. Experiments

One experiment per stated assumption in the case. Each has an owner, a date in program days (the same clock as section 3), a method, a falsifier and the decision it unlocks. All are proposals [argued]. "The rollout is the measurement" (Section 5.4).

| # | Assumption | Owner | By day | Method | Falsifier | Unlocks |
|---|---|---|---|---|---|---|
| 1 | Replacement cost is the right value anchor | Planning, with finance | 25 | Compute both anchors per zone from stockout logs and contract terms | The capacity anchor passes replacement cost in most stockout zones | Which price ranks workload claims |
| 2 | Reuse displaces purchases at all | Fleet provisioning, with finance | 20 | Read cancel, push-out and volume terms into mechanism 11 | No contract allows volume or timing to move | Whether purchases avoided can be claimed |
| 3 | The materiality ratio is large enough to matter | Planning | 14 | Harvest TB ÷ new flash TB, by quarter | Ratio well under 1% | G1 |
| 4 | Net value stays positive after the pipeline | Reverse logistics | 120 | Time-and-motion and yield logs at one site, one cohort | Net value below zero for the cohort's drive class | Pipeline scope by drive class |
| 5 | Stranded capacity is recoverable at reasonable cost | Storage systems | 180 | Reclaim and small-group pooling on one tier | Stranded share barely moves, or pooling costs more than it frees | Whether the stranded line gets a program |
| 6 | The host-cost logic holds | Lifecycle transitions, with finance | 55 | The keep, redeploy or harvest sheet for one retiring cohort | Drive value, not host cost, decides the branch | How retirement dates are set |
| 7 | Spares demand is what failure rates say | Machine-health engineering, with spares planning | 25–90 | Re-test every pulled drive at two sites; log fail-in-place; publish the healthy share | Under 5% of pulled drives test healthy (illustrative threshold) | Whether the pool is sized on pulls or true failures |
| 8 | Internal prices can carry these values | Planning, with finance | 91–180 | One full cycle of showback | Decisions reopened as often as under negotiation | Whether to bill |

**What experiment 7 measures.** At the case's peer (Xu et al. 2019), triage resolved 34.4% of SSD tickets before any swap, and only 31.2% of tickets ended in a swap. So the peer's healthy share of pulled drives is unknown, and so is Kuantillion Cloud's [unmeasured]. Analogies only: 43% of returned hard drives showed no fault (Schroeder and Gibson 2007). About half of swapped SSDs at one operator never returned to service (Alter et al. 2019). Up to 1.5 times true failures is a bound for a site with no triage at all.

**The capacity anchor, as a formula.** Nothing public gives it an input [unmeasured]. So experiment 1 fills a formula:

*Capacity value per TB = value of a short TB-month × months filled before new supply × share of those months with a real stockout.* [argued]

For example, if a short TB-month is worth $40 (illustrative), and 12 months follow, then 25% filled gives $120 per TB and 75% gives $360. At 75%, the capacity anchor passes the case's $192 floor once a TB-month is worth about $21. It passes the $636 ceiling at about $71.

**The pilot cohort.** It carries the case's most load-bearing question: where second-life hazard crosses the new-drive curve [unmeasured].
- Place it in caches and replicated tiers, which absorb device loss by design.
- Spread it across failure domains.
- Track it by power-on hours.

With no reference class, the paper's rule applies: "The planner can only bound it, phase it and buy options" (Section 13).

## 9. Signposts to actions

The case names public signposts between two futures. Path A stays tight through 2028; Path B eases from late 2027. Read them at the quarterly supply review. Each action is this plan's [argued].

| Signpost | Action |
|---|---|
| Contract prices flatten two quarters running | Lower the rate card; arm the release trigger |
| Used prices fall, high-capacity models first | Run the release trigger's price test |
| Makers' committed output passes three-quarters | Raise last-time-buy cover |
| New fab dates slip | Hold; keep Path A staffing |
| Large buyers sign new long-term agreements with floors | Treat contracts as firm; weight the capacity anchor |
| Large operators' resale volumes recover | Count it as Path B evidence; loosen the resale cap |
| Makers' inventory builds; spot falls below contract | Shorten holding; prefer exit for grade 2 drives without a claim |
| Capex guidance is trimmed or shifts away from storage | Re-test materiality |
| PC drive configurations are restored | Path B evidence; review workload pricing |
| Small, older drive models get scarcer | Review last-time buys |
| Disk stays allocated, and cold data keeps moving to QLC | Path A evidence; keep the wear watch on QLC cohorts |

## 10. Risk register and incident playbook

**Risk register.** Each risk has a counter, an early sign and an owner [argued]. The risks are the case's failure modes.

| Risk | Counter | Early sign | Owner |
|---|---|---|---|
| Placement-only program | Spares first; one ranked list | Repair times on old platforms | The forum |
| Keep everything | Keep priced at avoidable carry; finance signs | Cost per useful TB on old cohorts | Lifecycle transitions |
| Holding past the option's decay | The written release trigger | Drives past re-test date | Reverse logistics |
| Phantom supply | Booked only once supply answers; pegging | Commit-to-deliver gaps | Fleet provisioning |
| Second-class capacity | A stated class; a challenge channel | Asks naming new hardware | Storage systems |
| Misdiagnosis drain | Triage before any pull; bias corrected at intake | Healthy share of pulls | Machine-health engineering |
| Shape sprawl | Three grades inside the tier cap | Solver categories growing | Planning |
| Correlated concentration | Cohort cap per failure domain | Same-cohort racks | Reliability engineering |
| Firmware time bombs | Firmware baseline as a gate | Unpatched redeployed drives | Flash platform engineering |
| Blind spots | Blind cohorts to loss-absorbing tiers or exit | Missing health fields | Flash platform engineering |
| Sanitization bottleneck | A staffed rate; one signer per drive | Queue age | Drive security engineering |
| Custody incident | Reconciliation at every off-host state | Any record–log gap | Drive security engineering |
| Incentive drift | Landing rule; a second technician metric | Reuse at pressured sites | Planning |
| Wear spent blindly | Endurance by cohort, quarterly | Endurance at harvest | Flash platform engineering |
| Fighting the last shortage | Quarterly rate card; release trigger | Contract prices flattening | The forum |

**The cohort cap.** Name each cohort as a shared driver: "Name the driver; don't infer independence from a low measured correlation" (Section 6.6). Cap a cohort's share of any failure domain [argued]. For example, if a domain holds 2,000 drives, a 10% cap is 200 (illustrative).

**The risk budget**, set at G4 [argued]:
1. A cohort cap per failure domain, set by reliability engineering.
2. An evidence bar per tier, rising only with scored outcomes. Caches start lower, durable tiers higher.
3. An incident cost bound, signed by finance before volume grows.

**Incident playbook: a redeployed cohort fails together (scenario S2)** [argued].

| Step | Action | Owner | Within |
|---|---|---|---|
| 1 | Freeze redeployment of the affected cohort | Planning | Hours |
| 2 | Draw on the incident bound for bridges | Finance | One day |
| 3 | Re-rank the cohort's claims in the forum | The forum | One week |
| 4 | Publish the cohort's record to the affected tiers, through the challenge channel | Planning | One week |
| 5 | Check the firmware baseline and power-on hours for a shared cause | Flash platform engineering | One week |
| 6 | Re-test the evidence bar before you resume | Reliability engineering | Before resuming |

The challenge channel follows the paper: "A consumer who can challenge a coefficient, and sometimes wins, trusts the rest of the bill" (Section 10.4).

**Incident playbook: a data-bearing drive surfaces outside custody (scenario S3)** [argued].

| Step | Action | Owner | Within |
|---|---|---|---|
| 1 | Hand the incident to drive security's own response | Drive security engineering | Hours |
| 2 | Freeze all moves out of custody for the affected batch | Reverse logistics | Hours |
| 3 | Reconcile the drive record against the erasure log for the batch | Planning, with drive security | Two days |
| 4 | Find the off-host state where the gap opened, and fix its handoff definition | Planning | One week |
| 5 | Resume only when every drive in the batch reconciles | Drive security engineering | Before resuming |

Proving erasure is a security discipline. The practice's part is the record.

## 11. Templates

Short field lists for the artifacts this plan produces. Each follows a seed mechanism; the drive-specific fields are this plan's [argued].

**Drive record** (mechanism 5, run backwards)
- Drive ID; model; capacity; interface; form factor
- Firmware version; safe version obtainable (yes or no)
- Health: wear, spare blocks, media errors, latency history, retention margin, capacitor health
- Power-on hours
- State: in service → harvested → erased → in test → available → spare or placed; or out of custody (the erase-first order of the storage policy)
- Location; host platform; cohort
- Grade; costing basis; regraded SKU
- Reuse eligibility: free, constrained or forbidden
- Erasure record, reconciled at each state change
- Field owner, per field

**Declaration entry** (mechanism 12; [declarations](concept-demand-and-declarations.md))
- Owner; driver; [stage](/glossary/#term-stage)
- Size and date ranges
- Change bands per stage, with who signed
- Transient and persistent shapes
- Shared drivers, including cohort
- Record: declared against actual, by stage

**Commit-point map line** (mechanism 13; [commit points](concept-commit-points.md))
- Layer: last-time buy, decommission, qualification slot, pipeline rate
- [Usual and cautious lead time](/glossary/#term-usual-and-cautious-lead-time)
- [Need date](/glossary/#term-need-date); [commit point](/glossary/#term-commit-point)
- Usual stage by then
- Instrument: order, option, bridge
- Cost to change shape after commit

**Supply answer** (mechanism 11; [supply's answer](/glossary/#term-supplys-answer))
- Claim ID; pegged drive lot
- Either a dated commit: quantity, date, confidence, any substituted grade or shape
- Or a named gap: how much, by when, why, and a proposed bridge with its owner

**Keep, redeploy or harvest sheet** (one per retiring cohort; P2) [argued]

| Line | Keep | Redeploy whole | Harvest |
|---|---|---|---|
| Avoidable carry: power, space, repairs, technician hours, stranding of its other parts | Paid | Paid, in a lighter class | Avoided |
| Value of the host's capacity: the shadow price in stockout zones, zero in slack | Kept | Kept, at the lower class's price | Lost |
| Harvest value: yield × each sink's next-best-source value − pipeline cost | — | — | Gained |
| The lighter class's value to its tenants | — | Gained | — |
| Depreciation, noted by finance | Extended | Extended | Written off |

- Cohort; platform; host count; planned retirement date
- Read it down each column. Keep a host when its capacity's value exceeds its avoidable carry; harvest when the harvest value is larger.
- Signed by finance for every keep past plan.

**Forum charter** ([mechanism 10](concept-operating-mechanisms.md); [forum](/glossary/#term-forum)) [argued]
- Members: a named executive chair; planning, which runs it; finance; supply; one seat per sink
- Remit: the ranked list of harvest claims across the four sinks, the cut line, and the decision log with overrides and brokered trades
- Rules it holds: the shortage rule; the ranking unit; the landing rule, which it ratifies
- Cadence: monthly, plus the quarterly supply review
- Overrides: logged with what moved down

**Risk-budget record** [argued]
- Cohort: model, firmware, age band
- Cohort cap per failure domain, and who set it (reliability engineering)
- Evidence bar per tier, the outcomes it rests on, and the date it last rose
- Incident cost bound, and who signed it (finance)
- Draws on the bound to date
- Next review date

**Decision note** ([decision note](/glossary/#term-decision-note))
- The decision
- What was known
- When, and by whom
- What would have changed it
- The trigger to revisit it

## Where this comes from

- **Seed paper:**
  - Sections 4, 5.2–5.4, 6 and 6.1–6.7.
  - Sections 8.2, 9.1–9.3, 10 and 10.1–10.4.
  - Sections 12, 13 and 14, and Appendix A.
- **The case:** [the full case](case-kuantillion-cloud-full.md), its team map, scenarios, signposts and stated assumptions.
- **The reasoning:** [the strategy page](case-kuantillion-cloud-practice.md).
- **Studies cited on this page.** Other operators' and researchers' fleets, cited as analogies; none is Kuantillion Cloud's:
  - Schroeder and Gibson, Disk failures in the real world, *USENIX FAST* (2007): https://www.usenix.org/legacy/event/fast07/tech/schroeder/schroeder_html/
  - Xu, Zheng, Qin, Xu and Wu, Lessons and Actions: What We Learned from 10K SSD-Related Storage System Failures, *USENIX ATC* (2019): https://www.usenix.org/conference/atc19/presentation/xu
  - Alter, Xue, Dimnaku and Smirni, SSD Failures in the Field: Symptoms, Causes, and Prediction Models, *SC* (2019): https://par.nsf.gov/servlets/purl/10172650

Every number on this page is illustrative unless the case tags it otherwise.
