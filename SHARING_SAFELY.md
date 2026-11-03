# Sharing safely

How to share what you know about capacity planning without sharing anything that isn't yours to share. It applies on this site and on GitHub, including The Commons.

<!-- Editors: keep every sentence at 30 words or fewer (check 11). Links to site pages use the full https://cpp.anacay.org address, so they also work on GitHub. -->

## The short version

- Share the shape of a problem, never its real figures.
- Never name a customer, a vendor, a contract, a site or an internal system that isn't already public.
- Label every invented number as illustrative.
- Not sure? Ask for a [private pre-check](#a-private-pre-check) first. A person reads it before anything is posted.

The [Code of Conduct](CODE_OF_CONDUCT.md) and [How it grows](HOW_IT_GROWS.md#what-cant-be-contributed) list what can't be contributed. This page shows how to share what can.

## The disclosure ladder

Climb down the ladder until what you share is safe. Each rung shares less than the one above it. Most problems teach just as well from the second or third rung.

1. **Shape only.** Words, no numbers. "Demand arrived a quarter early, and the supply layer couldn't move that fast."
2. **Indexed.** Set the plan to 100 and show everything against it. "We planned 100. Declared demand reached 130. Delivered supply was 85." (illustrative)
3. **Ratios.** Show relationships, not counts. "Headroom fell from about a fifth to about a twentieth." (illustrative)
4. **Banded ranges.** Give a range wide enough to hide the true value. "A lead time of 26 to 40 weeks." (illustrative)

Never share, at any rung:

- absolute figures from inside an organization: units, costs, power, forecasts or utilization;
- the names of customers, vendors, utilities, sites, teams or people;
- contract terms, verbatim or paraphrased closely;
- internal system, project or tool names that aren't already public.

The ladder works because the practice reasons in shapes. The [seed paper](https://cpp.anacay.org/paper/) and the [guide](https://cpp.anacay.org/guide/the-map/) use indexed and illustrative numbers throughout. The [glossary](https://cpp.anacay.org/glossary/) gives you shared words, so you don't need your employer's.

## Contributing in a personal capacity

Most contributors have an employer, or had one recently. Write as yourself, not for them. Put this line at the top of anything you post, or adapt it:

> I write in a personal capacity. These views are my own, not my employer's. Sector: cloud.

Your sector is enough. Your employer is optional, and never required.

An employer's legal team usually asks four things:

- no internal names;
- no real figures;
- no hints about roadmaps, launches or purchases;
- no customer data.

Everything on this page is built to answer those four. Some employers also ask you to clear outside writing first. If yours does, post under a handle now and add your name later. [Contributors](CONTRIBUTORS.md) explains how credit works.

**Ask your own employer. This is not legal advice.**

## Supply data

Supply knowledge is the least documented side of the practice, and the most sensitive. Lead times, vendors and sites can identify an organization quickly.

- **Band lead times.** "26 to 40 weeks", not "31 weeks".
- **Date them.** "As of the third quarter of 2026." A lead time without a date misleads.
- **Drop names.** No vendor, utility, site, landlord or tenant names, even if you think they are guessable.
- **Never quote contract terms.** Describe the shape instead: "a cancellation window that closes before the hardware ships".
- **Generalize the equipment.** "A large transformer" is enough. Model numbers and ratings can point to one site.

The guide's page on [supply layers and lead times](https://cpp.anacay.org/guide/concepts/supply-layers-and-lead-times/) shows the level of detail that teaches without exposing anyone.

## A worked example (illustrative)

*Illustrative. This example is invented. It shows a common kind of problem, not any real organization's.*

A program manager wants help with a fight over accelerator allocation. Here is the draft she almost posted. Square brackets mark the parts that would have been real names.

> **Before (don't post this).** At [company], [team A] asked for 2,000 [accelerator model] for Q1. Our [internal tool] ranked [team B] first, so we got 1,200. Then the delivery from [vendor] to [site] slipped to March, under the penalty clause in our contract.

Here is the same problem after the ladder:

> **After (safe to post).** *Illustrative.* I write in a personal capacity. Sector: cloud. A product team declared demand of 100, indexed to its plan. Allocation granted it 60. Another team with an earlier commit point got first call. Supply then slipped by about a quarter. How do you decide who waits?

What changed:

- Names of the company, both teams, the tool, the vendor and the site are gone.
- Absolute counts became an index, with the plan at 100.
- The contract clause became a shape: "supply slipped by about a quarter".
- The question stays exactly as sharp. That is the point of the ladder.

The guide's page on [approval and allocation](https://cpp.anacay.org/guide/concepts/approval-and-allocation/) is the place to start with a problem like this one.

## Ten checks before you post

1. No company, product, team, system or people names, unless already public and cited.
2. No absolute figures from inside an organization.
3. Numbers are indexed, ratios or banded, or labeled illustrative.
4. Lead times are banded and dated.
5. No vendor, utility, site, landlord or tenant names.
6. No contract terms, verbatim or closely paraphrased.
7. Dates and places are shifted if they would identify anyone.
8. No hints about unannounced launches, purchases or roadmaps.
9. A colleague from that organization couldn't easily recognize it.
10. The personal-capacity line is at the top, if you have an employer.

If any check fails, climb down a rung on the ladder and check again.

## A private pre-check

Not sure? Before you post anything, write to [cpp@anacay.org](mailto:cpp@anacay.org) with your draft. Put "Pre-check" in the subject.

- A person reads it, privately. Nothing is posted or forwarded.
- You get a written reply within 72 hours. It says what is safe, and what to band or drop.
- Supply drafts go to a reader who knows supply confidentiality, once one is named.
- If you prefer, we post it for you, with credit by name, by handle or as anonymous.

The founder reads cpp@anacay.org and the pre-checks. The [Pre-check reviewer](https://cpp.anacay.org/roles/#pre-check) role is open, so others can share the work.

A pre-check is the step before posting anything sensitive in [The Commons](https://cpp.anacay.org/commons/).

## If something slips

Mistakes happen, and they are fixed without blame.

- **Tell us at once.** Write to [cpp@anacay.org](mailto:cpp@anacay.org), or message an editor or co-organizer. You can report your own post or someone else's.
- **It comes down on sight.** An editor removes it from the page or thread first, and asks questions after.
- **History too.** Where GitHub allows, editors also remove it from the edit history.
- **No blame.** Nobody is named or shamed for a slip. The person who posted it hears about it privately.

In The Commons, the same applies. Never press anyone for real figures. [The rules](https://cpp.anacay.org/commons/#room-rules) say so.
