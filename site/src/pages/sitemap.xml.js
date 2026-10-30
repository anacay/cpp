import { load } from '../lib/paper.mjs';
import { allRoutes } from '../lib/routes.mjs';
import { guide } from '../lib/guide.mjs';
import { guideDates } from '../lib/dates.mjs';
export function GET() {
  const { config } = load();
  const fileByUrl = new Map(guide().pages.map((p) => [p.url, p.file]));
  const urls = allRoutes().map((u) => {
    const f = fileByUrl.get(u);
    const d = f ? guideDates(f) : null;
    const lastmod = d ? `<lastmod>${d.last.slice(0, 10)}</lastmod>` : '';
    return `  <url><loc>${new URL(u, config.site.url).href}</loc>${lastmod}</url>`;
  }).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
