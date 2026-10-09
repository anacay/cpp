// Author's notes: short margin notes pinned to exact passages in the seed
// paper (known unknowns, open questions, help wanted). Source:
// ../body-of-knowledge/rfc/author-notes.md. A passage that no longer appears
// word for word in its section fails the build.
import fs from 'node:fs';
import path from 'node:path';
import { load, renderInline, esc } from './paper.mjs';
import { links } from './community.mjs';

export const KINDS = {
  'known-unknown': 'Known unknown',
  'open-question': 'Open question',
  'help-wanted': 'Help wanted',
};

let _cache;
export function notes() {
  if (_cache) return _cache;
  const ctx = load();
  const file = path.resolve(process.cwd(), ctx.config.community.foundingDir, 'body-of-knowledge/rfc/author-notes.md');
  const src = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
  const list = [];
  const parts = src.split(/^## /m).slice(1);
  for (const part of parts) {
    const [head, ...rest] = part.split('\n');
    const f = head.split('|').map((s) => s.trim());
    if (f.length < 3) continue;
    const [kind, where, quote, flag] = f;
    if (!KINDS[kind]) throw new Error(`author-notes: unknown kind "${kind}"`);
    const page = /^[A-Z]$/.test(where)
      ? [...ctx.pages.values()].find((p) => p.kind === 'appendix' && p.letter === where)
      : ctx.chapters.find((c) => String(c.number) === where);
    if (!page) throw new Error(`author-notes: no page for "${where}"`);
    list.push({ n: list.length + 1, id: `note-${list.length + 1}`, kind, where, quote, draft: flag === 'draft', body: rest.join('\n').trim(), page });
  }
  _cache = list;
  return list;
}

export function notesFor(page) {
  return notes().filter((x) => x.page === page);
}

function noteLinks(note) {
  const ctx = load();
  const l = links(note.page);
  const site = ctx.config.site.url;
  const frag = `#:~:text=${encodeURIComponent(note.quote)}`;
  const title = `${l.name}: "${note.quote.split(/\s+/).slice(0, 8).join(' ')}…"`;
  const body = `> ${note.quote}\n\nFrom [${l.name}](${site}${note.page.url}${frag})\n\n**Author's note (${KINDS[note.kind].toLowerCase()}):** ${note.body}\n\n**Your reply:**\n`;
  const q = (o) => Object.entries(o).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&');
  return {
    discuss: `${ctx.config.community.repo}/discussions/new?${q({ category: 'sections', title, body })}`,
    mail: `mailto:${ctx.config.site.contact}?${q({ subject: title, body })}`,
    open: l.open,
  };
}

// Mark each note's passage and put the note right after the paragraph or
// list item that holds it. The note is apparatus, not the paper's text.
export function annotate(html, page) {
  for (const note of notesFor(page)) {
    const needle = esc(note.quote).replace(/&quot;/g, '"');
    const at = html.indexOf(needle);
    if (at < 0) throw new Error(`author-notes: passage not found in ${page.url}: "${note.quote}"`);
    const mark = `<mark class="anno-mark" id="${note.id}-at"><a href="#${note.id}" class="anno-ref" data-apparatus aria-label="Author's note ${note.n}">${note.n}</a>${needle}</mark>`;
    html = html.slice(0, at) + mark + html.slice(at + needle.length);
    const close = html.slice(at).search(/<\/(p|li)>/);
    if (close < 0) throw new Error(`author-notes: no paragraph end after "${note.quote}"`);
    let end = at + close + html.slice(at + close).indexOf('>') + 1;
    // Notes on the same paragraph stack in order, after any already placed.
    while (/^\s*<aside class="anno /.test(html.slice(end))) end = html.indexOf('</aside>', end) + '</aside>'.length;
    const l = noteLinks(note);
    const aside = `<aside class="anno anno--${note.kind}" id="${note.id}" data-apparatus>
<p class="anno__head"><span class="anno__n">${note.n}</span> Author's note · ${KINDS[note.kind]}${note.draft ? ' <span class="anno__draft">draft</span>' : ''}</p>
<p class="anno__body">${renderInline(note.body, load().targets)}</p>
<p class="anno__act"><a href="${l.open ? l.discuss : l.mail}">${l.open ? 'Reply on GitHub' : 'Reply by email'}</a>${l.open ? ` · <a href="${l.mail}">or email</a>` : ''} · <a href="/open-questions/">All open questions</a></p>
</aside>`;
    html = html.slice(0, end) + aside + html.slice(end);
  }
  return html;
}

export { noteLinks };
