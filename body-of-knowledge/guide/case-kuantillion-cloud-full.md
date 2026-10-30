---
title: Kuantillion Cloud: the full case
short: The complete case: where old flash sits, the four places it can go, the gates, the money, eight decisions and two sub-decisions, eighteen causal chains and seven scenarios for 2027.
kind: case
order: 3.1
cadence: all
altitude: all
levels: learning, practicing, leading
seed: 
---

*Kuantillion Cloud is a fictional company. Any resemblance to real companies reflects problems the industry shares.*

The case describes one company's capacity-planning problem space as an outside analyst could reconstruct it. The problem is getting the most value from the older solid-state drives (SSDs) across a hyperscale fleet, while new flash is scarce and dear. It covers the company, the system, the four places an old drive can go, the gates, the money, two futures and the planning organization. It sets out eight decisions and two sub-decisions, eighteen causal chains and seven stress scenarios for 2027. It does not prescribe answers. A [companion page](case-kuantillion-cloud-practice.md) shows how the practice's body of knowledge solves it.

## How to read this

Every load-bearing claim carries an evidence tier. The tiers describe how a planner at Kuantillion Cloud, or an analyst outside it, would know each thing. Untagged statements in narrative are Reported. A note under a table can tag all its figures. Formulas are shown wherever a number is computed.

| Tier | Meaning |
| --- | --- |
| Reported | Kuantillion Cloud's own public statements: filings and earnings calls, sustainability and circularity reports, engineering papers and blogs, patents, cloud and security documentation, job postings |
| Third party | A named kind of outside source publishing its own data or estimate: an analyst, a researcher, a peer operator's paper or disclosure, a vendor specification |
| Press | Trade or general press, including reported executive remarks and press relays of filings |
| World | A fact about the wider industry, such as the hiring record across employers, with sources at the end for readers who want to go deeper |
| Inferred | Follows from tagged facts by stated reasoning |
| Speculated | A hypothesis with a stated basis and a falsifier |
| Arithmetic | Computed from tagged inputs; formula shown |
| Illustrative | A number invented to show a shape, with its assumptions stated. Never a fact about Kuantillion Cloud |
| Unknown | Looked for, not found |
| Retired | A claim earlier research got wrong, listed so it isn't repeated |

Illustrative and Retired are extra tiers: the money section leans on invented shares that must never read as facts. Some tags carry a qualifier. *Unverified*: the method behind a figure couldn't be traced. *Vendor claim*: a commercial party's assertion. *Disputed*: sources disagree. *Qualified*: holds within stated limits. *Analyst*: an analyst's estimate.

**Terms used**

| Term | Meaning here |
| --- | --- |
| Legacy flash | SSDs from platform generations older than the ones Kuantillion Cloud now buys for (smaller, on slower interfaces or older form factors), plus any drive in a host being decommissioned. Endurance used doesn't by itself make a drive legacy |
| In-service / harvested drive | A drive still in a running machine / a drive pulled from a decommissioned machine and held for reuse |
| Sink | One of four places a usable legacy drive can go: workloads, repair spares, upgrades and builds, or retirement |
| Shape | A machine's mix of CPU, memory, flash, disk and network |
| Stranding | Capacity that can't be used because another resource on the same machine has run out, or because its tenants don't use it |
| Obtainability | Whether a resource request can be filled when made: supply treated as a service level |
| Stockout | A request for capacity that can't be filled in the asked-for place and shape |
| Divestment | Releasing capacity a tenant or pool no longer needs, so it can be reallocated |
| Fungibility | How freely one unit of capacity can substitute for another, across machines, generations and places |
| Endurance | The writes a drive is rated to absorb: total bytes written (TBW) or drive writes per day (DWPD) |
| QLC | Four-bits-per-cell flash: the cheapest and densest kind, with the lowest rated endurance |
| EDSFF | The newer family of drive form factors that recent servers use in place of 2.5-inch and M.2 |
| IOPS | Input/output operations per second: a drive's rate of serving requests, as distinct from its capacity |
| SKU | A specific drive model at a specific capacity |
| Qualification | Testing that approves a drive model and firmware for use on a given platform |
| Sanitization | Erasing or destroying data before a drive is reused or leaves custody |
| Reverse supply chain | The backward flow of hardware: decommission, harvest, test, redeploy, resell or recycle |
| Embodied carbon | Emissions from manufacturing hardware, as opposed to running it |
| Resource managers | The internal teams that request capacity, and the schedulers and storage systems they run |
| The fleet provisioning team | The team that provisions and manages Kuantillion Cloud's machines |
| Exabyte (EB) | One million terabytes |

## 1. Executive summary

Kuantillion Cloud runs one of the largest computing fleets in the world. It plans about $200 billion of capital spending in 2026 and still calls itself supply constrained. Its published harvest runs to millions of drives a year, with an unpublished SSD share. It also holds older flash inside running machines across many platform generations (Reported; Inferred). Meanwhile new enterprise flash costs three to four times what it did a year earlier, and next year's supply is largely pledged.

The problem is to get the most value from that installed base across four sinks: workloads, repair spares, upgrades and builds, and retirement. It has to do so at a reliability the users of that capacity will accept. No public source shows Kuantillion Cloud running a dedicated program for this. The public record shows every ingredient such a program would need, and every seam it would fall through.

**The five hardest sub-problems**

1. **Nobody has declared what kind of value this is, or how much there is.** If Kuantillion Cloud's purchase commitments are flexible, a reused drive avoids a purchase. If they are firm, it adds capacity to a sold-out fleet: a different number, with a different beneficiary. And the SSD harvest could be near zero, since the published count is of hard drives, or near 30% of annual flash deployment (Illustrative). That ratio describes whether this is spares hygiene or supply strategy (section 7).
2. **A drive has five dimensions, and every sink prices a different one.** Capacity, performance, remaining endurance, fit and condition history. Workloads price capacity and latency, spares price fit, upgrades price fit and qualification, and resale prices provable condition. No shared unit or price exists inside the fleet.
3. **Supply is a byproduct of lifecycle decisions made for other reasons.** Keeping a platform alive raises its need for spares while cutting the harvest that feeds them. Retiring one releases drives that mostly fit its own generation.
4. **The organization splits the problem in two, everywhere.** Across the industry, allocation and value recovery are hired into different organizations. The people who touch drives are measured on ticket speed. Kuantillion Cloud's own report concedes that its measures miss much of the value reuse adds.
5. **Nobody has published how reused drives behave in a second life.** First-life field studies disagree on late-life hazard: two large ones saw no rise at end of life. Firmware, model and error history matter more than age. Second-life hazard, including any early failures that handling causes, is unknown, and so is what one bad incident would cost. Both bound how much risk any allocation can take.

**The five most surprising connections**

1. **The AI boom reaches the drive pool three ways at once.** It repriced flash. It pledged future supply under hundreds of billions of dollars of commitments, so the unplanned margin is what's left to fight over. And it put local SSD capacity into the cloud's own stockout errors.
2. **Today's placement can shape tomorrow's harvest.** Kuantillion Cloud patents software that can set each drive's wear rate, and nothing downstream of it. Where wear binds, placement policy now shapes the condition of the harvest arriving in two or three years. No team owns that link (P2a).
3. **Triage is a supply source where it is missing.** At one large cloud, 34.4% of SSD-related failure tickets weren't caused by the drive. Cheaper steps (reboot, slot check, cable swap) resolved them before any replacement; only 31.2% of tickets ended in a drive swap. A site that pulls a drive on every ticket would use spares at up to about 1.5 times true failures, and strand healthy flash. How many of Kuantillion Cloud's pulled drives are healthy is unknown (section 4.4).
4. **The customer toolkit is the internal problem turned inside out.** Reservations, queues, preemptible pools and shape fallbacks reshape customer demand to fit scarce supply. Matching legacy flash is the same reshaping, pointed inward.
5. **The incentive problem may be by design.** Multitask agency theory predicts that measuring technicians on ticket speed produces scrapping. It also favors the job split the industry uses. On that reading, the gap is in what is measured, not in how the jobs are cut (A.3).

**Where the evidence is strong and thin.** Strong: Kuantillion Cloud's reuse scale, its reuse-first hierarchy, its published wear pricing, its hiring record and the 2026 market. Thin: anything SSD-specific in the harvest, second-life reliability, pipeline yield and cost, and how the commitments behave.

## 2. How the problem arrived

The problem was built in three movements. Drive generations quietly diverged for a decade. Lifecycle decisions stretched the fleet's age. Then a supply shock repriced everything already installed.

**The generations diverge (2015–2023)** (Third party: vendor specifications, unless tagged).

- Around 2015, a mainstream data-center drive was a 2.5-inch SATA or early-NVMe part of 1–2 TB, rated from under 1 to 17 drive writes per day.
- By 2018, 12 Gb/s SAS drives reached 30 TB. By 2024–25, QLC drives reached 122 TB at 0.6 drive writes per day, with 256 TB-class parts discussed (Press).
- New chassis moved to EDSFF form factors that 2.5-inch and M.2 drives don't fit without adapters. One industry forecast put one EDSFF format at 8% of PCIe drive units in 2022, rising to about 40% by 2027.
- Per terabyte, a 2015 drive draws about 10 to 60 times the power of a 2025 QLC drive; per IOPS, only about 1.5 to 3 times (Arithmetic; section 5).

**The fleet gets older by choice (2020–2025).**

- All four of the largest Western operators stretched server book lives in 2022–2023. Kuantillion Cloud moved to six years in 2023. Peers sit between five and six; one shortened a subset back to five in 2025, citing AI hardware's pace (Reported; Press).
- Kuantillion Cloud's extension avoided about $3.9 billion of depreciation in its first year, roughly $3 billion of net income. One peer added about $900 million of net income in a quarter; a mid-size operator, about $20 million (Press). Life extension was an earnings lever before it was a supply lever (Inferred).
- Kuantillion Cloud's reuse share rose from 22% of upgrade components in 2016 to 44% of components in builds, maintenance and upgrades in 2024. Its 2026 circularity report says machines now retire by their health, not their age. Old machines no longer leave on a calendar.

**The shock (late 2025–2026).**

- Late 2025: nearline (bulk) hard-drive lead times pass a year, and disk makers report being sold out for 2026. Cold data starts moving to QLC flash (Third party; Press).
- Through 2026, enterprise SSD contract prices rise about 80% in the first quarter, 50% in the second and 20–25% in the third, with 23–28% forecast for the fourth (Third party). The midpoints compound to about 4.2 times end-2025; one analyst's cumulative figure implies about 3.4. Read the year as roughly 3.4 to 4.2 times (Arithmetic). Small SSDs enter their own squeeze as vendors favor high-capacity parts.
- Flash makers move their largest buyers onto multi-year, often prepaid agreements; one reports more than 75% of its 2027 output committed, with 2027 supply contracts expected to close as early as Q1 (Press). By January 2026, analysts call the year's memory capacity all but sold out, and module makers get only 30–50% of the chip volumes they request (Third party). Unplanned volume is the hardest to get (Inferred).
- PC makers halve standard SSD configurations (1 TB to 512 GB, 512 GB to 256 GB). A large content-delivery operator reports server costs up 75–200% and adds a customer surcharge, the response open to an operator too small to win allocation (Press; Inferred).
- Kuantillion Cloud's disclosed purchase commitments run from about $149 billion at end-2025 to $332 billion in March 2026 and $811 billion by mid-2026. That is 5.4 times in six months, mainly technical infrastructure (Press relaying filings; not re-verified against the note text). Peers disclose hundreds of billions too. Supply risk is being turned into contract at historic scale (Inferred).
- September 2026: a supply-chain executive at Kuantillion Cloud says it has begun reclaiming older memory from retired servers. It goes into the newest AI servers through a dedicated hardware interface, and it still isn't enough (Press).
- October 2026: Kuantillion Cloud reaffirms six-year server lives, says it is supply constrained, has started renting third-party compute and expects capital spending to rise significantly in 2027 (Reported; Press). Its cloud advises customers to reserve even some general-purpose capacity ahead of need (Press).

Every movement made the legacy population larger, older and more valuable at once (Inferred). The shock turned a disposal queue into scarce supply. With much of the market pledged, the fleet's own hardware is among the few unpledged margins (section 7).

## 3. Kuantillion Cloud profile

Kuantillion Cloud is spending record sums on its fleet and still can't buy enough capacity. Its older hardware is the one supply it already owns.

| Dimension | Figure (as of Oct 2026) | Tier |
| --- | --- | --- |
| Capital spending | 2026 guidance $195–205B, against $91B in 2025; about 60–65% of technical-infrastructure spend on servers; a further large rise signalled for 2027 | Reported; 2025 figure and server share Press |
| Depreciation | Servers over six years since 2023, reaffirmed October 2026; first-year effect about $3.9B | Reported; effect Press |
| Purchase commitments | About $149B → $332B → $811B, end-2025 to mid-2026; composition undisclosed | Press |
| Supply position | Supply constrained; renting third-party compute since the third quarter of 2026 | Reported; Press |
| Harvest | About 8.8M components in 2024, including 3M+ drives; 7.5M+ components for internal reuse in 2025; resale about 2.6M in 2025 | Reported; 2025 resale Press |
| Reuse share | 22% of upgrade components (2016) → 44% of components in builds, maintenance and upgrades (2024) | Reported |
| Lifecycle | Retirement by machine health rather than age (2026 report); reuse first, then resale, then recycling | Reported |
| Flash in the fleet | Local storage on scheduled machines and a pooled cache tier; wear priced per byte written in published models | Reported |
| SSD share of any published figure | Not disclosed | Unknown |
| Planning organization | The fleet provisioning team plus a 2026 planning family staffed from program manager to distinguished engineer | Reported (postings) |

**A heterogeneous fleet.** The fleet serves Kuantillion Cloud's own products and a public cloud. Its own research says nominally uniform data centers become mixed through replacements and upgrades, and its cluster traces show the count of machine shapes growing. Its leaders want designs that treat interchangeable, quickly moved capacity as a core requirement, across vendors and generations. Its infrastructure lead has said a building must outlast many hardware generations over a life of decades (Press).

**How flash is used.** Flash is local storage inside machines that a scheduler places jobs on, matched by attributes and constraints. It is also a pooled cache tier in front of hard disks in the cluster file system. That cache's admission policy prices flash wear explicitly, and its simulations inform SSD purchases. A published placement model charges SSD wear per byte written, at a rate set by each drive model's rating. Kuantillion Cloud's published machine autoscaler reclaims only CPU and memory, so flash slack is managed in the storage stack (Inferred).

**What the balance sheet shows, and hides.**

- **The commitments.** Future supply is pledged at a scale of hundreds of billions. That makes unforecast supply, such as a repair spike or a late build, the hardest thing to buy (Inferred). How much of the figure is component supply, rather than compute rental, leases or energy, is Unknown.
- **The inventory line is a decoy.** Inventory quadrupled across half of 2026, and press read it as stockpiled fleet parts. The filing says inventory is mainly hardware for sale plus consumer devices. Fleet components, drives included, are capitalized as property and equipment. No filing will ever show the legacy-drive pool; the only public count is the harvest figures (Inferred).
- **The bill arriving.** Depreciation rose more than 40% year on year in the first half of 2026. Risk factors added single-source components and long-term commitments, but never name memory, SSDs or NAND (Reported; Inferred).

**What it patents, and what it doesn't.** Two of Kuantillion Cloud's patents frame its position on flash lifecycle. The search was a sample, so absence is weak evidence. One, granted in 2025, covers host-controlled data placement that groups data erased together, extending drive life. The other, granted in 2022, covers value-based cache admission, motivated by flash's finite write budget. Both protect software control points that set a drive's wear rate. None was found on grading, refurbishment, redeployment or spares prediction. One server maker's 2024 patent has drives at their wear limit keep serving reads until replaced in batches (Third party). That is worn flash given a read-mostly end of life, the end state this case contemplates.

