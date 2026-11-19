// Module 4: Carbohydrates (LOs 4.1, 4.2, 4.4)
// Lessons: one per inventory.js entry, same id, in lecture order inside each LO. Lecture figures go in through img.
// Questions: id = m4 + lecture letter (a = L1, b = L2, c = L3, d = L4, e = L5) + number. src = lecture lesson, ref = lesson id.
// kind = fig | ex | why and inv = inventory items covered; both are build-time only and never shown.
// HL (study-guide highlight) and LEC (lecture block + verbatim snippet) maps are at the bottom.
MODS.push({
id:"m4", short:"M4", name:"Module 4: Carbohydrates",
los:[
{id:"4.1", nick:"Types of carbohydrates", title:"Correlate the molecular structure of mono-, di-, and polysaccharides"},
{id:"4.2", nick:"Glucose metabolism", title:"Diagram the cellular location, rate-limiting steps, products, and regulation of glucose catabolism, gluconeogenesis, glycogen catabolism, and glycogen synthesis"},
{id:"4.4", nick:"Altered carbohydrate metabolism", title:"Apply knowledge of altered carbohydrate metabolism to human health and disease"}
],

guide:{
"4.1":[
// ---------------- L1 Types of Carbohydrates ----------------
{id:"m4-class",h:"Mono-, di- and polysaccharides",
img:{src:"lectures/biochem-exam2/img/m4/file-63249e0cbdd0b.webp",alt:"Starch (moderately branched), glycogen (highly branched) and cellulose (unbranched), each drawn as a chain of glucose units",credit:"Lecture figure, Lesson 1."},
b:`<p>Carbohydrates have two major functions in living cells and tissues. They are a major structural component of our tissues and the predominant energy source for our cells. They are classified by the number of sugar molecules bound together.</p>
<table><tr><th>Type</th><th>What it is</th><th>Examples</th></tr>
<tr><td>Mono&shy;saccharide</td><td>A single sugar molecule, sometimes called a simple sugar. The smallest.</td><td>Glucose, fructose</td></tr>
<tr><td>Di&shy;saccharide</td><td>Two monosaccharides covalently bonded to each other</td><td>Sucrose (table sugar) = glucose + fructose. Lactose (milk sugar) = glucose + galactose.</td></tr>
<tr><td>Poly&shy;saccharide</td><td>Many monosaccharides bound together in a long chain. The most abundant carbohydrate found in food.</td><td>Starch and cellulose (plants), glycogen (humans)</td></tr></table>
<p>Starch, cellulose and glycogen are all composed of repeating glucose units. They differ only in complexity, due to the number and types of branches.</p>
<p>Not all polysaccharides contain a single monosaccharide. <b>Glycosaminoglycans</b> are composed of repeating disaccharide units and provide external support for cells in human tissues. One example is <b>hyaluronic acid</b>, found in cartilage and skin, which aids in lubrication and wound healing. You are not responsible for its structure.</p>
<p>The lecture sorts foods by the sugars you would expect to find in them:</p>
<ul><li>Monosaccharides: strawberries</li>
<li>Disaccharides: plain yogurt, coffee with sugar</li>
<li>Polysaccharides: pasta, green beans, oatmeal</li></ul>
<p><b>Lactose intolerance.</b> Normally, lactose is broken down into one glucose and one galactose in the small intestine by <b>lactase</b>, an enzyme whose sole function is to cleave the bond between the two sugars. In lactose intolerance, also called lactase deficiency, there is less lactase in the small intestine. Lactose can't be absorbed (glucose and galactose can), so it continues to the large intestine, where bacteria metabolize it and produce gas. The result is flatulence and abdominal pain, among other symptoms.</p>
<p>Lactase is highest in infancy, when the diet is mostly milk. The amount declines after weaning and keeps declining with age, more in some people than others.</p>`,
so:"Mono is one sugar, di is two, poly is many. Lactase splits lactose into glucose and galactose."},

{id:"m4-formula",h:"Formula and carbon count",
img:{src:"lectures/biochem-exam2/img/m4/image-6324c29537e73.webp",alt:"Linear structures of a triose (glyceraldehyde, C3H6O3), a pentose (ribose, C5H10O5) and a hexose (glucose, C6H12O6)",credit:"Lecture figure, Lesson 1."},
b:`<p>Simple carbohydrates are made of carbon, hydrogen and oxygen in the same proportion. For every carbon there is one oxygen and two hydrogens (CH₂O), a ratio of 1:2:1. That is why they are called carbohydrates. They are hydrates (H₂O) of carbon (C).</p>
<p>The general formula is Cₙ(H₂O)ₙ. If two monosaccharides differ in the number of carbons, they differ in the number of oxygens and hydrogens too.</p>
<p>Most biologically important monosaccharides are made of 3, 5 or 6 carbons.</p>
<table><tr><th>Sugar</th><th>Carbons and role</th><th>Example</th></tr>
<tr><td>Triose</td><td>3. Mostly intermediates formed in metabolic pathways.</td><td>Glyceraldehyde, an intermediate of glycolysis</td></tr>
<tr><td>Pentose</td><td>5. Important for the metabolism of nucleic acids and the functioning of enzymes.</td><td>Ribose</td></tr>
<tr><td>Hexose</td><td>6. The predominant carbohydrates used for energy, also used to create important structures.</td><td>Glucose, fructose, galactose, mannose</td></tr></table>
<p>From the lecture's check: C₆H₁₂O₆ is the formula of a monosaccharide, and ribose is the pentose.</p>`,
nl:"Lecture wording",note:`The lecture opens this section by saying glucose, fructose and galactose differ in the number of carbons. All three have 6 carbons and share the formula C₆H₁₂O₆. Carbon number is what separates trioses, pentoses and hexoses. Glucose, fructose and galactose differ in how their atoms are arranged (next lesson).`,
so:"Cₙ(H₂O)ₙ. Trioses have 3 carbons, pentoses 5, hexoses 6."},

{id:"m4-isomer",h:"Isomers",
img:{src:"lectures/biochem-exam2/img/m4/file-6324b568a9d49.webp",alt:"Ring structures of L-glucose (left-handed sugar) and D-glucose (right-handed sugar), drawn as mirror images",credit:"Lecture figure, Lesson 1."},
b:`<p>Glucose, fructose, galactose and mannose are all hexoses with the formula C₆H₁₂O₆, yet they are different molecules. The arrangement of the C, H and O differs in each.</p>
<p><b>Isomers</b> are substances that have identical molecular formulas but different structures.</p>
<table><tr><th>Type</th><th>Same</th><th>Different</th></tr>
<tr><td>Structural isomers</td><td>Chemical formula</td><td>The atoms are bonded in different ways. Example: glucose and fructose.</td></tr>
<tr><td>Stereoisomers</td><td>Chemical formula and bonds</td><td>Arrangement relative to space. Example: D-glucose and L-glucose.</td></tr></table>
<p>D-glucose and L-glucose are mirror images of one another, the right-handed and left-handed sugars. Your two hands are the same: made of the same substances, bound in the same manner, but mirrors of one another, and they do not align no matter how you rotate them.</p>
<p>Most of the glucose in living organisms exists as D-glucose, and the enzymes we use to metabolize glucose only recognize and act on this form.</p>`,
so:"Structural isomers are bonded differently. Stereoisomers have the same bonds in a mirrored arrangement."},

{id:"m4-aldket",h:"Aldoses, ketoses and rings",
img:{src:"lectures/biochem-exam2/img/m4/file-6324bc11b3365.webp",alt:"A carbonyl group, an aldehyde and a ketone, then two 3-carbon sugars: an aldose with the carbonyl at the end and a ketose with the carbonyl in the middle carbon",credit:"Lecture figure, Lesson 1."},
b:`<p>Most biologically important monosaccharides contain either an aldehyde or a ketone group, but not both. Both groups contain a carbonyl (C=O), in different places.</p>
<ul><li><b>Aldehyde:</b> the carbonyl is attached to a carbon at the end of the carbon chain. A sugar with an aldehyde is an <b>aldose</b>.</li>
<li><b>Ketone:</b> the carbonyl is attached within the carbon chain. A sugar with a ketone is a <b>ketose</b>.</li></ul>
<p>The two sugars on the right of the figure both have 3 carbons and the same formula, so they are isomers. The one with the carbonyl at the end is an aldotriose. The one with the carbonyl between two carbons is a ketotriose.</p>
<p>From the lecture's check: glucose is an aldose, fructose is a ketose and galactose is an aldose.</p>
<p>A monosaccharide can also alternate between two isomeric forms, a linear chain and a ring. In the chain form, the carbonyl reacts with a hydroxyl group (O-H) in the same carbon chain, which closes the ring. You don't need to recall the reaction. In solutions like those in the body this cyclization occurs automatically, so the carbohydrates in food and in our cells exist in the ring structure.</p>`,
so:"Carbonyl at the end makes an aldose, inside the chain a ketose. In the body, sugars are rings."}
],
"4.2":[
// ---------------- L2 Glucose Metabolism and Glycolysis Phase I ----------------
{id:"m4-map",h:"The glucose pathways",
img:{src:"lectures/biochem-exam2/img/m4/file-6331a77501a54.webp",alt:"The four steps of cellular respiration from top to bottom: glycolysis in the cytoplasm, pyruvate oxidation and the citric acid cycle in the mitochondrial matrix, electron transport and ATP synthesis at the inner mitochondrial membrane",credit:"Lecture figure, Lesson 2."},
b:`<p>Every cell in the body can use glucose to make ATP. The lecture sorts the pathways that handle glucose into three groups.</p>
<table><tr><th>Group</th><th>Pathways</th><th>ATP</th></tr>
<tr><td>Catabolism (breakdown)</td><td>Glycolysis, pyruvate oxidation, citric acid cycle, oxidative phosphorylation</td><td>Makes ATP</td></tr>
<tr><td>Anabolism (synthesis)</td><td>Gluconeogenesis, pentose phosphate pathway</td><td>Requires ATP</td></tr>
<tr><td>Storage</td><td>Glycogenesis stores glucose as glycogen. Glycogenolysis breaks the glycogen back down.</td><td>Storing requires ATP</td></tr></table>
<p>Glucose can be broken down with or without oxygen. When oxygen is used, the process is called <b>cellular respiration</b>. It has four steps, in this order:</p>
<ol><li>Glycolysis, in the cytoplasm</li>
<li>Pyruvate oxidation, in the mitochondrial matrix</li>
<li>Citric acid cycle, in the mitochondrial matrix</li>
<li>Oxidative phosphorylation, at the inner mitochondrial membrane</li></ol>
<p>The last box in the figure (CO₂ and H₂O) shows the products. It is not a fifth step.</p>
<p>Glycolysis itself can run either way. With oxygen it is called aerobic glycolysis, and without oxygen it is anaerobic glycolysis. Aerobic glycolysis is preferred because it produces significantly more ATP. Without oxygen the cell gets only 2 ATP per glucose.</p>`,
nl:"Lecture numbers",note:`The aerobic total is given as 32 ATP per glucose in this lesson and 36 in the next. Either way it is far above the 2 ATP made without oxygen.`,
so:"Catabolism makes ATP. Anabolism and storage require it."},

{id:"m4-slp",h:"Substrate-level phosphorylation",
img:{src:"lectures/biochem-exam2/img/m4/file-6331a79cbf22c.webp",alt:"An enzyme holding a phosphorylated substrate and ADP, then releasing the product and ATP",credit:"Lecture figure, Lesson 2."},
b:`<p>Glycolysis makes its ATP by <b>substrate-level phosphorylation</b>: a high-energy phosphate group is transferred from a substrate directly to ADP.</p>
<p>The name separates it from oxidative phosphorylation, which makes ATP through electron transfer in the mitochondria.</p>
<p>In glycolysis it happens at two steps, both in Phase II:</p>
<ul><li>Step 7: phosphoglycerate kinase converts 1,3-bisphosphoglycerate (1,3-BPG) to 3-phosphoglycerate, producing ATP.</li>
<li>Step 10: pyruvate kinase converts phosphoenolpyruvate (PEP) to pyruvate, producing ATP.</li></ul>
<p>Kinases move phosphate groups between molecules. Hexokinase and phosphofructokinase-1 are kinases as well, but they take the phosphate from ATP, so those steps use ATP.</p>`,
so:"Phosphate goes from a substrate straight to ADP, at steps 7 and 10."},

{id:"m4-phases",h:"Two phases and three rate-limiting steps",
img:{src:"lectures/biochem-exam2/img/m4/file-6331a80c06b4f.webp",alt:"The ten steps of glycolysis from glucose to two pyruvate, with the enzyme for each step and the ATP and NADH used or made",credit:"Lecture figure, Lesson 2."},
b:`<p>Glycolysis breaks one glucose into two pyruvate. It takes place in the cytoplasm, in 10 steps that proceed in one direction.</p>
<p>Three of the ten steps are rate-limiting:</p>
<ul><li>Step 1, hexokinase</li>
<li>Step 3, phosphofructokinase-1 (PFK-1)</li>
<li>Step 10, pyruvate kinase</li></ul>
<p>The ten steps are divided into two phases.</p>
<table><tr><th>Phase</th><th>What happens</th><th>ATP</th></tr>
<tr><td>Phase I, steps 1 to 5</td><td>The ATP-requiring (investment) phase. One glucose (a hexose, 6 carbons) is cleaved into two phosphorylated trioses (3 carbons each). ATP provides the phosphates.</td><td>2 used</td></tr>
<tr><td>Phase II, steps 6 to 10</td><td>The ATP-generating (payoff) phase. The two trioses are oxidized and then transfer their phosphates to ADP.</td><td>4 produced</td></tr></table>
<p>Breaking down one glucose uses 2 ATP and produces 4 ATP, so the net gain is 2 ATP.</p>
<p>Two of the rate-limiting steps (1 and 3) are in Phase I. Step 10 is in Phase II.</p>`,
so:"Ten steps, 2 ATP in, 4 ATP out, rate-limiting at steps 1, 3 and 10."},

{id:"m4-ph1",h:"Phase I step by step",
img:{src:"lectures/biochem-exam2/img/m4/file-6331ff8ecaaf5.webp",alt:"Steps 1 to 5 of glycolysis: glucose, glucose 6-phosphate, fructose 6-phosphate, fructose 1,6-bisphosphate, then glyceraldehyde 3-phosphate and dihydroxyacetone phosphate, with the enzyme for each step",credit:"Lecture figure, Lesson 2."},
b:`<p>Phase I is steps 1 to 5. The lecture calls each step by its enzyme. You are not responsible for the structures.</p>
<ol><li><b>Hexokinase</b> (rate-limiting). Transfers a phosphate from ATP to glucose to produce glucose-6-phosphate (G6P). Uses 1 ATP.</li>
<li><b>Phosphoglucose isomerase</b>. Rearranges G6P into its isomer, fructose-6-phosphate (F6P).</li>
<li><b>Phosphofructokinase-1</b> (rate-limiting). Transfers a phosphate from ATP to F6P to form fructose-1,6-bisphosphate (F1,6BP). Uses 1 ATP.</li>
<li><b>Aldolase</b>. Splits the 6-carbon F1,6BP into two 3-carbon sugars, dihydroxyacetone phosphate (DHAP) and glyceraldehyde-3-phosphate (G3P).</li>
<li><b>Triose phosphate isomerase</b>. Converts DHAP into G3P.</li></ol>
<p>DHAP and G3P are isomers, but only G3P can serve as the substrate for the next step. That is the reason for step 5, and it is why the phase ends with two G3P.</p>
<p>In summary, 2 ATP are used to form a 6-carbon sugar with two phosphates, and that sugar is split into two 3-carbon isomers.</p>`,
nl:"Lecture wording",note:`The figure labels the step 2 enzyme phosphohexose isomerase. The text and the knowledge check call it phosphoglucose isomerase. It is one enzyme with two names.`,
so:"ATP is used at steps 1 and 3. The split is at step 4."},

{id:"m4-hkgk",h:"Hexokinase and glucokinase",
img:{src:"lectures/biochem-exam2/img/m4/image-6331aa363b663.webp",alt:"Enzyme activity against glucose concentration. Hexokinase rises steeply and levels off at a low Vmax. Glucokinase rises gradually to a higher Vmax.",credit:"Lecture figure, Lesson 2."},
b:`<p>Step 1 transfers a phosphate from ATP to glucose to form G6P. Phosphorylation commits glucose to being metabolized. G6P cannot leave the cell, because no membrane transporter carries it, and the reaction is irreversible, so G6P cannot be converted back to glucose.</p>
<p>Two enzymes catalyze this reaction. <b>Hexokinase</b> does it in nearly all the cells in the body. Its isoform <b>glucokinase</b> does it in the liver. They differ in their affinity for glucose and in their maximum reaction rate (Vmax).</p>
<table><tr><th></th><th>Hexokinase</th><th>Glucokinase</th></tr>
<tr><td>Where</td><td>Nearly all cells</td><td>Liver</td></tr>
<tr><td>Affinity for glucose</td><td>High. It acts on glucose as soon as it enters the cell, even in low quantities.</td><td>Low. Glucose has to build up in the cell before it is acted on.</td></tr>
<tr><td>Vmax</td><td>Lower, so the reaction is slower</td><td>Higher, so glucose is converted rapidly once the enzyme is active</td></tr>
<tr><td>Result for the cell</td><td>Glucose can be used for energy any time it is present</td><td>The liver does not use up glucose for energy and can store it rapidly when needed</td></tr></table>
<p>On the graph, hexokinase climbs steeply and flattens at a low Vmax while glucose is still scarce. Glucokinase keeps rising as glucose increases and reaches a higher Vmax.</p>`,
nl:"Lecture wording",note:`The hotspot text says hexokinase has a "higher Km (affinity)" for glucose. Km and affinity run in opposite directions: a low Km means a high affinity. Hexokinase has the high affinity and the low Km, which is what the lecture's graph shows.`,
so:"Hexokinase: everywhere, binds glucose readily, slow. Glucokinase: liver, waits for glucose to build up, fast."},

{id:"m4-reg1",h:"Regulation of Phase I",
img:{src:"lectures/biochem-exam2/img/m4/file-6331afce5858d.webp",alt:"Fructose 6-phosphate plus ATP going to fructose 1,6-bisphosphate plus ADP, with ATP and citrate marked as inhibitors and AMP, ADP and fructose 2,6-bisphosphate marked as activators",credit:"Lecture figure, Lesson 2."},
b:`<p>Phase I is regulated at its two rate-limiting enzymes, hexokinase and PFK-1. Both are controlled by allosteric regulation through feedback inhibition.</p>
<p><b>Hexokinase</b> is inhibited by its own product, G6P. If G6P builds up, it binds hexokinase and G6P production slows. Step 1 uses ATP, so slowing it when there is already plenty of G6P saves ATP.</p>
<p><b>Glucokinase</b> is not inhibited by G6P. The liver can keep making G6P because it can store the G6P as glycogen.</p>
<p><b>PFK-1</b> is the most highly regulated enzyme in glycolysis. Hexokinase is only inhibited. PFK-1 can be inhibited or activated.</p>
<ul><li><b>Inhibitors:</b> ATP, citrate, phosphoenolpyruvate (PEP). These are products of glycolysis or the citric acid cycle, so high levels mean the cell has ample energy.</li>
<li><b>Activators:</b> AMP, fructose-2,6-bisphosphate (F2,6BP).</li></ul>
<p>AMP is a more sensitive regulator than ATP. ATP is always abundant, while AMP is normally very low because it is rapidly converted to ADP. When AMP builds up, too much ATP has been spent.</p>
<p>F2,6BP is made in a parallel pathway. Phosphofructokinase-2 (PFK-2) turns F6P, which is also the substrate of PFK-1, into F2,6BP. A high concentration of F6P therefore produces F2,6BP, and F2,6BP tells PFK-1 to speed up.</p>
<p>From the lecture's check: G6P inhibits glycolysis, AMP activates it, F2,6BP activates it and PEP inhibits it.</p>`,
nl:"Lecture figure",note:`The figure shows ADP next to AMP as an activator and leaves out phosphoenolpyruvate. Use the list in the text: ATP, citrate and PEP inhibit; AMP and F2,6BP activate.`,
so:"G6P inhibits hexokinase. ATP, citrate and PEP inhibit PFK-1. AMP and F2,6BP activate it."},

// ---------------- L3 Glycolysis Phase II and Pyruvate Oxidation ----------------
{id:"m4-ph2",h:"Phase II step by step",
img:{src:"lectures/biochem-exam2/img/m4/file-6331ffa9630f3.webp",alt:"Steps 6 to 10 of glycolysis from two glyceraldehyde 3-phosphate to two pyruvate, with NAD+ to NADH at step 6, ADP to ATP at steps 7 and 10 and water released at step 9",credit:"Lecture figure, Lesson 3."},
b:`<p>Two coenzymes work in Phase II and in pyruvate oxidation. Coenzymes are recycled, so they can support another reaction.</p>
<ul><li><b>NAD</b> carries high-energy electrons by alternating between NAD⁺ and NADH. Its function is to gain or lose electrons that are transferred during redox reactions. In glycolysis, glucose is oxidized by removing hydrogen atoms, and NAD accepts the electrons. NAD⁺ is the low-energy, uncharged form and NADH the high-energy, charged form. You are not responsible for their structures.</li>
<li><b>Coenzyme A (CoA)</b> is the acetyl group carrier. It moves an acetyl group from a substrate onto itself, or the reverse, using a sulfur group.</li></ul>
<p>Phase II is steps 6 to 10, the ATP-generating phase. It starts with the two G3P made from one glucose in Phase I, and both run through these steps in parallel. ATP is formed at two separate times, so Phase II gains 4 ATP. After the 2 spent in Phase I, glycolysis nets 2 ATP. Phase II also makes NADH. You are not responsible for the structures.</p>
<ol start="6"><li><b>Glyceraldehyde-3-phosphate dehydrogenase</b>. G3P to 1,3-bisphosphoglycerate (1,3-BPG), in two parts: a hydrogen is removed and transferred to NAD⁺, forming NADH, then a free phosphate from the cytosol is attached.</li>
<li><b>Phosphoglycerate kinase</b>. The phosphate is transferred from 1,3-BPG to ADP to form ATP, the first ATP. With one phosphate left, 1,3-BPG becomes 3-phosphoglycerate.</li>
<li><b>Phosphoglycerate mutase</b>. 3-phosphoglycerate to 2-phosphoglycerate. The phosphate is moved over to prepare for the next step.</li>
<li><b>Enolase</b>. 2-phosphoglycerate to the unstable phosphoenolpyruvate (PEP). Water is formed and released.</li>
<li><b>Pyruvate kinase</b> (rate-limiting). The final phosphate on PEP goes to ADP, forming pyruvate and the second ATP. The reaction is irreversible.</li></ol>`,
nl:"Lecture wording",note:`The summary line says the 2 G3P are used to form two ATP "for a net of 4 ATP". It means two ATP from each G3P. The step 8 line says 3-phosphoglycerase and 2-phosphoglycerase; it means 3- and 2-phosphoglycerate.`,
so:"NADH comes from step 6. ATP comes from steps 7 and 10. Step 10 is rate-limiting."},

{id:"m4-reg2",h:"Regulation of pyruvate kinase",
img:{src:"lectures/biochem-exam2/img/m4/file-6331d9c8761bc.webp",alt:"Phosphoenolpyruvate plus ADP going to pyruvate plus ATP by pyruvate kinase, with citrate, ATP and alanine as inhibitors and fructose 1,6-bisphosphate and PEP as activators",credit:"Lecture figure, Lesson 3."},
b:`<p>The conversion of PEP to pyruvate by pyruvate kinase is irreversible and highly regulated. Like PFK-1, pyruvate kinase has allosteric activators and allosteric inhibitors.</p>
<ul><li><b>Activators:</b> fructose-1,6-bisphosphate (F1,6BP) and phosphoenolpyruvate (PEP).</li>
<li><b>Inhibitors:</b> ATP, citrate and alanine.</li></ul>
<p>F1,6BP is made in step 3, earlier in glycolysis. Regulating an enzyme that appears later in the series is <b>feedforward stimulation</b>. If F1,6BP builds up in the cytosol, it signals pyruvate kinase to speed up, which speeds the later steps when the earlier steps are producing a lot of product. PEP, the product of step 9, works the same way.</p>
<p>ATP inhibits at high concentrations, because it is beneficial to slow the breakdown of carbohydrates when the cell has plenty of energy. High citrate, a product of the citric acid cycle, means the cycle is producing plenty of energy. High alanine, an intermediate in a pathway that creates new glucose, indicates in some cells that the cell must make glucose and therefore not break it down.</p>
<p>From the lecture's check:</p>
<ul><li>ATP activates phosphofructokinase: false.</li>
<li>F1,6BP activates pyruvate kinase to increase the rate of glycolysis: true.</li>
<li>A large concentration of ADP will slow glycolysis: false.</li>
<li>Intermediates regulate glycolytic enzymes through both feedback and feedforward mechanisms: true.</li>
<li>Regulation occurs in both Phase I and Phase II: true.</li>
<li>All reactions in glycolysis are irreversible: false.</li></ul>`,
nl:"Lecture wording",note:`The citrate line says citrate is produced inside the mitochondria "where pyruvate kinase is located". Pyruvate kinase is a glycolysis enzyme, and glycolysis occurs in the cytoplasm. What to know about citrate: high levels mean the citric acid cycle is producing plenty of energy.`,
so:"F1,6BP and PEP speed pyruvate kinase up (feedforward). ATP, citrate and alanine slow it."},
{drill:"m4d3"},

{id:"m4-pdh",h:"Pyruvate oxidation",
img:{src:"lectures/biochem-exam2/img/m4/image-6331f9705df37.webp",alt:"Oxidation of pyruvate in three numbered steps: a carboxyl group leaves as carbon dioxide, NAD+ is reduced to NADH, and the acetyl group is transferred to coenzyme A",credit:"Lecture figure, Lesson 3."},
b:`<p>Pyruvate from glycolysis has two possible paths. If oxygen is available, it is oxidized, moves into the mitochondria and enters the citric acid cycle, where aerobic metabolism continues. If oxygen is not available, it is metabolized anaerobically (next lesson).</p>
<p>The goal of pyruvate oxidation is to turn pyruvate into a suitable substrate for the citric acid cycle. Glycolysis occurs in the cytoplasm and the citric acid cycle in the mitochondria. Pyruvate passes through the mitochondrial membrane using a protein transporter, and pyruvate oxidation occurs once it is inside.</p>
<p>Pyruvate oxidation is catalyzed by a single enzyme, <b>pyruvate dehydrogenase</b>, in three steps:</p>
<ol><li><b>Decarboxylation.</b> A carboxyl group is removed from pyruvate and released as CO₂, which travels in the blood to the lungs and is exhaled.</li>
<li><b>Oxidation.</b> The remaining 2-carbon molecule is oxidized. The electrons released are picked up by NAD⁺, which is reduced to NADH.</li>
<li><b>Transfer.</b> The acetyl group is transferred onto a sulfur within coenzyme A, producing acetyl CoA.</li></ol>
<p>One glucose makes two pyruvates, so for every glucose that enters glycolysis, this pathway runs twice.</p>`,
nl:"Lecture wording",note:`The decarboxylation hotspot also says an oxygen molecule from the environment is consumed in this step. No oxygen is used in this step. It removes a carboxyl group and releases it as CO₂.`,
so:"Pyruvate dehydrogenase: CO₂ off, NAD⁺ to NADH, acetyl onto CoA. Twice per glucose."},

{id:"m4-anaer",h:"Without oxygen: lactate",
img:{src:"lectures/biochem-exam2/img/m4/file-6331ffc963dcd.webp",alt:"Glucose through glycolysis turns 2 NAD+ into 2 NADH and makes net 2 ATP and 2 pyruvate; lactic acid fermentation turns the 2 NADH back into 2 NAD+ and makes 2 lactic acid, with an arrow returning the NAD+ to glycolysis",credit:"Lecture figure, Lesson 3."},
b:`<p>When oxygen is not present, pyruvate is metabolized by anaerobic glycolysis, also called lactic acid fermentation, or fermentation. ATP is only generated through glycolysis, so only 2 ATP are made, which is much less efficient.</p>
<p>The reactions of glycolysis do not require oxygen, but they do require NAD⁺. Glycolysis consumes NAD⁺ and creates NADH. In aerobic respiration the NADH is converted back to NAD⁺ and used again. When aerobic respiration cannot proceed, NADH is not recycled, and without NAD⁺ glycolysis cannot proceed.</p>
<p><b>Lactate dehydrogenase</b> converts pyruvate to lactate, using NADH and thereby regenerating NAD⁺. It is highly regulated, because when oxygen is available we don't want to turn all our pyruvate into lactate.</p>
<p>Most cells can't metabolize lactate into a usable substrate. Cells that produce it release it into the blood to travel to the liver, where it can be used.</p>
<ul><li><b>Red blood cells</b> do not contain mitochondria, so they don't use the oxygen they carry. Anaerobic glycolysis is the only way they get energy.</li>
<li><b>Exercising skeletal muscle</b> uses so much ATP that oxygen can't get there quickly enough, so pyruvate is metabolized anaerobically.</li></ul>
<table><tr><th></th><th>Anaerobic</th><th>Aerobic</th></tr>
<tr><td>Oxygen</td><td>Occurs without oxygen</td><td>Uses oxygen</td></tr>
<tr><td>Pyruvate</td><td>Forms lactate, only recycles NAD⁺</td><td>Pyruvate oxidation</td></tr>
<tr><td>Energy</td><td>Less efficient</td><td>More efficient</td></tr></table>`,
nl:"Lecture wording",note:`Aerobic metabolism is given as 36 ATP here and 32 in Lesson 2. The regulation line says pyruvate or ADP increase "the activity of lactate." It means lactate dehydrogenase.`,
so:"No oxygen: lactate dehydrogenase turns pyruvate into lactate to get NAD⁺ back. Only 2 ATP."},
// ---------------- L4 Glycogen Metabolism ----------------
{id:"m4-glystr",h:"Glycogen structure",
img:{src:"lectures/biochem-exam2/img/m4/image-63320ca336cf3.webp",alt:"A branched glycogen molecule, with a close-up showing the alpha 1,4 glycosidic bonds along a chain and an alpha 1,6 glycosidic bond where a branch starts",credit:"Lecture figure, Lesson 4."},
b:`<p>In animals, glucose is stored in a large polysaccharide called glycogen, so the body has enough glucose available between meals.</p>
<p>Glycogen is a homogeneous polymer of glucose: it consists only of glucose molecules covalently bound to one another. The glucose is organized in linear chains with occasional branches. The branches make it a great energy storage molecule, because they allow rapid access to many glucose molecules.</p>
<p>The bonds between the glucose molecules are glycosidic bonds (glyco- meaning sugar, -sidic meaning a bond between two molecules). They are numbered by where they sit on each glucose. Two types matter in glycogen:</p>
<ul><li><b>α-(1,4)-glycosidic bonds</b> link glucose into the linear chains.</li>
<li><b>α-(1,6)-glycosidic bonds</b> link glucose to form the branches.</li></ul>`,
so:"Chains are α-(1,4). Branches are α-(1,6). Branches give rapid access to glucose."},

{id:"m4-tissue",h:"Liver, muscle and the two hormones",
img:{src:"lectures/biochem-exam2/img/m4/file-6332100791d60.webp",alt:"Glycogen and glucose in liver cells. Insulin drives glycogenesis, glycogen formation, and glucagon drives glycogenolysis, glycogen breakdown.",credit:"Lecture figure, Lesson 4."},
b:`<p>There are two major reasons glucose is stored as glycogen, and they belong to two different tissues.</p>
<table><tr><th></th><th>Liver</th><th>Skeletal muscle</th></tr>
<tr><td>Why it stores glycogen</td><td>So glucose is available to other tissues when blood sugar is low</td><td>To meet the cell's own direct energy needs</td></tr>
<tr><td>Glucose released into the blood?</td><td>Yes. The liver is the only tissue that can use glycogen for this.</td><td>No. Only the muscle cell itself can use the glucose.</td></tr></table>
<p>Glycogen stores energy for later release, so cells both build it and break it down, balanced to the energy needs of the cells and the individual.</p>
<ul><li><b>Glycogenesis</b> is the synthesis of glycogen.</li>
<li><b>Glycogenolysis</b> is the degradation, or breakdown, of glycogen.</li></ul>
<p>In the liver, these processes are regulated by two hormones.</p>
<ul><li><b>Insulin</b> directs the body to store glucose in glycogen. When blood sugar is high, it stimulates glycogenesis and inhibits glycogenolysis.</li>
<li><b>Glucagon</b> directs the body to break down glycogen. When blood sugar is low, it inhibits glycogenesis and stimulates glycogenolysis.</li></ul>`,
so:"Liver glycogen supplies the blood. Muscle glycogen supplies the muscle. Insulin builds glycogen and glucagon breaks it down."},

{id:"m4-states",h:"Fed, fasting, starvation",
img:{src:"lectures/biochem-exam2/img/m4/file-633211f4db6d4.webp",alt:"Glucose oxidized over time. Ingested glucose drops off within a few hours, glycogenolysis peaks early in fasting and is gone by about a day, and gluconeogenesis rises through fasting and continues for days into the starved state.",credit:"Lecture figure, Lesson 4."},
b:`<p>Liver glycogen is an easy-to-mobilize reservoir of glucose that maintains blood sugar as it rises and falls over a 24-hour period. The liver can maintain blood glucose through glycogen metabolism alone only for the short term. The body passes through three metabolic states.</p>
<table><tr><th>State</th><th>When and what happens</th></tr>
<tr><td><b>Fed</b> (absorptive, postprandial)</td><td>Immediately after eating, lasting about 2 hours. Digestion and absorption raise blood sugar. The pancreas releases insulin, and cells take up glucose from the blood and use it or store it (in liver and skeletal muscle).</td></tr>
<tr><td><b>Fasting</b> (post-absorptive)</td><td>Begins about 2 hours after a meal. Blood sugar falls. Insulin decreases and glucagon increases. Glucagon has liver cells stop building glycogen and start breaking it down, and the glucose is released into the blood for other tissues. This continues until the next meal, or until liver glycogen is depleted, which takes about 24 hours.</td></tr>
<tr><td><b>Starvation</b></td><td>After as little as 24 hours. Cells begin using fuels other than glucose, and the liver builds new glucose by gluconeogenesis.</td></tr></table>
<p>The graph shows where oxidized glucose comes from over time. Ingested glucose falls off within a few hours of the meal. Glycogenolysis rises early in fasting and is gone by about a day. Gluconeogenesis rises through fasting and carries on into the starved state.</p>
<p>From the lecture's check:</p>
<ul><li>Blood sugar rises: fed state.</li>
<li>Glucagon levels rise: fasting state.</li>
<li>Glucose is taken up from the blood: fed state.</li>
<li>Glycogen is broken down: fasting state.</li>
<li>Insulin levels decrease: fasting state.</li></ul>`,
nl:"Lecture wording",note:`The starvation paragraph says the liver builds new glucose from fatty acids. Lesson 5 lists the starting molecules for gluconeogenesis as amino acids, lactate and glycerol.`,
so:"Fed: insulin, glucose stored. Fasting: glucagon, liver glycogen broken down. Starvation: gluconeogenesis."},

{id:"m4-genesis",h:"Glycogenesis in the liver",
img:{src:"lectures/biochem-exam2/img/m4/image-633219156fcc5.webp",alt:"The glycogen cycle. Glucose becomes glucose 6-phosphate, then glucose 1-phosphate by phosphoglucomutase, then UDP-glucose using UTP, which glycogen synthase adds to glycogen under insulin. On the other side, glycogen phosphorylase, stimulated by glucagon and epinephrine, releases glucose 1-phosphate.",credit:"Lecture figure, Lesson 4."},
b:`<p>During the fed state, insulin stimulates liver cells (hepatocytes) to import glucose from the blood. In the cytoplasm, glucokinase converts the glucose to glucose-6-phosphate (G6P). G6P cannot cross the cell membrane, so it is now stuck inside the cell.</p>
<p>G6P would normally go through glycolysis to make ATP. In the fed state, though, ATP builds up in the hepatocyte and halts glycolysis. The G6P needs somewhere to go, so the hepatocyte stores it as glycogen instead of oxidizing it for energy. This is glycogenesis. It has five steps, and you won't need to know all of them. The parts to know:</p>
<ol><li><b>G6P to G1P.</b> Phosphoglucomutase forms glucose-1-phosphate (G1P) from G6P. G6P cannot be added to glycogen chains, but G1P can.</li>
<li><b>UDP is attached to G1P</b> to form UDP-glucose. The UDP comes from uridine triphosphate (UTP), which functions similarly to ATP.</li>
<li><b>Glycogen is formed.</b> UDP-glucose is attached to glycogenin, which serves as a foundation that can be built upon. Glucose is added one by one, forming long linear chains. Last, branches are added to store more glucose in a small space.</li></ol>
<p>Glycogen synthase is the key enzyme responsible for glycogen synthesis, and it is rate-limiting.</p>
<p>From the lecture's check:</p>
<ul><li>UDP-glucose is the main donor of glucose during the synthesis of glycogen: true.</li>
<li>The rate-limiting enzymes in glycogen synthesis and degradation are glycogen synthase and glycogen phosphorylase: true.</li></ul>`,
nl:"Lecture wording",note:`The text says insulin activates a key enzyme of the pathway, phosphoglucomutase. The muscle section and the knowledge check name glycogen synthase as the key, rate-limiting enzyme of glycogen synthesis.`,
so:"G6P becomes G1P, G1P picks up UDP, and UDP-glucose is built onto glycogenin. Glycogen synthase is rate-limiting."},

{id:"m4-lysis",h:"Glycogenolysis, and how muscle differs",
img:{src:"lectures/biochem-exam2/img/m4/file-63321d07a2ad6.webp",alt:"Glycogen phosphorylase adds a phosphate to the end glucose of a glycogen chain, releasing glucose 1-phosphate and leaving the glycogen one residue shorter",credit:"Lecture figure, Lesson 4."},
b:`<p>Glycogenolysis is the reverse of glycogenesis. As blood glucose falls, the pancreas releases glucagon, and the hepatocyte stops storing glucose and starts releasing it into the blood.</p>
<p>The one part of glycogenolysis to know is catalyzed by <b>glycogen phosphorylase</b>, which is activated in the presence of glucagon. It breaks down glycogen by adding a phosphate to the glucose molecule on the end, creating a free G1P molecule. The G1P can be converted back into glucose and released from the cell. Glycogen phosphorylase is the rate-limiting enzyme of glycogen degradation.</p>
<p>Skeletal muscle cells (myocytes) handle glycogen differently from the liver.</p>
<table><tr><th></th><th>Liver</th><th>Skeletal muscle</th></tr>
<tr><td>Glycogen used for</td><td>Releasing glucose into the blood</td><td>Only the cell's own energy needs</td></tr>
<tr><td>Glucose to G6P</td><td>Glucokinase</td><td>Hexokinase</td></tr>
<tr><td>Key enzyme of synthesis</td><td>Glycogen synthase</td><td>Glycogen synthase</td></tr>
<tr><td>Glucose-6-phosphatase</td><td>Present</td><td>Absent, so glucose cannot be released from the cell</td></tr></table>
<p>From the lecture's check:</p>
<ul><li>Degradation of glycogen usually produces more glucose than glucose-1-phosphate: false.</li>
<li>Glucose-6-phosphate stimulates glycogen synthesis: true.</li>
<li>Exercise increases glycogen synthesis: false.</li></ul>`,
nl:"Lecture wording",note:`The muscle section says skeletal muscle lacks glucose-6-phosphatase, "so it is not able to convert G1P back into G6P." Glucose-6-phosphatase converts G6P to glucose (Lesson 5). Without it, muscle cannot release glucose from the cell.`,
so:"Glycogen phosphorylase frees G1P and is rate-limiting. Muscle uses hexokinase and has no glucose-6-phosphatase."},
// ---------------- L5 Gluconeogenesis and Blood Sugar Regulation ----------------
{id:"m4-gng",h:"Gluconeogenesis",
img:{src:"lectures/biochem-exam2/img/m4/file-63320dcb552d5.webp",alt:"Liver and muscle. In muscle, glucose goes through glycolysis to lactate. The lactate travels to the liver, where gluconeogenesis turns it back into glucose that returns to the muscle. Fatty acids broken down in the liver supply the ATP for gluconeogenesis, and each tissue also stores glucose as glycogen.",credit:"Lecture figure, Lesson 4."},
b:`<p>Glycogenolysis can maintain blood glucose for only about a day. After that, cells still need a source of ATP, and the body keeps ATP production going by making glucose or by using other metabolic intermediates.</p>
<p>In <b>gluconeogenesis</b>, glucose is created from other molecules such as amino acids, lactate and glycerol. These molecules come from other metabolic pathways, specifically β-oxidation and protein catabolism.</p>
<p>Only a few tissues are capable of making new glucose. The lecture focuses on the liver.</p>
<ul><li>Gluconeogenesis is activated in the presence of glucagon.</li>
<li>It is an anabolic pathway. Minus a few exceptions, it is essentially the reverse of glycolysis (a catabolic pathway), and it even uses some of the same enzymes.</li>
<li>It is energy expensive, so it is highly regulated. Gluconeogenesis and glycolysis do not occur at the same time.</li></ul>
<p>The most important point of regulation is the reaction catalyzed by <b>PEP carboxykinase</b>, which converts oxaloacetate to PEP. The enzyme is regulated primarily by glucagon. Glucagon is released by the pancreas when blood glucose is low, so it makes sense that glucagon stimulates gluconeogenesis to increase the blood glucose concentration.</p>
<p>The figure shows one of the starting molecules: lactate made by glycolysis in muscle travels to the liver, where gluconeogenesis turns it back into glucose.</p>`,
nl:"Lecture wording",note:`The lecture also lists skeletal muscle, with the kidneys, as able to make new glucose. Skeletal muscle lacks glucose-6-phosphatase, the final enzyme of the pathway (next lesson), so it cannot release new glucose.`,
so:"New glucose from amino acids, lactate and glycerol, mainly in the liver, switched on by glucagon at PEP carboxykinase."},
{id:"m4-bypass",h:"The bypass steps",
img:{src:"lectures/biochem-exam2/img/m4/file-633b86a5289c8.webp",alt:"Glycolysis in red running down and gluconeogenesis in blue running up through the same intermediates, with the three gluconeogenesis bypass steps boxed: glucose 6-phosphatase, fructose 1,6-bisphosphatase, and pyruvate carboxylase with PEP carboxykinase through oxaloacetate",credit:"Lecture figure, Lesson 5."},
b:`<p>A few reactions of glycolysis are irreversible: the enzyme cannot catalyze the reverse reaction, product back to substrate. To get around the three irreversible steps, gluconeogenesis uses four enzymes that are not involved in glycolysis. In total, gluconeogenesis has 11 steps and forms one glucose from 2 pyruvate.</p>
<table><tr><th>Glycolysis enzyme</th><th>Bypassed in gluconeogenesis by</th></tr>
<tr><td>Pyruvate kinase</td><td>Pyruvate carboxylase, then PEP carboxykinase</td></tr>
<tr><td>Phosphofructokinase-1</td><td>Fructose-1,6-bisphosphatase</td></tr>
<tr><td>Hexokinase</td><td>Glucose-6-phosphatase</td></tr></table>
<ol><li><b>Pyruvate to PEP.</b> Pyruvate kinase cannot convert pyruvate back into PEP, so two different enzymes do it. Pyruvate carboxylase converts pyruvate into oxaloacetate. PEP carboxykinase then converts oxaloacetate to PEP.</li>
<li><b>F1,6BP to F6P.</b> The PEP is converted to fructose-1,6-bisphosphate by the glycolytic enzymes acting in reverse: enolase, phosphoglycerate mutase, phosphoglycerate kinase, glyceraldehyde-3-phosphate dehydrogenase, triose phosphate isomerase and aldolase. Fructose-1,6-bisphosphatase then removes one phosphate to give fructose-6-phosphate.</li>
<li><b>G6P to glucose.</b> Phosphohexose isomerase, in reverse, converts F6P to G6P. Glucose-6-phosphatase catalyzes the final step, G6P to glucose. The new glucose can leave the cell and enter the bloodstream to be used by other tissues.</li></ol>
<p>Glucose-6-phosphatase is not found in skeletal muscle.</p>`,
so:"Pyruvate carboxylase and PEP carboxykinase replace pyruvate kinase. Fructose-1,6-bisphosphatase replaces PFK-1. Glucose-6-phosphatase replaces hexokinase."},
{drill:"m4d2"}

],
"4.4":[
// ---------------- L5 Gluconeogenesis and Blood Sugar Regulation ----------------
{id:"m4-timeline",h:"Keeping blood sugar up",
img:{src:"lectures/biochem-exam2/img/m4/file-633b8387aeb10.webp",alt:"Glucose oxidized over time. Ingested glucose drops off within a few hours, glycogenolysis peaks early in fasting and is gone by about a day, and gluconeogenesis rises through fasting and continues for days into the starved state.",credit:"Lecture figure, Lesson 5."},
b:`<p>After about 24 hours without food, all the glycogen stores in the liver are depleted. The liver begins to make glucose well before that, so blood glucose never falls too low.</p>
<ul><li><b>About 12 to 18 hours after the last meal</b>, glycogenolysis and gluconeogenesis contribute nearly equally to maintaining blood sugar.</li>
<li><b>After a whole day without food</b>, a state of starvation, gluconeogenesis is the only way to maintain blood glucose.</li></ul>
<p>At that point it becomes really important to obtain food. When the body runs low on substrates for gluconeogenesis, blood sugar can drop (hypoglycemia). Glucose is the major fuel for cells throughout the body, so a significant decrease in blood glucose for an extended period of time can be fatal.</p>
<p>Some cells rely on glucose for almost all of their energy needs: neurons, red blood cells and, during exercise, skeletal muscle cells.</p>
<p>During the fed and fasting states, the brain uses only glucose for energy, and it uses around 70% of the body's glucose at any time. Only when the lack of glucose becomes severe, during starvation, does the brain begin using other molecules to make ATP, namely ketones.</p>`,
so:"Liver glycogen lasts about a day. After that, gluconeogenesis alone keeps blood sugar up, and the brain turns to ketones only in starvation."},
{drill:"m4d1"}
]
},

questions:[
// ---------------- L1 ----------------
{id:"m4a01",lo:"4.1",src:"L1",ref:"m4-class",type:"mc",kind:"ex",inv:["m4-class.c1"],
stem:"Which of these is a monosaccharide?",
opts:["Fructose","Sucrose","Lactose","Glycogen"],ans:0,
exp:"A monosaccharide is a single sugar molecule. Sucrose and lactose are disaccharides, and glycogen is a polysaccharide."},
{id:"m4a02",lo:"4.1",src:"L1",ref:"m4-class",type:"mc",kind:"fig",inv:["m4-class.c2"],fig:"q-disacc",
stem:"The figure shows two disaccharides and the monosaccharides that make them. Which monosaccharide belongs at 1?",
opts:["Fructose","Galactose","Mannose","Ribose"],ans:0,
exp:"Sucrose, table sugar, is one glucose and one fructose bound together."},
{id:"m4a03",lo:"4.1",src:"L1",ref:"m4-class",type:"mc",kind:"fig",inv:["m4-class.c3"],fig:"q-disacc",
stem:"The figure shows two disaccharides and the monosaccharides that make them. Which monosaccharide belongs at 2?",
opts:["Galactose","Fructose","Ribose","Mannose"],ans:0,
exp:"Lactose, the sugar in milk, is one glucose and one galactose bound together."},
{id:"m4a04",lo:"4.1",src:"L1",ref:"m4-class",type:"mc",kind:"ex",inv:["m4-class.c4"],
stem:"Starch, cellulose and glycogen are all made of repeating glucose units. How do they differ?",
opts:["In the number and types of branches","In the type of monosaccharide each contains","In the number of carbons in each glucose","In whether the glucose is linear or a ring"],ans:0,
exp:"They differ only in complexity, due to the number and types of branches. Starch and cellulose are found in plants and glycogen in humans."},
{id:"m4a05",lo:"4.1",src:"L1",ref:"m4-class",type:"tf",kind:"ex",inv:["m4-class.c5"],
stem:"Glycosaminoglycans, such as hyaluronic acid, are made of repeating disaccharide units.",ans:true,
exp:"Glycosaminoglycans provide external support for cells in tissues. Hyaluronic acid is found in cartilage and skin and aids in lubrication and wound healing."},
{id:"m4a06",lo:"4.1",src:"L1",ref:"m4-class",type:"mc",kind:"ex",inv:["m4-class.c6"],
stem:"Which of these foods would you expect to contain mainly disaccharides?",
opts:["Plain yogurt","Strawberries","Pasta","Green beans"],ans:0,
exp:"Plain yogurt and coffee with sugar contain disaccharides. Strawberries contain monosaccharides, and pasta, green beans and oatmeal contain polysaccharides."},
{id:"m4a07",lo:"4.1",src:"L1",ref:"m4-class",type:"mc",kind:"fig",inv:["m4-class.c7"],fig:"q-lact",
stem:"The figure shows what happens to lactose in the small intestine. Which enzyme belongs at 1?",
opts:["Lactase","Aldolase","Hexokinase","Glucokinase"],ans:0,
exp:"Lactase cleaves the bond between the glucose and galactose in lactose. In lactose intolerance there is too little lactase."},
{id:"m4a08",lo:"4.1",src:"L1",ref:"m4-class",type:"mc",kind:"why",inv:["m4-class.c7"],
stem:"Why does a person with lactase deficiency get gas and abdominal pain after drinking milk?",
opts:["Unabsorbed lactose reaches the large intestine, where bacteria metabolize it","Glucose and galactose cannot be absorbed in the small intestine","Lactase produces gas as it splits lactose","Lactose is stored as glycogen in the intestinal wall"],ans:0,
exp:"Lactose can't be absorbed, so it continues to the large intestine and becomes a source of energy for bacteria. The bacteria produce gas."},
{id:"m4a09",lo:"4.1",src:"L1",ref:"m4-formula",type:"mc",kind:"ex",inv:["m4-formula.c1"],
stem:"Which chemical formula represents a monosaccharide?",
opts:["C₆H₁₂O₆","C₁₂H₂₂O₁₁","C₂₀H₃₂O₂","C₃H₃O₃"],ans:0,
exp:"Monosaccharides follow Cₙ(H₂O)ₙ, with carbon, hydrogen and oxygen in a 1:2:1 ratio. C₆H₁₂O₆ fits it."},
{id:"m4a10",lo:"4.1",src:"L1",ref:"m4-formula",type:"mc",kind:"why",inv:["m4-formula.c1"],
stem:"Why are simple sugars called carbohydrates?",
opts:["They are hydrates of carbon, with C, H and O in a 1:2:1 ratio","They are made only of carbon and hydrogen","They have two oxygens for every carbon","They release water when they are broken down"],ans:0,
exp:"For every carbon there is one oxygen and two hydrogens (CH₂O). They are hydrates (H₂O) of carbon (C)."},
{id:"m4a11",lo:"4.1",src:"L1",ref:"m4-formula",type:"mc",kind:"ex",inv:["m4-formula.c2"],
stem:"What are triose sugars, with 3 carbons, mostly used as?",
opts:["Intermediates formed in metabolic pathways","The main carbohydrates used for energy","Building blocks for nucleic acids","External support for cells in tissues"],ans:0,
exp:"Trioses are mostly intermediates formed in metabolic pathways. Glyceraldehyde, an intermediate of glycolysis, is the example."},
{id:"m4a12",lo:"4.1",src:"L1",ref:"m4-formula",type:"mc",kind:"fig",inv:["m4-formula.c3"],fig:"q-fis3",fixed:true,
stem:"The figure shows three monosaccharides. Which one is a pentose?",
opts:["Structure 1","Structure 2","Structure 3"],ans:2,
exp:"Structure 3 has 5 carbons, so it is a pentose (ribose). Structure 1 is a hexose and structure 2 is a triose."},
{id:"m4a13",lo:"4.1",src:"L1",ref:"m4-formula",type:"mc",kind:"ex",inv:["m4-formula.c4"],
stem:"Which sugars are the predominant type of carbohydrate used for energy?",
opts:["Hexoses, such as glucose","Pentoses, such as ribose","Trioses, such as glyceraldehyde","Glycosaminoglycans, such as hyaluronic acid"],ans:0,
exp:"Hexoses have 6 carbons and are the predominant carbohydrates used for energy. Glucose, fructose, galactose and mannose are hexoses."},
{id:"m4a14",lo:"4.1",src:"L1",ref:"m4-isomer",type:"mc",kind:"fig",inv:["m4-isomer.c1"],fig:"q-sugars3",
stem:"Structures 2 and 3 in the figure both have the formula C₆H₁₂O₆. What is the relationship between them?",
opts:["They are structural isomers","They are stereoisomers","They are the same molecule","They are a monosaccharide and a disaccharide"],ans:0,
exp:"Isomers have identical molecular formulas but different structures. Glucose (3) and fructose (2) have their atoms bonded in different ways, so they are structural isomers."},
{id:"m4a15",lo:"4.1",src:"L1",ref:"m4-isomer",type:"tf",kind:"ex",inv:["m4-isomer.c1"],
stem:"Two sugars with identical molecular formulas are the same molecule.",ans:false,
exp:"Isomers have identical molecular formulas but different structures, so they are different molecules."},
{id:"m4a16",lo:"4.1",src:"L1",ref:"m4-isomer",type:"mc",kind:"fig",inv:["m4-isomer.c2"],fig:"q-dl",
stem:"The figure shows two forms of glucose. What kind of isomers are they?",
opts:["Stereoisomers","Structural isomers","An aldose and a ketose","A linear form and a ring form"],ans:0,
exp:"Stereoisomers have the same formula and bonds but differ in their arrangement in space. D-glucose and L-glucose are mirror images."},
{id:"m4a17",lo:"4.1",src:"L1",ref:"m4-isomer",type:"mc",kind:"why",inv:["m4-isomer.c3"],
stem:"Why is the glucose the body metabolizes D-glucose and not L-glucose?",
opts:["The enzymes that metabolize glucose only recognize and act on D-glucose","L-glucose has a different chemical formula","L-glucose is a ketose","L-glucose cannot form a ring"],ans:0,
exp:"Most glucose in living organisms is D-glucose, and the enzymes we use to metabolize glucose only recognize and act on that form."},
{id:"m4a18",lo:"4.1",src:"L1",ref:"m4-aldket",type:"mc",kind:"fig",inv:["m4-aldket.c1"],fig:"q-triose",
stem:"Structures A and B both have 3 carbons and the same formula. Where is the carbonyl in structure B, and what kind of sugar is it?",
opts:["Within the carbon chain, so B is a ketose","At the end of the carbon chain, so B is an aldose","Within the carbon chain, so B is an aldose","At the end of the carbon chain, so B is a ketose"],ans:0,
exp:"In a ketone the carbonyl is attached within the carbon chain, so B is a ketotriose. A has its carbonyl at the end and is an aldotriose."},
{id:"m4a19",lo:"4.1",src:"L1",ref:"m4-aldket",type:"mc",kind:"fig",inv:["m4-aldket.c2"],fig:"q-sugars3",fixed:true,
stem:"The figure shows three monosaccharides. Which one is a ketose?",
opts:["Structure 1","Structure 2","Structure 3"],ans:1,
exp:"Structure 2, fructose, has its carbonyl within the carbon chain, so it is a ketose. Structures 1 and 3, galactose and glucose, are aldoses."},
{id:"m4a20",lo:"4.1",src:"L1",ref:"m4-aldket",type:"tf",kind:"ex",inv:["m4-aldket.c2"],
stem:"Glucose and galactose are both ketoses.",ans:false,
exp:"Glucose and galactose are aldoses. Fructose is a ketose."},
{id:"m4a21",lo:"4.1",src:"L1",ref:"m4-aldket",type:"mc",kind:"why",inv:["m4-aldket.c3"],
stem:"Why do the carbohydrates in food and in our cells exist in the ring structure?",
opts:["In solution the carbonyl reacts with a hydroxyl in the same chain automatically","Enzymes in the small intestine convert the chains to rings","Only the ring form can be absorbed into the blood","Two monosaccharides must bond to form a ring"],ans:0,
exp:"In the chain form, the carbonyl reacts with a hydroxyl group in the carbon chain. In solutions like those in the body this cyclization occurs automatically."},
// ---------------- L2 ----------------
{id:"m4b01",lo:"4.2",src:"L2",ref:"m4-map",type:"mc",kind:"ex",inv:["m4-map.c1","m4-map.c2"],
stem:"Which pathway is part of glucose anabolism and requires ATP?",
opts:["Gluconeogenesis","Glycolysis","Pyruvate oxidation","Citric acid cycle"],ans:0,
exp:"Gluconeogenesis and the pentose phosphate pathway synthesize glucose and require ATP. The other three are catabolic and make ATP."},
{id:"m4b02",lo:"4.2",src:"L2",ref:"m4-map",type:"tf",kind:"ex",inv:["m4-map.c3"],
stem:"Storing glucose as glycogen through glycogenesis requires ATP.",ans:true,
exp:"Glycogenesis stores glucose as glycogen, and storing glucose requires ATP."},
{id:"m4b03",lo:"4.2",src:"L2",ref:"m4-map",type:"mc",kind:"fig",inv:["m4-map.c4"],fig:"q-resp",
stem:"The figure shows the four steps of cellular respiration in order, with where each takes place. Which process belongs in box 2?",
opts:["Pyruvate oxidation","Glycolysis","Citric acid cycle","Oxidative phosphorylation"],ans:0,
exp:"The order is glycolysis, pyruvate oxidation, citric acid cycle, oxidative phosphorylation. Box 2 is pyruvate oxidation, in the mitochondrial matrix."},
{id:"m4b04",lo:"4.2",src:"L2",ref:"m4-map",type:"mc",kind:"why",inv:["m4-map.c5"],
stem:"Why is aerobic glycolysis preferred over anaerobic glycolysis?",
opts:["It produces significantly more ATP per glucose","It is the only form that produces pyruvate","It does not need the ATP-requiring phase","It bypasses the rate-limiting enzymes"],ans:0,
exp:"With oxygen the cell produces far more ATP from each glucose. Without oxygen it produces only 2 ATP per glucose."},
{id:"m4b05",lo:"4.2",src:"L2",ref:"m4-slp",type:"tf",kind:"ex",inv:["m4-slp.c1"],
stem:"In substrate-level phosphorylation, ATP is formed through electron transfer in the mitochondria.",ans:false,
exp:"That is oxidative phosphorylation. In substrate-level phosphorylation a high-energy phosphate group is transferred from a substrate to ADP."},
{id:"m4b06",lo:"4.2",src:"L2",ref:"m4-slp",type:"mc",kind:"fig",inv:["m4-slp.c2"],fig:"q-gly10",fixed:true,
stem:"The figure shows glycolysis with five of its steps lettered. At which two steps is ATP made by substrate-level phosphorylation?",
opts:["A and B","B and C","C and D","D and E"],ans:3,
exp:"D is step 7, where phosphoglycerate kinase converts 1,3-bisphosphoglycerate to 3-phosphoglycerate. E is step 10, where pyruvate kinase converts phosphoenolpyruvate to pyruvate. A and B are steps 1 and 3, which use ATP."},
{id:"m4b07",lo:"4.2",src:"L2",ref:"m4-phases",type:"mc",kind:"fig",inv:["m4-phases.c2"],fig:"q-gly10",fixed:true,
stem:"The figure shows glycolysis with five of its steps lettered. Which three are the rate-limiting steps?",
opts:["A, B and C","A, B and E","B, C and D","C, D and E"],ans:1,
exp:"The rate-limiting steps are step 1 (hexokinase), step 3 (phosphofructokinase-1) and step 10 (pyruvate kinase), which are A, B and E."},
{id:"m4b08",lo:"4.2",src:"L2",ref:"m4-phases",type:"mc",kind:"ex",inv:["m4-phases.c5"],fixed:true,
stem:"One glucose goes through glycolysis. How many ATP are used, how many are produced, and what is the net gain?",
opts:["1 used, 2 produced, net 1","2 used, 2 produced, net 0","2 used, 4 produced, net 2","4 used, 6 produced, net 2"],ans:2,
exp:"Phase I uses 2 ATP and Phase II produces 4, for a net gain of 2 ATP."},
{id:"m4b09",lo:"4.2",src:"L2",ref:"m4-ph1",type:"mc",kind:"fig",inv:["m4-ph1.c3"],fig:"q-ph1-e3",
stem:"The figure shows Phase I of glycolysis. Which enzyme belongs in the blank at step 3?",
opts:["Phosphofructokinase-1","Phosphofructokinase-2","Phosphoglycerate kinase","Pyruvate kinase"],ans:0,
exp:"Step 3 is phosphofructokinase-1. It transfers a phosphate from ATP to fructose-6-phosphate to form fructose-1,6-bisphosphate, and it is rate-limiting."},
{id:"m4b10",lo:"4.2",src:"L2",ref:"m4-ph1",type:"mc",kind:"ex",inv:["m4-ph1.c4"],
stem:"In step 4, aldolase acts on fructose-1,6-bisphosphate. What does it produce?",
opts:["Dihydroxyacetone phosphate and glyceraldehyde-3-phosphate","Glucose-6-phosphate and fructose-6-phosphate","1,3-Bisphosphoglycerate and 3-phosphoglycerate","Phosphoenolpyruvate and pyruvate"],ans:0,
exp:"Aldolase splits the 6-carbon fructose-1,6-bisphosphate into two 3-carbon sugars, DHAP and G3P."},
{id:"m4b11",lo:"4.2",src:"L2",ref:"m4-hkgk",type:"mc",kind:"fig",inv:["m4-hkgk.c2","m4-hkgk.c4"],fig:"q-hkgk",fixed:true,
stem:"The graph shows the activity of hexokinase and glucokinase as glucose concentration rises. Which curve is the enzyme that phosphorylates glucose in the liver?",
opts:["Curve A, hexokinase","Curve A, glucokinase","Curve B, hexokinase","Curve B, glucokinase"],ans:3,
exp:"Glucokinase is the liver enzyme. It needs glucose to build up before it acts and has the higher Vmax, which is curve B."},
{id:"m4b12",lo:"4.2",src:"L2",ref:"m4-hkgk",type:"mc",kind:"why",inv:["m4-hkgk.c3"],
stem:"A cell that uses hexokinase can phosphorylate glucose even when very little glucose is present. Why?",
opts:["Hexokinase has a high affinity for glucose","Hexokinase has a higher Vmax than glucokinase","Hexokinase is activated by glucose-6-phosphate","Hexokinase is activated by fructose-2,6-bisphosphate"],ans:0,
exp:"Hexokinase binds glucose readily, so it acts on glucose as soon as it enters the cell. Its Vmax is lower than that of glucokinase."},
{id:"m4b13",lo:"4.2",src:"L2",ref:"m4-reg1",type:"mc",kind:"ex",inv:["m4-reg1.c1"],
stem:"Glucose-6-phosphate builds up in a muscle cell. What happens at step 1 of glycolysis?",
opts:["G6P binds hexokinase and inhibits it","G6P binds hexokinase and activates it","G6P has no effect on hexokinase","G6P leaves the cell before it can act"],ans:0,
exp:"Hexokinase is inhibited by its own product, G6P. Slowing step 1 saves ATP when there is already plenty of G6P."},
{id:"m4b14",lo:"4.2",src:"L2",ref:"m4-reg1",type:"tf",kind:"ex",inv:["m4-reg1.c2"],
stem:"In the liver, glucokinase is inhibited by glucose-6-phosphate in the same way hexokinase is.",ans:false,
exp:"Glucokinase is not inhibited by G6P. The liver can store the extra G6P as glycogen."},
{id:"m4b15",lo:"4.2",src:"L2",ref:"m4-reg1",type:"mc",kind:"fig",inv:["m4-reg1.c4"],fig:"q-pfk",
stem:"The figure shows the regulators of phosphofructokinase-1. Which molecule belongs at 2?",
opts:["Fructose-2,6-bisphosphate","Phosphoenolpyruvate","Glucose-6-phosphate","Alanine"],ans:0,
exp:"The activators of PFK-1 are AMP and fructose-2,6-bisphosphate. Phosphoenolpyruvate is an inhibitor and belongs at 1."},
{id:"m4b16",lo:"4.2",src:"L2",ref:"m4-reg1",type:"mc",kind:"why",inv:["m4-reg1.c4"],
stem:"Why is AMP a more sensitive regulator of phosphofructokinase-1 than ATP?",
opts:["AMP is normally very low, so a rise in AMP stands out","AMP is always at a high concentration in the cell","AMP is a product of the citric acid cycle","AMP is made from F6P by phosphofructokinase-2"],ans:0,
exp:"ATP is always abundant. AMP is normally very low because it is rapidly converted to ADP, so a rise in AMP means too much ATP has been spent."},
{id:"m4b17",lo:"4.2",src:"L2",ref:"m4-phases",type:"mc",kind:"ex",inv:["m4-phases.c1"],
stem:"What does one glucose become at the end of glycolysis, and where in the cell does this happen?",
opts:["Two pyruvate, in the cytoplasm","Two pyruvate, in the mitochondrial matrix","One pyruvate, in the cytoplasm","Two acetyl CoA, in the mitochondrial matrix"],ans:0,
exp:"Glycolysis breaks one glucose into two pyruvate. It takes place in the cytoplasm, in 10 steps that proceed in one direction."},
{id:"m4b18",lo:"4.2",src:"L2",ref:"m4-phases",type:"tf",kind:"ex",inv:["m4-phases.c3"],
stem:"In Phase I of glycolysis, one glucose is cleaved into two phosphorylated trioses, and ATP provides the phosphates.",ans:true,
exp:"Phase I is the ATP-requiring phase. The hexose is cleaved into two 3-carbon sugars that carry phosphates taken from ATP."},
{id:"m4b19",lo:"4.2",src:"L2",ref:"m4-phases",type:"mc",kind:"fig",inv:["m4-phases.c4"],fig:"q-phases",
stem:"The figure summarizes the two phases of glycolysis. What happens in phase 2?",
opts:["The two trioses are oxidized and transfer their phosphates to ADP","One glucose is cleaved into two phosphorylated trioses","ATP provides the phosphates for the two trioses","Pyruvate is oxidized to acetyl CoA"],ans:0,
exp:"Phase 2 is steps 6 to 10, the ATP-generating phase. The two trioses are oxidized and then pass their phosphates to ADP."},
{id:"m4b20",lo:"4.2",src:"L2",ref:"m4-ph1",type:"mc",kind:"fig",inv:["m4-ph1.c1"],fig:"q-ph1-r1",
stem:"The figure shows Phase I of glycolysis. Which molecule belongs in the blank?",
opts:["Glucose-6-phosphate","Glucose-1-phosphate","Fructose-2,6-bisphosphate","1,3-Bisphosphoglycerate"],ans:0,
exp:"In step 1, hexokinase transfers a phosphate from ATP to glucose to produce glucose-6-phosphate."},
{id:"m4b21",lo:"4.2",src:"L2",ref:"m4-ph1",type:"mc",kind:"ex",inv:["m4-ph1.c2"],
stem:"What does phosphoglucose isomerase do in step 2 of glycolysis?",
opts:["Rearranges G6P into its isomer, fructose-6-phosphate","Transfers a phosphate from ATP to G6P","Splits G6P into two 3-carbon sugars","Converts DHAP into G3P"],ans:0,
exp:"Phosphoglucose isomerase converts G6P to fructose-6-phosphate. F6P is an isomer of G6P."},
{id:"m4b22",lo:"4.2",src:"L2",ref:"m4-ph1",type:"mc",kind:"why",inv:["m4-ph1.c5"],
stem:"Aldolase produces DHAP and G3P. Why does step 5 convert the DHAP into G3P?",
opts:["Only G3P can serve as the substrate for the next step","DHAP would inhibit phosphofructokinase-1","DHAP cannot be phosphorylated","G3P is the only form that can leave the cell"],ans:0,
exp:"DHAP and G3P are isomers, but only G3P can serve as the substrate for the next step, so the phase ends with two G3P."},
{id:"m4b23",lo:"4.2",src:"L2",ref:"m4-hkgk",type:"tf",kind:"ex",inv:["m4-hkgk.c1"],
stem:"Once glucose is phosphorylated, glucose-6-phosphate can leave the cell through a membrane transporter.",ans:false,
exp:"There is no membrane transporter for G6P, so it cannot leave the cell. Phosphorylation commits glucose to being metabolized."},
{id:"m4b24",lo:"4.2",src:"L2",ref:"m4-reg1",type:"mc",kind:"fig",inv:["m4-reg1.c3"],fig:"q-pfk",
stem:"The figure shows the regulators of phosphofructokinase-1. Which molecule belongs at 1?",
opts:["Phosphoenolpyruvate","Fructose-2,6-bisphosphate","Acetyl CoA","Glucose-6-phosphate"],ans:0,
exp:"The inhibitors of PFK-1 are ATP, citrate and phosphoenolpyruvate. High levels of these signal that the cell has ample energy."},
{id:"m4b25",lo:"4.2",src:"L2",ref:"m4-reg1",type:"mc",kind:"why",inv:["m4-reg1.c5"],
stem:"A high concentration of fructose-6-phosphate speeds up phosphofructokinase-1. Why?",
opts:["PFK-2 turns F6P into F2,6BP, which activates PFK-1","F6P binds PFK-1 and removes ATP from it","F6P is converted to AMP, which activates PFK-1","F6P inhibits hexokinase, which frees more ATP"],ans:0,
exp:"PFK-2 turns F6P, the substrate of PFK-1, into F2,6BP in a parallel pathway. F2,6BP tells PFK-1 to increase the rate."},
// ---------------- L3 ----------------
{id:"m4c01",lo:"4.2",src:"L3",ref:"m4-ph2",type:"mc",kind:"ex",inv:["m4-ph2.c1"],
stem:"When NAD gains an electron in glycolysis, which form does it make?",
opts:["NADH, the high-energy charged form","NAD⁺, the high-energy charged form","NADH, the low-energy uncharged form","NAD⁺, the low-energy uncharged form"],ans:0,
exp:"NAD carries high-energy electrons by alternating between NAD⁺ and NADH. Gaining an electron makes NADH, and losing one makes NAD⁺ again, so it is recycled."},
{id:"m4c02",lo:"4.2",src:"L3",ref:"m4-ph2",type:"mc",kind:"ex",inv:["m4-ph2.c2"],
stem:"What role does coenzyme A play in glucose metabolism?",
opts:["It carries acetyl groups, holding them on a sulfur","It carries electrons, alternating between two forms","It donates phosphates to ADP","It activates pyruvate kinase"],ans:0,
exp:"CoA is the acetyl group carrier. It moves an acetyl group from a substrate onto itself, or the reverse, using a sulfur group."},
{id:"m4c03",lo:"4.2",src:"L3",ref:"m4-ph2",type:"mc",kind:"why",inv:["m4-ph2.c3"],
stem:"Steps 7 and 10 each form one ATP, yet Phase II yields 4 ATP per glucose. Why?",
opts:["Both G3P made from one glucose run through Phase II in parallel","Steps 7 and 10 each form two ATP from every G3P","The NADH from step 6 is converted to 2 ATP","Enolase forms ATP when it releases water"],ans:0,
exp:"One glucose gives two G3P, and both run steps 6 to 10. After the 2 ATP spent in Phase I, glycolysis nets 2 ATP."},
{id:"m4c04",lo:"4.2",src:"L3",ref:"m4-ph2",type:"mc",kind:"fig",inv:["m4-ph2.c4"],fig:"q-ph2-r1",
stem:"The figure shows Phase II of glycolysis. Which molecule belongs in the blank?",
opts:["1,3-Bisphosphoglycerate","Fructose-1,6-bisphosphate","Fructose-2,6-bisphosphate","Acetyl CoA"],ans:0,
exp:"Step 6, glyceraldehyde-3-phosphate dehydrogenase, converts G3P to 1,3-BPG and makes NADH."},
{id:"m4c05",lo:"4.2",src:"L3",ref:"m4-ph2",type:"mc",kind:"ex",inv:["m4-ph2.c4"],
stem:"What does glyceraldehyde-3-phosphate dehydrogenase do to G3P in step 6?",
opts:["Removes a hydrogen to NAD⁺, then attaches a free phosphate from the cytosol","Transfers a phosphate from G3P to ADP","Removes water to make an unstable molecule","Moves the phosphate over to a different carbon"],ans:0,
exp:"Step 6 has two parts. A hydrogen goes to NAD⁺, forming NADH, and a free phosphate from the cytosol is attached, forming 1,3-BPG."},
{id:"m4c06",lo:"4.2",src:"L3",ref:"m4-ph2",type:"mc",kind:"fig",inv:["m4-ph2.c5"],fig:"q-ph2-atp",fixed:true,
stem:"The figure shows Phase II of glycolysis. At which lettered step is the first ATP formed?",
opts:["A","B","C","D"],ans:1,
exp:"Step 7, phosphoglycerate kinase (B), transfers a phosphate from 1,3-BPG to ADP to form the first ATP. The second ATP comes at step 10 (D)."},
{id:"m4c07",lo:"4.2",src:"L3",ref:"m4-ph2",type:"mc",kind:"ex",inv:["m4-ph2.c6"],
stem:"What happens to 3-phosphoglycerate in steps 8 and 9?",
opts:["Its phosphate is moved over to make 2-phosphoglycerate, then water is released to make PEP","Its phosphate goes to ADP, then NADH is formed","It is split into two 3-carbon sugars","A free phosphate is attached, then it becomes pyruvate"],ans:0,
exp:"Phosphoglycerate mutase moves the phosphate over to make 2-phosphoglycerate. Enolase converts that to the unstable PEP, forming and releasing water."},
{id:"m4c08",lo:"4.2",src:"L3",ref:"m4-ph2",type:"mc",kind:"fig",inv:["m4-ph2.c7"],fig:"q-ph2-e10",
stem:"The figure shows Phase II of glycolysis. Which enzyme belongs in the blank?",
opts:["Pyruvate kinase","Pyruvate dehydrogenase","Phosphofructokinase-1","Lactate dehydrogenase"],ans:0,
exp:"Pyruvate kinase transfers the final phosphate on PEP to ADP, forming pyruvate and the second ATP. It is the rate-limiting step of Phase II."},
{id:"m4c09",lo:"4.2",src:"L3",ref:"m4-ph2",type:"tf",kind:"ex",inv:["m4-ph2.c7"],
stem:"The pyruvate kinase reaction, PEP to pyruvate, is reversible.",ans:false,
exp:"The conversion of PEP to pyruvate is irreversible and highly regulated. Step 10 is the rate-limiting step of Phase II."},
{id:"m4c10",lo:"4.2",src:"L3",ref:"m4-reg2",type:"mc",kind:"fig",inv:["m4-reg2.c1"],fig:"q-pk-a",
stem:"The figure shows the regulators of pyruvate kinase. Which molecule belongs at 1?",
opts:["Fructose-1,6-bisphosphate","Fructose-2,6-bisphosphate","AMP","Glucose-6-phosphate"],ans:0,
exp:"F1,6BP and PEP activate pyruvate kinase. AMP and F2,6BP are the activators of PFK-1."},
{id:"m4c11",lo:"4.2",src:"L3",ref:"m4-reg2",type:"mc",kind:"why",inv:["m4-reg2.c1"],
stem:"Fructose-1,6-bisphosphate is made in step 3 but activates pyruvate kinase in step 10. Why?",
opts:["To speed up the later steps when the earlier steps are producing a lot of product","To slow glycolysis when the cell has plenty of energy","To signal that the cell must make glucose","To keep fructose-1,6-bisphosphate from leaving the cell"],ans:0,
exp:"Regulating a later enzyme is feedforward stimulation. When F1,6BP builds up, it tells pyruvate kinase to speed up."},
{id:"m4c12",lo:"4.2",src:"L3",ref:"m4-reg2",type:"mc",kind:"fig",inv:["m4-reg2.c2"],fig:"q-pk-i",
stem:"The figure shows the regulators of pyruvate kinase. Which molecule belongs at 1?",
opts:["Alanine","AMP","Fructose-2,6-bisphosphate","Glucose-6-phosphate"],ans:0,
exp:"ATP, citrate and alanine inhibit pyruvate kinase. All three signal that glucose does not need to be broken down."},
{id:"m4c13",lo:"4.2",src:"L3",ref:"m4-reg2",type:"mc",kind:"why",inv:["m4-reg2.c2"],
stem:"Why does a high concentration of alanine inhibit pyruvate kinase?",
opts:["It indicates the cell must make glucose, so glucose should not be broken down","It indicates the citric acid cycle is producing plenty of energy","It is a product of step 9 that has nowhere to go","It is the product that pyruvate kinase forms"],ans:0,
exp:"Alanine is an intermediate in a pathway that creates new glucose. In some cells, high alanine indicates the cell must make glucose, not catabolize it."},
{id:"m4c14",lo:"4.2",src:"L3",ref:"m4-reg2",type:"tf",kind:"ex",inv:["m4-reg2.c3"],
stem:"Intermediates of glycolysis can regulate glycolytic enzymes through both feedback and feedforward mechanisms.",ans:true,
exp:"G6P inhibiting hexokinase is feedback. F1,6BP activating pyruvate kinase, a later enzyme, is feedforward."},
{id:"m4c15",lo:"4.2",src:"L3",ref:"m4-pdh",type:"mc",kind:"fig",inv:["m4-pdh.c1"],fig:"q-fork",
stem:"The figure shows the two fates of pyruvate. Which molecule belongs at 2?",
opts:["Acetyl CoA","Citrate","Phosphoenolpyruvate","Glucose"],ans:0,
exp:"With oxygen, pyruvate dehydrogenase oxidizes pyruvate to acetyl CoA, the substrate that enters the citric acid cycle."},
{id:"m4c16",lo:"4.2",src:"L3",ref:"m4-pdh",type:"mc",kind:"ex",inv:["m4-pdh.c2"],
stem:"Glycolysis ends in the cytoplasm. How does pyruvate reach the enzyme that oxidizes it?",
opts:["It crosses the mitochondrial membrane on a protein transporter","It diffuses freely into the mitochondria","It is converted to acetyl CoA in the cytoplasm first","Coenzyme A carries it into the mitochondria"],ans:0,
exp:"Not just any molecule can enter the mitochondria, but pyruvate passes through the mitochondrial membrane using a protein transporter. Pyruvate dehydrogenase oxidizes it inside."},
{id:"m4c17",lo:"4.2",src:"L3",ref:"m4-pdh",type:"mc",kind:"fig",inv:["m4-pdh.c3"],fig:"q-pdh",
stem:"The figure shows the three steps of pyruvate oxidation. What leaves at 1?",
opts:["CO₂","NADH","Water","Coenzyme A"],ans:0,
exp:"In decarboxylation, pyruvate dehydrogenase removes a carboxyl group from pyruvate, releasing CO₂. NAD⁺ is reduced in step 2 and CoA joins in step 3."},
{id:"m4c18",lo:"4.2",src:"L3",ref:"m4-pdh",type:"tf",kind:"ex",inv:["m4-pdh.c4"],
stem:"Pyruvate oxidation runs once for every glucose that enters glycolysis.",ans:false,
exp:"One glucose makes two pyruvates, and both are oxidized, so the pathway runs twice per glucose."},
{id:"m4c19",lo:"4.2",src:"L3",ref:"m4-anaer",type:"mc",kind:"ex",inv:["m4-anaer.c1"],
stem:"How much ATP does anaerobic glycolysis make per glucose?",
opts:["2, all from glycolysis","2 from glycolysis plus 2 from lactate dehydrogenase","4, from Phase II","None, because it only recycles NAD⁺"],ans:0,
exp:"In anaerobic metabolism, ATP is only generated through glycolysis, so only 2 ATP are made. That makes it much less efficient."},
{id:"m4c20",lo:"4.2",src:"L3",ref:"m4-anaer",type:"mc",kind:"fig",inv:["m4-anaer.c2"],fig:"q-nadloop",
stem:"The figure shows anaerobic glycolysis. Which molecule is 1?",
opts:["NAD⁺","ATP","Coenzyme A","Pyruvate"],ans:0,
exp:"Glycolysis consumes NAD⁺ and makes NADH. Lactate dehydrogenase uses the NADH and regenerates NAD⁺, which goes back to glycolysis."},
{id:"m4c21",lo:"4.2",src:"L3",ref:"m4-anaer",type:"mc",kind:"why",inv:["m4-anaer.c2"],
stem:"The reactions of glycolysis do not require oxygen. Why does a cell need a different process when oxygen is absent?",
opts:["Without aerobic respiration, NADH is not recycled to NAD⁺, and glycolysis needs NAD⁺","Without oxygen, hexokinase cannot phosphorylate glucose","Pyruvate cannot leave the cytoplasm without oxygen","Glycolysis makes no ATP without oxygen"],ans:0,
exp:"Aerobic respiration normally converts NADH back to NAD⁺. Without it, NAD⁺ runs out and glycolysis cannot proceed."},
{id:"m4c22",lo:"4.2",src:"L3",ref:"m4-anaer",type:"mc",kind:"fig",inv:["m4-anaer.c3"],fig:"q-fork",
stem:"The figure shows the two fates of pyruvate. Which enzyme belongs at 1?",
opts:["Lactate dehydrogenase","Pyruvate kinase","Glyceraldehyde-3-phosphate dehydrogenase","Glucokinase"],ans:0,
exp:"Without oxygen, lactate dehydrogenase converts pyruvate to lactate, using NADH and regenerating NAD⁺."},
{id:"m4c23",lo:"4.2",src:"L3",ref:"m4-anaer",type:"mc",kind:"ex",inv:["m4-anaer.c4"],
stem:"Most cells can't metabolize lactate into a usable substrate. What happens to the lactate they make?",
opts:["It is released into the blood and travels to the liver","It is converted back to pyruvate in the same cell","It is exhaled as CO₂","It is stored as glycogen in the same cell"],ans:0,
exp:"Cells that produce lactate release it into the bloodstream to travel to the liver, where it can be used."},
{id:"m4c24",lo:"4.2",src:"L3",ref:"m4-anaer",type:"mc",kind:"why",inv:["m4-anaer.c5"],
stem:"Why is anaerobic glycolysis the only way red blood cells can get energy?",
opts:["They do not contain mitochondria","They cannot take up glucose","They lack lactate dehydrogenase","They cannot make NADH"],ans:0,
exp:"Without mitochondria, aerobic respiration cannot occur, so red blood cells don't use up the oxygen they carry."},
// ---------------- L4 ----------------
{id:"m4d01",lo:"4.2",src:"L4",ref:"m4-glystr",type:"mc",kind:"fig",inv:["m4-glystr.c2"],fig:"q-glybond",
stem:"The figure shows part of a glycogen molecule. Which bond is at 1?",
opts:["α-(1,4)-glycosidic bond","α-(1,6)-glycosidic bond","α-(1,2)-glycosidic bond","β-(1,6)-glycosidic bond"],ans:0,
exp:"Bond 1 is in a linear chain. α-(1,4)-glycosidic bonds form the linear chains, and α-(1,6)-glycosidic bonds form the branches."},
{id:"m4d02",lo:"4.2",src:"L4",ref:"m4-glystr",type:"mc",kind:"ex",inv:["m4-glystr.c2"],
stem:"Which bonds form the branches in glycogen?",
opts:["α-(1,6)-glycosidic bonds","α-(1,4)-glycosidic bonds","Hydrogen bonds between chains","Phosphate bonds from UDP"],ans:0,
exp:"α-(1,6)-glycosidic bonds form the branches. α-(1,4)-glycosidic bonds form the linear chains."},
{id:"m4d03",lo:"4.2",src:"L4",ref:"m4-glystr",type:"mc",kind:"why",inv:["m4-glystr.c1"],
stem:"Why do its branches make glycogen a good energy storage molecule?",
opts:["They allow rapid access to many glucose molecules","They let glycogen cross the cell membrane","They link glucose to other sugars such as fructose","They keep glycogen from being broken down"],ans:0,
exp:"Glycogen is linear chains of glucose with occasional branches, and the branches allow rapid access to many glucose molecules."},
{id:"m4d04",lo:"4.2",src:"L4",ref:"m4-tissue",type:"mc",kind:"ex",inv:["m4-tissue.c1"],
stem:"Blood sugar is low. Which tissue can release glucose from its glycogen into the blood for other tissues to use?",
opts:["Liver","Skeletal muscle","Both liver and skeletal muscle","Neither; glucose from glycogen stays in the cell that stored it"],ans:0,
exp:"Only the liver can use glycogen to supply glucose to the blood. Skeletal muscle uses its glycogen for its own energy needs."},
{id:"m4d05",lo:"4.2",src:"L4",ref:"m4-tissue",type:"tf",kind:"ex",inv:["m4-tissue.c2"],
stem:"Skeletal muscle releases glucose from its glycogen into the blood when blood sugar is low.",ans:false,
exp:"Skeletal muscle stores glucose as glycogen but does not release it into the blood. Only the muscle cell itself can use it."},
{id:"m4d06",lo:"4.2",src:"L4",ref:"m4-tissue",type:"mc",kind:"fig",inv:["m4-tissue.c3","m4-tissue.c4"],fig:"q-horm-p",
stem:"The figure shows how two hormones control glycogen in liver cells. Which process is 1?",
opts:["Glycogenesis","Glycogenolysis","Gluconeogenesis","Glycolysis"],ans:0,
exp:"Insulin stimulates glycogenesis, the synthesis of glycogen. Glucagon stimulates glycogenolysis, the breakdown of glycogen, at 2."},
{id:"m4d07",lo:"4.2",src:"L4",ref:"m4-tissue",type:"mc",kind:"fig",inv:["m4-tissue.c5"],fig:"q-horm-h",
stem:"The figure shows how two hormones control glycogen in liver cells. Which hormone is 2?",
opts:["Glucagon","Insulin","Glucose-6-phosphate","UDP-glucose"],ans:0,
exp:"Glucagon, released when blood sugar is low, stimulates glycogenolysis. Insulin, at 1, stimulates glycogenesis."},
{id:"m4d08",lo:"4.2",src:"L4",ref:"m4-tissue",type:"mc",kind:"ex",inv:["m4-tissue.c4"],
stem:"Blood sugar is high after a meal. What does insulin do to glycogen metabolism in the liver?",
opts:["Stimulates glycogenesis and inhibits glycogenolysis","Stimulates both glycogenesis and glycogenolysis","Inhibits glycogenesis and stimulates glycogenolysis","Inhibits both glycogenesis and glycogenolysis"],ans:0,
exp:"Insulin directs the body to store glucose in glycogen, so it stimulates glycogenesis and inhibits glycogenolysis."},
{id:"m4d09",lo:"4.2",src:"L4",ref:"m4-tissue",type:"mc",kind:"why",inv:["m4-tissue.c5"],
stem:"Why does glucagon stimulate glycogenolysis in the liver?",
opts:["Blood sugar is low, and the liver releases the freed glucose into the blood","Blood sugar is high, and the liver stores the extra glucose","The liver needs the glucose for its own energy only","Glycogenolysis makes new glucose from amino acids"],ans:0,
exp:"Glucagon is released when blood sugar is low. The liver breaks down glycogen and releases the glucose into the blood for other tissues."},
{id:"m4d10",lo:"4.2",src:"L4",ref:"m4-states",type:"mc",kind:"fig",inv:["m4-states.c2"],fig:"q-gsrc-s",
stem:"The graph shows where oxidized glucose comes from over time after a meal. Which metabolic state is 2, and which hormone rises during it?",
opts:["Fasting state, glucagon","Fasting state, insulin","Fed state, glucagon","Starvation, insulin"],ans:0,
exp:"State 2 is the fasting state, which begins about 2 hours after a meal. Insulin decreases, glucagon increases and liver glycogen is broken down."},
{id:"m4d11",lo:"4.2",src:"L4",ref:"m4-states",type:"mc",kind:"fig",inv:["m4-states.c4"],fig:"q-gsrc-c",fixed:true,
stem:"The graph shows where oxidized glucose comes from over time after a meal. Which curve is glycogenolysis?",
opts:["A","B","C"],ans:1,
exp:"Glycogenolysis, curve B, rises early in fasting and is gone by about a day. A is ingested glucose and C is gluconeogenesis."},
{id:"m4d12",lo:"4.2",src:"L4",ref:"m4-states",type:"mc",kind:"fig",inv:["m4-states.c1"],fig:"q-gsrc-s",
stem:"The graph shows where oxidized glucose comes from over time after a meal. What happens during state 1?",
opts:["Blood sugar rises and the pancreas releases insulin","Blood sugar falls and the pancreas releases glucagon","Liver glycogen is broken down and the glucose is released into the blood","The liver builds new glucose by gluconeogenesis"],ans:0,
exp:"State 1 is the fed state. Digestion and absorption raise blood sugar, and the rise triggers the pancreas to release insulin."},
{id:"m4d13",lo:"4.2",src:"L4",ref:"m4-states",type:"tf",kind:"ex",inv:["m4-states.c1","m4-states.c2"],
stem:"The fasting state is also called the postprandial state.",ans:false,
exp:"Postprandial, like absorptive, is another name for the fed state. The fasting state is also called the post-absorptive state."},
{id:"m4d14",lo:"4.2",src:"L4",ref:"m4-states",type:"mc",kind:"why",inv:["m4-states.c3","m4-states.c2"],
stem:"Why is gluconeogenesis the only source of blood glucose after about 24 hours without food?",
opts:["Liver glycogen stores are depleted by then","Insulin rises and blocks glycogenolysis","Skeletal muscle stops releasing its glycogen into the blood","Glycogen phosphorylase is only active in the fed state"],ans:0,
exp:"Glycogen breakdown maintains blood sugar only until liver glycogen is depleted, about 24 hours. After that, the liver builds new glucose by gluconeogenesis."},
{id:"m4d15",lo:"4.2",src:"L4",ref:"m4-genesis",type:"mc",kind:"why",inv:["m4-genesis.c1"],
stem:"In the fed state, why does the hepatocyte store glucose-6-phosphate as glycogen instead of sending it through glycolysis?",
opts:["ATP builds up in the hepatocyte and halts glycolysis","Glucokinase cannot make G6P in the fed state","G6P leaves the cell unless it is stored","Glucagon blocks glycolysis in the fed state"],ans:0,
exp:"In the fed state ATP builds up and halts glycolysis. G6P cannot cross the cell membrane, so the hepatocyte stores it as glycogen."},
{id:"m4d16",lo:"4.2",src:"L4",ref:"m4-genesis",type:"mc",kind:"fig",inv:["m4-genesis.c2"],fig:"q-gen-r",
stem:"The figure shows glycogenesis in the liver. Which molecule is 1?",
opts:["Glucose-1-phosphate","Fructose-6-phosphate","UDP-glucose","Pyruvate"],ans:0,
exp:"Phosphoglucomutase forms glucose-1-phosphate from G6P. G6P cannot be added to glycogen chains, but G1P can."},
{id:"m4d17",lo:"4.2",src:"L4",ref:"m4-genesis",type:"mc",kind:"fig",inv:["m4-genesis.c3"],fig:"q-gen-r",
stem:"The figure shows glycogenesis in the liver. Which molecule is 2?",
opts:["UDP-glucose","Glucose-1-phosphate","Fructose-6-phosphate","Lactate"],ans:0,
exp:"UDP, which comes from UTP, attaches to glucose-1-phosphate to form UDP-glucose, the main donor of glucose for glycogen synthesis."},
{id:"m4d18",lo:"4.2",src:"L4",ref:"m4-genesis",type:"mc",kind:"ex",inv:["m4-genesis.c3"],
stem:"What is the main donor of glucose during the synthesis of glycogen?",
opts:["UDP-glucose","Glucose-6-phosphate","Glycogenin","Free glucose from the blood"],ans:0,
exp:"UDP-glucose is the main donor. G6P cannot be added to glycogen chains, so it is converted to G1P and then to UDP-glucose."},
{id:"m4d19",lo:"4.2",src:"L4",ref:"m4-genesis",type:"mc",kind:"fig",inv:["m4-genesis.c4"],fig:"q-gen-e",
stem:"The figure shows glycogenesis in the liver. Which enzyme is 1?",
opts:["Glycogen synthase","Glycogen phosphorylase","Glucokinase","Glucose-6-phosphatase"],ans:0,
exp:"Glycogen synthase is the key, rate-limiting enzyme of glycogen synthesis. Glycogen phosphorylase breaks glycogen down."},
{id:"m4d20",lo:"4.2",src:"L4",ref:"m4-genesis",type:"mc",kind:"ex",inv:["m4-genesis.c4"],
stem:"In glycogenesis, what is UDP-glucose attached to first?",
opts:["Glycogenin","Glycogen synthase","Glucose-6-phosphatase","UTP"],ans:0,
exp:"UDP-glucose is attached to glycogenin, a foundation that can be built upon. Glucose is then added one by one into linear chains, and branches are added last."},
{id:"m4d21",lo:"4.2",src:"L4",ref:"m4-genesis",type:"tf",kind:"ex",inv:["m4-genesis.c4","m4-lysis.c1"],
stem:"The rate-limiting enzymes in glycogen synthesis and degradation are glycogen synthase and glycogen phosphorylase.",ans:true,
exp:"Glycogen synthase is rate-limiting for building glycogen and glycogen phosphorylase for breaking it down."},
{id:"m4d22",lo:"4.2",src:"L4",ref:"m4-lysis",type:"mc",kind:"fig",inv:["m4-lysis.c1"],fig:"q-tissue",
stem:"The figure compares glycogen breakdown in the liver and in skeletal muscle. Which enzyme is 1?",
opts:["Glycogen phosphorylase","Glycogen synthase","Glucokinase","Hexokinase"],ans:0,
exp:"Glycogen phosphorylase, activated by glucagon, adds a phosphate to the glucose at the end of a chain and frees it as glucose-1-phosphate."},
{id:"m4d23",lo:"4.2",src:"L4",ref:"m4-lysis",type:"mc",kind:"ex",inv:["m4-lysis.c2"],
stem:"Which statement about glycogen metabolism is true?",
opts:["Glucose-6-phosphate stimulates glycogen synthesis","Degradation of glycogen usually produces more glucose than glucose-1-phosphate","Exercise increases glycogen synthesis","Glycogen phosphorylase adds glucose to the end of a chain"],ans:0,
exp:"G6P stimulates glycogen synthesis. Glycogen breakdown produces mostly glucose-1-phosphate, and exercise does not increase glycogen synthesis."},
{id:"m4d24",lo:"4.2",src:"L4",ref:"m4-lysis",type:"mc",kind:"fig",inv:["m4-lysis.c3","m4-tissue.c2"],fig:"q-tissue",
stem:"The figure compares glycogen breakdown in the liver and in skeletal muscle. Skeletal muscle lacks enzyme 2. Which enzyme is it?",
opts:["Glucose-6-phosphatase","Glycogen phosphorylase","Hexokinase","Glycogen synthase"],ans:0,
exp:"Skeletal muscle does not have glucose-6-phosphatase, so it cannot release glucose from the cell. Its glycogen serves only its own energy needs."},
{id:"m4d25",lo:"4.2",src:"L4",ref:"m4-lysis",type:"mc",kind:"ex",inv:["m4-lysis.c3"],
stem:"Which enzyme do skeletal muscle cells use to make G6P from glucose?",
opts:["Hexokinase","Glucokinase","Phosphoglucomutase","Glucose-6-phosphatase"],ans:0,
exp:"Myocytes use hexokinase instead of glucokinase. Otherwise glycogen synthesis in muscle is essentially the same as in the liver."},
// ---------------- L5 ----------------
{id:"m4e01",lo:"4.2",src:"L5",ref:"m4-gng",type:"mc",kind:"ex",inv:["m4-gng.c1"],
stem:"In gluconeogenesis, glucose is created from which molecules?",
opts:["Amino acids, lactate and glycerol","Glycogen, sucrose and lactose","Acetyl CoA, CO₂ and water","Ketones, citrate and NADH"],ans:0,
exp:"Gluconeogenesis creates glucose from molecules such as amino acids, lactate and glycerol, which come from β-oxidation and protein catabolism."},
{id:"m4e02",lo:"4.2",src:"L5",ref:"m4-gng",type:"mc",kind:"fig",inv:["m4-gng.c1"],fig:"q-loop",
stem:"The figure shows glucose and lactate moving between muscle and the liver. Which process is 1?",
opts:["Gluconeogenesis","Glycogenolysis","Glycogenesis","Pyruvate oxidation"],ans:0,
exp:"Lactate is one of the molecules the liver uses to create new glucose by gluconeogenesis."},
{id:"m4e03",lo:"4.2",src:"L5",ref:"m4-bypass",type:"mc",kind:"fig",inv:["m4-gng.c2","m4-bypass.c1"],fig:"q-bypass",
stem:"The figure compares glycolysis and gluconeogenesis. How does gluconeogenesis carry out the stretch marked A, from phosphoenolpyruvate to fructose 1,6-bisphosphate?",
opts:["With the glycolytic enzymes acting in reverse","With four enzymes not used in glycolysis","With pyruvate carboxylase and PEP carboxykinase","It cannot; that stretch is irreversible"],ans:0,
exp:"PEP is converted to fructose-1,6-bisphosphate by the glycolytic enzymes in reverse, from enolase to aldolase. Only the three irreversible steps need different enzymes."},
{id:"m4e04",lo:"4.2",src:"L5",ref:"m4-gng",type:"tf",kind:"ex",inv:["m4-gng.c3"],
stem:"Gluconeogenesis and glycolysis occur at the same time in liver cells.",ans:false,
exp:"Gluconeogenesis is energy expensive and highly regulated, and it does not occur at the same time as glycolysis."},
{id:"m4e05",lo:"4.2",src:"L5",ref:"m4-gng",type:"mc",kind:"fig",inv:["m4-gng.c4"],fig:"q-pepck",
stem:"The figure shows the most important point of regulation in gluconeogenesis. Which enzyme catalyzes this reaction?",
opts:["PEP carboxykinase","Pyruvate carboxylase","Pyruvate kinase","Fructose-1,6-bisphosphatase"],ans:0,
exp:"PEP carboxykinase converts oxaloacetate to PEP. It is the most important point of regulation and is regulated primarily by glucagon."},
{id:"m4e06",lo:"4.2",src:"L5",ref:"m4-gng",type:"mc",kind:"why",inv:["m4-gng.c4"],
stem:"Why does glucagon stimulate PEP carboxykinase?",
opts:["Glucagon is released when blood glucose is low, and gluconeogenesis raises blood glucose","Glucagon is released after a meal, when glucose must be stored","PEP carboxykinase breaks down glycogen","Glucagon signals that ATP is plentiful"],ans:0,
exp:"The pancreas releases glucagon when blood glucose is low, so glucagon stimulates gluconeogenesis to increase the blood glucose concentration."},
{id:"m4e07",lo:"4.4",src:"L5",ref:"m4-timeline",type:"mc",kind:"fig",inv:["m4-timeline.c1"],fig:"q-gsrc-c",fixed:true,
stem:"The graph shows where oxidized glucose comes from over time after a meal. Which curve is the only source of blood glucose after a whole day without food?",
opts:["A","B","C"],ans:2,
exp:"After a whole day without food, gluconeogenesis (curve C) is the only way to maintain blood glucose. Liver glycogen is depleted after about 24 hours."},
{id:"m4e08",lo:"4.4",src:"L5",ref:"m4-timeline",type:"mc",kind:"fig",inv:["m4-timeline.c1"],fig:"q-gsrc-c",
stem:"The graph shows where oxidized glucose comes from over time after a meal. About when do glycogenolysis (B) and gluconeogenesis (C) contribute nearly equally?",
opts:["12 to 18 hours after the meal","2 hours after the meal","2 days after the meal","40 days after the meal"],ans:0,
exp:"Around 12 to 18 hours after the last meal, glycogenolysis and gluconeogenesis contribute nearly equally to maintaining blood sugar."},
{id:"m4e09",lo:"4.4",src:"L5",ref:"m4-timeline",type:"mc",kind:"why",inv:["m4-timeline.c2"],
stem:"In starvation, why does it become really important to obtain food?",
opts:["When substrates for gluconeogenesis run low, blood sugar drops, and a prolonged drop can be fatal","Glycogen stores refill only after the next meal","The brain cannot use ketones","Gluconeogenesis stops as soon as glucagon rises"],ans:0,
exp:"When the body runs low on substrates for gluconeogenesis, blood sugar can drop (hypoglycemia). A significant decrease for an extended period can be fatal."},
{id:"m4e10",lo:"4.4",src:"L5",ref:"m4-timeline",type:"mc",kind:"ex",inv:["m4-timeline.c3"],
stem:"Which cells rely on glucose for almost all of their energy needs?",
opts:["Neurons, red blood cells and exercising skeletal muscle","Liver cells and resting skeletal muscle","Red blood cells only","Liver and kidney cells"],ans:0,
exp:"Neurons, red blood cells and, during exercise, skeletal muscle cells rely on glucose for almost all of their energy."},
{id:"m4e11",lo:"4.4",src:"L5",ref:"m4-timeline",type:"tf",kind:"ex",inv:["m4-timeline.c3"],
stem:"During the fed and fasting states, the brain uses only glucose for energy.",ans:true,
exp:"The brain uses around 70% of the body's glucose. It turns to other molecules, namely ketones, only in starvation."},
{id:"m4e12",lo:"4.2",src:"L5",ref:"m4-bypass",type:"mc",kind:"fig",inv:["m4-bypass.c4"],fig:"q-bypass",
stem:"The figure compares glycolysis and gluconeogenesis. Which enzyme is 1?",
opts:["Glucose-6-phosphatase","Glucokinase","Glycogen phosphorylase","Phosphoglucomutase"],ans:0,
exp:"Glucose-6-phosphatase converts G6P to glucose, bypassing hexokinase. The glucose can then leave the cell."},
{id:"m4e13",lo:"4.2",src:"L5",ref:"m4-bypass",type:"mc",kind:"fig",inv:["m4-bypass.c3"],fig:"q-bypass",
stem:"The figure compares glycolysis and gluconeogenesis. Which enzyme is 2?",
opts:["Fructose-1,6-bisphosphatase","Phosphofructokinase-2","Aldolase","Glucose-6-phosphatase"],ans:0,
exp:"Fructose-1,6-bisphosphatase removes one phosphate from fructose-1,6-bisphosphate to give fructose-6-phosphate, bypassing phosphofructokinase-1."},
{id:"m4e14",lo:"4.2",src:"L5",ref:"m4-bypass",type:"mc",kind:"fig",inv:["m4-bypass.c2"],fig:"q-bypass",
stem:"The figure compares glycolysis and gluconeogenesis. Which enzymes are 3 and 4?",
opts:["3 pyruvate carboxylase, 4 PEP carboxykinase","3 PEP carboxykinase, 4 pyruvate carboxylase","3 pyruvate dehydrogenase, 4 PEP carboxykinase","3 pyruvate carboxylase, 4 enolase"],ans:0,
exp:"Pyruvate carboxylase converts pyruvate into oxaloacetate, then PEP carboxykinase converts oxaloacetate to PEP. Together they bypass pyruvate kinase."},
{id:"m4e15",lo:"4.2",src:"L5",ref:"m4-bypass",type:"mc",kind:"ex",inv:["m4-bypass.c2"],
stem:"Pyruvate kinase cannot convert pyruvate back into PEP. How does gluconeogenesis make PEP from pyruvate?",
opts:["Pyruvate carboxylase makes oxaloacetate, then PEP carboxykinase makes PEP","PEP carboxykinase converts pyruvate directly to PEP","Pyruvate dehydrogenase makes acetyl CoA, which becomes PEP","Enolase converts pyruvate to PEP"],ans:0,
exp:"The first bypass step takes two enzymes: pyruvate carboxylase turns pyruvate into oxaloacetate, and PEP carboxykinase turns oxaloacetate into PEP."},
{id:"m4e16",lo:"4.2",src:"L5",ref:"m4-bypass",type:"mc",kind:"ex",inv:["m4-bypass.c3"],
stem:"Which pairs a glycolysis enzyme with its gluconeogenesis counterpart correctly?",
opts:["Phosphofructokinase-1 : fructose-1,6-bisphosphatase","Hexokinase : pyruvate carboxylase","Pyruvate kinase : glucose-6-phosphatase","Phosphofructokinase-1 : PEP carboxykinase"],ans:0,
exp:"Phosphofructokinase-1 pairs with fructose-1,6-bisphosphatase, pyruvate kinase with PEP carboxykinase and pyruvate carboxylase, and hexokinase with glucose-6-phosphatase."},
{id:"m4e17",lo:"4.2",src:"L5",ref:"m4-bypass",type:"mc",kind:"why",inv:["m4-bypass.c4"],
stem:"Why can the glucose made by gluconeogenesis in the liver enter the bloodstream?",
opts:["Glucose-6-phosphatase converts G6P to glucose, which can leave the cell","Pyruvate carboxylase exports glucose from the cell","G6P has its own membrane transporter","Glycogen synthase releases it into the blood"],ans:0,
exp:"G6P cannot leave the cell. Glucose-6-phosphatase catalyzes the final step, G6P to glucose, and the glucose can then enter the bloodstream."},
{id:"m4e18",lo:"4.2",src:"L5",ref:"m4-bypass",type:"mc",kind:"ex",inv:["m4-bypass.c1"],
stem:"How does gluconeogenesis get around the three irreversible steps of glycolysis?",
opts:["Four enzymes that are not involved in glycolysis","Three glycolytic enzymes run in reverse","Two enzymes, each used twice","Ten enzymes shared with glycolysis"],ans:0,
exp:"Gluconeogenesis uses four enzymes not involved in glycolysis to bypass the three irreversible steps. In all it has 11 steps and forms one glucose from 2 pyruvate."}

],

// Drills: les = lessons whose missed questions link to the drill; every text a tool shows carries inv (build-time only).
drills:[
{id:"m4d1",lo:"4.4",kind:"tool",tool:"gsrc",title:"Where blood glucose comes from",les:["m4-states","m4-timeline"],
intro:"Drag along the graph or press Play.",
curves:[{t:"Ingested glucose",inv:"m4-states.c4"},{t:"Glycogenolysis",inv:"m4-states.c4"},{t:"Gluconeogenesis",inv:"m4-states.c4"}],
gauge:{t:"Liver glycogen",inv:"m4-states.c2"},
phases:[
{to:2,state:"Fed",t:"Blood sugar rises, the pancreas releases insulin, and cells take up glucose to use or store it.",inv:"m4-states.c1"},
{to:12,state:"Fasting",t:"Begins about 2 hours after a meal. Insulin falls, glucagon rises, and liver glycogen is broken down and released to the blood as glucose.",inv:"m4-states.c2"},
{to:18,state:"Fasting",t:"About 12 to 18 hours after the last meal, glycogenolysis and gluconeogenesis contribute nearly equally to maintaining blood sugar.",inv:"m4-timeline.c1"},
{to:24,state:"Fasting",t:"Liver glycogen is running out. All of it is depleted after about 24 hours.",inv:"m4-states.c2"},
{to:null,state:"Starved",t:"After a whole day without food, gluconeogenesis is the only way to maintain blood glucose. Cells use fuels other than glucose, and the brain begins using ketones.",inv:["m4-states.c3","m4-timeline.c1","m4-timeline.c3"]}
]},
{id:"m4d2",lo:"4.2",kind:"tool",tool:"bypass",title:"The bypass steps",les:["m4-bypass","m4-gng"],
intro:"Pick a direction and press Play.",
dir:{
down:{title:"Glycolysis",start:{t:"Glycolysis runs from glucose down to pyruvate.",inv:"m4-gng.c2"},
steps:[{t:"Hexokinase: one of the three irreversible steps of glycolysis.",inv:"m4-bypass.c1"},
{t:"Phosphofructokinase-1: one of the three irreversible steps of glycolysis.",inv:"m4-bypass.c1"},
{t:"Pyruvate kinase: one of the three irreversible steps of glycolysis.",inv:"m4-bypass.c1"}],
end:{t:"Gluconeogenesis can't simply run these three steps backward. Switch to Gluconeogenesis to see how it gets around them.",inv:"m4-bypass.c1"}},
up:{title:"Gluconeogenesis",start:{t:"Gluconeogenesis is essentially the reverse of glycolysis: pyruvate back up to glucose.",inv:"m4-gng.c2"},
steps:[{t:"Pyruvate carboxylase turns pyruvate into oxaloacetate.",inv:"m4-bypass.c2"},
{t:"PEP carboxykinase turns oxaloacetate into PEP. With pyruvate carboxylase, it bypasses pyruvate kinase. It is the most important point of regulation, regulated primarily by glucagon.",inv:["m4-bypass.c2","m4-gng.c4"]},
{t:"From PEP up to fructose 1,6-bisphosphate, gluconeogenesis shares enzymes with glycolysis.",inv:"m4-gng.c2"},
{t:"Fructose-1,6-bisphosphatase removes a phosphate from fructose 1,6-bisphosphate to give fructose 6-phosphate, bypassing phosphofructokinase-1.",inv:"m4-bypass.c3"},
{t:"Glucose-6-phosphatase turns glucose 6-phosphate into glucose, bypassing hexokinase. The glucose can then leave the cell. It is not found in skeletal muscle.",inv:"m4-bypass.c4"}],
end:{t:"Four enzymes not used in glycolysis bypass its three irreversible steps. 2 pyruvate make 1 glucose.",inv:"m4-bypass.c1"}}
}},
{id:"m4d3",lo:"4.2",kind:"tool",tool:"regs",title:"Regulators of PFK-1 and pyruvate kinase",les:["m4-reg1","m4-reg2"],
intro:"Tap a signal.",
cmp:["Fructose 6-phosphate","Fructose 1,6-bisphosphate","Phosphoenolpyruvate","Pyruvate"],enz:["PFK-1","Pyruvate kinase"],leg:["× inhibits","+ activates"],
sig:[
{n:"ATP",pfk:-1,pk:-1,t:"ATP inhibits PFK-1 and pyruvate kinase. High levels mean the cell has ample energy.",inv:["m4-reg1.c3","m4-reg2.c2"]},
{n:"AMP",pfk:1,pk:0,t:"AMP activates PFK-1. AMP is normally very low, so when it builds up, too much ATP has been spent. It is a more sensitive regulator than ATP.",inv:"m4-reg1.c4"},
{n:"Citrate",pfk:-1,pk:-1,t:"Citrate inhibits PFK-1 and pyruvate kinase. High citrate means the citric acid cycle is producing plenty of energy.",inv:["m4-reg1.c3","m4-reg2.c2"]},
{n:"F2,6BP",pfk:1,pk:0,t:"Fructose-2,6-bisphosphate activates PFK-1. PFK-2 makes it from F6P in a parallel pathway, so a high F6P concentration tells PFK-1 to speed up.",inv:["m4-reg1.c4","m4-reg1.c5"]},
{n:"F1,6BP",at:1,pfk:0,pk:1,t:"Fructose-1,6-bisphosphate is made earlier in the pathway and activates pyruvate kinase, a later enzyme: feedforward stimulation.",inv:"m4-reg2.c1"},
{n:"PEP",at:2,pfk:-1,pk:1,t:"Phosphoenolpyruvate inhibits PFK-1 and activates pyruvate kinase.",inv:["m4-reg1.c3","m4-reg2.c1"]},
{n:"Alanine",pfk:0,pk:-1,t:"Alanine inhibits pyruvate kinase. In some cells it signals that the cell must make glucose, not break it down.",inv:"m4-reg2.c2"}
]}

]
});

