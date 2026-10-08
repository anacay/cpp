// Local preview of dist/ that behaves like the Worker: directory URLs, the 404
// page, and the headers from dist/_headers (so CSP violations show up locally).
//   node scripts/serve.mjs [port]
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist');
const port = Number(process.argv[2] || process.env.PORT || 4321);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8', '.pdf': 'application/pdf', '.epub': 'application/epub+zip', '.json': 'application/json' };

// Minimal _headers parser: path patterns with trailing *, "! Name" to detach.
const rules = [];
let cur;
for (const raw of fs.readFileSync(path.join(root, '_headers'), 'utf8').split('\n')) {
  if (!raw.trim() || raw.trim().startsWith('#')) continue;
  if (!/^\s/.test(raw)) { cur = { pattern: raw.trim(), set: [], unset: [] }; rules.push(cur); continue; }
  const line = raw.trim();
  if (line.startsWith('!')) cur.unset.push(line.slice(1).trim().toLowerCase());
  else { const i = line.indexOf(':'); cur.set.push([line.slice(0, i).trim(), line.slice(i + 1).trim()]); }
}
const headersFor = (url) => {
  const h = {};
  for (const r of rules) {
    const re = new RegExp('^' + r.pattern.replace(/[.+?^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*') + '$');
    if (!re.test(url)) continue;
    for (const u of r.unset) for (const k of Object.keys(h)) if (k.toLowerCase() === u) delete h[k];
    for (const [k, v] of r.set) h[k] = v;
  }
  return h;
};

http.createServer((req, res) => {
  const url = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (url === '/_headers') { res.writeHead(404); return res.end(); }
  let file = path.join(root, url);
  if (!file.startsWith(root)) { res.writeHead(403); return res.end(); }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
    if (!url.endsWith('/')) { res.writeHead(307, { Location: url + '/' }); return res.end(); }
    file = path.join(file, 'index.html');
  }
  let status = 200;
  if (!fs.existsSync(file)) { status = 404; file = path.join(root, '404.html'); }
  res.writeHead(status, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream', ...headersFor(url) });
  fs.createReadStream(file).pipe(res);
}).listen(port, () => console.log(`serving ${root} on http://localhost:${port}`));
