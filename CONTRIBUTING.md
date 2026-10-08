# Contributing

Thanks for being here. This page is the practical part: which buttons to press. For how decisions get made, read [HOW_IT_GROWS.md](HOW_IT_GROWS.md). Before you start, skim the [Code of Conduct](CODE_OF_CONDUCT.md) and the "What can't be contributed" list in HOW_IT_GROWS.

You'll need a free [GitHub account](https://github.com/signup). That's all.

## The quickest ways in

### Say something about a section (2 minutes)

1. Open the section on the site.
2. Click **Discuss** at the bottom. It starts a new thread in GitHub Discussions, with the section's name filled in. (To join an earlier thread instead, click **See the discussion**.)
3. Write your comment and click **Start discussion**.

That's a contribution. It gets credited.

### Fix something in the text (5 minutes)

1. Open the section on the site.
2. Click **Suggest an edit**. GitHub opens the section's Markdown file.
3. Click the pencil icon. GitHub offers to make your own copy (a "fork"). Accept.
4. Make your change. Keep it small: one fix per edit is easiest to review.
5. Click **Commit changes…** and write one line saying what you changed and why. For example: "Fix lead-time range in §6.2 to match source [61]."
6. Click **Propose changes**, then **Create pull request**.

An editor will review it. You'll get a notification when they comment or merge it.

### Open an issue or a discussion (3 minutes)

Go to the repository and pick a form. Each one asks only what's needed.

**Issues** are for concrete, fixable things:

- **Fix an error**
- **Add a public source**
- **Add or improve a term** (if the definition is clear-cut)
- **Propose a change** (once it's been discussed)
- **Share a case** (if you'd rather submit than discuss)

**Discussions** are for anything that needs talking through:

- **Sections**: one thread per section of the body of knowledge
- **Proposals**: changes to an idea, method or structure
- **Terms**: new terms and definitions
- **Cases**: anonymized "what happened" stories
- **Sources**: public material worth reading
- **Governance**: editors, rules and how the practice runs

Not sure where something goes? Use Discussions. An editor will move it if needed.

## Bigger changes, on your own machine

If you're comfortable with Git, work locally.

```bash
git clone https://github.com/anacay/cpp
cd cpp
git checkout -b short-description-of-change
# edit the Markdown files
git commit -m "One line on what changed and why"
git push origin short-description-of-change
```

Then open a pull request on GitHub. For anything beyond a small fix, link the discussion where it was agreed, or open one first. A pull request that changes a claim without a discussion will be pointed to one.

[`site/README.md`](site/README.md) says how to preview the site locally.

## What a good pull request looks like

- **One change.** Two unrelated fixes go in two pull requests.
- **Says why.** One or two sentences in the description.
- **Labels its evidence.** If you add or change a claim, mark it *published* (with the source), *argued* (and from what), or *unmeasured*.
- **Labels invented numbers** as *illustrative*.
- **Matches the voice.** Plain words, short sentences, terms explained before they're used.
- **Keeps quotes exact.** A quoted source stays word for word, with its citation.
- **Contains nothing from the "can't be contributed" list.**

## Writing a case

Cases are short stories of what happened, told so others can learn from them. Use the **Share a case** form. Before you post:

- Remove company, product, team, system and people names.
- Replace real numbers with illustrative ones that keep the shape (a 30% miss can stay a 30% miss; the dollar amount can't).
- Shift dates and places if they'd identify the organization.
- Ask yourself: could a colleague from that organization recognize it? If yes, blur it more.

An editor will check it again before it's added to the case library.

## Adding a source

Public sources only: papers, books, talks, blog posts, filings, standards, public datasets. Give the full citation and a link. Say in one line what it supports. If it's a preprint or a secondary source, say so.

## Translating

Open a discussion in **Sections** first, naming the section and the language, so two people don't translate the same page. Translate the terms in the glossary first. Put translations under `translations/<language-code>/`, and say at the top which version you translated.

## Credit

Once your contribution is merged or used, you're added to `CONTRIBUTORS.md` for that edition. If you want a different name or a handle, or want to be listed as anonymous, say so in your pull request or thread.

## Licence

By contributing, you agree your text is licensed CC BY-SA 4.0 and your code MIT, the same as the rest of the repository.

## Questions

Ask in Discussions, or write to cpp@anacay.org.
