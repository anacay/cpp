<!-- Seed edition, v0.1, built from the working paper, version 7.6. Licensed CC BY-SA 4.0. Site page: https://cpp.anacay.org/paper/10-people/ -->

# 10. People: the room around the math

*In short: capacity is a handshake among capital, supply and demand, and the planner brokers it. Then come the seams, overrides, reorganizations and gaming.*

Every capacity plan is a handshake among three parties. **Capital** is finance and the leaders who set the envelope: it has the money, and wants it to buy something. **Demand** is the teams that launch and grow products, and the shared services they call: they have plans, and want capacity on time. **Supply** is whoever turns money into running machines: the supply chain, the sites, the fleet. It has lead times and contracts, and wants a signal it can buy against.

None of the three can close the deal alone. Capital can approve, but it can't deliver. Demand can declare, but it can't fund. Supply can build, but only against a signal that's often late, padded or both. That's where the planner sits: in the middle, usually owning no capacity and no budget.

So what does a planner trade in? In my experience, four things:

- **Information:** what's coming, who holds what, and what supply can really do by when.
- **Timing:** when each question must be asked, so the answer arrives before the order has to be placed.
- **Trust:** numbers that hold up, from a planner who doesn't pad its own.
- **Credible commitments:** signatures that turn one party's promise into something the others can buy against.

The planner owes each corner something different. Capital gets numbers that hold, a cut line that names what falls below it, and early warning of finance decisions dressed as capacity ones. Supply gets signed demand before each commit point, with its stage and range, not churn. Demand gets the same picture as everyone else, a "no" that comes with a path, and capacity back when it gives some up.

The paper's two claims sit on the triangle's edges. A coefficient is the price demand pays capital for what supply provides, so it holds only while all three agree on it. And approval is capital's handshake with demand; allocation is supply's. The gap between them is the third seam (Section 10.1).

A shared service sits on two corners at once: it's supply to its callers and demand to the fleet. That's why the first seam below exists. Section 10.1's Figure 41 draws the triangle, with the seams on its edges.

## 10.1 Three seams

A platform lead gets blamed for a shortage in one meeting and for the bill in the next. It isn't personal. In my experience, the most persistent conflict in this field is structural, and it runs along three seams.

**The first seam runs between product and platform.** Product is rewarded for launches and growth; platform is measured on cost and reliability, and blamed for both. Section 5.2's identity sits on this seam: volume belongs to product, coefficient and rate to platform. Neither can manage cost alone; the mechanisms keep the conflict productive, not personal.

**The second runs between planning and finance.** Planning thinks in machines, megawatts and lead times; finance, in capital and operating spend, depreciation schedules, and a forecast already given to its own leadership. Some decisions that look purely technical cross this seam:

- A third-party bridge turns capital into operating spend.
- Deferring a decommission extends depreciation on an asset finance had written off its plan.
- An early order commits cash in one fiscal year for capacity charged back over several. So a plan reconciled only to the rate can approve spend the cash budget can't carry.

Each is a finance decision disguised as a capacity decision. Bring finance in only to set the rate, and you'll discover them at the quarterly close.

Finance often distrusts planning's numbers, and it often has reasons. Think of inflated asks, double counting, missing baselines and "just in case" capacity. Add savings promised and never seen, and teams that can't explain their own use of shared services. Trust comes back the slow way. Use one template and one format for every team, so asks can be compared. Put each team's baseline and last year's actual beside its ask (mechanism 2). Ask for a short business case tying the ask to growth, a launch, efficiency or risk. And show constrained supply against ranked demand on one page, with a way to drill down. None of it is clever. It's what makes an ask believable to someone who's been burned before.

**The third seam runs between planning and supply**, and it's where "approval is not allocation" actually lives. Planning approves in a common unit; supply buys parts, racks and buildings on dated contracts with penalties. Demand that changes inside supply's lead time makes every supplier look late; supply that commits without naming its risks makes every approval look firm. So the seam needs five artifacts both sides sign. Four are an answer to every approved ask (Section 8.3), pegging (Section 6.4), change bands and who pays beyond them (Section 6.5), and shortage rules agreed in advance (Section 9.3). The fifth is a definition of done for each handoff: what "delivered," "live" and "ready for service" mean and who accepts each, anchored on Hixson and Guliani's "Ready to serve" [6]. The SRE chapter warns against treating "ready" as binary, so a definition can have phases [7]. Supply gets matching decision rights (Section 9.2). An approval becomes firm when supply has answered it, not when the forum has voted. Figure 41 puts the three seams on the triangle's edges, with what has to cross each.

