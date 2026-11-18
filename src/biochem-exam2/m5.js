// Module 5: Lipids (LOs 5.1 to 5.4)
// Lessons: one per inventory.js entry, same id, in lecture order inside each LO. Lecture figures go in through img.
// Questions: id = m5 + lecture letter (a = L1, b = L2, c = L3, d = L4, e = L5) + number. src = lecture lesson, ref = lesson id.
// kind = fig | ex | why and inv = inventory items covered; both are build-time only and never shown.
// HL (study-guide highlight) and LEC (lecture block + verbatim snippet) maps are at the bottom.
MODS.push({
id:"m5", short:"M5", name:"Module 5: Lipids",
los:[
{id:"5.1", nick:"Lipid structure", title:"Relate the structure of different lipids to their biological role."},
{id:"5.2", nick:"Fatty acid metabolism", title:"Diagram the cellular location, rate-limiting steps, products, and regulation of fatty acid degradation and synthesis."},
{id:"5.3", nick:"TAG, phospholipid, cholesterol", title:"Explain how triacylglycerols, phospholipids, and cholesterol are synthesized, transported, and used."},
{id:"5.4", nick:"Lipids in infection and immunity", title:"Investigate the role of lipids in microbial infections or immunological response."}
],

guide:{
"5.1":[
// ---------------- L1 Lipid Structure and Function ----------------
{id:"m5-fatag",h:"Fatty acids and triglycerides",
img:{src:"lectures/biochem-exam2/img/m5/image-62a0d3a8c78ac.webp",alt:"Glycerol and a free fatty acid, and a triglyceride: a glycerol backbone with three fatty acid chains attached",credit:"Lecture figure, Lesson 1."},
b:`<p>Module 1 introduced the main classes of lipids: triglycerides, phospholipids, and steroids and waxes. This lesson adds detail to each, starting with the fatty acids (FAs), the building blocks of the triglycerides.</p>
<p>A <b>fatty acid</b> is a chain of carbon atoms with a methyl group (-CH₃) at one end and a carboxylic acid group (-COOH), the acid part of the name, at the other end. The length of the chain can vary. Other structures can be linked to the carboxyl end through ester bonds.</p>
<p>A <b>triglyceride</b> is the storage form of fatty acids: three fatty acids combined together by a glycerol backbone, attached through ester bonds. We store these fatty acids in our adipose tissue.</p>
<p>The fatty acid is the derived lipid, coming from the hydrolysis of the triglyceride. The two terms are often used interchangeably, because the part we care about for metabolism is the fatty acid and the triglyceride is just how we store it. They are not the same thing: a fatty acid is one part of a triglyceride.</p>`,
so:"A fatty acid is one chain. A triglyceride is three of them on glycerol, stored in adipose tissue."},

{id:"m5-roles",h:"What fats do",
b:`<p>Fats provide high energy, about twice as much energy as carbohydrates, for long-term use. They have other roles as well.</p>
<ul><li><b>Thermal insulation.</b> Adipose tissue, where we store fat, maintains the temperature of our subcutaneous tissues and vital organs.</li>
<li><b>Electrical insulation.</b> Fats make up the myelin sheath around nerve cells, which allows rapid passage of action potentials down long axons. This is vital for quick communication between nerves.</li>
<li><b>Absorbing nutrients.</b> Many vitamins and nutrients are nonpolar, so they will not dissolve in water. For the body to absorb them, they need to dissolve in fat.</li>
<li><b>Other functions.</b> Fats, especially omegas, also assist with hormone production, blood clotting, brain function, cholesterol transport and inflammation.</li></ul>
<p><b>Prostaglandins</b> are one type of fat. They act as a hormone found in almost every mammalian tissue. They trigger the inflammatory response in cases of injury and illness, affect blood flow for blood clotting, and help induce labor.</p>
<p>From the lecture's check: as fat, I am both a thermal and electrical insulator.</p>`,
so:"Long-term energy, thermal and electrical insulation, absorbing nonpolar nutrients, and signals such as prostaglandins."},

{id:"m5-sat",h:"Saturated, cis, trans, omega-3",
img:{src:"lectures/biochem-exam2/img/m5/file-62a0eba76b7ee.webp",alt:"Four fatty acid chains: saturated with only single bonds, monounsaturated cis with one double bond and a bend, polyunsaturated cis omega-3 with three double bonds, and monounsaturated trans with one double bond and a straight chain",credit:"Lecture figure, Lesson 1."},
b:`<p>Fatty acids are sorted by their double bonds, and the bonds decide how tightly the chains pack.</p>
<table><tr><th>Type</th><th>Bonds and packing</th><th>Room temperature</th></tr>
<tr><td>Saturated</td><td>No double bonds, all carbon-carbon single bonds. Tightly packed, higher melting temperature.</td><td>Solid. Typically animal fats.</td></tr>
<tr><td>Cis unsaturated</td><td>One or more double bonds in the cis formation. Loosely packed, lower melting temperature.</td><td>Liquid. Typically plant-based fats.</td></tr>
<tr><td>Trans unsaturated</td><td>Double bonds in the trans formation. Man-made during food processing.</td><td>Likely to stay solid</td></tr></table>
<p><b>Saturated</b> fatty acids have the full amount of hydrogens possible. They cannot take any more on.</p>
<p>An <b>unsaturated</b> fatty acid contains one or more double bonds. A monounsaturated fat contains a single double bond, and a polyunsaturated fat contains two or more. When fats are unsaturated in nature, they are almost always in the cis formation.</p>
<p><b>Trans fats.</b> When fats are saturated during food processing, the saturation is man-made, and the double bonding typically occurs in the trans formation rather than the cis formation. Their structure makes trans fats harder to break down. They are likely to stay solid, clogging arteries and leading to cardiovascular disease. They are found in shortenings and margarines, any time a traditionally liquid fat is turned into a solid fat, and in foods made with these, like fried foods and baked goods.</p>
<p>Trans fats also hide under another name, <b>partially hydrogenated oil</b>. It is used to increase the shelf life of products, but it converts the cis bonds to trans bonds.</p>
<p><b>Omega-3 fatty acids</b> are unsaturated fatty acids in which the double bonding starts on the third carbon from the end of the chain. They are great for brain and nervous system power. Several are essential, meaning we must obtain them in our diet because we do not produce them ourselves. Fish and nuts are great sources.</p>
<p>From the lecture's check: a fatty acid full of single bonds is a saturated fatty acid, a man-made unsaturated FA is a trans fat, and partially hydrogenated oil is another name for a trans fat.</p>`,
nl:"Lecture wording",note:`The trans fat paragraph says trans fats end up with an even higher melting point than saturated fats. The points to know are that trans fats are man-made, harder to break down and likely to stay solid, while natural cis fats are liquid at room temperature.`,
so:"Saturated: single bonds, solid, animal. Cis: double bonds, liquid, plant. Trans: man-made, stays solid. Omega-3: double bonds start at the third carbon from the end."},

{id:"m5-complex",h:"Phospholipids and glycolipids",
img:{src:"lectures/biochem-exam2/img/m5/file-62a11ed5728bd.webp",alt:"Block diagrams and structures of a glycerophospholipid (alcohol, phosphate, glycerol and two fatty acids) and two sphingolipids: sphingomyelin (alcohol, phosphate, sphingosine and one fatty acid) and a glycosphingolipid (sugar, sphingosine and one fatty acid)",credit:"Lecture figure, Lesson 1."},
b:`<p><b>Complex lipids</b> are lipids that have the typical alcohol and one or two fatty acids, plus another group. They often have a nitrogen-containing base as well, but it is the other group that makes them complex. The lecture focuses on two groups because of their importance in cell membranes.</p>
<table><tr><th>Lipid</th><th>Other group and alcohol</th><th>Where</th></tr>
<tr><td>Glycero&shy;phospholipid</td><td>Phosphate. Glycerol, with two fatty acids.</td><td>The primary component of cell membranes</td></tr>
<tr><td>Sphingo&shy;phospholipid</td><td>Phosphate. Sphingosine, with one fatty acid.</td><td>Cell membranes, in lipid rafts</td></tr>
<tr><td>Glycolipid</td><td>Sugar. Sphingosine, with one fatty acid.</td><td>The glycocalyx on the outer membrane</td></tr></table>
<p><b>Phospholipids.</b> The other group is a phosphate. The alcohol is typically glycerol, so what we call phospholipids are technically glycerophospholipids. They have a hydrophilic head and two hydrophobic fatty acid tails, and they are the primary component of cell membranes. Other phospholipids are important surfactants, and one plays an active role in apoptosis.</p>
<p>Replacing the glycerol with a sphingosine gives a <b>sphingophospholipid</b>. It has one fatty acid, and the long end of the sphingosine makes the other hydrophobic tail. These are also major components of cell membranes, making up lipid rafts for compartmentalization, cell signaling and transport. A common one is sphingomyelin, a component of the myelin sheath wrapping around neurons.</p>
<p><b>Glycolipids.</b> If the other group is a sugar instead of a phosphate, the lipid is a glycolipid. Its alcohol is also a sphingosine, so it has one fatty acid, and glycolipids can also be called sphingoglycolipids. They attach to carbohydrates on the outer parts of the membrane as part of the <b>glycocalyx</b>. The glycocalyx is for adhesion to other cells and surfaces, and it is a protective barrier, like a glue trap for pathogens trying to enter. Galactosylceramide, a common glycolipid in animal tissues, plays an important role in the myelin of nervous tissue.</p>`,
nl:"Lecture wording",note:`The glycolipid section calls glycolipids "another important membrane protein." They are membrane lipids, one of the three common forms along with phospholipids and cholesterol.`,
so:"A phosphate makes a phospholipid and a sugar makes a glycolipid. Glycerol carries two fatty acids, sphingosine carries one."},

{id:"m5-steroid",h:"Steroids and cholesterol",
img:{src:"lectures/biochem-exam2/img/m5/file-62a1288aec673.webp",alt:"Cholesterol in the cell membrane: its polar hydroxyl group sits with the phosphate heads, and its rigid carbon rings and nonpolar tail sit among the hydrophobic tails of the phospholipids",credit:"Lecture figure, Lesson 1."},
b:`<p>All steroids have four rings. Three of them have six carbons and one has five carbons. You don't need the structural detail from organic chemistry.</p>
<p>The most commonly known steroid is <b>cholesterol</b>. Cholesterol is important, and like the other lipids in this lesson it plays a major role in cell membranes. It helps maintain the fluid state of the membrane by acting as a stopgap for the lipids:</p>
<ul><li>As temperature drops, the lipids cannot get consolidated enough to completely solidify, because they cannot condense past the cholesterols.</li>
<li>As temperature increases, the membrane does not melt away, because the lipids cannot separate more than the distance of the cholesterols.</li></ul>
<p>Cholesterol is widely distributed in all cells, but it is found most in nervous tissue.</p>
<p>Other important steroids:</p>
<ul><li><b>Sex hormones:</b> estrogens, androgens and progesterones. They facilitate puberty and standard development, menstrual cycles and pregnancy.</li>
<li><b>Cortisol:</b> important for inflammation, metabolism and stress response.</li>
<li><b>Bile acids:</b> synthesized in the liver. They are digestive surfactants that help digest lipids.</li></ul>
<p>From the lecture's check: the common forms of membrane lipids are phospholipids, glycolipids and cholesterol. Triglycerides are not one of them.</p>`,
so:"Four rings, three of six carbons and one of five. Cholesterol keeps the membrane from solidifying in the cold or melting in the heat."}
],
"5.2":[
// ---------------- L2 Fatty Acids Part 1 ----------------
{id:"m5-lipolysis",h:"Release from storage",
img:{src:"lectures/biochem-exam2/img/m5/file-62a24f344853e.webp",alt:"In the fat cell, triacylglycerol splits into glycerol and fatty acids. Glycerol goes to the liver cell, where glycolysis makes pyruvate or gluconeogenesis makes glucose. Fatty acids go to other tissues, where fatty acid oxidation makes acetyl CoA for the citric acid cycle.",credit:"Lecture figure, Lesson 2."},
b:`<p>Fatty acids are stored as triglycerides in adipose tissue. When a muscle needs energy, during exercise for example, the fatty acids have to get from the adipose tissue to the muscle. Fatty acid degradation is a three step process:</p>
<ol><li>Release of free fatty acids from the triglycerides, so they can be sent out into the bloodstream.</li>
<li>Activation of the fatty acids, so they can enter the mitochondria.</li>
<li>Breakdown of the fatty acids (beta oxidation).</li></ol>
<p><b>Lipolysis</b> is the breakdown of triglycerides into their separate components, glycerol and free fatty acids. It is catalyzed by <b>lipases</b>, which are triggered by a variety of hormonal signals that let the enzymes know energy is needed somewhere. Both the glycerol and the fatty acids are released into the bloodstream.</p>
<p>Fatty acids are not water soluble. In the bloodstream, traveling to their target tissue, they are bound to <b>albumin</b>. Once in the target tissue, they are bound to a fatty acid binding protein.</p>
<p>The glycerol is taken up by the liver and phosphorylated. It is converted into either pyruvate or glucose, through the glycolytic or gluconeogenic pathway.</p>
<p>From the lecture's check: "triglycerides enter the liver before being processed for energy breakdown" is false, and "fatty acid degradation is a three step process" is true.</p>`,
so:"Lipases split triglyceride into glycerol and fatty acids. The fatty acids ride on albumin, and the glycerol goes to the liver."},

{id:"m5-carnitine",h:"Activation and the carnitine shuttle",
img:{src:"lectures/biochem-exam2/img/m5/file-62a252459398c.webp",alt:"The carnitine shuttle. On the intermembrane space side, carnitine acyltransferase I swaps the CoA on acyl CoA for carnitine, making acyl carnitine. A translocase in the inner membrane carries acyl carnitine to the matrix side, where carnitine acyltransferase II puts CoA back on, and the carnitine returns.",credit:"Lecture figure, Lesson 2."},
b:`<p><b>Activation.</b> The fatty acid is converted into an active intermediate by binding with coenzyme A to form <b>acyl CoA</b>, not to be confused with acetyl CoA, which forms in the next stage. This requires energy from ATP and the enzyme <b>CoA synthetase</b>. The reaction takes place on the outer membrane of the mitochondria.</p>
<p>One more step is needed to pass through the inner mitochondrial membrane, the carnitine shuttle:</p>
<ol><li><b>Carnitine acyltransferase I</b> combines the fatty acid with the alcohol carnitine to form acyl carnitine, releasing the CoA.</li>
<li>A <b>translocase</b> shuttles acyl carnitine across the inner mitochondrial membrane.</li>
<li>Inside the mitochondrial matrix, <b>carnitine acyltransferase II</b> reverses the first reaction, replacing the carnitine with the CoA. The translocase returns the carnitine to the cytoplasmic side.</li></ol>
<p>Carnitine acyltransferase I is the key regulatory step for fatty acid degradation. Various hormones and products of other metabolic pathways inhibit it, blocking the flow of fatty acids into the mitochondria and halting fatty acid degradation.</p>
<p>In diseases where fatty acids can't enter the mitochondria, often called carnitine deficiencies, the result can be muscle cramping, weakness and even death.</p>
<p>From the lecture's check: fatty acids are linked to coenzyme A before entering the mitochondria, and fatty acid degradation requires the input of ATP energy. Both are true.</p>`,
nl:"Lecture wording",note:`The activation paragraph says the fatty acid is shuttled into the intermembrane space "through voltage dependent ion channels." The lecture's own check marks "fatty acids enter the mitochondrial matrix through voltage dependent ion channels" false. The way into the matrix is the carnitine shuttle.`,
so:"CoA synthetase makes acyl CoA. Carnitine carries it across the inner membrane, and carnitine acyltransferase I is the control point."},

{id:"m5-betaox",h:"Beta oxidation",
b:`<p>Beta oxidation is the breakdown stage and the bulk of fatty acid degradation. It is a series of oxidation reactions (dehydrogenations), called beta because they happen on the beta carbon.</p>
<p>It is a series of four reactions. The number of times the four reactions repeat depends on how long the fatty acid chain is. Each round cuts 2 carbons from the fatty acid in the form of acetyl CoA.</p>
<ol><li><b>Oxidation</b> by <b>acyl-CoA dehydrogenase</b>. Two hydrogen atoms are removed from the fatty acid, and a new double bond forms in their place. FAD is reduced to FADH₂.</li>
<li><b>Hydration</b> by <b>enoyl-CoA hydratase</b>. Water is added to saturate the double bond, which adds a hydroxyl group.</li>
<li><b>Oxidation</b> by <b>hydroxyacyl-CoA dehydrogenase</b>. The new hydroxyl group is dehydrogenated, making a carbonyl group. NAD⁺ is reduced to NADH.</li>
<li><b>Thiolysis</b> by <b>thiolase</b>. The end of the chain now looks a lot like an acetyl CoA, so it is cut off to release an acetyl CoA. The shortened fatty acid is ready for another round.</li></ol>
<p>One round of beta oxidation gives one FADH₂, one NADH, and one acetyl CoA that can go into the citric acid cycle.</p>
<p><b>Palmitate</b>, a 16 carbon fatty acid, takes 7 rounds of oxidation: 7 FADH₂, 7 NADH and 8 acetyl CoA. There is one more acetyl CoA than rounds because the last split turns a four carbon molecule into two acetyl CoA. After two ATP are used to activate the palmitate, 108 ATP are generated, for a net of 106 ATP. This is why fats are so much more efficient at providing energy than carbohydrates.</p>`,
nl:"Lecture wording",note:`The lecture writes FAD+ and FADH for FAD and FADH₂, "enol-coA hydratase" for enoyl-CoA hydratase and "thiloase" for thiolase. Its thiolysis step also says a new acyl-CoA is added to the end of the fatty acid. What remains after the acetyl CoA is cut off is an acyl CoA two carbons shorter, ready for the next round.`,
so:"Oxidation, hydration, oxidation, thiolysis. Each round gives one FADH₂, one NADH and one acetyl CoA."},

{id:"m5-odd",h:"Fatty acids that need extra handling",
b:`<p>Not all fatty acids are created equal. Three kinds need a variation on the standard pathway.</p>
<table><tr><th>Fatty acid</th><th>What is different</th></tr>
<tr><td>Very long chain, more than 20 or 22 carbons</td><td>Broken down in peroxisomes, not for energy as in the mitochondria. The end product is octanoyl-CoA, not acetyl CoA.</td></tr>
<tr><td>Unsaturated</td><td>Additional steps are required. Isomerases and reductases rearrange them into isomers that are known intermediates of the pathway.</td></tr>
<tr><td>Odd chain</td><td>Oxidized in much the same way, except that propionyl CoA, a three carbon molecule, forms at the end of the final round. Propionyl CoA is converted into succinyl CoA, which enters the citric acid cycle.</td></tr></table>`,
so:"Very long chains go to peroxisomes and end as octanoyl-CoA. Unsaturated ones need isomerases and reductases. Odd chains end as propionyl CoA, then succinyl CoA."},

{id:"m5-ketone",h:"Ketone bodies",
img:{src:"lectures/biochem-exam2/img/m5/image-6308f6b7410ba.webp",alt:"Liver, blood and extrahepatic tissues. In the liver, acyl CoA becomes acetyl CoA, which enters the citric acid cycle or makes ketone bodies. Ketone bodies travel in the blood. Acetone leaves through the lungs and urine, and the others go to extrahepatic tissues, where they become acetyl CoA for the citric acid cycle.",credit:"Lecture figure, Lesson 2."},
b:`<p>Most of the acetyl CoA made from fatty acids enters the citric acid cycle. When there is an abundance of fatty acid oxidation, the liver produces <b>ketone bodies</b>, an alternative fuel source, in a process called <b>ketogenesis</b>. This is the connection to the keto diet, a diet high in fat.</p>
<p>Ketone bodies are produced in the mitochondria of the liver. Ketogenesis happens because acetyl CoA builds up during beta oxidation. Acetyl CoA enters the citric acid cycle, but the oxaloacetate it binds to is saturated and no more is being produced, so the acetyl CoA goes on to make ketone bodies instead of waiting in line.</p>
<p>The three major ketone bodies are acetoacetate, beta-hydroxybutyrate and acetone.</p>
<ul><li><b>Acetone</b> cannot be used to produce energy. It is released through the lungs and the bladder, in breath and urine.</li>
<li>The other two are sent to tissues that need energy, and they enter the citric acid cycle in extrahepatic tissues.</li></ul>
<p>Higher than normal amounts of ketone bodies in the blood is <b>ketonemia</b>, and in the urine <b>ketonuria</b>. The overall issue is called <b>ketosis</b>. It is most common during starvation, when there is a long-term depletion of available carbohydrates. It is also seen in long-term keto diets, and in individuals with diabetes mellitus due to their deficient glucose metabolism.</p>
<p>Ketosis can lead to <b>ketoacidosis</b>, which can dangerously decrease the pH of the blood.</p>
<p>From the lecture's check: of the scenarios given, the person stranded for 21 days without food is the one expected to have excessive ketone bodies in the urine.</p>`,
so:"Too much acetyl CoA for the oxaloacetate available, so the liver makes ketone bodies. Too many is ketosis, which can lower blood pH."}
]
},

questions:[
// ---------------- L1 ----------------
{id:"m5a01",lo:"5.1",src:"L1",ref:"m5-fatag",type:"mc",kind:"ex",inv:["m5-fatag.c1"],
stem:"A fatty acid has a methyl group at one end of its carbon chain. What is at the other end?",
opts:["A carboxylic acid group","A phosphate group","A glycerol backbone","A sugar"],ans:0,
exp:"A fatty acid is a chain of carbon atoms with a methyl group (-CH₃) at one end and a carboxylic acid group (-COOH) at the other."},
{id:"m5a02",lo:"5.1",src:"L1",ref:"m5-fatag",type:"mc",kind:"fig",inv:["m5-fatag.c2"],fig:"q-tg",
stem:"The figure shows a triglyceride. What is at 1, and what kind of bond is at 2?",
opts:["Glycerol; an ester bond","Glycerol; a glycosidic bond","Sphingosine; an ester bond","Sphingosine; a peptide bond"],ans:0,
exp:"A triglyceride is three fatty acids combined together by a glycerol backbone. Each fatty acid is attached through an ester bond."},
{id:"m5a03",lo:"5.1",src:"L1",ref:"m5-fatag",type:"mc",kind:"ex",inv:["m5-fatag.c2"],
stem:"In what form, and where, does the body store fatty acids?",
opts:["As triglycerides, in adipose tissue","As free fatty acids, in adipose tissue","As triglycerides, in nervous tissue","As phospholipids, in the cell membrane"],ans:0,
exp:"The triglyceride is the storage form of fatty acids, and we store it in adipose tissue."},
{id:"m5a04",lo:"5.1",src:"L1",ref:"m5-roles",type:"mc",kind:"ex",inv:["m5-roles.c1"],fixed:true,
stem:"Compared with carbohydrates, how much energy do fats provide?",
opts:["About half as much","About the same","About twice as much","About ten times as much"],ans:2,
exp:"Fats provide high energy, about twice as much as carbohydrates, for long-term use."},
{id:"m5a05",lo:"5.1",src:"L1",ref:"m5-roles",type:"mc",kind:"why",inv:["m5-roles.c2"],
stem:"Why does the myelin sheath allow action potentials to travel rapidly down long axons?",
opts:["The fats in it act as an electrical insulator","The fats in it store energy for the neuron","The fats in it act as a thermal insulator for the axon","The fats in it dissolve nonpolar vitamins for the neuron"],ans:0,
exp:"Fats are electrical insulators as well as thermal ones. In the myelin sheath they allow rapid passage of action potentials, which is vital for quick communication between nerves."},
{id:"m5a06",lo:"5.1",src:"L1",ref:"m5-roles",type:"mc",kind:"ex",inv:["m5-roles.c2"],
stem:"Adipose tissue maintains the temperature of the subcutaneous tissues and vital organs. Which function of fat is this?",
opts:["Thermal insulation","Electrical insulation","Hormone production","Nutrient absorption"],ans:0,
exp:"Adipose tissue, where we store fat, is our thermal insulation. Electrical insulation is the myelin sheath."},
{id:"m5a07",lo:"5.1",src:"L1",ref:"m5-roles",type:"mc",kind:"why",inv:["m5-roles.c3"],
stem:"Why must many vitamins dissolve in fat to be absorbed?",
opts:["They are nonpolar and cannot dissolve in water","They are polar and cannot cross water","They are only made in adipose tissue","They are broken down by water in the intestine"],ans:0,
exp:"Many vitamins and nutrients are nonpolar, so they are not able to dissolve in water. For the body to absorb them, they need to dissolve in fat."},
{id:"m5a08",lo:"5.1",src:"L1",ref:"m5-roles",type:"mc",kind:"ex",inv:["m5-roles.c4"],
stem:"Which fat acts as a hormone found in almost every mammalian tissue and triggers the inflammatory response in cases of injury and illness?",
opts:["Prostaglandins","Triglycerides","Sphingomyelin","Bile acids"],ans:0,
exp:"Prostaglandins act as a hormone in almost every mammalian tissue. They trigger inflammatory responses, affect blood flow for clotting and help induce labor."},
{id:"m5a09",lo:"5.1",src:"L1",ref:"m5-sat",type:"mc",kind:"fig",inv:["m5-sat.c1"],fig:"q-fa4",fixed:true,
stem:"The figure shows four fatty acids. Which one is saturated?",
opts:["A","B","C","D"],ans:1,
exp:"B has no double bonds, only carbon-carbon single bonds, so it is saturated with hydrogens. A, C and D each have at least one double bond."},
{id:"m5a10",lo:"5.1",src:"L1",ref:"m5-sat",type:"tf",kind:"ex",inv:["m5-sat.c1"],
stem:"Saturated fatty acids are typically plant fats and are liquid at room temperature.",ans:false,
exp:"Saturated fats are typically animal fats. Their higher melting temperature makes them solid at room temperature."},
{id:"m5a11",lo:"5.1",src:"L1",ref:"m5-sat",type:"mc",kind:"fig",inv:["m5-sat.c2"],fig:"q-fa4",fixed:true,
stem:"The figure shows four fatty acids. Which one is a naturally occurring monounsaturated fat, typical of plant-based fats that are liquid at room temperature?",
opts:["A","B","C","D"],ans:3,
exp:"D has one double bond in the cis formation, which bends the chain. A also has one double bond, but it is trans and the chain stays straight."},
{id:"m5a12",lo:"5.1",src:"L1",ref:"m5-sat",type:"mc",kind:"why",inv:["m5-sat.c2"],
stem:"Why do cis unsaturated fats have lower melting temperatures than saturated fats?",
opts:["Their double bonds keep them loosely packed","They have more hydrogens on each carbon","Their chains are always shorter","They are stored as triglycerides"],ans:0,
exp:"Saturated fats are tightly packed, which gives them higher melting temperatures. Unsaturated fats are loosely packed, so they melt at lower temperatures and are liquid at room temperature."},
{id:"m5a13",lo:"5.1",src:"L1",ref:"m5-sat",type:"mc",kind:"fig",inv:["m5-sat.c3"],fig:"q-fa4",fixed:true,
stem:"The figure shows four fatty acids. Which one is a trans fatty acid?",
opts:["A","B","C","D"],ans:0,
exp:"A has a double bond in the trans formation, so the chain stays straight. In D the double bond is cis, and B has no double bond."},
{id:"m5a14",lo:"5.1",src:"L1",ref:"m5-sat",type:"mc",kind:"why",inv:["m5-sat.c3"],
stem:"A peanut butter label lists partially hydrogenated oil. Why is this a fat to avoid?",
opts:["It converts cis bonds to trans bonds","It converts trans bonds to cis bonds","It removes all the double bonds from omega-3 fats","It turns the fat into cholesterol"],ans:0,
exp:"Partially hydrogenated oil is another name for a trans fat. It increases shelf life but converts the cis bonds to trans bonds."},
{id:"m5a15",lo:"5.1",src:"L1",ref:"m5-sat",type:"mc",kind:"fig",inv:["m5-sat.c4"],fig:"q-fa4",fixed:true,
stem:"The figure shows four fatty acids. Which one is an omega-3 fatty acid?",
opts:["A","B","C","D"],ans:2,
exp:"In C the double bonding starts on the third carbon from the end of the chain. That makes it an omega-3 fatty acid."},
{id:"m5a16",lo:"5.1",src:"L1",ref:"m5-sat",type:"tf",kind:"ex",inv:["m5-sat.c4"],
stem:"Several omega-3 fatty acids are essential, meaning we must obtain them in our diet because we do not produce them ourselves.",ans:true,
exp:"We do not make these omega-3s even though they are essential for our health. Fish and nuts are great sources."},
{id:"m5a17",lo:"5.1",src:"L1",ref:"m5-complex",type:"mc",kind:"ex",inv:["m5-complex.c1"],
stem:"What makes a lipid a complex lipid?",
opts:["An alcohol and one or two fatty acids, plus another group","Three fatty acids on a glycerol backbone","Four fused carbon rings","A single carbon chain with a carboxylic acid group"],ans:0,
exp:"Complex lipids have the typical alcohol and one or two fatty acids plus another group. That other group is what makes them complex."},
{id:"m5a18",lo:"5.1",src:"L1",ref:"m5-complex",type:"mc",kind:"fig",inv:["m5-complex.c2"],fig:"q-cplx",
stem:"The figure shows three complex lipids. Which is lipid 1?",
opts:["Glycerophospholipid","Sphingophospholipid","Glycolipid","Triglyceride"],ans:0,
exp:"Lipid 1 has a phosphate group on a glycerol with two fatty acids. That is a glycerophospholipid, the primary component of cell membranes."},
{id:"m5a19",lo:"5.1",src:"L1",ref:"m5-complex",type:"mc",kind:"ex",inv:["m5-complex.c2"],
stem:"Which part of a phospholipid is hydrophilic?",
opts:["The head","The fatty acid tails","The whole molecule","No part of it"],ans:0,
exp:"A phospholipid has a hydrophilic head and two hydrophobic fatty acid tails."},
{id:"m5a20",lo:"5.1",src:"L1",ref:"m5-complex",type:"mc",kind:"fig",inv:["m5-complex.c3"],fig:"q-cplx",
stem:"The figure shows three complex lipids. Which is lipid 2?",
opts:["Sphingophospholipid","Glycerophospholipid","Glycolipid","Triglyceride"],ans:0,
exp:"Lipid 2 has a phosphate group, but its glycerol is replaced by a sphingosine, which gives a sphingophospholipid with one fatty acid. Sphingomyelin is an example."},
{id:"m5a21",lo:"5.1",src:"L1",ref:"m5-complex",type:"mc",kind:"fig",inv:["m5-complex.c4"],fig:"q-cplx-s",
stem:"The figure shows three complex lipids. Which group belongs at 1?",
opts:["A sugar","A second fatty acid","Cholesterol","A methyl group"],ans:0,
exp:"If the other group is a sugar instead of a phosphate, the lipid is a glycolipid. Its alcohol is sphingosine, so it has one fatty acid."},
{id:"m5a22",lo:"5.1",src:"L1",ref:"m5-complex",type:"mc",kind:"ex",inv:["m5-complex.c4"],
stem:"Glycolipids are part of the glycocalyx on the outer membrane. What does the glycocalyx do?",
opts:["Adhesion to other cells and surfaces, and a protective barrier against pathogens","Stores fatty acids for long-term energy","Keeps the membrane fluid as temperature changes","Carries fatty acids in the blood"],ans:0,
exp:"The glycocalyx is for adhesion to other cells and surfaces, and it is a protective barrier, like a glue trap for pathogens trying to enter."},
{id:"m5a23",lo:"5.1",src:"L1",ref:"m5-steroid",type:"mc",kind:"fig",inv:["m5-steroid.c1"],fig:"q-ster",
stem:"The figure shows the ring structure shared by every lipid in one class. Which class?",
opts:["Steroids","Phospholipids","Glycolipids","Triglycerides"],ans:0,
exp:"All steroids have four rings. Three of them have six carbons and one has five carbons."},
{id:"m5a24",lo:"5.1",src:"L1",ref:"m5-steroid",type:"mc",kind:"fig",inv:["m5-steroid.c2","m5-steroid.c4"],fig:"q-mem",
stem:"The figure shows a cell membrane. Which lipid is 2?",
opts:["Cholesterol","Glycolipid","Phospholipid","Triglyceride"],ans:0,
exp:"Cholesterol sits among the phospholipids and keeps the membrane fluid. A glycolipid, with its sugar on the outside of the cell, is 3."},
{id:"m5a25",lo:"5.1",src:"L1",ref:"m5-steroid",type:"mc",kind:"why",inv:["m5-steroid.c2"],
stem:"As temperature drops, why does a membrane with cholesterol not completely solidify?",
opts:["The lipids cannot condense past the cholesterols","Cholesterol adds double bonds to the fatty acids","Cholesterol breaks down into heat-producing fatty acids","The lipids separate farther apart in the cold"],ans:0,
exp:"Cholesterol acts as a stopgap. In the cold the lipids cannot condense past it, and in the heat they cannot separate more than its distance."},
{id:"m5a26",lo:"5.1",src:"L1",ref:"m5-steroid",type:"mc",kind:"ex",inv:["m5-steroid.c3"],
stem:"Which of these is a steroid?",
opts:["Cortisol","Prostaglandin","Sphingomyelin","Galactosylceramide"],ans:0,
exp:"Cortisol, important for inflammation, metabolism and stress response, is a steroid. So are the sex hormones and bile acids."},
{id:"m5a27",lo:"5.1",src:"L1",ref:"m5-steroid",type:"tf",kind:"ex",inv:["m5-steroid.c4"],
stem:"Triglycerides are one of the common forms of membrane lipids.",ans:false,
exp:"The common forms of membrane lipids are phospholipids, glycolipids and cholesterol. Triglycerides are the storage form of fatty acids."},
// ---------------- L2 ----------------
{id:"m5b01",lo:"5.2",src:"L2",ref:"m5-lipolysis",type:"mc",kind:"fig",inv:["m5-lipolysis.c1","m5-lipolysis.c2"],fig:"q-stage",
stem:"The figure shows the three stages of fatty acid degradation. Which stage is 1?",
opts:["Lipolysis","Activation","Beta oxidation","Ketogenesis"],ans:0,
exp:"Stage 1 is lipolysis, the release of free fatty acids and glycerol from triglycerides. Activation (2) and beta oxidation (3) follow."},
{id:"m5b02",lo:"5.2",src:"L2",ref:"m5-lipolysis",type:"mc",kind:"ex",inv:["m5-lipolysis.c2"],
stem:"What catalyzes lipolysis, and what triggers it?",
opts:["Lipases, triggered by hormonal signals that energy is needed","Lipases, triggered by a buildup of acetyl CoA","CoA synthetase, triggered by hormonal signals that energy is needed","Carnitine acyltransferase I, triggered by ATP"],ans:0,
exp:"Lipolysis is catalyzed by lipases, which are triggered by a variety of hormonal signals that let the enzymes know energy is needed somewhere."},
{id:"m5b03",lo:"5.2",src:"L2",ref:"m5-lipolysis",type:"mc",kind:"why",inv:["m5-lipolysis.c3"],
stem:"Why are fatty acids bound to albumin in the bloodstream?",
opts:["Fatty acids are not water soluble","Albumin activates them with coenzyme A","Albumin carries them into the mitochondrial matrix","Fatty acids would otherwise be converted to glucose"],ans:0,
exp:"Fatty acids are not water soluble, so they travel bound to albumin. In the target tissue they are bound to a fatty acid binding protein."},
{id:"m5b04",lo:"5.2",src:"L2",ref:"m5-lipolysis",type:"mc",kind:"fig",inv:["m5-lipolysis.c4"],fig:"q-lipo",
stem:"The figure shows where the products of lipolysis go. Which tissue is 1?",
opts:["Liver","Skeletal muscle","Adipose tissue","Brain"],ans:0,
exp:"The glycerol is taken up by the liver and phosphorylated, then converted to pyruvate or glucose through the glycolytic or gluconeogenic pathway."},
{id:"m5b05",lo:"5.2",src:"L2",ref:"m5-lipolysis",type:"tf",kind:"ex",inv:["m5-lipolysis.c4"],
stem:"Triglycerides enter the liver before being processed for energy breakdown.",ans:false,
exp:"Triglycerides are broken down by lipolysis, and the glycerol and fatty acids are released into the blood. Only the glycerol goes to the liver."},
{id:"m5b06",lo:"5.2",src:"L2",ref:"m5-carnitine",type:"mc",kind:"fig",inv:["m5-carnitine.c1"],fig:"q-stage",
stem:"The figure shows the three stages of fatty acid degradation. Which enzyme catalyzes stage 2?",
opts:["CoA synthetase","Carnitine acyltransferase I","Lipase","Acyl-CoA dehydrogenase"],ans:0,
exp:"Stage 2 is activation. CoA synthetase joins the fatty acid to coenzyme A to form acyl CoA, using energy from ATP."},
{id:"m5b07",lo:"5.2",src:"L2",ref:"m5-carnitine",type:"mc",kind:"ex",inv:["m5-carnitine.c1"],
stem:"Activation joins a fatty acid to coenzyme A. What does it form, and where?",
opts:["Acyl CoA, on the outer mitochondrial membrane","Acetyl CoA, on the outer mitochondrial membrane","Acyl CoA, in the mitochondrial matrix","Acetyl CoA, in the cytosol"],ans:0,
exp:"Activation forms acyl CoA, not acetyl CoA. The reaction takes place on the outer membrane of the mitochondria."},
{id:"m5b08",lo:"5.2",src:"L2",ref:"m5-carnitine",type:"mc",kind:"fig",inv:["m5-carnitine.c2"],fig:"q-shut",
stem:"The figure shows how fatty acids cross the inner mitochondrial membrane. Which enzyme is 1?",
opts:["Carnitine acyltransferase I","Carnitine acyltransferase II","CoA synthetase","Thiolase"],ans:0,
exp:"Carnitine acyltransferase I combines the fatty acid with carnitine to form acyl carnitine, releasing the CoA. Carnitine acyltransferase II reverses it in the matrix, at 3."},
{id:"m5b09",lo:"5.2",src:"L2",ref:"m5-carnitine",type:"mc",kind:"why",inv:["m5-carnitine.c3"],
stem:"Why does inhibiting carnitine acyltransferase I halt fatty acid degradation?",
opts:["It blocks the flow of fatty acids into the mitochondria","It stops lipases from releasing fatty acids","It prevents CoA synthetase from using ATP","It stops thiolase from releasing acetyl CoA"],ans:0,
exp:"Hormones and products of other pathways inhibit carnitine acyltransferase I. That blocks fatty acids from entering the mitochondria, so degradation stops."},
{id:"m5b10",lo:"5.2",src:"L2",ref:"m5-carnitine",type:"mc",kind:"ex",inv:["m5-carnitine.c3"],
stem:"Which enzyme catalyzes the key regulatory step of fatty acid degradation?",
opts:["Carnitine acyltransferase I","Acyl-CoA dehydrogenase","Lipase","Thiolase"],ans:0,
exp:"Carnitine acyltransferase I is the key regulatory step. Inhibiting it keeps fatty acids out of the mitochondria."},
{id:"m5b11",lo:"5.2",src:"L2",ref:"m5-carnitine",type:"mc",kind:"fig",inv:["m5-carnitine.c4"],fig:"q-shut",
stem:"The figure shows how fatty acids cross the inner mitochondrial membrane. What is 2?",
opts:["A translocase","Carnitine acyltransferase II","A voltage dependent ion channel","Albumin"],ans:0,
exp:"A translocase shuttles acyl carnitine across the inner membrane and returns the carnitine to the cytoplasmic side."},
{id:"m5b12",lo:"5.2",src:"L2",ref:"m5-carnitine",type:"tf",kind:"ex",inv:["m5-carnitine.c4"],
stem:"Fatty acids enter the mitochondrial matrix through voltage dependent ion channels.",ans:false,
exp:"Fatty acids cross the inner membrane as acyl carnitine, carried by a translocase. Carnitine acyltransferase II then puts the CoA back on in the matrix."},
{id:"m5b13",lo:"5.2",src:"L2",ref:"m5-carnitine",type:"mc",kind:"why",inv:["m5-carnitine.c5"],
stem:"Why does carnitine deficiency cause muscle cramping and weakness?",
opts:["Fatty acids can't enter the mitochondria to be broken down","Fatty acids can't be released from triglycerides","Muscle can't store fatty acids as triglycerides","Ketone bodies build up in the muscle"],ans:0,
exp:"Without carnitine, fatty acids can't enter the mitochondria. The result can be muscle cramping, weakness and even death."},
{id:"m5b14",lo:"5.2",src:"L2",ref:"m5-betaox",type:"tf",kind:"ex",inv:["m5-betaox.c1"],
stem:"Each round of beta oxidation cuts 2 carbons from the fatty acid in the form of acetyl CoA.",ans:true,
exp:"Beta oxidation repeats its four reactions as many times as the chain length requires, and each round releases one acetyl CoA."},
{id:"m5b15",lo:"5.2",src:"L2",ref:"m5-betaox",type:"mc",kind:"fig",inv:["m5-betaox.c2"],fig:"q-beta-e",
stem:"The figure shows one round of beta oxidation. Which enzyme is 1?",
opts:["Acyl-CoA dehydrogenase","Hydroxyacyl-CoA dehydrogenase","Enoyl-CoA hydratase","Carnitine acyltransferase I"],ans:0,
exp:"Step 1 is oxidation by acyl-CoA dehydrogenase. It removes two hydrogens, forms a double bond and makes FADH₂."},
{id:"m5b16",lo:"5.2",src:"L2",ref:"m5-betaox",type:"mc",kind:"fig",inv:["m5-betaox.c3"],fig:"q-beta-e",
stem:"The figure shows one round of beta oxidation. Which enzyme is 2?",
opts:["Enoyl-CoA hydratase","Acyl-CoA dehydrogenase","Thiolase","CoA synthetase"],ans:0,
exp:"Step 2 is hydration by enoyl-CoA hydratase. Water is added to saturate the double bond, leaving a hydroxyl group."},
{id:"m5b17",lo:"5.2",src:"L2",ref:"m5-betaox",type:"mc",kind:"fig",inv:["m5-betaox.c4"],fig:"q-beta-e",
stem:"The figure shows one round of beta oxidation. Which enzyme is 3?",
opts:["Hydroxyacyl-CoA dehydrogenase","Acyl-CoA dehydrogenase","Enoyl-CoA hydratase","Thiolase"],ans:0,
exp:"Step 3 is oxidation by hydroxyacyl-CoA dehydrogenase. It turns the hydroxyl group into a carbonyl group and makes NADH."},
{id:"m5b18",lo:"5.2",src:"L2",ref:"m5-betaox",type:"mc",kind:"fig",inv:["m5-betaox.c2","m5-betaox.c4"],fig:"q-beta-s",
stem:"The figure shows one round of beta oxidation. Which molecules are made at 1 and 2?",
opts:["1 FADH₂, 2 NADH","1 NADH, 2 FADH₂","1 FADH₂, 2 ATP","1 ATP, 2 NADH"],ans:0,
exp:"The first oxidation reduces FAD to FADH₂, and the second reduces NAD⁺ to NADH."},
{id:"m5b19",lo:"5.2",src:"L2",ref:"m5-betaox",type:"mc",kind:"fig",inv:["m5-betaox.c5"],fig:"q-beta-e",
stem:"The figure shows one round of beta oxidation. Which enzyme is 4?",
opts:["Thiolase","Enoyl-CoA hydratase","Hydroxyacyl-CoA dehydrogenase","Lipase"],ans:0,
exp:"Step 4 is thiolysis by thiolase. It cuts off an acetyl CoA, and the shortened fatty acid is ready for another round."},
{id:"m5b20",lo:"5.2",src:"L2",ref:"m5-betaox",type:"mc",kind:"ex",inv:["m5-betaox.c6"],fixed:true,
stem:"Palmitate is a 16 carbon fatty acid. How many rounds of beta oxidation does it take, and how many acetyl CoA does it make?",
opts:["7 rounds, 7 acetyl CoA","7 rounds, 8 acetyl CoA","8 rounds, 8 acetyl CoA","16 rounds, 8 acetyl CoA"],ans:1,
exp:"Palmitate takes 7 rounds, giving 7 FADH₂, 7 NADH and 8 acetyl CoA. After 2 ATP for activation, the net is 106 ATP."},
{id:"m5b21",lo:"5.2",src:"L2",ref:"m5-betaox",type:"mc",kind:"why",inv:["m5-betaox.c6"],
stem:"Why does palmitate yield 8 acetyl CoA from only 7 rounds of beta oxidation?",
opts:["The last round splits a four carbon molecule into two acetyl CoA","The first round releases two acetyl CoA at once","Activation adds an extra acetyl CoA","The glycerol backbone is converted to acetyl CoA"],ans:0,
exp:"Each round cuts off 2 carbons as acetyl CoA. In the last round the remaining four carbon molecule splits into two acetyl CoA."},
{id:"m5b22",lo:"5.2",src:"L2",ref:"m5-odd",type:"mc",kind:"ex",inv:["m5-odd.c1"],
stem:"A fatty acid with a chain of more than 22 carbons is broken down. Where does this happen, and what is the end product?",
opts:["In peroxisomes; octanoyl-CoA","In peroxisomes; acetyl CoA","In the mitochondria; octanoyl-CoA","In the mitochondria; propionyl CoA"],ans:0,
exp:"Very long chains are oxidized in peroxisomes, not for energy. The end product is octanoyl-CoA, not acetyl CoA."},
{id:"m5b23",lo:"5.2",src:"L2",ref:"m5-odd",type:"mc",kind:"ex",inv:["m5-odd.c2"],
stem:"Which enzymes are used to oxidize unsaturated fatty acids, in addition to the beta oxidation enzymes?",
opts:["Isomerases and reductases","Lipases and kinases","Carboxylases and synthases","Phosphatases and mutases"],ans:0,
exp:"Isomerases and reductases rearrange unsaturated fatty acids into isomers that are known intermediates of the pathway."},
{id:"m5b24",lo:"5.2",src:"L2",ref:"m5-odd",type:"mc",kind:"ex",inv:["m5-odd.c3"],
stem:"An odd-chain fatty acid goes through beta oxidation. What forms at the end of the final round, and what is it converted to?",
opts:["Propionyl CoA, converted to succinyl CoA","Octanoyl-CoA, converted to acetyl CoA","Acetoacetate, converted to acetone","Propionyl CoA, converted to glycerol"],ans:0,
exp:"Odd-chain fatty acids end with propionyl CoA, a three carbon molecule. It is converted into succinyl CoA, which enters the citric acid cycle."},
{id:"m5b25",lo:"5.2",src:"L2",ref:"m5-ketone",type:"mc",kind:"fig",inv:["m5-ketone.c1"],fig:"q-keto",
stem:"The figure shows where ketone bodies are made and used. Which tissue is 1?",
opts:["Liver","Skeletal muscle","Adipose tissue","Brain"],ans:0,
exp:"Ketone bodies are produced in the mitochondria of the liver when there is an abundance of fatty acid oxidation."},
{id:"m5b26",lo:"5.2",src:"L2",ref:"m5-ketone",type:"mc",kind:"why",inv:["m5-ketone.c2"],
stem:"Why does acetyl CoA build up and go on to make ketone bodies?",
opts:["There is not enough oxaloacetate for it to enter the citric acid cycle","Carnitine acyltransferase I is inhibited","There is too much glucose in the liver","Thiolase stops working during fasting"],ans:0,
exp:"Acetyl CoA enters the citric acid cycle by binding oxaloacetate. When the oxaloacetate is saturated and no more is being made, the acetyl CoA makes ketone bodies instead."},
{id:"m5b27",lo:"5.2",src:"L2",ref:"m5-ketone",type:"mc",kind:"fig",inv:["m5-ketone.c3"],fig:"q-keto-a",
stem:"The figure shows where ketone bodies are made and used. Which ketone body is 1?",
opts:["Acetone","Acetoacetate","Beta-hydroxybutyrate","Propionyl CoA"],ans:0,
exp:"Acetone cannot be used to produce energy, so it is released through the lungs and urine. Acetoacetate and beta-hydroxybutyrate go to tissues that need energy."},
{id:"m5b28",lo:"5.2",src:"L2",ref:"m5-ketone",type:"mc",kind:"ex",inv:["m5-ketone.c3"],
stem:"Which of these is not a ketone body?",
opts:["Acetyl CoA","Acetoacetate","Beta-hydroxybutyrate","Acetone"],ans:0,
exp:"The three major ketone bodies are acetoacetate, beta-hydroxybutyrate and acetone. They are made from acetyl CoA."},
{id:"m5b29",lo:"5.2",src:"L2",ref:"m5-ketone",type:"mc",kind:"ex",inv:["m5-ketone.c4"],
stem:"In which of these would you expect to find excessive ketone bodies in the urine?",
opts:["A person stranded on an island for 21 days without food","A type 1 diabetic who keeps blood sugar in range with medication and regular meals","Someone working out first thing in the morning before eating","Someone on a low carb, high protein diet"],ans:0,
exp:"Ketosis is most common during starvation, when there is a long-term depletion of available carbohydrates."},
{id:"m5b30",lo:"5.2",src:"L2",ref:"m5-ketone",type:"mc",kind:"ex",inv:["m5-ketone.c4"],
stem:"Ketosis can lead to ketoacidosis. What does ketoacidosis do?",
opts:["Dangerously decreases the pH of the blood","Dangerously increases the pH of the blood","Raises blood glucose","Blocks fatty acids from entering the mitochondria"],ans:0,
exp:"Too many ketone bodies in the blood or urine is ketosis, and it can lead to ketoacidosis, which can dangerously decrease blood pH."}
],

drills:[]
});

