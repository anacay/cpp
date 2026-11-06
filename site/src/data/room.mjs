// The Commons: The Commons, its tags and the people behind the
// community pages, kept in one place. Adding a tag or a consented name is an
// edit to this file and a redeploy; no page changes. Read it through the helpers at the bottom.
//
// Consent rule: a person's name renders only when `consent: true`. Until then
// pages show "Open" (roles) or nothing (circle). The build fails if the name
// of anyone without consent appears on any page (check 10).
// No member counts are published, anywhere.

export const room = {
  name: 'The Commons',
  url: '/commons/',
  contact: 'cpp@anacay.org',
  precheckHours: 72, // a private pre-check gets a written reply within 72 hours
};

// One place to interact: The Commons, a single GitHub Discussions category.
// A new community needs many interactions in one place, not a few in many.
// More places (calls, groups, other categories) come later, when The Commons
// asks for them. The repository URL matches paper.config.json.
const repo = 'https://github.com/anacay/cpp';
export const stream = {
  name: 'The Commons', // the Discussions category
  // GitHub derives the slug from the category name: "The Commons" → the-commons.
  slug: 'the-commons',
  url: `${repo}/discussions/categories/the-commons`,
  newPost: `${repo}/discussions/new?category=the-commons`,
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
  { tag: 'path-resource-managers', what: 'Coming from resource or quota management.' },
];
export const tagUrl = (t) => `${repo}/discussions?discussions_q=${encodeURIComponent(`label:${t}`)}`;

// ── Doors to The Commons ──────────────────────────────────────────────────────
// Every "post in The Commons" link on the site is built here, so there is one
// source of truth. It opens a new discussion in The Commons, with a prefilled
// title and body. GitHub's new-discussion page reads `category`, `title` and
// `body` from the URL; labels can't be set this way, so the tag goes into the
// body as a word (#supply), and whoever triages adds the label.
const SITE = 'https://cpp.anacay.org'; // matches site.url in paper.config.json
const qs = (o) => Object.entries(o).filter(([, v]) => v).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&');
// The NDA rule, word for word, as on /commons/#room-rules.
export const NDA_LINE = 'Don’t break your NDA. Don’t share your company’s prices, contract terms, future plans or any other confidential information. Methods and public facts are fair game.';
// `starter: true` means `text` is already the poster's own opening, so no
// "Your post:" prompt follows it.
export function streamPost({ title = '', text = '', tag = null, from = null, starter = false } = {}) {
  const parts = [];
  if (tag) parts.push(`#${tag}`);
  if (text) parts.push(text);
  if (from) parts.push(`From [${from.name}](${from.url.startsWith('http') ? from.url : SITE + from.url})`);
  parts.push(starter ? `\n_${NDA_LINE}_` : `**Your post:**\n\n\n_${NDA_LINE}_`);
  return `${stream.newPost}&${qs({ title, body: parts.join('\n\n') })}`;
}
// The first-question door, used by /join/, /commons/, /circle/ and the
// newcomer door.
export const firstQuestion = () => streamPost({ tag: 'first-question', text: 'I’m new to capacity planning. My question: …', starter: true });
// The general door (home hero, footer): no tag, so peers don't land in #first-question.
export const anyPost = () => streamPost({});
// A topic tag for a page, where the page's subject is plain. Prefix match on
// the path; pages not listed get no tag.
const PATH_TAGS = [
  ['/guide/concepts/demand-and-declarations/', 'forecasting'],
  ['/guide/concepts/measuring-loop/', 'forecasting'],
  ['/guide/concepts/the-coefficient/', 'cost'],
  ['/guide/concepts/three-prices/', 'cost'],
  ['/guide/concepts/supply-layers-and-lead-times/', 'supply'],
  ['/guide/concepts/commit-points/', 'supply'],
  ['/guide/concepts/approval-and-allocation/', 'gpu'],
  ['/cases/kuantillion-cloud', 'supply'],
  ['/cases/popcorn-pajamas', 'cost'],
  ['/notes/buildings-at-ai-density/', 'power'],
  ['/notes/second-lives/', 'supply'],
  ['/paper/4-three-prices-three-questions/', 'cost'],
  ['/paper/11-what-changes-in-the-ai-era/', 'gpu'],
  ['/public-record/', 'supply'],
];
export const tagForPath = (path = '') => (PATH_TAGS.find(([p]) => path.startsWith(p)) ?? [])[1] ?? null;

// Later, when The Commons asks for it. Nothing here is a place to interact now.
export const later = [
  'a monthly open call',
  'bring-your-problem reviews',
  'working groups',
  'a digest',
  'more roles',
];

// A call, for later. While `status` is 'later', no page or feed item
// mentions a date. Set 'confirmed' and fill `date` once The Commons asks for one.
export const call = {
  status: 'later', // 'later' | 'confirmed' | 'held'
  date: null,
  startUtc: '17:00',
  endUtc: '18:00',
  notes: null,
};

// Roles: open volunteer roles that fill as people step forward.
// `holders` are person ids; an empty list renders "Open". `later: true` marks
// a role that waits until The Commons asks for it.
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

// Pages frozen for their first author. Each page's byline shows the line, so
// a reader knows the author no longer edits it. Everyone else still can.
// Changes to these pages go through another editor.
export const frozen = {
  since: '8 November 2026',
  line: 'Frozen for its first author since 8 November 2026. Open to everyone else’s edits.',
  files: [
    'case-kuantillion-cloud.md',
    'case-kuantillion-cloud-full.md',
    'case-kuantillion-cloud-practice.md',
    'case-kuantillion-cloud-plan.md',
  ],
};
export const frozenLine = (file = '') => (frozen.files.includes(file) ? frozen.line : null);

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
    datesNote: 'It forms when the topic outgrows a thread in The Commons. The lead sets the dates.',
  },
  {
    id: 'wg2', name: 'Accelerator allocation and the unallocated line', status: 'next',
    questions: ['Q3'], lead: null, members: [], when: 'later',
  },
];

// The community pages, for the sitemap, llms.txt and the checks.
export const ROOM_ROUTES = ['/commons/', '/circle/', '/roles/', '/working-groups/', '/agenda/', '/sharing-safely/', '/contributors/', '/join/'];

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
// /commons/#who.
export const ownershipLine = () => 'The founder stewards CPP, with Anacay’s disclosed support. Roles open as people step forward.';
// Names of people who have NOT consented, for check 10.
export const unconsentedNames = () => people.filter((p) => p.consent !== true).map((p) => p.name).filter(Boolean);
