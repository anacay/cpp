// The practice's own glossary, beside the seed paper's (which stays in the
// paper's words, unchanged). Two groups:
//   practice: terms the guide uses that the seed's term lists don't define;
//   case3:    terms Case 3 (Kuantillion Cloud) uses, so deep links resolve.
// Definitions are short paraphrases of the guide pages and Case 3 pages named
// in `read`. Markdown inline: "Section 6.2" and [n] auto-link to the paper.
// `read` entries are guide file names (optionally with #hash), resolved by the
// build; a missing page fails it. Ids follow the seed glossary's term-<slug>.

export const PRACTICE_TERMS = [
  { term: 'Driver', def: 'What causes load: the volume a caller does, *V* in Cost = V × α × r. The product team owns it.',
    seed: 'Section 1', read: [['concept-the-coefficient.md', 'The coefficient']] },
  { term: 'Rate', def: 'Cost per unit of resource, *r* in Cost = V × α × r. By default it is the average loaded rate. The service owns it with finance, on a versioned rate card.',
    seed: 'Sections 1 and 4', read: [['concept-the-coefficient.md', 'The coefficient'], ['concept-three-prices.md', 'Three prices']] },
  { term: 'Shadow price', def: 'What one more unit of the binding resource is worth; zero for a resource in slack. It answers who gets scarce capacity now.',
    seed: 'Section 4', read: [['concept-three-prices.md', 'Three prices']] },
  { term: 'Average loaded rate', def: 'Fully loaded pool cost divided by practical capacity. It answers who pays. It misleads for marginal decisions: too high in slack, too low under scarcity.',
    seed: 'Section 4', read: [['concept-three-prices.md', 'Three prices']] },
  { term: 'Long-run incremental cost', def: 'The cost of the next increment of supply per unit of driver. It answers whether growth should be built for, not how to price capacity that already exists.',
    seed: 'Section 4', read: [['concept-three-prices.md', 'Three prices']] },
  { term: 'Practical capacity', def: 'What a pool can actually use, after redundancy, maintenance reserve and queueing headroom. Set the rate on it, not on what got used.',
    seed: 'Section 4', read: [['concept-three-prices.md', 'Three prices']] },
  { term: 'Unused line', def: 'The idle remainder of practical capacity, reported as its own owned line instead of spread across every other bill. Compare the [unallocated line](/glossary/#term-unallocated-line).',
    seed: 'Section 4', read: [['concept-three-prices.md', 'Three prices']] },
  { term: 'Landing rule', def: 'Who keeps capacity a team saves. Agreed before any recovery, it lets recovered capacity land where the recoverer sees it. It is mechanism 8.',
    seed: 'Sections 9.2 and 9.3', read: [['concept-operating-mechanisms.md#m8', 'The operating mechanisms'], ['stage-post-launch.md', 'Post-launch']] },
  { term: 'Shortage rule', def: 'Who goes short first when a delivery falls short in one shape at one site. The forum agrees it before the shortage; supply carries it out.',
    seed: 'Section 9.3', read: [['stage-weekly.md', 'Weekly'], ['concept-operating-mechanisms.md', 'The operating mechanisms']] },
  { term: 'Seam', def: 'A structural line of conflict between parties to the handshake. The seed names three: product and platform, planning and finance, and planning and supply.',
    seed: 'Section 10.1', read: [['people.md#the-three-seams', 'People: brokering the handshake']] },
  { term: 'Handshake', def: 'The agreement among capital, supply and demand that every capacity plan rests on. The planner brokers it, usually owning no capacity and no budget.',
    seed: 'Section 10', read: [['people.md', 'People: brokering the handshake'], ['the-work-and-the-path.md', 'The work and the path']] },
  { term: 'Firmness class', def: 'The stated odds an approval carries, such as firm, best-effort or preemptible. An approval supply hasn’t answered yet is *uncommitted*, a class of its own.',
    seed: 'Section 6.1', read: [['concept-approval-and-allocation.md', 'Approval and allocation']] },
  { term: 'Reference class', def: 'The record of comparable past cases, used as an outside view of a forecast [10]. Start from all teams’ record at a stage, and weight a team’s own record as it grows.',
    seed: 'Section 3', read: [['concept-demand-and-declarations.md', 'Demand and declarations']] },
  { term: 'Materiality', def: 'The scale below which the planning mechanisms cost more than they return. Skipping the discipline below it is a fair choice. Case 3 tests it in dollars, annual margin over exit against the program’s fixed cost, and uses a harvest ratio only to set scope.',
    seed: 'Section 13', read: [['limits.md', 'Limits']] },
];

