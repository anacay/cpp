// The think-tank agenda: every open problem the body of knowledge names,
// clustered into ten workstreams (ONBOARDING_MAP §5). /agenda/ renders it, the
// doors on /start/ pick from it by item id, and the feed carries its status
// changes.
//
// Status rule. A status here is the room's own record of whether a problem is
// being worked. It never mirrors GitHub: a thread may already hold replies,
// and the site does not read them. Every item starts as 'open'.
//
// To change a status (a co-organizer's data-only edit):
//   1. set `status`, and `until` (YYYY-MM-DD) for a proposal;
//   2. append { date: 'YYYY-MM-DD', status, note } to the item's `history`.
// Each history entry becomes one feed item, with a stable guid. Never edit or
// delete a past entry; add a new one.
//
// `thread` is a GitHub Discussion number the site already links, or null.
// `source` is the page that names the problem. `goodFirst` marks a problem a
// newcomer can take on in an hour or two.

export const STATUS = {
  open: { label: 'Open', what: 'Unsolved, and not yet taken up by a working group or a named member.' },
  worked: { label: 'Being worked', what: 'A working group or a named member has taken it up.' },
  proposal: { label: 'Proposal open', what: 'A proposal is open for comment until the date shown.' },
  decided: { label: 'Decided', what: 'Settled by a proposal and written down in its thread.' },
};

const PP = '/cases/popcorn-pajamas-practice/#where-the-practice-needs-new-work';
const KC = '/cases/kuantillion-cloud-practice/#what-is-genuinely-open';
const BLD = '/notes/buildings-at-ai-density/#where-were-unsure';
const SL = '/notes/second-lives/#where-were-unsure';
const LIM = '/guide/limits/';

// Open questions 1–15: the author's notes on the seed paper. Source is the
// note in context; thread is Discussion N + 1 (body-of-knowledge/rfc/threads.json).
const OQ = {
  1: '/paper/13-where-this-breaks/#note-1', 2: '/paper/13-where-this-breaks/#note-2', 3: '/paper/13-where-this-breaks/#note-3',
  4: '/paper/13-where-this-breaks/#note-4', 5: '/paper/13-where-this-breaks/#note-5', 6: '/paper/13-where-this-breaks/#note-6',
  7: '/paper/8-the-commit-point-method/#note-7', 8: '/paper/8-the-commit-point-method/#note-8', 9: '/paper/6-approval-is-not-allocation/#note-9',
  10: '/paper/5-coefficients-are-agreements/#note-10', 11: '/paper/9-the-operating-discipline/#note-11', 12: '/paper/13-where-this-breaks/#note-12',
  13: '/paper/11-what-changes-in-the-ai-era/#note-13', 14: '/paper/14-a-minimum-viable-discipline/#note-14', 15: '/paper/13-where-this-breaks/#note-15',
};
const q = (n, problem, extra = {}) => ({ id: `q${n}`, label: `Q${n}`, problem, source: OQ[n], sourceLabel: `Open question ${n}`, thread: n + 1, ...extra });
const it = (id, problem, source, sourceLabel, extra = {}) => ({ id, problem, source, sourceLabel, thread: null, ...extra });

