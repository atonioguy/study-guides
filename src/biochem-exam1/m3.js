// Module 3: Metabolism (LOs 3.1 to 3.6)
// Questions: src = lecture lesson (L1 metabolism overview, L2 activated carriers, L3 citric acid cycle, L4 oxidative phosphorylation). ref = lesson id. tag "beyond" = not in lecture.
MODS.push({
id:"m3", short:"M3", name:"Module 3: Metabolism",
los:[
{id:"3.1", nick:"Purpose of metabolism", title:"Describe the general purpose of metabolism"},
{id:"3.2", nick:"Activated carriers", title:"Categorize activated carriers by their metabolic role"},
{id:"3.3", nick:"Regulating metabolism", title:"Explain three methods by which cells regulate metabolism"},
{id:"3.4", nick:"CAC and ox phos: role", title:"Describe the central role of the citric acid cycle and oxidative phosphorylation in metabolism"},
{id:"3.5", nick:"CAC and ox phos: map", title:"Diagram the cellular location, rate-limiting steps, products, and regulation of the citric acid cycle and oxidative phosphorylation"},
{id:"3.6", nick:"Ox phos perturbations", title:"Predict the effects of perturbations in oxidative phosphorylation"}
],

guide:{
"3.1":[
{id:"m3-meta",h:"Anabolism and catabolism",fig:"m3metab",
b:`<p><b>Metabolism</b> is the sum of the chemical reactions in each cell that provide energy and build new organic material. Digesting food is only one part of it. The reactions are organized into <b>pathways</b>: series of consecutive reactions, each one catalyzed by an enzyme.</p>
<ul><li><b>Anabolic</b> (biosynthetic) pathways join small molecules into larger ones, such as macromolecules and cell parts. Building costs energy, so anabolism consumes it. Think bodybuilder: anabolic steroids build muscle.</li>
<li><b>Catabolic</b> pathways break large molecules down for fuel and building blocks, usually by oxidation. Breaking down releases energy. Think catastrophe: things fall apart.</li></ul>
<p>Most pathways come in complementary pairs, one building and one breaking down the same kind of molecule. The name usually tells you which is which: <b>-genesis</b> or <b>synthesis</b> means anabolic; <b>-lysis</b> or <b>oxidation</b> means catabolic.</p>
<table><tr><th>Biomolecule</th><th>Anabolic</th><th>Catabolic</th></tr>
<tr><td>Carbohydrates</td><td>Gluconeogenesis, glycogenesis</td><td>Glycolysis, glycogenolysis</td></tr>
<tr><td>Lipids</td><td>Fatty acid, triacylglycerol, phospholipid and cholesterol synthesis</td><td>Fatty acid oxidation (β-oxidation)</td></tr>
<tr><td>Amino acids</td><td>Amino acid synthesis</td><td>Amino acid catabolism, urea cycle</td></tr>
<tr><td>Nucleic acids</td><td>De novo and salvage synthesis, pentose phosphate pathway</td><td>None listed in lecture</td></tr></table>
<p>The energy released by catabolism is caught in activated carriers (mostly ATP, plus electron carriers like NADH), and anabolism spends those carriers. The rest of this module follows catabolism.</p>`,
so:`Breaking down releases energy and building up costs it, so knowing whether a pathway is anabolic or catabolic tells you which way energy flows through it.`},

{id:"m3-path",h:"How pathways fit together",
b:`<p>Pathways share a lot of machinery:</p>
<ul><li><b>They are interconnected.</b> The product of one pathway is often a reactant for another, and some reactions are used in more than one pathway.</li>
<li><b>They reuse a standard set of parts.</b> A limited number of reaction types and a standard set of shared intermediates show up again and again. An <b>intermediate</b> is a molecule made and then consumed inside the pathway, so it isn't a final product.</li>
<li><b>They are coupled.</b> Energy-releasing reactions are linked to energy-consuming ones, and ATP is the standard energy currency between them.</li>
<li><b>Every step is enzyme-catalyzed</b>, and enzymes are reused, not used up.</li></ul>
<p>Many steps in a pathway are reversible, but each pathway has one or more <b>irreversible</b> steps: reactions with a free-energy drop so large that reversing them would cost too much. Those steps are the bottlenecks and the usual targets of regulation, because whoever controls a one-way step controls whether material moves through the pathway at all. (Beyond lecture: when the opposite pathway runs, it uses different enzymes to get around these steps. Gluconeogenesis bypasses the irreversible steps of glycolysis this way.)</p>
<p>All of this serves <b>homeostasis</b>: keeping a stable internal environment while adjusting to changing conditions. The body also keeps different stable environments in different tissues. Claude Bernard put it as organisms adjusting both quantitatively (how much) and temporally (when).</p>`,
nl:"Lecture wording",note:`The lecture says irreversible steps "are also called rate-limiting steps." Irreversible steps are the usual control points, but not every irreversible step is the slowest step in its pathway, which is what rate-limiting strictly means. For the exam, treat "irreversible step," "committed step" and "control point" as the places regulation happens. The lecture spells the physiologist's name "Claude Bernardo"; it's Claude Bernard.`,
so:`Regulation sits at the irreversible steps, because a step that can't run backward decides whether material goes through the pathway at all.`},

{id:"m3-stages",h:"Three stages of catabolism",fig:"m3stages",
b:`<p>We break food down for two reasons: to get monomers we can build other molecules from, and to get energy.</p>
<p>Burning glucose in a flame and oxidizing it in a cell release the same total free energy (ΔG depends only on start and end points, Module 2). The difference is how it comes out. Burning releases it all at once, as heat. Cells oxidize fuel <b>stepwise</b>, in many small enzyme-controlled steps, and catch the energy from each step in activated carriers. Stepwise release lets the body store fuel, regulate how fast it's used, and run different tissues at different rates. If we burned food directly we'd need to eat constantly, with a burst of energy and then a crash (the lecture's chocolate-bar example).</p>
<ol><li><b>Digestion and absorption.</b> Proteins, polysaccharides and fats are broken into simple subunits: amino acids, sugars like glucose, fatty acids and glycerol.</li>
<li><b>Primary catabolism.</b> The subunits are converted to <b>acetyl CoA</b>. This makes a limited amount of ATP and NADH.</li>
<li><b>Cellular respiration.</b> The acetyl group is fully oxidized to CO₂ and H₂O in the citric acid cycle and oxidative phosphorylation, making large amounts of ATP.</li></ol>
<p>Stages 2 and 3 are boxed as the mitochondrion in the lecture figure. (Beyond lecture: glycolysis, the start of stage 2 for glucose, runs in the cytosol; pyruvate then moves into the mitochondrion. Acetyl CoA formation and stage 3 are mitochondrial.)</p>`,
so:`Every fuel funnels into acetyl CoA, so stage 3 is shared, and stepwise oxidation lets the cell catch the energy in carriers instead of losing it as heat.`}
],

"3.2":[
{id:"m3-couple",h:"Coupling: ΔG adds up",
b:`<p>A reaction runs on its own only if ΔG &lt; 0 (Module 2). Many reactions a cell needs have a positive ΔG. The way around that: <b>ΔG values of sequential reactions add.</b> A pathway runs if the sum of its ΔG values is negative, even when one step on its own is uphill.</p>
<p>The link between the steps is a <b>shared intermediate</b>: the product of the unfavorable step is the reactant of the favorable one. As the second step uses that intermediate up, it pulls the first step forward.</p>`,
so:`Add the ΔG values of linked steps. If the total is negative and the steps share an intermediate, the unfavorable step gets pulled along.`},
{steps:"A → B + C has ΔG°′ = +21 kJ/mol. B → D has ΔG°′ = −34 kJ/mol. Does the pathway run? (lecture example)",s:["Step 1 alone: +21 kJ/mol, endergonic, so it won't run by itself","Step 2: −34 kJ/mol, exergonic","B is made in step 1 and used in step 2, so the steps are coupled and their ΔG values add","+21 + (−34) = <b>−13 kJ/mol</b>","The total is negative, so the pathway runs. Step 2 pulls step 1 by consuming B"]},

{id:"m3-carrier",h:"What makes a good activated carrier",
b:`<p><b>Activated carriers</b> are small organic molecules that hold energy in a readily transferable form, either as a functional group or as electrons. Because they're small, they diffuse quickly, so they can carry energy from where it's released (catabolism) to where it's needed (biosynthesis, motion, transport). They also let a cell drive a single unfavorable conversion, X to Y, without running a whole pathway: hydrolyzing the carrier is coupled to the uphill reaction through a shared intermediate, and the ΔG values add.</p>
<p>A good carrier has to be two things at once:</p>
<ul><li><b>Thermodynamically unstable</b>: its reaction (for ATP, hydrolysis) has a negative ΔG, so there is energy to release.</li>
<li><b>Kinetically stable</b>: that reaction is very slow without a catalyst, so the carrier doesn't fall apart on its own.</li></ul>
<p>You need both. A thermodynamically stable carrier would have no energy to give. A kinetically unstable one would react in the cytosol before reaching an enzyme and waste its energy as heat. With both properties, the carrier releases its energy only when an enzyme lets it, so enzymes decide where free energy goes.</p>`,
nl:"Lecture wording",note:`The lecture uses coal turning into diamond as its example of something kinetically stable but thermodynamically unstable. That example runs the wrong way. At surface conditions the spontaneous (but extremely slow) direction is diamond turning into graphite. Coal to diamond takes heat and pressure, isn't spontaneous at the surface, and heat and pressure aren't catalysts. A diamond sitting on a table is the better picture: it "should" turn to graphite and practically never does.`,
so:`A carrier has to hold energy that wants out (thermodynamically unstable) and keep it in until an enzyme opens the door (kinetically stable).`},

{id:"m3-atp",h:"ATP and the ATP-ADP cycle",fig:"m3atp",
b:`<p>ATP is the main energy currency. Catabolism extracts energy from fuels like carbohydrates and fats and stores it as ATP; ATP then powers motion, active transport and biosynthesis.</p>
<p>ATP is a nucleotide: <b>adenine + ribose + three phosphates</b>. The outer phosphates are joined by dehydration (condensation), forming <b>phosphoanhydride bonds</b>. Free energy is stored in those phosphate linkages, which is why ATP is called a high-energy phosphate compound (sometimes drawn with a squiggle, ~P). (Beyond lecture: the energy comes from the whole molecule, not the bond alone. The crowded negative charges on the phosphates repel each other, and the products are better stabilized by resonance and water than ATP is.)</p>
<table><tr><th>Hydrolysis</th><th>ΔG°′</th></tr>
<tr><td>ATP → ADP + Pi</td><td>−30.5 kJ/mol</td></tr>
<tr><td>ATP → AMP + PPi</td><td>−45.6 kJ/mol</td></tr></table>
<p>The <b>ATP-ADP cycle</b> is the fundamental mode of energy exchange in cells. ATP hydrolysis drives unfavorable reactions. ADP + Pi is then turned back into ATP, but that condensation is uphill by the same 30.5 kJ/mol, so it has to be coupled to something very favorable: the oxidation of fuels.</p>`,
so:`ATP is spent to drive uphill reactions and rebuilt by coupling to fuel oxidation, so the cell keeps a small pool of ATP and recycles it constantly.`},

{id:"m3-ptp",h:"Phosphoryl-transfer potential",fig:"m3ptp",
b:`<p><b>Phosphoryl-transfer potential</b> is how readily a compound gives up its phosphate group. A more negative ΔG of hydrolysis means a higher potential. A compound can hand its phosphate to anything lower on the scale, because the coupled reaction has a negative total ΔG.</p>
<p>ATP sits in the <b>middle</b> of the scale. Phosphoenolpyruvate, 1,3-bisphosphoglycerate and creatine phosphate are above it, so they can phosphorylate ADP to make ATP. Glucose 6-phosphate and glycerol 3-phosphate are below it, so ATP can phosphorylate glucose and glycerol.</p>
<p>That middle position is what makes ATP work as a carrier. If ATP were at the top, nothing could recharge it. If it were at the bottom, it couldn't drive anything.</p>
<p>Worked with the textbook values: PEP + ADP → pyruvate + ATP has ΔG°′ = −61.9 + 30.5 = −31.4 kJ/mol, so it runs. Glucose + ATP → glucose 6-phosphate + ADP has ΔG°′ = −30.5 + 13.8 = −16.7 kJ/mol, so it also runs.</p>`,
nl:"Where the numbers come from",note:`The lecture shows the Lehninger chart and asks for ATP's position, not the numbers. The values in the figure and the worked example are the standard textbook values, so treat the numbers as beyond lecture and the order as testable.`,
so:`Phosphates flow downhill on the scale, and ATP's middle position lets it take phosphate from compounds above and give it to compounds below.`},

{id:"m3-carriers",h:"Carriers by what they carry",
b:`<table><tr><th>Carrier</th><th>Group carried</th><th>Vitamin precursor</th><th>Main role</th></tr>
<tr><td>ATP</td><td>Phosphoryl</td><td>None</td><td>Energy currency</td></tr>
<tr><td>NADH</td><td>Electrons</td><td>Niacin (B3)</td><td>Catabolism: electrons to the ETC</td></tr>
<tr><td>FADH₂</td><td>Electrons</td><td>Riboflavin (B2)</td><td>Catabolism: electrons to the ETC</td></tr>
<tr><td>FMNH₂</td><td>Electrons</td><td>Riboflavin (B2)</td><td>Electron transfer in fuel oxidation</td></tr>
<tr><td>NADPH</td><td>Electrons</td><td>Niacin (B3)</td><td>Reducing power for biosynthesis</td></tr>
<tr><td>Coenzyme A</td><td>Acyl</td><td>Pantothenate (B5)</td><td>Acyl groups (acetyl CoA)</td></tr>
<tr><td>Biotin</td><td>CO₂</td><td>Biotin (B7)</td><td>Carboxylation</td></tr>
<tr><td>Tetrahydrofolate</td><td>One-carbon units</td><td>Folate (B9)</td><td>Amino acid and nucleic acid synthesis</td></tr>
<tr><td>S-adenosylmethionine</td><td>Methyl</td><td>None</td><td>Methyl donor</td></tr></table>
<p><b>Electron carriers.</b> In fuel oxidation, NAD⁺, FAD and FMN pick up electrons and become NADH, FADH₂ and FMNH₂; those electrons then drive ATP production in the ETC. NADPH does a different job: it's the reducing agent for anabolism. NADH and NADPH carry the same electrons, but the extra phosphate on NADPH tags it for biosynthesis. (Beyond lecture: that tag lets the cell keep NAD⁺ mostly oxidized, ready to accept electrons in catabolism, and NADP⁺ mostly reduced, ready to donate them in biosynthesis.)</p>
<p><b>Group carriers.</b></p>
<ul><li><b>Coenzyme A</b> carries acyl groups through a high-energy thioester bond. With a 2-carbon acetyl group attached it is acetyl CoA, used in fatty acid breakdown and lipid synthesis.</li>
<li><b>Biotin</b> transfers a carboxyl group (from CO₂). It's essential for forming oxaloacetate.</li>
<li><b>Tetrahydrofolate</b> donates one-carbon units for amino acid and nucleic acid synthesis. Making THF from folate takes NADPH. Folic acid prevents up to 70% of neural tube defects.</li>
<li><b>SAM</b> is the common methyl donor. It methylates nucleic acids, proteins and lipids, which matters for gene regulation.</li></ul>`,
nl:"Lecture wording",note:`The lecture writes "NAD⁺, FAD⁺, and FMN⁺." Only NAD⁺ (and NADP⁺) carries a positive charge; the oxidized forms of the flavins are plain FAD and FMN. It also says carriers transfer energy "in the form of electrons (really, protons)." The electron carriers carry electrons: NADH carries a hydride ion (H⁻, one proton plus two electrons). Protons only enter the story when the ETC pumps them. Last, "coenzyme A bound to an acyl group becomes acetyl CoA" is true only for the 2-carbon acetyl group; other acyl groups make other acyl-CoAs.`,
so:`Sort a carrier by what it hands off: phosphoryl (ATP), electrons for the ETC (NADH, FADH₂), electrons for biosynthesis (NADPH), or a carbon group (CoA, biotin, THF, SAM).`},

{id:"m3-vitb",h:"B vitamins become coenzymes",
b:`<p>Most activated carriers come from vitamin B: six of the eight in the carrier table are B-vitamin derived, and they work as coenzymes. A deficiency means the enzymes that need that coenzyme run poorly, so metabolism becomes inefficient.</p>
<table><tr><th>Vitamin</th><th>Coenzyme</th><th>Reaction type</th><th>Deficiency</th></tr>
<tr><td>Thiamine (B1)</td><td>Thiamine pyrophosphate</td><td>Aldehyde transfer</td><td>Beriberi: weight loss, heart problems, neurological dysfunction</td></tr>
<tr><td>Riboflavin (B2)</td><td>FAD</td><td>Oxidation-reduction</td><td>Cheilosis and angular stomatitis, dermatitis</td></tr>
<tr><td>Niacin (B3)</td><td>NAD⁺</td><td>Oxidation-reduction</td><td>Pellagra: dermatitis, depression, diarrhea</td></tr>
<tr><td>Pantothenic acid (B5)</td><td>Coenzyme A</td><td>Acyl-group transfer</td><td>Hypertension</td></tr>
<tr><td>Pyridoxine (B6)</td><td>Pyridoxal phosphate</td><td>Group transfer to or from amino acids</td><td>Depression, confusion, convulsions</td></tr>
<tr><td>Biotin (B7)</td><td>Biotin-lysine adducts</td><td>ATP-dependent carboxylation, carboxyl transfer</td><td>Rash about the eyebrows, muscle pain, fatigue (rare)</td></tr>
<tr><td>Folic acid (B9)</td><td>Tetrahydrofolate</td><td>One-carbon transfer, thymine synthesis</td><td>Anemia, neural-tube defects</td></tr>
<tr><td>Cobalamin (B12)</td><td>5′-Deoxyadenosylcobalamin</td><td>Methyl transfer, intramolecular rearrangements</td><td>Anemia, pernicious anemia, methylmalonic acidosis</td></tr></table>
<p><b>Ties to the citric acid cycle.</b> Isocitrate dehydrogenase and the α-ketoglutarate dehydrogenase complex both need NAD⁺, which comes from niacin. The α-KG dehydrogenase complex also needs thiamine. Succinate dehydrogenase uses FAD, from riboflavin. Short on these vitamins, the cycle slows and less ATP is made. (Beyond lecture: that's a reasonable way to read why beriberi hits the heart and nerves, tissues that depend heavily on aerobic metabolism.)</p>`,
so:`A B-vitamin deficiency starves the enzymes that use its coenzyme, so look for which pathway step needs that coenzyme to predict what slows down.`}
],

"3.3":[
{id:"m3-why",h:"Why metabolism has to be regulated",
b:`<p>All pathways are tightly regulated. The lecture gives four reasons:</p>
<ol><li><b>Diets and environments change.</b> When food stops supplying a metabolite, the cell has to start making it; when food supplies it again, the cell should stop.</li>
<li><b>Storage.</b> Without regulation you'd burn a meal all at once and need food constantly. Regulation lets you store fuel and release it as needed.</li>
<li><b>Tissues differ.</b> Muscle and heart need a lot of ATP; red blood cells need little. Each tissue sets its own rates.</li>
<li><b>Toxic byproducts.</b> Oxidative phosphorylation makes hydrogen peroxide and other reactive oxygen species. The cell's neutralizing systems can keep up only if ox phos isn't running flat out all the time.</li></ol>`,
so:`Regulation matches supply to demand, which is what allows storage, tissue differences and keeping toxic byproducts below what the cell can clear.`},

{id:"m3-3ways",h:"Three ways to regulate",
b:`<p>All three methods act on the enzyme-substrate interaction, especially at irreversible steps. They differ in which side of that interaction they change.</p>
<table><tr><th>Method</th><th>What changes</th><th>How it's done</th><th>How to spot it</th></tr>
<tr><td><b>Enzyme concentration</b></td><td>How much enzyme exists</td><td>Inducers or repressors change the rate of enzyme synthesis, mostly at the DNA level (transcription). Excess enzyme can also be sent for breakdown.</td><td>Gene expression, transcription, inducer, repressor, "more enzyme made," enzyme degraded</td></tr>
<tr><td><b>Substrate concentration</b></td><td>How much substrate reaches the enzyme</td><td>Mostly compartmentalization: the pathway sits in a compartment away from its substrate, which has to be shuttled in</td><td>Compartment, membrane, transport into the mitochondrion, released "a little at a time"</td></tr>
<tr><td><b>Catalytic activity</b></td><td>How active each existing enzyme is</td><td>(a) Feedback inhibition: excess product binds the enzyme. (b) Hormones alter an enzyme's activation site, so control can be tissue-specific</td><td>Product inhibits, allosteric, hormone signal, enzyme switched on or off</td></tr></table>
<p>The lecture's analogy for substrate control: the stomach releases food into the intestine a little at a time, so the intestine's enzymes never see the whole meal at once.</p>
<p>Examples from later in this module: acetyl CoA can only be made once fuel molecules are moved into the mitochondrion (substrate concentration); citrate, the product of citrate synthase, inhibits that enzyme (catalytic activity, feedback).</p>
<p>Speed differs, too. Changing enzyme amount means making or destroying protein, so it's the slow, long-term method (Module 2, "Changing the amount of enzyme"). Feedback and allosteric control act in seconds on enzyme already there (Module 2, "Allosteric regulation and feedback").</p>`,
so:`Ask what the cell changed: the number of enzyme molecules, the substrate's access to them, or how well each enzyme works.`},
{drill:"m3d1"}
],

"3.4":[
{id:"m3-acoa",h:"Acetyl CoA: where catabolism merges",
b:`<p>Coenzyme A is the acyl-group carrier. With a 2-carbon acetyl group attached, it's <b>acetyl CoA</b>: the starting material of the citric acid cycle and the point where the catabolism of carbohydrates, fats and amino acids merges. This module only needs the surface of the pathways that lead to it.</p>
<p>Three sources of acetyl CoA:</p>
<ul><li><b>Pyruvate dehydrogenase</b>: glycolysis turns glucose into pyruvate, and pyruvate dehydrogenase converts pyruvate to acetyl CoA by oxidative decarboxylation (CO₂ leaves, NADH is made).</li>
<li><b>Fatty acid degradation</b> (β-oxidation).</li>
<li><b>Amino acid degradation</b>: isoleucine, leucine, threonine, lysine and tryptophan give acetyl CoA directly; others go through pyruvate.</li></ul>
<p>Nucleic acid breakdown is <b>not</b> a source.</p>
<p><b>Why everything converges here: regulation.</b> CoA is kept in the mitochondrial matrix, so fuel molecules have to be moved into the mitochondrion from the cytosol before acetyl CoA can be made. Forming acetyl CoA is decisive and irreversible, with limited options afterward. Controlling this one step (by controlling substrate entry) controls how much fuel commits to full oxidation, so the body makes acetyl CoA only when it's needed. (Beyond lecture: because the pyruvate dehydrogenase step is irreversible, acetyl CoA can't be turned back into glucose, which is why fatty acids can't be used for net glucose synthesis.)</p>`,
so:`All three fuel types feed one irreversible, mitochondrial step, so the cell controls how much fuel gets fully oxidized by controlling acetyl CoA formation.`},

{id:"m3-central",h:"Why the cycle and ox phos are central",
b:`<p><b>Cellular respiration</b> is the citric acid cycle plus oxidative phosphorylation.</p>
<p>The <b>citric acid cycle</b> (also called the Krebs cycle or tricarboxylic acid cycle) is 8 reactions that oxidize the acetyl group to CO₂ and save the electrons by reducing carriers. Per turn: 2 CO₂, 3 NADH, 1 FADH₂ and 1 ATP (made indirectly, as GTP). Loading NADH and FADH₂ is the main point of the cycle. The single ATP is a side benefit.</p>
<p><b>Oxidative phosphorylation</b> takes the electrons from NADH and FADH₂, passes them to O₂, and uses the energy to make most of the cell's ATP. It also hands NAD⁺ and FAD back to the cycle. The two depend on each other: the cycle can't run without a supply of NAD⁺ and FAD, and ox phos has nothing to work with without the cycle's NADH and FADH₂.</p>
<p>The cycle also matters for anabolism: its intermediates feed gluconeogenesis, lipogenesis (fat synthesis) and amino acid interconversion. The liver is the only tissue where all these processes happen to a significant extent. This module covers the catabolic side.</p>`,
so:`The cycle's job is to strip electrons off acetyl groups into NADH and FADH₂, and ox phos turns those electrons into most of the cell's ATP.`},
{steps:"How much ATP does one turn of the cycle yield? (lecture numbers)",s:["One turn makes 3 NADH, 1 FADH₂ and 1 ATP (as GTP)","Each NADH gives ~2.5 ATP in ox phos: 3 × 2.5 = 7.5","Each FADH₂ gives ~1.5 ATP: 1 × 1.5 = 1.5","From ox phos: 7.5 + 1.5 = 9","Add the cycle's own ATP: <b>10 ATP per acetyl CoA</b>. Nine of the ten come from ox phos"]}
],

"3.5":[
{id:"m3-cacio",h:"Citric acid cycle: location, inputs, outputs",
b:`<p><b>Location:</b> the mitochondrial matrix. (Succinate dehydrogenase is the exception: it's embedded in the inner membrane, because it doubles as Complex II of the ETC.)</p>
<table><tr><th>Inputs per turn</th><th>Outputs per turn</th></tr>
<tr><td>Acetyl CoA (2C)</td><td>2 CO₂</td></tr>
<tr><td>3 NAD⁺, 1 FAD</td><td>3 NADH, 1 FADH₂</td></tr>
<tr><td>ADP (GDP) + Pi</td><td>1 ATP (as GTP)</td></tr>
<tr><td>2 H₂O</td><td>CoA, 2 H⁺</td></tr></table>
<p>Net: <b>acetyl CoA + 3 NAD⁺ + FAD + ADP + 2 H₂O → 2 CO₂ + 3 NADH + FADH₂ + ATP + 2 H⁺ + CoA</b></p>
<ul><li><b>Oxaloacetate is regenerated.</b> It's used in the first step and remade in the last, so it doesn't count as an input, and one oxaloacetate keeps the cycle turning.</li>
<li><b>The cycle consumes water</b>, even though respiration as a whole makes water (at Complex IV).</li>
<li><b>O₂ doesn't appear</b> in the cycle. The cycle still depends on O₂ indirectly, because only the ETC regenerates its NAD⁺ and FAD.</li></ul>
<p>A detail the lecture mentions: the two carbons that enter as acetyl in a given turn are not the two that leave as CO₂ in that turn. They leave in later turns.</p>`,
nl:"Lecture wording",note:`The lecture's net equation writes ADP → ATP. The cycle's enzyme actually makes GTP from GDP + Pi (or ATP in some tissues), and GTP is easily converted to ATP. "One ATP per turn" is fine for the exam.`,
so:`Per acetyl CoA the cycle gives off 2 CO₂ and loads 3 NADH and 1 FADH₂, regenerating its oxaloacetate so it can go again.`},

{id:"m3-cacsteps",h:"The two halves and the four steps to know",fig:"m3cacw",
b:`<p>You don't need all 8 steps. You need the two halves, these four steps, and the carbon count.</p>
<p><b>First half:</b> acetyl CoA (2C) joins oxaloacetate (4C) to make citrate (6C), and then carbons are lost as CO₂ until a 4-carbon molecule (succinyl CoA) is left. <b>Second half:</b> that 4-carbon molecule is reworked back into oxaloacetate, making ATP (GTP), FADH₂ and one more NADH along the way. The halves are not the same thing as the regulatory steps.</p>
<table><tr><th>Step</th><th>Reaction</th><th>Enzyme</th><th>What comes out</th></tr>
<tr><td>1</td><td>Acetyl CoA (2C) + oxaloacetate (4C) → citrate (6C)</td><td>Citrate synthase</td><td>CoA released</td></tr>
<tr><td>3</td><td>Isocitrate (6C) → α-ketoglutarate (5C)</td><td>Isocitrate dehydrogenase</td><td>First CO₂, NADH</td></tr>
<tr><td>4</td><td>α-Ketoglutarate (5C) → succinyl CoA (4C)</td><td>α-Ketoglutarate dehydrogenase complex</td><td>Second CO₂, NADH</td></tr>
<tr><td>6</td><td>Succinate → fumarate</td><td>Succinate dehydrogenase</td><td>FADH₂ (two H moved to FAD)</td></tr></table>
<p><b>Read the enzyme names.</b> A <b>synthase</b> joins two units, usually without spending ATP directly. A <b>dehydrogenase</b> removes hydrogens (electrons) and makes an electron carrier, NADH or FADH₂. A <b>complex</b> is several enzymes acting as one unit.</p>
<p>Step 6 is highlighted because succinate dehydrogenase is also <b>Complex II</b> of the electron transport chain: the FADH₂ it makes feeds electrons straight into the chain. (Step 3 passes through an unstable intermediate, oxalosuccinate, which you don't need.)</p>
<p><b>Carbon count:</b> 2 + 4 → 6 (citrate) → 6 (isocitrate) → 5 (α-ketoglutarate) → 4 (succinyl CoA) → 4 → 4 → 4 → 4 (oxaloacetate). The two drops in carbon number are the two CO₂, both in the first half, both at dehydrogenase steps that also make NADH.</p>`,
so:`Carbons leave only at steps 3 and 4, each with an NADH, and step 6's FADH₂ goes straight into the ETC because its enzyme is Complex II.`},

{id:"m3-cacreg",h:"How the cycle is regulated",fig:"m3cacreg",
b:`<table><tr><th>Control point</th><th>Speeds it up</th><th>Slows it down</th></tr>
<tr><td>Acetyl CoA formation (entry into the matrix; decisive, irreversible)</td><td></td><td>High ATP, NADH, acetyl CoA</td></tr>
<tr><td>Citrate synthase (step 1)</td><td></td><td>Citrate (its own product, feedback); high ATP</td></tr>
<tr><td>Isocitrate dehydrogenase (step 3)</td><td>Ca²⁺, ADP</td><td>High NADH (needs free NAD⁺)</td></tr>
<tr><td>α-Ketoglutarate dehydrogenase complex (step 4)</td><td>Ca²⁺</td><td>High NADH (needs free NAD⁺; also needs thiamine), ammonia</td></tr></table>
<p><b>The logic.</b> Signals that the cell is already energy-rich (ATP, NADH, acetyl CoA, citrate) slow the cycle. Signals of demand speed it up: ADP means ATP is being spent, and Ca²⁺ rises when muscle contracts, so the cycle speeds up to make more ATP right when the muscle needs it.</p>
<p><b>NAD⁺ supply.</b> Both dehydrogenases use NAD⁺ as a substrate. When NADH builds up, little free NAD⁺ is left, and the cycle slows. This links the cycle to the ETC: anything that stops the ETC from turning NADH back into NAD⁺ stalls the cycle too.</p>
<p><b>Not primary control points:</b> succinate dehydrogenase (governed by the oxaloacetate level) and malate dehydrogenase (the last step). Oxaloacetate is regenerated readily.</p>
<p>Malonate, fluoroacetate and arsenite also slow the cycle, but they are poisons, not regulation (3.6).</p>`,
so:`Energy-rich signals (ATP, NADH, citrate) brake the cycle, demand signals (ADP, Ca²⁺) speed it, and both dehydrogenases stall when NAD⁺ runs short.`},
{drill:"m3d2"},
{tool:"cac"},

{id:"m3-etc",h:"The electron transport chain",fig:"m3etc",
b:`<p>Oxidative phosphorylation has two parts: the <b>electron transport chain</b> (ETC) uses the energy of electrons to pump protons and build a gradient, and <b>ATP synthase</b> uses that gradient to make ATP.</p>
<p><b>Location.</b> The complexes are embedded in the <b>inner mitochondrial membrane</b>, and they pump protons from the matrix into the <b>intermembrane space</b>. A gradient needs a closed compartment the cell controls, and the inner membrane is impermeable to H⁺ except through the complexes, so H⁺ piles up in the intermembrane space. (Prokaryotes have no mitochondria and pump across the plasma membrane.)</p>
<table><tr><th>Complex</th><th>Name</th><th>Electrons from → to</th><th>H⁺ pumped (lecture)</th></tr>
<tr><td>I</td><td>NADH dehydrogenase</td><td>NADH (2 e⁻) → coenzyme Q</td><td>4</td></tr>
<tr><td>II</td><td>Succinate dehydrogenase</td><td>FADH₂ (2 e⁻) → coenzyme Q</td><td>0</td></tr>
<tr><td>III</td><td>Cytochrome c reductase</td><td>Q → cytochrome c</td><td>4</td></tr>
<tr><td>IV</td><td>Cytochrome c oxidase</td><td>Cytochrome c → O₂ (→ H₂O)</td><td>3</td></tr>
<tr><td>V</td><td>ATP synthase</td><td>No electrons; H⁺ flow back in</td><td>Uses ~4 H⁺ per ATP</td></tr></table>
<ul><li>Each complex has a <b>higher affinity for electrons</b> than the one before, so electrons move downhill one redox step at a time and energy is released gradually.</li>
<li><b>Coenzyme Q</b> (ubiquinone) and <b>cytochrome c</b> are small <b>mobile carriers</b> that shuttle electrons between the stationary complexes.</li>
<li><b>Complex II is a second entry point</b> that runs alongside Complex I. It sits on the matrix surface of the membrane instead of spanning it, and pumps no protons.</li>
<li><b>O₂ is the final electron acceptor.</b> At Complex IV it takes the electrons, splits, and picks up H⁺ to form water.</li>
<li>NAD⁺ and FAD go back to the citric acid cycle.</li></ul>
<p>Paths: NADH → I → Q → III → cyt c → IV → O₂. FADH₂ → II → Q → III → cyt c → IV → O₂. FADH₂'s electrons skip Complex I's pump, which is why FADH₂ is worth less ATP.</p>`,
nl:"Lecture wording",note:`The lecture says respiration and the ETC happen "within the mitochondrial matrix." The citric acid cycle is in the matrix; the ETC complexes and ATP synthase are in the inner membrane, pumping into the intermembrane space. If an exam answer choice says matrix for the ETC, read the rest of the choices before picking it.`,
so:`Electrons drop through I or II, then Q, III, cyt c and IV to O₂, and the energy of each drop pumps H⁺ out of the matrix across the inner membrane.`},

{id:"m3-pmf",h:"Chemiosmosis and ATP synthase",
b:`<p>Pumping leaves more H⁺ in the intermembrane space than in the matrix. That gradient stores energy, called the <b>proton-motive force</b>. (Beyond lecture: it has two parts, a concentration difference and a charge difference, since the intermembrane side is also more positive.)</p>
<p>The protons can only get back into the matrix through <b>ATP synthase</b> (Complex V). As they flow through, they turn part of the enzyme like water turning a water wheel, and the rotation drives ADP + Pi → ATP. Making ATP with a proton gradient is <b>chemiosmosis</b>.</p>
<p>The two halves of ox phos are separate machines connected only by the gradient. Oxidation (the ETC) builds the gradient; phosphorylation (ATP synthase) spends it. Normally they are tightly <b>coupled</b>: one doesn't run without the other. That connection is what 3.6 breaks.</p>`,
nl:"Lecture wording",note:`The lecture gives Complex IV 3 protons, so 11 per NADH and 7 per FADH₂, then rounds 2.75 and 1.75 down "for leak." The standard textbook count is 4 + 4 + 2 = 10 H⁺ per NADH and 6 per FADH₂, which at 4 H⁺ per ATP gives exactly 2.5 and 1.5. The lecture video also mentions 3 H⁺ per ATP, which is debated. Both routes land on ~2.5 ATP per NADH and ~1.5 per FADH₂, and those are the numbers to use.`,
so:`The ETC charges the gradient and ATP synthase spends it, so anything that changes the gradient changes ATP output even if the chain is untouched.`},
{steps:"ATP per NADH and per FADH₂ (lecture counts)",s:["H⁺ pumped per NADH: I + III + IV = 4 + 4 + 3 = 11","Per FADH₂ (enters at II, which pumps 0): III + IV = 4 + 3 = 7","ATP synthase uses ~4 H⁺ per ATP: 11 ÷ 4 = 2.75 and 7 ÷ 4 = 1.75","Some H⁺ leak back without making ATP, so round down: <b>~2.5 ATP per NADH, ~1.5 per FADH₂</b>"]}
],

"3.6":[
{id:"m3-uncouple",h:"Uncoupling",fig:"m3leak",
b:`<p>Ox phos is the main control point of energy production, and the one natural regulation the lecture covers is <b>uncoupling</b>.</p>
<p><b>Coupled</b> (normal): the ETC pumps H⁺ out, and H⁺ comes back through ATP synthase, making ATP. <b>Uncoupled</b>: a second route lets H⁺ back into the matrix without going through ATP synthase. Then:</p>
<ul><li>The ETC keeps running: electrons flow, protons are pumped, O₂ is used. With the gradient draining, nothing holds the chain back, so O₂ use goes up.</li>
<li>The gradient collapses, so ATP synthase has little to work with and ATP production falls.</li>
<li>The energy from electron flow is released as <b>heat</b>.</li></ul>
<table><tr><th></th><th>O₂ use</th><th>ATP made</th><th>H⁺ gradient</th><th>Heat</th></tr>
<tr><td>Uncoupler present</td><td>Up</td><td>Down</td><td>Down</td><td>Up</td></tr></table>
<p><b>Thermogenin</b> (uncoupling protein 1, UCP1) is a proton channel in the inner membrane of <b>brown adipose tissue</b>. In prolonged cold it opens, and the fuel burned becomes heat that keeps core temperature up. This is uncoupling used on purpose, for temperature regulation.</p>
<p><b>DNP</b> (2,4-dinitrophenol) makes the inner membrane leaky to protons. It was sold as a weight-loss drug until 1938: the body burns more fuel trying to make the same ATP. (Beyond lecture: the danger is that the extra energy comes out as heat, and body temperature can rise uncontrollably.)</p>`,
nl:"Lecture wording",note:`The lecture calls thermogenin an enzyme. It's a channel (a transport protein): it lets protons cross the membrane and catalyzes no reaction.`,
so:`An uncoupler gives protons a way home that skips ATP synthase, so the chain runs faster, uses more O₂ and makes heat instead of ATP.`},

{id:"m3-etcinhib",h:"Blocking a complex",
b:`<p>The lecture wants you to predict what happens when a complex is inhibited, not just match drugs to complexes. The rule: <b>everything upstream of the block backs up and stays reduced; everything downstream runs dry.</b> No electron flow past the block means no pumping there, so the gradient fades and ATP falls.</p>
<p><b>Complex IV: carbon monoxide, cyanide.</b> O₂ can't take the last electrons. Cytochrome c stays reduced and can't accept more, so III can't unload, Q stays reduced, and I and II can't hand off their electrons. The whole chain stops: no O₂ use, no pumping, the gradient decreases, and ATP synthesis stops. NADH builds up and NAD⁺ runs out, so the citric acid cycle stops too. (CO also competes with O₂ for hemoglobin, Module 2.) There's no detour: Complex II feeds into the same Q → III → IV path, so it's blocked too.</p>
<p><b>Complex I: amobarbital, rotenone.</b> Barbiturates such as amobarbital ("downers") and rotenone (used as a rat poison and herbicide) block Complex I. Electrons from NADH can't enter, so NADH builds up. Electrons from FADH₂ still enter at Complex II and flow through III and IV, so some pumping and some ATP continue. That route is less efficient (it skips Complex I's pump, and most electrons arrive as NADH), so Complex I inhibition can still be fatal. Complex I (44 proteins) is also the complex most often hit by genetic disorders, ranging from slight leak and uncoupling (late-onset disease, mitochondrial decay) to fatal lactic acidosis and cardiomyopathy.</p>
<p><b>Complex II: malonate.</b> Malonate looks like succinate and competitively inhibits succinate dehydrogenase. FADH₂ electrons can't enter the chain, and because succinate DH is also a cycle enzyme, the citric acid cycle can stop, which cuts off the NADH supply as well. Everything shuts down.</p>
<table><tr><th>Block</th><th>Example</th><th>Electrons still entering?</th><th>O₂ use</th><th>ATP</th><th>Gradient</th></tr>
<tr><td>IV</td><td>Cyanide, CO</td><td>None reach O₂</td><td>Stops</td><td>Stops</td><td>Falls</td></tr>
<tr><td>I</td><td>Amobarbital, rotenone</td><td>Only via II (FADH₂)</td><td>Down</td><td>Down</td><td>Down</td></tr>
<tr><td>II</td><td>Malonate</td><td>Only via I, until the cycle stalls</td><td>Down</td><td>Down</td><td>Down</td></tr>
<tr><td>V (beyond lecture)</td><td>Oligomycin</td><td>Slows to a trickle</td><td>Down</td><td>Stops</td><td>Up</td></tr></table>
<p><b>Beyond lecture: blocking ATP synthase.</b> Oligomycin blocks Complex V. Protons can't flow back, so the gradient climbs until pumping against it gets too hard, and the ETC slows even though every complex is intact. O₂ use drops. Adding an uncoupler then restarts O₂ use, because protons have a way back again. This shows that ETC speed is set by how fast the gradient is spent.</p>`,
nl:"Lecture wording",note:`The lecture says "both carbon monoxide and hemoglobin will inhibit complex IV." It means carbon monoxide and cyanide. Hemoglobin is the protein CO competes for in blood.`,
so:`Find the block, then reason in both directions: carriers before it stay loaded, everything after it runs dry, and no flow means no pumping and no ATP.`},
{drill:"m3d3"},

{id:"m3-cacpoison",h:"Poisons of the citric acid cycle",
b:`<p>These compounds block the cycle, which is different from regulation: the cell can't turn them off when it needs energy. The result is too little NADH and FADH₂ and so too little ATP. The general pattern: <b>the intermediate just before the block piles up</b>, and everything after it runs short.</p>
<table><tr><th>Poison</th><th>Source</th><th>Blocks</th><th>What piles up</th></tr>
<tr><td>Fluoroacetate</td><td>Plants (none native to North America); a pesticide used on coyotes, restricted by the EPA since 1972</td><td>Citrate → isocitrate</td><td>Citrate</td></tr>
<tr><td>Malonate</td><td>Legumes</td><td>Succinate dehydrogenase (competitive; looks like succinate)</td><td>Succinate</td></tr>
<tr><td>Arsenite</td><td>Arsenic (its most toxic form)</td><td>α-Ketoglutarate dehydrogenase complex</td><td>α-Ketoglutarate</td></tr>
<tr><td>Ammonia (high)</td><td>Advanced liver disease, genetic disease</td><td>α-Ketoglutarate dehydrogenase complex</td><td>α-Ketoglutarate</td></tr></table>
<p><b>Hyperammonemia</b> (too much ammonia in the blood) inhibits the α-KG dehydrogenase complex and causes loss of consciousness, coma, convulsions and often death.</p>
<p>Krebs used malonate to show that the pathway is a cycle: with succinate dehydrogenase blocked, succinate piled up.</p>
<p>(Beyond lecture: fluoroacetate itself is harmless until the cell runs it through the first step of the cycle. Citrate synthase turns it into fluorocitrate, which blocks aconitase, the enzyme for citrate → isocitrate.)</p>`,
so:`Name the blocked step and the intermediate right before it piles up; less flow through the cycle means less NADH and FADH₂ and so less ATP.`}
]
},

questions:[
{id:"m3a01",lo:"3.1",src:"L1",ref:"m3-meta",type:"mc",
stem:"A pathway's enzymes join small precursor molecules into one larger molecule, and the pathway only runs because it is coupled to ATP hydrolysis. How would you classify it?",
opts:["Anabolic, because it builds a larger molecule and consumes energy","Catabolic, because ATP hydrolysis inside it releases energy","Anabolic, because its uncoupled ΔG would be negative","Catabolic, because joining molecules requires oxidation"],ans:0,
exp:"Joining small molecules into a larger one is building, and building costs energy, which is why the pathway needs ATP hydrolysis to run. That makes it anabolic. The ATP hydrolysis is the energy being spent, not a sign that the pathway itself is catabolic."},
{id:"m3a02",lo:"3.1",src:"L1",ref:"m3-meta",type:"tf",
stem:"From their names alone, you can predict that glycogenolysis and fatty acid oxidation release energy, while gluconeogenesis consumes it.",ans:true,
exp:"-lysis and oxidation mark catabolic pathways, which break molecules down and release energy. -genesis marks an anabolic pathway, which builds molecules and consumes energy."},
{id:"m3a03",lo:"3.1",src:"L1",ref:"m3-path",type:"tf",
stem:"Because every pathway has at least one irreversible step, every reaction in a metabolic pathway is irreversible.",ans:false,
exp:"Many steps in a pathway are reversible. Each pathway has one or more irreversible steps, and those are the bottlenecks where regulation usually happens."},
{id:"m3a04",lo:"3.1",src:"L1",ref:"m3-path",type:"mc",
stem:"A five-step pathway has four steps with ΔG near zero under cell conditions. Step 3 has a large negative ΔG. Where would you expect the cell to regulate this pathway?",
opts:["At step 3, because a one-way step decides whether material moves through","At step 1, because the first step of any pathway is the regulated one","At step 5, because blocking the last step stops product buildup","At steps 2 and 4, because near-equilibrium steps are easiest to push"],ans:0,
exp:"The near-equilibrium steps run in whichever direction concentrations push them. Step 3 is effectively irreversible, so it acts as the bottleneck: controlling it controls flow through the whole pathway."},
{id:"m3a05",lo:"3.1",src:"L3",ref:"m3-stages",type:"mc",
stem:"Burning glucose in a flame and oxidizing it to CO₂ and H₂O in a cell release the same total free energy. What does the cell gain by oxidizing it in many small steps?",
opts:["Energy comes out in small amounts that carriers can capture instead of heat","Stepwise oxidation releases more total energy per glucose than burning","Stepwise oxidation makes the overall ΔG positive so enzymes can control it","Stepwise oxidation avoids making CO₂ until the very last step"],ans:0,
exp:"ΔG depends only on the start and end points, so the total is the same. Releasing it in small enzyme-controlled steps lets the cell catch each piece in carriers like NADH and ATP, and lets it store fuel and regulate the rate."},

{id:"m3a06",lo:"3.2",src:"L2",ref:"m3-couple",type:"mc",fig:"q-dg3",fixed:true,
stem:"Reaction X has the ΔG°′ shown. It can be coupled to Y or to Z through a shared intermediate. Which coupling would let X run?",
opts:["Coupling to Z only","Coupling to Y only","Coupling to either Y or Z","Neither; an endergonic step can't be driven"],ans:0,
steps:["X + Y: +25 + (−14) = +11 kJ/mol, still positive","X + Z: +25 + (−32) = −7 kJ/mol, negative","Only the X + Z pair has a negative total"],
exp:"Coupled ΔG values add. X with Y totals +11 kJ/mol, so the pair still won't run. X with Z totals −7 kJ/mol, so Z can pull X forward."},
{id:"m3a07",lo:"3.2",src:"L2",ref:"m3-couple",type:"tf",
stem:"A reaction with ΔG°′ = +15 kJ/mol will be driven by one with ΔG°′ = −20 kJ/mol whenever both happen in the same compartment, even if they share no molecules.",ans:false,
exp:"Adding ΔG values only works when the reactions are linked through a shared intermediate: the product of one is the reactant of the other. Two unrelated reactions in the same space don't drive each other."},
{id:"m3a08",lo:"3.2",src:"L2",ref:"m3-carrier",type:"mc",
stem:"A lab makes a synthetic energy carrier. Its hydrolysis has ΔG°′ = −35 kJ/mol, but it hydrolyzes within seconds in water with no enzyme. Why would it make a poor activated carrier?",
opts:["It would release its energy as heat before an enzyme could use it","Its ΔG is too negative to couple to any endergonic reaction","It is kinetically stable, so no enzyme could make it react","It is thermodynamically stable, so it has no energy to give"],ans:0,
exp:"It has plenty of energy (thermodynamically unstable), but it isn't kinetically stable. It would fall apart in the cytosol on its own, so enzymes couldn't decide where its energy goes."},
{id:"m3a09",lo:"3.2",src:"L2",ref:"m3-carrier",type:"tf",
stem:"Making a carrier more kinetically stable doesn't change how much free energy it releases when an enzyme finally hydrolyzes it.",ans:true,
exp:"Kinetic stability is about speed: how slowly the reaction goes without a catalyst. The amount of energy released is ΔG, which depends only on start and end states."},
{id:"m3a10",lo:"3.2",src:"L2",ref:"m3-ptp",type:"mc",fig:"q-ptp4",fixed:true,
stem:"Compounds P, Q and R are ranked alongside ATP by the free energy released when their phosphate is hydrolyzed. Which can transfer its phosphate to ADP to make ATP under standard conditions?",
opts:["P only","Q and R","P, Q and R","None; only ATP synthase makes ATP"],ans:0,
steps:["P + ADP → ATP: −52 + 30.5 = −21.5 kJ/mol, runs","Q + ADP → ATP: −21 + 30.5 = +9.5 kJ/mol, doesn't run","R: −9 + 30.5 = +21.5 kJ/mol, doesn't run"],
exp:"A phosphate moves downhill on the scale. Only P sits above ATP, so only P releases more energy giving up its phosphate than ADP needs to take one on. Q and R are below ATP; ATP can phosphorylate them instead."},
{id:"m3a11",lo:"3.2",src:"L2",ref:"m3-ptp",type:"tf",
stem:"ATP would work better as an energy carrier if it had the highest phosphoryl-transfer potential of any compound in the cell.",ans:false,
exp:"At the top of the scale, ATP could phosphorylate anything, but nothing could phosphorylate ADP to recharge it. Its middle position lets it be recharged from above and spent below."},
{id:"m3a12",lo:"3.2",src:"L2",ref:"m3-carriers",type:"mc",
stem:"An enzyme in fatty acid synthesis needs a carrier to donate electrons that reduce its substrate. Which carrier is it most likely to use?",
opts:["NADPH","NADH","FADH₂","Coenzyme A"],ans:0,
exp:"Fatty acid synthesis is anabolic, and NADPH is the reducing agent for biosynthesis. NADH and FADH₂ carry electrons from catabolism to the ETC. Coenzyme A carries acyl groups, not electrons."},
{id:"m3a13",lo:"3.2",src:"L2",ref:"m3-carriers",type:"mc",
stem:"An enzyme adds a carboxyl group, taken from CO₂, to pyruvate to make oxaloacetate. Which carrier delivers that group?",
opts:["Biotin","Tetrahydrofolate","S-adenosylmethionine","Coenzyme A"],ans:0,
exp:"Biotin carries CO₂ and transfers carboxyl groups, and it's essential for making oxaloacetate. THF carries one-carbon units, SAM carries methyl groups, and CoA carries acyl groups."},
{id:"m3a14",lo:"3.2",src:"L2",ref:"m3-vitb",type:"mc",
stem:"In chronic niacin deficiency, which citric acid cycle steps would you expect to run poorly?",
opts:["Isocitrate DH and α-ketoglutarate DH, which need NAD⁺","Citrate synthase, which needs NAD⁺ to join its substrates","Succinate DH only, which uses a niacin-derived FAD","None, because niacin is only used as NADPH in biosynthesis"],ans:0,
exp:"Niacin (B3) is the precursor of NAD⁺. Both NAD⁺-dependent dehydrogenases of the cycle would run short of it. FAD comes from riboflavin, and citrate synthase makes no electron carrier."},

{id:"m3a15",lo:"3.3",src:"L1",ref:"m3-3ways",type:"mc",
stem:"After several days on a high-carbohydrate diet, liver cells increase transcription of the gene for a fatty acid synthesis enzyme. Which regulation method is this?",
opts:["Enzyme concentration","Substrate concentration","Catalytic activity by feedback inhibition","Catalytic activity by hormone action"],ans:0,
exp:"Changing transcription changes how much enzyme gets made, which is regulation by enzyme concentration. It's the slow, long-term method, which fits a change that takes days."},
{id:"m3a16",lo:"3.3",src:"L1",ref:"m3-3ways",type:"mc",
stem:"Fatty acids must be carried into the mitochondrial matrix before they can be broken down to acetyl CoA. Limiting that transport controls the pathway by which method?",
opts:["Substrate concentration","Enzyme concentration","Catalytic activity","None; transport isn't regulation"],ans:0,
exp:"The enzymes are in the matrix and the substrate is outside it. Controlling how much substrate gets shuttled in is regulation by substrate concentration through compartmentalization."},
{id:"m3a17",lo:"3.3",src:"L1",ref:"m3-3ways",type:"tf",
stem:"When the end product of a pathway binds the pathway's first enzyme and slows it, the cell is regulating the pathway by substrate concentration.",ans:false,
exp:"That's feedback inhibition, which changes how active the existing enzyme is. It's regulation by catalytic activity."},
{id:"m3a18",lo:"3.3",src:"L1",ref:"m3-why",type:"mc",
stem:"Which reason best explains why oxidative phosphorylation shouldn't run at full speed all the time?",
opts:["Its reactive oxygen byproducts would outpace the cell's neutralizing systems","Running at full speed would turn its overall ΔG positive and stall it","Its enzymes are consumed each turn and must be remade from scratch","It would permanently use up the cell's supply of oxygen and NAD⁺"],ans:0,
exp:"Ox phos makes hydrogen peroxide and other reactive oxygen species. The cell's neutralizing systems can keep up only if ox phos isn't running flat out."},
{id:"m3a19",lo:"3.3",src:"L1",ref:"m3-why",type:"tf",
stem:"Regulation lets heart muscle and red blood cells run ATP production at very different rates even though they use the same pathways.",ans:true,
exp:"Tissues differ in demand: heart and skeletal muscle need a lot of ATP, red blood cells little. Regulating each tissue's pathways sets their rates separately."},
{id:"m3a20",lo:"3.3",src:"L1",ref:"m3-3ways",type:"mc",
stem:"A drug blocks a hormone's receptor on liver cells. Within seconds, a key enzyme stays in its less active form, and the amount of that enzyme is unchanged. Which regulation method did the drug interfere with?",
opts:["Catalytic activity","Enzyme concentration","Substrate concentration","Compartmentalization"],ans:0,
exp:"The enzyme amount didn't change and the effect was fast, so the hormone was changing how active the existing enzyme is. Hormones altering an enzyme's activation site is regulation by catalytic activity."},

{id:"m3a21",lo:"3.4",src:"L3",ref:"m3-acoa",type:"mc",
stem:"A researcher labels the carbons of four nutrients and tracks which ones end up in acetyl CoA. Which labeled nutrient would she NOT expect to supply acetyl carbons?",
opts:["Nucleotides from broken-down nucleic acids","Leucine from broken-down muscle protein","Palmitate, a fatty acid from stored fat","Glucose, by way of pyruvate in glycolysis"],ans:0,
exp:"Acetyl CoA comes from pyruvate (via pyruvate dehydrogenase), fatty acid β-oxidation, and amino acid degradation. Leucine is one of the amino acids that gives acetyl CoA directly. Nucleic acid breakdown is not a source."},
{id:"m3a22",lo:"3.4",src:"L3",ref:"m3-acoa",type:"tf",
stem:"When fuel is plentiful, cells convert excess acetyl CoA back into pyruvate to store it as glucose.",ans:false,
exp:"Forming acetyl CoA from pyruvate is irreversible. That's why it works as a control point, and (beyond lecture) why acetyl CoA from fat can't become net glucose."},
{id:"m3a23",lo:"3.4",src:"L3",ref:"m3-central",type:"mc",
stem:"A classmate says the main job of the citric acid cycle is to make ATP. What's the best correction?",
opts:["Its main output is NADH and FADH₂, whose electrons ox phos turns into ATP","Its main output is CO₂, which directly drives ATP synthase","It makes no ATP at all; glycolysis supplies the cycle's ATP","Its main job is making oxaloacetate for gluconeogenesis"],ans:0,
exp:"Each turn makes only 1 ATP (as GTP) but loads 3 NADH and 1 FADH₂. Ox phos turns those electrons into about 9 more ATP, so loading carriers is the cycle's real contribution."},
{id:"m3a24",lo:"3.4",src:"L4",ref:"m3-central",type:"mc",fixed:true,
stem:"Using ~2.5 ATP per NADH and ~1.5 per FADH₂, how many ATP come from fully oxidizing one acetyl CoA, counting the cycle and ox phos together?",
opts:["4","9","10","12"],ans:2,
steps:["One turn: 3 NADH, 1 FADH₂, 1 ATP","3 × 2.5 = 7.5 and 1 × 1.5 = 1.5, so 9 from ox phos","9 + 1 from the cycle = 10"],
exp:"Ox phos gives 7.5 from NADH plus 1.5 from FADH₂, which is 9. Adding the cycle's own ATP (GTP) gives 10. 9 forgets the cycle's ATP; 4 counts only carriers."},
{id:"m3a25",lo:"3.4",src:"L4",ref:"m3-central",type:"tf",
stem:"If ox phos stopped, the citric acid cycle would also slow to a halt, even though the cycle doesn't use O₂ itself.",ans:true,
exp:"The cycle needs NAD⁺ and FAD to accept electrons, and only ox phos regenerates them from NADH and FADH₂. Without ox phos, the carriers stay reduced and the cycle's dehydrogenases stop."},

{id:"m3a26",lo:"3.5",src:"L3",ref:"m3-cacsteps",type:"mc",fig:"q-cac4",fixed:true,
stem:"The wheel shows the citric acid cycle, with the carbon count of each intermediate. At which lettered step is the first CO₂ released?",
opts:["A","B","C","D"],ans:3,
exp:"The first CO₂ leaves when the 6-carbon isocitrate becomes 5-carbon α-ketoglutarate (step 3, isocitrate dehydrogenase), which is D. A is the second CO₂ (5C to 4C). B joins 2C and 4C into 6C. C is succinate to fumarate."},
{id:"m3a27",lo:"3.5",src:"L3",ref:"m3-cacsteps",type:"mc",fig:"q-cac4",fixed:true,
stem:"Which lettered step is catalyzed by an enzyme that is also one of the complexes of the electron transport chain?",
opts:["A","B","C","D"],ans:2,
exp:"C is succinate → fumarate, catalyzed by succinate dehydrogenase, which is also Complex II. Its FADH₂ feeds electrons straight into the chain."},
{id:"m3a28",lo:"3.5",src:"L3",ref:"m3-cacreg",type:"mc",fig:"q-cac4",fixed:true,
stem:"If citrate builds up in the matrix, which lettered step does it slow most directly?",
opts:["A","B","C","D"],ans:1,
exp:"Citrate is the product of citrate synthase (B, the step joining 2C and 4C into 6C), and it inhibits that enzyme. That's feedback inhibition."},
{id:"m3a29",lo:"3.5",src:"L3",ref:"m3-cacio",type:"tf",
stem:"Each turn of the citric acid cycle uses up one oxaloacetate, so a new oxaloacetate has to be supplied as an input for every acetyl CoA.",ans:false,
exp:"Oxaloacetate is used in step 1 and regenerated in the last step, so the same oxaloacetate keeps the cycle going. The only carbon input is acetyl CoA."},
{id:"m3a30",lo:"3.5",src:"L4",ref:"m3-etc",type:"mc",
stem:"Where are the citric acid cycle enzymes and the electron transport chain complexes found?",
opts:["Cycle in the matrix; ETC in the inner mitochondrial membrane","Both in the mitochondrial matrix","Cycle in the cytosol; ETC in the outer mitochondrial membrane","Cycle in the intermembrane space; ETC in the matrix"],ans:0,
exp:"The cycle runs in the matrix (succinate DH is embedded in the inner membrane as Complex II). The ETC complexes and ATP synthase sit in the inner membrane and pump into the intermembrane space. The lecture's \"within the matrix\" for the ETC is loose wording."},
{id:"m3a31",lo:"3.5",src:"L3",ref:"m3-cacreg",type:"mc",
stem:"During a sprint, Ca²⁺ and ADP both rise in muscle cells. Predict the effect on the citric acid cycle.",
opts:["It speeds up: Ca²⁺ activates isocitrate DH and α-KG DH, and ADP activates isocitrate DH","It slows down: Ca²⁺ inhibits citrate synthase to protect the cell's ATP stores","It speeds up: ADP activates succinate dehydrogenase, the main control point","No change: the cycle responds only to the supply of acetyl CoA from fuel"],ans:0,
exp:"Both are demand signals. Ca²⁺ rises with contraction and activates both dehydrogenases; ADP means ATP is being spent and activates isocitrate DH. The cycle speeds up to make more ATP."},
{id:"m3a32",lo:"3.5",src:"L3",ref:"m3-cacreg",type:"tf",
stem:"A high NADH:NAD⁺ ratio in the matrix speeds up the citric acid cycle by supplying more electron carriers.",ans:false,
exp:"The dehydrogenases need NAD⁺ (the empty carrier) as a substrate. High NADH means little NAD⁺ is free, so isocitrate DH and α-KG DH slow down."},
{id:"m3a33",lo:"3.5",src:"L4",ref:"m3-etc",type:"mc",fig:"q-etc5",fixed:true,
stem:"In this diagram of the inner membrane (intermembrane space at the top, matrix at the bottom), numbers mark the complexes. Electrons from FADH₂ made in the citric acid cycle enter the chain at which complex?",
opts:["1","2","3","4"],ans:1,
exp:"FADH₂ is made by succinate dehydrogenase, which is Complex II (2). It passes its electrons to coenzyme Q, skipping Complex I."},
{id:"m3a34",lo:"3.5",src:"L4",ref:"m3-pmf",type:"mc",fig:"q-etc5",fixed:true,
stem:"In the same diagram, which numbered complex lets protons flow from the intermembrane space back into the matrix and uses that flow to make ATP?",
opts:["1","3","4","5"],ans:3,
exp:"Complex V (5) is ATP synthase. 1, 3 and 4 pump protons out of the matrix; ATP synthase is the route back in."},
{id:"m3a35",lo:"3.5",src:"L4",ref:"m3-etc",type:"mc",
stem:"Why does FADH₂ yield about 1.5 ATP while NADH yields about 2.5?",
opts:["FADH₂'s electrons enter at Complex II, skipping Complex I's proton pump","FADH₂ carries one electron, while NADH carries two","ATP synthase can't use protons pumped with FADH₂'s electrons","FADH₂ gives its electrons straight to O₂, skipping the chain"],ans:0,
exp:"Both carry two electrons and both end at O₂ through III and IV. FADH₂'s electrons enter through Complex II, which pumps no protons, so fewer H⁺ are pumped per FADH₂ (7 vs 11 in the lecture's count)."},
{id:"m3a36",lo:"3.5",src:"L4",ref:"m3-etc",type:"tf",
stem:"Electrons from NADH and from FADH₂ both pass through coenzyme Q and Complex III before they reach O₂.",ans:true,
exp:"The two paths start at different complexes (I and II) and merge at coenzyme Q. From there both go Q → III → cytochrome c → IV → O₂."},

{id:"m3a37",lo:"3.6",src:"L4",ref:"m3-etcinhib",type:"mc",
stem:"Cyanide binds Complex IV. Predict the effect on the electron transport chain and the proton gradient.",
opts:["The ETC stops and the gradient decreases","The ETC speeds up and the gradient strengthens","Both stay the same, since Complex II offers a bypass","The ETC reroutes through Complex II and the gradient weakens"],ans:0,
exp:"With Complex IV blocked, electrons can't reach O₂, so every carrier upstream stays reduced and electron flow stops. No flow means no pumping, so the gradient runs down. Complex II feeds the same blocked path, so there's no detour."},
{id:"m3a38",lo:"3.6",src:"L4",ref:"m3-etcinhib",type:"mc",
stem:"After an amobarbital overdose, which electron source can still drive some ATP production in the patient's mitochondria?",
opts:["FADH₂, entering at Complex II","NADH, entering at Complex I","Neither, since blocking Complex I stops all flow","Cytochrome c, reduced directly by NADH"],ans:0,
exp:"Amobarbital blocks Complex I, so NADH can't unload. FADH₂ enters at Complex II and still flows through III and IV, so some pumping and ATP synthesis continue, at a much lower rate."},
{id:"m3a39",lo:"3.6",src:"L4",ref:"m3-etcinhib",type:"tf",
stem:"In cells exposed to cyanide, NADH accumulates and the citric acid cycle slows.",ans:true,
exp:"The blocked chain can't reoxidize NADH, so NADH builds up and NAD⁺ runs out. The cycle's dehydrogenases need NAD⁺, so the cycle stops too."},
{id:"m3a40",lo:"3.6",src:"L4",ref:"m3-uncouple",type:"mc",fig:"q-o2",
stem:"Mitochondria with plenty of fuel and ADP are sealed in a chamber, and the plot shows O₂ remaining over time. Compound X is added at 1 and compound Y at 2. Which pair fits the trace?",
opts:["X = DNP, Y = cyanide","X = cyanide, Y = DNP","X = rotenone, Y = DNP","X = cyanide, Y = rotenone"],ans:0,
exp:"After 1, O₂ is used faster: an uncoupler like DNP drains the gradient, so the chain runs faster. After 2, O₂ use stops completely: cyanide blocks Complex IV, so no electrons reach O₂. Rotenone would slow O₂ use, not stop it, since FADH₂ can still feed in at Complex II."},
{id:"m3a41",lo:"3.6",src:"L4",ref:"m3-uncouple",type:"mc",
stem:"In a newborn exposed to cold, brown adipose tissue opens its thermogenin channels. Compared with before, what happens in those cells?",
opts:["O₂ use rises, ATP made per O₂ falls, and heat output rises","O₂ use falls, ATP output rises, and the gradient grows","O₂ use stops because the gradient has collapsed","ATP output rises because protons cross the membrane faster"],ans:0,
exp:"Thermogenin lets protons back into the matrix without passing through ATP synthase. The chain runs faster (more O₂ used), less ATP is made per O₂, and the energy comes out as heat."},
{id:"m3a42",lo:"3.6",src:"L4",ref:"m3-uncouple",type:"tf",
stem:"Thermogenin in brown fat and the drug DNP lower ATP output by the same route: both let protons back into the matrix without passing through ATP synthase.",ans:true,
exp:"Thermogenin is a proton channel; DNP makes the membrane leaky to protons. Either way protons return without driving ATP synthase, so the gradient collapses and the energy is released as heat."},
{id:"m3a43",lo:"3.6",src:"L4",ref:"m3-etcinhib",type:"mc",
stem:"Isolated mitochondria are treated with a compound shaped like succinate. Thirty minutes later, which change do you expect?",
opts:["Succinate rises and FADH₂ production falls","Citrate rises and NADH production rises","α-Ketoglutarate rises because Complex I is blocked","Fumarate rises because succinate DH is activated"],ans:0,
exp:"A succinate look-alike (like malonate) competitively inhibits succinate dehydrogenase, which is Complex II. Succinate piles up, no FADH₂ is made, and as the cycle stalls, NADH production falls too."},
{id:"m3a44",lo:"3.6",src:"L3",ref:"m3-cacpoison",type:"mc",
stem:"A patient with advanced liver disease has hyperammonemia. Which citric acid cycle intermediate would you expect to build up in their brain cells?",
opts:["α-Ketoglutarate","Citrate","Succinate","Oxaloacetate"],ans:0,
exp:"High ammonia inhibits the α-ketoglutarate dehydrogenase complex, so its substrate, α-ketoglutarate, accumulates and the cycle slows."},
{id:"m3a45",lo:"3.6",src:"L4",ref:"m3-etcinhib",type:"mc",tag:"beyond",
stem:"Oligomycin blocks ATP synthase. In intact mitochondria with fuel and ADP, what happens to O₂ use?",
opts:["It falls, because the gradient builds until pumping stalls","It rises, because the ETC no longer competes with ATP synthase","It stays the same, because the ETC complexes are untouched","It stops at once, because oligomycin also binds Complex IV"],ans:0,
exp:"With ATP synthase blocked, protons can't flow back, so the gradient climbs until pumping against it gets too hard. Electron flow slows and O₂ use drops, even though the chain itself is intact."},
{id:"m3a46",lo:"3.6",src:"L4",ref:"m3-etcinhib",type:"mc",fig:"q-etc5",
stem:"In the diagram (intermembrane space at the top), a poison binds the complex numbered 4. Which statement is correct?",
opts:["Electrons from both NADH and FADH₂ stop, since both paths end at 4","Electrons from FADH₂ still reach O₂ by way of complex 2","Only complex 4 stops pumping; complexes 1 and 3 keep pumping","Proton flow through complex 5 speeds up to compensate"],ans:0,
exp:"Complex 4 is cytochrome c oxidase, the only exit to O₂. Both entry points (1 for NADH, 2 for FADH₂) feed the same Q → 3 → cyt c → 4 path, so all flow and all pumping stop, and the gradient that drives complex 5 runs down."}
],


drills:[
{id:"m3d1",lo:"3.2",kind:"sort",title:"Pathways, carriers and regulation",
intro:"Drag each item to its bin, or tap it and then tap the bin. Round 1 is pathway type, round 2 is what each carrier transfers, round 3 is how a cell is regulating.",
rounds:[
{name:"Anabolic or catabolic",bins:["Anabolic","Catabolic"],
items:[["Gluconeogenesis","Anabolic","-genesis: builds glucose"],["Glycogenesis","Anabolic","Builds glycogen from glucose"],["Glycolysis","Catabolic","-lysis: splits glucose"],["Glycogenolysis","Catabolic","Breaks glycogen down"],["Fatty acid synthesis","Anabolic","Synthesis: builds"],["β-Oxidation","Catabolic","Oxidation: breaks fatty acids down"],["Cholesterol synthesis","Anabolic","Synthesis: builds"],["Urea cycle","Catabolic","Listed with amino acid catabolism in lecture"],["Triacylglycerol synthesis","Anabolic","Joins glycerol and fatty acids"],["Pentose phosphate pathway","Anabolic","Listed with nucleic acid synthesis in lecture"],["Citric acid cycle (as taught this module)","Catabolic","Oxidizes acetyl groups to CO₂"],["Amino acid synthesis","Anabolic","Synthesis: builds"]]},
{name:"What it carries",bins:["Phosphoryl","Electrons","Acyl","CO₂","One-carbon unit","Methyl"],
items:[["ATP","Phosphoryl"],["NADH","Electrons","Catabolic electrons to the ETC"],["FADH₂","Electrons","Catabolic electrons to the ETC"],["NADPH","Electrons","Reducing power for biosynthesis"],["FMNH₂","Electrons"],["Coenzyme A","Acyl","Through a thioester bond"],["Biotin","CO₂","Carboxyl transfer; needed to make oxaloacetate"],["Tetrahydrofolate","One-carbon unit"],["S-adenosylmethionine","Methyl"]]},
{name:"Which regulation method",bins:["Enzyme concentration","Substrate concentration","Catalytic activity"],
items:[["A repressor lowers transcription of an enzyme's gene","Enzyme concentration"],["Excess enzyme is tagged and degraded","Enzyme concentration"],["An inducer raises the amount of an enzyme over several hours","Enzyme concentration"],["Fuel molecules have to be moved into the mitochondrion before they can be broken down","Substrate concentration","The pathway is walled off from its substrate"],["The stomach releases food into the intestine a little at a time","Substrate concentration"],["A pathway's enzymes sit in an organelle the substrate must be shuttled into","Substrate concentration"],["Citrate binds citrate synthase and slows it","Catalytic activity","Feedback inhibition by product"],["A hormone alters an enzyme's activation site in liver but not muscle","Catalytic activity"],["ADP activates isocitrate dehydrogenase","Catalytic activity","An effector changes the existing enzyme's activity"]]}
]},
{id:"m3d2",lo:"3.5",kind:"sort",title:"Citric acid cycle control points",
intro:"Match each description to the one step it fits. Drag, or tap the item and then the step.",
rounds:[
{name:"Which step",bins:["Acetyl CoA formation","Citrate synthase","Isocitrate DH","α-KG DH complex","Succinate DH"],
items:[["Inhibited by ATP, NADH and acetyl CoA together","Acetyl CoA formation"],["Depends on fuel being moved into the matrix","Acetyl CoA formation","Compartmentalization: substrate access"],["Inhibited by its own product, citrate","Citrate synthase","Feedback inhibition"],["Joins a 2-carbon and a 4-carbon unit","Citrate synthase"],["Activated by both Ca²⁺ and ADP","Isocitrate DH","α-KG DH is activated by Ca²⁺ but not listed for ADP"],["Makes the first CO₂ and NADH (6C to 5C)","Isocitrate DH"],["Needs thiamine as well as NAD⁺","α-KG DH complex"],["Inhibited by ammonia","α-KG DH complex","Why hyperammonemia slows the cycle"],["Blocked by arsenite","α-KG DH complex"],["Makes the second CO₂ (5C to 4C)","α-KG DH complex"],["Competitively inhibited by malonate","Succinate DH","Malonate looks like succinate"],["Makes FADH₂ and doubles as Complex II","Succinate DH"],["Governed by the oxaloacetate level; not a primary control point","Succinate DH"]]}
]},
{id:"m3d5",lo:"3.5",kind:"tool",tool:"cac",title:"Citric acid cycle wheel",
intro:"Run one turn step by step, or switch on regulators and poisons and see which steps light up."},
{id:"m3d3",lo:"3.6",kind:"case",title:"Perturb the chain",
intro:"For each change, predict O₂ use, ATP made and the H⁺ gradient compared with normal. The answer shows after the third pick.",
fields:[["O₂ use","Up","Same","Down"],["ATP made","Up","Same","Down"],["H⁺ gradient","Up","Same","Down"]],
cases:[
{t:"Cyanide binds Complex IV",a:[2,2,2],e:"No electrons reach O₂, so electron flow, pumping and ATP synthesis all stop, and the gradient runs down."},
{t:"Carbon monoxide binds Complex IV",a:[2,2,2],e:"Same block as cyanide: cytochrome c stays reduced and the whole chain backs up."},
{t:"Amobarbital blocks Complex I",a:[2,2,2],e:"NADH can't unload. Some FADH₂ electrons still enter at Complex II, so everything drops without reaching zero."},
{t:"Malonate inhibits succinate dehydrogenase",a:[2,2,2],e:"FADH₂ electrons stop entering at Complex II, and the stalled cycle cuts off NADH supply as well."},
{t:"DNP is added",a:[0,2,2],e:"Protons leak back without passing through ATP synthase. The gradient collapses, the chain runs faster, and the energy becomes heat."},
{t:"Thermogenin opens in brown fat during prolonged cold",a:[0,2,2],e:"Thermogenin is a proton channel, so this is uncoupling: more O₂ used, less ATP, more heat."},
{t:"Muscle suddenly uses ATP fast, so ADP is high (beyond lecture)",a:[0,0,2],e:"ATP synthase spends the gradient faster, so it drops a little, and the chain speeds up to refill it. This is respiratory control."},
{t:"Oligomycin blocks ATP synthase (beyond lecture)",a:[2,2,0],e:"Protons can't flow back, so the gradient climbs until pumping stalls. Electron flow and O₂ use fall even though the chain is intact."}
]}
]

});

