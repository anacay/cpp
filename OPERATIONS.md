# Operations

How the practice is run day to day, written so a second editor could pick it up. The rules live in [GOVERNANCE.md](GOVERNANCE.md) and [HOW_IT_GROWS.md](HOW_IT_GROWS.md).

## Who does what now

| Job | Who |
|---|---|
| Editor: triage, replies, consensus calls, editions | The founder, Guillermo Martinez |
| Conduct reports | The founder. Reports about him go to GitHub **Report content** ([EDITORS.md](EDITORS.md)) |
| Domain, hosting, accounts | Anacay, as steward |
| cpp@anacay.org inbox and site deploys | The founder |

While there's one editor, he says so in each closing note, and open periods double: 28 days, or 60 for the stable core, principles and governance.

## The weekly rhythm

One sitting a week, about 15 minutes when it's quiet. Daily glances in busy weeks.

- [ ] **Triage.** Read new [Discussions](https://github.com/anacay/cpp/discussions) (sorted by latest activity), issues, pull requests and cpp@anacay.org.
- [ ] **Hide first.** Anything from the "can't be contributed" list gets hidden before anything else.
- [ ] **Reply.** Every new thread gets a human reply within a week, ideally two days. First-timers get a thank-you, even when the answer is no.
- [ ] **Move threads.** Wrong category: edit the discussion, change the category, leave a one-line note. An issue that needs talking through: **Convert to discussion**. Duplicates: link the older thread, then close the newer one.
- [ ] **Label.** `fix`, `term`, `proposal`, `case`, `source`, `section`. The forms add most labels. Sections has no form, so add `section` by hand.
- [ ] **Close what's due.** Proposals past their open period get called, or a note saying why they're waiting. Silence isn't rejection.

## Turning a thread into a change

Follow [HOW_IT_GROWS.md](HOW_IT_GROWS.md). In short:

- [ ] Small fix: review and merge. No waiting period.
- [ ] Changes a claim: Proposal thread, evidence label, open period, every objection answered in writing.
- [ ] Closing note: decision, main objections, how each was answered.
- [ ] Merge, linking the thread in the pull request.
- [ ] Add it to the next "what changed" table and credit everyone who shaped it.

## Moderation

| Action | When |
|---|---|
| **Edit** | Only to remove confidential detail, personal data or a broken link. Add "Edited by an editor: removed X." Never change someone's argument. |
| **Hide** | Spam, off-topic, abuse, or confidential detail while you deal with it. Pick the honest reason. |
| **Lock** | A settled thread, or one that has become a fight. Say why in a last comment. |
| **Delete** | Spam, and confidential material that editing can't fix. |
| **Block** | Repeat spammers, and anyone under a ban. |

**Warnings** follow the Contributor Covenant's ladder: correction, warning, temporary ban, permanent ban. A correction is a short note. A warning is private, written, and says what happens next time. Keep a private log: date, link, what was said.

### No employer secrets, in practice

Someone posts real internal numbers, an internal system name or a client's figures. In this order:

- [ ] **Hide it fast.** Minutes matter more than wording.
- [ ] **Remove it properly.** Edit it out, then delete the old revision from the comment's edit history. If editing can't fix it, delete the comment.
- [ ] **Contact them privately.** Email if you have one. Otherwise a neutral comment: "I've hidden this and will be in touch."
- [ ] **Don't quote it back.** Not in the thread, the message or a closing note.
- [ ] **Offer a way forward.** Most posts work with invented numbers labelled *illustrative*.
- [ ] **If it reached a commit,** rewrite the history and ask GitHub Support to clear cached views.

## Email comments

- [ ] Reply within a few days, even if it's just "got it".
- [ ] Ask first: "May I post this in the thread? Credit as your name, a handle, or anonymous?"
- [ ] Post only on a clear yes, with anything confidential stripped. Open with "Posted for [credit] by email, with permission."
- [ ] Never post their email address. Credit them like anyone else.
- [ ] Deletion requests: delete within a week and confirm. Credits can be removed; copies others have made can't.
- [ ] Never paste mail into an AI tool that's allowed to train on it.

## Crediting contributors

- [ ] Add people to [CONTRIBUTORS.md](CONTRIBUTORS.md) when their contribution is merged or used, under that version.
- [ ] Say what they did: "corrected §6.2", "added 4 terms", "shared a case".
- [ ] Use the name or handle they asked for. Cases can be anonymous.
- [ ] A thread that changed the text counts, even without a pull request. When in doubt, credit more.

## Releases and editions

v0.x for the seed: small and frequent. Numbered editions come later, each after an open comment round ([HOW_IT_GROWS.md](HOW_IT_GROWS.md#editions)).

- [ ] If the paper changed, update the manifest and downloads in `site/paper.config.json`.
- [ ] Add a row at the top of `site/src/data/versions.json`. The build fails without it.
- [ ] Update the **What changed** page and CONTRIBUTORS.md.
- [ ] `npm run build` in `site/`. All checks pass.
- [ ] `npx wrangler versions upload`, then review the preview URL.
- [ ] `npx wrangler versions deploy` to promote.
- [ ] Check live: a section, Discuss, Suggest an edit, the selection bar.
- [ ] Write `RELEASE_RECORD_CPP_R<n>.md`: date, live and previous version IDs, changes, checks, rollback line.

**Rollback:** `npx wrangler versions deploy <previous-id>@100%` from `site/`. The ID is in the last release record. Record the rollback too.

## The LinkedIn Page and group

LinkedIn is for talking. GitHub is where text changes and decisions are recorded. Group rules are in the [group kit](community/linkedin-group-kit.md).

- [ ] Never sell. No services or offers, the steward's included.
- [ ] Every post links back to a thread, a section or a page.
- [ ] Carry useful group threads to GitHub. Ask before quoting anyone, and credit them.

## Spam and bots

- [ ] Hide as spam, delete, block. Use **Report content** for spam networks.
- [ ] A wave from new accounts: turn on temporary interaction limits.
- [ ] Don't click links in spam. Don't reply to bots.

## Security basics

- [ ] Two-factor on the GitHub and Cloudflare accounts, with an app or security key, not SMS.
- [ ] Recovery codes stored offline, where the steward can find them.
- [ ] Today the founder holds both accounts, and deploys run from his machine.
- [ ] New editors get repository collaborator access, never the account password. Cloudflare access only for whoever deploys.
- [ ] API tokens scoped to this site, with an expiry. Review access each edition.

**If an account is lost or taken over:** use recovery codes, then the provider's recovery. Change the password and revoke sessions and tokens. Check recent commits, settings and deploys for anything you didn't do. Roll back if needed. Post a short note in Governance.

## Turning on search indexing later

It's one switch: `site.indexable` in `site/paper.config.json`. Check first:

- [ ] The first comment round has had time to work, and the text isn't changing daily.
- [ ] Nothing on the site breaks the "can't be contributed" list.
- [ ] Titles, sitemap, robots rules, links and the 404 page are right.
- [ ] The Privacy page is still true. Indexing adds no analytics.
- [ ] Ship it as a release, with a release record.

## When to name more editors and the conduct reviewer

**The conduct reviewer comes first.** Ask as soon as someone unaffiliated with the steward is active and trusted. Name them in [EDITORS.md](EDITORS.md).

Name more editors when any of these is true: a contributor has several useful contributions; the weekly sitting runs past an hour; proposals are stuck behind single-editor rules; Edition 1 is in view. Use the nomination steps in [GOVERNANCE.md](GOVERNANCE.md). Three editors, two of them unaffiliated, starts Stage 1.

When rules are unclear, do the open, credited, plain thing. Then write down what you did.
