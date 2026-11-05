# Browser test for biochem-exam1.html. Run from the repo root after build.py:
#   python3 src/biochem-exam1/tests/test_site.py
# Serves the repo over http (the lecture window fetches lectures/biochem-exam1/*.json, which file:// blocks),
# then runs the same checks at desktop 1280 and mobile 390. Exits non-zero on any failure.
import sys, os, threading, functools, subprocess
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from playwright.sync_api import sync_playwright

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", ".."))
PORT = 8765
URL = "http://127.0.0.1:%d/biochem-exam1.html" % PORT
fails = []


def check(cond, msg):
    print(("  ok   " if cond else "  FAIL ") + msg)
    if not cond:
        fails.append(msg)


class Quiet(SimpleHTTPRequestHandler):
    def log_message(self, *a):
        pass


class Server(ThreadingHTTPServer):
    def handle_error(self, request, client_address):
        pass  # the browser drops image requests when a lesson is swapped; that's expected


def tap(page, el):
    """Scroll el into the band between the sticky header and a bottom sheet (if open), then click it."""
    el.evaluate("e=>{e.scrollIntoView({block:'start'});scrollBy(0,-110);}")
    el.click()


def serve():
    srv = Server(("127.0.0.1", PORT), functools.partial(Quiet, directory=ROOT))
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    return srv


def nav(page, t):
    page.click('#nav button[data-t="%s"]' % t)
    page.wait_for_timeout(150)


def rect(page, sel_or_handle):
    el = page.query_selector(sel_or_handle) if isinstance(sel_or_handle, str) else sel_or_handle
    return el.bounding_box() if el else None


def overlap(a, b):
    return not (a["x"] + a["width"] <= b["x"] or b["x"] + b["width"] <= a["x"] or a["y"] + a["height"] <= b["y"] or b["y"] + b["height"] <= a["y"])


def no_hscroll(page, where):
    sw, vw = page.evaluate("[document.documentElement.scrollWidth, innerWidth]")
    check(sw <= vw, "no horizontal scroll %s (%d vs %d)" % (where, sw, vw))


def mark_visible(page):
    return page.evaluate("""()=>{const m=document.querySelector('.lw mark.lwhl, .lw .lwhit');if(!m)return false;
      const b=document.querySelector('.lwbody').getBoundingClientRect(),r=m.getBoundingClientRect();return r.top>=b.top-2&&r.top<=b.bottom-10;}""")


