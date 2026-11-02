// The doors on /start/: one per kind of reader. `page: true` doors get their
// own page at /start/<id>/; the rest are sections on /start/ (#<id>).
// Times are reading times at 220 words a minute (ONBOARDING_MAP §2, or the
// built pages' word counts where the map gives none).
//
// Each door: who it is for, a reading path (`steps`: label, URL, minutes and
// why it matters), the moment it usually clicks (`aha`), three open problems
// (agenda item ids from agenda.mjs) and one first contribution. Every URL must
// resolve: the build's link check (check 5) covers anchors too.
export const doors = [
  {
    id: 'new', name: 'New to the role', time: '35 minutes', page: true,
    who: 'Up to two years in. You may arrive from hardware, site reliability, finance, supply chain or program management.',
    steps: [
      ['One page', '/one-page/', 2, 'The whole argument on one screen.'],
      ['Your route in, and the levels', '/guide/the-work-and-the-path/#how-people-come-into-it', 5, 'What carries over from your old work, and what is new.'],
      ['The coefficient', '/guide/concepts/the-coefficient/', 3, 'A bill is driver times coefficient times rate. Each term has an owner.'],
      ['Demand and declarations', '/guide/concepts/demand-and-declarations/', 4, 'How teams say what they will need, and how firm it is.'],
      ['Commit points', '/guide/concepts/commit-points/', 4, 'Each supply layer has a last date it can be ordered.'],
      ['Approval and allocation', '/guide/concepts/approval-and-allocation/', 4, 'Approving an ask is not the same as delivering machines.'],
      ['Case 1', '/guide/cases/#case-1-the-launch-that-needed-memory', 3, 'One launch, start to finish.'],
      ['Split a bill miss', '/guide/the-work-and-the-path/#try-it-on-the-example', 10, 'The Learning exercise: split one team’s miss into its three terms.'],
    ],
    aha: 'A team can land within 4% of its forecast and still be 30% over its bill. Two of the bill’s three terms belong to someone else. So a bill miss is not only a forecasting failure. Ask who owns each term.',
    ahaSource: ['Case 1', '/guide/cases/#case-1-the-launch-that-needed-memory'],
    problems: ['worksheet', 'q13', 'competency-map'],
    first: { item: 'glossary-terms', text: 'Name one word that confused you. Open a Terms discussion, or send it to cpp@anacay.org and it is posted for you.' },
  },
  {
    id: 'practicing', name: 'Practicing planners', time: '55 minutes',
    who: 'You run intakes, supply reviews and the ledger.',
    steps: [
      ['One page', '/one-page/', 2, 'The whole argument on one screen.'],
      ['Principles', '/guide/principles/', 4, 'The rules the rest of the guide leans on.'],
      ['The map', '/guide/the-map/', 6, 'Read “The same launch, with the method” closely.'],
      ['Quarterly', '/guide/quarterly/', 7, 'The intake and the supply review.'],
      ['Monthly', '/guide/monthly/', 6, 'Where stocked machines and turn-up commit.'],
      ['Buffers and reserves', '/guide/concepts/buffers-and-reserves/', 4, 'One line called headroom hides several buffers.'],
      ['The worksheet', '/worksheet/', 17, 'Work one launch through the method.'],
      ['Open questions', '/open-questions/', 5, 'Where the seed paper runs out.'],
    ],
    aha: 'On the map, the stored-data question moves from −3 to −12 months. The method doesn’t make the forecast more accurate. It moves the hard question to the date it was needed.',
    ahaSource: ['The map', '/guide/the-map/'],
    problems: ['q2', 'q11', 'q8'],
    first: { item: 'q2', text: 'Reply in Q2’s thread with the shape of asked against landed. Index it so the plan is 100, and leave out real figures.' },
  },
  {
    id: 'senior', name: 'Senior planners', time: '1 hour 50 minutes',
    who: 'You design the portfolio, the envelope and the process across organizations.',
    steps: [
      ['Executive summary', '/summary/', 5, 'The seed paper’s argument, end to end.'],
      ['Operating mechanisms', '/guide/concepts/operating-mechanisms/', 5, 'Thirteen mechanisms and nine decision rights.'],
      ['Annual', '/guide/annual/', 8, 'The envelope, and the slow layers it commits.'],
      ['Post-launch', '/guide/post-launch/', 8, 'Where misses are split by owner and declarations are scored.'],
      ['People', '/guide/people/', 7, 'Seams, refusal and overrides.'],
      ['Limits', '/guide/limits/', 5, 'What is argued, what is measured, and where the ideas break.'],
      ['Case 3, the newcomer route', '/cases/kuantillion-cloud/', 60, 'The case page, the problem in brief, one lens, P4 and the plan’s first 30 days.'],
      ['Where the theory runs out', '/cases/kuantillion-cloud-practice/#where-the-theory-runs-out', 5, 'Two gaps with no ready answer.'],
    ],
    aha: 'The discipline is mostly argued, not measured. Six of thirteen mechanisms have no test that can fail, and none of the seven tests has been run. Your experience is the missing evidence.',
    ahaSource: ['Limits', '/guide/limits/#what-has-and-hasnt-been-measured'],
    faster: ['Short of time? Swap step 7 for', 'Case 2 in practice', '/cases/popcorn-pajamas-practice/', 'about 13 minutes.'],
    problems: ['q7', 'q14', 'q12'],
    first: { item: 'six-mechanisms', text: 'Propose a test that can fail for one of the six mechanisms that have none.' },
  },
  {
    id: 'head', name: 'People who lead planning teams', time: '42 minutes',
    who: 'You run a team and own the forum where capacity is decided.',
    steps: [
      ['One page', '/one-page/', 2, 'Including “Five questions for your own planning”.'],
      ['Executive summary', '/summary/', 5, 'The argument your team would be asked to adopt.'],
      ['Settings', '/guide/settings/#what-to-fix-first', 5, '“What to fix first” maps each symptom to one mechanism.'],
      ['Six roles, six promises', '/paper/14-a-minimum-viable-discipline/', 4, 'The smallest version of the discipline that still holds.'],
      ['People', '/guide/people/', 7, 'Seams, refusal and overrides.'],
      ['The path and the levels', '/guide/the-work-and-the-path/#the-path', 4, 'Who usually works where, from Learning to Leading.'],
      ['Roadmap', '/roadmap/', 5, 'The competency map and the survey.'],
      ['Governance', '/governance/', 5, 'How decisions are made, and by whom.'],
      ['The founding circle', '/circle/', 2, 'What members commit to, and who runs the room.'],
    ],
    aha: 'The “What to fix first” table gives you a diagnostic for Monday. “Bills miss and nobody can say why” leads to splitting the miss and publishing coefficients.',
    ahaSource: ['Settings', '/guide/settings/#what-to-fix-first'],
    problems: ['q3', 'survey', 'q15'],
    first: { item: 'competency-map', text: 'Describe what a planner at each level should be able to do. The competency map is about skills and growth. Or, with two hours a week to give, ask about the co-organizer role on Roles.' },
  },
  {
    id: 'program-managers', name: 'Program managers', time: '25 minutes',
    who: 'Many accelerator fleets are planned by program managers. You hold the schedule, the forum and the trade-offs.',
    steps: [
      ['AI and accelerator fleets', '/guide/settings/#ai-and-accelerator-fleets', 5, 'Power binds, topology is a shape, and a busy chip isn’t a productive one.'],
      ['Approval and allocation', '/guide/concepts/approval-and-allocation/', 4, 'An approved ask still has to become machines of the right shape, place and time.'],
      ['Three prices', '/guide/concepts/three-prices/', 4, 'Who pays, should we build, and who gets scarce capacity now.'],
      ['Buildings at AI density', '/notes/buildings-at-ai-density/', 9, 'What planning loses when halls stop being interchangeable.'],
    ],
    aha: 'Approval is not allocation. A fleet can hold enough chips and still be unable to place one training run, because topology is a shape.',
    ahaSource: ['AI and accelerator fleets', '/guide/settings/#ai-and-accelerator-fleets'],
    problems: ['q3', 'q13', 'mix-owner'],
    first: { item: 'q3', text: 'Describe how your accelerator forum decides, with no names or figures. Reply in Q3’s thread, or write privately.' },
  },
  {
    id: 'sre', name: 'Site reliability engineers', time: '20 minutes', page: true,
    who: 'You know load, headroom and failure. The new parts are money, supply and the annual cycle.',
    steps: [
      ['Scale it to the risk', '/guide/settings/#scale-it-to-the-risk', 5, 'Where autoscaling is enough, and where a layer needs a commit point. Then read “Mid-sized companies” on the same page.'],
      ['The measuring loop', '/guide/concepts/measuring-loop/', 4, 'The ratio you already graph, two alerts, and who each one reaches.'],
      ['Approval and allocation', '/guide/concepts/approval-and-allocation/', 4, 'The guide calls it “the bin-packing problem with money attached”.'],
      ['Where the ideas break', '/guide/limits/#where-the-ideas-break', 5, 'Elastic cloud, caches and stateful services, and demand no one can declare.'],
    ],
    aha: 'The ratio alert has to compare with the published version, not just the recent past. A coefficient wrong from the start never shifts.',
    ahaSource: ['The measuring loop', '/guide/concepts/measuring-loop/#how-to-use-it'],
    problems: ['q6', 'q13', 'elastic-cloud'],
    first: { item: 'q6', text: 'Say how you attribute cost for one cache or stateful service, sanitized. Reply in Q6’s thread.' },
  },
  {
    id: 'finance', name: 'Finance partners', time: '25 minutes', page: true,
    who: 'You fund the capacity, set the rates or run FinOps.',
    steps: [
      ['Three prices', '/guide/concepts/three-prices/', 4, 'Rates, build decisions and scarcity each need their own price. Finance usually owns the first.'],
      ['The coefficient', '/guide/concepts/the-coefficient/', 3, 'A bill is driver times coefficient times rate. You see the rate; the coefficient is where bills surprise.'],
      ['Case 1', '/guide/cases/#case-1-the-launch-that-needed-memory', 3, 'A forecast within 4% and a bill 30% over, split by owner.'],
      ['Post-launch', '/guide/post-launch/', 7, 'The variance split: volume, coefficient and rate, each with an owner.'],
      ['People', '/guide/people/#the-three-seams', 6, 'The planning and finance seam: bridges, deferred decommissions and early orders.'],
    ],
    aha: 'Set the rate on usage, and one consumer’s exit raises every other bill. Set it on practical capacity, and the idle hours sit on their own owned line instead.',
    ahaSource: ['Three prices', '/guide/concepts/three-prices/#how-to-use-it'],
    problems: ['q9', 'q14', 'unallocated-owner'],
    first: { item: 'q9', text: 'Say what shortage-to-idle ratio you would set for one layer, and who in your organization would sign it.' },
  },
  {
    id: 'supply', name: 'Supply partners', time: '30 minutes', page: true,
    who: 'You build or source the capacity: supply chain, data centres, power or network.',
    steps: [
      ['Supply layers and lead times', '/guide/concepts/supply-layers-and-lead-times/', 5, 'Each layer has its own lead time and terms.'],
      ['Commit points', '/guide/concepts/commit-points/', 4, 'The last date each layer can be ordered, and what each side owes the other.'],
      ['Monthly', '/guide/monthly/', 6, 'Where stocked machines, turn-up and allocation commit.'],
      ['Buildings at AI density', '/notes/buildings-at-ai-density/', 9, '“The pour is a commit point.” Its open questions live in Discussion #18.'],
      ['What planning owes supply', '/paper/8-the-commit-point-method/#8-3-what-each-side-owes-the-other', 4, 'Six things per layer, before its commit point.'],
    ],
    aha: 'Slips are the most common timing miss. So the right to push a delivery out is often worth more than the right to cancel.',
    ahaSource: ['Supply layers and lead times', '/guide/concepts/supply-layers-and-lead-times/'],
    problems: ['q4', 'q5', 'q11'],
    first: { item: 'q4', text: 'Add one public source on order-to-dock time, turn-up or cancel terms, with a link and the quote.' },
  },
];

