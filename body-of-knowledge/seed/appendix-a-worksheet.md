<!-- Seed edition, v0.1, built from the working paper, version 7.9. Licensed CC BY-SA 4.0. Site page: https://cpp.anacay.org/worksheet/ -->

# Appendix A. A worksheet for one declaration



## A.0 How to use this appendix

**What this is.** A worksheet for walking one launch through the commit-point method, and the same launch walked through it with invented numbers.

**Who it's for.** The planner who owns the declaration, with its supply and finance counterparts and the declaring team's accountable lead.

**How to use it.** Copy the two-page form (Figure A.2) once per declaration. Fill Part A to read the situation, layer by layer, then Part B to record the decisions and supply's answer, then the footer's change bands. One row per supply layer. The walk-through (A.2–A.5) shows one filled in. Public lead times to sanity-check step 1 are in Appendix B; use them to test your own numbers, not to replace them.

**What it isn't.** A way to think a launch through, not a model; its numbers are illustrative and the method is untested. The paper's Section 8 gives the reasoning behind each step.

Figure A.1 keys the symbols on the form and in this appendix's figures.

![Key. Five supply-layer glyphs from land, power and shell to placement, with the standard and high-memory machine blocks; five stage circles filling from Intent to Organic; timeline marks for commit point, need date, ready for service, cautious lead time, range still open and actual; the firm, flexible and named slices; option, bridge and named-gap marks; numbered method-step pills; and badges for product team, shared service, finance, supply chain and planning.](figures/E22.svg)

*Figure A.1. The symbols used in this appendix.*

**Terms.** One line each, in the paper's words.

