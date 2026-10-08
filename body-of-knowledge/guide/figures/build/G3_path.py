"""G3: the path, drawn on the handshake triangle."""
import os, sys
sys.path.insert(0, os.environ.get('KIT', '../../../../../06_WHITEPAPER/figures/kit'))
from kit import *
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
f = Fig('tall', title='The path on the handshake triangle',
        desc='The handshake triangle: capital at the top, demand at the bottom left, supply at the bottom right. '
             'A career path starts near demand with Learning (one service and one launch, weekly to monthly), '
             'moves toward the middle with Practicing (the portfolio, monthly to quarterly, with the commit points), '
             'and reaches Leading at the centre (the envelope and region, annual and quarterly, holding the decision rights). '
             'From there it forks: across to Capital (budgets, the envelope, strategic bets), or across to Supply '
             '(sites, power, contracts, lead times). Argued from experience; not measured.')
C, D, S = (360, 120), (60, 640), (660, 640)
f.path(f'M{C[0]},{C[1]} L{D[0]},{D[1]} L{S[0]},{S[1]} Z', fill=G100, stroke=G300, width=2)
def corner(p, name, sub, anchor):
    x, y = p
    f.circle(x, y, 9, fill=INK)
    dy = -22 if p == C else 34
    f.text(x, y + dy - (24 if p == C else 0), name, size=19, weight=SEMIBOLD, anchor=anchor)
    f.text(x, y + dy - (0 if p == C else -24), sub, size=15, fill=G700, anchor=anchor)
corner(C, 'Capital', 'funds it', 'middle')
corner(D, 'Demand', 'uses it', 'middle')
corner(S, 'Supply', 'builds it', 'middle')
L1, L2, L3 = (180, 560), (270, 480), (360, 400)
f.polyline([D, L1, L2, L3], stroke=BLUE, width=3)
f.arrow(L3[0], L3[1] - 14, C[0], C[1] + 40, color=BLUE, width=3, head=10)
f.arrow(L3[0] + 12, L3[1] + 10, S[0] - 46, S[1] - 34, color=BLUE, width=3, head=10)
for p, n in ((L1, '1'), (L2, '2'), (L3, '3')):
    f.circle(p[0], p[1], 14, fill=BLUE)
    f.text(p[0], p[1] + 6, n, size=16, fill=WHITE, anchor='middle', weight=SEMIBOLD)
f.circle(C[0], C[1] + 70, 14, fill=BLUE); f.text(C[0], C[1] + 76, '4', size=16, fill=WHITE, anchor='middle', weight=SEMIBOLD)
f.circle(S[0] - 70, S[1] - 50, 14, fill=BLUE); f.text(S[0] - 70, S[1] - 44, '5', size=16, fill=WHITE, anchor='middle', weight=SEMIBOLD)
# key column
lab = [
    (130, '4  Capital', 'Crosses to funding: budgets, the envelope, strategic bets'),
    (265, '3  Leading', 'Envelope and region; annual and quarterly; holds the decision rights'),
    (400, '2  Practicing', 'The portfolio and the commit points; monthly to quarterly'),
    (520, '1  Learning', 'One service, one launch; weekly to monthly'),
    (630, '5  Supply', 'Crosses to building: sites, power, contracts, lead times'),
]
for y, h, t in lab:
    f.text(700, y, h, size=17, weight=SEMIBOLD)
    f.text(700, y + 24, t, size=15, fill=G700, max_w=236)
f.text(360, 740, "The broker's path runs up the middle, then forks to either corner", size=15, fill=G700, anchor='middle')
f.stamp('Argued from experience')
f.save(os.path.join(OUT, 'G3_path.svg'))
print('ok')
