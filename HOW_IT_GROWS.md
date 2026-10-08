# How it grows

Someone opens a comment on a section. A small discussion follows. It's driven to consensus, and the text changes. Repeat that a few hundred times and you have a body of knowledge that lasts, because many people have tested it.

That's the whole mechanism. This page explains the details.

## The five-minute version

Select any passage on the site, and a bar offers **Discuss this passage**. It opens a new GitHub discussion with your selection quoted and linked back to the exact spot. That's the quickest way in.

Every section of the body of knowledge also has three links at the bottom.

- **Discuss.** Starts a new thread about that section in GitHub Discussions, with its name filled in. Ask a question, push back, or add what you know.
- **See the discussion.** Lists the earlier threads about that section, so you can join one instead.
- **Suggest an edit.** Opens that section's Markdown file on GitHub, ready to edit. Change the text and GitHub turns it into a pull request for you.

You need a free GitHub account. You don't need to know Git. [CONTRIBUTING.md](CONTRIBUTING.md) walks through the clicks.

Not sure which to use? Use **Discuss**. Someone will help turn it into an edit.

## Kinds of contribution

| You want to… | Do this | Typical size |
|---|---|---|
| **Fix an error** (a typo, a broken link, a wrong number, a misquoted source) | Suggest an edit, or open a "Fix an error" issue | Minutes |
| **Add or improve a term** | Open a "Terms" discussion with a one-sentence definition | Minutes |
| **Propose a change** (to an idea, a method, a section's structure) | Open a "Proposals" discussion | A short write-up |
| **Share a case** (what happened, anonymized) | Open a "Cases" discussion | A few paragraphs |
| **Add a public source** (a paper, a talk, a public dataset, a filing) | Open an "Add a public source" issue | Minutes |
| **Translate** a section | Open a discussion first, so two people don't translate the same page | Hours |

Every contribution counts the same for credit. A good correction matters as much as a new section.

## How a change is decided

Small fixes and bigger changes take different paths.

**Small fixes.** Typos, broken links, formatting, and corrections that match a cited source. One editor reviews and merges. No waiting period.

**Everything else.** New terms, changed definitions, proposals, new sections, anything that changes what the text claims. These go through the consensus loop:

1. **Open.** Someone opens a discussion or a pull request and says what should change and why. If it makes a claim, it carries an evidence label: *published* (cite it), *argued* (say from what), or *unmeasured*.
2. **Open period.** At least 14 days, so people in other time zones and busy weeks can see it. Changes to the stable core, the principles or governance stay open at least 30 days.
3. **Objections addressed.** Anyone can object. Every objection gets an answer. An answer can be a change to the proposal, or a clear reason why not. Nobody has to win the argument. Every objection has to be heard and answered.
4. **Rough consensus.** When the period ends, an editor reads the thread and calls it: accepted, accepted with changes, not now, or declined. Rough consensus doesn't mean everyone agrees. It means the objections that remain have been answered, and the group can live with the result. An editor who proposed the change doesn't make the call on it. While there's only one editor, the founder may call it, but must say so in the closing note, and the open period doubles.
5. **Recorded.** The editor writes a short closing note in the thread: the decision, the main objections and how they were answered. The change is merged, and it goes into the next version's "what changed" table.

**Disagree with a call?** Say so in the thread within 14 days and ask for another editor to review it. If that doesn't settle it, the editors decide together, and the reasons are written down. While there's only one editor, the thread is reopened for another 14 days and the founder answers every new objection in writing. [GOVERNANCE.md](GOVERNANCE.md) covers the rest.

**Silence isn't rejection.** If a proposal gets no response in its open period, an editor will still close it with a note. Ping the thread if that hasn't happened.

## Editions

- **v0.x, the seed.** Small, frequent versions. Each one gets a short changelog.
- **Edition 1, then 2, 3 and on.** Each numbered edition is a deliberate release. It comes after an open comment round on a full draft. Each one ships with:
  - a **"what changed" table**: item, what happened (kept, merged, moved, dropped, new), and why;
  - a **contributor list** for that edition;
  - a frozen copy, so anyone can cite the exact text they read.

Between editions, the live text keeps improving. Citations should name the edition or version.

## What can't be contributed

These keep the practice safe to contribute to, and safe to use.

- **Employer secrets.** Anything confidential to a current or former employer, client or vendor.
- **Internal names.** Names of internal systems, projects, teams or tools that aren't already public.
- **Real internal numbers.** Real ratios, costs, utilization, forecasts or lead times from inside an organization. Invent illustrative ones instead, and label them.
- **Anything implying data access.** No "I've seen the data, trust me." If it isn't public, it's labeled *argued* or *unmeasured*.
- **Identifiable people or organizations in cases**, unless the account is already public and cited.
- **Sales pitches.** No promotion of products or services, including the steward's.
- **Text you don't have the right to share.** Quote public sources briefly and cite them. Don't paste whole pages.

If something slips through, editors will remove it from the text and, where GitHub allows, from the history. Tell an editor privately at cpp@anacay.org if you spot one.

## Credit

Everyone who contributes is listed in `CONTRIBUTORS.md`, by edition, with what they did ("corrected §6.2", "added 4 terms", "shared a case", "translated §1 into Spanish"). Use your name, or a handle if you prefer. Case contributors can be listed as anonymous on request.

Being listed doesn't mean you endorse every word. It means you helped build it.

## Licensing your contribution

By contributing text, you agree that it's licensed under CC BY-SA 4.0, the same as the rest of the content. Code contributions are licensed under MIT. There's nothing else to sign.

## Translations

Translations are welcome and credited like any other contribution. Each translation says which version it translates. When the source changes, the translation is marked as behind until someone updates it. Terms get translated first, so translators of different sections use the same words.