export const doorPages = () => doors.filter((d) => d.page);
export const minutes = (d) => d.steps.reduce((n, s) => n + s[2], 0);
// Each door's headline time is the sum of its steps, so the two never
// disagree. (The summary step is 5 minutes, as /summary/ counts its text.)
const fmt = (m) => (m < 60 ? `${m} minutes` : `${Math.floor(m / 60)} hour${m >= 120 ? 's' : ''}${m % 60 ? ` ${m % 60} minutes` : ''}`);
for (const d of doors) if (d.steps?.length) d.time = fmt(minutes(d));

// "Your words, our words": the words newcomers bring, and where the guide
// covers the same ground. Pointers, not definitions: nothing here defines a
// term. New terms go through a Terms discussion and the open period
// (HOW_IT_GROWS.md). Shown on /start/ and at /glossary/#your-words.
// `terms` are glossary ids (term-<slug>) that already exist.
export const yourWords = [
  { yours: 'Runout', ours: [['Commit points', '/guide/concepts/commit-points/'], ['Supply layers and lead times', '/guide/concepts/supply-layers-and-lead-times/']], terms: ['term-commit-point', 'term-supply-layer'],
    hint: 'The guide asks when each layer must be ordered, not only when you run out.' },
  { yours: 'Headroom', ours: [['Buffers and reserves', '/guide/concepts/buffers-and-reserves/']], terms: ['term-launch-reserve'],
    hint: 'One line called headroom hides several buffers, each with its own owner.' },
  { yours: 'Stranded capacity', ours: [['Approval and allocation', '/guide/concepts/approval-and-allocation/']], terms: [],
    hint: 'The guide follows approved capacity until it becomes machines of the right shape, place and time.' },
  { yours: 'Autoscaling', ours: [['Scale it to the risk', '/guide/settings/#scale-it-to-the-risk']], terms: [],
    hint: 'Where supply is faster than demand firms up, react. Where it is slower, plan.' },
  { yours: 'Chargeback, showback', ours: [['Three prices', '/guide/concepts/three-prices/']], terms: ['term-average-loaded-rate', 'term-practical-capacity'],
    hint: 'Who pays is one of three price questions. The other two are whether to build and who gets scarce capacity now.' },
  { yours: 'Forecast', ours: [['Demand and declarations', '/guide/concepts/demand-and-declarations/']], terms: ['term-declaration'],
    hint: 'The guide plans from declarations, scored by how firm they are.' },
];

// The ten-line checklist on /start/sre/, drawn from the guide (J6, idea 1).
// A starting point, not a standard; each line links where the guide covers it.
export const sreChecklist = [
  ['Name the driver your service scales with.', '/guide/concepts/measuring-loop/'],
  ['Graph the ratio: resources per unit of that driver.', '/guide/concepts/measuring-loop/'],
  ['Alert against the published version of the ratio, not only its recent past.', '/guide/concepts/measuring-loop/#how-to-use-it'],
  ['Log every provider stockout: region, shape, time and the workaround.', '/guide/limits/#where-the-ideas-break'],
  ['List your commitments and reservations, with their renewal dates.', '/guide/settings/#mid-sized-companies'],
  ['Name an owner for each of your three largest coefficients.', '/guide/settings/#mid-sized-companies'],
  ['Feed late-stage deals into the plan, and score them against usage.', '/guide/settings/#mid-sized-companies'],
  ['Split headroom into named buffers, each with an owner.', '/guide/concepts/buffers-and-reserves/'],
  ['Route a ratio alert to planning as a ticket, not a page.', '/guide/concepts/measuring-loop/'],
  ['Review all of it once a quarter.', '/guide/quarterly/'],
];
