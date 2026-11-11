const ORDER = Object.keys(TOPICS);
const MOCK_M = {3:0,4:0}; ORDER.forEach(t => MOCK_M[TOPICS[t].m] += TOPICS[t].quota); const MOCK_N = MOCK_M[3] + MOCK_M[4];
const _n = {};
BANK.forEach(q => { _n[q.t] = (_n[q.t] || 0) + 1; q.id = q.t + '-' + _n[q.t]; if (q.type === 'mc') q.ans = 0; });
const QBYID = Object.fromEntries(BANK.map(q => [q.id, q]));

// storage
const KEY = 'bmsc3324_exam2_v1';
let S = { seen: {}, wrong: {}, mocks: [], cur: null, known: {}, view: 'mock' };
try { const r = localStorage.getItem(KEY); if (r) S = Object.assign(S, JSON.parse(r)); } catch (e) { }
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { } };

const img = k => IMG[k] ? `<img class="fig" src="${IMG[k]}" alt="Figure for this question. Tap to enlarge." onclick="zoom(this.src)">` : '';
function zoom(src) { const z = $('#zoom'); z.innerHTML = `<img src="${src}" alt="">`; z.hidden = false; }
const sheetHTML = t => SHEET[t].replace(/@(o_\w+)/g, (m, k) => IMG[k] || '');

// ---------- nav ----------
// remember where you were on each tab
const SCROLL = {}; let CUR_VIEW = null; let MOCK_SCREEN = 'home';
function go(v) {
  if (CUR_VIEW) SCROLL[CUR_VIEW] = window.scrollY;
  CUR_VIEW = v; S.view = v; save(); stopTimer();
  document.querySelectorAll('nav button').forEach(b => b.classList.toggle('on', b.dataset.v === v));
  if (v === 'cards') { if (QZ) drawQuiz(); else cardsView(); }
  else if (v === 'mock') { if (S.cur && MOCK_SCREEN === 'q') showQ(); else if (S.cur && MOCK_SCREEN === 'res') finish(); else mockHome(); }
  else sheetView();
  const y = SCROLL[v] || 0; window.scrollTo(0, y); requestAnimationFrame(() => window.scrollTo(0, y));
}

// ---------- option order ----------
function optOrder(q, seed) {
  const idx = q.o.map((_, i) => i);
  if (q.type === 'tf') return idx;
  if (q.o.every(s => s.length <= 2)) return idx.sort((a, b) => q.o[a].localeCompare(q.o[b]));
  return shuffle(idx, seed + q.id);
}

// ---------- mock / practice ----------
function pickFrom(pool, n, tbLeft) {
  const r = rng(Date.now() + ':' + pool.length);
  const ranked = pool.map(q => [S.seen[q.id] || 0, r(), q]).sort((a, b) => a[0] - b[0] || a[1] - b[1]).map(x => x[2]);
  const out = [];
  for (const q of ranked) {
    if (out.length >= n) break;
    if (q.tb && tbLeft.n <= 0) continue;
    if (q.tb) tbLeft.n--;
    out.push(q);
  }
  return out;
}
function buildMock() {
  const tbLeft = { n: 1 }; const m1 = [], m2 = [];
  ORDER.forEach(t => { const got = pickFrom(BANK.filter(q => q.t === t), TOPICS[t].quota, tbLeft); (TOPICS[t].m === 3 ? m1 : m2).push(...got); });
  const seed = Date.now();
  return shuffle(m1, seed).concat(shuffle(m2, seed + 1)).map(q => q.id);
}
function startRun(mode, ids, label, timed) {
  const seed = String(Date.now());
  S.cur = { mode, label, ids, i: 0, picks: {}, seed, timed: !!timed, start: Date.now() };
  save(); showQ();
}

let timerH = null;
function stopTimer() { if (timerH) { clearInterval(timerH); timerH = null; } }
function tick() {
  const el = $('#timer'); if (!el || !S.cur) return;
  const left = 47 * 60 - Math.floor((Date.now() - S.cur.start) / 1000);
  el.textContent = left > 0 ? `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')} left` : 'Time is up';
  el.classList.toggle('late', left <= 300);
}

