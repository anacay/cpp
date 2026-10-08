"""G1 (the map) and G2 (one launch traced on it). Built with the seed paper's
figure kit: set KIT=/path/to/06_WHITEPAPER/figures/kit."""
import os, sys
sys.path.insert(0, os.environ.get('KIT', '../../../../../06_WHITEPAPER/figures/kit'))
from kit import *

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
COLS = ['Annual', 'Quarterly', 'Monthly', 'Weekly', 'Post-launch']
COLSUB = ['years out', 'quarters out', 'weeks to months', 'days to weeks', 'after it lands']
ROWS = [('Envelope', 'capital, fleet'), ('Region / site', 'place'), ('Portfolio', 'all launches'),
        ('Launch', 'one product'), ('Unit', 'one service')]
X0, CW, GAPX = 214, 202, 6
Y0, RH, GAPY = 112, 124, 6

def cx(c): return X0 + c * (CW + GAPX)
def ry(r): return Y0 + r * (RH + GAPY)

def frame(f, light=False):
    for c, (name, sub) in enumerate(zip(COLS, COLSUB)):
        f.text(cx(c) + 12, 58, name, size=17, weight=SEMIBOLD)
        f.text(cx(c) + 12, 82, sub, size=15, fill=G700)
    for r, (name, sub) in enumerate(ROWS):
        f.text(24, ry(r) + 30, name, size=17, weight=SEMIBOLD)
        f.text(24, ry(r) + 54, sub, size=15, fill=G700)
    for r in range(5):
        for c in range(5):
            f.rect(cx(c), ry(r), CW, RH, fill=WHITE if light else G100, stroke=G300, width=1, rx=4)
    # the loop: post-launch feeds the next annual plan
    yb = ry(4) + RH + 30
    x_end, x_start = cx(4) + CW / 2, cx(0) + CW / 2
    f.path(f'M{x_end},{ry(4) + RH + 4} V{yb} H{x_start} V{ry(4) + RH + 12}', stroke=G700, width=2)
    f.path(f'M{x_start - 7},{ry(4) + RH + 14} L{x_start},{ry(4) + RH + 4} L{x_start + 7},{ry(4) + RH + 14}', stroke=G700, width=2)
    f.text((x_start + x_end) / 2, yb + 26, 'Actuals feed the next intake and the next annual plan: the cycle repeats', size=15, fill=G700, anchor='middle', bg=True)
    # time arrow along the top
    f.arrow(cx(0), 96, cx(4) + CW, 96, color=G500, width=1.25, head=7)

CELLS = {
    (0, 0): 'Set the envelope and cut line; strategic bets on demand',
    (0, 1): 'Re-plan the envelope against actuals',
    (0, 2): 'Move the cut line; track spend against plan',
    (0, 3): 'Overrides decided and logged by the forum',
    (0, 4): 'Restate; re-baseline after a shock',
    (1, 0): 'Land, power, building shells; long-haul network',
    (1, 1): 'Machines and parts; placement plan',
    (1, 2): 'Pool machines; turn-up slots; arrivals',
    (1, 3): 'Job placement; bridges; moves',
    (1, 4): 'Reclaim stranded and expired capacity',
    (2, 0): 'Intents enter at a share of the envelope',
    (2, 1): 'Forecast in driver units; supply review',
    (2, 2): 'Re-rank against supply; grants; fulfillment ledger',
    (2, 3): 'Arbitrate, broker, escalate',
    (2, 4): 'Variance by owner; score declarations',
    (3, 0): 'Intent: a size range, a year',
    (3, 1): 'Dated: base and high scenarios',
    (3, 2): 'Configured: regions, shapes, ramp',
    (3, 3): 'Pre-launch tests; launch',
    (3, 4): 'Live, then organic',
    (4, 0): 'Efficiency commitment signed',
    (4, 1): 'Coefficient and rate card versioned',
    (4, 2): 'Shape, place and time checked',
    (4, 3): 'Tuning; admission control',
    (4, 4): 'Two alerts; the next coefficient',
}
COMMITS = {(1, 0), (1, 1), (1, 2), (1, 3)}

# ---------------------------------------------------------------- G1: the map
f = Fig('pullout', title='The map: altitude by cadence',
        desc='A grid. Columns are the planning cadence, left to right: annual, quarterly, monthly, weekly and post-launch, '
             'with an arrow from post-launch back to annual because actuals feed the next plan. Rows are altitudes, high to low: '
             'envelope (capital and the fleet), region or site, portfolio (all launches), launch (one product) and unit (one service). '
             'Each cell names the work at that altitude and cadence. Dots mark supply commit points: land, power and shells annually; '
             'machines and parts quarterly; turn-up slots monthly; job placement and bridges weekly. Schematic.')
frame(f)
for (r, c), s in CELLS.items():
    f.text(cx(c) + 12, ry(r) + 28, s, size=15, max_w=CW - 40 if (r, c) in COMMITS else CW - 22, fill=INK)