Kuantillion Cloud patents the wear dial and publishes nothing downstream of it (Inferred). The silence has three readings the record can't separate. It may be an unpatented trade secret. A program may have been evaluated and declined, perhaps after a pilot, for cost, complexity or labor. Or, least likely, nothing exists. All three stay live throughout this case.

**What its leaders say out loud** (Press, from interviews, calls and reported remarks, 2025–2026).

- A leader asked what to do with a gigawatt of retired training capacity, hoping it moves to serving quickly. Redeploying used capacity into a second workload class is a live problem, named from the top. Legacy flash is its storage instance (Inferred).
- Which resource binds keeps changing, among people, power and chips. No single bottleneck owns the problem.
- A leader asked whether users would trade availability for quantity: much more capacity at lower availability, or less capacity at higher availability. It was about compute, but it is the fleet-flash acceptance question exactly (Inferred).
- The infrastructure team must grow capability by orders of magnitude while holding cost nearly flat. The chief executive has said cloud results suffered from too little compute, and in April 2026 that the company was short of it for now. It reportedly turned away part of one large customer's request (report not opened directly).

**What its customers can see.**

- The cloud's documented capacity error, distinct from quota, now names the constrained resource. Local SSD capacity is among the examples, beside CPUs and GPUs (Press; the error class is Reported).
- Through 2025–2026, stockouts reached general-purpose virtual machines. One software company saw deployment times roughly double during zone stockouts (Press). In August 2026 the cloud formally advised customers to reserve scarce resources, including some CPU families, and to plan fallbacks (Press).
- Its allocation toolkit (reservations billed when idle, future reservations, a queueing scheduler, preemptible pools, shape fallbacks) shapes demand by time, price and shape (Inferred). Matching legacy flash inside is the same mechanism pointed the other way.
- Its caching products pitch local flash as cheaper than memory, and caches absorb device loss by design. Nothing public says Kuantillion Cloud backs caches with reused drives, but the fit is exact (Speculated). The flash shock shows as availability friction, not posted SSD price rises (Inferred).

**Lifecycle direction.** Kuantillion Cloud's 2026 circularity report puts internal reuse first, then resale for parts beyond internal demand or configuration needs, then recycling. It asks whether aging equipment can serve lower-demand workloads. It says that if new hard drives run short, safely wiping and reusing the drives it already owns, in volume, would give it an advantage. It never mentions SSDs or flash (checked by keyword). A 2025 post describes harvesting made possible by moving hardware-indifferent jobs off old machines. It warns that harvested parts must still suit the workloads and customers they serve.

## 4. The system: where legacy flash sits and how it moves

Legacy flash isn't one pile of drives. It is several populations, and each drive moves between them over its life.

### 4.1 Four populations

| Population | Where it is | What decides its value |
| --- | --- | --- |
| In service, well used | In running machines whose tenants use most of the flash | Already earning. The only question is how long to keep the host alive |
| In service, stranded | In running machines whose tenants use little of the flash | Paid for but idle at the margin. One cloud measured 54% of server SSD capacity stranded (Third party) |
| Harvested, in inventory | Pulled from decommissioned machines, held on site or at a regional hub (Inferred) | Whatever demand it can be matched to before it ages out or is resold |
| Out of custody | Resold, recycled or shredded | Gone. Only resale value or recovered materials remain |

**The stock and the flow are two problems.** The four sinks in section 5 govern the harvested *flow*. Flash stranded inside running machines is a *stock*, and it never passes through a cage. Its problem belongs to workload matching (P3) and allocation (P6), and it is plausibly the largest value pool in the system (Inferred; section 7).

Stranding isn't a legacy property: a year-old drive in an over-provisioned host is as stranded as an old one. The stock is idle flash of any age, a utilization problem solved in software by pooling, placement and quota. The flow is a second-lives problem solved in hardware, through gates, a pipeline and custody. They join where P3 offers both to workloads and P6 prices them. They are siblings, not one problem (Inferred).

### 4.2 The unit problem

A legacy drive isn't one quantity. It carries at least five: capacity (terabytes); performance (IOPS and latency consistency); remaining endurance; fit (form factor, interface and qualification on a platform); and condition history (errors, retention margin, provenance). Each sink prices a different one (Inferred).

- Workloads price capacity, latency and endurance.
- Spares price fit above all. A drive that fits a dying platform is worth more there than its terabytes suggest.
- Upgrades price fit plus qualification.
- Resale prices provable condition, discounted for what buyers can't see.

The fleet's own planning units, abstract quota and terabytes, carry the first dimension and drop the rest (Third party pattern; P3). So *how much legacy flash does Kuantillion Cloud have?* has no single answer. Every comparison across sinks is a conversion between units nobody has agreed on (Inferred). P1 holds the dimensions; P6 needs the conversion.

### 4.3 One drive's path

A drive runs until its host is decommissioned or the drive fails (Inferred). When the host retires, the drive is harvested, sanitized and tested. It then goes to a workload, a spares pool, an upgrade or new build, or out through resale or recycling. Drives that fail testing or sanitization are destroyed on site. Kuantillion Cloud's stated order is internal reuse, then remarketing, then recycling.

**Disassembly is a choice.** When a host retires, there are three options, not two (Inferred). Keep the host as it is; redeploy it intact to a lower-demand workload class; or take it apart and harvest it. The intact branch bypasses nearly every gate in section 6. It needs no fit or requalification, no per-drive record through off-host states, no cage and little labor.

Kuantillion Cloud's own report asks this question, and its only executive remark on second lives concerns the gigawatt, not its parts (section 3). So the sinks govern drives from hosts where intact redeployment *lost*. A program that prices drives without pricing the intact option will take apart hosts it should have redeployed (Inferred). P2 carries the three-way decision.

![A host reaching retirement has three branches: keep it as it is, redeploy it intact to a lower-demand workload class, or disassemble it and harvest its drives. Harvested drives are sanitized and tested, then go to one of five outcomes: workloads, the spares pool, upgrades and builds, resale or recycling, or destruction on site.](figures/fleet-flash-flow.svg)

*Host retirement and the drive's five outcomes. Three put the drive back into service; which one wins for a given drive is the allocation question in P6.*

### 4.4 The leak upstream of the cage: tickets that weren't the drive {#4-4-the-leak-upstream-of-the-cage-drives-pulled-that-were-never-bad}

Drives also leave service one at a time through repair tickets. A published study of about ten thousand SSD-related failure tickets at one Asian cloud found 34.4% weren't caused by the drive at all (Third party; Xu et al. 2019). Human mistakes, such as a drive in the wrong slot, made up 20.5% of all tickets and faulty cables 13.9%. Separately, about 12% of all fixes were simply a reboot.

Those tickets didn't consume drives. That cloud's repair sequence runs from a remote reboot to a slot check, then a cable swap, with replacing the drive as the last resort. Only 31.2% of tickets ended in a drive swap (Third party). So the study doesn't say a third of pulled drives were healthy. It says a third of tickets weren't the drive, and triage caught them first.

Where a site skips that triage and pulls a drive on every ticket, each non-drive ticket inflates spare consumption. If the misdiagnosis sticks, a healthy drive also leaves the reusable pool: stranding by misdiagnosis (Inferred). How many pulled SSDs actually test healthy isn't published anywhere (Unknown). The nearest evidence is one analogy and one signal. One disk vendor found no fault in 43% of hard disks customers returned (Third party, hard drives; Schroeder and Gibson 2007). And at one large cloud, about half of swapped SSDs never returned to production, so up to about half did, after repair (Third party; Alter et al. 2019). Diagnosis quality is a supply-side variable where triage is weak; at any one operator, its size has to be measured (Inferred).

### 4.5 Scale of the flow

Kuantillion Cloud harvested about 8.8 million components in 2024 for reuse or resale, including over 3 million drives wiped and then reused or resold. In 2025 it harvested more than 7.5 million for internal reuse alone, through build, upgrade and spares programs, and resold about 2.6 million (Press for the 2025 resale).

The total flow didn't fall from 2024 to 2025. Internal reuse grew while resale fell from more than 6.7 million components to about 2.6 million. That fits parts staying in-house as supply tightened, though no source states the cause (Inferred). The reports say hard drives and never mention SSDs, so whether SSDs are in any figure isn't public (Unknown).

The rest of the industry runs the same loop, mostly in silence, through supply-chain organizations rather than storage engineering (World; A.1).

### 4.6 Why supply and demand move together

Supply of legacy flash is set by the decommission schedule, not a purchase order. Keeping a platform longer cuts the harvest that feeds its own spares. Retiring one releases drives that may only fit the same generation. Supply and demand are coupled through the same lifecycle decisions (Inferred). The groups on this path, and their numbers, are in section 10; each optimizing its own number is the root of most problems below (Inferred).

## 5. Demand: four places a legacy drive can go

It is tempting to frame legacy flash as a scheduling problem: find jobs that tolerate older drives. That is one of four sinks, and may not be the largest (Speculated). The other three are physical: repairs, upgrades and retirement.

| Sink | What creates demand | Horizon | Signal | Who decides |
| --- | --- | --- | --- | --- |
| Workloads | Jobs or storage tiers a legacy drive can serve | Hours to quarters | Resource-manager requests, quota, placement constraints | Schedulers and storage systems, under fleet policy |
| Repairs and spares | Drives failing in machines that must keep running | Days to weeks per event; years for the pool | Failure rates by model and age; repair tickets | Data-center operations, under a spares policy |
| Upgrades and builds | Running machines given more or different flash, or new machines built partly from reused parts | Quarters | Fleet shaping plans; build schedules | Fleet shaping and hardware engineering |
| Retirement | Drives with no better use, or whose cost to carry exceeds their value | Continuous | Health, compatibility, carrying cost, resale price | Fleet lifecycle and reverse logistics |

### 5.1 Workloads

Most data-center SSDs use a small share of rated endurance: typically under 2%, and about 15% at the 99th percentile in one large study (Third party). Most legacy drives likely have plenty left. Their limits are usually capacity per slot, interface speed, power per terabyte and tail latency (Inferred).

- **Natural tenants** are plausibly read-mostly caches, replicated or erasure-coded data, scratch space and logs (Inferred; a sample, not a taxonomy). Its public cloud sells local-flash caching as cheaper than memory, and caches absorb device loss by design. A server maker's patent formally gives worn drives a read-mostly end of life (Third party).
- **The acceptance question has been asked from the top:** two nines and twice the capacity, or four nines and half (section 3). Some workloads would rather have more, lower-assurance capacity. The problem is finding and pricing them (Inferred).
- **Not all legacy is low-endurance.** An older write-intensive drive rated at 10 to 17 drive writes per day absorbs far more writes per terabyte than a new QLC drive at 0.6 (Third party). But what matters is *remaining* bytes, older controllers may not hold latency steady under sustained writes, and missing firmware features can fail qualification (Inferred).
- **The physics isn't free either way** (Third party mechanisms; Inferred application). Reads disturb neighboring cells on worn flash, so read-mostly isn't wear-free. A worn cell also leaks charge faster, so errors depend on wear and time together. Retention margin belongs in any per-drive record.
- **Pooled flash changes the math.** The simulations behind Kuantillion Cloud's flash cache drive SSD purchases and show planners how to shift capacity between applications. A pooled drive can lend capacity, IOPS or endurance to many tenants; a drive trapped in one server is worth what that server uses. A pool is also the main published route to stranded flash (Inferred).
- **Wear has a price.** Kuantillion Cloud's published placement model charges wear per byte written, at a rate set by each model's rating. That is the variable that would make a worn drive cheaper or dearer for a job (Inferred). The public record implies a cost ladder: memory, then new flash, then worn flash, then disk, rationed by write tolerance (Inferred). A graded drive slots in as a priced asset. Only the grading is missing in public.

### 5.2 Repairs and spares

A six-year field study of a large fleet's SSDs found 4–10% replaced over four years, with errors strongly clustered (Third party; Schroeder et al. 2016). That is about 10,000 to 25,000 replacements a year per million drives of a generation (Arithmetic). Each needs a drive that fits that generation's slots, protocol and qualification.

- **New spares for old platforms get scarce.** Since late 2025, allocation has favored high-capacity drives, making 960 GB and 1.9 TB parts hard to buy (Third party). Harvest becomes the practical source once any last-time-buy stock runs out (Inferred). Whether Kuantillion Cloud makes last-time buys is Unknown.
- **Other big clouds already do this.** One meets 85% of obsolete-spares demand from harvest; another supplies 13% of all spares from reuse (Third party). Kuantillion Cloud says its harvested spares buffer it against outside shocks. Even small operators hire to defend the working capital spares tie up (section 10). The pool is a financed position, not a parts bin (Inferred).
- **Not every failed drive is a demand event.** Where triage is weak, better diagnosis (4.4) cuts drive consumption, and drives cleared instead of pulled stay in service (Inferred). One internet platform rates drives into four health levels rather than pass or fail, and deliberately leaves some flagged drives in place, counting migration and retirement as overheads (Third party). Telemetry is becoming an instrument of life extension (Inferred).
- **Repairs are expensive.** One cloud reports repairs taking 3 days at the median and 190 at the 99th percentile, using about half of technician hours and about 9% of six-year cost. Fail-in-place, running on with a dead drive switched off, cut its repair tickets about 55% (Third party). A spares decision becomes a scheduling decision (Inferred).
- **Supply is the decommission schedule.** Once bought stock is gone, spares for generation N come from retiring generation-N machines. A pool is sized against two moving schedules, failures and retirements (Inferred).

### 5.3 Upgrades and builds

In 2024, 44% of components in Kuantillion Cloud's builds, maintenance and upgrades came from reused inventory, and its lifecycles are moving to condition-based, modular upgrades.

- **Life extension.** Adding or swapping flash can reshape running machines to serve demand longer, substituting for new machines in a shock (Inferred).
- **Reused parts in new builds.** One cloud published a server pairing 12 reused 1 TB drives with 2 new 4 TB drives, striped to hide the old drives' speed. It reports about 28–29% lower emissions per core (Third party; Wang et al. 2024). That figure is per core. Across that cloud's whole fleet, the modelled net cut is about 8%, or 15% when performance needs are met. Off-the-shelf passive adapters fitted the old M.2 drives into newer E1.S slots, so the fit gate can be crossed cheaply. With 14 drives instead of 6, the server's modelled failure rate rose from 4.8 to 7.2, about 50% more repair events per server (Third party; Arithmetic). Production use is Unknown. Striping evens load, not remaining life or tail latency, and same-age drives in one box sit uneasily with the correlated-failure evidence (Inferred).
- **Physical fit limits this sink.** Older 2.5-inch and M.2 drives need adapters for EDSFF slots, and SATA or SAS needs a supporting backplane (Third party). Upgrades mostly mean legacy drives in their own or adjacent generations (Inferred).

### 5.4 Retirement

Retirement is a real sink, not a failure. Some drives cost more to keep than they return (Inferred).

- **Power per terabyte.** A 2015-era 1.6 TB SATA drive draws about 2 to 4 watts per terabyte (3.3–6.8 W). A 2 TB early-NVMe drive draws about 6 to 12.5 (12–25 W). A 2025 122 TB QLC drive draws about 0.2 (24 W) (Arithmetic, from specifications; active and idle differ several-fold). That is about 10–20 times per terabyte for SATA and 30–60 for NVMe. Per IOPS the gap is only about 1.5 to 3 times, and old write-intensive parts close most of it for sustained writes. Old drives cost most when used for capacity (Inferred).
- **The host costs money, not the drive.** An old drive's extra power is about $2 per terabyte per year against a replacement value of hundreds (Arithmetic). Keeping an old server alive for its flash carries the whole machine's power, space and repairs, and strands its other resources. Retirement is a host decision wearing a drive costume (Inferred).
- **The keep branch has a visible price.** A mid-size storage provider that publishes drive statistics hit its highest quarterly failure rate in years in mid-2026, driven by seven- to eight-year-old models (Third party). Its fleet is disks, but it traces the keep-or-retire curve in public (Inferred).
- **Resale value.** Used enterprise drives fetch more in a shortage. The disposition trade reports more residual value in used flash than a year ago, and a shift toward harvesting parts (Press, 2026). Retired-generation enterprise NVMe drives sold for about $80–160 per terabyte gross in the year to August 2026 (Press: dealer appraisals and listings; no price index exists). That is about 13–25% of the October new price. Net to a large seller is lower after disposition fees and bulk discounts (Unknown). Resale raises the cost of keeping a marginal drive (Inferred).
- **Data security.** Drives that fail sanitization, or are dead, are destroyed. Kuantillion Cloud requires two independent verifications before a device leaves custody, and shreds on site on failure. Current standards have moved past shredding for flash: the revised federal guideline's FAQ calls it ineffective for medium- and high-security flash, given its data density. The international standard deprecates it; melting or incineration is the listed destruct method (Third party). So assurance for a dead drive rests on keys kept off the drive, plus a listed destruct method (Inferred). What share of the fleet's flash ever held unencrypted data is Unknown.

