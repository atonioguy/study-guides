# M3 lecture digest (Module 3: Metabolism)

Condensed from the M3 .h5p (Interactive Book, 4 lessons). Paraphrased. Covers every testable fact, the lecture's own checks with answers, and the errors to flag. Build from this; don't re-read the .h5p unless something is missing.

Lecture lessons → src codes: L1 Metabolism overview, L2 Activated carriers, L3 Citric acid cycle, L4 Oxidative phosphorylation.

Official MLOs (use this wording for `los` titles):
- 3.1 Describe the general purpose of metabolism.
- 3.2 Categorize activated carriers by their metabolic role.
- 3.3 Explain three methods by which cells regulate metabolism.
- 3.4 Describe the central role of the citric acid cycle and oxidative phosphorylation in metabolism.
- 3.5 Diagram the cellular location, rate-limiting steps, products, and regulation of the citric acid cycle and oxidative phosphorylation.
- 3.6 Predict the effects of perturbations in oxidative phosphorylation.

## L1 Metabolism overview
- Metabolism: the sum of the chemical reactions in each cell that provide energy and build new organic material. Food digestion is only a part.
- Pathway = series of consecutive reactions. Classified as anabolic or catabolic.
- Anabolic (biosynthetic): small molecules joined into larger ones (macromolecules, cell parts). Consumes energy. Mnemonic: anabolic steroids, bodyBUILDer.
- Catabolic: large molecules broken down for fuel and building blocks. Usually by oxidation. Releases energy. Mnemonic: CATastrophe. The rest of the module focuses on catabolism.
- Most pathways come in complementary pairs. Naming clue: "genesis"/"synthesis" = anabolic; "lysis"/"oxidation" = catabolic.
- Lecture table (biomolecule: anabolic / catabolic):
  - Carbohydrates: gluconeogenesis, glycogenesis / glycolysis, glycogenolysis
  - Lipids: fatty acid, triacylglycerol, phospholipid, cholesterol synthesis / fatty acid oxidation, beta oxidation
  - Amino acids: amino acid synthesis / amino acid catabolism, urea cycle
  - Nucleic acids: de novo, salvage, pentose phosphate pathway / (none listed)
- Pathway features: pathways are interconnected (one's products are another's reactants); energy-releasing reactions are linked to energy-consuming ones (coupled reactions); ATP is the standard energy currency; a finite set of reaction types and a standard set of shared intermediates recur across pathways; intermediates = products made and consumed within the pathway; all steps enzyme-catalyzed.
- Many steps are reversible, but each pathway has one or more irreversible steps (reversing costs too much free energy). Lecture calls these the rate-limiting steps; they are the bottlenecks and the usual regulation targets.
- Homeostasis: keeping a stable internal environment while adjusting to conditions. Body also keeps different stable environments in different tissues. Claude Bernard (lecture says "Bernardo"): organisms adjust quantitatively and temporally.
- Why regulate (4): (1) different environments/diets demand different metabolites (make what food no longer supplies, stop making what it does); (2) without it you'd burn a meal at once and need constant food, no storage; (3) tissues differ (muscle/heart need lots of ATP, RBCs need little); (4) toxic byproducts: ox phos makes H2O2/ROS, and cells' neutralizing systems must keep up, which they couldn't if ox phos ran nonstop.
- Three ways to regulate (all act on the enzyme-substrate interaction, especially at the irreversible steps):
  1. Enzyme concentration: enzymes degrade; cells use inducers/repressors to raise or lower synthesis, mostly at the DNA level (transcription rate). Can also trigger breakdown of excess enzyme.
  2. Substrate concentration: mostly by compartmentalizing pathways away from their substrate, so substrate must be shuttled in. Analogy: stomach releases food into the intestine a little at a time.
  3. Catalytic activity: control enzyme-substrate binding by changing enzyme availability: (a) feedback inhibition (excess product binds the enzyme); (b) hormones alter an enzyme's activation site, allowing tissue-specific control.
