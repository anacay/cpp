<!-- Seed edition, v0.1, built from the working paper, version 7.8. Licensed CC BY-SA 4.0. Site page: https://cpp.anacay.org/paper/9-the-operating-discipline/ -->

# 9. The operating discipline: keeping the agreement

*In short: thirteen mechanisms, each an artifact with an owner, keep the agreement true from one cycle to the next.*

Sections 7 and 8 built the artifacts for one launch. The harder problem is keeping them true, cycle after cycle, as people, budgets and coefficients move. Much of this is published. There's a monthly consensus forecast approved by customers, finance and operations, with accountability metrics [8], and capacity contracts with a plan of record approved by leadership [31]. There's also an intake that already knows each team's allocation, usage and idle capacity [34]. And there's the SRE chapter's plan of record (Section 3) [7]. What I haven't found, in the sources I could read, is one set of artifacts and owners that joins them with coefficient ownership, a fulfillment ledger and a declaration register. That joining, argued from practice, is what this paper offers.

## 9.1 A cadence that turns uncertainty into commitment

At the annual review, one slide sums every team's ask; the next shows finance's number. The cadence exists to close that gap. Each cycle commits only what its lead time forces. The cycles nest, slowest outside:

1. **Annual:** set the envelope and first cut line; pre-position the longest-lead resources; sign forecasts and efficiency commitments.
2. **Quarterly:** specify demand in driver units and shapes, and re-forecast against actuals. Hold a supply review (what supply can commit, where it can't, which risks moved), and place medium-lead orders on its answers.
3. **Monthly:** supply updates commits and named gaps; re-rank launches against supply; move the cut line.
4. **Continuous steering:** arbitrate, broker, run bridges, keep the fulfillment ledger.
5. **Post-launch:** actuals become the next coefficient; log discontinuities; decompose variance.

Each level serves one band of Figure 22's commit points, from intents (annual) to live launches (steering). It's sales and operations planning for internal infrastructure [23], nested by lead time as in hierarchical production planning [3]. Operators publish versions: a monthly rolling four-quarter consensus [8], quarterly plans built on the expected outcome of earlier quarters [1], and budgets whose quarterly or annual boundaries add to lead time [6]. In my experience, the step most often missing is the supply review. That's a fixed point between the demand review and the executive decision, where supply brings its own plan, constraints and risks. Figure 37 lays the cycles on a calendar, with the supply review highlighted.

![24-month timeline. Context lanes show finance envelope, budget lock and goal-setting dates. Nested bands show the annual, quarterly, monthly and continuous steering cycles, each aligned on the right to a lead time from years down to minutes. One month after each launch, a post-launch review feeds the next quarterly intake (dashed arrows). A starred month-16 envelope change moves the cut line. Months 11–12 are an off-cycle zone where a gate can block launches. Each quarterly cycle includes a supply review where supply brings its own plan, constraints and risks; a callout marks it as, in the author's experience, the step most often missing.](figures/A5.svg)

*Figure 37 (illustrative timings). Each horizon commits only what its lead time demands. Actuals flow back into the next intake, and an envelope change re-cuts the ranked list instead of reopening every commitment. The supply review sits between demand and decision each quarter.*

**Closing the gap with finance.** In my experience, finance sets the envelope top-down, from cash, committed depreciation and, at a public company, capital guidance given to investors. Declared demand sums higher. As Hixson and Guliani put it, "it will almost certainly be impossible to fund the capacity requested of each product at its most optimistic growth rate without any improvements in efficiency" [6]. So the envelope draws a cut line through the ranked list, and everything below it is named, not silently trimmed pro rata.

Envelopes move after signing, too. A mid-cycle cut or pull-in is a re-sign event: the cut line moves, and displaced claims are named in an order agreed beforehand (the *re-cut order*). A plan that absorbs a 10% cut (illustrative) by moving one line survives; one renegotiated team by team does not. Figure 38 follows a cut, a slip or a shortage through the re-cut.

**Fitting calendars you don't control.** Close the annual horizon a few weeks before finance's budget lock, and write commitments into teams' own goals. In my experience, a forum that meets only when decisions are due gets executives; one that meets more often gets delegates.

**No surprises in the room.** In my experience, a decision meeting goes well when nobody in it sees their number for the first time. So walk the numbers up in steps. First, take the baselines to the leaders who own the biggest launches, for their read on what matters. Then gather demand from the teams, and take it back to those leaders to rank and trim. Only then put the top-down view and the bottom-up one side by side for the executives. Finance, and whoever approves orders, come after that, and they'll want the business cases for the largest asks already written. In the room, have answers ready. When a question has no answer yet, say so, take it back to the engineers, and bring the answer back by a date. That's how a forum learns to trust the next answer.

**Saying no.** Planning must be able to refuse. Some refusals only reflect calendars out of step, and aligning the calendars removes them. For real scarcity, the refusal is a mechanism: written, at intake, citing the binding dimension and the cut line, and owned by the forum. It comes with a path forward: a re-shaped ask, a phased launch, placement elsewhere or a dated slot next cycle. A refusal with no path forward gets routed around, and capacity routed around is no longer planned.

Where does the right to refuse come from? In my experience, rarely from rank; planners usually have none. It comes from the number and the team's own signature. A team that signed a forecast or utilization commitment, and is far outside it, can be asked to wait, and that's defensible because the team wrote the terms. Keep the hold for serious misses, and say in advance what counts as one. A gate used for small misses feels like punishment, and gets routed around too. In the first year, enforcement rests on the planner's persuasion, which doesn't scale and doesn't win friends. Mechanism 7 is the way out: write the commitments into the annual agreement, so after that the agreement enforces them, not a person. Once the planning calendar matches the launch calendar, teams know the dates and what they signed, and they unblock themselves by keeping their word.

![Flowchart on one page with two paths. On the left, an envelope cut or pull-in, or a supply slip treated as an envelope change in time, reaches a diamond: was the re-cut order agreed beforehand? If not, the plan is renegotiated team by team and doesn't survive. If so, the forum re-signs with finance, the cut line moves in ranked order, and displaced claims are named, not trimmed pro rata. On the right, a shortage in one shape at one site follows its own rule: a diamond asks whether the shortage rule, who goes short first, was agreed in the forum beforehand. If not, written during the shortage, it's a negotiation. If so, supply carries out who goes short first. Both paths then ask whether a bridge can cover a displaced claim; if not, the claim stays named. A ladder lists bridges by time to capacity: re-pegging a slipped launch's supply (days); reclaiming (days to weeks); shifting demand (hours to weeks for stateless serving); reallocating between tenants (weeks); deferring a decommission (weeks); third-party capacity (months with a standing agreement); and facility redesign (quarters to years). Each premium is charged to its cause. An override path lets a named executive move a launch above the line, logged with what moved down and charged for its bridges.](figures/E15.svg)

*Figure 38. An envelope cut or a supply slip moves the cut line in an order agreed in advance; a shortage in one shape follows its own rule, agreed beforehand. Either way, name what's displaced, bridge what can be bridged and charge each premium to its cause. Bridge speeds are the paper's judgment.*

## 9.2 Thirteen mechanisms

The whole discipline on one page. Read each row as a sentence: *this* artifact, owned by *this* role; without it, *this* goes wrong; *this* indicator shows it's working. The thirteen do four jobs. Mechanisms 1, 2 and 12 keep demand honest, and 3, 4 and 6 keep price honest. Then 5, 11 and 13 keep supply honest, and 7, 8, 9 and 10 make decisions stick. Two rows sit close to the claims, so here's the line between them. The first claim says a coefficient is an agreement; mechanism 3 is the register that keeps it one, version by version. The second says approval is not allocation; mechanism 5 is the ledger that tracks the gap. Figure 39 groups them.

| # | Mechanism | Artifact | Owner | If missing | Indicator |
|---|---|---|---|---|---|
| 1 | Declared demand in priced units | Intake pre-filled from telemetry in driver units; team confirms driver forecast, signs any override | Consuming team's accountable lead | Planners guess; forecasts disowned | Capacity with a named declarer |
| 2 | Prior ask beside prior actual | Intake columns: last ask, last actual, variance; for step changes, the ask's stage, and size and date against actual | Consuming team; planning supplies data | "Just in case" inflation | Bias by owner at the commit point the ask fed; by stage for step changes |
| 3 | Coefficient register and versioned rate card | Each coefficient and rate, published with a version, an effective date, an owner and a valid range | Service owner, with finance | Opaque, drifting rate | Variance from unannounced changes |
| 4 | Owned unused and unallocated lines | Each its own line in every report | Service owner (not necessarily the cause); finance keeps score | Remainder folded into rates | Unused and unallocated shares and trends |
| 5 | Fulfillment ledger | Per ask: approved (gross) → net → committed → allocated → delivered → live → adopted; firmness class, including uncommitted | Planning carries the gap; each step's performer owns its entry (supply: committed, delivered; site team: live) | Approval treated as delivery; unowned netting assumptions; idle grants | Unfulfilled backlog and its age |
| 6 | Discontinuity register | Hardware changes, migrations, re-grains, reclamations, launches | Coefficient owner | Forecasting through breaks | Error after discontinuities |
| 7 | Commitments that become institutions | Signed forecast and efficiency commitment in the annual capacity agreement | Consuming team's leader, with finance | Enforcement depends on one person | Capacity under signed commitment |
| 8 | Efficiency landing rule | Written split for recovered capacity, agreed before any recovery | Planning, with finance | Incentive to recover dies | Recovery re-funded versus clawed back |
| 9 | Cadence aligned to lead time and launch calendar | Published planning calendar | Planning program lead | Hoarding; off-cycle exceptions | Launches needing exceptions |
| 10 | Standing arbitration forum | Ranked list, cut line, decision log with overrides and brokered trades | Named executive forum, run by planning | Escalation by volume; invisible overrides | Decisions reopened; overrides |
| 11 | Supply plan of record and commitment register | Per approved ask, a dated commit with confidence or a named gap; order-to-ask pegging; contracts with liability schedule (owed if cancelled, by date), reschedule terms, owner; decommissions as dated supply steps; substitutions; shared supply dependencies; supply step changes by stage | Supply chain, with planning and finance | Delivered treated as live; approvals treated as firm before supply answers; liabilities found at close | Promised versus actual dates and sizes, by stage, paired with changes to approved asks inside the lead time, by requester |
| 12 | Declaration register | Per step change: owner, stage, size and date ranges, change bands per stage, transient and persistent shapes, shortfall tolerance, shared drivers, record | Declaring team; planning keeps the register | Launches arrive as surprises or multipliers; slips hold capacity | Step-change capacity declared a stage before its commit point; size and slip error by stage; share of the high scenario held as options versus owned |
| 13 | Commit-point map | Per supply layer, and per declaration (Appendix A): usual and cautious lead time, need date, commit point, usual stage by then, instrument, cost to change shape after commit | Supply chain, with planning | Long-lead supply bought on rumors, or not at all; expedites | Orders placed after their commit point, by cause (late ask or late order); options exercised versus lapsed; bridges per layer against the count the signed ratio implies (Section 10.2) |

![Thirteen numbered tiles in four groups. Keep demand honest: 1 declared demand in priced units, 2 prior ask beside prior actual, 12 declaration register. Keep price honest: 3 coefficient register and versioned rate card, 4 owned unused and unallocated lines, 6 discontinuity register. Keep supply honest: 5 fulfillment ledger, 11 supply plan of record and commitment register, 13 commit-point map. Make decisions stick: 7 commitments that become institutions, 8 efficiency landing rule, 9 cadence aligned to lead time and launch calendar, 10 standing arbitration forum. Each tile names its artifact and owner. Six are outlined as carrying the argument: 2, 3, 5, 8, 12 and 13; the commit-point method writes into 12 and 13.](figures/D5.svg)

*Figure 39. The operating discipline as thirteen artifacts, each with an owner, grouped by the job they do. Outlined: the six that carry the paper's argument.*

**You'll know it's working when…** Seven of the mechanisms have a test that can fail:

- **2, prior ask beside prior actual:** forecast bias falls within a number of cycles stated in advance. If it doesn't, the column is decoration.
- **3, coefficient register and versioned rate card:** variance from unannounced changes shrinks.
- **5, fulfillment ledger:** fewer launches are delayed for capacity. If not, the gap lies in lead time or turn-up.
- **8, efficiency landing rule:** re-funded recovery lasts, and clawed-back recovery decays.
- **11, supply plan of record and commitment register:** the gap between promised and actual delivery dates narrows. And with a supply answer for every ask, fewer approvals turn out to be undesigned gaps; the paired indicators show whether late supply followed late asks.
- **12, declaration register:** scoring declarations by stage makes intents' size error stable enough to discount, if not smaller.
- **13, commit-point map:** fewer orders are placed after their commit point, and their bridge premiums shrink.

The other six (1, 4, 6, 7, 9 and 10) have no test of this kind yet. For them, watch the Indicator column.

Nine decision rights sit outside the Owner column:

- **Overriding the cut line:** a named executive, logged with the displaced claim.
- **Re-cutting the plan when the envelope changes:** the forum, in ranked order, with finance.
- **Promoting, demoting or expiring a declaration:** planning, on the stage's evidence or a missed target date (Section 9.3).
- **Re-signing after a reorganization:** the new accountable leader.
- **Interim owners for orphaned coefficients:** planning.
- **The shortage-to-idle ratios:** finance and product jointly; supply provides the cost of idle and the liability terms.
- **Change bands inside each lead time:** supply and planning, signed by the declaring team, with finance agreeing who pays for a change outside them.
- **Answering an ask with a commit or a gap, and accepting a substitute shape or site:** supply.
- **Reliability buffers:** reliability engineering.

Figure 40 sets the nine rights against the roles.

![Matrix of nine decision rights against seven roles. A named executive, a column of its own, holds only the cut-line override, logged with the displaced claim. The forum re-cuts the plan in ranked order, with finance, when the envelope changes. Planning promotes, demotes or expires declarations, on the stage's evidence or a missed target date, and names interim owners for orphaned coefficients. The new accountable leader re-signs after a reorganization. Finance and product, the declaring team, set the shortage-to-idle ratios jointly, with supply's input on the cost of idle and the liability terms. Supply and planning set change bands inside each lead time, the declaring team signs them, and finance agrees who pays for a change outside them. Supply answers each ask with a commit or a gap and accepts a substitute shape or site. Reliability engineering sets reliability buffers. A footer adds the efficiency landing rule, who keeps capacity a team saves, agreed before any recovery by planning with finance (mechanism 8).](figures/E16.svg)

*Figure 40. Nine decisions that sit outside the mechanisms' owner column, and who holds each. Supply holds the answer to every ask; finance co-signs every rule about who pays. The landing rule, who keeps capacity a team saves, is agreed before any recovery.*

## 9.3 Notes on the mechanisms

**Pre-fill, then confirm.** A blank template returns last year's numbers plus a growth factor. So planning pre-fills the intake from telemetry and current coefficients, and the team adds two things: its driver forecast, and any override of the pre-filled shape, with a reason, signed. Effort goes where the team knows something the planner doesn't.

**Talk before you send the form.** A pre-filled intake still arrives as a form from a stranger. It comes back more credible when the people filling it in have already talked with the person collecting it, one to one, about their own service. So do that before the intake opens. Then gather teams in small groups, and let each one say what it believes its own biggest launches are. Hand out the pre-filled intake at the end of that session. *My guess* is that teams pad less in front of the peers they'll compete with for the same envelope. Either way, the planner leaves knowing who holds what and what's coming, which is most of what brokering needs later (Section 6.4).

**Prior actuals in the intake.** When the intake shows "you asked for X and used Y," the padding talk happens before the ask. Bias (a governance problem) is tracked apart from dispersion (a buffer input), and step changes are scored by stage (Section 5.4).

**Declarations expire.** A placeholder can hold capacity for a year for a launch nobody mentions anymore. So set a clock: an intent that hasn't advanced by its target date leaves the envelope unless re-confirmed, and a configured launch's grant lapses if its date passes unconfirmed. The slip becomes a recorded event. One public analogue is automated: the SRE chapter describes AI sweeps that reclaim "inactive or expired ML quota credits" [7].

A sweep is only as fair as the rules it follows. The chapter notes that easy access to capacity reduces hoarding [7]; a harsh reclaim, I'd argue, brings it back. So an automated sweep should follow the landing rule (mechanism 8) and honor any right of recall (Section 10.4). It should also log each reclaim like an override, since the chapter warns that "agents can behave in surprising ways" [7]. *My guess* is that teams will judge a sweep less by how much it frees than by whether what they return comes back when needed.

**Ask for slow attributes first** (Section 6.5). And ask which substitutes the team would accept (other shapes, regions, a smaller first phase, a later date); each one is free supply flexibility.

**Shortage rules come before the shortage.** The re-cut order handles a smaller envelope. A delivery short in one shape at one site needs its own rule: who goes short first. Agree it in the forum beforehand; supply carries it out. Written during the shortage, it's a negotiation.

**Efficiency is a funding source.** Under chargeback with no reinvestment rule, a team that cuts its footprint gets a smaller bill at best. At worst, it gets a higher rate once a usage-based denominator shrinks (Section 4). Recovered capacity has to land where the recoverer sees it, as gain-sharing plans recognize [4], while in a lean year finance will rationally want to book it as savings. So agree the split before any recovery is known: for example, shares booked as savings, returned to the recoverer and held centrally. A rule agreed in advance is a contract; one proposed after the savings appear is a request.

The landing rule matters most when the envelope freezes, because then the only capital is what can be freed. For example, if budgets freeze partway into a move from an old platform to a new one, the move has to be paid for out of the old platform. One path is to squeeze both ends at once. On the new side, negotiate requirements down to what the team can genuinely run on: every line removed is capacity nobody has to find. On the old side, work with the service owners to raise utilization, land real optimizations and size new launches tightly: every unit freed pays for the next step. Neither end alone frees enough. The first step is the hardest, because it's paid for before anyone knows what the new platform really needs. So move in small slices. Each one buys headroom and a better read of the exchange rate between old and new (as in Section 5.4, the rollout is the measurement).

**The unallocated line is a trust device.** Most bills have a remainder nobody can attribute. TBM parks unallocated "fallout" in staging buckets with temporary pro-rata splits [38]. The FinOps Foundation describes an "informed ignore," budgeting shared items centrally [21]. Neither names an owner accountable for shrinking it. Finance, not planning, should keep the score, or the indicators become self-assessment.

## 9.4 How to tell if this works

Little of this has been measured in public, as far as I can find. The nearest results come from two sources. Olavson's comparison of forecast methods puts component safety stock (the parts buffer of Section 6.3) at about 0.6 times its customer-driven level under triangulation [8]. Triangulation here means customer forecasts checked against statistical ones. Gupta reports that a driver-based intake cut a three-to-four-month planning exercise to about one month [34].

Each mechanism's own test sits with it, in Section 9.2, under *You'll know it's working when…*
