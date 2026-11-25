// Topics, mock blueprint (quota per mock), cheat sheet sections.
const TOPICS = {
 'm5-tenets':   {m:5, name:'Three tenets of development', quota:2},
 'm5-piaget':   {m:5, name:'Piaget: schemes and equilibration', quota:2},
 'm5-stages':   {m:5, name:'Piaget\'s four stages', quota:3},
 'm5-vyg':      {m:5, name:'Vygotsky: ZPD and scaffolding', quota:2},
 'm5-phys':     {m:5, name:'Adolescence: puberty', quota:2},
 'm5-brain':    {m:5, name:'Adolescence: brain and risk-taking', quota:1},
 'm5-social':   {m:5, name:'Adolescence: peers, identity, mood', quota:2},
 'm5-theories': {m:5, name:'Theories of aging', quota:2},
 'm5-aging':    {m:5, name:'Normal vs abnormal aging', quota:1},
 'm6-neuro':    {m:6, name:'Affective neuroscience', quota:1},
 'm6-systems':  {m:6, name:'Emotional systems: structures and chemicals', quota:3},
 'm6-basic':    {m:6, name:'Basic and complex emotions', quota:2},
 'm6-surv':     {m:6, name:'Plutchik: survival behaviors', quota:1},
 'm6-comm':     {m:6, name:'Communicative functions of emotion', quota:2},
 'm6-drive':    {m:6, name:'Drive states', quota:2},
 'm6-motiv':    {m:6, name:'Motivation and learning', quota:2},
};
const B = s => `<b class="bt">${s}</b>`;
const TB = '<span class="tbm">textbook</span>';
const FIG = (k, alt) => `<img src="@o_${k}" alt="${alt}">`;

