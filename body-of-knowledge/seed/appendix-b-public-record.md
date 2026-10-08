<!-- Seed edition, v0.1, built from the working paper, version 7.6. Licensed CC BY-SA 4.0. Site page: https://cpp.anacay.org/public-record/ -->

# Appendix B. What the public record says about supply



## B.0 How to read this appendix

**What this is.** Public values for how long supply takes and how it is contracted: lead times by layer, waits for power, contract terms and capacity reported by firmness. Each value is dated and comes from its source's own context.

**Who it's for.** Planners, supply and finance teams checking their own numbers.

**How to use it.** Test your numbers against these, don't replace them. A value here describes one source's situation at one date. The charts plot only values the sources state. Ranges stay ranges. "More than" stays open; "up to" is a cap at the stated maximum, never a bar from zero; an example stays a single point. Values from different sources are never combined or averaged. Where nothing is published, the appendix says so (B.5), and your own value there is best stated as plainly hypothetical, in the "for example, if…" form. Sections 6.2, 6.4 and 6.7 of the paper use these values.

Figure B.1 keys the marks the charts use.

![Key. A single reported value, or a source's example value, is a filled dot; an average is a dot with a bar over it; a median is a half-filled ring; a recommended value is a ring with a centre dot. A reported range is a capped bar; "more than" is the stated value's mark with an open arrow to the right; "up to" is a cap at the stated maximum with a short, fading arrow to the left, never a bar from the axis; a chevron at the axis edge marks a value off the scale. A value described in words is a text chip; a dashed empty row means no public value was found; a bracketed number is the source, listed in B.6. Filling squares show firmness, from less firm to more firm, in the order one source reports it.](figures/E27.svg)

*Figure B.1. How the charts in this appendix mark each kind of public value.*

**Terms.** One line each, in the paper's words.

- **Lead time:** how long a supply layer takes from order to arrival. A cautious lead time sits near the slow end of what's been seen.
- **Supply layer:** one kind of supply with its own lead time: land, power and buildings; network; machines and parts; turn-up; placement.
- **Turn-up:** installing and testing delivered machines so they can go live.
- **Grid connection for a large load, versus interconnection of new generation:** a large new load, such as a data center, connects through the utility's own process. New generation and storage join the grid through a separate interconnection queue. Their waits are different measures.
- **Power transformer, generator step-up transformer, switchgear:** three kinds of large electrical gear, named as their source names them [61].
- **Take-or-pay:** a commitment owed whether the demand behind it arrives or not.
- **Non-cancellable order:** an order that can't be walked away from once placed.
- **Cancel window:** the last date you can still walk away from an order cheaply. Once it closes, the forecast behind the order is a liability.
- **Minimum billing demand:** a tariff's floor on the bill, set as a share of contract capacity.
- **Electric service agreement; construction and engineering letters of authorization:** the tiers under which Dominion Energy reports its data-center contract capacity, by firmness, in its own order [92]. By its account, an engineering letter pays for the utility's engineering studies and doesn't oblige the customer to proceed. A construction letter commits the customer to repay the utility's investment, and the utility reserves capacity for it. The electric service agreement is the legal document that sets the contracted capacity, and service needs one [92].
- **PJM:** the regional grid operator to which Dominion Energy submitted the documentation cited in B.4 [92].
- **Primary data center markets:** the established markets JLL's outlook groups as primary; its wait figure covers those markets, not every location [60].
- **Residual value guarantee:** a lessee's promise to make up any shortfall if the leased asset is worth less than an agreed amount at the end of the lease.
- **Contracted versus active power:** power an operator has signed for, against power it reports as active. The paper asks each power figure to say which power it means: contracted, provisioned or drawn.
- **Bridge:** a stopgap for demand that supply can't meet in time. For power, it means temporary on-site generation.
- **Firmness:** how far supply has moved toward use. Supply firms up in stages of its own: planned, contracted, under construction, delivered, live.

## B.1 Lead times

