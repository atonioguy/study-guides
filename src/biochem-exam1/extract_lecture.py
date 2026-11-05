# Extracts an H5P Interactive Book lecture into static data for the lecture window.
# Run: python3 -I extract_lecture.py path/to/module.h5p m3
# Writes ../../lectures/biochem-exam1/<mod>.json and ../../lectures/biochem-exam1/img/<mod>/*.webp
# Reads the .h5p straight from the zip (nothing is unpacked to disk). Chapters map to L1, L2, ... in order.
# Each top-level chapter item becomes one block with id "<mod>L<n>-b<i>"; questions map to blocks by id.
import sys, os, re, json, io, zipfile, html
from html.parser import HTMLParser
from urllib.parse import urlparse, parse_qs
from PIL import Image as PILImage

MAXW = 900
here = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.normpath(os.path.join(here, "..", "..", "lectures", "biochem-exam1"))

# ---------- HTML sanitizer (allowlist) ----------
KEEP = {"p", "br", "b", "strong", "i", "em", "u", "sub", "sup", "ul", "ol", "li", "h2", "h3", "h4", "h5",
        "table", "thead", "tbody", "tr", "th", "td", "a", "blockquote", "span", "div", "hr", "caption"}
DROP_WITH_CONTENT = {"script", "style", "iframe", "object", "embed", "noscript", "svg", "math"}
VOID = {"br", "hr"}
HMAP = {"h2": "h4", "h3": "h4", "h4": "h5", "h5": "h5"}  # lesson titles own the top level in the window


