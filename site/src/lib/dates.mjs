// First-published and last-modified dates for repository files, read once
// from git history at build time. Used for sitemap <lastmod>, RSS dates and
// JSON-LD datePublished/dateModified — real dates from real commits, never
// the build clock, so freshness signals stay honest.
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { load } from './paper.mjs';

let _map;
export function dateMap() {
  if (_map) return _map;
  const root = path.resolve(process.cwd(), load().config.community.foundingDir);
  const map = new Map(); // repo-relative path -> { first, last } (ISO 8601)
  try {
    const out = execFileSync('git', ['-C', root, 'log', '--format=%x01%cI', '--name-only'],
      { maxBuffer: 64 * 1024 * 1024, encoding: 'utf8' });
    let date = null;
    for (const line of out.split('\n')) {
      if (!line) continue;
      if (line.charCodeAt(0) === 1) { date = line.slice(1).trim(); continue; }
      const f = line.trim();
      if (!f || !date) continue;
      const e = map.get(f);
      if (!e) map.set(f, { first: date, last: date });
      else e.first = date; // log runs newest-first; the oldest sighting is first publication
    }
  } catch {
    // No git (e.g. an export of the tree): every lookup returns null and
    // callers omit dates rather than invent them.
  }
  _map = map;
  return map;
}

export function datesFor(repoPath) {
  return dateMap().get(repoPath) ?? null;
}

export function guideDates(file) {
  return datesFor(`body-of-knowledge/guide/${file}`);
}
