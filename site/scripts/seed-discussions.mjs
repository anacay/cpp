// Opens one GitHub discussion per author's note, in the Sections category, so
// people have threads to reply to from day one. Run once, after the repository
// is public and Discussions are on (03_RUN_CPP_OPEN_COMMUNITY).
//
//   node scripts/seed-discussions.mjs            # dry run: prints what it would post
//   node scripts/seed-discussions.mjs --post     # posts, using the gh CLI's login
//
// Notes still marked "draft" are skipped. Notes already linked in threads.json,
// and already-posted titles, are skipped too.
// With --post it also writes ../body-of-knowledge/rfc/threads.json (passage →
// thread URL), so each margin note's Reply link opens its thread. Rebuild after.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
process.chdir(path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..'));
const { load } = await import('../src/lib/paper.mjs');
const { notes, KINDS } = await import('../src/lib/notes.mjs');
const { links } = await import('../src/lib/community.mjs');
const ctx = load();
const post = process.argv.includes('--post');
const [owner, name] = new URL(ctx.config.community.repo).pathname.slice(1).split('/');

const gh = (query, vars) => JSON.parse(execFileSync('gh', ['api', 'graphql', '-f', `query=${query}`,
  ...Object.entries(vars).flatMap(([k, v]) => ['-f', `${k}=${v}`])], { encoding: 'utf8' }));

let repoId, catId, existing = new Map();
if (post) {
  const r = gh(`query($o:String!,$n:String!){repository(owner:$o,name:$n){id discussionCategories(first:25){nodes{id slug}} discussions(first:100){nodes{title url}}}}`, { o: owner, n: name });
  repoId = r.data.repository.id;
  catId = r.data.repository.discussionCategories.nodes.find((c) => c.slug === 'sections')?.id;
  if (!catId) throw new Error('No "sections" discussion category. Create it first.');
  existing = new Map(r.data.repository.discussions.nodes.map((d) => [d.title, d.url]));
}

// Links already in threads.json are kept, so notes whose thread was opened by
// hand (with its own title) aren't posted again.
const threadsFile = path.resolve(ctx.config.community.foundingDir, 'body-of-knowledge/rfc/threads.json');
const threads = fs.existsSync(threadsFile) ? JSON.parse(fs.readFileSync(threadsFile, 'utf8')) : {};
for (const n of notes()) {
  const where = links(n.page).name;
  const title = `${KINDS[n.kind]}: ${where}: "${n.quote.split(/\s+/).slice(0, 8).join(' ')}…"`;
  const url = `${ctx.config.site.url}${n.page.url}#${n.id}`;
  const body = `> ${n.quote}\n\n${n.body}\n\n*Author's note ${n.n} on [${where}](${url}). Reply below; if this settles into a change to the text, an editor will carry it over with credit (see HOW_IT_GROWS.md).*`;
  if (n.draft) { console.log(`skip (draft)  ${title}`); continue; }
  if (threads[n.quote]) { console.log(`skip (linked) ${title}`); continue; }
  if (existing.has(title)) { threads[n.quote] = existing.get(title); console.log(`skip (exists) ${title}`); continue; }
  if (!post) { console.log(`would post    ${title}`); continue; }
  const d = gh(`mutation($r:ID!,$c:ID!,$t:String!,$b:String!){createDiscussion(input:{repositoryId:$r,categoryId:$c,title:$t,body:$b}){discussion{url}}}`, { r: repoId, c: catId, t: title, b: body });
  threads[n.quote] = d.data.createDiscussion.discussion.url;
  console.log(`posted        ${title}`);
}

if (post) {
  fs.writeFileSync(threadsFile, JSON.stringify(threads, null, 2) + '\n');
  console.log(`wrote ${Object.keys(threads).length} thread links to ${path.relative(process.cwd(), threadsFile)}`);
}
