# Builds ../../biochem-exam1.html from template + data. Run: python3 build.py
# Add a module: drop mN.js next to m1.js (same shape) and add it to MODULES.
import os
VERSION = "v1.7"
MODULES = ["m1.js", "m2.js", "m3.js"]
here = os.path.dirname(os.path.abspath(__file__))
rd = lambda f: open(os.path.join(here, f), encoding="utf-8").read()
data = rd("figs.js") + "\n" + "\n".join(rd(m) for m in MODULES if os.path.exists(os.path.join(here, m)))
out = rd("template.html").replace("__DATA__", data).replace("__VERSION__", VERSION)
dst = os.path.join(here, "..", "..", "biochem-exam1.html")
open(dst, "w", encoding="utf-8").write(out)
print("wrote", os.path.normpath(dst), len(out), "bytes")
