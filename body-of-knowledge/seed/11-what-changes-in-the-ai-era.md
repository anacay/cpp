<!-- Seed edition, v0.1, built from the working paper, version 7.8. Licensed CC BY-SA 4.0. Site page: https://cpp.anacay.org/paper/11-what-changes-in-the-ai-era/ -->

# 11. What changes in the AI era

*In short: the structure holds for AI fleets. The units move toward megawatts and tokens, and a busy chip isn't necessarily a productive one.*

**For the largest operators' AI fleets, by their own public account, the binding constraint has moved toward power.** Asked what kept him up at night, Alphabet's chief executive said "the top question is definitely around compute capacity, all the constraints, be it power, land, supply chain constraints". To another analyst, he said he expected to go through the year "in a supply-constrained way" [90]. Microsoft's chief executive described "maximizing tokens per dollar per watt" [72]. Meta reports having "recovered hundreds of megawatts of power" [100]. Google's SRE chapter states it as operating practice: "strict supply constraints define fleet planning," and "capital alone cannot solve the problem" [7].

When megawatts bind more than dollars, rank by value per unit of the binding resource, not by dollars (Section 4). Define the unit: critical IT megawatts. State the power usage effectiveness (PUE) used to convert to facility power, design or annualized. Illustratively, 10 MW of critical IT load at a PUE of 1.2 is 12 MW of facility power. Say which power: contracted, provisioned or drawn. Rack power density and cooling can also limit which accelerators a building hosts (Section 6.2).

**Scarcity turns unused capacity into competing claims.** Amazon's chief executive said "as fast as we install this capacity, this AI capacity, we are monetizing it" [101]. Where that holds, the unused line shrinks toward its buffers' floor (Section 6.3), and the cost that matters becomes the best claim displaced. Alphabet's chief financial officer said that for 2026 "just over half of our ML compute is expected to go towards the Cloud business" [90]. In July 2026, its chief executive said "we continue to be supply constrained" [102]. He described a priority order: what it takes "to continue AGI development at the frontier" first, then core products and Cloud [102]. Operators disclose such splits' outcomes, not their mechanisms.

**Topology is a shape.** Large training jobs need contiguous accelerators in one interconnect domain. So a fleet can hold enough chips and still be unable to place a job: the "geometry" failure of Section 6.4 [18]. A study of Alibaba's GPU clusters finds the same at a finer grain: sharing GPUs fragments a cluster until hundreds of GPUs can't be allocated [103]. Lumpy training demand suits declaration (Section 5.4); serving demand is driver-based.

**A training cluster is a step change on both sides.** The run is declared, not extrapolated. Its block of accelerators needs power and cooling committed years ahead, while the run is still an intent. That commitment is made against a hardware generation that may not ship on time (Sections 6.5 and 6.7). A model launch is the opposite: a transient inference spike on a persistent step. Declare it as two shapes (Section 6.6). Figure 44 maps what changes, and shows a training cluster as a step on both sides.

![Two panels. (a) Four translations. For the largest operators' AI fleets, by their own account 72, 90, the binding resource moves from dollars toward critical IT megawatts; say which power, and at a PUE of 1.2, 10 MW of IT load is 12 MW of facility power. Shape becomes one interconnect domain, where quota can exist without geometry, in about 1% of cases 18. The driver becomes tokens with two phases: 1,900 tokens in and 100 out is mostly prefill compute, while 100 in and 1,900 out is 1,900 decode steps holding cache memory. Productivity moves from utilization to goodput. (b) A schematic timeline: a training run is declared and still an intent while its power and cooling are committed years ahead, against a hardware generation that may not ship on time. A model launch is a transient spike on a persistent step, declared as two shapes. Illustrative.](figures/E19.svg)

*Figure 44. For AI fleets the structure holds, but the units move: for the largest operators, by their own account, megawatts bind, an interconnect domain is a shape, a token has two phases, and a training cluster is a step change on both sides at once.*

**The token is a non-uniform driver.** A request has two phases: reading the prompt (prefill) and writing the answer one token at a time (decode). DistServe serves prefill and decode on different GPUs under separate latency objectives [104]. Prefill cost grows faster than linearly with prompt length. Decode cost rises with context length, since each new token reads back over the key-value cache. That cache grows with context, consumes accelerator memory and so limits batch size (how many requests share a chip at once). Illustratively, 1,900 tokens in and 100 out is mostly prefill compute; 100 in and 1,900 out is 1,900 decode steps, each holding cache memory. One price per token misprices prefill-heavy, decode-heavy and long-context work. Batching also revives Dapper's coalescing problem, so declare the apportionment rule.

**Utilization is the wrong productivity measure.** ML Productivity Goodput multiplies scheduling, runtime and program goodput, rejecting the assumption that "Utilization == Productivity". Runtime goodput counts only progress saved in checkpoints, so work lost to failures and preemptions discounts supply [105]. Illustratively, of 100 accelerator-hours, a job is scheduled for 90 (scheduling goodput 0.9). A failure wipes out 9 hours since the last checkpoint (runtime goodput 0.9). The remaining 81 run at 70% of what the program could achieve (program goodput 0.7). So 0.9 × 0.9 × 0.7 ≈ 0.57: about 57 hours of real progress.

For an accelerator fleet, then, keep practical capacity as the denominator (Section 4) and split it four ways, not two:

- **Idle capacity** (the 10 unscheduled hours) goes on the unused line, owned by the service.
- **Work lost to failures and preemptions** (the 9 hours) is owned by its cause: infrastructure for hardware failures, scheduling policy for preemptions, the workload for its checkpoint interval.
- **Allocated time below the program's achievable efficiency** (about 24 hours) is owned by the workload (Figure 15, gap f).
- **Goodput** is the remainder (about 57 hours).

Fold the middle two into the unused line, and the provider is charged for losses the tenant caused. Figure 45 shows the split.

![Stacked bar of 100 accelerator-hours: 10 idle (unused line, service), 9 lost to failures and preemptions (owned by cause), about 24 below the program's achievable efficiency (workload), about 57 goodput. 0.9 × 0.9 × 0.7 ≈ 0.57, the ML Productivity Goodput split 105; goodput is the blue slice. Illustrative.](figures/A7.svg)

*Figure 45. Of 100 illustrative accelerator-hours, about 57 are real progress. Each of the other slices has its own owner, and folding them together charges the provider for the tenant's losses.*

**Coefficients, lives and prices shift.** The FinOps Foundation writes that "the unit economics of inference are non-stationary" [106]. Economic life can end before accounting life when a new generation is more efficient per watt, so a rate set on accounting life understates cost (Section 4). An old warning returns: Jevons argued in *The Coal Question* that economy of use can raise total consumption [107]. Today's version: "a token may get cheaper; tokens, in aggregate, are not" [106].
