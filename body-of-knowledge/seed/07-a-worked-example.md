<!-- Seed edition, v0.1, built from the working paper, version 7.6. Licensed CC BY-SA 4.0. Site page: https://cpp.anacay.org/paper/7-a-worked-example/ -->

# 7. A worked example (all numbers illustrative)

*In short: one service, one caller, invented numbers. The forecast lands within 4%, the bill lands 30% over, and each piece of the miss goes to whoever moved it.*

Sections 5 and 6 took the pieces one at a time. Here they meet in one case, the year-end review of Section 1.

**The setup.** Service X is a shared document store whose calls run server-side queries; Product A is its largest caller. The numbers are invented, and machine counts and dollars are kept small so the arithmetic is easy to follow.

**The common unit** is Section 6.1's invented *normalized machine unit* (NMU), weighted by component cost, 80% for cores and 20% for memory. A standard machine (50 cores, 200 GB) is 1 NMU, so a high-memory machine with 600 GB is 0.8 + 0.2 × 3 = **1.4 NMU**. A core is 0.016 NMU (0.8 ÷ 50 cores) and a GB 0.001 (0.2 ÷ 200 GB).

**The rate card.** X prices only CPU: $0.12 per busy core-hour, the pool's cost over practical capacity, here half of installed cores.

**Why installed is twice busy.** Two buffers with different owners multiply. Surviving the loss of one of three failure domains takes 1.5 times peak, owned by reliability engineering. Holding latency means CPU at most 75% busy, a further 4/3 of queueing headroom, owned by X. If the latency target must hold even with a domain down, the two multiply: 1.5 × 4/3 = 2.0 installed cores for every busy one. Many teams accept degraded latency during a failure and run hotter, which needs less.

**How A is billed.** On its realized peak, held flat for the year: a simplification of charging its coincident-peak contribution hour by hour. X's release and the power re-pricing below take effect from the start of the year.

**Declare.** A declares next year's peak at 500,000 requests per second, up from 400,000. That's 40,000 of organic growth on A's trend, and 60,000 from a feature launch. The launch is a step change with no history, planned for the start of the second quarter.

