// Every page URL the site builds, for the sitemap and llms.txt.
import { load } from './paper.mjs';
import { DOCS } from './community.mjs';
import { guide } from './guide.mjs';
export function allRoutes() {
  const { chapters } = load();
  return ['/', '/body-of-knowledge/', ...guide().pages.map((p) => p.url), '/join/', '/related-work/', ...Object.values(DOCS), '/license/', '/privacy/', '/open-questions/', '/support/',
    '/abstract/', '/summary/', '/one-page/', '/paper/', ...chapters.map((c) => c.url), '/paper/terms/',
    '/worksheet/', '/public-record/', '/visual-tour/', '/glossary/', '/references/', '/changes/', '/about/', '/downloads/'];
}
