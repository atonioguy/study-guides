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
const SCROLL = {}; let CUR_VIEW = null;
function go(v) {
  if (CUR_VIEW) SCROLL[CUR_VIEW] = window.scrollY;
  CUR_VIEW = v; S.view = v; save(); stopTimer();
  document.querySelectorAll('nav button').forEach(b => b.classList.toggle('on', b.dataset.v === v));
  if (v === 'cards') { if (QZ) drawQuiz(); else cardsView(); }
  else if (v === 'mock') mockView();
  else if (v === 'practice') practiceView();
  else sheetView();
  const y = (v === 'mock' && S.mock) || (v === 'practice' && PR) ? 0 : SCROLL[v] || 0;
  window.scrollTo(0, y); requestAnimationFrame(() => window.scrollTo(0, y));
}

// ---------- option order ----------
function optOrder(q, seed) {
  const idx = q.o.map((_, i) => i);
  if (q.type === 'tf') return idx;
  if (q.o.every(s => s.length <= 2)) return idx.sort((a, b) => q.o[a].localeCompare(q.o[b]));
  return shuffle(idx, seed + q.id);
}

// ---------- shared question state ----------
// S.q[id] = {n: times answered, t: last answered (ms), c: last answer correct, p: option index picked}
S.q = S.q || {}; S.flag = S.flag || {}; S.hist = S.hist || [];
S.set = Object.assign({ len: MOCK_N, timer: true, fb: 'each', m3: true, m4: true }, S.set || {});
S.pf = Object.assign({ sec: 'all', missed: false, flag: false, un: false, show: false }, S.pf || {});
// carry over answers from v1.0 (seen / wrong only)
if (S.seen && !S.migr) { Object.keys(S.seen).forEach(id => { if (QBYID[id] && !S.q[id]) S.q[id] = { n: S.seen[id], t: 1, c: !S.wrong[id] }; }); S.migr = 1; delete S.cur; save(); }
const Q_MS = 47 * 60000 / MOCK_N; // same pace as the 47-minute, 30-question exam
function record(q, pick) { const r = S.q[q.id] || { n: 0 }; r.n++; r.t = Date.now(); r.c = pick === q.ans; r.p = pick; S.q[q.id] = r; save(); }
const age = q => (S.q[q.id] ? S.q[q.id].t : 0);
const FLAG_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M5 21V4"/><path class="fl" d="M5 4h12l-2.5 4.5L17 13H5"/></svg>';
function flagBtn(q) {
  const on = !!S.flag[q.id];
  return `<button class="flagi ${on ? 'on' : ''}" type="button" data-flag="${q.id}" title="${on ? 'Remove flag' : 'Flag for review'}" aria-label="${on ? 'Remove flag' : 'Flag for review'}" aria-pressed="${on}">${FLAG_SVG}</button>`;
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-flag]'); if (!b) return;
  e.stopPropagation(); const id = b.dataset.flag;
  if (S.flag[id]) delete S.flag[id]; else S.flag[id] = 1; save();
  document.querySelectorAll(`[data-flag="${id}"]`).forEach(x => { const on = !!S.flag[id]; x.classList.toggle('on', on); x.setAttribute('aria-pressed', on); x.title = on ? 'Remove flag' : 'Flag for review'; });
}, true);
const exText = q => esc(q.type === 'tf' ? q.ex.replace(/^(True|False)[.,] (it is the reverse\. )?/, '') : q.ex);
function fb(q, picked, shown) {
  const ok = picked === q.ans;
  const head = shown ? 'Answer:' : picked == null ? 'Not answered.' : ok ? 'Correct.' : 'Incorrect.';
  return `<div class="fb ${shown || ok ? 'ok' : 'bad'}"><b>${head}</b>${!ok || shown ? ` ${shown ? '' : 'Answer: '}${esc(q.o[q.ans])}.` : ''}
  <p>${exText(q)}</p><a href="#" onclick="peek('${peekTopic(q)}','${q.id}');return false">Review: ${esc(TOPICS[peekTopic(q)].name)}</a></div>`;
}
// question body: stem, figure, options. state: picked index or null; reveal: bool
function qBody(q, order, picked, reveal, change) {
  return `<p class="stem">${esc(q.q)}${q.tb ? ' <span class="tbm">textbook</span>' : ''}</p>${q.fig ? img(q.fig) : ''}
  <div class="opts">${order.map(i => {
    let cls = 'opt';
    if (reveal) { if (i === q.ans) cls += ' right'; else if (i === picked) cls += ' wrongpick'; if (change && i === picked) cls += ' mine'; }
    else if (i === picked) cls += ' pick';
    return `<button class="${cls}" data-i="${i}" ${reveal && !change ? 'disabled' : ''}>${esc(q.o[i])}</button>`;
  }).join('')}</div>`;
}
const secName = t => `M${TOPICS[t].m}: ${TOPICS[t].name}`;
function secSelect(id, val) {
  return `<select id="${id}" aria-label="Section"><option value="all">All sections</option>
  ${[3, 4].map(m => `<optgroup label="Module ${m}: ${m === 3 ? 'Sensation and perception' : 'Learning and memory'}"><option value="m${m}">M${m}: all</option>${ORDER.filter(t => TOPICS[t].m === m).map(t => `<option value="${t}">${secName(t)}</option>`).join('')}</optgroup>`).join('')}
  </select>`.replace(`value="${val}"`, `value="${val}" selected`);
}
const inSec = (q, v) => v === 'all' || q.t === v || q.t.startsWith(v + '-');
function armBtn(btn, label, fn) { // tap twice to confirm
  btn.onclick = () => { if (!btn.dataset.arm) { btn.dataset.arm = 1; const old = btn.textContent; btn.textContent = label; setTimeout(() => { if (btn.isConnected && btn.dataset.arm) { delete btn.dataset.arm; btn.textContent = old; } }, 3000); return; } fn(); };
}

