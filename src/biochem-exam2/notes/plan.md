# BMSC 3401 Biochem Exam 2 build plan (DRAFT, waiting on Antonio's approval)

Drafted Nov 16 2026 from the two .h5p lectures (Module 4 Carbohydrates, Module 5 Lipids) and the Exam 1 source in `src/biochem-exam1/`. Nothing is built yet.

Output: `src/biochem-exam2/` builds `biochem-exam2.html`. Lecture data goes to `lectures/biochem-exam2/`.

## Exam facts
- Modules 4 and 5. Date: not given yet.
- Format assumed same as Exam 1: 25 questions, 40 minutes (96 s per question), MC + T/F.
- LOs on the exam: 4.1, 4.2, 4.4, 5.1, 5.2, 5.3, 5.4, 5.5. (4.3 is not in the list Antonio pasted.)
- 5.5 is the PBOD team activity. No lecture content, so no questions unless Antonio supplies the case.

## What the lectures contain
| Lecture lesson | Blocks | LO |
|---|---|---|
| M4 L1 Types of Carbohydrates | 47 | 4.1 |
| M4 L2 Glucose Metabolism and Glycolysis Phase I | 46 | 4.2 |
| M4 L3 Glycolysis Phase II and Pyruvate Oxidation | 44 | 4.2 |
| M4 L4 Glycogen Metabolism | 31 | 4.2 |
| M4 L5 Gluconeogenesis and Blood Sugar Regulation | 18 | 4.2, 4.4 |
| M5 L1 Lipid Structure and Function | 28 | 5.1 |
| M5 L2 Fatty Acids Part 1 (degradation) | 29 | 5.2 |
| M5 L3 Fatty Acids Part 2 (biosynthesis) | 28 | 5.2 |
| M5 L4 From Fatty Acids to Storage and Membrane Lipids | 28 | 5.3, 5.4 |
| M5 L5 Cholesterol Synthesis | 25 | 5.3 |

54 lecture images in M4, 31 in M5. The extractor ran clean except one unhandled type (H5P.ImageHotspotQuestion, the "click the rate-limiting steps" check in M4 L2), which needs a small addition.

## Guide lessons and their takeaways (55)
Each line is what the lesson has to leave you able to do. Confirm or correct these.

### M4 L1 Types of Carbohydrates (LO 4.1)
1. m4-class: Carbohydrates are sorted by how many sugar units they have. Mono = one (glucose, fructose), di = two (sucrose = glucose + fructose, lactose = glucose + galactose), poly = long chains (starch, glycogen, cellulose are all glucose and differ only in branching).
2. m4-formula: Every monosaccharide is Cn(H2O)n, a 1:2:1 ratio, and they are named by carbon count: triose (glyceraldehyde, pathway intermediates), pentose (ribose, nucleic acids), hexose (glucose, fructose, galactose, mannose, the energy sugars).
3. m4-isomer: Same formula, different molecule. Structural isomers are bonded differently (glucose vs fructose). Stereoisomers have the same bonds but are mirror images (D- vs L-glucose), and our enzymes only use D-glucose.
4. m4-aldket: Carbonyl at the end of the chain = aldose (glucose, galactose). Carbonyl inside the chain = ketose (fructose).
5. m4-ring: A monosaccharide flips between a linear chain and a ring when its carbonyl reacts with one of its own hydroxyls. In solution this happens automatically, so sugars in food and cells are rings.

