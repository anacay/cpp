"""Render key pages at phone and desktop widths, and report CSP violations,
console errors and horizontal overflow.

    node scripts/serve.mjs 4321 &   # in another shell
    python3 scripts/screenshots.py [outdir]

Uses the Chromium already installed at /opt/pw-browsers (never runs
`playwright install`)."""
import os, sys, json
from playwright.sync_api import sync_playwright

os.environ.setdefault('PLAYWRIGHT_BROWSERS_PATH', '/opt/pw-browsers')
BASE = os.environ.get('BASE', 'http://localhost:4321')
OUT = sys.argv[1] if len(sys.argv) > 1 else 'docs/screenshots'
PAGES = os.environ.get('PAGES', '/,/paper/5-coefficients-are-agreements/,/visual-tour/,/glossary/,/about/').split(',')
WIDTHS = [int(w) for w in os.environ.get('WIDTHS', '390,1280').split(',')]
FULL = os.environ.get('FULL', '1') == '1'
os.makedirs(OUT, exist_ok=True)

problems = []
with sync_playwright() as p:
    b = p.chromium.launch()
    for w in WIDTHS:
        ctx = b.new_context(viewport={'width': w, 'height': 900}, device_scale_factor=1 if w > 800 else 2, color_scheme='dark')
        page = ctx.new_page()
        msgs = []
        page.on('console', lambda m: msgs.append(f'{m.type}: {m.text}') if m.type in ('error', 'warning') else None)
        page.on('requestfailed', lambda r: msgs.append(f'requestfailed: {r.url}'))
        for path in PAGES:
            msgs.clear()
            page.goto(BASE + path, wait_until='networkidle')
            # Load lazy images before a full-page shot.
            page.evaluate("document.querySelectorAll('img[loading=lazy]').forEach(i => i.loading = 'eager')")
            page.wait_for_load_state('networkidle')
            overflow = page.evaluate("""() => {
              const w = document.documentElement.clientWidth, out = [];
              for (const el of document.querySelectorAll('body *')) {
                const r = el.getBoundingClientRect();
                if (r.right > w + 1 && !el.closest('.table-wrap')) out.push(el.tagName + '.' + el.className + ' ' + Math.round(r.right));
              }
              return {scroll: document.documentElement.scrollWidth, client: w, els: out.slice(0, 8)};
            }""")
            name = (path.strip('/').replace('/', '_') or 'home') + f'_{w}.png'
            page.screenshot(path=os.path.join(OUT, name), full_page=FULL)
            if overflow['scroll'] > overflow['client'] or overflow['els']:
                problems.append(f'{path} @{w}: overflow {overflow}')
            for m in msgs:
                problems.append(f'{path} @{w}: {m}')
            print('shot', name)
        ctx.close()
    b.close()
print(json.dumps(problems, indent=1) if problems else 'no console errors, CSP violations or overflow')
