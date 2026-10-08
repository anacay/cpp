// The community side of the site: where each body-of-knowledge page lives in
// the repository, the Discuss and Suggest-an-edit links, and the founding
// documents (charter, governance and so on), rendered from the repository's
// own Markdown so the site and the repo never disagree.
import fs from 'node:fs';
import path from 'node:path';
import MarkdownIt from 'markdown-it';
import { load, slugify } from './paper.mjs';

const root = process.cwd();

export function community() {
  const { config } = load();
  return config.community;
}

// ── Body-of-knowledge files ──────────────────────────────────────────────────
// One Markdown file per reading page, named so they sort in reading order.
export function bokFile(p) {
  const two = (n) => String(n).padStart(2, '0');
  if (p.kind === 'chapter') return `${two(p.number)}-${p.slug.replace(/^\d+-/, '')}.md`;
  const fixed = { abstract: '00a-abstract.md', summary: '00b-executive-summary.md', 'one-page': '00c-one-page.md',
    paper: '00-how-this-paper-is-built.md', terms: '15-terms.md', worksheet: 'appendix-a-worksheet.md',
    'public-record': 'appendix-b-public-record.md', references: 'references.md' };
  return fixed[p.id] ?? null;
}

export function bokPath(p) {
  const f = bokFile(p);
  return f ? `${community().bokDir}/${f}` : null;
}

export function pageName(p) {
  if (p.kind === 'chapter') return `Section ${p.number}, ${p.title}`;
  const names = { paper: 'How this paper is built', abstract: 'Abstract', summary: 'Executive summary', 'one-page': 'One page', terms: 'Terms',
    worksheet: 'Appendix A, the worksheet', 'public-record': 'Appendix B, the public record', references: 'References' };
  return names[p.id] ?? p.title ?? p.id;
}

export function links(p, override = {}) {
  const c = community();
  const file = override.file ?? bokPath(p);
  const name = override.name ?? pageName(p);
  const q = (o) => Object.entries(o).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&');
  return {
    open: c.open,
    discuss: `${c.repo}/discussions/new?${q({ category: 'sections', title: `${name}: ` })}`,
    threads: `${c.repo}/discussions/categories/sections?${q({ discussions_q: `"${name}"` })}`,
    edit: file ? `${c.repo}/edit/${c.branch}/${file}` : null,
    file,
    name,
  };
}

// ── Founding documents ───────────────────────────────────────────────────────
// Each repository document has a page on the site; links between them are
// rewritten to the site's own pages, and links to files without a page go to
// the repository.
export const DOCS = {
  'CHARTER.md': '/charter/',
  'HOW_IT_GROWS.md': '/how-it-grows/',
  'GOVERNANCE.md': '/governance/',
  'ROADMAP.md': '/roadmap/',
  'CONTRIBUTING.md': '/contributing/',
  'CODE_OF_CONDUCT.md': '/code-of-conduct/',
};

const md = new MarkdownIt({ html: false, linkify: false, typographer: false });

export function foundingDoc(file) {
  const c = community();
  const src = fs.readFileSync(path.resolve(root, c.foundingDir, file), 'utf8');
  const lines = src.split('\n');
  const h1 = lines.findIndex((l) => /^# /.test(l));
  const title = h1 >= 0 ? lines[h1].slice(2).trim() : file;
  const body = h1 >= 0 ? lines.slice(h1 + 1).join('\n') : src;
  let html = md.render(body);
  // Links: sibling docs → site pages; other repo files → GitHub.
  html = html.replace(/href="([^"#]+?)(#[^"]*)?"/g, (m, href, hash = '') => {
    if (/^(https?:|mailto:)/.test(href)) return m;
    const base = href.replace(/^\.\//, '');
    if (DOCS[base]) return `href="${DOCS[base]}${hash}"`;
    return `href="${c.repo}/blob/${c.branch}/${base}${hash}"`;
  });
  // Bare file names in code spans (CONTRIBUTORS.md, EDITORS.md) stay as text.
  // Heading anchors.
  const seen = new Set();
  const toc = [];
  html = html.replace(/<h([23])>(.*?)<\/h\1>/g, (m, lvl, inner) => {
    let id = slugify(inner.replace(/<[^>]+>/g, ''));
    while (seen.has(id)) id += '-x';
    seen.add(id);
    if (lvl === '2') toc.push({ id, text: inner.replace(/<[^>]+>/g, '') });
    return `<h${lvl} id="${id}">${inner}</h${lvl}>`;
  });
  html = html.replace(/<table>/g, '<div class="table-wrap"><table>').replace(/<\/table>/g, '</table></div>');
  // First paragraph after the title, as a plain description.
  const firstPara = (body.split(/\n\s*\n/).map((s) => s.trim()).find((s) => s && !s.startsWith('#') && !s.startsWith('*The Capacity')) ?? '')
    .replace(/\[([^\]]+)\]\[[^\]]*\]|\[([^\]]+)\]\([^)]*\)/g, '$1$2').replace(/[*_`]/g, '');
  return { title, html, toc, description: firstPara.length > 200 ? firstPara.slice(0, 197).replace(/\s+\S*$/, '') + '…' : firstPara };
}
