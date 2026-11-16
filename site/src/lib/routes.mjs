// Every page URL the site builds, for the sitemap and llms.txt.
import { load } from './paper.mjs';
import { DOCS } from './community.mjs';
import { guide } from './guide.mjs';
import { doorPages } from '../data/start-paths.mjs';
import { TERM_PAGES } from '../data/term-pages.mjs';
export function allRoutes() {
  const { chapters } = load();
  return ['/', '/what-is-capacity-planning/', '/questions/', '/start/', ...doorPages().map((d) => `/start/${d.id}/`), '/body-of-knowledge/', ...guide().pages.map((p) => p.url), '/cases/', '/notes/', '/join/', '/commons/', '/circle/', '/roles/', '/working-groups/', '/agenda/', '/related-work/', ...Object.values(DOCS), '/license/', '/privacy/', '/open-questions/', '/principles/', '/support/',
    '/abstract/', '/summary/', '/one-page/', '/paper/', ...chapters.map((c) => c.url), '/paper/terms/',
    '/worksheet/', '/tools/', '/public-record/', '/visual-tour/', '/glossary/', ...TERM_PAGES.map((t) => `/glossary/${t.slug}/`), '/references/', '/changes/', '/about/', '/downloads/'];
}
