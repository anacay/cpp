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

**What this program is.** Kuantillion Cloud retires drives by the million and holds idle flash in running machines, while new flash costs three to four times last year's price. The program decides where each older drive goes: a workload, a repair spare, a build, or exit. This page is its runbook: owners, dates, seven decision gates, rules, measures and playbooks.

This page is the execution plan for [Case 3](case-kuantillion-cloud.md). [The strategy page](case-kuantillion-cloud-practice.md) says why each move is right. This page says who does it, in what order, and how you'll know it worked.

**How to read the labels.** A quote with a Section is the seed paper's own text. Rules this plan adds are marked [argued]. Quantities nobody has published are [unmeasured]. Every number is illustrative unless the case tags it otherwise. Every owner and date is a proposal, to be adjusted to the teams you find. The seed paper is "a practitioner synthesis, not a model, and untested" (Abstract), and so is this plan.

**Terms used on this page.**
- **Sink:** one of four places a usable drive can go: workloads, repair spares, upgrades and builds, or exit ([sink](/glossary/#term-sink)).
- **Harvest:** drives taken out of retiring hosts for reuse or exit ([harvest](/glossary/#term-harvest)).
- **Cohort:** drives sharing a model, firmware and power-on-hour band, which tend to fail together ([cohort](/glossary/#term-cohort)).
- **Grade:** this plan's three-level rule for where a tested drive may go (the rules section).
- **Tier cap and grading tax:** how many grades the systems can carry, and the cost of each extra one ([tier cap](/glossary/#term-tier-cap); [grading tax](/glossary/#term-grading-tax)).
- **Cover point:** the spares level a signed shortage-to-idle ratio sets ([cover point](/glossary/#term-cover-point)).
- **Showback:** a price shown to a team before anyone is billed ([showback](/glossary/#term-showback)).
- **Decision gates and technical gates:** the program's seven steps, G0–G6, and the case's eleven tests on each drive.
- **P1–P8:** the case's eight decision problems, such as P1 the drive record and P6 allocation ([full case, section 11](case-kuantillion-cloud-full.md#11-problem-decomposition)).
- **Off-host states:** where a drive sits once it leaves a running machine: harvested, erased, in test or held.
- **Supply register:** the supply plan of record and commitment register, [mechanism 11](concept-operating-mechanisms.md#m11).
- **Commit point:** the last date to commit without paying to change shape ([commit point](/glossary/#term-commit-point)).
- **Named gap and bridge:** a shortfall with an owner, and the costly stopgap that covers it ([named gap](/glossary/#term-named-gap); [bridge](/glossary/#term-bridge)).
- **Seam:** a standing line of conflict between groups ([seam](/glossary/#term-seam)).
- **Path A and Path B:** the case's two futures. Path A stays tight through 2028; Path B eases from late 2027.

## 1. What this plan delivers, and the decision it serves {#delivers}

*The Kuantillion Cloud flash program: what it must decide, by when, and on what ideas.*

**The situation.** Kuantillion Cloud runs a hyperscale fleet. It retires millions of components a year, over 3 million of them drives in 2024. It also holds older flash idle inside running machines. New enterprise flash now costs three to four times last year's price, and next year's supply is largely pledged. The [full case](case-kuantillion-cloud-full.md) sets this out.

**The decision this plan serves.** Should Kuantillion Cloud run a program for its older flash, and at what size? If yes, how should it split each usable drive among four sinks? Those sinks are workloads, repair spares, upgrades and builds, and exit through resale or recycling.

**What the plan delivers, in order.**

1. Within one week, an answer to whether a program already exists, or was tried and dropped.
2. Within 30 days, a dollar test of whether the program pays, and its scope: spares continuity, mixed, or supply strategy. Beside it, the value anchor read from the flash contracts.
3. Within 90 days, the rules signed in advance, spares and the reverse pipeline staffed to a signed plan, and spares allocation running in a standing [forum](/glossary/#term-forum). Wider allocation follows once the drive record is live (G3b).
4. From week 2, in parallel, a track on the stranded flash already installed. It needs no sanitization, custody or qualification, and it may be the larger prize.
5. From G4, capacity delivered: TB to each sink per quarter, by scope, declared in advance and scored promised against actual.
6. Over the following year, a pilot of reused flash in tiers that absorb device loss, and experiments that test the case's eight stated assumptions.

**The clock against the shortage** [argued]. Suppose day 1 is 2 November 2026 (illustrative). Then G1 falls on 1 December, G4 on 30 January 2027, and G5 no earlier than 30 April 2027.
- Under the case's Path B, the shortage eases from late 2027. Reused flash would then reach workloads with about two quarters of shortage left.
- Harvest value falls as that window closes. At a 50% yearly price fall, it loses about 16% per quarter of delay; at 10%, under 3% (illustrative). So the gates that don't depend on each other run in parallel: spares, the pipeline, the record build and the stranded track.
- Under Path A, tight through 2028, the same calendar leaves about six quarters.

**What it rests on.** Five ideas from the seed paper carry it.

- A retirement is a dated supply step that slips (Section 6.7). Here it also delivers drives.
- Each pricing question gets its own price ([three prices](concept-three-prices.md); Section 4).
- An approval is not an allocation ([approval and allocation](concept-approval-and-allocation.md); Section 6.1).
- Every number has an owner, and every gap is named ([principles](principles.md)).
- [Turn-up](/glossary/#term-turn-up) is a staffed rate (Section 6.2). Applied here, so is the reverse pipeline.

**What it doesn't do.** It doesn't settle questions the practice can't yet answer. The [Second lives](note-second-lives.md) working note holds those: supply that is a byproduct, the condition of a drive as a dimension of supply, and exit as a sink.

## 2. Roles and decision rights {#roles}

*Who runs the Kuantillion Cloud flash program, who decides each of the case's eight problems, and who signs.*

The planner sits in the middle, "usually owning no capacity and no budget" (Section 10). So every change below is a proposal to the forum and finance. Its standing comes, in the paper's experience, "from the number and the team's own signature" (Section 9.1). See [people](people.md) for how that works without a budget.

**The groups.** This table extends the case's team map. After the sponsor, the next nine rows are the case's; the rest are groups the case names elsewhere, or that this plan defines [argued].

| Group | Role in this plan |
|---|---|
| The sponsor: an infrastructure or supply-chain vice president | Names the program lead; chairs the forum; clears data access; funds the pipeline until the landing rule credits it |
| Capacity planning and forecasting ("planning") | Runs the program as broker; keeps the drive record and the [fulfillment](/glossary/#term-fulfillment) ledger; runs the forum |
| Fleet provisioning | Supply answers for harvest; state and location fields; systems of record |
| Flash platform engineering | Condition, qualification and firmware fields; the wear price; grades |
| Drive security engineering | Erasure and custody |
| Machine-health engineering | Diagnosis before a pull; the triage sequence |
| Data-center operations | Change windows; physical work |
| Spares planning | The spares pool, its ratio per segment and its pre-tested float; last-time buys |
| Reverse logistics and value recovery | The pipeline: harvest, test, erase, ship; exit |
| Lifecycle transitions | Retirement dates and the keep, redeploy or harvest sheet |
| Storage systems and schedulers | The reused-flash class; the stranded line |
| The solver team, inside capacity planning | Counts solver categories; tests whether the solvers reach physical devices |
| Fleet shaping and hardware engineering | Build and upgrade programs; physical fit, protocol and backplane |
| Supply chain | Owns the memory-reclaim program, the nearest precedent; vendor terms; the contract read, including resale and recycling contracts |
| Tier owners | The owners of the workloads and storage tiers that take reused flash: the case's resource managers. They are "product" in the seed paper's terms |
| Reliability engineering | Cohort caps per redundancy group; the durability response in an incident |
| Finance | Keeps score; signs the rules that say who pays; the controller writes the accounting memo |
| Legal, privacy and tax | Contract terms; notification clocks; intercompany pricing, customs and e-waste rules for drives that cross legal entities or borders |

*Drive supply* in the tables below means fleet provisioning and spares planning together, the groups that answer for drives. Supply chain is a separate group: it owns vendor contracts.

**Decision rights, RACI-style.** R does the work, A decides, S signs, C is consulted. **Change** marks a move from today's owner in the case.

| Decision | R | A | S | C | Change |
|---|---|---|---|---|---|
| Program scope, staffing and budget | Planning | The sponsor | Finance | Every group | **Change:** new; a broker still needs a principal |
| P1 Drive record | Each field's performer | Planning keeps the record | Field owners | Drive security | **Change:** unowned today |
| P2 Keep, redeploy or harvest | Lifecycle transitions | The forum decides the economics of every keep past plan | Finance confirms the accounting effect | Fleet provisioning, for drive values | **Change:** drive values a required input |
| P2a Wear price | Flash platform engineering | Flash platform engineering | Finance | Storage systems | **Change:** unowned today |
| P3 Reused-flash class | Storage systems | Storage systems | Each tier owner accepts, with its evidence bar | Reliability engineering | **Change:** acceptance becomes signed |
| Stranded line | Storage systems | Storage systems, as service owner | Finance keeps score | Fleet provisioning; planning | **Change:** new line |
| P4 Spares ratio | Spares planning | Finance and tier owners (product, in the seed's terms) jointly | Finance and tier owners | Drive supply, for idle cost and liability terms | **Change:** signed in advance |
| P5 Build programs | Fleet shaping and hardware engineering | Same, as declaring team | Declaring team signs the [change bands](/glossary/#term-change-band) | Drive supply and planning set the bands | **Change:** programs declared |
| P6 Allocation | Planning | The forum, run by planning | Finance, on the rate card | Every sink | **Change:** unowned today |
| P6 Commitment | Fleet provisioning | Fleet provisioning, answering each claim with a dated commit or a named gap | Finance signs the who-pays default and its exceptions | Planning | **Change:** never firm before supply answers |
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

## 3. The first 30, 60 and 90 days {#first-90-days}

*The program's first quarter, day by day: one owner and one output per action.*

Day 1 is the day the sponsor names the program lead. Each action has one owner and one output. Owners and days are proposals [argued].

### Days 1–5: stand up the program

| Day | Action | Owner | Output |
|---|---|---|---|
| 1 | Name the program lead, with this page as the remit | The sponsor | A named lead |
| 1–2 | Request access for the day-10 and day-20 pulls: harvest log, flash deployed, decommission schedule, contracts | Planning, through the sponsor | Access granted by day 7, or escalated |
| 1–2 | Book the interviews, group by group (the interview guide below) | Planning | A schedule for days 2–5 |
| 2 | Open a RAID log: risks, assumptions, issues and decisions | Planning | The log, reviewed weekly |
| 3 | Hold SSDs from retiring hosts back from destruction and resale, within secure cage space; the hold expires at G1 | Reverse logistics, with drive security; signed by finance and drive security | A signed hold, and cage space tracked daily |
| 3 | Set the status cadence: a weekly program review and a fortnightly note to the sponsor | Planning | Both on the calendar |
| 5 | Ask for headcount and budget to day 90: the lead's team, the record build, pipeline surge options | Planning, to the sponsor | A signed ask, or a named gap |

**Why hold first** [argued]. Destruction and resale can't be undone, and allocation starts only at day 90. So preserve the option before you price it. When the cages fill, the oldest held lots go to exit first.

### Days 1–5: does a program already exist?

The public record is silent, and the case reads that silence three ways. A program may run quietly, one may have been tried and dropped, or none exists. Test all three before you design anything.

Talk to the owners one to one, before any form goes out. Section 9.3 gives that advice for demand intake; this plan borrows it. Sort what you hear into "a fact", "an assumption" or "an ask" (Section 10.4).

| Day | Action | Owner | Output |
|---|---|---|---|
| 1–3 | Ask what happens to a pulled SSD today, at two or three representative sites | Planning, interviewing reverse logistics, data-center operations and drive security | A one-page flow, each step owned |
| 1–3 | Ask whether flash reuse was ever evaluated and declined | Planning, interviewing lifecycle transitions, finance and flash platform engineering | The record, read as a [decision note](/glossary/#term-decision-note) |
| 2–4 | Ask whether last-time buys are made for legacy drive models, and by whom | Planning, interviewing spares planning and supply chain | A list of models and windows |
| 2–4 | Ask which gates the memory-reclaim program crossed | Planning, interviewing supply chain | Its gate history |
| 5 | Record one of the three readings | Planning | A decision note: "what was known, when, by whom, and what would have changed it" (Section 6.5) |

**Go or stop.**

- If a program runs, audit it against the [thirteen mechanisms](concept-operating-mechanisms.md) and add only what's missing.
- If a decline still holds at today's prices, stop the full program and re-center on redeploying whole hosts. Run only G2's redeploy-whole test and the keep sheet.
- If neither, go to G1.

### Days 6–30: size it and read the contracts

| By day | Action | Owner | Output |
|---|---|---|---|
| 10 | Pull the harvest log, split by SSD and disk, and by cohort | Reverse logistics | Harvest TB by quarter and cohort |
| 10 | Pull flash deployed, in TB, by quarter | Fleet provisioning, with finance | The materiality denominator |
| 10 | Pull the decommission schedule with stage dates | Lifecycle transitions | Retirements, staged |
| 10 | Start the stranded-flash track: measure flash use by resource and site | Storage systems | The stranded stock, sized as a range |
| 14 | Compute the materiality ratio, as a scope descriptor ([materiality test, experiment 3](#experiments)) | Planning | A proposed scope, from the table under G1 |
| 20 | Read every flash contract's cancel, push-out and volume terms into the supply register ([contract read, experiment 2](#experiments)) | Supply chain, with finance and legal | Mechanism 11's contract lines |
| 20 | Read the resale and recycling contracts beside them: prices, fees, minimum volumes | Supply chain, with reverse logistics | Net resale by cohort, as the contracts pay it |
| 20 | Count zone stockouts that name local SSD | Planning | The capacity anchor's inputs |
| 25 | Compute both value anchors per zone, measuring the drive's attribution share ([value anchors, experiment 1](#experiments)) | Planning, with finance | The anchor, declared for G1 |
| 25 | Re-test a sample of pulled drives at one site ([pull re-test, experiment 7](#experiments), starts) | Machine-health engineering | A first healthy share |
| 30 | Write the accounting memo for G1 | Finance: the controller | A signed memo |
| 30 | Start the reclaim pilot on one tier ([reclaim pilot, experiment 5](#experiments)) | Storage systems | Pooling live on one tier |
| 30 | Charter the forum for two rules: it agrees the shortage rule and ratifies the landing rule | Planning | A charter; both rules drafted |
| 30 | G1 decision: the dollar test, then the scope, and the clock re-read against the signposts | Planning and finance | Go or stop, with a decision note |
| 30 | Put the pipeline rate on the commit-point map, and surge crews on [option](/glossary/#term-option) | Reverse logistics, with planning | The staffing commit point, dated |
| 30 | Start the drive-record build: name its systems-of-record owner, and date G3b | Fleet provisioning | A dated build plan |

### Days 31–60: counter-arguments and the record

| By day | Action | Owner | Output |
|---|---|---|---|
| 40 | Count the qualification backlog and solver categories | Planning, with the solver team | A tier cap |
| 40 | Read decommission records by branch: kept, redeployed whole, harvested | Lifecycle transitions | A test for redeploying whole |
| 45 | Agree the shortage rule in the forum; sign the landing rule | The forum, for the shortage rule; for the landing rule, planning proposes, finance signs, the forum ratifies | Both rules in force |
| 50 | Name an owner for each drive-record field, off-host fields first | Planning | The record's field list, owned |
| 55 | Fill the keep, redeploy or harvest sheet for one retiring cohort ([keep sheet, experiment 6](#experiments)) | Lifecycle transitions, with finance | One cohort decided |
| 60 | G2 decision, and G3a: the record designed and owned | Planning | Exit criteria met, or named gaps |

### Days 61–90: spares and the pipeline first

| By day | Action | Owner | Output |
|---|---|---|---|
| 70 | Sign the spares shortage-to-idle ratio per platform and repair-urgency segment | Finance and tier owners | A signed ratio per segment |
| 70 | Add or confirm the triage sequence before any SSD pull: slot check, cable swap, reboot, re-test | Machine-health engineering | The sequence confirmed, or live at two sites |
| 75 | Staff the pipeline to the signed rate, calling surge options as retirements land | Reverse logistics | A staffed rate and booked slots |
| 80 | Put every planned decommission on the supply register as a dated step, both ways | Fleet provisioning | Hosts out, drives in |
| 85 | Set the risk budget's three parts | Reliability engineering; finance; tier owners | Cap, bar and bound signed |
| 90 | Read out the reclaim pilot: go or stop for the stranded track | Storage systems; finance keeps score | Stranded share moved, or a decision note |
| 90 | The forum ranks its first harvest; drive supply answers each claim | The forum; fleet provisioning | First ledger lines, each pegged; by lot until G3b |

**Why staffing is a commit point.** The case bounds a year's SSD harvest at about 25–375 technician-years of labor, an upper bound. Crews of that size can't be hired in the 15 days after G3a, so the rate is committed at G1.

**Why spares go first.** Spares are the harvest's most predictable claim and its value floor. The paper's order of change is "prove fulfillment first" (Section 10.4); this plan applies it to reused drives.

## 4. The gates {#gates}

*The program's seven decision gates, G0–G6, each with the evidence that opens it and the call it makes.*

This plan uses "gate" in two senses. The program's seven **decision gates**, G0 to G6, are the steps of this plan. The case's eleven **technical gates** are the tests every drive must pass before reuse, such as fit, qualification, sanitization and jurisdiction ([full case, section 6](case-kuantillion-cloud-full.md#6-supply-the-gates)). This section is about the decision gates.

Each decision gate opens only on the evidence in its row. The paper's rule for declarations is that "promotion needs the evidence in its row" (Section 5.4). This plan applies it to the program's own gates [argued]. Each artifact names its mechanism, linked to [the operating mechanisms](concept-operating-mechanisms.md).

### G0: existence test

- **When.** Days 1–5, as an initial reading. If interviews run long, extend to day 10.
- **Purpose.** Don't build what exists, or what was rightly declined.
- **Entry evidence.** A named program lead.
- **Work.** The days 1–5 interviews, using the interview guide and the mechanism audit checklist in the templates.
- **Exit criteria.** One of three readings recorded: exists, declined, or absent.
- **Artifacts.** A decision note.
- **Owner.** Planning.
- **Go or stop.** Go if absent, or if a decline fails today's prices. If a decline still holds, stop and re-center on redeploying whole hosts: G2's redeploy-whole test and the keep sheet only. If a program exists, audit it against the thirteen mechanisms. Then either enter G1 with that program as the base, or stop with a decision note.

### G1: size and anchor

- **When.** Day 30.
- **Purpose.** Know whether the program pays, at what scope, and on which value anchor, before building anything. "Below materiality, the mechanisms cost more than they return" (Section 13). The paper writes that of elastic-cloud customers; reading it as a dollar test here is this plan's [argued].
- **Entry evidence.** G0 reads absent, or a decline that no longer holds.
- **Work.**
  - The dollar test.
  - The materiality ratio, as a scope descriptor.
  - The stranded stock, sized on its own.
  - The contracts read into the supply register.
  - The capacity anchor's inputs.
  - The pipeline rate on the commit-point map, with surge crews on option.
- **Exit criteria.**
  - The dollar test passed, and the scope chosen.
  - The anchor declared.
  - The forum chartered for two rules: it agrees the shortage rule, and it ratifies the landing rule that planning proposes and finance signs.
- **Artifacts.**
  - Contract lines on the supply plan of record ([mechanism 11](concept-operating-mechanisms.md#m11)).
  - The purchase plan, frozen as the baseline for savings.
  - The controller's accounting memo. It covers the inventory basis, near net book value. It says whether spares are capitalized or expensed, and when drives are held for sale or impaired.
  - The memo also covers resale gain or loss, builds that look cheaper than they are, and a management ledger at fair value: the drive record with a value column.
  - The stranded line, owned ([mechanism 4](concept-operating-mechanisms.md#m4)).
  - A decision note.
- **Owner.** Planning, with finance.
- **The dollar test** [argued]. Go when expected annual net value over exit, under the declared anchor, times usable TB, exceeds the program's fixed cost. That cost is the record, the forum and the pipeline's standing staff.
  - For example, a central harvest of about 1.8 EB a year at 80% yield is about 1.44 million usable TB (illustrative).
  - At +$10 per TB over exit, that is about $14M a year. At +$370 it is about $530M.
  - Against a fixed cost of $20–60M a year (illustrative), the low-price cell fails and the high-price cell passes easily.
- **The ratio describes scope; it doesn't decide go.** It is the SSD harvest, before yield, divided by a year's new flash ([materiality](/glossary/#term-materiality)). The case puts it at about 0.5–30%, central 3–9% (illustrative).
- **Its numerator is a hard-drive count.** The company's report calls the 3 million retired drives hard drives. If they all are, the ratio is near zero. A vintage check gives about 4–9 EB of flash retiring a year. So the day-10 pull splits harvest by drive type and vintage.
- **Scope table** [argued]. One price basis per scenario: the ratio and the dollar test use the same one.

| Ratio | Scope | What runs |
|---|---|---|
| Under 1% | Spares continuity | A minimum drive record, spares, the pipeline and exit |
| 1–5% | Mixed | The above, plus allocation as a monthly forum line and one workload pilot |
| Over 5% | Supply strategy | Every decision gate below |

- **Tie-break.** If the ratio's range spans two rows, run the smaller scope, and re-test at the first quarterly supply review [argued].

- **Stranded stock, beside it.** Neither the dollar test nor the ratio gates the stranded stock, which runs as its own track from week 2. The case puts installed flash at 60–100 EB.
- Recovering the gap between one peer's 54% and 19% stranding, after a haircut for reach, frees about 11–35 EB, once (illustrative). That is two to six times the top harvest row.
- The reclaim pilot reads out by day 90, and that is the track's own go or stop.
- **Go or stop.** Go at the chosen scope. "Stop at the step where the next one costs more than it saves" (Section 12). The paper writes that for mid-sized companies; this plan applies it to the program's own steps.

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

### G3: the drive record, designed (G3a) and live (G3b)

- **When.** G3a at day 60. G3b when the record is live for the off-host states, on the date fleet provisioning estimates at G1.
- **Purpose.** One record every decision can cite. It is a systems build, not a meeting.
- **Entry evidence.** G1 says go. The build starts then; it doesn't wait for G2.
- **Work.**
  - Name an owner for each field, off-host fields first.
  - Define each handoff.
  - Build the off-host states into the systems of record.
  - Reconcile the record with the erasure log.
- **Exit criteria.**
  - G3a: every field owned, and each off-host state defined, with who accepts it.
  - G3b: the record live for every off-host state, across crews, benches, cages and partners, and reconciled with the erasure log.
- **Artifacts.** The drive record (the templates below give its fields). The fulfillment ledger, run backwards ([mechanism 5](concept-operating-mechanisms.md#m5)).
- **Owner.** Planning keeps it; each field's performer owns its entry; fleet provisioning owns the systems build.
- **Go or stop.** Don't move a drive between sinks on a record with an open reconciliation gap. Until G3b, the spares pilot runs on a manual ledger, by lot.

### G4: hosts and allocation, spares and pipeline first

- **When.** Day 90 for spares and the pipeline. Allocation beyond spares waits for G3b.
- **Purpose.** Clear the coupled decisions together: when hosts go, how harvest is split, how many spares, how fast the pipeline.
- **Entry evidence.** G3a exit, with G3b dated. Until G3b, a manual lot-level ledger serves the spares pilot.
- **Work.**
  - Decommissions on the register.
  - The spares ratio signed.
  - The pipeline staffed to the signed rate, at its commit point.
  - The forum ranking harvest.
  - The risk budget set.
- **Exit criteria.**
  - Every harvest claim answered with a dated commit or a [named gap](/glossary/#term-named-gap).
  - Each tested drive pegged to one claim.
- **Artifacts.**
  - Ledger lines ([mechanism 5](concept-operating-mechanisms.md#m5)).
  - Supply answers ([mechanism 11](concept-operating-mechanisms.md#m11)).
  - The [commit-point map](concept-commit-points.md) for last-time buys and decommissions ([mechanism 13](concept-operating-mechanisms.md#m13)).
  - The forum's decision log ([mechanism 10](concept-operating-mechanisms.md#m10)).
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
  - Declaration entries for builds ([mechanism 12](concept-operating-mechanisms.md#m12)).
  - The class on the rate card ([mechanism 3](concept-operating-mechanisms.md#m3)).
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
- **Artifacts.** The coefficient register and versioned rate card ([mechanism 3](concept-operating-mechanisms.md#m3)).
- **Owner.** Flash platform engineering, with finance.
- **Go or stop.** Change first-life placement only where endurance used at harvest is shown to change second-life value.

**Why the wear link goes last.** The case's own best guess is that placement shapes the harvest little today, except in write-heavy and low-endurance cohorts.

## 5. Standing cadence {#cadence}

*The meetings that keep the flash program running once the first 90 days are over.*

The cycles nest, slowest outside: "Each cycle commits only what its lead time forces" (Section 9.1). See [annual](stage-annual.md), [quarterly](stage-quarterly.md), [monthly](stage-monthly.md), [weekly](stage-weekly.md) and [post-launch](stage-post-launch.md).

| Cycle | Forum | Inputs | Outputs | Decisions |
|---|---|---|---|---|
| Weekly | Planning's working session | Ledger lines; reconciliation gaps; cage aging; repair tickets | Pegging by system, run continuously; reconciliation; brokered trades, logged | The exceptions the pegging flags |
| Monthly | The forum | Supply answers; harvest by stage; spares fill; resale prices | Re-ranked claims; updated commits and named gaps | The ranking; any override, logged with what moved down |
| Quarterly | The supply review | Harvest forecast by stage and cohort; decommission slips; qualification slots; endurance by cohort; the signposts | Rate card version; release trigger tests; last-time-buy commit points | Rate card changes; releases; last-time buys |
| Annual | The forum, with finance | Materiality; last year's scores; vendor terms | Signed ratios, bands, landing and shortage rules; the charter overlay | Program scope; reuse commitment in the annual capacity agreement |
| After each pilot | The forum | Second-life outcomes | Updated yield, hazard and evidence bar | Widen, hold or close the class |

"In my experience, the step most often missing is the supply review" (Section 9.1). Here it is the main meeting, because supply is a byproduct of other decisions [argued]. A vendor's end-of-life notice triggers an off-cycle review.

**The forum sets rules; a system pegs** [argued]. Millions of drives can't be allocated by hand. The forum owns the ranking rule, the cut line and overrides. The solver, or fleet provisioning's tools, peg each tested drive to a claim. The forum reviews only the exceptions.

**Annual signatures, kept separate.**

- Finance and tier owners sign the spares ratio.
- Drive supply and planning set the harvest change bands, and each declaring sink signs them.
- Planning proposes the landing rule, finance signs it and the forum ratifies it (mechanism 8).

**The charter overlay.** "Once a year, lay the charters over the chain that delivers the product, end to end, and name an owner for every gap" (Section 10.2).

## 6. Rules agreed in advance {#rules}

*The rules the program's forum and finance sign before any drive is allocated or any saving counted.*

"A rule agreed in advance is a contract; one proposed after the savings appear is a request" (Section 9.3). Each rule below is written so the forum can sign it. Each is this plan's [argued], built on the seed text it cites.

**Booking rule** [argued]. Applies to every planned retirement's harvest, cohort by cohort.
- In the first cycle, with no stage record yet, book firm only drives already tested.
- After that, book harvest firm only to the stage record's lower quantile until the drives are drained.
- Then book to the stage record's middle.
- Above the firm slice, hold [options](/glossary/#term-option) on new purchase. Above that, name a [bridge](/glossary/#term-bridge) with an owner.
- Label harvest *uncommitted* until supply answers with a dated commit or a named gap.
- Basis: "Until then, label it *uncommitted*, a firmness class of its own" (Section 6.1); the [firm, flexible and named](/glossary/#term-firm-flexible-named) split (Section 8.2).
- The stage record carries pull-ins as well as slips. A power-forced retirement delivers drives early.
- **Working estimate, by cohort mix** [argued]. Suppose 50–70% of scheduled retirements land on their date. Yield is near all-or-nothing within a cohort, so draw it per cohort, not as one average.
- For example, 60% of drives in observable cohorts yield about 90%, and 40% in blind ones about 40% (illustrative; the real yields are [unmeasured]).
- The central share is then about 35–49% of scheduled drives. The firm slice, from observable cohorts at the low on-time share, is about 27%.
- For a batch of 40,000 drives, that is about 14,000–19,600 central, and about 10,800 firm.

**Ranking: priority classes, priced within class** [argued]. The shortage rule below sets the classes. Within a class, the forum ranks each claim at the cost of that sink's next-best source on that date:

| Sink | Next-best source, and its cost |
|---|---|
| Spares | The bridge for a missed repair, from Section 6.4's bridge table |
| Workloads | The capacity value in stockout zones; elsewhere, the cost of new flash |
| Builds and upgrades | The cost of the new machine the drives displace |
| Exit | Net resale, after the discount for unseen history and the pipeline's cost |

The spares row's cost is qualitative, so spares rank by class, not by price. Score the rule after two cycles.

**Three-grade starter rule** [argued]. Revisit after the pilot.

Grade on event history, firmware and burn-in, not on wear. Those are the signals that predict failure in published fleets.

| Grade | Rule | Where it can go |
|---|---|---|
| 1 | No uncorrectable error or critical warning in N months; few grown bad blocks, trend flat; capacitor test passed; safe firmware, updated at harvest; burn-in passed | Durable tiers, once the evidence bar is met |
| 2 | One event-history flag, or old firmware with no known fault | Loss-absorbing tiers, and like-for-like spares |
| 3 | Repeat events, a capacitor failure, or no safe firmware | Exit or destroy |
| Blind | Missing the fields this rule needs | Like-for-like spares only: the platform already runs blind drives of that exact model |

- **Why event history.** After one uncorrectable error, the chance of another next month was about 30%, against 2% in a random month (Schroeder et al. 2016).
- Firmware version can move the annual replacement rate tenfold (Maneas et al. 2020).
- **Wear** stays a recorded field. It is a threshold only for write-heavy or QLC cohorts, because most drives use little of their rated endurance.
- **Age** matters per firmware cohort, measured in power-on hours. At grading, reject or stagger drives near a known fault age.
- N and the counts are [unmeasured]; set them from the first cohorts' telemetry. Three grades fit inside a [tier cap](/glossary/#term-tier-cap) of three or more. At a cap of two, merge grades 1 and 2 into one reusable grade, limited to loss-absorbing tiers and like-for-like spares, and keep grade 3 for exit [argued]. At a cap of one, G2's rule governs: run spares and exit only.

**Internal showback rate, shown back first** [argued]. Call it a showback rate, not a transfer price, to keep it apart from tax transfer pricing.
- **The rate** per usable TB is the higher of net realizable resale for the cohort and grade, and pipeline cost per usable TB, plus a risk loading.
- **Why resale is the floor.** Where an outside market exists, the efficient internal price is the market price (Baldenius 2008, on Hirshleifer's rule). A lower rate invites every sink to over-claim.
- **Net resale** is what the resale and recycling contracts actually pay, after their fees.
- **Carry** is charged per TB-month while the drive is held, not once.
- **Risk loading** per usable TB = the chance of a correlated event × its cost, bridges included ÷ usable TB at risk. For example, 5% a year × $1M ÷ 10,000 TB is $5 (illustrative).
- For example, a 2 TB drive costing $40 to process at 80% yield is $25 per usable TB. If net resale is $100 and risk loading $5, the rate is about $105. Carry is about $0.17 per TB-month (illustrative).
- **The gap** between resale and pipeline cost is a credit to recovery in the management ledger. It is never booked as a saving.
- Show it back for a full cycle before anyone is billed: "Move to attributed cost only after a full cycle of showback" (Section 10.4).
- The forum ranks on next-best-source value, not on this rate.

**Release trigger** [argued]. Write it before you hold. The paper's option rule is "write down the trigger for converting options into orders" (Section 6.2).
- Hold a cohort's drives only while the expected discounted value of a claim, minus holding cost, exceeds net resale now.
- Read resale prices monthly, not quarterly. Waiting for two quarterly prints costs about six months in a falling market.
- Add a stop-loss: release when resale falls a set share from the hold date, such as 20% (illustrative).
- Or release when a drive's shelf time passes two re-test cycles with no claim.
- Release in steps, under a cap on resale per model per quarter.

**Sanitization by sink** [argued]. The case says internal reuse faces a lower bar than exit. Drive security engineering sets each bar.
- **Internal sinks:** crypto-erase, with custody unbroken from host to new host.
- **Exit:** purge, then verify and validate each lot before it leaves custody.
- **Both:** the standing read-back rule under scenario S3, per tool × firmware × model.
- **Destruction:** shredding is deprecated for flash. Use a listed destruct method, such as melting, and rely on keys held off the drive.
- Price the pipeline separately for each path, since exit costs more per drive.

**Landing rule** [argued] ([landing rule](/glossary/#term-landing-rule)).
- **Capital savings land only on evidence.** That means a purchase-order line cancelled, reduced or pushed out in the supply register (mechanism 11). Or it means a cut against the purchase plan frozen at G1.
- Once a saving lands, split it: shares booked as savings, returned to the recoverer and held centrally. That is the split Section 9.3 offers as an example.
- Under the capacity anchor, avoided stockout cost is credited to the product's profit and loss. It is not capital saved.
- The pipeline counts as a recoverer. Its credit for the gap between resale and pipeline cost stays in the management ledger.
- Planning proposes it, finance signs it and the forum ratifies it (mechanism 8), before any recovery is counted.

**Spares cover rule** [argued]. Cover comes from the signed shortage-to-idle ratio, one per repair-urgency segment ([cover point](/glossary/#term-cover-point)).
- A ratio of k to 1 sets cover at the k ÷ (k + 1) quantile of demand over the resupply time.
- Host-down platforms, with no fail-in-place, get a high ratio. Tiers that can fail in place get a low one, because failing in place is their bridge.
- For example, 200,000 drives failing at 1.5% a year, with 30 days to resupply, average about 247 failures in that time (illustrative).
- Cover is then about 246 drives at 1 to 1, 260 at 4 to 1, and 273 at 19 to 1.
- At 260, the fill rate is about 80%, and about 1.75 drives are on backorder on average.
- **Failures come in batches.** A firmware fault at a fixed age fails a cohort together. At a variance twice the mean, the 80% and 95% pools become 265 and 284. At four times, 273 and 300.
- So size a firmware-cliff scenario from the case's known fault ages ([full case, section 6.1](case-kuantillion-cloud-full.md#6-1-what-is-actually-known-about-second-lives)). Size the pool and the cohort cap together.
- **Two legs, sized apart.** The pool above is the test-and-ship leg, given untested stock in the cage. Harvest reaches the cage in lumps, on decommission dates. So size the untested cage against the decommission calendar.
- **A pre-tested float.** Keep a burned-in float of tested drives, sized to the resupply quantile, so a repair doesn't wait for a full test.
- **Retest staleness.** Retest any held drive whose last full test is older than a set limit, such as 90 days (illustrative). Erase, quick-screen and hold stays the default.

**Shortage rule** [argued]. "Agree it in the forum beforehand; supply carries it out. Written during the shortage, it's a negotiation. And don't split a shortage pro rata" (Section 9.3). Who goes short, last to first:
1. Spares for host-down platforms with no other source go short last, because a missed repair has no bridge.
2. Spares for platforms that new drives can still serve.
3. Claims backed by a signed build program.
4. Workload claims, ranked by next-best-source value.
5. Exit goes short first.

**Who pays when harvest fails to arrive** [argued]. The default:
- If drive supply gave a dated commit and missed it, drive supply pays the bridge.
- If the claim was booked against *uncommitted* harvest, the claiming sink pays.
- Finance signs the exceptions in advance, as the paper has finance agree "who pays for a change outside" the bands (Section 9.2).

## 7. Measures {#measures}

*How the flash program is scored, each measure with a denominator and a test that can fail.*

Finance keeps score: "Finance, not planning, should keep the score, or the indicators become self-assessment" (Section 9.3). Read the measures as a set, because "any indicator in Section 9.2 can be gamed once rewarded" (Section 13).

Targets are this plan's proposals [argued]. None of these tests has been run.

| Measure | Denominator | Target | Test that can fail |
|---|---|---|---|
| TB to each sink | Per quarter, by sink and scope | As declared at the quarterly supply review | Actual below promised two quarters running |
| Purchases avoided | Per TB against the purchase plan frozen at G1, under the declared anchor | Rises while stockouts last | Reported without a moved purchase-order line or the frozen baseline |
| Net value over exit per harvested drive | Per drive harvested: reuse value after pipeline cost and yield, minus what exit would have paid | Positive by cohort | Negative for a cohort two quarters running |
| Spares fill rate | Per repair, by platform and segment | At or above the signed cover point | Fill below cover while another sink holds idle harvest |
| Time to repair, old platforms | Per repair | Not rising | Rising as harvest is diverted elsewhere |
| Stranded flash | Share of installed flash | Falls after the reclaim pilot | Flat after pooling |
| Harvest-to-redeploy time | Per drive harvested | Falls quarter on quarter | Harvested-but-not-graded drives aging |
| Yield | Per drive harvested, by cohort and gate, burn-in included | Known by cohort | Unknown for any cohort in the pilot |
| Healthy share of pulls | Per drive pulled, by site | Known by site, then falling where triage was missing | Unknown after day 90, or no change where triage was added |
| Endurance used at harvest | Per drive, by cohort | Known by cohort | Missing for write-heavy cohorts |
| Embodied carbon preserved | Per drive redeployed | Reported with its additionality | Claimed where no purchase was displaced |
| Harvest promised against actual | Per retirement, by stage | The gap narrows | No narrowing after two cycles |
| Last-time buys after their commit point | Per last-time buy | Zero | Any order placed late |
| Expected backorders | Per platform cohort, at any moment | At or below the level the signed ratio implies | Above it two quarters running |
| Reconciliation gaps | Per off-host state change | Zero, held | Any gap that persists |

**Two of the tests follow the paper's own.**
- For mechanism 11: "the gap between promised and actual delivery dates narrows" (Section 9.2).
- For mechanism 13: "fewer orders are placed after their commit point, and their bridge premiums shrink" (Section 9.2).

**Why not count bridges.** Section 10.2's "about one launch in five should need a bridge" is for one-shot buys. A spares pool is replenished, so fill rate and backorders are the right tests.

## 8. Experiments {#experiments}

*One experiment for each assumption the case states, each able to change the program.*

One experiment per stated assumption in the case. Each has an owner, a date in program days (the same clock as section 3), a method, a falsifier and the decision it unlocks. All are proposals [argued]. "The rollout is the measurement" (Section 5.4).

| # | Assumption | Owner | By day | Method | Falsifier | Unlocks |
|---|---|---|---|---|---|---|
| 1 | Replacement cost is the right value anchor | Planning, with finance | 25 | Compute both anchors per zone from stockout logs, margins and contract terms; measure the attribution share | The capacity anchor passes replacement cost in most stockout zones | Which price ranks workload claims |
| 2 | Reuse displaces purchases at all | Supply chain, with finance and legal | 20 | Read cancel, push-out and volume terms into mechanism 11 | No contract allows volume or timing to move | Whether purchases avoided can be claimed |
| 3 | The program pays at some scope | Planning, with finance | 14–30 | Net value over exit × usable TB a year, against fixed program cost; harvest TB ÷ new flash TB, as a descriptor | Net value falls short of fixed cost in every price cell | G1 |
| 4 | Reuse beats exit after the pipeline | Reverse logistics | 120 | Time-and-motion and yield logs at one site, one cohort, beside that cohort's resale quotes | Net value over exit below zero for the cohort's drive class | Pipeline scope by drive class |
| 5 | Stranded capacity is recoverable at reasonable cost | Storage systems | 30–90 | Reclaim and small-group pooling on one tier | Stranded share barely moves, or pooling costs more than it frees | Whether the stranded line gets a program |
| 6 | The host-cost logic holds | Lifecycle transitions, with finance | 55 | The keep, redeploy or harvest sheet for one retiring cohort | Drive value, not host cost, decides the branch | How retirement dates are set |
| 7 | Spares demand is what failure rates say | Machine-health engineering, with spares planning | 25–90 | Re-test every pulled drive at two sites; log fail-in-place; publish the healthy share | Under 5% of pulled drives test healthy (illustrative threshold) | Whether the pool is sized on pulls or true failures |
| 8 | Internal prices can carry these values | Planning, with finance | 91–180 | One full cycle of showback | Decisions reopened as often as under negotiation | Whether to bill |

**What experiment 4 measures.** The bar is exit, not zero. Resale pays about $80–160 per TB gross. So the margin over exit is about +$90 to +$490 per TB at the case's $640 high price, and about −$135 to +$85 at its $190 low (illustrative). The central cells are about +$370 and +$10. At low prices, reuse barely beats selling.

**What experiment 7 measures.** At the case's peer (Xu et al. 2019), triage resolved 34.4% of SSD tickets before any swap. Only 31.2% of tickets ended in a swap. So the peer's healthy share of pulled drives is unknown, and so is Kuantillion Cloud's [unmeasured]. Analogies only: 43% of one vendor's returned hard drives showed no fault (Schroeder and Gibson 2007). About half of swapped SSDs at one operator never returned to service (Alter et al. 2019). Up to 1.5 times true failures is a bound for a site with no triage at all.

**The capacity anchor, as a formula.** Nothing public gives it an input [unmeasured]. So experiment 1 fills a formula:

*Capacity value per usable TB = Σₜ [P(stockout) × margin × attribution share × survival × P(binding zone)] ÷ (1 + r)ᵗ + terminal value.* [argued]

Here t counts months until new supply lands, and the margin is that of a short TB-month.

- **Contribution margin, not revenue.** The value lands in the product's profit and loss, not in planning's.
- **The attribution share.** A stockout is usually of a whole host or VM shape. The drive's share is high only where SSD is the binding dimension.
- **The terminal value.** After new supply, the drive is worth the purchase it avoids if contracts can move, or its net resale if they can't.

For example, take a $40 margin per short TB-month, 12 months, a stockout in 75% of them, 10% cost of capital and a $100 terminal value (illustrative). At a 10% attribution share the anchor is about $121 per usable TB. At 30% it is about $188, and at 100% about $423.

So the capacity anchor passes the case's $190 floor only above about a 30% share. At these inputs it never reaches the $640 ceiling. Experiment 1's real output is the attribution share, zone by zone [unmeasured].

**The pilot cohort.** It carries the case's most load-bearing question: where second-life hazard crosses the new-drive curve [unmeasured].
- Place it in caches and replicated tiers, which absorb device loss by design.
- Spread it across failure domains.
- Track it by power-on hours.

With no reference class, the paper's rule applies: "The planner can only bound it, phase it and buy options" (Section 13).

## 9. Signposts to actions {#signposts}

*Public market signs, read quarterly, and what the program does when each one moves.*

The case names public signposts between two futures. Path A stays tight through 2028; Path B eases from late 2027. Read them at the quarterly supply review. Each action is this plan's [argued].

| Signpost | Action |
|---|---|
| Contract prices flatten two quarters running | Lower the rate card; re-run the release test |
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

## 10. Risk register and incident playbook {#risks}

*What can go wrong with reused flash, and the first hours of the two worst incidents.*

**Risk register.** Each risk has a counter, an early sign and an owner [argued]. The risks are the case's failure modes.

| Risk | Counter | Early sign | Owner |
|---|---|---|---|
| Placement-only program | Spares first; one ranked list | Repair times on old platforms | The forum |
| Keep everything | Keep priced per period, resale decay and slot cost included; the forum decides | Cost per useful TB on old cohorts | Lifecycle transitions |
| Holding past the option's decay | The written release trigger | Drives past re-test date | Reverse logistics |
| Phantom supply | Booked only once supply answers; pegging | Commit-to-deliver gaps | Fleet provisioning |
| Second-class capacity | A stated class; a challenge channel | Asks naming new hardware | Storage systems |
| Misdiagnosis drain | Triage before any pull; bias corrected at intake | Healthy share of pulls | Machine-health engineering |
| Shape sprawl | Three grades inside the tier cap | Solver categories growing | Planning |
| Correlated concentration | Cohort cap per redundancy group | Same-cohort drives in one group | Reliability engineering |
| Firmware time bombs | Firmware baseline as a gate | Unpatched redeployed drives | Flash platform engineering |
| Blind spots | Blind cohorts to like-for-like spares only | Missing health fields | Flash platform engineering |
| Sanitization bottleneck | A staffed rate; one signer per drive | Queue age | Drive security engineering |
| Custody incident | Reconciliation at every off-host state | Any record–log gap | Drive security engineering |
| Incentive drift | Landing rule; a second technician metric | Reuse at pressured sites | Planning |
| Wear spent blindly | Endurance by cohort, quarterly | Endurance at harvest | Flash platform engineering |
| Fighting the last shortage | Quarterly rate card; release trigger | Contract prices flattening | The forum |
| Data access late | Access requested on day 1, through the sponsor | Day-10 pulls not started by day 7 | Planning |
| Legal gates the contracts | Legal consulted on the read from day 1 | Contract read not started by day 15 | Supply chain |
| Interviewees unavailable | Interviews booked on day 1; a delegate per group | Fewer than half held by day 5 | Planning |

**The cohort cap** [argued]. Name each cohort as a shared driver: "Name the driver; don't infer independence from a low measured correlation" (Section 6.6). A [cohort](/glossary/#term-cohort) is one model, one firmware and one power-on-hour band.
- **The rule.** No redundancy group holds more members of one cohort than its failure tolerance minus one.
- For example, an erasure-coded group that survives three lost drives holds at most two of any cohort (illustrative).
- A cap on a cohort's share of a rack or other failure domain is secondary.
- **Why groups, not shares.** Failures cluster. In one study, a drive in a failed drive's RAID group was over 180 times likelier to be replaced within a week (Maneas et al. 2020).
- In another, 37% of node failures came in bursts, and rack-aware placement typically tripled a stripe's mean time to failure (Ford et al. 2010).

**The risk budget**, set at G4 [argued]:
1. A cohort cap per redundancy group, set by reliability engineering. Its test is the chance of losing more cohort drives than the group tolerates within one repair window.
2. An evidence bar per tier, rising only with scored outcomes. Caches start lower, durable tiers higher.
3. An incident cost bound, signed by finance before volume grows. Finance states whether it is accrued as a reserve or expensed when drawn.

**Incident playbook: a redeployed cohort fails together (scenario S2)** [argued].

Durability comes first: protect the data, then fix the schedule. Faults keyed to power-on hours fire together across a co-harvested cohort. In one fleet, 46% of consecutive replacements came within a day of the previous one (Maneas et al. 2020).

| Step | Action | Owner | Within |
|---|---|---|---|
| 1 | Re-protect every redundancy group holding more cohort members than its tolerance; throttle rebuilds so they don't trigger more failures | Reliability engineering, with storage systems | Minutes to hours |
| 2 | Freeze redeployment of the affected cohort | Reliability engineering | Hours |
| 3 | Check firmware and power-on hours on every drive of the model, first life and second | Flash platform engineering | One day |
| 4 | Quarantine failed drives for failure analysis; authorize any vendor analysis | Flash platform engineering | One day |
| 5 | Draw on the incident bound for bridges | Finance | One day |
| 6 | Re-rank the cohort's claims in the forum | The forum | One week |
| 7 | Publish the cohort's record to the affected tiers, through the challenge channel | Planning | One week |
| 8 | Re-test the evidence bar before you resume | Reliability engineering | Before resuming |

The challenge channel follows the paper: "A consumer who can challenge a coefficient, and sometimes wins, trusts the rest of the bill" (Section 10.4).

**Incident playbook: a data-bearing drive surfaces outside custody (scenario S3)** [argued].

A record can say "erased" while the drive still holds data. In one lab study, only four of seven testable drives erased reliably. One reported success while all its data remained (Wei et al. 2011). So reconciling logs can find a lost drive, but not a failed erasure.

| Step | Action | Owner | Within |
|---|---|---|---|
| 1 | Hand the incident to drive security's own response | Drive security engineering | Hours |
| 2 | Establish whether the data was encrypted at rest, with its keys held off the drive and destroyed | Drive security engineering | Hours |
| 3 | Bring in legal and privacy for any notification clock | Legal and privacy | Hours |
| 4 | Freeze moves out of custody for every drive erased by the same tool version, station and firmware since the last validated sample | Reverse logistics | One day |
| 5 | Ask resale and recycling partners to quarantine or recall resold drives in that scope | Supply chain, with reverse logistics | One day |
| 6 | Read back the drive, and a sample of its peers, forensically | Drive security engineering | One week |
| 7 | Reconcile the record against the erasure log, and fix the handoff where any gap opened | Planning, with drive security | One week |
| 8 | Resume only when the scope reconciles and the read-back sample is clean | Drive security engineering | Before resuming |

**Standing rule** [argued]. No tool × firmware × model combination is trusted until a sampled forensic read-back has passed. Verification inspects each erase's outcome. Validation reviews that evidence and formally accepts the remaining risk (NIST SP 800-88 Rev. 2).

Proving erasure is a security discipline. The practice's part is the record.

## 11. Templates {#templates}

*Field lists for the records, sheets and notes the program produces.*

Short field lists for the artifacts this plan produces. Each follows a seed mechanism; the drive-specific fields are this plan's [argued].

**Drive record** (mechanism 5, run backwards)
- Drive ID; model; capacity; interface; form factor
- Firmware version; safe version obtainable (yes or no)
- Health: uncorrectable errors and critical warnings, with dates; grown bad blocks and their trend; available spare; capacitor test; wear; latency history
- Burn-in result and date; last full test date, for the retest-staleness limit
- Power-on hours
- State: in service → harvested → erased → in test → available → spare or placed; or out of custody (the erase-first order of the storage policy)
- Location; host platform; cohort
- Grade; costing basis; regraded SKU
- Reuse eligibility: free, constrained or forbidden
- Erasure: method; tool and its firmware; verification result; validation sample ID; reconciled at each state change
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

**Keep, redeploy or harvest sheet** (one per retiring cohort, filled per period; P2) [argued]

- Cohort; platform; host count; planned retirement date; horizon, such as four quarters
- Harvest value = yield × each sink's next-best-source value − pipeline cost.

| Line, for the next period | Keep | Redeploy whole | Harvest now |
|---|---|---|---|
| Capacity value: the [shadow price](/glossary/#term-shadow-price) in stockout zones, zero in slack | Earned | Earned, at the lighter class's price | Lost |
| Avoidable cash carry: power, repairs, technician hours | Paid | Paid, in a lighter class | Avoided |
| Slot cost: the power and space a new machine could use | Paid | Paid | Freed |
| Change in harvest value as prices fall | Lost while held | Lost while held | Locked in |
| Capital charge on the harvest value held | Paid | Paid | None |
| Depreciation, memo only | No decision weight | No decision weight | Loss on disposal, or none |

- **The rule.** Keep while next period's value exceeds next period's total carry, decay included. In accounting terms it is a relevant-cost, equipment-replacement decision.
- **Harvest is deferred, not lost.** For example, harvest now is worth $300 per drive. Keep a year at $60 carry, then harvest: about $185 if prices fall 10%, about $76 if they fall 50% (illustrative).
- So keeping must earn over $115–224 of capacity value that year.
- **Power-forced retirements.** Where the site needs the slot's power, keep isn't available. The sheet then chooses between redeploying whole elsewhere and harvesting.
- **Depreciation is a memo line.** Net book value is near zero past useful life, and depreciation is sunk and non-cash. Useful-life changes come from the controller's annual review.
- **Signing.** Finance confirms the accounting effect; the forum decides the economics, for every keep past plan.

**Forum charter** ([mechanism 10](concept-operating-mechanisms.md#m10); [forum](/glossary/#term-forum)) [argued]
- Members: the sponsor, as chair; planning, which runs it; finance; drive supply; one seat per sink; a tax seat for claims that cross legal entities
- Remit: the ranking rule and the cut line across the four sinks; exceptions from the pegging system; the decision log with overrides and brokered trades
- Rules it holds: the shortage rule; the ranking rule; the landing rule, which it ratifies
- Cadence: monthly, plus the quarterly supply review
- Overrides: logged with what moved down

**Risk-budget record** [argued]
- Cohort: model, firmware, power-on-hour band
- Cohort cap per redundancy group, the group's failure tolerance, and who set it (reliability engineering)
- Chance of a cohort loss beyond tolerance within one repair window
- Evidence bar per tier, the outcomes it rests on, and the date it last rose
- Incident cost bound, and who signed it (finance)
- Draws on the bound to date
- Next review date

**Mechanism audit checklist** (for G0, when a program exists) [argued]. Fill the last column in the days 1–5 interviews. The [strategy page](case-kuantillion-cloud-practice.md) names six to check first.

| # | Mechanism | What to ask about legacy flash | Exists in part? Where? |
|---|---|---|---|
| 1 | Declared demand in priced units | Do sinks declare drive needs in units that carry price and shape? | |
| 2 | Prior ask beside prior actual | Are spares sized on ticket history, or on true failures? | |
| 3 | Coefficient register and versioned rate card | Is there a versioned price for reused drives, by grade? | |
| 4 | Owned unused and unallocated lines | Does anyone own the stranded-flash line? | |
| 5 | Fulfillment ledger | Is a drive tracked after it leaves its host? | |
| 6 | Discontinuity register | Are firmware faults and generation breaks registered? | |
| 7 | Commitments that become institutions | Is reuse a signed commitment, or stated policy? | |
| 8 | Efficiency landing rule | Where does value recovered from a drive land? | |
| 9 | Cadence aligned to lead time and launch calendar | Is there a harvest cadence beside the build cadence? | |
| 10 | Standing arbitration forum | Who splits harvest across sinks today? | |
| 11 | Supply plan of record and commitment register | Does harvest get a dated commit or a named gap? | |
| 12 | Declaration register | Are decommissions and builds on reused drives declared? | |
| 13 | Commit-point map | Are last-time buys and decommission dates mapped? | |

**Interview guide** (days 1–5) [argued]. Two or three questions per group; record each answer as a fact, an assumption or an ask.
- **Reverse logistics and data-center operations:** What happens to a pulled SSD, step by step? Where does it wait, and for how long? Who signs each handoff?
- **Drive security engineering:** Which erase method runs for which sink? How is an erase validated? What does the cage hold today?
- **Lifecycle transitions and finance:** Was reuse ever evaluated and declined? On what numbers? Who decides when a host retires?
- **Flash platform engineering:** Which health fields exist per model? Which firmware versions have known faults?
- **Spares planning and supply chain:** Which legacy models have last-time buys open? What do the resale contracts pay, and what volumes do they require?
- **Supply chain, on the memory-reclaim program:** Which gates did it cross, and which stopped it?

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
  - Schroeder, Lagisetty and Merchant, Flash Reliability in Production: The Expected and the Unexpected, *USENIX FAST* (2016): https://www.usenix.org/conference/fast16/technical-sessions/presentation/schroeder
  - Ford, Labelle, Popovici, Stokely, Truong, Barroso, Grimes and Quinlan, Availability in Globally Distributed Storage Systems, *USENIX OSDI* (2010): https://www.usenix.org/conference/osdi10/availability-globally-distributed-storage-systems
  - Maneas, Mahdaviani, Emami and Schroeder, A Study of SSD Reliability in Large Scale Enterprise Storage Deployments, *USENIX FAST* (2020): https://www.usenix.org/conference/fast20/presentation/maneas
  - Wei, Grupp, Spada and Swanson, Reliably Erasing Data From Flash-Based Solid State Drives, *USENIX FAST* (2011): https://static.usenix.org/event/fast11/tech/full_papers/Wei.pdf
  - NIST, Guidelines for Media Sanitization, SP 800-88 Rev. 2 (2025): https://doi.org/10.6028/NIST.SP.800-88r2
  - Baldenius, Internal Pricing, *Foundations and Trends in Accounting* (2008): https://doi.org/10.1561/1400000013
  - Alter, Xue, Dimnaku and Smirni, SSD Failures in the Field: Symptoms, Causes, and Prediction Models, *SC* (2019): https://par.nsf.gov/servlets/purl/10172650

Every number on this page is illustrative unless the case tags it otherwise.
