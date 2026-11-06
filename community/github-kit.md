# GitHub kit: one stream, tags and a welcome post

Everything the founder sets up by hand in GitHub for R8. Paste each block as is. It takes about 20 minutes.

**The principle: one way to interact until activity demands more.** A new community with few members needs a hundred interactions in one place, not two in each of fifty. So The Commons is one stream: a single Discussions category everyone reads. Short posts, replies in threads, tags instead of channels, reactions as light participation. The best threads are published to CPP, credited by name with consent.

**Order.** Do §0 to §2 after the R8 pull request is merged and before the version upload, because the site links them at launch.
1. Create the category "The Commons", slug `the-commons` (§0).
2. Create the tag labels (§1) and post and pin the welcome post (§2).
3. Confirm the live state of threads #2 to #16 and #18 (§7). /agenda/ shows every item as "open" until you do.
4. Create the stage and `good-first` labels (§4), and label the 15 open-question threads (§5).
5. After the deploy: pin "Proposals open now" (§3) and open the three Terms threads (§6).

The GitHub state behind this kit is unverified from the cloud session. Check each thread number against its title before you label it.

---

## 0. The Commons: one category

**Where.** Repository → **Discussions** → the pencil beside Categories → **New category**.

- **Name:** The Commons
- **Slug:** GitHub sets it from the name. "The Commons" becomes `the-commons` (the site links `discussions/new?category=the-commons` and `discussions/categories/the-commons`)
- **Emoji:** speech balloon
- **Description:** The one place for capacity planners. Short posts, replies in threads. Follow the NDA rule in the pinned post.
  (GitHub limits the length of category descriptions, so the full NDA rule lives in the pinned welcome post, §2.)
- **Format:** Open-ended discussion. No form: a post can be one line.

**Test it.** Open https://github.com/anacay/cpp/discussions/new?category=the-commons. A blank post opens in The Commons. Close it without posting.

**What stays separate, and why.**
- **Proposals** stays its own category, for formal changes only. A proposal has an open period and a closing note under How it grows, so it must not scroll away in The Commons.
- **"Sections" is retired for new posts.** Every per-page link now opens a new post in **The Commons**. That covers "Talk about this page", "Discuss this passage" and "Reply on GitHub" on a new author's note. Each post is prefilled with the passage or page and its tag. Old threads in Sections stay where they are. "See the discussion" searches all categories, so they still turn up. Edit the Sections description to: "Retired for new posts. New posts go to The Commons."
- The other existing categories (Terms, Cases, Sources, Governance) stay for their forms. The 15 open-question threads stay where they are. Everything appears in the same Discussions list as The Commons, so it is still one place to read.
- **What the links can and can't prefill.** The site's links set `category`, `title` and `body` in the new-discussion URL. GitHub's documentation describes no URL parameter for labels on discussions. So the tag goes into the body as a word (#supply). Add the matching label when you triage. Check the prefill once on a test post (runbook step 7).
- Create no other categories. The old plan's "Review intake", "Introduce yourself" and "First questions" are dropped, and so is the review-intake form. A new category comes only when The Commons asks for one.

---

## 1. Tag labels

