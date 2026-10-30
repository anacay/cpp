---
title: Case 2: Popcorn Pajamas
short: A fictional streaming service's whole capacity problem, built from public information. The case leaves the answers open; a companion page shows how the practice approaches it.
kind: case
order: 2
cadence: all
altitude: all
levels: learning, practicing, leading
seed: 5.4, 6, 8
---

*Popcorn Pajamas is a fictional company. Any resemblance to real companies reflects problems the industry shares.*

This is the practice's first problem-space case. It describes a capacity-planning problem space in full and leaves the answers open.

## The situation

Popcorn Pajamas delivers video to over 300 million members from nearly 20,000 caching appliances it calls Poppers. Most of them sit inside more than a thousand other companies' networks, housed for free in exchange for the traffic they save. Its delivery network, the Snack Bar, ties them together. Behind them sits a public cloud that runs playback, personalization and live events, and a production estate that follows shooting calendars.

One small planning team turns all of this into annual plans and five-year forecasts. It recommends; other teams buy, install and host. It treats shortage and excess as equal risks.

Three things are changing at once:

- **Demand is becoming inorganic.** Live sport contracted into the 2030s, cloud games with no settled hardware, and launches that peak in minutes. None of it is on the smooth curve the plan was built for.
- **Supply is slower and dearer.** AI demand has absorbed the flash, memory and optics the appliances are built from. Contract prices for enterprise flash rose roughly four to five times since mid-2025. Component lead times now consume most or all of the plan's own trigger window.
- **The free exchange is contested.** Regulators in several regions are debating who pays for delivery, and network operators are consolidating into fewer, larger counterparties.

## Why it is hard

- **One number, three limits.** A site is sized in gigabits per second, but each box also binds on storage and on how much content it can load overnight.
- **Live lands in other people's buildings.** About 90% of live traffic is served from appliances inside partner networks, and live content can't be loaded ahead of time.
- **Failures happen where the plan doesn't look.** Both public peak failures broke in playback starts and manifests while network links had room.
- **Games hide their own demand.** When servers are full, sessions are turned away, and turned-away players never appear in the data that justifies the next investment.
- **No common unit.** Nothing compares a stored terabyte, a served gigabit and a game session, so streams compete for capital by negotiation.

## What's in the case

- The system: three estates, the appliances, fill, placement and how it fails.
- Demand: eight streams, how they interact, and a quantitative scale model.
- Supply: the component shock, the three-party augment cycle, cloud, colocation and power.
- External constraints: who pays for delivery by jurisdiction, tariffs, the networks underneath.
- The planning organization as part of the problem: how the team grew a seat each time the problem grew a dimension, and the seams between them.
- Sixteen decision-shaped problems, twenty causal chains and six stress scenarios for 2027.
- Measures of success, a confidence ledger and fifteen open questions with falsifiers.

Every claim carries an evidence tier, so you can see which parts are reported, inferred or speculated.

## How to use it

- **Read the sixteen problems** and pick the one closest to your own work. Ask how your organization would decide it.
- **Read the companion note**, which maps each problem to the practice's current body of knowledge and names seven places where that body of knowledge runs out.
- **Join the discussion.** Challenge a number, add a reference class, or tell us where the case gets your industry wrong.

- [The full case](case-popcorn-pajamas-full.md)
- [How the practice approaches it](case-popcorn-pajamas-practice.md)
- [Discuss it on GitHub](https://github.com/anacay/cpp/discussions)
