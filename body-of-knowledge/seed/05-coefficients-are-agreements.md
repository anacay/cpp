<!-- Seed edition, v0.1, built from the working paper, version 7.6. Licensed CC BY-SA 4.0. Site page: https://cpp.anacay.org/paper/5-coefficients-are-agreements/ -->

# 5. Coefficients are agreements

*In short: one coefficient forecasts the service's load and prices the caller's growth, so it needs an owner, versions, and restating when the hardware or the meter changes. Demand with no history enters as a declaration that firms up in stages.*

## 5.1 The grain problem: who caused the load

Put the usage export (jobs by cluster) next to the budget review (products and teams), and neither maps cleanly onto the other. Consumption is measured where it happens: binary, job, resource dimension, location. Decisions are made at another grain: product, team, budget line. Someone has to own the roll-up, and the data a decision needs often sits one level below it.

Twitter (now X) described a chargeback design that began with "a canonical way to identify a service across infrastructures" [14]. But a tag says who owns a resource, not who caused the load on a shared service.

## 5.2 One coefficient, two readings

In one meeting, a service's planner sizes next year's fleet; in another, a product team defends its bill. Both lean on one number. A consumer's bill is approximately:

**Cost = V × α × r**

In words: how much the consumer does, times the resource each unit uses, times what that resource costs. *V* moves with the consumer's product; α with code, cache behavior, request mix, data size and hardware; *r* with the service's cost structure.

Take Figure 9's Product A: 0.4 calls to Service X per request at 2.5 ms of CPU per call, so α is 1.0 ms per request. A busy core supplies 1,000 ms of CPU a second, so every 1,000 requests per second keeps one core busy. The planner reads that forward: 100,000 more requests per second means 100 more busy cores. The product team reads it backward: each extra 1,000 requests per second is one busy core-year on its bill, about $1,051 at Section 7's illustrative rate. Figure 9 draws both readings. If α moves, the fleet plan and the bill move together.

So if α or r is opaque and moving, a consumer can know its demand exactly and still not price it. A drifting rate is an unrecorded change to every consumer's plan. The service owes its consumers a legible, stable rate; the planner owes the service a forecast of the load they'll cause.

