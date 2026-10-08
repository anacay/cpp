// llms.txt (https://llmstxt.org): what this site is, and where the text lives.
import { load, pageMeta } from '../lib/paper.mjs';
import { guide } from '../lib/guide.mjs';
export function GET() {
  const { manifest, chapters, pages, config } = load();
  const abs = (u) => new URL(u, config.site.url).href;
  const line = (p) => `- [${pageMeta(p).title}](${abs(p.url)}): ${pageMeta(p).description}`;
  const body = `# ${config.site.name}

> An open, community-built body of knowledge for capacity planning, licensed CC BY-SA 4.0. Its seed edition (${config.community.edition}) is ${manifest.title} (${manifest.version}) by Guillermo Martinez: ${manifest.subtitle.toLowerCase()}. Stewarded by Anacay (${config.site.steward.url}). Examples not attributed to a source are invented for illustration.

The full text, figures' alt text and captions included, is in one file: ${abs('/llms-full.txt')}

## The practice
- [Charter](${abs('/charter/')}): why the practice exists, what it covers, its principles.
- [How it grows](${abs('/how-it-grows/')}): how changes are proposed, discussed and decided.
- [Governance](${abs('/governance/')}): the steward, editors, and the path to community governance.
- [Roadmap](${abs('/roadmap/')}): the next seeds.
- [Related work](${abs('/related-work/')}): the communities, frameworks and books this builds on.
- [Join in](${abs('/join/')}): how to take part.

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