S.ql = Object.assign({ open: false, filt: 'all' }, S.ql || {});
function qlItems() {
  const f = S.ql.filt;
  return BANK.filter(q => f === 'all' || (f === 'm3' && q.t.startsWith('m3')) || (f === 'm4' && q.t.startsWith('m4')) || q.t === f)
    .sort((a, b) => ORDER.indexOf(a.t) - ORDER.indexOf(b.t));
}
function drawQList() {
  const h = $('#qlh'), box = $('#qlist'); if (!h || !box) return;
  const items = qlItems();
  h.innerHTML = `${S.ql.open ? 'Hide questions' : 'See all questions'} (${items.length}) <span class="chev ${S.ql.open ? 'up' : ''}">⌄</span>`;
  h.setAttribute('aria-expanded', S.ql.open);
  if (!S.ql.open) { box.innerHTML = ''; return; }
  let last = null;
  box.innerHTML = items.map((q, n) => {
    const head = q.t !== last ? `<h3 class="qlsec">M${TOPICS[q.t].m}: ${esc(TOPICS[q.t].name)}</h3>` : ''; last = q.t;
    const order = optOrder(q, 'list');
    return `${head}<div class="qli"><p class="stem">${esc(q.q)}${q.tb ? ' <span class="tbm">textbook</span>' : ''}</p>
      ${q.fig ? img(q.fig) : ''}
      <ul class="qlo">${order.map(i => `<li class="${i === q.ans ? 'ok' : ''}">${i === q.ans ? '<span class="ck" aria-label="Correct answer">✓</span>' : ''}${esc(q.o[i])}</li>`).join('')}</ul>
      <p class="sm mut">${esc(q.type === 'tf' ? q.ex.replace(/^(True|False)[.,] (it is the reverse\. )?/, '') : q.ex)} <a href="#" onclick="peek('${peekTopic(q)}','${q.id}');return false">Review</a></p></div>`;
  }).join('');
}
function mockHome() {
  MOCK_SCREEN = 'home';
  const c = S.cur;
  const seenN = BANK.filter(q => S.seen[q.id]).length;
  const wrongN = Object.keys(S.wrong).length;
  const last = S.mocks.slice(-5).map(m => `${m.score}/${m.n}`).join(', ');
  $('#app').innerHTML = `
  <h1>Mock exam</h1>
  <p class="mut">${MOCK_N} questions: ${MOCK_M[3]} from Module 3, ${MOCK_M[4]} from Module 4. Unseen questions come first.</p>
  ${c ? `<div class="box"><p>Unfinished: ${esc(c.label)}, question ${Math.min(c.i + 1, c.ids.length)} of ${c.ids.length}.</p>
    <div class="row"><button class="btn pri" onclick="showQ()">Resume</button><button class="btn" onclick="S.cur=null;save();mockHome()">Discard</button></div></div>` : ''}
  <div class="row"><button class="btn ${c ? '' : 'pri'}" id="startMock">${c ? 'Discard and start new mock' : 'Start mock'}</button>
  <label class="chk"><input type="checkbox" id="timed" checked> 47-minute timer</label></div>
  <p class="mut sm">${S.mocks.length ? `Recent scores: ${last}. ` : ''}Questions seen: ${seenN} of ${BANK.length}.</p>
  <h2>Practice</h2>
  <div class="row"><select id="sec">${ORDER.map(t => `<option value="${t}">M${TOPICS[t].m}: ${TOPICS[t].name} · ${BANK.filter(q => q.t === t).length} questions</option>`).join('')}</select>
  <button class="btn" id="startSec">Practice section</button></div>
  <div class="row"><button class="btn" id="startWrong" ${wrongN ? '' : 'disabled'}>Missed questions (${wrongN})</button></div>
  <button class="tlh" id="qlh"></button>
  <div id="qlf" ${S.ql.open ? '' : 'hidden'}><select id="qls" aria-label="Filter questions by section"><option value="all">All sections</option><option value="m3">Module 3</option><option value="m4">Module 4</option>
    ${ORDER.map(t => `<option value="${t}">M${TOPICS[t].m}: ${TOPICS[t].name}</option>`).join('')}</select></div>
  <div id="qlist"></div>
  <p class="sm mut"><a href="#" id="reset" class="quiet">Reset progress</a> · v1.0</p>`;
  $('#startMock').onclick = () => startRun('mock', buildMock(), 'Mock exam', $('#timed').checked);
  $('#startSec').onclick = () => { const t = $('#sec').value; startRun('sec', pickFrom(BANK.filter(q => q.t === t), 999, { n: 99 }).map(q => q.id), TOPICS[t].name); };
  $('#qls').value = S.ql.filt;
  $('#qls').onchange = e => { S.ql.filt = e.target.value; save(); drawQList(); };
  $('#qlh').onclick = () => { S.ql.open = !S.ql.open; save(); $('#qlf').hidden = !S.ql.open; drawQList(); };
  drawQList();
  $('#startWrong').onclick = () => startRun('wrong', shuffle(Object.keys(S.wrong).filter(id => QBYID[id])), 'Missed questions');
  $('#reset').onclick = e => { e.preventDefault(); if (confirm('Erase all scores and flashcard progress?')) { S = { seen: {}, wrong: {}, mocks: [], cur: null, known: {}, mark: {}, fc: S.fc, view: 'mock' }; save(); mockHome(); } };
}