// Study-guide highlight: must appear verbatim (tags stripped) inside one p, li or tr of the question's ref lesson.
(function(){const HL={
m5a01:"with a methyl group (-CH₃) at one end and a carboxylic acid group (-COOH)",
m5a02:"three fatty acids combined together by a glycerol backbone, attached through ester bonds.",
m5a03:"We store these fatty acids in our adipose tissue.",
m5a04:"about twice as much energy as carbohydrates, for long-term use.",
m5a05:"which allows rapid passage of action potentials down long axons.",
m5a06:"Adipose tissue, where we store fat, maintains the temperature of our subcutaneous tissues and vital organs.",
m5a07:"Many vitamins and nutrients are nonpolar, so they will not dissolve in water.",
m5a08:"They act as a hormone found in almost every mammalian tissue.",
m5a09:"No double bonds, all carbon-carbon single bonds.",
m5a10:"Solid. Typically animal fats.",
m5a11:"When fats are unsaturated in nature, they are almost always in the cis formation.",
m5a12:"Loosely packed, lower melting temperature.",
m5a13:"the double bonding typically occurs in the trans formation rather than the cis formation.",
m5a14:"but it converts the cis bonds to trans bonds.",
m5a15:"in which the double bonding starts on the third carbon from the end of the chain.",
m5a16:"Several are essential, meaning we must obtain them in our diet because we do not produce them ourselves.",
m5a17:"have the typical alcohol and one or two fatty acids, plus another group.",
m5a18:"Phosphate. Glycerol, with two fatty acids.",
m5a19:"They have a hydrophilic head and two hydrophobic fatty acid tails",
m5a20:"Replacing the glycerol with a sphingosine gives a sphingophospholipid.",
m5a21:"If the other group is a sugar instead of a phosphate, the lipid is a glycolipid.",
m5a22:"The glycocalyx is for adhesion to other cells and surfaces, and it is a protective barrier",
m5a23:"All steroids have four rings. Three of them have six carbons and one has five carbons.",
m5a24:"It helps maintain the fluid state of the membrane by acting as a stopgap for the lipids:",
m5a25:"because they cannot condense past the cholesterols.",
m5a26:"important for inflammation, metabolism and stress response.",
m5a27:"Triglycerides are not one of them.",
m5b01:"is the breakdown of triglycerides into their separate components, glycerol and free fatty acids.",
m5b02:"which are triggered by a variety of hormonal signals that let the enzymes know energy is needed somewhere.",
m5b03:"Fatty acids are not water soluble.",
m5b04:"The glycerol is taken up by the liver and phosphorylated.",
m5b05:"\"triglycerides enter the liver before being processed for energy breakdown\" is false",
m5b06:"This requires energy from ATP and the enzyme CoA synthetase.",
m5b07:"The reaction takes place on the outer membrane of the mitochondria.",
m5b08:"combines the fatty acid with the alcohol carnitine to form acyl carnitine, releasing the CoA.",
m5b09:"blocking the flow of fatty acids into the mitochondria and halting fatty acid degradation.",
m5b10:"Carnitine acyltransferase I is the key regulatory step for fatty acid degradation.",
m5b11:"shuttles acyl carnitine across the inner mitochondrial membrane.",
m5b12:"The way into the matrix is the carnitine shuttle.",
m5b13:"the result can be muscle cramping, weakness and even death.",
m5b14:"Each round cuts 2 carbons from the fatty acid in the form of acetyl CoA.",
m5b15:"Two hydrogen atoms are removed from the fatty acid, and a new double bond forms in their place.",
m5b16:"Water is added to saturate the double bond, which adds a hydroxyl group.",
m5b17:"The new hydroxyl group is dehydrogenated, making a carbonyl group.",
m5b18:"One round of beta oxidation gives one FADH₂, one NADH, and one acetyl CoA",
m5b19:"so it is cut off to release an acetyl CoA.",
m5b20:"takes 7 rounds of oxidation: 7 FADH₂, 7 NADH and 8 acetyl CoA.",
m5b21:"because the last split turns a four carbon molecule into two acetyl CoA.",
m5b22:"The end product is octanoyl-CoA, not acetyl CoA.",
m5b23:"Isomerases and reductases rearrange them into isomers that are known intermediates of the pathway.",
m5b24:"Propionyl CoA is converted into succinyl CoA, which enters the citric acid cycle.",
m5b25:"Ketone bodies are produced in the mitochondria of the liver.",
m5b26:"but the oxaloacetate it binds to is saturated and no more is being produced",
m5b27:"cannot be used to produce energy. It is released through the lungs and the bladder, in breath and urine.",
m5b28:"The three major ketone bodies are acetoacetate, beta-hydroxybutyrate and acetone.",
m5b29:"the person stranded for 21 days without food is the one expected to have excessive ketone bodies in the urine.",
m5b30:"which can dangerously decrease the pH of the blood."};
const M=MODS[MODS.length-1];M.questions.forEach(q=>{if(HL[q.id])q.hl=HL[q.id];});})();