const SHEET = {
'm5-tenets': `
<p>Three debates run through every theory of development.</p>
<dl>
<dt>${B('Continuity versus discontinuity')}</dt><dd>Is development fluid and gradual (continuous), or does it happen in stages (discontinuous)? Asks whether early development relates to later development and whether learning is additive.</dd>
<dt>${B('Nature versus nurture')}</dt><dd>Is development driven more by innate biology and genetics (nature) or by experience (nurture)? Is self-esteem shaped more by personality traits or by parenting? Can diet and activity change adult height?</dd>
<dt>${B('Active child versus passive child')}</dt><dd>Do individuals shape their own development through their behavior (active), or are they at the mercy of their environment (passive)? Are we all potential victims of PTSD, or can we direct our own recovery?</dd>
</dl>
${FIG('tenets', 'Smooth growth curve versus a staircase of stages')}
<h4>Where the two cognitive theorists stand</h4>
<table><tr><th></th><th>Continuity</th><th>Nature/nurture</th><th>Active/passive</th></tr>
<tr><td>Piaget</td><td><b>Discontinuous</b> (stages)</td><td>More nurture</td><td>Active</td></tr>
<tr><td>Vygotsky</td><td><b>Continuous</b></td><td>More nurture</td><td>Active</td></tr></table>`,

'm5-piaget': `
<p>Jean Piaget (1896–1980): Swiss founding father of cognitive development and of the "constructivist theory of knowing" behind student-centered learning.</p>
<dl>
<dt>${B('Schemes')}</dt><dd>Mental structures (cognitive maps) that organize information so we can make sense of the world. Adapted through two processes:</dd>
<dt>${B('Assimilation')}</dt><dd>Interpreting new information to fit existing knowledge: we bend the new information to fit the scheme.</dd>
<dt>${B('Accommodation')}</dt><dd>Adjusting or restructuring the scheme so the new information fits better.</dd>
</dl>
<table><tr><th>Existing scheme</th><th>Assimilate</th><th>Accommodate</th></tr>
<tr><td>Apples are round and red</td><td>Calls a cherry "an apple" (error)</td><td>Apples are round and red <b>or green</b></td></tr></table>
<dl>
<dt>${B('Equilibration')}</dt><dd>Reorganizing schemes to restore balance when disequilibrium occurs, that is, when the child is spending more time accommodating than assimilating.</dd>
</dl>
<h4>Evaluation</h4>
<ul><li>Contributions: testable, empirical, repeatable; well supported; children are active participants; made cognition observable; U.S. schools are structured around his stages.</li>
<li>Criticisms: the last stage stops around 20; can children be trained to perform higher? Some develop abilities earlier; children pass substages in different orders.</li></ul>`,

'm5-stages': `
${FIG('stages', 'Piaget\'s four stages with ages')}
<dl>
<dt>${B('Sensorimotor')} (birth to 24 months)</dt><dd>Learns about the world through senses and actions, coordinating sensory input with motor responses. Test: ${B('object permanence')}, knowing an object still exists when it can't be seen. A toy car goes behind your back: does the child look for it?</dd>
<dt>${B('Preoperational')} (2–7 years)</dt><dd>Symbolic thought: words express thoughts and feelings. Thinking is marked by irreversibility, centration, and egocentrism. Test: ${B('symbolism')}, representing real items and ideas with objects, drawings, and words.</dd>
<dt>${B('Concrete operations')} (7–12 years)</dt><dd>Logical rules applied to concrete events; can classify hierarchically. A ${B('concrete operation')} is a reversible mental action on real objects, like doing math on your fingers. Test: ${B('conservation')}, understanding that changing something's form doesn't change its amount (tall and short tubes hold the same water).</dd>
<dt>${B('Formal operations')} (12+ years)</dt><dd>Solves problems by testing hypothetical solutions; thinks abstractly.</dd>
<dt>${B('Early formal thought')}</dt><dd>Unconstrained thought, unlimited possibilities; idealism dominates. Uses <b>assimilation</b>.</dd>
<dt>${B('Late formal thought')}</dt><dd>Tests reasoning against experience. Uses <b>accommodation</b>.</dd>
</dl>
<h4>${B('Types of conservation')}</h4>
${FIG('conserv', 'Conservation tasks: liquid, number, length, mass, area')}
<p>Liquid quantity (pour into a shorter, wider glass), number (spread out a row of pennies), length (slide one stick over), mass (roll a clay ball into a sausage), area (spread out the grass squares).</p>`,

'm5-vyg': `
<p>Lev Vygotsky (1896–1934), Russian psychologist: ${B('Cultural-Historical Activity Theory')}. Key features: the social origin of the mind, the importance of mediation, and the importance of play.</p>
<dl>
<dt>${B('Zone of Proximal Development')} (ZPD)</dt><dd>Tasks too hard for a child to master alone but masterable with guidance from adults or more skilled children. A measure of learning potential.</dd>
<dt>${B('Lower limit')}</dt><dd>The level of problem solving the child reaches working independently.</dd>
<dt>${B('Upper limit')}</dt><dd>The level of additional responsibility the child can accept with help from an able instructor.</dd>
</dl>
${FIG('zpd', 'ZPD circles: what I can do, with help, can\'t do')}
<p>Three aspects of development: social influences facilitate it; instruction matters (e.g., language); across the lifespan we need less instructor direction.</p>
<dl>
<dt>${B('Scaffolding')}</dt><dd>A teaching method that matches the amount of help to the learner's needs, keeping the child working in the ZPD. Parents use it for chores and homework; teachers for assignments. Moving from "private speech" to "inner speech" while learning math.</dd>
</dl>`,

'm5-phys': `
<dl>
<dt>${B('Adolescence')}</dt><dd>Starts with puberty and ends with the transition to adulthood (about ages 10–20). It is lengthening: puberty starts earlier and adulthood later. The U.S. lacks clear rites of passage; finishing school, financial independence, marriage, and parenthood all mark adulthood and are happening later.</dd>
<dt>${B('Puberty')}</dt><dd>Attaining sexual maturity of the reproductive organs and secondary sex characteristics. Starts on average at 10–11 for females and 11–12 for males in Western cultures.</dd>
<dt>${B('Primary sex characteristics')}</dt><dd>Directly related to reproduction: producing ova and sperm. Females begin the menstrual cycle, ${B('menarche')}. Males' first ejaculation, ${B('spermarche')}; then millions of sperm daily through adulthood.</dd>
<dt>${B('Secondary sex characteristics')}</dt><dd>Other body changes from rising sex hormones, not directly tied to reproduction.</dd>
</dl>
<h4>Hormone cascade</h4>
<p>The hypothalamus raises ${B('LH-RF')} (luteinizing hormone-releasing factor) and ${B('FSH-RF')} (follicle-stimulating hormone-releasing factor) → these trigger the <b>pituitary</b> → which stimulates the thyroid, adrenal glands, and gonads. Both sexes make testosterone and estrogen; boys secrete more testosterone (physical changes and sex drive).</p>
${FIG('puberty', 'Puberty changes in females and males')}`,

'm5-brain': `
<ul>
<li>Big changes in brain structure and function drive cognitive and behavioral development (Steinberg, 2008).</li>
<li>Thinking shifts from concrete to abstract and complex: better attention, memory, processing speed, and metacognition.</li>
<li><b>Early</b> adolescence: the <b>dopaminergic</b> system changes, raising sensation-seeking and reward motivation.</li>
<li><b>Later</b> adolescence: cognitive control centers in the <b>prefrontal cortex</b> mature, raising self-regulation and future orientation.</li>
<li>The timing gap makes risk-taking peak in <b>middle</b> adolescence (reckless driving, smoking, drinking): thrill-seeking is up before impulse control catches up.</li>
<li>Steinberg: "engaging a powerful engine before the braking system is in place." Teens are more prone to risky behavior than children or adults.</li>
</ul>`,

'm5-social': `
<h4>Parents</h4>
<p>Family stays important. As teens seek autonomy, parents' distal supervision and monitoring matter more because teens spend more time with peers.</p>
<dl>
<dt>${B('Peers')}</dt><dd>People who see one another as equals because of age, grade, or status. They help sculpt identity and <b>supplement, not replace</b>, parents. They provide social and emotional support, independence from family, alternative standards, relationships, and a context to redefine the self.</dd>
<dt>${B('Social comparison')}</dt><dd>Evaluating your own abilities and reactions against peers; lifelong. Early and mid-adolescence: seeking general approval ("do they like me?"). Late adolescence: quality over quantity, friends with similar characteristics and goals.</dd>
</dl>
<h4>Romantic relationships</h4>
<p>Same-sex childhood groups expand into mixed-sex groups, where romance forms (Connolly et al., 2000). Short-lived but important: teens' emotions are tied more to romance than to friends, family, or school (Furman &amp; Shaffer, 2003). They feed identity formation; often when LGBT youth come to see themselves as such.</p>
<h4>Identity formation (Marcia)</h4>
<p>Two axes: degree of <b>exploration</b> (crisis) and degree of <b>commitment</b> (investment). Statuses change over time and lie on continua.</p>
${FIG('marcia', 'Marcia\'s four identity statuses')}
<table><tr><th></th><th>Low exploration</th><th>High exploration</th></tr>
<tr><td>High commitment</td><td><b>Foreclosure</b>: "I've made a choice without thinking"</td><td><b>Identity achievement</b>: "I thought about it and now know what to do"</td></tr>
<tr><td>Low commitment</td><td><b>Identity diffusion</b>: "I don't know and don't care"</td><td><b>Moratorium</b>: "I'm thinking about what I should do"</td></tr></table>
<h4>Anxiety and depression</h4>
<p>Rise in adolescence with hormonal changes. Female teens: anxiety about <b>2×</b> and depression <b>1.5–3×</b> the male rate (APA, 2013). Teens from abusive, neglectful, or mentally ill households face high stress, select into maladaptive peer groups, and <b>co-ruminate</b>, which worsens negative affect. Anxiety and depression then strain relationships, keeping them stable over time.</p>`,

'm5-theories': `
<p>No theory is fully satisfactory. Modern theories fall into two categories.</p>
<h4>Programmed</h4>
<dl>
<dt>${B('Longevity theory')}</dt><dd>Aging comes from genes switching on and off in sequence. Evidence: many of us age like a parent or grandparent.</dd>
<dt>${B('Endocrine theory')}</dt><dd>Hormones act as biological clocks that pace aging; primary hormones decline with age. Evidence: gray hair, loss of muscle strength and mass.</dd>
<dt>${B('Immunological theory')}</dt><dd>The immune system declines, raising vulnerability to infection, aging, and death. Effectiveness peaks at puberty, then declines.</dd>
</dl>
<h4>Damage or error</h4>
<dl>
<dt>${B('Wear and tear theory')}</dt><dd>Vital parts of cells and tissues wear out. Evidence: hips, knees, heart valves.</dd>
<dt>${B('Rate of living theory')}</dt><dd>The greater an organism's rate of oxygen basal metabolism, the shorter its life span.</dd>
<dt>${B('Cross-linking theory')}</dt><dd>Cross-linked proteins accumulate, damaging cells and tissues and slowing bodily processes.</dd>
<dt>${B('Free radicals theory')}</dt><dd>Cumulative oxidative damage to cells and tissues, mainly from aerobic metabolism.</dd>
<dt>${B('Somatic DNA damage theory')}</dt><dd>DNA damage happens constantly; most is repaired, but some accumulates because DNA polymerases and other repair mechanisms can't keep up.</dd>
</dl>
<p class="mut sm">The notes spell it "Water and Tear" and also tag rate of living with "free radical theory."</p>
${FIG('hair', 'Gray hair: loss of melanocyte stem cells')}`,

'm5-aging': `
<h4>Normal aging</h4>
<p>A natural process from birth to death; people don't all age at the same rate. Trouble recalling a name, misplacing items, walking into a room and forgetting why, taking longer to multitask, trouble paying attention. Cause: natural <b>hippocampus</b> atrophy over time.</p>
<h4>Abnormal aging</h4>
<p>Most prominent signs: difficulty in areas governed by the <b>prefrontal cortex</b>.</p>
<ul>
<li>Trouble with everyday tasks: keeping appointments, taking meds, paying monthly bills, using electronics</li>
<li>Repetition: telling the same story again and again; ${B('perseveration')}, the continuation or recurrence of an activity without the appropriate stimulus</li>
<li>Communication problems: joining and following a conversation (not hearing loss)</li>
<li>Getting physically lost; disorientation to day, time, place, or situation</li>
<li>Judgment problems: hygiene, poor financial decisions, falling for scams</li>
<li>Slower or abnormal gait: smaller, rigid steps (bradykinesia)</li>
</ul>
<h4>Testing for abnormal aging</h4>
<ol><li>Objective cognitive screens from the PCP at 65 or 70</li><li>Rule out biological causes: hearing loss, stroke, infection, delirium, recent falls, sleep apnea, depression or mood disorders</li><li>See a specialist for detailed neuropsychological testing</li></ol>
<h4>Cognitive and social aging ${TB}</h4>
<dl>
<dt>Fluid vs crystallized intelligence ${TB}</dt><dd><b>Fluid</b>: information processing (reasoning, remembering lists, spatial ability, reaction time). <b>Crystallized</b>: draws on experience and knowledge (vocabulary, understanding texts). Older adults do worse on recall and processing speed but are excellent at drawing on experience.</dd>
<dt>Socioemotional selectivity theory ${TB}</dt><dd>Carstensen: with age, social goals shift from information gathering to emotion regulation, so older adults keep smaller networks focused on emotionally close people.</dd>
</dl>`,

'm6-neuro': `
<dl>
<dt>${B('Affective neuroscience')}</dt><dd>Studies how the brain creates emotional responses. Emotions involve body changes (facial expression), autonomic activity, feeling states, and urges to act (Izard, 2010).</dd>
</dl>
<p>Human work relies on noninvasive methods (EEG, fMRI) and lesion studies; animal work can be invasive. It gives credible, observable evidence and leads to biologically based treatments for affective disorders like depression.</p>
<dl>
<dt>${B('Networks of activation')}</dt><dd>Emotions are <b>not</b> located in a single brain structure. Many parts of the brain activate during any emotional process; the circuits include nearly the whole brain (Berridge &amp; Kringelbach, 2013).</dd>
</dl>
<p>Circuits deep below the cortex generate basic emotions.</p>`,

'm6-systems': `
<table><tr><th>System</th><th>Structures</th><th>Chemicals</th><th>Motivates</th></tr>
<tr><td><b>Desire</b>: reward seeking</td><td>Hypothalamus, amygdala, nucleus accumbens, left frontal cortex</td><td>Activated by <b>dopamine</b></td><td>Seeking rewards: food, sexual partners. No activation leads to depression</td></tr>
<tr><td><b>Liking</b>: reward enjoyment</td><td>Nucleus accumbens on the posterior half of the ventral pallidum; orbitofrontal cortex</td><td>Sensitive to <b>opioids</b></td><td>Pleasure: money, attractive faces</td></tr>
<tr><td><b>Fear</b>: freezing and fleeing</td><td>Amygdala → periaqueductal gray (midbrain)</td><td><b>Glutamate</b>, <b>cholecystokinin</b></td><td>Avoiding harm: snakes, threats</td></tr>
<tr><td><b>Rage</b>: anger and attack</td><td>Medial amygdala → hippocampus → periaqueductal gray <span class="mut sm">(textbook says hypothalamus)</span></td><td><b>Substance P</b>, testosterone, arginine-vasopressin; <b>inhibited by opioids</b></td><td>Approach and attack: goal frustration, pain, physical restraint</td></tr>
<tr><td><b>Love</b>: care and attachment</td><td>Preoptic areas → stria terminalis nucleus</td><td><b>Oxytocin</b>, arginine-vasopressin, endogenous opioids</td><td>Nurturing and protection: warm feelings, affection</td></tr>
<tr><td><b>Grief</b>: loneliness and panic</td><td>Periaqueductal gray → dorsomedial thalamus, ventral septum, dorsal preoptic region</td><td>(none listed)</td><td>Seeking comfort after loss: separation distress, panic attacks</td></tr></table>
<ul><li>Substance P is a neuropeptide of 11 amino acids.</li></ul>
<dl><dt>${B('Aggression')}</dt><dd>Not the same as rage or anger: aggression is an intention to harm, a consciously selected behavioral response (violence).</dd></dl>`,

'm6-basic': `
<p>Paul Ekman: six basic emotions expressed universally across cultures. They can't be broken into simpler emotions, are produced automatically, and are tied to specific evolutionary functions, so they have survival value.</p>
<dl>
<dt>${B('Valence')}</dt><dd>Whether an emotion is positive or negative. Every emotion, basic or complex, has one.</dd>
<dt>${B('Anger')}</dt><dd>Shown when a goal is blocked.</dd>
<dt>${B('Fear')}</dt><dd>Shown when facing threat or danger: fight, flight, or freeze.</dd>
<dt>${B('Disgust')}</dt><dd>Response to toxic or spoiled substances.</dd>
<dt>${B('Surprise')}</dt><dd>Reaction to unexpected stimuli; activates attention and curiosity.</dd>
<dt>${B('Happiness')}</dt><dd>Signals all is well; a pleasant state.</dd>
<dt>${B('Sadness')}</dt><dd>Response to losing something valuable; motivates seeking help and comfort.</dd>
</dl>
<p>Negative emotions each act as a "call to action" and deserve respect, even though society teaches us to ignore or control them.</p>
<h4>Plutchik: eight primary emotions</h4>
<p>${B('Acceptance')}, anger, ${B('anticipation')} (interest), disgust, joy, fear, sadness, surprise. Their intensity varies with arousal (strength of the trigger): annoyance → anger → rage.</p>
${FIG('wheel', 'Plutchik\'s wheel of emotions')}
<h4>Complex (secondary) emotions</h4>
<p>Built on basic emotions: embarrassment, disappointment, ambivalence. We rarely feel a basic or secondary emotion in isolation.</p>`,

'm6-surv': `
<p>Plutchik's sequential model: specific stimuli activate emotions, which set off ${B('survival behaviors')} (Krohn, 2007).</p>
<table><tr><th>Behavior</th><th>What it does</th><th>Activated by</th></tr>
<tr><td>Protection</td><td>Withdrawal, retreat</td><td>Fear, terror</td></tr>
<tr><td>Destruction</td><td>Eliminates a barrier to meeting needs</td><td>Anger, rage</td></tr>
<tr><td>Incorporation</td><td>Ingesting nourishment</td><td>Acceptance</td></tr>
<tr><td>Rejection</td><td>Riddance of harmful material</td><td>Disgust</td></tr>
<tr><td>Reproduction</td><td>Approach, contact, genetic exchange</td><td>Joy, pleasure</td></tr>
<tr><td>Reintegration</td><td>Reaction to loss of a nutrient product</td><td>Sadness, grief</td></tr>
<tr><td>Exploration</td><td>Investigating an environment</td><td>Curiosity, play</td></tr>
<tr><td>Orientation</td><td>Reaction to contact with an unfamiliar object</td><td>Surprise</td></tr></table>
${FIG('survival', 'Survival issues: stimulus, appraisal, reaction, behavior, function')}
<p>Threat → "danger" → fear → escape → safety. Obstacle → "enemy" → anger → attack → destroy obstacle. Unpalatable object → "poison" → disgust → vomit → eject poison. Loss of valued object → "abandonment" → sadness → cry → reattach. Unexpected event → "what is it?" → surprise → stop → gain time to orient.</p>
<p class="mut sm">The figure's joy and trust rows don't match the list above (it has joy → retain → gain resources and trust → groom → mutual support), so those rows aren't quizzed.</p>`,

'm6-comm': `
<p>Emotions play a communicative role at three levels.</p>
<dl>
<dt>${B('Intrapersonal')}</dt><dd>Within the individual: rapid information-processing systems that let us act with minimal thinking (attack, defend, flee, care for others, reject food, approach something useful).</dd>
<dt>${B('Interpersonal')}</dt><dd>Between individuals: expressed through faces, voices, gestures, posture. Expressions signal intent and steer others' behavior: anger evokes fear in others, distress evokes sympathy. They also signal the nature of relationships.</dd>
<dt>${B('Social referencing')}</dt><dd>Using others' emotional expressions as incentives for socially desirable behavior (the visual cliff experiments).</dd>
<dt>${B('Socio-cultural')}</dt><dd>Within and across groups and cultures: almost all infants show emotion, like smiling at a caretaker, by about 6 weeks. Culture tells us what to do with our emotions.</dd>
<dt>${B('Cultural display rules')}</dt><dd>Rules learned early in life that specify how to modify emotional expressions for the social situation; they help maintain social order (Friesen, 1972).</dd>
</dl>`,

'm6-drive': `
<dl>
<dt>${B('Drive states')}</dt><dd>Affective experiences that motivate us to meet goals beneficial to survival and reproduction: hunger, thirst, sexual appetite. Unmet drives affect thoughts, mood, and behavior; once met, these recover quickly.</dd>
</dl>
<ul><li>Affect perception, attention, emotion, and motivation.</li><li>Have valence and drive approach or avoidance.</li><li>Respond to internal and external cues (abdominal pain, food smells).</li></ul>
<h4>Properties</h4>
<dl>
<dt>${B('Homeostasis')}</dt><dd>The tendency to keep all bodily systems stable, like a thermostat. Maintained by (1) regular comparison to a ${B('set point')} (the ideal level) and (2) restoration to it. Some mechanisms are automatic (circulation, immune response); others need deliberate action. Works on reward and punishment.</dd>
<dt>${B('Narrowing of attention')}</dt><dd>Tunnel vision as a drive intensifies: (1) attention moves toward rewards and away from punishment; (2) time perspective collapses toward the present, so we get impatient; (3) focus shifts to our own needs, so we become less altruistic and more selfish.</dd>
</dl>`,

'm6-motiv': `
<p>Drive states motivate us to: self-preserve, rest when exhausted, fulfill evolutionary functions (reproduction), and pay attention to internal and external triggers (thirst vs. fear).</p>
<dl>
<dt>${B('Learning')}</dt><dd>Acquiring knowledge, skills, and abilities (KSAs) through experience, study, or direct instruction. It results in behavior change. Motivation as a drive state facilitates it.</dd>
</dl>
<h4>Learning as permanent behavior change</h4>
<p><b>Awareness / education → intent / motivation → behavioral change.</b></p>
<p>The PCP hears your lungs, recommends you quit smoking, and gives you reading on the risks and on how well lungs rebound. Awareness comes first, then the intent to quit, then the actual change.</p>
<p>Motivation focuses attention on the desired outcome and helps us persevere through setbacks. We control our own motivation. <b>Internal</b> motivation (personal values) produces more behavior change, satisfaction, and positive outcomes than <b>external</b> motivation (money, recognition).</p>`,
};
