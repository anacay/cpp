// The paper, as the site sees it. Everything the pages show is derived here from
// the manifest (src/generated/manifest.json, written by scripts/sync-paper.mjs).
//
//  - structure(): assigns every manifest block to exactly one page, in order;
//  - renderBlock() / renderFigure(): markdown → HTML, text untouched, with
//    citations, section, figure and appendix references turned into links;
//  - glossary(): the paper's term lists, merged.
//
// Plain ES module so scripts/check.mjs can import the same page assignment.
import fs from 'node:fs';
import path from 'node:path';
import MarkdownIt from 'markdown-it';

const ROOT = process.cwd();
const read = (p) => JSON.parse(fs.readFileSync(path.join(ROOT, p), 'utf8'));

let _cache;
export function load() {
  if (_cache) return _cache;
  const manifest = read('src/generated/manifest.json');
  const figures = read('src/generated/figures.json');
  const downloads = read('src/generated/downloads.json');
  const config = read('paper.config.json');
  _cache = { manifest, figures, downloads, config, unresolved: new Set(), ...structure(manifest) };
  return _cache;
}

// ── Page assignment ──────────────────────────────────────────────────────────
// Blocks are grouped by the level-2 entry of heading_path, as the web README
// advises. Front and back matter go to named pages; numbered sections to
// /paper/<n>-<slug>/; each appendix to its own page. Anything unrecognised
// fails the build, so a new part of the paper can't silently go missing.

