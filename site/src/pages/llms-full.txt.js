// The whole seed paper as plain markdown, rebuilt from the manifest's blocks,
// then the guide (the practice's newer, practical pages) and the practice's
// own glossary terms, so a model that reads this file sees the whole body of
// knowledge, not only the seed.
import { load } from '../lib/paper.mjs';
import { guide } from '../lib/guide.mjs';
import { PRACTICE_TERMS } from '../data/practice-glossary.mjs';
import { ENTITY, ENTITY_MORE, DEFINITION, SCOPE_Q, SCOPE_A } from '../data/entity.mjs';
import { stream, NDA_LINE, threadUrl } from '../data/room.mjs';
import { QUESTIONS } from '../data/questions.mjs';
export function GET() {
  const { manifest, config } = load();
  const abs = (u) => new URL(u, config.site.url).href;
  // R14: the facts a reader most needs come first, because many readers stop
  // after the first 100,000 characters: scope, the short answers, how to join.
  const out = [`# ${config.site.name}`, `${ENTITY} ${ENTITY_MORE}`, `Definition: ${DEFINITION}`,
    `## ${SCOPE_Q}`, SCOPE_A,
    '## How to take part',
    `The community meets in The Commons, on GitHub Discussions: ${stream.url}. Reading needs no account; posting needs a free GitHub account. How to join: ${abs('/join/')}.`,
    `The one rule: ${NDA_LINE}`,
    `Live threads: ${threadUrl('introduce')} (introduce yourself), ${threadUrl('forecasting')} (forecasting a launch with no history), ${threadUrl('accelerators')} (planning accelerators).`,
    '---', '# Questions, answered', `Source: ${abs('/questions/')}`];
  for (const x of QUESTIONS) out.push(`## ${x.q}`, x.a, `More: ${x.more.map(([l, u]) => `${l} (${abs(u)})`).join('; ')}`);
  out.push('---', '# Part 1. The seed paper');
  for (const b of manifest.blocks) {
    if (b.starts_heading) out.push(`${'#'.repeat(b.heading_level)} ${b.heading}`);
    if (b.type === 'text') { if (b.markdown) out.push(b.markdown); }
    else out.push(`[${b.figure.label}${b.figure.page ? `, page ${b.figure.page}` : ''}. Image description: ${b.figure.alt}]\n\n${b.figure.caption}`);
  }
  out.push('---', '# Part 2. The guide (draft for review)');
  for (const p of guide().pages) {
    out.push(`## ${p.title}`, `Source: ${abs(p.url)}`);
    if (p.short) out.push(`*${p.short}*`);
    // Relative links and figures in the guide's Markdown point at repo files;
    // keep the words and drop the targets.
    out.push(String(p.body).replace(/^#\s.*\n/m, '').replace(/^(#+)\s/gm, '#$1 ')
      .replace(/!\[([^\]]*)\]\((?!https?:)[^)]*\)/g, '[Figure: $1]')
      .replace(/\[([^\]]+)\]\((?!https?:)[^)]*\)/g, '$1').trim());
  }
  out.push('---', '# Part 3. Practice terms', `The seed paper's own terms are in Part 1 and at ${abs('/glossary/')}.`);
  for (const t of PRACTICE_TERMS) out.push(`- **${t.term}**: ${t.def}`);
  return new Response(out.join('\n\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