function showQ() {
  MOCK_SCREEN = 'q';
  const c = S.cur; if (!c) return mockHome();
  if (c.i >= c.ids.length) return finish();
  const q = QBYID[c.ids[c.i]];
  if (!q) { c.i++; save(); return showQ(); }
  const order = optOrder(q, c.seed);
  const picked = c.picks[q.id];
  const done = picked !== undefined;
  $('#app').innerHTML = `
  <div class="qhead"><span>${esc(c.label)} · ${c.i + 1} of ${c.ids.length}</span>${c.timed ? '<span id="timer"></span>' : ''}</div>
  <div class="bar"><i style="width:${(c.i / c.ids.length) * 100}%"></i></div>
  <p class="stem">${esc(q.q)}${q.tb ? ' <span class="tbm">textbook</span>' : ''}</p>
  ${q.fig ? img(q.fig) : ''}
  <div class="opts">${order.map(i => {
    let cls = 'opt';
    if (done) { if (i === q.ans) cls += ' right'; else if (i === picked) cls += ' wrongpick'; }
    return `<button class="${cls}" data-i="${i}" ${done ? 'disabled' : ''}>${esc(q.o[i])}</button>`;
  }).join('')}</div>
  <div id="fb">${done ? fb(q, picked) : ''}</div>
  <div class="row nav2">
    <button class="btn" onclick="prevQ()" ${c.i ? '' : 'disabled'}>Back</button>
    <button class="btn ${done ? 'pri' : ''}" id="next" onclick="nextQ()">${c.i === c.ids.length - 1 ? 'Finish' : done ? 'Next' : 'Skip'}</button>
    <button class="btn link" onclick="stopTimer();mockHome();window.scrollTo(0,0)">Exit</button>
  </div>`;
  document.querySelectorAll('.opt').forEach(b => b.onclick = () => answer(q, +b.dataset.i));
  stopTimer(); if (c.timed) { tick(); timerH = setInterval(tick, 1000); }
}
function fb(q, picked) {
  const ok = picked === q.ans;
  return `<div class="fb ${ok ? 'ok' : 'bad'}"><b>${ok ? 'Correct.' : 'Incorrect.'}</b>${ok ? '' : ` Answer: ${esc(q.o[q.ans])}.`}
  <p>${esc(q.type === 'tf' ? q.ex.replace(/^(True|False)[.,] (it is the reverse\. )?/, '') : q.ex)}</p><a href="#" onclick="peek('${peekTopic(q)}','${q.id}');return false">Review: ${esc(TOPICS[peekTopic(q)].name)}</a></div>`;
}
function answer(q, i) {
  const c = S.cur; if (c.picks[q.id] !== undefined) return;
  c.picks[q.id] = i;
  S.seen[q.id] = (S.seen[q.id] || 0) + 1;
  if (i === q.ans) delete S.wrong[q.id]; else S.wrong[q.id] = 1;
  save(); showQ();
  const f = $('#fb'); if (f && f.getBoundingClientRect().bottom > window.innerHeight) f.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}
function nextQ() { S.cur.i++; save(); window.scrollTo(0, 0); showQ(); }
function prevQ() { if (S.cur.i > 0) { S.cur.i--; save(); window.scrollTo(0, 0); showQ(); } }

