"""Builds figs.js for the Exam 3 page.
o_<id>: the notes' figure upscaled 3x (labels intact) for cards and cheat sheet.
f_<id>: same figure with answer-carrying labels covered by lettered boxes (questions).
CARDFIG: flashcard term -> figure + label box (percent coords) to highlight on the card back.
Source images: the docx media extracted to MEDIA (the notes PDFs' embedded images).
Boxes are in original-image pixels: (x, y, w, h).
"""
import base64, io, json, os, sys
from PIL import Image, ImageDraw, ImageFont

MEDIA = sys.argv[1] if len(sys.argv) > 1 else '/home/claude/figs3'
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'figs.js')
S = 3
FONT = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'

# id: (file, [ (letter or None, box, card_terms) ... ])  letter None = blank cover, no letter
F = {
 'stages': ('stages.png', [
   ('A', (37, 86, 64, 29), ['Sensorimotor']),
   ('B', (118, 86, 63, 29), ['Preoperational']),
   ('C', (199, 86, 65, 29), ['Concrete operations']),
   ('D', (280, 86, 65, 29), ['Formal operations']),
   (None, (37, 162, 64, 88), []), (None, (118, 162, 63, 88), []), (None, (199, 162, 65, 88), []), (None, (280, 162, 65, 88), []),
 ]),
 'conserv': ('conserv.png', [
   ('A', (3, 24, 72, 16), []),     # Liquid quantity
   ('B', (3, 98, 72, 16), []),     # Number
   ('C', (3, 158, 72, 16), []),    # Length
   ('D', (3, 195, 72, 16), []),    # Mass
   ('E', (3, 243, 72, 16), []),    # Area
 ]),
 'zpd': ('zpd.png', [
   ('A', (200, 11, 95, 59), ['Zone of Proximal Development']),
   (None, (196, 87, 90, 46), []),  # ZAD callout (not in the notes)
 ]),
 'marcia': ('marcia.png', [
   ('A', (38, 33, 54, 13), []),    # Foreclosure
   ('B', (133, 41, 98, 13), []),   # Identity achievement
   ('C', (30, 108, 90, 22), []),   # Identity diffusion
   ('D', (139, 102, 66, 15), []),  # Moratorium
 ]),
 'survival': ('survival.png', [
   ('A', (145, 58, 29, 18), []), ('B', (145, 80, 29, 18), []), ('C', (145, 102, 29, 18), []),
   ('D', (145, 124, 29, 18), []), ('E', (145, 146, 29, 18), []), ('F', (145, 168, 29, 18), []),
   ('G', (145, 190, 29, 18), []), ('H', (145, 212, 29, 18), []),
 ]),
 'tenets': ('tenets.png', []),
 'puberty': ('puberty.png', []),
 'hair': ('hair.png', []),
 'wheel': ('wheel.png', []),
}
# terms whose card shows a figure with no specific label to highlight
WHOLE = {
 'Continuity versus discontinuity': 'tenets', 'Types of conservation': 'conserv', 'Conservation': 'conserv',
 'Secondary sex characteristics': 'puberty', 'LH-RF and FSH-RF': 'puberty', 'Endocrine theory': 'hair',
 'Marcia\'s identity statuses': 'marcia', 'Acceptance and anticipation': 'wheel', 'Plutchik\'s eight primary emotions': 'wheel',
 'Survival behaviors': 'survival', 'Lower limit': 'zpd', 'Upper limit': 'zpd',
}

def b64(im):
    buf = io.BytesIO(); im.convert('RGB').save(buf, 'JPEG', quality=78, optimize=True)
    return 'data:image/jpeg;base64,' + base64.b64encode(buf.getvalue()).decode()

def mask(big, specs):
    d = ImageDraw.Draw(big)
    for letter, (x, y, w, h), _ in specs:
        X, Y, W, H = x * S, y * S, w * S, h * S
        d.rectangle([X - 2, Y - 2, X + W + 2, Y + H + 2], fill='white', outline=(120, 120, 120) if letter else None, width=2 if letter else 0)
        if letter:
            r = min(max(int(min(H, 30) * 0.7), 17), 22)
            cx, cy = X + W / 2, Y + H / 2
            d.ellipse([cx - r, cy - r, cx + r, cy + r], fill='white', outline='black', width=3)
            f = ImageFont.truetype(FONT, int(r * 1.25))
            d.text((cx, cy + 1), letter, fill='black', font=f, anchor='mm')
    return big

# anatomy figures stay as study aids (cards, cheat sheet) but aren't quizzed, so no masked copy
NO_QUIZ = set()
IMG, CARDFIG, LETTERS = {}, {}, {}
for k, (fn, specs) in F.items():
    im = Image.open(os.path.join(MEDIA, fn)).convert('RGB')
    big = im.resize((im.width * S, im.height * S), Image.LANCZOS)
    IMG['o_' + k] = b64(big)
    if specs and k not in NO_QUIZ:
        IMG['f_' + k] = b64(mask(big.copy(), specs))
        LETTERS[k] = [s[0] for s in specs if s[0]]
    for letter, (x, y, w, h), terms in specs:
        for t in terms:
            CARDFIG.setdefault(t, {'f': 'o_' + k, 'r': []})['r'].append(
                ['r', round(x / im.width * 100, 2), round(y / im.height * 100, 2), round(w / im.width * 100, 2), round(h / im.height * 100, 2)])
for t, k in WHOLE.items():
    CARDFIG.setdefault(t, {'f': 'o_' + k, 'r': []})

with open(OUT, 'w') as fh:
    fh.write('const IMG=' + json.dumps(IMG) + ';\n')
    fh.write('const CARDFIG=' + json.dumps(CARDFIG) + ';\n')
    fh.write('const FIG_LETTERS=' + json.dumps(LETTERS) + ';\n')
print('images', len(IMG), 'cardfig', len(CARDFIG), 'bytes', os.path.getsize(OUT))