export const workstreams = [
  {
    id: 'drift', name: 'Coefficient drift and attribution', tag: 'forecasting',
    why: 'How the ratio between a driver and its resources moves, and who owns the part that moves.',
    items: [
      q(1, 'No public time series of coefficient drift exists, as far as the sources show. Is drift a slow creep, or mostly big steps?'),
      q(6, 'Per-request coefficients break for caches, batches and stateful services, and batched inference is the big new case. What unit works, and where does the remainder go?'),
      it('loop-readings', 'Two readings of the measuring loop are untested: the two alerts as a continuous variance split, and a cadenced re-baseline scored by owner.', '/guide/concepts/measuring-loop/#how-to-use-it', 'The measuring loop'),
      it('request-path', 'The request path as supply: what coefficient, and which owner, for starts, manifests and ad events?', PP, 'Case 2, Popcorn Pajamas'),
      it('net-gross', 'Some streams cancel on one layer and stack on another. Is planning bytes on net and requests on gross, with separate owners, the right rule?', PP, 'Case 2, Popcorn Pajamas'),
    ],
  },
  {
    id: 'declarations', name: 'Declaration calibration and pooled data', tag: 'forecasting',
    why: 'How well teams’ statements of future demand land, and how much to trust each team’s record.',
    items: [
      q(2, 'How well do declarations land, by stage? The paper’s illustrative rule of 60% for intents and within 10% for configured asks is “a guess dressed as a number”.'),
      q(10, 'How much should a team’s own record count against every team’s? Insurers use credibility theory for this. Does it fit capacity declarations?'),
      q(12, 'Some steps have no reference class, such as a first accelerator cluster. Beyond bounding, phasing and buying options, what has worked?'),
      q(15, 'Could the community pool anonymized declaration records? Say what your organization would need to see first. Nothing is pooled before written rules and a legal-safe protocol exist.'),
      it('censored', 'How do you score declarations when the system’s own controls hide part of the demand?', PP, 'Case 2, Popcorn Pajamas'),
      it('rivals', 'How do you size a step change when the best evidence is a rival’s record?', PP, 'Case 2, Popcorn Pajamas'),
    ],
  },
  {
    id: 'supply', name: 'Supply evidence: lead times, contracts and power', tag: 'supply',
    why: 'Supply is the least documented side. Public evidence moves it most.',
    items: [
      q(4, 'Find public sources for order-to-dock time, turn-up duration, cancel windows and reschedule terms. A filing, a talk or a vendor document, with a link and the quote.', { goodFirst: true }),
      q(5, 'How long does a large new load wait for power, from request to energized? Utility filings and interconnection queues may hold the answer.', { goodFirst: true }),
      q(11, 'Is the supply review the step most often missing between the demand review and the executive decision? If you have one, what does supply bring to it?', { goodFirst: true }),
      it('barter', 'How do you plan capacity paid for in kind? What changes if regulators force a price into it?', PP, 'Case 2, Popcorn Pajamas'),
    ],
  },
  {
    id: 'buffers', name: 'Buffers, prices and optimization', tag: 'cost',
    why: 'How much spare to hold, layer by layer, and what running short really costs.',
    items: [
      q(7, 'The method buys each supply layer to its own percentile. Can a simulation or a closed form do better, or show the rule is good enough?'),
      q(9, 'The paper’s ratios of 4 : 1 for machines and 19 : 1 for power are illustrative. What would you set for each layer, and who would sign it?'),
      q(14, 'The strongest known challenge to the seed paper’s central claim: where a market price exists, does the agreement still hold? Argue it, either way.'),
      it('simulation', 'A simulation to stress-test the hand calculation is one of the seed paper’s labeled explorations. Nobody has tried it in public.', `${LIM}#what-the-method-doesnt-claim`, 'Limits'),
      it('unallocated-owner', 'TBM parks the unallocated line in staging buckets, and FinOps describes an “informed ignore”. Who should own shrinking it?', '/guide/concepts/operating-mechanisms/#how-to-use-it', 'Operating mechanisms'),
      it('appreciating', 'Buffer arithmetic assumes that holding stock costs money. When a part gains value while held, when should buying ahead stop?', PP, 'Case 2, Popcorn Pajamas'),
      it('fill-calendar', 'Should scarce overnight windows carry a seasonal shadow price?', PP, 'Case 2, Popcorn Pajamas'),
    ],
  },
  {
    id: 'arbitration', name: 'Arbitration and incentives', tag: 'gpu',
    why: 'Who decides when capacity is short, and what makes honest reporting the sensible choice.',
    items: [
      q(3, 'When accelerators are short, who decides between internal teams and external customers? Operators publish splits and priority orders. What are the forum, the rule and the appeal?'),
      q(8, 'How often is a slipped launch’s reserve re-pegged to another tenant and reused? Its thread also holds the incentive layer: the forces that keep a slip hidden.'),
      it('host-side', 'Case 2 needs host-side versions of two threads: the incentive layer (#9) and the supply review’s purpose (#12).', '/cases/popcorn-pajamas-practice/#the-organization-as-part-of-the-answer', 'Case 2, Popcorn Pajamas'),
      it('goodhart', 'Any indicator can be gamed once it is rewarded. How should the mechanisms’ indicators be read as a set?', `${LIM}#where-the-ideas-break`, 'Limits'),
    ],
  },
  {
    id: 'ai', name: 'AI capacity: agent demand, tokens and accelerators', tag: 'gpu',
    why: 'Where the structure holds and the units move: power, topology, tokens and agents.',
    note: 'Arbitrating scarce accelerators (Q3) sits under arbitration and incentives. It is the planned topic of the second working group.',
    items: [
      q(13, 'When a team’s own software creates the demand, is a cap a better declaration than a forecast?', { goodFirst: true }),
      it('undeclarable', 'For demand no one can declare in time, what remains are buffers, bridges and admission control. What else catches it?', `${LIM}#where-the-ideas-break`, 'Limits'),
    ],
  },
  {
    id: 'buildings', name: 'Buildings and fungibility', tag: 'power',
    why: 'What planning loses when halls stop being interchangeable, and what replaces it.',
    items: [
      it('putty-clay', 'Where is the putty-clay moment in a modern build: the pour, the power topology, the cooling headers or the fit-out? Does postponement move it?', BLD, 'Buildings at AI density', { thread: 18 }),
      it('flexibility-premium', 'Can the premium for a hall that converts be priced from public figures, or only from inside an organization?', BLD, 'Buildings at AI density', { thread: 18 }),
      it('chain', 'Is the conversion chain symmetric? Air to liquid and liquid to air may cost very differently.', BLD, 'Buildings at AI density', { thread: 18 }),
      it('mix-owner', 'Who owns the mix forecast: the planner, the real-estate organization or the steering group? At what cadence is it re-declared?', BLD, 'Buildings at AI density', { thread: 18 }),
      it('storage-middle', 'Is storage the stranded middle, the first link to break as AI halls and storage halls diverge?', BLD, 'Buildings at AI density', { thread: 18 }),
      it('mix-term', 'Add a mix term to the miss waterfall, beside volume, coefficient and rate. Case 3 says drives need one too.', '/notes/buildings-at-ai-density/#how-it-applies', 'Buildings at AI density', { thread: 18 }),
    ],
  },
  {
    id: 'reuse', name: 'Byproduct and reused supply', tag: 'supply',
    why: 'Supply that comes back out of the fleet, and the gaps neither the practice nor the literature has closed.',
    items: [
      it('byproduct', 'One retirement moves demand and supply for the same parts in opposite directions. How do you plan supply that is a byproduct of other decisions?', KC, 'Case 3, Kuantillion Cloud'),
      it('second-life-hazard', 'Reused drives can fail after delivery, and as a cohort. Where does the second-life hazard cross the new-part curve? Nobody has measured it.', SL, 'Second lives'),
      it('coupling', 'How much does keeping a platform raise its spares need, and how much harvest does it forgo?', SL, 'Second lives'),
      it('gate-yields', 'What does each gate cost and yield: fit, qualification, test and erasure? No operator publishes these yields.', SL, 'Second lives'),
      it('regained', 'Is regained fungibility worth its gates? When does redeploying a machine whole beat taking it apart?', SL, 'Second lives'),
      it('used-market', 'How far does a large seller move the used market?', SL, 'Second lives'),
      it('coupled-line', 'Who owns the coupled line: lifecycle, spares or planning? At what cadence?', SL, 'Second lives'),
    ],
  },
  {
    id: 'tests', name: 'Mechanism tests and evidence', tag: 'forecasting',
    why: 'The discipline is mostly argued, not measured. This is where experience becomes evidence.',
    items: [
      it('method-untested', 'The commit-point method is untested. If it works, there should be fewer orders after their commit point and smaller bridge premiums.', `${LIM}#what-the-method-doesnt-claim`, 'Limits'),
      it('seven-tests', 'Seven mechanisms have a test that can fail. None of the seven has been run.', `${LIM}#what-has-and-hasnt-been-measured`, 'Limits'),
      it('six-mechanisms', 'Mechanisms 1, 4, 6, 7, 9 and 10 have no test that can fail. Propose one.', '/guide/concepts/operating-mechanisms/#how-to-use-it', 'Operating mechanisms'),
      it('explorations', 'Two more labeled explorations have never been tried in public: a sized fast lane, and re-pegging slipped supply.', `${LIM}#what-the-method-doesnt-claim`, 'Limits'),
      it('joined', 'The thirteen mechanisms joined together are argued, not measured. So is the cover point rising with lead time.', `${LIM}#what-has-and-hasnt-been-measured`, 'Limits'),
      it('map-path', 'Nobody has checked the guide’s map and path against how planning teams divide the work. The “what to fix first” table is judgment too.', `${LIM}#what-this-guide-adds-and-how-sure-it-is`, 'Limits'),
      it('multi-org', 'Multi-organization data on forecast bias, unallocated share and fulfillment age, before and after adoption. The guide calls it the best contribution you could bring.', `${LIM}#what-would-help-most`, 'Limits'),
      it('elastic-cloud', 'In elastic cloud, shortage comes back as regional stockouts and reservation planning. What does a single-cloud team need beyond the guide’s one paragraph?', `${LIM}#where-the-ideas-break`, 'Limits', { tag: 'cloud' }),
      it('case3-tests', 'Case 3 sets twelve strategy tests and eight experiments. None has been run.', '/cases/kuantillion-cloud-practice/#how-youll-know-the-strategy-is-working', 'Case 3, Kuantillion Cloud'),
      it('falsifiers', 'Case 2 lists 15 open questions with falsifiers, and Case 3 lists 16. Pick one and argue it.', '/cases/popcorn-pajamas-full/#14-open-questions-and-falsifiers', 'Case 2, full case'),
    ],
  },
  {
    id: 'path', name: 'Competency map and onboarding', tag: 'first-question',
    why: 'What a planner at each level should be able to do, and how newcomers find their way in.',
    items: [
      it('competency-map', 'No published competency map for capacity planners exists. What should a planner at each level be able to do? What confused you early on?', '/roadmap/#3-a-capacity-planner-competency-map', 'Roadmap, seed 3', { goodFirst: true }),
      it('glossary-terms', 'Name a word planners use differently, or one that is missing from the glossary.', '/roadmap/#1-a-shared-glossary', 'Roadmap, seed 1', { goodFirst: true }),
      it('case-library', 'The case library needs a dozen cases from different settings. Share one, anonymized.', '/roadmap/#2-a-case-library', 'Roadmap, seed 2'),
      it('worksheet', 'Try the Appendix A worksheet on an invented case. Say where it got stuck.', '/roadmap/#4-worksheets-as-tools', 'Roadmap, seed 4', { goodFirst: true }),
      it('reading-list', 'Add a public source to the reading list.', '/roadmap/#5-a-reading-list', 'Roadmap, seed 5', { goodFirst: true }),
      it('survey', 'Suggest questions for a survey of practitioners. Say which you would answer, and which you wouldn’t.', '/roadmap/#6-a-survey-of-practitioners', 'Roadmap, seed 6', { goodFirst: true }),
    ],
  },
];