## 6. Supply: the gates

A legacy drive is only supply if it can reach a sink. Eleven gates sit in the way. They are concurrent constraints, not a sequence, though sanitization comes first in time, because nothing moves until data is dealt with (Inferred). Each removes some drives, and each has its own owner and cost.

| Gate | Question | What fails it |
| --- | --- | --- |
| Physical fit | Does it fit the slot and connector? | 2.5-inch U.2, SATA or SAS drives can't go into EDSFF-only chassis. M.2 lacks hot-swap. Adapters add cost and qualification (Third party; Inferred) |
| Protocol and backplane | Does the platform speak its protocol? | SATA and SAS need a SAS, SATA or tri-mode path. Link speed isn't a blocker, since PCIe negotiates down (Third party). Which way tri-mode compatibility runs is stated inconsistently (Unknown) |
| Qualification | Is this model and firmware approved here? | Unqualified combinations. Qualification is publicly called cumbersome and slow; its cost is Unknown (Third party) |
| Firmware baseline and provenance | Safe firmware, and a trustworthy history? | Some drives shipped with bugs that kill them at a fixed power-on age, about 3.7 and 4.6 years in two cases, unless updated (Third party). A model whose safe firmware is gone fails outright. Re-entering drives need provenance: counters can be reset, and scarce SKUs attract counterfeits (Inferred) |
| Observability | Can this cohort be seen at all? | Newer logs and latency monitors were added to the industry data-center SSD spec, which Kuantillion Cloud co-authors. Older drives lack them. Blindness fails whole model generations (Reported; Inferred) |
| Condition | Do readings and history clear the bar? | Wear, spare blocks, media errors, latency history, retention margin, capacitor health (Third party signals; the bar is each operator's). Capacitor aging makes a harvested drive older than a new one however lightly written (Inferred) |
| Change window | Can the change be scheduled? | Maintenance freezes, evacuation cost for live hosts, limits on capacity touched at once. A reuse that can't book a window doesn't happen (Inferred) |
| Systems of record | Does the drive exist, correctly, in the fleet's systems? | A used part needs an identity: a SKU for a regraded drive, a grade, a cost basis, a location. Systems built for new parts may not hold it (Inferred; Kuantillion Cloud says it lacks a common classification) |
| Systems complexity | Can the fleet afford another shape? | Every graded tier is a new SKU, qualification combination, placement constraint and forecast category. A scheme the solvers and quota systems can't absorb fails here (Inferred) |
| Jurisdiction | Can it legally and economically cross this boundary? | A drive moving between legal entities or countries can trigger tax transfer-pricing rules, customs duty on used goods and e-waste export rules. Since January 2025, an international convention requires prior consent for e-waste shipments (Third party). Whether drives shipped for reuse count as waste is Unknown |
| Sanitization | Can its data be provably erased? | Dead, unresponsive or unverifiable drives are destroyed; two independent verifications are required before a device leaves custody. Shredding no longer meets current standards for flash (section 9) |

**The provenance gate has a real event behind it.** In 2025 one drive maker uncovered up to a million used hard drives, worn in a storage-based cryptocurrency boom, with their standard health counters reset and sold as new (Press). In a later wave, the maker's own protected field log was forged too. Raids seized drives and reset gear, and the maker restricted resale to verified distributors. The fraud involved hard drives, not SSDs; SSD health counters are, if anything, easier to reset (Speculated). Once a drive leaves custody, its history is forgeable, the best argument against outside used supply (Inferred). It is also the best argument for internal reuse, where custody and telemetry never break. An attested per-drive history (P1) is the asset the grey market can't counterfeit.

**The memory precedent is a partial answer key** (Inferred). Kuantillion Cloud's one confirmed reclaim program moves old memory into new AI builds. Memory dodges the hardest gates. It holds no data, so sanitization and custody collapse; it has no wear state, so grading collapses; and the dedicated interface collapses fit. The program must still have crossed qualification, change windows and systems of record, inside the same budgets and seams. The supply chain runs it into new builds, not storage engineering into workloads. The distance between memory and flash (wear, grading, data) measures this case's residual problem.

**Health is predictable, but not from one reading.** Large-fleet research, including a six-year study of about 30,000 drives, finds high infant mortality and good recall for machine-learned predictors. Another finds static health values weak alone and much better with wear history (Third party). One Asian cloud's slow-drive detector watched about 248,000 drives for ten months, with near-perfect precision, and found 304 fail-slow cases. Its released dataset holds 315 verified fail-slow drives beside 41,000 normal ones. Among verified slow drives, about two-thirds were slowed by software scheduling, not hardware. Isolating confirmed slow drives cut node tail latency by close to half (Third party; Lu et al. 2023). History matters as much as the current reading, and the frontier is graded risk, not binary scrapping (Inferred).

**Location, labor and waiting.** Drives sit at one site and demand at others, and moving them takes technician time repairs also need (Inferred). The retention standard requires an enterprise drive to hold data unpowered for at least three months at the end of its rated endurance (Third party). A lightly worn drive should hold far longer (Inferred). For an erased drive, data loss is moot. The issue is a stale test: health readings taken before storage age on the shelf. Stored drives need re-powering and re-testing on a cadence (Inferred).

### 6.1 What is actually known about second lives

The field studies below measure first lives, at other operators and researchers. They don't agree on what happens late in life (Third party; mapping Inferred).

- **Early failures are common; a late rise is not established.** A study of 1.4 million enterprise SSDs over 30 months saw failure rates rise for 12–15 months, then fall for a long period, with no sign of a rise at end of life (Maneas et al. 2020). A six-year trace of about 30,000 SSDs found an infancy of about 90 days, then a roughly constant rate. Its oldest drives failed about as often as young ones past infancy (Alter et al. 2019; Pinciroli et al. 2020). Another large fleet found failure rates don't rise steadily with wear (Meza et al. 2015). A fourth found age raises raw bit errors, but raw errors don't predict uncorrectable ones (Schroeder et al. 2016).
- **Firmware, model and history matter more than age.** In the 1.4-million-drive study, early firmware versions had from over 2 to over 10 times the replacement rate of later ones, and most drives never changed version. Model was a direct factor in a half-million-drive study (Narayanan et al. 2016). After one uncorrectable error, the chance of another the next month was nearly 30%, against 2% in a random month (Schroeder et al. 2016).
- **Firmware time bombs.** Two published bugs killed drives at about 3.7 and 4.6 power-on years without a fix (Third party). Redeploying without firmware baselines redeploys the bomb (Inferred).
- **Failures cluster.** In the 1.4-million-drive study, one replacement in a RAID group raised the chance of another there within a week about 180-fold (Maneas et al. 2020). A million-drive study found correlated failures within a node or rack common (Han et al. 2021).
- **One operator's bad quarter.** Out-of-warranty legacy PCIe drives were 22% of one operator's drives but 77% of its failures in a quarter. Each failed card meant replacing the host chassis, which couldn't take a modern part (Third party). It is one quarter at one operator, confounded with model, firmware and warranty (Inferred).
- **Second life is unmeasured.** One cloud's reused-drive design assumed reused drives fail no more than new. It reported lower or equal failure rates for its reused parts before redeployment, without the rates, and most drives kept over half their rated erase cycles after seven years (Third party). That is a first-life observation carried into an assumption. Removal, shipping and reinsertion may restart the infancy clock; nobody has measured it (Speculated).
- **The read.** First-life studies disagree on late-life hazard, and two large ones saw no end-of-life rise. Firmware, model and error history dominate age. Second-life hazard, including any early failures that handling causes, is unmeasured (Unknown). No operator publishes second-life failure rates, requalification yield or sanitization yield. This is the case's single most load-bearing unknown.

## 7. The money: what the flow is worth

This section works the published figures into orders of magnitude. Every number is a range, and anything invented to show a shape is Illustrative. None of these are Kuantillion Cloud's numbers; its contract prices are Unknown throughout.

### 7.1 The anchor question: what kind of value is this?

Every dollar figure below rests on a fork the public record can't resolve (Inferred throughout).

- **If the purchase commitments leave volume flexibility** (flexible bands, deferrable tranches, buffer stock), a reused drive *avoids a purchase*. Replacement cost is the right anchor.
- **If they are firm in volume,** the contracted flash arrives and is paid for regardless, and reuse avoids nothing. A reused drive's value is then *marginal capacity in a market where capacity, not money, binds*. The record supports that frame: cloud results would have been better with more compute, and a large customer was turned away (section 3).

The anchors differ in size, since capacity value during stockouts can exceed replacement cost. They differ in beneficiary, revenue rather than procurement. And Path B (section 8) kills the procurement case but only dents the capacity case while stockouts last. The commitments' flexibility is Unknown, so this section carries replacement cost as the computable anchor. The capacity anchor needs revenue per unit of capacity, or the cost of a stockout, which only internal data carries (Unknown). Resolving the fork is among the first questions any answer faces.

### 7.2 What a legacy drive is worth now: an upper bound

One mainstream 3.84 TB enterprise drive listed at $2,442 new in October 2026, about $640 per terabyte (Press; a seller with an interest). Dividing by the rise through the third quarter, about 3.3 times, implies about $190 per terabyte at end-2025 (Arithmetic). The forecast fourth-quarter rise of 23–28% is left out; if it lands, the top would be about $780–815 (Arithmetic on a forecast). A mid-2026 listing near $120 per terabyte on a high-capacity QLC part sits below that, as the cheapest tier would (Press; one listing with internal inconsistencies).

The case carries **about $190 to $640 per terabyte**: from the pre-shock equivalent, about where Path B would return, to today's open-market price. Small or older-interface drives sit toward the top while the shortage lasts. Three limits apply (Inferred).

- It is an *upper bound on Kuantillion Cloud's cost*. A buyer this size pays lower contract prices, which are Unknown.
- It is *gross, not net*. Value is realized only after sanitization, testing, firmware work and shipping, at a cost and yield no operator publishes. For small or old drives, net value can approach zero or go negative.
- It applies *only where a reuse sink exists*. A drive nothing in the fleet can use is worth its resale or salvage price. Replacement value prices the reuse sinks; resale value prices the exit. Even where a sink exists, reuse gives up that resale, so the value of reuse is its margin over the exit (section 7.5).

### 7.3 What the commitments do to the margin

Multi-year contracts cover the *planned* fleet (Inferred throughout). They don't cover the unplanned margin: repair spikes, late builds, demand surprises. When next year's output is already allocated, that margin is exactly what can't be bought quickly. Hardware the fleet owns is margin that needs no new contract, no allocation win and no lead time beyond its own pipeline.

It isn't the only such margin. The record also shows third-party compute rental, demand shaping through the allocation toolkit, configuration substitution, and whatever buffer stock Kuantillion Cloud holds (Unknown). The harvest's distinction is narrower and still real: it is the only margin that is storage-shaped, already owned and already paid for. Two caveats apply. The commitments have no disclosed composition, and volumes at a buyer this size usually carry undisclosed flexibility. Because fleet parts are capitalized, this margin is also invisible in financial statements, and no internal line item automatically prices it.

### 7.4 The flow, the denominator and the stock

Every row below rests on an invented SSD share of the 3 million drives harvested in 2024 (Illustrative). The report calls that count hard drives, so the true SSD share could be near zero.

| If SSDs are… | …of the 3M flow, at an average… | …the flow is | Gross replacement value at $190–640/TB |
| --- | --- | --- | --- |
| 10% | 1 TB per drive | 300K SSDs a year, 0.3 EB | About $0.06–0.2B a year |
| 30% | 2 TB per drive | 900K SSDs a year, 1.8 EB | About $0.3–1.2B a year |
| 50% | 4 TB per drive | 1.5M SSDs a year, 6 EB | About $1.1–3.8B a year |

Even the smallest cell may justify a program, or not, once pipeline cost, yield and forgone resale are netted out; the largest clearly would (Inferred). The SSD share is the numerator's biggest unknown.

**The denominator.** Capital guidance near $200 billion, with 60–65% of technical-infrastructure spend on servers, implies server spend near $120 billion a year (low end, since not all capital is technical infrastructure). If flash is 5–15% of server cost, at $100–300 per terabyte, the spend arithmetic gives 20 to 180 EB a year (Illustrative). The top of that isn't credible. The whole industry shipped about 156 EB of enterprise SSD in the first three quarters of 2024, to all buyers (Third party: an industry tracker). The case carries 20–60 EB a year for Kuantillion Cloud (Illustrative); 60 EB is about two-fifths of those three quarters' industry total.

The harvest rows then run from about 0.5% to 30% of deployment, with the central row at about 3–9% (Arithmetic on Illustrative inputs). If the 3 million really are all hard drives, the ratio is near zero. The ratio is gross, before yield, and every input is invented, so read it as a wide band, not an estimate. It describes the problem's scope (Inferred). Near the bottom, this is spares continuity and cost hygiene; near the top, supply strategy. Whether a program pays is a separate dollar question: its margin over exit times usable terabytes, against its fixed cost (Inferred). Both halves of the ratio are knowable inside Kuantillion Cloud in days, and neither is public.

**One price basis at a time.** The ratio is in exabytes, so it mixes no prices. Each dollar row uses one anchor per end: $190 at its low end and $640 at its high end. The $100–300 deployment price is an assumed contract price, a third basis that enters only the denominator (Illustrative).

**A cross-check from the other end.** Drives retiring now were bought about six years ago, when the fleet was smaller. If deployment is 20 EB a year today and grew 15–30% a year, about 4–9 EB a year was bought six years ago (Illustrative; Arithmetic). That is roughly what retires each year now, before intact redeployment and yield. It is the same order as the top harvest row, 6 EB, not several times it. Dividing a flat 100 EB by a 5–6-year life gives 17–20 EB a year, but only for a fleet that isn't growing. And 4–9 EB is about 2–4% of all SSD bits the whole industry shipped in 2020, 207 EB (Third party: an industry tracker).

**The stock and the stranded slice.** Three million drives a year over a five-to-six-year life suggests at least 15 to 18 million installed drives, disk and flash mixed. That is a floor, for two reasons: the 3 million counts only drives wiped and reused or resold, and the fleet is growing (Illustrative steady state). The low deployment bound suggests an installed flash base of about 100 EB if the fleet were flat. If deployment grew 15–30% a year, the last five to six years' purchases sum to about 60–90 EB (Illustrative). One cloud measured 54% of its server SSD capacity stranded, and a research estimate puts small-group pooling at about 19% (Third party). The 54% is a peer's figure, and not all stranding can be reached. Applying the 35-point gap to 60–100 EB, with half to all of it reachable, frees about 11–35 EB once (Illustrative). Stranded capacity is worth recovering only where pooling or placement can reach it, pooling costs money, and a stranded terabyte is worth less than a bought one (Inferred). Even so, the quiet stock is likely larger than the visible flow: about two to six times the largest annual harvest row, once.

### 7.5 Pipeline, life and carbon

- **Labor.** At 10 to 30 technician-minutes per drive (Illustrative), all 3 million drives would take about 250 to 750 technician-years a year. Those drives are already wiped today, though. The SSD share in the flow rows, 300,000 to 1.5 million drives, takes about 25 to 375 technician-years: an upper bound on the extra load a graded SSD program adds (Illustrative; Arithmetic). That is a staffing program, not an impossibility (Inferred). The risk is landing on the same sites and quarters as repairs, which take about half of technician hours at one peer. Whether labor is the true ceiling under Path A turns on this number; only time-and-motion data can settle it (Unknown).
- **Dollars.** With loaded labor at $60–100 an hour plus $5–20 per drive for test, sanitization and shipping, a drive costs about $15–70 to process (Illustrative). Netted against replacement value at 50–90% yield, value before exit runs about $25 to $570 per terabyte. But reuse gives up resale. Used enterprise drives fetched about $80–160 per terabyte gross in the year to August 2026 (Press), an upper bound on what a seller nets. Less that forgone resale, reuse beats exit by about $90 to $490 per terabyte at the $640 anchor. At the $190 anchor the margin runs from about −$135 to +$85, so thin cohorts flip sign (Illustrative; Arithmetic). For example, at 80% yield, $20 per terabyte of pipeline cost and $120 of resale, reuse beats exit by about $370 per terabyte at $640, and by about $10 at $190. Used prices lag new ones, so under Path B resale would likely fall too, after a delay (Inferred). The sign turns on the anchor, the resale band and whether a sink exists, more than on pipeline cost (Inferred).
- **A year of life.** Kuantillion Cloud's one-year extension avoided about $3.9 billion of first-year depreciation; peers booked about $900 million and $20 million (Press). These price the *host* decision (P2), not the drive, and are the only published dollar anchors for lifecycle flexibility at fleet scale.
- **Carbon.** At about 0.16 kg CO2e per GB embodied, a 2 TB drive carries about 320 kg (Third party; Arithmetic). Across the flow rows, reuse would preserve about 0.05 to 1 MtCO2e a year (Arithmetic). That holds only if reuse truly displaces a new purchase, the additionality assumption under every avoided-procurement claim (Inferred). Kuantillion Cloud says procurement-centric metrics miss this preserved carbon.

### 7.6 The scale model in one table

Most rows are Arithmetic on tagged inputs. Read every row as an order of magnitude.

| Quantity | Estimate | Formula and inputs |
| --- | --- | --- |
| 2026 enterprise SSD price multiple | About 3.4–4.2× end-2025 | 1.80 × 1.50 × 1.225 × 1.255 ≈ 4.15 on quarterly midpoints; one analyst's cumulative figure ≈ 3.4 |
| Replacement-value range | About $190–640 per TB | $2,442 ÷ 3.84 TB ≈ $636 (Oct 2026); ÷ 3.31 (1.80 × 1.50 × 1.225) ≈ $192 at end-2025. The forecast Q4 rise is left out; with it, about $780–815 |
| Growth in purchase commitments | About 5.4× in six months | $811B ÷ $149.1B (Press inputs) |
| Annual drive harvest | 3 million+ drives | Reported, as hard drives |
| SSD harvest flow | 0.3–6 EB a year | 3M × 10–50% SSD share × 1–4 TB per drive (Illustrative) |
| Gross value of the flow | About $0.06–3.8B a year | SSD flow × $190 (low end) to $640 (high end) per TB; one anchor per end |
| Flow value against the commitments | About 0.01–0.5% | $0.06–3.8B ÷ $811B; an annual flow against a multi-year, mixed aggregate |
| Enterprise SSD shipped, whole industry | About 156 EB in Q1–Q3 2024, all buyers | 41.9 + 52.5 + 61.5 EB by quarter (Third party: an industry tracker) |
| Annual flash deployment | About 20–60 EB a year | Spend arithmetic: about $120B × 5–15% ÷ $100–300 per TB gives 20–180; the top is capped well below the industry total (Illustrative) |
| Materiality ratio (gross) | About 0.5–30%; central row about 3–9%; near zero if the count is all hard drives | SSD flow before yield ÷ 20–60 EB (all inputs Illustrative) |
| Flash retiring a year, cohort check | About 4–9 EB a year | 20 EB ÷ (1 + g)^6, g = 15–30% (Illustrative); a flat 100 EB ÷ 5–6 years would give 17–20 |
| Installed drive base | At least 15–18 million | 3M a year × 5–6-year life (steady state, Illustrative; a floor) |
| Installed flash base | About 60–100 EB | 100 EB flat (20 EB × 5 years); about 60–90 EB if deployment grew 15–30% a year (Illustrative) |
| Stranded flash recoverable | About 11–35 EB, once | 60–100 EB × (54% − 19%) × 50–100% reachable (peer figures; reach Illustrative) |
| Spares demand | About 10,000–25,000 drives a year per million installed | 4–10% replaced over four years ÷ 4 |
| Spare consumption against true failures, no-triage bound | Up to about 1.5× | 1 ÷ (1 − 0.344): reached only at a site that pulls a drive on every ticket; the studied cloud triaged first, and 31.2% of its tickets ended in a swap |
| Pipeline labor, all drives | About 250–750 technician-years a year | 3M drives × 10–30 min ÷ 60 ÷ 2,000 h (minutes Illustrative) |
| Pipeline labor, SSD share only | About 25–375 technician-years a year | 0.3–1.5M SSDs × 10–30 min ÷ 60 ÷ 2,000 h (Illustrative) |
| Pipeline cost per drive | About $15–70 | 10–30 min × $60–100 per hour + $5–20 test, sanitization, shipping (Illustrative) |
| Net value per TB, before exit | About $25–570 | 50–90% yield × $190–640 − $4–70 per TB pipeline cost (Illustrative) |
| Used enterprise SSD resale, gross | About $80–160 per TB | Dealer appraisals and listings, 12 months to Aug 2026 (Press); about 13–25% of $636 and 42–83% of $192 |
| Margin of reuse over exit per TB | About −$135 to +$85 at $190; about +$90 to +$490 at $640 | 50–90% yield × anchor − $4–70 pipeline − $80–160 forgone gross resale (Illustrative) |
| Extra power of an old drive | About $2 per TB per year | (3.0 − 0.2) W per TB × 8,760 h ÷ 1,000 × PUE 1.1 × $0.08 per kWh (PUE and price Illustrative) |
| Power per TB, 2015 drive against 2025 QLC | About 10–20× (SATA); 30–60× (early NVMe) | 2.1–4.3 and 6–12.5 W per TB ÷ 0.2 W per TB (vendor specifications) |
| Embodied carbon preserved | About 0.05–1 MtCO2e a year | 0.3–6 EB × 0.16 kg per GB |
| One year of server life, fleet level | About $3.9B avoided depreciation in the first year | Press; the host decision's dollar anchor |

**What the model shows** (Inferred)

1. **The stakes span two orders of magnitude, and the ratio describes the class.** The same record fits a spares-continuity problem and a supply-strategy problem. Whether a program pays is a dollar test, not the ratio.
2. **The quiet stock is likely larger than the visible flow,** about two to six times the largest annual harvest row, once.
3. **The program is unlikely to be a balance-sheet item.** Even the largest flow row is under 0.5% of the commitments. Its case rests on the margin: the unplanned repair, the late build, the zone stockout. That is the capacity anchor's territory.
4. **Diagnosis is cheap supply only where triage is missing.** At the studied peer, the non-drive tickets were caught before any drive was pulled. A site that pulls on every ticket could avoid up to a third of its spare consumption. Where triage exists, the prize is the unmeasured share of pulled drives that test healthy.
5. **Labor is bounded, not prohibitive,** unless it collides with repairs at the same sites.
6. **The drive's watts are noise; the host decides.** About $2 per terabyte per year against a replacement value of hundreds.
7. **Reuse must beat the exit, not zero.** Against the resale it gives up, reuse wins clearly at today's prices. At the pre-shock anchor, thin cohorts are worth more sold than reused.

**What one bad incident costs.** The tables are expected values with an unpriced left tail (Inferred). A correlated failure in redeployed cohorts, or worse, a data-bearing drive outside the sanitization record, brings SLA credits, lost trust, regulatory exposure and, most reliably, the program's political death. Either could exceed several years of gross value in the smaller cells. So P6 carries a risk budget beside its prices, and sinks need different evidence: a cache that absorbs device loss tolerates more uncertainty than durable storage.

**Together.** A program that prices only one of these numbers will be outbid by the team optimizing another (Inferred).

## 8. Two futures, and the signposts between them

**What Kuantillion Cloud has said in 2026.** It calls itself supply constrained. It set 2026 capital guidance at $175–185 billion in February and raised it twice, to $195–205 billion by July (February and April figures Press). In October it said spending will rise significantly in 2027, and that it began using third-party compute at the end of the third quarter (Press). No statement about flash, like the one about memory, has been found (Unknown).

How long the shortage lasts is disputed, and the dispute is load-bearing: the right size for a reuse program depends on which future arrives. A good answer works under both (Inferred).

**Path A: tight through 2028.** This is the flash makers' position (Press, from earnings calls). Supply is much tighter in 2027 and 2028 than in 2026; one maker sees memory demand ahead of supply through 2030. Little new fab output arrives before mid-2027 to 2028, and the largest buyers are locked into multi-year prepaid allocations. One maker reportedly demanded multi-year cash prepayments (unverified). Disk stays allocated through 2028, so QLC substitution continues.

- Under Path A, replacement values stay high and every sink competes for the harvest. Old-platform spares get scarcer as vendors exit small SKUs. The program's ceiling is pipeline capacity (P7), not demand (Inferred).

**Path B: easing from late 2027.** A leading analyst expects NAND supply growth to overtake demand in the second half of 2027, after a 4–5% deficit in 2026 (Third party). It cites weak consumer demand and new entrants reaching about a fifth of industry bits. The makers dispute it (Press).

- Under Path B, high-capacity drives get cheaper first. The workload sink shrinks fastest, because new flash competes there directly; spares erode more slowly (Inferred). A program sized for Path A prices, carried into Path B, is fighting the last shortage (section 14).

A third path: memory markets whipsaw (Third party history). A glut after this shock could push prices below the old baseline, making even the spares case marginal for a while (Inferred).

**Both ends of the trade, in one filing.** One cloud operator's 2026 annual filing says it answered shortages by committing to larger purchases, raising its risk of excess and obsolete stock (Third party). Beside that, it warns useful lives could shorten, and that real lives and failure rates may differ from expectations. Book supply ahead and carry obsolescence risk; stretch lives and carry failure risk. That is the trade this case sits inside (Inferred).

**Four forces the paths leave out** (Inferred).

- **Kuantillion Cloud's own demand bends.** At three to four times the price, purchases get deferred, data gets re-tiered and some stranding is tolerated. A reused drive is worth no more than the cheapest substitute Kuantillion Cloud would choose, and under stress, doing without is one.
- **The resale market feeds back.** Kuantillion Cloud's resale fell from more than 6.7 million components to about 2.6 million in a year. If peers retain too, used supply dries up as buyers are priced out of new, amplifying used prices under Path A and their fall under Path B. The big operators move the price their retention is judged against. The disposition trade already reports the Path A side (Press).
- **Demand composition changes the slots.** If the AI-dominated build mix completes the move to EDSFF and large QLC, the upgrade sink closes on a roughly knowable schedule. Workloads and spares become wasting assets with estimable half-lives.
- **The program moves its own market.** A visible program at this scale would shift allocation priority, warranty terms and small-SKU pricing, in both directions.

**Signposts to watch,** each public and quarterly or better (an Inferred selection).

| Signpost | Points to A | Points to B |
| --- | --- | --- |
| Enterprise SSD contract price, quarter over quarter | Rises persist into 2027 | Increases flatten, then turn |
| Used enterprise drive prices by model | Holding or rising | Falling first on high-capacity models |
| Share of next year's maker output committed | Rising past three-quarters | Slipping; spot volume reappears |
| New fab and node start dates | Slipping right | Holding or pulled in |
| Hyperscaler long-term agreements | New ones, with floors | Renegotiations; price ceilings exercised |
| Hyperscaler resale volumes | Falling further | Recovering |
| Memory-maker inventory days; contract-spot spread | Lean; spot above contract | Building; spot below contract |
| Hyperscaler capex guidance | Raised again | Trimmed, or shifted away from storage |
| Consumer and PC SSD configurations | Still halved | Standard capacities restored |
| Small-SKU availability (sub-2 TB, older interfaces) | Worsening | Likely scarce either way (Inferred) |

**The floor question.** The spares sink is often called the program's floor. Vendors rarely resume discontinued small SKUs, even when bits are plentiful (Speculated: consistent with 2026 behavior, not a documented rule, and third-party makers serve some legacy niches). The floor erodes from the demand side instead. It lasts only while old platforms do, and fail-in-place substitutes for spares at any price (Inferred). Spares are the floor and workloads the option on Path A, with the floor slowly sinking.

## 9. External constraints

These sit outside Kuantillion Cloud's control but shape every answer.

- **Erasure standards.** The US federal media sanitization guideline was revised in September 2025 (Third party; details Press). It points to an international storage-sanitization standard, requires an enterprise sanitization *program*, and separates verification (inspecting a technique's immediate outcome) from validation (a formal review of that evidence that accepts any residual risk). For SSDs, purging means block or cryptographic erase. Its FAQ calls shredding and pulverizing ineffective for medium- and high-security flash, given data density. The international standard deprecates them and lists melting among destruct methods (Third party). Erase commands can fail quietly: in a 2011 lab study, 3 of 7 testable SSDs didn't erase reliably, and 1 falsely reported success (Third party; Wei et al. 2011).
- **Destruction is mostly a compliance posture.** An industry paper estimates about 90% of hard disks are destroyed after first use (Third party). Yet the big clouds' documentation shows reuse-with-wipe as the in-fleet norm (Press). Health and finance rules still mandate physical destruction (Third party; Inferred). Kuantillion Cloud and another large cloud are co-developing an open drive key-management design so cryptographic erase can replace shredding. Internal reuse faces a lower bar than resale (Inferred).
- **Vendors, warranty and the grey market.** Reused drives are usually out of warranty, and old models stop getting firmware fixes (Inferred). One storage vendor argues against repurposing SSDs, claiming higher latent-error rates (Third party, vendor claim; unverifiable). The public case against reuse comes from vendors selling new systems; no operator was found opposing internal reuse on engineering grounds (Inferred; absence of evidence). Another vendor launched a program to reuse customers' SSDs because of the shortage (Press). The used market may split: attested drives near new-equivalent prices, unattested near scrap, with component logs and cryptographic identity deciding the side (Speculated).
- **Customer and contract terms.** Some customer, government or sovereign-cloud contracts may constrain provenance, used parts in dedicated infrastructure, or media leaving a region (Speculated; no example tied to Kuantillion Cloud, Unknown). They would split the fleet into capacity where reuse is free, constrained or forbidden (Inferred).
- **Carbon and disclosure.** Making an SSD emits about 0.16 kg CO2e per GB in one estimate, and one study puts 61% of storage-system carbon in manufacture (Third party). Kuantillion Cloud names its circularity metrics: reuse, lifecycle extension, material recovery, avoided procurement, retained value and preserved embodied carbon. A reuse program has a public scorecard (Inferred).
- **Accounting.** Six-year depreciation was set in 2023 (Reported) and reaffirmed in October 2026 (Press). A drive past its horizon has little book value but full replacement value in a shortage. Zero-book-cost reuse flatters a program unless a transfer price stands in, and held inventory risks write-down under Path B (Inferred). Peers sit at five to six years; none changed in 2026 (Press).
- **Trade and construction.** A 25% US tariff on a narrow class of advanced chips started in January 2026, exempting US data-center use and US repairs (Press; Third party). A broader phase that could cover servers had no rate or date by October. Hardware already in the country is insulated (Inferred). One energy-intelligence firm expects 30–50% of large data-center capacity due in 2026 to slip, so existing machines carry demand longer (Press; Inferred).
- **Secondary market.** Keeping a drive competes with selling it into real markets. North American used data-center equipment was about $16 billion in 2024 (Reported, citing a third party). Data-center asset disposition was about $14 billion in 2026 (Press, analyst). SSDs are its fastest-growing asset class. Refurbishers pay more for SSDs, and enterprises keep devices longer (Press): the hyperscaler playbook, retailed down-market (Inferred).

## 10. The planning organization as part of the problem

The way Kuantillion Cloud organizes the work is part of the problem space, not a backdrop to it. Most of this section is read from public job postings. A posting proves a problem and its staffing, not running machinery. A team hired for a supply service level may be a mature discipline, or one founded because supply just failed badly (Inferred).

### 10.1 An internal market in capacity

Read as a set, Kuantillion Cloud's 2026 capacity-planning postings describe a complete internal market (Reported for each element; the market reading is Inferred).

- **A demand side** forecasts organic and inorganic growth and removes double-counted demand signals.
- **A matching layer** builds optimization models of capacity, and algorithms that make resources more interchangeable, across storage media, compute and network. It hires operations-research and constraint-solver backgrounds by name.
- **A supply side** moves capacity from set-aside reserves into shared pools, plans unusual moves between zones and clusters, and diversifies hardware platforms against supply risk.
- **A reclaim side** divests unneeded capacity continuously. Divestments are coordinated with a pool inventory function to fund new allocations, so reclaimed capacity is the currency that pays for grants.
- **A service level on supply.** Obtainability is a formal objective, with targets and stockout monitoring.

Supply is engineered like reliability: it has a target, monitoring and staff. Harvested drives are a physical instance of divestment, and the plumbing for valuing returned capacity already exists on the virtual side (Inferred). Whether it extends to physical drives is Unknown.

**The fleet provisioning team's charter.** Postings repeated across several 2025–2026 roles say the team provisions compute and storage to resource managers while managing the machines' cost, health and lifecycle. It manages most of Kuantillion Cloud's compute and storage infrastructure. It works on fleet efficiency, resource stranding and the reverse supply chain, and turns new supply-chain capabilities into savings or features. It tracks on-time delivery, shared quota inventory and patterns of resource returns, and builds distribution systems and optimization models. The charter covers both directions of flow, and legacy flash would sit at the return point (Inferred).

### 10.2 The team map, and the seams between them

Postings from 2025–2026 sketch the surrounding groups (Reported for each remit). The right-hand column is constructed: a number a team with that remit would plausibly optimize (Speculated).

| Group | What its postings say it owns | A number it would plausibly optimize |
| --- | --- | --- |
| Fleet provisioning | Allocation, quota inventory, stranding, resource returns, reverse supply chain, optimization models | Fleet efficiency; on-time capacity delivery |
| Capacity planning and forecasting | Forecasts by horizon; supply plans; solver models; obtainability targets; divestment coordination | Forecast accuracy; obtainability; stockout rate |
| Flash platform engineering | Supply for all the fleet's flash; vendor qualification; firmware; health monitors | Qualified, healthy drive models |
| Drive security engineering | Sanitization, key management, attestation | Zero data escapes custody |
| Machine-health engineering | Automated detection, repair, upgrade and decommission workflows | Repair latency; fleet health |
| Data-center operations | Rack moves, upgrades, decommissions | Ticket closure speed |
| Spares planning | Spares and reverse supply-chain strategy; materials to every point of use | Spares fill rate |
| Reverse logistics and value recovery | Harvesting, resale through disposition partners, destruction | Recovered value; diversion rate |
| Lifecycle transitions | Landing new platform generations without disrupting delivery | Transition schedule |

Five seams matter most for legacy flash (Inferred; that they are real boundaries is Speculated, since postings show the groups, not how they meet).

- **Health signals and allocation live with different groups.** Telemetry and qualification sit with platform engineering; stranding, returns and placement with fleet provisioning. Matching needs both.
- **The same hands do forward and reverse work.** The technicians who repair machines also harvest them. Kuantillion Cloud's own published material says technicians measured on ticket speed are nudged toward the shredder, since it closes a ticket soonest, and harvest counts as generic task time (Reported).
- **New and reuse are paid from different budgets on different clocks.** New drives are capital, planned annually and depreciated. Harvest labor, testing and shipping are operating cost, owned by teams measured on this quarter. A program whose benefit lands in next year's capital budget, and whose cost lands in this quarter's operating budget, starts every argument behind. A value-recovery team measured on cash recovered is pulled toward resale, against the reuse-first hierarchy.
- **The two sides speak different dialects.** Storage postings speak of obtainability, stockouts and divestment; fleet postings of stranding, returns and the reverse supply chain (Reported vocabulary). It is one loop seen from software and from metal, and no posting was found using both. A legacy-flash program sits on that line and must speak both.
- **Nobody's number is the drive's value.** Kuantillion Cloud's own report concedes that its earlier measures left the value of reuse off the books. It names the lack of a common classification scheme, and detail lost in roll-ups, as barriers (Reported).

### 10.3 Kuantillion Cloud's planning family

Beyond fleet provisioning, Kuantillion Cloud's 2026 postings staff a planning and storage-capacity family (Reported, paraphrased).

- **Staff engineers** in storage resource engineering and block storage. They allocate across bytes, spindles, SSDs, compute and network, and build optimization models that make resources more interchangeable. They own obtainability and performance targets at low cost, and continuous divestment. Their lifecycle runs from acquiring infrastructure to releasing excess, balancing tenants against enterprise and machine-learning demand.
- **Program managers** in storage resource planning. They own the 18-month bottom-up block-storage forecast and remove double-counted demand. Named risks are divestment logic, supply disruption and demand spikes. They move capacity from reserves into a shared pool, fund quota moves with divestments, and diversify platforms. Prompt engineering and agent-building are minimum qualifications.
- **Program managers** in cloud, data-center and demand planning. They write 18-month supply plans and triage under constraint. They plan against a five-year demand signal and power plan, shifting demand between regions. One builds a single company-wide demand plan with profitability in it.
- **Senior and principal roles.** A distinguished engineer must have the needed resources where and when they are needed, across all fleets. A principal engineer owns lifecycle and forecasting tooling under constraint. A product manager covers storage footprints and disk and SSD trends. A principal program manager delivers machine-learning capacity as a company-level objective.

A vice-president-level capacity role also existed in 2026; its posting is gone (Unknown contents). Financial, logistics and third-party-capacity roles fit the compute rental announced in October (Inferred link).

The family is a senior engineering discipline, not back-office operations, with published base salaries from about $120,000 to $485,000. Every stage of the internal market is hired for by name. And agent-building in *minimum* qualifications dates the record: planning toil is being automated with language-model agents in 2026, by the planners themselves (Inferred).

### 10.4 How the wider field hires for the same work

The same search across the industry read about forty postings from about twenty employers, 2024–2026 (World; employers anonymized).

- **Supply-demand matching is a converged job category.** Clouds, a platform operator, a chip maker's cloud and a GPU cloud describe it in near-identical words. One platform operator plans by optimization model across millions of servers and billions of dollars a year.
- **Scarcity language appears only at AI-exposed employers.** The AI labs, GPU clouds and biggest clouds speak of scarce capacity; traditional infrastructure postings speak of constraints (Inferred).
- **Allocation and value recovery are hired into different organizations, everywhere.** Reuse is hired separately: a reverse-logistics subsidiary at one cloud, a recycle-planning function at one internet platform, circular centers at another cloud. No job description joins maximizing utilization now with preserving second-life value (Inferred). The job architecture may itself be the incentive mechanism (Speculated).
- **The maturity signal is ad hoc to repeatable.** The AI labs want planning made rigorous and repeatable, rebuilding in a hurry what hyperscalers built over fifteen years, at $235,000–397,000 base (Inferred reading of published bands). One lab tracks the engineering work that affects capacity fungibility as a deliverable.
- **Spares economics are hired for even at young companies.** A three-year-old GPU cloud wants fleet managers who set spares from failure data, run warranty recovery that returns real money, and defend the working capital spares tie up.
- **The edges show up too.** A games platform reports stranded capacity by name. A colocation operator wants records that match the floor. Others put lifecycle in the cost model, or qualify components for their own fleet.

**What the language reveals, and what can be dated.** Shortage and excess are named together, as in every mature planning function. Obtainability makes supply measurable, the precondition for pricing it. Divestment that funds grants makes returned capacity a currency, so far only on the virtual side. No posting pairs second-life words, like graded or requalified, with allocation words (Inferred). Fleet provisioning postings named stranding and returns in 2025–2026; the storage family added obtainability, divestment funding and agents in June–August 2026. Industry matching roles date to 2024–2025, scarcity language to 2026. When these seats split, and from what, can't be reconstructed (Unknown). The cheapest maturity signal is the first posting that speaks both dialects.

### 10.5 What the organization adds to the problem

The decisions in section 11 aren't constructed problems. They are, nearly one for one, what the industry pays six-figure salaries to have solved (Inferred). Forecasting and de-duplication feed P1 and P6. Platform lifecycle is P2; matching and fungibility, P3; spares and their working capital, P4. Supply actions and upgrades are P5, allocating scarce capacity P6, reverse logistics P7. Moving from ad hoc to repeatable is P8.

## 11. Problem decomposition

The whole problem: **get the most from every legacy drive Kuantillion Cloud owns, across all four sinks, at a reliability users accept, while new flash is scarce and dear.**

It breaks into eight decisions and two sub-decisions carried inside them: P2a's wear policy and P6's commitment question. P1 is the foundation; P6 is where they meet. None is published as solved by Kuantillion Cloud (Unknown). The hiring record shows the industry paying to have nearly this exact list solved (section 10), and each decision's shape has a literature that studied it first (A.3).

### P1. One record per drive

- **Decision (owner).** What must be known about each drive, who owns that truth, and how fresh it must be. Unattributed: telemetry and qualification sit with flash platform engineering, inventory and returns with fleet provisioning, custody with drive security (Inferred).
- **Inputs.** Model, capacity, interface and form factor; firmware version, and whether a safe one is still obtainable; health readings and their history (wear, spare blocks, media errors, latency, slowness, retention margin, capacitor health); power-on hours; thermal history where available; host platform and location; state (in service, harvested, in test, spare, out of custody); provenance; sanitization record.
- **Horizon.** Continuous.
- **Why hard.** The data plausibly lives in systems owned by different teams: machine inventory, telemetry, repair records, warehouse and finance (Inferred). The in-service record is the easy part. A drive in a cage, in transit or past sanitization has left the systems that knew it, and its record must survive the passage. Older drives lack newer telemetry, so part of the fleet is blind by cohort. Without this record, every other decision is a guess (Inferred).
- **Beyond the fleet.** The record is the anti-lemons device (Inferred; A.3). Outside buyers can't verify a used drive's history, so the market prices at average quality. A fleet that can prove a history values its healthy drives above the market's price, so internal reuse beats resale for exactly those drives. For what is sold, attested history narrows the discount. In maintenance terms, P1 is the data layer of condition-based maintenance for flash.
- **Links.** Feeds every other problem.

### P2. When does the host go

- **Decision (owner).** For each platform generation and machine cohort: when to keep the host, when to redeploy it intact to a lower-demand class, and when to take it apart. These choices set the harvest schedule; what happens to harvested drives is P6. Fleet provisioning and lifecycle transitions, with finance on depreciation (Inferred).
- **Inputs.** Cost to carry the host (power, space, labor, repairs); the value of its capacity to current demand; the value its drives would have across P6's sinks; depreciation; carbon.
- **Horizon.** Quarters to years.
- **Why hard.** Keeping a platform alive raises its need for spares while cutting the harvest that supplies them (Inferred). Value depends on a shortage of disputed length (Third party). The answer differs by cohort, not generation, as the battery industry found (A.2). Studied shape (A.3): optimal life in the current use says nothing about value in another use. Optimal keep, buy and scrap policies are thresholds. And an alternate source beats stockpiling against long disruptions, casting the harvest as mitigation.
- **Links.** Sets the supply P3, P4, P5 and P7 draw on. Its intact branch competes with P6's sinks for every retiring host.
- **P2a. The wear sub-decision.** One decision sits upstream of the whole set, and no team owns it (Inferred): how hard to run drives in their first life, given their second. Through its patented placement and admission software, Kuantillion Cloud sets every drive's wear rate. Where wear binds, today's placement shapes the harvest arriving in two or three years. At typical use under 2% of rated endurance, that means mainly write-heavy cohorts and low-endurance QLC, a share growing as QLC spreads. To that extent harvest is a partly *chosen* yield. The loop from scheduler to cage runs years, and the published per-byte wear price (P3) is the instrument that would carry it.

### P3. Match legacy flash to workloads

- **Decision (owner).** Which jobs and storage tiers should run on legacy flash, both harvested drives and installed but stranded flash, and how that capacity is offered. Options include machine attributes a scheduler can request, a pooled flash tier, or a lower-guarantee capacity class (Third party patterns; a sample, not a design). The schedulers and storage systems under fleet policy, with the solver organization for pooled tiers (Inferred).
- **Inputs.** Drive capability (capacity, IOPS, remaining endurance, retention margin, latency history); job needs (write rate, I/O density, latency targets, tolerance for device loss); failure-domain spread; quota and pricing.
- **Horizon.** Hours (placement) to quarters (quota and product).
- **Why hard.** Published fleets share one pattern (Third party). Attributes sit in an index, with hard constraints and soft preferences. Quota is in abstract units, with a periodic solver for pools and a fast scorer for placement. Legacy flash adds two twists. Its value depends on whether it is trapped in one server or pooled, and pooling is the only published route to the stranded stock. And wear is priced per byte by model, so the right match changes as a drive ages (Inferred). Kuantillion Cloud hires solver and fungibility engineers, but for virtual capacity; whether that reaches devices is Unknown. The solver work speaks obtainability while the drives speak stranding and returns.
- **The grading tax.** Fungibility work is easiest with few shapes, though the same organization diversifies platforms against supply risk. Grading multiplies shapes: every tier is a new SKU, qualification combination, placement constraint and forecast category. This is the strongest rational account of Kuantillion Cloud's silence (Speculated). Scrap or resale may beat fine-grained reuse even where per-drive arithmetic favors reuse, because the complexity lands on the fleet's most leveraged machinery. A credible answer must out-argue that account.
- **Links.** Creates demand for P6; the only route to the stranded stock; priced by P2a's wear.

### P4. Size and source legacy spares

- **Decision (owner).** How many spares of each compatible type to hold, where, and from what source: last-time buys while a model is made, harvest afterward, new purchase where possible, or fail-in-place instead. Spares planning with data-center operations (Inferred).
- **Inputs.** Failure rates by model, age and firmware; installed base by platform and site; the decommission schedule; discontinuation notices and last-time-buy windows; repair time; technician capacity; lead time and price for new compatible drives.
- **Horizon.** Weeks (positioning) to years (pool size).
- **Why hard.** Classic spares models assume supply from purchase or repair (Third party). Here it comes from decommissioning once bought stock runs out, against two moving schedules (Inferred). Last-time buys come years before the need is known. New small drives are scarce (Third party). No hyperscaler publishes how it sizes spares (Unknown). Ticket-based sizing inherits the misdiagnosis rate (Inferred).
- **Studied shape** (A.3). Dual sourcing: cheap, slow, uncertain harvest beside dear, nominally reliable new purchase, whose 2026 lead times can flip the roles. Random yield, so P7's yield *variance* sets the buffer. Queueing, so each day cut from pipeline turnaround shrinks the pool. And multi-echelon stocking, so whether to hold machines or drives, at site or depot, needs P1's data.
- **Links.** Draws on P2's schedule; coupled to P7's turnaround; competes with P5 for drives and hands.

### P5. Use legacy flash in upgrades and builds

- **Decision (owner).** Which running machines get added or swapped flash to extend life or change shape, and whether new builds include reused drives. Fleet shaping and hardware engineering; builds with manufacturing (Inferred).
- **Inputs.** Machines whose shape no longer fits demand; compatible inventory; upgrade labor; qualification of the combination, and qualification capacity itself, since test slots are finite (Inferred); expected remaining life.
- **Horizon.** Quarters.
- **Why hard.** Fit limits most drives to their own or adjacent generations, and every new combination needs qualification (Third party; Inferred). Builds inherit manufacturing's qualification regime. The payoff is capacity without purchase, but P5 competes with P4 for the same drives and technicians. That is the parallel-replacement trap: per-asset optima overdraw a shared budget, so P2, P4 and P5 solved separately will overbook technicians and harvest (Inferred; A.3).
- **Links.** Competes with P4; gated by qualification; closes as the build mix completes the move to new form factors (section 8).

### P6. Allocate the harvest across sinks

- **Decision (owner).** How to split a finite flow of usable legacy drives among workloads, spares, upgrades and exit, and how to value a drive in doing so. Also whether that supply can be *committed* against delivery dates, or only used opportunistically. Unowned in public: no posting names an allocator of physical harvest. The virtual pool inventory function is the nearest precedent (Inferred).
- **Inputs.** Outputs of P1–P5; replacement cost of new flash and its contract reality; resale prices; pipeline cost and yield; reliability targets; a risk budget for correlated-failure and custody tails; transfer prices or chargeback rules, which decide what each sink actually pays (Inferred).
- **Horizon.** Monthly to quarterly, revisited as prices move.
- **Why hard.** Each sink has a different owner, metric and horizon. A drive is worth most where its replacement is hardest to buy, and in 2026 that is often the spares cage (Inferred). Without a shared price, each team optimizes its own number. Holding has option value while the path is uncertain, but the option decays as drives age and prices turn. The stakes run from tens of millions to a few billion dollars a year gross (section 7). They hang on an unpublished SSD share, an uncomputed materiality ratio and an undeclared anchor.
- **The commitment sub-decision.** How much harvest to book, and at what confidence. Its failure pair: supply booked that never arrives, because a decommission slipped or yield disappointed; or the same drives promised informally to two sinks (Inferred).
- **Studied shape** (A.3). An internal capital market with drives for currency. A caged drive earns a convenience yield that rises as fleet spares cover thins and vanishes in a glut, so its holding value is a curve. Value comes from authority over the whole harvest rather than per-sink hoarding, given comparable returns: the shared price again. Chip-industry planning shows such authority can be coordinated, not centralized. Kuantillion Cloud's virtual side already lets divestments fund allocations (Reported); its extension to drives is Unknown.
- **Links.** Clears P3, P4, P5 and exit; only as good as P1's facts and P7's yield; carried out only through P8.

### P7. Run the reverse pipeline at the needed rate

- **Decision (owner).** How much harvesting, testing, sanitization, firmware updating and shipping capacity to run, and where, including inventory position and the re-powering cadence of stored drives. Reverse logistics and data-center operations, with drive security for sanitization (Inferred).
- **Inputs.** Decommission volume by site; sanitization and test yield; technician hours; custody and shipping rules; inventory aging.
- **Horizon.** Weeks to quarters.
- **Why hard.** Harvest counts as generic task time, and ticket-speed metrics push technicians toward scrapping (Reported). The pipeline competes with repairs for hands (Inferred). Its yield isn't public (Unknown). Its cost and its capital benefit land in different budgets (Inferred).
- **Studied shape** (A.3). Reverse-logistics network design. Two real choices: process returns eagerly or on demand, and how strict to set the test gate. More intake lets the gate be stricter. The threshold stays apart from volume only when intake costs rise in a straight line; under scarcity, it moves with volume. Every day of turnaround removed converts one-for-one into inventory no longer held.
- **Links.** Rate-limits P4–P6; its yield is P4's random variable; its turnaround converts into spares inventory.

### P8. Make reuse something teams choose

- **Decision (owner).** What guarantees, prices, metrics and decision rights make resource managers, operations and finance prefer reuse when it is right. Leadership and finance, across every group in section 10's map (Inferred).
- **Inputs.** Reliability evidence for legacy capacity; quota, chargeback and transfer-pricing rules; the capital and operating budget boundary; operations metrics; the public circularity scorecard; the program's own analysis, tooling and qualification capacity.
- **Horizon.** Quarters to years.
- **Why hard.** Users care most that capacity is there when needed; if legacy capacity feels second class, they hoard new (Inferred). The engineer who accepts reused capacity owns the outage; the one who insists on new is never blamed for the spend. Kuantillion Cloud notes procurement-centric metrics miss avoided procurement, retained value and embodied carbon. Tooling proposes matches; adoption decides whether they happen. Planner time is itself scarce, as agent-building in postings shows (Inferred).
- **The structural finding.** The conflict isn't local. Across about twenty employers, allocation and value recovery sit in different organizations (World; Speculated reading). Where handled in public, it is turned into finance, as with the GPU cloud's working-capital rule, or reframed as profit rather than compliance (A.3). Whether other industries' trust instruments transfer is left open (A.2).
- **Links.** Decides whether P3's and P6's answers are carried out.

**Dependency spine.** P1 feeds every problem. P2 sets the harvest schedule P3, P4, P5 and P7 draw on, and P2a sets, years ahead, the condition of what P2 releases. P3 and P5 create demand, P4 the most predictable demand, and P7 the rate at which any is met. P6 clears the four, only as well as P1's facts and P7's yield allow. P2 and P6 form a loop: retiring a host depends on what its drives are worth, and what the sinks are offered depends on which hosts retire. P8 decides whether P6's answers are carried out. Two couplings matter most: P2 with P4, and P4 with P7.

![P1, one record per drive, feeds every other decision. P2, when the host goes, feeds P3 workloads, P4 spares, P5 upgrades and builds, and P7 the reverse pipeline. P2a, the wear policy, shapes P2 years later. P4 spares and P7 the pipeline depend on each other. P3, P4, P5 and P7 all feed P6, allocating the harvest, which feeds P8, adoption. Two slower loops run backwards: drive values from P6 flow back to P2, and adoption in P8 flows back to P3.](figures/fleet-flash-dependencies.svg)

*Dependency map of the eight decisions and the wear sub-decision. Solid arrows feed. Dashed arrows are slower feedback or a slow link; two of them close loops (P6 to P2, P8 to P3).*

## 12. Cross-domain causal chains

Eighteen chains connect markets, the organization and the physics of flash to concrete consequences for legacy drives. The tiers in brackets mark the evidence along each chain; a chain is only as strong as its weakest link.

**Supply, price and the margin**

1. AI data-center demand → flash makers allocate to their largest buyers → enterprise SSD prices about 3.4–4.2× across 2026 → a working legacy drive's replacement value spans about $190–640 per TB → keep-or-shred becomes a real question for every retiring drive (Press → Third party → Arithmetic → Inferred).
2. Allocation favors high-capacity parts → small and older-interface SKUs become scarce new → once last-time-buy stock runs out, spares for old platforms come from harvest → the spares sink has the harvest's most predictable claim (Third party → Inferred).
3. Makers commit output years ahead, and Kuantillion Cloud's commitments rise about 5.4× in six months (composition undisclosed) → long-term contracts cover planned supply far better than the unplanned margin → repair spikes and late builds fall on hardware the fleet already owns, alongside third-party compute and demand shaping (Press → Inferred).
4. Hard disks sell out → cold data moves to QLC flash → flash demand rises further → the substitution pressure lasts as long as disk allocation does (Third party → Inferred).
5. Cloud buying crowds out other flash demand → PC makers halve standard SSD configurations and enterprises stretch refresh → the disposition trade reports higher residual values for used flash → resale strengthens just as internal reuse gains value, so two sinks bid against each other (Press → Inferred).

**Lifecycle and the coupling of supply and demand**

6. Longer book lives and condition-based retirement → machines stay in service longer → harvest arrives older → drives on unpatched firmware are likelier to have passed the power-on ages at which known faults strike → the firmware-baseline gate binds harder (Reported/Press → Inferred).
7. Data-center construction delays (30–50% of 2026 capacity, by one estimate) → old halls carry demand longer → decommissions slip → harvest booked into plans fails to arrive: phantom supply (Press → Inferred).
8. Machines retire by health rather than age → retirements become irregular and cohort-driven → harvest can be forecast only from telemetry, not a calendar → spares and pipeline plans run against stochastic supply (Reported → Inferred).
9. Patented placement and admission software can set drives' wear rates → if deployed fleet-wide, today's placement shapes the endurance left in the harvest years later → with typical use under 2% of rated endurance, this matters mainly for write-heavy and low-endurance QLC cohorts → there, harvest yield is partly chosen, not random (Reported → Speculated).

**Diagnosis, health and trust**

10. At one peer, about a third of SSD failure tickets weren't the drive (human error, cables), and cheaper steps resolved them before any swap → a site that skips that triage pulls drives that didn't need pulling → spare consumption runs up to about 1.5× true failures, and healthy flash leaves service → triage quality becomes a supply source (Third party → Inferred → Arithmetic).
11. Older drives predate newer telemetry fields → whole cohorts are partly blind → grading can't see what it must price → the observability gate fails cohorts, not drives (Reported → Inferred).
12. Health counters are forgeable outside custody → a million-drive counter-reset fraud in hard drives in 2025, whose later wave forged even the maker's protected log → outside used supply becomes untrustworthy → unbroken internal custody becomes the asset the grey market can't copy → provably healthy drives are worth more inside than outside (Press → Inferred).
13. Same-cohort drives are redeployed together → failures cluster by node, rack and redundancy group, and firmware faults strike whole cohorts → one incident in a redeployed cohort → trust collapses for all legacy capacity: P8's second-class problem, made by one event (Third party → Speculated).

**Organization and incentives**

14. Allocation and value recovery are hired into different organizations → nobody's metric is the drive's value → each sink's owner optimizes its own number → without a shared price, the loudest sink wins the harvest (World → Speculated).
15. New flash is capital; harvest labor is operating cost → the benefit lands in next year's capital budget and the cost in this quarter's operating budget → reuse programs start every argument behind → recovered-cash metrics pull value recovery toward resale, against the reuse-first hierarchy (Inferred).
16. Fungibility work is easiest with few shapes → grading multiplies shapes → the complexity bill lands on the solvers and quota systems → scrap or resale can be the rational choice even when per-drive arithmetic favors reuse (Inferred → Speculated).

**Customers and markets**

17. Scarcity reaches customers: stockout errors name local SSD capacity, and the cloud advises reserving scarce machine families and planning fallbacks → customer demand is reshaped by time, price and shape → the same reshaping, pointed inward, is the legacy-flash matching problem (Press → Inferred).
18. Kuantillion Cloud's resale falls from more than 6.7 million components to about 2.6 million in a year, cause unstated → if peers retain more too, used supply thins while new prices are high → used prices rise under Path A and fall harder under Path B → the operators' own retention moves the price their retention is judged against (Reported/Press → Inferred → Speculated).

## 13. Stress scenarios for 2027

Seven stress scenarios show what breaks first and what an answer must already cover (Speculated throughout). In most, the first thing to break isn't capacity: it is a price, a plan or trust.

### S1. The shortage ends early

- **Setup.** New fab output and weak consumer demand turn contract prices in the second quarter of 2027: Path B, earlier than its own advocates expect.
- **Propagation.** New high-capacity drives get cheaper first. The workload sink loses value fastest. Drives held in cages at 2026 replacement value are suddenly overpriced.
- **Breaks first.** The holding position: inventory kept for an option that has just decayed, and internal prices set at last year's peak.
- **The answer must already cover.** A drive value that tracks the market; a defined way to release held inventory as prices turn; a spares floor that doesn't depend on the shortage.
- **Early indicators.** Contract-price prints flattening; used high-capacity drive prices falling; makers' inventory days rising.

### S2. A redeployed cohort fails together

- **Setup.** A firmware fault keyed to power-on age hits a drive model redeployed in volume, concentrated in a few rack groups.
- **Propagation.** Correlated failures across failure domains believed independent; a spike in repair tickets; thinning durability margins.
- **Breaks first.** Trust, not capacity. Every user of legacy capacity asks for new hardware again.
- **The answer must already cover.** Firmware baselines enforced as a gate; cohort concentration per failure domain known and bounded; a risk budget per sink; an incident cost bounded before the incident.
- **Early indicators.** Same-cohort drives clustering in racks; failure rates by power-on hours bending upward.

### S3. A data-bearing drive surfaces outside custody

- **Setup.** A drive harvested for internal reuse turns up, with readable data, in an outside channel.
- **Propagation.** A security incident, customer notifications, regulatory questions.
- **Breaks first.** The program's license to operate, within days.
- **The answer must already cover.** A custody record that reconciles with the sanitization log at every off-host state, with reconciliation failures treated as the leading indicator.
- **Early indicators.** Any gap between drive records and sanitization logs; drives in transit with no recorded owner.

### S4. Decommissions slip while spares demand rises

- **Setup.** Construction delays keep old platforms in service a year longer than planned.
- **Propagation.** Harvest booked into plans doesn't arrive, while the aging platforms' own failure rates rise.
- **Breaks first.** Spares for the oldest platforms: phantom supply meets real demand.
- **The answer must already cover.** Harvest counted in plans only as far as decommissions are dated; fallbacks when harvest slips; a decommission schedule the spares planners can see.
- **Early indicators.** Commit-to-deliver gaps on reused capacity; repair times rising on old platforms.

### S5. The commitments prove firm and stockouts persist

- **Setup.** Contracted flash arrives on schedule and is all spoken for; zone stockouts continue through 2027.
- **Propagation.** Reuse avoids no purchase. Its value becomes marginal capacity, worth more than replacement cost while customers are turned away.
- **Breaks first.** The money model. A program priced on avoided procurement looks marginal, while the capacity it adds is the scarcest thing in the fleet.
- **The answer must already cover.** The value anchor declared; both anchors computed; an allocation able to route harvest toward revenue-bearing capacity.
- **Early indicators.** Stockout frequency by zone; reservation pressure; third-party compute spend.

### S6. A rival announces flash reuse at scale

- **Setup.** Another large cloud publicly launches a graded legacy-flash program.
- **Propagation.** Vendors reprice small SKUs and tighten warranty terms on reused parts. Used-drive prices jump as large sellers withdraw.
- **Breaks first.** The resale price every retention decision is judged against.
- **The answer must already cover.** A model of the program's own market impact; vendor terms read before they change.
- **Early indicators.** Vendor warranty language; used-drive prices by model; peers' circularity reports.

### S7. Low-endurance flash meets write-heavy work

- **Setup.** Scarcity pushes high-capacity QLC drives, rated near 0.6 drive writes per day, into tiers that write far more than the workloads they were bought for.
- **Propagation.** Nobody pricing the drives' second life sees the wear those tiers spend. The cohort reaches decommissioning with little endurance left.
- **Breaks first.** The future harvest: the drives that arrive are the ones the spares and workload sinks can least use.
- **The answer must already cover.** A view of endurance used by cohort while drives are still in first life, and a way for second-life value to reach first-life placement.
- **Early indicators.** Endurance used per year by cohort and tier; QLC share of write-heavy tiers.

## 14. Measures of success

A good answer treats the four sinks as one system on one record, prices a drive against a declared anchor, and respects the gates. It makes reused capacity something users can plan around, fixes incentives where the work happens, and checks every judgment against outcomes.

### 14.1 Criteria

1. **Treats all four sinks together.** They draw on the same drives and technicians. Optimizing only job placement starves the spares cage, or the reverse.
2. **Rests on drive facts that are current, consistent and owned** (P1). Every decision in P2–P8 can cite the same record, and the answer says who keeps it true and how fresh it must be.
3. **Prices a legacy drive against a declared anchor.** It states whether the value claimed is avoided procurement or marginal capacity; the two differ in size, beneficiary and survival under Path B. On the procurement anchor, it prices at what replacement would cost now: contract reality, net of pipeline cost, yield and the resale reuse gives up, not book value. It is revisited as the market moves and holds up under both supply paths.
4. **Matches on capability, not age.** It reads remaining endurance, retention margin, latency consistency, firmware and fit. It recognizes that some old drives out-endure new ones per terabyte.
5. **Respects the gates.** Fit, protocol, qualification, firmware and provenance, observability, condition, change windows, systems of record, systems complexity, jurisdiction and sanitization are hard constraints, each with an owner.
6. **Makes reliability visible to the users of capacity.** It offers guarantees or a capacity class they can plan around, so reuse doesn't feel second class.
7. **Fixes incentives where the work happens.** The metrics technicians, operations and resource managers answer to don't penalize reuse where it is right. The capital and operating budget boundary is faced, not ignored. It speaks both dialects, the storage organization's supply language and the fleet organization's hardware language, because the program sits on that seam.
8. **Is measured on a few honest numbers with declared denominators.** For example:
   - new flash purchases avoided, against a stated baseline
   - net value over exit per harvested drive
   - spares fill rate and time to repair on older platforms
   - stranded flash
   - harvest-to-redeploy time and yield
   - the share of pulled drives that test healthy
   - endurance used at harvest, by cohort and workload history
   - embodied carbon preserved, under the stated additionality assumption
9. **Holds decisions to realized outcomes.** Whatever makes the match is checked against failures, latency and fill rates, and trusted more only with evidence. The answer states how much evidence each sink needs, and how much of any cohort may sit in one failure domain. Caches and replicated tiers differ from durable stores.
10. **Separates what is known from what is assumed,** and plans the experiments that close the gaps. The assumptions already visible are listed in section 15.
11. **Forecasts harvest supply with error bands,** by cohort and site, and states the confidence at which any commitment of harvest is booked. This is the bar for P6's commitment sub-decision.
12. **Runs on a cadence matched to its clocks:** decommission schedules, last-time-buy windows, quarterly price prints and the signposts in section 8.

### 14.2 Failure modes and indicators

| Failure mode | What it looks like | Indicator to watch |
| --- | --- | --- |
| Placement-only program | Good job matching; spares for old platforms run out | Rising repair times on older platforms; new-drive purchases for obsolete models |
| Keep everything | Old platforms kept alive for their flash, at high power and repair cost | Cost per useful terabyte rising on old cohorts; technician hours shifting to old platforms |
| Holding past the option's decay | Some holding is rational under uncertainty; the failure is holding after the option has decayed | Inventory aging past its re-test cadence; test results gone stale; used prices falling while cages stay full |
| Phantom supply | Plans book harvest that never arrives, or promise the same drives to two sinks | Commit-to-deliver gaps on reused capacity; the same inventory in two plans |
| Second-class capacity | Teams refuse legacy capacity and hoard new | Low uptake of offered legacy capacity; quota requests specifying new hardware |
| Misdiagnosis drain | Healthy drives pulled on bad tickets, burning spares and shrinking the pool | Share of pulled drives that later test healthy; reboot or cable fixes recurring as drive pulls |
| Shape sprawl | Grading multiplies SKUs, qualification combinations and planning categories until solvers and quota systems choke | Qualification backlog growing with each tier; solver categories proliferating; planners collapsing grades by hand |
| Correlated concentration | Same-model, same-age drives packed into one failure domain | Same-cohort drives clustering in racks; correlated incidents rising with redeployment volume |
| Firmware time bombs | A cohort fails together at a fixed age | Failures clustered by model and power-on hours; unpatched firmware in redeployed drives |
| Blind spots | Older drives lack telemetry; decisions trust what can't be seen | Share of drives with missing health fields; gaps between predicted and actual failures |
| Sanitization bottleneck | Drives destroyed because they couldn't be verified, or queued for months | Falling sanitization yield; a growing queue |
| Custody incident | A data-bearing drive surfaces outside the sanitization record | Any gap between drive record and sanitization log; reconciliation failures lead the incident |
| Incentive drift | Scrapping chosen over reuse because it closes tickets faster | Reuse rate falling at sites under ticket pressure |
| Wear spent blindly | Placement burns endurance a cohort's second life needed, because first-life policy never saw the second-life price | Endurance used at harvest, by cohort and workload history; write-heavy and QLC cohorts arriving with little life left |
| Fighting the last shortage | A program sized for 2026 prices just as supply eases | Contract prices flattening; used-drive prices falling (the battery industry's version: second-life economics dying as new prices fall) |

### 14.3 Where each decision is tested

Every decision meets the bar through at least one criterion, failure mode, scenario and open question (Inferred mapping).

| Decision | Criteria | Failure modes | Scenarios | Open questions |
| --- | --- | --- | --- | --- |
| P1 One record per drive | 2, 5, 10 | Blind spots; custody incident | S3 | 3, 6 |
| P2 When does the host go (solved jointly with P6) | 1, 3, 12 | Keep everything; fighting the last shortage | S1, S4 | 5, 7 |
| P2a The wear sub-decision | 8, 10 | Wear spent blindly | S7 | 16 |
| P3 Match to workloads | 4, 6 | Placement-only program; second-class capacity; shape sprawl | S5 | 8, 10, 14 |
| P4 Spares | 1, 8, 11 | Misdiagnosis drain; phantom supply | S4 | 11, 13 |
| P5 Upgrades and builds | 1, 5 | Correlated concentration; firmware time bombs | S2 | 10, 15 |
| P6 Allocate the harvest | 3, 9, 11 | Holding past the option's decay; phantom supply | S1, S5, S6 | 1, 2, 9 |
| P7 Reverse pipeline | 5, 8 | Sanitization bottleneck; incentive drift | S3, S4 | 6, 12 |
| P8 Make reuse chosen | 6, 7, 9 | Second-class capacity; incentive drift | S2 | 4, 9 |

## 15. Confidence ledger

The structure of the problem rests on Reported facts about reuse at scale and a well-documented 2026 market. Its hardest parts remain Inferred or Unknown: the SSD share, second-life reliability, pipeline yield and cost, and how the commitments behave. These are the claims the case stands on.

| # | Claim | Tier |
| --- | --- | --- |
| 1 | Kuantillion Cloud reuses harvested components at scale: 44% of components in builds, maintenance and upgrades in 2024; internal reuse comes first | Reported |
| 2 | Over 3 million drives were wiped and reused or resold in 2024; the report calls them hard drives | Reported |
| 3 | Any published reuse figure covers SSDs | Unknown |
| 4 | Resale fell from more than 6.7 million components (2024) to about 2.6 million (2025), while internal-reuse harvest stayed above 7.5 million | Reported (2024); Press (2025) |
| 5 | More harvested parts stay in-house because of the shortage | Inferred |
| 6 | The fleet provisioning team works on stranding, the reverse supply chain and resource returns | Reported (postings); ownership Inferred |
| 7 | Obtainability is a formal supply target; solver and fungibility work is hired for; divestments fund new allocations | Reported (postings, 2026) |
| 8 | The industry hires for these problems in near-identical terms, and splits allocation from value recovery | World; Inferred convergence; Speculated mechanism |
| 9 | Purchase commitments rose about 5.4× in six months, to about $811B | Press; not re-verified against the filing |
| 10 | Fleet components are capitalized, so no financial statement shows the drive pool | Reported (note text); Inferred (consequence) |
| 11 | Capacity errors name local SSD capacity; 2026 stockouts reached general-purpose machines; customers were advised to reserve | Press; error class Reported |
| 12 | Kuantillion Cloud's patents cover wear control points; none found on grading, refurbishment or redeployment | Reported (two patents); Inferred (absence; a sample) |
| 13 | Flash wear is priced into Kuantillion Cloud's storage decisions | Reported (2022 cache admission; 2025 placement) |
| 14 | Worn drives can be given a read-mostly end of life | Third party (a server maker's patent) |
| 15 | Legacy flash demand includes repairs and upgrades, not only workloads | Inferred |
| 16 | Enterprise SSD prices rose roughly 3.4–4.2× across 2026; a listing implies about $640/TB in October | Third party; Press; Arithmetic |
| 17 | 2026 memory capacity was all but sold out by January; module makers got 30–50% of requests | Third party; Press |
| 18 | The SSD harvest flow is plausibly worth $0.06–3.8B a year gross | Arithmetic on Illustrative shares; net Unknown |
| 19 | The gross materiality ratio runs about 0.5–30%, central row 3–9%, and near zero if the count is all hard drives | Arithmetic on Illustrative inputs |
| 20 | Even the largest cell is under 0.5% of the commitments | Arithmetic on Press and Illustrative inputs |
| 21 | The value anchor: avoided procurement or marginal capacity | Unknown; it can invert the money section |
| 22 | Flash stays tight through 2027–28 | Third party, disputed |
| 23 | Small and older-interface SSDs are scarce new; discontinued SKUs don't return when supply eases | Third party; Speculated |
| 24 | The spares sink is the program's value floor | Inferred, qualified (erodes with platform retirement and fail-in-place) |
| 25 | At one peer, about a third of SSD-related tickets weren't the SSD, and triage resolved them before any swap; a site with no triage would use spares at up to about 1.5× true failures | Third party; Arithmetic; Kuantillion Cloud's healthy-pull share Unknown |
| 26 | Drives rated as failing are deliberately kept in service under graded risk | Third party |
| 27 | Hard-drive health counters were reset, and later a maker's protected log forged, with used drives sold as new at up to million-drive scale | Press |
| 28 | Peers meet 85% (obsolete) and 13% (all) of spares from reuse; a European cloud redeploys about 30% internally; another claims 99.7% recycled or reused | Third party; the 99.7% unverified |
| 29 | One cloud's filing names both obsolescence risk and failure risk as live | Third party |
| 30 | Reused SSDs fail no more often than new ones in a second life | Unknown; one cloud assumes parity from first-life data |
| 31 | Unmanaged legacy drives can dominate failures (22% of drives, 77% of failures, in one operator's quarter) | Third party; confounded with model, firmware and warranty |
| 32 | About half of one cloud's server SSD capacity is stranded | Third party; no figure for Kuantillion Cloud |
| 33 | Sanitization yield on legacy SSDs; qualification cost and time | Unknown |
| 34 | Kuantillion Cloud reuses older memory from retired servers in new AI servers | Press (no transcript) |
| 35 | Whether it does the same for flash today | Unknown |
| 36 | Other industries' second-life markets (aviation, batteries, used cars) teach transferable lessons | Third party; Inferred mapping |
| 37 | The problem decomposes into studied literatures | Third party (results); Inferred (mappings) |
| 38 | Intact host redeployment is a live alternative that bypasses most gates | Inferred; volume Unknown |
| 39 | First-life wear policy chooses second-life harvest quality | Inferred (P2a) |
| 40 | The grading tax explains scrap over reuse as a rational choice | Speculated; the strongest counter-hypothesis |
| 41 | Ticket-metric incentives predict scrapping wherever harvest value is unmeasured | Third party (result); Inferred (mapping) |
| 42 | Which way U.2/U.3 tri-mode compatibility runs | Unknown; check per platform |
| 43 | The share of pulled SSDs that test healthy | Unknown; analogies only: 43% no fault found in one vendor's returned hard disks; about half of one cloud's swapped SSDs never returned to production (Third party) |
| 44 | First-life field studies: early failures common; no end-of-life rise in two large studies; firmware, model and error history dominate age | Third party |
| 45 | Used enterprise SSDs fetched about $80–160 per TB gross in the year to August 2026 | Press (dealer appraisals and listings); net to a seller Unknown |
| 46 | One operator's flash deployment can't approach 180 EB a year: the whole industry shipped about 156 EB of enterprise SSD in Q1–Q3 2024 | Third party; Inferred |

**Assumptions any answer must test.** Replacement cost as the value anchor. Additionality of reuse under the commitments. A materiality ratio large enough to matter. Positive net value after pipeline cost, yield and forgone resale. Stranded capacity recoverable at reasonable cost. The host-cost logic over the holding period. Spares demand net of fail-in-place and misdiagnosis. And internal prices able to carry these values at all.

**Retired.** Two analyst reports once counted as flash evidence concern optics and are excluded. An earlier reading of the peer's 34.4% as healthy drives pulled is retired: it counts tickets that cheaper steps resolved before any swap. An earlier claim that no posting used the word obtainability is retired: 2026 postings use it as a formal objective.

**What the record can't show.** No hyperscaler publishes an SSD-specific reuse rate, requalification yield, sanitization failure rate, second-life failure rate or spares-sizing method. No statement by Kuantillion Cloud on flash reuse during the shortage was found, nor any talk on drive harvesting from 2022 to 2026. Its commitments aren't broken down by category or duration. Its public voice on reuse is sustainability and supply chain, never storage engineering. Five blind spots qualify everything (Inferred).

- **Aspiration reads as capability.** Postings and circularity reports are the richest veins and the genres most prone to it, so every mechanism read from them is a hypothesis.
- **Silence is ambiguous three ways:** trade secret, evaluated and declined, or absence.
- **Public figures are fleet-wide means.** The decisions run on distributions and tails (yield, turnaround, misdiagnosis) only internal data carries.
- **The market moves quarterly.** One announcement could end the central Unknown overnight; the signposts are a living instrument.
- **An outside view costs specificity where it decides.** Platform-level facts behind P3's matching and P5's fit are out of reach, so expect the shape to deform on contact with real systems.

**Common misreadings** (claims an outside analyst might make, and why they don't hold here)

| Claim | Why it doesn't hold |
| --- | --- |
| Used SSDs are worn out | Most data-center SSDs use under 2% of rated endurance; the binding limits are fit, latency, capacitor age and firmware |
| The 2026 inventory jump is fleet parts being stockpiled | The filing says inventory is systems for sale and devices; fleet parts are capitalized |
| The published harvest figures include SSDs | The reports say hard drives and never mention flash |
| This is a scheduling problem | Workloads are one sink of four, and spares may claim the harvest first |
| A reused drive is worth its replacement cost | Only if reuse displaces a purchase, and the pipeline's share and the forgone resale are netted out |
| Stranded flash is a legacy problem | Stranding is age-agnostic |
| No public program means no program | Silence is ambiguous three ways |
| An old drive's power cost decides its retirement | About $2 per TB per year is noise; the host decides |

## 16. Open questions and falsifiers

Sixteen questions decide whether this problem statement is right, ranked by how much the answer would change it. Each has a current best guess, so work can proceed before it is answered.

| # | Question | Current best guess | What would answer it |
| --- | --- | --- | --- |
| 1 | What share of the harvest is SSDs, and what is the materiality ratio? | A wide band: about 0.5–30% on invented shares, central row 3–9%; near zero if the count is all hard drives (Illustrative) | Kuantillion Cloud's own harvest log and flash deployment; publicly, the next circularity report's wording |
| 2 | Are Kuantillion Cloud's flash commitments flexible or firm in volume? | Mixed: firm cores with flexible bands (Speculated) | The commitments note in its filings; flexibility language in makers' agreements and calls |
| 3 | Does Kuantillion Cloud already reuse SSDs at scale, and through what program? | Some SSDs sit inside the 3-million-drive flow; no graded program is public (Inferred) | A circularity report that names SSDs; a posting that names flash reuse |
| 4 | Was flash reuse evaluated and declined? | Unknown; held live beside trade secret (Speculated) | Internal records, if they surface; a talk or paper describing a pilot |
| 5 | Where does second-life hazard sit against the new-drive curve? | Unknown. First-life studies disagree on late-life hazard; firmware, model and error history dominate age; handling may restart infancy (Speculated) | A pilot cohort tracked by power-on hours, firmware, error history and placement, beside a new-drive control |
| 6 | What are requalification and sanitization yields, and what share of the fleet's flash ever held unencrypted data? | Yields plausibly high for recent cohorts, low for telemetry-blind ones (Speculated); the unencrypted share Unknown | Pipeline logs by cohort and failure cause; encryption status by drive model and generation |
| 7 | How often is a host redeployed intact rather than taken apart? | Intact wins where whole platforms suit lower-demand work (Speculated) | Decommission records by branch |
| 8 | Does the fungibility solver reach physical devices? | No: virtual capacity only today (Inferred) | The solver's input schema; a posting that uses both dialects |
| 9 | Who, if anyone, owns allocation of physical harvest across sinks? | Nobody, as one role (Inferred) | Organization accounts; a posting with that remit |
| 10 | How many graded tiers can the fleet's systems absorb? | Few; the grading tax binds early (Speculated) | Qualification backlog and solver category counts |
| 11 | What share of Kuantillion Cloud's pulled drives test healthy? | Unknown. The peer's 34.4% counts tickets triage resolved, not healthy pulls. Analogies only: 43% of one vendor's returned hard disks had no fault; about half of one cloud's swapped SSDs never returned to production (Third party) | Re-test a sample of pulled drives, by site and by triage step |
| 12 | How many technician-minutes does one drive take through the pipeline? | 10–30 (Illustrative) | Time-and-motion data by site |
| 13 | Does Kuantillion Cloud make last-time buys for legacy SKUs? | Yes, informally (Speculated) | Procurement records; vendor end-of-life notices |
| 14 | How large is Kuantillion Cloud's stranded flash stock? | The same order as the peer's half (Speculated) | Utilization by resource across the fleet |
| 15 | Which gates did the memory reclaim program actually cross? | Qualification, change windows, systems of record (Inferred) | The memory program's own history |
| 16 | How much does first-life placement shape harvest endurance? | Little today, except write-heavy and QLC cohorts; rising as QLC spreads (Inferred) | Endurance used at harvest against each drive's workload history |

**What would falsify the problem statement**

- A materiality ratio well under 1% would shrink the problem to spares continuity; P3, P5 and most of P6 would fall away.
- Evidence that Kuantillion Cloud already runs a graded flash program with a shared internal price would turn P6 and P8 from problems into practice.
- Second-life failure rates clearly above new-drive rates from the first year would close the workload sink and leave spares and exit.
- Fully flexible commitments with an early Path B would leave the procurement anchor small and the capacity anchor irrelevant.
- An internal evaluation that declined flash reuse for complexity would confirm the grading tax, and move the center of the problem to intact host redeployment.

## Reference classes from the wider field

Other operators, industries and literatures met pieces of this problem first. Their numbers bound what is plausible.

### A.1 Peer programs and figures

The harvest, requalify and redeploy loop is line operations across the industry, disclosed through hiring pages and sustainability reports (Third party). One internet platform's recycle planning feeds repaired spares across two continents. A third global cloud claims 99.7% of retired hardware recycled and reused (method unverified). Another Asian internet company refurbishes components at a recycling center. A mid-size European cloud tests every component, runs platforms nine to ten years, and treats owning the value chain as a cost lever. Supply-chain organizations own the loop, not storage engineering (Inferred).

| Peer | Metric | Value | What it bounds |
| --- | --- | --- | --- |
| One cloud (2024) | Obsolete spare parts met from harvested inventory | 85% | How far harvest can carry aging-platform spares |
| Another cloud | All spare parts supplied from reuse | 13% | Harvest's share of spares fleet-wide |
| One cloud | Server SSD capacity stranded; with small-group pooling (research estimate) | 54%; about 19% | The stranded stock |
| One operator (2020) | Legacy out-of-warranty PCIe drives: share of drives against share of failures in a quarter | 22% against 77% | One bad quarter; confounded with model, firmware and warranty |
| One cloud | Repair time, median and 99th percentile; share of technician hours; share of six-year cost | 3 days and 190 days; about half; about 9% | Repair cost and labor |
| One cloud | Repair tickets cut by fail-in-place | About 55% | Fail-in-place as a substitute for spares |
| One Asian cloud (2019) | SSD-related failure tickets not caused by the drive; tickets ending in a drive swap | 34.4%; 31.2% | Ticket triage |
| One cloud | Emissions per core, reused-drive server design; fleet-wide net | About 28–29% lower per core; about 8% fleet-wide | The upgrade-and-build sink |
| A mid-size European cloud (2025) | Outbound components redeployed, resold, recycled | About 30%, 50%, 20% | Internal reuse below hyperscale |
| A mid-size storage provider (2026) | Quarterly failure rate, driven by drives seven to eight years old | Highest in years | The keep branch's price |
| The disposition market (2026) | Market size; fastest-growing asset class | About $14B; SSDs | The exit sink's depth (Press, analyst) |

### A.2 What other industries learned first

Three industries ran versions of this problem years ahead of hyperscale computing (Third party; every mapping Inferred). None is a template.

**Aviation: the used-parts market that became infrastructure.** Aviation runs a mature market in certified used parts, fed by tearing down retired aircraft. Reporting around 2017 sized it at about $4.5 billion, supporting a $67 billion maintenance market, and called its use routine. Teardown starts when a type's first airframes retire; aging-fleet operators drive demand. US rules require a documented trace history for every part. Engines hold up to two-thirds of a teardown's value.

- *Lesson:* harvest-fed spares can become routine, trusted and priced, given certification, traceability and specialist intermediaries. This is the mature form of P4.
- *Failure mode:* when a fleet retires faster than survivors use parts, inventories can lose nearly all their value. Parts are generation-locked. Both have analogues in drive cohorts.
- *Where it breaks:* aviation's traceability is regulator-mandated and its parts live for decades in a thick outside market. Drives have neither, and internal reuse needs no outside market.

**Electric-vehicle batteries: valuing a used asset by cohort.** A 2024 academic valuation finds one chemistry's second-life fair value generally exceeds 40% of a new battery's. For another chemistry, immediate recycling is often better: same age, different cohort, opposite verdict. The barriers are uncertain state of health, manual grading cost, disassembly labor and low-volume logistics. Used packs trade around $25–75 per kWh as new prices keep falling.

- *Lesson:* second-life value is a cohort property, valued against the falling price of new. This is P2's cohort finding.
- *Failure mode:* second-life economics die when grading stays manual and new prices fall faster than expected.
- *Where it breaks:* a drive reports its own health in seconds; a battery needs hours of testing. The analogy understates the drive opportunity.

**Used vehicles: certification against the second-class problem.** Operations research from 2023 models why manufacturers certify used cars. Certification separates good used units, segments buyers and, through higher trade-in values, raises *new* sales too. The size of the certified class sets the program's power.

- *Lesson:* a credible certificate turns used from a discount label into a product class. P8's trust problem has been solved elsewhere.
- *Failure mode:* certify too little and the program is irrelevant; too loosely and the certificate carries no information.
- *Where it breaks:* lemons is an information gap between strangers. Inside one company, a drive's history is knowable, so P8's real barrier is incentives and accountability.

All three need a trusted per-unit record, a cohort valuation revisited against new prices, and an institution whose job is the certificate. Those are P1, P6 and P8, found independently by three industries (Inferred).

### A.3 The studied ground

The fleet-flash problem isn't a new shape. It is a closed-loop supply chain with random-yield returns and dual sourcing, plus capacity expansion under uncertainty, convenience yield, a lemons market, condition-based replacement and a repairables queue. Each literature has decades of results. None of these authors wrote about SSDs; every mapping is Inferred.

- **Closed loops.** Guide and Van Wassenhove (2009) recast value recovery as profit, not compliance: P8's reframing. Guide, Teunter and Van Wassenhove (2003) treat returns' quantity, quality and timing as a decision priced by grade: P2 feeding P7, and P6's missing price. Van der Laan and colleagues (1999) weigh processing returns at once against waiting: P7's push or pull. Fleischmann and colleagues (1997) make the pipeline a network-design problem. Galbreth and Blackburn (2006): more intake lets the sorting gate be stricter, and the threshold is independent of volume only when acquisition cost is linear; under scarcity, it moves with volume. Ferguson, Guide, Koca and Souza (2009): grading adds about 4% to profit, more as return volume grows.
- **Random yield and dual sourcing.** Yano and Lee (1995): yield's distribution, not just its mean, sets safety stock. Simpson (1978): with random demand and returns, the optimal policy is three thresholds (repair, buy, scrap), the skeleton of keep, harvest, resell or destroy. Anupindi and Akella (1993): switching between two uncertain suppliers is computable. Veeraraghavan and Scheller-Wolf (2008): one order-up-to level per channel comes within a percent or two of optimal. Tomlin (2006): against rare-but-long disruptions, an alternate source beats stockpiling.
- **Capacity expansion.** Manne (1961) builds ahead under a shortage penalty; P2 is that trade with the build sunk. Luss (1982) asks when, how much, where and what type: P7 and P5. Karabuk and Wu (2003) coordinate two chip-industry organizations within about 6.5% of the central optimum.
- **Storage theory.** Kaldor (1939) defined convenience yield; Working (1949) made it a curve, large when stocks are low; Pindyck (2001) carried it to modern commodities. A caged drive is worth resale plus that yield.
- **Lemons and winner-picking.** Akerlof (1970): unverifiable quality drags price to average. Hendel and Lizzeri (1999): used markets survive as discounts and volumes. Stein (1997): headquarters creates value by moving a scarce resource to its best internal use, given comparable returns.
- **Maintenance and replacement.** Barlow and Proschan (1965): fixed-age replacement pays only when hazard rises with age; SSD hazard tracks age poorly, so condition-based rules win. Jardine, Lin and Banjevic (2006) set the data, processing and decision layers; P1 is the first two. Hartman and Tan (2014): faster progress shortens life in the current use only. Karabakal, Lohmann and Bean (1994): a shared budget makes per-asset optima infeasible together. Islam and Lownes (2019) beat a bus fleet's status quo on cost and emissions at once.
- **Repairables queueing.** Feeney and Sherbrooke (1966), extending Palm's theorem: shortfall depends only on *mean* resupply time, so pipeline speed is an inventory policy. Muckstadt (1973) adds assemblies within assemblies across bases and a depot: the server-or-drive stocking question.
- **Multitask incentives.** Holmström and Milgrom (1991): rewarding only measured tasks pulls effort from the rest, so ticket-speed metrics predict scrapping. The theory also favors putting measured and unmeasured tasks in different jobs. The industry's split may be design; the gap is the unmeasured task having no measure.

**The five strongest frames, ranked:** closed loops, of which this case is an instance; random yield and dual sourcing; storage theory; lemons and winner-picking; and condition-based and parallel replacement.

**What is genuinely new** is narrow (Inferred). The asset reports its own condition in seconds. One firm owns every stage of the loop, with no information gap inside except those its own org chart creates. And in 2026 the cheap, unreliable channel is among the few not already contracted away. The literatures priced each piece; nobody has priced them together, at this scale, under this shortage.

## About this case

Kuantillion Cloud, its teams, its people and its events are fictional. The case is inspired by public information about hyperscale computing and the flash market; figures are drawn to scale, not taken as facts about any company. Corrections, better reference classes and objections are welcome in the practice's discussions.

### Further reading

These cover the wider field.

- Closed-loop supply chains: Guide and Van Wassenhove, *Operations Research* (2009); Guide, Teunter and Van Wassenhove, *Manufacturing & Service Operations Management* (2003); van der Laan, Salomon, Dekker and Van Wassenhove, *Management Science* (1999); Fleischmann et al., *European Journal of Operational Research* (1997); Galbreth and Blackburn, *Production and Operations Management* (2006): https://cdn.vanderbilt.edu/vu-web/owen/files/publications/GalbrethoptacqandsortpolforremfgfinalPoms.pdf ; Ferguson, Guide, Koca and Souza, *Production and Operations Management* (2009): https://doi.org/10.1111/j.1937-5956.2009.01033.x
- Random yield and dual sourcing: Yano and Lee, *Operations Research* (1995); Simpson, *Operations Research* (1978); Anupindi and Akella, *Management Science* (1993); Veeraraghavan and Scheller-Wolf, *Operations Research* (2008); Tomlin, *Management Science* (2006)
- Capacity expansion: Manne, *Econometrica* (1961); Luss, *Operations Research* (1982); Karabuk and Wu, *Operations Research* (2003)
- The theory of storage: Kaldor, *Review of Economic Studies* (1939); Working, *American Economic Review* (1949); Pindyck, *The Energy Journal* (2001)
- Used markets and internal capital markets: Akerlof, *Quarterly Journal of Economics* (1970); Hendel and Lizzeri, *American Economic Review* (1999); Stein, *Journal of Finance* (1997)
- Maintenance and replacement: Barlow and Proschan, *Mathematical Theory of Reliability* (1965); Jardine, Lin and Banjevic, *Mechanical Systems and Signal Processing* (2006); Hartman and Tan, *The Engineering Economist* (2014); Karabakal, Lohmann and Bean, *Management Science* (1994); Islam and Lownes, *Transportation Research Part D* (2019)
- Repairables queueing: Feeney and Sherbrooke, *Management Science* (1966); Muckstadt, *Management Science* (1973)
- Incentives and job design: Holmström and Milgrom, Multitask Principal-Agent Analyses: Incentive Contracts, Asset Ownership, and Job Design, *Journal of Law, Economics, & Organization* (1991)
- SSD field studies. These are other operators' and researchers' fleets, cited as studies; none is Kuantillion Cloud's:
  - Schroeder and Gibson, Disk failures in the real world: what does an MTTF of 1,000,000 hours mean to you?, *USENIX FAST* (2007): https://www.usenix.org/legacy/event/fast07/tech/schroeder/schroeder_html/
  - Meza, Wu, Kumar and Mutlu, A Large-Scale Study of Flash Memory Failures in the Field, *ACM SIGMETRICS* (2015): https://doi.org/10.1145/2745844.2745848
  - Schroeder, Lagisetty and Merchant, Flash Reliability in Production: The Expected and the Unexpected, *USENIX FAST* (2016): https://www.usenix.org/conference/fast16/technical-sessions/presentation/schroeder
  - Narayanan et al., SSD Failures in Datacenters: What? When? and Why?, *ACM SYSTOR* (2016): https://doi.org/10.1145/2928275.2928278
  - Xu, Zheng, Qin, Xu and Wu, Lessons and Actions: What We Learned from 10K SSD-Related Storage System Failures, *USENIX ATC* (2019): https://www.usenix.org/conference/atc19/presentation/xu
  - Alter, Xue, Dimnaku and Smirni, SSD Failures in the Field: Symptoms, Causes, and Prediction Models, *SC* (2019): https://par.nsf.gov/servlets/purl/10172650 ; with Pinciroli, Yang, Alter and Smirni (2020): https://arxiv.org/abs/2012.12373
  - Maneas, Mahdaviani, Emami and Schroeder, A Study of SSD Reliability in Large Scale Enterprise Storage Deployments, *USENIX FAST* (2020): https://www.usenix.org/conference/fast20/presentation/maneas
  - Han, Lee, Xu, Liu, He and Liu, An In-Depth Study of Correlated Failures in Production SSD-Based Data Centers, *USENIX FAST* (2021): https://www.usenix.org/conference/fast21/presentation/han
  - Maneas et al., Operational Characteristics of SSDs in Enterprise Storage Systems: A Large-Scale Field Study, *USENIX FAST* (2022): https://www.usenix.org/conference/fast22/presentation/maneas
  - Lu, Xu, Zhang et al., Perseus: A Fail-Slow Detection Framework for Cloud Storage Systems, *USENIX FAST* (2023): https://www.usenix.org/conference/fast23/presentation/lu
  - Wang, Berger et al., Designing Cloud Servers for Lower Carbon, *ISCA* (2024): https://www.pdl.cmu.edu/ftp/CloudComputing/Wang_ISCA24.pdf
- Media sanitization:
  - Wei, Grupp, Spada and Swanson, Reliably Erasing Data From Flash-Based Solid State Drives, *USENIX FAST* (2011): https://static.usenix.org/event/fast11/tech/full_papers/Wei.pdf
  - The US federal media sanitization guideline, NIST Special Publication 800-88, Revision 2 (September 2025): https://doi.org/10.6028/NIST.SP.800-88r2 ; its FAQ: https://csrc.nist.gov/files/pubs/sp/800/88/r2/final/docs/sp800-88r2-faq.pdf
  - The international storage-sanitization standard it points to, IEEE 2883-2022: https://standards.ieee.org/ieee/2883/10277/