export function slugify(s) {
  return s
    .toLowerCase()
    .normalize('NFKD').replace(/[̀-ͯ]/g, '')
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function chapterSlug(n, title) {
  // "Introduction: a close forecast…" → "introduction"; keep at most six words.
  let head = title.split(/[:(]/)[0];
  if (head.split(/\s+/).length > 5) head = head.split(',')[0];
  return `${n}-${slugify(head).split('-').slice(0, 6).join('-')}`;
}

const FRONT = {
  'What changed in this version': 'changes',
  Abstract: 'abstract',
  'Executive summary': 'summary',
  'One page': 'one-page',
  'How this paper is built': 'paper',
};
const BACK = {
  'About the author; disclaimer': 'about',
  References: 'references',
};

export function structure(manifest) {
  const title = manifest.title;
  const pages = new Map();
  const page = (id, init) => {
    if (!pages.has(id)) pages.set(id, { id, blocks: [], ...init });
    return pages.get(id);
  };

  // Fixed pages, in navigation order.
  page('paper', { url: '/paper/', kind: 'paper-index', topLevel: 1 });
  page('abstract', { url: '/abstract/', kind: 'layer', topLevel: 2 });
  page('summary', { url: '/summary/', kind: 'layer', topLevel: 2 });
  page('one-page', { url: '/one-page/', kind: 'layer', topLevel: 2 });
  page('changes', { url: '/changes/', kind: 'site', topLevel: 1 });
  page('about', { url: '/about/', kind: 'site', topLevel: 1 });
  page('references', { url: '/references/', kind: 'back', topLevel: 2 });

  const chapters = [];
  for (const b of manifest.blocks) {
    const key = b.heading_path[1] ?? b.heading_path[0];
    let p;
    if (b.heading_path.length === 1 && key === title) p = pages.get('paper');
    else if (b.layer === 'front matter') {
      // The subtitle block hangs off the title; everything else by its level-2 heading.
      const id = FRONT[key] ?? (b.heading_level === 3 && b.seq <= 2 ? 'paper' : null);
      if (!id) throw new Error(`Unassigned front-matter block ${b.seq}: "${key}"`);
      p = pages.get(id);
    } else if (b.layer === 'section') {
      const m = key.match(/^(\d+)\.\s+(.*)$/);
      if (m) {
        const n = Number(m[1]);
        const slug = chapterSlug(n, m[2]);
        p = page(`ch-${n}`, { url: `/paper/${slug}/`, kind: 'chapter', topLevel: 2, number: n, title: m[2], heading: key, slug });
        if (!chapters.includes(p)) chapters.push(p);
      } else if (/^Terms used/.test(key)) {
        p = page('terms', { url: '/paper/terms/', kind: 'terms', topLevel: 2, title: key, heading: key });
      } else throw new Error(`Unassigned section block ${b.seq}: "${key}"`);
    } else if (b.layer === 'appendix') {
      const m = key.match(/^Appendix ([A-Z])\.\s+(.*)$/);
      if (!m) throw new Error(`Unassigned appendix block ${b.seq}: "${key}"`);
      const id = m[1] === 'A' ? 'worksheet' : m[1] === 'B' ? 'public-record' : `appendix-${m[1].toLowerCase()}`;
      p = page(id, { url: `/${id}/`, kind: 'appendix', topLevel: 2, letter: m[1], title: m[2], heading: key });
    } else if (b.layer === 'back matter') {
      const id = BACK[key];
      if (!id) throw new Error(`Unassigned back-matter block ${b.seq}: "${key}"`);
      p = pages.get(id);
    } else throw new Error(`Unknown layer on block ${b.seq}: ${b.layer}`);
    p.blocks.push(b);
  }

  chapters.sort((a, b) => a.number - b.number);
  for (const c of chapters) {
    const first = c.blocks.find((b) => b.type === 'text' && b.markdown);
    const m = first?.markdown.match(/^\*In short:\s*([^\n]*?)\*\s*$/m);
    c.inShort = m ? m[1] : null;
    c.subsections = c.blocks.filter((b) => b.starts_heading && b.heading_level === 3)
      .map((b) => ({ heading: b.heading, anchor: b.anchor }));
  }

  // Index of everything a cross-reference can point at.
  const targets = { section: new Map(), figure: new Map(), appendix: new Map() };
  const pageOf = new Map();
  for (const p of pages.values()) for (const b of p.blocks) pageOf.set(b.seq, p);
  for (const c of chapters) targets.section.set(String(c.number), { url: c.url, label: `Section ${c.number}` });
  for (const b of manifest.blocks) {
    const p = pageOf.get(b.seq);
    if (b.starts_heading) {
      const m = b.heading.match(/^((?:\d+|[A-Z])\.\d+)\s/);
      if (m) {
        const t = { url: `${p.url}#${b.anchor}`, label: m[1] };
        if (/^\d/.test(m[1])) targets.section.set(m[1], t);
        else targets.appendix.set(m[1], t);
      }
    }
    if (b.type === 'figure') {
      const f = b.figure;
      const num = f.label.replace(/^Figure\s+/, '');
      if (!targets.figure.has(num)) targets.figure.set(num, { url: `${p.url}#${f.anchor}`, label: f.label });
    }
  }
  for (const p of pages.values()) if (p.kind === 'appendix') targets.appendix.set(p.letter, { url: p.url, label: `Appendix ${p.letter}` });

  // The guided reading order, for previous/next.
  const sequence = ['abstract', 'summary', 'one-page', ...chapters.map((c) => c.id), 'terms', 'worksheet', 'public-record', 'references']
    .map((id) => pages.get(id)).filter(Boolean);

  return { pages, chapters, targets, pageOf, sequence };
}

// ── Markdown rendering ───────────────────────────────────────────────────────

const md = new MarkdownIt({ html: false, linkify: false, typographer: false });
const mdRefs = new MarkdownIt({ html: false, linkify: true, typographer: false });
// Show each URL exactly as the paper writes it (no %20 → space decoding).
mdRefs.normalizeLinkText = (s) => s;

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export { esc };

// Turn a list like "6.2, 6.4 and 14" into links, leaving every character in place.
function linkNumbers(list, resolve, word = '') {
  // A single reference links the whole phrase ("Section 7"); a list links each number.
  if (/^(?:[A-Z]\.)?\d+(?:\.\d+)?$/.test(list)) {
    const t = resolve(list);
    return t ? `<a class="xref" href="${t.url}">${word}${list}</a>` : word + list;
  }
  return word + list.replace(/(?:[A-Z]\.)?\d+(?:\.\d+)?/g, (num) => {
    const t = resolve(num);
    return t ? `<a class="xref" href="${t.url}">${num}</a>` : num;
  });
}

const SEP = String.raw`(?:\s*,\s*and\s+|\s*,\s*|\s*[–-]\s*|\s+(?:and|to|or)\s+)`;
const SECNUM = String.raw`\d+(?:\.\d+)?(?![\d.]\d)`;
const FIGNUM = String.raw`(?:[AB]\.)?\d+(?![\d.]\d)`;
const RE_CITE = /\[(\d+(?:\s*[–-]\s*\d+)?(?:\s*,\s*\d+(?:\s*[–-]\s*\d+)?)*)\]/g;
const RE_SECTION = new RegExp(String.raw`\b(Sections?)(\s+)(${SECNUM}(?:${SEP}${SECNUM})*)`, 'g');
const RE_FIGURE = new RegExp(String.raw`\b(Figures?)(\s+)(${FIGNUM}(?:${SEP}${FIGNUM})*)`, 'g');
const RE_APPX = /\b(Appendix|Appendices)(\s+)([A-Z](?:\.\d+)?(?:(?:\s*,\s*|\s+and\s+)[A-Z](?:\.\d+)?)*)\b/g;

export function linkText(text, targets, unresolved) {
  const miss = (kind) => (n) => { unresolved?.add(`${kind} ${n}`); return null; };
  let out = text.replace(RE_CITE, (all, list) =>
    '[' + list.replace(/\d+/g, (n) => `<a class="cite" href="/references/#ref-${n}">${n}</a>`) + ']');
  out = out.replace(RE_SECTION, (all, word, sp, list) =>
    linkNumbers(list, (n) => targets.section.get(n) ?? miss('Section')(n), word + sp));
  out = out.replace(RE_FIGURE, (all, word, sp, list) =>
    linkNumbers(list, (n) => targets.figure.get(n) ?? miss('Figure')(n), word + sp));
  out = out.replace(RE_APPX, (all, word, sp, list) =>
    /^[A-Z](?:\.\d+)?$/.test(list) && targets.appendix.get(list)
      ? `<a class="xref" href="${targets.appendix.get(list).url}">${word}${sp}${list}</a>`
      : word + sp + list.replace(/[A-Z](?:\.\d+)?/g, (n) => {
      const t = targets.appendix.get(n) ?? miss('Appendix')(n);
      return t ? `<a class="xref" href="${t.url}">${n}</a>` : n;
    }));
  return out;
}

// Apply linkText to text nodes only: never inside tags, links, headings or code.
export function linkHtml(html, targets, unresolved) {
  const parts = html.split(/(<[^>]+>)/);
  let skip = 0;
  for (let i = 0; i < parts.length; i++) {
    const s = parts[i];
    if (s.startsWith('<')) {
      if (/^<(a|h[1-6]|code|pre)\b/i.test(s)) skip++;
      else if (/^<\/(a|h[1-6]|code|pre)>/i.test(s)) skip--;
      continue;
    }
    if (!skip && s) parts[i] = linkText(s, targets, unresolved);
  }
  return parts.join('');
}

function wrapTables(html) {
  return html
    .replace(/<table>/g, () => `<div class="table-wrap" role="region" tabindex="0" aria-label="Table, scrolls sideways">\n<table>`)
    .replace(/<\/table>/g, '</table>\n</div>');
}

export function renderMarkdown(markdown, { targets, unresolved, refs = false } = {}) {
  let html = (refs ? mdRefs : md).render(markdown);
  if (refs) {
    html = html.replace(/<a href="(https?:[^"]+)">/g, '<a href="$1" rel="noopener external">');
    // Reference entries: an anchor per number, so [n] can link to /references/#ref-n.
    // Ordered lists keep their start; escaped "6\." paragraphs (B.6) are matched too.
    html = html.replace(/<ol(?: start="(\d+)")?>([\s\S]*?)<\/ol>/g, (all, start, body) => {
      let n = Number(start ?? 1) - 1;
      return `<ol class="reflist"${start ? ` start="${start}"` : ''}>` +
        body.replace(/<li>/g, () => `<li id="ref-${++n}">`) + '</ol>';
    });
  }
  if (refs) {
    // Source lists outside the reference list (Appendix B.6) number their
    // entries as the paper does; each number links to the full entry.
    html = html.replace(/<p>(\d+)\. /g, (all, n) => `<p id="src-${n}"><a class="cite" href="/references/#ref-${n}">${n}</a>. `);
  } else if (targets) {
    html = linkHtml(html, targets, unresolved);
    // "If you want… / Read" tables: cells that are only section numbers link too.
    html = html.replace(/<table>[\s\S]*?<\/table>/g, (t) => !/<th>Read<\/th>/.test(t) ? t
      : t.replace(/<td>((?:\d+(?:\.\d+)?|Appendix [A-Z])(?:(?:,\s*|\s*[–-]\s*)(?:\d+(?:\.\d+)?|Appendix [A-Z]))*)<\/td>/g, (all, list) =>
        `<td>${list.replace(/Appendix ([A-Z])|\d+(?:\.\d+)?/g, (m, l) => {
          const tg = l ? targets.appendix.get(l) : targets.section.get(m);
          return tg ? `<a class="xref" href="${tg.url}">${m}</a>` : m;
        })}</td>`));
  }
  html = wrapTables(html);
  // The "In short" line is styled as the step summary; its words are untouched.
  html = html.replace(/<p><em>In short:/, '<p class="in-short"><em>In short:');
  return html;
}

export function renderInline(markdown, targets, unresolved) {
  const html = md.renderInline(markdown);
  return targets ? linkHtml(html, targets, unresolved) : html;
}

// ── Blocks ───────────────────────────────────────────────────────────────────

export function headingTag(page, level) {
  const n = Math.min(6, Math.max(1, level - page.topLevel + 1));
  return `h${n}`;
}

export function renderFigure(block, ctx, { canonical = true, idPrefix = '', headingNote = '' } = {}) {
  const f = block.figure;
  const fig = ctx.figures[f.id];
  if (!fig) throw new Error(`Figure ${f.id} missing from figures.json`);
  // Bold the leading label ("Figure 10.") without changing a character of it;
  // links go in the rest of the caption only.
  const lm = f.caption.match(/^(Figure\s+(?:[A-Z]\.)?\d+(?:\s*\([^)]*\))?\.)([\s\S]*)$/);
  const caption = lm
    ? `<strong class="plate__label">${esc(lm[1])}</strong>${renderInline(lm[2], ctx.targets, ctx.unresolved)}`
    : renderInline(f.caption, ctx.targets, ctx.unresolved);
  const pageNote = f.page ? `<span class="plate__page">Page ${esc(f.page)}</span>` : '';
  const attrs = canonical
    ? `id="${esc(f.anchor)}" data-seq="${block.seq}" data-fig="${esc(f.id)}"`
    : `${idPrefix ? `id="${idPrefix}${esc(f.anchor)}" ` : ''}data-reuse-fig="${esc(f.id)}"`;
  return `<figure class="plate plate--${esc(f.canvas)}" ${attrs}>
<a class="plate__card" href="${fig.file}"><img src="${fig.file}" alt="${esc(f.alt)}" width="${fig.width}" height="${fig.height}" loading="lazy" decoding="async"></a>
<figcaption><span class="plate__caption">${caption}</span>
<span class="plate__meta">${pageNote}${headingNote}<a class="plate__open" href="${fig.file}">Open full size<span class="sr-only">: ${esc(f.label)}${f.page ? `, page ${esc(f.page)}` : ''}</span></a></span></figcaption>
</figure>`;
}

