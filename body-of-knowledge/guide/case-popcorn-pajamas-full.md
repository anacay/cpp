---
title: Popcorn Pajamas: the full case
short: The complete case: the system, demand, supply, the planning organization, sixteen problems, twenty causal chains and six scenarios for 2027.
kind: case
order: 2.1
cadence: all
altitude: all
levels: learning, practicing, leading
seed: 
---

*Popcorn Pajamas is a fictional company. Any resemblance to real companies reflects problems the industry shares.*

The case describes one company's capacity-planning problem space as an outside analyst could reconstruct it: the system, the demand, the supply, the constraints, the planning organization, sixteen decision-shaped problems, twenty causal chains and six stress scenarios for 2027. It does not prescribe answers. A [companion note](case-popcorn-pajamas-practice.md) shows how the practice's body of knowledge approaches each problem.

## How to read this

Every load-bearing claim carries an evidence tier. The tiers describe how a planner at Popcorn Pajamas, or an analyst outside it, would know each thing. Untagged statements in narrative are Reported. A note under a table can tag all its figures. Formulas are shown wherever a number is computed.

| Tier | Meaning |
| --- | --- |
| Reported | Popcorn Pajamas' own public statements: filings, shareholder letters, engineering blog, the Snack Bar host site and help center, ESG report, job postings, conference talks |
| Third party | A named kind of outside source: a measurement firm, analyst, regulator, exchange |
| Press | Trade or general press; reposted job listings |
| World | A fact about the wider industry, with a source at the end for readers who want to go deeper |
| Inferred | Follows from tagged facts by stated reasoning |
| Speculated | A hypothesis with a stated basis and a falsifier |
| Arithmetic | Computed from tagged inputs; formula shown |
| Unknown | Looked for, not found |

**Terms used**

| Term | Meaning here |
| --- | --- |
| Popper | Popcorn Pajamas' purpose-built caching server (a cache node). Two classes: Big Bucket (storage-heavy) and Small Bag (throughput-light) |
| The Snack Bar | Popcorn Pajamas' content-delivery network: the Poppers, its own sites and the backbone between them |
| Embedded / PoP | A Popper site inside a host network (an ISP) / at a Popcorn Pajamas data center or internet exchange point (IXP) |
| Host network | An ISP that houses Poppers inside its own network |
| Site capacity | Maximum throughput (Gbps) a site serves before traffic sheds to another site; the one published capacity unit |
| Utilization | Traffic served in a site's daily peak hour ÷ site capacity; target band 50–75% |
| Augment | Adding Poppers or interconnect capacity at a site; triggered when a forecast crosses 75% within 12–18 months |
| Fill | Loading content onto Poppers, mostly in an off-peak window (default 2 a.m.–2 p.m. local) |
| Box-night | One Popper's fill capacity in one default window: about 6.5 TB (Arithmetic) |
| Content miss / health miss | A byte not served from the best Popper because the file was absent / because the Poppers were saturating |
| Content shed ratio | Content-shed traffic ÷ total streamed traffic |
| Nameplate / effective rate | Rated serving throughput of installed Poppers / what Popcorn Pajamas says they serve in practice |
| Peak concurrent streams | The most simultaneous playback streams at any moment of an event |
| Manifest | The per-viewer file, generated in the cloud, that a device fetches before playback to learn where and at what quality to get video |
| Request path | Playback starts, manifests, live-origin requests and ad events: the cloud-side work that precedes and accompanies bytes |
| The Cloud Provider | The public cloud where Popcorn Pajamas runs most of its computing |
| VBR / DAI | Variable bitrate (live) / dynamic ad insertion |
| Route reflector (RR) | A BGP control-plane node; Popcorn Pajamas replaced its full iBGP mesh with RRs in eight cities (2025–26) |
| Transit / PNI / peering | Paid onward carriage / private network interconnect / settlement-free exchange of traffic |
| Reference class | A set of comparable past launches or events used to size one with no history |
| Loss system | A queueing system that rejects arrivals when full (Erlang B); how Popcorn Pajamas' cloud games behave at peak |

## 1. Executive summary

