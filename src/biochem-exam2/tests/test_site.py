# Browser test for biochem-exam2.html. Run from the repo root after build.py:
#   python3 src/biochem-exam2/tests/test_site.py
# Serves the repo over http (the lecture window fetches lectures/biochem-exam2/*.json, which file:// blocks),
# then runs the same checks at desktop 1280 and mobile 390. Exits non-zero on any failure.
import sys, os, threading, functools, subprocess
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from playwright.sync_api import sync_playwright

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", ".."))
PORT = 8767
URL = "http://127.0.0.1:%d/biochem-exam2.html" % PORT
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


KEY = "bmsc3401-exam2"
MIX_JS = """()=>{const S=JSON.parse(localStorage.getItem('%s'));const by={};MODS.forEach(m=>m.questions.forEach(q=>by[q.id]=q));
  const qs=S.mock.qs.map(r=>by[r.id]);const c={};qs.forEach(q=>{const k=q.mod.short+' '+q.kind;c[k]=(c[k]||0)+1;c[q.mod.short]=(c[q.mod.short]||0)+1;c[q.kind]=(c[q.kind]||0)+1;});
  return {n:qs.length,c,ids:qs.map(q=>q.id),uniq:new Set(qs.map(q=>q.id)).size};}""" % KEY


def start_mock(page):
    page.click("text=Start mock"); page.wait_for_selector("#main .opt")
    m = page.evaluate(MIX_JS)
    q = page.locator("text=Quit"); q.click(); q.click()
    page.wait_for_selector("text=Start mock")
    return m


def mock_mix(page):
    """Mock builder: 40/40/20 kind mix split evenly across modules, unseen first, then oldest answered."""
    nav(page, "mock")
    check("not added yet" not in page.inner_text("#main"), "mock setup has no leftover module note")
    m = start_mock(page)
    c = m["c"]
    check(m["n"] == 25 and m["uniq"] == 25, "25-question mock, no repeats")
    check((c.get("fig"), c.get("ex"), c.get("why")) == (10, 10, 5), "25: 10 fig / 10 ex / 5 why %s" % c)
    check(sorted([c.get("M4"), c.get("M5")]) == [12, 13], "25: modules split 12/13 %s" % c)
    check(c.get("M4 fig") == 5 and c.get("M5 fig") == 5 and c.get("M4 ex") == 5 and c.get("M5 ex") == 5
          and sorted([c.get("M4 why"), c.get("M5 why")]) == [2, 3], "25: each kind split across M4 and M5")
    page.click("text=10 questions")
    m = start_mock(page); c = m["c"]
    check((m["n"], c.get("fig"), c.get("ex"), c.get("why"), c.get("M4"), c.get("M5")) == (10, 4, 4, 2, 5, 5), "10: 4/4/2, 5 per module %s" % c)
    page.click("text=25 questions")
    # one module only
    page.locator("#main .box input[type=checkbox]").nth(1).uncheck()
    m = start_mock(page); c = m["c"]
    check((m["n"], c.get("M4"), c.get("fig"), c.get("ex"), c.get("why")) == (25, 25, 10, 10, 5), "M4 only: 25 from M4, 10/10/5 %s" % c)
    page.locator("#main .box input[type=checkbox]").nth(1).check()
    # unseen first: every M4 fig question answered except three; the mock takes those three, then the two oldest
    plan = page.evaluate("""(key)=>{const S=JSON.parse(localStorage.getItem(key));S.q={};S.mock=null;
      const f=MODS[0].questions.filter(q=>q.kind==='fig');const keep=f.slice(0,3).map(q=>q.id);let t=1e12;
      const seen=f.slice(3);seen.forEach((q,i)=>{S.q[q.id]={n:1,t:t+i*1000,c:true};});
      localStorage.setItem(key,JSON.stringify(S));return {keep,oldest:seen.slice(0,2).map(q=>q.id)};}""", KEY)
    page.reload(); page.wait_for_selector("text=Start mock")
    m = start_mock(page); ids = m["ids"]
    m4fig = [i for i in ids if i in plan["keep"] or i in plan["oldest"] or page.evaluate("(id)=>MODS[0].questions.some(q=>q.id===id&&q.kind==='fig')", i)]
    check(sorted(m4fig) == sorted(plan["keep"] + plan["oldest"]), "unseen first, then the oldest answered %s" % m4fig)
    check(m["c"].get("M4 fig") == 5, "short pool still fills its share")
    page.evaluate("(key)=>{const S=JSON.parse(localStorage.getItem(key));S.q={};S.mock=null;S.hist=[];S.mocks=0;localStorage.setItem(key,JSON.stringify(S));}", KEY)
    page.reload(); page.wait_for_selector("text=Start mock")


