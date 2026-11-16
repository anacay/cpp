// After astro build: when the site is NOT indexable, add an X-Robots-Tag
// noindex line under /* in dist/_headers. public/_headers carries no robots
// header, so a build that skips this script can never ship noindex by accident.
// check.mjs still fails a non-indexable build that lacks the header.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cfg = JSON.parse(fs.readFileSync(path.join(root, 'paper.config.json'), 'utf8'));
const f = path.join(root, 'dist/_headers');
let s = fs.readFileSync(f, 'utf8').replace(/^\s*X-Robots-Tag:.*\n/gm, '');
if (!cfg.site.indexable) {
  s = s.replace(/^\/\*\n/m, '/*\n  X-Robots-Tag: noindex, nofollow\n');
  console.log('headers: not indexable, X-Robots-Tag added');
} else console.log('headers: indexable, no X-Robots-Tag');
fs.writeFileSync(f, s);
