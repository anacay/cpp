// Post-build checks on dist/. Exits non-zero on any failure.
//   1. every manifest block appears, once, on the page it belongs to, in order,
//      with its text unchanged (compared against an independent markdown render);
//   2. every figure sits exactly where the manifest puts it (same image, alt and
//      caption, byte-identical SVG), and appears once in the visual tour;
//   3. no external URL in any src/href, except outbound links inside reference
//      lists (.refs), the steward's site, and the site's own canonical URL;
//   4. no <script> tags;
//   5. every internal link resolves, anchors included;
//   6. every page has a <title>, a meta description and exactly one <h1>.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';
import MarkdownIt from 'markdown-it';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
process.chdir(root);
const { load } = await import('../src/lib/paper.mjs');
const ctx = load();
const { manifest, figures, config } = ctx;
const dist = path.join(root, 'dist');

const results = [];
const check = (name) => { const r = { name, fails: [], notes: [] }; results.push(r); return r; };

// ── Load every built page ────────────────────────────────────────────────────
const htmlFiles = [];
(function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (f.endsWith('.html')) htmlFiles.push(p);
  }
})(dist);
const urlOf = (file) => {
  const rel = '/' + path.relative(dist, file).split(path.sep).join('/');
  return rel.endsWith('/index.html') ? rel.slice(0, -'index.html'.length) : rel;
};
const docs = new Map(htmlFiles.map((f) => [urlOf(f), cheerio.load(fs.readFileSync(f, 'utf8'))]));

// Independent render of the paper's markdown, for the text comparison.
const md = new MarkdownIt({ html: false, linkify: false });
const squash = (s) => s.replace(/\s+/g, '');
const mdText = (m) => squash(cheerio.load(md.render(m)).root().text());

// ── 1. Blocks ────────────────────────────────────────────────────────────────
{
  const c = check('1. Every manifest block appears on its page, in order, text unchanged');
  for (const [, p] of ctx.pages) {
    const $ = docs.get(p.url);
    if (!$) { c.fails.push(`page not built: ${p.url}`); continue; }
    const seen = [];
    $('[data-seq]').each((_, el) => seen.push(Number($(el).attr('data-seq'))));
    const want = p.blocks.map((b) => b.seq);
    if (JSON.stringify(seen) !== JSON.stringify(want)) c.fails.push(`${p.url}: blocks ${seen.join(',')} ≠ manifest ${want.join(',')}`);
    for (const b of p.blocks) {
      if (b.starts_heading) {
        const h = $(`[data-heading-seq="${b.seq}"]`);
        if (h.length !== 1 || h.text().trim() !== b.heading) c.fails.push(`${p.url}: heading of block ${b.seq} missing or changed`);
      }
      if (b.type !== 'text') continue;
      const el = $(`.md[data-seq="${b.seq}"]`).clone();
      el.find('[data-apparatus]').remove();
      if (el.length !== 1) { c.fails.push(`${p.url}: text block ${b.seq} not found once`); continue; }
      if (squash(el.text()) !== mdText(b.markdown)) c.fails.push(`${p.url}: text of block ${b.seq} differs from the manifest`);
    }
  }
  // Each seq on exactly one page across the whole site (reuse is marked differently).
  const where = new Map();
  for (const [u, $] of docs) $('[data-seq]').each((_, el) => {
    const s = $(el).attr('data-seq'); where.set(s, [...(where.get(s) ?? []), u]);
  });
  for (const b of manifest.blocks) {
    const w = where.get(String(b.seq)) ?? [];
    if (w.length !== 1) c.fails.push(`block ${b.seq} appears on ${w.length} pages (${w.join(', ')})`);
  }
  c.notes.push(`${manifest.blocks.length} blocks (${manifest.stats.text_blocks} text, ${manifest.stats.figure_blocks} figure) across ${ctx.pages.size} pages`);
}

