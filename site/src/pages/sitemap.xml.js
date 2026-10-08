import { load } from '../lib/paper.mjs';
import { allRoutes } from '../lib/routes.mjs';
export function GET() {
  const { config } = load();
  const urls = allRoutes().map((u) => `  <url><loc>${new URL(u, config.site.url).href}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