// Review highlight: each hl appears verbatim in one p, li, tr or note of its ref lesson.
(function(){const HL={m3a01:"Building costs energy, so anabolism consumes it.",m3a02:"-lysis or oxidation means catabolic",m3a03:"Many steps in a pathway are reversible",m3a04:"Those steps are the bottlenecks and the usual targets of regulation",m3a05:"catch the energy from each step in activated carriers",m3a06:"A pathway runs if the sum of its ΔG values is negative",m3a07:"The link between the steps is a shared intermediate",m3a08:"A kinetically unstable one would react in the cytosol before reaching an enzyme and waste its energy as heat.",m3a09:"Kinetically stable: that reaction is very slow without a catalyst",m3a10:"so they can phosphorylate ADP to make ATP",m3a11:"If ATP were at the top, nothing could recharge it.",m3a12:"NADPH does a different job: it's the reducing agent for anabolism.",m3a13:"transfers a carboxyl group (from CO₂)",m3a14:"both need NAD⁺, which comes from niacin",m3a15:"Inducers or repressors change the rate of enzyme synthesis",m3a16:"Mostly compartmentalization: the pathway sits in a compartment away from its substrate",m3a17:"Feedback inhibition: excess product binds the enzyme.",m3a18:"The cell's neutralizing systems can keep up only if ox phos isn't running flat out all the time.",m3a19:"Muscle and heart need a lot of ATP; red blood cells need little.",m3a20:"Hormones alter an enzyme's activation site, so control can be tissue-specific",m3a21:"Nucleic acid breakdown is not a source.",m3a22:"Forming acetyl CoA is decisive and irreversible, with limited options afterward.",m3a23:"Loading NADH and FADH₂ is the main point of the cycle.",m3a24:"Per turn: 2 CO₂, 3 NADH, 1 FADH₂ and 1 ATP (made indirectly, as GTP).",m3a25:"the cycle can't run without a supply of NAD⁺ and FAD",m3a26:"First CO₂, NADH",m3a27:"succinate dehydrogenase is also Complex II",m3a28:"Citrate (its own product, feedback); high ATP",m3a29:"so it doesn't count as an input",m3a30:"The complexes are embedded in the inner mitochondrial membrane",m3a31:"Ca²⁺ rises when muscle contracts",m3a32:"When NADH builds up, little free NAD⁺ is left, and the cycle slows.",m3a33:"FADH₂ (2 e⁻) → coenzyme Q",m3a34:"The protons can only get back into the matrix through ATP synthase",m3a35:"FADH₂'s electrons skip Complex I's pump, which is why FADH₂ is worth less ATP.",m3a36:"Paths: NADH → I → Q → III → cyt c → IV → O₂.",m3a37:"The whole chain stops: no O₂ use, no pumping, the gradient decreases, and ATP synthesis stops.",m3a38:"Electrons from FADH₂ still enter at Complex II and flow through III and IV, so some pumping and some ATP continue.",m3a39:"NADH builds up and NAD⁺ runs out, so the citric acid cycle stops too.",m3a40:"With the gradient draining, nothing holds the chain back, so O₂ use goes up.",m3a41:"In prolonged cold it opens, and the fuel burned becomes heat that keeps core temperature up.",m3a42:"a second route lets H⁺ back into the matrix without going through ATP synthase",m3a43:"Malonate looks like succinate and competitively inhibits succinate dehydrogenase.",m3a44:"inhibits the α-KG dehydrogenase complex",m3a45:"so the gradient climbs until pumping against it gets too hard",m3a46:"Complex II feeds into the same Q → III → IV path, so it's blocked too."};
MODS[MODS.length-1].questions.forEach(q=>{if(HL[q.id])q.hl=HL[q.id];});})();
