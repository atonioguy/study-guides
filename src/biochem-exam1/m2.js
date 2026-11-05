// Module 2: Enzymes (LOs 2.1 to 2.8)
// Questions: src = lecture lesson (L1 structure and function, L2 free energy, L3 kinetics, L4 regulation). ref = lesson id. tag "beyond" = not in lecture.
MODS.push({
id:"m2", short:"M2", name:"Module 2: Enzymes",
los:[
{id:"2.1", nick:"Protein structure", title:"Summarize the 3D structure of proteins"},
{id:"2.2", nick:"Enzyme classes", title:"Outline the six major classes of enzymes"},
{id:"2.3", nick:"Free energy", title:"Classify reactions as exergonic or endergonic using ΔG"},
{id:"2.4", nick:"Transition state", title:"Explain how enzymes stabilize the transition state"},
{id:"2.5", nick:"Kinetics", title:"Interpret Km and Vmax on Michaelis-Menten and Lineweaver-Burk plots"},
{id:"2.6", nick:"Inhibitors", title:"Categorize inhibitors by their effects on Km and Vmax"},
{id:"2.7", nick:"Temperature, pH, [E]", title:"Investigate the effects of temperature, pH and enzyme concentration on enzyme activity"},
{id:"2.8", nick:"Regulation and drugs", title:"Apply enzyme regulation to drug discovery"}
],

guide:{
"2.1":[
{id:"m2-levels",h:"Four levels of protein structure",fig:"levels",beyond:true,
b:`<p>A protein's shape is described in four levels, each built on the one before.</p>
<ul><li><b>Primary</b>: the amino acid sequence, held together by covalent peptide bonds. The gene sets it.</li>
<li><b>Secondary</b>: local folding patterns in the backbone, mainly the α-helix and the β-sheet, held by hydrogen bonds between backbone C=O and N–H groups.</li>
<li><b>Tertiary</b>: the whole chain folded into its 3D shape. Side chains drive it. Hydrophobic side chains pack into the core (the hydrophobic effect), polar and charged ones stay on the surface, and hydrogen bonds, salt bridges and sometimes disulfide bonds (covalent links between two Cys) hold the fold in place.</li>
<li><b>Quaternary</b>: two or more folded chains (subunits) fitting together, held by the same weak forces. Hemoglobin has four subunits. A protein made of one chain has no quaternary structure.</li></ul>
<p>Only the primary level depends mainly on covalent bonds. Everything above it depends on weak interactions, which is why heat or a pH change can unfold a protein without changing its sequence.</p>`,
nl:"Where this is in the course",note:`The Module 2 lecture holds protein structure for Module 6. LO 2.1 still asks you to summarize it, so this lesson covers the standard four levels.`,
so:`The sequence decides the fold, and weak bonds hold the fold, so heat or pH can wreck the shape while the sequence stays intact.`},

{id:"m2-fold",h:"Folding sets function",fig:"fold",
b:`<p>An enzyme starts as a linear chain that folds into one specific shape. Each protein has its own fold, and the fold creates the active site, which sets what the enzyme does and which substrates it accepts.</p>
<p>The folded shape is the chain's lowest-energy conformation, its most stable state. When proteins are purposely unfolded in experiments and then allowed to recover, they fold back into the same shape every time. The sequence carries the folding information.</p>
<p><b>Denaturation</b> is unfolding. A denatured or misfolded enzyme loses its active site and stops working, even though its amino acid sequence hasn't changed.</p>
<p>Enzymes are not consumed or permanently changed by the reactions they catalyze, so one enzyme molecule runs its reaction over and over. Enzymes do wear out over time and get replaced, which is different from being used up in the reaction.</p>`,
so:`Change the shape and you change or lose the function, so you can't separate an enzyme's structure from what it does.`}
],

"2.2":[
{id:"m2-terms",h:"Active site and induced fit",
b:`<p>An <b>enzyme</b> is a protein catalyst: it speeds up a reaction without being used up. The molecule it acts on is the <b>substrate</b>. The substrate binds in the <b>active site</b>, a pocket formed by the fold, and the bound pair is the <b>enzyme-substrate (ES) complex</b>. Forming the ES complex is the first step of catalysis.</p>
<p>Enzymes are very specific. Each one speeds up its own target reaction, in some cases more than a million-fold, and only reactions that would happen on their own anyway.</p>
<p>The older <b>lock-and-key</b> model pictured an active site that was a rigid, exact match for its substrate. The current <b>induced fit</b> model says the active site roughly matches the substrate and then changes shape around it once it binds, like a glove around a hand. The substrate changes shape a little in return.</p>`,
so:`The active site's shape and chemistry decide which substrate binds, and induced fit lets the act of binding push the substrate toward reacting.`},

{id:"m2-cofactor",h:"Cofactors and coenzymes",
b:`<p>Amino acid side chains can only do so much chemistry. Many enzymes need a <b>cofactor</b>, an extra non-protein molecule that adds catalytic abilities the side chains don't have. One cofactor can work with many different enzymes.</p>
<ul><li><b>Apoenzyme</b>: the enzyme without its cofactor. It is inactive.</li>
<li><b>Holoenzyme</b>: apoenzyme plus cofactor, the complete active enzyme.</li>
<li><b>Coenzyme</b>: a cofactor that is an organic molecule, usually made from a vitamin. Every coenzyme is a cofactor, but not every cofactor is a coenzyme.</li>
<li><b>Prosthetic group</b>: a cofactor bound tightly to the enzyme (covalently or noncovalently) instead of loosely. Many of these act as helper groups that shuttle functional groups from one molecule to another.</li></ul>
<p>Examples (beyond lecture): Mg²⁺ and Zn²⁺ are metal-ion cofactors, so they are cofactors but not coenzymes. NAD⁺, made from niacin (vitamin B3), is a coenzyme you'll see carrying electrons in Module 3. Heme in hemoglobin is a prosthetic group.</p>`,
so:`Apoenzyme plus cofactor gives the holoenzyme. An organic cofactor is a coenzyme, and a tightly bound one is a prosthetic group.`},

{id:"m2-classes",h:"The six enzyme classes",
b:`<p>Enzymes are grouped by the type of reaction they catalyze.</p>
<table><tr><th>Class</th><th>What it does</th><th>How to spot it</th><th>Example (beyond lecture)</th></tr>
<tr><td><b>Oxidoreductase</b></td><td>Redox: moves electrons between molecules</td><td>Electrons swap, so charges change; NAD⁺/NADH or FAD/FADH₂ often appear</td><td>Lactate + NAD⁺ → pyruvate + NADH</td></tr>
<tr><td><b>Transferase</b></td><td>Moves a functional group from one molecule to another</td><td>Two in, two out, with a group switched between them</td><td>Aminotransferases move an amino group</td></tr>
<tr><td><b>Hydrolase</b></td><td>Breaks a bond by adding water</td><td>Water on the reactant side, and one molecule becomes two</td><td>Lipases, proteases, lactase</td></tr>
<tr><td><b>Lyase</b></td><td>Breaks a bond (usually C–C, C–O or C–N) without water, often leaving a double bond</td><td>One molecule becomes two, with no water</td><td>Aldolase splits a six-carbon sugar into two three-carbon sugars</td></tr>
<tr><td><b>Isomerase</b></td><td>Rearranges a molecule into a different isomer</td><td>Same parts before and after, just rearranged</td><td>Glucose 6-phosphate → fructose 6-phosphate</td></tr>
<tr><td><b>Ligase</b></td><td>Joins two molecules, powered by ATP hydrolysis</td><td>Two molecules become one, and ATP is used</td><td>DNA ligase joins DNA fragments</td></tr></table>
<p>One trap (beyond lecture): kinases use ATP but are transferases. The kinase moves ATP's phosphate group onto another molecule, and nothing gets joined. A ligase spends ATP's energy to join two molecules into one.</p>`,
so:`Name the class from what happens to the molecules: electrons move, a group moves, water splits a bond, a bond splits without water, atoms rearrange, or ATP pays to join two things.`},
{drill:"m2d1"}
],

"2.3":[
{id:"m2-dg",h:"ΔG: exergonic or endergonic",
b:`<p><b>Gibbs free energy (G)</b> is the energy available to do work, here the work of driving a reaction. What matters is the change: <b>ΔG = G(products) − G(reactants)</b>.</p>
<ul><li><b>ΔG negative</b>: products have less free energy than reactants, so energy is released. The reaction is <b>exergonic</b> and <b>spontaneous</b> (it can happen without an energy input). Think "exit": energy leaves.</li>
<li><b>ΔG positive</b>: energy has to be put in. The reaction is <b>endergonic</b> and <b>nonspontaneous</b>. Think "enter."</li>
<li><b>ΔG = 0</b>: the reaction is at equilibrium. Forward and reverse rates are equal, so there is no net change in concentrations.</li></ul>
<p>Burning wood (wood + O₂ → ash + CO₂) is exergonic. The reverse is endergonic: ash and CO₂ never turn back into wood on their own. A reaction that is spontaneous in one direction is nonspontaneous in reverse, with the same size ΔG and the opposite sign.</p>
<p>Spontaneous describes direction, not speed. ΔG says nothing about how fast a reaction goes, and a reaction with a large negative ΔG can still be too slow to notice without an enzyme.</p>
<p>ΔG depends only on the starting and ending states, not the path. Glucose → CO₂ + H₂O has the same ΔG whether it burns in a flame or goes through a series of enzyme steps in a cell. An enzyme changes the path, so it can't change ΔG.</p>`,
so:`Read the sign: negative means exergonic and spontaneous, positive means endergonic, zero means equilibrium. The sign gives you direction, never speed.`},
{steps:"Reactants G = 17, products G = 25 (lecture knowledge check)",s:["ΔG = G(products) − G(reactants)","ΔG = 25 − 17 = <b>+8</b>","Positive ΔG means energy has to be put in","<b>Endergonic</b>, nonspontaneous as written"]},

{id:"m2-dgstd",h:"ΔG, ΔG° and ΔG°′",
b:`<p>ΔG changes with conditions. Changing the amounts of reactants and products, the temperature or the pressure all shift it. To compare reactions fairly, chemists use a reference value measured under fixed conditions.</p>
<ul><li><b>ΔG°</b> (standard free energy change): reactants and products at 1.0 M, 25 °C (298 K), 1 atm.</li>
<li><b>ΔG°′</b> (biochemical standard): the same, plus pH 7 and water at 55.5 M, closer to the body. This course uses ΔG°′. Negative ΔG°′ means exergonic; positive ΔG°′ means endergonic.</li></ul>
<p>The catch: ΔG°′ assumes standard conditions, and cells don't sit at standard conditions (the stomach is nowhere near pH 7). The actual ΔG is what decides whether a reaction runs in the cell. A reaction with a positive ΔG°′ can still run if the cell keeps reactant concentration high or removes product quickly, because that makes the actual ΔG negative. Cells also pair unfavorable reactions with favorable ones (coupling, Module 3).</p>
<p>Beyond lecture, the relationship behind this is ΔG = ΔG°′ + RT ln([products]/[reactants]). You won't calculate it here, but it shows why piling up reactant or clearing away product pushes ΔG down.</p>`,
so:`ΔG°′ lets you compare reactions under one set of conditions. The actual ΔG, which depends on concentrations in the cell, decides whether the reaction really runs.`}
],

"2.4":[
{id:"m2-ea",h:"Activation energy",fig:"energy",
b:`<p>Even an exergonic reaction needs a push to start. Wood burns easily but still needs a match. That starting energy is the <b>activation energy (Ea)</b>: the climb from the reactants up to the <b>transition state</b>, the highest-energy, least stable arrangement partway between substrate and product. Once a molecule reaches the transition state, the rest is downhill.</p>
<p>Enzymes lower Ea. With a lower barrier, more substrate molecules reach the transition state at any moment, so product forms faster.</p>
<p>An enzyme does not change ΔG (the reactant and product levels in the figure stay put), the equilibrium point, or the direction of the reaction. It speeds up the forward and reverse reactions alike, so the reaction reaches the same equilibrium sooner.</p>`,
so:`Enzymes change the height of the hill, not where it starts or ends, so they change the rate and leave ΔG and equilibrium alone.`},

{id:"m2-ts",h:"How the active site stabilizes the transition state",
b:`<p>The enzyme lowers Ea by making the transition state easier to reach and more stable. The active site does this in several ways:</p>
<ul><li><b>Proximity</b>: it holds the substrates close together.</li>
<li><b>Orientation</b>: it lines them up in the right geometry to react.</li>
<li><b>Microenvironment</b>: it can shield substrates from water and give them a pocket whose polarity, hydrophobicity or acidity differs from the cytoplasm.</li>
<li><b>Strain</b>: induced fit puts pressure on the bonds that need to break.</li></ul>
<p>The full set of enzyme-substrate contacts forms only when the substrate is in the transition state. The active site fits the transition state better than it fits the starting substrate, so the energy released by binding is spent right where it helps most, at the top of the hill.</p>
<p>Beyond lecture: because active sites bind the transition state so tightly, a stable molecule shaped like the transition state (a <b>transition-state analog</b>) can bind more tightly than the substrate and block the enzyme. Several drugs are designed this way.</p>`,
so:`The active site is built to fit the transition state, so binding stabilizes that high-energy state and lowers the barrier to reach it.`}
],

"2.5":[
{id:"m2-order",h:"Reaction rate and reaction order",
b:`<p>Reaction velocity is the amount of reactant used up (or product made) per unit of time, such as per second. For A → C, velocity depends on [A]: <b>V = k[A]</b>, where k is a rate constant specific to that reaction. When velocity is directly proportional to one reactant's concentration, the reaction is <b>first order</b>.</p>
<p>With two reactants (A + B → C, or 2A → C), V = k[A][B] or V = k[A]². These are <b>second order</b>.</p>
<p>A second-order reaction can behave like a first-order one when one reactant is always in excess. Making Jello takes water and a packet, but water is always available, so how much Jello you can make depends only on how many packets you have. The scarce reactant controls the rate.</p>
<p>At very high reactant concentration a reaction can become <b>zero order</b>: the rate stops depending on concentration at all. A saturated enzyme behaves this way.</p>`,
so:`Order tells you which concentrations control the rate. A reactant in excess drops out, and a saturated enzyme makes the rate stop depending on [S].`},

{id:"m2-mm",h:"The Michaelis-Menten model",fig:"mm",
b:`<p>The model describes how the initial velocity (Vᵢ) of an enzyme reaction changes with substrate concentration:</p>
<p>E + S ⇌ ES → E + P &nbsp;&nbsp;and&nbsp;&nbsp; Vᵢ = Vmax[S] / (Km + [S])</p>
<ul><li><b>Vmax</b>: the maximum rate, reached when every enzyme molecule has substrate bound ([E]ᴛ = [ES]).</li>
<li><b>Km</b> (Michaelis constant): the [S] at which the rate is half of Vmax. Each enzyme-substrate pair has its own Km, and it doesn't depend on how much enzyme is present.</li>
<li><b>[E]ᴛ</b>: total enzyme, free plus bound ([E] + [ES]).</li></ul>
<p>Two simplifying assumptions: the reaction is treated as first order in [S] (the enzyme plays the always-available water from the Jello example), and forming the ES complex is the step that controls the rate.</p>
<p>Reading the curve:</p>
<ul><li><b>[S] well below Km</b>: most enzyme is free. Adding substrate raises the rate almost in proportion (Vᵢ ≈ (Vmax/Km)[S]).</li>
<li><b>[S] = Km</b>: Vᵢ = Vmax/2. More substrate still helps, but each addition helps less than the last.</li>
<li><b>[S] far above Km</b>: the enzyme is saturated. Adding substrate does almost nothing; Vᵢ ≈ Vmax and the reaction is effectively zero order in [S].</li></ul>`,
nl:"Lecture wording",note:`The lecture's checks treat "[S] greater than Km" as saturated. Strictly, saturation needs [S] far above Km: at [S] = 2 × Km the rate is only 67% of Vmax, and at 10 × Km it's about 91%. Questions here say "far above Km" when they mean saturated. The lecture's low-[S] equation is also labeled "[S] > Km" where it means [S] much less than Km.`,
so:`Where [S] sits relative to Km tells you whether more substrate will speed the reaction up, and by how much.`},

{id:"m2-km",h:"Interpreting Km and Vmax",
b:`<p><b>Km and affinity.</b> A low Km means the enzyme reaches half its top speed at a low substrate concentration, so it binds that substrate readily (high affinity). A high Km means it needs a lot of substrate to get going (low affinity). Comparing two enzymes that act on the same substrate, the one with the lower Km does better when substrate is scarce.</p>
<p><b>Vmax and enzyme amount.</b> Vmax depends on how much enzyme is present. Double the enzyme and Vmax doubles, because twice as many active sites are working at full speed. Km stays the same, because it describes how this enzyme and this substrate interact, not how many enzyme molecules there are.</p>
<p><b>Why enzymes run near Km.</b> In cells most enzymes work at substrate concentrations near their Km. In that range the rate still responds to [S], so the enzyme can speed up when substrate surges and slow down when it drops. An enzyme already running at Vmax couldn't speed up any further.</p>`,
so:`Km tells you how much substrate an enzyme needs; Vmax tells you how fast the enzyme present can go once it has enough.`},

{id:"m2-lb",h:"The Lineweaver-Burk plot",fig:"lb",
b:`<p>Vmax is never actually reached on a Michaelis-Menten curve. The curve only approaches it, and saturating an enzyme would take impractically high [S]. Taking the reciprocal of both sides of the equation turns the curve into a straight line:</p>
<p>1/Vᵢ = (Km/Vmax)(1/[S]) + 1/Vmax</p>
<p>That's y = mx + b, with y = 1/Vᵢ and x = 1/[S]:</p>
<ul><li><b>y-intercept</b> = 1/Vmax. A higher y-intercept means a lower Vmax.</li>
<li><b>x-intercept</b> = −1/Km. An x-intercept farther left of zero means a smaller Km.</li>
<li><b>slope</b> = Km/Vmax.</li></ul>
<p>Because it's a line, a few measurements at below-saturating [S] are enough to extend it to both axes and read off Km and Vmax. Points far to the right come from low [S]; points near the y-axis come from high [S].</p>`,
so:`On a Lineweaver-Burk plot, read Vmax from where the line crosses the y-axis and Km from where it crosses the x-axis.`},
{steps:"If 1/V = 2(1/[S]) + 0.5, find Vmax and Km (lecture practice)",s:["y-intercept: 1/Vmax = 0.5","Vmax = 1/0.5 = <b>2</b>","slope: Km/Vmax = 2","Km = 2 × Vmax = 2 × 2 = <b>4</b>"]},
{tool:"kin"},

{id:"m2-kcat",h:"Turnover number and catalytic efficiency",
b:`<p>Vmax depends on how much enzyme is in the tube, so it can't compare two enzymes by itself. Dividing by the total enzyme fixes that:</p>
<ul><li><b>kcat</b> (turnover number) = Vmax/[E]ᴛ: how many substrate molecules one active site converts to product per unit time when the enzyme is saturated.</li>
<li><b>Catalytic efficiency</b> = kcat/Km, also called the specificity constant. It combines speed (kcat) with the enzyme-substrate interaction (Km) and is unique to each enzyme-substrate pair.</li></ul>
<p>A higher kcat/Km means the enzyme handles that substrate more efficiently. Comparing substrates for one enzyme, the one with the highest kcat/Km is the one the enzyme prefers. Comparing enzymes for one substrate, it shows which could stand in for another, which is useful in drug design.</p>
<p>Lecture example: chymotrypsin, a digestive protease, has a far higher kcat/Km for phenylalanine than for glycine, so it prefers to cut next to large hydrophobic residues like Phe.</p>`,
nl:"Lecture wording",note:`The lecture says a higher specificity constant means higher affinity. Strictly, kcat/Km measures overall efficiency, and Km is the closer match to affinity. Either way, the substrate with the higher kcat/Km is the one the enzyme prefers.`,
so:`kcat/Km puts enzyme-substrate pairs on one scale, so you can tell which substrate an enzyme prefers and which enzyme works better.`},
{steps:"Enzyme X: kcat = 100 s⁻¹, Km = 10 µM. Enzyme Y: kcat = 500 s⁻¹, Km = 100 µM. Which is more efficient? (beyond lecture)",s:["X: kcat/Km = 100/10 = 10 µM⁻¹s⁻¹","Y: kcat/Km = 500/100 = 5 µM⁻¹s⁻¹","Y is faster once saturated, but X is <b>twice as efficient</b> because its Km is ten times lower"]}
],

"2.6":[
{id:"m2-inhib",h:"Three kinds of reversible inhibitor",fig:"inhib3",
b:`<table><tr><th>Type</th><th>Where it binds</th><th>Km</th><th>Vmax</th><th>LB plot</th><th>More substrate fixes it?</th></tr>
<tr><td><b>Competitive</b> (K-series)</td><td>Active site; shaped like the substrate</td><td>Up</td><td>Same</td><td>Lines cross on the y-axis</td><td>Yes</td></tr>
<tr><td><b>Noncompetitive</b> (V-series)</td><td>An allosteric site away from the active site</td><td>Same</td><td>Down</td><td>Lines cross on the x-axis</td><td>No</td></tr>
<tr><td><b>Uncompetitive</b></td><td>Only the ES complex</td><td>Down</td><td>Down</td><td>Parallel lines</td><td>No</td></tr></table>
<p><b>Competitive.</b> The inhibitor looks like the substrate and competes for the active site. Catalysis itself is untouched, so with enough substrate the enzyme still reaches Vmax. It just takes more [S] to get to half of it, so Km goes up. The hallmark is that a high enough substrate concentration overcomes it. Lecture example: carbon monoxide competes with O₂ for hemoglobin, which is why CO poisoning is treated by saturating with oxygen.</p>
<p><b>Noncompetitive.</b> The inhibitor binds elsewhere (an allosteric site) and stops the reaction from finishing. Substrate still binds normally, so Km is unchanged, but fewer enzyme molecules can complete the reaction, so Vmax drops. No amount of extra substrate fixes it; only release of the inhibitor does.</p>
<p><b>Uncompetitive.</b> The inhibitor binds only after substrate has bound, locking up the ES complex. Vmax drops because trapped complexes can't make product. Km also drops: pulling ES out of the reaction draws E + S ⇌ ES toward binding, so the enzyme looks like it binds substrate more tightly.</p>`,
nl:"Lecture wording",note:`The lecture describes uncompetitive inhibition loosely, as an allosteric site that can act before or after substrate binds. This guide teaches the standard version: it binds only ES, Km and Vmax both drop, and the LB lines are parallel. "K-series" and "V-series" are the textbook's names for competitive and noncompetitive.`,
so:`Ask what changed: Km up only means competitive, Vmax down only means noncompetitive, and both down means uncompetitive.`},
{drill:"m2d2"},

{id:"m2-irrev",h:"Reversible and irreversible inhibition",
b:`<p>The three types above are <b>reversible</b>: the inhibitor binds and comes off, and the enzyme works again once it's gone.</p>
<p>Some inhibitors bind so tightly, often by forming a covalent bond, that they permanently disable the enzyme. These are <b>irreversible</b> inhibitors. Certain poisons work this way, and the cell can only recover by making new enzyme.</p>
<p>This matters in drug design. A competitive drug can be pushed off its target when the natural substrate builds up. A noncompetitive or irreversible drug can't be outcompeted by substrate, which the lecture gives as the reason they're often preferred. The tradeoff (beyond lecture) is that an irreversible drug's effect lasts until the body makes new enzyme, so side effects are harder to reverse.</p>`,
so:`Whether substrate can outcompete an inhibitor, and whether the inhibitor ever lets go, decides how reliably and how long it shuts the enzyme down.`}
],

"2.7":[
{id:"m2-temp",h:"Temperature",fig:"temp",
b:`<p>Raising the temperature speeds a reaction at first, because molecules move faster and collide more often. Past the enzyme's optimum, activity drops off quickly: heat breaks the weak bonds that hold the fold together, and the enzyme denatures.</p>
<p>Human enzymes have optima near body temperature, about 37 °C. That's why a very high fever is dangerous. Enzymes start to denature, and the processes that depend on them break down.</p>
<p>Lecture example: the dark points on Siamese cats come from tyrosinase, a pigment-making enzyme that is inactive at normal core body temperature. It only works in the cooler extremities, so only the ears, face, paws and tail are dark.</p>
<p>Beyond lecture: enzymes from bacteria that live in hot springs can have optima of 70 °C or higher. Their folds are held by more salt bridges and more tightly packed hydrophobic cores, so it takes more heat to break them.</p>`,
so:`Heat helps until it starts breaking the weak bonds that hold the active site in shape.`},

{id:"m2-ph",h:"pH",fig:"ph",
b:`<p>Each enzyme also has an optimum pH. Most body enzymes work best around pH 7.3 to 7.5, close to blood. Digestive enzymes are the main exceptions: <b>pepsin</b> works best in the acidic stomach (around pH 2), and <b>chymotrypsin</b> works best in the basic small intestine (around pH 8).</p>
<p>This keeps digestion compartmentalized. An enzyme that only works at stomach pH can't digest proteins in other parts of the body.</p>
<p>Why pH matters (beyond lecture, ties to Module 1): many active sites depend on side chains like His, Asp, Glu or Lys being in a particular protonation state. Push the pH past a side chain's pKa and it gains or loses H⁺. That changes its charge, can break salt bridges and hydrogen bonds that hold the fold, and can stop the side chain from doing its job in catalysis.</p>`,
so:`pH sets the charges on side chains, so an enzyme only works in the pH range where its active site carries the right charges.`},

{id:"m2-control",h:"Changing how much enzyme is present",
b:`<p>Proteins are made and broken down all the time. Usually enzyme levels stay about constant, with new copies replacing worn-out ones. Cells can also change the amount on purpose: signals turn transcription up or down to make more or less enzyme, and extra enzyme can be sent for degradation (Module 6).</p>
<p>Changing the amount of enzyme is slow, so cells use it for long-term adaptation, like a change in diet, exercise or environment. For quick, temporary changes they switch existing enzyme on and off with other molecules instead (LO 2.8).</p>
<p>On a kinetics plot, more enzyme raises Vmax in proportion and leaves Km unchanged. Twice the enzyme means twice the active sites, but each one still binds substrate the same way.</p>`,
so:`Making more enzyme raises the ceiling (Vmax) without changing how the enzyme binds substrate (Km), and it's the slow, long-term way to control a reaction.`}
],

"2.8":[
{id:"m2-allo",h:"Allosteric regulation and feedback inhibition",fig:"feedback",
b:`<p>"Control the enzyme, control the reaction." Enzymes in cells respond to more than [S]. Many are <b>allosteric</b> enzymes: an <b>effector</b> molecule binds a site other than the active site and changes the enzyme's 3D shape, turning its activity up (activator) or down (inhibitor). This is the fast, reversible kind of control.</p>
<p>Lecture example: hemoglobin (a protein, though not an enzyme) is regulated by 2,3-bisphosphoglycerate (2,3-BPG), which binds away from the oxygen sites and changes how tightly hemoglobin holds O₂. That lets hemoglobin pick up O₂ in the lungs and release it in the tissues.</p>
<p><b>Feedback inhibition</b> is the most common use. In a pathway A → B → C → D → E, each step has its own enzyme. Once enough E has built up, E binds the enzyme for the first step and slows it. Shutting off only the last step would just pile up D, and the backup would spread down the pathway. Shutting the first step stops the whole pathway without wasting material, like a thermostat turning off the AC once the room is cool.</p>`,
so:`An end product that inhibits the first step of its own pathway keeps supply matched to demand without piling up intermediates.`},

{id:"m2-drug",h:"Enzyme regulation in drug discovery",
b:`<p>Knowing how enzymes are regulated gives drug design two things: a picture of normal enzyme activity to compare against, and a set of ways to change it. A drug can mimic the substrate (competitive), bind an allosteric site (noncompetitive) or bind permanently (irreversible). Km, Vmax and kcat/Km measurements then show how well a candidate works.</p>
<p><b>Penicillin</b> (lecture example) shuts down a key enzyme bacteria use to build their cell walls. Beyond lecture: that enzyme is a transpeptidase that crosslinks the wall. Penicillin's shape mimics the enzyme's normal substrate, so it enters the active site, then forms a covalent bond there and inactivates the enzyme permanently. Without crosslinks the new wall is weak and the bacterium bursts. Human cells have no cell wall and no transpeptidase, so the drug is selective.</p>
<p>Beyond lecture: methanol poisoning is treated with ethanol (or fomepizole). Alcohol dehydrogenase turns methanol into a toxic product. Ethanol competes for the same active site, so a high ethanol level slows methanol's conversion while the kidneys clear the methanol unchanged.</p>
<p>Beyond lecture: statins are competitive inhibitors of HMG-CoA reductase, the rate-limiting enzyme of cholesterol synthesis.</p>`,
so:`Pick an enzyme in the disease pathway, choose an inhibition strategy the substrate can't easily undo, and use kinetics to check the result.`}
]
},

questions:[
// ---- 2.1 ----
{id:"m2a01",lo:"2.1",src:"L1",ref:"m2-levels",type:"mc",tag:"beyond",
stem:"Heating an enzyme to 70 °C destroys its activity, but its amino acid sequence is unchanged. Which levels of structure were disrupted?",
opts:["Secondary, tertiary and quaternary, which depend on weak interactions","Primary only, because heat breaks the peptide bonds first","Primary and secondary, which both depend on covalent bonds","None, because heat removes cofactors without changing the shape"],ans:0,
exp:"The sequence (primary structure) is held by covalent peptide bonds, which survive the heating. The levels above it are held by hydrogen bonds, the hydrophobic effect and other weak interactions, which heat breaks. The enzyme unfolds and loses its active site."},
{id:"m2a02",lo:"2.1",src:"L1",ref:"m2-levels",type:"tf",tag:"beyond",
stem:"A protein made of a single polypeptide chain can have primary, secondary and tertiary structure, but it has no quaternary structure.",ans:true,
exp:"Quaternary structure is the arrangement of two or more separate chains. A one-chain protein stops at tertiary structure."},
{id:"m2a03",lo:"2.1",src:"L1",ref:"m2-fold",type:"mc",
stem:"A purified enzyme is unfolded with a chemical denaturant. When the denaturant is removed, the enzyme refolds and regains full activity. What does this show?",
opts:["The amino acid sequence holds the information for the correct fold","The enzyme needs a separate template protein to fold correctly","The denaturant broke peptide bonds, and they formed again later","The active site is not part of the enzyme's folded structure"],ans:0,
exp:"The chain found its way back to the same shape on its own, so the information for the fold is in the sequence. The fold is the chain's lowest-energy state. Denaturants unfold proteins without breaking peptide bonds."},
{id:"m2a04",lo:"2.1",src:"L1",ref:"m2-fold",type:"tf",
stem:"Because an enzyme is not consumed by its reaction, each enzyme molecule keeps working indefinitely and never needs to be replaced.",ans:false,
exp:"An enzyme isn't used up by the reaction, so it can run many cycles. It still wears out over time and is degraded and replaced. Wearing out is different from being consumed."},
{id:"m2a47",lo:"2.1",src:"L1",ref:"m2-levels",type:"mc",tag:"beyond",fig:"q-struct4",fixed:true,
stem:"Panels W to Z each show one level of protein structure. Which panel shows a level held together mainly by hydrogen bonds between backbone C=O and N–H groups?",
opts:["W","X","Y","Z"],ans:2,
exp:"Y shows secondary structure: an α-helix and a β-sheet, with the dashed lines marking backbone hydrogen bonds. X is the primary sequence (covalent peptide bonds), Z is a whole chain folded in 3D (tertiary, driven by side chains), and W is two chains fitting together (quaternary)."},

// ---- 2.2 ----
{id:"m2a05",lo:"2.2",src:"L1",ref:"m2-classes",type:"mc",
stem:"Lactose + H₂O → glucose + galactose. Which class of enzyme catalyzes this reaction?",
opts:["Hydrolase","Lyase","Ligase","Transferase"],ans:0,
exp:"Water is on the reactant side and one molecule becomes two, so a bond is broken by adding water: hydrolysis. A lyase also splits one molecule into two but doesn't use water."},
{id:"m2a06",lo:"2.2",src:"L1",ref:"m2-classes",type:"mc",
stem:"Glutamate + oxaloacetate → α-ketoglutarate + aspartate. The amino group on glutamate ends up on oxaloacetate. Which class of enzyme is this?",
opts:["Transferase","Isomerase","Oxidoreductase","Lyase"],ans:0,
exp:"Two molecules go in, two come out, and a functional group (the amino group) moved from one to the other. That's a transferase, here an aminotransferase."},
{id:"m2a07",lo:"2.2",src:"L1",ref:"m2-classes",type:"mc",
stem:"Which reaction would a ligase catalyze?",
opts:["Pyruvate + CO₂ + ATP → oxaloacetate + ADP + Pi","Fructose 1,6-bisphosphate → two three-carbon sugars","Glucose 6-phosphate → fructose 6-phosphate","Malate + NAD⁺ → oxaloacetate + NADH + H⁺"],ans:0,
exp:"Two molecules are joined into one and ATP is spent to do it, which marks a ligase. The second option splits one molecule without water (lyase), the third rearranges a molecule (isomerase), and the fourth moves electrons to NAD⁺ (oxidoreductase)."},
{id:"m2a08",lo:"2.2",src:"L1",ref:"m2-classes",type:"tf",
stem:"An enzyme that splits one molecule into two without using water is a hydrolase.",ans:false,
exp:"Splitting without water is what a lyase does. A hydrolase always has water on the reactant side."},
{id:"m2a09",lo:"2.2",src:"L1",ref:"m2-cofactor",type:"mc",
stem:"A purified enzyme is inactive until Mg²⁺ is added to the tube. Which statement is correct?",
opts:["Without Mg²⁺ it is an apoenzyme, and Mg²⁺ is a cofactor but not a coenzyme","Without Mg²⁺ it is a holoenzyme, and Mg²⁺ acts as its coenzyme","Mg²⁺ is a prosthetic group, because every cofactor is bound tightly","Mg²⁺ is the substrate, because the enzyme acts only once it binds"],ans:0,
exp:"The enzyme missing its cofactor is the apoenzyme; adding the cofactor gives the holoenzyme. Coenzymes are organic molecules, usually from vitamins, so a metal ion is a cofactor but not a coenzyme. Not every cofactor is tightly bound."},
{id:"m2a10",lo:"2.2",src:"L1",ref:"m2-terms",type:"tf",
stem:"In the induced fit model, the active site changes shape when the substrate binds, and the substrate changes shape slightly in return.",ans:true,
exp:"The active site roughly matches the substrate and then wraps around it after binding, like a glove around a hand. The change is reciprocal: the substrate is also pushed toward its reacting shape."},
{id:"m2a48",lo:"2.2",src:"L1",ref:"m2-cofactor",type:"mc",fig:"q-parts",fixed:true,
stem:"In the diagram, which number is the holoenzyme?",
opts:["1","2","3","4","5"],ans:2,
exp:"1 is the apoenzyme, the protein alone, which is inactive. 2 is the cofactor. Apoenzyme plus cofactor gives 3, the holoenzyme, which is the complete active enzyme. 4 is the substrate, and 5 is the enzyme-substrate (ES) complex."},

// ---- 2.3 ----
{id:"m2a11",lo:"2.3",src:"L2",ref:"m2-dg",type:"mc",
stem:"The free energy of the reactants is 75 and the free energy of the products is 50 (arbitrary units). How should the reaction be classified?",
opts:["ΔG = −25; exergonic and spontaneous","ΔG = +25; endergonic and nonspontaneous","ΔG = −25; endergonic, since energy is released","ΔG = +25; exergonic, since reactants start higher"],ans:0,
steps:["ΔG = G(products) − G(reactants)","ΔG = 50 − 75 = −25","Negative ΔG: energy is released, so exergonic and spontaneous"],
exp:"ΔG is products minus reactants, so 50 − 75 = −25. A negative ΔG means energy leaves the system, which is exergonic and spontaneous."},
{id:"m2a12",lo:"2.3",src:"L2",ref:"m2-dg",type:"tf",
stem:"A reaction can have a large negative ΔG and still proceed too slowly to measure without an enzyme.",ans:true,
exp:"ΔG tells you the direction a reaction can go, not how fast it goes. A reaction can be very favorable and still have a high activation energy, which is where enzymes come in."},
{id:"m2a13",lo:"2.3",src:"L2",ref:"m2-dg",type:"mc",
stem:"A reaction mixture has reached equilibrium. Which statement is true?",
opts:["ΔG is zero and there is no net change in concentrations","ΔG is negative because products are still being made","ΔG is positive because energy is needed to hold the balance","The forward reaction has stopped and only the reverse runs"],ans:0,
exp:"At equilibrium the forward and reverse reactions run at the same rate, so concentrations stop changing and ΔG = 0. Both directions are still going."},
{id:"m2a14",lo:"2.3",src:"L2",ref:"m2-dgstd",type:"mc",
stem:"A reaction has ΔG°′ = +5 kJ/mol, yet it runs forward in the cell. What best explains this?",
opts:["High reactant or low product levels in the cell make the actual ΔG negative","An enzyme in the cell changes the reaction's ΔG°′ to a negative value","ΔG°′ is measured at pH 2, so it does not apply to reactions in cells","Reactions with a positive ΔG°′ become spontaneous at 37 °C"],ans:0,
exp:"ΔG°′ assumes standard concentrations. In the cell, keeping reactant high or removing product quickly pulls the actual ΔG below zero, and the actual ΔG decides whether the reaction runs. Enzymes can't change ΔG or ΔG°′, and ΔG°′ is defined at pH 7."},
{id:"m2a15",lo:"2.3",src:"L2",ref:"m2-dgstd",type:"tf",
stem:"Because ΔG°′ is measured under fixed standard conditions, it reliably tells you whether a reaction will be spontaneous in the stomach.",ans:false,
exp:"ΔG°′ assumes pH 7 and standard concentrations. The stomach is far from pH 7, and real concentrations differ too, so you'd need the actual ΔG under those conditions."},
{id:"m2a49",lo:"2.3",src:"L2",ref:"m2-dg",type:"mc",fig:"q-endo",
stem:"How should the reaction in this energy diagram be classified?",
opts:["Endergonic and nonspontaneous; ΔG is positive","Exergonic and spontaneous; ΔG is negative","Endergonic and spontaneous; energy goes in as it runs","Exergonic and nonspontaneous; the barrier is too high"],ans:0,
exp:"The products sit higher than the reactants, so ΔG = G(products) − G(reactants) is positive. Energy has to be put in, which makes the reaction endergonic and nonspontaneous as written. The height of the hump is the activation energy, which affects speed, not the classification."},

// ---- 2.4 ----
{id:"m2a16",lo:"2.4",src:"L2",ref:"m2-ea",type:"mc",fig:"q-energy4",fixed:true,
stem:"The two curves show the same reaction with and without an enzyme. Which numbered feature is the same whether or not the enzyme is present?",
opts:["1","2","3","4"],ans:2,
exp:"Arrow 3 is ΔG, the gap between reactants and products, and both curves start and end at the same levels. Arrows 1 and 2 are the activation energy without and with the enzyme, and 4 marks the uncatalyzed transition state. The enzyme lowers the hill, so it changes Ea and the transition state's energy, but it can't move the end points, so ΔG and the equilibrium stay the same."},
{id:"m2a17",lo:"2.4",src:"L2",ref:"m2-ea",type:"tf",
stem:"A reaction that ends up 80% product at equilibrium without an enzyme will still end up about 80% product with the enzyme, just sooner.",ans:true,
exp:"The enzyme lowers the barrier for the forward and reverse reactions equally, so it doesn't move the equilibrium. It only gets there faster."},
{id:"m2a18",lo:"2.4",src:"L1",ref:"m2-ts",type:"mc",
stem:"Which feature of an active site does the most to stabilize the transition state?",
opts:["It binds the transition state more tightly than the starting substrate","It binds the final product more tightly than the transition state","It raises the free energy of the products so the reaction is favorable","It adds energy from ATP hydrolysis to every reaction it catalyzes"],ans:0,
exp:"The full set of enzyme-substrate contacts forms only at the transition state, so the active site's best fit is to that state. Binding energy lowers the top of the hill. Binding the product tightly would slow the enzyme down, and only ligases use ATP."},
{id:"m2a19",lo:"2.4",src:"L1",ref:"m2-ts",type:"mc",
stem:"An active site holds two substrates side by side, in the right orientation, inside a pocket that keeps water out. What is the effect?",
opts:["It lowers the activation energy by making the transition state easier to reach","It makes ΔG more negative, so the reaction becomes more favorable","It shifts the equilibrium so that more product forms in the end","It raises the transition state's energy so the reaction is better controlled"],ans:0,
exp:"Proximity, orientation and a water-free microenvironment all make it easier for the substrates to reach the transition state, which lowers Ea. None of these change ΔG or the equilibrium."},
{id:"m2a20",lo:"2.4",src:"L1",ref:"m2-ts",type:"tf",tag:"beyond",
stem:"A stable drug shaped like a reaction's transition state would be expected to bind the enzyme's active site less tightly than the normal substrate does.",ans:false,
exp:"Active sites fit the transition state better than the substrate, so a transition-state analog usually binds more tightly than the substrate. That's why it works as an inhibitor."},

// ---- 2.5 ----
{id:"m2a21",lo:"2.5",src:"L3",ref:"m2-mm",type:"mc",
stem:"An enzyme has a Km of 2 mM. The reaction is running at [S] = 0.2 mM. What happens to the initial rate if [S] is doubled to 0.4 mM?",
opts:["It nearly doubles, because [S] is well below Km","It stays the same, because the enzyme is saturated","It rises to exactly Vmax, because [S] passed Km","It drops, because extra substrate crowds the active site"],ans:0,
exp:"At [S] far below Km most of the enzyme is free, and the rate rises almost in proportion to [S]. Here [S] is a tenth of Km, so doubling it nearly doubles the rate."},
{id:"m2a22",lo:"2.5",src:"L3",ref:"m2-mm",type:"mc",fig:"q-mm4",fixed:true,
stem:"At which point on this Michaelis-Menten curve would adding more substrate barely change the rate?",
opts:["A","B","C","D"],ans:3,
exp:"D is far above Km, where nearly all of the enzyme has substrate bound ([E]ᴛ ≈ [ES]) and the rate is close to Vmax. More substrate has almost nothing left to fill, so the reaction is effectively zero order in [S]. At A the rate rises almost in step with [S], B is at Km (half of Vmax), and at C the curve is bending but still climbing."},
{id:"m2a23",lo:"2.5",src:"L3",ref:"m2-mm",type:"tf",
stem:"When [S] equals Km, adding more substrate no longer increases the reaction rate.",ans:false,
exp:"At [S] = Km the rate is half of Vmax, so there's still room to go up. More substrate increases the rate, just with smaller returns than at low [S]."},
{id:"m2a24",lo:"2.5",src:"L3",ref:"m2-km",type:"mc",
stem:"Enzyme A has a Km of 0.1 mM for glucose. Enzyme B has a Km of 10 mM for glucose. Blood glucose is about 5 mM. Which is true?",
opts:["A is close to saturated, while B's rate still rises and falls with glucose","B is close to saturated, while A's rate still rises and falls with glucose","Both are running at half of Vmax, since glucose is between their Km values","Neither binds glucose much, since 5 mM is below both Km values"],ans:0,
exp:"5 mM is 50 times A's Km, so A is nearly saturated and insensitive to glucose changes. 5 mM is half of B's Km, so B is in the range where its rate tracks glucose. (Beyond lecture: this is hexokinase vs glucokinase, which lets the liver respond to blood sugar.)"},
{id:"m2a25",lo:"2.5",src:"L3",ref:"m2-lb",type:"mc",fig:"q-lbread",
stem:"Read Vmax and Km from this Lineweaver-Burk plot.",
opts:["Vmax = 5, Km = 2","Vmax = 0.2, Km = 0.5","Vmax = 5, Km = 0.5","Vmax = 2, Km = 5"],ans:0,
steps:["The line crosses the y-axis at 0.2, so 1/Vmax = 0.2 and Vmax = 1/0.2 = 5","It crosses the x-axis at −0.5, so −1/Km = −0.5 and Km = 1/0.5 = 2"],
exp:"The y-intercept is 1/Vmax, so Vmax = 1/0.2 = 5. The x-intercept is −1/Km, so Km = 1/0.5 = 2. The intercepts are reciprocals, not the values themselves."},
{id:"m2a26",lo:"2.5",src:"L3",ref:"m2-lb",type:"mc",fig:"q-lb2",
stem:"Lines X and Y are Lineweaver-Burk plots for two enzymes acting on the same substrate. Which statement is correct?",
opts:["X has the lower Vmax and the lower Km","X has the higher Vmax and the higher Km","X has the lower Vmax and the higher Km","X has the higher Vmax and the lower Km"],ans:0,
exp:"X crosses the y-axis higher, and the y-intercept is 1/Vmax, so X has the lower Vmax. X also crosses the x-axis farther left of zero. The x-intercept is −1/Km, so a point farther left means a smaller Km."},
{id:"m2a27",lo:"2.5",src:"L3",ref:"m2-lb",type:"tf",
stem:"On a Lineweaver-Burk plot, the data points farthest to the right come from the highest substrate concentrations.",ans:false,
exp:"The x-axis is 1/[S], so large x values come from small [S]. The highest substrate concentrations sit closest to the y-axis."},
{id:"m2a28",lo:"2.5",src:"L3",ref:"m2-kcat",type:"mc",
stem:"An enzyme's kcat/Km is 4 × 10⁵ M⁻¹s⁻¹ for substrate P and 2 × 10² M⁻¹s⁻¹ for substrate Q. Which interpretation is best?",
opts:["It processes P far more efficiently, so P is its preferred substrate","Q is preferred, because a lower value means it binds more tightly","Both are converted at the same rate once the enzyme is saturated","P must have the higher Km, because its specificity constant is higher"],ans:0,
exp:"A higher kcat/Km means more efficient catalysis for that substrate, which is how the lecture's chymotrypsin table shows its preference for Phe. A high kcat/Km usually goes with a low Km, not a high one."},
{id:"m2a29",lo:"2.5",src:"L3",ref:"m2-order",type:"tf",
stem:"A reaction with two reactants can behave like a first-order reaction when one of the reactants is present in large excess.",ans:true,
exp:"If one reactant is always available, like the water in the Jello example, only the scarce reactant's concentration changes the rate, so the reaction acts first order."},

// ---- 2.6 ----
{id:"m2a30",lo:"2.6",src:"L4",ref:"m2-inhib",type:"mc",fig:"q-mmcomp",
stem:"The plot shows an enzyme's Michaelis-Menten curve with and without an inhibitor. Which type of inhibitor is this?",
opts:["Competitive","Noncompetitive","Uncompetitive","Irreversible"],ans:0,
exp:"Both curves head for the same plateau, so Vmax is unchanged, but the inhibited curve rises more slowly and needs more substrate to reach half of Vmax, so Km went up. That's the competitive pattern: enough substrate outcompetes the inhibitor. Noncompetitive, uncompetitive and irreversible inhibitors all lower the plateau."},
{id:"m2a31",lo:"2.6",src:"L4",ref:"m2-inhib",type:"mc",
stem:"An inhibitor lowers an enzyme's Vmax from 100 to 40 units while Km stays at 1 mM. Which statement fits?",
opts:["It binds away from the active site, and extra substrate won't restore Vmax","It competes for the active site, and extra substrate will restore Vmax","It binds only the ES complex, which is why Km stayed the same","It raises Km, so the enzyme needs more substrate to reach half speed"],ans:0,
exp:"Vmax down with Km unchanged is noncompetitive. The inhibitor binds an allosteric site, substrate still binds normally, and no amount of substrate undoes it. An uncompetitive inhibitor would lower Km too."},
{id:"m2a32",lo:"2.6",src:"L4",ref:"m2-inhib",type:"mc",fig:"q-lbpar",
stem:"The plot shows Lineweaver-Burk lines for an enzyme with and without an inhibitor. What does the inhibitor do?",
opts:["Lowers both Km and Vmax; it binds the ES complex","Raises Km and leaves Vmax alone; it competes for the active site","Lowers Vmax and leaves Km alone; it binds an allosteric site","Raises both Km and Vmax; it binds free enzyme only"],ans:0,
exp:"The lines are parallel, so the slope (Km/Vmax) is unchanged while both intercepts moved. The inhibited line crosses the y-axis higher (lower Vmax) and the x-axis farther left (lower Km). Km and Vmax dropping by the same factor is uncompetitive inhibition."},
{id:"m2a33",lo:"2.6",src:"L4",ref:"m2-inhib",type:"tf",
stem:"In carbon monoxide poisoning, giving high-concentration oxygen helps because O₂ can outcompete CO for hemoglobin's binding sites.",ans:true,
exp:"CO is the lecture's example of a competitive inhibitor. The hallmark of competitive inhibition is that enough of the normal ligand overcomes it, so saturating with O₂ pushes CO off."},
{id:"m2a34",lo:"2.6",src:"L4",ref:"m2-inhib",type:"mc",fig:"q-lby",
stem:"The plot shows Lineweaver-Burk lines for an enzyme with and without an inhibitor. Which type of inhibitor is it, and what happened to Km?",
opts:["Competitive; Km went up","Competitive; Km went down","Noncompetitive; Km stayed the same","Uncompetitive; Km went down"],ans:0,
exp:"The lines meet on the y-axis, so 1/Vmax and Vmax are unchanged, which is the competitive pattern. The inhibited line is steeper and crosses the x-axis closer to zero. A smaller −1/Km means a larger Km, so Km went up."},
{id:"m2a35",lo:"2.6",src:"L4",ref:"m2-inhib",type:"tf",
stem:"A noncompetitive inhibitor raises Km, because substrate binds less tightly while the inhibitor is attached.",ans:false,
exp:"A noncompetitive inhibitor binds away from the active site and doesn't affect substrate binding, so Km stays the same. It lowers Vmax by stopping the reaction from finishing."},
{id:"m2a36",lo:"2.6",src:"L4",ref:"m2-irrev",type:"mc",
stem:"An inhibitor forms a covalent bond in an enzyme's active site. Removing all the free inhibitor from the solution does not bring activity back. How is this inhibitor best classified?",
opts:["Irreversible","Competitive","Uncompetitive","Allosteric activator"],ans:0,
exp:"If activity doesn't return after the free inhibitor is gone, the enzyme has been permanently disabled. Reversible inhibitors, competitive or not, come off and let the enzyme work again."},
{id:"m2a50",lo:"2.6",src:"L4",ref:"m2-inhib",type:"mc",fig:"q-allo",
stem:"The diagram shows how an inhibitor binds its enzyme, with and without substrate in the active site. Which type of inhibitor is it?",
opts:["Noncompetitive","Competitive","Uncompetitive","Transition-state analog"],ans:0,
exp:"The inhibitor binds a second site away from the active site, and it binds whether or not substrate is there. Substrate still binds normally, so Km is unchanged, but the bound inhibitor stops the reaction from finishing, so Vmax drops. A competitive inhibitor or transition-state analog would sit in the active site, and an uncompetitive inhibitor binds only once substrate is already bound."},

// ---- 2.7 ----
{id:"m2a37",lo:"2.7",src:"L4",ref:"m2-control",type:"mc",fig:"q-mm2e",
stem:"The plot shows the same reaction run with 1× and 2× the amount of enzyme. What changed between the two curves?",
opts:["Vmax doubled and Km stayed the same","Km doubled and Vmax stayed the same","Vmax and Km both doubled","Km halved because more enzyme grabs substrate"],ans:0,
exp:"The 2× curve levels off twice as high, so Vmax doubled. Both curves reach half of their own Vmax at the same [S], so Km didn't change. Twice the enzyme means twice the active sites, but each one still binds substrate the same way."},
{id:"m2a38",lo:"2.7",src:"L4",ref:"m2-temp",type:"mc",
stem:"An enzyme assay is run at 25, 37 and 55 °C. Activity is highest at 37 °C and near zero at 55 °C. What best explains the 55 °C result?",
opts:["Heat broke the weak interactions holding the fold, so the enzyme denatured","Molecules moved too slowly at high temperature to collide with the enzyme","The high temperature made ΔG positive, so the reaction was no longer spontaneous","The high temperature broke the peptide bonds that make up the active site"],ans:0,
exp:"Below the optimum, heat speeds collisions. Above it, heat breaks the hydrogen bonds and other weak interactions that hold the fold, the active site loses its shape, and activity drops sharply. Peptide bonds survive these temperatures."},
{id:"m2a39",lo:"2.7",src:"L4",ref:"m2-ph",type:"mc",fig:"q-ph2",
stem:"P and Q are activity curves for two digestive proteases. Which one most likely works in the stomach?",
opts:["Q, which works best near pH 2","P, which works best near pH 8","P, which is still partly active at blood pH 7.4","Both, since the stomach's pH moves between their optima"],ans:0,
exp:"The stomach is strongly acidic, around pH 2, so the stomach protease is the one that peaks there: Q, like pepsin. P peaks near pH 8, like chymotrypsin in the small intestine. Each protease is nearly inactive at the other's pH, which keeps digestion confined to the right compartment."},
{id:"m2a40",lo:"2.7",src:"L4",ref:"m2-ph",type:"mc",tag:"beyond",
stem:"An enzyme depends on an active-site histidine (side-chain pKa about 6) that must be uncharged to work. Why does the enzyme lose activity when the pH drops from 7 to 4?",
opts:["His picks up H⁺ and becomes positively charged, changing the active site's chemistry","His loses its side chain at low pH, leaving a gap in the active site","Low pH makes the ΔG°′ of every reaction positive, so nothing happens","Acid hydrolyzes the peptide bonds that hold His in the active site"],ans:0,
exp:"At pH 4, well below His's pKa, the side chain is mostly protonated and positive. A charged His can't do the job the uncharged form does, and the new charge can disrupt nearby interactions. This is the same pH-vs-pKa logic from Module 1."},
{id:"m2a41",lo:"2.7",src:"L4",ref:"m2-control",type:"tf",
stem:"When a cell needs to change an enzyme's activity within seconds, it usually does it by changing how much of the enzyme it makes.",ans:false,
exp:"Making or degrading enzyme is slow, so it's used for long-term adaptation. Fast, temporary changes come from switching existing enzyme on and off with effector molecules."},
{id:"m2a51",lo:"2.7",src:"L4",ref:"m2-temp",type:"mc",tag:"beyond",fig:"q-temp2",
stem:"M and N are activity curves for the same kind of enzyme from two organisms. Which one most likely comes from a bacterium that lives in a hot spring?",
opts:["M, which works best near 75 °C","N, which works best near 37 °C","N, which stays active over a wider temperature range","Neither, since any enzyme denatures above about 50 °C"],ans:0,
exp:"An organism's enzymes have optima near the temperature it lives at. N peaks near human body temperature. M keeps its fold up to about 75 °C before it denatures, which fits a hot-spring organism. Enzymes from these bacteria have extra weak interactions holding the fold, so 50 °C is not a universal limit."},

// ---- 2.8 ----
{id:"m2a42",lo:"2.8",src:"L4",ref:"m2-allo",type:"mc",fig:"q-path",fixed:true,
stem:"In this pathway, E is the end product the cell needs. When E builds up, which numbered enzyme is it most likely to inhibit?",
opts:["Enzyme 1","Enzyme 2","Enzyme 3","Enzyme 4"],ans:0,
exp:"Feedback inhibition targets the first step. If E only blocked enzyme 4, D would pile up, then C, and the backup would spread. Inhibiting enzyme 1 stops the flow at the source, so no intermediates are made and wasted."},
{id:"m2a43",lo:"2.8",src:"L4",ref:"m2-allo",type:"tf",
stem:"An allosteric inhibitor can reduce an enzyme's activity without binding to the active site.",ans:true,
exp:"Allosteric effectors bind a separate site and change the enzyme's 3D shape, which changes how the active site works. That's how feedback inhibitors control the first enzyme in a pathway."},
{id:"m2a44",lo:"2.8",src:"L4",ref:"m2-drug",type:"mc",tag:"beyond",
stem:"Penicillin enters the active site of a bacterial transpeptidase and forms a covalent bond there. Why doesn't a rise in the enzyme's normal substrate restore cell wall building?",
opts:["The enzyme is permanently inactivated, so substrate has nothing to compete with","Penicillin is an uncompetitive inhibitor, so it binds only the ES complex","Extra substrate lowers the enzyme's Vmax, which slows the reaction further","Penicillin converts the extra substrate into a coenzyme the bacterium can't use"],ans:0,
exp:"Penicillin starts out like a substrate look-alike, but once it bonds covalently the enzyme is permanently disabled. Competition only matters for inhibitors that come off. The bacterium would have to make new enzyme."},
{id:"m2a45",lo:"2.8",src:"L4",ref:"m2-drug",type:"mc",tag:"beyond",
stem:"Alcohol dehydrogenase converts methanol into a toxic product. A patient with methanol poisoning is given ethanol. What is the reasoning?",
opts:["Ethanol competes for the same active site, slowing methanol's conversion while it's cleared","Ethanol irreversibly destroys alcohol dehydrogenase so no product can form","Ethanol makes the ΔG of methanol breakdown positive so the reaction stops","Ethanol binds an allosteric site that raises the enzyme's Vmax for methanol"],ans:0,
exp:"Ethanol is a competing substrate for the same active site. At high ethanol levels most enzyme is busy with ethanol, so methanol is converted slowly and can be cleared unchanged. This is competitive inhibition used on purpose."},
{id:"m2a46",lo:"2.8",src:"L4",ref:"m2-irrev",type:"mc",
stem:"A drug company wants an inhibitor that keeps working even when the target enzyme's substrate builds up in the cell. Which kind should they design?",
opts:["A noncompetitive or irreversible inhibitor","A competitive inhibitor shaped like the substrate","A molecule that raises Km without changing Vmax","An allosteric activator of the target enzyme"],ans:0,
exp:"Substrate buildup can push a competitive inhibitor off the active site, and raising Km without touching Vmax is the competitive pattern. Noncompetitive and irreversible inhibitors can't be outcompeted by substrate, which is why the lecture favors them for drugs."}
],

drills:[
{id:"m2d1",lo:"2.2",kind:"sort",title:"Enzyme classes",
intro:"Drag each item to its class, or tap it and then tap the class. Round 1 is the spotting rules; round 2 is real reactions.",
rounds:[
{name:"Spot the clue",bins:["Oxidoreductase","Transferase","Hydrolase","Lyase","Isomerase","Ligase"],
items:[["Water on the reactant side; one molecule becomes two","Hydrolase"],["One molecule becomes two, with no water","Lyase"],["Same parts before and after, rearranged","Isomerase"],["Two molecules joined, and ATP is used","Ligase"],["A functional group moves from one molecule to another","Transferase"],["Electrons move, so charges change","Oxidoreductase"]]},
{name:"Name the class",bins:["Oxidoreductase","Transferase","Hydrolase","Lyase","Isomerase","Ligase"],
items:[["Sucrose + H₂O → glucose + fructose","Hydrolase","Water in, one becomes two"],["Triglyceride + 3 H₂O → glycerol + 3 fatty acids","Hydrolase","Lipase adds water to break the ester bonds"],["Lactate + NAD⁺ → pyruvate + NADH + H⁺","Oxidoreductase","Electrons move from lactate to NAD⁺"],["Succinate + FAD → fumarate + FADH₂","Oxidoreductase","Electrons move to FAD"],["Glutamate + pyruvate → α-ketoglutarate + alanine","Transferase","An amino group moves between them"],["Glucose + ATP → glucose 6-phosphate + ADP","Transferase","ATP is here, but its phosphate group is being moved onto glucose, and nothing is joined"],["Fructose 1,6-bisphosphate → DHAP + glyceraldehyde 3-phosphate","Lyase","One becomes two with no water"],["Pyruvate → acetaldehyde + CO₂","Lyase","A C–C bond breaks without water"],["Glucose 6-phosphate → fructose 6-phosphate","Isomerase","Same atoms, rearranged"],["Dihydroxyacetone phosphate → glyceraldehyde 3-phosphate","Isomerase","Same formula, different arrangement"],["Pyruvate + CO₂ + ATP → oxaloacetate + ADP + Pi","Ligase","Two become one, paid for with ATP"],["Two DNA fragments + ATP → one continuous strand","Ligase","DNA ligase joins the pieces using ATP"]]}
]},
{id:"m2d2",lo:"2.6",kind:"plot",title:"Read the plot",
intro:"Each question shows a generated Michaelis-Menten or Lineweaver-Burk plot. Name the inhibitor or compare the two enzymes. Restart for a new set."},
{id:"m2d3",lo:"2.5",kind:"tool",tool:"kin",title:"Kinetics and inhibitor plotter",
intro:"Pick an inhibitor type and drag the sliders to watch both plots and the Km and Vmax values change."},
{id:"m2d4",lo:"2.6",kind:"case",title:"Inhibitor data",
intro:"For each result pick what happened to Km, what happened to Vmax, and the inhibitor type. The answer shows after the third pick.",
fields:[["Km","Up","Same","Down"],["Vmax","Up","Same","Down"],["Type","Competitive","Noncompetitive","Uncompetitive"]],
cases:[
{t:"Km goes from 2 to 8 mM; Vmax stays at 50",a:[0,1,0],e:"Only Km moved. The inhibitor competes for the active site."},
{t:"Km stays at 1.5 mM; Vmax drops from 120 to 40",a:[1,2,1],e:"Only Vmax fell. The inhibitor binds elsewhere and substrate can't outcompete it."},
{t:"Km drops from 4 to 2 mM; Vmax drops from 80 to 40",a:[2,2,2],e:"Both fell by the same factor. The inhibitor binds only the ES complex."},
{t:"LB lines cross on the y-axis",a:[0,1,0],e:"Same y-intercept means the same 1/Vmax. The x-intercept moved toward zero, so Km rose."},
{t:"LB lines cross on the x-axis",a:[1,2,1],e:"Same x-intercept means the same Km. A higher y-intercept means a lower Vmax."},
{t:"LB lines are parallel",a:[2,2,2],e:"Same slope (Km/Vmax) with both intercepts shifted: Km and Vmax both dropped."},
{t:"Adding a lot of substrate brings back the full uninhibited Vmax",a:[0,1,0],e:"Only a competitive inhibitor can be outcompeted by substrate."},
{t:"Inhibitor binds only after substrate is already in the active site",a:[2,2,2],e:"Binding only the ES complex is the definition of uncompetitive."},
{t:"Inhibitor has nearly the same shape as the substrate",a:[0,1,0],e:"A substrate look-alike competes for the active site."},
{t:"Inhibitor binds an allosteric site; substrate still binds normally",a:[1,2,1],e:"Substrate binding is unchanged, so Km stays the same. Fewer working enzymes means Vmax falls."}
]}
]
});

