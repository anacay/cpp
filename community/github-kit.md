# GitHub kit: categories, pinned posts and labels

Everything the founder sets up by hand in GitHub for R8. Paste each block as is. It takes about 30 minutes.

**Why.** A newcomer needs a place to say hello and a place to ask a basic question. A member with a planning problem needs a way into a review. A returning member needs one list of what is open for comment. The labels let anyone find a first thread at their stage.

**Order.**
1. **First, before R8 goes live:** create the "Review intake" category and the `review` label (§0). The intake link on /community/#reviews fails until both exist.
2. **Also before R8 goes live:** confirm the live state of threads #2 to #16 and #18 (§7). /agenda/ shows every item as "open" until you do.
3. Create the two newcomer categories (§1, §2).
4. Post and pin the three threads (§1, §2, §3).
5. Create the six stage and `good-first` labels (§4).
6. Label the 15 open-question threads (§5).
7. Open the three Terms threads (§6).
8. Tell the co-organizers the kit is live, and hand them the weekly update of §3.

The GitHub state behind this kit is unverified from the cloud session. Check each thread number against its title before you label it.

---

## 0. Category: Review intake, and the `review` label (do this first)

The bring-your-problem review form lives in `.github/DISCUSSION_TEMPLATE/review-intake.yml`. GitHub uses a form only when a category with the same slug exists. /community/#reviews links to `discussions/new?category=review-intake`, so the category must exist before the deploy.

**Where.** Repository → Discussions → the pencil next to "Categories" → **New category**.

- **Name:** Review intake (GitHub derives the slug `review-intake` from this name; check it after saving)
- **Emoji:** any; suggested: magnifying glass
- **Description:** Bring a sanitized planning problem to a Practice Room review. Private intake: cpp@anacay.org.
- **Format:** Open-ended discussion

**Then the label.** Repository → Issues → **Labels** → **New label**. The form applies it to every intake thread.

| Name | Description (shown on hover) | Colour |
|---|---|---|
| `review` | A problem brought to a Practice Room review. Pre-checked before any call. | `#A05A4F` |

```sh
gh label create review -R anacay/cpp -c A05A4F -d "A problem brought to a Practice Room review. Pre-checked before any call."
```

**Test it.** Open https://github.com/anacay/cpp/discussions/new?category=review-intake. The form should appear, starting with "Bring a problem to a Practice Room review." Close it without posting.

No pinned post is needed: the form carries its own instructions.

---

## 1. Category: Introduce yourself

**Where.** Repository → Discussions → the pencil next to "Categories" → **New category**.

- **Name:** Introduce yourself
- **Emoji:** waving hand
- **Description:** Your sector, your stage and one problem you care about. No employer needed.
- **Format:** Open-ended discussion

### Pinned post

**Title:** Introduce yourself: sector, stage, one problem

**Body:**