for (r, c) in COMMITS:
    f.commit(cx(c) + CW - 16, ry(r) + 22, label=False, size=20)
f.legend(24, 845, [('K2', 'supply commit point: each layer commits in the cadence its lead time forces')])
f.stamp('Schematic')
f.save(os.path.join(OUT, 'G1_map.svg'))

def trace(T, title, desc, stamp, out):
    f = Fig('pullout', title=title, desc=desc)
    frame(f, light=True)
    for r, c, s in T:
        f.rect(cx(c), ry(r), CW, RH, fill=BLUE_T, stroke=BLUE, width=2, rx=4)
    anchor = lambda r, c: (cx(c) + CW - 26, ry(r) + RH - 24)
    for i in range(len(T) - 1):
        (r1, c1, _), (r2, c2, _) = T[i], T[i + 1]
        (x1, y1), (x2, y2) = anchor(r1, c1), anchor(r2, c2)
        dx, dy = x2 - x1, y2 - y1
        L = (dx * dx + dy * dy) ** 0.5
        f.arrow(x1 + dx / L * 16, y1 + dy / L * 16, x2 - dx / L * 18, y2 - dy / L * 18, color=BLUE, width=2, head=8)
    for r, c, s in T:
        f.text(cx(c) + 12, ry(r) + 26, s, size=15, max_w=CW - 30, fill=INK, bg=True)
    for i, (r, c, s) in enumerate(T):
        x, y = anchor(r, c)
        f.circle(x, y, 13, fill=BLUE)
        f.text(x, y + 6, str(i + 1), size=16, fill=WHITE, anchor='middle', weight=SEMIBOLD)
    f.stamp(stamp)
    f.save(os.path.join(OUT, out))

trace([
    (3, 0, 'Intent, about −12: Product A plans a launch on Service X'),
    (2, 0, 'A share of the envelope is held for it'),
    (3, 1, 'Dated at −6: base 60k, high 90k requests per second'),
    (1, 1, 'High-memory machines commit at −6, but nobody asked about stored data'),
    (3, 2, 'Configured at −3: the memory need surfaces'),
    (1, 3, 'Standard machines from the pool bridge the gap'),
    (3, 4, 'Lands at 40k; high-memory machines arrive at +3'),
    (4, 4, 'The measured coefficient becomes the next one'),
], 'One launch traced on the map, as it happened',
   'The grid with the seed paper\'s worked example traced in eight numbered steps, without the method. 1: Intent at about −12 months, launch row, annual. '
   '2: a share of the envelope is held, portfolio row. 3: Dated at −6 with a base of 60,000 and a high of 90,000 requests per second, quarterly. '
   '4: high-memory machines commit at −6 but nobody asked about stored data, region row, quarterly. 5: Configured at −3, the memory need surfaces, monthly. '
   '6: standard machines from the pool bridge the gap, region row, weekly. 7: the launch lands at 40,000 and the high-memory machines arrive at +3, post-launch. '
   '8: the measured coefficient becomes the next one, unit row, post-launch. Illustrative numbers.',
   "Illustrative numbers, from the seed paper's worked example", 'G2_trace.svg')

trace([
    (3, 0, 'Intent, about −12: stored data asked; ±50% bands agreed'),
    (1, 0, 'High-memory machines commit at −11, at Intent (power earlier, at −20)'),
    (3, 1, 'Dated at −6: base 60k, inside the band agreed at intent'),
    (3, 2, 'Configured at −3: sized to 70k, the 80th percentile'),
    (1, 2, 'Machines on the dock by −2, ready at −1'),
    (2, 3, 'No bridge at the base; above 70k, a bridge named in advance'),
    (3, 4, 'Lands at 40k: recorded as a band breach on A\'s declaration'),
    (4, 4, 'About 1.0 NMU of spare, priced and owned; the next coefficient'),
], 'The same launch with the commit-point method',
   'The same grid, with the seed paper\'s worked example traced with the commit-point method. 1: Intent at about −12, stored data asked as a range and change bands of plus or minus 50% agreed, launch row, annual. '
   '2: high-memory machines commit at −11, at Intent, region row, annual; power committed earlier, at −20. 3: Dated at −6, base 60,000 and high 90,000, inside the band agreed at intent, quarterly. '
   '4: Configured at −3, sized to 70,000, the 80th percentile, monthly. 5: machines on the dock by −2 and ready at −1, region row, monthly. '
   '6: no bridge needed at the base; above 70,000 a bridge named in advance, portfolio row, weekly. 7: the launch lands at 40,000, recorded as a band breach on the declaration, post-launch. '
   '8: about 1.0 NMU of spare, priced and owned, and the next coefficient, unit row, post-launch. Illustrative numbers.',
   "Illustrative numbers, from the seed paper's Appendix A walk", 'G2b_trace_method.svg')
print('ok')
