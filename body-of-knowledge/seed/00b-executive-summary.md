<!-- Seed edition, v0.1, built from the working paper, version 7.9. Licensed CC BY-SA 4.0. Site page: https://cpp.anacay.org/summary/ -->

# Executive summary

**Backdrop.** Shared infrastructure (a database tier, a storage service) is paid for centrally and used by product teams. A product's cost on a shared service is *volume × coefficient × rate*: how much demand it sends, how much resource each unit uses, and what that resource costs. Large operators have published how to compute it at scale, though attributing some work is still open (Sections 2 and 3), and plans still miss.

**The problem.** Take Section 7's invented year-end review. A team forecast 500,000 requests per second and landed at 480,000, within 4%. Its bill came in at $683,280 against a plan of $525,600, 30% over. Split the miss by term and each piece goes to whoever moved it:

- **Volume:** −$21,024, owned by the product team.
- **Coefficient:** +$126,144, owned by the shared service, whose release raised CPU per call.
- **Rate:** +$52,560, owned by the service with finance, after its power was re-priced.

The two terms the team didn't own add up to +$178,704, more than the whole +$157,680 overrun. The split turns an argument about fault into a meeting about two fixes; who *pays* is a separate rule, best agreed before the miss (Sections 5.2 and 7). The same example misses a second way. The ask was approved as 4 units of an invented common unit, because the intake asked only about CPU. Once its memory was counted, it needed 4.8, and the high-memory machines arrived a quarter after launch. Figure 1 shows both misses.

![Summary card. Forecast 500,000 vs actual 480,000 requests per second, within 4%; bill $525,600 planned vs $683,280 actual, 30% over. The overrun splits into volume −$21,024 (product team), coefficient +$126,144 (shared service) and rate +$52,560 (service owner, with finance); the last two exceed the whole overrun. Second miss: approved as 4 units, needed 4.8, machines a quarter late. Invented numbers.](figures/A6.svg)

*Figure 1. The same invented year-end review, two ways it missed: a bill 30% over a forecast within 4%, split by who moved each piece, and an approval that needed more machines, later, than it bought.*

**What the paper offers: two claims and a method.**

1. **A coefficient is an agreement.** One number forecasts the service's load and prices the caller's growth, so it needs an owner, versions and restating when hardware or the meter changes (Sections 5.1–5.3). Launches with no history enter as *declarations*: signed statements of expected demand that firm up in stages (Section 5.4).
2. **Approval is not allocation, in shape, place and time.** The gap to "running" needs a named owner and a ledger (Section 6.1). Supply runs on its own clock: years for power and buildings, quarters for machines, and weeks to install and test them (called *turn-up*). It runs under contracts that become liabilities once their cancel windows (the last date to walk away cheaply) close. And it slips in steps of its own (Sections 6.2 and 6.7).
3. **The commit-point method**, below (Section 8).

Two ideas support them. An **operating discipline** of thirteen mechanisms, each an artifact with an owner, keeps the numbers true each cycle (Section 9). And **three prices** answer three questions, as in a hotel (Section 4): who pays for what already runs, whether to build, and who gets scarce capacity now. In hotel terms, those are a room-night's average cost, a new wing's cost per room, and the last room's worth on a sold-out night. One number for all three misleads on at least one. Figure 2 maps the claims, the method and their supports to the sections that carry them.

![Concept map. At the top, the problem: a forecast within 4% and a bill 30% over, and an approval with no usable machines. Two pillars follow. A coefficient is an agreement: owned, versioned, restated, with launches entering as declarations that firm up in stages (Section 5). Approval is not allocation: the gap in shape, place and time needs an owner and a ledger, and supply runs on its own clock under contracts and slips in steps (Section 6). Both feed the commit-point method (Section 8), which writes into mechanisms 12 and 13 of the thirteen-mechanism operating discipline (Section 9). Three prices answer three questions (Section 4). A strip lists the newcomer path: Sections 1, 2, 4, 5.2, 5.4, 6.5, 7, 8 and 14. A footer says it is a practitioner synthesis and the method is untested (Section 13).](figures/E1.svg)

*Figure 2. Two claims and one method, resting on an operating discipline and a clear answer to "which price?". Section numbers show where each is argued.*

**The method.** For each launch, work back from the date capacity must be live to each supply layer's *commit point*. That's the last date its order can still be placed, on a slow-case lead time. At each commit point, read how firm the launch will be and whether what drives that layer (memory, region) is known yet. Cover more of the range of likely demand where running short costs more than holding spare. For lasting demand in a growing business, the paper argues (not a published result) that this usually means the slow layers, held largely as options (Section 6.5). Net what's on hand or on the way, and buy the firm part. Hold the next slice as options or a reserve, and name a stopgap (a *bridge*) and an owner for the rest. Agree how much the ask may still change at each stage (*change bands*), and have supply answer every line with a delivery date or a named shortfall (a *named gap*). In the example, the memory question moves to eleven months out, for about 1.0 extra unit held above the middle estimate (Section 8.4; illustrative). It's a way to think it through, not a model.

**What to do Monday.**

- *Planning and product:* walk the next launch through the worksheet (Appendix A); put last year's ask beside its actual; ask for slow-supply attributes first (Section 9.3).
- *Finance should co-own* a few rules, agreed in advance. One is what "fully loaded" contains. Two more are the landing rule (who keeps capacity a team saves) and the shortage-to-idle ratios (which set how far up the range each layer buys). Last are the order of cuts when budgets move, and who pays when a service's own coefficient regresses or an ask moves outside its change bands (Sections 9.2 and 14).
- *Supply should own* a dated commit or named gap for every approved ask, and the link from each order to its demand. It also owns a contract register with liabilities and cancel windows, and, with planning, the change bands and the commit-point map. And it owns its own step changes, declared in stages. It is scored on promised against actual, as demand is scored on how much it changed inside supply's lead time (Sections 6.2, 6.4, 8.3, 9.2 and 14).

**What's unknown.** This is argument from sources and practice, not a measured study. In the sources I could read, I found no measurement of coefficient drift, of how well declarations are calibrated by stage, or of how often launches slip. I also found no published order-to-dock times, turn-up durations or hardware contract terms (nor does the 2026 SRE capacity chapter, Section 3). The method is untested (Section 13).

| If you want… | Read |
|---|---|
| Why bills miss | 1, 2, 5.2 |
| What's published, and what's new | 3 |
| Which price for which question | 4 |
| Governing a coefficient | 5.2–5.3 |
| Launches with no history | 5.4 |
| Approval versus supply; buffers, bridges | 6.1, 6.3, 6.4 |
| Lead times, contracts, options | 6.2 |
| How far up the range to buy | 6.5 |
| Slips, size misses, supply's own steps | 6.6, 6.7 |
| The worked example | 7 |
| The method and worksheet | 8, Appendix A |
| The thirteen mechanisms | 9 |
| People, overrides, gaming | 10 |
| AI fleets; mid-sized companies | 11, 12 |
| Limits and unknowns | 13 |
| A checklist by role | 14 |

---
