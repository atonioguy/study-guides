// Module 1: Intro to Biochemistry (LOs 1.1 to 1.4)
// Guide blocks: {id,h,b,fig,img,note,nl,so,beyond} lesson | {steps,s} worked example | {tool} | {drill}
// Questions: src = lecture lesson (L1 biomolecules, L3 water, L4 pH). ref = lesson id. tag "beyond" = not in lecture.
MODS.push({
id:"m1", short:"M1", name:"Module 1: Biomolecules, water, pH",
los:[
{id:"1.1", nick:"Biomolecules", title:"Relate the structure and function of biomolecules to their cellular role"},
{id:"1.2", nick:"Water and weak forces", title:"Describe how the properties of water facilitate biological interactions"},
{id:"1.3", nick:"pH and buffers", title:"Determine the pH of a solution by direct measurement and calculation"},
{id:"1.4", nick:"Bicarbonate and acid-base", title:"Apply knowledge of the bicarbonate buffer system to predict pathophysiologic effects of acidosis and alkalosis"}
],

guide:{
"1.1":[
{id:"m1-carbon",h:"Carbon as a backbone and fuel",
b:`<p>Carbon forms four stable covalent bonds. With four bonds per atom it can branch and link into chains and rings thousands of atoms long, which is how cells get molecules as large as proteins and DNA.</p>
<p>C–C and C–H bonds also hold a lot of energy. Breaking them (burning glucose or fat) releases more energy than breaking most other bonds, so carbon compounds make efficient fuel. The end product, CO₂, is a water-soluble gas the body can exhale and other organisms can reuse.</p>
<p>Organic compounds have carbon bonded to hydrogen. Inorganic compounds may contain carbon, but not bonded to hydrogen (CO₂, carbonate).</p>`,
so:`Large carbon backbones let biomolecules be big enough to carry structure and information, and energy-rich C–C and C–H bonds let the same molecules serve as fuel.`},

{id:"m1-join",h:"Functional groups and how monomers join",fig:"classes",
b:`<p>Three groups do most of the joining. A <b>hydroxyl</b> (–OH) is polar. A <b>carboxyl</b> (–COOH) donates H⁺, so it is acidic. An <b>amine</b> (–NH₂) accepts H⁺, so it is basic. Every amino acid has both a carboxyl and an amine.</p>
<p>Monomers join by <b>dehydration synthesis</b>: an –OH leaves one monomer and an H leaves the other, forming water and a new covalent bond. <b>Hydrolysis</b> adds the water back to split the bond. Digestion is hydrolysis.</p>
<p>The bond's name depends on what it connects:</p>
<ul><li>sugar –OH + sugar –OH → <b>glycosidic</b> bond</li>
<li>fatty acid –COOH + glycerol –OH → <b>ester</b> bond</li>
<li>amino acid –COOH + next amino acid –NH₂ → <b>peptide</b> bond</li>
<li>one phosphate linking the sugars of two nucleotides → <b>phosphodiester</b> bond (two ester links through one phosphate)</li></ul>`,
so:`If you can see which groups react, you can name the bond and predict that water is released when it forms and used up when it breaks.`},
{drill:"m1d6"},

{id:"m1-carbs",h:"Carbohydrates",
b:`<p>Sugars are C, H and O, usually in a ring, and covered in –OH groups. All those hydroxyls make them polar, so glucose dissolves in blood and cytoplasm and can be delivered anywhere as fuel.</p>
<p><b>Monosaccharides</b>: glucose, fructose, galactose. <b>Disaccharides</b>: two joined by a glycosidic bond (sucrose = glucose + fructose; lactose; maltose). <b>Polysaccharides</b>: hundreds to thousands of units, often branched.</p>
<p>Cells store glucose as a polymer (glycogen in animals, starch in plants). One large molecule holds a lot of glucose in a small space. Glycogen's branches also give it many chain ends, so many enzymes can clip glucose off at once when it's needed (beyond lecture).</p>
<p>Complex carbohydrates digest more slowly than simple sugars because more glycosidic bonds have to be hydrolyzed before glucose is free.</p>
<p>Branched sugar chains attached to proteins and lipids on the cell surface work as ID tags and contact points between cells. The pattern of the branches carries the information.</p>`,
so:`Polar hydroxyls make sugar a deliverable fuel. Linking and branching turn it into compact storage and surface identity markers.`},

{id:"m1-lipids",h:"Lipids: three types",
b:`<p>Lipids are the one class not built from repeating units. What they share is being <b>amphipathic</b>: a polar head that interacts with water and a long nonpolar hydrocarbon tail that doesn't.</p>
<p><b>Triglycerides</b>: glycerol + 3 fatty acids, joined by ester bonds. The tails are almost all C–H, so they store a lot of energy. Triglycerides are the stored fat in adipose tissue, which makes them long-term fuel storage.</p>
<p><b>Phospholipids</b>: glycerol + 2 fatty acids + a phosphate-containing head. Sphingolipids are phospholipids built on sphingosine instead of glycerol, often with sugars attached. These build membranes.</p>
<p><b>Steroids</b>: four fused carbon rings. Cholesterol sits between phospholipids and stabilizes the membrane. It is also the starting material for bile salts (fat digestion) and steroid hormones (cortisol, testosterone, estradiol).</p>`,
so:`Each lipid's job follows from its shape: energy-dense nonpolar tails for storage, a polar head plus tails for membranes, rigid rings for membrane stability and hormones.`},

{id:"m1-membrane",h:"Membranes: bilayer and fluidity",fig:"bilayer",
b:`<p>Put phospholipids in water and they arrange themselves. The tails cluster away from water (the hydrophobic effect, LO 1.2) and the heads face water on both sides. That's a bilayer, and nothing has to assemble it.</p>
<p>The bilayer's nonpolar core blocks ions and polar molecules like glucose. Small nonpolar molecules like O₂ and CO₂ can pass through (beyond lecture). This is why the membrane is selectively permeable and needs transport proteins for glucose and ions.</p>
<p>A <b>saturated</b> fatty acid has no C=C double bonds, so its tail is straight. Straight tails pack tightly: solid at room temperature (butter), stiffer membrane. A C=C in an <b>unsaturated</b> tail puts a kink in it. Kinked tails can't pack tightly: liquid at room temperature (olive oil), more fluid membrane.</p>
<p>Cholesterol limits phospholipid movement in both directions. When it's warm it keeps the membrane from getting too loose; when it's cold it keeps tails from packing solid.</p>`,
so:`Amphipathic structure produces the bilayer, the bilayer's nonpolar core produces selectivity, and tail saturation plus cholesterol set fluidity.`},

{id:"m1-aa",h:"Amino acids",
img:{src:"images/amino-acids-compoundchem.png",alt:"Chart of the twenty common amino acids grouped as aliphatic, aromatic, acidic, basic, hydroxylic, sulfur-containing and amidic, with dashed circles marking essential amino acids",credit:`Chart: <a href="https://www.compoundchem.com/2014/09/16/aminoacids/" target="_blank" rel="noopener">Compound Interest</a>, CC BY-NC-ND 4.0, shown unmodified. Same chart as the lecture.`},
b:`<p>Every amino acid has the same core: an amine group, a carboxyl group and a central carbon. The <b>R group</b> (side chain) is what differs, and its chemistry decides how that amino acid behaves in water.</p>
<table><tr><th>Group</th><th>Members</th><th>Side chain</th><th>Course call</th></tr>
<tr><td>Aliphatic</td><td>Ala, Gly, Ile, Leu, Pro, Val</td><td>open carbon chain</td><td>hydrophobic, except Gly</td></tr>
<tr><td>Aromatic</td><td>Phe, Trp, Tyr</td><td>carbon ring</td><td>hydrophobic</td></tr>
<tr><td>Acidic (−)</td><td>Asp, Glu</td><td>extra carboxyl, loses H⁺ at pH 7.4</td><td>hydrophilic</td></tr>
<tr><td>Basic (+)</td><td>Arg, His, Lys</td><td>extra nitrogen group, gains H⁺</td><td>hydrophilic</td></tr>
<tr><td>Hydroxylic</td><td>Ser, Thr</td><td>–OH</td><td>hydrophilic</td></tr>
<tr><td>Amidic</td><td>Asn, Gln</td><td>amide (–CONH₂)</td><td>hydrophilic</td></tr>
<tr><td>Sulfur</td><td>Cys, Met</td><td>contains S</td><td>Cys hydrophilic, Met hydrophobic</td></tr></table>
<p>Hydrophobic by the course's count: Ala, Ile, Leu, Pro, Val, Phe, Trp, Tyr, Met. Everything else is hydrophilic.</p>
<p>Proline is technically an imino acid (its nitrogen is part of a ring). On the chart, a dashed circle means <b>essential</b> (must come from the diet) and a solid circle means non-essential (the body can make it).</p>`,
nl:"Course grouping",note:`The lecture follows the textbook, which counts Gly as hydrophilic even though its side chain is just an H, and Tyr as hydrophobic even though its –OH is polar (it interacts only weakly with water). Other sources split these differently. Use the course version on the exam. The chart doesn't show hydrophobic vs hydrophilic, so go by the table.`,
so:`A side chain's group tells you whether it ends up buried inside or exposed on the surface of a folded protein.`},
{drill:"m1d1"},

{id:"m1-fold",h:"Protein folding: side chains set the shape",fig:"fold",
b:`<p>Peptide bonds link amino acids into a long unbranched chain. In water the chain folds so that hydrophobic side chains pack into the core, away from water, and polar and charged side chains end up on the surface where they interact with water.</p>
<p>Inside the fold, side chains hold the shape with weak interactions: hydrogen bonds, salt bridges between + and − side chains, and van der Waals contacts. Change the sequence and you change which side chains go where, so you change the shape.</p>
<p>The shape determines the function. An enzyme's active site, a channel's pore and an antibody's binding pocket are each a specific 3D arrangement of side chains. Proteins catalyze reactions (enzymes), provide structure, carry O₂ (hemoglobin), send and receive signals, defend against pathogens and move cells.</p>
<p>Folding depends on charge, so anything that changes charge can unfold a protein. A pH change adds or removes H⁺ on acidic and basic side chains, which breaks salt bridges, and the protein can misfold and stop working.</p>`,
so:`For proteins the chain runs: sequence of R groups → fold → shape → job.`},

{id:"m1-nucleic",h:"Nucleic acids",fig:"dna",
b:`<p>A nucleotide has three parts: a 5-carbon sugar, a nitrogen-containing ring (the base), and at least one phosphate. Phosphodiester bonds link the phosphate of one nucleotide to the sugar of the next, forming a sugar-phosphate backbone with the bases sticking off it.</p>
<p>In DNA, two strands pair. The covalent backbones run along the outside and the bases meet in the middle, held by hydrogen bonds (A with T, G with C). Strong covalent bonds keep each strand's sequence intact. Weak hydrogen bonds let the strands separate so the sequence can be copied or read, then come back together.</p>
<p>DNA uses deoxyribose and the bases A, T, G, C. RNA uses ribose and has U in place of T (A, U, G, C). DNA stores genetic information, it is transcribed into RNA, and RNA is used to build proteins.</p>`,
so:`A covalent backbone with hydrogen-bonded bases is what lets DNA be both stable storage and readable.`}
],

"1.2":[
{id:"m1-polar",h:"Water is polar",fig:"water",
b:`<p>Oxygen is more electronegative than hydrogen, so the shared electrons in each O–H bond spend more time near the oxygen. The oxygen ends up partially negative (δ−) and the hydrogens partially positive (δ+). Water has no net charge but has a permanent dipole.</p>
<p>That dipole is why things dissolve. Water's δ− oxygens surround cations, its δ+ hydrogens surround anions, and both line up with the partial charges on polar molecules. Polar and charged molecules are therefore <b>hydrophilic</b>. Nonpolar molecules have no partial charges for water to interact with, so they are <b>hydrophobic</b> and don't dissolve.</p>
<p>Charged (an ion): net charge, like Na⁺ or Cl⁻. Polar: zero net charge but uneven charge distribution. Nonpolar: zero net charge, evenly distributed.</p>`,
so:`Water's dipole decides which biomolecules dissolve and which get pushed together, and cells use both outcomes.`},

{id:"m1-hbond",h:"Hydrogen bonds",
b:`<p>A hydrogen bond forms between a δ+ hydrogen attached to N, O or F and a δ− N, O or F on another molecule (or another part of the same molecule). N, O and F are the most electronegative atoms, so a hydrogen attached to one of them is strongly δ+ and the attraction is unusually strong for a dipole interaction. A hydrogen on carbon is barely δ+ and does not hydrogen-bond.</p>
<p>Each water molecule hydrogen-bonds to its neighbors. That gives water cohesion: the dome of water on a penny, the meniscus in a graduated cylinder, insects walking on a pond.</p>
<p>A hydrogen bond is strong for a weak interaction but weak compared to a covalent bond, and in liquid water they constantly break and re-form. Cells use both sides of that. Many hydrogen bonds together hold DNA's double helix and a protein's fold, but each one is easy to break, so DNA strands can separate for replication.</p>`,
so:`Hydrogen bonds give water cohesion and give DNA and proteins structure that is stable but still reversible.`},

{id:"m1-weak",h:"Weak interactions",fig:"forces",
b:`<p>Covalent and ionic bonds hold atoms together inside a molecule (intramolecular). Weak, noncovalent interactions act between molecules, or between distant parts of one large molecule (intermolecular). Because they're weak and reversible, a protein can bind a substrate and then release it.</p>
<p>From strongest to weakest:</p>
<ul><li><b>Ion–dipole</b>: a full charge attracts the oppositely charged end of a polar molecule. This is why salt dissolves in water. The lecture also calls these salt bridges.</li>
<li><b>Hydrogen bond</b>: a strong dipole–dipole interaction involving H on N, O or F.</li>
<li><b>Dipole–dipole</b>: the δ+ end of one polar molecule attracts the δ− end of another.</li>
<li><b>van der Waals</b> (dispersion): electrons shift for an instant, creating a temporary dipole that induces one in a neighbor. These happen between all molecules, even nonpolar ones. Each one is the weakest, but thousands of close contacts add up (gecko feet, a tightly packed protein core).</li></ul>
<p>van der Waals attraction grows as atoms get closer, up to the <b>van der Waals contact distance</b>. Any closer and the electron clouds repel.</p>`,
so:`Weak interactions are strong in large numbers and easy to break one at a time, so biomolecules can hold a shape and still bind and release partners.`},

{id:"m1-hydrophobic",h:"The hydrophobic effect",fig:"hydro",
b:`<p>Oil and water separate, but not because oil molecules attract each other. Water can't hydrogen-bond to a nonpolar molecule, so the water molecules next to it are forced into an ordered "cage" around it. Ordered water means low entropy.</p>
<p>When nonpolar molecules cluster, less nonpolar surface touches water, fewer waters are caged, and the freed waters move randomly. Entropy increases, so clustering happens spontaneously (second law of thermodynamics). The hydrophobic effect is driven by water's entropy, not by attraction between the nonpolar molecules.</p>
<p>It drives the two big self-assembly events from LO 1.1: phospholipid tails clustering into a bilayer and hydrophobic side chains packing into a protein's core.</p>`,
so:`The hydrophobic effect is why membranes and folded proteins form on their own in water.`},

{id:"m1-shield",h:"Why water weakens ionic attractions",beyond:true,
b:`<p>In a salt crystal, Na⁺ and Cl⁻ attract each other strongly. In water, each ion gets surrounded by oriented water molecules (a hydration shell) whose partial charges partly cancel the ion's charge. The ions now attract each other much less, so they separate and stay dissolved. Chemists say water has a high dielectric constant.</p>
<p>The same thing happens in proteins. A salt bridge between two charged side chains on the surface is weaker than it would be in a nonpolar environment, because water competes for both charges. Salt bridges buried in the protein's core, away from water, are stronger.</p>
<p>Adding salt (raising ionic strength) shields charges further, which is one reason high salt can disrupt binding that depends on charge.</p>`,
so:`Water screens charges, so electrostatic interactions in cells stay weak and reversible.`}
],

"1.3":[
{id:"m1-acids",h:"Acids, bases and conjugate pairs",
b:`<p>An <b>acid</b> donates H⁺ and a <b>base</b> accepts H⁺. When an acid gives up its H⁺, what's left is its <b>conjugate base</b>: HA ⇌ H⁺ + A⁻. When a base picks up an H⁺, it becomes its <b>conjugate acid</b>.</p>
<p>A free H⁺ in water attaches to a water molecule to form H₃O⁺, so [H⁺] and [H₃O⁺] are used interchangeably.</p>
<p>The conjugate base of an organic acid ends in -ate: lactic acid and lactate, pyruvic acid and pyruvate. At blood pH 7.4 most organic acids are in the -ate form, which is why later modules say pyruvate, not pyruvic acid.</p>
<p>Water itself dissociates very slightly (H₂O ⇌ H⁺ + OH⁻), so it can act as an acid or a base.</p>`,
so:`Most pH questions come down to which way H⁺ moves between an acid and its conjugate base.`},

{id:"m1-scale",h:"The pH scale",fig:"phscale",
b:`<p>pH = −log[H⁺]. Because it's a log scale, each 1-unit drop in pH means 10 times more H⁺. pH 5 has 100 times the H⁺ of pH 7.</p>
<p>Pure water has [H⁺] = 1×10⁻⁷ M, so pH 7 is neutral. Below 7 is acidic and above 7 is basic. pOH = −log[OH⁻], and pH + pOH = 14 in any water solution, because [H⁺][OH⁻] = K<sub>w</sub> = 10⁻¹⁴.</p>
<p>To go from pH back to concentration: [H⁺] = 10<sup>−pH</sup>.</p>`,
so:`Small pH changes are large changes in H⁺, which is why blood pH is held in a narrow range.`},
{steps:"A solution has [H₃O⁺] = 1×10⁻³ M (lecture practice)",s:["pH = −log(1×10⁻³) = <b>3</b>","pOH = 14 − 3 = <b>11</b>","[OH⁻] = 10⁻¹¹ M","pH 3 is below 7, so the solution is <b>acidic</b>."]},

{id:"m1-ka",h:"Keq, Ka and pKa",
b:`<p>K<sub>eq</sub> = [products] / [reactants] at equilibrium. K<sub>eq</sub> above 1 means products are favored; below 1 means reactants are favored. The lecture says to know what it is and how to interpret it; you're unlikely to calculate it on the exam.</p>
<p>For an acid, HA ⇌ H⁺ + A⁻, the constant is K<sub>a</sub> = [H⁺][A⁻] / [HA]. A large K<sub>a</sub> means the acid gives up its H⁺ easily. HCl has K<sub>a</sub> around 10⁶ and dissociates completely, so 0.1 M HCl has pH 1.</p>
<p>pK<sub>a</sub> = −log K<sub>a</sub>, which flips the direction: <b>lower pKa means a stronger acid</b>. Strong acids have pKa below 0. The weak acids in the body (acetic acid 4.8, carbonic acid 6.1) only partly dissociate.</p>
<p>Water's K<sub>eq</sub> is tiny (1.8×10⁻¹⁶) because so little dissociates. Water's concentration (55.5 M) barely changes, so it's treated as constant and folded into K<sub>w</sub> = [H⁺][OH⁻] = 10⁻¹⁴.</p>`,
nl:"Lecture correction",note:`The lecture writes pKa = log(Ka). It's missing the minus sign: pKa = −log(Ka). With the minus sign, a larger Ka gives a smaller pKa.`,
so:`pKa tells you how tightly an acid holds its proton, which you need to predict its form at a given pH.`},

{id:"m1-hh",h:"Henderson-Hasselbalch: which form dominates",
b:`<p>pH = pKa + log([A⁻] / [HA]). The lecture spells it "Hasselback."</p>
<p>Read it as a comparison of pH to pKa:</p>
<ul><li>pH = pKa: log of the ratio is 0, so [A⁻] = [HA]. Half dissociated.</li>
<li>pH above pKa: ratio above 1, so the deprotonated form (A⁻) dominates.</li>
<li>pH below pKa: ratio below 1, so the protonated form (HA) dominates.</li></ul>
<p>Each pH unit away from the pKa is another factor of 10: ratio = 10<sup>(pH − pKa)</sup>. Blood at 7.4 with carbonic acid's pKa of 6.1 gives 10<sup>1.3</sup> ≈ 20, so 20 HCO₃⁻ per H₂CO₃.</p>
<p>A way to reason it out: low pH means H⁺ is plentiful, so molecules hold on to theirs (HA). High pH means H⁺ is scarce, so they give it up (A⁻).</p>`,
nl:"Lecture correction",note:`The lecture's paragraph on this describes the A⁻-dominant form as a "stronger acid." Skip that wording and use the rule above: pH above pKa, A⁻ dominates.`,
so:`Comparing pH to pKa lets you predict a molecule's charge in any compartment, usually without a calculator.`},
{steps:"Aspirin (pKa 3.5) in blood at pH 7.4 (lecture example)",s:["7.4 = 3.5 + log([A⁻]/[HA])","log([A⁻]/[HA]) = 7.4 − 3.5 = 3.9","[A⁻]/[HA] = 10<sup>3.9</sup> ≈ 7,900","Nearly all aspirin in blood is the charged A⁻ form."]},
{tool:"hh"},

{id:"m1-ionize",h:"Why ionization matters: aspirin",
b:`<p>Charged molecules dissolve well in water but cross the membrane's nonpolar core poorly. Ionization at a given pH therefore affects where a drug is absorbed, how soluble a molecule is, and how biomolecules behave.</p>
<p>The lecture's aspirin question gives a premise: <b>aspirin is absorbed in its conjugate base (A⁻) form</b>. With pKa 3.5, the stomach (pH 1.5) is 2 units below the pKa, so aspirin there is about 99% HA. The small intestine in the problem (pH 3.5) equals the pKa, so it's 50% A⁻. Under that premise, absorption is better in the small intestine.</p>
<p>On the exam, use the absorption premise the question gives you and apply the pH vs pKa rule. Standard pharmacology says the uncharged form crosses membranes more easily, which is the opposite framing, so read the stem.</p>
<p>The same logic applies to biomolecules: gaining or losing H⁺ changes side-chain charges in proteins (misfolding) and disrupts hydrogen bonding between DNA bases.</p>`,
so:`Ionization connects pH to absorption, solubility and folding.`},

{id:"m1-buffers",h:"Buffers",fig:"titr",
b:`<p>A buffer is a weak acid plus its conjugate base. Add H⁺ and A⁻ absorbs it, becoming HA. Add OH⁻ and HA neutralizes it, becoming A⁻ and water. The ratio shifts a little, so the pH shifts only a little.</p>
<p>Buffering works best near the pKa, roughly <b>pKa ± 1</b>. At the pKa there are equal amounts of HA and A⁻, so the buffer can absorb acid or base equally well. Far from the pKa, one form is almost used up.</p>
<p>A buffer holds pH where it is. It does not bring pH to 7. A buffer with pKa 4.8 holds pH near 4.8.</p>
<p>On the titration curve: A is mostly HA. B is half titrated, where pH = pKa and buffering is best (the flat stretch). C is where HA is nearly gone and the steep rise starts. D is past the buffer, with excess base.</p>`,
so:`Buffers are why metabolic acid added to blood moves its pH far less than it would move the pH of pure water.`},

{id:"m1-measure",h:"Measuring pH directly",beyond:true,
b:`<p>The LO says "direct measurement and calculation," and the lecture only covers calculation. Two ways to measure pH:</p>
<ul><li><b>pH meter</b>: a glass electrode produces a voltage that depends on [H⁺]. It's calibrated with standard buffers of known pH first and reads to about 0.01 units. Blood gas analyzers work this way.</li>
<li><b>Indicators and pH paper</b>: dyes that are weak acids whose HA and A⁻ forms are different colors. The color changes around the dye's pKa. Fast and cheap but approximate (about 0.5 to 1 unit). Urine dipsticks work this way.</li></ul>
<p>An indicator changes color near its own pKa for the same reason a buffer works near its pKa: that's where HA and A⁻ trade places as the dominant form.</p>`,
so:`Measurement gives you the pH; the equations tell you what that pH means for each molecule.`}
],

"1.4":[
{id:"m1-bicarb",h:"The bicarbonate buffer",fig:"bicarb",
b:`<p>CO₂ from metabolism dissolves in blood and forms carbonic acid, which dissociates into H⁺ and bicarbonate. Carbonic acid's pKa is 6.1, and at normal blood pH 7.4 the HCO₃⁻ : H₂CO₃ ratio is 20 : 1.</p>
<p>Le Chatelier's principle predicts the shifts: add something to one side and the reaction moves away from it; remove something and the reaction moves to replace it.</p>
<ul><li>More CO₂: shifts right, more H⁺, pH falls.</li>
<li>Less CO₂: shifts left, H⁺ consumed, pH rises.</li>
<li>Added H⁺ (lactic acid): HCO₃⁻ absorbs it, the reaction shifts left, bicarbonate is used up and the extra CO₂ is exhaled.</li></ul>
<p>In the lungs the reaction runs left and CO₂ is exhaled, so breathing rate controls how much CO₂, and therefore how much acid, stays in the blood.</p>`,
so:`Most questions for this LO come down to this equation plus a change on one side.`},

{id:"m1-resp",h:"Respiratory acidosis and alkalosis",beyond:true,
b:`<p>Respiratory disorders start with CO₂, which the lungs control.</p>
<p><b>Respiratory acidosis</b>: breathing too slowly or ineffectively (opioid overdose, COPD, airway obstruction). CO₂ builds up, the reaction shifts right, H⁺ rises and pH falls. H₂CO₃ rises while HCO₃⁻ hasn't changed yet, so the ratio drops below 20 : 1.</p>
<p><b>Respiratory alkalosis</b>: breathing too fast (panic attack, high altitude). CO₂ is blown off, the reaction shifts left, H⁺ is consumed and pH rises.</p>
<p>The lecture leaves breathing as a question to think through. The disorder names are standard physiology.</p>`,
so:`If the problem changes breathing, it's respiratory, and the CO₂ direction gives you the pH direction.`},

{id:"m1-metab",h:"Metabolic acidosis and alkalosis",beyond:true,
b:`<p>Metabolic disorders start with H⁺ or HCO₃⁻ directly, not with CO₂.</p>
<p><b>Metabolic acidosis</b>: acid added or base lost. Lactic acid (intense exercise, shock), ketoacids (diabetic ketoacidosis), or bicarbonate lost in severe diarrhea. HCO₃⁻ falls, the ratio drops below 20 : 1 and pH falls.</p>
<p><b>Metabolic alkalosis</b>: acid lost or base gained. Vomiting removes stomach HCl. The reaction shifts right to replace the lost H⁺, which leaves extra HCO₃⁻. The ratio rises above 20 : 1 and pH rises.</p>`,
so:`If the problem adds or removes acid or bicarbonate directly, it's metabolic; follow HCO₃⁻ to get the pH.`},

{id:"m1-comp",h:"Compensation and the open system",beyond:true,
b:`<p>The body pushes back using the other system:</p>
<ul><li>Metabolic acidosis: breathe faster and deeper (Kussmaul breathing in DKA) to blow off CO₂, which pulls pH back up.</li>
<li>Metabolic alkalosis: breathe more slowly to hold on to CO₂.</li>
<li>Respiratory problems: over days, the kidneys adjust how much HCO₃⁻ they reabsorb and how much H⁺ they excrete.</li></ul>
<p>Compensation moves pH back toward normal but usually doesn't fully correct it.</p>
<p><b>Why bicarbonate works at 7.4 when its pKa is 6.1.</b> 7.4 is outside pKa ± 1, so in a sealed flask this would be a weak buffer. Blood is an open system: the lungs remove or keep CO₂ and the kidneys adjust HCO₃⁻, so neither side of the equation runs out.</p>`,
so:`Lungs adjust CO₂ within minutes and kidneys adjust HCO₃⁻ over days, which keeps blood near 7.4.`},
{drill:"m1d5"}
]
},

questions:[
// ---------- 1.1 ----------
{id:"m1a01",lo:"1.1",src:"L1",ref:"m1-carbon",type:"mc",
stem:"Which property of carbon best explains why cells use carbon compounds both to build structures and as fuel?",
opts:["It forms four stable covalent bonds, allowing large backbones, and C–C and C–H bonds release a lot of energy when broken","It forms ionic bonds with water, so carbon compounds dissolve and spread easily through the cell","It is the most abundant element in the body by number of atoms, so it is always available","It carries a permanent partial negative charge that lets it hydrogen-bond with proteins and DNA"],ans:0,
exp:"Four bonds per carbon allow branching chains and rings large enough to form proteins and DNA. C–C and C–H bonds release more energy when broken than most bonds, which makes carbon compounds efficient fuel. Hydrogen, not carbon, is the most abundant atom in the body."},
{id:"m1a02",lo:"1.1",src:"L1",ref:"m1-join",type:"tf",
stem:"Hydrolysis of a peptide bond uses up a water molecule and leaves one amino acid with a free carboxyl group and the other with a free amine group.",ans:true,
exp:"A peptide bond forms between a carboxyl and an amine by dehydration synthesis, releasing water. Hydrolysis adds the water back and restores both groups."},
{id:"m1a03",lo:"1.1",src:"L1",ref:"m1-join",type:"mc",fig:"q-ester",
stem:"A fatty acid (left) and glycerol (right) are about to join, and the atoms in the dashed box react. Which statement describes the reaction?",
opts:["The carboxyl's –OH and a hydroxyl's H leave as water, forming an ester bond","The carboxyl's –OH and a hydroxyl's H leave as water, forming a glycosidic bond","Water is added between the carboxyl and the hydroxyl, forming an ester bond","The carboxyl's C=O oxygen and a hydroxyl's H leave as water, forming an ester bond"],ans:0,
exp:"The box holds the –OH from the fatty acid's carboxyl and the H from one of glycerol's hydroxyls. Together they leave as H₂O, so this is dehydration synthesis. A carboxyl joined to a hydroxyl is an ester bond, which is how fatty acids attach to glycerol in a triglyceride. The C=O stays put, glycosidic bonds join sugars, and adding water (hydrolysis) breaks bonds instead of forming them."},
{id:"m1a55",lo:"1.1",src:"L1",ref:"m1-join",type:"mc",fig:"q-mono4",fixed:true,
stem:"Which numbered monomer joins to others of its own kind through phosphodiester bonds?",
opts:["1","2","3","4"],ans:2,
exp:"Monomer 3 is a nucleotide: a phosphate, a five-carbon sugar and a nitrogen-containing base. A phosphate links the sugar of one nucleotide to the sugar of the next, which is a phosphodiester bond. Monomer 1 is a sugar (glycosidic bonds), 2 is an amino acid (peptide bonds), and 4 is a fatty acid, which forms ester bonds with glycerol instead of linking to other fatty acids."},
{id:"m1a04",lo:"1.1",src:"L1",ref:"m1-carbs",type:"mc",tag:"beyond",
stem:"Animals store glucose as glycogen, a large branched polymer, instead of as free glucose. Which explanation best relates the structure to the role?",
opts:["One large molecule holds a lot of glucose compactly, and the many branch ends let glucose be released quickly","Glycogen's glycosidic bonds cannot be hydrolyzed, so the stored glucose is protected until death","Branching makes glycogen nonpolar, so it can be stored inside the hydrophobic core of membranes","Glycogen is classified as a lipid, so it stores more energy per gram than glucose does"],ans:0,
exp:"Polymerizing glucose packs it into a compact store. Each branch ends in a chain end that enzymes can trim, so a highly branched molecule can release glucose quickly. Glycogen is a polysaccharide, is still polar, and is broken down by hydrolysis."},
{id:"m1a05",lo:"1.1",src:"L1",ref:"m1-carbs",type:"tf",
stem:"Complex carbohydrates release glucose more slowly than simple sugars because more glycosidic bonds must be hydrolyzed before glucose is free.",ans:true,
exp:"A polysaccharide has hundreds to thousands of glycosidic bonds to break. A monosaccharide is already free glucose, so it is absorbed right away."},
{id:"m1a06",lo:"1.1",src:"L1",ref:"m1-membrane",type:"mc",
stem:"Phospholipids added to water form a bilayer without any enzyme or energy input. Which feature of their structure causes this?",
opts:["Each has a polar head and nonpolar tails, so the tails cluster away from water while the heads face it","They are polymers whose repeating units bond to one another into flat sheets","Phosphodiester bonds form between neighboring phospholipids and link them covalently","Their fatty acid tails carry charges that form salt bridges with one another"],ans:0,
exp:"Phospholipids are amphipathic. The hydrophobic effect pushes the nonpolar tails together and the polar heads stay in contact with water on both faces. Lipids are not polymers, and no covalent bonds form between neighboring phospholipids."},
{id:"m1a07",lo:"1.1",src:"L1",ref:"m1-membrane",type:"mc",tag:"beyond",
stem:"O₂ diffuses across a pure phospholipid bilayer, but glucose does not. Which explanation is best?",
opts:["Glucose is polar and can't pass the nonpolar core of the bilayer; O₂ is small and nonpolar","Glucose is negatively charged at pH 7.4 and is repelled by the phosphate heads","O₂ forms hydrogen bonds with the fatty acid tails, which pull it through","The bilayer has pores sized to admit gases but not sugars"],ans:0,
exp:"The bilayer's hydrophobic core blocks polar molecules like glucose, which is covered in –OH groups but is not charged. Small nonpolar gases dissolve in the core and pass. Glucose needs a transport protein."},
{id:"m1a08",lo:"1.1",src:"L1",ref:"m1-membrane",type:"mc",fig:"q-bilayer2",
stem:"Patches A and B are built from the same kind of phospholipid except for the tails. Which patch is more fluid, and why?",
opts:["B, because kinked tails can't pack tightly against their neighbors","A, because straight tails slide past each other more easily","B, because kinked tails are more polar and draw water into the core","A, because straight tails contain more C=C double bonds"],ans:0,
exp:"B's tails are kinked, which comes from C=C double bonds (unsaturated). Kinks keep the tails from packing tightly, so the membrane is more fluid. A's tails are straight (saturated, no C=C), so they pack tightly and the membrane is stiffer. Double bonds don't make the tails polar."},
{id:"m1a09",lo:"1.1",src:"L1",ref:"m1-membrane",type:"mc",
stem:"Fish that live in near-freezing water have a higher proportion of unsaturated fatty acids in their membranes than warm-water fish. What does this accomplish?",
opts:["Kinks from C=C double bonds keep tails from packing tightly, so the membrane stays fluid in the cold","The double bonds make the tails more polar, so they bind water and resist freezing","Unsaturated tails pack more tightly, which keeps the membrane from becoming too fluid","Unsaturated tails form extra ester bonds that hold the bilayer together in the cold"],ans:0,
exp:"Cold makes lipids pack tighter and stiffen. Kinked unsaturated tails can't pack as closely, so the membrane stays fluid enough for transport. The double bonds don't make tails polar."},
{id:"m1a10",lo:"1.1",src:"L1",ref:"m1-lipids",type:"mc",
stem:"Which lipid is suited to long-term energy storage, and why?",
opts:["Triglyceride, because its three fatty acid tails are rich in energy-storing C–H bonds","Phospholipid, because its polar head lets it dissolve in blood for easy delivery","Cholesterol, because its four fused rings hold more bonds than any fatty acid","Sphingolipid, because its attached sugars can be released as glucose"],ans:0,
exp:"Triglycerides are three hydrocarbon tails on glycerol, nearly all C–H, stored as fat droplets in adipose tissue. Phospholipids build membranes and cholesterol stabilizes membranes and makes hormones."},
{id:"m1a11",lo:"1.1",src:"L1",ref:"m1-lipids",type:"tf",
stem:"Cholesterol's only role in the body is as a structural component of cell membranes.",ans:false,
exp:"Cholesterol also stabilizes membrane fluidity and is the precursor of bile salts and steroid hormones such as cortisol, testosterone and estradiol."},
{id:"m1a12",lo:"1.1",src:"L1",ref:"m1-fold",type:"mc",
stem:"In a water-soluble protein, where would you most expect to find the side chains of leucine, valine and phenylalanine?",
opts:["Packed in the interior, away from water","On the surface, hydrogen-bonding with water","On the surface, forming salt bridges with ions in solution","Spread evenly between surface and core"],ans:0,
exp:"All three are hydrophobic. The hydrophobic effect drives them into the core during folding, while polar and charged side chains stay on the surface in contact with water."},
{id:"m1a13",lo:"1.1",src:"L1",ref:"m1-fold",type:"mc",
stem:"A mutation replaces a glutamate (Glu) on the surface of a protein with valine (Val). Which effect is most likely?",
opts:["A charged, hydrophilic side chain becomes nonpolar, which can change how that region folds or binds","No effect, since every amino acid forms the same peptide bond","The protein gains an extra positive charge at that position","Valine adds a sulfur that can form a new disulfide bond"],ans:0,
exp:"Glu is acidic and negatively charged at pH 7.4. Val is aliphatic and hydrophobic. Swapping them changes what that surface patch interacts with. This exact swap in hemoglobin causes sickle cell disease (beyond lecture)."},
{id:"m1a14",lo:"1.1",src:"L1",ref:"m1-fold",type:"tf",
stem:"Two proteins with the same amino acids in a different order will fold into the same shape.",ans:false,
exp:"The sequence decides which side chains are next to each other and where hydrophobic stretches sit, so a different order generally gives a different fold."},
{id:"m1a56",lo:"1.1",src:"L1",ref:"m1-fold",type:"mc",fig:"q-side4",fixed:true,
stem:"W to Z are side chains on the same water-soluble protein. Which one is most likely buried in the protein's core?",
opts:["W","X","Y","Z"],ans:1,
exp:"X is only carbon and hydrogen, so it is nonpolar, and the hydrophobic effect packs nonpolar side chains into the core, away from water. W carries a negative charge (COO⁻), Z carries a positive charge (NH₃⁺), and Y has a polar –OH. All three interact well with water and tend to sit on the surface."},
{id:"m1a15",lo:"1.1",src:"L1",ref:"m1-aa",type:"mc",
stem:"Using the course's classification, which amino acid is hydrophobic?",
opts:["Tyrosine","Glycine","Cysteine","Serine"],ans:0,
exp:"The course (following the textbook) counts Tyr as hydrophobic because its –OH interacts only weakly with water. It counts Gly and Cys as hydrophilic, and Ser has a hydroxyl."},
{id:"m1a16",lo:"1.1",src:"L1",ref:"m1-aa",type:"mc",
stem:"Which pair of amino acids has side chains that are negatively charged at pH 7.4?",
opts:["Aspartate and glutamate","Lysine and arginine","Serine and threonine","Asparagine and glutamine"],ans:0,
exp:"Asp and Glu carry an extra carboxyl that loses H⁺ at physiological pH. Lys and Arg are positive. Asn and Gln are their uncharged amide versions."},
{id:"m1a17",lo:"1.1",src:"L1",ref:"m1-nucleic",type:"mc",fig:"q-dna2",
stem:"When DNA replicates, the two strands separate but each strand's sequence stays intact. Which numbered bond breaks during strand separation, and what type is it?",
opts:["Bond 2, a hydrogen bond","Bond 1, a phosphodiester bond","Bond 2, a phosphodiester bond","Bond 1, a hydrogen bond"],ans:0,
exp:"Bond 2 is between paired bases. Base pairs are held by hydrogen bonds, which are weak and break easily, so the strands unzip there. Bond 1 is in the sugar-phosphate backbone, a covalent phosphodiester bond that stays intact and keeps each strand's base order."},
{id:"m1a18",lo:"1.1",src:"L1",ref:"m1-nucleic",type:"tf",
stem:"A nucleic acid sample containing ribose and uracil is DNA.",ans:false,
exp:"Ribose and uracil mark RNA. DNA has deoxyribose and thymine."},

// ---------- 1.2 ----------
{id:"m1a19",lo:"1.2",src:"L3",ref:"m1-polar",type:"mc",fig:"q-hydr2",
stem:"Panels A and B show two ways water could surround a dissolved Na⁺. Which panel is correct, and why does NaCl dissolve in water but not in oil?",
opts:["B, since water's δ− oxygens are drawn to Na⁺; oil has no partial charges to do this","A, since water's δ+ hydrogens are drawn to Na⁺; oil has no partial charges to do this","B, since water's oxygens bond covalently to Na⁺; oil can't form covalent bonds","A, since water's hydrogens hydrogen-bond to Na⁺; oil can't form hydrogen bonds"],ans:0,
exp:"Na⁺ is positive, so each water turns its δ− oxygen toward it (B). Around Cl⁻ the δ+ hydrogens would face in instead. These ion–dipole interactions keep the ions apart in solution. Oil is nonpolar, so nothing replaces the attraction between Na⁺ and Cl⁻ and the crystal stays together. The contacts aren't covalent, and Na⁺ isn't an N, O or F acceptor, so they aren't hydrogen bonds."},
{id:"m1a20",lo:"1.2",src:"L3",ref:"m1-polar",type:"tf",
stem:"In a water molecule, the oxygen carries a partial positive charge because it holds the shared electrons less tightly than hydrogen does.",ans:false,
exp:"Oxygen is more electronegative and pulls the shared electrons toward itself, so it is δ− and the hydrogens are δ+."},
{id:"m1a21",lo:"1.2",src:"L3",ref:"m1-hbond",type:"mc",fig:"q-contact4",fixed:true,
stem:"Each panel shows a dotted contact between two molecules. Which numbered contact is a hydrogen bond?",
opts:["1","2","3","4"],ans:0,
exp:"In 1 the H is attached to N and points at the O of a C=O. That fits the rule: H on N, O or F, plus an N, O or F acceptor. In 2 the H is on carbon, which is barely δ+. 3 is a full charge attracting water's dipole, an ion–dipole interaction. 4 is two nonpolar molecules, so only van der Waals forces act."},
{id:"m1a22",lo:"1.2",src:"L3",ref:"m1-hbond",type:"mc",
stem:"Hydrogen bonds hold the two DNA strands together, yet enzymes separate the strands at body temperature. Which property of hydrogen bonds allows both?",
opts:["Each one is weak and easy to break, but many together provide stability","They are covalent bonds that enzymes can reverse","They are stronger than covalent bonds but only form in water","They form only between identical bases on the two strands"],ans:0,
exp:"Thousands of hydrogen bonds add up to a stable helix, but each is weak and transient, so the strands can be pulled apart one pair at a time."},
{id:"m1a23",lo:"1.2",src:"L3",ref:"m1-hbond",type:"tf",
stem:"The cohesion that lets water form a dome on a penny comes from hydrogen bonds between water molecules.",ans:true,
exp:"Each water molecule hydrogen-bonds to its neighbors, so the surface holds together. The same cohesion explains the meniscus and insects walking on water."},
{id:"m1a24",lo:"1.2",src:"L3",ref:"m1-weak",type:"mc",
stem:"A gecko clings to a glass ceiling even though its foot surface and the glass are largely nonpolar. Which interaction explains this?",
opts:["van der Waals forces summed over millions of close contacts","Hydrogen bonds between the foot and the glass","Ion–dipole interactions between the foot and the glass","The hydrophobic effect pushing the foot against the glass"],ans:0,
exp:"van der Waals forces act between all molecules, including nonpolar ones. Each is the weakest interaction, but the gecko's foot makes so many close contacts that they add up."},
{id:"m1a25",lo:"1.2",src:"L3",ref:"m1-weak",type:"mc",
stem:"Which list orders these interactions from strongest to weakest?",
opts:["Ion–dipole, hydrogen bond, dipole–dipole, van der Waals","Hydrogen bond, ion–dipole, van der Waals, dipole–dipole","Dipole–dipole, hydrogen bond, ion–dipole, van der Waals","van der Waals, dipole–dipole, hydrogen bond, ion–dipole"],ans:0,
exp:"A full charge (ion–dipole) attracts most strongly. A hydrogen bond is an especially strong dipole–dipole interaction. van der Waals forces are the weakest individually."},
{id:"m1a26",lo:"1.2",src:"L3",ref:"m1-weak",type:"tf",
stem:"Pushing two atoms closer than their van der Waals contact distance increases the attraction between them.",ans:false,
exp:"Attraction grows only up to the contact distance. Closer than that, the electron clouds repel."},
{id:"m1a27",lo:"1.2",src:"L3",ref:"m1-hydrophobic",type:"mc",
stem:"Which statement best explains why nonpolar molecules cluster together in water?",
opts:["Clustering reduces the number of ordered water molecules caged around nonpolar surfaces, increasing entropy","Nonpolar molecules attract one another strongly through hydrogen bonds","Water repels nonpolar molecules through ionic interactions","Clustering releases energy by forming covalent bonds between the molecules"],ans:0,
exp:"Water forms ordered cages around nonpolar surfaces. Clustering exposes less surface and frees caged water, raising entropy. The effect comes from water, not attraction between the nonpolar molecules."},
{id:"m1a28",lo:"1.2",src:"L3",ref:"m1-hydrophobic",type:"tf",
stem:"The hydrophobic effect is driven mainly by attraction between nonpolar molecules.",ans:false,
exp:"It's driven by the entropy gained when caged water molecules are released. The lecture stresses that this is the difference between the hydrophobic effect and weak interactions."},
{id:"m1a29",lo:"1.2",src:"L3",ref:"m1-hydrophobic",type:"mc",fig:"q-amph3",fixed:true,
stem:"A detergent molecule has a charged head (circle) and a long hydrocarbon tail. Which arrangement will many of them form in water?",
opts:["A","B","C"],ans:0,
exp:"In A the tails are packed in the middle and the charged heads face the water. The hydrophobic effect pushes the tails together, and the heads stay in contact with water. B puts the tails out in the water. C leaves every tail surrounded by caged water, which is the low-entropy state the hydrophobic effect moves away from."},
{id:"m1a57",lo:"1.2",src:"L3",ref:"m1-hydrophobic",type:"mc",fig:"q-surf3",expfig:"x-cages",fixed:true,
stem:"Spots A to C mark three interactions on the surface of a protein in water. Which one forms mainly because it raises the entropy of the surrounding water, rather than because the groups attract each other?",
opts:["A","B","C"],ans:2,
exp:"C is two nonpolar side chains packed together. Water can't hydrogen-bond to them, so it forms ordered cages around each one, and packing them together frees caged water and raises entropy. That's the hydrophobic effect. A is a + side chain attracting a − side chain (a salt bridge), and B is water's dipoles drawn to a charge (ion–dipole). Both of those are attractions."},
{id:"m1a30",lo:"1.2",src:"L3",ref:"m1-shield",type:"mc",tag:"beyond",
stem:"Two oppositely charged side chains form a salt bridge. Where would this interaction be strongest?",
opts:["Buried in the nonpolar core of the protein","On the protein surface, fully exposed to water","On the surface, in a high-salt solution","Equally strong anywhere, since the charges are the same"],ans:0,
exp:"Water and dissolved ions surround charges and screen them, weakening attraction. Away from water, nothing competes for the two charges, so the salt bridge is stronger."},

// ---------- 1.3 ----------
{id:"m1a31",lo:"1.3",src:"L4",ref:"m1-scale",type:"mc",
stem:"A solution has [H⁺] = 1×10⁻⁴ M. What are its pH and pOH?",
opts:["pH 4, pOH 10","pH 10, pOH 4","pH 4, pOH 4","pH −4, pOH 18"],ans:0,
exp:"pH = −log(10⁻⁴) = 4. pOH = 14 − 4 = 10."},
{id:"m1a32",lo:"1.3",src:"L4",ref:"m1-scale",type:"mc",
stem:"Solution A has pH 3 and solution B has pH 5. How does [H⁺] in A compare with B?",
opts:["100 times higher","2 times higher","100 times lower","2 times lower"],ans:0,
exp:"Each pH unit is a factor of 10. A is 2 units lower, so it has 10 × 10 = 100 times more H⁺."},
{id:"m1a33",lo:"1.3",src:"L4",ref:"m1-scale",type:"tf",
stem:"A solution with pOH 3 is acidic.",ans:false,
exp:"pH = 14 − 3 = 11, which is basic."},
{id:"m1a34",lo:"1.3",src:"L4",ref:"m1-ka",type:"mc",
stem:"Acid X has pKa 2.1 and acid Y has pKa 9.2. Which statement is correct?",
opts:["X is the stronger acid and gives up its proton more readily","Y is the stronger acid because its pKa is higher","X has the smaller Ka of the two","Both are equally strong at pH 7"],ans:0,
exp:"pKa = −log Ka, so a lower pKa means a larger Ka and a stronger acid."},
{id:"m1a35",lo:"1.3",src:"L4",ref:"m1-ka",type:"tf",
stem:"A reaction with Keq = 0.001 favors the reactants at equilibrium.",ans:true,
exp:"Keq is products over reactants. A value below 1 means reactants dominate at equilibrium."},
{id:"m1a36",lo:"1.3",src:"L4",ref:"m1-hh",type:"mc",
stem:"A weak acid has pKa 6.0. At pH 8.0, what is the ratio [A⁻] : [HA]?",
opts:["100 : 1","2 : 1","1 : 100","1 : 2"],ans:0,
exp:"Ratio = 10^(pH − pKa) = 10² = 100. pH is above the pKa, so A⁻ dominates.",
steps:["8.0 = 6.0 + log([A⁻]/[HA])","log([A⁻]/[HA]) = 2","[A⁻]/[HA] = 10² = 100"]},
{id:"m1a37",lo:"1.3",src:"L4",ref:"m1-hh",type:"tf",
stem:"A weak acid is half dissociated when the pH equals its pKa.",ans:true,
exp:"At pH = pKa, log([A⁻]/[HA]) = 0, so the ratio is 1 and the acid is split evenly."},
{id:"m1a38",lo:"1.3",src:"L4",ref:"m1-hh",type:"mc",
stem:"Lactic acid has a pKa of about 3.9. In blood at pH 7.4, which form predominates?",
opts:["Lactate (A⁻), because the pH is well above the pKa","Lactic acid (HA), because the pH is above the pKa","Equal amounts of each, because blood is buffered","Lactic acid (HA), because it is a weak acid"],ans:0,
exp:"pH above pKa means the deprotonated form dominates. 7.4 is 3.5 units above 3.9, so lactate outnumbers lactic acid by thousands to one. That's why it's called lactate in metabolism."},
{id:"m1a60",lo:"1.3",src:"L4",ref:"m1-hh",type:"mc",fig:"q-titr9",
stem:"The curve shows a weak acid being titrated with base. At the circled point, which form of the acid dominates?",
opts:["A⁻, because the pH there is above the pKa","HA, because the pH there is below the pKa","Equal amounts of HA and A⁻, as on the whole flat stretch","HA, because an acid with a pKa this high holds its proton"],ans:0,
exp:"The jump is centered at 10 mL, so the half-titration point is 5 mL, at about pH 9. That makes the pKa about 9. The circled point is past it, at 8 mL and about pH 9.6. pH above the pKa means A⁻ dominates, here about 4 : 1 (10<sup>0.6</sup>). HA and A⁻ are equal only at the midpoint itself."},
{id:"m1a39",lo:"1.3",src:"L4",ref:"m1-ionize",type:"mc",fig:"q-gi",
stem:"Assume aspirin is absorbed in its conjugate base (A⁻) form. The dashed line marks aspirin's pKa (3.5). Where is absorption greater?",
opts:["Small intestine, because there [A⁻] equals [HA], while in the stomach HA dominates","Stomach, because the extra H⁺ helps carry aspirin across the membrane","Stomach, because below the pKa the A⁻ form dominates","Neither, because ionization does not depend on pH"],ans:0,
exp:"The stomach (pH 1.5) is two units below the dashed line, so aspirin there is about 99% HA. The small intestine (pH 3.5) sits on the line, so it's 50% A⁻. With absorption as A⁻, the small intestine wins."},
{id:"m1a40",lo:"1.3",src:"L4",ref:"m1-buffers",type:"mc",
stem:"Which conjugate pair would buffer best at pH 4.8?",
opts:["Acetic acid and acetate (pKa 4.8)","Carbonic acid and bicarbonate (pKa 6.1)","HCl and Cl⁻ (pKa below 0)","H₂PO₄⁻ and HPO₄²⁻ (pKa 7.2)"],ans:0,
exp:"A buffer works best within about 1 unit of its pKa, best of all at the pKa. HCl is a strong acid and does not form a useful buffer."},
{id:"m1a41",lo:"1.3",src:"L4",ref:"m1-buffers",type:"tf",
stem:"Adding a buffer to an acidic solution brings its pH to 7.",ans:false,
exp:"A buffer resists change and holds pH near its own pKa. It doesn't neutralize a solution to 7."},
{id:"m1a42",lo:"1.3",src:"L4",ref:"m1-buffers",type:"mc",fig:"q-titr",
stem:"On this titration curve of a weak acid, at which point does the solution resist pH change the most?",
opts:["A","B","C","D"],ans:1,fixed:true,
exp:"B is the midpoint of the flat region, where pH = pKa and HA and A⁻ are equal. At C the acid is nearly used up and pH climbs steeply."},
{id:"m1a58",lo:"1.3",src:"L4",ref:"m1-buffers",type:"mc",fig:"q-titr0",fixed:true,
stem:"The curve shows a weak acid being titrated with base. What is the acid's approximate pKa?",
opts:["About 2.9","About 4.8","About 8.7","About 12.5"],ans:1,
exp:"The steep jump is centered at about 10 mL, so the acid is half titrated at 5 mL. There [HA] = [A⁻] and pH = pKa, which reads about 4.8. 2.9 is the starting pH, when the acid is almost all HA. 8.7 is the pH in the middle of the jump, where the acid is used up. 12.5 is excess base."},
{id:"m1a59",lo:"1.3",src:"L4",ref:"m1-buffers",type:"mc",fig:"q-titr0",fixed:true,
stem:"Over roughly what pH range does the acid in this titration buffer well?",
opts:["2.9 to 4.8","3.8 to 5.8","4.8 to 8.7","7.7 to 9.7"],ans:1,
exp:"The pKa is the pH at the half-titration point, about 4.8 at 5 mL. A buffer works within about 1 unit of its pKa, so 3.8 to 5.8. That matches the flat stretch of the curve. Around 8.7 the curve is at its steepest, which is where the solution resists pH change the least."},
{id:"m1a43",lo:"1.3",src:"L4",ref:"m1-measure",type:"mc",tag:"beyond",
stem:"A lab needs the pH of a blood sample to the nearest 0.01 unit. Which method fits?",
opts:["A pH meter calibrated with standard buffers","Universal pH paper compared to a color chart","A single indicator dye with a pKa near 7.4","Litmus paper, read as red or blue"],ans:0,
exp:"A calibrated pH meter reads to about 0.01. Indicators and paper are quick but only accurate to roughly 0.5 to 1 unit."},
{id:"m1a44",lo:"1.3",src:"L4",ref:"m1-measure",type:"tf",tag:"beyond",
stem:"An indicator dye changes color over a pH range centered near its own pKa.",ans:true,
exp:"The dye's HA and A⁻ forms are different colors, and they switch dominance at the pKa."},

// ---------- 1.4 ----------
{id:"m1a45",lo:"1.4",src:"L4",ref:"m1-resp",type:"mc",fig:"q-bicarbeq",
stem:"A patient's breathing is depressed after an opioid overdose. Using the equation shown, which prediction is correct?",
opts:["CO₂ accumulates, the equilibrium shifts toward H⁺ + HCO₃⁻, and blood pH falls","CO₂ accumulates, the equilibrium shifts toward CO₂ + H₂O, and blood pH rises","CO₂ falls, H⁺ is consumed, and blood pH rises","CO₂ accumulates, but bicarbonate neutralizes all of it, so pH is unchanged"],ans:0,
exp:"Slow breathing retains CO₂, adding to the left side of the equation. The reaction shifts right, away from the added CO₂, producing H⁺, so pH drops. This is respiratory acidosis."},
{id:"m1a46",lo:"1.4",src:"L4",ref:"m1-resp",type:"tf",
stem:"Hyperventilating during a panic attack raises blood pH.",ans:true,
exp:"Fast breathing removes CO₂, the reaction shifts left, H⁺ is consumed and pH rises (respiratory alkalosis)."},
{id:"m1a47",lo:"1.4",src:"L4",ref:"m1-resp",type:"tf",
stem:"A climber breathing rapidly at high altitude will develop respiratory acidosis.",ans:false,
exp:"Rapid breathing blows off CO₂ and raises pH. That's respiratory alkalosis."},
{id:"m1a61",lo:"1.4",src:"L4",ref:"m1-resp",type:"mc",fig:"q-bicarbleft",
stem:"The arrow shows the bicarbonate equilibrium shifting to the left. Which situation causes this shift as its first change?",
opts:["Hyperventilation during a panic attack","Opioid overdose that slows breathing","COPD with CO₂ retained in the lungs","Severe diarrhea that removes bicarbonate"],ans:0,
exp:"Breathing fast blows off CO₂. Removing CO₂ from the left side pulls the reaction left to replace it, which uses up H⁺ and raises pH (respiratory alkalosis). Opioid overdose and COPD both retain CO₂, which pushes the reaction right. Diarrhea removes HCO₃⁻ from the right side, so the reaction shifts right to replace it."},
{id:"m1a48",lo:"1.4",src:"L4",ref:"m1-bicarb",type:"tf",
stem:"Adding CO₂ to blood shifts the bicarbonate equilibrium toward CO₂ + H₂O.",ans:false,
exp:"Adding a reactant pushes the reaction away from it, toward H₂CO₃ and then H⁺ + HCO₃⁻."},
{id:"m1a49",lo:"1.4",src:"L4",ref:"m1-bicarb",type:"mc",
stem:"During an all-out sprint, lactic acid enters the blood. What does the bicarbonate system do first?",
opts:["HCO₃⁻ binds the added H⁺, forming H₂CO₃ that becomes CO₂ and water, so HCO₃⁻ falls","CO₂ binds the added H⁺ directly, which raises HCO₃⁻","The equilibrium shifts toward H⁺ + HCO₃⁻, raising bicarbonate","Lactate is converted into bicarbonate, which cancels the acid"],ans:0,
exp:"Added H⁺ is absorbed by bicarbonate, pushing the reaction left. Bicarbonate is used up and the CO₂ produced is exhaled."},
{id:"m1a50",lo:"1.4",src:"L4",ref:"m1-bicarb",type:"mc",
stem:"Blood pH falls from 7.4 to 7.1. Using pKa 6.1, what happens to the [HCO₃⁻] : [H₂CO₃] ratio?",
opts:["It falls from 20 : 1 to 10 : 1","It rises from 20 : 1 to 40 : 1","It stays 20 : 1, since the pKa doesn't change","It falls from 20 : 1 to 1 : 10"],ans:0,
exp:"Ratio = 10^(pH − pKa). 10^(7.1 − 6.1) = 10^1 = 10. Less bicarbonate relative to acid means lower pH."},
{id:"m1a62",lo:"1.4",src:"L4",ref:"m1-bicarb",type:"mc",fig:"q-ratio3",fixed:true,
stem:"The bars show plasma HCO₃⁻ and H₂CO₃ in three patients. Which patient is acidotic?",
opts:["Patient 1","Patient 2","Patient 3"],ans:1,
exp:"pH depends on the ratio of HCO₃⁻ to H₂CO₃, not on either amount alone. Patient 1 is 24 : 1.2 = 20 : 1, normal (pH 7.4). Patient 2 is 30 : 3.0 = 10 : 1, so pH = 6.1 + log 10 = 7.1, acidotic even though HCO₃⁻ is high. Patient 3 is 18 : 0.6 = 30 : 1, pH about 7.6, alkalotic even though HCO₃⁻ is low."},
{id:"m1a51",lo:"1.4",src:"L4",ref:"m1-metab",type:"mc",tag:"beyond",
stem:"Severe, prolonged vomiting removes HCl from the stomach. Which disorder is most likely?",
opts:["Metabolic alkalosis","Metabolic acidosis","Respiratory alkalosis","Respiratory acidosis"],ans:0,
exp:"Losing acid shifts the reaction right to replace H⁺, leaving excess HCO₃⁻. It starts with acid loss, not CO₂, so it's metabolic."},
{id:"m1a52",lo:"1.4",src:"L4",ref:"m1-metab",type:"mc",tag:"beyond",
stem:"Which condition causes metabolic acidosis by losing base rather than adding acid?",
opts:["Severe diarrhea","Diabetic ketoacidosis","Severe vomiting","Slowed breathing"],ans:0,
exp:"Intestinal fluid is rich in bicarbonate, so diarrhea removes base. DKA adds ketoacids. Vomiting causes alkalosis, and slowed breathing is respiratory."},
{id:"m1a53",lo:"1.4",src:"L4",ref:"m1-comp",type:"tf",tag:"beyond",
stem:"In diabetic ketoacidosis, rapid deep breathing helps raise blood pH back toward normal.",ans:true,
exp:"Breathing off CO₂ pulls the reaction left and consumes H⁺. This is respiratory compensation for a metabolic acidosis."},
{id:"m1a54",lo:"1.4",src:"L4",ref:"m1-comp",type:"mc",tag:"beyond",
stem:"Carbonic acid's pKa (6.1) is more than 1 unit below blood pH (7.4), yet bicarbonate is the main blood buffer. Why?",
opts:["Blood is an open system: lungs adjust CO₂ and kidneys adjust HCO₃⁻, so neither form runs out","At body temperature its pKa shifts up to 7.4","Bicarbonate is a strong base, so it buffers well at any pH","At 20 : 1 it buffers added base much better than added acid"],ans:0,
exp:"In a closed flask, 7.4 would be outside the useful range. The lungs and kidneys keep refilling both sides, so the system keeps working. With so much HCO₃⁻, it actually handles added acid well, not base."}
],

drills:[
{id:"m1d1",lo:"1.1",kind:"sort",title:"Amino acid groups",
intro:"Drag each amino acid into its group, or tap it and then tap the group. Wrong placements explain themselves.",
rounds:[
{name:"By side-chain group",bins:["Aliphatic","Aromatic","Acidic","Basic","Hydroxylic","Amidic","Sulfur"],
items:[["Ala","Aliphatic"],["Gly","Aliphatic","Book groups Gly as aliphatic"],["Ile","Aliphatic"],["Leu","Aliphatic"],["Pro","Aliphatic","Aliphatic, and technically an imino acid"],["Val","Aliphatic"],["Phe","Aromatic"],["Trp","Aromatic"],["Tyr","Aromatic"],["Asp","Acidic"],["Glu","Acidic"],["Arg","Basic"],["His","Basic"],["Lys","Basic"],["Ser","Hydroxylic"],["Thr","Hydroxylic"],["Asn","Amidic"],["Gln","Amidic"],["Cys","Sulfur"],["Met","Sulfur"]]},
{name:"Hydrophobic or hydrophilic",bins:["Hydrophobic","Hydrophilic"],
items:[["Ala","Hydrophobic"],["Gly","Hydrophilic","Nonpolar, but the book counts it hydrophilic"],["Ile","Hydrophobic"],["Leu","Hydrophobic"],["Pro","Hydrophobic"],["Val","Hydrophobic"],["Phe","Hydrophobic"],["Trp","Hydrophobic"],["Tyr","Hydrophobic","Polar, but only weakly interacts with water → polar hydrophobic"],["Asp","Hydrophilic"],["Glu","Hydrophilic"],["Arg","Hydrophilic"],["His","Hydrophilic"],["Lys","Hydrophilic"],["Ser","Hydrophilic"],["Thr","Hydrophilic"],["Asn","Hydrophilic"],["Gln","Hydrophilic"],["Cys","Hydrophilic","Sulfur pair splits: Cys polar hydrophilic"],["Met","Hydrophobic","Sulfur pair splits: Met nonpolar hydrophobic"]]}
]},
{id:"m1d6",lo:"1.1",kind:"sort",title:"Functional groups and bonds",
intro:"Drag each item into its group, or tap it and then tap the group.",
rounds:[
{name:"Which group?",bins:["Hydroxyl (–OH)","Carboxyl (–COOH)","Amine (–NH₂)"],
items:[["Donates H⁺, so it's acidic","Carboxyl (–COOH)"],["Accepts H⁺, so it's basic","Amine (–NH₂)"],["Covers sugars and makes them water-soluble","Hydroxyl (–OH)"],["Present on every amino acid",["Carboxyl (–COOH)","Amine (–NH₂)"],"Every amino acid has both an amine and a carboxyl"],["Reacts with an amine to form a peptide bond","Carboxyl (–COOH)"],["Reacts with a carboxyl to form a peptide bond","Amine (–NH₂)"],["Two of these on sugars join in a glycosidic bond","Hydroxyl (–OH)"],["On glycerol; reacts with a fatty acid to form an ester","Hydroxyl (–OH)"],["On a fatty acid; reacts with glycerol to form an ester","Carboxyl (–COOH)"],["Extra one on the side chain makes Asp and Glu negative","Carboxyl (–COOH)"]]},
{name:"Which bond?",bins:["Glycosidic","Ester","Peptide","Phosphodiester"],
items:[["Glucose + fructose → sucrose","Glycosidic"],["Glucose units in glycogen","Glycosidic"],["Fatty acids on glycerol in a triglyceride","Ester"],["Amino acids in a protein chain","Peptide"],["Nucleotides in a DNA or RNA strand","Phosphodiester"]]}
]},
{id:"m1d3",lo:"1.2",kind:"sort",title:"Name the interaction",
intro:"Which interaction is doing the work? Drag or tap to sort.",
rounds:[{name:"Scenario → interaction",bins:["Ion–dipole","Hydrogen bond","Dipole–dipole","van der Waals","Hydrophobic effect"],
items:[["Na⁺ surrounded by water molecules","Ion–dipole"],["A–T base pairing between DNA strands","Hydrogen bond"],["Water's meniscus in a cylinder","Hydrogen bond","Cohesion = H-bonds between waters"],["Two polar acetone molecules aligning","Dipole–dipole","Acetone has no O–H/N–H donor, so no H-bond, just dipoles"],["Gecko foot on glass","van der Waals"],["Two nonpolar methane molecules attracting","van der Waals","The only attraction possible between nonpolar molecules"],["Oil droplets merging","Hydrophobic effect","Driven by water's entropy, not attraction"],["Leu and Val buried in a protein core","Hydrophobic effect"]]}]},
{id:"m1d4",lo:"1.3",kind:"tool",tool:"hh",title:"pH / ratio explorer",
intro:"Set pKa and pH to see the HA:A⁻ split and where you sit on the titration curve. The presets are lecture problems."},
{id:"m1d5",lo:"1.4",kind:"case",title:"Acid–base cases",
intro:"For each case pick all three. The answer shows after the third.",
fields:[["Shift","Toward CO₂ + H₂O (left)","Toward H⁺ + HCO₃⁻ (right)"],["pH","Up","Down"],["Disorder","Respiratory acidosis","Respiratory alkalosis","Metabolic acidosis","Metabolic alkalosis"]],
cases:[
{t:"Opioid overdose; breathing slows",a:[1,1,0],e:"CO₂ builds → right → more H⁺. CO₂ started it → respiratory."},
{t:"Panic attack; hyperventilating",a:[0,0,1],e:"CO₂ blown off → left → H⁺ consumed."},
{t:"COPD; CO₂ retained in the lungs",a:[1,1,0],e:"Same mechanics as slowed breathing."},
{t:"Climber at high altitude breathing fast",a:[0,0,1],e:"Fast breathing lowers CO₂ → pH up."},
{t:"Sprinting; lactic acid floods the blood",a:[0,1,2],e:"Added H⁺ is grabbed by HCO₃⁻ → left toward CO₂. Bicarbonate gets used up, pH drops. Acid started it → metabolic."},
{t:"Diabetic ketoacidosis",a:[0,1,2],e:"Ketoacids add H⁺, same as lactic acid.",beyond:true},
{t:"Severe vomiting of stomach HCl",a:[1,0,3],e:"Losing H⁺ pulls the equation right to replace it, leaving HCO₃⁻ in excess → pH up.",beyond:true},
{t:"Severe diarrhea (loses HCO₃⁻)",a:[1,1,2],e:"Losing base pulls right to replace HCO₃⁻, which also makes H⁺ → pH down.",beyond:true}
]}
]
});

