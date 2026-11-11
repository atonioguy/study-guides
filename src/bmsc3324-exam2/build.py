"""Assemble bmsc3324-exam2.html from the parts in this folder. Run figs.py first if figures changed."""
import os
D = os.path.dirname(os.path.abspath(__file__))
R = lambda f: open(os.path.join(D, f), encoding='utf-8').read()
bank_fns = """const BANK = [];
function Q(t, k, q, o, ex, x = {}) { BANK.push(Object.assign({ t, k, type: 'mc', q, o, ex }, x)); }
function TF(t, k, q, val, ex, x = {}) { BANK.push(Object.assign({ t, k, type: 'tf', q, o: ['True', 'False'], ans: val ? 0 : 1, ex, fixed: 1 }, x)); }
"""
out = (R('head.html') + R('figs.js') + R('sheet.js') + R('cards.js') + bank_fns + R('bank_m3.js') + R('bank_m4.js')
       + R('hl.js') + R('helpers.js') + R('app.js'))
dst = os.path.join(D, '..', '..', 'bmsc3324-exam2.html')
open(dst, 'w', encoding='utf-8').write(out)
print('wrote', os.path.relpath(dst), len(out))