export function renderBlocks(page, ctx, { skipHeadingSeqs = [], headingOverride = {} } = {}) {
  const out = [];
  for (const b of page.blocks) {
    if (b.starts_heading && !skipHeadingSeqs.includes(b.seq)) {
      if (headingOverride[b.seq]) out.push(headingOverride[b.seq](b));
      else {
        const tag = headingTag(page, b.heading_level);
        out.push(`<${tag} id="${esc(b.anchor)}" data-heading-seq="${b.seq}">${esc(b.heading)}</${tag}>`);
      }
    }
    if (b.type === 'figure') out.push(renderFigure(b, ctx));
    else {
      const refs = b.heading === 'References' || /^B\.\d+ Sources/.test(b.heading);
      const html = renderMarkdown(b.markdown, { targets: ctx.targets, unresolved: ctx.unresolved, refs });
      out.push(`<div class="md${refs ? ' refs' : ''}" data-seq="${b.seq}">${html}</div>`);
    }
  }
  return out.join('\n');
}

// ── Text helpers ─────────────────────────────────────────────────────────────

export function plainText(markdown) {
  return md.render(markdown).replace(/<[^>]+>/g, ' ').replace(/&quot;/g, '"').replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();
}
export function wordCount(blocks) {
  return blocks.reduce((n, b) => n + (b.type === 'text' ? plainText(b.markdown).split(' ').filter(Boolean).length : 0), 0);
}
export function readingTime(words) {
  const min = Math.max(1, Math.round(words / 220));
  if (min < 60) return `${min} minute${min > 1 ? "s" : ""}`;
  const h = min / 60;
  return `about ${Math.round(h * 2) / 2} hours`.replace('.5', '½');
}

