# Handoff: BMSC 3401 Biochem Exam 2 study site

## Who / what
Antonio, MS Medical Science at UNTHSC. Single-file study site for BMSC 3401 Exam 2 (Module 4 Carbohydrates, Module 5 Lipids), shared with classmates on GitHub Pages. Sequel to `src/biochem-exam1/` (read its `notes/handoff-m3-build.md` and `notes/lecture-window.md` for the data shape, tools and test routine; all of it still applies).
**Exam opens Nov 22, 12:00 a.m. and closes Nov 23, 11:59 p.m.** Assumed format: 25 questions, 40 minutes, MC + T/F.
Talk casual and direct. Commit and push only when Antonio says so. Warn when context gets high.

## Why this build is different from Exam 1
The real Exam 1 was surface-level and lecture-heavy: unlabeled figures with an arrow or a blank, graphs, questions on the lecture's own examples and numbers, and T/F in the lecture's wording. The Exam 1 guide lessons worked. The practice questions did not: too few, too conceptual, built from asides, and they read like more studying instead of like the exam.
So: the lecture drives everything. LOs are a loose label, not the source of questions. Don't teach more or less than the lecture does. The job of the question bank is to rehearse the exam.

## Voice (Antonio was specific about this)
The site must read like something the course's professor made. Nothing on the page may hint at the instructions behind it.
- No labels or copy that describe the build: no "exam-style", "specific example", "core", "inventory", "as worded in lecture", "this tests whether you can". `kind` and `inv` are internal fields and are never shown.
- Explanations state the fact and stop. One or two sentences. No coaching, no "remember that", no commentary on why the question was asked.
- Lessons: plain TA-notes voice, short, a figure where it helps. No em dashes, no "isn't X, it's Y", no tagline headings, no triplets, no hype.
- Wording corrections go in a short note that reads like a professor's footnote, only where a student would otherwise be confused. Don't flag every typo.
- Don't over-apply any one instruction. If a rule is making the text sound like it is following a rule, back off.

## State (Nov 16): stages 0 and 1 done, nothing committed
- `src/biochem-exam1/extract_lecture.py` now takes an optional third argument (lecture folder, default `biochem-exam1`) and renders H5P.ImageHotspotQuestion. Exam 1 output is unchanged by default.
- `lectures/biochem-exam2/m4.json`, `m5.json` and `img/` extracted (M4: L1 47, L2 47, L3 44, L4 31, L5 18 blocks, 55 images. M5: 28, 29, 28, 28, 25 blocks, 31 images). Re-run only if the .h5p changes: `python3 -I src/biochem-exam1/extract_lecture.py <file.h5p> m4 biochem-exam2`.
- `src/biochem-exam2/template.html`: copy of Exam 1's with title, storage keys (`bmsc3401-exam2`, `bmsc3401-lecwin2`) and lecture folder changed. Nothing else touched yet.
- `build.py`: builds `biochem-exam2.html`, skipping module files that don't exist. Currently an empty shell (v0.1).
- `inventory.js`: 45 lessons, 178 core items, 24 side items. Each lesson has its takeaway (`a`), core facts with lecture block refs, and side content. **The facts are complete enough to write lessons and questions from; you should not need to re-read the lectures**, only open a block when you need the exact sentence for a highlight snippet.
- `tests/validate_inv.js`: passes. Once `m4.js`/`m5.js` exist it fails on any core item with no question, any question with no item, or a question with no `kind`.
- `notes/plan.md`: the original (larger) plan. Where it disagrees with this file, this file wins.

## Decisions Antonio made
- Size: trim. Every core item gets one question (178). The number in each inventory item marks how hard the lecture leans on it; only give an item a second question when the second is a different kind (a figure version of a text question, or the reverse). Land near 200 total, not 257.
- Mix: about 40% figure, 40% specific example or quick application, 20% why. Mock = 25 questions, 40 min, 10 / 10 / 5, split across both modules, unseen questions first.
- Borderline content counted as core: lactose intolerance, red blood cells lacking mitochondria, malonyl CoA blocking the carnitine transferase, no double bonds past C-9. One question each allowed for ethanol/fatty liver and carnitine deficiency.
- LO 4.3 was not in the list Antonio got, but everything in the lecture is covered anyway. LO 5.5 (team activity) gets nothing. Labs are not covered.
- Drills: yes, reusing the existing sort and case engines. They also show up in practice feedback: when a missed question's lesson has a drill, the review offers it (a plain link under the explanation, e.g. "Practice: PFK-1 regulators").
- No animated tools.

## Remaining stages (run tests after each)
2. `m4.js` guide lessons (LO list, 22 lessons, lecture images used directly as lesson figures via `img`).
3. `m5.js` guide lessons (23 lessons).
4. Question figures. Lecture images with labels covered and numbered (port the masking from `src/bmsc3324-exam2/figs.py`; save under `lectures/biochem-exam2/q/`), plus generated SVGs where the lecture image is too dense for a phone or missing: glycolysis ladder, phase summary, respiration boxes, hexokinase/glucokinase curves, PFK-1 and pyruvate kinase regulator maps, pyruvate fork, lactate loop, glycogen cycle, glucose-source graph, glycolysis vs gluconeogenesis bypass, beta oxidation cycle, ketone flow, carnitine shuttle, citrate shuttle, elongation cycle, phosphatidate branch with PAP, cholesterol stages with compartments, lipoprotein circuit.
5. M4 questions with `kind`, `inv`, `LEC` map. 6. M5 questions.
7. Mock builder with kind quotas and unseen-first, drills and the drill link in feedback, copy and adapt `tests/` from Exam 1 (test_site.py, validate_lec.js, validate_hl.js: change file names and lecture folder), full pass at 1280 and 390.

## Lecture wording problems (answer keys follow the lecture; write questions so both readings give the same answer)
M4: hexokinase "higher Km (affinity)" (Km is inverse of affinity; ask about affinity or the graph, never "which has the higher Km"). 32 vs 36 ATP aerobic (don't ask for the number; 2 ATP anaerobic is safe). DHAP called an aldotriose. Pyruvate kinase placed in the mitochondria. Pyruvate decarboxylation said to consume an oxygen molecule. "Activity of lactate" for lactate dehydrogenase. Phosphoglucomutase called the key insulin-activated enzyme while the check says glycogen synthase is rate-limiting (use glycogen synthase). Glycogenin called a short chain of glycogen. Muscle said to be unable to convert G1P to G6P (the missing enzyme is glucose-6-phosphatase; ask what muscle lacks and that it can't release glucose). Liver said to make glucose from fatty acids in starvation (L5 list is amino acids, lactate, glycerol). Skeletal muscle listed as able to do gluconeogenesis. "ATP must be very low to activate" gluconeogenesis (avoid).
M5: trans fats "higher melting point than saturated" (ask solid vs liquid, man-made, not a melting-point ranking against saturated). Glycolipids called a membrane protein. Ceramide called the fatty acid. "FAD+", "FADH", "enol-CoA hydratase", "thiloase". Thiolysis "adds a new acyl-CoA". Fatty acids entering through "voltage dependent ion channels" (the lecture's own check says they do not enter the matrix that way). "Enzymes such as prostaglandins introduce double bonds". Phospholipids "AKA phosphoglycolipids". "SREBP is inhibited by insulin" (test only the direction: insulin and thyroid hormone raise synthesis, glucagon and glucocorticoids lower it).
