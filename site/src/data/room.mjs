// The Practice Room: the people, dates and statuses behind the community
// pages, kept in one place. Changing the call date, naming a channel host or
// adding a consented name is an edit to this file and a redeploy; no page
// changes. Read it through the helpers at the bottom.
//
// Consent rule: a person's name renders only when `consent: true`. Until then
// pages show "Open" (roles) or nothing (circle). The build fails if the name
// of anyone without consent appears on any page (check 10).
// No member counts are published, anywhere.

export const room = {
  name: 'The Practice Room',
  url: '/community/',
  contact: 'cpp@anacay.org',
  // Promises the pages make. Change them here, and every page follows.
  firstAnswerHours: 24, // once greeters are named, a first question gets a kind answer within 24 hours
  precheckHours: 72, // a private pre-check gets a written reply within 72 hours
};

// One open call a month, with a newcomer half-hour first.
export const rhythm = {
  call: 'One open call a month',
  newcomer: 'A newcomer half-hour before each call, cameras optional',
  length: 'One hour, with a hard stop',
  agendaDaysAhead: 7,
  notesHours: 48,
  recordings: false,
  slots: 'The call alternates between 17:00 UTC and 00:00 UTC, so the Pacific gets a slot',
  digest: 'A monthly digest, by RSS, and by email once a list exists',
};

// Where the room stands. While `state` is 'setting-up', /community/ and /join/
// show a "Status: being set up" block, and the pages describe greeters, hosts,
// the Slack, the digest and the call in the future tense. Co-organizers set
// `state` to 'open' (and update `asOf`) on the day the Slack opens.
export const status = {
  state: 'setting-up', // 'setting-up' | 'open'
  asOf: '2026-11-02',
  pending: ['the Slack room', 'greeters and channel hosts', 'the GitHub categories for first questions', 'the email digest', 'the first call'],
};
export const settingUp = () => status.state !== 'open';

// The next call. While `status` is 'pending', pages say the call is announced
// once the founding circle confirms, and show no date. Set `status` to
// 'confirmed' and fill `date` (YYYY-MM-DD) and the times to publish it.
export const call = {
  status: 'pending', // 'pending' | 'confirmed' | 'held'
  date: null,
  newcomerUtc: '16:30',
  startUtc: '17:00',
  endUtc: '18:00',
  confirmAt: 8, // circle confirmations needed before a date is announced (not rendered)
  notes: null, // URL of the notes thread once posted
};

// Topic channels in the room. A channel opens only with a named host; until
// then the page says "Host: open". `host` is a person id from `people`.
export const channels = [
  { id: 'welcome', name: '#welcome', purpose: 'Rules, dates and the digest. Only co-organizers post here.', host: null, hostRole: 'Co-organizers' },
  { id: 'introductions', name: '#introductions', purpose: 'Your sector, your stage and one problem you care about. No employer needed.', host: null, hostRole: 'Greeters' },
  { id: 'first-questions', name: '#first-questions', purpose: 'No question too basic. A kind answer within 24 hours.', host: null, hostRole: 'Greeter rota' },
  { id: 'fleets-supply-buildings', name: '#fleets-supply-buildings', purpose: 'Fleets, supply layers, lead times, power and halls.', host: null, topic: true },
  { id: 'demand-forecasting', name: '#demand-forecasting', purpose: 'Declarations, drift and reference classes.', host: null, topic: true },
  { id: 'cost-pricing', name: '#cost-pricing', purpose: 'Rates, coefficients and the unallocated line.', host: null, topic: true },
  { id: 'ai-capacity', name: '#ai-capacity', purpose: 'Accelerators, agent demand and allocation.', host: null, topic: true },
  { id: 'cloud-reliability', name: '#cloud-reliability', purpose: 'Single-cloud teams, stockouts and headroom.', host: null, topic: true },
];

// The eight roles. `holders` are person ids; an empty list renders "Open".
// `notAtFoundersEmployer` adds the line "Not open to anyone at the founder's
// employer." to the card.
export const roles = [
  { id: 'co-organizer', name: 'Co-organizer', holders: [], notAtFoundersEmployer: true },
  { id: 'editor', name: 'Editor', holders: ['founder'], notAtFoundersEmployer: true },
  { id: 'conduct-reviewer', name: 'Independent conduct reviewer', holders: [] },
  { id: 'wg-lead', name: 'Working-group lead', holders: [] },
  { id: 'channel-host', name: 'Channel host', holders: [] },
  { id: 'call-host', name: 'Call host', holders: [] },
  { id: 'greeter', name: 'Greeter', holders: [] },
  { id: 'pre-check', name: 'Pre-check reviewer', holders: [] },
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
    start: '2027-01-11', publishBy: '2027-03-05', datesNote: 'The lead confirms the dates.',
    channel: '#wg-scoring',
  },
  {
    id: 'wg2', name: 'Accelerator allocation and the unallocated line', status: 'next',
    questions: ['Q3'], lead: null, members: [], when: 'Q2 2027',
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
// One line on the next call, for any page.
export function callLine() {
  if (call.status !== 'confirmed' || !call.date) return 'The first call will be announced once the founding circle confirms.';
  const d = new Date(`${call.date}T12:00:00Z`).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
  return `Next open call: ${d}, ${call.startUtc}–${call.endUtc} UTC. Newcomer half-hour from ${call.newcomerUtc} UTC.`;
}
// Who reads cpp@anacay.org. Today the founder does; once a co-organizer has
// consented, the line says the inbox has moved to them.
export function inboxLine() {
  return consented(circle.coOrganizers).length
    ? `The co-organizers read ${room.contact}.`
    : `Today the founder reads ${room.contact}. Once co-organizers are named, the inbox moves to them.`;
}
// Who runs CPP now. It matches GOVERNANCE.md: the founder is the only editor
// until co-organizer editors are nominated and confirmed.
export function ownershipLine() {
  return consented(circle.coOrganizers).length
    ? 'The co-organizers run the Practice Room. Editors are added under Governance.'
    : 'Today the founder runs CPP as its only editor. Co-organizers take over the room when they are nominated.';
}
// Names of people who have NOT consented, for check 10.
export const unconsentedNames = () => people.filter((p) => p.consent !== true).map((p) => p.name).filter(Boolean);
