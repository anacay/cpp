# The Capacity Planning Practice (cpp)

The static site for the Capacity Planning Practice, an open body of knowledge
for capacity planning, at **cpp.anacay.org**. Stewarded by Anacay. Code: MIT
(`../LICENSE-CODE`); text and figures: CC BY-SA 4.0 (`../LICENSE`).

- Astro, static output, no external requests (no CDNs, fonts, analytics or
  embeds). System fonts only. **One script, our own:** `public/comment.js`
  (highlight to discuss). It only builds a link; CSP `connect-src 'none'`
  stops it from contacting anything, and `scripts/check.mjs` fails if it
  ever fetches, stores or imports. Pages work fully without it.
- **Request for comments:** reading pages carry the highlight bar and the
  author's notes from `../body-of-knowledge/rfc/author-notes.md`
  (`src/lib/notes.mjs`), listed at `/open-questions/`. A note whose passage
  no longer appears word for word fails the build. `npm run
  seed-discussions -- --post` opens one GitHub thread per approved note.
- Two content sources, neither repeated in `src/`: the seed paper's web
  manifest (the body of knowledge), and the repository's founding documents
  (`../CHARTER.md`, `../HOW_IT_GROWS.md`, `../GOVERNANCE.md`, `../ROADMAP.md`,
  `../CONTRIBUTING.md`, `../CODE_OF_CONDUCT.md`), rendered by
  `src/lib/community.mjs` at `/charter/`, `/how-it-grows/` and so on.
- `paper.config.json → community` holds the repository URL, the edition name,
  the LinkedIn group URL (empty until it exists) and `open` (false until the
  repository is public: Discuss and Suggest-an-edit links are shown with an
  "Opening soon" note).
- `paper.config.json → site.indexable` decides whether search engines may
  index the site. false: robots.txt disallows all, every page carries meta
  robots noindex, and `_headers` sends X-Robots-Tag. true: all three are off
  (`scripts/headers.mjs` strips the header from `dist/_headers`). The checks
  verify whichever is set. Sharing the link works either way.

## The practice pages

| Page | Source |
|---|---|
| `/` | `src/pages/index.astro`: the acknowledgment, why-now facts (quoted, cited, checked 7 Oct 2026), who it's for, the seed, how it grows |
| `/body-of-knowledge/` | hub for the seed edition |
| `/join/` | ways to take part |
| `/related-work/` | CMG, ITIL, SRE books, Hixson and Guliani, FinOps, PMI, with links |
| `/charter/` … `/code-of-conduct/` | the repository's Markdown files |
| `/license/` | CC BY-SA 4.0 and MIT, how to credit |

