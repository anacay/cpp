<!-- Seed edition, v0.1, built from the working paper, version 7.9. Licensed CC BY-SA 4.0. Site page: https://cpp.anacay.org/paper/2-why-cost-drivers-exist/ -->

# 2. Why cost drivers exist: the service doesn't cause its own load

*In short: a shared service doesn't cause its own load; its callers do, so the cost signal has to reach them.*

Tell a shared service team to cut costs. It tunes its code, and consumption keeps growing, because its callers cause the load. Economists call this **derived demand**, and it's why cost drivers exist.

A cost driver is a factor whose change changes an activity's cost. Activity-based costing (ABC) uses drivers in two hops [11]. In infrastructure, bills for equipment, power, space and staff land first on the shared services that use them (*resource drivers*). Then they pass to the products that call each service (*activity drivers*).

Network shows it most clearly. Inter-region bandwidth is consumed by replication and cross-region calls no product owns directly, and needs its own drivers: bytes replicated per byte written, and cross-region calls per request.

Tracing is one way to find the caller. Dapper's authors could "point to the causal trace root" of expensive inter-cluster traffic rather than stop at the two peer machines [12]. Flux models the capacity service *s* needs in region *r* this way (notation simplified) [2]:

*c(s,r) = Σ_p a(s,p)·ρ(p,r) + δ(s,r)*

In words: for each product *p*, take the capacity of *s* attributed to *p* (a share of capacity, not the per-unit coefficient α). Multiply it by the share of *p*'s traffic that lands in region *r*. Sum over products, and add a leftover nobody can attribute. Flux's primary use isn't chargeback, though. It computes "an optimal joint capacity and traffic distribution plan," moving product traffic between regions so demand lands where supply exists; attribution is the input that makes the move computable [2].

Two cautions. First, attribution is an estimate. Traces are sampled (Dapper's first production version kept one in 1,024 [12]), and Flux joins them with fleet-wide profiling [2]. Small callers are estimated least accurately. Second, much of a stateful service's work (compaction, replication, re-indexing, backups) has no request at its root and must be apportioned by declared policy. Figure 5 follows the money in two hops, and the part no trace reaches.

![Flow diagram. Equipment, power, space and staff bills flow through resource drivers to shared services, then through traced, sampled activity drivers to Products A, B and C. A network example, labeled as a shared service with its own drivers, reads "bytes replicated per byte written; cross-region calls per request". A side branch carries rootless background work (compaction, replication, re-indexing and backups) and the unattributable leftover δ to an unallocated line, apportioned by declared policy and owned by the service. The formula c(s,r) = sum over products of a(s,p) times ρ(p,r), plus δ(s,r), is shown with its source 2. A note says Dapper's first version sampled one trace in 1,024 12. Schematic.](figures/E3.svg)

*Figure 5. Bills land on shared services first, then follow traced calls to the products that caused them. What no request explains is apportioned by declared policy and kept on an owned line. Schematic.*
