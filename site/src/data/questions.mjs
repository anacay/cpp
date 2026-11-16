// Questions planners ask, answered in a few short sentences each (R11).
// Built for people and for answer engines: each answer stands on its own, says
// only what the linked guide page says, and ends in a door to The Commons with
// the question already filled in. Sentences of 30 words or fewer. No employer
// named as anyone's employer; public sources only, as the guide cites them.
// `more`: [label, url] pairs, internal pages only; the build checks the links.
// `tag`: a Commons tag from room.mjs, or null.
export const QUESTION_GROUPS = [
  { id: 'basics', title: 'The basics' },
  { id: 'demand', title: 'Demand' },
  { id: 'supply', title: 'Supply and lead times' },
  { id: 'cost', title: 'Cost and chargeback' },
  { id: 'ai', title: 'AI and accelerator fleets' },
  { id: 'practice', title: 'Running the practice' },
];

export const QUESTIONS = [
  { id: 'what-does-a-capacity-planner-do', group: 'basics', tag: 'first-question',
    q: 'What does a capacity planner do?',
    a: 'The 2026 SRE chapter defines capacity planning as forecasting future demand and provisioning the supply to meet it. In practice there is a third part: keeping the agreement that pays for it. The planner sits between the people who fund capacity, build it and use it, usually owning no capacity and no budget.',
    more: [['The work and the path', '/guide/the-work-and-the-path/']] },
  { id: 'how-do-i-get-started', group: 'basics', tag: 'first-question',
    q: 'How do I get started in capacity planning?',
    a: 'Follow one path. Read the one page, then four concepts: the coefficient, demand and declarations, commit points, and approval and allocation. Then work one case with the worksheet. If you come from another field, pick the door for your background.',
    more: [['Start by role', '/start/'], ['The one page', '/one-page/']] },

  { id: 'forecast-a-launch-with-no-history', group: 'demand', tag: 'forecasting',
    q: 'How do you forecast demand for a launch with no history?',
    a: 'A trend can extend organic growth, but not a step change with no history. The substitute is a declaration: a signed statement of expected demand, in units the planner already prices. Check it against how comparable declarations turned out. It firms up in stages: intent, dated, configured, live and organic.',
    more: [['Demand and declarations', '/guide/concepts/demand-and-declarations/']] },
  { id: 'demand-nobody-can-predict', group: 'demand', tag: 'forecasting',
    q: 'What about demand nobody sees coming?',
    a: 'The 2026 SRE chapter meets unplanned demand with buffers, autoscaling and demand shaping. When a step arrives that nobody declared, what remains are buffers, bridges and, at the limit, admission control. Most slow layers will already be past their commit points.',
    more: [['Limits: where this breaks', '/guide/limits/'], ['Buffers and reserves', '/guide/concepts/buffers-and-reserves/']] },

  { id: 'how-far-ahead-to-order', group: 'supply', tag: 'supply',
    q: 'How far ahead do you have to order capacity?',
    a: 'It depends on the layer. Land, buildings and utility power take years. Long-haul network takes months to years, and machines and parts take quarters. Turn-up takes weeks per job. Plan on a cautious lead time, near the slow end of what you have seen, because late arrivals are common.',
    more: [['Supply layers and lead times', '/guide/concepts/supply-layers-and-lead-times/']] },
  { id: 'what-is-a-commit-point', group: 'supply', tag: 'supply',
    q: 'What is a commit point?',
    a: 'A commit point is the last date a supply layer’s order can still be placed: its need date minus its cautious lead time. What matters there is how much of the expected demand is still uncertain when that layer must be ordered.',
    more: [['Commit points', '/guide/concepts/commit-points/'], ['Glossary', '/glossary/#term-commit-point']] },
  { id: 'how-much-headroom', group: 'supply', tag: 'supply',
    q: 'How much headroom should I keep?',
    a: 'One line called headroom usually hides several buffers, each with its own owner and sizing. Size each one as a priced decision: compare the cost of running short with the cost of holding spare. Pooling demand is the main saving, though correlated demand erodes it.',
    more: [['Buffers and reserves', '/guide/concepts/buffers-and-reserves/']] },
  { id: 'plans-miss-when-forecast-was-right', group: 'supply', tag: 'supply',
    q: 'Why do capacity plans miss even when the forecast was right?',
    a: 'Approval is not allocation. Approved capacity still has to become the right shape, in the right place, on time, and reach the team that needs it. Demand passes through declared, approved, allocated, delivered, live, adopted and productive, and each step can leak.',
    more: [['Approval and allocation', '/guide/concepts/approval-and-allocation/']] },

  { id: 'how-to-charge-for-shared-capacity', group: 'cost', tag: 'cost',
    q: 'How should shared infrastructure be charged back?',
    a: 'A caller’s bill is roughly volume, times the coefficient, times the rate. Then ask which question a price answers. The average loaded rate answers who pays. Long-run incremental cost answers whether to build. The shadow price answers who gets scarce capacity now.',
    more: [['The coefficient', '/guide/concepts/the-coefficient/'], ['Three prices', '/guide/concepts/three-prices/']] },
  { id: 'capacity-planning-vs-finops', group: 'cost', tag: 'cost',
    q: 'How is capacity planning different from FinOps?',
    a: 'They look at the same fleets from two sides. FinOps leads on seeing and allocating cost, cutting waste and buying commitments well. Capacity planning works on demand, supply, lead times and when to commit. They meet on rates, chargeback and commitments.',
    more: [['CPP and FinOps: who does what', '/related-work/#cpp-and-finops']] },
  { id: 'what-is-a-coefficient', group: 'cost', tag: 'cost',
    q: 'What is a coefficient, and why call it an agreement?',
    a: 'A coefficient is the amount of a resource a service uses per unit of the driver of its load, such as CPU time per request. The planner reads it as a load forecast and the caller reads it as a price. So it needs an owner, versions and restating at breaks.',
    more: [['The coefficient', '/guide/concepts/the-coefficient/'], ['The seed paper, Section 5', '/paper/5-coefficients-are-agreements/']] },

  { id: 'plan-gpu-capacity', group: 'ai', tag: 'gpu',
    q: 'How do you plan capacity for GPUs and AI accelerators?',
    a: 'The structure holds, but the units move. For the largest operators, by their own public account, power is now the binding constraint. Topology is a shape, so a fleet can hold enough chips and still be unable to place a training run. A busy chip is not always a productive one.',
    more: [['AI and accelerator fleets', '/guide/settings/#ai-and-accelerator-fleets'], ['Buildings at AI density', '/notes/buildings-at-ai-density/']] },
  { id: 'price-ai-inference', group: 'ai', tag: 'gpu',
    q: 'Why is a single price per token misleading?',
    a: 'The token is a non-uniform driver. Prefill and decode cost differently, so one price per token misprices prefill-heavy, decode-heavy and long-context work. An AI release is also two shapes: a transient inference spike on a persistent step.',
    more: [['AI and accelerator fleets', '/guide/settings/#ai-and-accelerator-fleets']] },

  { id: 'spot-a-drifting-coefficient', group: 'practice', tag: 'forecasting',
    q: 'How do you notice when resource-per-request numbers drift?',
    a: 'Pick a business driver, instrument it with the infrastructure, and compute the ratio continuously. Alert when the ratio shifts or consumption departs from the forecast, and route it to planning. Treat a shift as a new version with an owner, not a quiet edit.',
    more: [['The measuring loop', '/guide/concepts/measuring-loop/']] },
  { id: 'when-not-to-bother', group: 'practice', tag: 'cloud',
    q: 'When is a formal capacity planning process not worth it?',
    a: 'For small workloads, the 2026 SRE chapter says simple overprovisioning is often the best strategy. Compare each supply layer’s lead time with how long a launch takes to firm up. Where supply is faster, react; where it is slower, that layer needs a commit point.',
    more: [['Scale it to the risk', '/guide/settings/#scale-it-to-the-risk']] },
];
