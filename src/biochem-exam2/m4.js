// Module 4: Carbohydrates (LOs 4.1, 4.2, 4.4)
// Lessons: one per inventory.js entry, same id, in lecture order inside each LO. Lecture figures go in through img.
// Questions: id = m4 + lecture letter (a = L1, b = L2, c = L3, d = L4, e = L5) + number. src = lecture lesson, ref = lesson id.
// kind = fig | ex | why and inv = inventory items covered; both are build-time only and never shown.
// HL (study-guide highlight) and LEC (lecture block + verbatim snippet) maps are at the bottom.
MODS.push({
id:"m4", short:"M4", name:"Module 4: Carbohydrates",
los:[
{id:"4.1", nick:"Types of carbohydrates", title:"Types and structures of carbohydrates"},
{id:"4.2", nick:"Glucose metabolism", title:"Glucose metabolism: glycolysis, pyruvate oxidation, glycogen metabolism and gluconeogenesis"},
{id:"4.4", nick:"Altered carbohydrate metabolism", title:"Blood sugar regulation and altered carbohydrate metabolism"}
],

guide:{
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
nl:"Lecture numbers",note:`The aerobic total is given as 32 ATP per glucose in this lesson and 36 in the next. Both are far above the 2 ATP made without oxygen, and that comparison is the point.`,
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
nl:"Lecture wording",note:`The figure labels the step 2 enzyme phosphohexose isomerase. The text and the knowledge check call it phosphoglucose isomerase. It is one enzyme with two names. The step 3 product is written both F1,6P and F1,6BP in the lecture.`,
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
so:"G6P inhibits hexokinase. ATP, citrate and PEP inhibit PFK-1. AMP and F2,6BP activate it."}
]
},

questions:[
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
opts:["Fructose-2,6-bisphosphate","Phosphoenolpyruvate","Glucose-6-phosphate","Fructose-6-phosphate"],ans:0,
exp:"The activators of PFK-1 are AMP and fructose-2,6-bisphosphate. Phosphoenolpyruvate is an inhibitor and belongs at 1."},
{id:"m4b16",lo:"4.2",src:"L2",ref:"m4-reg1",type:"mc",kind:"why",inv:["m4-reg1.c4"],
stem:"Why is AMP a more sensitive regulator of phosphofructokinase-1 than ATP?",
opts:["AMP is normally very low, so a rise in AMP stands out","AMP is always at a high concentration in the cell","AMP is a product of the citric acid cycle","AMP is made from F6P by phosphofructokinase-2"],ans:0,
exp:"ATP is always abundant. AMP is normally very low because it is rapidly converted to ADP, so a rise in AMP means too much ATP has been spent."}
],

drills:[]
});

// Study-guide highlight: must appear verbatim (tags stripped) inside one p, li or tr of the question's ref lesson.
(function(){const HL={
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
m4b16:"AMP is normally very low because it is rapidly converted to ADP"};
const M=MODS[MODS.length-1];M.questions.forEach(q=>{if(HL[q.id])q.hl=HL[q.id];});})();

// Lecture window: question -> [lecture block, snippet copied verbatim from one text element of that block].
// The block must be in the lesson named by q.src. A list of snippets marks each one.
(function(){const LEC={
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
m4b16:["m4L2-b44","AMP is usually in very low concentration"]};
const M=MODS[MODS.length-1];
M.lecture="m4";
// Lecture blocks whose wording is off -> the lesson whose note explains it.
M.lecnotes={"m4L2-b14":["m4-map"],"m4L2-b29":["m4-ph1"],"m4L2-b37":["m4-hkgk"],"m4L2-b43":["m4-reg1"]};
M.questions.forEach(q=>{if(LEC[q.id])q.lec={b:LEC[q.id][0],hl:LEC[q.id][1]};});})();
