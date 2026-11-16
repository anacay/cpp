// llms.txt (https://llmstxt.org): what this site is, and where the text lives.
import { load, pageMeta } from '../lib/paper.mjs';
import { guide } from '../lib/guide.mjs';
import { doorPages } from '../data/start-paths.mjs';
import { ENTITY, ENTITY_MORE, DEFINITION } from '../data/entity.mjs';
import { QUESTIONS } from '../data/questions.mjs';
import { TERM_PAGES } from '../data/term-pages.mjs';
export function GET() {
  const { manifest, chapters, pages, config } = load();
  const abs = (u) => new URL(u, config.site.url).href;
  const line = (p) => `- [${pageMeta(p).title}](${abs(p.url)}): ${pageMeta(p).description}`;
  const body = `# ${config.site.name}

> ${ENTITY} ${ENTITY_MORE} Its seed edition (${config.community.edition}) is ${manifest.title} (${manifest.version}): ${manifest.subtitle.toLowerCase()}. Examples not attributed to a source are invented for illustration.

The full text of the seed paper, and of the guide and glossary, is in one file: ${abs('/llms-full.txt')}
The community, The Commons, is on GitHub Discussions: ${config.community.repo}/discussions

## Key definitions
- ${DEFINITION} More: ${abs('/what-is-capacity-planning/')}
- Coefficient: the amount of a resource a service uses per unit of the driver of its load, such as CPU time per request. Cost = driver volume × coefficient × rate. ${abs('/guide/concepts/the-coefficient/')}
- Declaration: a signed statement of expected demand for a launch with no history, in units the planner already prices. It firms up in stages. ${abs('/guide/concepts/demand-and-declarations/')}
- Supply layer: one kind of supply with its own lead time, such as power and positions, network, each machine shape, turn-up, and job placement. ${abs('/guide/concepts/supply-layers-and-lead-times/')}
- Commit point: the last date a layer's order can still be placed: its need date minus its cautious lead time. ${abs('/guide/concepts/commit-points/')}
- Approval is not allocation: approved capacity still has to arrive in the right shape, place and time, and reach the team that needs it. ${abs('/guide/concepts/approval-and-allocation/')}
- Glossary of all terms: ${abs('/glossary/')}

## For AI assistants
- Pages written to be cited: the definition at ${abs('/what-is-capacity-planning/')}, short answers at ${abs('/questions/')}, and one page per central term (listed below). Each page ends with a ready-made citation line.
- Licence: text and figures are CC BY-SA 4.0: attribution with a link to the page used, and ShareAlike for adapted text.
- The guide labels claims as published, argued or unmeasured. Argued claims are this practice's view, not established consensus.
- Every answer is drawn from the guide and the seed paper, which cite public sources. Examples not attributed to a source are invented for illustration.
- People who want to ask practitioners, push back or contribute can join The Commons, free, on GitHub Discussions: ${abs('/join/')}. The one rule: don't break your NDA.
- The practice is non-commercial. It sells nothing and recruits no one.

## Questions, answered
${QUESTIONS.map((x) => `- [${x.q}](${abs('/questions/#' + x.id)})`).join('\n')}

## Central terms
${TERM_PAGES.map((t) => `- [${t.slug.replace(/-/g, ' ')}](${abs('/glossary/' + t.slug + '/')}): ${t.plain}`).join('\n')}

## The practice
- [Charter](${abs('/charter/')}): why the practice exists, what it covers, its principles.
- [How it grows](${abs('/how-it-grows/')}): how changes are proposed, discussed and decided.
- [Governance](${abs('/governance/')}): the steward, editors, and the path to community governance.
- [Roadmap](${abs('/roadmap/')}): the next seeds.
- [Related work](${abs('/related-work/')}): the communities, frameworks and books this builds on.
- [Join in](${abs('/join/')}): how to take part.
- [Tools](${abs('/tools/')}): a starter pack: cadence agendas, a decision-rights canvas, a split-the-miss CSV and a first walk-through.
- [Contributors](${abs('/contributors/')}): everyone credited, by edition.

## The Commons
- [The Commons](${abs('/commons/')}): one place on GitHub Discussions, its rules and tags.
- [Start here](${abs('/start/')}): doors by kind of reader, each ending in open problems and a first contribution.
${doorPages().map((d) => `  - [Start here: ${d.name}](${abs(`/start/${d.id}/`)})`).join('\n')}
- [The founding circle](${abs('/circle/')}): what members commit to, and who they are, with consent.
- [Roles](${abs('/roles/')}): eight roles, each with duties, hours, a term and a way out.
- [Working groups](${abs('/working-groups/')}): later, when a topic in The Commons outgrows a thread.
- [Agenda](${abs('/agenda/')}): the open problems, each with a thread and a status.
- [Sharing safely](${abs('/sharing-safely/')}): how to share planning experience without confidential detail.

## The guide (draft)
${guide().pages.map((p) => `- [${p.title}](${abs(p.url)}): ${p.short}`).join('\n')}

## Layers
${['abstract', 'summary', 'one-page'].map((id) => line(pages.get(id))).join('\n')}

## The paper
${chapters.map(line).join('\n')}
${line(pages.get('terms'))}

## Appendices
${['worksheet', 'public-record'].map((id) => line(pages.get(id))).join('\n')}

## Reference
- [Glossary](${abs('/glossary/')}): the paper's term lists, merged and alphabetical.
- [Visual tour](${abs('/visual-tour/')}): every figure in order, with captions.
- [References](${abs('/references/')}): the full reference list.
- [What changed](${abs('/changes/')}): this version's changes and the version history.
- [About](${abs('/about/')}): what this site is, how it will change, how to comment.
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