// Lecture window: question -> [lecture block, snippet copied verbatim from one text element of that block].
// The block must be in the lesson named by q.src. A list of snippets marks each one.
(function(){const LEC={
m5a01:["m5L1-b8","Fatty acids are chains of carbon atoms with a methyl (-CH3) group at one end"],
m5a02:["m5L1-b8","This is technically three fatty acid molecules combined together by a glycerol backbone."],
m5a03:["m5L1-b8",["The storage form of fatty acids is a triglyceride molecule.","We store these fatty acids in our adipose tissue."]],
m5a04:["m5L1-b9","fats provide high energy (twice as much energy as carbohydrates) for long term use"],
m5a05:["m5L1-b9","which allows for rapid passage of action potentials down long axons"],
m5a06:["m5L1-b9","adipose tissue, where we store our fat, is our thermal insulation"],
m5a07:["m5L1-b9","Many vitamins and nutrients are non-polar, which means they are not going to be able to dissolve in water."],
m5a08:["m5L1-b9","They act as a hormone found in almost every mammalian tissue."],
m5a09:["m5L1-b11","Saturated Fatty Acids contain no double bonds, but all carbon-carbon single bonds."],
m5a10:["m5L1-b11",["Saturated FAs have higher melting temperatures. This makes them solid at room temperature.","Saturated FAs are typically your animal fats."]],
m5a11:["m5L1-b11",["Cis unsaturated fats are liquid at room temperature.","Cis unsaturated fats are typically plant-based fats."]],
m5a12:["m5L1-b11","This means unsaturated fats have lower melting temperatures because they are loosely packed."],
m5a13:["m5L1-b11","the double bonding typically occurs in the trans formation rather than the cis formation"],
m5a14:["m5L1-b11","it converts the cis bonds to trans bonds"],
m5a15:["m5L1-b11","This is where the double bonding starts on the third carbon from the end of the chain."],
m5a16:["m5L1-b11","Several of these are essential, meaning we must obtain them in our diet because we do not produce them ourselves"],
m5a17:["m5L1-b14","Complex lipids are any lipid that have the typical alcohol and one or two fatty acids plus another group on them."],
m5a18:["m5L1-b16","The alcohol for phosphlipids is typically glycerol."],
m5a19:["m5L1-b3","-Has a hydrophilic head and a hydrophobic tail"],
m5a20:["m5L1-b16","We can replace the glycerol with a sphingosine, and that gives us our sphingosphospholipid."],
m5a21:["m5L1-b16","is a sugar instead of a phosphate, we get a glycolipid."],
m5a22:["m5L1-b16","It is for adhesion to other cells and surfaces as well as a protective barrier, like a glue trap for pathogens trying to enter."],
m5a23:["m5L1-b21","All steroids have four rings. Three of them have six carbons and one has five carbons."],
m5a24:["m5L1-b23","Cholesterol helps to maintain the fluid state of the membrane by acting as stopgaps for the lipids"],
m5a25:["m5L1-b23","they cannot get too consolidated to completely solidify because they cannot condense past the cholesterols"],
m5a26:["m5L1-b23","Cortisol is important for inflammation, metabolism, and stress response."],
m5a27:["m5L1-b25","Phospholipids; Glycolipids; Cholesterol"],
m5b01:["m5L2-b6","is known as lipolysis"],
m5b02:["m5L2-b6","It is catalyzed by lipases, which are triggered by a variety of hormonal signals that let the enzymes know energy is needed somewhere."],
m5b03:["m5L2-b6",["Fatty acids are not water soluble.","they will be bound to albumin"]],
m5b04:["m5L2-b6","The glycerol from the triglyceride will be taken up by the liver and phosphorylated."],
m5b05:["m5L2-b13","Triglycerides enter the liver before being processed for energy breakdown"],
m5b06:["m5L2-b6","This is going to require energy from ATP and the help of the enzyme CoA synthetase."],
m5b07:["m5L2-b8","This reaction takes place on the outer membrane of the mitochondria."],
m5b08:["m5L2-b8","with the help of the enzyme carnitine acyltransferase I"],
m5b09:["m5L2-b10","blocking the flow of FAs into the mitochondria, therefore halting FA degradation"],
m5b10:["m5L2-b10","This is the key regulatory step for FA degradation."],
m5b11:["m5L2-b10","Acyl carnitine is then able to be shuttled across the inner mitochondrial membrane by a translocase."],
m5b12:["m5L2-b13","Fatty acids enter the mitochondrial matrix through voltage dependent ion channels"],
m5b13:["m5L2-b12","This can result in muscle cramping, weakness, and even death."],
m5b14:["m5L2-b16","Each time we complete the series of reactions, we cut 2 carbons from our fatty acid in the form of Acetyl-CoA."],
m5b15:["m5L2-b17","The first step is oxidation via the enzyme acyl-CoA dehydrogenase."],
m5b16:["m5L2-b17","This is catalysed by the enzyme enol-coA hydratase."],
m5b17:["m5L2-b17","via the enzyme hydroxyacyl-CoA dehydrogenase"],
m5b18:["m5L2-b17",["simultaneously reduces FAD+ to FADH2","This is going to reduce NAD+ to NADH."]],
m5b19:["m5L2-b17",["So, now we cut it off to release an acetyl-CoA.","This whole thing is catalyzed by the enzyme thiloase."]],
m5b20:["m5L2-b17","That's 7 rounds of oxidation, which is 7 FADH, 7 NADH, and 8 Acetyl CoA"],
m5b21:["m5L2-b17","the last split will be a four carbon molecule into two acetyl Co-A molecules with one round of oxidation"],
m5b22:["m5L2-b19","the end product is not acetyl-CoA, but rather octanoyl-CoA"],
m5b23:["m5L2-b19","Isomerases and reductases are strategically used by our bodies at varying steps in the beta oxidation pathway"],
m5b24:["m5L2-b19","Propionyl CoA is then converted into succinyl CoA where it can enter into the citric acid cycle."],
m5b25:["m5L2-b23","Ketone bodies are produced in the mitochondria of the liver."],
m5b26:["m5L2-b23","we are saturating the oxaloacetate/not producing more oxaloacetate to bind with more acetyl-coA, so it builds up"],
m5b27:["m5L2-b23","The acetone is released in the lungs and bladder because it cannot be used to produce energy."],
m5b28:["m5L2-b23","The three major ketone bodies are acetoacetate, beta-hydroxybutarate, and acetone."],
m5b29:["m5L2-b27","A person stranded outside on a deserted island for 21 days, naked and afraid, without food."],
m5b30:["m5L2-b25","This can lead to something called ketoacidosis, which can dangerously decrease the pH of the blood."]};
const M=MODS[MODS.length-1];
M.questions.forEach(q=>{const l=LEC[q.id];if(l)q.lec={b:l[0],hl:l[1]};});
M.lecture="m5";
// Lecture blocks whose wording is off -> the lesson whose note explains it.
M.lecnotes={"m5L1-b11":["m5-sat"],"m5L1-b16":["m5-complex"],"m5L2-b8":["m5-carnitine"],"m5L2-b17":["m5-betaox"]};
})();
