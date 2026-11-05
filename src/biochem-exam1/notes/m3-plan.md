# M3 build plan (approved by Antonio, Nov 5 2026)

Source facts: `m3-digest.md`. Copy the data shape from m2.js. Ship as the next version after the current one (v1.7 is live; M3 = v1.8 unless another chat ships first: check `git log`).

## Lessons (21)
3.1 Purpose of metabolism
- m3-meta: metabolism, anabolism vs catabolism, lecture pathway table, genesis/synthesis vs lysis/oxidation clue. Figure: build-up vs break-down with energy arrows.
- m3-path: how pathways work: intermediates, shared reactions and intermediates, coupled steps, irreversible steps as control points. Lecture wording note on "rate-limiting".
- m3-stages: three stages of catabolism; stepwise oxidation vs burning. Figure: food → subunits → acetyl CoA → CAC → ETC, mitochondrion box around stages 2 and 3.

3.2 Activated carriers
- m3-couple: ΔG additive; shared intermediate; worked {steps}: +21 and −34 → −13.
- m3-carrier: what an activated carrier is; kinetically stable + thermodynamically unstable and why that lets enzymes control energy flow. Lecture wording note on coal/diamond.
- m3-atp: ATP structure, phosphoanhydride bonds, −30.5 and −45.6, ATP-ADP cycle. Figure: ATP-ADP cycle.
- m3-ptp: phosphoryl-transfer potential; ATP in the middle. Figure: ladder (PEP, 1,3-BPG, creatine phosphate, ATP, G6P, glycerol 3-P).
- m3-carriers: carrier table (group carried, vitamin); NADH/FADH2 = catabolism electrons to ETC, NADPH = biosynthesis; CoA, biotin, THF, SAM notes. FAD+ wording note.
- m3-vitb: B vitamins → coenzymes; deficiency table; tie thiamine and niacin to α-KG DH and the NAD+-dependent steps.

3.3 Regulation
- m3-why: four reasons to regulate.
- m3-3ways: enzyme amount (transcription), substrate availability (compartments), catalytic activity (feedback, hormones). Table with "how to spot it". Ties to M2 lesson m2-control/m2-allo.