// Study-guide highlight: must appear verbatim (tags stripped) inside one p, li or tr of the question's ref lesson.
(function(){const HL={
m4a01:"A single sugar molecule, sometimes called a simple sugar. The smallest.",
m4a02:"Sucrose (table sugar) = glucose + fructose.",
m4a03:"Lactose (milk sugar) = glucose + galactose.",
m4a04:"They differ only in complexity, due to the number and types of branches.",
m4a05:"are composed of repeating disaccharide units and provide external support for cells in human tissues",
m4a06:"Disaccharides: plain yogurt, coffee with sugar",
m4a07:"an enzyme whose sole function is to cleave the bond between the two sugars",
m4a08:"so it continues to the large intestine, where bacteria metabolize it and produce gas",
m4a09:"The general formula is Cₙ(H₂O)ₙ.",
m4a10:"That is why they are called carbohydrates. They are hydrates (H₂O) of carbon (C).",
m4a11:"3. Mostly intermediates formed in metabolic pathways.",
m4a12:"5. Important for the metabolism of nucleic acids and the functioning of enzymes.",
m4a13:"6. The predominant carbohydrates used for energy",
m4a14:"The atoms are bonded in different ways. Example: glucose and fructose.",
m4a15:"are substances that have identical molecular formulas but different structures.",
m4a16:"Arrangement relative to space. Example: D-glucose and L-glucose.",
m4a17:"the enzymes we use to metabolize glucose only recognize and act on this form.",
m4a18:"the carbonyl is attached within the carbon chain. A sugar with a ketone is a ketose.",
m4a19:"A sugar with a ketone is a ketose.",
m4a20:"From the lecture's check: glucose is an aldose, fructose is a ketose and galactose is an aldose.",
m4a21:"In solutions like those in the body this cyclization occurs automatically",
m4b01:"Gluconeogenesis, pentose phosphate pathway",
m4b02:"Glycogenesis stores glucose as glycogen.",
m4b03:"Pyruvate oxidation, in the mitochondrial matrix",
m4b04:"Aerobic glycolysis is preferred because it produces significantly more ATP.",
m4b05:"which makes ATP through electron transfer in the mitochondria",
m4b06:"In glycolysis it happens at two steps, both in Phase II:",
m4b07:"Three of the ten steps are rate-limiting:",
m4b08:"Breaking down one glucose uses 2 ATP and produces 4 ATP, so the net gain is 2 ATP.",
m4b09:"Transfers a phosphate from ATP to F6P to form fructose-1,6-bisphosphate (F1,6BP)",
m4b10:"Splits the 6-carbon F1,6BP into two 3-carbon sugars",
m4b11:"Its isoform glucokinase does it in the liver.",
m4b12:"It acts on glucose as soon as it enters the cell, even in low quantities.",
m4b13:"If G6P builds up, it binds hexokinase and G6P production slows.",
m4b14:"Glucokinase is not inhibited by G6P.",
m4b15:"AMP, fructose-2,6-bisphosphate (F2,6BP)",
m4b16:"AMP is normally very low because it is rapidly converted to ADP",
m4b17:"Glycolysis breaks one glucose into two pyruvate. It takes place in the cytoplasm",
m4b18:"One glucose (a hexose, 6 carbons) is cleaved into two phosphorylated trioses (3 carbons each). ATP provides the phosphates.",
m4b19:"The two trioses are oxidized and then transfer their phosphates to ADP.",
m4b20:"Transfers a phosphate from ATP to glucose to produce glucose-6-phosphate (G6P).",
m4b21:"Rearranges G6P into its isomer, fructose-6-phosphate (F6P).",
m4b22:"only G3P can serve as the substrate for the next step",
m4b23:"G6P cannot leave the cell, because no membrane transporter carries it",
m4b24:"ATP, citrate, phosphoenolpyruvate (PEP)",
m4b25:"A high concentration of F6P therefore produces F2,6BP, and F2,6BP tells PFK-1 to speed up.",
m4c01:"NAD⁺ is the low-energy, uncharged form and NADH the high-energy, charged form.",
m4c02:"is the acetyl group carrier. It moves an acetyl group from a substrate onto itself, or the reverse, using a sulfur group.",
m4c03:"It starts with the two G3P made from one glucose in Phase I, and both run through these steps in parallel.",
m4c04:"G3P to 1,3-bisphosphoglycerate (1,3-BPG), in two parts",
m4c05:"a hydrogen is removed and transferred to NAD⁺, forming NADH, then a free phosphate from the cytosol is attached.",
m4c06:"The phosphate is transferred from 1,3-BPG to ADP to form ATP, the first ATP.",
m4c07:"The phosphate is moved over to prepare for the next step.",
m4c08:"The final phosphate on PEP goes to ADP, forming pyruvate and the second ATP.",
m4c09:"The reaction is irreversible.",
m4c10:"fructose-1,6-bisphosphate (F1,6BP) and phosphoenolpyruvate (PEP).",
m4c11:"which speeds the later steps when the earlier steps are producing a lot of product",
m4c12:"ATP, citrate and alanine.",
m4c13:"indicates in some cells that the cell must make glucose and therefore not break it down.",
m4c14:"Intermediates regulate glycolytic enzymes through both feedback and feedforward mechanisms: true.",
m4c15:"If oxygen is available, it is oxidized, moves into the mitochondria and enters the citric acid cycle",
m4c16:"Pyruvate passes through the mitochondrial membrane using a protein transporter",
m4c17:"A carboxyl group is removed from pyruvate and released as CO₂",
m4c18:"for every glucose that enters glycolysis, this pathway runs twice.",
m4c19:"ATP is only generated through glycolysis, so only 2 ATP are made, which is much less efficient.",
m4c20:"Glycolysis consumes NAD⁺ and creates NADH.",
m4c21:"When aerobic respiration cannot proceed, NADH is not recycled, and without NAD⁺ glycolysis cannot proceed.",
m4c22:"converts pyruvate to lactate, using NADH and thereby regenerating NAD⁺.",
m4c23:"Cells that produce it release it into the blood to travel to the liver, where it can be used.",
m4c24:"do not contain mitochondria, so they don't use the oxygen they carry. Anaerobic glycolysis is the only way they get energy.",
m4d01:"link glucose into the linear chains.",
m4d02:"link glucose to form the branches.",
m4d03:"because they allow rapid access to many glucose molecules.",
m4d04:"Yes. The liver is the only tissue that can use glycogen for this.",
m4d05:"No. Only the muscle cell itself can use the glucose.",
m4d06:"is the synthesis of glycogen.",
m4d07:"directs the body to break down glycogen.",
m4d08:"When blood sugar is high, it stimulates glycogenesis and inhibits glycogenolysis.",
m4d09:"When blood sugar is low, it inhibits glycogenesis and stimulates glycogenolysis.",
m4d10:"Insulin decreases and glucagon increases.",
m4d11:"Glycogenolysis rises early in fasting and is gone by about a day.",
m4d12:"Digestion and absorption raise blood sugar. The pancreas releases insulin",
m4d13:"Fasting (post-absorptive)",
m4d14:"until liver glycogen is depleted, which takes about 24 hours.",
m4d15:"In the fed state, though, ATP builds up in the hepatocyte and halts glycolysis.",
m4d16:"Phosphoglucomutase forms glucose-1-phosphate (G1P) from G6P.",
m4d17:"to form UDP-glucose. The UDP comes from uridine triphosphate (UTP)",
m4d18:"UDP-glucose is the main donor of glucose during the synthesis of glycogen: true.",
m4d19:"Glycogen synthase is the key enzyme responsible for glycogen synthesis, and it is rate-limiting.",
m4d20:"UDP-glucose is attached to glycogenin, which serves as a foundation that can be built upon.",
m4d21:"The rate-limiting enzymes in glycogen synthesis and degradation are glycogen synthase and glycogen phosphorylase: true.",
m4d22:"which is activated in the presence of glucagon",
m4d23:"Glucose-6-phosphate stimulates glycogen synthesis: true.",
m4d24:"Absent, so glucose cannot be released from the cell",
m4d25:"Hexokinase",
m4e01:"glucose is created from other molecules such as amino acids, lactate and glycerol.",
m4e02:"lactate made by glycolysis in muscle travels to the liver, where gluconeogenesis turns it back into glucose.",
m4e03:"by the glycolytic enzymes acting in reverse",
m4e04:"Gluconeogenesis and glycolysis do not occur at the same time.",
m4e05:"which converts oxaloacetate to PEP. The enzyme is regulated primarily by glucagon.",
m4e06:"so it makes sense that glucagon stimulates gluconeogenesis to increase the blood glucose concentration.",
m4e07:"a state of starvation, gluconeogenesis is the only way to maintain blood glucose.",
m4e08:"glycogenolysis and gluconeogenesis contribute nearly equally to maintaining blood sugar.",
m4e09:"When the body runs low on substrates for gluconeogenesis, blood sugar can drop (hypoglycemia).",
m4e10:"neurons, red blood cells and, during exercise, skeletal muscle cells.",
m4e11:"During the fed and fasting states, the brain uses only glucose for energy",
m4e12:"Glucose-6-phosphatase catalyzes the final step, G6P to glucose.",
m4e13:"Fructose-1,6-bisphosphatase then removes one phosphate to give fructose-6-phosphate.",
m4e14:"Pyruvate carboxylase converts pyruvate into oxaloacetate. PEP carboxykinase then converts oxaloacetate to PEP.",
m4e15:"Pyruvate kinase cannot convert pyruvate back into PEP, so two different enzymes do it.",
m4e16:"Phosphofructokinase-1",
m4e17:"The new glucose can leave the cell and enter the bloodstream to be used by other tissues.",
m4e18:"gluconeogenesis uses four enzymes that are not involved in glycolysis."};
const M=MODS[MODS.length-1];M.questions.forEach(q=>{if(HL[q.id])q.hl=HL[q.id];});})();

