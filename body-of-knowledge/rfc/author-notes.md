# Author's notes on the seed paper

Starting points for the conversation: what I know I don't know, questions I'd most like answered, and where help is wanted. Written in October 2026 for the seed's launch. They're the community's questions now. Each note is pinned to a passage in the seed paper and shows up there as a margin note, with its own Discuss link. At launch, each one also opens as a thread in GitHub Discussions.

Format, one note per heading:

    ## kind | section | exact passage from that section | draft
    The note, in plain sentences.

- **kind:** `known-unknown`, `open-question` or `help-wanted`.
- **section:** a section number (`13`), or `A` / `B` for an appendix.
- **passage:** must appear word for word in that section; the build fails if it doesn't.
- **draft:** remove it once Guillermo, or an editor, has approved the wording.

## known-unknown | 13 | I found no time series of coefficient drift
How often does a coefficient move, and by how much, across a hardware generation or a code change? I haven't found a public series. Even the shape of one would help: a ratio over two or three years, numbers disguised or indexed. Is drift a slow creep, or mostly a few big steps?

## known-unknown | 13 | how often launches slip
How well do declarations land, by stage? The paper's illustrative rule is that intents come in around 60% of declared size and configured asks within 10%. That's a guess dressed as a number. If a public study or talk reports asked against landed, add it as a source. A made-up example with the right shape helps too.

## open-question | 13 | I found no published mechanism for arbitrating scarce accelerators between them
When accelerators are short, who decides between internal teams and external customers, and how? Operators have published splits and priority orders, but no mechanism we could find: the forum, the rule, the appeal. Know of a public account? Add it as a source. Or describe a method in general terms, with nothing your employer hasn't published.

## help-wanted | 13 | I found no published order-to-dock time, turn-up duration or hardware contract terms
Supply is the least documented side. Public sources welcome: a filing, a talk, a vendor document that states order-to-dock time, turn-up duration, cancel windows or reschedule terms. Please add them as sources, with a link and the quote.

## known-unknown | 13 | how long large new loads wait for power
How long does a large new load really wait for power, from request to energized? Lawrence Berkeley National Laboratory found little published. Utility filings and interconnection queues may hold the answer. Has anyone pulled the numbers together?

## help-wanted | 13 | Attribution for stateful services and batched inference is open
Per-request coefficients break for caches, batches and stateful services, and batched inference is the big new case. If you've attributed cost on one of these, what unit did you use, and what did you do with the remainder?

## open-question | 8 | A data scientist could do better.
The method buys each supply layer to its own percentile. That's a rule of thumb, not a joint optimum. I'd welcome someone who can do better: a simulation, a closed form, or a reason the rule of thumb is good enough.

## known-unknown | 8 | Nobody has measured it in public, as far as the sources show.
Re-pegging a launch reserve to another tenant when a launch slips looks nearly free. Across enough launches it may absorb most timing misses. That's speculation. Has anyone measured how often a slip's reserve gets re-used?

## open-question | 6 | So the cost of being short rises with lead time
The paper's ratios, 4 : 1 for machines and 19 : 1 for power, are illustrative. What ratio would you actually set for each layer, and who in your organization would sign it?

## open-question | 5 | Count the all-teams record as eight launches
How much should a team's own record count against everyone's? The weight of eight launches is invented. Insurers have credibility theory for this. Does anyone apply it to capacity declarations?

## open-question | 9 | the step most often missing is the supply review
The paper argues the supply review is the step most often missing between the demand review and the executive decision. Is there public evidence either way? What should a supply review bring?

## known-unknown | 13 | The planner can only bound it, phase it and buy options.
What do you do with a step that has no reference class, such as a first accelerator cluster or a first region on a new continent? Bound it, phase it, buy options is all the paper offers. What else has worked?

## open-question | 11 | caps need the same stage records
An open question for anyone running agents at scale: when a team's own software creates the demand, is a cap a better declaration than a forecast? Tell us what you've seen.

## open-question | 14 | A coefficient is an agreement among them.
The strongest challenge to this paper's central claim that we know of: where a market price exists, does the agreement still hold? Argue it in the thread, either way.

## open-question | 13 | The most useful next contribution would be multi-organization data
Could the field ever have a shared, public dataset of declarations, built only from published or synthetic records? What would make such a dataset trustworthy, and what should it never contain?
