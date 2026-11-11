"""Builds figs.js for the Exam 2 page.
o_<id>: the notes' figure upscaled 3x (labels intact) for cards and cheat sheet.
f_<id>: same figure with answer-carrying labels covered by lettered boxes (questions).
CARDFIG: flashcard term -> figure + label box (percent coords) to highlight on the card back.
Source images: the docx media extracted to MEDIA (ch3/, ch4/).
Boxes are in original-image pixels: (x, y, w, h).
"""
import base64, io, json, os, sys
from PIL import Image, ImageDraw, ImageFont

MEDIA = sys.argv[1] if len(sys.argv) > 1 else '/home/claude/figs'
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'figs.js')
S = 3
FONT = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'

# id: (file, [ (letter or None, box, card_terms) ... ])  letter None = blank cover, no letter
F = {
 'eye': ('ch3/image7.png', [
   ('A', (34, 76, 36, 10), []),                      # Cornea
   ('B', (48, 103, 25, 10), ['Pupil']),
   ('C', (56, 123, 16, 10), ['Iris']),
   ('D', (127, 102, 25, 11), ['Lens']),
   ('E', (185, 103, 78, 11), ['Vitreous humor']),    # Vitreous chamber
   ('F', (301, 55, 30, 10), ['Retina']),
   ('G', (303, 86, 40, 28), ['Fovea']),              # Macula/Fovea centralis
   ('H', (301, 159, 53, 11), ['Optic nerve']),
   ('I', (260, 190, 72, 21), ['Blind spot']),
   ('J', (65, 180, 62, 11), ['Ciliary muscles']),
   ('K', (22, 47, 76, 10), ['Aqueous humor']),       # Anterior chamber
   (None, (47, 25, 80, 10), []),                     # Posterior chamber (not in notes)
 ]),
 'ear': ('ch3/image1.png', [
   ('A', (208, 1, 69, 9), ['Semicircular canals']),
   (None, (243, 10, 34, 8), []),                     # vestibule
   (None, (279, 4, 72, 11), []),                     # } vestibular apparatus
   ('B', (316, 63, 34, 10), ['Cochlea']),
   ('C', (312, 97, 44, 10), ['Oval window']),
   ('D', (185, 131, 72, 10), ['Tympanic membrane']),
   ('E', (240, 144, 60, 11), ['Ossicles', 'Hammer, anvil, and stirrup']),
   ('F', (157, 157, 81, 11), ['Auditory canal']),
   ('G', (186, 189, 38, 12), ['Outer ear']),         # legend words
   ('H', (246, 189, 42, 12), ['Middle ear']),
   ('I', (305, 189, 40, 12), ['Inner ear']),
 ]),
 'vestib': ('ch3/image14.png', [
   ('A', (4, 25, 46, 16), ['Semicircular canals']),
   ('B', (155, 45, 25, 10), []),                     # Utricle (textbook)
   ('C', (163, 73, 30, 10), []),                     # Saccule (textbook)
   ('D', (197, 191, 32, 11), ['Cochlea']),
   ('E', (386, 112, 32, 10), ['Hair cells']),
   ('F', (254, 99, 36, 19), []),                     # Vestibular nerve
   (None, (163, 14, 67, 10), []),                    # Vestibular apparatus
   (None, (385, 73, 40, 19), []),                    # Hairs of hair cell
   (None, (381, 173, 42, 19), []),                   # Vestibular nerve fibers
 ]),
 'nose': ('ch3/image6.png', [
   ('A', (151, 12, 68, 11), ['Olfactory mucosa']),   # Olfactory region
   ('B', (69, 182, 76, 12), []),                     # Respiratory region
   ('C', (15, 149, 40, 10), []),                     # Vestibule
   ('D', (173, 162, 54, 11), []),                    # Nasopharynx
   ('E', (221, 105, 57, 23), []),                    # Auditory tube opening
 ]),
 'somato': ('ch3/image9.png', [
   (None, (143, 20, 60, 26), ['Somatosensory system']),  # Primary somatosensory cortex (SI)
   (None, (143, 58, 60, 26), []),                         # Secondary somatosensory cortex (SII)
 ]),
 'thresh': ('ch3/image5.png', [
   ('A', (40, 12, 113, 15), ['Absolute threshold']),
   ('B', (205, 12, 130, 15), ['Difference threshold']),
   (None, (13, 44, 167, 29), []),
   (None, (185, 44, 162, 29), []),
 ]),
 'opponent': ('ch3/image4.png', [
   ('A', (20, 129, 54, 14), ['Opponent-process theory']),
   ('B', (144, 129, 48, 14), []),
   ('C', (234, 129, 54, 14), []),
 ]),
 'tongue': ('ch3/image10.png', []),
 'spectrum': ('ch3/image2.png', []),
 'harlow': ('ch3/image3.png', []),
 'harlow2': ('ch3/image13.png', []),

 'ipm': ('ch4/image1.png', [
   ('A', (75, 90, 55, 32), []),                      # Sensory Memory
   ('B', (211, 90, 58, 32), ['Working memory']),
   ('C', (343, 90, 70, 32), []),                     # Long-Term Memory
   ('D', (144, 100, 46, 14), []),                    # Attention
   ('E', (284, 114, 43, 15), ['Encoding']),          # Encode
   ('F', (291, 84, 46, 15), ['Retrieving']),         # Retrieve
   ('G', (206, 4, 68, 44), ['Rehearsal']),           # Maintenance & Elaborative Rehearsal
 ]),
 'impede': ('ch4/image2.png', [
   ('A', (21, 40, 76, 12), []),                      # Encoding failures
   ('B', (21, 72, 29, 12), ['Decay of memory trace']),
   ('C', (21, 94, 110, 12), ['Retrieval failure']),  # Inadequate retrieval cues
   ('D', (21, 126, 56, 11), ['Interfering material']),
   ('E', (20, 158, 104, 12), ['Motivated forgetting']),  # Trying not to remember
 ]),
 'pavlov': ('ch4/image3.png', [
   ('A', (16, 115, 68, 24), []),                     # Unconditioned stimulus
   ('B', (139, 115, 68, 24), []),                    # Unconditioned response
   ('C', (232, 115, 44, 24), []),                    # Neutral stimulus
   (None, (336, 115, 70, 24), []),                   # No conditioned response
   (None, (142, 243, 68, 24), []),                   # Unconditioned response (panel 3)
   ('D', (227, 243, 54, 24), []),                    # Conditioned stimulus
   ('E', (342, 243, 58, 24), []),                    # Conditioned response
 ]),
 'reinf': ('ch4/image5.png', [
   ('A', (140, 86, 102, 38), ['Positive reinforcement']),
   ('B', (266, 86, 104, 38), ['Positive punishment']),
   ('C', (140, 163, 102, 38), ['Negative reinforcement']),
   ('D', (266, 163, 104, 38), ['Negative punishment']),
 ]),
 'cvo': ('ch4/image7.png', [
   ('A', (100, 50, 96, 30), []), ('B', (204, 50, 124, 30), []),
   ('C', (100, 103, 96, 26), []), ('D', (204, 103, 124, 26), []),
   ('E', (100, 155, 96, 26), []), ('F', (204, 155, 124, 26), []),
   ('G', (100, 207, 96, 20), []), ('H', (204, 207, 124, 20), []),
 ]),
 'obs': ('ch4/image9.png', [
   ('A', (32, 9, 52, 13), []), ('B', (157, 9, 54, 13), []),
   ('C', (277, 9, 62, 30), []), ('D', (404, 9, 60, 13), []),
 ]),
 'domains': ('ch4/image6.png', [
   ('A', (329, 143, 56, 14), ['Affective domain']),
   ('B', (225, 165, 81, 16), ['Psychomotor domain']),
   ('C', (136, 206, 58, 17), ['Cognitive domain']),
   (None, (338, 162, 110, 42), []),
   (None, (224, 186, 112, 40), []),
   (None, (145, 226, 118, 30), []),
 ]),
 'ebb': ('ch4/image8.png', []),
 'ways': ('ch4/image10.png', []),
 'dog': ('ch4/image12.png', []),
}
# terms whose card shows a figure with no specific label to highlight
WHOLE = {
 'Opponent-process theory': 'opponent', 'Trichromatic theory': 'opponent', 'Cones': 'opponent',
 'Hue': 'spectrum', 'Taste buds': 'tongue', 'Papillae': 'tongue', 'Somatosensory system': 'somato',
 'Information Processing Model (IPM)': 'ipm', 'Classical conditioning': 'pavlov', 'Acquisition': 'pavlov',
 'Operant conditioning': 'cvo', 'Observational learning': 'obs', 'Social Learning Theory': 'obs',
 'Mnemonics': 'ways', 'Teaching': 'ways', 'Testing yourself': 'ways', 'Punishment': 'dog',
 'Vestibular sense': 'vestib', 'Harlow (1958)': 'harlow2', 'Ebbinghaus (1880s)': 'ebb', 'Motion sickness': 'vestib', 'Forgetting': 'impede', 'Reinforcement': 'reinf',
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

IMG, CARDFIG, LETTERS = {}, {}, {}
for k, (fn, specs) in F.items():
    im = Image.open(os.path.join(MEDIA, fn)).convert('RGB')
    big = im.resize((im.width * S, im.height * S), Image.LANCZOS)
    IMG['o_' + k] = b64(big)
    if specs:
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