function finish() {
  MOCK_SCREEN = 'res';
  stopTimer();
  const c = S.cur; const qs = c.ids.map(id => QBYID[id]).filter(Boolean);
  const score = qs.filter(q => c.picks[q.id] === q.ans).length;
  if (c.mode === 'mock' && !c.logged) { S.mocks.push({ score, n: qs.length, d: Date.now() }); c.logged = 1; }
  const by = {};
  qs.forEach(q => { by[q.t] = by[q.t] || [0, 0]; by[q.t][1]++; if (c.picks[q.id] === q.ans) by[q.t][0]++; });
  const missed = qs.filter(q => c.picks[q.id] !== q.ans);
  const mins = Math.round((Date.now() - c.start) / 60000);
  save();
  $('#app').innerHTML = `
  <h1>${esc(c.label)}: ${score}/${qs.length} correct (${Math.round(score / qs.length * 100)}%)</h1>
  ${c.mode === 'mock' ? `<p class="mut">Time: ${mins < 1 ? 'under 1 min' : mins + ' min'}</p>` : ''}
  <table class="res"><tr><th>Section</th><th>Score</th></tr>
  ${ORDER.filter(t => by[t]).map(t => `<tr class="${by[t][0] / by[t][1] < 0.5 ? 'lo' : ''}"><td><a href="#" onclick="peek('${t}');return false">${esc(TOPICS[t].name)}</a></td><td>${by[t][0]}/${by[t][1]}</td></tr>`).join('')}</table>
  <div class="row"><button class="btn pri" onclick="S.cur=null;save();go('mock')">Done</button>
  ${missed.length ? `<button class="btn" onclick="startRun('wrong',[${missed.map(q => `'${q.id}'`).join(',')}],'Missed questions')">Retry missed (${missed.length})</button>` : ''}</div>
  ${missed.length ? `<h2>Missed questions</h2>${missed.map(q => `<div class="miss"><p class="stem">${esc(q.q)}</p>
    ${q.fig ? img(q.fig) : ''}
    <p class="sm">Your answer: ${c.picks[q.id] === undefined ? '(none)' : esc(q.o[c.picks[q.id]])}<br>Correct: <b>${esc(q.o[q.ans])}</b></p><p class="sm mut">${esc(q.type === 'tf' ? q.ex.replace(/^(True|False)[.,] (it is the reverse\. )?/, '') : q.ex)} <a href="#" onclick="peek('${peekTopic(q)}','${q.id}');return false">Review</a></p></div>`).join('')}` : ''}`;
  window.scrollTo(0, 0);
}