class San(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.out = []; self.skip = 0; self.stack = []

    def handle_starttag(self, tag, attrs):
        if tag in DROP_WITH_CONTENT:
            self.skip += 1; return
        if self.skip or tag not in KEEP:
            return
        if tag in ("span", "div"):
            # spans and divs carry only Word/CKEditor styling; drop the tag, keep the text
            return
        a = dict(attrs); keep = ""
        if tag == "a":
            href = (a.get("href") or "").strip()
            if href.startswith("www."):
                href = "https://" + href
            if re.match(r"^https?://", href):
                keep = ' href="%s" target="_blank" rel="noopener"' % html.escape(href, quote=True)
        elif tag in ("td", "th"):
            for k in ("colspan", "rowspan"):
                if a.get(k, "").isdigit():
                    keep += ' %s="%s"' % (k, a[k])
        elif tag == "ol" and (a.get("start") or "").isdigit():
            keep = ' start="%s"' % a["start"]
        tag = HMAP.get(tag, tag)
        self.out.append("<%s%s>" % (tag, keep))
        if tag not in VOID:
            self.stack.append(tag)

    def handle_endtag(self, tag):
        if tag in DROP_WITH_CONTENT:
            self.skip = max(0, self.skip - 1); return
        if self.skip or tag not in KEEP or tag in ("span", "div") or tag in VOID:
            return
        tag = HMAP.get(tag, tag)
        if tag in self.stack:
            while self.stack:
                t = self.stack.pop(); self.out.append("</%s>" % t)
                if t == tag:
                    break

    def handle_data(self, data):
        if not self.skip:
            self.out.append(html.escape(data.replace(" ", " "), quote=False))

    def result(self):
        while self.stack:
            self.out.append("</%s>" % self.stack.pop())
        s = "".join(self.out)
        s = re.sub(r"[ \t\r\n]+", " ", s)
        s = re.sub(r"<(p|li|h4|h5|td|th)>\s*</\1>", "", s)
        s = re.sub(r"\s*(</?(?:p|ul|ol|li|h4|h5|table|thead|tbody|tr|th|td|blockquote|caption)[^>]*>)\s*", r"\1", s)
        # Word exports split one list into several <ol start=n>; merge adjacent ones
        s = re.sub(r"</ol><ol(?: start=\"\d+\")?>", "", s)
        s = re.sub(r"</ul><ul>", "", s)
        return s.strip()


def san(h):
    p = San(); p.feed(h or ""); p.close(); return p.result()


def txt(h):
    """Plain text of an H5P string field (titles, alts, plain-text params)."""
    return html.escape(re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", h or ""))).strip(), quote=False)


# ---------- images ----------
class Ctx:
    def __init__(self, z, mod):
        self.z = z; self.mod = mod; self.imgs = {}
        self.imgdir = os.path.join(OUT, "img", mod)

    def img(self, f, alt, cls=""):
        if not f or not f.get("path"):
            return ""
        src = f["path"]
        if src not in self.imgs:
            name = os.path.splitext(os.path.basename(src))[0]
            name = re.sub(r"[^A-Za-z0-9_-]", "_", name) + ".webp"
            im = PILImage.open(io.BytesIO(self.z.read("content/" + src)))
            im = im.convert("RGBA") if im.mode in ("P", "LA", "RGBA") else im.convert("RGB")
            if im.width > MAXW:
                im = im.resize((MAXW, round(im.height * MAXW / im.width)), PILImage.LANCZOS)
            os.makedirs(self.imgdir, exist_ok=True)
            im.save(os.path.join(self.imgdir, name), "WEBP", quality=82, method=6)
            self.imgs[src] = (name, im.width, im.height)
        name, w, h = self.imgs[src]
        return '<img src="lectures/biochem-exam1/img/%s/%s" alt="%s" width="%d" height="%d" loading="lazy"%s>' % (
            self.mod, name, html.escape(html.unescape(alt or ""), quote=True), w, h, (' class="%s"' % cls) if cls else "")


# ---------- YouTube ----------
def yt(url):
    url = html.unescape(url or "").strip()
    if not re.match(r"^https?://", url):
        url = "https://" + url
    u = urlparse(url); q = parse_qs(u.query); vid = None
    host = u.netloc.lower()
    if "youtu.be" in host:
        vid = u.path.strip("/").split("/")[0]
    elif "v" in q:
        vid = q["v"][0]
    else:
        m = re.search(r"/(?:embed|shorts|v|live)/([A-Za-z0-9_-]{11})", u.path)
        vid = m.group(1) if m else None
    if not vid or not re.fullmatch(r"[A-Za-z0-9_-]{11}", vid):
        return None, 0
    t = (q.get("t") or q.get("start") or ["0"])[0]
    m = re.fullmatch(r"(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s?)?", t)
    start = 0
    if m:
        hh, mm, ss = (int(x) if x else 0 for x in m.groups()); start = hh * 3600 + mm * 60 + ss
    return vid, start


def video(p, title):
    for s in p.get("sources", []):
        vid, start = yt(s.get("path"))
        if vid:
            watch = "https://www.youtube.com/watch?v=%s%s" % (vid, ("&amp;t=%ds" % start) if start else "")
            t = txt(title) or "Lecture video"
            return ('<div class="lw-vid" data-yt="%s" data-start="%d"><button type="button" class="lw-play" aria-label="Play video: %s">'
                    '<img src="https://i.ytimg.com/vi/%s/hqdefault.jpg" alt="" loading="lazy"><span class="lw-pi"></span></button>'
                    '<div class="lw-cap"><span>%s</span><a href="%s" target="_blank" rel="noopener">Open on YouTube</a></div></div>') % (
                vid, start, t, vid, t, watch)
    return ""


def answer(inner):
    return '<details class="lw-ans"><summary>Show answer</summary>%s</details>' % inner


def stars(text, blank):
    """H5P *answer* or *answer:tip* markup. blank=True gives the question, False the filled version."""
    def rep(m):
        a = m.group(1).split(":")[0].split("/")[0]
        return '______' if blank else "<b>%s</b>" % a
    return re.sub(r"\*([^*]+)\*", rep, text)


# DragQuestion has no instruction text of its own; per-module wording
DRAGQ = {"m3": "Place each label on the step it affects (- inhibits, + activates)."}


# ---------- renderer ----------
def render(c, ctx):
    lib = (c.get("library") or "").split(" ")[0]
    p = c.get("params") or {}
    title = (c.get("metadata") or {}).get("title", "")
    if lib in ("H5P.AdvancedText", "H5P.Text"):
        return san(p.get("text"))
    if lib == "H5P.Image":
        return '<figure class="lw-fig">%s</figure>' % ctx.img(p.get("file"), p.get("alt"))
    if lib == "H5P.Video":
        return video(p, title)
    if lib == "H5P.Column":
        return "".join(render(x["content"], ctx) for x in p.get("content", []))
    if lib == "H5P.Row":  # newer Interactive Book layout: row -> columns -> content
        return "".join(render(x["content"], ctx) for x in p.get("columns", []) if x.get("content"))
    if lib == "H5P.RowColumn":
        return "".join(render(x, ctx) for x in p.get("content", []))
    if lib == "H5P.Accordion":
        return "".join('<details class="lw-acc"><summary>%s</summary>%s</details>' % (txt(x.get("title")), render(x["content"], ctx))
                       for x in p.get("panels", []))
    if lib == "H5P.ImageHotspots":
        out = '<figure class="lw-fig">%s</figure><ul class="lw-hot">' % ctx.img(p.get("image"), p.get("backgroundImageAltText"))
        for h in p.get("hotspots", []):
            out += "<li><b>%s</b>%s</li>" % (txt(h.get("header")), "".join(render(x, ctx) for x in h.get("content", [])))
        return out + "</ul>"
    if lib == "H5P.MultiChoice":
        opts = p.get("answers", [])
        li = "".join("<li>%s</li>" % txt(a.get("text")) for a in opts)
        cor = "; ".join(txt(a.get("text")) for a in opts if a.get("correct"))
        return '<div class="lw-q"><div class="lw-qh">Check yourself</div>%s<ul>%s</ul>%s</div>' % (san(p.get("question")), li, answer("<p>%s</p>" % cor))
    if lib == "H5P.TrueFalse":
        return '<div class="lw-q">%s<p class="lw-tf">True or False</p>%s</div>' % (san(p.get("question")), answer("<p>%s</p>" % ("True" if p.get("correct") == "true" else "False")))
    if lib == "H5P.QuestionSet":
        intro = p.get("introPage") or {}
        out = '<div class="lw-q"><div class="lw-qh">%s</div>%s<ol>' % (txt(intro.get("title")) or "Check yourself", san(intro.get("introduction")))
        for q in p.get("questions", []):
            qp = q.get("params") or {}; ql = q.get("library", "").split(" ")[0]
            if ql == "H5P.TrueFalse":
                out += "<li>%s%s</li>" % (san(qp.get("question")), answer("<p>%s</p>" % ("True" if qp.get("correct") == "true" else "False")))
            else:
                out += "<li>%s</li>" % render(q, ctx)
        return out + "</ol></div>"
    if lib == "H5P.SingleChoiceSet":  # first answer is the correct one
        out = '<div class="lw-q"><div class="lw-qh">Check yourself</div><ol>'
        for ch in p.get("choices", []):
            ans = ch.get("answers", [])
            out += "<li>%s<ul>%s</ul>%s</li>" % (san(ch.get("question")), "".join("<li>%s</li>" % txt(a) for a in ans),
                                                 answer("<p>%s</p>" % txt(ans[0])) if ans else "")
        return out + "</ol></div>"
    if lib in ("H5P.Blanks", "H5P.DragText"):
        if lib == "H5P.Blanks":
            intro = san(p.get("text")); qs = p.get("questions", [])
        else:
            intro = san(p.get("taskDescription"))
            qs = ["<p>%s</p>" % html.escape(l, quote=False) for l in (p.get("textField") or "").split("\n") if l.strip()]
        q = "".join(san(stars(x, True)) for x in qs)
        a = "".join(san(stars(x, False)) for x in qs)
        return '<div class="lw-q"><div class="lw-qh">Fill in the blanks</div>%s%s%s</div>' % (intro, q, answer(a))
    if lib == "H5P.Essay":
        return '<div class="lw-q"><div class="lw-qh">Think about it</div>%s</div>' % san(p.get("taskDescription"))
    if lib == "H5P.MemoryGame":
        li = "".join("<li><b>%s</b> matches <b>%s</b>. %s</li>" % (txt(cd.get("imageAlt")), txt(cd.get("matchAlt") or cd.get("imageAlt")), txt(cd.get("description")))
                     for cd in p.get("cards", []))
        return '<div class="lw-q"><div class="lw-qh">Matching pairs</div><ul>%s</ul></div>' % li
    if lib == "H5P.Dialogcards":  # flash cards: front as the prompt, image, back behind Show answer
        out = '<div class="lw-q"><div class="lw-qh">%s</div>%s<ol>' % (txt(p.get("title")) or "Flash cards", san(p.get("description")))
        for dc in p.get("dialogs", []):
            im = ctx.img(dc.get("image"), dc.get("imageAltText"))
            out += "<li>%s%s%s</li>" % (san(dc.get("text")), ('<figure class="lw-fig">%s</figure>' % im) if im else "", answer(san(dc.get("answer"))))
        return out + "</ol></div>"
    if lib == "H5P.DragQuestion":
        t = p["question"]["task"]; s = p["question"]["settings"]
        els = [txt(e["type"]["params"].get("text") or e["type"]["params"].get("alt")) for e in t["elements"]]
        rows = "".join("<tr><td>%s</td><td>%s</td></tr>" % (txt(z.get("label")), ", ".join(els[int(i)] for i in z.get("correctElements", []) if i.isdigit() and int(i) < len(els)))
                       for z in t["dropZones"])
        return ('<div class="lw-q"><div class="lw-qh">Drag and drop</div><p>%s</p>'
                '<figure class="lw-fig">%s</figure><p>Labels: %s</p>%s</div>') % (
            DRAGQ.get(ctx.mod, "Place each label on its drop zone."), ctx.img(s.get("background"), "Drag and drop background"), ", ".join(els), answer('<table><tr><th>Step</th><th>Labels</th></tr>%s</table>' % rows))
    if lib == "H5P.Link":
        w = p.get("linkWidget") or {}
        url = (w.get("protocol") or "https://") + (w.get("url") or "").replace("https://", "").replace("http://", "")
        return '<p><a href="%s" target="_blank" rel="noopener">%s</a></p>' % (html.escape(url, quote=True), txt(p.get("title")) or html.escape(url))
    print("  unhandled library:", lib, file=sys.stderr)
    return ""


def main(path, mod):
    z = zipfile.ZipFile(path)
    d = json.loads(z.read("content/content.json"))
    title = json.loads(z.read("h5p.json")).get("title", mod)
    ctx = Ctx(z, mod)
    if os.path.isdir(ctx.imgdir):
        for f in os.listdir(ctx.imgdir):
            os.remove(os.path.join(ctx.imgdir, f))
    lessons = {}
    for n, ch in enumerate(d["chapters"], 1):
        blocks = []
        for i, it in enumerate(ch["params"]["content"]):
            h = render(it["content"], ctx)
            if h:
                blocks.append({"id": "%sL%d-b%d" % (mod, n, i), "h": h})
        t = re.sub(r"^Lesson \d+:\s*", "", (ch.get("metadata") or {}).get("title", ""))
        lessons["L%d" % n] = {"t": t, "b": blocks}
        print("L%d %s: %d blocks" % (n, t, len(blocks)))
    os.makedirs(OUT, exist_ok=True)
    out = {"mod": mod, "title": title, "lessons": lessons}
    js = json.dumps(out, ensure_ascii=False, separators=(",", ":"))
    open(os.path.join(OUT, mod + ".json"), "w", encoding="utf-8").write(js)
    print("wrote %s.json %d bytes, %d images" % (mod, len(js.encode()), len(ctx.imgs)))


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