Popcorn Pajamas must produce one multi-year capacity plan for three estates that run on different clocks: Poppers (the Snack Bar's caching appliances) that live 4–6 years inside more than a thousand host networks, a cloud fleet that scales in minutes, and a production estate that follows shooting calendars. Its demand is being remade by live events contracted into the 2030s, cloud games with no settled hardware, and a component market where enterprise flash contract prices have risen roughly four to five times since mid-2025 (World). One small, senior planning team, sitting inside the edge partnerships and planning group, turns all of this into annual plans and 5-plus-year forecasts. It has no authority over the teams that buy, install or host the hardware, and its own job postings name shortage and excess as equal risks.

The plan must absorb demand that changes shape faster than its forecasts, through supply that is lumpy, slow, partly partner-hosted and newly expensive. It must hold request-path headroom as well as bandwidth, and it must survive changes in who pays for delivery. Cloud request-path and GPU capacity enter as interface requirements the plan specifies but does not own.

**The five hardest sub-problems**

1. **Sizing a site on one published number when the box has three coupled limits.** The published unit is Gbps; each Popper also binds on storage and fill. The all-flash generation holds less content per box (120 TB) than the 2021-era storage tier (354 TB), while flash became the dearest part of the bill.
2. **Provisioning live peaks on partner-hosted hardware.** About 90% of live traffic now lands on embedded caches, content cannot be pre-filled, event sizes span about 20×, and the world concurrency record moved to a rival within 16 months of Popcorn Pajamas' own.
3. **Request-path headroom.** Both public peak failures (a marquee boxing event in late 2024 and the final-season premiere of its biggest series in late 2025) broke in manifests and playback starts while links had room; retries amplified load about 10×.
4. **Games as a loss system with censored demand.** A session holds a GPU slice for its whole length; admission control turns away players when servers are full, and every rejection is demand the forecaster never sees.
5. **Arbitrating streams with no common unit and no price signal.** Across a barter market with host networks, an internal market with the Pajama Set (production) and Game Night (games), and a Finance envelope, nothing published compares a stored terabyte, a served gigabit and a GPU session.

**The five most surprising connections**

1. **The AI boom hits Popcorn Pajamas three times at once.** It multiplied the cost of flash in every new Popper, tightened the cloud instance generations its fleet wants, and created the GPU scarcity that production, machine learning and games now compete for inside one company.
2. **Live and on-demand trade bytes but add requests.** One UK ISP's data shows Popcorn Pajamas' on-demand traffic falling up to 27% while a national-team match aired free-to-air (Third party). Streams substitute on the wire, but playback starts, manifests and ad events stack, which is why failures happen in the request path.
3. **Q4 is triple-booked.** The holiday on-demand peak, the holiday football slate and the biggest premieres land in the quarter whose fill nights launches need. Christmas Day 2025 was one UK ISP's busiest day ever, credited to Popcorn Pajamas' tent-pole season finale (Third party), and the biggest US streaming day on record (World). Codec backfills and refresh waves get pushed to Q1–Q2.
4. **Admission control blinds the forecast.** The mechanism that protects game sessions at peak is the same one that censors the proof-of-value signal that games investment is staged on.
5. **The planning organization's own shape is telemetry.** Its drift from one generalist (2019) to a modeling seat, a fleet seat, a planner per stream and a Director (2026) tracks the problem becoming multi-stream, multi-estate and capital-heavy. The Director's remit still starts from Finance's demand forecast, so the move to signal-led planning is under way, not done.

## 2. Popcorn Pajamas profile

Popcorn Pajamas is a roughly $50B-a-year service whose capital spend is rising fast while its headcount and its public demand signals shrink.

| Dimension | Figure (as of Oct 2026) | Tier |
| --- | --- | --- |
| Members | Over 300M paid; quarterly member reporting ended 2025; an audience approaching 1 billion people | Reported |
| Footprint | Service in 190+ countries; unavailable in five markets, including the largest; Poppers in about 175 countries | Reported |
| Viewing | About 96–97B hours per half-year, +2% a year; about half in the evening; about 5% of global TV time; engagement reporting becomes annual from 2027 | Reported |
| Growth geography | Fastest growth in Asia-Pacific and Latin America; one large South Asian market grew viewing hours 24% year on year | Reported |
| Revenue and margin | Q3 2026 about $12.9B (+12% YoY); FY26 about $51B; operating margin about 35% in Q3, about 31.5% full-year guide | Reported |
| Advertising | Ad plan more than 60% of sign-ups where offered; FY26 ad revenue guide cut to about $2.7B on ad-tech delays; 15 more ad markets from 2027 | Reported |
| Capital | Property and equipment purchases about $690M in 9M 2026 (+54% YoY); capital work in progress +58% in six months; not broken out by estate. The free-cash-flow guide was cut, mainly for a real estate transaction in Q4: a large studio-lot purchase of about $400M | Reported; Inferred (the lot) |
| Technology and people | Technology and development expense up about 20% in 2026; about 16,000 staff before an October cut of about 1,000 (about 6%) in product, technology, legal and HR, games staff included | Reported + Press |
| Traffic weight | About 12% of global fixed downstream; over 30% of primetime internet traffic at many ISPs (own posting) | Third party; Reported |
| The Snack Bar | Nearly 20,000 Poppers; about 400 PoPs; 20,000+ eBGP sessions with thousands of peer networks; 6,000+ locations; 1,000+ host networks; 60+ own data centers; 100+ IXPs; more than $1B cumulative investment by 2022 | Reported (own conference talks, ESG report) |
| Live | 72 → 220 → 400+ events a year (2024–2026); about 1% of view-hours and about 5% of 2026 content spend; 6 of the top-10 sign-up days in five years | Reported |
| Planning group | The capacity planning team, described as central to making sure there is always enough capacity; inside the edge partnerships and planning group; its charter covers owned infrastructure for members and internal customers | Reported (postings) |

Two tensions set up everything below. Capital intensity is rising (+54%) as headcount fell 6%, so the planning system must do more per planner. And the external signals a planner could once borrow (member counts, twice-yearly viewing reports) are being switched off just as demand becomes more inorganic.

## 3. The system

The Snack Bar is two systems sharing one box: a serve path that delivers video at the evening peak, and a fill path that loads tomorrow's content overnight. The published capacity unit measures only the first, and the cloud sits in front of both.

Most planning risk sits in the embedded Popper: inside a host network, filled overnight from Popcorn Pajamas' own sites, read live from the cloud origin, and reached only after the cloud has issued the manifest. The production estate shares the backbone, not the appliances.

### 3.1 Three estates

1. **The Snack Bar.** Purpose-built Poppers, most embedded free of charge inside 1,000+ host networks, the rest at 60+ Popcorn Pajamas data centers and 100+ IXPs. It serves effectively all video bytes. No money changes hands with host networks in either direction.
2. **The Cloud Provider.** Most of Popcorn Pajamas' computing (annual report): the Snack Bar control plane, personalized playback manifests, member services, the live origin and pipelines, encoding, a data platform of more than an exabyte, and a fast-growing machine-learning and GPU fleet. Four regions are active at once, with about a 10× daily peak-to-trough swing.
3. **The production estate.** Popcorn Pajamas' own production compute and storage centers around the world, plus ingest centers, connected to the cloud through the Snack Bar network. That is a shared backbone, not shared appliances. No location, provider or size is public.

### 3.2 Network skeleton

Popcorn Pajamas' 2026 operator-conference talks give the current map: nearly 20,000 Poppers, about 400 PoPs, 20,000+ eBGP sessions with thousands of peer networks. The full iBGP mesh was replaced in 2025–26 by route reflectors in eight cities across four regions, dual-attached per geography. Regional path scale runs from about 37M IPv4 paths (North America) to about 3M (Latin America), and BGP telemetry streams every 30 seconds (Reported).

Popcorn Pajamas' public exchange footprint is concentrated. A tally of its published peering listings gives about 105 exchanges whose first-listed ports sum to roughly 15 Tbps: one 800G port in South America, ten at 400G across five metros in North America, South America, Japan and the UK, and most of the rest at 100G or below (Inferred from the published list). When embedded caches saturate during a live peak, overflow lands on these few metros and on private interconnects.

### 3.3 Appliances: nameplate versus reality

The catalog lists two all-flash classes. Popcorn Pajamas' own host-facing decks say what they actually serve, and show that per-box storage regressed across generations.

| Popper class | Storage | Spec throughput | Served in practice | Power | Source |
| --- | --- | --- | --- | --- | --- |
| Big Bucket (2026, all-flash) | ≤120 TB | about 200 Gbps | about 90–150+ Gbps | about 400 W | Appliances page; host deck, 2024 |
| Small Bag (2026, all-flash) | ≤60 TB | about 80 Gbps | about 20 Gbps | about 250 W | Same |
| Storage tier (2021, hybrid) | 354 TB | — | 36–70 Gbps | 670 W | Host deck, 2021 |
| Typical Popper (2012) | — | 8 Gbps | — | supplies rated 750 W | Deployment guide, 2012 |

- **Life.** Four to six years with no hands-on service except optics; Popcorn Pajamas replaces failing hardware free of charge to the host.
- **The storage squeeze is architectural.** The all-flash transition traded about two-thirds of per-box content capacity for 2–3× throughput, before flash prices rose (Arithmetic from the table).
- **Software ceiling.** With encryption offloaded to the network card, one server has served about 375–400 Gbps; Popcorn Pajamas says one point of efficiency is worth hundreds of thousands of dollars at fleet scale.
- **Redundancy is bought in pairs.** Each Popper terminates its own link bundle on a single router (no multi-chassis LAG), so resilience is one Popper per router, active/active with identical BGP advertisements. A small resilient site holds at least two boxes and can lose half to a router failure (Reported).
- **The fleet is a long tail.** Nearly 20,000 Poppers across 6,000+ locations is about three per location, so most sites are small (Inferred). A 2022 outside count of about 8,000 implies about 24% a year growth (Inferred; scopes may differ).
- **No GPU or game-streaming class is published,** yet job postings put cloud-games bare metal under the Snack Bar organization (Inferred: a third hardware class exists or is coming).

### 3.4 Serve, fill and placement

- **Serve.** The control plane in the cloud steers each playback to the best-ranked Popper by file availability, health and BGP-derived proximity. Manifests are generated per viewer in the cloud, so every playback start transits the cloud even when every byte comes from inside the viewer's ISP.
- **Fill.** Content is pushed predictively in off-peak windows: **default 2 a.m.–2 p.m. local** (12 hours), editable per site since mid-2026, at about 1.2 Gbps of inbound fill per Popper. Peer fill inside a cluster comes first, then tier fill, to spare the backbone. One default window is about 6.5 TB per box-night, so a 120 TB box fills from empty in about 18 nights (Arithmetic: 1.2 Gbps × 43,200 s ÷ 8).
- **Placement.** Popularity is predicted daily per region at the file level, which halved the storage needed for the same hit rate. Popular files go to throughput-heavy sites, the long tail to storage-heavy tiers, and planners can pin upcoming titles by hand.
- **Sizing inputs.** Popcorn Pajamas sizes each site on three published factors: the host's network architecture, peak traffic to be served, and failover options. The 2012 qualification rule (at least 5 Gbps of peak Popcorn Pajamas traffic; N+1 as the usual pattern) survives in today's help center. Per-box throughput went from 8 Gbps in 2012 to about 200 Gbps today: the quiet 25× of the fleet's history.

### 3.5 The capacity unit

*Site capacity* is the Gbps a site serves before shedding to another site. Utilization is peak-hour traffic ÷ site capacity; the target band is 50–75%. A forecast crossing of 75% within 12–18 months opens an augment conversation with the host. The site-capacity model was revised in 2025, and a seven-day capacity report has been available to hosts since; hosts can schedule Popper decommissioning since mid-2026 (Host Lounge changelog).

### 3.6 How it fails

Popcorn Pajamas classifies every byte not served from the best Popper: a **content miss** (file absent: prediction, fill or storage), a **health miss** (Poppers saturating: throughput, balancing, copy counts) and the **content shed ratio** (content-shed traffic ÷ total traffic). The health miss is the closest thing to a published shortfall signal (Inferred). The two public peak failures broke mostly outside these measures:

| Event | What happened | Where it broke |
| --- | --- | --- |
| Final-season premiere of its biggest series, late 2025 | TV devices failed to start playback from about 20 minutes before the evening release; recovered in about 5 minutes | Device and cloud request handling, before any video was served (Press + Inferred) |
| A marquee boxing event, late 2024 (about 65M concurrent streams; 38M US) | Widespread buffering; several ISPs reported no saturated links to Popcorn Pajamas; embedded caches carried about 70% (versus about 90% at later events); overflow went to transit; retries reportedly amplified load about 10×; preparation time had been shortened by a schedule change | Manifest refresh and per-Popper serving, by ISP and press accounts (Press + Inferred) |

Neither event has a published post-mortem.

### 3.7 Live path

A live origin on cloud compute sits between the encoding pipeline and the Snack Bar. Segments are about two seconds long, and each event runs time-locked redundant pipelines in two cloud regions. The origin throttled above about 100 requests per second per event from Poppers (not from viewers), so it now serves live-edge segments before replay requests and returns briefly cached busy responses under surge. Load tests reach about 100,000 playback starts per second. Popcorn Pajamas uses no third-party CDN for live, unlike rivals that split live across two to six.

### 3.8 Energy

Popcorn Pajamas reports electricity only for Poppers it runs in colocation: 33.4 GWh (2021) to 68.7 GWh (2025), an average draw of about 7.85 MW, growing about 20% a year. Popcorn Pajamas says that is about one-tenth of its edge and cloud data-center electricity combined, so the total is on the order of 700 GWh a year (Arithmetic). Power drawn by Poppers inside host networks is the hosts' and is not reported. Colocated energy grows a little below the estimated fleet growth (about 24%), but the scopes differ, so no per-box efficiency conclusion follows (Inferred).

### 3.9 The production estate is separate

No public evidence shows production media cached on or served from Poppers. Production and edge are two owned fleets under one planning charter, sharing a backbone at most (Press + Inferred).

## 4. Demand: one smooth curve and the things that break it

On-demand viewing is the smooth, predictable base, and Popcorn Pajamas forecasts it with high accuracy by title and hour. Every hard planning question comes from demand that is not in that curve: launches, live events, games, production bursts and discontinuities that move the whole curve at once.

### 4.1 Three faces of inorganic demand

| Face | What it is | Popcorn Pajamas examples | Why the trend line misses it |
| --- | --- | --- | --- |
| Step change | New demand with no history | A title launch, a live event, a new market or ad market, cloud games | Nothing to extrapolate; no running system to measure |
| Derived demand | Load on a shared resource caused by someone else | Live and on-demand sharing one Popper site; production, games and ML sharing GPU supply; Pajama Set bytes on the Snack Bar backbone | The resource owner does not cause its own consumption |
| Discontinuity | An event that moves the whole curve | A codec change, a new Popper generation, an access-network upgrade, the paid-sharing step | The history before the break is no longer comparable |

### 4.2 The streams

| Stream | Shape | History | Lands on | Unit consumed | Reported planning practice |
| --- | --- | --- | --- | --- | --- |
| On-demand viewing | Diurnal; about half in the evening | Deep | Poppers (serve + fill) | Peak-hour Gbps; TB stored; fill Gbps | Predicted by title and hour; off-peak fill; manual pinning of upcoming titles |
| Title launches | Step at release, then a long tail | Reference class only | Poppers + cloud playback starts | A few hot files; starts per second | Internal and external forecasts; pinning; fill must finish before release |
| Live events | Minutes-scale join, sharp peak | Thin, growing; rights calendar known years out | Cloud origin → interconnect → Poppers (about 90% embedded) | Concurrent streams × nominal bitrate; starts/s; ad events/s | Pre-provisioned by prediction, pooled with on-demand; forecasts shared with ISPs and the cloud; VBR with nominal-bitrate admission |
| Cloud games | Session-bound; evening and weekend | Very thin, censored | Owned GPU bare metal under the Snack Bar (Inferred); cloud control plane | Concurrent session-slices (GPU + encoder + about 10 Mbps) | Admission control; investment staged on proof of value |
| Production | Calendar bursts (shoot, visual-effects turnover) | Per title, not per curve | Production centers + cloud; backbone via the Snack Bar | TB ingested (200–700 TB per title); CPU bursts; cloud GPU workstations | Swarm, then yield; planned inside the Snack Bar capacity team (the Pajama Set planner seat) |
| ML and data | Weeks-long training; continuous pipelines | Moderate | Cloud | GPUs; exabyte storage; stream jobs | Reserved plus shared burst pools; GPU partitioning |
| Daytime and mobile features | Flat, request-heavy | Thin | Poppers + cloud | Requests more than bytes | Video podcasts, a vertical clips feed (2026) |
| Discontinuities | Whole-curve breaks | None by definition | All estates | Bytes per hour; Gbps and TB per box | A new codec at 30% of viewing; HDR backfill; next codec unscheduled |

### 4.3 The portfolio view: bytes substitute, requests add

Capacity write-ups usually sum streams. The evidence says they covary, with a sign that depends on the layer.

- **Bytes substitute.** One UK ISP measured Popcorn Pajamas' on-demand traffic falling up to 27% while a national-team match aired on a free-to-air broadcaster's stream during the 2026 men's World Cup, recovering at full time (Third party). Popcorn Pajamas' own live events likely pull viewers off its on-demand catalog on the same Poppers, so net evening load is below on-demand peak plus live gross (Inferred).
- **Requests add.** A live join brings playback starts, personalized manifests, real-time recommendation updates (100M+ devices in under a minute) and, with dynamic ad insertion now live, synchronized ad-break fetches, on top of normal browse traffic. Byte substitution does nothing for the request path, where both public failures happened.
- **Games likely covary positively with the video evening peak** (same households, same hours; Speculated), while production is roughly anti-cyclical (weekday daytime). A plan that holds reserve per stream overbuys bytes and underbuys request-path and GPU-evening headroom.

### 4.4 On-demand viewing and launches

- **Hits.** Top titles draw 90–150M views in their first months, and five of the top ten series in early 2026 premiered that half. A hit film can add 130M views in its second year, so the tail matters as much as the spike.
- **Release timing.** Big releases land at the evening peak, so launch fill must finish before release, and the first days hit only a few files.
- **Launch failures were request failures** (the final-season premiere, see 3.6).
- **Codecs.** The newest open codec carries about 30% of viewing at about one-third less bandwidth: about 10% fewer bytes overall; each further 10 points of share cuts about 3% (Arithmetic). The HDR catalog is being backfilled in the new codec (85% of HDR viewing hours covered, heading to 100%), a one-time storage and fill wave. Film-grain synthesis cut bitrate by two-thirds on one grainy test title.

### 4.5 Live events in depth

Live is about 1% of viewing hours, yet it sets the hardest peaks and produced 6 of the top-10 sign-up days in five years. Popcorn Pajamas calls Q4 2026 its biggest live quarter yet.

**The contracted calendar** (Reported/Press). A US football league through the 2029–30 season: 2026 brings a first holiday-eve game, a Christmas doubleheader, a final-week game and an awards show. Weekly wrestling for 10 years from January 2025 (opt-out after 5). Baseball events 2026–28. A women's international football tournament in 2027 and 2031 (US and Canada rights). Marquee fights roughly quarterly, the next a heavyweight bout in mid-December 2026 in the UK.

Dates are known years ahead; sizes are not. The football league alone brings five to six games a year through 2029–30, each on a holiday or tent-pole night.

**Reported sizes, newest first** (convert every metric to peak concurrent streams before sizing):

| Event | When | Reach | Reported peak or audience | Tier |
| --- | --- | --- | --- | --- |
| Football season opener played abroad | Sep 2026 | Global | 18.5M US average; US peak 21.3M | Reported/Press |
| International baseball tournament | Mar 2026 | One country only | 31.4M total viewers; top game 17.9M; 9.6M+ concurrent accounts for one game | Reported |
| Baseball opening night | Mar 2026 | Global | About 3M US average | Press |
| Boxing event | Dec 2025 | Global | 33M viewers | Reported |
| Christmas football | Dec 2025 | Global | 27.5M US average for the larger game; US peak >30M | Reported/Press |
| Boxing event | Nov 2025 | Global | Not reported | — |
| Boxing event | Sep 2025 | Global | 41M global viewers over the weekend; >24M concurrent streams | Reported |
| Weekly wrestling premiere | Jan 2025 | Global | About 28% less traffic than the Christmas games | Third party |
| Christmas football | Dec 2024 | Global | About 30–31M viewers per game worldwide; US peak >27M | Reported/Press |
| Marquee boxing event | Nov 2024 | Global | About 65M concurrent streams (38M US) | Reported |

- **Size spans about 20×** between a weekly show and a marquee fight (Inferred, across mixed metrics: average-minute audience, live+1, cumulative viewers, peak streams). Peak-to-average on two football games was about 1.1–1.15.
- **The world record is no longer Popcorn Pajamas'.** A South Asian streamer reached **65.2M and then 72.5M at the T20 World Cup semi-final and final in March 2026** (World). Its peak came from a single market, while Popcorn Pajamas' 65M was global, so the two are not like for like. Even so, the reference class for Popcorn Pajamas' marquee tier now sits above its own 65M.
- **Where it lands.** Embedded caches carried about 70% of the 2024 fight but about 88–90% of later football and wrestling events (Third party: a traffic-analytics firm). Live capacity has moved into other people's buildings.
- **Live sport now sets exchange records.** A large European exchange's 2025 record day was a football night, at about 27 Tbps across its sites; it passed 32 Tbps on another football night in October 2026 (World). Popcorn Pajamas' overflow path rides on the same exchanges.
- **What can and cannot be prepared.** Capacity can be pre-provisioned by prediction, shared with ISPs and the cloud ahead of time, and adjusted live. Content cannot be pre-filled: it exists seconds before it is watched.
- **VBR.** Variable-bitrate live cut bytes about 15% and the peak minute about 10%, but admission reserves each stream's nominal bitrate, so live consumes more planned capacity than measured traffic shows.
- **Request load, not just bytes.** Load tests reach about 100,000 playback starts per second; retries reportedly once multiplied traffic about 10×; the live ads pipeline was redesigned because tens of millions can join within minutes; dynamic ad insertion runs on live in six countries.
- **Geography.** Global events peak in several regions at once; a single-country tournament concentrates its peak in one region's sites. Some 2027 women's tournament matches will overlap the US on-demand evening peak and others fall in the afternoon (Inferred).
- **A measurement gap.** No outside traffic measurement of any 2025–26 Popcorn Pajamas live event has been published. The outside view of Popcorn Pajamas live is now audience numbers only.

**Plan on net load, and on records that climb in steps.** A UK ISP's measurements during the 2026 men's World Cup add three rules (World):

- **One service, not the network.** One broadcaster's stream rose 544% above an average evening while national traffic barely moved. The binding limit is one service's edge and interconnect, not the ISP as a whole.
- **Steps.** The network's live-streaming record rose about 30% in one tournament; second halves ran from 22% below to 26% above first halves. Size marquee events at the last record plus a margin, at the peak minute.
- **Name the baseline.** The same match read +544% or +219% depending on whether the baseline was the average evening, the busiest five minutes or the normal busy hour.

One lever Popcorn Pajamas does not use: a UK operator converted more than 60% of a broadcast channel's peak traffic to multicast (World). That only works where the network controls delivery; unicast from caches keeps live at one stream per viewer.

### 4.6 Cloud games in depth

Games break the Snack Bar's planning model, not just its forecast.

- **Rollout.** TV cloud games launched broadly in late 2025 with phones as controllers: 22 titles, 20 countries, still in beta. About a third of members had access by early 2026; monthly active players grew about 11× in nine months from an undisclosed base. The Q3 2026 letter did not mention cloud games, and games staff were among those cut.
- **Where it runs.** The then-CTO said in 2025 that game-streaming appliances would need a different design and were being built. Postings put a cloud-games reliability team inside the Snack Bar managing bare-metal servers and custom hardware at scale; another describes edge caches as the foundation of the cloud gaming platform (Inferred: owned GPU servers at metro or regional sites, not inside ISPs).
- **The unit.** A concurrent session holds a GPU slice, a hardware encoder slot, several CPU threads and about 10 Mbps outbound for its whole length (Inferred from industry norms). It cannot be cached, time-shifted or shared; by contrast, half a rack of Poppers can serve about 500,000 streams. Party games pool up to eight players per session, the one economic mercy.
- **A loss system.** Popcorn Pajamas chose rejection (a "servers are full" message; one session per account) over queueing. At metro scale the Erlang variance term is small, so sizing error is dominated by the peak forecast itself.
- **Censored demand.** Proof of value is measured on admitted sessions only, so under-provisioning justifies itself. Rejection telemetry is the most valuable demand signal the games plan can collect (Inferred).
- **Latency.** About 10 ms of round trip allows roughly 1,000 km of fiber before routing and processing. Party games tolerate more delay than action games, so the game mix decides how many sites are needed (Inferred).

### 4.7 Production

Production demand follows the slate calendar, not a curve. About 200 TB of camera originals per title, up to 700 TB, before visual effects and working copies; 350+ titles on the production toolset, roughly 70 PB (Inferred). A quiet day on set may add little new footage, yet a visual-effects turnover can need thousands of parallel renders in a short window. Camera-file processing runs on CPU in the cloud and in Popcorn Pajamas' own centers; remote artist workstations run on cloud GPUs in local zones near studios. A 12-stage East Coast production campus opens in phases from 2027, a large studio lot is being bought, and generative-AI workflows touched about 300 titles in 2026, mostly in post-production. The 2026 Pajama Set planner posting puts this stream inside the Snack Bar capacity team, turning bandwidth, storage and network signals into forecasts.

### 4.8 Cloud, ML and data

- **Cloud fleet.** Four active regions; about 10× daily swing. Teams have hit shortfalls of about 10,000 instances of one family in one region, covered by fallback families; newer generations are cheaper per unit but scarcer. Services are pre-scaled before known events (one from 25 to 300 instances).
- **GPUs.** Among the fastest-growing and most expensive parts of Popcorn Pajamas' infrastructure. Training runs for weeks on hundreds of GPUs; language models are post-trained on cloud GPUs; the recommendation model reached about one billion parameters and stopped growing because of serving cost.
- **Data.** The warehouse holds more than an exabyte, ingests more than 10 PB a day, and runs 30,000+ stream-processing jobs.

### 4.9 Daytime and mobile features

Video podcasts and a vertical clips feed launched in 2026; podcasts are watched more in daytime and on mobile, and almost half of kids' profiles watch on mobile. These flatten the daily curve and add little to the evening peak, but raise request rates more than bytes (Inferred).

### 4.10 Discontinuities

- **Codecs.** The next open codec was announced for late 2025 with no Popcorn Pajamas deployment date. Each new codec adds a full stored ladder before it saves any bandwidth.
- **Popper generations.** Each changes Gbps and TB per box, so past utilization does not translate one-to-one; 354 → 120 TB per box is the latest break.
- **The paid-sharing step.** About +41M members in 2024, a one-time household step now lapping out of growth comparisons.
- **Access networks.** Faster cable standards and fiber raise peak bitrate per home. Fixed wireless (17M+ US homes) and satellite broadband (12M+ users worldwide) add congested or distant last miles; satellite users enter the internet at a few gateways, often far from the viewer (World).
- **New markets and ad markets.** The ad tier enters 15 more countries from 2027, adding small, very popular objects and request load at new sites.
- **Advertising is not a byte stream.** It reaches the Snack Bar through viewing hours and request load, not as a separate delivery stream.

## 5. Quantitative scale model

Popcorn Pajamas publishes no traffic totals, but its own figures bound them: the fleet's effective serving ceiling is about 3.5–13× the sum of regional evening peaks, and most of that gap is explained by structure rather than waste. Every row is Arithmetic on tagged inputs and should be read as an order of magnitude.

| Quantity | Estimate | Formula and inputs |
| --- | --- | --- |
| Average concurrent streams | About 22M | 97B hours ÷ (181 days × 24 h) |
| Average delivered bitrate | About 2.3 Mbps measured; 4 Mbps upper bound | About 4.1 GB per 4 viewing hours (Third party) |
| Average global delivery | About 45–90 Tbps | 22M streams × 2.3–4 Mbps |
| Regional evening peak factor | About 2.4–3× regional average | Half of viewing in a 4–5 hour evening window |
| Sum of regional evening peaks | About 110–270 Tbps | Average × peak factor; regions peak on their own clocks and capacity is regionally captive, so the sum is what the fleet must cover |
| Marquee live overlay | About 200–390 Tbps gross; net lower by on-demand displacement | 65M × 3–6 Mbps |
| Live overflow beyond embedded caches | About 60–120 Tbps at 70% embedded; about 20–40 Tbps at 90% | Gross overlay × (1 − embedded share) |
| Public IXP port capacity | About 15 Tbps | Tally of first-listed ports (Inferred) |
| Fleet nameplate | About 2.5 Pbps (range 1.5–3.8 across all class mixes) | 11,000 Small Bag × 80 Gbps + 8,000 Big Bucket × 200 Gbps (class split Speculated) |
| **Fleet effective serving ceiling** | **About 0.9–1.4 Pbps** | 11,000 × 20 Gbps + 8,000 × 90–150 Gbps (reported serving rates) |
| Tail-site floor | About 0.22 Pbps effective | About 5,500 small embedded locations × 2 boxes (router-pair rule) × about 20 Gbps (tail sites assumed to hold Compact boxes) |
| **Effective ceiling ÷ sum of peaks** | **About 3.5–13×** (about 2.7–11× outside the tail floor) | 0.94 ÷ 0.27 to 1.42 ÷ 0.11 Pbps |
| Fill per box-night | About 6.5 TB; 120 TB in about 18 nights | 1.2 Gbps × 12 h ÷ 8 |
| Annual bytes delivered | About 190–380 EB | About 190B hours × 1–2 GB/h |
| 120 TB / 200 Gbps Popper bill of materials | About $24K (late 2024) → about $66K (late 2026); flash 59% → 79% of the bill | Priced components, section 6.3 (chassis share Speculated) |
| Cost of capacity | About $122 → $329 per nameplate Gbps; about $203 → $548 per TB | Bill ÷ 200 Gbps; bill ÷ 120 TB |
| All-in deployed cost per Popper | About $125K | More than $1B cumulative ÷ 8,000+ boxes (2022 inputs; includes R&D, logistics, IXP operating cost: not a bill of materials) |
| Transit relief for live | From about $6K per month per sustained 200 Gbps | 200,000 Mbps × about $0.03 per Mbps-month in competitive hubs; more elsewhere (World prices) |
| Games: owned versus cloud | Owned wins above about 15–20% average utilization | Owned: $60K 4-GPU server, 4 years, 24 slices → about $0.07 per slice-hour at 100%; graphics-class cloud GPU about $2.5 per GPU-hour (World: about $2–4 on demand) ÷ 6 slices ≈ $0.42; 0.07 ÷ 0.42 ≈ 17% (excludes power and colocation) |
| Cloud-region evacuation | About +33% load on each survivor | 4 active regions, lose 1: 4 ÷ 3 |

**What the model shows**

1. **The nameplate mystery mostly dissolves.** On spec sheets, nameplate looks about 9–23× the sum of peaks at the assumed class mix (6–35× across all mixes). On Popcorn Pajamas' own serving rates the ratio is about 3.5–13×, and that residual must still hold N+1 within sites (half of each router pair is reserve), the live overlay, generation mix and growth runway. The real stranding question is confined to the PoPs and the largest embedded clusters, not the fleet at large (Inferred).
2. **Regional captivity is the binding geometry.** A Popper in Southeast Asia cannot serve South America's 8 p.m. Planning against the sum of regional peaks is correct, and global-average utilization is a misleading measure by construction.
3. **Overflow cannot ride public exchanges.** Even at 90% embedded, a 65M-stream event spills 20–40 Tbps, above all of Popcorn Pajamas' public ports combined. It must land on private interconnects and transit, or not land (Inferred).
4. **Fill is a scarce shared calendar.** About 6.5 TB per box-night covers steady catalog churn, but a codec or HDR backfill (tens of TB per box) costs 5–10 dedicated nights per box, and launch pre-positioning owns the nights before each premiere. Q4 is when windows are scarcest (scenario S1).
5. **Fleet growth outruns viewing growth.** The fleet grew about 24% a year (about 8,000 in 2022 to nearly 20,000 in 2026) while viewing grew about 2%. Candidate explanations, none yet weighed: per-box storage fell from 354 to 120 TB, so storage sites need about three boxes for the same catalog depth; small sites buy boxes in router pairs; embedding went deeper (live share 70% → 90%); and the 2022 count may differ in scope (Speculated).
6. **Owned GPUs win early.** The games breakeven at about 15–20% utilization explains the Snack Bar bare-metal path. The gating risk is whether demand exists, and section 4.6's censoring biases that signal low.

## 6. Supply and constraints

The Snack Bar can be added to only in whole boxes, inside other companies' buildings, months ahead, and then lives for years; cloud capacity can be added in minutes and released the same day. The plan must decide which demand goes where across clocks four to five orders of magnitude apart.

### 6.1 The estates compared

|  | The Snack Bar embedded (in host networks) | The Snack Bar PoPs (own data centers, IXPs) | The Cloud Provider | Production estate |
| --- | --- | --- | --- | --- |
| Who owns the hardware | Popcorn Pajamas | Popcorn Pajamas | The Cloud Provider | Popcorn Pajamas, probably (described as its own centers; planned by the Snack Bar capacity team) |
| Who provides space, power, cooling | The host network | Popcorn Pajamas or its colocation provider | The Cloud Provider | Not public |
| Unit of supply | One Popper (fixed TB and Gbps) | One Popper; ports at 10G–800G | Instances by family and size; GPU instances | CPU instances; storage; cloud GPU workstations |
| Time to add | Components (months to over a year in 2026) + about 1 week shipping + install within 10 business days + 1–2 weeks fill | Same, plus ports, cross-connects and colocation power | Minutes to hours, if the family is in stock | Minutes in cloud; local pool not public |
| Life | 4–6 years, no hands-on service | 4–6 years | Hourly or reserved | Not public |
| Can it be moved | Not unilaterally; augments are agreed with the host | Yes, within Popcorn Pajamas' footprint | Yes, across regions, within stock | Workloads swarm and yield |
| Price signal | None: barter, no money either way | Capital, colocation rent, power | Metered; reserved and on-demand rates | Mixed |
| What it carries | Most on-demand and about 90% of live | Resilience, overflow, nightly fill, interconnect | Control plane, manifests, member services, live origin, encoding, data, ML | Camera-file ingest, processing, rendering, artist workstations |

### 6.2 Hard constraints

1. **Lumpy supply.** Capacity comes in Poppers, not percentages; two classes force a storage-heavy or throughput-heavy choice per site.
2. **Three coupled limits per box.** Storage (TB), serving (Gbps) and fill (about 1.2 Gbps inbound). More catalog means more churn, which means more fill; adding storage without fill buys less than it appears to (Inferred).
3. **Fill window.** 12 hours by default, editable per site; launches, churn, codec backfills and refresh re-fills compete for the same nights.
4. **Shed threshold and trigger.** Sites shed at capacity; target 50–75% at peak hour; augment at a forecast 75% within 12–18 months.
5. **Redundancy pattern.** One Popper per router, active/active, no multi-chassis LAG: resilience doubles box count at small sites; failover options are a named sizing input whose amount is not published.
6. **Host limits.** Rack space, power (about 250–700 W per Popper; supplies rated 750 W; the 2021 storage tier drew 670 W), cooling, ports and the host's own refresh cycle. Popcorn Pajamas cannot relieve them alone (Inferred).
7. **Interconnect.** 100+ IXPs and private interconnects at 10G–800G, with timely capacity upgrades required of both sides.
8. **Hardware life.** Four to six years of no-touch operation makes every purchase a multi-year commitment and every over-buy a multi-year mistake.
9. **Live admission.** Nominal-bitrate reservation makes live consume more planned capacity than measured traffic shows.
10. **Request handling.** Starts, manifests and live-origin requests run in the cloud with their own ceilings; both public peak failures broke here (Press + Inferred).
11. **GPU contention.** Production workstations, ML training and inference, and cloud games draw on scarce GPU supply.
12. **Planning capacity.** Postings ask for tooling that cuts time spent on modeling; modeling time is itself scarce (Inferred).

### 6.3 The 2026 component shock

AI data-center demand has absorbed the supply of exactly the parts Poppers are built from (World). The drive class Poppers use (61.44 TB-class enterprise QLC flash) went from about $60–65 per TB at launch (2024) to several hundred dollars per TB at retail by 2026; the 122.88 TB class listed at about $37K (about $300 per TB) in February 2026, roughly triple its price nine months earlier (World: dated listings).

| Component | 2025–2026 movement (World) | Lead time or availability (World) |
| --- | --- | --- |
| Enterprise SSD (contract) | About +35% in H2 2025; about +235% cumulative across 2026; +23–28% quarter on quarter in Q4 2026 | Year-long delays reported for high-capacity drives (late 2025); one memory maker says more than 75% of its 2027 memory and storage output is already committed |
| NAND flash (contract) | Forecast +55–60% (Q1 2026) and +70–75% (Q2 2026) quarter on quarter | Little new fab relief expected soon |
| Server DRAM (contract) | About +64% in H2 2025; a 64 GB server module from about $450 (Q4 2025) to over $900 (Q1 2026) | Undersupplied; multi-year agreements that cap price rises appearing |
| Hard drives | Retail and NAS prices +46% on average (Sep 2025–Jan 2026) | One maker sold out for 2026, agreements into 2027–28 |
| 800G-and-above optics | Shipments forecast at 2.6× in 2026 | Key laser lead times extend beyond 2027 |
| Optical fiber | Spot prices projected at 2.8–5× 2025 levels | Shortage expected to at least 2028 |
| AI servers | Reported to rise more than 15% for early-2027 shipments | Allocation-driven |
| Cloud GPU instances | Training-class GPUs roughly $3–4 per GPU-hour on demand at specialist clouds and $7–12 at the largest clouds; graphics-class instances cost less | Newest generations in a limited set of regions |

The priced bill of materials for a 120 TB / 200 Gbps box rose from about $24K to about $66K, flash from 59% to 79% of it (Arithmetic at assumed flash prices of about $120 per TB in late 2024 and about $430 per TB in late 2026, a 3.6× rise; chassis figures Speculated): about 2.7× in two years with no spec change.

What it means (Inferred):

- **Cost per terabyte reversed.** Each generation is no longer cheaper per TB. Storage is now the scarce dimension on two axes, price and chassis (354 → 120 TB), while throughput is not.
- **Lead time now sets the horizon.** Component lead times of many months to over a year, plus 4–5 weeks to ship, install and fill, consume most or all of the 12–18-month augment window. Orders must start earlier or rely on buffer stock.
- **Refresh becomes a financial option.** Long-term agreements are calls on future supply; life extension and decommission scheduling are abandonment options; buying ahead is exercising early.
- **Efficiency substitutes for hardware, with a catch.** A codec or software gain postpones purchases, but each new codec first adds stored copies to the expensive dimension.

### 6.4 The three-party augment cycle

An augment is a negotiation chain, not a purchase order: **Capacity Planning** (forecast crosses 75% within 12–18 months) → **the host-relations team** (owns the host conversation and also starts augments from its own monitoring) → **host facilities** (space, power, ports, change windows) → **Business Operations** (procurement) → **Deployment** (install within 10 business days) → **fill** (1–2 weeks pre-fill or about 18 nights in place). Component lead times now stack on top of this organizational cycle; the 12–18-month trigger was calibrated to a world where hardware was the fast part. No public Popper procurement lead time exists (Unknown); host-side accounts describe days to months from application to shipment in normal times (Press).

### 6.5 Cloud, GPU and interconnect supply

- **The Cloud Provider.** Reserved capacity for stateful services, reserved plus on-demand for stateless; the documented 10,000-instance shortfall was handled by fallback families. Newer generations are cheaper but scarcer; GPU instances exist in about 10 regions.
- **GPUs.** Popcorn Pajamas' own GPU fleet is among the fastest-growing and most expensive parts of its infrastructure. Training, language-model post-training, production workstations and any games cloud burst draw on it.
- **Interconnect.** Exchange port economics reward speed: at a large European exchange about €65 per Gbps-month at 10G, €32 at 100G and €16.5 at 400G; 400G ports there grew 65% in 2025 (World).
- **Transit** at 100G fell to about $0.03 per Mbps-month in competitive hubs (2026), higher elsewhere, cheap enough to be a realistic live-event relief valve, but only where ports already exist (World).

### 6.6 Colocation and power

- **Colocation is nearly full.** Vacancy in the top North American markets hit a record low in 2026, as low as 0.3% in the largest. Rents run about $165–265 per kW-month in major US and European hubs and about $400 in Singapore (World).
- **Grids are the gate.** Grid connections for new data centers can take up to a decade in Europe's main hubs (Frankfurt, London, Amsterdam, Paris, Dublin); the Netherlands bars new hyperscale sites outside two locations; waits of three years or more are common elsewhere (World).
- Popcorn Pajamas' PoPs and any games build-out price against this market.

### 6.7 Organizational constraints

- **One augment, six to eight teams.** Planning recommends; Business Operations procures; Deployment installs; host relations owns the host; Finance & Strategy sets the envelope; Control Plane decides how much nameplate is usable. Who selects the Popper class is not attributed anywhere public.
- **Seats split by stream and horizon** (edge demand, fleet refresh, production, and earlier live and network seats); who arbitrates between them is not public.
- **A flat structure.** No visible manager tier sits between the senior individual planners and the Director, so a few people carry a lot of context (Inferred).

### 6.8 What is not public

Popper procurement lead time; Popper unit cost, depreciation, and cost per Gbps or per TB; refresh cadence; the Snack Bar peak-to-average ratios; the size of the failover reserve; the class and generation mix of the installed fleet; any capacity unit that compares storage, throughput and fill, or one demand stream against another.

## 7. External constraints

The free-cache model works because host networks accept Poppers and nobody prices the exchange. Both conditions are now contested: regulators in several regions are debating who pays for delivery, US rules no longer require equal carriage, and ISPs are consolidating (World).

### 7.1 The host relationship as a barter market

The Snack Bar's embedded tier is a barter market with no posted price. Popcorn Pajamas pays in hardware, free replacement parts and offload (70–90% of cacheable traffic); hosts pay in power, space, ports and change-window labor. Barter clears only while both sides' valuations stay aligned, and three forces now misalign them (Inferred):

- Live events raise the host's peak-hour cost for content that carries none of the host's revenue.
- Flash inflation raises Popcorn Pajamas' cost of the "currency" it pays in.
- Regulators keep proposing to force a monetary price into the exchange.

Precedents bound the outcomes. Popcorn Pajamas' own dispute with a large Korean ISP settled commercially in 2023 through partnership and bundling, a side payment in kind (Reported). A German court ordered a large social-media company in 2024 to pay a German incumbent carrier about €20M after it ended paid interconnection and kept sending traffic, and an appeals court upheld the claim in 2026: a paid relationship cannot be made free unilaterally. Consolidation concentrates the counterparty: a merger of two large US cable operators (closed in 2026) puts about 38M customers behind one negotiation.

### 7.2 Who pays for delivery, by jurisdiction

| Jurisdiction | Status (Oct 2026, World) | Why it matters for capacity |
| --- | --- | --- |
| United States | Federal net-neutrality rules struck down (Sixth Circuit, January 2025); Popcorn Pajamas' annual report lists ISP access charges as a risk | ISPs may legally refuse caches or charge for interconnection; delivery quality is now purely contractual |
| European Union | Digital Networks Act proposed January 2026: no network fees, but a voluntary conciliation mechanism between networks and content providers; Council and Parliament each still forming their positions | Hosting terms could become a supervised negotiation |
| South Korea | Popcorn Pajamas' dispute with a large ISP settled commercially (2023, Reported); network-fee bills introduced but not passed; listed as a trade barrier in the US 2026 trade-estimate report | Template for trading caches and bundles for peace |
| Germany | Incumbent carrier v social-media company: about €20M ordered (2024), upheld on appeal (2026) | Paid interconnection cannot be turned into free peering one-sidedly |
| Brazil | The telco association proposed per-GB fees once a platform exceeds 5% of national traffic (2024); the regulator's consultation ran March–June 2026, no decision | A per-GB price would turn bytes into cost directly |
| India | Telcos asked in 2025 for a levy on streaming revenue; no decision | Revenue-based, not traffic-based |
| United Kingdom | The regulator declined to recommend network fees (2023) and allowed most zero-rating | Low near-term risk |

The two sides disagree on the economics (World). European telco associations say hosting caches costs networks money, the savings are insignificant and hosting several providers' caches is hard to run. A study commissioned by content companies says caching and peering save networks $5–6.4B a year, A separate study Popcorn Pajamas commissioned put its own caches' 2021 savings to networks at about $1B or more (Reported).

### 7.3 Market access and data rules

- **Zero-capacity markets.** Five markets, including the largest.
- **Licensing regimes.** A Southeast Asian country requires a licence and a local domain or address; a transcontinental country requires a local entity, a revenue levy and fast takedowns. These shape the control plane and data handling more than where video sits (Inferred).
- **Data localization.** India's data-protection rules take full effect around 2027 and allow restrictions on exporting designated data categories, which bears on telemetry and member data in the cloud, not video bytes (World + Inferred).
- **When hardware cannot be shipped.** After deliveries stopped in 2022, a search company's embedded caches in Russia went more than two years without refresh: embedded capacity decays where hardware cannot reach (World).
- **Export controls** target advanced AI chips; exposure for video Poppers is low, but GPU game servers in some countries could need licences (Inferred).

### 7.4 Trade and tariffs

- The Supreme Court struck down broad US emergency tariffs in February 2026. A temporary 10% global tariff followed until July, then country tariffs of 10–12.5% under a different trade statute (World).
- A 25% tariff on advanced AI chips has applied since January 2026, with exemptions that include US data centers adding more than 100 MW of AI load. A server-inclusive phase is under consideration but not expected before 2027 (World).
- Planning assumption: a 10–25% hardware cost risk on US-bound refreshes, on top of the flash shock, which favors buying ahead or extending life (Inferred).

### 7.5 The networks underneath

- **Consolidation.** The cable merger (about 37–38M customers, closed August 2026) and a telco fiber acquisition (about 30M fiber passings, January 2026): fewer, larger negotiations, and cache placement to revisit as networks integrate (World + Inferred).
- **Access upgrades.** Faster cable standards now reach millions of homes and fiber keeps expanding; both raise peak bitrate per home.
- **Fixed wireless.** 17M+ US connections (about 14% of home broadband), congested daily at peak, median latency 46–69 ms (World).
- **Satellite broadband.** 12M+ users worldwide of the largest operator enter the internet at a few gateways, often far from the viewer; cache performance depends on gateway location. No evidence of Poppers inside a satellite network. Placement follows where traffic enters, not where viewers sit.
- **Subsea cables.** Red Sea cuts in 2024 forced rerouting of about a quarter of Asia–Europe–Middle East traffic, with repairs taking months; more cuts followed in 2025, and the Baltic saw repeated incidents in 2023–25 (World). Pre-positioned content shields viewers; fill, long-tail misses and live events in those regions are exposed (Inferred).

### 7.6 Energy and climate commitments

- Popcorn Pajamas targets a 46% absolute cut in scope 1 and 2 emissions by 2030 against 2019 (19% achieved by 2025) and reports 100% renewable electricity; colocated node electricity still grows about 20% a year.
- Data centers used about 415 TWh worldwide in 2024, projected to roughly double by 2030; about a fifth of planned projects risk grid delays; the largest US grid operator cleared its 2027–28 capacity auction at its price cap (World).
- Energy is a soft constraint on Popcorn Pajamas directly and a harder one on the hosts and colocation providers it depends on, which is exactly what fee advocates price (Inferred).

## 8. The planning organization as part of the problem

The way Popcorn Pajamas organizes planning is part of the problem space, not a backdrop to it. Its capacity function grew a seat each time the problem grew a dimension, and the seams between those seats are where plans break. Everything here is read from the company's public job postings and talks (Reported/Press) and, where marked, inferred.

### 8.1 The planning team today

| Seat | Owns | What the role reveals about the problem |
| --- | --- | --- |
| Director, Capacity Planning | Leads the team; converts Finance's demand forecasts into annual plans spanning Poppers, data centers, network hardware and the backbone; utilization reporting; tooling | The plan still starts from a Finance forecast, not from declared demand |
| Pajama Set capacity planner (staff level) | One demand stream end to end; 5+ year forecasts; what-ifs; augment orchestration; tooling requirements; pushing back on asks | Each stream needs an owner who can say no; risk is shortage or excess |
| Fleet planner (senior level) | Multi-year refresh, end of life, total cost of ownership; procurement planning with Business Operations; fleet health | The installed fleet is its own planning problem, with age and failure as inputs |
| Modeling planner (mid level) | Capacity models across product areas; back-testing; automation for the other planners | Modeling time is scarce enough to justify a seat |

The team sits **inside the edge partnerships and planning group**, beside the host-relationship organization, not beside Engineering. The augment negotiation is the organizing reality. By 2026 the postings describe the work as infrastructure capacity planning, not just capacity planning, and the charter covers owned infrastructure for members and internal customers.

### 8.2 How the seats evolved, newest first

| Period | Seat | Scope | What changed |
| --- | --- | --- | --- |
| About 2026 | Director, Pajama Set planner, fleet planner, modeling planner | See 8.1 | A seat per stream, per lifecycle and for modeling toil; internal customers in the charter |
| 2024 | Infrastructure sourcing planner | Space, power, cross-connects and connectivity across backbone, data centers, production locations and offices; vendor requests | Supply sourcing split from demand planning |
| About 2024 | Live capacity planner | Same backbone scope with live only in the title | Live absorbed as an overlay, not yet a practice |
| 2023 | Network capacity planner | Network hardware and backbone; yearly plans; Finance forecast as input | Host-network plans move out of the seat to host relations |
| 2019–2021 | Generalist capacity planner | Servers, backbone and egress; yearly host plans; Finance forecast → plans; capacity that arrives on time | One person, Finance-led, spreadsheets and dashboards |

Two drifts matter. First, the forecast input is moving from Finance's demand forecast (2019–2024) toward demand signals from products and internal customers (2026), yet the Director's remit still says Finance: the transition is live, not done. Second, the seats sit directly under a senior Director with no visible manager tier between. Popcorn Pajamas treats capacity planning as a senior-executive problem, staffed by a few senior individuals (Inferred).

### 8.3 The seats around it

| Seat | What it owns | Where it touches the plan |
| --- | --- | --- |
| the host-relations team | Host relationships, peering and cache deals; monitors utilization and works with networks to augment capacity; sends forecasts to hosts | Owns the augment conversation planners trigger |
| Host onboarding | Day-to-day technical contact for hosts; new-site onboarding | Turns approved augments into installed sites |
| Edge finance and strategy | Business cases, long-term investment goals, efficiency initiatives; forecasting tools with data science | Sets the envelope; co-owns the investment story |
| Edge data science | Measurement and experimentation where A/B tests are not always possible | Evidence for unit and efficiency decisions |
| Steering and placement engineering | Steering, content placement, algorithms for hardware utilization and cost; an open question on sharing capacity between games | Decides how much nameplate is usable |
| Hardware engineering | Next-generation Popper architecture, offloads, component evaluation | Sets Gbps and TB per box: the conversion ratios |
| Deployment engineering | Installs at sites; also builds office and creative-space networks | Lead time from approval to service |
| Production compute and storage | Internal platform for productions: compute, disk and network across global sites; petabytes of media | An internal customer with its own stream |
| Game Night infrastructure lead | Significant hardware investment for very large concurrent user scale; capital accountability; edge economics and capacity planning as preferred skills | A new stream on owned hardware inside the Snack Bar |
| Cloud compute capacity | Services that keep capacity always available; hundreds of millions of dollars of cloud compute a year | The cloud side of placement |
| Infrastructure efficiency analytics | Core metrics for cost, usage and efficiency of cloud and AI infrastructure | The cost model the plan needs |
| Live reliability and testing | Cloud traffic at event start, the thundering herd, load and failure testing | Owns request-path headroom (P4) |

### 8.4 What the language reveals

- **Both-sided risk.** Shortage or excess is the risk to manage, not shortage alone.
- **Lateness.** Timely arrival appears in every version from 2019 to 2026.
- **Modeling toil.** The modeling seat exists to automate the planners' pain points; the Pajama Set seat writes tooling requirements to cut time spent on modeling.
- **Unpriced asks.** Planners must ask whether the benefits justify the effort and spend: internal requests arrive without cost discipline.
- **No common unit.** Planners convert forecasts across many products with no stated currency.
- **Contested standards.** The fleet seat must drive alignment on standards, refresh policy and end of life.
- **Speed over polish.** Fast, iterative delivery is preferred to late perfection.
- **New tools.** Both 2026 planning seats ask for fluency with AI tools alongside data skills.
- **Unsettled economics.** Cloud games are still working toward sustainable unit economics.

### 8.5 How the wider field organizes the same work

Across senior planning roles at hyperscalers, CDNs, streamers and AI-compute firms (2023–2026), a common pattern shows up (World, from public postings and papers):

- **A standard seat map:** demand planning, supply planning, fleet allocation, network, data-center space and power, cost and cloud financial management, planning tooling, integrated planning. Popcorn Pajamas' seats cover demand (per stream), fleet, sourcing and tooling; integrated planning and cloud cost sit elsewhere.
- **A shared vocabulary:** plan of record, sales and operations planning, buffer targets, stockout versus holding cost, forecast accuracy, plan attainment, supply coverage, inventory exposure.
- **Horizons:** 0–24 months for regional delivery, 3 years for long-lead assets, 5 for AI infrastructure, up to 10 for integrated plans; cadences from weekly to annual.
- **Governance:** one source of truth for demand, decision rights in executive allocation forums, prioritization rules, and efficiency stated in money.
- **Optimization:** some operators publish planning recast as mixed-integer optimization over millions of servers, moving from bottom-up manual work to top-down automated plans.
- **Embedding is no longer unique:** other large streamers and CDNs now place caches inside ISPs, often beside multi-CDN delivery. What remains distinctive at Popcorn Pajamas is one team owning edge demand, fleet lifecycle and production infrastructure together.
- **Live-heavy peers are event-driven:** they review upcoming events against capacity, set concurrency targets, run readiness reviews, and buy from several CDNs rather than owning.

Read against this pattern, Popcorn Pajamas' seats are in place, while the field's shared vocabulary, a stated plan of record and measured forecast accuracy don't appear in its public material (Inferred). That may say more about what companies publish than about how they plan.

### 8.6 What the organization adds to the problem

- **Seams are where plans break.** One augment crosses six to eight teams; the seats are fine, the hand-offs are not.
- **The forecast is moving.** P11 is a live transition from Finance-led to signal-led, not a static tension.
- **Planning capacity is itself scarce.** P12 rests directly on the modeling seat and the tooling requirement.
- **Games and production are owned-hardware streams,** confirmed by a director-level games seat with capital accountability and a production planner inside the capacity team.
- **Authority is borrowed.** The planners recommend; others buy, install and host. The plan holds only as far as its agreements with those teams hold.
- **The vocabulary gap is a test.** A formal plan of record, buffer targets and forecast-accuracy measures would answer several open questions; their absence from public view says little either way, but they would be cheap signals to watch (Speculated).

## 9. Problem decomposition

The overall problem breaks into sixteen decision-shaped problems in four clusters: demand problems generate asks, supply problems set costs and lead times, allocation problems clear the two, and governance sits above all of it. The measures of success in section 12 below apply across them.

### P1. Size a site when the unit has one dimension and the box has three

- **Decision (owner).** How many Poppers, of which class, at each site (Capacity Planning recommends; class selection unattributed).
- **Inputs.** Peak-hour Gbps by site; catalog size and churn; fill window; failover options; host limits; health- and content-miss rates.
- **Horizon.** 12–18 months ahead of the augment.
- **Why hard.** Site capacity counts throughput only; a site at 60% can still shed content if the catalog does not fit or fill cannot finish. Per-box storage shrank 354 → 120 TB while flash became the dearest part of the bill, and redundancy buys boxes in pairs.
- **Links.** P9 (what a box costs), P16 (what fill allows), P10.

### P2. Bring inorganic demand into a plan built for a smooth curve

- **Decision (owner).** How much to commit, where and when, for demand with no history (per-stream planners).
- **Inputs.** Launch and rights calendar; declared requirements in priced units; reference classes; early actuals.
- **Horizon.** A launch is a rumor at annual planning, a date at quarterly planning and a configuration weeks out.
- **Why hard.** The decision precedes the data. A multiplier ("double it") is last year plus a percentage in disguise; the alternative is to specify demand in priced units, or name the reference class and its differences.
- **Links.** Feeds P3, P7, P8.

### P3. Provision live events on shared, partner-hosted hardware

- **Decision (owner).** Reserve per event, per region, per host network (Capacity Planning + host relations).
- **Inputs.** Rights calendar and event tier; predicted peak concurrent streams by region and host; nominal bitrate ladder; the same evening's on-demand peak; forecasts shared with hosts.
- **Horizon.** Years for the calendar (football to 2029–30, wrestling to at least the early-2030 opt-out point), weeks for the reservation, minutes during the event.
- **Why hard.** Content cannot be pre-filled; about 90% lands on host-housed Poppers; the record (72.5M) climbs in steps; published audience metrics are not the unit capacity needs.
- **Links.** P2 applied to live; drives P4, P13, P15; gated by P6; long-run load set by P14.

### P4. Hold headroom on the request path, not only on bandwidth

- **Decision (owner).** Starts per second, manifest, origin and ad-event ceilings each event and launch must absorb (live reliability and cloud teams).
- **Inputs.** Join curves in the first minutes; retry behavior; device mix; ad-break timing; origin limits.
- **Horizon.** Per event and launch; load tests weeks ahead.
- **Why hard.** Both public failures broke here while links had room; retries multiply load; byte substitution does not relieve it; the capacity lives in the cloud under different owners.
- **Links.** Driven by P3; the capacity sits in the cloud estate (P5).

### P5. Decide what belongs on the Snack Bar, the cloud or the production estate

- **Decision (owner).** Baseline versus peak per stream across estates (Capacity Planning + Engineering).
- **Inputs.** Load shape, latency need, data gravity, unit cost per estate, lead time, stock.
- **Horizon.** Multi-year for owned; continuous for cloud.
- **Why hard.** Owned is cheaper but slow and lumpy; cloud is fast but metered and sometimes out of stock. Games' owned breakeven is only about 15–20% utilization; production avoids a fixed local pool, yet its storage and ingest are planned like owned infrastructure.
- **Links.** Fed by P7; feeds P8.

### P6. Plan capacity that sits in networks Popcorn Pajamas does not control

- **Decision (owner).** Which host sites to augment, when to ask, what to concede, and the fallback if a host refuses or asks to be paid (host relations, with Planning triggers).
- **Inputs.** Site forecasts against the 75% trigger; host power, space, ports and refresh cycles; interconnect plans; regulatory status.
- **Horizon.** 12–18 months per augment; years for regulation.
- **Why hard.** No price signal in a barter under repricing pressure; consolidation concentrates counterparties; fee proposals are live in four or more jurisdictions; capacity cannot simply follow demand.
- **Links.** Gates execution of P1, P3, P10.

### P7. Size games under censored demand

- **Decision (owner).** Servers, sites, admission policy and rejection telemetry (Game Night infrastructure + Planning).
- **Inputs.** Monthly active players, sessions per player, peak concurrency, latency budget by game type, rejection rate, GPU prices and lead times.
- **Horizon.** Staged; spend tied to demonstrated value.
- **Why hard.** The unit (a session-slice in a loss system) is clear; the demand signal is censored by the admission control that protects quality; sessions likely peak with video evenings; the same GPUs are wanted by production and ML.
- **Links.** Feeds P5; competes with production and ML for GPUs in P8.

### P8. Compare streams that compete for the same capital

- **Decision (owner).** Which stream gets the next capital dollar (Director + Finance & Strategy).
- **Inputs.** Each stream's requirements, value, and risk of shortage and excess.
- **Horizon.** Annual budget; quarterly reallocation.
- **Why hard.** No published unit compares TB, Gbps, fill, a live event, a production burst or a game session; streams covary; and approval is not allocation: an approved number still has to become hardware at sites.
- **Links.** Fed by P5; draws on every stream's asks; P11 sets the numbers it compares.

### P9. Absorb the component shock

- **Decision (owner).** Buy ahead, extend life, change the class mix, or lean on efficiency; long-term agreement terms (fleet planner + Business Operations).
- **Inputs.** Flash, DRAM, optics and GPU prices and lead times; fleet age and failure rates; codec and software gains; tariff exposure.
- **Horizon.** Component orders 10–15+ months ahead.
- **Why hard.** Flash rose from 59% to 79% of the bill and the box about 2.7×; lead times now match the augment window; the cheapest efficiency lever (a codec) first adds stored copies. Best treated as a portfolio of options.
- **Links.** Shares the refresh decision with P10; sets what a box costs in P1.

### P10. Manage the installed fleet and its long tail

- **Decision (owner).** Refresh, rebalance, decommission or hold across nearly 20,000 boxes, most at minimum-size sites (fleet planner).
- **Inputs.** Age, failure rates, utilization by site, generation mix, total cost of ownership, failover policy.
- **Horizon.** 4–6-year life; decommission scheduling open to hosts since mid-2026.
- **Why hard.** At a two-box site the next augment doubles the site, because boxes come in router pairs; deliberate reserve and stranded capacity look identical until needed; excess is named as a risk alongside shortage.
- **Links.** P9 (refresh), gated by P6 (host agreement).

### P11. Govern the forecast

- **Decision (owner).** The number, its error band per stream and horizon (P50/P90), and the percentile each commitment buys to (Director; Finance envelope).
- **Inputs.** Top-down Finance forecast; bottom-up bandwidth, storage and network signals from products and internal customers.
- **Horizon.** 5+ years for strategy; one to two quarters for commitments.
- **Why hard.** The two disagree by construction; product changes keep invalidating the bottom-up side; public telemetry is being switched off; the paid-sharing step is lapping out.
- **Links.** Feeds every other problem.

### P12. Plan the planners

- **Decision (owner).** Tooling, modeling capacity, seat design and arbitration between seats (Director).
- **Inputs.** Seats split by stream and horizon; tooling maturity; modeling hours per cycle.
- **Horizon.** Continuous.
- **Why hard.** The postings ask for tooling that cuts time spent on modeling; they list spreadsheet, query and dashboard skills, while the problem has outgrown any one person's model; there is no visible manager tier.
- **Links.** Sets the capacity of the planning system behind every other problem.

### P13. Size reserve for each failure domain

- **Decision (owner).** N+k per site pair, metro, host network, route-reflector city, interconnect corridor and cloud region, and which streams may borrow it (Planning + reliability engineering).
- **Inputs.** Failure rates; host outages; subsea and backbone risk; region-evacuation drills; the live calendar.
- **Horizon.** Set annually, tested continuously.
- **Why hard.** Reserve looks stranded until the day it is not; losing one of four regions adds about 33% to each survivor, and a live peak can coincide with a failure.
- **Links.** Driven by P3; gains a network layer through P15.

### P14. Price the rights calendar

- **Decision (owner).** The marginal capacity cost fed into live-rights and slate decisions (Finance & Strategy, with Planning input).
- **Inputs.** Rights terms and dates; event tiers; marginal cost per peak stream by region; reference classes from rivals.
- **Horizon.** Years ahead of the event.
- **Why hard.** Rights signed into the 2030s are capacity commitments made outside the capacity organization; pushing back on asks is the only published lever.
- **Links.** Sets P3's long-run load.

### P15. Plan backbone and interconnect

- **Decision (owner).** Route-reflector architecture, exchange and private-interconnect ports, overflow and transit contracts (Network Engineering + Planning).
- **Inputs.** Overflow scenarios per marquee event; port inventory by exchange; transit and private-interconnect terms; optics lead times; production transfer calendar.
- **Horizon.** Quarters to years.
- **Why hard.** Thousands of peer networks and 20,000+ sessions; one marquee event's overflow can exceed all public ports; high-speed optics are on allocation, with laser shortages beyond 2027; Pajama Set bytes ride the same backbone.
- **Links.** Driven by P3; shares the backbone with production (P5).

### P16. Schedule the fill calendar

- **Decision (owner).** Allocate box-nights across launches, churn, backfills and refresh re-fills (Control Plane + Planning).
- **Inputs.** Release calendar; churn by site; backfill plans (codecs, HDR); refresh re-fills; fill windows per site.
- **Horizon.** Nightly to quarterly.
- **Why hard.** About 6.5 TB per box-night; Q4 is triple-booked; a codec backfill costs 5–10 nights per box; windows are editable per site since mid-2026, so the calendar is now a negotiated resource.
- **Links.** Sets what fill allows in P1; collides with launches (P2) in Q4.

**Dependency spine.** P11 feeds everything. P9 and P10 share the refresh decision. P1 depends on P9 (what a box costs) and P16 (what fill allows). P3 drives P4, P15 and P13. P7 feeds P5, which feeds P8. P6 gates the execution of P1, P3 and P10. P14 sets P3's long-run load. P12 sets the capacity of the planning system itself.

## 10. Cross-domain causal chains

Twenty chains connect markets, rights, networks and the organization to concrete capacity consequences. The tiers in brackets mark the evidence along each chain; a chain is only as strong as its weakest link.

**Supply and cost**

1. AI data-center demand → NAND allocation → enterprise flash from about $65 per TB at launch to several hundred dollars per TB → Popper bill about 2.7× → refresh deferral → older fleet, more watts per Gbps → host power limits bind sooner (World → Arithmetic → Inferred).
2. AI demand → newer cloud instance families scarce → fallback mixes → pre-scaling for live events planned against uncertain instance supply (Reported → Inferred).
3. AI demand → GPU scarcity → production rendering pushed to CPU to free up GPU instances → the same pool games and ML training draw on → P8 arbitration now includes GPUs (Reported → Inferred).
4. Flash price step → storage-heavy class uneconomic → catalog-fit pressure on 120 TB boxes → more content misses at tail sites → more shed to PoPs → exchange and private-interconnect port demand → high-speed optics on allocation (Arithmetic → World → Inferred).
5. New codec family → one-third less bandwidth per adopted stream → but a full extra stored ladder per title → backfill of 5–10 nights per box → collides with Q4 launch pre-positioning → backfills migrate to Q1–Q2 (Reported → Arithmetic → Speculated).

**Live and the request path**

6. Live rights signed to 2029–30 → dates known, sizes unknown → host-level forecasts shared ahead → embedded share 70% → 90% → live capacity is mostly other people's buildings → P6 governs P3 (Reported → Third party → Inferred).
7. Marquee event joins in minutes → manifest and start surge + retries → request-path failure while links idle → headroom must be bought in the cloud, not in Gbps (Press → Inferred).
8. VBR saves bytes → quiet scenes read as spare capacity → over-admission risk → admission reserves nominal bitrate → live books more than it uses → utilization measures understate live load (Reported).
9. A viewer switches to a live event → on-demand bytes fall up to 27% on the same wire → net byte peak well below gross → but ad-break fetches synchronize → a request spike at each break → ads pipeline re-architecture (Third party → Reported).
10. Christmas Day: football doubleheader + holiday on-demand peak + a tent-pole season finale → one UK ISP's busiest day ever and the biggest US streaming day on record → Q4 stacking is observed, not hypothetical (Third party + World).
11. Rivals' records (72.5M, single market) → reference class for Popcorn Pajamas' marquee tier moves up → the 2027 women's tournament and any future men's-tournament bid imply peaks beyond anything Popcorn Pajamas has served → P14's pricing question becomes acute (World → Speculated).

**Demand signals and games**

12. Password-sharing crackdown → +41M members in 2024 → a one-time step → 2025–26 growth optics soften → investor concern about view hours → pressure for live and games bets → more inorganic demand (Reported → Inferred).
13. Member counts and semi-annual engagement reports discontinued → external demand telemetry thins → internal forecasting burden rises → a modeling seat and an AI-tools requirement (Reported → Inferred).
14. Games admission control → rejected sessions missing from value metrics → staged investment reads demand as smaller → under-build → more rejections: a censoring loop (Inferred).
15. Games need latency → metro GPU sites → colocation at record-low vacancy and grid waits → site acquisition competes with AI build-outs → games footprint pushed toward latency-tolerant genres (World → Inferred).

**Hosts, policy and networks**

16. A cable merger (about 37–38M customers) → fewer, bigger counterparties → one negotiation covers a large share of US broadband homes → barter terms become strategic risk → P6 escalates from operations to the board (World → Inferred).
17. Net-neutrality rules struck down → hosting and interconnection purely contractual → fee precedents (the Korean bundle, the German ruling) → a path where delivery acquires a per-GB price → placement flips to fee-weighted bytes (World → Inferred).
18. Route-reflector redesign → eight cities become control-plane concentration points → regional BGP health is a failure domain alongside sites and regions → P13 gains a network layer (Reported → Inferred).

**Production**

19. Slate growth × 200–700 TB per title → ingest centers on the Snack Bar backbone → Pajama Set bytes and member bytes share transport → backbone planning (P15) inherits a calendar-driven stream (Reported/Press → Inferred).
20. A studio-lot purchase and a new production campus → owned production real estate grows → more on-lot production compute plausible → the Pajama Set planner's 5+-year horizon makes sense only if owned production infrastructure keeps growing (Press → Speculated).

## 11. Scenarios for 2027

Six stress scenarios show what breaks first and what a plan must already hold. In most of them the first failure is not bandwidth: it is the request path, a negotiation, or the planning objective itself (Speculated throughout, built on the tagged facts above).

### S1. Q4 pileup

- **Setup.** The Christmas doubleheader, a tent-pole premiere and a final-week football game within days, during a flash shortage that has slipped augments.
- **Propagation.** Live reserve, launch fill and holiday on-demand compete for the same sites and the same nights.
- **Breaks first.** The request path (starts, manifests, ad events); then shedding at minimum-size tail sites.
- **The plan must hold.** A tested starts-per-second ceiling above the join curve; the fill calendar cleared by November; transit overflow contracts pre-signed; VBR on.
- **Early indicators.** November fill-completion slips; health-miss rate on rehearsal events; augment backlog age.

### S2. A mega-host prices hosting

- **Setup.** A post-merger US ISP demands payment or freezes Popper adds at its 2027 renewal.
- **Propagation.** A large share of US broadband homes sit behind one counterparty; live there rides private interconnects.
- **Breaks first.** The augment pipeline freezes; live events lean on private interconnect and transit; quality erodes for both sides.
- **The plan must hold.** A costed fallback: private interconnect and exchange build-out, transit contracts, a bundling side-payment option (the Korean pattern), with scenario economics computed before talks open.
- **Early indicators.** Negotiation tone; augment approval latency at that host; regulatory docket language.

### S3. Flash stays about 3× into 2028, plus server tariffs

- **Setup.** The bill of materials stays 2.7–3×; refresh waves age past six years.
- **Breaks first.** Failure rates and watts per Gbps rise; storage per site stops tracking catalog growth.
- **The plan must hold.** A life-extension policy with failure-rate gates; price caps in long-term agreements; a class rebalance toward throughput boxes with storage pooled at PoPs.
- **Early indicators.** Drive failure trend; months of agreement coverage; dollars per TB on renewals.

### S4. Games 10×

- **Setup.** A hit title multiplies monthly active players into the summer tournament season.
- **Propagation.** Session peaks stack on the evening video peak at shared metros.
- **Breaks first.** Rejections spike, invisible outside; then GPU procurement on allocation.
- **The plan must hold.** Rejection telemetry as a first-class demand signal; a cloud-burst bridge despite about 6× unit cost; pre-agreed metro colocation options.
- **Early indicators.** Rejection rate by hour; session abandonment; GPU lead-time quotes.

### S5. A cloud region degrades during a marquee event

- **Setup.** One of four active regions fails mid-event.
- **Propagation.** Survivors absorb about +33% baseline plus event control-plane load; the live origin is dual-region, but manifests and ads are fleet-wide.
- **Breaks first.** Playback starts and ad decisioning.
- **The plan must hold.** Evacuation reserve sized including the live overlay; an event-day change freeze; degraded-mode manifests that drop personalization before playback.
- **Early indicators.** Pre-scaling drill results; regional buffer against the event calendar.

### S6. A per-GB delivery fee lands in one large market

- **Setup.** A fee of the kind proposed in Brazil is enacted.
- **Propagation.** Bytes acquire a marginal cost in that geography.
- **Breaks first.** Nothing technical: the optimization objective breaks, because offload-maximizing placement is no longer cost-minimizing.
- **The plan must hold.** A fee-weighted placement mode; the ability to re-tier catalog depth per market; a joint legal, finance and planning model.
- **Early indicators.** Docket outcomes; draft rate cards; peer settlements.

## 12. Measures of success

A good plan specifies step-change demand instead of forecasting it, runs on a cadence matched to lead times, carries error bands and a stated buy percentile, prices all three site dimensions plus the request path, and treats hosts and components as negotiated supply rather than assumptions. It can explain any number by its drivers and any decision by when and on what it was made.

### 12.1 Criteria

1. **Specify, don't forecast, step changes.** Launch and event teams declare demand in priced units (peak concurrent streams, regions, bitrate ladder, catalog size, sessions). Otherwise a named reference class stands in, refreshed against the current world record, not Popcorn Pajamas' own history.
2. **A cadence matched to lead times.** Annual: buy the envelope and pre-position the longest-lead resource, now including components. Quarterly: re-forecast against actuals. Per event: rank against constrained pools. Steering: arbitrate when demand exceeds supply. Afterwards: actual consumption per unit of demand becomes next cycle's ratio; every ask sits beside last cycle's ask and outcome.
3. **Forecast error is measured and priced.** Each stream carries P50/P90 bands and each commitment states its percentile.
4. **A multi-dimensional site model.** Storage, throughput and fill each carry headroom and a trigger, at effective serving rates, not nameplate, with the binding dimension named per site.
5. **Request-path headroom in the same plan.** Starts per second, manifest and origin requests and ad events per second sized per event alongside Gbps, with an owner.
6. **Fill calendar as a first-class schedule.** Box-nights allocated across launches, churn and backfills; Q4 protected.
7. **Explicit placement rules per stream.** Baseline on owned or host-housed hardware, peak to cloud, with a cloud-burst price attached; games carry a rejection-telemetry requirement and a utilization-breakeven rule.
8. **A cross-stream comparison unit,** plus a sourcing step that turns approved numbers into hardware at sites.
9. **A unit-cost model with ranges:** cost per peak Gbps, per stored TB, per fill Gbps, per concurrent stream or game session, per cloud instance-hour, with assumptions flagged where public data stops.
10. **Both-sided risk and named reserve.** Shortage and excess tracked with equal weight; reserve named per failure domain (site pair, metro, host, route-reflector city, region) with the live calendar overlaid on the evacuation math.
11. **A supply strategy, not just a demand forecast.** Months of agreement coverage, buy-ahead versus life-extension gates tied to failure rates, option framing on every irreversible commitment, efficiency gains planned explicitly.
12. **Partner- and policy-ready.** Hosts get forecasts early enough to act inside their own power and refresh cycles; host-relationship scenarios are costed before negotiations open; a fee-weighted placement mode is on the shelf.
13. **Planning-system capacity is itself planned:** modeling toil tracked, tooling roadmap owned, seat coverage per stream.

### 12.2 Failure modes and indicators

| Failure mode | What it looks like | Indicator to watch |
| --- | --- | --- |
| Throughput-only sizing | Sites in band still shed content | Content misses at sites below 75% utilization |
| Fill cannot keep up | Overnight fill does not finish; launches or backfills miss locally | Fill completion inside the window, especially in November; content shed ratio on release days |
| Live peak eats on-demand headroom | Health misses on event nights across many sites | Health-miss rate on event evenings versus normal evenings |
| Request path saturates | Playback fails to start while links have room | Start and manifest errors versus the tested ceiling; retry amplification |
| Overflow leaves the Snack Bar | Live traffic spills to private interconnect and transit | Share of event traffic on embedded versus private interconnect versus transit |
| Late augments | Capacity right but arrives after the peak | Trigger-to-in-service time, split by party (Popcorn Pajamas / host / components) |
| Components late or dear | Augments slip; cost per TB rises | Months of agreement coverage; dollars per TB on renewals; cost per delivered Gbps |
| Over-buy or stranding | Poppers idle for years | Share of fleet under the band's lower edge; effective-ceiling-to-peak ratio by region and site class |
| Aging fleet | Failures and watts per Gbps climb | Age distribution and failure trend versus life-extension gates |
| Cloud as a permanent crutch | Peaks never move to cheaper owned capacity | Cloud share of baseline (not burst) load by stream |
| Games turn players away | Players turned away at peak | Rejection rate by site and hour |
| Arbitration by negotiation | The loudest stream wins the next dollar | Decisions without a stated driver and trigger |
| Forecast drift unrecorded | Coefficients change silently after a codec or hardware change | Forecast error by stream at P50/P90, re-based at each discontinuity |
| Host or policy shock | A large host refuses caches or prices them | Traffic share per host under contract; scenario cost of paid interconnection |
| Planners buried in modeling | Decisions slip behind spreadsheets | Planner hours per cycle on modeling versus decisions |

## 13. Confidence ledger

The structure of the problem rests on Reported facts; its hardest parts (who decides, what it costs, how streams are compared) remain Inferred or Unknown. These are the claims the case stands on.

| # | Claim | Tier |
| --- | --- | --- |
| 1 | Nearly 20,000 Poppers; about 400 PoPs; about 175 countries; 20,000+ eBGP sessions; thousands of peer networks | Reported |
| 2 | Full iBGP mesh replaced by route reflectors in eight cities, 2025–26 | Reported |
| 3 | 6,000+ locations; 1,000+ host networks; 60+ own data centers; 100+ IXPs | Reported |
| 4 | Big Bucket ≤120 TB / about 200 Gbps; Small Bag ≤60 TB / about 80 Gbps; all-flash; 4–6-year life | Reported |
| 5 | Served in practice: Small Bag about 20 Gbps; Big Bucket about 90–150+ Gbps | Reported |
| 6 | 2021 storage tier: 354 TB, 670 W, 36–70 Gbps | Reported |
| 7 | Default fill window 2 a.m.–2 p.m.; 1.2 Gbps per box; one Popper per router, no multi-chassis LAG | Reported |
| 8 | Site capacity = Gbps before shed; 50–75% band; augment at 75% within 12–18 months | Reported |
| 9 | Content miss, health miss, content shed ratio | Reported |
| 10 | Manifests personalized in the cloud; every start transits the cloud | Reported |
| 11 | The 2024 marquee event: 65M peak concurrent streams; manifest and Popper failures; host links unsaturated; retries amplified load | Reported + Press |
| 12 | The 2025 premiere: TV start failures around release, recovered in about 5 minutes | Press |
| 13 | Live about 1% of hours, about 5% of 2026 content spend; 6 of top-10 sign-up days | Reported |
| 14 | Embedded share of live about 70% (2024) → about 88–90% (later events) | Third party |
| 15 | A rival's single-market record of 72.5M concurrent (Mar 2026) | World |
| 16 | VBR: −15% bytes, −10% peak minute; admission on nominal bitrate | Reported |
| 17 | Viewing about +2% a year; half in the evening; over 300M members | Reported |
| 18 | Enterprise flash, DRAM and optics prices and lead times (section 6.3) | World |
| 19 | Popper bill of materials about $24K → $66K; flash 59% → 79% | Arithmetic + Speculated |
| 20 | All-in deployed cost about $125K per Popper | Arithmetic + Speculated |
| 21 | Transit from about $0.03 per Mbps-month at 100G; record-low colocation vacancy | World |
| 22 | The Director's remit starts from Finance's demand forecast; team inside the edge partnerships and planning group | Reported (postings) |
| 23 | Seat evolution, 2019 → 2026: generalist → modeling, fleet, per-stream planner, Director | Reported (postings) |
| 24 | Cloud games on the Snack Bar-run bare metal | Reported (postings) + Inferred |
| 25 | Games admission control (players turned away when full) | Reported |
| 26 | Production: 200–700 TB per title; centers plus ingest centers on the Snack Bar backbone; locations Unknown | Reported/Press |
| 27 | Net-neutrality rules struck down; fee proposals in the EU, Korea, Brazil and India; the Korean bundle; the German ruling | World |
| 28 | The nameplate-versus-peak gap is largely explained by effective rates, tail floors and regional captivity | Arithmetic + Speculated |

**Common misreadings** (claims an outside analyst might make, and why they don't hold here)

| Claim | Why it doesn't hold |
| --- | --- |
| Production media is cached on or served from Poppers | No evidence; the estates share a backbone at most |
| "Live breaks prediction" | Popcorn Pajamas' own live write-ups say capacity is pre-provisioned by prediction |
| Advertising is a byte stream on owned infrastructure | Ads arrive through viewing hours and request load |
| The cloud fleet's "buffers, not utilization" discipline applies to the Snack Bar | That practice describes the cloud fleet only |

## 14. Open questions and falsifiers

Fifteen questions decide whether this problem statement is right, ranked by how much the answer would change the plan. Each has a current best guess so work can proceed before it is answered.

| # | Question | Current best guess | What would answer it |
| --- | --- | --- | --- |
| 1 | What unit does the team plan in, and does any cross-stream unit exist internally? | Gbps per site, with storage and fill as engineering side rules; no cross-stream unit (Inferred) | Internal planning documents; a future operator-conference talk |
| 2 | How much of the 3.5–13× effective residual is deliberate reserve versus stranded, at the PoPs specifically? | Mostly live reserve, N+1 and growth runway; some stranding in generation mix (Speculated) | Utilization distributions by site class; shed-ratio trends; peak-to-average per site |
| 3 | Popper unit cost and procurement lead time | About $25–70K bill of materials depending on era, about $125K all-in; weeks to months normally, longer under allocation (Arithmetic/Speculated) | Any procurement disclosure; host-forum delivery reports |
| 4 | How is Popcorn Pajamas riding out the component shock, and will the 12–18-month trigger lengthen? | Buying ahead under long-term agreements plus life extension (capex +54% fits); trigger lengthened or buffer stock added (Speculated) | Supplier agreements; capex commentary; a help-center change to the trigger, a cheap falsifier to watch |
| 5 | Where exactly do cloud games run, and does a GPU appliance exist? | Owned GPU bare metal at PoPs or metros, run by the Snack Bar organization; no host-facing appliance yet (Inferred) | A games appliance on the appliances page; a Host Lounge entry |
| 6 | Does Popcorn Pajamas collect rejection telemetry and use it to gate games investment? | Collected yes; used for investment, unknown (Speculated) | An engineering post or posting naming it |
| 7 | Who owns request-path headroom for events and launches, and how close are tested ceilings to need? | Live reliability and cloud teams; tested to about 100K starts per second (Reported/Inferred) | Post-incident reviews; load-test write-ups |
| 8 | How long is the three-party augment cycle, split by Popcorn Pajamas, host and components? | Months, host-dominated at large hosts (Speculated) | Host Lounge service-level language; host accounts |
| 9 | When Finance's envelope and bottom-up signals disagree, who wins, and how does internal-customer demand enter? | Finance sets the envelope; the Director arbitrates within it; internal customers enter through a seat per stream (Inferred) | Organization accounts; future posting wording |
| 10 | Who selects the Popper class and owns the hardware roadmap? | Hardware engineering owns the roadmap; planners recommend quantity and placement (Inferred) | Organization charts; postings |
| 11 | Is the fill calendar ever binding, and has Q4 already forced a backfill policy? | Yes, during codec backfills and big launches; informal policy (Speculated) | Fill-completion telemetry; fill-window edit patterns |
| 12 | Is there a tiered live reserve policy, and is evacuation math overlaid on the event calendar? | Tiered reserves (low / high / marquee) exist operationally; overlay unknown (Speculated) | Reliability talks; incident write-ups |
| 13 | Are the production centers owned, leased or colocated, and where? | Colocated or on-lot compute near production hubs; the studio lot and new campus add on-premises potential (Speculated) | Vendor announcements; facility filings; postings with locations |
| 14 | What do hosts constrain, and what is the contingency if a large one refuses caches or a fee regime lands? | Constraints are physical (power, space, ports); bundling side payments more likely than a per-GB fee before 2028 (Speculated) | Host agreements; EU, Brazil and Korea outcomes |
| 15 | How are satellite and fixed-wireless viewers served? | Through Poppers at exchange points near satellite gateways (Inferred) | Host and gateway announcements; traceroutes |

**What would falsify the problem statement**

- An internal site model that already sizes storage, throughput and fill together, with a cross-stream unit, would turn P1 and P8 from problems into practice.
- Evidence that cloud games run entirely in the cloud would remove P7's competition for edge sites and power.
- Evidence that production runs entirely in the cloud would shrink the owned production estate to a network question.
- A post-incident review showing the 2024 live failure was a bandwidth shortfall would weaken P4.
- Effective serving rates well below the reported figures would reopen the nameplate question as a stranding problem.

## Reference classes from the wider field

Other operators have faced each piece of Popcorn Pajamas' problem in public, and their numbers bound what is plausible (World).

### A.1 Embedded cache programs

| Program | Scale | Unit and sizing rule | What it teaches |
| --- | --- | --- | --- |
| A search company's cache program | Part of an edge in 1,300+ cities in 200+ countries (2021); serves 70–90% of cacheable traffic | Each node's hardware serving capacity is a hard limit; the egress target normally equals it and is lowered only for a downstream bottleneck | Separate what the box can do from what the host will carry |
| A large cloud CDN's embedded POPs | Several hundred to over a thousand, in 100+ networks (2024–25) | 1U appliances, minimum two per site; filled from regional caches; event traffic can spike to about 12× average | A floor on box count per site and a ceiling on peak-to-average |
| A large general-purpose CDN | 4,100+ PoPs in about 130 countries; about 1,200 network partners; hundreds of thousands of servers (2023) | Not published | Scale of a general-purpose alternative |
| A media conglomerate's streamer | A trial inside one large US ISP (about 2021) | Open-caching standard caches inside the ISP, beside multi-CDN delivery | Embedding is spreading as an industry standard |

Host-side requirements follow a common pattern; one large program, for example, asks for host-provided rack space and dual power feeds and recommends inlet air at or below 25 °C. Refreshes are operator-initiated and replace a node's machines at once.

### A.2 Live streaming peaks elsewhere

| Event | Year | Platform | Reported peak or audience | How it was delivered |
| --- | --- | --- | --- | --- |
| T20 World Cup final | 2026 | A South Asian streamer | 72.5M concurrent, single market | Not published |
| T20 World Cup semi-final | 2026 | Same | 65.2M concurrent | Not published |
| A European exchange's record day (football night) | 2025 | Exchange | About 27 Tbps across sites; about 18.7 Tbps at the main hub | Exchange record |
| Christmas football game | 2025 | An e-commerce company's streamer | 21M average; 22.9M peak | For a November 2025 game: own CDN about 80%, a second CDN about 19%; about 48% peering, 47% embedded, 4% transit |
| Football game played abroad | 2025 | A video platform | 17.3M average worldwide | Not published |
| Championship game | 2025 | A free ad-supported streamer | 13.6M viewers; 15.5M peak | Not published |
| Playoff game, streaming exclusive | 2024 | A broadcaster's streamer | 23M average; about 30% of US internet traffic in its slot | Several CDNs (outside observation); private peering 63%, transit 28%, embedded 1% |

Rivals spread live across two to six CDNs and lean on peering; Popcorn Pajamas carries all of it on the Snack Bar, mostly inside host networks.

### A.3 Cloud gaming services

| Service | Hardware | Footprint | Capacity controls | Lesson |
| --- | --- | --- | --- | --- |
| A GPU maker's service | Server GPUs in tiers; up to 100 Mbps per stream | Many countries, partner-run in several regions | Session caps by tier; monthly hour caps to keep queue times low | Fractional GPUs and hour caps manage peak cost; it queues, Popcorn Pajamas rejects |
| A console maker's service | Console-derived blades | Dozens of countries on its parent's cloud regions | Monthly hour limits, citing server costs | Even the largest player rations hours |
| A search company's service (closed 2023) | Custom GPU instances | Shut after about three years | — | Commonly attributed to catalog and porting cost, not capacity |
| An e-commerce company's service | Data-center GPUs on its own cloud | Relaunched around party games with phones as controllers | Not published | Closest analogue to Popcorn Pajamas' approach |

Placement rule of thumb: fiber adds about 1 ms of round trip per 100 km, so a 10 ms budget covers roughly 1,000 km; cloud gaming aims for about 40–50 ms end to end, with about 80 ms a common baseline.

### A.4 Popcorn Pajamas' own cloud practice, for contrast

- **Buying.** Stateful services mostly on reserved capacity; fast-scaling stateless services on reserved plus on-demand; reservations and preferential allocation for known high-demand periods.
- **Buffers, not utilization.** Services are tiered by criticality and buffer set by tier. This is the cloud-fleet discipline only; nothing published applies it to the Snack Bar.
- **Feedback loops.** Months (purchasing), hours (pre-scaling), minutes (autoscaling), seconds (load shedding); recovery from a 10× spike fell from 8–15 minutes to 3–4.
- **Tooling.** An open-source service-capacity-modeling toolkit the company published shows how the cloud side models capacity.

## About this case

Popcorn Pajamas, its teams, its people and its events are fictional. The case is inspired by public information about the streaming and content-delivery industry; figures are drawn to scale, not taken as facts about any company. Corrections, better reference classes and objections are welcome in the practice's discussions.

### Further reading

- Sixth Circuit, *Ohio Telecom Ass'n v. FCC* (2 Jan 2025): https://en.wikipedia.org/wiki/Ohio_Telecom_Association_v._FCC
- EU Digital Networks Act, Council progress report (2 Jun 2026): https://data.consilium.europa.eu/doc/document/ST-9685-2026-INIT/en/pdf ; explainer (Mar 2026): https://www.cullen-international.com/news/2026/03/The-DNA-explained--voluntary-cooperation-on-IP-interconnection--no-network-fees.html
- Korea network fees and the US trade report (Apr 2026): https://www.koreajoongangdaily.com/korea/ustr-highlights-koreas-network-usage-fee-among-craziest-trade-barriers/12588287
- German interconnection ruling (May 2024): https://netzpolitik.org/2024/landgericht-koeln-meta-muss-20-millionen-euro-an-die-telekom-nachzahlen/ ; appeal (Feb 2026): https://www.ifun.de/urteil-zur-netzneutralitaet-telekom-darf-bei-meta-die-hand-aufhalten-274419/
- Brazil fee proposal (Jun 2024): https://www.mobiletime.com.br/noticias/03/06/2024/conexis-sugere-cobranca-de-fair-share-quando-big-tech-exceder-5-do-uso-do-trafego-nacional/ ; regulator consultation (Mar 2026): https://www.mobiletime.com.br/terra-externa/30/03/2026/anatel-consulta-ott/
- India levy request (May 2025): https://storyboard18.com/how-it-works/https-www-storyboard18-com-how-it-works-telcos-push-for-fair-share-fee-from-otts-tells-dot-to-levy-uso-like-levy-on-platforms-67366-htm-67366.htm
- UK regulator on network fees (Oct 2023): https://telecomtv.com/content/access-evolution/uk-s-ofcom-relaxes-its-net-neutrality-grip-but-rejects-fair-share-calls-48831
- Caching and peering savings study (Oct 2022): https://www.analysysmason.com/contentassets/b891ca583e084468baa0b829ced38799/main-report---infra-investment-2022.pdf
- Live concurrency record (Mar 2026): https://www.icc-cricket.com/media-releases/icc-men-s-t20-world-cup-2026-sets-new-global-streaming-record-on-jiohotstar-during-india-england-semi-final
- UK ISP traffic during a free-to-air match (Jul 2026): https://advanced-television.com/2026/07/20/analysis-bbc-iplayer-traffic-up-75-as-england-beat-france/
- Enterprise SSD and DRAM contract prices (Aug 2026): https://www.trendforce.com/presscenter/news/20260825-13198.html ; Q4 2026: https://www.notebookcheck.net/SSD-prices-explode-by-303-in-a-year-as-AI-fuels-NAND-flash-shortage.1433261.0.html
- High-capacity SSD retail price (Feb 2026): https://www.techradar.com/pro/worlds-largest-ssd-has-tripled-in-price-in-just-nine-months-and-now-costs-more-than-a-new-car
- NAND contract forecasts (2026): https://financefeeds.com/trendforce-forecast-nand-prices-up-70-75-in-q2-with-capacity-relief-years-away/
- Server DRAM module prices (Feb 2026): https://www.eetasia.com/memory-prices-surging-by-90-from-4q-2025/ ; supply agreements (Jul 2026): https://www.trendforce.com/presscenter/news/20260709-13140.html
- Hard drive prices (Jan 2026): https://tomshardware.com/pc-components/hdds/hard-drive-prices-have-surged-by-an-average-of-46-percent-since-september-iconic-24tb-seagate-barracuda-now-usd500-as-ai-claims-another-victim ; sold out for 2026: https://heise.de/-11178917
- High-speed optics forecast (Dec 2025): https://www.ledinside.com/intelligence/2025/12/2025_12_09_01
- Optical fiber prices (Oct 2026): https://www.trendforce.com/presscenter/news/20261019-13275.html
- AI server prices (Aug 2026): https://www.trendforce.com/news/2026/08/24/news-nvidia-reportedly-eyes-more-than-15-price-hikes-for-vera-rubin-grace-blackwell-servers-in-early-2027/ ; cloud GPU pricing (Oct 2026): https://intuitionlabs.ai/articles/data-center-gpu-pricing-2026
- US tariffs (Jul 2026): https://www.hklaw.com/en/insights/publications/2026/07/and-the-tariff-beat-goes-on ; AI chip tariff (Jan 2026): https://www.ghy.com/trade-compliance/us-25-percent-tariff-semiconductors-section-232/ ; server phase outlook (Oct 2026): https://ccianet.org/articles/applying-semiconductor-and-server-tariffs-to-data-centers-under-section-232-or-section-301-would-now-cost-the-u-s-about-180-billion-a-year/

- Exchange prices and growth: https://www.ams-ix.net/ams/pricing ; https://www.ams-ix.net/ban/news/2025-facts-figures-capacity-and-traffic-growth-2 ; exchange records: https://www.cio.de/article/4129371 ; https://www.whtop.com/news/35965-de-cix-frankfurt-tops-21-tbps-as-global-exchange-traffic-passes-32
- IP transit prices (Sep 2026): https://resources.telegeography.com/ip-transit-price-erosion-significant-regional-differences-remain
- Colocation vacancy and rents (Jun 2026): https://www.cbre.com/insights/reports/global-data-center-trends-2026
- Grid waits in Europe (Feb 2026): https://www.theregister.com/2026/02/03/amazon_power_europe/ ; Dutch hyperscale rules (2024): https://www.gtlaw.com/en/insights/2024/3/challenges-in-the-dutch-data-center-market
- Fixed wireless and latency (Aug 2026): https://techblog.comsoc.org/?p=1077115 ; satellite subscribers (Sep 2026): https://driveteslacanada.ca/news/starlink-12-million-subscribers-price-hikes/
- Red Sea cable damage (Mar 2024): https://ktvz.com/money/cnn-business-consumer/2024/03/04/red-sea-cables-have-been-damaged-disrupting-global-internet-traffic/ ; Baltic incidents: https://en.wikipedia.org/wiki/Baltic_Sea_underwater_infrastructure_incidents
- Data-center energy (IEA, Apr 2025): https://www.datacenterdynamics.com/en/news/iea-data-center-energy-consumption-set-to-double-by-2030-to-945twh ; capacity auction (Dec 2025): https://www.power-eng.com/business/pjm-capacity-auction-hits-price-cap-again-as-region-falls-short-of-reliability-target/
- Cable merger (Aug 2026): https://www.lightreading.com/cable-technology/charter-cox-deal-is-a-wrap-with-spectrum-brand-to-take-over-within-a-year ; fiber acquisition (Jan 2026): https://www.capacityglobal.com/news/verizon-finalises-20bn-frontier-deal-fibre-network-now-reaches-30mn-homes/
- Live peaks elsewhere: https://www.tvtechnology.com/news/nfl-debut-on-youtube-draws-17-3-million ; https://www.thecurrent.com/media/super-bowl-lix-most-streamed-history-millions-watching-tubi ; https://www.nbcsports.com/pressbox/nfl/press-releases/peacock-exclusive-afc-wild-card-game-is-biggest-live-streamed-event-in-u-s-history-drives-internet-usage-to-single-day-u-s-record
- Record final (Mar 2026): https://supersport.com/cricket/news/2ad69343-f12e-4c95-aee5-1fe846b949cd/cricket-world-cup-smashed-viewing-figures-icc
- Cloud gaming hour limits: https://9to5google.com/2025/12/23/nvidia-geforce-now-100-hour-limit-2026/ ; https://www.gameinformer.com/2026/09/03/xbox-announces-monthly-hour-limits-to-cloud-gaming-are-coming-in-november ; party-game relaunch (Oct 2025): https://www.thurrott.com/games/328749/amazon-is-relaunching-its-luna-cloud-gaming-service-today

- Search company cache program: https://support.google.com/interconnect/answer/7658666 ; https://support.google.com/interconnect/answer/7658665
- Large general-purpose CDN scale (FY2023 annual report): https://www.sec.gov/Archives/edgar/data/1086222/000108622224000040/akam-20231231.htm
- Cloud CDN embedded POPs (Apr 2024): https://aws.amazon.com/blogs/networking-and-content-delivery/bringing-delivery-closer-to-end-users-with-amazon-cloudfront-embedded-pops/
- Open-caching trial: https://opencaching.svta.org/case-study/verizon/
- Live football delivery mix (Nov 2025): https://www.kentik.com/blog/anatomy-of-an-ott-traffic-surge-thursday-night-football-on-amazon-prime
- Cloud gaming latency (Feb 2024): https://go.abiresearch.com/hubfs/Marketing/Whitepapers/The%20Past,%20Present,%20and%20Future%20of%20Cloud%20Gaming/ABI_Research%20The%20Past%20Present%20And%20Future%20Of%20Cloud%20Gaming.pdf
