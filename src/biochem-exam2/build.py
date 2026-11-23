# Builds ../../biochem-exam2.html from template + data. Run: python3 build.py
# Module files that don't exist yet are skipped, so the site builds at every stage.
import json, os, re
VERSION = "v1.9"
MODULES = ["m4.js", "m5.js"]
here = os.path.dirname(os.path.abspath(__file__))
rd = lambda f: open(os.path.join(here, f), encoding="utf-8").read() if os.path.exists(os.path.join(here, f)) else ""
data = rd("figs.js") + "\n" + "\n".join(rd(m) for m in MODULES)


def webp_size(path):
    """(width, height) from a WebP header (VP8, VP8L or VP8X)."""
    d = open(path, "rb").read(30)
    if d[:4] != b"RIFF" or d[8:12] != b"WEBP":
        raise ValueError("not a WebP file: " + path)
    c = d[12:16]
    if c == b"VP8 ":
        return int.from_bytes(d[26:28], "little") & 0x3FFF, int.from_bytes(d[28:30], "little") & 0x3FFF
    if c == b"VP8L":
        v = int.from_bytes(d[21:25], "little")
        return (v & 0x3FFF) + 1, ((v >> 14) & 0x3FFF) + 1
    if c == b"VP8X":
        return int.from_bytes(d[24:27], "little") + 1, int.from_bytes(d[27:30], "little") + 1
    raise ValueError("unknown WebP chunk %r in %s" % (c, path))


# Lesson figures get their real width/height so the page has the same height before they load
# (otherwise the study guide's saved scroll spot lands lower than where you left it).
root = os.path.join(here, "..", "..")
dims = {}
for src in sorted(set(re.findall(r'lectures/biochem-exam2/img/[^"\s]+\.webp', data))):
    dims[src] = webp_size(os.path.join(root, src))
data = "const IMGDIM=" + json.dumps(dims, separators=(",", ":")) + ";\n" + data
out = rd("template.html").replace("__DATA__", data).replace("__VERSION__", VERSION)
dst = os.path.join(here, "..", "..", "biochem-exam2.html")
open(dst, "w", encoding="utf-8").write(out)
print("wrote", os.path.normpath(dst), len(out), "bytes")
