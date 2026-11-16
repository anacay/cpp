// The central terms that get a page of their own at /glossary/<slug>/ (R11),
// so "what is X in capacity planning" has one citable address. Each page shows
// the seed paper's own definitions unchanged, and above them one plain
// sentence (`plain`) that restates them for a newcomer without adding claims.
// `q`: ids from questions.mjs answered on /questions/; `tag`: a Commons tag.
export const TERM_PAGES = [
  { id: 'term-coefficient', slug: 'coefficient', tag: 'cost', q: ['what-is-a-coefficient', 'spot-a-drifting-coefficient'],
    plain: 'A coefficient is the amount of a resource a shared service uses per unit of the driver of its load, such as CPU time per request.' },
  { id: 'term-commit-point', slug: 'commit-point', tag: 'supply', q: ['what-is-a-commit-point', 'how-far-ahead-to-order'],
    plain: 'A commit point is the last date a supply layer can still be ordered and arrive in time: its need date minus its cautious lead time.' },
  { id: 'term-declaration', slug: 'declaration', tag: 'forecasting', q: ['forecast-a-launch-with-no-history'],
    plain: 'A declaration is a signed statement of expected demand for a launch with no history, which firms up in stages.' },
  { id: 'term-supply-layer', slug: 'supply-layer', tag: 'supply', q: ['how-far-ahead-to-order'],
    plain: 'A supply layer is one kind of supply with its own lead time, from land, power and buildings down to job placement.' },
  { id: 'term-lead-time', slug: 'lead-time', tag: 'supply', q: ['how-far-ahead-to-order', 'what-is-a-commit-point'],
    plain: 'Lead time is how long a supply layer takes from order to arrival; a cautious lead time sits near the slow end of what has been seen.' },
  { id: 'term-firmness', slug: 'firmness', tag: 'supply', q: ['plans-miss-when-forecast-was-right'],
    plain: 'Firmness is how far supply has moved toward use: planned, contracted, under construction, delivered, live.' },
  { id: 'term-envelope', slug: 'envelope', tag: 'forecasting', q: ['how-far-ahead-to-order'],
    plain: 'The envelope is the capacity budget for a planning horizon, used to size layers that must be committed before any declaration exists.' },
  { id: 'term-bridge', slug: 'bridge', tag: 'supply', q: ['demand-nobody-can-predict'],
    plain: 'A bridge is a stopgap for demand that supply cannot meet in time, arranged before it is needed and paid for at a premium.' },
  { id: 'term-shortage-to-idle-ratio', slug: 'shortage-to-idle-ratio', tag: 'supply', q: ['how-much-headroom'],
    plain: 'The shortage-to-idle ratio compares the cost of running short with the cost of holding spare, and sets how much of the demand range to cover.' },
  { id: 'term-unallocated-line', slug: 'unallocated-line', tag: 'cost', q: ['how-to-charge-for-shared-capacity'],
    plain: 'The unallocated line is cost no caller can be shown to cause, shared out by a declared policy and given an owner.' },
];
