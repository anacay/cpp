"""Make a self-contained preview copy of dist/ for hosting under a path prefix
(for example a private claude.ai artifact): every root-relative link becomes
relative, directory links end in index.html, _astro/ becomes assets/, and the
large downloads are left out (their links point at the live site).

    python3 scripts/make-preview.py dist /path/to/preview
"""
import os, re, shutil, sys

src, out = sys.argv[1], sys.argv[2]
SITE = 'https://cpp.anacay.org'
if os.path.exists(out):
    shutil.rmtree(out)
shutil.copytree(src, out, ignore=lambda d, names: [n for n in names if d.endswith('downloads') and n != 'index.html'])
if os.path.isdir(os.path.join(out, '_astro')):
    os.rename(os.path.join(out, '_astro'), os.path.join(out, 'assets'))

def rel(target, page_dir):
    path, _, frag = target.partition('#')
    if path.startswith('/_astro/'):
        path = '/assets/' + path[len('/_astro/'):]
    if path.startswith('/downloads/') and path != '/downloads/':
        return SITE + target
    if path.endswith('/'):
        path += 'index.html'
    r = os.path.relpath(path.lstrip('/') or 'index.html', page_dir or '.')
    return r + ('#' + frag if frag else '')

n = 0
for d, _, files in os.walk(out):
    for f in files:
        if not f.endswith('.html'):
            continue
        p = os.path.join(d, f)
        page_dir = os.path.relpath(d, out)
        page_dir = '' if page_dir == '.' else page_dir
        s = open(p, encoding='utf8').read()
        s = re.sub(r'(href|src)="(/(?!/)[^"]*)"', lambda m: f'{m.group(1)}="{rel(m.group(2), page_dir)}"', s)
        if page_dir == 'downloads':
            s = re.sub(r'(<h1[^>]*>.*?</h1>)', r'\1<p class="note"><strong>Preview note:</strong> the files are not included in this private preview. They will download from cpp.anacay.org once it is live.</p>', s, count=1, flags=re.S)
        open(p, 'w', encoding='utf8').write(s)
        n += 1
print(f'make-preview: {n} pages rewritten into {out}')