- **Declaration:** a signed statement of expected demand for a launch with no history, in units the planner already prices. It firms up in stages.
- **Stage:** how firm a declaration is. *Intent:* a step is coming, with a size range and a half-year or year. *Dated:* a quarter, base and high scenarios, and the attributes that drive slow supply. *Configured:* regions, shapes, ramp and peak shape. *Live:* real traffic in a first phase. *Organic:* the step has become part of the trend, and the declaration closes.
- **A stage's record:** how past declarations made at that stage turned out. The ranges below come from it, not only from the team's word.
- **Supply layer:** one kind of supply with its own lead time: power and positions (places for machines in a hall), network, each machine shape, turn-up, job placement and admission.
- **Usual and cautious lead time:** how long a layer usually takes from order to arrival, and a slow case near the slow end of what's been seen. For example, if machines usually take one quarter but one order in five takes two, plan on two.
- **Turn-up:** installing and testing delivered machines so they can go live. It's a rate, set by crews, test positions and ports, not an order.
- **Ready-for-service date:** the date capacity must be live, ahead of launch by the testing the launch needs.
- **Need date:** the date a layer must be in place: the start of the layer after it, not launch day.
- **Commit point:** the last date a layer's order can still be placed: its need date minus its cautious lead time.
- **Open range (low / base / high):** how far the declaration can still move at a commit point. Here it is ten equally likely outcomes, and the plan carries the fifth-lowest as the base.
- **Driving attribute:** what sizes a layer (region, redundancy tier, hardware class and power density, data stored). Memory drives a high-memory order; region drives power and network.
- **The three choices,** when a commit point comes before the event that would size its layer, are these. 1, ask for the decision earlier; 2, buy an option that carries the commitment past the event; 3, commit to the stage's record and name the owner of the residual.
- **Decision note:** the record of which choice was made: what was known, when, by whom, and what would have changed it.
- **Shortage-to-idle ratio:** the cost of running short against the cost of holding spare. A ratio of *k* : 1 covers the fraction *k*/(*k* + 1) of the range. Illustratively, for persistent demand in a growing business, the ratio is 1 : 1 for turn-up (the median; for turn-up it sets how much rate to staff). The same illustration gives 4 : 1 for machines (0.8, the eighth-lowest of ten), and 19 : 1 for power and shell (0.95).
- **Cover-to point:** the point in the open range a layer is bought up to, set by its ratio.
- **On hand, on order, due back, retiring, net need:** the net need is the target, minus what's on hand, on order or due back from reclaim. Then add capacity due to retire that current load depends on. Each of those is a forecast, with a date and an owner.
- **Firm, flexible, named:** the three slices of each layer. *Firm* covers up to the base, as a plain order. *Flexible* covers from the base up to the cover-to point, as options, cancelable or reschedulable orders, or a named launch reserve. *Named* covers the rest, as a bridge with an owner and a ready-by date and, at the very top, admission control.
- **Option:** a small payment now for the right, but not the duty, to buy later. For most hardware it's a cancelable or reschedulable order.
- **Launch reserve:** capacity held against a declared high scenario.
- **Stocked pool:** ready machines held in stock for many tenants. A draw on it leaves a replenishment owed, with a date and an owner.
- **Bridge:** a stopgap for approved demand that can't be sourced in time, such as machines drawn from the pool or older machines kept past decommission. It works only if arranged before it's needed, and it carries a premium.
- **Admission control:** limiting load at the very top of a peak; the last line.
- **Named gap:** a shortfall named in supply's answer: how much, by when, why, and a proposed bridge with its owner.
- **Change band:** how far size and date may move at each stage. A move inside the band is the plan working; one outside it becomes a priced event recorded against the declaration. Supply signs the same bands.
- **Supply's answer:** for each line, a *dated commit* (quantity, date, confidence, any substituted shape) or a *named gap*.
- **Pegging:** linking every order to the declaration it was placed for. Then a late delivery can be traced to the launches it hits, and a slipped launch's supply handed to another (*re-pegging*).
- **Envelope:** the capacity budget for a planning horizon. A layer committed before any declaration exists is sized on the portfolio envelope, and the launch's claim on it is recorded.
- **Declaration register, commit-point map, fulfillment ledger:** where the walk writes its answers. The register holds each declaration's owner, stage, ranges, bands and shapes. The map holds each layer's lead times, need date, commit point and instrument. The ledger holds each ask's path from approved to net, committed, allocated, delivered, live and adopted.
- **Coefficient (α):** resource used per unit of driver; here, CPU time per request.
- **Persistent and transient:** demand that lasts years, and demand that lasts days. A launch can be both, a spike on a step.
- **rps:** requests per second, the case's unit of volume; the tables give thousands.
- **Reclaim (due back):** capacity taken back from a tenant that no longer needs it, such as another tenant's cleanup. Until it arrives it is a forecast, with a date and an owner.
- **Load tests and canary:** the checks before launch; a canary is a small first release to real traffic.
- **Turn-up slot:** one unit of the staffed turn-up rate, booked ahead like an appointment.
- **Priced event:** a change outside the band, recorded against the declaration and charged under the rule agreed with finance.
- **NMU (normalized machine unit):** the walk-through's invented common unit. A standard machine of 50 cores and 200 GB is 1 NMU; a high-memory machine of 50 cores and 600 GB is 1.4.

## A.1 The worksheet

Figure A.2 is the worksheet as a printable form, on two pages. Page 1 has the header, Part A and the footer; page 2 has Part B and the method's eight steps.

![Worksheet page 1, a blank form. Header fields: declaration; declaring team and accountable lead; persistent, transient, or both; shared drivers with other declarations and shared supply dependencies; launch date and ready-for-service date; stage dates; planner, supply counterpart and finance counterpart; and shortfall tolerance: none, hours or days, and how much. Part A, Read, has one row per supply layer (land, power and shell; network; machines by shape; turn-up; placement; two blank rows) with columns for usual and cautious lead time, source, need date, commit point, stage at the commit point, open range (low, base, high) and whether the driving attribute is known, or which of the three choices was taken. The footer records the size band, date band and signatures for each stage move.](figures/D7a.svg)

*Figure A.2 (page 1 of 2). The worksheet for one declaration: copy one per launch. The header names the declaration and its counterparts; Part A reads the situation layer by layer; the footer records the change bands.*

