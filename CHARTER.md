# Charter

*The Capacity Planning Practice · Seed edition, v0.1 · October 2026*

## Why this exists

Capacity planning is becoming a profession of its own. You can see why in the numbers.

- Data centres used about 415 TWh of electricity in 2024, around 1.5% of the world's total ([IEA, April 2025][iea25s]). The International Energy Agency expects that to "more than double by 2030 to around 945 terawatt-hours" ([IEA, April 2025][iea25]).
- Demand from data centres "soared by 17% in 2025" ([IEA, April 2026][iea26]). The IEA also names shortages of gas turbines, transformers and chips, and a project pipeline that is "holding up grid connections and other necessary approvals".
- Single companies now guide to capital spending of close to $200 billion a year. Alphabet's initial 2026 guidance was "$175 billion to $185 billion" ([Alphabet, February 2026][goog]), later raised, per press reports.
- Compute is heading to orbit. Google is studying "solar-powered satellite constellations with TPUs", with two prototypes "slated to launch … by early 2027" ([Google Research, November 2025][sun]). A startup, Starcloud, says its first satellite "launched in November 2025 with the first Nvidia H100 GPU in space" ([Starcloud][sc]).

All of it has to be planned. Someone has to say how much, where, and by when. Someone has to order land, power, network and machines years before the demand is certain. And someone has to keep finance, supply and the teams who use the capacity in one agreement.

That someone is a capacity planner. Frontier labs and cloud providers now post the role by name. One posting asks the hire to "move capacity planning from an ad hoc process to a rigorous, repeatable, and forward-looking strategic function" ([OpenAI careers, seen October 2026][oai]). In my experience, many people in these roles are new to them. They know the latest accelerators well. They're hired to plan, and then they find out how much of the job is lead times, contracts, forecasts and people.

There's good work to learn from. The Computer Measurement Group (CMG) has gathered performance and capacity people since its roots as a user group in 1971, under the CMG name since 1975 ([CMG][cmg]). ITIL describes capacity and performance management as a practice. Books by Neil Gunther (2007) and John Allspaw (2008) cover the craft. Hixson and Guliani's 2015 article called it "a torturous exercise in spreadsheets and meetings" and showed how to make it less so ([;login:, February 2015][hg]). Google's *Site Reliability Engineering* book names capacity planning as a core tenet of the work ([SRE book, chapter 1][sre]), and its second edition (September 2026) gives it a full chapter. The FinOps Foundation showed, for cloud cost, that practitioners can build an open framework together ([FinOps Foundation][finops]).

What we couldn't find is an open place where practitioners build a shared body of knowledge together, and keep it current as the work changes. So this is that place. It doesn't replace any of the above. It links to them, credits them, and builds on them. If something like this already exists, tell us. We'd rather join it than compete with it.

The work is growing, and it's a real professional path. So let's get together and build its body of knowledge in the open, starting with a request for comments on one seed paper.

## What the practice covers

Capacity planning here means planning the capacity behind digital services: compute, storage, network and accelerators, and the space, power and contracts underneath them. It covers:

- **Demand.** Organic growth, step changes such as launches and events, and how firm a forecast is when it's needed.
- **Supply.** Layers, lead times, contracts, power, and supply's own step changes.
- **Cost.** Drivers, coefficients and rates: what a unit of demand costs, and who owns each number.
- **The agreement.** Capital funds, supply builds and demand uses. The planner brokers between them, usually with no budget of its own.
- **Operating it.** Cadence, intake, ledgers, reviews, and what to do when a plan misses.
- **Settings.** Large fleets, AI and accelerator fleets, cloud commitments, and mid-sized companies.

Neighboring fields have their own homes: performance engineering, FinOps, supply chain, sales and operations planning, energy planning. We link to them rather than rewrite them.

## What the body of knowledge is, and isn't

It is a guide to how capacity planning is practiced: the terms, the methods, the cases and the sources. It says how well each piece is supported. It's written in plain language, for a planner who has to act on Monday.

It isn't a standard or a certification. It isn't any one company's process, and it isn't a vendor's method. It isn't a pitch for anyone's services, including the steward's. And it isn't finished. It starts small, on purpose.

