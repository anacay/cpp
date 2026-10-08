# Release record: CPP R1

The Capacity Planning Practice, Seed edition v0.1, first publication at https://cpp.anacay.org.

| | |
|---|---|
| Date | 8 October 2026 |
| Worker | `cpp-anacay` (Cloudflare account that also holds anacay.com) |
| Live version | `1a648846-a21e-4669-9f02-e2cdee65a113`, deployed at 100% |
| Reviewed preview | `c78fa7c3-5a02-4441-acc2-8f67329416af` (same build, before the custom domain was added) |
| First deploy | `9a8d6d7f-4e28-460f-980d-b7554ff80aa2`, workers.dev only (the Worker had to exist before `versions upload`) |
| Custom domain | `cpp.anacay.org`, attached with `wrangler triggers deploy`; one DNS record in the anacay.org zone |
| Indexable | **No** (`site.indexable = false`, soft launch) |
| Repository | `anacay/cpp`, **private** at release; to be made public right after by `03_RUN_CPP_OPEN_COMMUNITY.txt` |
| Content | Manifest v7.6; PDF, iPad PDF and EPUB in `site/public/downloads/` |

## Build checks (`npm run build`)

All passed: 63 HTML pages, dist 35.9 MB.

1. Every manifest block on its page, in order, text unchanged (168 blocks across 24 pages).
2. Every figure where the manifest puts it, byte-identical, once in the visual tour (61 figure blocks).
3. No external URLs in `src`/`href` beyond the allowed reference, source, community, steward and canonical links.
4. No scripts except `/comment.js`; no bundled JavaScript.
5. Every internal link resolves (5100 checked).
6. Every page has a title, a description and one `h1`.
- Extras: robots.txt, sitemap (62 URLs), llms.txt, `_headers`, 404; noindex in robots.txt, header and meta.

`npm run export`: `body-of-knowledge/seed/` unchanged.

## Live checks (anonymous curl, after deploy)

- `curl -I https://cpp.anacay.org/`: `HTTP/2 200`, `content-security-policy: default-src 'self'; … connect-src 'none'; …`, `x-robots-tag: noindex, nofollow`.
- 200: `/`, `/charter/`, `/join/`, `/related-work/`, `/privacy/`, `/paper/5-coefficients-are-agreements/`, `/downloads/`, `/figures/E17.svg` (image/svg+xml), `/support/`, `/robots.txt`, `/sitemap.xml`.
- `/_headers`: 404.
- Downloads: PDF (5,387,503 bytes, starts `%PDF-1.4`), iPad PDF (13,829,631 bytes), EPUB (15,323,776 bytes), all 200 with the right content types and the same sizes as the repo files.
- robots.txt `Disallow: /`; meta `noindex, nofollow`; header `X-Robots-Tag: noindex, nofollow`: all match "not indexable".
- Footer: "Supported by Anacay" links to `/support/`.
- anacay.com unchanged: response headers identical before and after (etag `e2b113528f2a0a5892580e80e714382b`). The anacay.com zone, the `anacay-site` and `anacay-org` Workers and anacay.org's own records were not touched.

## Not done in this release

- Search engine submission (step 5): not applicable while the site is not indexable.

## Rollback

`npx wrangler versions deploy <previous version id>@100%` from `site/`.
