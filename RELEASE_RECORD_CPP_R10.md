# Release record: CPP R10

Visibility and house rules. R10 makes the practice easier to find and to quote, for people, search engines and answer engines. It also removes the last places where the site pointed at a single company, quoted a job posting, or invited organization-specific detail. Four independent reviews (technical search, answer engines, newcomers, off-site) set the list; their findings are summarized below.

| | |
|---|---|
| Date | Built 15–16 November 2026; to ship from the founder's Mac by 30 November 2026 |
| Worker | `cpp-anacay` |
| Live version | (fill in at deploy) |
| Previous version | R9.1 (fill in from `wrangler deployments list`) |
| Indexable | Yes (unchanged) |

## What changed for readers

**House rules.** The home page no longer cites one company's capital-spending guidance or quotes a job posting; the IEA facts remain. The prior-art list names "The Site Reliability Engineering books". The charter's "Why this exists" keeps the IEA figures, drops single-company figures and the job-posting quote, and no longer talks about hiring. The README no longer says the work is "hired for". The four "first contribution" prompts on the start doors ask for general terms or public sources, not how a reader's own organization works.

**Non-commercial, stated.** The home page, About, Support, the footer, the README and llms.txt now say "non-commercial". About opens with the practice's entity facts and an "At a glance" list. The footer says "Hosted by Anacay"; the footer no longer links the founder's media channels. "Who's behind this" links the practice's LinkedIn Page.

**A plain definition.** New page: `/what-is-capacity-planning/`. One definition, then eight short questions, each answered in one paragraph and linked to the page that teaches it. FAQ structured data repeats the on-screen text.

**For newcomers.** The home page leads with "Pick your door", "What is capacity planning?" and "Ask or challenge in The Commons". A card for chip and accelerator experts; the quota card moves first; a link to "Your words, our words". Join in welcomes peers as well as newcomers, and links the strongest open challenge to the seed. The first-question pre-fill no longer says "I'm new". The Commons' lede drops "partner"; the "being proposed" line is gone. "Your words, our words" gains demand forecasting, infrastructure planning and three accelerator terms.

**Search.** Page titles carry their own words first, with a shorter brand suffix ("Capacity Planning Practice"); key pages get titles that name the field. `/guide/` and `/guide/concepts/` redirect to the body of knowledge. The glossary carries a DefinedTermSet; Section 14's term list points its canonical at the glossary. Paper sections carry article and breadcrumb data and dates; the sitemap gives dates for the paper's pages. Descriptions are capped at 158 characters; four hand-written descriptions replace cut-off ones. The 404 page is noindex with no canonical. Guide pages put the content before the map strip and the commenting hint.

**For answer engines.** llms.txt opens with the entity facts and six key definitions taken from the glossary. llms-full.txt now holds the guide and the practice terms as well as the seed paper.

**Safety.** `public/_headers` no longer carries a robots header; `scripts/headers.mjs` adds `noindex` only when the site is not indexable, and `build:only` runs it. A build that skips the script can no longer ship noindex. Check 8–11 and the extras pass.

## What did not change

The seed paper (v7.9), Case 2, Case 3 and Second lives are unchanged. The About page's author block comes from the paper and still reads as it did. No employer is named as the founder's employer anywhere on the site.

## Off-site steps that go with R10

Google Search Console and Bing Webmaster Tools verification and sitemap submission; the GitHub About description and topics; a check that Cloudflare does not block AI crawlers. See `CPP Promotion 2026-11-14/` on the founder's Mac.
