// Finds words that fuse across a tag boundary once tags are stripped the way a
// search engine builds a snippet: block elements break, inline elements join
// with no space. "<span>Kuantillion Cloud</span><span>Read the case</span>"
// reads "Kuantillion CloudRead the case". Only joins between two different
// text nodes count, so real words (iPad, McKinsey) and code are never flagged.
//   node scripts/fused-text.mjs     report every hit in dist/, by component
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';

const BLOCK = new Set(('address article aside blockquote br body caption dd details dialog div dl dt fieldset figcaption figure '
  + 'footer form h1 h2 h3 h4 h5 h6 header hr img input li main nav ol option p section select summary table tbody td '
  + 'textarea tfoot th thead tr ul').split(' '));
const SKIP = new Set('code head kbd math noscript pre samp script style svg template'.split(' '));
// Left side ends in a lowercase letter, digit or sentence punctuation; right side starts with a capital.
const LEFT = /[\p{Ll}\d.!?:;,]$/u;
const RIGHT = /^\p{Lu}/u;

const tagOf = (el) => el.name + (el.attribs?.class ? '.' + el.attribs.class.trim().split(/\s+/).join('.') : '');

// The component a hit belongs to: the nearest classed ancestor shared by both
// sides, then the element each side sits in.
function component(a, b) {
  const up = (n) => { const out = []; for (let p = n.parent; p && p.type === 'tag'; p = p.parent) out.push(p); return out; };
  const ua = up(a), ub = new Set(up(b));
  const shared = ua.find((p) => ub.has(p)) ;
  let ctx = shared;
  while (ctx && ctx.type === 'tag' && !ctx.attribs?.class && !ctx.attribs?.id) ctx = ctx.parent;
  const where = ctx && ctx.type === 'tag' ? tagOf(ctx) + (ctx.attribs.id ? '#' + ctx.attribs.id : '') : 'page';
  return `${where} › ${tagOf(a.parent)} + ${tagOf(b.parent)}`;
}

export function fusedText($) {
  const hits = [];
  let prev = null; // last text node since the most recent block boundary
  const walk = (node) => {
    for (const n of node.children ?? []) {
      if (n.type === 'text') {
        if (!n.data.trim()) { prev = null; continue; }
        if (prev && /\S$/.test(prev.data) && LEFT.test(prev.data) && RIGHT.test(n.data)) {
          hits.push({ component: component(prev, n), text: prev.data.trimStart().slice(-30) + '|' + n.data.trimEnd().slice(0, 30) });
        }
        prev = /\s$/.test(n.data) ? null : n;
      } else if (n.type === 'tag' || n.type === 'script' || n.type === 'style') {
        if (SKIP.has(n.name)) { prev = null; continue; }
        const block = BLOCK.has(n.name);
        if (block) prev = null;
        walk(n);
        if (block) prev = null;
      }
    }
  };
  walk($.root()[0]);
  return hits;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
  const files = [];
  (function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); fs.statSync(p).isDirectory() ? walk(p) : f.endsWith('.html') && files.push(p); } })(dist);
  const byComp = new Map();
  let total = 0;
  for (const f of files.sort()) {
    const url = '/' + path.relative(dist, f).split(path.sep).join('/').replace(/index\.html$/, '');
    for (const h of fusedText(cheerio.load(fs.readFileSync(f, 'utf8')))) {
      total++;
      if (!byComp.has(h.component)) byComp.set(h.component, new Map());
      const pages = byComp.get(h.component);
      if (!pages.has(url)) pages.set(url, []);
      pages.get(url).push(h.text);
    }
  }
  for (const [comp, pages] of [...byComp].sort((a, b) => b[1].size - a[1].size)) {
    const n = [...pages.values()].reduce((s, v) => s + v.length, 0);
    console.log(`\n${comp}  (${n} hits, ${pages.size} pages)`);
    for (const [url, texts] of pages) console.log(`  ${url}  ${texts.slice(0, 3).map((t) => JSON.stringify(t)).join('  ')}${texts.length > 3 ? `  … +${texts.length - 3}` : ''}`);
  }
  console.log(`\n${total} fused joins in ${files.length} pages`);
}
