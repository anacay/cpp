# Learning walk-through: split the miss

A first exercise for a planner in the Learning level. About 10 minutes. From the Capacity Planning Practice, cpp.anacay.org. CC BY-SA 4.0.

All numbers are illustrative. They are the seed paper's worked example: Product A's launch on Service X (Section 7 and Appendix A). The data is also in `split-the-miss-illustrative.csv`.

**The point.** A team can land within 4% of its forecast and still be 30% over its bill. Two of the bill's three terms belong to someone else. After this exercise, you stop treating a bill miss as a forecasting failure. You ask who owns each term.

---

## The setup

A caller's bill on a shared service is roughly **Cost = V × α × r**.

- **V** is volume: how much the caller does. The product team owns it.
- **α** is the coefficient: resource used per unit of volume. The service owns it.
- **r** is the rate: cost per unit of resource. The service owns it, with finance.

Product A calls Service X. Busy cores = V × α ÷ 1,000, because α is in milliseconds of CPU per request. A year has 8,760 hours.

| | Plan | Actual |
|---|---|---|
| Volume V (requests per second) | 500,000 | 480,000 |
| Coefficient α (ms of CPU per request) | 1.0 | 1.25 |
| Rate r ($ per core-hour) | 0.12 | 0.13 |

What happened: A's volume landed close to plan. A release of X raised CPU per call from 2.5 ms to 3.125 ms. X's power contract was re-priced, so its rate rose.

---

## The steps

Work each step before you read the answer key.

1. **Plan cost.** Work out A's planned busy cores and its planned cost for the year.
2. **Actual cost.** Do the same with the actual numbers. How far over plan is the bill, in dollars and in percent?
3. **How far off was the forecast?** Compare actual volume with plan, in percent.
4. **Swap volume.** Keep plan α and plan r. Put in actual V. How much does the cost change? This is the volume term.
5. **Swap the coefficient.** Now keep actual V and plan r. Put in actual α. How much more does it change? This is the coefficient term.
6. **Swap the rate.** Now use all three actuals. How much more? This is the rate term.
7. **Check.** Do the three terms add up to the overrun from step 2?
8. **Owners.** Name the owner of each term.
9. **Think it through.** Swap the rate first instead, then volume, then the coefficient. What changes? What does that tell you?
10. **One more.** A is billed its busy cores at X's rate. So who pays the coefficient term this year, unless a rule moves it?

---

## Answer key

1. Plan: 500,000 × 1.0 ÷ 1,000 = **500 busy cores**. 500 × 8,760 × $0.12 = **$525,600** a year.
2. Actual: 480,000 × 1.25 ÷ 1,000 = **600 busy cores**. 600 × 8,760 × $0.13 = **$683,280**. That is **+$157,680**, or **30% over** plan.
3. Volume: 480,000 against 500,000 is **4% under** plan. The forecast was good.
4. Volume term: (480,000 − 500,000) × 1.0 ÷ 1,000 = −20 cores. −20 × 8,760 × $0.12 = **−$21,024**. Cost so far: $504,576.
5. Coefficient term: 480,000 × 0.25 ÷ 1,000 = +120 cores. 120 × 8,760 × $0.12 = **+$126,144**. Cost so far: $630,720.
6. Rate term: 600 × 8,760 × $0.01 = **+$52,560**. Cost: $683,280.
7. −$21,024 + $126,144 + $52,560 = **+$157,680**. Yes, it matches.
8. Owners:
   - Volume, −$21,024: **Product A**.
   - Coefficient, +$126,144: **Service X**, because its release raised CPU per call.
   - Rate, +$52,560: **Service X, with finance**, after the power re-pricing.

   The two terms A didn't own add up to +$178,704. That is more than the whole overrun.
9. Rate first: the rate term is 500 × 8,760 × $0.01 = **$43,800**. Volume becomes **−$22,776** and the coefficient **+$136,656**. The total is the same +$157,680, but $8,760 moves off the rate piece. The order of the swaps is a policy choice. Agree it before a miss, or use a symmetric method.
10. **A pays it**, unless a rule agreed with finance before the miss says otherwise. The split assigns accountability, not payment. Without a rule, the pieces have owners in the meeting but not on the bill.

---

## Where to read more

- The coefficient: https://cpp.anacay.org/guide/concepts/the-coefficient/
- Case 1, the launch that needed memory: https://cpp.anacay.org/guide/cases/
- Post-launch, where the miss is split: https://cpp.anacay.org/guide/post-launch/
- The seed paper, Section 7: https://cpp.anacay.org/paper/7-a-worked-example/

**Tried it?** Say where you got stuck, in the "Sections" discussions on GitHub, or write to cpp@anacay.org. A confusing step is a bug, and you are credited for finding it.
