// Module 1 — Intro to Biochemistry (LOs 1.1–1.4)
// src: lecture lesson the item comes from. tag: "beyond" = not stated in the lecture; reasoned from it or standard biochem.
MODS.push({
id:"m1", short:"M1", name:"Module 1: Biomolecules, water, pH",
los:[
{id:"1.1", title:"Relate the structure and function of biomolecules to their cellular role"},
{id:"1.2", title:"Describe how the properties of water facilitate biological interactions"},
{id:"1.3", title:"Determine the pH of a solution by direct measurement and calculation"},
{id:"1.4", title:"Apply knowledge of the bicarbonate buffer system to predict pathophysiologic effects of acidosis and alkalosis"}
],

sheets:{
"1.1":`
<h4>Four classes, what holds them together, what they do</h4>
<table>
<tr><th>Class</th><th>Building block</th><th>Bond</th><th>Role</th></tr>
<tr><td>Carbohydrate</td><td>monosaccharide</td><td>glycosidic</td><td>main fuel (glucose); storage as glycogen (animals) / starch (plants); branched chains for structure, cell ID, cell–cell contact</td></tr>
<tr><td>Lipid</td><td><b>no repeating unit</b></td><td>ester (fatty acid → glycerol)</td><td>stored fat, membranes, hormones</td></tr>
<tr><td>Protein</td><td>amino acid</td><td>peptide (unbranched chain)</td><td>enzymes, structure, signaling, transport</td></tr>
<tr><td>Nucleic acid</td><td>nucleotide (5-C sugar + base + phosphate)</td><td>phosphodiester</td><td>store and transfer genetic info</td></tr>
</table>
<p>All four bonds form by dehydration synthesis (water out) and break by hydrolysis (water in).</p>

<h4>Lipids</h4>
<ul>
<li><b>Triglyceride:</b> glycerol + 3 fatty acids via ester bonds. Stored fat (adipose).</li>
<li><b>Phospholipid:</b> glycerol + 2 FAs + modified phosphate (head). Sphingolipids use a <b>sphingosine</b> backbone instead. Bilayer: heads out, tails in.</li>
<li><b>Steroid:</b> 4 fused rings. Cholesterol → bile salts, testosterone, estradiol, cortisol. In the membrane it buffers fluidity in both directions (heat and cold).</li>
<li>Saturated = no C=C, packs tight, solid (butter). Unsaturated = ≥1 C=C, kinks, liquid (olive oil), adds membrane fluidity.</li>
</ul>

<h4>Amino acid groups (book grouping, no structures needed)</h4>
<table>
<tr><th>Group</th><th>Members</th><th>Water</th></tr>
<tr><td>Aliphatic</td><td>Ala, Gly, Ile, Leu, Pro, Val</td><td>hydrophobic, <b>except Gly</b></td></tr>
<tr><td>Aromatic</td><td>Phe, Trp, Tyr</td><td>hydrophobic (Tyr is polar but still counted hydrophobic)</td></tr>
<tr><td>Acidic (−)</td><td>Asp, Glu</td><td>hydrophilic</td></tr>
<tr><td>Basic (+)</td><td>Arg, His, Lys</td><td>hydrophilic</td></tr>
<tr><td>Hydroxylic</td><td>Ser, Thr</td><td>hydrophilic</td></tr>
<tr><td>Amidic</td><td>Asn, Gln</td><td>hydrophilic</td></tr>
<tr><td>Sulfur</td><td>Cys, Met</td><td>Cys hydrophilic, Met hydrophobic</td></tr>
</table>
<p class="conf"><b>Easy to confuse:</b> polar ≠ hydrophilic in this book. Gly is nonpolar but hydrophilic; Tyr is polar but hydrophobic. Pro is an imino acid (NH, not NH<sub>2</sub>).</p>

<h4>DNA vs RNA</h4>
<p>DNA: deoxyribose; A T G C. RNA: ribose; A <b>U</b> G C. They differ in sugar <i>and</i> one base.</p>

<h4>Where pathways happen</h4>
<table>
<tr><td>Cytosol</td><td>glycolysis, glycogen synthesis, fatty acid / amino acid / nucleotide synthesis</td></tr>
<tr><td>Mito matrix</td><td>citric acid cycle, β-oxidation</td></tr>
<tr><td>Inner mito membrane</td><td>oxidative phosphorylation (cristae add surface area)</td></tr>
<tr><td>Smooth ER</td><td>triacylglycerol, phospholipid, cholesterol and steroid hormone synthesis (Leydig cells, hepatocytes, adipocytes)</td></tr>
<tr><td>Peroxisome</td><td>first β-oxidation of <b>very long</b> fatty acids, H<sub>2</sub>O<sub>2</sub> breakdown, bile acid and DHA synthesis</td></tr>
<tr><td>Lysosome</td><td>digests all 4 classes; the only pathway run here is glycogen degradation</td></tr>
</table>
<p class="conf"><b>Easy to confuse:</b> ester (lipids) vs phosphodiester (nucleic acids); glycogen (animal) vs starch (plant).</p>
`,
"1.2":`
<h4>Two properties do most of the work</h4>
<ol>
<li><b>Polarity.</b> O is more electronegative than H → O is δ−, H's are δ+. Polar and charged molecules dissolve (hydrophilic); nonpolar ones don't (hydrophobic).</li>
<li><b>Hydrogen bonding.</b> δ+ H on N, O or F ↔ δ− atom on another molecule. Gives cohesion (meniscus, water dome on a penny, bugs on water).</li>
</ol>

<h4>Weak (noncovalent, intermolecular) forces, strongest → weakest</h4>
<table>
<tr><th>Force</th><th>What it is</th><th>Example</th></tr>
<tr><td>Ion–dipole</td><td>ion ↔ opposite end of a polar molecule</td><td>NaCl dissolving; charged side chains binding</td></tr>
<tr><td>Hydrogen bond</td><td>strongest dipole–dipole (H on N/O/F)</td><td>DNA strands, protein shape, water cohesion</td></tr>
<tr><td>Dipole–dipole</td><td>polar ↔ polar</td><td>polar groups lining up</td></tr>
<tr><td>van der Waals</td><td>transient dipoles; works between <b>all</b> molecules, even nonpolar</td><td>gecko feet; packed protein cores</td></tr>
</table>
<p>They're weak and <b>reversible</b>, which is the point: molecules can bind, let go and rearrange. Thousands of them together give a lot of stability. van der Waals attraction rises as atoms get closer until the <b>contact distance</b>; any closer and the electron clouds repel.</p>

<h4>Hydrophobic effect</h4>
FIG:hydro
<p>Nonpolar molecules cluster <b>not because they attract each other</b>, but because clustering frees the ordered "cage" waters → entropy goes up → spontaneous. This drives bilayer formation and buries hydrophobic amino acids in the protein core.</p>
<p class="conf"><b>Easy to confuse:</b> weak interactions = attraction. Hydrophobic effect = entropy of water, not attraction.</p>

<h4>Why water weakens electrostatic interactions <span class="tag">beyond</span></h4>
<p>Water molecules orient around each ion (δ− O toward cations, δ+ H toward anions), shielding the charges from each other. In textbook terms, water has a high dielectric constant. That's why salt dissolves, and why charge–charge interactions inside proteins are strongest where water is excluded.</p>
`,
"1.3":`
<h4>Equations</h4>
<table>
<tr><td>pH = −log[H<sup>+</sup>]</td><td>[H<sup>+</sup>] = 10<sup>−pH</sup></td></tr>
<tr><td>pOH = −log[OH<sup>−</sup>]</td><td>pH + pOH = 14 (K<sub>w</sub> = 10<sup>−14</sup>)</td></tr>
<tr><td>K<sub>a</sub> = [H<sup>+</sup>][A<sup>−</sup>]/[HA]</td><td>pK<sub>a</sub> = −log K<sub>a</sub></td></tr>
<tr><td colspan="2"><b>pH = pK<sub>a</sub> + log([A<sup>−</sup>]/[HA])</b> &nbsp;→&nbsp; ratio = 10<sup>(pH − pKa)</sup></td></tr>
</table>
<ul>
<li>1 pH unit = 10× [H<sup>+</sup>]. 2 units = 100×.</li>
<li>Bigger K<sub>a</sub> = smaller pK<sub>a</sub> = stronger acid (dissociates more). Strong acids (HCl) dissociate fully: 0.1 M HCl → pH 1.</li>
<li>K<sub>eq</sub> &gt; 1 favors products, &lt; 1 favors reactants. Know how to interpret it; you're unlikely to calculate one.</li>
</ul>

<h4>Reading H–H without math</h4>
<table>
<tr><td>pH &gt; pK<sub>a</sub></td><td>[A<sup>−</sup>] &gt; [HA] (deprotonated wins)</td></tr>
<tr><td>pH = pK<sub>a</sub></td><td>[A<sup>−</sup>] = [HA], half dissociated, best buffering</td></tr>
<tr><td>pH &lt; pK<sub>a</sub></td><td>[HA] &gt; [A<sup>−</sup>] (protonated wins)</td></tr>
</table>
<p>Most organic acids at pH 7.4 are in base form, which is why pathways say pyruvate and lactate, not pyruvic acid and lactic acid. Uncharged HA crosses the membrane's hydrophobic core more easily; the charged form is more water-soluble.</p>

<h4>Buffers</h4>
<p>A weak acid + its conjugate base. It <b>resists change</b> in pH; it does not pull pH toward 7. It works best within <b>pK<sub>a</sub> ± 1</b>.</p>
TOOL:hh
<p class="conf"><b>Easy to confuse:</b> "buffer neutralizes" (wrong) vs "buffer maintains whatever pH it's at" (right). Strong acid = low pK<sub>a</sub>, not high.</p>

<h4>Direct measurement <span class="tag">beyond</span></h4>
<p>The lecture only covers calculation. In practice pH is measured with a pH meter (electrode reads [H<sup>+</sup>] directly) or with indicator dyes or strips that change color over a set pH range.</p>
`,
"1.4":`
<h4>The system</h4>
FIG:bicarb
<ul>
<li>pK<sub>a</sub> 6.1, blood pH 7.4 → [HCO<sub>3</sub><sup>−</sup>]:[H<sub>2</sub>CO<sub>3</sub>] = 10<sup>1.3</sup> ≈ <b>20:1</b>. That large bicarbonate reserve soaks up acids like lactic acid.</li>
<li>In the lungs the reaction runs left → CO<sub>2</sub> is exhaled, removing acid.</li>
<li>Ratio up → pH up. Ratio down → pH down.</li>
</ul>

<h4>Predicting the disorder</h4>
<table>
<tr><th>Cause</th><th>Shift</th><th>pH</th><th>Disorder</th></tr>
<tr><td>Breathing too slow / CO<sub>2</sub> retained (opioids, COPD)</td><td>right</td><td>↓</td><td>respiratory acidosis</td></tr>
<tr><td>Breathing too fast / CO<sub>2</sub> blown off (panic, altitude)</td><td>left</td><td>↑</td><td>respiratory alkalosis</td></tr>
<tr><td>Acid added (lactic acid, ketoacids) or HCO<sub>3</sub><sup>−</sup> lost (diarrhea)</td><td>bicarbonate consumed</td><td>↓</td><td>metabolic acidosis</td></tr>
<tr><td>Acid lost (vomiting stomach HCl)</td><td>H<sup>+</sup> regenerated, HCO<sub>3</sub><sup>−</sup> left over</td><td>↑</td><td>metabolic alkalosis</td></tr>
</table>
<p><b>Rule:</b> "respiratory" = the problem starts with CO<sub>2</sub>. "Metabolic" = it starts with acid or HCO<sub>3</sub><sup>−</sup>. Compensation is the other system pushing back: breathing faster to blow off CO<sub>2</sub> in metabolic acidosis is <b>beyond</b> the lecture, but it follows from the same equation.</p>
<h4>Why it matters</h4>
<p>pH shifts change which groups are protonated. That breaks electrostatic interactions and H-bonds → proteins misfold and enzymes lose activity.</p>
<p class="conf"><b>Easy to confuse:</b> more CO<sub>2</sub> = more acid (pH down). People flip this because CO<sub>2</sub> isn't "an acid" on its own; it becomes one by making H<sub>2</sub>CO<sub>3</sub>.</p>
<p class="mut sm">Note: 7.4 sits outside 6.1 ± 1, yet the system still works because it's open. The lungs remove CO<sub>2</sub> and the kidneys adjust HCO<sub>3</sub><sup>−</sup> <span class="tag">beyond</span>.</p>
`
},

questions:[
// ---------- 1.1 ----------
{id:"m1q01",lo:"1.1",src:"L1",type:"mc",
stem:"Which pairing of bond and biomolecule is correct?",
opts:["Ester bond — links fatty acids to glycerol in a triglyceride","Phosphodiester bond — links monosaccharides in glycogen","Glycosidic bond — links amino acids in a polypeptide","Peptide bond — links nucleotides in RNA"],ans:0,
exp:"Ester bonds attach fatty acids to glycerol. Glycosidic bonds join sugars, peptide bonds join amino acids, and phosphodiester bonds join nucleotides."},
{id:"m1q02",lo:"1.1",src:"L1",type:"tf",
stem:"Like the other three classes of biomolecules, lipids are polymers built from a repeating monomer.",ans:false,
exp:"Lipids are the exception: they are not made of repeating units. Carbohydrates, proteins and nucleic acids are polymers."},
{id:"m1q03",lo:"1.1",src:"L1",type:"mc",
stem:"A membrane is enriched in phospholipids carrying unsaturated fatty acid tails. Compared with a membrane of saturated tails, it will be:",
opts:["More fluid, because C=C double bonds keep the tails from packing tightly","More rigid, because C=C double bonds are stronger than single bonds","More fluid, because unsaturated tails are more hydrophilic","More rigid, because unsaturated tails carry extra hydrogens"],ans:0,
exp:"Double bonds put kinks in the tails so they pack loosely, which gives fluidity. Saturated tails, with no double bonds, pack tightly and give stability. Unsaturated tails are still hydrophobic, and they carry fewer hydrogens, not more."},
{id:"m1q04",lo:"1.1",src:"L1",type:"mc",
stem:"Which amino acid is grouped as hydrophilic even though its R group is nonpolar?",
opts:["Glycine","Tyrosine","Methionine","Proline"],ans:0,
exp:"Glycine is the aliphatic exception: nonpolar but counted hydrophilic. Tyrosine is the reverse case (polar but hydrophobic). Met and Pro are nonpolar and hydrophobic."},
{id:"m1q05",lo:"1.1",src:"L1",type:"tf",
stem:"Because tyrosine's side chain is polar, it is classified with the hydrophilic amino acids.",ans:false,
exp:"Tyrosine is polar but interacts only weakly with water, so the book counts it as polar hydrophobic, alongside Phe and Trp in the aromatic group."},
{id:"m1q06",lo:"1.1",src:"L1",type:"mc",
stem:"A residue buried in the water-excluding core of a folded protein is most likely to be:",
opts:["Methionine","Cysteine","Serine","Glutamine"],ans:0,
exp:"The core holds hydrophobic residues. Of the two sulfur amino acids, Met is hydrophobic and Cys is hydrophilic. Ser (hydroxylic) and Gln (amidic) are polar hydrophilic."},
{id:"m1q07",lo:"1.1",src:"L1",type:"mc",
stem:"Which set contains only amino acids that are positively charged at neutral pH?",
opts:["Arg, His, Lys","Asp, Glu, Lys","Arg, Gln, His","Asn, Arg, Lys"],ans:0,
exp:"The basic (positive) amino acids are Arg, His and Lys. Asp and Glu are acidic (negative). Gln and Asn are amidic and uncharged."},
{id:"m1q08",lo:"1.1",src:"L1",type:"tf",
stem:"DNA and RNA nucleotides differ only in which nitrogenous bases they use.",ans:false,
exp:"They also differ in the sugar: deoxyribose in DNA, ribose in RNA. Base-wise, DNA has T and RNA has U."},
{id:"m1q09",lo:"1.1",src:"L1",type:"mc",
stem:"Glycogen and starch are best described as:",
opts:["Branched glucose polysaccharides storing fuel in animals and plants, respectively","Branched glucose polysaccharides storing fuel in plants and animals, respectively","Glucose disaccharides storing fuel in animals and plants, respectively","Structural fructose polysaccharides found in animals and plants, respectively"],ans:0,
exp:"Both store glucose as polysaccharides joined by glycosidic bonds. Glycogen is the animal form and starch is the plant form."},
{id:"m1q10",lo:"1.1",src:"L2",type:"mc",
stem:"Which cell would you expect to have the most extensive smooth ER?",
opts:["A testosterone-secreting Leydig cell","An antibody-secreting plasma cell","An enzyme-secreting pancreatic acinar cell","A mature red blood cell"],ans:0,
exp:"Smooth ER is where lipids and steroids are made, so steroid-producing cells like Leydig cells have a lot of it. Cells that secrete proteins rely on rough ER, and mature RBCs have no organelles."},
{id:"m1q11",lo:"1.1",src:"L2",type:"mc",
stem:"The citric acid cycle and oxidative phosphorylation occur in which locations, respectively?",
opts:["Mitochondrial matrix; inner mitochondrial membrane","Inner mitochondrial membrane; mitochondrial matrix","Cytosol; inner mitochondrial membrane","Mitochondrial matrix; intermembrane space"],ans:0,
exp:"The citric acid cycle runs in the matrix, and oxidative phosphorylation runs on the inner membrane, where cristae add surface area. Glycolysis is the cytosolic pathway. This pairing comes back in Module 3."},
{id:"m1q12",lo:"1.1",src:"L2",type:"mc",
stem:"The initial breakdown of very long-chain fatty acids takes place in the:",
opts:["Peroxisome","Lysosome","Smooth ER","Cytosol"],ans:0,
exp:"Peroxisomes begin β-oxidation of very long fatty acids. Ordinary β-oxidation happens in the mitochondrial matrix, and the lysosome's only metabolic pathway is glycogen degradation."},
{id:"m1q13",lo:"1.1",src:"L1",type:"mc",
stem:"Cholesterol's effect on the plasma membrane is to:",
opts:["Limit phospholipid movement at high temperature and prevent tight packing at low temperature","Increase fluidity at all temperatures by separating phospholipid tails","Decrease fluidity at all temperatures by stiffening phospholipid tails","Form transmembrane channels that let polar molecules cross the bilayer"],ans:0,
exp:"Cholesterol buffers fluidity in both directions: it keeps the membrane from getting too loose when warm and from packing solid when cold. Channels are formed by integral proteins, not cholesterol."},
{id:"m1q14",lo:"1.1",src:"L1",type:"tf",
stem:"Sphingolipids are phospholipids built on a glycerol backbone, like diglyceride phospholipids.",ans:false,
exp:"Sphingolipids use a sphingosine backbone instead of glycerol, and they are often studded with carbohydrates."},
{id:"m1q15",lo:"1.1",src:"L1",type:"mc",
stem:"Which functional group in amino acids acts as a base by accepting H⁺?",
opts:["Amine (–NH₂)","Carboxyl (–COOH)","Hydroxyl (–OH)","Phosphate (–PO₄)"],ans:0,
exp:"The amine group accepts H⁺ (basic, becoming –NH₃⁺). The carboxyl group donates H⁺ (acidic). Both are found in every amino acid."},
{id:"m1q16",lo:"1.1",src:"L1",type:"tf",
stem:"Carbon dioxide is an organic compound because it contains carbon.",ans:false,
exp:"Organic compounds have carbon bonded to hydrogen. CO₂ has carbon bonded only to oxygen, so it's inorganic."},
{id:"m1q17",lo:"1.1",src:"L1",type:"tf",
stem:"Phospholipids spontaneously arrange tail-to-tail in water because each molecule is amphipathic.",ans:true,
exp:"The hydrophilic heads face water and the hydrophobic tails hide together. That's how the bilayer forms with no energy input."},

// ---------- 1.2 ----------
{id:"m1q18",lo:"1.2",src:"L3",type:"mc",
stem:"When small oil droplets in water merge into one large droplet, the main driving force is:",
opts:["An increase in entropy as ordered water molecules around the oil are released","Hydrogen bonds forming between neighboring oil molecules","A decrease in entropy as oil molecules become more ordered","Ion–dipole attraction between oil molecules and water"],ans:0,
exp:"That's the hydrophobic effect: merging shrinks the total oil surface, freeing caged water molecules and raising entropy. Oil can't hydrogen-bond, and merging isn't driven by attraction.",fig:"hydro"},
{id:"m1q19",lo:"1.2",src:"L3",type:"tf",
stem:"Nonpolar molecules cluster in water because they are strongly attracted to one another.",ans:false,
exp:"The hydrophobic effect is about water's entropy, not attraction. That's the key difference between it and the weak interactions."},
{id:"m1q20",lo:"1.2",src:"L3",type:"mc",
stem:"Which ranks the interactions from strongest to weakest?",
opts:["Ion–dipole > hydrogen bond > dipole–dipole > van der Waals","Hydrogen bond > ion–dipole > van der Waals > dipole–dipole","Ion–dipole > dipole–dipole > hydrogen bond > van der Waals","van der Waals > dipole–dipole > hydrogen bond > ion–dipole"],ans:0,
exp:"A full ionic charge beats partial charges. A hydrogen bond is the strongest type of dipole–dipole. van der Waals forces are the weakest individually."},
{id:"m1q21",lo:"1.2",src:"L3",type:"mc",
stem:"Which pair can form a hydrogen bond?",
opts:["The H of an –OH group and the O of water","The H of a C–H group and the O of water","A Na⁺ ion and the O of water","Two methane (CH₄) molecules"],ans:0,
exp:"The donor H has to be bonded to N, O or F. A C–H hydrogen isn't polarized enough. Na⁺ with water is ion–dipole, and methane–methane is only van der Waals."},
{id:"m1q22",lo:"1.2",src:"L3",type:"tf",
stem:"van der Waals interactions can occur only between polar molecules.",ans:false,
exp:"They happen between all molecules, even nonpolar ones, because electrons briefly sit unevenly and create transient dipoles."},
{id:"m1q23",lo:"1.2",src:"L3",type:"mc",
stem:"Two atoms are pushed closer together than their van der Waals contact distance. What happens?",
opts:["Repulsion between their electron clouds outweighs attraction","Attraction reaches its maximum and stays there","A covalent bond forms between them","The transient dipoles become permanent dipoles"],ans:0,
exp:"Attraction increases as atoms approach until the contact distance. Closer than that, the electron clouds repel."},
{id:"m1q24",lo:"1.2",src:"L3",type:"mc",
stem:"A gecko can hang from a glass ceiling with no glue. Which interaction explains this?",
opts:["Very many van der Waals interactions acting together","A few strong hydrogen bonds to the glass","Ion–dipole attraction between foot proteins and glass","The hydrophobic effect excluding water from the foot"],ans:0,
exp:"Each van der Waals interaction is tiny, but millions of close contacts add up. It's the lecture's example of their cumulative strength."},
{id:"m1q25",lo:"1.2",src:"L3",type:"mc",tag:"beyond",
stem:"Why does water weaken the attraction between two oppositely charged ions?",
opts:["Water molecules orient around each ion and shield the charges from each other","Water forms covalent bonds with the ions, neutralizing their charge","Water donates electrons to the cation until both ions are neutral","Water excludes the ions from solution through the hydrophobic effect"],ans:0,
exp:"Because water is polar, it surrounds each ion with oppositely oriented partial charges (δ− O toward cations, δ+ H toward anions), which screens the ions from each other. In textbook terms, water has a high dielectric constant. This is also why salt dissolves."},
{id:"m1q26",lo:"1.2",src:"L3",type:"tf",
stem:"A major advantage of weak interactions in biology is that they form and break easily, letting molecules bind and release.",ans:true,
exp:"Weak forces are transient and reversible. That's what lets a cell interact with its environment dynamically, while their large numbers still give stability."},
{id:"m1q27",lo:"1.2",src:"L3",type:"tf",
stem:"Hydrogen bonds hold the two strands of DNA together, yet they are weak enough to let the strands separate during replication.",ans:true,
exp:"This is the lecture's main example of weak-but-useful: stable in large numbers, but easy to break."},
{id:"m1q28",lo:"1.2",src:"L3",type:"mc",
stem:"Which property of water most directly explains why a water strider can stand on a pond surface?",
opts:["Cohesion from hydrogen bonding between water molecules","Water's ability to act as both an acid and a base","The hydrophobic effect around the insect's legs","Ion–dipole interactions at the water surface"],ans:0,
exp:"Hydrogen bonds between water molecules create cohesion and surface tension. The penny water dome and the meniscus are the same effect."},

// ---------- 1.3 ----------
{id:"m1q29",lo:"1.3",src:"L4",type:"mc",
stem:"A solution has [H₃O⁺] = 1 × 10⁻³ M. What are its pOH and [OH⁻]?",
opts:["pOH 11; [OH⁻] = 1 × 10⁻¹¹ M","pOH 3; [OH⁻] = 1 × 10⁻³ M","pOH 11; [OH⁻] = 1 × 10⁻³ M","pOH 3; [OH⁻] = 1 × 10⁻¹¹ M"],ans:0,
exp:"pH = 3, so pOH = 14 − 3 = 11 and [OH⁻] = 10⁻¹¹ M.",
steps:["pH = −log(10⁻³) = 3","pOH = 14 − pH = 11","[OH⁻] = 10<sup>−pOH</sup> = 10⁻¹¹ M"]},
{id:"m1q30",lo:"1.3",src:"L4",type:"mc",
stem:"Urine pH changes from 6 to 4. The [H⁺] has:",
opts:["Increased 100-fold","Increased 2-fold","Decreased 100-fold","Increased 20-fold"],ans:0,
exp:"Each pH unit is a 10× change, and lower pH means more H⁺. Two units down = 10 × 10 = 100× more H⁺.",
steps:["Δ pH = 4 − 6 = −2","[H⁺] ratio = 10<sup>2</sup> = 100","pH went down, so [H⁺] went up"]},
{id:"m1q31",lo:"1.3",src:"L4",type:"mc",
stem:"Acetic acid has a pKa of 4.8. At pH 7.4, it exists mostly as:",
opts:["Acetate, with [A⁻]/[HA] ≈ 400","Acetic acid, with [HA]/[A⁻] ≈ 400","Acetate, with [A⁻]/[HA] ≈ 2.6","Equal amounts of acetate and acetic acid"],ans:0,
exp:"pH is above the pKa, so the deprotonated form wins. Ratio = 10^(7.4 − 4.8) = 10^2.6 ≈ 400.",
steps:["pH = pKa + log([A⁻]/[HA])","7.4 = 4.8 + log(ratio) → log(ratio) = 2.6","ratio = 10<sup>2.6</sup> ≈ 398","Common trap: 2.6 is the log of the ratio, not the ratio itself"]},
{id:"m1q32",lo:"1.3",src:"L4",type:"tf",
stem:"When the pH equals the pKa, half of the acid molecules are deprotonated.",ans:true,
exp:"pH = pKa makes log([A⁻]/[HA]) = 0, so the ratio is 1:1. This is also where buffering is strongest."},
{id:"m1q33",lo:"1.3",src:"L4",type:"mc",
stem:"Acid X has Ka = 1 × 10⁻³ and acid Y has Ka = 1 × 10⁻⁶. Which is correct?",
opts:["X is the stronger acid and has the lower pKa (3 vs 6)","X is the stronger acid and has the higher pKa (6 vs 3)","Y is the stronger acid and has the lower pKa (3 vs 6)","Y is the stronger acid and has the higher pKa (6 vs 3)"],ans:0,
exp:"A larger Ka means it dissociates more, so it's a stronger acid. pKa = −log Ka gives 3 for X and 6 for Y. Stronger acid = lower pKa."},
{id:"m1q34",lo:"1.3",src:"L4",type:"mc",
stem:"A drug is a weak acid with pKa 3.5. Assume it is absorbed only in its conjugate base form. Where is absorption greater?",
opts:["Small intestine (pH 3.5), because there [A⁻] equals [HA]","Stomach (pH 1.5), because there [A⁻] exceeds [HA]","Stomach (pH 1.5), because there [HA] exceeds [A⁻]","Absorption is equal, since the pKa does not change"],ans:0,
exp:"In the stomach, pH 1.5 is below the pKa, so HA dominates (A⁻:HA = 1:100). At pH 3.5, pH = pKa, so half the drug is A⁻. More conjugate base means more absorption.",
steps:["Stomach: ratio = 10<sup>1.5 − 3.5</sup> = 10⁻² → 1 A⁻ per 100 HA","Intestine: ratio = 10<sup>0</sup> = 1 → 1:1","More A⁻ available in the intestine → more absorbed"]},
{id:"m1q35",lo:"1.3",src:"L4",type:"mc",
stem:"Which form of a weak acid diffuses through the hydrophobic core of the plasma membrane more easily?",
opts:["The protonated, uncharged form (HA)","The deprotonated, charged form (A⁻)","Both cross equally well","Neither; weak acids cross only through channels"],ans:0,
exp:"Charged forms are more polar and water-soluble but struggle to cross the hydrophobic core. The uncharged HA crosses more readily."},
{id:"m1q36",lo:"1.3",src:"L4",type:"mc",
stem:"You need a buffer to hold a solution at pH 7.0. Which weak acid is the best choice?",
opts:["H₂PO₄⁻ (pKa 6.8)","Acetic acid (pKa 4.8)","NH₄⁺ (pKa 9.2)","H₃PO₄ (pKa 2.1)"],ans:0,
exp:"A buffer works best within pKa ± 1. Only 6.8 covers 7.0 (range 5.8–7.8)."},
{id:"m1q37",lo:"1.3",src:"L4",type:"tf",
stem:"Adding a buffer to an acidic solution moves its pH toward 7.",ans:false,
exp:"This is the misconception the lecture calls out. A buffer resists change at whatever pH it's at; it doesn't neutralize."},
{id:"m1q38",lo:"1.3",src:"L4",type:"mc",
stem:"What is the pH of 0.01 M HCl?",
opts:["2","1","12","0.01"],ans:0,
exp:"HCl is a strong acid and fully dissociates, so [H⁺] = 0.01 = 10⁻² M and pH = 2.",
steps:["Strong acid → [H⁺] = 0.01 M = 10⁻² M","pH = −log(10⁻²) = 2"]},
{id:"m1q39",lo:"1.3",src:"L4",type:"mc",
stem:"Metabolic pathways name intermediates like \"pyruvate\" and \"lactate\" rather than \"pyruvic acid\" and \"lactic acid\" because:",
opts:["Their pKa values are well below 7.4, so they exist mostly as conjugate bases","Their pKa values are well above 7.4, so they exist mostly as conjugate bases","They are strong acids that dissociate completely at any pH","Cells convert them to bases with ATP before using them"],ans:0,
exp:"When pH > pKa the deprotonated (-ate) form dominates. Organic acids have pKa values far below blood pH."},
{id:"m1q40",lo:"1.3",src:"L4",type:"mc",
stem:"In the titration curve shown, which point marks the region of strongest buffering?",
opts:["A","B","C","D"],ans:1,fixed:true,fig:"titr",
exp:"B is the flat middle of the curve, where pH = pKa and [HA] = [A⁻]. Adding base barely moves pH there. At A and D almost all of the acid is in one form, and C is past the buffer zone."},
{id:"m1q41",lo:"1.3",src:"L4",type:"tf",
stem:"A Keq less than 1 indicates that a reaction at equilibrium favors the reactants.",ans:true,
exp:"Keq is products over reactants. Below 1 means more reactant at equilibrium. Water's tiny Keq shows how little it dissociates."},

// ---------- 1.4 ----------
{id:"m1q42",lo:"1.4",src:"L4",type:"mc",
stem:"A patient's blood pH is 7.1. Using pKa 6.1, what is the [HCO₃⁻]:[H₂CO₃] ratio?",
opts:["10:1","20:1","1:10","1:1"],ans:0,
exp:"Ratio = 10^(7.1 − 6.1) = 10¹ = 10. That's half the normal 20:1, so this patient is acidemic.",
steps:["7.1 = 6.1 + log(ratio)","log(ratio) = 1.0","ratio = 10¹ = 10 → 10:1 (normal is 20:1 at 7.4)"]},
{id:"m1q43",lo:"1.4",src:"L4",type:"mc",
stem:"A blood sample has [HCO₃⁻]:[H₂CO₃] = 40:1 (pKa 6.1). This patient has:",
opts:["Alkalosis, pH ≈ 7.7","Acidosis, pH ≈ 7.1","Alkalosis, pH ≈ 46","Normal pH, 7.4"],ans:0,
exp:"pH = 6.1 + log 40 ≈ 6.1 + 1.6 = 7.7, which is above 7.4. Doubling the ratio raises pH by log 2 ≈ 0.3.",
steps:["pH = 6.1 + log(40)","log(40) ≈ 1.6","pH ≈ 7.7 → above 7.4 = alkalosis"]},
{id:"m1q44",lo:"1.4",src:"L4",type:"mc",
stem:"An opioid overdose slows a patient's breathing. Which sequence follows?",
opts:["CO₂ rises → equilibrium shifts toward H⁺ + HCO₃⁻ → pH falls → respiratory acidosis","CO₂ rises → equilibrium shifts toward CO₂ + H₂O → pH rises → respiratory alkalosis","CO₂ falls → equilibrium shifts toward H⁺ + HCO₃⁻ → pH falls → metabolic acidosis","CO₂ falls → equilibrium shifts toward CO₂ + H₂O → pH rises → respiratory alkalosis"],ans:0,fig:"bicarb",
exp:"Slower breathing means less CO₂ is exhaled. The extra CO₂ pushes the equation right, making more H⁺. It's respiratory because the problem started with CO₂."},
{id:"m1q45",lo:"1.4",src:"L4",type:"mc",
stem:"During a panic attack a person hyperventilates. Their blood will show:",
opts:["Lower CO₂, lower [H⁺], higher pH","Higher CO₂, higher [H⁺], lower pH","Lower CO₂, higher [H⁺], lower pH","Higher CO₂, lower [H⁺], higher pH"],ans:0,
exp:"Blowing off CO₂ pulls the equation left, which uses up H⁺, so pH rises (respiratory alkalosis)."},
{id:"m1q46",lo:"1.4",src:"L4",type:"tf",
stem:"Increasing the CO₂ concentration in blood raises blood pH.",ans:false,
exp:"More CO₂ makes more carbonic acid, which releases H⁺, so pH goes down."},
{id:"m1q47",lo:"1.4",src:"L4",type:"tf",
stem:"In the lungs, the bicarbonate reactions run toward CO₂, so acid leaves the body as exhaled gas.",ans:true,
exp:"Enzymes in the lung favor the reverse reaction. That's how CO₂ made by metabolism stops building up as acid."},
{id:"m1q48",lo:"1.4",src:"L4",type:"mc",
stem:"During a sprint, lactic acid floods the blood. How does the bicarbonate system respond?",
opts:["HCO₃⁻ binds the added H⁺, forming H₂CO₃ that converts to CO₂ for exhalation","H₂CO₃ binds the added H⁺, forming HCO₃⁻ that is excreted","CO₂ binds the added H⁺, forming H₂CO₃ that releases HCO₃⁻","The added H⁺ converts water into more HCO₃⁻ to raise pH"],ans:0,
exp:"Bicarbonate is the base that soaks up H⁺. This is why the 20:1 bicarbonate reserve matters. The equation shifts left and the extra CO₂ is breathed off."},
{id:"m1q49",lo:"1.4",src:"L4",type:"mc",tag:"beyond",
stem:"A patient with severe vomiting loses large amounts of stomach HCl. Which disturbance is most likely?",
opts:["Metabolic alkalosis","Metabolic acidosis","Respiratory alkalosis","Respiratory acidosis"],ans:0,
exp:"Losing H⁺ leaves extra HCO₃⁻ behind, so pH rises. The cause is acid loss, not CO₂, so it's metabolic. Severe diarrhea is the opposite: it loses HCO₃⁻ and causes metabolic acidosis."},
{id:"m1q50",lo:"1.4",src:"L4",type:"mc",tag:"beyond",
stem:"A patient with diabetic ketoacidosis breathes deeply and rapidly. What does this accomplish?",
opts:["Exhaling more CO₂ pulls the equilibrium left, removing H⁺ and raising pH toward normal","Inhaling more O₂ neutralizes the ketoacids directly","Exhaling more CO₂ pushes the equilibrium right, making HCO₃⁻ to cause alkalosis","Retaining CO₂ increases carbonic acid, which buffers the ketoacids"],ans:0,
exp:"This is respiratory compensation for metabolic acidosis. Removing CO₂ pulls H⁺ + HCO₃⁻ back toward CO₂. It partly corrects pH but doesn't fix the cause."},
{id:"m1q51",lo:"1.4",src:"L4",type:"mc",
stem:"Acidosis can impair enzyme function mainly because a pH change:",
opts:["Alters protonation of side chains, disrupting the electrostatic interactions and H-bonds that hold the protein's shape","Breaks the peptide bonds that link the protein's amino acids","Converts hydrophobic amino acids into hydrophilic ones","Increases the hydrophobic effect so the protein cannot fold"],ans:0,
exp:"Gaining or losing H⁺ changes side-chain charges, which disrupts the weak interactions that set the 3D shape. Peptide bonds are covalent and stay intact. This links 1.2 with 1.4."},
{id:"m1q52",lo:"1.4",src:"L4",type:"tf",tag:"beyond",
stem:"Even though blood pH (7.4) lies outside carbonic acid's pKa ± 1 range, the bicarbonate system remains effective because the lungs can adjust CO₂.",ans:true,
exp:"6.1 ± 1 only reaches 7.1, but it's an open system: breathing removes or keeps CO₂, and the kidneys handle HCO₃⁻. That's why it still buffers well at 7.4."}
],

drills:[
{id:"m1d1",lo:"1.1",kind:"sort",title:"Amino acid groups",
intro:"Tap an amino acid, then tap its group. Wrong placements explain themselves.",
rounds:[
{name:"By side-chain group",bins:["Aliphatic","Aromatic","Acidic","Basic","Hydroxylic","Amidic","Sulfur"],
items:[["Ala","Aliphatic"],["Gly","Aliphatic","Book groups Gly as aliphatic"],["Ile","Aliphatic"],["Leu","Aliphatic"],["Pro","Aliphatic","Aliphatic, and technically an imino acid"],["Val","Aliphatic"],["Phe","Aromatic"],["Trp","Aromatic"],["Tyr","Aromatic"],["Asp","Acidic"],["Glu","Acidic"],["Arg","Basic"],["His","Basic"],["Lys","Basic"],["Ser","Hydroxylic"],["Thr","Hydroxylic"],["Asn","Amidic"],["Gln","Amidic"],["Cys","Sulfur"],["Met","Sulfur"]]},
{name:"Hydrophobic or hydrophilic",bins:["Hydrophobic","Hydrophilic"],
items:[["Ala","Hydrophobic"],["Gly","Hydrophilic","Nonpolar, but the book counts it hydrophilic"],["Ile","Hydrophobic"],["Leu","Hydrophobic"],["Pro","Hydrophobic"],["Val","Hydrophobic"],["Phe","Hydrophobic"],["Trp","Hydrophobic"],["Tyr","Hydrophobic","Polar, but only weakly interacts with water → polar hydrophobic"],["Asp","Hydrophilic"],["Glu","Hydrophilic"],["Arg","Hydrophilic"],["His","Hydrophilic"],["Lys","Hydrophilic"],["Ser","Hydrophilic"],["Thr","Hydrophilic"],["Asn","Hydrophilic"],["Gln","Hydrophilic"],["Cys","Hydrophilic","Sulfur pair splits: Cys polar hydrophilic"],["Met","Hydrophobic","Sulfur pair splits: Met nonpolar hydrophobic"]]}
]},
{id:"m1d2",lo:"1.1",kind:"sort",title:"Where does it happen?",
intro:"Place each process in its cellular location.",
rounds:[{name:"Pathway → location",bins:["Cytosol","Mito matrix","Inner mito membrane","Smooth ER","Peroxisome","Lysosome"],
items:[["Glycolysis","Cytosol"],["Glycogen synthesis","Cytosol"],["Fatty acid synthesis","Cytosol"],["Citric acid cycle","Mito matrix"],["β-oxidation of typical fatty acids","Mito matrix"],["Oxidative phosphorylation","Inner mito membrane","Cristae fold this membrane to add surface area"],["Steroid hormone synthesis","Smooth ER"],["Triacylglycerol assembly","Smooth ER"],["First β-oxidation of very long fatty acids","Peroxisome"],["H₂O₂ breakdown","Peroxisome"],["Bile acid synthesis","Peroxisome"],["Digestion of an engulfed damaged organelle","Lysosome","Autophagy: organelle wrapped in membrane, fused with a lysosome"]]}]},
{id:"m1d3",lo:"1.2",kind:"sort",title:"Name the interaction",
intro:"Which interaction is doing the work?",
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