// ---------- MOCK ----------
let timerH = null;
function stopTimer() { if (timerH) { clearInterval(timerH); timerH = null; } }
const fmtT = ms => { const s = Math.ceil(ms / 1000); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };
function mockView() {
  if (S.mock) return mockQ();
  const pool = BANK.filter(q => S.set['m' + TOPICS[q.t].m]);
  const n = Math.min(+S.set.len, pool.length), un = pool.filter(q => !S.q[q.id]).length;
  const seg = (key, vals) => `<div class="seg" data-key="${key}">${vals.map(([v, l]) => `<button type="button" data-v="${v}" class="${String(S.set[key]) === String(v) ? 'on' : ''}">${l}</button>`).join('')}</div>`;
  $('#app').innerHTML = `
  <h1>Mock exam</h1>
  <p class="mut sm">Same format as the exam: multiple choice and true/false, split across both modules and every section. Questions you haven't answered yet come first. If you leave mid-mock, it picks up where you were and the timer pauses.</p>
  <div class="box">
    <label class="chk"><input type="checkbox" data-mod="m3" ${S.set.m3 ? 'checked' : ''}> Module 3: Sensation and perception (${BANK.filter(q => q.t.startsWith('m3')).length})</label>
    <label class="chk"><input type="checkbox" data-mod="m4" ${S.set.m4 ? 'checked' : ''}> Module 4: Learning and memory (${BANK.filter(q => q.t.startsWith('m4')).length})</label>
    <div class="row"><span class="sm lab">Length</span>${seg('len', [[MOCK_N, MOCK_N + ' questions'], [10, '10 questions']])}</div>
    <div class="row"><span class="sm lab">Timer</span>${seg('timer', [[true, 'On'], [false, 'Off']])}<span class="mut sm">${S.set.timer ? Math.round(n * Q_MS / 60000) + ' min' : ''}</span></div>
    <div class="row"><span class="sm lab">Feedback</span>${seg('fb', [['each', 'After each question'], ['end', 'At the end']])}</div>
    <p class="sm">${un} of ${pool.length} questions unseen.</p>
    <button class="btn pri" id="startMock" ${pool.length ? '' : 'disabled'}>Start mock ${S.hist.length + 1}</button>
  </div>
  <h2>Past mocks</h2>
  ${S.hist.length ? `<p class="sm"><button class="btn link sm" id="clrHist" style="margin-left:0;padding-left:0">Clear mock history</button> <span class="mut">Question answers stay.</span></p>
  <table class="res"><tr><th>#</th><th>Date</th><th>Score</th></tr>${S.hist.slice().reverse().map(x => `<tr><td>${x.n}</td><td>${new Date(x.d).toLocaleDateString()}</td><td>${x.s} / ${x.of}</td></tr>`).join('')}</table>` : '<p class="mut sm">None yet.</p>'}
  <p class="sm mut" style="margin-top:28px"><button class="btn link sm" id="reset" style="margin-left:0;padding-left:0">Reset progress</button> · v1.2</p>`;
  document.querySelectorAll('[data-mod]').forEach(c => c.onchange = () => { S.set[c.dataset.mod] = c.checked; save(); mockView(); });
  document.querySelectorAll('.seg button').forEach(b => b.onclick = () => { const k = b.parentNode.dataset.key; const v = b.dataset.v; S.set[k] = v === 'true' ? true : v === 'false' ? false : isNaN(+v) ? v : +v; save(); mockView(); });
  $('#startMock').onclick = () => startMock();
  if ($('#clrHist')) armBtn($('#clrHist'), 'Tap again to clear history', () => { S.hist = []; save(); mockView(); });
  armBtn($('#reset'), 'Tap again to erase all answers, flags, and flashcard marks', () => { S = { q: {}, flag: {}, hist: [], mock: null, mark: {}, fc: S.fc, set: S.set, pf: S.pf, migr: 1, view: 'mock' }; save(); mockView(); });
}
function buildMock(len) {
  const mods = [3, 4].filter(m => S.set['m' + m]);
  const tb = { n: 1 };
  const pick = (pool, k, out) => {
    const r = rng(Date.now() + ':' + pool.length);
    pool.map(q => [age(q), r(), q]).sort((a, b) => a[0] - b[0] || a[1] - b[1]).map(x => x[2]).forEach(q => {
      if (k <= 0 || out.includes(q)) return; if (q.tb) { if (tb.n <= 0) return; tb.n--; } out.push(q); k--;
    });
    return out;
  };
  // split the length across the chosen modules, then across sections by the exam blueprint
  const wsum = mods.reduce((s, m) => s + MOCK_M[m], 0);
  let res = [];
  mods.forEach((m, mi) => {
    const nm = mi === mods.length - 1 ? len - res.length : Math.round(len * MOCK_M[m] / wsum);
    const ts = ORDER.filter(t => TOPICS[t].m === m);
    const raw = ts.map(t => TOPICS[t].quota * nm / MOCK_M[m]);
    const q = raw.map(Math.floor); let left = nm - q.reduce((a, b) => a + b, 0);
    raw.map((x, i) => [x - q[i], i]).sort((a, b) => b[0] - a[0] || Math.random() - .5).forEach(([, i]) => { if (left > 0) { q[i]++; left--; } });
    let got = [];
    ts.forEach((t, i) => { got = pick(BANK.filter(x => x.t === t), q[i], got); });
    if (got.length < nm) got = pick(BANK.filter(x => x.t.startsWith('m' + m)), nm - got.length, got);
    res = res.concat(shuffle(got));
  });
  return res;
}
function startMock() {
  const qs = buildMock(+S.set.len); if (!qs.length) return;
  const seed = String(Date.now());
  S.mock = { num: S.hist.length + 1, each: S.set.fb === 'each', i: 0, left: S.set.timer ? qs.length * Q_MS : null, start: Date.now(), qs: qs.map(q => ({ id: q.id, pick: null, lock: false })), seed };
  save(); window.scrollTo(0, 0); mockQ();
}
function mockQ() {
  const M = S.mock; stopTimer();
  const st = M.qs.filter(r => QBYID[r.id]); if (!st.length) { S.mock = null; save(); return mockView(); }
  M.i = Math.min(M.i, st.length - 1);
  const r = st[M.i], q = QBYID[r.id], order = optOrder(q, M.seed);
  const answered = st.filter(x => x.pick != null).length, last = M.i === st.length - 1;
  $('#app').innerHTML = `
  <div class="qhead"><span>Mock ${M.num} · ${M.i + 1} of ${st.length}</span><span id="timer">${M.left != null ? fmtT(M.left) : ''}</span><span>${M.each ? '' : answered + ' answered '}${flagBtn(q)}</span></div>
  <div class="bar"><i style="width:${(M.i + (r.pick != null ? 1 : 0)) / st.length * 100}%"></i></div>
  ${qBody(q, order, r.pick, r.lock, false)}
  <div id="fb">${r.lock ? fb(q, r.pick) : ''}</div>
  <div class="row nav2" id="mnav">
    ${M.i > 0 ? '<button class="btn" id="mback">Back</button>' : ''}
    <button class="btn pri" id="mnext" ${M.each && !r.lock ? 'disabled' : ''}>${last ? 'Finish' : 'Next'}</button>
    <button class="btn link" id="mend">End exam</button><button class="btn link" id="mquit" style="margin-left:0">Quit</button>
  </div>`;
  document.querySelectorAll('.opt').forEach(b => b.onclick = () => {
    if (r.lock) return; r.pick = +b.dataset.i;
    if (M.each) { r.lock = true; record(q, r.pick); }
    save(); const y = window.scrollY; mockQ(); window.scrollTo(0, y);
    const f = $('#fb'); if (M.each && f && f.getBoundingClientRect().bottom > window.innerHeight) f.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  });
  if ($('#mback')) $('#mback').onclick = () => { M.i--; save(); window.scrollTo(0, 0); mockQ(); };
  $('#mnext').onclick = () => last ? tryFinish() : (M.i++, save(), window.scrollTo(0, 0), mockQ());
  $('#mend').onclick = () => tryFinish();
  armBtn($('#mquit'), 'Tap again to quit (no score saved)', () => { stopTimer(); S.mock = null; save(); mockView(); });
  function tryFinish() {
    const un = st.filter(x => x.pick == null).length;
    if (un && !$('#conf2')) { $('#mnav').insertAdjacentHTML('beforeend', `<span class="sm" id="conf2" style="width:100%">${un} unanswered. <button class="btn sm" id="finAny">Finish anyway</button></span>`); $('#finAny').onclick = mockFinish; return; }
    mockFinish();
  }
  if (M.left != null) {
    let lastT = Date.now();
    timerH = setInterval(() => {
      const now = Date.now(); M.left = Math.max(0, M.left - (now - lastT)); lastT = now; save();
      const t = $('#timer'); if (M.left <= 0) { stopTimer(); return mockFinish(); }
      if (t) { t.textContent = fmtT(M.left); t.classList.toggle('late', M.left < 300000); }
    }, 1000);
  }
}
function mockFinish() {
  stopTimer(); const M = S.mock; if (!M) return mockView();
  const st = M.qs.filter(r => QBYID[r.id]);
  st.forEach(r => { if (!r.lock) record(QBYID[r.id], r.pick); });
  const right = st.filter(r => r.pick === QBYID[r.id].ans).length;
  S.hist.push({ n: M.num, d: Date.now(), s: right, of: st.length });
  const seed = M.seed; S.mock = null; save();
  const by = {}; st.forEach(r => { const t = QBYID[r.id].t; by[t] = by[t] || [0, 0]; by[t][1]++; if (r.pick === QBYID[r.id].ans) by[t][0]++; });
  const miss = st.filter(r => r.pick !== QBYID[r.id].ans);
  const mins = Math.round((Date.now() - M.start) / 60000);
  window.scrollTo(0, 0);
  $('#app').innerHTML = `
  <h1>Mock ${M.num}: ${right} / ${st.length} (${Math.round(right / st.length * 100)}%)</h1>
  <p class="mut sm">Time: ${mins < 1 ? 'under 1 min' : mins + ' min'}</p>
  <h2>By section</h2>
  <table class="res"><tr><th>Section</th><th>Score</th></tr>
  ${ORDER.filter(t => by[t]).map(t => `<tr class="${by[t][0] / by[t][1] < 0.5 ? 'lo' : ''}"><td><a href="#" onclick="peek('${t}');return false">${esc(secName(t))}</a></td><td>${by[t][0]}/${by[t][1]}</td></tr>`).join('')}</table>
  <div class="row"><button class="btn pri" id="newMock">New mock</button>${miss.length ? `<button class="btn" id="pracMiss">Practice the ${miss.length} missed</button>` : ''}</div>
  <h2>Missed (${miss.length})</h2>
  ${miss.map(r => { const q = QBYID[r.id]; return `<div class="miss"><div class="qhead"><span>${esc(secName(q.t))}</span>${flagBtn(q)}</div><p class="stem">${esc(q.q)}</p>${q.fig ? img(q.fig) : ''}
    <p class="sm">Your answer: ${r.pick == null ? '(none)' : esc(q.o[r.pick])}<br>Correct: <b>${esc(q.o[q.ans])}</b></p>
    <p class="sm mut">${exText(q)} <a href="#" onclick="peek('${peekTopic(q)}','${q.id}');return false">Review</a></p></div>`; }).join('')}`;
  $('#newMock').onclick = () => mockView();
  if ($('#pracMiss')) $('#pracMiss').onclick = () => { go('practice'); runPractice(miss.map(r => QBYID[r.id]), `Missed from mock ${M.num}`); };
}

// ---------- PRACTICE ----------
let PR = null; // one-at-a-time run in progress
function prPool() {
  const f = S.pf;
  return BANK.filter(q => inSec(q, f.sec) && (!f.missed || (S.q[q.id] && S.q[q.id].c === false)) && (!f.flag || S.flag[q.id]) && (!f.un || !S.q[q.id]))
    .sort((a, b) => ORDER.indexOf(a.t) - ORDER.indexOf(b.t));
}
function practiceView() {
  if (PR) return prShow();
  const pill = (k, l) => `<button type="button" class="pill ${S.pf[k] ? 'on' : ''}" data-pf="${k}" aria-pressed="${!!S.pf[k]}">${l}</button>`;
  $('#app').innerHTML = `
  <h1>Practice</h1>
  <p class="mut">Every question the mock exams use, grouped by section. You can change an answer anytime. Tap your answer again to clear it.</p>
  <div class="filters">
    <div class="row">${secSelect('psel', S.pf.sec)}</div>
    <div class="row">${pill('missed', 'Missed')}${pill('flag', 'Flagged')}${pill('un', 'Unanswered')}${pill('show', 'Show all answers')}</div>
    <div class="row"><button class="btn pri" id="pquiz">Quiz me one at a time</button><span class="mut sm" id="pcnt"></span><button class="btn sm" id="pclr" title="Clears your answers to the questions shown with the current filters. Flags and mock history are kept.">Reset answers</button></div>
  </div>
  <div class="plist" id="plist"></div>`;
  $('#psel').onchange = e => { S.pf.sec = e.target.value; save(); prDraw(); };
  document.querySelectorAll('[data-pf]').forEach(b => b.onclick = () => { const k = b.dataset.pf; S.pf[k] = !S.pf[k]; b.classList.toggle('on', S.pf[k]); b.setAttribute('aria-pressed', S.pf[k]); save(); prDraw(); });
  $('#pquiz').onclick = () => runPractice(prPool(), 'Practice');
  prDraw();
}
function prDraw() {
  const P = prPool(), list = $('#plist'); if (!list) return;
  $('#pcnt').textContent = `${P.length} question${P.length === 1 ? '' : 's'}`; $('#pquiz').disabled = !P.length;
  prClr(P);
  if (!P.length) { list.innerHTML = '<p class="mut">No questions match these filters.</p>'; return; }
  let last = null;
  list.innerHTML = P.map(q => { const head = q.t !== last ? `<h2 class="sechead"><span class="mut sm">M${TOPICS[q.t].m} · ${P.filter(x => x.t === q.t).length}</span><br>${esc(TOPICS[q.t].name)}</h2>` : ''; last = q.t; return head + `<div class="qcard" data-q="${q.id}"></div>`; }).join('');
  list.querySelectorAll('.qcard').forEach(c => qCard(c));
}
function prClr(P) {
  const clr = $('#pclr'); if (!clr) return; P = P || prPool();
  const na = P.filter(q => S.q[q.id]).length; delete clr.dataset.arm; clr.textContent = 'Reset answers'; clr.disabled = !na;
  armBtn(clr, `Tap again to reset ${na}`, () => { P.forEach(q => delete S.q[q.id]); save(); prDraw(); });
}
function qCard(c) {
  const q = QBYID[c.dataset.q], order = optOrder(q, 'list'), r = S.q[q.id];
  const picked = r && r.p != null ? r.p : null;
  c.innerHTML = `<div class="qhead"><span></span>${flagBtn(q)}</div>${qBody(q, order, picked, picked != null, true)}${picked != null ? fb(q, picked) : S.pf.show ? fb(q, null, true) : ''}`;
  c.querySelectorAll('.opt').forEach(b => b.onclick = () => {
    const i = +b.dataset.i;
    if (S.q[q.id] && S.q[q.id].p === i) delete S.q[q.id]; else record(q, i);
    save(); qCard(c); prClr();
  });
}
function runPractice(pool, title) {
  const qs = shuffle(pool).sort((a, b) => age(a) - age(b));
  PR = { qs, i: 0, picks: {}, title, seed: String(Date.now()) };
  window.scrollTo(0, 0); prShow();
}
function prShow() {
  const p = PR;
  if (p.i >= p.qs.length) {
    const right = p.qs.filter(q => p.picks[q.id] === q.ans).length, miss = p.qs.filter(q => p.picks[q.id] !== q.ans);
    $('#app').innerHTML = `<h1>${esc(p.title)} done</h1><p>${right} / ${p.qs.length} correct</p>
    <div class="row">${miss.length ? `<button class="btn pri" id="prRetry">Retry the ${miss.length} missed</button>` : ''}<button class="btn" id="prBack">Back to practice</button></div>`;
    if ($('#prRetry')) $('#prRetry').onclick = () => runPractice(miss, 'Retry');
    $('#prBack').onclick = () => { PR = null; practiceView(); };
    return;
  }
  const q = p.qs[p.i], order = optOrder(q, p.seed), pk = p.picks[q.id], done = pk !== undefined, last = p.i === p.qs.length - 1;
  $('#app').innerHTML = `
  <div class="qhead"><span>${esc(p.title)} · ${p.i + 1} of ${p.qs.length}</span><span>${esc(secName(q.t))} ${flagBtn(q)}</span></div>
  <div class="bar"><i style="width:${p.i / p.qs.length * 100}%"></i></div>
  ${qBody(q, order, done ? pk : null, done, false)}
  <div id="fb">${done ? fb(q, pk) : ''}</div>
  <div class="row nav2">${p.i > 0 ? '<button class="btn" id="prPrev">Back</button>' : ''}<button class="btn pri" id="prNext" ${done ? '' : 'disabled'}>${last ? 'Finish' : 'Next'}</button><button class="btn link" id="prEnd">End</button></div>`;
  document.querySelectorAll('.opt').forEach(b => b.onclick = () => {
    if (p.picks[q.id] !== undefined) return; const i = +b.dataset.i; p.picks[q.id] = i; record(q, i); prShow();
    const f = $('#fb'); if (f && f.getBoundingClientRect().bottom > window.innerHeight) f.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  });
  if ($('#prPrev')) $('#prPrev').onclick = () => { p.i--; window.scrollTo(0, 0); prShow(); };
  $('#prNext').onclick = () => { p.i++; window.scrollTo(0, 0); prShow(); };
  $('#prEnd').onclick = () => { p.i = p.qs.length; prShow(); };
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