The seed is one working paper, *The Coefficient Is an Agreement* (v7.6). It makes two claims and offers one method. It's published as a request for comments: anyone can select a passage on the site and open a thread on it, and the author has pinned the first open questions himself. Everything in it is open to challenge, starting now.

## Principles

**Open.** The content is licensed CC BY-SA 4.0. Anyone can read it, share it, teach from it and adapt it, as long as they credit it and share alike. The site code is MIT. Nobody, including the steward, can take it private.

**Credit.** Everyone who contributes is named, by edition. Prior work is credited where it got there first. When in doubt, credit more.

**Invented examples.** Cases and numbers are invented or anonymized, and labeled *illustrative*. A good example teaches the shape of a problem. It doesn't need anyone's real data.

**No employer secrets.** No internal system names, no confidential figures, no real internal ratios, nothing that implies access to private data. If you're not sure, leave it out. Public sources are always welcome.

**Evidence labels.** Every claim carries one of three labels:

- **Published:** a public source says it. Cite it.
- **Argued:** it comes from practice and reasoning. Say so.
- **Unmeasured:** nobody has published data on it yet, as far as we can find. Say that too.

Saying what's unmeasured is useful. It's where the next research should go.

**Plain language.** Short sentences. Terms are explained before they're used. Opinion is marked as opinion.

**Consensus over authority.** A change is accepted because the people who discussed it reached rough consensus, not because of who proposed it. [HOW_IT_GROWS.md](HOW_IT_GROWS.md) explains how.

## How it will grow

Practices grow in editions. Project management is one example. The Project Management Institute first met in 1969, and its board approved a body-of-knowledge document in 1987 ([PMI founders][pmif]; [Webster, *PM Network*, 1994][pmi]). The guide has grown edition by edition since.

We'll work the same way, at a much smaller scale.

- **v0.x, the seed.** The paper and the first shared pieces: a glossary, a reading list, a case library. Expect frequent small versions.
- **Edition 1.** Published after a survey of practitioners and an open comment round. It'll carry a "what changed" table and a list of everyone who contributed.
- **Later editions.** Same rhythm. Each one says what was kept, merged, moved or dropped, and why.

Over time, the body of knowledge will split in two:

- **A stable core.** Scope, principles, the shared terms, and the few ideas that have survived real use and open challenge. It changes slowly, and only by edition.
- **A practice guide.** Methods, worksheets, mechanisms and cases. It changes as often as the work does.

We won't make that split early. First the community has to prove what lasts.

## Stewardship

Anacay stewards the practice for now. It holds the domain, the repository and the group, and keeps the lights on. The stated intent is to hand it to community governance as the community grows. [GOVERNANCE.md](GOVERNANCE.md) sets out how.

The practice was started by Guillermo Martinez, who wrote the seed paper. It belongs to the people who build on it.

## Join in

Read a section. If something is wrong, unclear or missing, say so. That's the whole contribution model, and it takes about five minutes. Start with [CONTRIBUTING.md](CONTRIBUTING.md).

[iea25]: https://www.iea.org/news/ai-is-set-to-drive-surging-electricity-demand-from-data-centres-while-offering-the-potential-to-transform-how-the-energy-sector-works
[iea26]: https://www.iea.org/news/data-centre-electricity-use-surged-in-2025-even-with-tightening-bottlenecks-driving-a-scramble-for-solutions
[goog]: https://abc.xyz/investor/events/event-details/2026/2025-Q4-Earnings-Call-2026-Dr_C033hS6/
[sun]: https://research.google/blog/exploring-a-space-based-scalable-ai-infrastructure-system-design/
[sc]: https://www.starcloud.com/starcloud-1
[iea25s]: https://www.iea.org/reports/energy-and-ai/executive-summary
[oai]: https://openai.com/careers/strategic-compute-capacity-planning-lead-san-francisco/
[cmg]: https://www.cmg.org/2009/08/measureit-issue-7-08-the-genesis-of-cmg/
[hg]: https://www.usenix.org/publications/login/feb15/capacity-planning
[sre]: https://sre.google/sre-book/introduction/
[finops]: https://www.finops.org/framework/
[pmif]: https://www.pmi.org/about/learn-about-pmi/founders
[pmi]: https://www.pmi.org/learning/library/project-management-certification-history-development-4941
