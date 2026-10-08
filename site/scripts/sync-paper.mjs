// Copies the paper's build outputs into the site: the manifest, every figure it
// names, and the downloads. This is the only place the site reads the paper from.
//
//   node scripts/sync-paper.mjs            # copy from paper.config.json's paperDir
//   PAPER_DIR=/path/to/06_WHITEPAPER node scripts/sync-paper.mjs
//
// It fails if a figure or download named in the config or manifest is missing.
// If the paper directory itself is unreachable, it keeps the last synced copy
// (src/generated/) and says so, so the site still builds from a clean checkout
// that carries that copy.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cfg = JSON.parse(fs.readFileSync(path.join(root, 'paper.config.json'), 'utf8'));
const paperDir = path.resolve(root, process.env.PAPER_DIR || cfg.paperDir);
const genDir = path.join(root, 'src/generated');
const figOut = path.join(root, 'public/figures');
const dlOut = path.join(root, 'public/downloads');

const fail = (msg) => { console.error(`sync-paper: ${msg}`); process.exit(1); };

if (!fs.existsSync(path.join(paperDir, cfg.manifest))) {
  if (fs.existsSync(path.join(genDir, 'manifest.json'))) {
    console.warn(`sync-paper: ${paperDir} not reachable; keeping the last synced copy in src/generated/.`);
    process.exit(0);
  }
  fail(`manifest not found: ${path.join(paperDir, cfg.manifest)}`);
}

const manifest = JSON.parse(fs.readFileSync(path.join(paperDir, cfg.manifest), 'utf8'));
fs.mkdirSync(genDir, { recursive: true });
fs.rmSync(figOut, { recursive: true, force: true });
fs.mkdirSync(figOut, { recursive: true });
fs.mkdirSync(dlOut, { recursive: true });

// Figures: copied byte for byte (never altered), flattened to /figures/<id>.svg.
const figures = {};
for (const b of manifest.blocks) {
  if (b.type !== 'figure') continue;
  const f = b.figure;
  const src = path.join(paperDir, f.svg);
  if (!fs.existsSync(src)) fail(`missing SVG for ${f.label} (${f.id}): ${src}`);
  const svg = fs.readFileSync(src);
  const head = svg.toString('utf8', 0, 4000);
  const vb = head.match(/viewBox="([\d.\s-]+)"/);
  if (!vb) fail(`no viewBox in ${src}`);
  const [, , w, h] = vb[1].trim().split(/\s+/).map(Number);
  if (figures[f.id]) fail(`figure id used twice: ${f.id}`);
  fs.writeFileSync(path.join(figOut, `${f.id}.svg`), svg);
  figures[f.id] = {
    file: `/figures/${f.id}.svg`,
    width: w,
    height: h,
    sha256: crypto.createHash('sha256').update(svg).digest('hex'),
    source: f.svg,
  };
}

// Downloads.
const downloads = [];
for (const d of cfg.downloads) {
  const src = path.join(paperDir, d.file);
  if (!fs.existsSync(src)) fail(`missing download: ${src}`);
  const name = path.basename(d.file);
  fs.copyFileSync(src, path.join(dlOut, name));
  downloads.push({ ...d, name, href: `/downloads/${name}`, bytes: fs.statSync(src).size });
}
// Remove downloads left over from an earlier version.
for (const f of fs.readdirSync(dlOut)) {
  if (!downloads.some((d) => d.name === f)) fs.rmSync(path.join(dlOut, f));
}

fs.writeFileSync(path.join(genDir, 'manifest.json'), JSON.stringify(manifest));
fs.writeFileSync(path.join(genDir, 'figures.json'), JSON.stringify(figures, null, 1));
fs.writeFileSync(path.join(genDir, 'downloads.json'), JSON.stringify(downloads, null, 1));

console.log(`sync-paper: ${manifest.title} ${manifest.version}: ${manifest.blocks.length} blocks, ` +
  `${Object.keys(figures).length} figures, ${downloads.length} downloads (from ${paperDir})`);
