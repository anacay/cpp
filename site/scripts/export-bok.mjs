// Writes the seed edition of the body of knowledge as one Markdown file per
// reading page, under ../body-of-knowledge/seed/ (the path in paper.config.json),
// with the figures beside them. These are the files "Suggest an edit" opens.
//
//   node scripts/export-bok.mjs
//
// The text is the manifest's, unchanged; only headings and figure references
// are written out around it. Run it again when a new version of the paper is
// synced; editors fold accepted edits into the paper before that.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
process.chdir(root);
const { load } = await import('../src/lib/paper.mjs');
const { bokFile, pageName } = await import('../src/lib/community.mjs');
const ctx = load();
const { manifest, config } = ctx;
const c = config.community;
const out = path.resolve(root, c.foundingDir, c.bokDir);
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(path.join(out, 'figures'), { recursive: true });

const order = ['paper', 'abstract', 'summary', 'one-page', ...ctx.chapters.map((ch) => ch.id), 'terms', 'worksheet', 'public-record', 'references'];
const index = [];
let figs = 0;
for (const id of order) {
  const p = ctx.pages.get(id);
  const file = bokFile(p);
  if (!p || !file) continue;
  const parts = [`<!-- ${c.edition}, ${c.editionNote}. Licensed CC BY-SA 4.0. Site page: ${config.site.url}${p.url} -->`];
  for (const b of p.blocks) {
    if (b.starts_heading && b.heading) parts.push(`${'#'.repeat(Math.max(1, (b.heading_level ?? 2) - 1))} ${b.heading}`);
    if (b.type === 'text') parts.push(b.markdown.trim());
    else if (b.type === 'figure') {
      const f = b.figure;
      const src = path.join(root, 'public/figures', `${f.id}.svg`);
      fs.copyFileSync(src, path.join(out, 'figures', `${f.id}.svg`));
      figs++;
      parts.push(`![${f.alt.replace(/[\[\]]/g, '')}](figures/${f.id}.svg)\n\n*${f.caption}*`);
    }
  }
  fs.writeFileSync(path.join(out, file), parts.join('\n\n') + '\n');
  index.push(`| [${file}](${file}) | ${pageName(p)} | ${config.site.url}${p.url} |`);
}

fs.writeFileSync(path.join(out, 'README.md'), `# ${c.edition}

The seed edition of the body of knowledge, ${c.editionNote}: *${manifest.title}*, by Guillermo Martinez. One file per page of the site, in reading order. Figures are in \`figures/\`.

Licensed [CC BY-SA 4.0](../../LICENSE). Short quotations from cited works stay their owners'.

## How to change it

- **Discuss** a page: every page on the site links to a new thread in the \`sections\` discussion category.
- **Suggest an edit**: edit the file here on GitHub. It becomes a pull request.
- Small fixes are merged by one editor. Anything that changes what the text claims stays open at least 14 days, and an editor calls rough consensus. See [HOW_IT_GROWS.md](../../HOW_IT_GROWS.md).

Accepted changes are folded into the next version of the seed, and the site is rebuilt from it. Each version lists what changed and who helped.

## Files

| File | Page | On the site |
|---|---|---|
${index.join('\n')}
`);
console.log(`export-bok: ${index.length} files and ${figs} figure references written to ${path.relative(process.cwd(), out)}`);
