# study-guides

Self-contained HTML exam-review pages. No build step, no dependencies — each
page is a single HTML file you can open directly or serve over GitHub Pages.

## Pages

| File | What it is |
|------|------------|
| `bmsc3324-exam1.html` | BMSC 3324 Psychology — Exam 1 (Modules 1 & 2): flashcards, mock exams, cheat sheet. Images embedded, no `images/` files. |
| `bmsc3324-exam2.html` | BMSC 3324 Psychology — Exam 2 (Modules 3 & 4): flashcards with in-context lines, mock exam and practice tabs (biochem-style), cheat sheet. **Built file — edit `src/bmsc3324-exam2/` and run `python3 figs.py <media dir>` (figures) then `python3 build.py`.** |
| `exam3.html` | Microbiology — Exam 3 (Modules 5 & 6) review |
| `exam2.html` | BMSC 3404 — Exam 2 (Modules 3 & 4) review |
| `biochem-exam1.html` | BMSC 3401 Biochemistry — Exam 1 (Modules 1–3): study guide, practice + drills, mock exams, question bank. **Built file — edit `src/biochem-exam1/` and run `python3 build.py`.** |
| `lab-timer.html` | Hands-free lab stopwatch (voice “start/stop” with onset backdating, or clap trigger) + trial log. Not linked from the landing page. |
| `index.html` | Landing page linking to each guide |

Figures for the exam pages live in `images/`.

## Live site

Published with GitHub Pages from the `main` branch (root). Enable it under
**Settings → Pages → Source: Deploy from a branch → main / (root)**.
`.nojekyll` is present so Pages serves every file as-is.

## For Claude Code sessions working on this repo

This repo is **only** the exam study guides. It has nothing to do with the
Side Quest game or the Aquamarine dashboard — those live in the separate
`study-ledger` repo. When you edit an exam page:

- Each `examN.html` is standalone. Keep it that way — no shared framework.
- Bump the small version marker in the page when you ship a change.
- Images go in `images/`; reference them with a relative `images/…` path.

### biochem-exam1 source

`src/biochem-exam1/` holds `template.html` (UI), `figs.js` (from `gen_figs.py`) and one
data file per module (`m1.js`, `m2.js`, `m3.js`). `build.py` inlines them into the
standalone `biochem-exam1.html`. Each question carries its exam LO and lecture lesson.

### bmsc3324-exam2 source

`src/bmsc3324-exam2/` holds the app shell (`head.html`, `helpers.js`, `app.js`, adapted from Exam 1 v3.19),
`figs.py` → `figs.js` (lecture figures: `o_*` originals, `f_*` letter-masked for questions, `CARDFIG` label highlights),
`sheet.js` (topics, mock quotas, cheat sheet), `cards.js` (flashcards + quiz groups), `bank_m3.js` / `bank_m4.js`
(question bank; the key is always the first option and options are shuffled at display), and `hl.js` (review-link overrides).
`build.py` concatenates them into the standalone `bmsc3324-exam2.html`.