// Review highlight: the sentence each question checks (matched against lesson text).
(function(){const HL={m1a01:"Carbon forms four stable covalent bonds",m1a02:"Hydrolysis adds the water back",m1a03:"fatty acid –COOH + glycerol –OH",m1a04:"Glycogen's branches also give it many chain ends",m1a05:"Complex carbohydrates digest more slowly",m1a06:"Put phospholipids in water",m1a07:"nonpolar core blocks ions and polar molecules",m1a08:"puts a kink in it",m1a09:"puts a kink in it",m1a10:"Triglycerides: glycerol + 3 fatty acids",m1a11:"Cholesterol sits between phospholipids",m1a12:"hydrophobic side chains pack into the core",m1a13:"Change the sequence and you change",m1a14:"Change the sequence and you change",m1a15:"counts Gly as hydrophilic",m1a16:"Asp, Glu",m1a17:"Weak hydrogen bonds let the strands separate",m1a18:"RNA uses ribose",m1a19:"Water's δ− oxygens surround cations",m1a20:"Oxygen is more electronegative than hydrogen",m1a21:"A hydrogen bond forms between",m1a22:"Many hydrogen bonds together hold",m1a23:"That gives water cohesion",m1a24:"van der Waals (dispersion)",m1a25:"From strongest to weakest",m1a26:"van der Waals contact distance",m1a27:"When nonpolar molecules cluster",m1a28:"driven by water's entropy",m1a29:"phospholipid tails clustering into a bilayer",m1a30:"A salt bridge between two charged side chains",m1a31:"pOH = −log[OH⁻]",m1a32:"each 1-unit drop in pH means 10 times more H⁺",m1a33:"pOH = −log[OH⁻]",m1a34:"lower pKa means a stronger acid",m1a35:"Keq above 1 means products are favored",m1a36:"Each pH unit away from the pKa",m1a37:"pH = pKa: log of the ratio is 0",m1a38:"pH above pKa: ratio above 1",m1a39:"aspirin is absorbed in its conjugate base",m1a40:"Buffering works best near the pKa",m1a41:"A buffer holds pH where it is",m1a42:"On the titration curve",m1a43:"pH meter: a glass electrode",m1a44:"An indicator changes color near its own pKa",m1a45:"Respiratory acidosis: breathing too slowly",m1a46:"Respiratory alkalosis: breathing too fast",m1a47:"Respiratory alkalosis: breathing too fast",m1a48:"More CO₂: shifts right",m1a49:"Added H⁺ (lactic acid)",m1a50:"ratio is 20 : 1",m1a51:"Metabolic alkalosis: acid lost",m1a52:"bicarbonate lost in severe diarrhea",m1a53:"Kussmaul breathing",m1a54:"Blood is an open system",m1a62:"the HCO₃⁻ : H₂CO₃ ratio is 20 : 1",m1a61:"Respiratory alkalosis: breathing too fast",m1a60:"pH above pKa: ratio above 1",m1a59:"roughly pKa ± 1",m1a58:"B is half titrated, where pH = pKa",m1a57:"driven by water's entropy, not by attraction",m1a56:"hydrophobic side chains pack into the core",m1a55:"one phosphate linking the sugars of two nucleotides"};
MODS[MODS.length-1].questions.forEach(q=>{if(HL[q.id])q.hl=HL[q.id];});})();

