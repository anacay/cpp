// The guide: the body of knowledge as reference pages, laid on the map of
// cadence × altitude. Source: ../body-of-knowledge/guide/*.md (frontmatter +
// Markdown). Rendered with the paper's renderer, so [n] citations and
// "Section 6.2" references link into the seed paper.
import fs from 'node:fs';
import path from 'node:path';
import { load, renderMarkdown, slugify, esc } from './paper.mjs';

export const CADENCES = [
  { id: 'annual', label: 'Annual' },
  { id: 'quarterly', label: 'Quarterly' },
  { id: 'monthly', label: 'Monthly' },
  { id: 'weekly', label: 'Weekly' },
  { id: 'post-launch', label: 'Post-launch' },
];
export const ALTITUDES = [
  { id: 'envelope', label: 'Envelope' },
  { id: 'region', label: 'Region / site' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'launch', label: 'Launch' },
  { id: 'unit', label: 'Unit' },
];
export const LEVELS = [
  { id: 'learning', label: 'Learning' },
  { id: 'practicing', label: 'Practicing' },
  { id: 'leading', label: 'Leading' },
  { id: 'capital', label: 'Capital' },
  { id: 'supply', label: 'Supply' },
];
export const KINDS = {
  foundation: { label: 'Foundations', order: 0 },
  stage: { label: 'Through the cycle', order: 1 },
  across: { label: 'Across the cycle', order: 2 },
  concept: { label: 'Concepts', order: 3 },
};

const root = process.cwd();
const dirOf = () => path.resolve(root, load().config.community.foundingDir, 'body-of-knowledge/guide');

export function urlFor(file) {
  const stem = file.replace(/\.md$/, '');
  if (stem.startsWith('stage-')) return `/guide/${stem.slice(6)}/`;
  if (stem.startsWith('concept-')) return `/guide/concepts/${stem.slice(8)}/`;
  return `/guide/${stem}/`;
}

function parse(file, src) {
  const m = src.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) throw new Error(`guide/${file}: no frontmatter`);
  const fm = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^(\w[\w-]*):\s*(.*)$/);
    if (!kv) continue;
    let v = kv[2].replace(/\s+#.*$/, '').trim();
    if (/^".*"$/.test(v) || /^'.*'$/.test(v)) v = v.slice(1, -1);
    fm[kv[1]] = v;
  }
  const list = (v) => (v ?? '').split(',').map((s) => s.trim()).filter(Boolean);
  const expand = (v, all) => (list(v).includes('all') ? all.map((x) => x.id) : list(v));
  for (const k of ['title', 'short', 'kind', 'order']) if (!fm[k]) throw new Error(`guide/${file}: frontmatter lacks ${k}`);
  if (!KINDS[fm.kind]) throw new Error(`guide/${file}: unknown kind ${fm.kind}`);
  return {
    file,
    url: urlFor(file),
    title: fm.title,
    short: fm.short,
    kind: fm.kind,
    order: Number(fm.order),
    cadence: expand(fm.cadence, CADENCES),
    altitude: expand(fm.altitude, ALTITUDES),
    levels: expand(fm.levels, LEVELS),
    seed: list(fm.seed),
    body: m[2],
  };
}

let _cache;
export function guide() {
  if (_cache) return _cache;
  const dir = dirOf();
  const pages = fs.readdirSync(dir).filter((f) => f.endsWith('.md') && !f.startsWith('_'))
    .map((f) => parse(f, fs.readFileSync(path.join(dir, f), 'utf8')))
    .sort((a, b) => a.order - b.order);
  const byFile = new Map(pages.map((p) => [p.file, p]));
  _cache = { pages, byFile, dir };
  return _cache;
}