export const CASE3_TERMS = [
  { term: 'Sink', def: 'One of four places a usable legacy drive can go: workloads, repair spares, upgrades and builds, or exit through resale, recycling or destruction (the full case calls this sink retirement).',
    read: [['case-kuantillion-cloud-full.md#how-to-read-this', 'The full case, Terms used']] },
  { term: 'Harvest', def: 'The parts a retirement releases: drives, memory, cards. A harvested part must fit a slot, run on a platform, pass a test and, if it held data, be provably erased before it counts as supply.',
    read: [['note-second-lives.md#agreeing-on-the-words', 'Second lives']] },
  { term: 'Condition', def: 'How sound a supplied unit is: its wear, its error history, its age. A *grade* is a condition band that a plan can price and place.',
    read: [['note-second-lives.md#agreeing-on-the-words', 'Second lives']] },
  { term: 'Byproduct supply', def: 'Supply nobody ordered. It falls out of a decision made for another reason, most often retiring a machine. That decision, not a purchase order, sets its size, timing and quality.',
    read: [['note-second-lives.md#agreeing-on-the-words', 'Second lives']] },
  { term: 'Tier cap', def: 'The most graded tiers the fleet’s systems can absorb. It is read from the qualification backlog and the solver’s categories, and recorded as a decision note.',
    read: [['case-kuantillion-cloud-plan.md#gate-2', 'The execution plan, G2']] },
  { term: 'Grading tax', def: 'The complexity cost of grading. Every tier is a new SKU, qualification combination, placement constraint and forecast category. It is Case 3’s strongest counter-argument to fine-grained reuse.',
    read: [['case-kuantillion-cloud-full.md#6-supply-the-gates', 'The full case, the gates'], ['case-kuantillion-cloud-practice.md#p3', 'How the practice solves it, P3']] },
  { term: 'Cohort', def: 'Drives that share a model, firmware and power-on-hour band. Case 3 treats a cohort as a shared driver of failure, caps it per redundancy group, and uses it as the grain for failure, wear and power figures.',
    read: [['case-kuantillion-cloud-practice.md#p3', 'How the practice solves it, P3']] },
  { term: 'Cover point', def: 'How far up its demand range a pool or layer is stocked, set by its shortage-to-idle ratio. In Case 3 spares cover is signed per repair-urgency segment: high where a dead drive takes a host down, low where a tier can fail in place. The seed’s worksheet calls it the [cover-to point](/glossary/#term-cover-to-point).',
    seed: 'Section 6.5', read: [['concept-buffers-and-reserves.md', 'Buffers and reserves']] },
  { term: 'Showback', def: 'Showing teams an internal price without billing them. The seed’s order is to “Move to attributed cost only after a full cycle of showback.” Case 3 shows back an internal rate for drives, the higher of net resale and pipeline cost plus a risk loading, before anyone is billed.',
    seed: 'Section 10.4', read: [['case-kuantillion-cloud-plan.md#rules', 'The execution plan, rules'], ['settings.md', 'Settings']] },
];

// Seed-glossary terms with a guide page that teaches them (by term id).
export const SEED_CONCEPTS = {
  'term-coefficient': ['concept-the-coefficient.md', 'The coefficient'],
  'term-commit-point': ['concept-commit-points.md', 'Commit points'],
  'term-commit-commit-point': ['concept-commit-points.md', 'Commit points'],
  'term-need-date': ['concept-commit-points.md', 'Commit points'],
  'term-the-three-choices': ['concept-commit-points.md', 'Commit points'],
  'term-usual-and-cautious-lead-time': ['concept-commit-points.md', 'Commit points'],
  'term-a-stages-record': ['concept-commit-points.md', 'Commit points'],
  'term-open-range-low-base-high': ['concept-commit-points.md', 'Commit points'],
  'term-driving-attribute': ['concept-commit-points.md', 'Commit points'],
  'term-supplys-answer': ['concept-commit-points.md', 'Commit points'],
  'term-change-band': ['concept-commit-points.md', 'Commit points'],
  'term-declaration': ['concept-demand-and-declarations.md', 'Demand and declarations'],
  'term-stage': ['concept-demand-and-declarations.md', 'Demand and declarations'],
  'term-fulfillment': ['concept-approval-and-allocation.md', 'Approval and allocation'],
  'term-named-gap': ['concept-approval-and-allocation.md', 'Approval and allocation'],
  'term-pegging': ['concept-approval-and-allocation.md', 'Approval and allocation'],
  'term-reclaim-due-back': ['concept-approval-and-allocation.md', 'Approval and allocation'],
  'term-shortage-to-idle-ratio': ['concept-buffers-and-reserves.md', 'Buffers and reserves'],
  'term-launch-reserve': ['concept-buffers-and-reserves.md', 'Buffers and reserves'],
  'term-stocked-pool': ['concept-buffers-and-reserves.md', 'Buffers and reserves'],
  'term-bridge': ['concept-buffers-and-reserves.md', 'Buffers and reserves'],
  'term-supply-layer': ['concept-supply-layers-and-lead-times.md', 'Supply layers and lead times'],
  'term-lead-time': ['concept-supply-layers-and-lead-times.md', 'Supply layers and lead times'],
  'term-cancel-window': ['concept-supply-layers-and-lead-times.md', 'Supply layers and lead times'],
  'term-take-or-pay': ['concept-supply-layers-and-lead-times.md', 'Supply layers and lead times'],
  'term-option': ['concept-supply-layers-and-lead-times.md', 'Supply layers and lead times'],
  'term-turn-up': ['concept-supply-layers-and-lead-times.md', 'Supply layers and lead times'],
  'term-ready-for-service-date': ['concept-supply-layers-and-lead-times.md', 'Supply layers and lead times'],
  'term-contracted-versus-active-power': ['concept-supply-layers-and-lead-times.md', 'Supply layers and lead times'],
  'term-forum': ['concept-operating-mechanisms.md#m10', 'The operating mechanisms'],
  'term-cut-line': ['concept-operating-mechanisms.md', 'The operating mechanisms'],
  'term-declaration-register-commit-point-map-fulfillment-ledger': ['concept-operating-mechanisms.md#m12', 'The operating mechanisms'],
  'term-unallocated-line': ['concept-operating-mechanisms.md', 'The operating mechanisms'],
  'term-envelope': ['the-map.md', 'The map'],
  'term-apportionment': ['concept-three-prices.md', 'Three prices'],
  'term-admission-control': ['stage-weekly.md', 'Weekly'],
};

// A practice note shown under a seed definition, where the seed's words lean
// on context the glossary page doesn't carry. The seed text stays as it is.
export const SEED_NOTES = {
  'term-coefficient': 'In the seed’s worked example, “here” means Service X, whose coefficient is CPU time per request. In general the resource and the driver vary by service.',
};