| Layer | Public value | Source |
|---|---|---|
| Your own buildings | Could be "five years" (an example) if you erect your own buildings; "10 minutes" for a small cloud service | Hixson and Guliani, 2015 [6] |
| Land, utility, buildings | "planned years in advance" | Olavson, 2019 [8] |
| Grid connection, primary markets | JLL puts "the average wait time for a grid connection in primary data center markets" at more than four years | JLL, January 2026 [60] |
| Power transformers; generator step-up transformers; switchgear | 128 weeks, 143 weeks and 44 weeks on average, in the second quarter of 2025 | Wood Mackenzie and American Clean Power [61] |
| High-capacity transformers | "as long as four years" | [62] |
| Backbone network | "months or even years" | Ahuja and colleagues, 2021 [63] |
| Components | "over 6 months for some components" | Olavson, 2019 [8] |
| Accelerators (the vendor's own supply) | "more than 12 months" | NVIDIA, 2025 [64] |
| Cloud capacity reservations | Requested 5 to 120 days ahead; 56 recommended | AWS documentation [109] |
| Turn-up | No public value found | — (B.5) |

Figure B.2 plots the table, each value as its source states it; weeks convert at 7 days and months at 30.4.

![Dot-and-range chart on a log time axis from a week to five years, grouped by supply layer. Public reported values, each with its source: your own buildings, an example value that "could be five years" 6, against ten minutes for a small cloud service, off scale 6; grid connection in primary markets, an average wait of more than four years 60; power transformers 128 weeks, generator step-up transformers 143 weeks and switchgear 44 weeks, averages for the second quarter of 2025 61; high-capacity transformers, as long as four years, a cap at the stated maximum 62; some components, over six months 8; one accelerator vendor's own supply, more than twelve months 64; cloud capacity reservations requested 5 to 120 days ahead, 56 recommended 109. Land, utilities and buildings are "planned years in advance" 8 and backbone network takes "months or even years" 63, shown as text. No public value was found for order-to-dock or turn-up time.](figures/E28.svg)

*Figure B.2. Public reported lead times by supply layer, each from one source at one date; see sources. Ranges stay ranges, "more than" stays open and "as long as" is a cap, not a range; an example is a single dot. No two sources are combined. Turn-up and order-to-dock times have no public value.*

## B.2 Power for a large new load

Power's numbers need care. For new *generation*, the median wait from interconnection request to signed agreement was "well over 3 years in 2025" [112], but a large new load goes through the utility's own process. For new loads, one transmission owner cited by Lawrence Berkeley National Laboratory expects studies to take "6 to 18 months," and any construction requiring a line extension "at least 18 months and potentially as long as 60 months"; the same report notes "limited publicly available information on large load interconnection timelines" [65]. Power can be bridged, too: JLL expects natural gas to play a role "both for temporary bridge power and increasingly for permanent on-site power generation" [60]. Figure B.3 keeps the three measures apart.

![Rows on a months axis, each counted from its own start. New generation's median wait from request to signed agreement was well over three years in 2025 112; that measures power plants, not data center loads. For a large new load, one transmission owner cited by Lawrence Berkeley National Laboratory expects studies to take 6 to 18 months, and construction needing a line extension at least 18 and up to 60 months. The two are durations, each on its own row with a faint baseline from zero, so they do not read as one timeline, and they are not added 65. The average wait for a grid connection in primary data center markets is more than four years, a different measure 60. A chip notes natural gas as temporary bridge power and increasingly permanent on-site generation 60.](figures/E29.svg)

*Figure B.3. A large new load waits in the utility's own process, not the queue for new power plants. Public reported values, each in its own source's terms; the two parts of the load path are durations, each from its own start, not one timeline, and are not added. See sources.*

## B.3 Contracts

The accelerator vendor in B.1 reports having "paid premiums, provided deposits, and entered into long-term supply agreements and capacity commitments," and placing "non-cancellable and non-returnable purchase orders" ahead of its historical lead times [64]. Microsoft, for example, signed a 20-year power purchase agreement tied to restarting a nuclear unit expected online in 2028 when the agreement was announced [113]. AEP Ohio's data center tariff (for loads of 25 MW or more) sets a load ramp of up to four years. In it, the contract capacity in effect steps through no less than 50, 65, 80 and 90% of the full contract capacity in years one to four. Separately, its minimum billing demand cannot exceed 85% of contract capacity, a cap the largest loads reach. The initial term is the ramp plus eight years; after the fifth post-ramp year, a customer may leave by paying "minimum charges for 36 months after notice of termination" [114].

Leases run long, too. Microsoft calls its data center leases "very long-lived assets," at "15 to 20 years," while for short-lived chips "the lifetimes of these and the lifetimes of the contracts are very similar" [72]. Meta leases one campus, Hyperion, on "a four-year initial term with options to extend," backed by a residual value guarantee for the first 16 years [75].

The structure runs on to customers: CoreWeave sells capacity "on a take-or-pay basis" under contracts averaging "approximately five years," and buys from its own suppliers "according to stated lead times" [68]. Oracle states the mismatch risk plainly: if it overestimates demand it "could be locked into multi-year commitments for excess data center space," and its long-term data center leases "typically do not align with the duration and pricing of customer contracts" [69]. Figure B.4 lines up the commitment lengths, and the tariff's load ramp on a scale of its own.

![Two panels. (a) Commitment lengths in years: a 20-year power purchase agreement 113; data center leases of 15 to 20 years 72; a campus lease with a four-year initial term, options to extend, and a residual value guarantee for the first 16 years 75; a utility tariff with a ramp of up to four years plus an eight-year initial term, drawn apart 114; and customer contracts averaging about five years 68. A note quotes that chip lifetimes and contract lifetimes are very similar 72, and a callout quotes Oracle that its leases typically do not align with customer contracts 69. (b) AEP Ohio's load ramp: the contract capacity in effect is no less than 50, 65, 80 and 90% of the full contract capacity in years one to four, then full. A separate dashed line marks the minimum bill, a separate provision,, which cannot exceed 85% of contract capacity. A dotted line marks that after the fifth post-ramp year, a customer may leave by paying 36 months of minimum charges 114.](figures/E30.svg)

*Figure B.4. Supply commitments often run longer than the customer contracts behind them. (a) Commitment lengths, each from its own source; (b) one utility tariff's load ramp, with its cap on the minimum bill drawn apart. Public reported values; different scales; see sources.*

## B.4 Supply reported by firmness

Dominion Energy reports the capacity under its data-center contracts by firmness. It has 9.8 GW under electric service agreements and 7.1 GW under construction letters of authorization. Another 30.1 GW sits under engineering letters of authorization, which it labels "potential future load" [92]. On the operator side, CoreWeave reported about 3.1 GW of contracted power at the end of 2025, against more than 850 MW active [68]. Figure B.5 draws the two sources side by side, each on its own scale.

![Two bar panels in gigawatts, each with its own scale. Dominion Energy, as of July 2025, reports data-center contract capacity of 9.8 GW under electric service agreements, 7.1 GW under construction letters of authorization, and 30.1 GW under engineering letters of authorization, labeled potential future load 92. CoreWeave reports about 3.1 GW of contracted power at the end of 2025, against more than 850 MW active 68. Filling squares mark firmness in each source's own order. The panels are not comparable and the tiers are not added.](figures/E31.svg)

*Figure B.5. Power reported by firmness: contracted far ahead of what is under construction or active. Two sources, two kinds of figure, two scales. Public reported values; see sources.*

## B.5 What isn't public

In the sources read for the paper, these have no public value:

- **Purchase order to dock** for machines: no published time found.
- **Turn-up:** no published duration found. For your own, use a plainly hypothetical value, in the "for example, if…" form.
- **Hardware contract terms** of the cancel-schedule kind (what you owe if you cancel, by date): none found.
- **Waits for power for large new loads:** Lawrence Berkeley National Laboratory notes "limited publicly available information on large load interconnection timelines" [65].

The capacity planning chapter of the second edition of *Site Reliability Engineering* (September 2026) [7] doesn't publish these either. It does name the constraints behind them: power grids, specialized hardware lead times and labor shortages put "a structural ceiling on construction speed" [7].

## B.6 Sources for this appendix

Numbered as in the paper's reference list, so the two can be read side by side. Accessed 2026-10-04 unless noted. **[Secondary]** = summary, encyclopedia entry, news report or third-party record used in place of the primary source.

6\. Hixson, D., & Guliani, K. "Capacity Planning." *USENIX ;login:* 40(1):32–38, February 2015. https://www.usenix.org/system/files/login/articles/login_feb15_07_hixson.pdf

7\. Gordon, A., Kirby, C., Hixson, D., et al. "Capacity Planning" (chapter 15). In Beyer, B., Jones, C., Leng, C., Huska, D., Petoff, J., & Murphy, N. R. (eds.), *Site Reliability Engineering*, 2nd ed. O'Reilly, September 2026. https://www.oreilly.com/library/view/site-reliability-engineering/9798341607675/ch15.html — *Full chapter read in the O'Reilly online edition, 7 October 2026.*

8\. Olavson, T. "Humans-in-the-loop forecasting: integrating data science and business planning." The Unofficial Google Data Science Blog, 4 December 2019. https://www.unofficialgoogledatascience.com/2019/12/humans-in-loop-forecasting-integrating.html (accessed 2026-10-05).

60\. JLL. *2026 Global Data Center Outlook*, 5 January 2026. https://www.jll.com/en-us/insights/market-outlook/data-center-outlook (accessed 2026-10-06).

61\. Wood Mackenzie & American Clean Power. *Making the Connection: Meeting the Electric T&D Supply Chain Challenge*, executive summary, September 2025. Hosted by POWER magazine: https://www.powermag.com/wp-content/uploads/2026/01/making-the-connection-executive-summary-september-2025.pdf (accessed 2026-10-06; figures are Q2 2025 averages).

62\. Kennedy, R. "U.S. transformer market faces severe supply constraints as lead times extend to four years." pv magazine USA, 11 May 2026 (quoting PwC analysts). https://pv-magazine-usa.com/2026/05/11/u-s-transformer-market-faces-severe-supply-constraints-as-lead-times-extend-to-four-years/ **[Secondary]**

63\. Ahuja, S. S., Gupta, V., Dangui, V., Bali, S., Gopalan, A., Zhong, H., Lapukhov, P., Xia, Y., & Zhang, Y. "Capacity-Efficient and Uncertainty-Resilient Backbone Network Planning with Hose." *Proc. ACM SIGCOMM 2021*, August 2021. https://research.facebook.com/file/311440033651798/Capacity-Efficient-and-Uncertainty-Resilient-Backbone-Network-Planning-with-Hose.pdf (accessed 2026-10-06).

64\. NVIDIA Corporation. Annual Report on Form 10-K for the fiscal year ended 26 January 2025 (risk factors on supply). U.S. Securities and Exchange Commission. https://www.sec.gov/Archives/edgar/data/1045810/000104581025000023/nvda-20250126.htm

65\. Kahrl, F., & Mims Frick, N. *Speed to Power: Solutions for Accelerating Large Load Connections*. Lawrence Berkeley National Laboratory, June 2026. https://eta-publications.lbl.gov/sites/default/files/2026-06/lbnl_large_loads_speed_to_power_final_1.pdf (accessed 2026-10-06; the 6–18 and 18–60 month figures are the report's citation of one transmission owner, p. 4, fn. 9).

68\. CoreWeave, Inc. Annual Report on Form 10-K for the fiscal year ended 31 December 2025. U.S. Securities and Exchange Commission. https://www.sec.gov/Archives/edgar/data/1769628/000176962826000104/crwv-20251231.htm (accessed 2026-10-06).

69\. Oracle Corporation. Annual Report on Form 10-K for the fiscal year ended 31 May 2026 (risk factors). U.S. Securities and Exchange Commission. https://www.sec.gov/Archives/edgar/data/0001341439/000119312526277521/orcl-20260531.htm (accessed 2026-10-06).

72\. Microsoft Corp. FY26 First Quarter Earnings Conference Call, 29 October 2025 (speaker: S. Nadella, Chairman and CEO). https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q1 (transcript: aka.ms/transcriptfy26q1).

75\. Meta. "Meta Announces Joint Venture With Funds Managed by Blue Owl Capital to Develop Hyperion Data Center." Meta Newsroom, 21 October 2025. https://about.fb.com/news/2025/10/meta-blue-owl-capital-develop-hyperion-data-center/ (accessed 2026-10-06).

92\. Dominion Energy. Load forecast documentation submitted to PJM, 6 January 2026. https://www.pjm.com/-/media/DotCom/planning/res-adeq/load-forecast/dominion-documentation.pdf (accessed 2026-10-06; figures as of July 2025).

109\. Amazon Web Services. "Capacity Reservation concepts" (future-dated Capacity Reservations). Amazon EC2 User Guide. https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/cr-concepts.html (accessed 2026-10-06).

112\. Lawrence Berkeley National Laboratory. "Backlog of power plants seeking transmission grid connection eased somewhat in 2025 amidst high withdrawals" (*Queued Up* 2026 edition), news release, 1 July 2026. https://emp.lbl.gov/news/backlog-power-plants-seeking-transmission-grid-connection-eased-somewhat-2025-amidst (measures generation and storage joining the grid, not data center loads).

113\. Constellation Energy. "Constellation to Launch Crane Clean Energy Center, Restoring Jobs and Carbon-free Power to the Grid." Press release, 20 September 2024 (20-year power purchase agreement with Microsoft; Three Mile Island Unit 1 expected online in 2028 at announcement). https://investors.constellationenergy.com/node/8711/pdf

114\. Ohio Power Company (AEP Ohio). Data Center Tariff (Schedule DCT), effective 23 July 2025; approved by the Public Utilities Commission of Ohio, order of 9 July 2025. https://www.aepohio.com/company/about/rates/data-center-tariff ; reported by POWER: https://www.powermag.com/regulator-approves-aep-ohios-landmark-data-center-tariff/ (accessed 2026-10-06).
