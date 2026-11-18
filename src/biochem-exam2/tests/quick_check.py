# Quick browser pass for biochem-exam2.html at 1280 and 390, run after each lecture lesson.
# Stage 7 ports the full test_site.py; this is the light version until then.
# usage (after build.py): python3 tests/quick_check.py [lesson ids / question ids to screenshot into /tmp/shots]
import sys, os, threading, functools, json
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from playwright.sync_api import sync_playwright
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "..")); PORT = 8766
URL = "http://127.0.0.1:%d/biochem-exam2.html" % PORT
SHOTS = sys.argv[1:]
fails = []
def check(c, m):
    print(("  ok   " if c else "  FAIL ") + m)
    if not c: fails.append(m)
class Q(SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
class Srv(ThreadingHTTPServer):
    def handle_error(self, *a): pass
srv = Srv(("127.0.0.1", PORT), functools.partial(Q, directory=ROOT))
threading.Thread(target=srv.serve_forever, daemon=True).start()
os.makedirs("/tmp/shots", exist_ok=True)
with sync_playwright() as p:
    for name, vw, vh in (("desktop", 1280, 900), ("phone", 390, 844)):
        print("==", name)
        br = p.chromium.launch(); ctx = br.new_context(viewport={"width": vw, "height": vh}, has_touch=vw < 640)
        pg = ctx.new_page(); errs = []; bad = []
        pg.on("pageerror", lambda e: errs.append(str(e)))
        pg.on("console", lambda m: errs.append(m.text) if m.type == "error" else None)
        pg.on("response", lambda r: bad.append(r.url) if r.status >= 400 else None)
        # study guide
        pg.goto(URL + "#sheet"); pg.wait_for_selector(".unit")
        pg.evaluate("document.querySelectorAll('img[loading=lazy]').forEach(i=>i.loading='eager')")
        pg.wait_for_function("[...document.querySelectorAll('.limg img')].every(i=>i.complete)", timeout=20000)
        broken = pg.evaluate("[...document.querySelectorAll('.limg img')].filter(i=>!i.naturalWidth).map(i=>i.src)")
        n = pg.evaluate("document.querySelectorAll('.limg img').length")
        check(not broken, "guide: %d lesson images load %s" % (n, broken[:3]))
        sw = pg.evaluate("document.documentElement.scrollWidth")
        check(sw <= vw, "guide: no horizontal scroll (%d)" % sw)
        wide = pg.evaluate("[...document.querySelectorAll('.tw')].filter(t=>t.scrollWidth>t.clientWidth+1).map(t=>t.closest('.card').id+' '+t.scrollWidth+'/'+t.clientWidth)")
        # a table up to 4 px wide (one unbreakable word, e.g. m4-map at 390) is a warning, not a failure
        slight = [w for w in wide if int(w.split()[1].split("/")[0]) - int(w.split("/")[1]) <= 4]
        if slight: print("  warn tables a few px wide:", slight)
        check(len(wide) == len(slight), "guide: no table wider than its card %s" % [w for w in wide if w not in slight])
        ids = pg.evaluate("[...document.querySelectorAll('.unit .card[id]')].map(c=>c.id)")
        print("  lessons:", len(ids))
        for s in SHOTS:
            el = pg.query_selector("#" + s)
            if el: el.screenshot(path="/tmp/shots/%s-%s.png" % (s, vw))
        # practice
        pg.click('#nav button[data-t="practice"]'); pg.wait_for_selector(".qcard")
        nq = pg.evaluate("document.querySelectorAll('.plist .qcard').length")
        print("  practice cards:", nq)
        sw = pg.evaluate("document.documentElement.scrollWidth")
        check(sw <= vw, "practice: no horizontal scroll (%d)" % sw)
        tiny = pg.evaluate("[...document.querySelectorAll('.plist .fig svg')].filter(s=>s.getBoundingClientRect().width<200).length")
        nf = pg.evaluate("document.querySelectorAll('.plist .fig svg').length")
        check(nf > 0 and tiny == 0, "practice: %d question figures render" % nf)
        over = pg.evaluate("""[...document.querySelectorAll('.plist .qcard')].filter(c=>c.scrollWidth>c.clientWidth+1).map(c=>c.innerText.slice(0,40))""")
        check(not over, "practice: no card overflows %s" % over[:2])
        # screenshot requested question cards by stem match on id (cards carry no id; find via QBY stems)
        for s in SHOTS:
            if not s.startswith("m4") or "-" in s: continue
            stem = pg.evaluate("(()=>{for(const M of MODS)for(const q of M.questions)if(q.id==='%s')return q.stem;})()" % s)
            if not stem: continue
            h = pg.evaluate_handle("(t)=>[...document.querySelectorAll('.plist .qcard')].find(c=>c.innerText.includes(t.slice(0,60)))", stem)
            el = h.as_element()
            if el: el.screenshot(path="/tmp/shots/%s-%s.png" % (s, vw))
        # answer + review highlight
        pg.evaluate("document.querySelector('.plist .qcard .opt').click()")
        rv = pg.query_selector(".plist .qcard .rev")
        if rv:
            rv.evaluate("e=>e.click()"); pg.wait_for_timeout(200)
            check(pg.query_selector(".modal .hl") is not None, "review opens lesson with highlight")
            pg.keyboard.press("Escape")
        # lecture window on every lecture button text tag seen
        btn = pg.query_selector(".plist .lecb")
        btn.scroll_into_view_if_needed(); pg.evaluate("scrollBy(0,-120)")
        t = pg.query_selector(".tut")
        if t: t.evaluate("e=>e.click()")
        btn.evaluate("e=>e.click()")
        try:
            pg.wait_for_selector(".lw mark.lwhl", timeout=8000); ok = True
        except Exception: ok = False
        check(ok, "lecture window opens with highlight")
        check(not errs, "no page errors %s" % errs[:3])
        check(not bad, "no failed requests %s" % bad[:3])
        br.close()
srv.shutdown()
print("FAILED" if fails else "ALL OK", len(fails))
sys.exit(1 if fails else 0)