Every body-of-knowledge page ends with **Help build this section**
(`src/components/HelpBuild.astro`): Discuss (a new thread in the `sections`
discussion category, title prefilled), Suggest an edit (GitHub's editor on
the page's file under `../body-of-knowledge/seed/`) and See the discussion.

`npm run export` writes those files from the manifest
(`scripts/export-bok.mjs`), one per page, with figures. Run it whenever the
paper is synced. Accepted edits are folded back into the paper, and the next
version is rebuilt and re-exported.

## Build

```sh
npm install
npm run build        # sync from the paper → astro build → scripts/check.mjs
npm run export       # write ../body-of-knowledge/seed/ from the manifest
npm run preview      # serves dist/ on :4321 with the _headers CSP applied
npm run shots        # Playwright screenshots (needs the preview running)
```

`npm run build` fails if the paper can't be read, a figure or download is
missing, a page can't be assigned, a quote on the home page no longer appears
in the paper, `src/data/versions.json` has no row for the current version, or
any check fails.

Screenshots use the Chromium at `/opt/pw-browsers`
(`PLAYWRIGHT_BROWSERS_PATH`); never run `playwright install`. Set
`PAGES=/,/glossary/`, `WIDTHS=320,390,1280` or `FULL=0` to vary them; the
script also reports console errors, CSP violations and horizontal overflow.

## How the content flows

```
06_WHITEPAPER/drafts/v7_6.md
   └─ web/build_manifest.py ─→ web/manifest_v7_6.json  (+ figures/v71, v72 SVGs, pdf/, ipad/)
         └─ scripts/sync-paper.mjs ─→ src/generated/{manifest,figures,downloads}.json
                                      public/figures/<id>.svg   (byte-for-byte copies)
                                      public/downloads/*         (PDF, iPad PDF, EPUB)
               └─ src/lib/paper.mjs ─→ every page, at build time
```

When the paper changes:

1. In `06_WHITEPAPER`, run `python3 web/build_manifest.py` (with `--draft` and
   `--out` for a new version), and rebuild the PDF, iPad PDF and EPUB.
2. Here, point `paper.config.json` at the new manifest and downloads, add a
   row at the top of `src/data/versions.json`, and run `npm run build`.

`paper.config.json → paperDir` is relative to this folder
(`../../06_WHITEPAPER`); override with `PAPER_DIR=…`. If the paper folder is
unreachable, the sync keeps the last copy in `src/generated/` and says so.

### What goes where

`src/lib/paper.mjs → structure()` assigns each manifest block to one page by
its layer and level-2 heading. Unknown headings fail the build.

| Manifest | Page |
|---|---|
| Title, subtitle, "How this paper is built" | `/paper/` (with the contents) |
| Abstract | `/abstract/` |
| Executive summary | `/summary/` |
| One page | `/one-page/` |
| "What changed in this version" | `/changes/` (plus the reader's version history) |
| Sections 1–14 | `/paper/<n>-<slug>/` |
| Terms used in this paper | `/paper/terms/` |
| Appendix A | `/worksheet/` |
| Appendix B | `/public-record/` |
| About the author; disclaimer | `/about/` |
| References | `/references/` |

Derived pages: `/` (home), `/visual-tour/` (from `visual_tour`),
`/glossary/` (the Terms list and both appendices' **Terms.** lists, merged and
alphabetical, with where each term is used), `/downloads/`, `/404.html`,
`robots.txt`, `sitemap.xml`, `llms.txt` and `llms-full.txt`.

### Fidelity rules the code keeps

- Markdown is rendered as written (markdown-it, CommonMark plus tables).
  Nothing is reworded. Links are added around existing characters only:
  - `[n]` → `/references/#ref-n`;
  - "Section 6.5", "Sections 6.2, 6.4 and 14" → the chapter and subsection
    anchor;
  - "Figure 41", "Figure A.2" → the figure in place;
  - "Appendix A" / "Appendix B.5" → the appendix page or subsection;
  - section numbers in the summary's "If you want… / Read" table.
  References with no target stay plain text, and `check.mjs` lists them.
- Reference URLs are shown exactly as the paper writes them.
- Figures are the paper's SVGs, untouched, shown with `<img>` and the
  manifest's alt text on a light plate. The caption goes below; tapping opens
  the SVG full size.
- Home-page sentences are located in the manifest with `quote()`. If the paper
  stops saying them, the build stops.
- The only text not from the paper is site apparatus: navigation, page
  introductions, the About page's framing and the version history.

## Checks (`scripts/check.mjs`)

1. Every manifest block is on its page, once, in order, with its text equal to
   an independent markdown render. Headings are checked too.
2. Every figure is where the manifest puts it: same image, alt, caption and
   neighbours. The served SVG is byte-identical to the paper's, and each
   figure appears once in the visual tour, in order.
3. There are no external URLs in `src`/`href`. The exceptions are outbound
   links inside reference lists (`.refs`), the steward link to anacay.com and
   the site's own canonical URL.
4. There are no `<script>` tags and no emitted JavaScript.
5. Every internal link resolves, anchors included, and no page has duplicate
   ids.
6. Every page has a title, a meta description, one `h1`, `lang` and a skip
   link.

It also checks `robots.txt`, `sitemap.xml`, `llms.txt`, `_headers` and the 404
page.

## Restyling

All styling is in `src/styles/site.css`. The `:root` tokens come from
anacay.com:

| Token | Value | Use |
|---|---|---|
| `--water`, `--water-deep`, `--water-line` | `#0A2231`, `#061620`, `#16394E` | Page, gradient floor, rules and borders |
| `--ink`, `--ink-muted` | `#E9EFF3`, `#8FA8B8` | Text |
| `--gold`, `--gold-soft` | `#C9A227`, `#E3C567` | Accent, used sparingly: rules, current step, links, focus |
| `--viz-1..3` | `#B08B1A`, `#1E93B0`, `#B14A70` | Reserved for site-drawn data visuals |
| `--plate`, `--plate-edge` | `#FFFFFF`, `#C9D3DA` | Figure plates. The figures are built for a light page |
| `--serif` / `--sans` | Cambria… / Calibri… | Serif headings, sans body, as on anacay.com |
| `--measure` | `68ch` | Reading measure |
| `--wide` | `64rem` | Widest plate |

Plate widths follow the manifest's `canvas` (`.plate--band`, `--standard`,
`--tall`, `--page`). The mark (`src/components/Mark.astro`,
`public/favicon.svg`) reuses the parent star's ring and orbiting point around a
rising step. Anacay's own star (`Star.astro`) appears only beside the steward
line.

To restyle the figures themselves, see `06_WHITEPAPER/web/README.md` and
rebuild them there. The site never edits them.

## Deploy (Cloudflare Worker, two stages, like anacay.com)

`wrangler.jsonc` serves `dist/` as static assets, with `not_found_handling:
404-page` and `auto-trailing-slash`. Install wrangler when you need it
(`npm i -D wrangler`). Then:

```sh
npm run build
npx wrangler versions upload     # stage 1: upload a version; review it on its preview URL
npx wrangler versions deploy     # stage 2: promote, only after review
```

Before the first deploy, and on the preview URL:

- [ ] **TODO (author): confirm the comment address `cpp@anacay.org`** in
  `paper.config.json → site.contact` (shown on /about/), and that the mailbox
  exists.
- [ ] Bind the custom domain `cpp.anacay.org` (the `routes` line in
  `wrangler.jsonc`). Make sure it isn't also bound elsewhere.
- [ ] Confirm `_headers` is applied on a real response and `/_headers` returns
  404. Check the `/figures/*` rule: its `! Content-Security-Policy` detaches the
  site CSP so full-size SVGs can use their inline `style` attributes.
- [ ] **Indexing:** set `site.indexable` in `paper.config.json` as intended
  before the build; the checks confirm robots.txt, the header and the meta
  match it.
- [ ] The downloads total about 33 MB. They're served from the Worker's assets;
  each file is under the 25 MiB per-asset limit.