// Find one sentence (or phrase) in a block, verbatim. Throws if the paper no
// longer says it, so the home page can never drift from the text.
export function quote(manifest, seq, startsWith, endsWith) {
  const b = manifest.blocks.find((x) => x.seq === seq);
  const hit = (blk) => {
    const md = blk?.markdown ?? '';
    const i = md.indexOf(startsWith);
    if (i < 0) return null;
    const j = md.indexOf(endsWith, i + startsWith.length);
    if (j < 0) return null;
    return { block: blk, text: md.slice(i, j + endsWith.length) };
  };
  const found = hit(b) ?? manifest.blocks.map(hit).find(Boolean);
  if (!found) throw new Error(`Home-page quote no longer in the paper: "${startsWith}…${endsWith}"`);
  return found;
}

// ── Glossary ─────────────────────────────────────────────────────────────────
// Sources: the "Terms used in this paper" section, and each appendix's
// "**Terms.**" list. Items are "- **Term**: definition" or "- **Term:** definition".

export function glossary(ctx) {
  const sources = [];
  for (const b of ctx.manifest.blocks) {
    if (b.type !== 'text') continue;
    const isTermsSection = /^Terms used/.test(b.heading_path[1] ?? '');
    const isAppendixTerms = b.layer === 'appendix' && /^\*\*Terms\.\*\*/m.test(b.markdown);
    if (!isTermsSection && !isAppendixTerms) continue;
    const p = ctx.pageOf.get(b.seq);
    const label = isTermsSection ? 'Terms used in this paper' : `Appendix ${p.letter}`;
    for (const line of b.markdown.split('\n')) {
      const m = line.match(/^- \*\*(.+?)\*\*\s*(.*)$/);
      if (!m) continue;
      let term = m[1].trim();
      let def = m[2].trim();
      term = term.replace(/[:,]$/, '');
      def = def.replace(/^:\s*/, '');
      sources.push({ term, def, label, url: `${p.url}#${b.anchor}`, seq: b.seq });
    }
  }
  const byKey = new Map();
  for (const s of sources) {
    const key = s.term.toLowerCase();
    if (!byKey.has(key)) byKey.set(key, { term: s.term, id: `term-${slugify(s.term)}`, defs: [] });
    byKey.get(key).defs.push(s);
  }
  const sortKey = (t) => t.replace(/^(the|a|an)\s+/i, '').toLowerCase();
  const terms = [...byKey.values()].sort((a, b) => sortKey(a.term).localeCompare(sortKey(b.term)));

  // Where each term is used: chapters and appendices whose text contains it.
  const searchable = [...ctx.chapters, ctx.pages.get('worksheet'), ctx.pages.get('public-record')].filter(Boolean);
  const texts = searchable.map((p) => ({
    p,
    blocks: p.blocks.filter((b) => b.type === 'text').map((b) => ({ b, t: plainText(b.markdown).toLowerCase() })),
  }));
  for (const t of terms) {
    const key = t.term.replace(/\s*\([^)]*\)/g, '').split(/,|;| versus /)[0].trim().toLowerCase();
    t.searchKey = key;
    const re = new RegExp(`(^|[^a-z0-9-])${key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![a-z0-9])`, 'i');
    t.usedIn = [];
    if (key.length < 3) continue;
    for (const { p, blocks } of texts) {
      const hit = blocks.find(({ t: txt }) => re.test(txt));
      if (hit) t.usedIn.push({ page: p, url: `${p.url}#${hit.b.anchor}` });
    }
  }
  return terms;
}

