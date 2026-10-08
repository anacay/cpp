// After astro build: when the site is indexable, drop the X-Robots-Tag noindex
// line from dist/_headers (public/_headers keeps it as the safe default).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cfg = JSON.parse(fs.readFileSync(path.join(root, 'paper.config.json'), 'utf8'));
const f = path.join(root, 'dist/_headers');
if (cfg.site.indexable) {
  fs.writeFileSync(f, fs.readFileSync(f, 'utf8').replace(/^\s*X-Robots-Tag:.*\n/m, ''));
  console.log('headers: indexable, X-Robots-Tag removed');
} else console.log('headers: not indexable, X-Robots-Tag kept');