// ---------- peek panel ----------
// ---------- review highlight: find the cheat-sheet line that answers a question ----------
const STOP = new Set('a an the and or of to in on for by with is are was were be been it its this that these those as at from into than then so such not no can may might will would which what who whom whose when where why how most more less very also only both each other their there they them he she his her we you your our i do does did done has have had about after before over under between during while if but because via vs per e g eg one two three four five'.split(' '));
function toks(str) {
  return String(str).toLowerCase().replace(/<[^>]+>/g, ' ').replace(/[’']s\b/g, '').replace(/[^a-z0-9%]+/g, ' ').split(' ')
    .filter(w => w.length > 1 && !STOP.has(w)).map(w => w.length > 4 ? w.replace(/(ing|ed|es|s)$/, '') : w);
}
function chunksOf(root) {
  const out = [];
  root.querySelectorAll('dt').forEach(dt => { const els = [dt]; let n = dt.nextElementSibling; while (n && n.tagName === 'DD') { els.push(n); n = n.nextElementSibling; } out.push(els); });
  root.querySelectorAll('tr').forEach(tr => { if (!tr.querySelector('th')) out.push([tr]); });
  root.querySelectorAll('li, p').forEach(el => out.push([el]));
  return out.map(els => {
    const txt = els.map(e => { const c = e.cloneNode(true); if (e.tagName === 'DD') c.querySelectorAll('li').forEach(li => li.remove()); return c.textContent; }).join(' ');
    return { els, t: toks(txt) };
  }).filter(c => c.t.length);
}
let IDF = null;
function buildIDF() {
  const df = {}; let n = 0;
  ORDER.forEach(t => { const d = document.createElement('div'); d.innerHTML = SHEET[t].replace(/@(o_\w+)/g, ''); chunksOf(d).forEach(c => { n++; new Set(c.t).forEach(w => df[w] = (df[w] || 0) + 1); }); });
  IDF = w => Math.log((n + 1) / ((df[w] || 0) + 0.5));
}
const ovrOf = q => HL_OVR.find(o => q.q.startsWith(o[0]));
const peekTopic = q => { const o = ovrOf(q); return (o && o[1]) || q.t; };
function bestChunks(root, q) {
  const o = ovrOf(q);
  if (o) { const c = chunksOf(root).find(c => c.els.map(e => e.textContent).join(' ').replace(/\s+/g, ' ').includes(o[2])); if (c) return [c]; }
  if (!IDF) buildIDF();
  const qw = {};
  toks(q.o[q.ans] + ' ' + q.ex).forEach(w => qw[w] = Math.max(qw[w] || 0, 1));
  if (q.type === 'tf') toks(q.q).forEach(w => qw[w] = Math.max(qw[w] || 0, 0.6)); else toks(q.q).forEach(w => qw[w] = Math.max(qw[w] || 0, 0.5));
  ['true', 'false', 'answer'].forEach(w => delete qw[w]);
  const cs = chunksOf(root).map(c => { const set = new Set(c.t); let sc = 0; set.forEach(w => { if (qw[w]) sc += qw[w] * IDF(w); }); return { c, sc: sc / Math.pow(set.size, 0.35) }; })
    .sort((a, b) => b.sc - a.sc);
  if (!cs.length || cs[0].sc <= 0) return [];
  const pick = [cs[0].c];
  if (cs[1] && cs[1].sc >= cs[0].sc * 0.9) pick.push(cs[1].c);
  return pick;
}
function peek(t, qid) {
  const p = $('#peek');
  p.innerHTML = `<div class="pk"><div class="pkh"><b>${esc(TOPICS[t].name)}</b><button class="btn" onclick="closePeek()">Close</button></div><div class="sheet" id="pks">${sheetHTML(t)}</div></div>`;
  p.hidden = false; document.body.classList.add('noscroll'); p.scrollTop = 0;
  const q = qid && QBYID[qid]; if (!q) return;
  const hits = bestChunks($('#pks'), q);
  hits.forEach(c => c.els.forEach(e => e.classList.add('hl')));
  if (hits.length) { const first = hits[0].els[0]; requestAnimationFrame(() => { const r = first.getBoundingClientRect(); p.scrollTop += r.top - p.clientHeight * 0.3; }); }
}
function closePeek() { $('#peek').hidden = true; document.body.classList.remove('noscroll'); }

// ---------- flashcards ----------
if (!S.mark) { S.mark = {}; Object.keys(S.known || {}).forEach(k => S.mark[k] = 'got'); }
S.fc = Object.assign({ filt: 'all', hideGot: false, blue: false, open: false, defFirst: true, qn: '20' }, S.fc || {});
if (!S.fc.df2) { S.fc.defFirst = true; S.fc.df2 = 1; save(); }
let QZ = null;
let FC = { list: [], i: 0, flip: false, built: false };
function cardKey(c) { return c[2] + '|' + c[0]; }
const markOf = c => S.mark[cardKey(c)];
function fcBuild() {
  const f = S.fc.filt;
  let l = CARDS.filter(c => f === 'all' || (f === 'm3' && c[2].startsWith('m3')) || (f === 'm4' && c[2].startsWith('m4')) || c[2] === f);
  if (S.fc.blue) l = l.filter(c => c[3].includes('b'));
  if (S.fc.hideGot) l = l.filter(c => markOf(c) !== 'got');
  FC.list = l; FC.i = 0; FC.flip = false; FC.built = true;
}
function cardsView() {
  if (!FC.built) fcBuild();
  $('#app').innerHTML = `
  <div class="row ctl"><select id="ff">
    <option value="all">All sections</option><option value="m3">Module 3</option><option value="m4">Module 4</option>
    ${ORDER.map(t => `<option value="${t}">M${TOPICS[t].m}: ${TOPICS[t].name}</option>`).join('')}</select></div>
  <div class="row ctl2">
    <label class="chk"><input type="checkbox" id="fb" ${S.fc.blue ? 'checked' : ''}> Blue terms only</label>
    <label class="chk"><input type="checkbox" id="fn" ${S.fc.hideGot ? 'checked' : ''}> Hide "got it"</label>
    <label class="chk"><input type="checkbox" id="fd" ${S.fc.defFirst ? 'checked' : ''}> Definition first</label></div>
  <div class="row ctl3"><button class="btn" id="fs">Shuffle</button>
    <span class="qz"><button class="btn" id="fq">Quiz</button><select id="fqn" aria-label="Quiz length"><option value="10">10</option><option value="20">20</option><option value="all">All</option></select></span></div>
  <div id="cardwrap"></div>
  <p class="mut sm" id="knownN"></p><p class="mut sm kbd">Space to flip, ← → to move</p>
  <button class="tlh" id="tlh" aria-expanded="${S.fc.open}"></button>
  <div id="terms" ${S.fc.open ? '' : 'hidden'}></div>`;
  $('#ff').value = S.fc.filt;
  $('#ff').onchange = e => { S.fc.filt = e.target.value; save(); fcBuild(); cardsView(); };
  $('#fb').onchange = e => { S.fc.blue = e.target.checked; save(); fcBuild(); cardsView(); };
  $('#fn').onchange = e => { S.fc.hideGot = e.target.checked; save(); fcBuild(); cardsView(); };
  $('#fs').onclick = () => { FC.list = shuffle(FC.list); FC.i = 0; FC.flip = false; drawCard(); drawTerms(); };
  $('#fd').onchange = e => { S.fc.defFirst = e.target.checked; save(); FC.flip = false; drawCard(); };
  $('#fqn').value = S.fc.qn; $('#fqn').onchange = e => { S.fc.qn = e.target.value; save(); };
  $('#fq').onclick = () => startQuiz(FC.list.slice());
  $('#tlh').onclick = () => { S.fc.open = !S.fc.open; save(); $('#terms').hidden = !S.fc.open; drawTerms(); };
  drawCard(); drawTerms();
}
const tag = m => m === 'got' ? '<span class="tk got">got it</span>' : m === 'unsure' ? '<span class="tk uns">unsure</span>' : '';
function drawTerms() {
  const t = $('#terms'); if (!t) return;
  $('#tlh').innerHTML = `${S.fc.open ? 'Hide terms' : 'See all terms'} (${FC.list.length}) <span class="chev ${S.fc.open ? 'up' : ''}">⌄</span>`;
  $('#tlh').setAttribute('aria-expanded', S.fc.open);
  const got = CARDS.filter(c => markOf(c) === 'got').length, uns = CARDS.filter(c => markOf(c) === 'unsure').length;
  $('#knownN').textContent = `${CARDS.length} cards · ${got} got it · ${uns} unsure`;
  if (!S.fc.open) { t.innerHTML = ''; return; }
  t.innerHTML = FC.list.map((c, i) => `<button class="term ${i === FC.i ? 'cur' : ''}" data-i="${i}">
    <span class="tt ${c[3].includes('b') ? 'bt' : ''}">${esc(c[0])}${c[3].includes('t') ? ' <span class="tbm">textbook</span>' : ''}</span>
    <span class="td">${esc(c[1])}</span>${tag(markOf(c))}</button>`).join('');
  t.querySelectorAll('.term').forEach(b => b.onclick = () => { FC.i = +b.dataset.i; FC.flip = false; drawCard(); $('#cardwrap').scrollIntoView({ block: 'center', behavior: 'smooth' }); });
}
function cardFig(front) {
  const cf = CARDFIG[front]; if (!cf || !IMG[cf.f]) return '';
  const el = cf.r.map(r => r[0] === 'r' || r[0] === 'rn'
    ? `<rect class="hl-label ${r[0] === 'rn' ? 'on-color' : ''}" x="${r[1]}" y="${r[2]}" width="${r[3]}" height="${r[4]}" rx="1" vector-effect="non-scaling-stroke"/>`
    : `<ellipse class="hi" cx="${r[0]}" cy="${r[1]}" rx="${r[2] * 1.05}" ry="${r[3] * 1.05}" filter="url(#soft)" vector-effect="non-scaling-stroke"/>`).join('');
  return `<span class="cfig"><img src="${IMG[cf.f]}" alt="Diagram for ${esc(front)}">${el ? `<svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><defs><filter id="soft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="0.35"/></filter></defs>${el}</svg>` : ''}</span>`;
}
function drawCard() {
  const w = $('#cardwrap'); if (!w) return;
  if (!FC.list.length) { w.innerHTML = `<div class="card empty">No cards in this set.</div>`; return; }
  const c = FC.list[FC.i]; const m = markOf(c);
  const showTerm = FC.flip ? S.fc.defFirst : !S.fc.defFirst;
  w.innerHTML = `
  <button class="card ${FC.flip ? 'back' : ''}" id="card">
    <span class="cmeta"><span>${FC.flip && !S.fc.defFirst ? esc(c[0]) : esc(TOPICS[c[2]].name)}${c[3].includes('t') ? ' · textbook' : ''}${m ? ' · ' + (m === 'got' ? 'got it' : 'unsure') : ''}</span><span>${FC.i + 1} of ${FC.list.length}</span></span>
    <span class="ctext ${showTerm && c[3].includes('b') ? 'bt' : ''}">${esc(showTerm ? c[0] : c[1])}</span>
    ${FC.flip && c[4] ? `<span class="ctx"><b>In context:</b> ${esc(c[4])}</span>` : ''}
    ${FC.flip ? cardFig(c[0]) : ''}
  </button>
  <div class="row cnav"><button class="btn ${m === 'unsure' ? 'on' : ''}" id="cno">Unsure</button><button class="btn pri" id="cyes">Got it</button>
  <button class="btn arr" id="cp" aria-label="Previous card">‹</button><button class="btn arr" id="cn" aria-label="Next card">›</button></div>`;
  $('#card').onclick = () => { FC.flip = !FC.flip; drawCard(); };
  $('#cp').onclick = () => fcMove(-1); $('#cn').onclick = () => fcMove(1);
  $('#cyes').onclick = () => { S.mark[cardKey(c)] = 'got'; save(); fcAfterMark(); drawTerms(); };
  $('#cno').onclick = () => { S.mark[cardKey(c)] = 'unsure'; save(); fcMove(1); drawTerms(); };
  document.querySelectorAll('.term').forEach(b => b.classList.toggle('cur', +b.dataset.i === FC.i));
}
function fcAfterMark() { if (S.fc.hideGot) { FC.list.splice(FC.i, 1); if (FC.i >= FC.list.length) FC.i = 0; FC.flip = false; drawCard(); } else fcMove(1); }
function fcMove(d) { if (!FC.list.length) return; FC.i = (FC.i + d + FC.list.length) % FC.list.length; FC.flip = false; drawCard(); document.querySelectorAll('.term').forEach(b => b.classList.toggle('cur', +b.dataset.i === FC.i)); }
// ---------- flashcard quiz (multiple choice from the current deck) ----------
const GROUP_OF = {}; Object.entries(QZ_GROUPS).forEach(([g, ts]) => ts.forEach(t => GROUP_OF[t] = g));
const groupOf = t => GROUP_OF[t] || null;
function qzOptions(c, pool, askTerm) {
  const val = x => askTerm ? x[1] : x[0];
  const seen = new Set([val(c)]); const picks = [];
  const g = groupOf(c[0]);
  const tiers = [g ? CARDS.filter(x => groupOf(x[0]) === g) : [], CARDS.filter(x => x[2] === c[2]), CARDS.filter(x => x[2].slice(0, 2) === c[2].slice(0, 2)), CARDS];
  for (const tier of tiers) {
    for (const x of shuffle(tier)) { if (picks.length >= 3) break; const v = val(x); if (x !== c && !seen.has(v)) { seen.add(v); picks.push(x); } }
    if (picks.length >= 3) break;
  }
  return shuffle([c, ...picks]);
}
function startQuiz(pool) {
  if (!pool.length) return;
  const n = S.fc.qn === 'all' ? pool.length : Math.min(+S.fc.qn, pool.length);
  const askTerm = !S.fc.defFirst; // term shown -> pick the definition; definition shown -> pick the term
  const items = shuffle(pool).slice(0, n).map(c => ({ c, opts: qzOptions(c, pool, askTerm), pick: null }));
  QZ = { items, i: 0, askTerm }; window.scrollTo(0, 0); drawQuiz();
}
function drawQuiz() {
  const it = QZ.items[QZ.i]; if (!it) return quizDone();
  const done = it.pick !== null; const ok = done && it.opts[it.pick] === it.c;
  const prompt = QZ.askTerm ? it.c[0] : it.c[1];
  const optTxt = x => QZ.askTerm ? x[1] : x[0];
  $('#app').innerHTML = `
  <div class="qhead"><span>Flashcard quiz · ${QZ.i + 1} of ${QZ.items.length}</span><a href="#" id="qx" class="quiet">Exit quiz</a></div>
  <div class="bar"><i style="width:${QZ.i / QZ.items.length * 100}%"></i></div>
  <p class="mut sm">${QZ.askTerm ? 'Choose the definition' : 'Choose the term'}</p>
  <p class="stem qzp ${QZ.askTerm && it.c[3].includes('b') ? 'bt' : ''}">${esc(prompt)}</p>
  <div class="opts">${it.opts.map((x, i) => {
    let cls = 'opt'; if (done) { if (x === it.c) cls += ' right'; else if (i === it.pick) cls += ' wrongpick'; }
    return `<button class="${cls}" data-i="${i}" ${done ? 'disabled' : ''}>${esc(optTxt(x))}</button>`; }).join('')}</div>
  <div id="fb">${done ? `<div class="fb ${ok ? 'ok' : 'bad'}"><b>${ok ? 'Correct.' : 'Incorrect.'}</b>${ok ? '' : ` Answer: ${esc(optTxt(it.c))}`}</div>` : ''}</div>
  <div class="row nav2"><button class="btn ${done ? 'pri' : ''}" id="qn">${QZ.i === QZ.items.length - 1 ? 'Finish' : done ? 'Next' : 'Skip'}</button></div>
  <p class="mut sm kbd">1–4 to answer, Enter for next</p>`;
  document.querySelectorAll('.opt').forEach(b => b.onclick = () => qzAnswer(+b.dataset.i));
  $('#qn').onclick = () => { QZ.i++; window.scrollTo(0, 0); drawQuiz(); };
  $('#qx').onclick = e => { e.preventDefault(); QZ = null; cardsView(); };
}
function qzAnswer(i) {
  const it = QZ.items[QZ.i]; if (it.pick !== null) return;
  it.pick = i;
  if (it.opts[i] !== it.c) { S.mark[cardKey(it.c)] = 'unsure'; save(); }
  drawQuiz();
}
function quizDone() {
  const right = QZ.items.filter(it => it.pick !== null && it.opts[it.pick] === it.c);
  const missed = QZ.items.filter(it => !(it.pick !== null && it.opts[it.pick] === it.c));
  const n = QZ.items.length;
  $('#app').innerHTML = `
  <h1>Flashcard quiz: ${right.length}/${n} correct (${Math.round(right.length / n * 100)}%)</h1>
  ${missed.length ? '<p class="mut sm">Missed cards are now marked unsure.</p>' : ''}
  <div class="row"><button class="btn pri" id="qback">Back to flashcards</button>
  ${missed.length ? `<button class="btn" id="qretry">Retry missed (${missed.length})</button>` : ''}<button class="btn" id="qnew">New quiz</button></div>
  ${missed.length ? `<h2>Missed</h2>${missed.map(it => `<div class="miss"><p><b class="${it.c[3].includes('b') ? 'bt' : ''}">${esc(it.c[0])}</b>: ${esc(it.c[1])}</p>${it.pick !== null ? `<p class="sm mut">You picked: ${esc(QZ.askTerm ? it.opts[it.pick][1] : it.opts[it.pick][0])}</p>` : '<p class="sm mut">Skipped</p>'}</div>`).join('')}` : ''}`;
  $('#qback').onclick = () => { QZ = null; cardsView(); };
  $('#qnew').onclick = () => startQuiz(FC.list.slice());
  if (missed.length) $('#qretry').onclick = () => { const keep = S.fc.qn; S.fc.qn = 'all'; startQuiz(missed.map(it => it.c)); S.fc.qn = keep; };
  window.scrollTo(0, 0);
}
document.addEventListener('keydown', e => {
  if (S.view !== 'cards' || e.target.tagName === 'SELECT' || e.target.tagName === 'INPUT') return;
  if (QZ) {
    const it = QZ.items[QZ.i]; if (!it) return;
    if (/^[1-4]$/.test(e.key) && it.pick === null) qzAnswer(+e.key - 1);
    else if (e.key === 'Enter' && $('#qn')) $('#qn').click();
    return;
  }
  if (e.key === ' ') { e.preventDefault(); FC.flip = !FC.flip; drawCard(); }
  else if (e.key === 'ArrowRight') fcMove(1); else if (e.key === 'ArrowLeft') fcMove(-1);
});

// ---------- cheat sheet ----------
function sheetView() {
  $('#app').innerHTML = `
  <h1>Cheat sheet</h1>
  <p class="mut sm"><b class="bt">Blue</b>: blue terms in the lecture notes. <span class="tbm">textbook</span>: from the textbook only.</p>
  <div class="jump"><select id="jump">${[3, 4].map(m => `<optgroup label="Module ${m}">${ORDER.filter(t => TOPICS[t].m === m).map(t => `<option value="${t}">${TOPICS[t].name}</option>`).join('')}</optgroup>`).join('')}</select></div>
  ${[3, 4].map(m => `<h2 class="mod">Module ${m}: ${m === 3 ? 'Sensation and perception' : 'Learning and memory'}</h2>` +
    ORDER.filter(t => TOPICS[t].m === m).map(t => `<section class="sheet" id="s-${t}"><h3>${TOPICS[t].name}</h3>${sheetHTML(t)}</section>`).join('')).join('')}`;
  const j = $('#jump');
  j.onchange = () => document.getElementById('s-' + j.value).scrollIntoView();
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) j.value = en.target.id.slice(2); }), { rootMargin: '-140px 0px -65% 0px' });
    document.querySelectorAll('section.sheet').forEach(s => io.observe(s));
  }
}

// ---------- boot ----------
document.querySelectorAll('nav button').forEach(b => b.onclick = () => go(b.dataset.v));
const setHH = () => document.documentElement.style.setProperty('--hh', document.querySelector('header').offsetHeight + 'px');
setHH(); window.addEventListener('resize', setHH);
$('#zoom').onclick = () => { $('#zoom').hidden = true; };
document.addEventListener('keydown', e => { if (e.key === 'Escape') { if (!$('#zoom').hidden) $('#zoom').hidden = true; else if (!$('#peek').hidden) closePeek(); } });
go('cards');

</script>
</body>
</html>