![Worksheet page 2, a blank form. Part B, Decide, has one row per supply layer with columns for the shortage-to-idle ratio, cover-to point, gross target, on hand, on order, due back (date, owner), retiring (date), net need, firm, flexible (instrument), named (bridge, owner, ready-by) and supply's answer, a commit or a gap. The firm, flexible and named heads carry the three slice swatches. Below, the eight steps of the commit-point method as one strip.](figures/D7b.svg)

*Figure A.2 (page 2 of 2). Part B of the worksheet records the decisions and supply's answer, one row per supply layer; the strip below is the method it follows.*

## A.2 The case

*All numbers from here on are illustrative unless cited. Lead times per layer are hypothetical.*

Service X is a shared document store, and Product A is its largest caller. A's peak rises from 400,000 to 500,000 requests per second: 40,000 of organic growth, and 60,000 from a launch planned for the start of the second quarter. Every 1,000 requests per second keeps one core busy, and installed cores are twice busy ones. High-memory machines usually take two quarters to arrive; standard machines come from X's stocked pool in weeks. Without the method, the high-memory commit point was −6, when the launch was dated, and nobody asked about stored data. The memory need surfaced at −3, at configuration. The high-memory machines were ordered then and arrived at +3, a quarter after launch. In between, standard machines from the pool ran for their memory as a bridge. Figure A.3 puts the whole case on one card (the paper's Section 7 tells how this launch went wrong).

![Case card. Service X is a shared document store and Product A its largest caller. A's peak rises from 400,000 to 500,000 requests per second: 40,000 organic and 60,000 from a launch at the start of the second quarter. The coefficient is 0.4 calls at 2.5 ms, 1.0 ms per request, so 1,000 requests per second keeps one core busy. Installed cores are twice busy cores (1.5 for failure domains times 4/3 for queueing headroom). A standard machine has 50 cores and 200 GB (1 NMU); a high-memory machine, 50 cores and 600 GB (1.4 NMU). Memory is 100 GB per TB stored. At a launch volume of L thousand, installed cores are 2 × (40 + L) and memory is 0.4 + 0.02 × L TB. The launch is an intent of 40,000–100,000 at the annual cycle, dated at −6 with a base of 60,000 and a high of 90,000, and configured at −3 with two regions and its stored data. The rate is $0.12 per busy core-hour. Illustrative.](figures/E23.svg)

*Figure A.3. The case: one launch on one shared service. Everything the walk-through needs is on this card. Illustrative numbers.*

**One added assumption, to make memory scale.** In the case, A's data in X grows 16 TB, "most of it from the launch." Say 4 TB is organic and 12 TB is the launch's at its base of 60,000, scaling at 0.2 TB per 1,000 requests per second. At a launch volume of *L* thousand requests per second:

- installed cores = 2 × (40 + *L*);
- memory = 0.4 TB + 0.02 TB × *L*.

At *L* = 60 that gives 200 cores and 1.6 TB, the need at the base. Sizing rule: the fewest machines that cover the cores, then the fewest high-memory machines among them that cover the memory.

| Launch volume (thousand rps) | Installed cores | Memory (TB) | Machines | High-memory | Standard |
|---|---|---|---|---|---|
| 40 | 160 | 1.2 | 4 | 1 | 3 |
| 60 | 200 | 1.6 | 4 | 2 | 2 |
| 70 | 220 | 1.8 | 5 | 2 | 3 |
| 85 | 250 | 2.1 | 5 | 3 | 2 |
| 90 | 260 | 2.2 | 6 | 3 | 3 |
| 100 | 280 | 2.4 | 6 | 3 | 3 |

To check one row: at 70, five machines with two high-memory give 250 cores against 220, and 1.2 + 0.6 = 1.8 TB against 1.8.

## A.3 The stage ranges

Ten equally likely outcomes per stage, in thousand requests per second, as the stage's record might give them:

| Stage (months from launch) | Ten outcomes | Fifth-lowest | Eighth-lowest | Highest |
|---|---|---|---|---|
| Intent (from −12) | 20, 30, 40, 50, 60, 65, 75, 85, 95, 100 | 60 | 85 | 100 |
| Dated (from −6) | 35, 40, 45, 55, 60, 65, 70, 80, 85, 90 | 60 | 80 | 90 |
| Configured (from −3) | 40, 45, 50, 55, 60, 60, 65, 70, 80, 90 | 60 | 70 | 90 |

Drawn from each stage's record, they run wider at the bottom than the team's declared ranges. Each fifth-lowest is the 60,000 carried in the plan, and the actual 40,000 sits inside every list. Figure A.4 draws the three lists.

![Three ten-outcome strips in thousand requests per second. Intent from −12: 20 to 100, fifth-lowest 60, eighth-lowest 85. Dated from −6: 35 to 90, fifth-lowest 60, eighth-lowest 80. Configured from −3: 40 to 90, fifth-lowest 60, eighth-lowest 70. An actual of 40, six weeks late, is marked on each. Illustrative.](figures/E24.svg)

*Figure A.4. Ten equally likely outcomes at each stage, from the stage's record. The base stays at 60,000 while the eighth-lowest falls from 85,000 to 70,000; the landing at 40,000 sits inside all three. Illustrative.*

## A.4 The walk, step by step



### Step 1. Layers and lead times

| Layer | Usual | Cautious | Basis |
|---|---|---|---|
| Power and positions in X's existing hall | 4 quarters | 6 quarters | Illustrative; adding positions inside an existing building is far faster than a new building or grid connection (Appendix B). |
| High-memory machines | 2 quarters (the case) | 3 quarters | Illustrative: for example, if two quarters is usual and one order in five takes three. |
| Standard machines from X's stocked pool | 2 weeks | 4 weeks | Illustrative; the case says "in weeks." |
| Turn-up | 2 weeks | 1 month | Illustrative; no public value found. |
| Job placement and admission | Minutes to days | Days | Illustrative. |

The configured launch runs in two regions, so a cross-region network layer belongs here too; the case doesn't size it, so it's left off.

### Step 2. Need dates and commit points

Work back from launch (month 0):

- Ready for service at **−1**: one month of load tests and canary before launch.
- Turn-up must be done by −1. Its cautious lead time is one month, so machines must be on the dock by **−2**.
- High-memory machines: need date −2, cautious lead time 9 months, so the commit point is **−11**.
- Standard machines: need date −2, cautious lead time 1 month, so the commit point is **−3**.
- Power and positions: need date −2 (the machines need somewhere to go), cautious lead time 18 months, so the commit point is **−20**.

Without the method, the high-memory commit point was −6, at Dated: the usual lead time, counted back from launch. The memory question arrived at −3, the order went in then, and the machines landed at +3. The cautious lead time adds 3 months and the real need date 2 more: −6 − 3 − 2 = −11. Figure A.5 draws the subtraction.

![Subtraction tree working back from launch. One month of load tests sets ready for service at −1. One month of turn-up puts machines on the dock at −2. From −2: high-memory machines, nine months cautious (six usual), commit at −11, while the launch is an intent. Standard machines from the pool, one month cautious, commit at −3, at Configured. Power and positions, eighteen months cautious, commit at −20, before any declaration exists. A note says that without the method, the high-memory commit point was −6, the usual lead time counted back from launch; the order went in at −3 and the machines arrived at +3. Illustrative.](figures/E25.svg)

*Figure A.5. Step 2 as arithmetic: each layer's need date is the next layer's start, and its commit point is that date minus a cautious lead time. High-memory machines move from −6 to −11, while the launch is still an intent. Illustrative.*

### Step 3. Stage and range at each commit point

| Layer | Commit point | Stage then | Range (low / base / high, thousand rps) | Driving attribute | Known? |
|---|---|---|---|---|---|
| Power and positions | −20 | None yet | Portfolio envelope | Positions for X's growth | Portfolio record only |
| High-memory machines | −11 | Intent | 20 / 60 / 100 | Stored data | **No**: the intake asked only about CPU |
| Standard machines | −3 | Configured | 40 / 60 / 90 | Request volume, regions | Yes |
| Turn-up | −2 (slots) | Configured | 40 / 60 / 90 | Machine count | Yes |
| Job placement and admission | 0 onward | Live | Actuals | Actual traffic | Yes |

The high-memory row is the miss: the stored-data question arrived at −3. Here it is caught at −11 instead. The planner takes choice 1, asking for stored data at intent as a range. Product A answers 8 to 20 TB, which fits the 0.2 TB per 1,000 requests per second assumed above (12 TB at the base). For the top of the range it also takes choice 2, an option (step 6).

Power and positions commit at −20, before the launch exists, sized for the portfolio. When the intent arrives at −12, the planner checks that it fits inside the envelope.

### Step 4. How far up the range

Each layer's shortage-to-idle ratio sets its cover-to point: 19 : 1 covers the top of the ten outcomes (0.95), 4 : 1 the eighth-lowest (0.8) and 1 : 1 the median (0.5).

| Layer | Shortage-to-idle ratio (illustrative) | Cover to | Point in range | Target in layer units |
|---|---|---|---|---|
| Power and positions | 19 : 1 | Highest of intent | 100 | 6 positions, plus 1 held for the bridge in step 6 = **7** |
| High-memory machines | 4 : 1 | Eighth-lowest of intent | 85 | **3** high-memory |
| Standard machines | 4 : 1 | Eighth-lowest of configured | 70 | 5 machines in all; with 2 high-memory on hand (step 5), **3** standard |
| Turn-up | 1 : 1 (on the rate) | Median of configured | 60 | 4 slots on the staffed rate, more on standby |

Three high-memory machines also cover the top of the intent range (100 needs 3), so here the 80th percentile covers almost everything.

### Step 5. Net

| Layer | Target | On hand | On order | Due back | Retiring | Net need |
|---|---|---|---|---|---|---|
| Power and positions | 7 | 8 free in X's hall | 0 | 0 | 0 | **0** to order; claim 7 of the 8 |
| High-memory machines | 3 | 0 | 0 | 1, from another tenant's cleanup, due −4, owned by X | 2 older ones due to retire at −1 (not counted; see the bridge) | **2** |
| Standard machines | 3 | 0 spare in X; the stocked pool holds 8 | 0 | 0 | 0 | **3**, drawn from the pool |

The reclaim at −4 is itself a forecast, owned by X; if it fails, the layer is one machine short, and that's not a supply failure. Drawing 3 from the pool leaves 5, and the pool is owed a replenishment of 3 by, say, +3, owned by whoever runs it.

### Step 6. Firm, flexible and named

| Layer | Firm | Flexible | Named |
|---|---|---|---|
| Power and positions | 7 positions claimed on the envelope | — | — (the bridge's position is inside the 7) |
| High-memory machines | 1 ordered at −11 (the base needs 2; the reclaim supplies the other) | 1 ordered at −11, reschedulable: it can be pushed out or re-pegged to another X tenant until −3 | — |
| Standard machines | 2 from the pool at −3 (the base) | 1 from the pool as a named launch reserve, pegged to A (base 60 → 70) | Above 70 up to 90: a bridge ready by launch, owned by X: 2 more standard machines from the pool run for their memory, or 1 older high-memory machine kept past decommission if incoming hardware doesn't need its positions |
| Turn-up | 4 slots booked | 1 slot reserved | Up to 2 standby slots for the bridge |
| Job placement and admission | — | — | Admission control on launch day for the transient spike, owned by A with X |

To check the bridge at 90: with two high-memory machines in hand, memory needs 2.2 TB. That's 1.2 from the pair plus 1.0 from five standard machines: 7 machines and 350 cores against 260. The alternative, three high-memory and three standard, gives 1.8 + 0.6 = 2.4 TB and 300 cores.

On the plan as first written, X would hold 3 high-memory and 3 standard machines for A's growth (7.2 NMU). If configuration brings the eighth-lowest to 70 (below), the second high-memory order is pushed out. By launch, X holds 3 standard and 2 high-memory: 3 + 2 × 1.4 = **5.8 NMU**. That compares with 4.8 NMU for the base alone (2 standard and 2 high-memory machines, from the sizing table). The extra 1.0 NMU is the price of covering the 80th percentile instead of the median.

### Step 7. Bands

Agreed with Product A at intent:

| Stage move | Size band | Date band | Outcome in this launch |
|---|---|---|---|
| Intent → dated | ±50% of 60 (30–90) | ±2 quarters | Dated base 60: inside |
| Dated → configured | ±25% of 60 (45–75) | ±1 month | Configured 60: inside |
| Configured → live | ±10% of 60 (54–66) | ±2 weeks | Live 40, six weeks late: **outside on both** |

Both misses are now recorded against A's declaration, not silent costs. Who pays still follows the rule agreed with finance in advance (the paper's Sections 7 and 14).

### Step 8. Artifacts and supply's answer

- **Declaration register:** A's launch, with the three ranges, the stored-data range, the bands, and "persistent, with a launch-day spike."
- **Commit-point map lines:** the five layers above, with commit points −20, −11, −3, −2 and 0.
- **Supply's answer** (illustrative): a dated commit or a named gap for each line of step 6. It carries the dates and owners step 5 set (the reclaim due −4, the pool's replenishment by +3).
- **Fulfillment ledger:** gross 6 machines (7.2 NMU) as planned, 5 (5.8 NMU) after the push-out at −3. Net 5 new as planned, 4 after the push-out, once the reclaimed high-memory machine is counted. Committed to match, plus the reclaim (owned by X); then delivered, live and adopted as they happen.

## A.5 What happens when the launch lands

At configuration (−3), the eighth-lowest is 70, which needs only 2 high-memory machines, so the planner pushes the second high-memory order out and re-pegs it to another X tenant. The reclaim arrives on time. The launch goes live six weeks late, at 40,000.

At 40,000 and the planned coefficient, A's growth needs 160 installed cores (4 machines). X holds 5 machines, 250 cores, so 90 installed cores sit idle: 90 × $0.06 × 8,760 hours ≈ **$47,304 a year**. That's at $0.06 per installed core-hour (the $0.12 busy-core rate spread over twice as many installed cores). Without the method, X would hold 4 machines, 200 cores, and 40 idle installed cores would come to $21,024, so the method's extra machine accounts for about $26,280. During the six-week slip, the launch reserve could be re-pegged to another tenant. After it, the spare waits for growth inside the 4:1 ratio for persistent demand, and the band records whose declaration it waited on. (In the paper's Section 7, a release of X also raises CPU per request that year, so X needs more cores than planned. That drift would have used the spare anyway. That's luck, not the method.)

Figure A.6 shows the fulfillment ledger line the walk writes, as planned and as landed.

![Ledger strip from approved to adopted. As planned: gross 6 machines, 7.2 NMU, net 5 new. After the push-out at −3: 5 machines, 5.8 NMU, net 4 once the reclaimed machine is counted. Committed to match, plus the reclaim due at −4, owned by X, and a pool replenishment of 3 owed by +3. The launch landed at 40,000, six weeks late, outside the configured band of 54,000 to 66,000 and ±2 weeks on both size and date, and is recorded against A's declaration. Illustrative.](figures/E26.svg)

*Figure A.6. The fulfillment ledger line the walk writes, before and after the second high-memory order was pushed out, and the band check when the launch landed. Illustrative.*

## A.6 What the walk shows, and what it doesn't

The walk moves the stored-data question ahead of the high-memory commit point: asked at −12, not −3. It gives every surprise an owner: the reclaim, the pool's replenishment, the bridge above 70,000 and the band breach at landing. It costs about 1.0 NMU held above the base, about $26,280 a year of idle cores at the 40,000 landing. It isn't a model, and it is untested (the paper's Sections 8.6 and 13).