> Welcome. Say hello here, in three lines:
>
> 1. **Your sector.** For example: cloud provider, AI lab, enterprise IT, colocation, telecom, finance. Your employer is optional.
> 2. **Your stage.** New (0–2 years), practicing, senior or staff, head of a team, or from a neighbouring field (SRE, FinOps, supply, program management, data science).
> 3. **One problem you care about.** One line is enough. The [open problems](https://cpp.anacay.org/agenda/) are a good place to find one.
>
> An example, illustrative: "Supply chain, ex-telecom. Senior. How long new loads wait for power."
>
> **Please don't** post availability, rates or "open to work". This is a place for the craft. No jobs, no recruiting, no selling. The [room rules](https://cpp.anacay.org/community/#room-rules) explain why.
>
> **Where next.** A basic question goes in [First questions](https://github.com/anacay/cpp/discussions/categories/first-questions). A first thread at your stage is under the `good-first` label. The [Start here](https://cpp.anacay.org/start/) page picks a reading path for you.
>
> Rather not post in public? Write to cpp@anacay.org. Today the founder reads it; once co-organizers are named, the inbox moves to them.

---

## 2. Category: First questions

- **Name:** First questions
- **Emoji:** seedling
- **Description:** No question too basic. A kind answer within 24 hours.
- **Format:** Question / Answer (so the asker can mark the answer that helped)

### Pinned post

**Title:** First questions: how this category works

**Body:**

> Ask anything here, however basic. "What is a commit point?" is a good question. So is "Why does my bill miss when my forecast was close?"
>
> **Our promise.** A first question gets a kind answer within 24 hours. A greeter rota watches this category, two people a week. If a day passes with no answer, write to cpp@anacay.org.
>
> **How to ask well.**
> - Say where you got stuck: a page, a passage or a word.
> - Use invented numbers, and say they're illustrative. Never post real internal figures or internal system names. [Sharing safely](https://cpp.anacay.org/sharing-safely/) has the details.
>
> **How to answer well.**
> - Answer the question asked. Link the guide or the [glossary](https://cpp.anacay.org/glossary/) where it helps.
> - No "just read the paper". Assume the asker is smart and new.
> - If the question shows that a page is unclear, say so. A confusing page is a bug, and the asker is credited for finding it.
>
> The asker marks the answer that helped. Good questions often become glossary entries or guide fixes, credited by name.

---

## 3. Pinned post: Proposals open now

**Where.** Post in **Proposals**, then pin it to the top of Discussions. An editor or co-organizer updates it weekly, and on the day anything opens or closes.

**Title:** Proposals open now (updated weekly)

**Body (first version; fill the bracketed parts on the day you post):**

> Everything open for comment, in one place. Each item closes on the date shown, under [How it grows](https://github.com/anacay/cpp/blob/main/HOW_IT_GROWS.md). Comment in its thread, or privately at cpp@anacay.org.
>
> **Open for comment**
>
> | Proposal | Category | Opened | Closes | Thread |
> |---|---|---|---|---|
> | Code of Conduct: add "No recruiting", and cover the Practice Room | Proposals | [date] | [date, at least 30 days on] | [#N] |
> | Editor nominations: [Name A] and [Name B] | Governance | [date] | [date + 14 days] | [#N] |
>
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
| `good-first` | A good first thread: answerable from public sources or your own experience. | `#7FB069` |
| `stage:new` | Fits planners in their first two years, or arriving from another field. | `#C9B37E` |
| `stage:practicing` | Fits planners who run intakes, supply reviews and the ledger. | `#B8935A` |
| `stage:senior` | Fits senior and staff planners: method, portfolio and cross-team design. | `#8C6D3F` |
| `stage:head` | Fits people who lead planning teams and own the forum. | `#5E4A2C` |
| `stage:adjacent` | Fits SRE, FinOps and finance, supply, program managers and data scientists. | `#4F7CAC` |

Or, from a terminal with the GitHub CLI signed in:

```sh
gh label create good-first       -R anacay/cpp -c 7FB069 -d "A good first thread: answerable from public sources or your own experience."
gh label create stage:new        -R anacay/cpp -c C9B37E -d "Fits planners in their first two years, or arriving from another field."
gh label create stage:practicing -R anacay/cpp -c B8935A -d "Fits planners who run intakes, supply reviews and the ledger."
gh label create stage:senior     -R anacay/cpp -c 8C6D3F -d "Fits senior and staff planners: method, portfolio and cross-team design."
gh label create stage:head       -R anacay/cpp -c 5E4A2C -d "Fits people who lead planning teams and own the forum."
gh label create stage:adjacent   -R anacay/cpp -c 4F7CAC -d "Fits SRE, FinOps and finance, supply, program managers and data scientists."
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
| #16 | Q15. Could the community pool anonymized declaration records? | `stage:senior`, `stage:head` |

**Why these four are `good-first`.** Q4 and Q5 move forward with one public source. Q11 and Q13 move forward with one account from your own work, told at the shape level.

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

- Link the two pinned posts from the room's #welcome channel.
- When `/agenda/` statuses change, update §3 the same day.
- Add `good-first` to any new thread that fits. The co-organizers own this from day one.