export function pageLabel(p) {
  if (p.kind === 'chapter') return `Section ${p.number}`;
  if (p.kind === 'appendix') return `Appendix ${p.letter}`;
  if (p.kind === 'terms') return 'Terms';
  return p.title ?? p.id;
}

// ── Page metadata: titles, descriptions, pager labels ───────────────────────

const firstSentence = (md) => plainText(md).replace(/^In short:\s*/, '').match(/^.*?[.?!](?=\s|$)/)?.[0] ?? plainText(md).slice(0, 160);
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

export function pageMeta(p) {
  const { manifest } = load();
  const firstText = p.blocks.find((b) => b.type === 'text' && b.markdown)?.markdown ?? '';
  switch (p.kind) {
    case 'chapter':
      return {
        title: `${p.number}. ${p.title}`,
        short: `Section ${p.number}`,
        label: `Section ${p.number} · ${p.title}`,
        description: cap(p.inShort ?? firstSentence(firstText)),
      };
    case 'appendix':
      return {
        title: p.heading,
        short: `Appendix ${p.letter}`,
        label: p.heading.replace(/^(Appendix [A-Z])\.\s*/, '$1 · '),
        description: `${p.heading}, from ${manifest.title}. ${firstSentence(p.blocks.find((b) => b.markdown)?.markdown ?? firstText)}`.replace(/\*\*/g, ''),
      };
    case 'terms':
      return { title: p.heading, short: 'Terms', label: p.heading, description: `The short glossary that follows Section 14 of ${manifest.title}.` };
    default: {
      const heading = p.blocks.find((b) => b.starts_heading && b.heading_level === 2)?.heading;
      const map = {
        abstract: { title: 'Abstract', description: firstSentence(firstText) },
        summary: { title: 'Executive summary', description: `The executive summary of ${manifest.title}: the problem, two claims and a method, and what to do on Monday.` },
        'one-page': { title: 'One page', description: `${manifest.title} on one page: the problem, two claims, the method for one launch, and five questions for your own planning.` },
        references: { title: 'References', description: `The full reference list for ${manifest.title}, with links to the public sources.` },
      };
      const m = map[p.id] ?? { title: heading ?? p.id, description: '' };
      return { short: m.title, label: m.title, ...m };
    }
  }
}

export function neighbours(p) {
  const { sequence } = load();
  const i = sequence.indexOf(p);
  if (i < 0) return {};
  return { prev: sequence[i - 1], next: sequence[i + 1] };
}