**Where.** Repository → Issues → **Labels** → **New label**. Labels apply to discussions too. A poster can also write the tag as a word (#supply); whoever triages adds the label.

| Name | Description (shown on hover) | Colour |
|---|---|---|
| `first-question` | No question too basic. | `#7FB069` |
| `forecasting` | Demand, declarations and drift. | `#4F7CAC` |
| `supply` | Lead times, contracts and reused parts. | `#B8935A` |
| `gpu` | Accelerators and their allocation. | `#8E6C8A` |
| `cost` | Rates, coefficients and the unallocated line. | `#C9B37E` |
| `power` | Power, buildings and halls. | `#D98C5F` |
| `cloud` | Single-cloud teams, reservations and stockouts. | `#6FA3B8` |
| `path-resource-managers` | Coming from resource or quota management. | `#9A8FBF` |

```sh
gh label create first-question -R anacay/cpp -c 7FB069 -d "No question too basic."
gh label create forecasting    -R anacay/cpp -c 4F7CAC -d "Demand, declarations and drift."
gh label create supply         -R anacay/cpp -c B8935A -d "Lead times, contracts and reused parts."
gh label create gpu            -R anacay/cpp -c 8E6C8A -d "Accelerators and their allocation."
gh label create cost           -R anacay/cpp -c C9B37E -d "Rates, coefficients and the unallocated line."
gh label create power          -R anacay/cpp -c D98C5F -d "Power, buildings and halls."
gh label create cloud          -R anacay/cpp -c 6FA3B8 -d "Single-cloud teams, reservations and stockouts."
gh label create path-resource-managers -R anacay/cpp -c 9A8FBF -d "Coming from resource or quota management."
```

Tags grow from use. When a new word keeps coming up, add a label for it, and add it to `tags` in `site/src/data/room.mjs`.

---

## 2. Pinned welcome post

**Where.** Post in **The Commons**, then pin it.

**Title:** Welcome to The Commons

**Body:**

> This is the one place for capacity planners. Ask a question, share an observation or a link, or ask "how do you handle X?" A sentence is enough. Reply in threads, and use reactions freely.
>
> **The rule that matters most.** Don't break your NDA. Don't share your company's prices, contract terms, future plans or any other confidential information. Methods and public facts are fair game.
>
> **Also:** no jobs, no recruiting, no selling. Your username can be a handle. Your name appears on CPP only when you want credit.
>
> **Tags.** Write a tag as a word in your post. The founder or a co-organizer adds the matching label. The tags: #first-question, #forecasting, #supply, #gpu, #cost, #power, #cloud, #path-resource-managers.
>
> **Three example posts.**
> - "#first-question What's the difference between approving an ask and allocating it?"
> - "#supply Has anyone seen a public source on transformer lead times newer than 2025? Here's the one I know: [link]"
> - "#forecasting How do you handle a team whose declarations are always 40% high? (Illustrative number.)"
>
> **What happens to good threads.** A thread that settles something can become a CPP page, credited by name, with your consent. Not sure a post is safe? Leave it out, or post only the method and the public facts. The private pre-check is paused; see https://cpp.anacay.org/sharing-safely/.
>
> More: https://cpp.anacay.org/commons/

---

## 3. Pinned post: Proposals open now

**Where.** Post in **Proposals**, then pin it to the top of Discussions, beside the welcome post. The founder, or a co-organizer, updates it weekly, and on the day anything opens or closes.

**Title:** Proposals open now (updated weekly)

**Body (first version; fill the bracketed parts on the day you post):**

> Everything open for comment, in one place. Each item closes on the date shown, under [How it grows](https://github.com/anacay/cpp/blob/main/HOW_IT_GROWS.md). Comment in its thread. Proposals sit apart from The Commons because each has an open period and a closing note.
>
> **Open for comment**
>
> | Proposal | Category | Opened | Closes | Thread |
> |---|---|---|---|---|
> | Code of Conduct: add "No recruiting", and cover The Commons | Proposals | [date] | [date + 60 days, or 30 once two editors are confirmed] | [#N] |
> >
> **Open questions, always open.** The author's 15 questions each have a thread, from #2 to #16. The [open problems](https://cpp.anacay.org/agenda/) page lists them with their status.
>
> **Recently decided**
>
> Nothing yet. Each closing note is linked here for one month, then moves to [What changed](https://cpp.anacay.org/changes/).
>
> Last updated: [date], by [name or "the editors"].

**Weekly update, a checklist.**
1. Add anything opened in Proposals or Governance this week.
2. Move anything past its closing date to "Recently decided", with a link to the closing note.
3. Drop "Recently decided" items older than a month.
4. Change the "Last updated" line.

---

## 4. Labels

**Where.** Repository → Issues → **Labels** → **New label**. Labels apply to discussions too.

| Name | Description (shown on hover) | Colour |
|---|---|---|
| `good-first` | A good first thread: answerable from public sources or your own experience. | `#5C9E4A` |
| `stage:new` | Fits planners in their first two years, or arriving from another field. | `#C9B37E` |
| `stage:practicing` | Fits planners who run intakes, supply reviews and the ledger. | `#A07F4C` |
| `stage:senior` | Fits senior and staff planners: method, portfolio and cross-team design. | `#8C6D3F` |
| `stage:head` | Fits people who lead planning teams and own the forum. | `#5E4A2C` |
| `stage:adjacent` | Fits SRE, FinOps and finance, supply, program managers and data scientists. | `#3E6A95` |

Or, from a terminal with the GitHub CLI signed in:

```sh
gh label create good-first       -R anacay/cpp -c 5C9E4A -d "A good first thread: answerable from public sources or your own experience."
gh label create stage:new        -R anacay/cpp -c C9B37E -d "Fits planners in their first two years, or arriving from another field."
gh label create stage:practicing -R anacay/cpp -c A07F4C -d "Fits planners who run intakes, supply reviews and the ledger."
gh label create stage:senior     -R anacay/cpp -c 8C6D3F -d "Fits senior and staff planners: method, portfolio and cross-team design."
gh label create stage:head       -R anacay/cpp -c 5E4A2C -d "Fits people who lead planning teams and own the forum."
gh label create stage:adjacent   -R anacay/cpp -c 3E6A95 -d "Fits SRE, FinOps and finance, supply, program managers and data scientists."
```

**How to use them.** A stage label says who will find a thread easiest to join, not who may join. Any thread can carry more than one. `good-first` goes only on threads a newcomer can move forward in an hour, without confidential data.

---

## 5. The 15 threads to label

The author's open questions, Q1 to Q15. On the site, open question N links to Discussion #N+1 (`body-of-knowledge/rfc/threads.json`). Open each thread, check that its title matches, then add the labels from the sidebar.

The labels below are a proposal from the plan. Change any that read wrong.

| Thread | Question | Labels |
|---|---|---|
| #2 | Q1. Coefficient drift: slow creep or big steps? | `stage:practicing`, `stage:senior` |
| #3 | Q2. How well declarations land by stage | `stage:practicing`, `stage:head` |
| #4 | Q3. Arbitrating scarce accelerators between internal and external demand | `stage:senior`, `stage:head`, `stage:adjacent` |
| #5 | Q4. Public sources for order-to-dock, turn-up, cancel and reschedule terms | `good-first`, `stage:new`, `stage:adjacent` |
| #6 | Q5. How long large new loads wait for power | `good-first`, `stage:practicing`, `stage:adjacent` |
| #7 | Q6. Attribution for caches, batches, stateful services and batched inference | `stage:practicing`, `stage:adjacent` |
| #8 | Q7. Beat the per-layer percentile rule | `stage:senior`, `stage:adjacent` |
| #9 | Q8. How often a slipped launch's reserve is re-pegged | `stage:practicing`, `stage:head` |
| #10 | Q9. Real shortage-to-idle ratios per layer, and who signs them | `stage:senior`, `stage:adjacent` |
| #11 | Q10. Weighting a team's record against all teams' | `stage:senior`, `stage:adjacent` |
| #12 | Q11. Is the supply review the step most often missing? | `good-first`, `stage:practicing`, `stage:adjacent` |
| #13 | Q12. Steps with no reference class | `stage:senior` |
| #14 | Q13. For agent-created demand, is a cap a better declaration than a forecast? | `good-first`, `stage:practicing`, `stage:adjacent` |
| #15 | Q14. Where a market price exists, does the agreement claim hold? | `stage:senior`, `stage:adjacent` |
| #16 | Q15. Could the field have a shared, public dataset of declarations? | `stage:senior`, `stage:head` |

**Why these four are `good-first`.** Q4 and Q5 move forward with one public source. Q11 moves forward with one public source. Q13 moves forward with a general method, told at the shape level.

**A note on #16.** It asks about preconditions only. No real data is pooled before written rules and a legal-safe protocol exist.

---

## 6. Three Terms threads to open

These words are used in the guide and the seed paper, but the glossary doesn't define them yet. A new definition needs the open period in HOW_IT_GROWS.md. So R8 opens a thread for each, rather than adding them. The glossary's "Your words, our words" box only points to them.

Post each in **Terms**, using the Terms form. Each starting sentence is a draft for comment, not a definition.

### Fungibility

- **Term:** Fungibility
- **Proposed definition:** How readily one unit of capacity can stand in for another: another shape, another place or another use.
- **How people use it in practice:** The 2026 SRE chapter lists it as a supply dimension, beside lead time and elasticity. The seed paper says a shell stays fungible only if its specification is written against the high scenario (Section 6.2). The Buildings note asks what planning loses when buildings stop being interchangeable (#18). Is fungibility a property of the hardware, the contract or the plan?
- **Public source:** the 2026 SRE chapter, reference [7] at https://cpp.anacay.org/references/

### Stranded capacity

- **Term:** Stranded capacity
- **Proposed definition:** Capacity that is installed and paid for but can't be used, because another resource it needs ran out first.
- **How people use it in practice:** In the guide's running example, four standard machines run for their memory, with their CPU stranded (illustrative). The 2026 SRE chapter covers reclaiming it. Some teams use the word for idle capacity in general. Should it mean only capacity blocked by another dimension?
- **Public source:** the 2026 SRE chapter, reference [7] at https://cpp.anacay.org/references/

### Putty-clay

- **Term:** Putty-clay
- **Proposed definition:** Capital that is flexible before it is built and fixed after.
- **How people use it in practice:** The Buildings note uses it for data centre shells: before the pour, a building can be anything; after, it is clay. The pour is a commit point. Is the economists' term useful to planners, or does "commit point" already say it? Discussion of the note is in #18.
- **Public source:** Johansen (1959), "Substitution versus Fixed Production Coefficients in the Theory of Economic Growth", Econometrica, as cited in the note: https://cpp.anacay.org/notes/buildings-at-ai-density/

After posting, add the thread links to the Proposals open now post (§3), under "Open for comment".

---

## 7. Confirm the live state of the threads

The site links threads #2 to #16 (the 15 open questions) and #18 (the Buildings note). Nobody has checked them from outside GitHub since the cloud session can't. Before the R8 deploy, open each one and note four things:

| Thread | Title matches the site? | Category | Open or closed | Answered, or a proposal under way? |
|---|---|---|---|---|
| #2 to #16 | One row each | | | |
| #18 | | | | |

Then:
- Send the table to whoever keeps `site/src/data/agenda.mjs`. Any status other than "open" is a data-only change there.
- If a number points to the wrong thread, don't relabel by guesswork. Fix `body-of-knowledge/rfc/threads.json` first, in its own pull request.
- Label threads (§5) only after this check.

---

## After setup

- When `/agenda/` statuses change, update §3 the same day.
- Tag new posts, and add `good-first` to any thread that fits. The founder does this today, with co-organizers as they step forward.
- Point the best threads toward a CPP page, and ask the authors for consent to credit them.
- Later, when The Commons asks for it: a monthly open call, bring-your-problem reviews, working groups, a digest and more roles. Each starts only when a topic outgrows its threads.