def new_tools(page):
    """Drills m4d3, m5d1, m5d2, m5d3: each control changes the picture and the readout; each fits its card."""
    nav(page, "sheet"); page.wait_for_selector(".card.drill .rg")
    J = lambda sel, js: page.eval_on_selector(sel, "c=>{" + js + "}")
    btn = "const b=(t)=>[...c.querySelectorAll('button')].find(x=>x.textContent===t);"
    # regulators: PEP inhibits PFK-1 and activates pyruvate kinase; alanine leaves PFK-1 grey
    r = J(".card.drill .rg", btn + "b('PEP').click();const e=[...c.querySelectorAll('.rg-e')].map(x=>x.getAttribute('stroke'));return [e,c.querySelector('.out').textContent];")
    check(r[0] == ["#b42318", "#1d7a3a"] and r[1].startswith("PEP."), "regulators: PEP red on PFK-1, green on pyruvate kinase %s" % r[0])
    r = J(".card.drill .rg", btn + "b('Alanine').click();return [...c.querySelectorAll('.rg-e')].map(x=>x.getAttribute('stroke'));")
    check(r == ["#9aa3ad", "#b42318"], "regulators: alanine only on pyruvate kinase %s" % r)
    # fat types: straight chains fill the box with more molecules than kinked ones
    r = J(".card.drill .fa", btn + "const n=()=>c.querySelectorAll('svg g[transform]').length;const a=n();b('Cis').click();const k=n();b('Trans').click();return [a,k,n(),c.querySelector('.out').textContent];")
    check(r[0] > 2 * r[1] and r[2] == r[0] and r[3].startswith("Trans."), "fat types: saturated %d, cis %d, trans %d chains" % tuple(r[:3]))
    # cholesterol: the fourth arrow is step 2 in the cytosol, 3 ATP and CO2; Back and Start over work
    r = J(".card.drill .chl", btn + "for(let i=0;i<4;i++)b('Next').click();return [c.querySelector('.sm').textContent,[...c.querySelectorAll('.tal .full b')].map(x=>x.textContent)];")
    check(r[0].startswith("2. ") and "Cytosol" in r[0] and r[1] == ["3 ATP", "CO₂"], "cholesterol: step 2 in the cytosol, %s" % r[1])
    r = J(".card.drill .chl", btn + "b('Back').click();const a=[...c.querySelectorAll('.tal .full b')].map(x=>x.textContent);for(let i=0;i<4;i++)b('Next').click();return [a,c.querySelector('.sm').textContent,!!b('Start over')];")
    check(r[0] == ["NADPH"] and r[1].startswith("5. ") and "ER membrane" in r[1] and r[2], "cholesterol: Back to the reductase, end on the ER membrane")
    # lipoproteins: Step, then Play moves on by itself and the route draws in
    r = J(".card.drill .lp", btn + "b('Step').click();return c.querySelector('.out').textContent;")
    check(r.startswith("Chylomicrons."), "lipoproteins: first step is chylomicrons")
    J(".card.drill .lp", btn + "b('Play').click();")
    page.wait_for_timeout(1500)
    r = J(".card.drill .lp", "const l=c.querySelector('.lp-g[data-k=vldl] .lp-l');return [c.querySelector('.out').textContent,getComputedStyle(l).strokeDashoffset,l.getAttribute('stroke')];")
    check(r[0].startswith("VLDL.") and r[1] in ("0", "0px") and r[2] == "#1f4b8f", "lipoproteins: Play moves to VLDL and draws its route %s" % r[1:])
    J(".card.drill .lp", btn + "b('Pause').click();")
    for cls in ("rg", "fa", "chl", "lp"):
        sw = page.eval_on_selector(".card.drill ." + cls, "c=>{const k=c.closest('.card');return [k.scrollWidth,k.clientWidth];}")
        check(sw[0] <= sw[1] + 1, "%s drill fits its card (%d/%d)" % (cls, sw[0], sw[1]))
    no_hscroll(page, "guide after the drills")


