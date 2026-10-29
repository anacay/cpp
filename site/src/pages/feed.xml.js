// RSS feed: paper versions (from the reader-facing history) and new case
// studies and working notes (dated from git). One feed, newest first.
import { load } from '../lib/paper.mjs';
import { guide } from '../lib/guide.mjs';
import { guideDates } from '../lib/dates.mjs';
import versions from '../data/versions.json';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function GET() {
  const { config, manifest } = load();
  const site = config.site;
  const items = [];
  for (const v of versions.versions) {
    const d = new Date(`${v.date} 12:00 UTC`);
    if (Number.isNaN(d.getTime())) continue;
    items.push({
      title: `${manifest.title}, version ${v.version}`,
      link: new URL('/changes/', site.url).href,
      guid: `${site.url}/changes/#v${v.version}`,
      date: d,
      description: v.summary,
    });
  }
  for (const p of guide().pages) {
    if (p.kind !== 'case' && p.kind !== 'note') continue;
    if (p.kind === 'case' && !Number.isInteger(p.order)) continue; // door pages only
    const g = guideDates(p.file);
    if (!g) continue;
    items.push({
      title: p.kind === 'case' ? `New case study: ${p.title.replace(/^Case \d+:\s*/, '')}` : `New working note: ${p.title}`,
      link: new URL(p.url, site.url).href,
      guid: new URL(p.url, site.url).href,
      date: new Date(g.first),
      description: p.short,
    });
  }
  items.sort((a, b) => b.date - a.date);
  const body = items.slice(0, 30).map((i) => `    <item>
      <title>${esc(i.title)}</title>
      <link>${i.link}</link>
      <guid isPermaLink="false">${esc(i.guid)}</guid>
      <pubDate>${i.date.toUTCString()}</pubDate>
      <description>${esc(i.description)}</description>
    </item>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(site.name)}</title>
    <link>${site.url}</link>
    <atom:link href="${new URL('/feed.xml', site.url).href}" rel="self" type="application/rss+xml"/>
    <description>New versions of the seed paper, new case studies and new working notes from the open body of knowledge for capacity planning.</description>
    <language>en</language>
${body}
  </channel>
</rss>
`, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
