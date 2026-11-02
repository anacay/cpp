// RSS feed: paper versions (from the reader-facing history), new case
// studies and working notes (dated from git), Practice Room calls and agenda
// status changes. One feed, newest first.
//  - Calls appear only once `call.status` in room.mjs is no longer 'pending',
//    so no date is ever announced here before the circle confirms it.
//  - Agenda items appear only from their dated `history` in agenda.mjs; the
//    starting status ('open') is not a change and has no item.
// Guids are built from ids and dates, never from titles, so they stay stable.
import { load } from '../lib/paper.mjs';
import { guide } from '../lib/guide.mjs';
import { guideDates } from '../lib/dates.mjs';
import versions from '../data/versions.json';
import { call, callLine } from '../data/room.mjs';
import { agendaChanges, STATUS } from '../data/agenda.mjs';

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
  if (call.status !== 'pending' && call.date) {
    const day = new Date(`${call.date}T${call.startUtc}:00Z`);
    const label = day.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
    items.push({
      title: `Practice Room open call, ${label}`,
      link: new URL('/community/', site.url).href,
      guid: `${site.url}/community/#call-${call.date}`,
      date: day,
      description: callLine(),
    });
    if (call.status === 'held' && call.notes) {
      items.push({
        title: `Notes from the open call of ${label}`,
        link: call.notes,
        guid: `${site.url}/community/#call-${call.date}-notes`,
        date: day,
        description: 'Notes from the Practice Room open call, without names.',
      });
    }
  }
  for (const ch of agendaChanges()) {
    const d = new Date(`${ch.date} 12:00 UTC`);
    if (Number.isNaN(d.getTime())) continue;
    const i = ch.item;
    const what = i.label ? `${i.label}, ${i.workstream.name}` : i.workstream.name;
    items.push({
      title: `Agenda: ${STATUS[ch.status]?.label ?? ch.status}. ${what}`,
      link: new URL(`/agenda/#${i.id}`, site.url).href,
      guid: `${site.url}/agenda/#${i.id}@${ch.date}-${ch.status}`,
      date: d,
      description: ch.note ? `${i.problem} ${ch.note}` : i.problem,
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
    <description>New versions of the seed paper, new case studies and working notes, Practice Room calls and changes to the open-problems agenda, from the open body of knowledge for capacity planning.</description>
    <language>en</language>
${body}
  </channel>
</rss>
`, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