def drill_link(page, vw):
    """A missed question whose lesson has a drill offers "Practice: ..." in a pop-up; a right answer doesn't."""
    nav(page, "practice")
    card = page.evaluate_handle("""()=>[...document.querySelectorAll('.plist .qcard')].find(c=>c.innerText.includes('The fasting state is also called the postprandial state'))""").as_element()
    check(card is not None, "found the m4-states T/F card")
    card.evaluate("c=>{const m=c.querySelector('.opt.mine');if(m)m.click();}")  # an earlier random mock may have answered it already
    card.evaluate("c=>[...c.querySelectorAll('.opt')].find(b=>b.textContent==='True').click()")
    link = card.query_selector(".prac")
    check(link is not None and link.inner_text().startswith("Practice: "), "missed question shows a Practice link")
    card.evaluate("c=>[...c.querySelectorAll('.opt')].find(b=>b.textContent==='False').click()")
    check(card.query_selector(".prac") is None, "a right answer shows no Practice link")
    card.evaluate("c=>[...c.querySelectorAll('.opt')].find(b=>b.textContent==='True').click()")
    card.query_selector(".prac").evaluate("e=>e.click()")
    page.wait_for_selector(".modal .gs", timeout=3000)
    check(True, "Practice link opens the drill in a pop-up")
    sw = page.evaluate("[document.querySelector('.modal .mbox').scrollWidth,document.querySelector('.modal .mbox').clientWidth]")
    check(sw[0] <= sw[1] + 1, "drill fits the pop-up (%d/%d)" % tuple(sw))
    # the slider drives the readout: 16 h shows both glycogenolysis and gluconeogenesis
    page.evaluate("()=>{const s=document.querySelector('.modal .gs input[type=range]');s.value=300;s.dispatchEvent(new Event('input'));}")
    on = page.evaluate("[...document.querySelectorAll('.modal .gs .src span.on')].map(s=>s.textContent)")
    check(on == ["Glycogenolysis", "Gluconeogenesis"] and "16 h" in page.inner_text(".modal .gs .gsrow b"), "16 h: both sources on %s" % on)
    page.evaluate("()=>{const s=document.querySelector('.modal .gs input[type=range]');s.value=900;s.dispatchEvent(new Event('input'));}")
    check(page.inner_text(".modal .gs .out").startswith("Starved."), "late on the timeline reads Starved")
    page.keyboard.press("Escape")
    check(page.query_selector(".modal") is None, "Escape closes the drill pop-up")
    page.evaluate("(k)=>{const S=JSON.parse(localStorage.getItem(k));S.q={};localStorage.setItem(k,JSON.stringify(S));}", KEY)
    page.reload(); page.wait_for_selector(".qcard")



# answers the question on screen in a one-at-a-time run, right or (miss=True) wrong, using MODS to find the key
ANSWER_JS = """(miss)=>{const v=[...document.querySelectorAll('#main .opt')],st=document.querySelector('#main .stem').innerHTML;
  const T=x=>{const d=document.createElement('div');d.innerHTML=x;return d.textContent.trim();},vt=v.map(e=>e.textContent.trim()).sort().join('|');
  let q=null;MODS.forEach(m=>m.questions.forEach(x=>{const ot=x.type==='tf'?'False|True':x.opts.map(T).sort().join('|');
    if(st.startsWith(x.stem)&&ot===vt&&(!q||x.stem.length>q.stem.length))q=x;}));
  const ans=T(q.type==='tf'?(q.ans?'True':'False'):q.opts[q.ans]);v[v.findIndex(e=>miss?e.textContent.trim()!==ans:e.textContent.trim()===ans)].click();return q.id;}"""