// Review highlight: the sentence each question checks (matched against lesson text).
(function(){const HL={m2a01:"Only the primary level depends mainly on covalent bonds",m2a02:"A protein made of one chain has no quaternary structure",m2a03:"The sequence carries the folding information",m2a04:"Enzymes do wear out over time and get replaced",m2a05:"Water on the reactant side, and one molecule becomes two",m2a06:"Two in, two out, with a group switched between them",m2a07:"Two molecules become one, and ATP is used",m2a08:"One molecule becomes two, with no water",m2a09:"Every coenzyme is a cofactor, but not every cofactor is a coenzyme",m2a10:"The current induced fit model",m2a11:"ΔG negative",m2a12:"Spontaneous describes direction, not speed",m2a13:"ΔG = 0",m2a14:"A reaction with a positive ΔG°′ can still run",m2a15:"cells don't sit at standard conditions",m2a16:"An enzyme does not change ΔG",m2a17:"so the reaction reaches the same equilibrium sooner",m2a18:"The active site fits the transition state better than it fits the starting substrate",m2a19:"The enzyme lowers Ea by making the transition state easier to reach",m2a20:"can bind more tightly than the substrate and block the enzyme",m2a21:"[S] well below Km",m2a22:"[S] far above Km",m2a23:"More substrate still helps, but each addition helps less than the last",m2a24:"Comparing two enzymes that act on the same substrate",m2a25:"y-intercept",m2a26:"A higher y-intercept means a lower Vmax",m2a27:"Points far to the right come from low [S]",m2a28:"A higher kcat/Km means the enzyme handles that substrate more efficiently",m2a29:"A second-order reaction can behave like a first-order one",m2a30:"Competitive.",m2a31:"Noncompetitive.",m2a32:"Uncompetitive.",m2a33:"carbon monoxide competes with O₂ for hemoglobin",m2a34:"Lines cross on the y-axis",m2a35:"Substrate still binds normally, so Km is unchanged",m2a36:"These are irreversible inhibitors",m2a37:"more enzyme raises Vmax in proportion and leaves Km unchanged",m2a38:"heat breaks the weak bonds that hold the fold together",m2a39:"pepsin works best in the acidic stomach (around pH 2)",m2a40:"Push the pH past a side chain's pKa",m2a41:"Changing the amount of enzyme is slow",m2a42:"Shutting the first step stops the whole pathway",m2a43:"binds a site other than the active site",m2a44:"forms a covalent bond there and inactivates the enzyme permanently",m2a45:"Ethanol competes for the same active site",m2a46:"A noncompetitive or irreversible drug can't be outcompeted by substrate",m2a47:"held by hydrogen bonds between backbone C=O and N–H groups",m2a48:"apoenzyme plus cofactor, the complete active enzyme",m2a49:"energy has to be put in. The reaction is endergonic and nonspontaneous",m2a50:"Substrate still binds normally, so Km is unchanged",m2a51:"enzymes from bacteria that live in hot springs can have optima of 70 °C or higher"};
MODS[MODS.length-1].questions.forEach(q=>{if(HL[q.id])q.hl=HL[q.id];});})();

