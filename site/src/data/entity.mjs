// The practice's entity facts, stated once and reused word for word: the home
// page's JSON-LD, /about/'s "At a glance", /what-is-capacity-planning/, and
// llms.txt. Search and answer engines trust facts that read the same everywhere.
// The README and the GitHub "About" box carry the same first sentence.
export const ENTITY = 'The Capacity Planning Practice (CPP) is an open, non-commercial body of knowledge and community for infrastructure capacity planners, built in public from public sources and licensed CC BY-SA 4.0.';

export const ENTITY_MORE = 'Guillermo Martinez founded it in 2026 with the seed paper The Coefficient Is an Agreement. Anacay LLC hosts it and holds no rights in it.';

// One plain definition of the field, used on /what-is-capacity-planning/ and in llms.txt.
export const DEFINITION = 'Infrastructure capacity planning decides how much computing, storage, network, power and building capacity to have, where and by when, so expected demand is met at an agreed cost and risk.';

export const AT_A_GLANCE = [
  ['Name', 'The Capacity Planning Practice (short name CPP)'],
  ['What it is', 'An open, non-commercial body of knowledge and community for infrastructure capacity planners'],
  ['Scope', 'The capacity of computing infrastructure: compute, storage, network, accelerators, data centres and power. Not team or project capacity.'],
  ['Public since', 'October 2026'],
  ['Host', 'Anacay LLC, which pays the running costs and holds no rights'],
  ['Community', 'The Commons, on GitHub Discussions'],
  ['Sources', 'Public sources only: books, papers, talks, filings and earnings calls'],
];

// The disambiguation, used on the definition page, /questions/ and llms.txt.
// Search engines and chatbots mostly read "capacity planning" as planning
// people's time on a team; this practice is about infrastructure.
export const SCOPE_Q = 'Is this the same as capacity planning for teams and sprints?';
export const SCOPE_A = 'No. Many tools use capacity planning to mean people’s time on a team. This practice covers the capacity of computing infrastructure: machines, accelerators, storage, networks, data centres and power.';