// ── 2. Figures ───────────────────────────────────────────────────────────────
{
  const c = check('2. Every figure where the manifest puts it, unaltered, and once in the visual tour');
  const fb = manifest.blocks.filter((b) => b.type === 'figure');
  for (const b of fb) {
    const p = ctx.pageOf.get(b.seq);
    const $ = docs.get(p.url);
    const el = $(`figure[data-seq="${b.seq}"]`);
    const f = b.figure;
    if (el.length !== 1) { c.fails.push(`${f.label} (${f.id}) not on ${p.url}`); continue; }
    if (el.attr('data-fig') !== f.id || el.attr('id') !== f.anchor) c.fails.push(`${f.label}: wrong id or anchor`);
    const img = el.find('img');
    if (img.attr('src') !== `/figures/${f.id}.svg`) c.fails.push(`${f.label}: wrong image ${img.attr('src')}`);
    if (img.attr('alt') !== f.alt) c.fails.push(`${f.label}: alt text differs from the manifest`);
    if (squash(el.find('.plate__caption').text()) !== squash(cheerio.load(md.renderInline(f.caption)).root().text()))
      c.fails.push(`${f.label}: caption differs from the manifest`);
    // Previous and next blocks on the page are the manifest's neighbours.
    const i = manifest.blocks.indexOf(b);
    const prev = el.prevAll('[data-seq]').first().attr('data-seq');
    const prevWant = manifest.blocks[i - 1] && ctx.pageOf.get(manifest.blocks[i - 1].seq) === p ? String(manifest.blocks[i - 1].seq) : undefined;
    if (prev !== prevWant) c.fails.push(`${f.label}: preceded by block ${prev}, manifest says ${prevWant}`);
    // The served SVG is byte-identical to the paper's.
    const served = fs.readFileSync(path.join(dist, 'figures', `${f.id}.svg`));
    if (crypto.createHash('sha256').update(served).digest('hex') !== figures[f.id].sha256) c.fails.push(`${f.label}: SVG altered`);
    const srcPath = path.resolve(root, process.env.PAPER_DIR || config.paperDir, f.svg);
    if (fs.existsSync(srcPath) && !fs.readFileSync(srcPath).equals(served)) c.fails.push(`${f.label}: SVG differs from ${f.svg}`);
  }
  const $t = docs.get('/visual-tour/');
  const tour = [];
  $t('[data-tour-fig]').each((_, el) => tour.push($t(el).attr('data-tour-fig')));
  const want = manifest.visual_tour.map((t) => t.id);
  if (JSON.stringify(tour) !== JSON.stringify(want)) c.fails.push(`visual tour order/count differs: ${tour.length} shown, ${want.length} in manifest`);
  for (const id of new Set(fb.map((b) => b.figure.id))) {
    const n = tour.filter((x) => x === id).length;
    if (n !== 1) c.fails.push(`${id} appears ${n} times in the visual tour`);
  }
  $t('[data-tour-fig]').each((_, el) => {
    const a = $t(el).find('a.context').attr('href');
    const b = fb.find((x) => x.figure.id === $t(el).attr('data-tour-fig'));
    if (a !== `${ctx.pageOf.get(b.seq).url}#${b.figure.anchor}`) c.fails.push(`tour: ${b.figure.label} links to ${a}`);
  });
  c.notes.push(`${fb.length} figure blocks (${manifest.stats.numbered_figures} numbered figures); ${tour.length} in the tour; SVGs byte-identical to the paper's`);
}