def run(p, name, vw, vh):
    print("== %s %dx%d" % (name, vw, vh))
    phone = vw <= 640
    br = p.chromium.launch()
    ctx = br.new_context(viewport={"width": vw, "height": vh}, has_touch=phone)
    page = ctx.new_page()
    errs = []
    page.on("pageerror", lambda e: errs.append(str(e)))
    bad_req = []
    page.on("response", lambda r: bad_req.append(r.url) if r.status >= 400 and "127.0.0.1" in r.url else None)
    page.goto(URL + "#practice")
    page.wait_for_selector(".qcard")
    if phone:
        no_hscroll(page, "practice")

    # existing flow: answer a question, Review highlight
    page.click(".qcard .opt >> nth=0")
    page.click(".qcard .fb .rev >> nth=0")
    check(page.query_selector(".modal .hl") is not None, "Review opens lesson with .hl highlight")
    page.keyboard.press("Escape")
    check(page.query_selector(".modal") is None, "Escape closes Review modal")

    # tutorial points at the first lecture button and doesn't cover it
    first = page.query_selector(".lecb")
    check(first is not None, "lecture buttons render in Practice")
    first.scroll_into_view_if_needed()
    page.evaluate("window.scrollBy(0,-120)")
    page.wait_for_selector(".tut", timeout=3000)
    tb, fb = rect(page, ".tut"), rect(page, ".lecb")
    check(tb is not None and not overlap(tb, fb), "tutorial shows and doesn't cover the button")
    check(tb["x"] >= 0 and tb["x"] + tb["width"] <= vw, "tutorial fits the viewport")
    if phone:
        no_hscroll(page, "with tutorial")
    page.click(".tut")
    check(page.query_selector(".tut") is None, "tutorial closes on click")
    page.reload()
    page.wait_for_selector(".qcard")
    page.query_selector(".lecb").scroll_into_view_if_needed()
    page.evaluate("window.scrollBy(0,-120)")
    try:
        page.wait_for_selector(".tut", timeout=3000); ok = True
    except Exception:
        ok = False
    check(ok, "tutorial shows again after reload")

    # open the window from an L1 question
    btns = page.query_selector_all(".lecb")
    tags = [b.inner_text().strip() for b in btns]
    check(all(t[:2] in ("M1", "M2", "M3") for t in tags), "only M1/M2/M3 questions have lecture buttons (%d)" % len(btns))
    check(all(any(t.startswith(m) for t in tags) for m in ("M1", "M2", "M3")), "M1, M2 and M3 all have lecture buttons")
    b1 = btns[tags.index("M3 L1")]
    tap(page, b1)
    page.wait_for_selector(".lw mark.lwhl", timeout=5000)
    check(page.query_selector(".tut") is None, "clicking a lecture button dismisses the tutorial")
    check("M3 L1" in page.inner_text(".lwtitle"), "window shows L1")
    page.wait_for_timeout(200)
    check(mark_visible(page), "highlight scrolled into view (L1)")
    check(len(page.query_selector_all(".lw .lwb")) == 24, "whole lesson rendered (24 blocks)")
    check(page.query_selector(".lw iframe") is None, "no video iframes until clicked")
    if not phone:
        lw = rect(page, ".lw")
        check(not overlap(lw, rect(page, b1)), "window doesn't cover the clicked question tag")
    else:
        check(page.query_selector(".lw.sheet") is not None, "phone uses the bottom sheet")
        sh = rect(page, ".lw")
        check(sh["y"] > vh * 0.3, "question area still visible above the sheet")
        pad = page.evaluate("parseInt(document.body.style.paddingBottom)||0")
        check(abs(pad - sh["height"]) < 2, "page padded so content can scroll above the sheet")
        no_hscroll(page, "with sheet open")

    # play a video, then swap lessons (iframe goes away)
    page.click(".lw .lw-play >> nth=0")
    src = page.get_attribute(".lw iframe", "src") or ""
    check("youtube-nocookie.com/embed/" in src and "autoplay=1" in src, "video click swaps in the nocookie player")
    l4 = [b for b, t in zip(btns, tags) if t == "M3 L4"]
    tap(page, l4[0])
    page.wait_for_function("document.querySelector('.lwtitle').textContent.includes('L4')")
    page.wait_for_selector(".lw mark.lwhl")
    check(page.query_selector(".lw iframe") is None, "swapping lessons removes the player")
    page.wait_for_timeout(200)
    check(mark_visible(page), "highlight scrolled into view (L4)")
    t1 = page.inner_text(".lw mark.lwhl")
    tap(page, l4[3])
    page.wait_for_timeout(300)
    t2 = page.inner_text(".lw mark.lwhl")
    check(t1 != t2 and len(page.query_selector_all(".lw .lwb")) == 35, "same-lesson click just moves the highlight")
    check(mark_visible(page), "moved highlight in view")
    vid = page.evaluate("[...document.querySelectorAll('.lw-vid')].map(v=>v.dataset.start)")
    check("3" in vid, "start time kept (&t=3s -> start=3)")

    # lecture wording note opens the study-guide note on top
    page.click(".lw .lwnote button >> nth=0")
    check(page.query_selector(".modal .call.note") is not None, "Lecture wording link opens the note")
    page.keyboard.press("Escape")
    check(page.query_selector(".modal") is None and page.query_selector(".lw") is not None, "Escape closes the note, window stays")

    # drag / resize / persist (desktop) or sheet height (phone)
    if not phone:
        h0 = rect(page, ".lwhead")
        page.mouse.move(h0["x"] + 40, h0["y"] + 10); page.mouse.down(); page.mouse.move(h0["x"] - 260, h0["y"] + 70, steps=6); page.mouse.up()
        a = rect(page, ".lw")
        check(abs(a["x"] - (h0["x"] - 1 - 300)) < 6 and abs(a["y"] - (h0["y"] - 1 + 60)) < 6, "drag moves the window")
        r0 = rect(page, ".lwrz")
        page.mouse.move(r0["x"] + 10, r0["y"] + 10); page.mouse.down(); page.mouse.move(r0["x"] + 70, r0["y"] - 80, steps=6); page.mouse.up()
        b = rect(page, ".lw")
        check(abs(b["width"] - (a["width"] + 60)) < 4 and abs(b["height"] - (a["height"] - 90)) < 4, "corner resizes the window")
        y0 = page.evaluate("scrollY"); page.mouse.wheel(0, 900); page.wait_for_timeout(200)
        page.mouse.move(5, 300); page.mouse.wheel(0, 900); page.wait_for_timeout(200)
        c = rect(page, ".lw")
        check(page.evaluate("scrollY") > y0 and abs(c["y"] - b["y"]) < 1, "window stays put while the page scrolls")
        page.reload(); page.wait_for_selector(".lecb")
        page.query_selector(".lecb").click(); page.wait_for_selector(".lw mark.lwhl")
        d = rect(page, ".lw")
        check(all(abs(d[k] - b[k]) < 2 for k in ("x", "y", "width", "height")), "position and size remembered after reload")
    else:
        g = rect(page, ".lwgrip"); s0 = rect(page, ".lw")
        page.dispatch_event(".lwgrip", "pointerdown", {"pointerId": 1, "button": 0, "clientX": g["x"] + 20, "clientY": g["y"] + 5, "isPrimary": True})
        page.dispatch_event(".lwgrip", "pointermove", {"pointerId": 1, "clientX": g["x"] + 20, "clientY": g["y"] - 120, "isPrimary": True})
        page.dispatch_event(".lwgrip", "pointerup", {"pointerId": 1, "clientX": g["x"] + 20, "clientY": g["y"] - 120, "isPrimary": True})
        s1 = rect(page, ".lw")
        check(abs(s1["height"] - (s0["height"] + 125)) < 4, "handle drag resizes the sheet")
        no_hscroll(page, "after sheet resize")
    page.keyboard.press("Escape")
    check(page.query_selector(".lw") is None, "Escape closes the window")

    # drills (open each)
    nav(page, "practice")
    n = len(page.query_selector_all(".drills .card.link"))
    for i in range(n):
        nav(page, "practice")
        page.click(".drills summary")
        page.click(".drills .card.link >> nth=%d" % i)
        page.wait_for_timeout(250)
        if phone:
            no_hscroll(page, "drill %d" % i)
    check(n >= 8, "opened %d drills" % n)

    # window closes on tab switch; hidden during an active mock
    nav(page, "practice")
    page.query_selector(".lecb").click(); page.wait_for_selector(".lw")
    nav(page, "mock")
    check(page.query_selector(".lw") is None, "tab switch closes the window")
    page.click("text=Start mock")
    page.wait_for_selector("#main .opt")
    check(page.query_selector("#main .lecb") is None, "no lecture button during active mock (q1)")
    for _ in range(4):
        page.click("#main .opt >> nth=0"); page.wait_for_timeout(50)
        check(page.query_selector("#main .lecb") is None, "no lecture button after answering in mock")
        page.click("#main .row .btn.pri")
    nav(page, "sheet"); nav(page, "mock")
    check("Mock" in page.inner_text(".qhead") and "5 / " in page.inner_text(".qhead"), "mock resumes after tab switch")
    page.reload(); page.wait_for_selector("#main .opt")
    check("5 / " in page.inner_text(".qhead"), "mock resumes after reload")
    q = page.locator("text=Quit"); q.click(); q.click()
    page.wait_for_selector("text=Start mock")
    check(page.query_selector(".qhead") is None, "quit returns to mock start")

    # end a mock early: results page figures and lecture buttons
    page.click("text=Start mock"); page.wait_for_selector("#main .opt")
    page.click("text=End exam"); page.click("text=Finish anyway")
    page.wait_for_selector(".miss")
    ws = page.evaluate("[...document.querySelectorAll('.miss .fig')].map(f=>f.getBoundingClientRect().width)")
    check(all(w <= 460.5 for w in ws), "missed-list figures max 460 px (%d figs)" % len(ws))
    rb = page.query_selector(".miss .lecb")
    check(rb is not None, "results page has lecture buttons")
    if rb:
        tap(page, rb); page.wait_for_selector(".lw mark.lwhl, .lw .lwhit", timeout=5000)
        check(True, "lecture opens from results page")
    if phone:
        no_hscroll(page, "results")

    # fetch failure shows a retry
    ctx2 = br.new_context(viewport={"width": vw, "height": vh})
    p2 = ctx2.new_page()
    p2.route("**/lectures/**", lambda r: r.abort())
    p2.goto(URL + "#practice"); p2.wait_for_selector(".lecb")
    p2.query_selector(".lecb").click()
    p2.wait_for_selector(".lw button:has-text('Try again')", timeout=4000)
    check(True, "fetch failure shows Try again")
    p2.unroute("**/lectures/**")
    p2.click(".lw button:has-text('Try again')"); p2.wait_for_selector(".lw mark.lwhl", timeout=5000)
    check(True, "Try again loads the lecture")
    ctx2.close()

    check(not errs, "no page errors " + ("" if not errs else str(errs[:3])))
    check(not bad_req, "no failed local requests " + ("" if not bad_req else str(bad_req[:3])))
    br.close()


if __name__ == "__main__":
    srv = serve()
    with sync_playwright() as p:
        run(p, "desktop", 1280, 800)
        run(p, "mobile", 390, 844)
    srv.shutdown()
    built = open(os.path.join(ROOT, "biochem-exam1.html"), encoding="utf-8").read()
    check(built.count("—") == 0, "no em dashes in built file")
    here = os.path.join(ROOT, "src", "biochem-exam1")
    for v in ("validate_hl.js", "validate_lec.js"):
        check(subprocess.run(["node", os.path.join("tests", v)], cwd=here).returncode == 0, v)
    print("\n%d failure(s)" % len(fails))
    sys.exit(1 if fails else 0)
