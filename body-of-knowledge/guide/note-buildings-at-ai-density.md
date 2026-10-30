---
title: Buildings at AI density
short: The shell used to be fungible, and half the discipline quietly leaned on that. The first emerging-topics working note.
kind: note
order: 4
cadence: annual
altitude: envelope, region
levels: leading, capital, supply
seed: 6.2, 8.2, 8.3, 13
---

*Stage: working note. Status: draft, open for argument. The question: what does capacity planning lose when buildings stop being interchangeable, and what replaces it? Related: Section 6.2, Section 8.2, Section 8.3. Discussion: [#18](https://github.com/anacay/cpp/discussions/18).*

## The seed

This note grew from [discussion #18](https://github.com/anacay/cpp/discussions/18). The reviewer who opened it quoted the seed paper's line that "a shell stays fungible only if its specification (power per rack, cooling type) is written against the high scenario" (Section 6.2), and put experience behind it: in the past, a steady power-to-space ratio gave reasonable fungibility, and the fungibility of new high-density buildings "may be extremely limited and particularly awful at supporting storage."

That observation is bigger than a caveat. The paper already says every step down the supply chain "spends some fungibility" (Section 6.2). This note tries to work out what happens when the top step — the building itself — spends nearly all of it.

## Agreeing on the words

**Fungible** means interchangeable: any rack can land in any hall, so one pool of building capacity serves every kind of demand. For roughly two decades, most racks drew 5 to 10 kW and a shell designed once could be reused for whatever came next (reported industry figures; sources at the end). Current AI racks ship at about 120 kW, and vendor roadmaps show 600 kW racks for 2027 (vendor statements, reported). A hall built for one of these densities does not casually take the other.

**The shell** is everything slower than the machines: the building, its power distribution, its cooling plant, and behind them the substation, the grid connection and the permits. Each layer is harder to change than the one below it.

Economists have a name for what changed. Capital that is flexible before it is built and fixed after is called **putty-clay** (Johansen 1959; sources at the end). Before the pour, a building can be anything. After, it is clay. The pour is a [commit point](concept-commit-points.md) — the same idea the paper applies to machine orders, one layer up.

One more distinction. **Substitution** (Section 8.3) is covering demand of one kind with capacity of another, decided at planning time. **Flexibility** is the built-in ability to do so, bought at design time. While the shell was fungible, flexibility at this layer was free, so nobody priced it. That free flexibility is the thing now being withdrawn.

## Why it matters

The paper already uses the operations canon at the machine layer: chained flexibility across machine shapes [77], postponement down the supply chain [73], the option value of waiting [76]. The claim of this note is that the same results now need to be applied one layer up, to the halls themselves — and that several of the discipline's quiet assumptions break if they are not. The chain of reasoning, one small step at a time; each step is open to challenge.

**1. Lead times are inherited.** "Plan at least as far ahead as the order time for your resources" is the frame the paper builds on [6]. The quiet question is which resource. A machine order's real lead time is the lead time of the slowest non-fungible thing it needs. If the right hall type exists, that is weeks or quarters. If it does not, the order inherits the building's clock — and the building inherits the grid's, where connection queues in major markets now run years (IEA, reported). Walking the commit points (Section 8.2) now has to start above the layers the paper walks, and the highest layer dominates [argued].

**2. The forecast question changes from "how much" to "what kind."** A fungible pool needs a total. Typed halls need the mix — AI density against everything else — at the building's horizon of three to five years, which is exactly where the mix is least knowable. It becomes possible to be right in total and wrong everywhere [argued].

**3. Pooling dies where fungibility dies.** One pool lets independent errors cancel; Eppen measured the saving when newsvendor locations consolidate [81]. Typed halls run the result in reverse: they partition the pool. A surplus in air-cooled halls cannot absorb a shortfall in liquid-cooled ones. Aggregate forecast accuracy becomes a misleading number [argued].

**4. Reserves must be typed, and typed reserves cost more.** A buffer only protects the pool it can serve. Split one pool into several and the same protection needs more total buffer — the pooling result [81], run in reverse again. The cost of safety rises as fungibility falls [argued].

**5. Mistakes turn asymmetric.** In a fungible world, overbuilding costs carrying charges. In a typed world, overbuilding the wrong hall costs carrying charges plus the full building lead time to get the right one. A mix miss is priced in years, not dollars [argued]. This is not hypothetical: one large operator cancelled a nearly-complete European expansion plan in late 2022 because the existing design could not be retooled for its AI-era needs, and rescoped its other projects in flight (press reporting; sources at the end).

**6. Flexibility becomes a priced option.** The paper already carries the option value of waiting [76]. The same machinery prices the option to convert: the more uncertain the mix, the more a flexible build is worth, because irreversible investment under uncertainty rewards whoever keeps choices open (Pindyck 1991). The substitutes a team will accept (Section 8.3) stop being free and become something someone pays for [argued].

**7. The incentive games move upstream.** When typed hall space is the scarce thing, the games the practice worries about — inflated declarations, hoarding, the ratchet (see [discussion #9](https://github.com/anacay/cpp/discussions/9)) — replay at the building layer, with multi-year stakes and a slower release valve. Economics knows this terrain as asset specificity and hold-up: the more specific the asset, the longer the commitment that must back it, a result measured in long-term supply contracts (Joskow 1987). A team whose workload fits only one hall type is in a hold-up relationship with whoever owns that hall [argued].

**8. The miss accounting gains a term.** The paper splits a bill miss into volume, coefficient and rate, and gives each piece an owner. "Right total, wrong type" lands in none of them. A mix term is missing, and a miss with no term has no owner [argued].

## How it applies

If fungibility at the building layer is no longer free, the practice can buy back pieces of it deliberately. Each mechanism below is a candidate, not a recommendation.

**A chain of halls, not universal flexibility.** Jordan and Graves found that limited flexibility, configured so products and plants chain together, yields most of the benefit of total flexibility [77]. The paper already reads this across to machine shapes (Section 6.2). The building version: every demand type has at least two hall types it can land in, and every hall type serves at least two demand types. Nobody needs every hall convertible; they need the chain unbroken [argued].

**Postponed fit-out.** Section 6.2 already prescribes postponement at this layer [73]: commit to buildings, power and common parts on the slow clock, and to configured machines on the fast one. The open question is how late the density-defining fit-out — cooling headers, power topology — can genuinely wait. That is an engineering limit this note cannot set [unmeasured].

**Priced flexibility.** Retrofitting an air-cooled hall for liquid cooling is possible but constrained — power, floor loading, pipework, live-site risk — and one analyst model finds it attractive only with committed tenants and a price premium (industry analysis, reported). So any flexibility a plan relies on should carry a cost range and an owner. Who pays for the convertible hall? Utility economics asked the same question about peak capacity and answered it with pricing [43, 44] [argued].

**A mix term in the waterfall.** Volume, mix, coefficient, rate — each with an owner, agreed with finance before the miss, the same rule the paper sets for the other three terms [argued].

**Demand shaping as software fungibility.** Workloads built to run in either hall type, and placement systems that treat hall type as a constraint to optimize around, restore pooling from the demand side. On a machine-order timescale, this is the only fungibility still for sale [argued].

**An invented example, labeled illustrative.** A portfolio holds 100 units of hall capacity, forecast to split 60 air-cooled against 40 liquid-cooled. The mix lands 45 against 55. Total demand was forecast perfectly. With fungible halls, the error costs nothing. With typed halls and no chain, 15 units sit idle in air halls while 15 units of liquid demand wait years for a building. If one hall in five had been built convertible, the chain covers the swing for the conversion premium on 20 units. Every number here is invented to show the shape.

## Where we're unsure

Open questions, each an invitation. The thread for all of them is [#18](https://github.com/anacay/cpp/discussions/18).

1. **Where exactly is the putty-clay moment in a modern build?** The pour, the power topology, the cooling headers, or the fit-out? Does postponement genuinely move it, or only relabel it? [unmeasured]
2. **Can the flexibility premium be priced from public figures** — retrofit costs against new-build premiums — or only from inside an organization? [unmeasured]
3. **Is the chain symmetric?** Converting air to liquid and liquid to air may cost very differently, which would make the chain directional [unmeasured].
4. **Who owns the mix forecast** — the planner, the real-estate organization, or the steering group — and at what cadence is it re-declared? [argued]
5. **Is storage the stranded middle?** The #18 thread suggests new high-density buildings may be "particularly awful at supporting storage." If AI halls and storage halls diverge hardest, the chain breaks first at its quietest link [unmeasured].

## Where this comes from

The thread is [discussion #18](https://github.com/anacay/cpp/discussions/18); this note's framing and mistakes are the practice's own. Seed paper: Section 6.2 (fungibility, postponement and chained flexibility), Section 8.2 (walking the commit points), Section 8.3 (accepted substitutes), Section 13 (limits). The operations and economics results cited by number are in the paper's references. Their application to buildings is argued, not measured. The sources below are new to this note and were checked in October 2026.

**Sources.**

- Johansen 1959, "Substitution versus Fixed Production Coefficients in the Theory of Economic Growth," Econometrica: https://www.econometricsociety.org/publications/econometrica/1959/04/01/substitution-versus-fixed-production-coefficients-theory
- Pindyck 1991, "Irreversibility, Uncertainty, and Investment," Journal of Economic Literature: https://www.nber.org/papers/w3307
- Joskow 1987, "Contract Duration and Relationship-Specific Investments: Empirical Evidence from Coal Markets," American Economic Review 77(1): https://ideas.repec.org/a/aea/aecrev/v77y1987i1p168-85.html
- Rack density and liquid-cooling adoption (reported survey figures, Feb 2026): https://mgrid.org/2026/02/13/data-center-pue-plateau-liquid-cooling-19-percent-adoption/
- Vendor rack-density roadmap statements (Mar 2025): https://www.datacenterdynamics.com/en/analysis/nvidia-gtc-jensen-huang-data-center-rack-density/
- The cancelled and rescoped expansion projects (Dec 2022): https://www.datacenterdynamics.com/en/news/exclusive-after-meta-cancels-odense-data-center-expansion-other-projects-are-being-rescoped/
- Retrofit economics and constraints (industry analysis): https://stlpartners.com/articles/data-centres/liquid-cooled-data-centre-retrofits-economics/
- Grid connection queues (IEA): https://www.iea.org/reports/electricity-grids-and-secure-energy-transitions/executive-summary