// Lecture window: question -> [lecture block, snippet copied verbatim from one text element of that block].
// The block must be in the lesson named by q.src. A list of snippets marks each one.
(function(){const LEC={
m4a01:["m4L1-b10","Examples include glucose and fructose (pictured below)."],
m4a02:["m4L1-b12","Sucrose is composed of one glucose molecule and one fructose molecule bound together."],
m4a03:["m4L1-b14","Lactose is composed of one glucose molecule and one galactose molecule bound together."],
m4a04:["m4L1-b17","They only differ in complexity due to the number and types of branches within."],
m4a05:["m4L1-b17","glycosaminoglycans are composed of repeating disaccharide units and provide external support for cells in human tissues"],
m4a06:["m4L1-b21","Plain Yogurt, Coffee with sugar"],
m4a07:["m4L1-b14","This is accomplished by an enzyme called lactase, whose sole function is to cleave the bond between the two sugars that make up lactose."],
m4a08:["m4L1-b14","it continues along the GI tract to the large intestine and becomes a source of energy for bacteria there"],
m4a09:["m4L1-b36","Which of the following chemical formulas represents a monosaccharide?"],
m4a10:["m4L1-b22","This is why they are called carbohydrates. They are hydrates (H2O) of carbon (C)."],
m4a11:["m4L1-b25","Triose sugars, made of 3 carbons bound together, are mostly intermediates formed in metabolic pathways."],
m4a12:["m4L1-b25","Pentose sugars, made of 5 carbons bound together, are important for the metabolism of nucleic acids and the functioning of enzymes."],
m4a13:["m4L1-b25","Hexose sugars, made of 6 carbons bound together, are the predominant type of carbohydrates used for energy"],
m4a14:["m4L1-b30","glucose and fructose are structural isomers. They have the same chemical formula, but the atoms are bonded in different ways."],
m4a15:["m4L1-b30","The term isomer refers to substances that have identical molecular formulas but different structures"],
m4a16:["m4L1-b30","Stereoisomers, in contrast, have the same chemical formulas and bonds, but differ in their arrangement relative to space."],
m4a17:["m4L1-b30","the enzymes we use to metabolize glucose only recognize and act on this form"],
m4a18:["m4L1-b37","In ketones, the carbonyl is attached within the carbon chain."],
m4a19:["m4L1-b39","Those that contain a ketone group are called ketoses."],
m4a20:["m4L1-b39","Those that contain an alodehyde group are called aldoses."],
m4a21:["m4L1-b42","in solutions (like those in the human body) this cyclization occurs automatically"],
m4b01:["m4L2-b5","The synthesis (anabolism) of glucose occurs through"],
m4b02:["m4L2-b7","Storing glucose requires energy (-ATP)."],
m4b03:["m4L2-b12","From top to bottom, these are: glycolysis, pyruvate oxidation, the citric acid cycle, and oxidative phosphorylation."],
m4b04:["m4L2-b14","aerobic glycolysis is preferred because it produces significantly more ATP"],
m4b05:["m4L2-b17","which occurs through electron transfer in the mitochondria"],
m4b06:["m4L2-b19",["In step 7, phosphoglycerate kinase converts 1,3-bisphosphoglycerate (1,3-BPG) to 3-phosphoglycerate, producing one ATP.","In step 10, pyruvate kinase converts phosphoenolpyruvate (PEP) into pyruvate, producing one ATP."]],
m4b07:["m4L2-b22","In glycolysis, the rate-limiting steps are catalyzed by the enzymes"],
m4b08:["m4L2-b28","the entire process produces 4 ATP, meaning there is a net gain of 2 ATP"],
m4b09:["m4L2-b31","A phosphate group is transferred from ATP to F6P to form fructose bisphosphate (F1,6P)."],
m4b10:["m4L2-b31","F1, 6P is split to form 2 smaller 3-carbon sugars with aldehyde groups (aldotrioses)"],
m4b11:["m4L2-b37","Has a higher Vmax, so when it is activated, glucose is converted rapidly."],
m4b12:["m4L2-b37","Allows glucose to be metabolized for energy production any time glucose is present, even in low quantities."],
m4b13:["m4L2-b42","If G6P builds up, it binds hexokinase and inhibits its function, resulting in slower G6P production."],
m4b14:["m4L2-b42","Glucokinase is not inhibited by G6P"],
m4b15:["m4L2-b44","ACTIVATORS OF PFK-1: AMP and fructose-2, 6-bisphosphate"],
m4b16:["m4L2-b44","AMP is usually in very low concentration"],
m4b17:["m4L2-b15",["breaking it down into two smaller pyruvate molecules","Once glucose is in the cytoplasm of the cell"]],
m4b18:["m4L2-b27","one glucose (a hexose or 6 carbon sugar) is cleaved into two phosphate bound (phosphorylated) trioses (3 carbon sugars). ATP provides the phosphates"],
m4b19:["m4L2-b27","the two trioses produced in phase one are oxidized, and then transfer their phosphates to ADP"],
m4b20:["m4L2-b31","A phosphate group is transferred to glucose to produce glucose-6-phosphate (G6P)."],
m4b21:["m4L2-b31",["G6P converted to Fructose-6-Phosphate (F6P).","F6P is an isomer of G6P."]],
m4b22:["m4L2-b31","only G3P can serve as a substrate for the next step, so DHAP must be converted"],
m4b23:["m4L2-b36","G6P cannot leave the cell, because there is no membrane transporter that it can pass through."],
m4b24:["m4L2-b44","INHIBITORS OF PFK-1: ATP, citrate, and phosphoenolpyruvate"],
m4b25:["m4L2-b44",["PFK-2 turns F6P, which is also the substrate for PFK-1, into F2,6BP.","When there is a high concentration of F6P, PFK-2 creates F2,6BP to send the message to increase the rate."]],
m4c01:["m4L3-b7","When NAD gains an electron, it forms the high-energy NADH"],
m4c02:["m4L3-b8","CoA plays the role of acetyl group carrier in glucose metabolism."],
m4c03:["m4L3-b2","the products of phase 1 are further metabolized in 2 parallel pathways to produce energy"],
m4c04:["m4L3-b14","G3P is converted to 1,3-bisphosphoglycerate (1,3-BPG)"],
m4c05:["m4L3-b14",["Step 1 removes a hydrogen and transfer it to NAD+, forming NADH.","Step 2 takes a free Pi from the cytosol and attaches it to the now oxidized G3P, forming 1,3-BPG."]],
m4c06:["m4L3-b14","This is an energy generating step - we have formed the first of two ATP."],
m4c07:["m4L3-b14",["The phosphate is moved over to help prepare for the next step.","Water is formed and released from the 2-phosphoglycerate."]],
m4c08:["m4L3-b14","The final phosphate in PEP is transferred to ADP, resulting in the formation of Pyruvate and ATP."],
m4c09:["m4L3-b17","The conversion of PEP to pyruvate by pyruvate kinase is irreversible and highly regulated."],
m4c10:["m4L3-b19","ACTIVATORS OF PYRUVATE KINASE: Fructose-1, 6-bisphosphate (F1,6BP) and Phosphoenolpyruvate (PEP)"],
m4c11:["m4L3-b19","The purpose of the activation of pyruvate kinase by F1,6BP is to speed up the later steps of glycolysis when the earlier steps are producing a lot of products."],
m4c12:["m4L3-b19","INHIBITORS OF PYRUVATE KINASE: ATP, citrate, and alanine"],
m4c13:["m4L3-b19","When alanine is in high concentration, in some cells, it indicates that the cell must make glucose and therefore not catabolize it."],
m4c14:["m4L3-b21","Intermediates of glycolysis can regulate glycolytic enzymes through both feedback and feedforward mechanisms."],
m4c15:["m4L3-b26","If oxygen is available, pyruvate will take the first road and be oxidized and transported into the mitochondria, and enter the citric acid cycle where aerobic metabolism will continue."],
m4c16:["m4L3-b28","pyruvate can pass through the mitochondrial membrane using a protein transporter"],
m4c17:["m4L3-b31","Pyruvate dehydrogenase removes a carboxyl group from pyruvate."],
m4c18:["m4L3-b30","for every glucose that enters glycolysis, two pyruvates are produced and then oxidized in this pathway"],
m4c19:["m4L3-b32","In anaerobic metabolism, ATP is only generated through glycolysis, so only 2 ATP are generated"],
m4c20:["m4L3-b36","During glycolysis, NAD+ is consumed and NADH is created."],
m4c21:["m4L3-b36","Therefore, when aerobic respiration cannot proceed, NADH is not recycled back to NAD+."],
m4c22:["m4L3-b36","Lactate dehydrogenase is an enzyme that converts pyruvate to lactate, using NADH in the process, and thereby regenerating NAD+."],
m4c23:["m4L3-b38","So, cells that produce lactate will release it into the blood stream to travel to the liver where it can be used."],
m4c24:["m4L3-b38","red blood cells do not contain mitochondria"],
m4d01:["m4L4-b6","The links between glucose that form the linear structure"],
m4d02:["m4L4-b6","The links between glucose that form branches"],
m4d03:["m4L4-b5","it allows for rapid access to many glucose molecules"],
m4d04:["m4L4-b9","Only one tissue in the body can use glycogen for this purpose, the liver."],
m4d05:["m4L4-b9","In skeletal muscle, glucose is also stored as glycogen, however, it is not released into the blood."],
m4d06:["m4L4-b12","The term glycogenesis is used to describe the synthesis of glycogen."],
m4d07:["m4L4-b14","Directs the body to breakdown glycogen."],
m4d08:["m4L4-b14","it stimulates glycogenesis and inhibits glycogenolysis when blood sugar is high"],
m4d09:["m4L4-b14","it inhibits glycogenesis and stimulates glycogenolysis when blood sugar is low"],
m4d10:["m4L4-b17","The decrease in blood glucose leads to decreased insulin production and increased glucagon production by the pancreas."],
m4d11:["m4L4-b17","until all the glycogen stores in the liver are depleted, which takes about 24 hours"],
m4d12:["m4L4-b17","The rise in blood sugar triggers the pancreas to release insulin."],
m4d13:["m4L4-b17","This is the beginning of the fasting state, also called the post-absorptive state."],
m4d14:["m4L4-b17","the liver will begin to build new glucose molecules"],
m4d15:["m4L4-b22","during the fed state, ATP will build up in the hepatocyte, halting glycolysis"],
m4d16:["m4L4-b23","In step 1 of Glycogenesis, phosphoglucomutase forms glucose-1-phosphate (G1P) from G6P."],
m4d17:["m4L4-b23","Uridine diphosphate attaches to the G1P to form UDP-Glucose."],
m4d18:["m4L4-b29","Uridine diphosphate (UDP) glucose is the main donor of glucose during the synthesis of glycogen."],
m4d19:["m4L4-b27","Glycogen synthase is again the key enzyme responsible for glycogen synthesis."],
m4d20:["m4L4-b23","Next, the UDP-glucose molecule is attached to another molecule called glycogenin."],
m4d21:["m4L4-b29","The rate limiting enzymes in glycogen synthesis and degradation are glycogen synthase and glycogen phosphorylase."],
m4d22:["m4L4-b26","catalyzed by the enzyme glycogen phosphorylase, which is activated in the presence of glucagon"],
m4d23:["m4L4-b29","Glucose-6-phosphate stimulates glycogen synthesis."],
m4d24:["m4L4-b27","skeletal muscle does not have the enzyme glucose-6-phosphatase"],
m4d25:["m4L4-b27","myocytes use hexokinase, instead of glucokinase, to make G6P from glucose"],
m4e01:["m4L5-b3","In gluconeogenesis, glucose is created from other molecules such as amino acids, lactate, and glycerol."],
m4e02:["m4L5-b3","In gluconeogenesis, glucose is created from other molecules such as amino acids, lactate, and glycerol."],
m4e03:["m4L5-b14","through the reverse actions of the glycolytic enzymes"],
m4e04:["m4L5-b16","so gluconeogenesis and glycolysis do not occur at the same time"],
m4e05:["m4L5-b16","The most important point of regulation is the reaction catalyzed by PEP carboxykinase, which converts oxaloacetate to PEP."],
m4e06:["m4L5-b16","it makes sense that glucagon would stimulate gluconeogenesis in order to increase the blood glucose concentration"],
m4e07:["m4L5-b6","gluconeogenesis is the only way to maintain blood glucose"],
m4e08:["m4L5-b4","Around 12-18 hours after the last meal, glycogenolysis and gluconeogenesis contribute nearly equally to maintaining blood sugar."],
m4e09:["m4L5-b6","a significant decrease in blood glucose for an extended period of time can be fatal"],
m4e10:["m4L5-b7","Some cells rely upon glucose for almost all of their energy needs, including neurons, red blood cells, and, during exercise, skeletal muscle cells."],
m4e11:["m4L5-b7","During the fed and fasting states, the cells of the brain use only glucose to derive energy."],
m4e12:["m4L5-b14","the conversion of glucose 6-phosphate to glucose"],
m4e13:["m4L5-b14","fructose 1,6-bisphosphate is converted to fructose 6-phosphate by the enzyme fructose 1,6-bisphosphotase, by removing one phosphate"],
m4e14:["m4L5-b14","First, pyruvate carboxylase converts pyruvate into oxaloacetate. Next, the enzyme PEP carboxykinase converts oxaloacetate to PEP."],
m4e15:["m4L5-b14","Since pyruvate kinase cannot do so, we need to use different enzymes to convert pyruvate back into PEP."],
m4e16:["m4L5-b15","Phosphofructokinase-1 : Fructose-1,6,Bisphosphatase"],
m4e17:["m4L5-b14","The newly created glucose molecule can then leave the cell and enter the blood stream, to be used by other tissues."],
m4e18:["m4L5-b10","to bypass the three irreversible steps (red), gluconeogenesis utilizes four enzymes (blue) that are not involved in glycolysis"]};
const M=MODS[MODS.length-1];
M.lecture="m4";
// Lecture blocks whose wording is off -> the lesson whose note explains it.
M.lecnotes={"m4L5-b3":["m4-gng"],"m4L4-b17":["m4-states"],"m4L4-b22":["m4-genesis"],"m4L4-b27":["m4-lysis"],"m4L1-b22":["m4-formula"],"m4L3-b13":["m4-ph2"],"m4L3-b14":["m4-ph2"],"m4L3-b19":["m4-reg2"],"m4L3-b31":["m4-pdh"],"m4L3-b32":["m4-anaer"],"m4L3-b38":["m4-anaer"],"m4L2-b14":["m4-map"],"m4L2-b29":["m4-ph1"],"m4L2-b37":["m4-hkgk"],"m4L2-b43":["m4-reg1"]};
M.questions.forEach(q=>{if(LEC[q.id])q.lec={b:LEC[q.id][0],hl:LEC[q.id][1]};});})();
