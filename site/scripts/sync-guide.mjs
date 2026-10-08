// Copies the guide's own figures (../body-of-knowledge/guide/figures/*.svg)
// into public/guide/figures/, byte for byte.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cfg = JSON.parse(fs.readFileSync(path.join(root, 'paper.config.json'), 'utf8'));
const src = path.resolve(root, cfg.community.foundingDir, 'body-of-knowledge/guide/figures');
const out = path.join(root, 'public/guide/figures');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
let n = 0;
for (const f of fs.existsSync(src) ? fs.readdirSync(src) : []) {
  if (!f.endsWith('.svg')) continue;
  fs.copyFileSync(path.join(src, f), path.join(out, f));
  n++;
}
console.log(`sync-guide: ${n} figures`);