// Figure SVGs referenced from guide pages: guide-local ones are copied to
// public/guide/figures/ by scripts/sync-guide.mjs; seed figures already live
// at /figures/<id>.svg.
function figureInfo(src) {
  const { dir } = guide();
  let file, url;
  const seed = src.match(/^\.\.\/seed\/figures\/([\w-]+)\.svg$/);
  const local = src.match(/^figures\/([\w-]+)\.svg$/);
  if (seed) { file = path.join(root, 'public/figures', `${seed[1]}.svg`); url = `/figures/${seed[1]}.svg`; }
  else if (local) { file = path.join(dir, 'figures', `${local[1]}.svg`); url = `/guide/figures/${local[1]}.svg`; }
  else throw new Error(`guide: unsupported image path ${src}`);
  if (!fs.existsSync(file)) throw new Error(`guide: missing figure ${src}`);
  const head = fs.readFileSync(file, 'utf8').slice(0, 4000);
  const [, , w, h] = (head.match(/viewBox="([\d.\s-]+)"/)?.[1] ?? '0 0 960 536').trim().split(/\s+/).map(Number);
  const canvas = head.match(/data-canvas="(\w+)"/)?.[1] ?? 'standard';
  return { url, w, h, canvas };
}

const EV = {
  argued: 'Argued from practice and reasoning, not a published result',
  unmeasured: 'Nobody has published data on this yet, as far as we can find',
};

export function renderGuide(p) {
  const ctx = load();
  const { byFile } = guide();
  let html = renderMarkdown(p.body, { targets: ctx.targets, unresolved: ctx.unresolved });
  // Links to other guide pages.
  html = html.replace(/href="([\w-]+\.md)(#[^"]*)?"/g, (m, f, hash = '') => {
    if (!byFile.has(f)) throw new Error(`guide/${p.file}: link to missing page ${f}`);
    return `href="${byFile.get(f).url}${hash}"`;
  });
  // Figures: an image paragraph, optionally followed by an italic-led caption paragraph.
  html = html.replace(/<p><img src="([^"]+)" alt="([^"]*)"><\/p>(?:\s*<p>(<em>[\s\S]*?)<\/p>)?/g, (m, src, alt, cap) => {
    const f = figureInfo(src);
    const caption = cap ? cap.replace(/^<em>([\s\S]*?)<\/em>/, '<strong class="plate__label">$1</strong>') : '';
    return `<figure class="plate plate--${f.canvas}"><a class="plate__card" href="${f.url}"><img src="${f.url}" alt="${alt}" width="${f.w}" height="${f.h}" loading="lazy" decoding="async"></a>
<figcaption><span class="plate__caption">${caption}</span><span class="plate__meta"><a class="plate__open" href="${f.url}">Open full size</a></span></figcaption></figure>`;
  });
  // Evidence labels.
  html = html.replace(/\s?\[(argued|unmeasured)\]/g, (m, k) => ` <span class="ev ev--${k}" title="${EV[k]}">${k}</span>`);
  // Heading anchors and the page's table of contents.
  const toc = [];
  const seen = new Set();
  html = html.replace(/<h([23])>([\s\S]*?)<\/h\1>/g, (m, lvl, inner) => {
    const text = inner.replace(/<[^>]+>/g, '');
    let id = slugify(text) || 'section';
    while (seen.has(id)) id += '-2';
    seen.add(id);
    if (lvl === '2') toc.push({ id, text });
    return `<h${lvl} id="${id}">${inner}</h${lvl}>`;
  });
  return { html, toc };
}

// The seed-paper sections a page draws from, as links.
export function seedLinks(p) {
  const { targets } = load();
  const key = (s) => /^Appendix/.test(s) ? 1000 + s.charCodeAt(9) : s.split('.').reduce((a, n, i) => a + Number(n) / 100 ** i, 0);
  return [...new Set(p.seed)].sort((a, b) => key(a) - key(b)).map((s) => {
    const ap = s.match(/^Appendix ([A-Z])((?:\.\d+)?)/);
    if (ap) {
      const t = targets.appendix.get(`${ap[1]}${ap[2]}`) ?? targets.appendix.get(ap[1]);
      return { label: s, url: t?.url ?? null };
    }
    const num = s.match(/^(\d+(?:\.\d+)?)/)?.[1];
    const t = num ? targets.section.get(num) : null;
    return { label: /^(\d|Section)/.test(s) ? (s.startsWith('Section') ? s : `Section ${s}`) : s, url: t?.url ?? null };
  });
}

export function neighboursOf(p) {
  const { pages } = guide();
  const i = pages.indexOf(p);
  return { prev: pages[i - 1] ?? null, next: pages[i + 1] ?? null };
}

export { esc };
