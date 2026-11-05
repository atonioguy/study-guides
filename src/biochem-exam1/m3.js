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
so:`Ask what the cell changed: the number of enzyme molecules, the substrate's access to them, or how well each enzyme works.`}
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
],

drills:[
]
});
