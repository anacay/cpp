// Citations, made easy for people and machines (R10).
//  - references(ctx): the seed paper's reference list as {n, text, url}, for
//    the ScholarlyArticle's `citation` list on /paper/.
//  - citeLine(...): one plain "Cite this page" line, the same on every page that
//    shows it, so a reader or a model can copy it as is.
import versions from '../data/versions.json';

export function references(ctx) {
  const p = ctx.pages.get('references');
  const md = p.blocks.map((b) => b.markdown || '').join('\n');
  return md.split('\n')
    .map((l) => l.match(/^(\d+)\.\s+(.*)$/))
    .filter(Boolean)
    .map(([, n, rest]) => {
      const url = (rest.match(/https?:\/\/[^\s)>\]]+/) ?? [null])[0]?.replace(/[.,;]$/, '') ?? null;
      const text = rest.replace(/\*\*?|_/g, '').replace(/https?:\/\/\S+/g, '').replace(/\s+/g, ' ').trim().replace(/[.\s]+$/, '');
      return { n: Number(n), text, url };
    });
}

export const paperDate = () => new Date(`${versions.versions[0].date} 12:00 UTC`);
export const isoDay = (d) => d.toISOString().slice(0, 10);

export function citeLine({ title, url, author = 'The Capacity Planning Practice contributors', date }) {
  const when = date ?? paperDate().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
  const who = author.replace(/\.+$/, '');
  const t = /[.?!]$/.test(title) ? title : `${title}.`;
  return `${who}. “${t}” The Capacity Planning Practice, ${when}. ${url}. CC BY-SA 4.0.`;
}