![Flow diagram: Products A and B feed a front-end tier, which calls Service X (0.4 × 2.5 ms) and Service Y (0.1 × 5 ms). Product C calls Service Y directly (0.2 × 1 ms), and replication links X to Y. A solid arrow reads the coefficient forward as a load forecast; Product A's coefficient at Service X is 0.4 × 2.5 = 1.0 ms per request. A dashed arrow reads it backward as a price charged to the causer. Below, Cost = V × α × r, with owners for volume, coefficient and rate. Forward, 1,000 requests per second keeps one core busy; backward, each extra 1,000 is about $1,051 a year at the illustrative rate. Service Y and Products B and C are illustrative.](figures/A1.svg)

*Figure 9. The same coefficient forecasts a shared service's load and prices a consumer's growth, so both sides need it stable and readable.*

**Decompose the variance.** When a bill misses, split the miss by term so each piece goes to whoever moved it:

*ΔCost = ΔV·α₀·r₀ + V₁·Δα·r₀ + V₁·α₁·Δr*

In words (0 is plan, 1 is actual), swap in one actual at a time: volume first, then the coefficient, then the rate. The pieces add up exactly to the miss, the logic accountants use for standard-cost variances; Section 7 runs the numbers. One choice hides in it: the order. Picture a rectangle growing wider and taller. Each side strip belongs to one move, but the corner grew from both, and someone must say whose it is. Here the overlap lands on the later term, a policy choice; Section 7 shows how much moves when the order changes. A symmetric method such as the logarithmic mean Divisia index avoids choosing, by treating no term as first [52]. Nor is the coefficient term, often read as "efficiency," one owner's: α moves with the service's code and with the consumer's mix and data, so record the cause of each restatement.

**Version the rate and the coefficient** like a price list, with effective dates and a change log. Govern each coefficient as an approximation valid within a range, with an owner, an age and an error threshold that triggers a re-fit. *One way to think about it:* set that threshold in money, not percent, as drift times volume times rate. The SRE chapter's test (Section 12) applies here. Illustratively, 5% drift on Section 7's $525,600 bill is about $26,000 a year; on a $40,000 bill it's $2,000. A threshold of $25,000 re-fits the first and lets the second wait for its age limit. Hixson and Guliani advise checking their blow-up factors regularly to see they "remain accurate" [6]. They also call for writing down the design assumptions a system depends on (a read-to-write ratio, a traffic spread). That's because demand that breaks them needs engineering first or a consciously accepted risk [6]. Writing them down is the same idea as a valid range.

**Measure the ratio, and keep measuring it.** Who notices when a coefficient drifts? The 2026 SRE chapter goes further on monitoring, and this half of the loop is its work [7]. It starts from a driver that makes sense for the product, which it calls "intrinsic product metrics" [7]. Laid out as steps, its advice runs like this:

1. **Pick a business driver,** such as daily active users, sales transactions or page views [7].
2. **Instrument the driver and the infrastructure together,** including allocations and utilization [7].
3. **Compute the ratio continuously.** The chapter asks teams to graph ratios such as "cores per 1,000 active users" and alert when they change significantly [7].
4. **Alert on two things:** the ratio shifting, which catches regressions and changes in usage, and, as the chapter suggests considering, consumption that "deviates from predictions" [7].
5. **Route deviations to planning.** If the service handles overload gracefully, a deviation can be "logged as tickets for the planning team" instead of paging on-call [7].
6. **Reuse the ratios before launch,** in "pre-launch performance testing and A/B testing" and in periodic benchmarks [7].
7. **Re-validate the model periodically,** and use the relationships to find "potential efficiency and optimization projects" [7].
8. **Feed it back into design.** Knowing what each unit of business value costs gives teams the data to "influence the product architecture" [7]. The chapter says measuring value against cost can steer future design, "helping to create a virtuous cycle" [7].

The chapter treats the mapping as "a living model that evolves alongside the system" [7]. What this paper adds is the other reading: the same ratio is a price, so it needs an owner and versions. When the measuring loop finds a shift, a change to the ratio is a change to every caller's bill. So it gets an owner and a new version with an effective date, not a quiet edit.

*One way to see it* (I haven't found it in the public record): the chapter's two alerts are the variance decomposition above, run continuously. The ratio alert watches α, the service owner's term. For that, it has to compare the ratio with its published version, not just its recent past: a coefficient that was wrong from the start never shifts. The forecast alert, read while the ratio holds at that published value, watches *V*, the product team's term. So each alert already knows which owner it goes to. The owner still records the cause, since a consumer's mix can move α too. Neither alert watches the third term, the rate; that's the price list's job.

*One way to think about it:* the re-baseline of Section 10.2 doesn't have to be a one-off. Run it on a set cadence, or whenever the gap between plan and actual passes a threshold set in money. Then it becomes a *sharpen the estimates* step in the loop. The gap at each re-baseline is the forecast error. The decomposition splits it by owner: volume to the product team, the coefficient to the service owner, the rate to the service owner with finance. Each owner's record then sets how far its next forecast is trusted, as stage records do for declarations (Section 5.4). It sits close to the chapter's own advice to backtest past predictions and periodically validate the planning model [7]. What's added here, as far as I can find, is scoring the gap by owner. Figure 10 draws the two loops: the chapter's measuring ring and this paper's agreement ring, meeting at the alerts.

![Two rings that meet at the alerts. The measuring ring, credited to the 2026 SRE chapter 7: pick a business driver, the chapter's intrinsic product metrics; collect driver and resource telemetry together; compute the ratio continuously; raise two alerts, one when the ratio shifts and one when consumption deviates from the forecast; log them as tickets to planning; reuse the ratios in pre-launch tests and benchmarks; re-validate periodically and find efficiency projects, which feed back into design. The agreement ring, this paper's: the coefficient is published with a version, an effective date, an owner and a valid range (mechanism 3, the service owner with finance). It is used two ways, forward as a load forecast and backward as a price, and measured on actuals, with its age recorded and its accuracy checked, as Hixson and Guliani advise 6. A diamond asks whether it has passed its error threshold, set in money, or met a break, such as a hardware change, migration or re-grain. If not, it stays in use. If so, its history is restated per service, or it is re-fitted, the cause is logged in the discontinuity register (mechanism 6), and a new version takes effect from its date. Three inputs enter the agreement ring: a consumer's challenge, which sometimes wins; a reorganization, which gives an orphaned coefficient an interim owner and a transfer date; and a newly found driver, added with its own coefficient and rate from its effective date, not retroactively. A re-baseline node on the agreement ring, fed by the gap between plan and actual, resets the baseline on a set cadence or past a threshold and scores the gap by owner. Where the rings meet, both alerts are read against the published coefficient: the ratio alert goes to the service owner, who owns the coefficient, and the forecast alert, while the ratio holds, goes to the product team, who owns volume. A note says reclamation changes supply, not the coefficient, so it stays out of the history.](figures/E5.svg)

*Figure 10. Two rings. The SRE chapter's measuring ring tracks the ratio and raises two alerts [7]; this paper's agreement ring publishes, versions and restates it. The alerts are where they meet, each going to the owner of the term it watches.*

The linear form hides two things (Figure 11).

**First, capacity is sized to the coincident peak.** A road is built for rush hour, not midnight, so a consumer's share is its contribution at that peak. Illustratively, two consumers each peak at 100 cores, one at 2 p.m. (the service's peak), one at 3 a.m. If the night one sends 20 cores' worth at 2 p.m., it caused 20, not 100, and a linear average rate overcharges it. Measure contribution as one of the highest coincident peaks over the horizon (a high quantile; Section 6.3), failover load included. So moving flexible work off the peak, demand shaping, is a capacity lever. The SRE chapter's case for it: "it is cheaper to fix demand than it is to have more and more supply available" [7]. Google's carbon-aware computing does a version of it daily, capping hourly capacity for flexible work while keeping its daily total [53]. A consumer that accepts shaping should see that in its rate.

**Second, redundancy is a multiplier that moves in steps.** Surviving the loss of *k* of *n* failure domains takes *n*/(*n*−*k*) times peak, assuming load redistributes evenly. The survivors carry the whole peak, so three domains with one loss need 1.5 times peak. Layout sets the multiplier, but the consumer's availability tier sets *k*, so a higher tier is a driver and belongs in the rate. Illustratively, with four domains, surviving one loss takes 4/3 ≈ 1.33 times peak; surviving two takes 4/2 = 2: half again as much capacity, from the tier alone. Hixson and Guliani note that reliability can be bought "with increasingly large piles of money as you request more 'nines'" [6].

![(a) Two consumers each peak at 100 cores, one at 2 p.m., the service's peak, one at 3 a.m.; the night consumer sends 20 at 2 p.m., so it caused 20. (b) Surviving one loss of three domains takes 1.5 times peak; one of four, 1.33; two of four, 2. The number of losses to survive is set by the consumer's availability tier. Illustrative.](figures/C3.svg)

*Figure 11. Two things Cost = V × α × r hides: a consumer's share is its load at the service's peak, and the availability tier multiplies capacity in steps. Illustrative.*

## 5.3 Back-adjust through the breaks

Take a CPU-per-request chart with a cliff in it: the quarter new hardware landed. A capacity trend is a smoothed, lagging average that can't tell a one-time jump from a change in direction, so a trend fitted through the cliff misreads next year. Financial data offers an analogy (Figure 12):

- **A split.** A hardware-generation change, migration or re-grain (a change in how the metric is measured) is a split: restate the coefficient series on the new basis. Unlike a stock split, the ratio isn't one number: a new generation speeds up compute-bound and memory-bound services by different factors, so restate per service, measured. RAS's relative resource units already "take into account a workload's relative performance" on each hardware configuration [54].
- **An acquisition.** A launch with no history adds a declared component to the demand series.
- **Reclamation** isn't a coefficient break at all: it changes the supply series, so keep it out of the coefficient's history.

Price series are adjusted for such events, not forecast through them. Where the ratio is known, restate the history; where it must be estimated, intervention analysis models the break explicitly [55].

In Figure 12's synthetic series, new hardware in Q5 cuts CPU per request by a quarter (×0.75) and a measurement change in Q8 raises it 15% (×1.15). Demand didn't change, only the ruler. A trend fitted through both forecasts too low; restated by the same factors, history is one smooth line.

Simple statistical methods are often "surprisingly effective" [56], and driver models aren't necessarily more accurate; their advantage is being attributable and robust to breaks. So the natural design is a hybrid: smooth the organic baseline statistically, keep a register of discontinuities, and declare launches, migrations and re-grains.

![Two stacked line charts over quarters Q1–Q16 with a demand strip above. Top panel: an observed CPU-ms-per-request series breaks at a hardware change (Q5, ×0.75) and a measurement re-grain (Q8, ×1.15), and a trend fitted through the breaks forecasts too low. Bottom panel: the same history restated on the current basis is a smooth decline and forecasts 0.759–0.733. Synthetic data.](figures/A2.svg)

*Figure 12. Restate history at known breaks instead of asking a trend to learn them. It's the capacity version of split-adjusting a price series.*

## 5.4 Step changes are declarations that mature

A step change has no history for a trend to extend and no running system to measure. The usual substitute is a multiplier ("we'd double it") nobody can explain.

Specify instead. A launch with no history is usually not new at the resource level. So it enters the plan as a declaration in units the planner already prices, as Auxon and Hixson and Guliani anticipate [1, 6].

A declaration is still a forecast; what changes is who makes it. The team forecasts its product from the inside view, anchored on its plan [9]. The planner forecasts the team's error from the outside view: how comparable declarations turned out [10]. Olavson's team applies this frame to capacity: a customer forecast is checked against a statistical one. A large gap needs "a good story to explain the gap that everyone understands" before approval [8]. What follows extends it to declarations with no history for a statistical check. Where a team can't declare at all, the planner scales the nearest comparable step and names the differences: an analog, not a model.

**Declarations firm up in stages.** Commonly, a launch is a rumor at the long-range plan, a date a few reviews later, and a configuration at the last review before launch. Its uncertainty drops at decision events (a funding approval, a design review, a go/no-go), not smoothly. Five stages are enough to govern; a stage's *record* is how past declarations made at that stage turned out (scored below). Figure 13 draws the staircase.

![Five-stage staircase: Intent, Dated, Configured, Live, Organic. Each step shows what is known, the evidence needed to enter it and the supply action it licenses, from a share of the envelope and options at Intent to closing the declaration at Organic. The range of likely size narrows at each decision event.](figures/B1.svg)

*Figure 13. A declaration firms up in stages, at decision events. Each stage licenses only its own supply action, and promotion takes the evidence on its row.*

| Stage | What's known | Evidence to enter the stage | What it licenses on the supply side |
|---|---|---|---|
| **Intent** | That a step is coming; a size range; a half-year or year | A named owner and driver | A share of the envelope, sized from the stage's record; options or cancelable commitments on the slowest layers |
| **Dated** | A quarter; base and high scenarios [8]; the attributes that drive slow supply (region, redundancy tier, hardware class, data stored) | Funded, with a target date | Medium-lead orders against the base; the high held as options, a named launch reserve or a named bridge |
| **Configured** | Regions, shapes, ramp and peak shape | Design reviewed; on the launch calendar | A place on the ranked list; grants (approved capacity assigned to a team); turn-up |
| **Live** | Real traffic in a first phase | Launched | The coefficient measured on actuals; later phases sized on them |
| **Organic** | The step has become part of the trend | Ramp complete | Declaration closed; the series handed to the organic baseline |

Read it down: each row knows more and may commit more (Sections 6.2–6.5 build the supply terms). The rule: a stage licenses only its listed supply action, and promotion needs the evidence in its row. It's a sales pipeline for capacity, with supply actions where a pipeline has win rates (Section 12).

**The rollout is the measurement.** Measuring can start earlier, too: a declaration at the Configured stage can carry a coefficient measured in pre-launch tests [7], rather than guessed. The last two stages turn a step change into organic demand. Phasing the first region small buys the real coefficient cheaply, and the rest of the rollout is sized on it. Hixson and Guliani ask "how quickly you start to treat past launches as part of the organic line" [6]. The Organic stage answers: the declaration closes when its demand can be extrapolated like any other.

**Score declarations by stage.** Hixson and Guliani keep step-change estimates itemized because that "gives you room to learn as you repeat the process" [6]; scoring writes the learning down. For step changes, prior actuals in the intake (Section 9.3) need three more fields. They are the stage at which the ask was made, declared size against actual, and declared date against actual.

A team whose intents land at half their declared size but whose configured asks land within 10% (illustrative) is calibrated late, not dishonest. Discount its intents and trust its configurations.

One team's handful of launches is too few to estimate from. So the planner starts from the record of same-stage declarations by all teams (a reference class). It weights a team's own record more as it builds up. That's the way car insurance prices a new driver from everyone's record, then from their own. Illustratively: intents across all teams land at 60% of declared size, and Team T's two intents landed at 50%. Count the all-teams record as eight launches (an illustrative weight): (8 × 0.60 + 2 × 0.50) ÷ 10 = 0.58. So T's next intent enters at 58% of its declared size, and each new launch shifts the blend toward T's own record. Section 7's planner takes only the first step, using the all-teams record alone. Figure 14 follows one declaration from intent to close, and its score into the next one.

![State diagram. A launch with no history enters as a declaration and moves Intent, Dated, Configured, Live, Organic. Each promotion needs evidence: a named owner and driver; funding with a target date; a design review and a place on the launch calendar; the launch; a completed ramp. Organic closes the declaration. An intent not advanced by its target date leaves the envelope unless re-confirmed. A configured launch's grant lapses if its date passes unconfirmed, and the slip becomes a recorded event. Planning promotes, demotes or expires a declaration, on the stage's evidence or a missed target date. Within a stage, a change inside its change band is the plan working; outside it, a priced event recorded against the declaration. Declared size and date are scored against actuals by the stage the ask was made (mechanism 2) and feed the all-teams stage record, a reference class 10. An inset blends eight launches of that record at 60% with Team T's two at 50%, giving 58%, where T's next intent enters. A note says a team whose intents land at half and whose configured asks land within 10% is calibrated late, not dishonest. Tags tie two games to their counters: stage inflation to promotion only on evidence, and parked intents to expiry. Illustrative.](figures/E6.svg)

*Figure 14. A declaration moves up only on evidence, expires if it stalls, and is scored against what landed. Its record, blended with every team's, sets where the next intent enters. Illustrative numbers.*

Size and timing are scored separately because they cost different things (Section 6.6). Recurring events, such as an annual sale or a season opening, are the easy case: the reference class is the same event last time.
