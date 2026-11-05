# Handoff: BMSC 3401 Biochem Exam 1 study site (build M3)

## Who / what
I'm Antonio, MS Medical Science (premed) at UNTHSC. Single-file HTML study site for BMSC 3401 Biochem Exam 1 (Modules 1–3), shared with classmates via GitHub Pages. **Exam is Monday Nov 9, 2026.** Talk casual and direct. Before building anything expensive, show me the plan and wait for my OK. I'm budgeting tokens, so tell me when context gets high and we'll hand off again.

## Repo / build
- Repo `atonioguy/study-guides` (public, Pages from `main` root). Live: https://atonioguy.github.io/study-guides/biochem-exam1.html. Clone with add_repo (push access), shallow clone, long timeout.
- **First thing:** `git status` and `git log -1` (v1.7, 48202b3, or later). Don't trust uncommitted files you didn't write.
- Source is `src/biochem-exam1/`. Never edit `biochem-exam1.html` directly.
  - `template.html`: all CSS/JS. `build.py` inlines figs.js + m1.js/m2.js/m3.js (m3.js is already in MODULES; it's skipped if missing). Bump `VERSION` each ship.
  - `gen_figs.py` → `figs.js`. Helpers `_svg`, `_axes(L,Tp,R,B,xl,yl)`, `_poly`, `_ah`, and for question figures `_q(w,h,fs)` and `_num(x,y,n,col)`. Guide figures are labeled (viewBox ~660 wide). Question figures are unlabeled, `q-` prefix, narrower viewBox (480) with 14 to 16 px text so they read at 390 px; `.stem+.fig` caps them at 540 px. Each run writes `/tmp/fig_<name>.svg` for render checks.
- Test with Python Playwright: desktop 1280 and mobile 390; no page errors; `scrollWidth` equals viewport on mobile; answer a question, click Review (check the `.hl` highlight appears), open each drill, start a mock, switch tabs, reload (it should resume), quit; end a mock early and check missed-list figures (max 460 px). `grep -c '—'` on the built file must be 0. Validate HL snippets with node: each `hl` must appear verbatim in one `p`, `li`, `tr` or note of its ref lesson with tags stripped.
- The proxy blocks github.io. Push to main. Use the session's commit trailer.

## The M3 plan is approved. Build it.
- **Plan:** `src/biochem-exam1/notes/m3-plan.md` (21 lessons, ~40 questions, 3 drills, 2 animated tools).
- **Facts:** `src/biochem-exam1/notes/m3-digest.md` is a full digest of the M3 lecture: every testable fact, the lecture's own checks with answers, the official MLO wording, and the lecture errors to flag. Build from it. Don't ask for the .h5p unless something is missing.
- Build in stages and push working states: (1) m3.js lessons + guide figures, (2) questions + q- figures + HL map, (3) sort/case drills, (4) `cac` wheel tool, (5) `etc` simulator. Ship as one version unless context runs out, in which case ship what's done (it must pass all tests) and hand off.
- **Coordination:** the M1 and M2 chats may be proposing animations of their own. Only one chat builds at a time. Before you start building, ask me whether anyone else is mid-build, and `git pull` before every push.

## Data shape (copy m2.js)
- Lessons `{id:"m3-xxx", h, b(html), fig?, img?, note?, nl?, so, beyond?}`, `{steps,s}`, `{tool:"name"}`, `{drill:"id"}`. Question `{id:"m3a01", lo, src:"L1..L4", ref, type:"mc"|"tf", stem, opts, ans, exp, steps?, fig?, fixed?, tag:"beyond"?}`. `fixed:true` keeps option order (use for "A/B/C/D" or "1 to 5" options). HL map at the bottom of the file.
- Drill kinds: `sort` (rounds/bins/items, item = [text, bin, why?]), `case` (3 fields × 3 options + cases {t, a:[i,i,i], e}), `plot`, `tool`. Tools need an entry in `TOOLMETA` (title, subtitle) and `TOOLS`.
- In-progress mock is in `S.mock`. The timer pauses off-tab. `go()` calls the outgoing tab's cleanup, so animated tools must stop their loops there.

## Writing rules (all still apply)
- Lessons explain why: structure → property → role. Short chunks, a figure where it helps, a one-line `so`.
- Questions make you do the LO's verb. No recall of study-guide phrasing. About half the T/F answers false, plausible same-length distractors, no all/none of the above.
- No em dashes, no "isn't X, it's Y", no tagline headings, no cutesy labels, no triplet rhythm or hype. Plain TA-notes voice. UI copy too.
- Label anything not in the lecture "beyond lecture". Flag lecture errors in a "Lecture wording" note (list is in the digest).
- One accent color #1f4b8f plus green/red (yellow only for the review highlight). No emoji or gradients. Pointer cursor only on clickable things.

## Done
v1.4: M1. v1.5: M2 (kinetics plotter, read-the-plot, class sorter, inhibitor cases; Mock / Practice / Study guide tabs; mock resumes). v1.6: M2 figure questions (M2 = 51). v1.7: M1 figure questions (M1 = 62).

## After M3
Check there are enough questions for 4+ non-repeating 25-question mocks (should be ~153 total, so 6).

## Exam
25 questions, MC + T/F. "All the content tested can be found in the module learning objectives and readings." "I am looking for application more than math."

## Status (Nov 5): shipped v1.8
- M3 complete: 21 lessons, 8 guide figures, 48 questions (5 q- figures), drills m3d1 to m3d5, tools `cac` and `etc`. Totals: M1 62, M2 51, M3 48 = 161.
- Animated tools register a stop function in `ANIMS`; `go()` and `openDrill()` call `stopAnims()`. Loops also stop when their element leaves the page, and `etc` pauses off-screen (IntersectionObserver) and on hidden tabs. Reduced motion: no moving dots; readouts still update.
- Mock repeats: per-module quota is 9/8/8, and `buildMock` round-robins across LOs even after an LO runs out of unseen questions. Measured: 4 fully fresh 25-question mocks, repeats start in mock 5. Picking unseen questions first across all LOs would give 6.