3.4 Central role
- m3-acoa: three sources of acetyl CoA (and nucleic acids aren't one); committed, compartmentalized step.
- m3-central: CAC + ox phos = respiration; the cycle's job is loading NADH/FADH2; worked {steps}: ATP per turn = 3(2.5) + 1.5 + 1 = 10.

3.5 Diagram CAC and ox phos
- m3-cacio: location, inputs, outputs, net reaction.
- m3-cacsteps: two halves; steps 1, 3, 4, 6 with enzymes; carbon count 2+4 → 6 → 5 → 4; where the 2 CO2 leave. Figure: simplified wheel with the 4 steps.
- m3-cacreg: regulation map: acetyl CoA formation (− ATP, NADH, acetyl CoA), citrate synthase (− citrate, ATP), isocitrate DH (+ Ca2+, ADP; needs NAD+, − NADH), α-KG DH (+ Ca2+; needs NAD+ and thiamine; − NADH, ammonia). Table + figure.
- m3-etc: inner membrane location, complexes I to IV, electron path from NADH vs FADH2, Q and cyt c mobile, proton counts (lecture 4/0/4/3). Figure: membrane cross-section.
- m3-pmf: gradient, chemiosmosis, ATP synthase, 4 H+ per ATP; worked {steps} 11/4 and 7/4 → ~2.5 and ~1.5; proton-count wording note; location wording note.

3.6 Perturbations
- m3-uncouple: coupling vs uncoupling, thermogenin/brown fat, DNP; what happens to O2 use, ATP, heat. Thermogenin wording note. Figure: leaky membrane.
- m3-etcinhib: I (amobarbital, rotenone), II (malonate), IV (CO, cyanide) and the "what backs up" logic; why I block is survivable short-term but dangerous; oligomycin on V as beyond lecture. CO/cyanide wording note.
- m3-cacpoison: fluoroacetate, malonate (succinate piles up), arsenite, ammonia/hyperammonemia.

## Questions (~40)
3.1: 5, 3.2: 8, 3.3: 5, 3.4: 5, 3.5: 9, 3.6: 8. Application scenarios, not lecture-phrase recall. ~Half T/F false. About 6 built with `q-` figures from the start (unlabeled ETC with numbered complexes, CAC wheel with lettered steps, coupled-reaction ΔG bars, etc.). Use the lecture's own checks (digest) as a floor for coverage but rewrite them as application items. Tag beyond-lecture items.
Totals after M3: M1 62 + M2 51 + M3 ~40 ≈ 153, enough for 6 non-repeating 25-question mocks.

## Drills
- m3d1 sort, 3 rounds: anabolic vs catabolic pathways; carrier → group carried; scenario → regulation method (enzyme amount / substrate availability / catalytic activity).
- m3d2 sort: CAC regulation: effector descriptions → enzyme (acetyl CoA formation, citrate synthase, isocitrate DH, α-KG DH, succinate DH). Make each item specific enough to have one bin.
- m3d3 case: ETC perturbations. Fields: O2 use (Up/Same/Down), ATP made (Up/Same/Down), H+ gradient (Up/Same/Down). Cases: cyanide, CO, amobarbital (I; O2 down, ATP down, gradient down), malonate, DNP (O2 up, ATP down, gradient down), thermogenin in cold, high ADP demand (beyond lecture: O2 up, ATP up, gradient slightly down), oligomycin (beyond: O2 down, ATP down, gradient up).

## Animated tools (approved)
Both need TOOLMETA + TOOLS entries, a `{tool:"name"}` lesson block, and a `kind:"tool"` drill entry. Respect `prefers-reduced-motion` (stop the moving dots, keep readouts updating). Clean up timers/requestAnimationFrame in the tab cleanup (go() calls the outgoing tab's cleanup). Must fit 390 px with no horizontal scroll. Same palette: #1f4b8f plus green/red, no gradients.

1. `etc` ETC and chemiosmosis simulator (lessons m3-pmf and m3-etcinhib; drill m3d4).
   - Membrane cross-section: complexes I to V, Q and cyt c as moving carriers, NADH entering I, FADH2 entering II, O2 → H2O at IV, H+ dots pumped up into the intermembrane space, ATP synthase rotor whose speed follows the gradient.
   - Readouts: O2 use, ATP rate, gradient height (bar), heat, NADH:NAD+ balance.
   - Controls: block I, II, III, IV or V; add uncoupler; ADP high/low.
   - Model (simple steady-state, not physics): flux through I and II limited by downstream blocks and by back-pressure from the gradient; uncoupler adds a leak proportional to gradient; ATP rate = synthase flux if V not blocked and ADP present. Must reproduce: block IV → everything stalls, NADH builds up; block I → small flow via II only; uncoupler → O2 up, ATP down, heat up, gradient down; block V or low ADP → gradient maxes, chain slows (beyond lecture: respiratory control).
2. `cac` CAC wheel (lessons m3-cacsteps and m3-cacreg; drill m3d5).
   - Mode "Run one turn": step through; carbon count 2+4 → 6 → 5 → 4; running tally 3 NADH, 1 FADH2, 1 ATP (GTP), 2 CO2.
   - Mode "Regulators": toggles for Ca2+, high NADH, high ATP, ADP, malonate, fluoroacetate, arsenite. Affected enzymes light green (up) or red (down); the intermediate just upstream of a blocked step swells (malonate → succinate, fluoroacetate → citrate, arsenite → α-ketoglutarate).

## Not building
Coupled-reaction animation, phosphoryl-transfer ladder animation, ATP yield calculator, anabolism/catabolism animation: static figures or worked steps cover them.
