---
title: People: brokering the handshake
short: How you work between capital, supply and demand when you own no capacity and no budget, and where your standing to say no comes from.
kind: across
order: 20
cadence: all
altitude: all
levels: all
seed: 10, 10.1, 10.2, 10.3, 10.4, 9.1, 9.3, 14
---

## The handshake

Every capacity plan is a handshake among three parties. **Capital** is finance and the leaders who set the envelope. It has the money and wants it to buy something. **Demand** is the product teams and the shared services they call. They have plans and want capacity on time. **Supply** turns money into running machines: the supply chain, the sites, the fleet. It has lead times and contracts, and wants a signal it can buy against.

None of the three can close the deal alone. Capital can approve but can't deliver. Demand can declare but can't fund. Supply builds only against a signal, often late or padded.

You sit in the middle. Most of the time you own no capacity and no budget. The seed paper draws this as a triangle (Figure 41); [the work and the path](the-work-and-the-path.md) shows it.

## What you trade in

With no budget of your own, you trade in four things [argued]:

- **Information:** what's coming, who holds what, and what supply can really do by when.
- **Timing:** asking each question early enough that the answer arrives before the order must be placed.
- **Trust:** numbers that hold up, from a planner who doesn't pad its own.
- **Credible commitments:** signatures that turn one party's promise into something the others can buy against.

Each corner is owed something different. Capital gets numbers that hold, and a cut line that names what falls below it. Supply gets signed demand before each [commit point](concept-commit-points.md), with its stage and range. Demand gets the same picture as everyone else, a "no" with a path, and capacity back when it gives some up.

The paper's two claims sit on the triangle's edges. [The coefficient](concept-the-coefficient.md) is the price demand pays capital for what supply provides. And [approval is capital's handshake with demand; allocation is supply's](concept-approval-and-allocation.md).

## The three seams

In practice, the most persistent conflict is structural, not personal [argued]. It runs along three seams.

- **Product and platform.** Product is rewarded for growth; platform is measured on cost and reliability. Volume belongs to product, the coefficient and rate to platform.
- **Planning and finance.** A third-party bridge turns capital into operating spend. A deferred decommission extends depreciation. An early order spends cash in one year for capacity charged over several. Each is a finance decision dressed as a capacity one.
- **Planning and supply.** This is where approval meets allocation. It needs five artifacts both sides sign. They are an answer to every ask, pegging, change bands, shortage rules agreed in advance, and a definition of done.

That definition of done anchors on Hixson and Guliani's "Ready to serve" [6]. The 2026 SRE chapter warns against treating "ready" as binary, so a definition can have phases [7].

Finance often distrusts planning's numbers, with reason. Trust comes back the slow way: one template for every team, each baseline and last actual beside its ask.

## Talk before you send the form

A pre-filled intake still arrives as a form from a stranger. Talk with each team one to one before the intake opens. Then gather teams in small groups, and let each say what it believes its biggest launches are. Hand out the intake at the end. Teams may pad less in front of the peers they compete with [argued].

## No surprises in the room

A decision meeting goes well when nobody in it sees their number for the first time [argued]. So walk the numbers up in steps (Section 9.1):

1. Take the baselines to the leaders who own the biggest launches, for their read on what matters.
2. Gather demand from the teams, and take it back to those leaders to rank and trim.
3. Only then show executives the top-down and bottom-up views side by side.
4. Finance, and whoever approves orders, come after that. Have business cases for the largest asks already written.

In the room, have answers ready. When a question has no answer yet, say so, and bring one back by a date. That's how a forum learns to trust the next answer.

## Where your right to refuse comes from

Planning must be able to say no. Your standing rarely comes from rank; planners usually have none [argued]. It comes from the number and the team's own signature. A team far outside a forecast it signed can be asked to wait, because it wrote the terms.

Keep the hold for serious misses, defined in advance; a gate used for small misses gets routed around. Every refusal needs a path forward, such as a re-shaped ask or a dated slot. In the first year, enforcement rests on your persuasion. Writing commitments into the annual agreement moves it off you ([mechanism 7](concept-operating-mechanisms.md)).

## Overrides, reorganizations and misses

- **Overrides** should be allowed, explicit and priced. The log records who decided, what moved up and what moved down. A forum overridden once a year is working; one overridden monthly isn't the decision-maker [argued].
- **Reorganizations** orphan coefficients. Attach every commitment to a durable object, not a person, and have the new leader re-sign.
- **Your own misses** need a rule signed ahead. Finance and product sign shortage-to-idle ratios per layer. Reliability engineering set the precedent: the business sets the availability target [79]. The SRE chapter bases buffers on "SLOs and business impact," aligned across product, SRE and finance [7]. See [buffers and reserves](concept-buffers-and-reserves.md).

## Gaming

Capacity requests are budgets in hardware units, pathologies included [95, 96]. Common games include the late ask, relabeling organic growth as a launch, and parked intents. Each has a counter at the point in the cycle where it pays off. The one that matters most is your own padding. Planning that pads can't credibly ask anyone else not to.

## Legitimacy, change and staffing

Past a point, legitimacy matters more than precision [argued]. Ostrom's design principles for durable commons map onto shared infrastructure [97]. The one that matters most here is a channel to challenge coefficients. A consumer who can challenge one, and sometimes wins, trusts the rest of the bill. Escalate in steps: nudges before bills, bills before constraints. Spotify nudged only teams growing faster than its business [98]. Neither showback nor chargeback is more mature than the other [99].

Much of your job is translation between product, supply and finance. Separate every review line into fact, assumption or ask [argued]. Log every trade you broker, and rotate the role. Unlogged trades become a second, invisible forum.

## Where this comes from

Seed paper, Section 10 and its subsections. The refusal notes and the walk up to the room come from Section 9.1, the intake notes from Section 9.3, and the planning role from Section 14.

Public sources:

- Hixson and Guliani on "Ready to serve" [6].
- The 2026 SRE chapter on phased readiness and buffer sizing [7].
- Availability targets set by the business [79].
- Budgeting pathologies [95, 96], and Ostrom's design principles [97].
- Spotify's nudges [98], and the FinOps Foundation on showback and chargeback [99].

The four things a planner trades in, and the brokering advice, are argued from practice.
