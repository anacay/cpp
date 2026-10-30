---
title: Case 3: Kuantillion Cloud
short: A fictional hyperscale fleet trying to get the most from its older flash drives during a flash shortage, with the problem set out in full and the practice's answer beside it.
kind: case
order: 3
cadence: all
altitude: all
levels: learning, practicing, leading
seed: 4, 5.4, 6, 8, 9.2
---

*Kuantillion Cloud is a fictional company. Any resemblance to real companies reflects problems the industry shares.*

This is the practice's second problem-space case, and the first with a full answer beside it. The case sets out the problem in full and prescribes nothing. A companion page then works the problem through the practice's body of knowledge, and names where that body of knowledge runs out.

## Before you start

Case 3 runs to about 50,000 words across four pages. You don't need all of it, and you don't need to start cold.

**Five concepts to know first.** Each takes ten to fifteen minutes.

- [The coefficient](concept-the-coefficient.md): one number both forecasts load and prices growth, so someone has to own it.
- [Demand and declarations](concept-demand-and-declarations.md): a step change enters the plan as a signed statement that firms up in stages.
- [Commit points](concept-commit-points.md): each supply layer has a last date to order, often before the demand is known.
- [Approval and allocation](concept-approval-and-allocation.md): an approved ask still needs the right shape, place and time.
- [Buffers and reserves](concept-buffers-and-reserves.md): a buffer is priced by which mistake costs more, running short or holding spare.

**A warm-up.** [Case 1](cases.md#case-1) traces one launch through the practice in a few pages. Read it before this one if the concepts are new.

**Reading times,** at a steady pace: this page, 5 minutes. [The full case](case-kuantillion-cloud-full.md), about 100. [The strategy](case-kuantillion-cloud-practice.md), about 70. [The execution plan](case-kuantillion-cloud-plan.md), about 45. [Second lives](note-second-lives.md), about 10.

**A newcomer's route,** about an hour: this page; the strategy's [problem in brief](case-kuantillion-cloud-practice.md#the-problem-in-brief); one lens, such as [buffers and reserves](case-kuantillion-cloud-practice.md#buffers-and-reserves); the spares decision, [P4](case-kuantillion-cloud-practice.md#p4-size-and-source-legacy-spares); then the plan's [first 30 days](case-kuantillion-cloud-plan.md#3-the-first-30-60-and-90-days).

## The situation

Kuantillion Cloud runs one of the largest computing fleets in the world. It plans about $200 billion of capital spending in 2026 and still calls itself supply constrained. Every year it harvests millions of components from the machines it retires, over 3 million of them drives in 2024. Its reports call them hard drives, so how many were solid-state drives isn't public. Older flash also sits idle inside machines that are still running.

New enterprise flash now costs three to four times what it did a year earlier. Next year's supply is largely pledged. So the old drives look valuable. Each one can go four ways. It can go into a workload that tolerates it, into the pool of repair spares, or into an upgrade or a new build. Or it can leave through resale, recycling or the shredder.

No public source shows Kuantillion Cloud running a program for this. The public record shows every ingredient such a program would need, and every seam it would fall through.

## Why it is hard

Three words recur. A [sink](/glossary/#term-sink) is a place a drive can go: a workload, the spares pool, an upgrade or build, or exit. The [harvest](/glossary/#term-harvest) is the parts a retiring machine releases. The technical gates are the checks a drive must clear before it is supply again, such as fit, firmware and provable erasure. [Second lives](note-second-lives.md#agreeing-on-the-words) defines these terms most clearly.

- **Nobody has said what kind of value it is.** If Kuantillion Cloud's purchase commitments can be rescheduled, a reused drive avoids a purchase. If they are firm, it adds capacity to a sold-out fleet. Those are different numbers, with different beneficiaries.
- **Nobody knows how big it is.** The drive harvest could be under 1% or near 30% of a year's flash deployment, central 3–9% (illustrative). That sets whether this is spares housekeeping or supply strategy. Whether it pays at all is a dollar question.
- **Supply is a byproduct.** Drives come back when a platform retires, for reasons that have nothing to do with drives. Keeping a platform alive raises its need for spares while cutting the harvest that would feed them.
- **A drive has five dimensions, and every sink prices a different one.** Capacity, performance, remaining endurance, fit and condition history. No common unit or price exists inside the fleet.
- **Nobody has published how reused drives behave in a second life.** First-life studies disagree on late-life hazard; firmware, model and error history matter more than age, and failures cluster. Second-life hazard is unmeasured. One bad incident could cost more than the program saves.
- **The organization splits the problem in two.** The people who allocate capacity and the people who recover value sit in different organizations. The technicians who pull drives are measured on ticket speed.

## What's in the case

- The system: where old flash sits, how it moves, and the gates between a retiring host and a second life.
- Demand: the four places a drive can go, and what each one prices.
- The money: a scale model from the market down to one drive, and the fork between avoided purchases and added capacity.
- Two futures for the flash market, with the signposts between them.
- The planning organization as part of the problem.
- Eight decisions and two sub-decisions, with owners and links, eighteen causal chains and seven stress scenarios for 2027.
- Measures of success, a confidence ledger, and sixteen open questions with falsifiers.
- What other industries and the research literature learned first.

Every load-bearing claim carries an evidence tier, so you can see which parts are reported, inferred or speculated.

## How the practice solves it

Two companion pages answer the case. [The strategy](case-kuantillion-cloud-practice.md) is the practitioner's approach. It frames the problem through the practice's concepts, breaks it into the case's decisions and argues the order to work them in, with links to the theory behind each move. [The execution plan](case-kuantillion-cloud-plan.md) turns that strategy into something a program lead can run: owners, gates, cadence, measures and experiments.

Where the practice runs out, the strategy page says so. Most gaps are already solved in neighboring fields, and the strategy adopts those answers. Two stay open: supply that is a byproduct of other decisions, coupled to demand for the same parts, and reused capacity that fails after delivery, as a cohort. Both have a working note, [Second lives](note-second-lives.md).

## How to use it

- **Read the eight decisions** and pick the one closest to your own work. Ask how your organization would decide it before you read the answer.
- **Read the answer critically.** Every judgment that goes past the paper is marked. Challenge the ones you'd do differently.
- **Join the discussion.** Challenge a number, add a reference class, or tell us where the case gets your fleet wrong.
- **Try an exercise at your level** [argued].
  - *Learning:* a spares plan missed because pulls ran above true failures. Split the miss: how much came from weak triage, and how much from the failure rate?
  - *Practicing:* book one retirement as two ledger lines, minus hosts and plus drives, with stage dates for each.
  - *Leading:* draft the shortage rule for the four sinks, and say who signs it before any shortage.

- [The full case](case-kuantillion-cloud-full.md)
- [How the practice solves it](case-kuantillion-cloud-practice.md)
- [The execution plan](case-kuantillion-cloud-plan.md)
- [The working note: Second lives](note-second-lives.md)
- [Discuss it on GitHub](https://github.com/anacay/cpp/discussions)
