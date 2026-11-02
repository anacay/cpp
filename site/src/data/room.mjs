// The Practice Room: the stream, its tags and the people behind the
// community pages, kept in one place. Adding a tag or a consented name is an
// edit to this file and a redeploy; no page changes. Read it through the helpers at the bottom.
//
// Consent rule: a person's name renders only when `consent: true`. Until then
// pages show "Open" (roles) or nothing (circle). The build fails if the name
// of anyone without consent appears on any page (check 10).
// No member counts are published, anywhere.

export const room = {
  name: 'The Practice Room',
  url: '/community/',
  contact: 'cpp@anacay.org',
  precheckHours: 72, // a private pre-check gets a written reply within 72 hours
};

// One place to interact: one stream, a single GitHub Discussions category.
// A new community needs many interactions in one place, not a few in many.
// More places (calls, groups, other categories) come later, when the stream
// asks for them. The repository URL matches paper.config.json.
const repo = 'https://github.com/anacay/cpp';
export const stream = {
  name: 'Practice', // the Discussions category
  slug: 'practice',
  url: `${repo}/discussions/categories/practice`,
  newPost: `${repo}/discussions/new?category=practice`,
  all: `${repo}/discussions`,
  signup: 'https://github.com/signup',
};

// Starter tags. Write them as words in a post (#supply) or add them as
// labels. More tags emerge from use; add one here once it is in use.
export const tags = [
  { tag: 'first-question', what: 'No question too basic.' },
  { tag: 'forecasting', what: 'Demand, declarations and drift.' },
  { tag: 'supply', what: 'Lead times, contracts and reused parts.' },
  { tag: 'gpu', what: 'Accelerators and their allocation.' },
  { tag: 'cost', what: 'Rates, coefficients and the unallocated line.' },
  { tag: 'power', what: 'Power, buildings and halls.' },
  { tag: 'cloud', what: 'Single-cloud teams, reservations and stockouts.' },
];
export const tagUrl = (t) => `${repo}/discussions?discussions_q=${encodeURIComponent(`label:${t}`)}`;

// Later, when the stream asks for it. Nothing here is a place to interact now.
export const later = [
  'a monthly open call',
  'bring-your-problem reviews',
  'working groups',
  'a digest',
  'more roles',
];

// A call, for later. While `status` is 'later', no page or feed item
// mentions a date. Set 'confirmed' and fill `date` once the stream asks for one.
export const call = {
  status: 'later', // 'later' | 'confirmed' | 'held'
  date: null,
  startUtc: '17:00',
  endUtc: '18:00',
  notes: null,
};

// Roles: open volunteer roles that fill as people step forward.
// `holders` are person ids; an empty list renders "Open". `later: true` marks
// a role that waits until the stream asks for it.
export const roles = [
  { id: 'co-organizer', name: 'Co-organizer', holders: [] },
  { id: 'editor', name: 'Editor', holders: ['founder'] },
  { id: 'conduct-reviewer', name: 'Independent conduct reviewer', holders: [] },
  { id: 'pre-check', name: 'Pre-check reviewer', holders: [] },
  { id: 'wg-lead', name: 'Working-group lead', holders: [], later: true },
  { id: 'call-host', name: 'Call host', holders: [], later: true },
];

// Everyone the pages may name. Add a person with `consent: false` while you
// wait for their sign-off; flip it to true only on a written yes.
// `sector` is enough; `employer` is optional and never required.
export const people = [
  { id: 'founder', name: 'Guillermo Martinez', sector: null, topics: [], consent: true, founder: true },
];

// The founding circle. Ids from `people`. The names block on /circle/ stays
// hidden until `showNamesAt` consented names exist.
export const circle = {
  coOrganizers: [],
  members: [],
  showNamesAt: 3,
};

// Working groups. `lead` is a person id or null ("Lead: open").
export const workingGroups = [
  {
    id: 'wg1', name: 'Scoring declarations', status: 'chartered',
    questions: ['Q2', 'Q10', 'Q7'], lead: null, members: [], size: '3–5',
    datesNote: 'It forms when the topic outgrows a thread in the stream. The lead sets the dates.',
  },
  {
    id: 'wg2', name: 'Accelerator allocation and the unallocated line', status: 'next',
    questions: ['Q3'], lead: null, members: [], when: 'later',
  },
];

// The community pages, for the sitemap, llms.txt and the checks.
export const ROOM_ROUTES = ['/community/', '/circle/', '/roles/', '/working-groups/', '/agenda/', '/sharing-safely/', '/contributors/', '/join/'];

// ── Helpers ──────────────────────────────────────────────────────────────────
export const person = (id) => people.find((p) => p.id === id) ?? null;
const named = (id) => { const p = person(id); return p && p.consent === true ? p : null; };
// Consented people among `ids`, in order. Never returns anyone without consent.
export const consented = (ids = []) => ids.map(named).filter(Boolean);
// "Open", or the consented holders' names joined.
export const holderLine = (ids = []) => { const c = consented(ids); return c.length ? c.map((p) => p.name).join(', ') : 'Open'; };
export const role = (id) => roles.find((r) => r.id === id) ?? null;
// The circle's names block shows only once enough consented names exist.
export const circleNames = () => {
  const all = [...circle.coOrganizers, ...circle.members];
  const c = consented(all);
  return c.length >= circle.showNamesAt ? { coOrganizers: consented(circle.coOrganizers), members: consented(circle.members) } : null;
};
// Who reads cpp@anacay.org. The founder, as steward, reads it.
export const inboxLine = () => `The founder reads ${room.contact}.`;
// Who runs CPP, in one line. It matches GOVERNANCE.md; the full passage is
// /community/#who.
export const ownershipLine = () => 'The founder stewards CPP, with Anacay’s disclosed support. Roles open as people step forward.';
// Names of people who have NOT consented, for check 10.
export const unconsentedNames = () => people.filter((p) => p.consent !== true).map((p) => p.name).filter(Boolean);