![A triangle with capital at the top, demand at the lower left and supply at the lower right, and the planner in a circle in the middle with a spoke to each corner. Capital has money and wants it to buy something. Demand has plans and wants capacity on time. Supply has lead times and contracts and wants a signal to buy against. Each edge carries two arrows. Capital to demand: envelope, cut line, the bill; demand to capital: business case, signed forecast, efficiency commitment. Capital to supply: approval to order, contract sign-off; supply to capital: liabilities, cancel windows, promised dates. Demand to supply: declarations by stage, change bands, substitutes; supply to demand: a dated commit or a named gap. A shared service straddles the demand–supply edge: supply to its callers, demand to the fleet. Seam 1, between product and platform, attaches there: volume belongs to product, the coefficient and rate to platform. Seam 2, between planning and finance, runs along capital's edges and carries three finance decisions disguised as capacity decisions: a third-party bridge, a deferred decommission and an early order. Seam 3, between planning and supply, runs along the demand–supply edge, brokered by the planner and held by an answer to every ask, pegging, change bands with who pays beyond them, shortage rules agreed in advance, and a definition of done anchored on Hixson and Guliani’s “Ready to serve” 6. The planner box reads: usually owns no capacity and no budget; information, who holds what and what's coming; timing, ask before the commit point; trust, numbers it doesn't pad; credible commitments, signatures others can buy against. Two tags mark the claims: on the capital–demand edge, the coefficient is the price on this edge; on the demand–supply edge, at seam 3, approval is not allocation. A footer says the seams of Section 10.1 run along these edges.](figures/E17.svg)

*Figure 41. Capacity is a handshake among capital, supply and demand. The planner sits in the middle, usually with no capacity and no budget, and trades in information, timing, trust and credible commitments. The three seams run along the edges.*

## 10.2 Overrides, reorganizations and misses

**Overrides.** Sometimes a senior leader will move a launch above the cut line for a reason the forum couldn't weigh, such as a contract or public commitment. Make overrides:

- **Allowed:** the executive who owns the trade-off may make it.
- **Explicit:** the log records who decided, what moved up and **what moved down**.
- **Priced:** any bridge the override needs is charged to it.

A rule of thumb from my experience: a forum overridden once a year is working. One overridden monthly is not the decision-maker, and the fix is to bring the overriding executive into it.

**Reorganizations.** A reorg can orphan a coefficient, unnoticed until it drifts. So attach every commitment, coefficient and unallocated line to a durable object (a product line, a cost center, a service identity), never a person or team name. Treat the reorg as a re-sign event: within one cycle, the new leader re-signs or formally amends the inherited commitment; until then it stands. An orphaned coefficient gets an interim owner and a transfer date.

A new owner needs more than a signature request, though. Engineers often know their own integration path well and the shared service's operating model barely. That means how a request is sized, what quota means across many sites, and why one launch waits on another. So onboard a new leader, or a new team, in one sitting. Show it what it asked for last year and what it used, its coefficients and who owns them, the commitments it inherits, and the dates that matter. Size its first ask with it, not for it. And tell it who to call when an alert fires or a launch is blocked. A team that understands its first ask usually writes a better second one.

Orphans don't only come from reorganizations. Some work falls between charters from the start. For example, if reliability engineering's charter covers serving and nothing else, the batch pipelines that feed serving may belong to no one. When they fail, the product degrades or loses features without a clean outage, so no one's alarms go off. That kind of work is often the work that matters. So once a year, lay the charters over the chain that delivers the product, end to end, and name an owner for every gap. Planning can hold a gap until someone takes it.

**Planning's own misses.** Finance remembers idle capacity; product remembers the launch that slipped. Left implicit, the shortage-to-idle ratios of Sections 6.3 and 6.5 get set by whichever critic spoke last. So finance and product sign them at the annual cycle, per supply layer and kind of demand, with supply supplying the cost of idle and the liability terms. Reliability engineering set the precedent for availability: "The business or the product must establish the system's availability target" [79]. The SRE chapter says it for capacity: base buffer sizes on "SLOs and business impact," with product, SRE and finance aligned on "risk tolerance, and cost-benefit thresholds" [7]. What this paper adds is a signed number per layer. Illustratively, that means Section 6.5's ratios for persistent demand, and near 1:1 for transient peaks. Surplus within them is the plan working, not a planning failure.

*One way to think about it* is as a budget. The SRE chapter treats the capacity target the way reliability engineers treat the availability target (Section 6.3) [7]. A signed ratio makes that a number you can count. A 4 : 1 ratio covers the eighth of ten outcomes. So if each launch is bought at its own cover point, about one launch in five should need a bridge at that layer. Call it a *shortage budget*. For example, if 20 launches a year buy machines this way, expect about four bridges. Far fewer, two years running, and the ranges are padded. Far more, and the stage records run optimistic or the ratio is too low. It's a backtest of the ratio, the kind the chapter recommends for choosing a confidence level [7]. One caution: launches tied to one driver spend the budget together (Section 6.6). This is an analogy, not a result.

When a miss happens anyway, the funnel and the decomposition show where it arose, often shared. Resolve the launch before assigning cause.

**Shocks.** When a big shock hits (a new site slips by quarters, a key supplier stalls), the informal channels that planning runs on can stop overnight. The planner has to replace them on purpose, and fast. Give every team the same short briefing: the state of the fleet, what's known about the shock this week, where supply stands, and where finance stands. Then work through that team's own forecast and requirements with it. In my judgment, the same picture for everyone keeps rumors from turning into forecasts. It also makes the hard trades (tighter forecasts, reworked asks, moving tenants off constrained capacity, a bridge) feel shared rather than imposed. While supply is unknown, a simple holding policy helps. Everyone stays at current capacity plus approved growth and buffers, and everything else goes through a stricter review. The policy also says when it will be revisited.

**Re-baseline.** After a shock, or when plan and actual have drifted far apart, the old plan stops being a useful baseline. In my experience, patching it line by line rarely converges. It works better to pick a date, take a snapshot of actuals, and make that the new baseline. Then work through the teams one by one, brokering trades between those holding excess and those running short (Section 6.4). Hold the utilization floor agreed beforehand: capacity that keeps a team below it is excess, and goes back into the shared reserve, under the landing rule (mechanism 8). Then restart the forecast from the new baseline, with each team's declarations refreshed. Section 5.3 restates a coefficient's history at a break; this restates the plan's. Section 5.2 suggests making it routine rather than a one-off.

## 10.3 Gaming

Say an urgent email arrives the week after the cut line was drawn: an undeclared launch needs capacity now. If that ask costs its sender nothing extra, you've taught the whole organization when to file.

Capacity requests are budgets in hardware units, pathologies included. People "lie in the formulation of budgets" and "game the realisation" [95], and organizations get the behavior they pay for [96]. The common games, and their counters:

| Game | What it looks like | Counter |
|---|---|---|
| The late ask | Demand arrives after the cut line as an emergency | Bridge premium charged to it; late asks reported by owner |
| Relabeling | Organic growth declared as a launch to jump the queue | Launch priority requires a dated declaration with a named owner |
| Stage inflation | A declaration presented as configured to win a grant or a place above the cut line | Promotion only on the stage's evidence (Section 5.4); size and slip scored by stage |
| Parked intents | Placeholder intents filed to reserve a share of the envelope | Intents enter at their stage's record and expire if they don't advance |
| Reliability as trump card | Buffer labeled "reliability" so no one questions it | Named buffers (Section 6.3), each sized by its owner |
| Holding for a slipped launch | Capacity reserved for a launch that quietly moved | Grants expire unless re-confirmed |
| Churn inside the lead time | An ask changed again and again after supply has ordered | Change bands; changes inside the lead time reported by requester |
| Planning's own padding | Unstated buffer added by planners | Forecast-error buffer as a signed line |

The last row matters most: planning that pads its own numbers can't credibly ask anyone else not to. Figure 42 pins each game to the point in the cycle where it pays off.

![A strip of six points in the planning cycle (intake, declaration stages, cut line, grant, inside the lead time, buffers), with eight games above and their counters below. Capacity requests are budgets, pathologies included 95, 96. At intake, relabeling, organic growth declared as a launch to jump the queue: launch priority requires a dated declaration with a named owner. At the stages, parked intents enter at their stage's record and expire if they don't advance, and stage inflation is met by promotion only on the stage's evidence, with size and slip scored by stage. At the cut line, a late ask is charged its bridge premium and late asks are reported by owner. At the grant, capacity held for a launch that quietly moved expires unless re-confirmed. Inside the lead time, churn is bounded by change bands, with changes reported by requester. At buffers, reliability as a trump card is met with named buffers, each sized by its owner, and planning's own padding, which matters most, becomes a signed forecast-error buffer line.](figures/E18.svg)

*Figure 42. Each game pays off at one point in the cycle, and its counter sits at that point. The one that matters most is planning's own.*

## 10.4 Legitimacy, change and staffing

**Past a point, legitimacy matters more than precision in whether anyone acts on the number.** Ostrom's design principles for durable commons map onto shared infrastructure [97], and one matters most: a channel to challenge coefficients. A consumer who can challenge a coefficient, and sometimes wins, trusts the rest of the bill. Figure 43 draws the channel with three parts the paper already has. The first two are the coefficient register, with each coefficient published and versioned (mechanism 3), and the forum, which rules and keeps the decision log (mechanism 10). The third is the discontinuity register (mechanism 6).

![Swimlane flowchart in three lanes: the consuming team, the forum (run by planning), and the service owner with finance. The service owner publishes the coefficient and rate with a version, an effective date, an owner and a valid range (mechanism 3). The consuming team, which needs its own coefficient, reproducible from its telemetry, challenges a coefficient. The forum rules on the challenge (mechanism 10), reading the published version, as it ruled on a new driver in Section 7. A diamond asks whether the challenge wins. If not, the published version stays in use. If so, the service owner restates the history per service, or re-fits, and a new version takes effect from its effective date, not retroactively. A strip shows the record it leaves: the ruling in the forum's decision log (mechanism 10); if the challenge wins, the new version and its effective date in the coefficient register and rate card's change log (mechanism 3), and the cause in the discontinuity register (mechanism 6). Notes say that who pays a coefficient term is a separate rule, agreed with finance before the miss; that planning publishes the same indicators about the infrastructure organization's coefficients as about consumers' forecasts; and that a consumer who can challenge a coefficient, and sometimes wins, trusts the rest of the bill, one of Ostrom's design principles for durable commons 97.](figures/E32.svg)

*Figure 43. A channel to challenge coefficients: the consumer brings the challenge, the forum rules, and sometimes the consumer wins. Every ruling goes in the forum's decision log; a win also leaves a new version, from its effective date, with its cause recorded.*

Escalate in steps: nudges before bills, bills before constraints. Spotify nudged only "teams that are growing faster than Spotify's business" [98]. Neither showback nor chargeback is more mature than the other [99], but chargeback without the right to change consumption is a tax.

**Change in the right order.** Moving from team-held reservations to shared pools asks a team to trade a certain asset for a promise. So earn it: prove fulfillment first, pool the buffer before the base, and give returners a right of recall. Move to attributed cost only after a full cycle of showback.

**Give each audience what it needs.** Executives need one page of decisions. It shows what is above and below the cut line, and what just below it could be funded and at what cost. It also shows what above it carries fulfillment risk and until when, and any decision needed today. Engineers need their own coefficient, reproducible from their telemetry, with forecast error treated as data, not fault.

In between, the planner translates. Product speaks in launches, users and requests per second. Supply speaks in shapes, sites and dates. Finance speaks in dollars, years and depreciation. In my experience, much of planning is saying one party's need in another party's words without losing what it meant. Reviews help when every line is one of three things: a **fact** (measured), an **assumption** (someone's judgment, with an owner) or an **ask** (a decision needed, by when). A review that mixes them becomes a status update; one that separates them produces decisions.

**Where planning reports matters less than who owns the cut line.** Inside infrastructure, planning knows supply but is suspected of favoring it; inside finance, it's trusted on numbers but not on shapes. Either works if the forum owns the cut line, and planning publishes the same indicators about the infrastructure organization's coefficients as about consumers' forecasts. And don't let brokering live in one head: log every trade and rotate the role, or unlogged trades become a second, invisible arbitration forum.