def practice_mode(page):
    """Multi-select objective filter (and migration of the old single value), Shuffle, Repeat missed until right."""
    nav(page, "practice")
    page.evaluate("document.querySelector('.lof').open=true")
    nq = lambda: len(page.query_selector_all(".plist .qcard"))
    by = lambda js: page.evaluate("MODS.reduce((a,m)=>a+m.questions.filter(q=>%s).length,0)" % js)
    summ = lambda: page.inner_text(".lof > summary")
    pill = lambda t: page.click(".lof button:has-text('%s')" % t)
    pill("4.2 "); check(nq() == by("q.lo==='4.2'") and summ() == "Objectives: 4.2", "LO filter: one objective (%d)" % nq())
    pill("5.2 "); check(nq() == by("q.lo==='4.2'||q.lo==='5.2'") and summ() == "Objectives: 4.2, 5.2", "LO filter: two objectives across modules")
    pill("M4: all"); check(nq() == by("q.lo[0]==='4'||q.lo==='5.2'") and summ() == "Objectives: M4, 5.2", "LO filter: module pill adds its objectives")
    pill("M4: all"); check(nq() == by("q.lo==='5.2'"), "LO filter: module pill again removes them")
    pill("5.2 "); check(nq() == by("true") and summ() == "Objectives: All", "LO filter: removing the last one goes back to all")
    # edit storage from another page on the same origin: the app saves its own state on pagehide
    page.goto(URL.rsplit("/", 1)[0] + "/lectures/biochem-exam2/m4.json")
    page.evaluate("""()=>{const s=JSON.parse(localStorage.getItem('bmsc3401-exam2'));s.set.pf.lo='mod:m5';localStorage.setItem('bmsc3401-exam2',JSON.stringify(s));}""")
    page.goto(URL + "#practice"); page.wait_for_selector(".lof")
    page.evaluate("document.querySelectorAll('.tut').forEach(t=>t.remove())")
    check(nq() == by("q.mod.id==='m5'") and summ() == "Objectives: M5", "LO filter: old saved 'mod:m5' carries over")
    check(page.evaluate("Array.isArray(JSON.parse(localStorage.getItem('bmsc3401-exam2')).set.pf.lo)"), "LO filter: saved as a list")
    page.evaluate("document.querySelector('.lof').open=true"); pill("All objectives")
    check(nq() == by("true"), "LO filter: All objectives")
    # shuffle
    ids = lambda: page.evaluate("[...document.querySelectorAll('.plist .qcard .stem')].map(e=>e.innerHTML.slice(0,50))")
    grouped = ids(); page.click(".filters button:has-text('Shuffle')"); a = ids()
    check(page.query_selector(".plist .lohead") is None and len(a) == len(grouped) and a != grouped, "Shuffle: one ungrouped random list")
    page.click(".filters button:has-text('Show all answers')"); page.click(".filters button:has-text('Show all answers')")
    nav(page, "sheet"); nav(page, "practice")
    check(ids() == a, "Shuffle: order stays through Show all answers and a tab switch")
    page.reload(); page.wait_for_selector(".plist .qcard"); page.evaluate("document.querySelectorAll('.tut').forEach(t=>t.remove())")
    check(ids() == a and page.query_selector(".shufbar") is not None, "Shuffle: order stays after a reload")
    page.click(".shufbar button:has-text('Reshuffle')"); b = ids()
    check(b != a and len(b) == len(a), "Shuffle: Reshuffle gives a new order")
    page.click(".filters button:has-text('Unanswered')"); page.click(".filters button:has-text('Unanswered')")
    check(ids() != b, "Shuffle: changing a filter reshuffles")
    page.click(".shufbar button:has-text('Back to normal order')")
    check(page.query_selector(".plist .lohead") is not None and ids() == grouped and page.query_selector(".filters .pill.on:has-text('Shuffle')") is None
          and page.query_selector(".shufbar") is None, "Shuffle: Back to normal order restores the grouped list and turns Shuffle off")
    page.click(".filters button:has-text('Shuffle')"); c = ids(); page.click(".filters button:has-text('Shuffle')")
    check(c != a and c != b and ids() == grouped, "Shuffle pill: off gives the grouped list, on again gives a new order")
    # repeat missed until right, on 4.1 (one miss, the rest right)
    page.evaluate("document.querySelector('.lof').open=true"); pill("4.1 ")
    n41 = by("q.lo==='4.1'")
    page.check(".filters .chk.rep input")
    check(page.evaluate("JSON.parse(localStorage.getItem('bmsc3401-exam2')).set.pf.rep===true"), "Repeat: checkbox saved")
    page.evaluate("[...document.querySelectorAll('.filters .btn.pri')].find(b=>b.textContent.includes('Quiz me')).click()"); page.wait_for_selector("#main .opt")
    missed = page.evaluate(ANSWER_JS, True)
    check(page.inner_text("#main .qhead span").startswith("1 / %d" % (n41 + 1)), "Repeat: a miss adds one showing (%d)" % (n41 + 1))
    again = None
    for k in range(1, n41 + 1):
        page.evaluate("document.querySelector('#main .row .btn.pri').click()"); page.wait_for_timeout(20)
        qid = page.evaluate(ANSWER_JS, False)
        if page.query_selector("#main .qhead .again"):
            again = (k, qid)
    check(again == (4, missed), "Repeat: the missed question comes back 3 later, marked Again (%s)" % (again,))
    page.evaluate("document.querySelector('#main .row .btn.pri').click()"); page.wait_for_selector("#main h1:has-text('done')")
    check("%d / %d correct on the first try" % (n41 - 1, n41) in page.inner_text("#main"), "Repeat: score counts first tries")
    check(page.query_selector("text=Retry the 1 missed") is not None, "Repeat: Retry offers the first-try miss")
    check(page.evaluate("(id)=>JSON.parse(localStorage.getItem('bmsc3401-exam2')).q[id].c", missed) is True, "Repeat: right on the second try updates the record")
    # without the checkbox a miss adds nothing
    nav(page, "practice"); page.uncheck(".filters .chk.rep input")
    page.evaluate("[...document.querySelectorAll('.filters .btn.pri')].find(b=>b.textContent.includes('Quiz me')).click()"); page.wait_for_selector("#main .opt"); page.evaluate(ANSWER_JS, True)
    check(page.inner_text("#main .qhead span").startswith("1 / %d" % n41) and page.query_selector("#main .qhead .again") is None, "Repeat off: a miss adds nothing")
    nav(page, "practice"); page.evaluate("document.querySelector('.lof').open=true"); pill("All objectives")
    nav(page, "mock"); page.wait_for_selector("text=Start mock")  # the rest of run() starts from the mock tab