The launch reached the forum in stages (Section 5.4; stage timing varies by launch, and Figure 22's is generic):

- **At the annual cycle**, as an intent of 40,000 to 100,000.
- **Dated, two quarters before launch**, with a base of 60,000 and a high of 90,000.
- **Configured, one quarter before launch**, with two regions and the data it would store.

The planner entered the intent at 60,000 (illustrative), where comparable intents had actually landed, and the dated base later confirmed it. So A's declared demand is the organic forecast plus 60,000.

X's coefficient is 0.4 calls per request × 2.5 ms per call = 1.0 ms per request, so busy cores rise from 400 to 500. A's plan is 500 × 8,760 h × $0.12 = **$525,600**, up from $420,480.

**Approve.** 100 busy cores × 2.0 = 200 installed cores. The intake asks only about CPU, so the forum approves four standard machines, **4 NMU**. The high scenario would add 30 busy cores, 60 installed; following Section 6.5, the forum names a bridge for them rather than buying them.

**Fulfill.** Here's the catch: X's memory grows with stored data, not requests. A's data in X will grow by 16 TB, most of it from the launch. That figure is sized at configuration on the dated base volume, and re-sized once actual data is known. At an illustrative 100 GB of memory per TB stored (including failure reserve), 16 TB needs 1.6 TB of memory. Four standard machines supply 0.8 TB.

- **Naively**, the ask needs eight standard machines, **8 NMU**, with half their CPU stranded.
- **Re-shaped**, two standard and two high-memory machines supply exactly 200 cores and 1.6 TB for **4.8 NMU** (1 + 1 + 1.4 + 1.4). That's what the ask would have cost (200 × 0.016 + 1,600 × 0.001) had the intake asked about memory.

The fulfillment ledger (Section 9.2, mechanism 5) records 4.0 approved, 4.8 as the cheapest feasible allocation, and a **0.8 NMU gap**. The gap's named owner can fund it, phase the launch or ask X to shrink its working set. A higher memory weight, as when memory prices run high, would only widen the gap. Figure 30 counts the machines.

![Machine diagrams. The need is 200 cores and 1.6 TB of memory. Four standard machines (4 NMU) give 200 cores but only 0.8 TB. Eight standard (8 NMU) give enough memory with half the cores stranded. Two standard plus two high-memory (4.8 NMU) fit exactly. The 0.8 NMU gap goes on the fulfillment ledger with a named owner. Via standard machines each extra GB costs 0.005 NMU, five times its weight; high-memory machines take two quarters, standard ones come from the stocked pool in weeks. Illustrative.](figures/D4.svg)

*Figure 30. The forum approved 4 NMU because the intake asked only about CPU. The data A stores needs memory, and the cheapest fit is 4.8 NMU. The 0.8 gap needs a named owner. Illustrative.*

Then the clocks bite. In this example, high-memory machines take two quarters to arrive; standard machines come from X's stocked pool in weeks. In months from launch:

- **Month −6:** the high-memory commit point. The launch was only dated, and the intake asked nothing about stored data.
- **Month −3:** the memory need surfaced at configuration, and the machines were ordered.
- **Month 0:** launch.
- **Month +3:** the machines arrive, a quarter after launch.

In Figure 22's terms, the memory question arrived after the machines' dot: the two-clock failure of Section 6.5.

Until the machines land, the ledger carries a dated bridge. It can be four more standard machines from the stocked pool, run for their memory with their CPU stranded (the naive fulfillment, as a bridge). Or it can be older high-memory machines kept past decommission, at a power and efficiency premium. A pool draw also leaves a replenishment owed, with a date and an owner, or the next team needing a standard machine finds four fewer.

The rate card sees none of this: A's data drives the memory, and X charges only for CPU. Without a second driver, the 0.8 NMU reappears next cycle as an unexplained rise in the CPU rate, paid by every caller for growth one caller caused.

**Actuals.** A's volume lands at 480,000 requests per second, within 4%. Two things A didn't control moved:

- A release of X raised CPU per call to 3.125 ms (α = 1.25 ms per request).
- X's rate rose to $0.13 after a sharp re-pricing of its power contract.

A's cost is 600 busy cores × 8,760 × $0.13 = **$683,280**, 30% over plan. Split by term:

| Term | Calculation | Effect | Owner |
|---|---|---|---|
| Volume | (480k − 500k) × 1.0 ms = −20 cores × 8,760 × $0.12 | −$21,024 | Product A |
| Coefficient | 480k × 0.25 ms = +120 cores × 8,760 × $0.12 | +$126,144 | Service X (its release) |
| Rate | 600 cores × 8,760 × $0.01 | +$52,560 | Service X, with finance |
| **Total** | | **+$157,680** | |

Figure 31 draws the same split as a waterfall.

![Waterfall chart of annual cost to Product A: plan $525,600; volume −$21,024 (Product A); coefficient +$126,144 (Service X release); rate +$52,560 (Service X with finance); actual $683,280. The terms A did not own total +$178,704, more than the +$157,680 (+30.0%) overrun. Illustrative numbers.](figures/A4.svg)

*Figure 31. A forecast within 4% and a bill 30% over plan. Split the variance by term and each piece gets an owner; the two terms A did not own add up to more than the whole overrun.*

Read the table as three swaps, one term at a time: plan $525,600; actual volume, $504,576; actual coefficient, $630,720; actual rate, $683,280. The order matters a little (Section 5.2). Put the rate first and its piece is 500 × 8,760 × $0.01 = $43,800, volume −$22,776 and coefficient +$136,656: the same +$157,680, with $8,760 moved off the rate piece.

Supply missed too: 600 busy cores need 1,200 installed against 1,000 planned. The extra 200 installed cores (four standard machines, 4 NMU) came from bridges. Until they landed, X ran inside its own buffers, below its planned redundancy and latency targets: a dated ledger item owned by X.

**Size and timing.** The 20,000 shortfall was all the launch's; organic growth landed on trend. The launch delivered 40,000, two-thirds of its base, six weeks late. As Section 6.6's table predicts for this billing rule, the size miss shows only as A's smaller bill in the volume term, and the slip shows in no term.

This year the slip cost A nothing it could see, and even eased X's shortage. At the drifted coefficient, organic demand alone (440,000 requests per second × 1.25 ms = 550 busy cores, 1,100 installed) needed more than the 1,000 planned. Two errors that offset each other are luck, not a plan working.

Now suppose the coefficient had held, so the launch's 60 busy cores, 120 installed, were really there, waiting. An installed core costs the pool $0.06 an hour (the $0.12 busy-core rate spread over twice as many installed cores). Six weeks is 1,008 hours, so about $7,258 of launch capacity sits idle, split two ways:

| Launch capacity | Installed cores | Idle cost | Who sees it |
|---|---|---|---|
| Used, but six weeks late | 80 (two-thirds) | About $4,838 for the six weeks | No one: A pays it inside its flat bill, as above |
| Never used | 40 (one-third) | About $2,419 for the six weeks, and it runs all year | X's unused line |
| Total, first six weeks | 120 | About $7,258 | |

The never-used third doesn't stop at six weeks. The 40 installed cores built for the 20,000 that never arrived are billed to no one. As 20 busy-core equivalents of practical capacity, they put 20 × 8,760 h × $0.12 = $21,024 on X's unused line. That's A's favorable volume term, seen from X's side. X owns the line, but nothing books it to A's launch, which caused it (Section 6.6).

**The review.** A's leader says, reasonably, that the team hit its number and is billed for someone else's miss. The decomposition makes that conversation short and leaves four questions.

**Should X have versioned the change when it shipped?** Yes. Illustratively, with both of Section 5.2's alerts live, the coefficient miss would have reached X as a ticket long before the bill.

**Does A pay the coefficient term?** On this year's bill, yes: A is billed its busy cores at X's rate, so the $126,144 reaches A unless a rule moves it. The decomposition assigns accountability, not payment. In my judgment, this case needs a rule agreed with finance before any miss. Under it, the forum scores the term against X's efficiency commitment (Section 9.2, mechanism 7). Then it decides whether a central reserve holds A's budget harmless for the year. Without one, the pieces have owners in the meeting but not on the bill.

**Who carries the bridge premiums?** X's release caused the CPU bridges, so X does. Since X recovers its costs through its rate, the forum holds the premium outside the rate (Section 6.4). It sits as an unrecovered variance on X's own line, reported against its efficiency commitment. The memory bridge and this year's 0.8 NMU trace to a gap in the intake design, owned by planning with X. No published driver attributes them to a consumer, so they go to the unallocated line, with both named as owners.

**Who pays for the memory itself?** The hardest one. A's data caused it, so by this paper's principle A should pay. But no published driver told A so, and the forum rules that a new driver applies from its effective date, not retroactively.

Without the decomposition, the meeting is an argument about fault, and A pads next year's declaration. Figure 32 draws the review as decisions.

![Swimlane flowchart in five lanes: Product A; Service X; X with finance; planning with X; and the forum with finance. The +$157,680 overrun on a forecast within 4% splits into volume −$21,024 (Product A), coefficient +$126,144 (Service X, whose release should have been versioned) and rate +$52,560 (X with finance). From the split, the forum rules on each piece, whether or not a payment rule exists. X's CPU bridge premiums go to X, outside its rate. The memory bridge and the 0.8 NMU go to the unallocated line with planning and X named. A's memory is charged only from the new driver's effective date, and X re-fits with a second driver, data stored. Separately, a diamond asks who pays the coefficient term: was a payment rule agreed with finance before the miss? Without one, the pieces have owners in the meeting but not on the bill. With one, the forum scores the coefficient term against X's efficiency commitment and decides whether a central reserve holds A harmless. An inset shows that putting the rate first moves $8,760 off the rate piece, so the order is a policy. Illustrative.](figures/E12.svg)

*Figure 32. The split gives each piece an owner, and the forum rules on the bridges, the memory and the re-fit either way. Who pays the coefficient term needs a rule agreed in advance; without one, that piece has an owner in the meeting but not on the bill. Illustrative numbers.*

**Re-fit.** X adds a second driver, data stored, with its own coefficient (memory per GB stored) and rate, logged with an effective date. Its intake now asks for stored data as a range at intent and a figure once dated. That's because memory is X's slowest dimension to source, and the dated stage falls right at its commit point. It also shows A's 500k ask beside its 480k actual.

**A's launch joins the record** by stage: intent 40,000–100,000, dated base 60,000 and high 90,000, actual 40,000, six weeks late. It landed below the 60,000 where comparable intents had, and will move the next estimate.

**The three prices now give three answers:**

- The **average rates** for CPU and memory set A's budget.
- The **long-run incremental cost** of A's growth is memory-driven: 4.8 NMU rather than 4.0, a 20% premium that belongs on the memory driver.
- The **shadow price** falls on whichever dimension binds. Under the naive eight-machine fulfillment, that's memory, which is why re-shaping saves 3.2 NMU. Once the coefficient drifted, 600 busy cores needed 1,200 installed against 1,000 planned, so CPU ran out first, and that's what the bridges were buying.

Every piece now sits on an artifact with an owner and a date. What the example doesn't show is how to catch the memory question in time. Section 8 does.