- L1 T/F check (answers): some reactions are used in more than one pathway (T); once any reaction in a pathway happens it can't be undone (F); energy from an anabolic pathway can run a coupled catabolic pathway (F); all pathways are tightly regulated (T); regulation is needed to prevent toxic byproduct buildup (T); enzyme transcription rate is regulation via substrate concentration (F, it's enzyme concentration); feedback inhibition is regulation via catalytic activity (T); enzymes are often used up (F); compartmentalization is regulation via catalytic activity (F, it's substrate concentration); gluconeogenesis is anabolic (T).

## L2 Activated carriers
- A reaction is spontaneous only if ΔG < 0. For sequential reactions ΔG is additive, so a pathway runs if the sum is negative: unfavorable steps are driven by favorable steps they're coupled to through a shared intermediate.
- Lecture example: A → B + C, ΔG°′ = +21 kJ/mol (endergonic); B → D, ΔG°′ = −34 kJ/mol; total −13 kJ/mol, so the pathway runs. Coupled by shared intermediate B; step 2 "pulls" step 1.
- Activated carriers: small organic molecules holding energy in readily transferable form (a functional group or electrons). They diffuse fast and carry energy from where it's released (catabolism) to where it's needed (biosynthesis). Used when the goal is converting X to Y without running a whole pathway. Hydrolysis of the carrier coupled to an unfavorable reaction creates a shared intermediate; total ΔG = sum.
- Good carrier = kinetically stable but thermodynamically unstable. Kinetically stable: slow to react without a catalyst, so it doesn't degrade on its own. Thermodynamically unstable: its hydrolysis is spontaneous (ΔG < 0). Together: releases energy when it reacts, but only when an enzyme lets it, so enzymes control the flow of free energy.
- Lecture drag-the-words answer: carriers couple exergonic and endergonic reactions by creating a shared intermediate; must be thermodynamically unstable but kinetically stable; they will not degrade or react without a catalyst, but they will react spontaneously.
- ATP: main energy currency. Catabolism extracts energy from fuels (carbs, fats) and stores it as ATP; ATP powers motion, active transport, biosynthesis. Nucleotide: ribose + adenine + 3 phosphates. Outer phosphates joined by dehydration synthesis forming phosphoanhydride bonds; free energy is stored there ("high-energy phosphate compound", ~P squiggle).
- ATP → ADP + Pi: ΔG°′ = −30.5 kJ/mol. ATP → AMP + PPi: −45.6 kJ/mol.
- ATP-ADP cycle: ATP hydrolysis drives unfavorable reactions; ATP is re-formed from ADP + Pi when fuels are oxidized (condensation is unfavorable, so it must be coupled to a very favorable reaction). The fundamental mode of energy exchange.
- Phosphoryl-transfer potential: ATP is intermediate (Lehninger chart; phosphoenolpyruvate, 1,3-BPG, creatine phosphate above; glucose 6-phosphate, glycerol 3-phosphate below). ADP picks up Pi from higher compounds; ATP gives Pi to lower ones. That middle position is why it works as a carrier.
- Fill-in check answers: ATP-ADP cycle is the fundamental mode of energy exchange; ATP has intermediate phosphoryl-transfer potential; free energy is stored in the phosphate groups; energy is released when ATP is hydrolyzed.
- Carrier table (carrier: group carried: vitamin precursor):
  - ATP: phosphoryl: none
  - NADH and NADPH: electrons: nicotinate/niacin (B3)
  - FADH2: electrons: riboflavin (B2)
  - FMNH2: electrons: riboflavin (B2)
  - Coenzyme A: acyl: pantothenate (B5)
  - Biotin: CO2: biotin (B7)
  - Tetrahydrofolate: one-carbon units: folate (B9)
  - S-adenosylmethionine: methyl: none
- Accordion notes: CoA carries acyl via a high-energy thioester bond (acetyl CoA; fatty acid breakdown, lipid synthesis). Biotin transfers a carboxyl group; essential for forming oxaloacetate. THF donates one-carbon units for amino acid and nucleic acid synthesis; folic acid prevents up to 70% of neural tube defects; making THF from folate needs NADPH. SAM is the common methyl donor (gene regulation; methylates nucleic acids, proteins, lipids).
- Redox carriers: NADP+ → NADPH acts as reducing agent for anabolism (biosynthesis). NAD+, FAD, FMN are reduced to NADH, FADH2, FMNH2 in fuel oxidation, and their electrons drive ATP production.
- Poll answer: most carriers come from vitamin B. Six of the eight are B-vitamin derived and act as coenzymes; deficiency → inefficient metabolism.
- Vitamin B table (vitamin: coenzyme: reaction type: deficiency):
  - Thiamine B1: thiamine pyrophosphate: aldehyde transfer: beriberi (weight loss, heart problems, neurological dysfunction)
  - Riboflavin B2: FAD: oxidation-reduction: cheilosis and angular stomatitis, dermatitis
  - Pyridoxine B6: pyridoxal phosphate: group transfer to/from amino acids: depression, confusion, convulsions
  - Niacin B3: NAD+: oxidation-reduction: pellagra (dermatitis, depression, diarrhea)
  - Pantothenic acid B5: coenzyme A: acyl-group transfer: hypertension
  - Biotin B7: biotin-lysine adducts: ATP-dependent carboxylation, carboxyl transfer: rash about the eyebrows, muscle pain, fatigue (rare)
  - Folic acid B9: tetrahydrofolate: one-carbon transfer, thymine synthesis: anemia, neural-tube defects
  - Cobalamin B12: 5′-deoxyadenosylcobalamin: methyl transfer, intramolecular rearrangements: anemia, pernicious anemia, methylmalonic acidosis

## L3 Citric acid cycle
- We break food down for (1) monomers to build other molecules and (2) energy.
- Stepwise oxidation (many small enzyme-controlled releases, captured in carriers) vs direct burning (one big release, lost as heat). Stepwise allows storage, regulation, tissue variation; burning would need constant food and give a burst-then-crash (lecture: chocolate bar).
- Three stages of catabolism: (1) digestion and absorption: food → simple subunits; (2) primary catabolism: subunits → acetyl CoA, limited ATP and NADH; (3) cellular respiration: acetyl group fully oxidized to CO2 and H2O, large amounts of ATP. Stages 2 and 3 are boxed "mitochondrion" in the figure.
- Cellular respiration = citric acid cycle + oxidative phosphorylation. Lecture: occurs "within the mitochondrial matrix" (see errors).
- Acetyl CoA: CoA is the acyl-group carrier; with the 2-carbon acetyl unit attached = acetyl CoA, the starting material of the cycle and the merging point of catabolism. Not testing pathway details leading to it this module (only surface level).
- Three sources of acetyl CoA: pyruvate dehydrogenase (glycolysis → pyruvate → oxidative decarboxylation); fatty acid degradation (beta oxidation); amino acid degradation (Ile, Leu, Thr, Lys, Trp give acetyl CoA directly; others go via pyruvate).
- Lecture MC: which does NOT lead to acetyl CoA? Nucleic acid oxidation (answer). Distractors: fatty acid oxidation, pyruvate dehydrogenase, amino acid degradation.
- Why it converges: for regulation. CoA is compartmentalized in the mitochondrial matrix; forming acetyl CoA is decisive and irreversible with limited options after; body makes it only when needed by moving molecules into mitochondria from cytosol.
- Cycle = Krebs = tricarboxylic acid cycle: 8 reactions that oxidize the acetyl group to CO2 and reduce carriers for the ETC. Also important for anabolism (gluconeogenesis, lipogenesis, amino acid interconversion) but this module = catabolism. Liver is the only tissue where all these processes happen to a significant extent.
- Inputs: acetyl CoA (oxaloacetate is regenerated, so not an input), H2O (cycle consumes water though respiration overall makes it), NAD+ and FAD, ADP.
- Outputs per turn: 2 CO2, 3 NADH, 1 FADH2, 1 ATP (indirect, via GTP). The NADH/FADH2 (electrons for the ETC) are the main point of the cycle, not the single ATP.
- Net: acetyl CoA + 3 NAD+ + FAD + ADP + 2 H2O → 2 CO2 + 3 NADH + FADH2 + ATP + 2 H+ + CoA.
- Not required: all 8 steps. Required: ins and outs, the two halves, and these steps:
  - Two halves: (1) start: acetyl CoA + oxaloacetate → citrate, then carbons lost down to a 4-carbon molecule; (2) regeneration of oxaloacetate (makes ATP, FADH2, another NADH). The halves are not the same thing as the regulatory steps.
  - Step 1: acetyl CoA (2C) + oxaloacetate (4C) → citrate (6C), citrate synthase. (Synthase = joins two units, usually without direct ATP use.)
  - Step 3: isocitrate → α-ketoglutarate (5C), isocitrate dehydrogenase; first CO2 lost; NAD+ → NADH. Unstable intermediate oxalosuccinate (not required). Dehydrogenase = makes an electron carrier (NADH or FADH2).
  - Step 4: α-ketoglutarate → succinyl CoA (4C), α-ketoglutarate dehydrogenase complex; second CO2 lost; NAD+ → NADH. "Complex" = several enzymes acting as a unit.
  - Step 6: succinate → fumarate, succinate dehydrogenase; two H moved to FAD → FADH2. Highlighted because it is also Complex II of the ETC.
- Fun fact: the 2 carbons entering as acetyl are not the 2 released as CO2 in that turn.
- Regulation (lecture's four):
  1. Acetyl CoA formation (compartmentalization; decisive, irreversible). Inhibited by high ATP, NADH, acetyl CoA.
  2. Citrate synthase: feedback (product) inhibition by citrate; also inhibited by high ATP.
  3 and 4. Isocitrate DH and α-KG DH complex: both need NAD+ (niacin); α-KG DH also needs thiamine. Both activated by Ca2+ (muscle contraction raises Ca2+ → cycle speeds up → more ATP). Without free NAD+ (high NADH) the cycle slows.
  - Drag-and-drop items also list: + ADP (on isocitrate DH), − NADH, − ammonia (α-KG DH), − malonate (succinate DH), − fluoroacetate (citrate → isocitrate).
  - Not primary regulatory: succinate DH (regulated by oxaloacetate level) and malate DH (final step). Oxaloacetate is regenerated readily.
- Poisons (not regulation; they block the cycle → too little energy):
  - Fluoroacetate (plants, none native to North America; pesticide, used on coyotes, restricted by EPA since 1972): blocks citrate → isocitrate.
  - Malonate (legumes): resembles succinate; competitive inhibitor of succinate dehydrogenase → succinate accumulates. Krebs used it to show the cycle is a cycle.
  - Arsenite (most toxic arsenic form): blocks α-KG DH complex. High ammonia also inhibits it; hyperammonemia (advanced liver disease, genetic disease) → loss of consciousness, coma, convulsions, often death.

## L4 Oxidative phosphorylation
- Lecture MC: one turn of the cycle brings into ox phos 3 NADH and 1 FADH2.
- Inputs: NADH and FADH2 (their electrons and energy), ADP, O2 (final electron acceptor). Outputs: H2O, NAD+ and FAD (returned to the cycle), lots of ATP.
- ~2.5 ATP per NADH, ~1.5 per FADH2. One turn: 3(2.5) + 1.5 = 9, plus 1 from the cycle = 10.
- Two parts: (1) electron transport chain harvests electron energy to pump protons across the inner mitochondrial membrane, building a proton gradient; (2) ATP synthesis: protons flow back through ATP synthase (chemiosmosis, proton-motive force) and drive ATP formation.
- Fill-in answers: ETC = four protein complexes, each with higher affinity for electrons than the one before; protons pumped across the inner membrane; gradient runs ATP synthase; process = chemiosmosis / proton-motive force.
- ETC = complexes I to IV (of five). NADH drops electrons at Complex I, FADH2 at Complex II; the carriers go back to the cycle. Electrons pass by redox reactions, each complex higher affinity, releasing energy gradually (free-energy drop figure). Protons pumped into the intermembrane space; they can't cross the membrane except through the complexes; more H+ in the intermembrane space than in the matrix. At the end, O2 accepts electrons, splits, takes up H+ → water.
- Location: complexes are embedded in the inner mitochondrial membrane; gradient across it into the intermembrane space. The cycle is in the matrix. A gradient needs a closed, controllable compartment. Prokaryotes pump across the plasma membrane instead.
- Essay prompt: value of ox phos across the inner membrane (keywords gradient, regulation, proton, control).
- Complexes:
  - I, NADH dehydrogenase: NADH oxidized to NAD+, 2 electrons. Path: I → coenzyme Q (ubiquinone) → III → cytochrome c → IV → O2. Pumps 4 H+. II is not sequential to I; it's a second entry point.
  - II, succinate dehydrogenase (also a cycle enzyme): FADH2 → FAD, 2 electrons. Path: II → Q → III → cyt c → IV → O2. Sits on the membrane surface, not transmembrane; pumps 0 H+.
  - Q and cyt c are mobile carriers between stationary complexes. III (cytochrome c reductase) reduces cyt c; IV (cytochrome c oxidase) oxidizes it and passes electrons to O2. Lecture: III pumps 4, IV pumps 3. Totals: from I, 4+4+3 = 11; from II, 4+3 = 7.
  - V, ATP synthase: protons flow back like water turning a water wheel. 4 H+ per ATP (book's number; video said 3, debated). 11/4 = 2.75 per NADH, 7/4 = 1.75 per FADH2, adjusted for proton leak to ~2.5 and ~1.5.
- Drag check answers: I NADH dehydrogenase, II succinate dehydrogenase, III cytochrome c reductase, IV cytochrome c oxidase, V ATP synthase.
- Regulation: ox phos is the main control point of energy formation. Only natural regulation covered: uncoupling. Normally oxidation (ETC) and phosphorylation (ATP synthase) are tightly coupled. Uncoupled: ETC keeps running (electrons passed, protons pumped, O2 used), but protons leak back through uncoupling channels, the gradient collapses, no ATP; energy released as heat. Used for temperature regulation. Thermogenin (uncoupling protein-1, UCP1) in brown adipose tissue keeps core temperature up in prolonged cold. DNP (dinitrophenol) makes the inner membrane leaky to protons; used as a weight-loss drug until 1938.
- Lecture note: understand what happens when a complex is inhibited, not just which drug hits which complex.
- Drugs and poisons:
  - Barbiturates (amobarbital; "downers", Valley of the Dolls) inhibit Complex I. ATP can still be made via Complex II, but II is less efficient, so I inhibition can be fatal. Rotenone (rat poison, herbicide) also inhibits I. Complex I (44 proteins) is the most common complex with genetic disorders; range from slight leak/uncoupling (late-onset disease, mitochondrial decay) to fatal lactic acidosis and cardiomyopathy.
  - Malonate inhibits Complex II (succinate DH): can't harvest FADH2 electrons and the cycle can shut down, shutting everything down.
  - Carbon monoxide: competitive with O2 for hemoglobin; also, with cyanide, inhibits Complex IV. O2 can't take the final electron → cyt c stays reduced → can't accept more → whole chain backs up.
- Final MC: cyanide → the ETC stops and the gradient decreases (answer). Distractors: ETC speeds up and gradient strengthens; both stay the same; ETC reroutes through Complex II and gradient weakens.

## Lecture wording notes (flag in "Lecture wording" notes)
- Proton counts: lecture has IV pumping 3 (11 per NADH, 7 per FADH2) then adjusts 2.75 → 2.5 "for leak". Standard count is 4 + 4 + 2 = 10 per NADH and 6 per FADH2; at 4 H+ per ATP that's exactly 2.5 and 1.5. Teach the lecture's numbers, explain the difference.
- Location: lecture says respiration and the ETC are "within the mitochondrial matrix". The cycle is in the matrix (succinate DH sits in the inner membrane); the ETC and ATP synthase are in the inner membrane, pumping into the intermembrane space.
- "Both carbon monoxide and hemoglobin will inhibit complex IV": means CO and cyanide.
- "NAD+, FAD+, and FMN+": FAD and FMN carry no positive charge; the oxidized forms are FAD and FMN.
- "Transferring energy in the form of electrons (really, protons)": the carriers carry electrons (NADH carries a hydride, H−). Protons enter the story when the ETC pumps them.
- Coal → diamond as the kinetically stable / thermodynamically unstable example: at surface conditions the spontaneous direction is diamond → graphite (very slow). Coal to diamond needs heat and pressure and isn't spontaneous at the surface; heat and pressure aren't catalysts.
- Thermogenin called an enzyme: it's a channel (transport protein).
- "Irreversible steps are also called rate-limiting steps": irreversible steps are the usual control points; not every irreversible step is the slowest step.
- "Coenzyme A bound to an acyl group becomes acetyl CoA": acetyl CoA specifically carries the 2-carbon acetyl group; other acyl groups give other acyl-CoAs.
- Net reaction lists ADP → ATP; the cycle actually makes GTP (or ATP in some tissues) from GDP + Pi. Lecture says "one ATP per turn"; fine for the exam.
- "Claude Bernardo" = Claude Bernard.
