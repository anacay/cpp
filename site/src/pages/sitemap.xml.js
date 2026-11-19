import { load } from '../lib/paper.mjs';
import { allRoutes, NOINDEX } from '../lib/routes.mjs';
import { guide } from '../lib/guide.mjs';
import { guideDates } from '../lib/dates.mjs';
import versions from '../data/versions.json';
import { execSync } from 'node:child_process';
// Pages with no dated source of their own (home, /join/, /questions/ and the
// like) take the date of the commit being built, since the shared layout and
// data they render change with every release (R14).
const siteDate = (() => { try { return execSync('git log -1 --format=%cs', { encoding: 'utf8' }).trim(); } catch { return null; } })();
// Pages rendered from the seed paper take the current paper version's date.
const PAPER_ROUTES = ['/paper/', '/summary/', '/abstract/', '/one-page/', '/worksheet/', '/public-record/', '/references/', '/visual-tour/'];
const paperDate = new Date(`${versions.versions[0].date} 12:00 UTC`).toISOString().slice(0, 10);
export function GET() {
  const { config } = load();
  const fileByUrl = new Map(guide().pages.map((p) => [p.url, p.file]));
  const urls = allRoutes().filter((u) => !NOINDEX.includes(u)).map((u) => {
    const f = fileByUrl.get(u);
    const d = f ? guideDates(f) : null;
    const day = d ? d.last.slice(0, 10) : PAPER_ROUTES.some((r) => u === r || (r === '/paper/' && u.startsWith(r))) ? paperDate : siteDate;
    const lastmod = day ? `<lastmod>${day}</lastmod>` : '';
    return `  <url><loc>${new URL(u, config.site.url).href}</loc>${lastmod}</url>`;
  }).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