### M4 L2 Glucose Metabolism and Glycolysis Phase I (LO 4.2)
6. m4-map: Glucose pathways come in three groups. Catabolism (glycolysis, pyruvate oxidation, citric acid cycle, oxidative phosphorylation) makes ATP. Anabolism (gluconeogenesis, pentose phosphate pathway) costs ATP. Storage (glycogenesis) costs ATP, and glycogenolysis undoes it.
7. m4-o2: With oxygen, glucose goes through the four steps of cellular respiration, each in its own location, and yields far more ATP. Without oxygen only glycolysis runs and the yield is 2 ATP.
8. m4-slp: Substrate-level phosphorylation is ATP made by handing a phosphate straight from a substrate to ADP. In glycolysis it happens at step 7 (phosphoglycerate kinase) and step 10 (pyruvate kinase). It is not oxidative phosphorylation.
9. m4-phases: Glycolysis is 10 steps in the cytoplasm, glucose to 2 pyruvate. Phase I spends 2 ATP, Phase II makes 4, net 2. The three rate-limiting enzymes are hexokinase, PFK-1 and pyruvate kinase.
10. m4-ph1: Phase I, steps 1 to 5 in order by enzyme: hexokinase, phosphoglucose isomerase, PFK-1, aldolase, triose phosphate isomerase. ATP is spent at steps 1 and 3, the 6-carbon sugar is split at step 4, and you end with two G3P.
11. m4-hkgk: Hexokinase and glucokinase do the same reaction (glucose to G6P, which traps glucose in the cell and can't be reversed). Hexokinase is in most cells, grabs glucose even when it is scarce and is slow. Glucokinase is in the liver, waits for glucose to build up and then works fast.
12. m4-reg1: Phase I is controlled at its two rate-limiting enzymes. G6P inhibits hexokinase (not glucokinase). PFK-1 is inhibited by ATP, citrate and PEP and activated by AMP and fructose-2,6-bisphosphate (made by PFK-2).

### M4 L3 Glycolysis Phase II and Pyruvate Oxidation (LO 4.2)
13. m4-coenz: NAD+ carries electrons (NAD+ empty, NADH loaded) and coenzyme A carries acetyl groups. Both are recycled, not used up.
14. m4-ph2: Phase II, steps 6 to 10, runs twice per glucose. Step 6 makes NADH, steps 7 and 10 make ATP, step 9 releases water, and step 10 (pyruvate kinase) is the rate-limiting one.
15. m4-reg2: Pyruvate kinase is activated by F1,6BP (feedforward) and PEP, and inhibited by ATP, citrate and alanine.
16. m4-pdh: With oxygen, pyruvate enters the mitochondrion and pyruvate dehydrogenase turns it into acetyl CoA in three steps: decarboxylation (CO2 out), oxidation (NAD+ to NADH), transfer to CoA. Two pyruvates per glucose.
17. m4-anaer: Without oxygen, lactate dehydrogenase turns pyruvate into lactate. The point is to turn NADH back into NAD+ so glycolysis can keep going. Red blood cells always do this, hard-working muscle does it when oxygen runs short, and the lactate goes to the liver.

### M4 L4 Glycogen Metabolism (LO 4.2)
18. m4-glystr: Glycogen is all glucose. α-1,4 bonds make the straight chains and α-1,6 bonds make the branches, and the branches are what allow fast release.
19. m4-tissue: Liver glycogen is for the whole body (glucose is released into the blood). Muscle glycogen is for the muscle only.
20. m4-horm: Insulin (high blood sugar) turns glycogenesis on and glycogenolysis off. Glucagon (low blood sugar) does the opposite.
21. m4-states: Fed (about 2 h after a meal: insulin, uptake, storage), fasting (glucagon, liver glycogen broken down, lasts until glycogen runs out at about 24 h), starvation (gluconeogenesis and other fuels). Includes the glucose-source graph.
22. m4-genesis: Glycogenesis in the liver: glucose to G6P (glucokinase), G6P to G1P (phosphoglucomutase), G1P to UDP-glucose, then glucose units are added onto glycogenin (glycogen synthase) and branched.
23. m4-lysis: Glycogenolysis has one step to know: glycogen phosphorylase, activated by glucagon, clips off glucose as G1P. Muscle differs from liver in using hexokinase and in lacking glucose-6-phosphatase, so it can't release glucose.

### M4 L5 Gluconeogenesis and Blood Sugar Regulation (LO 4.2, 4.4)
24. m4-gng: Gluconeogenesis builds new glucose from amino acids, lactate and glycerol, mainly in the liver, when glucagon is high. It is anabolic and is roughly glycolysis in reverse.
25. m4-timeline: Liver glycogen covers about a day. At 12 to 18 h glycogenolysis and gluconeogenesis share the job, after about 24 h gluconeogenesis is all there is. If its substrates run out you get hypoglycemia. The brain and red blood cells depend on glucose, and the brain only switches to ketones in starvation.
26. m4-bypass: Three glycolysis steps are irreversible, so gluconeogenesis uses four different enzymes to get around them: pyruvate carboxylase + PEP carboxykinase (around pyruvate kinase), fructose-1,6-bisphosphatase (around PFK-1), glucose-6-phosphatase (around hexokinase).
27. m4-gngreg: Gluconeogenesis is expensive, so it is tightly controlled and does not run at the same time as glycolysis. The main control point is PEP carboxykinase, and the main signal is glucagon.

### M5 L1 Lipid Structure and Function (LO 5.1)
28. m5-fatag: A fatty acid is a carbon chain with a methyl end and a carboxylic acid end. A triglyceride is three of them on a glycerol by ester bonds, and it is how fatty acids are stored in adipose tissue.
29. m5-roles: Fats store about twice the energy of carbohydrate, insulate thermally (adipose) and electrically (myelin), let us absorb nonpolar vitamins, and make signals such as prostaglandins.
30. m5-sat: Saturated = no double bonds, packs tightly, solid, animal. Cis unsaturated = natural double bonds, loose packing, liquid, plant. Trans = man-made (partially hydrogenated oil), stays solid. Omega-3 = first double bond at the third carbon from the end, and several are essential.
31. m5-complex: Complex lipids are an alcohol + fatty acids + one more group. Phosphate gives a phospholipid (glycerol with two fatty acids, or sphingosine with one, e.g. sphingomyelin). Sugar gives a glycolipid (on sphingosine, part of the glycocalyx). All are membrane lipids.
32. m5-steroid: Steroids are four fused rings (three 6-carbon, one 5-carbon). Cholesterol keeps membranes from getting too stiff in the cold or too loose in heat. Other steroids: sex hormones, cortisol, bile acids. Membrane lipids are phospholipids, glycolipids and cholesterol, not triglycerides.

### M5 L2 Fatty Acids Part 1: degradation (LO 5.2)
33. m5-lipolysis: Fatty acid degradation is three stages: release, activation, breakdown. Stage 1 is lipolysis: hormone-triggered lipases split triglyceride into glycerol and free fatty acids. Fatty acids travel on albumin, and glycerol goes to the liver.
34. m5-carnitine: Stage 2: the fatty acid is joined to CoA (acyl CoA, costs ATP) at the outer mitochondrial membrane, swapped onto carnitine by carnitine acyltransferase I to cross the inner membrane, and swapped back to CoA in the matrix by acyltransferase II. Carnitine acyltransferase I is the key regulatory step.
35. m5-betaox: Stage 3, β-oxidation, is four reactions repeated: oxidation (FADH2), hydration, oxidation (NADH), thiolysis (acetyl CoA off). Each round shortens the chain by two carbons.
36. m5-palm: Palmitate (16 C): 7 rounds, 7 FADH2, 7 NADH, 8 acetyl CoA, 108 ATP made, 2 spent on activation, net 106.
37. m5-odd: Three special cases. Very long chains (over 20 to 22 C) are shortened in peroxisomes, not for energy. Unsaturated chains need extra isomerases and reductases. Odd chains end with propionyl CoA, which becomes succinyl CoA.
38. m5-ketone: When β-oxidation makes acetyl CoA faster than oxaloacetate can take it, the liver's mitochondria turn it into ketone bodies (acetoacetate, β-hydroxybutyrate, acetone). Acetone is breathed and urinated out, the other two fuel other tissues. Too much is ketosis and can become ketoacidosis (starvation, long keto diets, diabetes).

### M5 L3 Fatty Acids Part 2: biosynthesis (LO 5.2)
39. m5-shuttle: Fatty acid synthesis happens in the cytosol but acetyl CoA is made in the mitochondria. It leaves as citrate, and ATP-citrate lyase turns it back into acetyl CoA and oxaloacetate. Oxaloacetate returns as malate, which yields an NADPH. Insulin stimulates this.
40. m5-acc: Step one is acetyl CoA carboxylase 1 (needs biotin, bicarbonate and ATP) making 3-carbon malonyl CoA. It is irreversible, so it commits acetyl CoA to fat synthesis and is the main regulatory step.
41. m5-fareg: Fatty acid synthesis follows diet. Fed and high-carb (insulin) raise it, fasting, high-fat diets and insulin deficiency lower it. Control is on acetyl CoA carboxylase and includes making more enzyme (adaptive control at transcription). Malonyl CoA also blocks carnitine acyltransferase I, so synthesis and degradation don't run together.
42. m5-elong: Elongation is four reactions, the reverse of β-oxidation: condensation, reduction, dehydration, reduction. Each round adds two carbons from malonyl CoA and costs 2 NADPH. All of it is done by one enzyme complex, fatty acid synthase, on the cytoplasmic face of the smooth ER.
43. m5-palmsyn: Making palmitate takes 8 acetyl CoA (1 starter + 7 as malonyl CoA), 7 rounds, 7 ATP and 14 NADPH (from the malate step and the pentose phosphate pathway).
44. m5-modify: Synthesis always ends at palmitate. Other fatty acids are made afterwards by more elongation, shortening or adding double bonds. Mammals can't add double bonds past C-9, which is why linoleate and linolenate are essential.
45. m5-vs: Degradation vs synthesis side by side: location, carrier, activated form, electron carrier, regulatory enzyme, product. (Guide synthesis of L2 and L3. The lecture keeps asking for this comparison.)

### M5 L4 From Fatty Acids to Storage and Membrane Lipids (LO 5.3, 5.4)
46. m5-pa: Triglycerides and phospholipids start the same way. Glycerol is activated to glycerol-3-phosphate (glycerol kinase) and fatty acids to acyl CoA, then two acyl transfers make phosphatidate. This happens on the cytosolic face of the smooth ER.
47. m5-tag: To finish a triglyceride, remove the phosphate from phosphatidate (giving diacylglycerol) and add a third fatty acid. Made mainly in the liver, sent to muscle for fuel or adipose for storage. About 85% of stored energy is triglyceride.
48. m5-pl: Phospholipids are finished one of two ways: activate the phosphatidate (cardiolipin, phosphatidylinositol) or activate the alcohol and add it to diacylglycerol (phosphatidylcholine, phosphatidylethanolamine). Phosphatidylcholine is the most common, needs choline kinase and ATP, and is one step away from the triglyceride path.
49. m5-pap: Phosphatidic acid phosphatase (PAP) is the switch. Active PAP makes diacylglycerol, which goes to triglyceride or to PC/PE. Inactive PAP leaves phosphatidate for the other phospholipids. Overall supply of free fatty acids sets how much lipid gets made.
50. m5-sphingo: Sphingolipids are built on sphingosine, not glycerol. They start from ceramide (palmitoyl CoA + serine) in the ER and are modified into sphingomyelin or glycosphingolipids. Most abundant in nervous tissue.
51. m5-disease: Lipids in disease: gangliosides are the binding site for cholera toxin and enterotoxigenic E. coli, and build up in Tay-Sachs. Dipalmitoyl-phosphatidylcholine is the lung surfactant missing in infant respiratory distress syndrome. Multiple sclerosis loses phospholipids and sphingolipids from myelin.

### M5 L5 Cholesterol Synthesis (LO 5.3)
52. m5-chol: Cholesterol has 27 carbons, all from acetyl CoA. It is made mainly in the liver and is needed for membranes, vitamin D, steroid hormones and bile salts.
53. m5-cholsteps: Five stages with their locations: mevalonate and isopentenyl diphosphate (5 C) in the cytosol, squalene (30 C) and lanosterol in the ER lumen, cholesterol at the ER membrane. HMG-CoA reductase (HMG-CoA to mevalonate) is the committed, rate-limiting step.
54. m5-cholreg: Cholesterol synthesis is controlled at HMG-CoA reductase, mostly by how much enzyme is transcribed (SREBP). Insulin and thyroid hormone raise it, glucagon and glucocorticoids lower it.
55. m5-lipoprot: Lipoproteins carry lipids in blood. More lipid = less dense. Chylomicrons carry dietary fat, VLDL carries the liver's excess triglyceride and cholesterol, IDL is what is left after VLDL unloads, LDL delivers cholesterol to tissues (high LDL: atherosclerosis, familial hypercholesterolemia), HDL brings it back to the liver (reverse transport, protective).

## Inventory
One file, `inventory.js`, built before any question is written. Per lesson: the takeaway (a), core items (b), side items (c), each with a stable id and the lecture block it comes from. Each question lists the core item ids it tests.

Estimated size (exact numbers come out of stage 1): about 250 core items grouped into about 105 clusters, and about 35 side items.

Validator `tests/validate_inv.js` fails the build if a core item has no question, if a question points at a side item without a "supports takeaway" flag, or if a question has no item at all. It also prints questions per cluster so thin spots show.

### Side content (no questions)
M4: hyaluronic acid structure, the hands analogy as a fact in itself, "Food for Thought" on why PEPCK was selected, video-only detail the text says to skip.
M5: MUFAs and visceral fat, peanut butter and shelf life, micelles and soaps (lecture says not tested), CeraVe, lipoproteins/sulfolipids/aminolipids list, carnitine supplements and the autism claim, DHAP as a supplement, keto breath, HMG-CoA reductase knockout mice, PE to PC backup route, "enzymes covalently joined: why" beyond the two reasons given.

### Borderline calls (my recommendation, Antonio decides)
- Lactose intolerance (labeled Fun Fact, M4 L1): treat as core for LO 4.4. It is three paragraphs and the clearest "altered carbohydrate metabolism" content in the module.
- Red blood cells have no mitochondria (Fun Fact, M4 L3): core. The lecture builds on it in the anaerobic section and again in L5.
- Malonyl CoA inhibits carnitine acyltransferase I (Fun Fact, M5 L3): core. It is the regulation link LO 5.2 asks for.
- Mammals can't desaturate past C-9 (Fun Fact, M5 L3): core. The lecture follows it with its own application question.
- Ethanol and fatty liver (Fun Fact, M5 L3): side, but one question allowed because it is a disease application.
- Carnitine deficiency (Food for Thought, M5 L2): one question, on "fatty acids can't enter the mitochondria", not on the autism claim.

## Lecture wording problems to flag (answer keys follow the lecture, guide gets a "Lecture wording" note)
M4
- L2: says hexokinase has a "higher Km (affinity)" and glucokinase a "lower Km (affinity)". Km is the inverse of affinity. The lecture's own graph shows glucokinase with the higher Km. Questions will be worded on affinity and on the graph so both readings give the same answer.
- L2 says 32 ATP per glucose aerobically, L3 says 36. Questions will not hinge on the number. "2 ATP anaerobically" is consistent and safe.
- L2 step 4 calls DHAP and G3P both aldotrioses (DHAP is a ketose).
- L3: says pyruvate kinase is located in the mitochondria (it is cytosolic), that pyruvate decarboxylation consumes an oxygen molecule, and "increase the activity of lactate" for lactate dehydrogenase.
- L4: calls phosphoglucomutase the key insulin-activated enzyme of glycogenesis while its own check says the rate-limiting enzymes are glycogen synthase and glycogen phosphorylase. Calls glycogenin "a short chain of glycogen" (it is a protein). Says muscle lacking glucose-6-phosphatase "is not able to convert G1P back into G6P" (the missing step is G6P to glucose). Says the liver builds glucose "from fatty acids" in starvation (L5 gives the correct list: amino acids, lactate, glycerol).
- L5: says skeletal muscle can do gluconeogenesis, then reminds you it lacks glucose-6-phosphatase. Says "ATP must be very low to activate" gluconeogenesis (it consumes ATP).
M5
- L1: trans fats have "an even higher melting point than saturated fats"; "when fats are saturated during food processing" (means hydrogenated); glycolipids called a "membrane protein"; ceramide called the fatty acid.
- L2: "FAD+" and "FADH"; "enol-CoA hydratase", "thiloase"; thiolysis "adds a new acyl-CoA" (adds CoA); fatty acids reach the intermembrane space "through voltage dependent ion channels".
- L3: citrate "feedback inhibition" described as moving citrate to the cytosol; "enzymes, such as prostaglandins, can introduce double bonds" (desaturases).
- L4: phospholipids "AKA phosphoglycolipids".
- L5: "SREBP is inhibited by insulin" while concluding insulin raises HMG-CoA reductase. The direction of the hormone effects is what questions will test.

## Questions
Target about 270 (Exam 1 had 161). Each tagged `kind: "fig" | "ex" | "why"`.

| | Figure ID | Specific example / quick application | Conceptual why | Total |
|---|---|---|---|---|
| M4 L1 | 10 | 10 | 4 | 24 |
| M4 L2 | 15 | 14 | 7 | 36 |
| M4 L3 | 13 | 13 | 6 | 32 |
| M4 L4 | 11 | 11 | 6 | 28 |
| M4 L5 | 7 | 8 | 5 | 20 |
| M4 total | 56 | 56 | 28 | 140 |
| M5 L1 | 10 | 10 | 4 | 24 |
| M5 L2 | 12 | 12 | 6 | 30 |
| M5 L3 | 11 | 11 | 6 | 28 |
| M5 L4 | 9 | 10 | 5 | 24 |
| M5 L5 | 10 | 9 | 5 | 24 |
| M5 total | 52 | 52 | 26 | 130 |
| All | 108 | 108 | 54 | 270 |

By LO (approx): 4.1 22, 4.2 106, 4.4 12, 5.1 22, 5.2 58, 5.3 42, 5.4 8, 5.5 0.

Style rules on top of the Exam 1 writing rules:
- Short stems. Answerable from the lecture text or figure alone.
- T/F statements reuse the lecture's wording (about a quarter of questions are T/F, half of them false).
- Specific-example questions use the lecture's own examples and numbers: palmitate counts, 2 ATP in / 4 out, C5 to C30, which food has which sugar, "a 16-carbon fatty acid needs how many rounds", "which formula is a monosaccharide", fed/fasting/starvation descriptions, activator or inhibitor.
- Every lecture knowledge check becomes at least one question in near-original form.
- Options same length and grammar, all plausible, no all/none of the above.
- Explanations stay short and link to the guide lesson and lecture block.

## Question figures (about 36 base figures feeding the 108 figure questions)
One base figure serves several questions (different arrow or blank each time).

Lecture images with labels masked and numbered (about 14): mono/di/poly structures, triose/pentose/hexose panel, D- vs L-glucose, aldose vs ketose, starch/glycogen/cellulose, pyruvate oxidation (already numbered 1 to 3), glycogen bond types, insulin/glucagon loop, phospholipid, triglyceride, the four fatty acid types, glycerophospholipid vs sphingolipid, carnitine shuttle, citrate-malate shuttle.

Generated SVG (about 22), where the lecture image is too dense for a phone or doesn't exist:
- Glycolysis 10-step ladder with blank enzyme boxes and ATP/NADH arrows
- Phase I / Phase II summary with blanks
- Cellular respiration four boxes with locations
- Hexokinase vs glucokinase curves (A and B)
- PFK-1 regulator map and pyruvate kinase regulator map
- Fates of pyruvate fork, lactate / NAD+ recycling loop
- Glycogen cycle (G6P, G1P, UDP-glucose, glycogen) with blank enzymes
- Liver vs muscle glycogen
- Glucose-source graph over fed/fasting/starved (curves A, B, C)
- Glycolysis vs gluconeogenesis with the bypass enzymes blank
- Fatty acid degradation overview (adipose, blood, liver, other tissue)
- β-oxidation four-step cycle (lecture has no image for this)
- Ketone body flow (liver, blood, tissue, lungs)
- Acetyl CoA carboxylase reaction
- Elongation four-step cycle (no lecture image)
- Phosphatidate branch point with PAP
- Phosphatidylcholine vs triglyceride finish
- Cholesterol five-stage pipeline with compartments and carbon counts
- Lipoprotein circuit (liver, tissues, intestine) with five blanks
- Lipoprotein density ladder

Guide figures: use the lecture's own images directly (allowed), so few new labeled figures are needed.

## Mocks and practice
- Mock: 25 questions, 40 min, 10 figure + 10 specific + 5 why, modules split 13/12 alternating, spread across lecture lessons. Unseen questions picked first across all LOs (the fix noted in the Exam 1 handoff). 270 questions gives at least 8 mocks with no repeats.
- Practice: per-lesson drill as in Exam 1, with filters by kind. Explanations link to the guide lesson and open the lecture window.
- Kept from Exam 1: lecture buttons, flagging, Back, LO popovers, desktop layout, saved progress, timer, resume.

## Expensive pieces
1. The 22 generated SVGs. Largest single cost (Exam 1's gen_figs.py is 82 KB).
2. Masked-image pipeline for lecture figures. New for biochem. The psych Exam 2 `figs.py` already does letter masks, so it is a port. Masked images are saved as files under `lectures/biochem-exam2/q/` and referenced by path, so the HTML stays small.
3. 270 questions with explanations, item ids and lecture highlights. About 1.7 times the Exam 1 bank.
4. Not proposing any animated tools this time. The Exam 1 feedback says the gap was exam-like practice, so the budget goes to questions and figures.
5. Cheap extras that reuse existing drill engines (optional): regulator sort (activates/inhibits PFK-1, pyruvate kinase), fed/fasting/starvation case drill, glycolysis-to-gluconeogenesis enzyme pairing, pathway location sort, lipoprotein sort, β-oxidation vs synthesis step order.

## Build stages (tests after each, handoff note updated after each)
0. Setup: copy template, build.py and tests into `src/biochem-exam2/`; give `extract_lecture.py` an output-folder argument and ImageHotspotQuestion support; extract both lectures; write `m4-digest.md` and `m5-digest.md`.
1. `inventory.js` + validator. Report exact core/side counts.
2. M4 guide lessons. 3. M5 guide lessons.
4. Question figures (mask pipeline, then SVGs).
5. M4 questions + lecture map. 6. M5 questions + lecture map.
7. Mock builder with kind quotas, practice filters, optional drills, full test pass.

Expect 3 to 4 chats. Each stage ends in a state that builds and passes tests. Commit and push only on Antonio's word.

## Open questions for Antonio
1. Exam date.
2. Confirm 4.3 is not on the exam and that 5.5 (PBOD) gets no questions.
3. LO 4.4 and 5.4 have thin lecture coverage. Is there a PBOD case, reading or other material for them?
4. The borderline calls above.
5. 270 questions and 55 lessons: right size, or trim?
6. Optional drills: yes or no.