def tab_spots(p, vw, vh):
    """Each of the study guide and practice keeps its own scroll spot, including when the tab is
    clicked while a trackpad flick is still sending wheel events (they must not scroll the new tab)."""
    ctx = p.chromium.launch().new_context(viewport={"width": vw, "height": vh})
    page = ctx.new_page()
    page.goto(URL + "#sheet"); page.wait_for_selector(".unit")
    page.add_style_tag(content=".tut{display:none!important}")
    page.mouse.move(vw // 2, vh // 2)
    y = lambda: page.evaluate("Math.round(scrollY)")

    def roll(dy):
        for _ in range(dy // 500):
            page.mouse.wheel(0, 500); page.wait_for_timeout(40)
        page.wait_for_timeout(500)

    def coast_to(t):
        for _ in range(8):
            page.mouse.wheel(0, 60); page.wait_for_timeout(16)
        page.evaluate("t=>document.querySelector('#nav button[data-t=\"'+t+'\"]').click()", t)
        for _ in range(30):
            page.mouse.wheel(0, 60); page.wait_for_timeout(16)
        page.wait_for_timeout(500)

    roll(5000); s = y()
    nav(page, "practice"); page.mouse.move(vw // 2, vh // 2); roll(8000); q = y()
    nav(page, "sheet"); check(y() == s, "study guide spot kept after visiting practice (%d, want %d)" % (y(), s))
    nav(page, "practice"); check(y() == q, "practice spot kept after visiting the study guide (%d, want %d)" % (y(), q))
    coast_to("sheet"); check(y() == s, "study guide does not drift when clicked mid-flick (%d, want %d)" % (y(), s))
    coast_to("practice"); check(abs(y() - (q + 480)) <= 1, "practice does not drift when clicked mid-flick (%d, want %d)" % (y(), q + 480))
    check(page.evaluate("document.documentElement.style.overflow") == "", "page scrolls again after the flick ends")
    page.wait_for_timeout(300); y0 = y(); roll(1000)
    check(y() - y0 == 1000, "a fresh scroll after switching moves the page (%d)" % (y() - y0))

    # the study guide comes back as the same page: a drill worked above the spot keeps its state and
    # height, the spot holds, and what practice changed (answered counts) is refreshed
    nav(page, "sheet")
    page.evaluate("()=>{const d=document.querySelector('.gbody .drill');d.__kept=1;[...d.querySelectorAll('button')].slice(0,3).forEach(b=>b.click());d.scrollIntoView();scrollBy(0,d.offsetHeight+2000)}")
    page.wait_for_timeout(400)
    top = "()=>{const c=[...document.querySelectorAll('.gbody .card,.gbody .uhead')].find(e=>e.getBoundingClientRect().bottom>innerHeight*0.3);return [(c.querySelector('h3,h2')||c).textContent.trim(),Math.round(c.getBoundingClientRect().top)]}"
    a = page.evaluate(top); n0 = page.evaluate("document.querySelector('.outline .oprog').textContent")
    nav(page, "practice")
    page.query_selector(".plist .qcard .opt").evaluate("e=>e.click()"); page.wait_for_timeout(200)
    nav(page, "sheet"); page.wait_for_timeout(300)
    check(page.evaluate("!!document.querySelector('.gbody .drill').__kept"), "study guide comes back as the same page (drill state kept)")
    b = page.evaluate(top)
    check(a == b, "study guide reading spot unchanged after practice (%s -> %s)" % (a, b))
    n1 = page.evaluate("document.querySelector('.outline .oprog').textContent")
    check(n1 != n0, "answered count refreshed on return (%s -> %s)" % (n0, n1))
    check(page.evaluate("!!document.querySelector('.outline a.cur')"), "outline highlight still follows the page")
    ctx.browser.close()

    # the header (title and tab buttons) sits in the same place on every tab
    ctx = p.chromium.launch().new_context(viewport={"width": vw, "height": vh})
    page = ctx.new_page(); page.goto(URL + "#mock"); page.wait_for_selector("#nav button")
    where = "[...document.querySelectorAll('.brand,#nav button')].map(e=>{const r=e.getBoundingClientRect();return [r.left,r.top,r.width].map(Math.round).join(',')}).join(' ')"
    spots = []
    for t in ("mock", "practice", "sheet", "mock"):
        page.click('#nav button[data-t="%s"]' % t); page.wait_for_timeout(150); spots.append(page.evaluate(where))
    check(len(set(spots)) == 1, "header title and tabs don't move between tabs " + ("" if len(set(spots)) == 1 else str(spots)))
    ctx.browser.close()

    # lesson figures reserve their height before (or without) loading
    ctx = p.chromium.launch().new_context(viewport={"width": vw, "height": vh})
    page = ctx.new_page(); page.route("**/*.webp", lambda r: r.abort())
    page.goto(URL + "#sheet"); page.wait_for_selector(".unit")
    hs = page.evaluate("[...document.querySelectorAll('.gbody img')].map(i=>i.getBoundingClientRect().height)")
    check(hs and min(hs) > 20, "lesson figures keep their height unloaded (%d figures, min %.0f px)" % (len(hs), min(hs) if hs else 0))
    ctx.browser.close()


def sidebar_and_counter(p, vw, vh):
    """Study guide sidebar marks the objective and lesson being read; practice cards number themselves
    within their objective, with the whole-bank answered count in the tooltip."""
    ctx = p.chromium.launch().new_context(viewport={"width": vw, "height": vh})
    page = ctx.new_page(); page.goto(URL + "#sheet"); page.wait_for_selector(".unit")
    page.add_style_tag(content=".tut{display:none!important}")
    if page.evaluate("getComputedStyle(document.querySelector('.gside')).display") != "none":
        page.mouse.move(vw // 2 + 100, vh // 2)
        for n in (8, 40, 60):
            for _ in range(n):
                page.mouse.wheel(0, 500); page.wait_for_timeout(15)
            page.wait_for_timeout(400)
            got = page.evaluate("(()=>{const a=document.querySelector('.outline a.les.cur');const c=[...document.querySelectorAll('.gbody .card[id]')].filter(c=>c.getBoundingClientRect().top<=innerHeight*0.3).pop();"
                                "return [a&&a.textContent,c&&c.querySelector('h3').textContent,document.querySelectorAll('.outline a.cur:not(.les)').length,document.querySelector('.gside').scrollTop]})()")
            check(got[0] and got[0] == got[1] and got[2] == 1 and got[3] == 0, "sidebar marks the lesson being read and doesn't scroll itself (%s)" % got)
    nav(page, "practice")
    nums = page.evaluate("[...document.querySelectorAll('.plist .qnum')].map(e=>e.textContent)")
    heads = page.evaluate("[...document.querySelectorAll('.plist .lohead .eyebrow')].map(e=>+e.textContent.split('·')[1])")
    first = nums[:heads[0]]
    check(first == ["%d/%d" % (i + 1, heads[0]) for i in range(heads[0])], "practice cards count 1..N within their objective")
    check(len(nums) == sum(heads), "every practice card has a counter (%d of %d)" % (len(nums), sum(heads)))
    page.query_selector_all(".plist .qcard")[0].query_selector(".opt").evaluate("e=>e.click()")
    q = page.query_selector_all(".plist .qnum")[1]; q.scroll_into_view_if_needed(); q.hover()
    t = q.get_attribute("title") or ""
    total = page.evaluate("document.querySelectorAll('.plist .qcard').length")
    check(t.endswith("1 of %d answered in the whole bank" % total) and t.startswith("Question 2 of %d in LO" % heads[0]), "counter tooltip: " + t)
    ctx.browser.close()


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
    # (on a phone the tutorial can sit over the first card's options; a tap on it only dismisses it)
    page.evaluate("document.querySelector('.qcard .opt').click()")
    page.evaluate("document.querySelector('.qcard .fb .rev').click()")
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
    check(all(t[:2] in ("M4", "M5") for t in tags), "only M4/M5 questions have lecture buttons (%d)" % len(btns))
    check(all(any(t.startswith(m) for t in tags) for m in ("M4", "M5")), "M4 and M5 both have lecture buttons")
    check(len(btns) == len(page.query_selector_all(".plist .qcard")), "every question has a lecture button")
    # LO label: tap shows the full objective; tapping elsewhere closes it
    lot = page.query_selector("#main .lot")
    tap(page, lot); page.wait_for_selector(".lotip", timeout=3000)
    tip = page.inner_text(".lotip")
    check(tip.startswith("LO ") and len(tip) > 20 and page.query_selector(".lw") is None, "tapping an LO label shows its full wording")
    page.mouse.click(5, vh - 5); page.wait_for_timeout(50)
    check(page.query_selector(".lotip") is None, "tapping elsewhere closes the LO popover")
    b1 = btns[tags.index("M4 L1")]
    tap(page, b1)
    page.wait_for_selector(".lw mark.lwhl", timeout=5000)
    check(page.query_selector(".tut") is None, "clicking a lecture button dismisses the tutorial")
    check("M4 L1" in page.inner_text(".lwtitle"), "window shows L1")
    page.wait_for_timeout(200)
    check(mark_visible(page), "highlight scrolled into view (L1)")
    check(len(page.query_selector_all(".lw .lwb")) == 47, "whole lesson rendered (47 blocks)")
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
    l4 = [b for b, t in zip(btns, tags) if t == "M4 L4"]
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
    check(t1 != t2 and len(page.query_selector_all(".lw .lwb")) == 31, "same-lesson click just moves the highlight")
    check(mark_visible(page), "moved highlight in view")


    # lecture wording note opens the study-guide note on top
    page.click(".lw .lwnote button >> nth=0")
    check(page.query_selector(".modal .call.note") is not None, "Lecture wording link opens the note")
    page.keyboard.press("Escape")
    check(page.query_selector(".modal") is None and page.query_selector(".lw") is not None, "Escape closes the note, window stays")
    # desktop: Practice sits left of center, leaving the window's default spot free; opening/closing moves nothing
    if not phone:
        lw, mn = rect(page, ".lw"), rect(page, "main")
        check(mn["x"] + mn["width"] <= lw["x"] + 1, "page column leaves room for the lecture window")
        page.keyboard.press("Escape"); page.wait_for_timeout(50)
        check(abs(rect(page, "main")["x"] - mn["x"]) < 1, "closing the window doesn't move the page column")
    # a list of snippets: m5c21 (palmitate synthesis) marks all three amounts
    page.evaluate("""()=>{let e=[...document.querySelectorAll('.stem')].find(s=>s.textContent.includes('synthesis of one palmitate require'));
      while(e&&!e.querySelector('.lecb'))e=e.parentElement;e.querySelector('.lecb').click();}""")
    page.wait_for_function("document.querySelectorAll('.lw mark.lwhl').length>=3", timeout=5000)
    marks = page.evaluate("[...document.querySelectorAll('.lw mark.lwhl')].map(m=>m.textContent).join(' ')")
    check(all(w in marks for w in ("8 molecules of Acetyl-CoA", "7 molecules of ATP", "14 molecules of NADPH")), "multi-snippet highlight (m5c21)")

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
    nd = page.evaluate("MODS.reduce((a,m)=>a+(m.drills||[]).length,0)")
    check(n == nd, "opened %d of %d drills" % (n, nd))

    # quiz me one at a time: button live before and after answering; Next closes the window
    nav(page, "practice")
    page.click("text=Quiz me one at a time"); page.wait_for_selector("#main .opt")
    seen = opened = 0
    for _ in range(6):
        b = page.query_selector("#main .qhead .lecb")
        if b:
            seen += 1
            check(not b.is_disabled(), "quiz: lecture button clickable before answering")
        page.click("#main .opt >> nth=0"); page.wait_for_timeout(50)
        b = page.query_selector("#main .qhead .lecb")
        if b:
            check(not b.is_disabled(), "quiz: lecture button clickable after answering")
            if not opened:
                tap(page, b); page.wait_for_selector(".lw mark.lwhl, .lw .lwhit", timeout=5000); opened = 1
        tap(page, page.query_selector("#main .row .btn.pri")); page.wait_for_timeout(50)
        check(page.query_selector(".lw") is None, "quiz: next question closes the lecture window")
    check(seen > 0 and opened, "quiz showed and opened lecture buttons (%d of 6)" % seen)
    stem = page.inner_text("#main .stem"); page.click("#main .row button:has-text('Back')"); page.wait_for_timeout(50)
    check(page.inner_text("#main .stem") != stem and page.query_selector("#main .fb") is not None
          and page.query_selector("#main .opt:not([disabled])") is None, "quiz: Back shows the previous question answered and locked")
    page.click("#main .row .btn.pri"); page.wait_for_timeout(50)
    check(page.inner_text("#main .stem") == stem and page.query_selector("#main .fb") is None, "quiz: Next returns to the unanswered question")

    # window closes on tab switch; hidden during an active mock
    nav(page, "practice")
    page.query_selector(".lecb").click(); page.wait_for_selector(".lw")
    nav(page, "mock")
    check(page.query_selector(".lw") is None, "tab switch closes the window")
    # instant feedback (default): button greyed until answered, then opens the lecture; Next closes the window
    page.click("text=Start mock")
    page.wait_for_selector("#main .opt")
    seen = opened = 0
    for _ in range(4):
        b = page.query_selector("#main .qhead .lecb")
        if b:
            seen += 1
            check(b.is_disabled(), "mock lecture button greyed before answering")
        page.click("#main .opt >> nth=0"); page.wait_for_timeout(50)
        check(page.query_selector("#main .prac") is None, "no Practice link during a mock")
        b = page.query_selector("#main .qhead .lecb")
        if b:
            check(not b.is_disabled(), "mock lecture button clickable after answering")
            if not opened:
                tap(page, b); page.wait_for_selector(".lw mark.lwhl, .lw .lwhit", timeout=5000)
                opened = 1; check(True, "lecture opens from a mock question with feedback")
        tap(page, page.query_selector("#main .row .btn.pri")); page.wait_for_timeout(50)
        check(page.query_selector(".lw") is None, "next question closes the lecture window")
    check(seen > 0, "mock showed lecture buttons (%d of 4 questions)" % seen)
    page.click("#main .row button:has-text('Back')"); page.wait_for_timeout(50)
    check(page.query_selector("#main .fb") is not None and page.query_selector("#main .opt:not([disabled])") is None, "mock (feedback): Back shows the previous question locked with feedback")
    page.click("#main .row .btn.pri"); page.wait_for_timeout(50)
    nav(page, "sheet"); nav(page, "mock")
    check("Mock" in page.inner_text(".qhead") and "5 / " in page.inner_text(".qhead"), "mock resumes after tab switch")
    page.reload(); page.wait_for_selector("#main .opt")
    check("5 / " in page.inner_text(".qhead"), "mock resumes after reload")
    q = page.locator("text=Quit"); q.click(); q.click()
    page.wait_for_selector("text=Start mock")
    check(page.query_selector(".qhead") is None, "quit returns to mock start")

    # feedback at the end: no lecture button during the mock, even after answering
    page.click("text=At the end"); page.click("text=Start mock"); page.wait_for_selector("#main .opt")
    none = True
    for _ in range(4):
        none = none and page.query_selector("#main .lecb") is None
        page.click("#main .opt >> nth=0"); page.wait_for_timeout(50)
        none = none and page.query_selector("#main .lecb") is None
        page.click("#main .row .btn.pri"); page.wait_for_timeout(50)
    check(none, "no-feedback mock: no lecture button until results")
    q = page.locator("text=Quit"); q.click(); q.click()
    page.wait_for_selector("text=Start mock")
    page.click("text=After each question")

    drill_link(page, vw)
    new_tools(page)
    mock_mix(page)
    practice_mode(page)

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

    tab_spots(p, vw, vh)
    sidebar_and_counter(p, vw, vh)

    check(not errs, "no page errors " + ("" if not errs else str(errs[:3])))
    check(not bad_req, "no failed local requests " + ("" if not bad_req else str(bad_req[:3])))
    br.close()


if __name__ == "__main__":
    srv = serve()
    with sync_playwright() as p:
        run(p, "desktop", 1280, 800)
        run(p, "mobile", 390, 844)
    srv.shutdown()
    built = open(os.path.join(ROOT, "biochem-exam2.html"), encoding="utf-8").read()
    check(built.count("—") == 0, "no em dashes in built file")
    here = os.path.join(ROOT, "src", "biochem-exam2")
    for v in ("validate_hl.js", "validate_lec.js", "validate_inv.js"):
        check(subprocess.run(["node", os.path.join("tests", v)], cwd=here).returncode == 0, v)
    print("\n%d failure(s)" % len(fails))
    sys.exit(1 if fails else 0)