// Fill defaults: every item is open, with no history, until a dated change.
for (const w of workstreams) for (const i of w.items) {
  i.status ??= 'open';
  i.goodFirst ??= false;
  i.history ??= [];
  if (!STATUS[i.status]) throw new Error(`agenda: unknown status ${i.status} on ${i.id}`);
  if (i.status === 'proposal' && !i.until) throw new Error(`agenda: proposal ${i.id} needs an "until" date`);
}

// ── Helpers ──────────────────────────────────────────────────────────────────
export const allItems = () => workstreams.flatMap((w) => w.items.map((i) => ({ ...i, workstream: w })));
const byId = new Map(allItems().map((i) => [i.id, i]));
if (byId.size !== allItems().length) throw new Error('agenda: duplicate item id');
// One item by id; an unknown id fails the build, so door links never dangle.
export function agendaItem(id) {
  const i = byId.get(id);
  if (!i) throw new Error(`agenda: no item ${id}`);
  return i;
}
// "Proposal open until 4 December 2026", or the plain label.
export function statusLine(i) {
  const s = STATUS[i.status];
  if (i.status !== 'proposal') return s.label;
  const d = new Date(`${i.until}T12:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
  return `${s.label} until ${d}`;
}
// Every dated status change, newest first, for the feed.
export const agendaChanges = () => allItems()
  .flatMap((i) => i.history.map((h) => ({ item: i, ...h })))
  .sort((a, b) => b.date.localeCompare(a.date));