// Lecture window: question -> [lecture block id, verbatim snippet to highlight, or a list of snippets]. Blocks from lectures/biochem-exam1/m1.json.
// LECNOTES: lecture blocks with wrong wording -> study-guide lesson(s) holding the "Lecture correction" note.
(function(){const LEC={
m1a01:["m1L1-b5","First, a carbon backbone can build much larger molecules. Second, breaking carbon-carbon bonds releases more energy, making it an efficient fuel."],
m1a02:["m1L1-b21","Amino acids are linked via peptide bonds to form a long unbranched chain."],
m1a03:["m1L1-b17","Triglycerides (fatty acids) contain a hydrophilic glycerol backbone to which three hydrophobic fatty acids are attached via ester bonds."],
m1a55:["m1L1-b29","Nucleotides are linked via a phosphodiester bond to form nucleic acids."],
m1a05:["m1L1-b14","Complex carbohydrates take longer to digest due to their complex structure."],
m1a06:["m1L1-b17","Notice in the image below how the phospholipids naturally arrange themselves tail to tail, blocking the hydrophobic fatty acids from aqueous environments."],
m1a08:["m1L1-b17","The saturated fatty acid provides structural stability, while the unsaturated fatty acid provides the fluidity required to allow passage of molecules in and out of the cell."],
m1a09:["m1L1-b17","The saturated fatty acid provides structural stability, while the unsaturated fatty acid provides the fluidity required to allow passage of molecules in and out of the cell."],
m1a10:["m1L1-b17","These lipids form our stored fat, or adipose tissue."],
m1a11:["m1L1-b17","It is also the precursor for bile salts which aid in fat digestion, and steroid hormones such as the sex steroids testosterone and estradiol, and the stress steroid cortisol."],
m1a12:["m1L1-b22",["The aliphatic amino acids are: Alanine (Ala), Glycine (Gly), Isoleucine (Iso), Leucine (Leu), Proline (Pro), and Valine (Val).","All of the aliphatic amino acids are non-polar and therefore hydrophobic.","Phenylalanine and Tryptophan are also nonpolar, and therefore hydrophobic."]],
m1a13:["m1L1-b22",["The aliphatic amino acids are: Alanine (Ala), Glycine (Gly), Isoleucine (Iso), Leucine (Leu), Proline (Pro), and Valine (Val).","All of the aliphatic amino acids are non-polar and therefore hydrophobic.","Aspartic Acid (Asp) and Glutamic Acid (Glu) have R-group structures that are acidic at a neutral pH. These are also known as negatively charged AAs."]],
m1a14:["m1L1-b26","The amino acid chain folds up into a three-dimensional structure. This structure is dependent on the polarity and charge of its constituent amino acids."],
m1a56:["m1L1-b22",["All of the aliphatic amino acids are non-polar and therefore hydrophobic.","These are also known as negatively charged AAs.","These are also known as positively charged AAs.","All hydroxylic and amidic amino acids are polar hydrophilic amino acids."]],
m1a15:["m1L1-b22","Tyrosine is polar, but only weakly interacts with water, so it is considered polar hydrophobic."],
m1a16:["m1L1-b22","Aspartic Acid (Asp) and Glutamic Acid (Glu) have R-group structures that are acidic at a neutral pH. These are also known as negatively charged AAs."],
m1a17:["m1L1-b29","Nucleotides are linked via a phosphodiester bond to form nucleic acids."],
m1a18:["m1L1-b30","Nucleotides with a ribose sugar base form RNA. These include adenine (A), uracil (U), guanine (G), and cytosine (C)."],
m1a19:["m1L3-b12","Dipole interactions are the reason salt can dissociate in water."],
m1a20:["m1L3-b7","Oxygen is more electronegative than hydrogen, meaning the shared electrons of the O-H covalent bond spend more time around oxygen."],
m1a21:["m1L3-b15","When the element bonding with water is nitrogen, oxygen, or fluorine, the bond is especially strong, and is known as a hydrogen bond."],
m1a22:["m1L3-b15","Hydrogen bonds keep DNA in its double-stranded shape and allow for strand dissociation during DNA replication."],
m1a23:["m1L3-b7","As discussed in the video, all these phenomena are due to the cohesive property of water."],
m1a24:["m1L3-b19","An example of the additive effect of van der Walls forces is a gecko walking up a wall or across a ceiling."],
m1a25:["m1L3-b20","Arrange the intermolecular forces in order from strongest (top) to weakest (bottom)."],
m1a26:["m1L3-b19","if the distance is too close, reaching what is known as the van der Waals contact distance (a term I would know if I were you), the attraction is counteracted by the repelling forces of the electron clouds."],
m1a27:["m1L3-b22","When two hydrophobic molecules come together, some of the water molecules forming the “cages” are freed into solution."],
m1a28:["m1L3-b22","Thus, hydrophobic molecules don’t associate because of attraction or affinity."],
m1a29:["m1L3-b22","Amphipathic phospholipids form lipid bilayers, with the hydrophilic head forming hydrogen bonds with water and the hydrophobic effect forcing water from the hydrophobic tails."],
m1a57:["m1L3-b22","They simply associate because it excludes water and increases the entropy of the system."],
m1a31:["m1L4-b10","In a nutshell, what you need to know is that pH and pOH add up to 14. So if pH is 4, pOH must be 10."],
m1a32:["m1L4-b13","NOTE: All logs are base 10, so a 1 unit change in pH is equivalent to a 10 fold change in concentration."],
m1a33:["m1L4-b15","As we mentioned previously, pH+pOH =14."],
m1a34:["m1L4-b20","The lower the value of pKa, the stronger the acid and the greater its ability to donate its protons."],
m1a35:["m1L4-b10","Since Keq is a ratio, reactions that favor the reactant will have a Keq less than 1, while reactions that favor the products will have a Keq greater than 1."],
m1a36:["m1L4-b21","Raise each side by the log base. 10^3.9 = [A-] / [HA]"],
m1a37:["m1L4-b20","The pKa is the pH at which half of the acid is dissociated (because log (1) =0)."],
m1a38:["m1L4-b7","Most organic acids at physiologic pH of 7.4 (the standard pH of human blood) are in conjugate base form"],
m1a60:["m1L4-b20","If pH is above the pKa, [A-] is dominant"],
m1a39:["m1L4-b25","In the small intestines, pH of 3.5 is equal to pKa, so the small intestine is the scenario with more base available for absorption."],
m1a40:["m1L4-b28","A buffer solution resists changes in pH most effectively at pH values close to the pKa of the solution."],
m1a41:["m1L4-b28","One of the most common misconceptions is that buffers neutralize solutions."],
m1a42:["m1L4-b28","The pKa is the pH at which half of the acid is dissociated, maximizing the range at which changes in [A-] or [HA] minimally impact the pH."],
m1a58:["m1L4-b20","The pKa is the pH at which half of the acid is dissociated (because log (1) =0)."],
m1a59:["m1L4-b28","For any given conjugate acid-base pair, the pH buffering capacity is estimated as pKa ± 1."],
m1a45:["m1L4-b28","This would alter the amount of CO2 available and push the above reaction to the left or the right, depending on if we were increasing or decreasing respiration."],
m1a46:["m1L4-b28","This would alter the amount of CO2 available and push the above reaction to the left or the right, depending on if we were increasing or decreasing respiration."],
m1a47:["m1L4-b28","This would alter the amount of CO2 available and push the above reaction to the left or the right, depending on if we were increasing or decreasing respiration."],
m1a61:["m1L4-b28","This would alter the amount of CO2 available and push the above reaction to the left or the right, depending on if we were increasing or decreasing respiration."],
m1a48:["m1L4-b28","CO2 reacts with water to produce carbonic acid (H2CO3), a weak acid."],
m1a49:["m1L4-b28","This produces sufficient bicarbonate to buffer excess protons from other organic acids such as lactic acid produced during exercise."],
m1a50:["m1L4-b28","So, there is a 20:1 ratio of bicarbonate to carbonic acid in our bloodstream."],
m1a62:["m1L4-b28","So, there is a 20:1 ratio of bicarbonate to carbonic acid in our bloodstream."]};
const M=MODS[MODS.length-1];
M.lecture="m1";
M.lecnotes={"m1L4-b20":["m1-ka","m1-hh"]};
M.questions.forEach(q=>{if(LEC[q.id])q.lec={b:LEC[q.id][0],hl:LEC[q.id][1]};});})();