// ---- Lecture window: question -> [lecture block id, verbatim snippet to highlight]. Beyond-lecture questions have no entry.
// LECNOTES: lecture blocks with wrong wording -> study-guide lesson(s) holding the "Lecture wording" note.
(function(){const LEC={
m2a03:["m2L1-b6","every time the proteins will fold back into the exact same conformation"],
m2a04:["m2L1-b6","The enzyme may wear out or breakdown over time, causing it to be less efficient or functional."],
m2a05:["m2L1-b13","Catalyze hydrolysis reactions, which are the cleavage of molecules (breaking of bonds) via the addition of water."],
m2a06:["m2L1-b13","Catalyze the transfer of functional groups (remember those from module 1, lesson 1) between molecules."],
m2a07:["m2L1-b13","Powered by ATP hydrolysis because they require energy."],
m2a08:["m2L1-b13","Catalyze cleavage of bonds without water."],
m2a09:["m2L1-b8","Coenzymes are cofactors. Cofactors are not always coenzymes."],
m2a10:["m2L1-b8","The substrate induces a conformational change on the active site, and this in turn induces a reciprocal change on the substrate."],
m2a48:["m2L1-b8","The complete catalytic enzyme, with cofactor in tow, is called a holoenzyme"],
m2a18:["m2L1-b8","the full completment of the enzyme-substrate interactions is formed only when the substrate is in the transition state between substrate and product."],
m2a19:["m2L1-b8","It can shield substrates from water and generate an environment whose polarity, hydrophobicity, and/or acidity is different from the surrounding cytoplasm."],
m2a11:["m2L2-b9","Free energy of reactants: 75"],
m2a12:["m2L2-b7","A negative ΔG indicates that a reaction can take place spontaneously, but it does not signify whether it will proceed at a perceptible rate."],
m2a13:["m2L2-b7","When a reaction is at equilibrium, there is no net change in the concentrations of the products and reactants"],
m2a14:["m2L2-b8","we can force it to be spontaneous by adjusting the concentration of the reactants or products"],
m2a15:["m2L2-b8","a reaction in our stomach is not occuring in an environment with a pH of 7."],
m2a49:["m2L2-b7","These reactions, nonspontaneous reactions, reactions that consume energy, are termed endergonic reactions."],
m2a16:["m2L2-b11","Enzymes will alter the rate of the reaction, but not the equilibrium of the reaction or the ΔG."],
m2a17:["m2L2-b11","All they do is help a reaction get where it was already going faster."],
m2a21:["m2L3-b10","The velocity is directly proportional to the substrate concentration at this point"],
m2a22:["m2L3-b10","There is no free enzyme left and the reaction is occuring at maximum velocity."],
m2a23:["m2L3-b5","The addition of more substrate at this point will still increase the velocity of the reaction, although the rate of return will be smaller from this point on."],
m2a24:["m2L3-b10","Km may be determined experimentally. This is an important characteristic of an enzyme catalyzed reaction and is significant for its biological function."],
m2a25:["m2L3-b16","b = 1/Vmax = the Y intercept"],
m2a26:["m2L3-b16","input 0 in for Y, and the x intercept = -1/Km"],
m2a27:["m2L3-b16","we are going to create a double reciprocal of our original MM equation"],
m2a28:["m2L3-b18","So we can see if an enzyme prefers one substrate over another"],
m2a29:["m2L3-b3","Sometimes when a second order reaction has reactants at varying concentrations, it will appear as a first order reaction"],
m2a30:["m2L4-b11","the hallmark of a competitive inhibitor is that it can be overcome by a sufficiently high concentration of substrate."],
m2a31:["m2L4-b11","No amount of additional substrate will overcome a non-competitive inhibitor."],
m2a32:["m2L4-b11","This is an allosteric binding site that blocks the active site, meaning it impacts both Km and Vmax."],
m2a33:["m2L4-b11","carbon monoxide poisoning is to saturate with oxygen."],
m2a34:["m2L4-b11","Your book calls these K-series enzymes because Km is raised without an effect of Vmax."],
m2a35:["m2L4-b11","a noncompetitive inhibitor does not prevent a substrate from binding to the active site"],
m2a36:["m2L4-b11","Certain poisons are so tightly bound that they are considered permanent inhibitors"],
m2a50:["m2L4-b11","Allosteric inhibitors that do not bind to the active site are examples of non-competitive inhibitors."],
m2a37:["m2L4-b7","many enzymes are also controlled at the molecular level, with concentrations being altered on an as-needed basis."],
m2a38:["m2L4-b5","the weak bonds that hold the enzyme’s structure in place are broken, causing the enzyme to denature."],
m2a39:["m2L4-b7","Pepsin prefers the acidic environment found within lysozymes and our stomach, whereas Chymotrypsin prefers the basic environment of our intestine."],
m2a41:["m2L4-b7","This type of regulation is favored for rapid and transient alterations."],
m2a42:["m2L4-b8","E goes back and inhibits the first reaction"],
m2a43:["m2L4-b8","The allosteric binding site is typically not the same as the active site."],
m2a46:["m2L4-b11","These are going to be the preference when it comes to a drug formation because the drug cannot be overcome by the substrate the drug is designed to counteract."]};
const M=MODS[MODS.length-1];
M.lecture="m2";
M.lecnotes={"m2L3-b5":["m2-mm"],"m2L3-b10":["m2-mm"],"m2L3-b12":["m2-mm"],"m2L3-b18":["m2-kcat"],"m2L4-b11":["m2-inhib"],"m2L4-b13":["m2-inhib"]};
M.questions.forEach(q=>{if(LEC[q.id])q.lec={b:LEC[q.id][0],hl:LEC[q.id][1]};});})();
