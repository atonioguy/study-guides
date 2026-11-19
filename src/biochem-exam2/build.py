# Builds ../../biochem-exam2.html from template + data. Run: python3 build.py
# Module files that don't exist yet are skipped, so the site builds at every stage.
import os
VERSION = "v1.3"
MODULES = ["m4.js", "m5.js"]
here = os.path.dirname(os.path.abspath(__file__))
rd = lambda f: open(os.path.join(here, f), encoding="utf-8").read() if os.path.exists(os.path.join(here, f)) else ""
data = rd("figs.js") + "\n" + "\n".join(rd(m) for m in MODULES)
out = rd("template.html").replace("__DATA__", data).replace("__VERSION__", VERSION)
dst = os.path.join(here, "..", "..", "biochem-exam2.html")
open(dst, "w", encoding="utf-8").write(out)
print("wrote", os.path.normpath(dst), len(out), "bytes")
