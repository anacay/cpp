<!-- Seed edition, v0.1, built from the working paper, version 7.9. Licensed CC BY-SA 4.0. Site page: https://cpp.anacay.org/paper/12-for-mid-sized-companies/ -->

# 12. For mid-sized companies

*In short: at mid-size, your long-lead supply is the cloud commitment, and your list of launches and big customers may already exist as the sales pipeline.*

A company of a few hundred to a few thousand people usually has no data centers and no planning organization. But it runs shared services (a database tier, a data platform, an observability stack, cloud commitments). And it has the same problem: the teams that cause cost aren't the teams that see the bill. The translation:

- **Long-lead supply:** multi-year cloud commitments, reserved capacity, colocation and license renewals. They're negotiated on the vendor's quarter-end calendar, so the renewal date is usually the real annual cycle.
- **The fulfillment gap:** commitments that don't match the shapes and regions used; licenses bought but not deployed. A discount isn't capacity, either: Azure says its Reserved Instances "provide a billing discount only and don't guarantee capacity" [58].
- **The coefficient:** cost per customer, transaction or pipeline run.
- **The unallocated line:** the share of the cloud bill no tag explains, plus software licenses and AI model usage, often on separate invoices or company cards. These can rival the infrastructure bill and have no owner at all.
- **The arbitration forum:** a regular CTO–CFO meeting, which owns the cut line.
- **The broker:** often nobody. Capital is the CFO, supply is the cloud account and its renewal date, and demand is the engineering leads. Someone has to carry information and timing between them; name that person, even part-time.
- **Chargeback:** showback may be the right end state. Below a certain scale, a monthly report each team can reproduce does most of what chargeback would.

**Step changes follow the same logic.** The demand step is a large customer onboarding, a campaign or a product launch; the supply step, a commitment renewal or a provider move. Many companies already keep a declaration register under another name: the sales pipeline, with stages and historical win rates by stage. Feed late-stage deals into the capacity plan, then score them against actual usage. That's Section 5.4 at mid-size. Figure 46 translates the paper's terms.

![Translation map. Long-lead supply becomes multi-year cloud commitments, reserved capacity, colocation and license renewals, on the vendor's quarter-end calendar. The fulfillment gap becomes commitments that don't match the shapes and regions used, and licenses bought but not deployed. The coefficient becomes cost per customer, transaction or pipeline run. The unallocated line becomes untagged cloud spend plus licenses and AI model usage on separate invoices. The forum becomes a CTO–CFO meeting that owns the cut line. Chargeback may stop at showback. Below, the sales pipeline, with win rates by stage, feeds late-stage deals into the capacity plan, and they are scored against actual usage. A strip lists what not to do: chargeback before showback, a tool before drivers and owners, booking unit-cost gains as savings without checking volume, and forecasting a three-year commitment as elastic spend.](figures/E20.svg)

*Figure 46. At a few hundred to a few thousand people, the long-lead supply is the cloud commitment and its renewal date, and the declaration register usually exists already as the sales pipeline.*

**Do you need this?** The SRE chapter's first question is whether you need "the rigorous and expensive process" at all [7]. For small workloads, it says, "simple overprovisioning is often the best strategy," and precision is "only valuable relative to" your other problems [7]. Hixson and Guliani said the same in 2015: for small companies, the limit is "engineering time or management attention," not capacity [6]. *One way to answer it* is layer by layer. Compare each supply layer's lead time with how long a launch takes to firm up, from dated to live. Where supply is faster, react: autoscaling and shared buffers do the job. Where supply is slower, that layer needs a commit point. For most mid-size companies, *my guess* is that it's one layer: the commitment renewal. One path, in steps:

1. Overprovision and autoscale; watch the bill.
2. Show each team its cost, with an owner for the three largest coefficients.
3. Feed late-stage deals from the sales pipeline into the plan, and score them.
4. Walk the renewal through the worksheet (Appendix A).

Stop at the step where the next one costs more than it saves.

**What not to do.** Don't build chargeback before a full cycle of showback, or buy a tool before drivers and owners are agreed. Don't book a unit-cost improvement as savings without asking whether volume grew to meet it. Treat a three-year commitment as the long-lead decision it is: forecasting that applies "KPI growth on actual spend" [108] suits elastic spend, but committed capacity also needs lead time and shape.

**Six questions a CFO or CTO can ask.**

1. Who owns the cost of each of our three largest shared services, by name?
2. What is our cost per unit of the driver the business cares about, and did last quarter's change come from volume, efficiency or price?
3. What share of the bill does no one own?
4. When does our largest commitment renew, and who decides?
5. What did each team ask for last year, and what did it use?
6. Which launches or large customers are coming in the next two quarters, at what stage, and what have we committed for them?
