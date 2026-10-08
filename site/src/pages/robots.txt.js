// robots.txt follows paper.config.json → site.indexable. Sharing the link works
// either way; this only decides whether search engines index the site.
import { load } from '../lib/paper.mjs';
export function GET() {
  const { config } = load();
  const body = config.site.indexable
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', config.site.url).href}\n`
    : `# The Capacity Planning Practice: not for indexing yet.\nUser-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
