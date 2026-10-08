---
title: "Principles"
short: A few ideas that hold across the whole map. Each one can be tested, and each one says how well it's supported.
kind: foundation
order: 0
cadence: all
altitude: all
levels: all
seed: 1, 5, 6, 9.1, 9.3, 13
---

These aren't virtues. Each one is a claim you could find wrong in practice. If you do, say so: that's how this page gets better.

The first two are the seed paper's two claims. The rest are practices that show up on almost every page of this guide.

## A coefficient is an agreement

The ratio that turns a team's demand into resources (requests per core, terabytes per thousand users) is also a price. When it moves, someone's bill moves. So it needs an owner, a version and a date, and it gets restated when the hardware or the meter changes. [argued]

Auxon and Hixson and Guliani anticipated stating launches in units the planner already prices [1, 6]. The 2026 SRE chapter treats the mapping as "a living model that evolves alongside the system" [7]. The seed paper adds the other reading: the same number is a price, so it's agreed, not just measured.

See it at work: [the coefficient](concept-the-coefficient.md), [quarterly](stage-quarterly.md), [post-launch](stage-post-launch.md).

## Approval is not allocation

An ask can be approved in a common unit and still lack machines of the right shape, in the right place, on time. That gap is real work, and it needs an owner and a ledger. [argued]

See it at work: [approval and allocation](concept-approval-and-allocation.md), [monthly](stage-monthly.md).

## Commit only what the lead time forces

Each supply layer has its own lead time. Commit each layer at its commit point, and hold earlier claims as options. What's still uncertain at that moment picks how you buy: owned, optioned or bridged.

The seed paper builds its cadence on this: "Each cycle commits only what its lead time forces" (Section 9.1).

See it at work: [the map](the-map.md), [commit points](concept-commit-points.md), [annual](stage-annual.md).

## Every number has an owner

Every forecast, coefficient, rate, unused line and gap has a named owner. A number nobody owns drifts, and a remainder nobody owns gets folded into someone else's rate. [argued]

See it at work: [the operating mechanisms](concept-operating-mechanisms.md).

## Name the gap

When supply can't meet an ask, say so, with a date and an owner. Don't trim quietly, and don't let an approval stand in for a delivery. A named gap can be bridged, ranked or refused with a path forward. A hidden one turns up at launch. [argued]

See it at work: [monthly](stage-monthly.md), [weekly](stage-weekly.md).

## Agree the rules before you need them

The re-cut order, the shortage rule, the efficiency landing rule: each is a contract when it's agreed in advance. Proposed after the cut, the shortage or the savings, it's a negotiation. [argued]

See it at work: [annual](stage-annual.md), [people](people.md).

## Say what's unmeasured

Little of this has been tested in public. Mark what's published, what's argued from practice and what nobody has measured yet. The unmeasured parts are where the next work should go. [unmeasured]

See it at work: [limits](limits.md).

## Where this comes from

- The two claims: the seed paper's Sections 1, 5 and 6, and its one page.
- Commit only what the lead time forces: Section 9.1 of the seed paper, building on hierarchical production planning [3] and sales and operations planning [23].
- Every number has an owner, and agree the rules first: the owner column and notes of Sections 9.2 and 9.3.
- Say what's unmeasured: Sections 8.6, 9.4 and 13.
- Putting principles first, as short testable claims rather than values, is this guide's choice. [argued]