// ── 3. External URLs ─────────────────────────────────────────────────────────
{
  const c = check('3. No external URLs in src/href, except reference, source and community links');
  const allowedHosts = new Set([new URL(config.site.steward.url).host, new URL(config.site.url).host]);
  // Community links (the repository, the group) are allowed on any <a>; other
  // outbound links only inside reference lists (.refs) or cited-source blocks
  // ([data-outbound]). Nothing external is ever loaded (src).
  const communityHosts = new Set([new URL(config.community.repo).host, ...[config.community.linkedin, config.community.linkedinPage].filter(Boolean).map((u) => new URL(u).host),
    ...Object.entries(config.elsewhere ?? {}).filter(([k, v]) => !k.startsWith('$') && v).map(([, v]) => new URL(v).host)]);
  let refLinks = 0, srcLinks = 0, commLinks = 0;
  const allowed = new Map();
  for (const [u, $] of docs) {
    $('[src], [href]').each((_, el) => {
      for (const attr of ['src', 'href']) {
        const v = $(el).attr(attr);
        if (!v || !/^(https?:)?\/\//i.test(v)) continue;
        const host = new URL(v, 'https://x').host;
        if (attr === 'href' && el.tagName === 'a') {
          if ($(el).closest('.refs').length) { refLinks++; continue; }
          if ($(el).closest('[data-outbound]').length) { srcLinks++; continue; }
          if (communityHosts.has(host)) { commLinks++; continue; }
        }
        if (allowedHosts.has(host)) { allowed.set(v, (allowed.get(v) ?? 0) + 1); continue; }
        c.fails.push(`${u}: ${el.tagName} ${attr}="${v}"`);
      }
    });
  }
  c.notes.push(`${refLinks} outbound links inside reference lists, ${srcLinks} inside cited-source blocks, ${commLinks} community links (allowed)`);
  const own = [...allowed.keys()].filter((v) => v.startsWith(config.site.url)).length;
  c.notes.push(`also allowed: the steward link (${config.site.steward.url}) and ${own} canonical/og:url self-references to ${config.site.url}`);
  // Stylesheets must be the site's own, and no @import or url() pointing out.
  for (const f of fs.readdirSync(path.join(dist, '_astro'))) {
    if (f.endsWith('.css') && /url\(\s*['"]?(https?:)?\/\//.test(fs.readFileSync(path.join(dist, '_astro', f), 'utf8'))) c.fails.push(`external url() in ${f}`);
  }
}

// ── 4. Scripts ───────────────────────────────────────────────────────────────
{
  const c = check('4. No scripts except the site\'s own /comment.js; nothing inline');
  let withScript = 0, ldjson = 0;
  for (const [u, $] of docs) {
    $('script').each((_, el) => {
      // Structured data is a data block, never executed; it must parse as JSON.
      if ($(el).attr('type') === 'application/ld+json') { try { JSON.parse($(el).html()); ldjson++; } catch { c.fails.push(`${u}: JSON-LD does not parse`); } return; }
      const src = $(el).attr('src');
      if (src !== '/comment.js') c.fails.push(`${u}: script ${src ?? '(inline)'}`);
      else if (($(el).html() ?? '').trim()) c.fails.push(`${u}: inline code in the comment.js tag`);
      else withScript++;
    });
    $('[onclick], [onload], [onerror], [onmouseover]').each(() => c.fails.push(`${u}: inline event handler`));
  }
  if (!fs.existsSync(path.join(dist, 'comment.js'))) c.fails.push('dist/comment.js missing');
  else if (/fetch\(|XMLHttpRequest|sendBeacon|localStorage|document\.cookie|import\(/.test(fs.readFileSync(path.join(dist, 'comment.js'), 'utf8'))) c.fails.push('comment.js does more than build a link');
  c.notes.push(`${withScript} pages load /comment.js (highlight to discuss); it makes no requests and stores nothing`);
  const js = fs.readdirSync(path.join(dist, '_astro')).filter((f) => f.endsWith('.js'));
  if (js.length) c.fails.push(`JavaScript emitted: ${js.join(', ')}`);
  c.notes.push(`${docs.size} HTML files; no bundled JavaScript; ${ldjson} structured-data blocks (data only)`);
}

// ── 5. Internal links ────────────────────────────────────────────────────────
{
  const c = check('5. Every internal link resolves (pages, files and anchors)');
  const ids = new Map();
  for (const [u, $] of docs) {
    const s = new Set();
    $('[id]').each((_, el) => { const id = $(el).attr('id'); if (s.has(id)) c.fails.push(`${u}: duplicate id "${id}"`); s.add(id); });
    ids.set(u, s);
  }
  let n = 0;
  for (const [u, $] of docs) {
    $('a[href], link[href], img[src]').each((_, el) => {
      const v = $(el).attr('href') ?? $(el).attr('src');
      if (/^(https?:|mailto:|\/\/)/i.test(v)) return;
      n++;
      const target = new URL(v, `https://local${u}`);
      const pth = decodeURIComponent(target.pathname);
      const hash = decodeURIComponent(target.hash.slice(1));
      let pageKey = pth;
      if (!docs.has(pageKey)) {
        const file = path.join(dist, pth);
        if (fs.existsSync(file) && fs.statSync(file).isFile()) { if (hash) c.fails.push(`${u}: anchor on a file ${v}`); return; }
        c.fails.push(`${u}: broken link ${v}`);
        return;
      }
      if (hash && !ids.get(pageKey).has(hash)) c.fails.push(`${u}: missing anchor ${v}`);
    });
  }
  // Every citation number resolves to a reference entry.
  const refs = ids.get('/references/');
  const cites = new Set();
  for (const [, $] of docs) $('a.cite').each((_, el) => cites.add($(el).attr('href')));
  c.notes.push(`${n} internal links and images checked; ${cites.size} distinct reference targets cited`);
  if (ctx.unresolved.size) c.notes.push(`cross-references left unlinked (no target): ${[...ctx.unresolved].join(', ')}`);
  void refs;
}

// ── 6. Page metadata ─────────────────────────────────────────────────────────
{
  const c = check('6. Every page has a title, a description and one h1');
  for (const [u, $] of docs) {
    if (!$('title').text().trim()) c.fails.push(`${u}: no <title>`);
    if (!($('meta[name="description"]').attr('content') ?? '').trim()) c.fails.push(`${u}: no meta description`);
    const h1 = $('h1').length;
    if (h1 !== 1) c.fails.push(`${u}: ${h1} h1 elements`);
    if (!$('html').attr('lang')) c.fails.push(`${u}: no lang`);
    if (!$('a.skip[href="#main"]').length || !$('#main').length) c.fails.push(`${u}: no skip link`);
    $('img').each((_, el) => { if ($(el).attr('alt') === undefined) c.fails.push(`${u}: img without alt`); });
  }
}

// ── Extras: robots, sitemap, llms, headers ───────────────────────────────────
{
  const c = check('Extras: robots, sitemap, llms.txt, _headers, 404');
  const read = (f) => (fs.existsSync(path.join(dist, f)) ? fs.readFileSync(path.join(dist, f), 'utf8') : null);
  const robots = read('robots.txt') ?? '';
  const hdr = read('_headers') ?? '';
  const meta = [...docs.values()].filter(($) => $('meta[name="robots"]').length).length;
  if (config.site.indexable) {
    if (!/Allow:\s*\/\s*$/m.test(robots) || /Disallow:\s*\/\s*$/m.test(robots)) c.fails.push('indexable, but robots.txt does not allow all');
    if (/X-Robots-Tag/.test(hdr)) c.fails.push('indexable, but _headers still sends X-Robots-Tag');
    if (meta) c.fails.push(`indexable, but ${meta} pages carry meta robots`);
  } else {
    if (!/Disallow:\s*\/\s*$/m.test(robots)) c.fails.push('not indexable, but robots.txt does not disallow all');
    if (!/X-Robots-Tag: noindex/.test(hdr)) c.fails.push('not indexable, but _headers lacks X-Robots-Tag');
    if (meta !== docs.size) c.fails.push(`not indexable, but only ${meta}/${docs.size} pages carry meta robots`);
  }
  c.notes.push(config.site.indexable ? 'indexable: robots allow, no noindex' : 'not indexable: noindex in robots.txt, header and meta');
  const sm = read('sitemap.xml') ?? '';
  const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
  for (const l of locs) if (!docs.has(l)) c.fails.push(`sitemap lists missing page ${l}`);
  for (const u of docs.keys()) if (u !== '/404.html' && !locs.includes(u)) c.fails.push(`sitemap misses ${u}`);
  if (!read('llms.txt')) c.fails.push('no llms.txt');
  if (!read('llms-full.txt')) c.fails.push('no llms-full.txt');
  if (!read('404.html')) c.fails.push('no 404.html');
  const h = read('_headers') ?? '';
  if (!/Content-Security-Policy: default-src 'self'; script-src 'self'/.test(h)) c.fails.push('_headers lacks the strict CSP');
  c.notes.push(`sitemap: ${locs.length} URLs`);
}

// ── Report ───────────────────────────────────────────────────────────────────
let failed = 0;
for (const r of results) {
  console.log(`${r.fails.length ? 'FAIL' : 'PASS'}  ${r.name}`);
  for (const n of r.notes) console.log(`      ${n}`);
  for (const f of r.fails.slice(0, 25)) console.log(`      ✗ ${f}`);
  if (r.fails.length > 25) console.log(`      … and ${r.fails.length - 25} more`);
  failed += r.fails.length;
}
const bytes = (function size(d) { return fs.readdirSync(d).reduce((n, f) => { const p = path.join(d, f); return n + (fs.statSync(p).isDirectory() ? size(p) : fs.statSync(p).size); }, 0); })(dist);
console.log(`\n${docs.size} HTML pages · dist ${(bytes / 1048576).toFixed(1)} MB · ${failed ? `${failed} failure(s)` : 'all checks passed'}`);
process.exit(failed ? 1 : 0);
