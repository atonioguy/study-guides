/* ============ MODULE 5 ============ */
/* Q(topic, kind, stem, [KEY, wrong, wrong, wrong], explanation, extras)
   kinds: r recall, a example->term, e term->example, f figure, c contrast, s study, t true/false */

/* ---- m5-tenets ---- */
Q('m5-tenets','a','A researcher tracks children from age 2 to 10 to see whether reading skill builds steadily or jumps when a new phase begins. Which debate is she testing?',
 ['Continuity versus discontinuity','Nature versus nurture','Active child versus passive child'],
 'Steady buildup versus sudden phases is continuity versus discontinuity. Nature versus nurture asks about genes versus experience, not the shape of change.');
Q('m5-tenets','a','Identical twins raised in different homes end up within an inch of each other in adult height, despite different diets. Which debate does this evidence speak to?',
 ['Nature versus nurture','Continuity versus discontinuity','Active child versus passive child'],
 'Shared genes versus different environments is the nature versus nurture question. Continuity versus discontinuity concerns whether change is gradual or staged.');
Q('m5-tenets','a','Two teens survive the same house fire. A psychologist asks whether people who live through the same event share the same outcomes, or whether each can steer their own recovery. Which debate is this?',
 ['Active child versus passive child','Nature versus nurture','Continuity versus discontinuity'],
 'Whether people shape their own outcomes or are at the mercy of events is active versus passive. Nature versus nurture asks whether genes or experience drive development.');
Q('m5-tenets','a','A parenting blog asks whether a child\'s self-esteem comes mostly from inborn personality traits or from how the parents raise her. Which debate is this?',
 ['Nature versus nurture','Active child versus passive child','Continuity versus discontinuity'],
 'Inborn traits versus parenting is nature versus nurture. Active versus passive asks whether the child shapes her own development.');
Q('m5-tenets','c','Piaget and Vygotsky agree on two of the three tenets. Which one do they disagree on?',
 ['Continuity versus discontinuity','Nature versus nurture','Active child versus passive child'],
 'Piaget saw development as discontinuous stages and Vygotsky saw it as continuous. Both leaned toward nurture and both saw children as active.');
Q('m5-tenets','c','How did Piaget and Vygotsky view the continuity of cognitive development, respectively?',
 ['Discontinuous; continuous','Continuous; discontinuous','Discontinuous; discontinuous','Continuous; continuous'],
 'Piaget\'s stage theory makes development discontinuous; Vygotsky saw it as continuous.');
Q('m5-tenets','r','Which describes Piaget\'s stance on the three tenets?',
 ['Discontinuous, more nurture, active','Continuous, more nurture, active','Discontinuous, more nature, passive','Continuous, more nature, passive'],
 'Piaget: discontinuous stages, more nurture, and children as active participants. Continuous, more nurture, active is Vygotsky\'s stance.');
Q('m5-tenets','r','Which describes Vygotsky\'s stance on the three tenets?',
 ['Continuous, more nurture, active','Discontinuous, more nurture, active','Continuous, more nature, passive','Discontinuous, more nature, passive'],
 'Vygotsky: continuous, more nurture, active. Discontinuous, more nurture, active is Piaget\'s stance.');
Q('m5-tenets','f','The figure contrasts a smooth growth curve (left) with a staircase (right). Which debate does it illustrate?',
 ['Continuity versus discontinuity','Nature versus nurture','Active child versus passive child'],
 'A smooth curve is continuous development; a staircase is development in stages (discontinuous).', {fig:'o_tenets'});
TF('m5-tenets','t','Vygotsky viewed cognitive development as discontinuous.', false,
 'Vygotsky viewed it as continuous. Piaget is the one who saw discontinuous stages.');
TF('m5-tenets','t','Piaget viewed cognitive development as discontinuous.', true,
 'Piaget\'s four stages make development discontinuous. Vygotsky saw it as continuous.');
TF('m5-tenets','t','Piaget and Vygotsky both saw cognitive development as due more to nurture than nature.', true,
 'Both leaned toward nurture. Where they split was continuity: Piaget discontinuous, Vygotsky continuous.');

/* ---- m5-piaget ---- */
Q('m5-piaget','a','A toddler whose scheme is "apples are round and red" points at a cherry and says "apple!" Which process is she using?',
 ['Assimilation','Accommodation','Equilibration','Disequilibrium'],
 'She bends the new information to fit her existing scheme, which is assimilation. Accommodation would change the scheme itself.');
Q('m5-piaget','a','The same toddler is shown a green apple and told it is an apple. Her scheme becomes "apples are round and red or green." Which process is this?',
 ['Accommodation','Assimilation','Equilibration','Disequilibrium'],
 'Restructuring the scheme so the new information fits is accommodation. Assimilation would have left the scheme unchanged.');
Q('m5-piaget','a','A 3-year-old who knows the word "dog" sees a cat and calls it "doggy." Which process is he using?',
 ['Assimilation','Accommodation','Equilibration','Disequilibrium'],
 'He fits the cat into his existing dog scheme, which is assimilation. Accommodation would mean creating or changing a scheme to handle cats.');
Q('m5-piaget','a','A child believes "all birds can fly." After learning about penguins and ostriches, she changes her belief to "most birds can fly." Which process is this?',
 ['Accommodation','Assimilation','Equilibration','Disequilibrium'],
 'She restructures her scheme to fit the new information, which is accommodation. Assimilation would mean forcing penguins into the old scheme.');
Q('m5-piaget','r','Piaget\'s term for a mental structure that organizes information like a cognitive map is',
 ['scheme','stage','assimilation','equilibration'],
 'A scheme is the cognitive map. A stage is a period of development, and assimilation and equilibration are processes that act on schemes.');
Q('m5-piaget','a','A child is bombarded with experiences that don\'t fit her schemes and spends far more time accommodating than assimilating. According to Piaget, what process resolves this?',
 ['Equilibration','Assimilation','Accommodation','Disequilibrium'],
 'Equilibration reorganizes schemes to re-establish balance after disequilibrium. Disequilibrium is the imbalance itself, and more assimilation or accommodation alone does not resolve it.');
Q('m5-piaget','r','According to Piaget, disequilibrium occurs when a child',
 ['spends more time accommodating than assimilating','spends more time assimilating than accommodating','keeps assimilation and accommodation in balance'],
 'Disequilibrium means accommodation is outpacing assimilation. When the two are in balance, the child is in equilibrium.');
Q('m5-piaget','c','Which statement correctly contrasts assimilation and accommodation?',
 ['Assimilation fits new information to a scheme; accommodation changes the scheme','Accommodation fits new information to a scheme; assimilation changes the scheme','Assimilation restores balance between schemes; accommodation creates schemes','Accommodation restores balance between schemes; assimilation creates schemes'],
 'Assimilation changes the information to fit the scheme; accommodation changes the scheme to fit the information.');
TF('m5-piaget','t','That some children develop abilities earlier than his stages predict is a criticism, not a contribution, of Piaget\'s theory.', true,
 'Early-developing abilities are a criticism. Contributions include testable methods and U.S. schools being structured on his stages.');
TF('m5-piaget','t','That his last stage only goes up to about age 20 is a contribution, not a criticism, of Piaget\'s theory.', false,
 'Critics ask whether more stages are needed past formal operations. Contributions include making cognition observable.');
TF('m5-piaget','a','A toddler who sees a zebra at the zoo and calls it a "horsie" is accommodating.', false,
 'She is assimilating: bending the zebra to fit her existing horse scheme. Accommodating would mean changing the scheme.');
TF('m5-piaget','a','A child who changes her scheme from "dogs are big" to "dogs can be big or small" after meeting a Chihuahua is accommodating.', true,
 'Changing the scheme to fit new information is accommodation. Assimilation would leave the scheme unchanged.');
TF('m5-piaget','t','Disequilibrium occurs when a child spends more time accommodating than assimilating.', true,
 'Disequilibrium is more time accommodating than assimilating, and equilibration restores the balance.');
TF('m5-piaget','t','Piaget\'s stage theory is the basis for how U.S. school systems are structured.', true,
 'U.S. schools follow his stages, one of the contributions of his theory.');

/* ---- m5-stages ---- */
Q('m5-stages','a','An 18-month-old watches her father hide a toy under a blanket, then lifts the blanket to find it. Which stage is she in?',
 ['Sensorimotor','Preoperational','Concrete operations','Formal operations'],
 'Searching for a hidden object shows object permanence, the test of the sensorimotor stage (birth to 24 months).');
Q('m5-stages','a','A 4-year-old holds a banana to his ear and pretends to talk on the phone. Which ability is he showing?',
 ['Symbolism','Object permanence','Conservation','A concrete operation'],
 'Using one object to represent another is symbolism, the preoperational test. Object permanence comes earlier and conservation later.');
Q('m5-stages','a','An 8-year-old watches water poured from a tall, thin glass into a short, wide one and says, "It\'s still the same amount." Which ability is she showing?',
 ['Conservation','Symbolism','Object permanence','Centration'],
 'Knowing that a change in form doesn\'t change the amount is conservation, the concrete operations test.');
Q('m5-stages','a','A 9-year-old solves a subtraction problem by counting backward on her fingers. In Piaget\'s terms, this is an example of',
 ['a concrete operation','symbolism','object permanence','conservation'],
 'A concrete operation is a reversible mental action on real, concrete objects, like doing math on your fingers.');
Q('m5-stages','a','In chemistry lab, a 15-year-old reasons, "If the reaction depends on temperature, heating it should speed it up," and designs a test. Which stage is she in?',
 ['Formal operations','Concrete operations','Preoperational','Sensorimotor'],
 'Solving problems by testing hypothetical solutions marks formal operations (12+). Concrete operations applies logic only to concrete events.');
Q('m5-stages','a','A 16-year-old writes an essay imagining a society with no conflict or poverty, unconstrained by how things actually work. Which phase of thinking is this?',
 ['Early formal thought','Late formal thought','Concrete operations','Preoperational'],
 'Unconstrained thought with unlimited possibilities and idealism is early formal thought. Late formal thought tests ideas against experience.');
Q('m5-stages','a','After a year volunteering at a food bank, a 19-year-old revises his idealistic plans to fit what he actually saw work. Which phase of thinking is this?',
 ['Late formal thought','Early formal thought','Concrete operations','Preoperational'],
 'Testing reasoning against experience is late formal thought. Early formal thought is idealistic and unconstrained.');
Q('m5-stages','c','Early and late formal thought rely on which processes, respectively?',
 ['Assimilation; accommodation','Accommodation; assimilation','Assimilation; assimilation','Accommodation; accommodation'],
 'Early formal thought uses assimilation; late formal thought, testing against experience, uses accommodation.');
Q('m5-stages','r','Piaget\'s concrete operations stage spans which ages?',
 ['7–12 years','2–7 years','Birth to 24 months','12 years and up'],
 'Concrete operations is 7–12. Preoperational is 2–7, sensorimotor is birth to 24 months, and formal operations is 12 and up.');
Q('m5-stages','r','Which test marks the preoperational stage?',
 ['Symbolism','Object permanence','Conservation'],
 'Symbolism is the preoperational test. Object permanence tests the sensorimotor stage and conservation tests concrete operations.');
Q('m5-stages','r','Thinking marked by irreversibility, centration, and egocentrism is typical of which stage?',
 ['Preoperational','Sensorimotor','Concrete operations','Formal operations'],
 'Preoperational thought (2–7) has these limits. Concrete operations brings reversible mental actions.');
Q('m5-stages','r','A child in Piaget\'s formal operations stage is newly able to',
 ['solve problems by testing hypothetical solutions','apply logical rules to concrete events','use words and symbols to express thoughts','coordinate sensory input with motor responses'],
 'Testing hypothetical solutions is formal operations. The other three describe concrete operations, preoperational, and sensorimotor.');
Q('m5-stages','a','A 5-year-old insists a flattened pancake of clay has more clay than the ball it was made from. Which stage is he most likely in?',
 ['Preoperational','Concrete operations','Sensorimotor','Formal operations'],
 'He fails conservation, which isn\'t mastered until concrete operations. At 5 with symbolic thought, he is preoperational.');
Q('m5-stages','f','In the figure, which stage is hidden behind label B?',
 ['Preoperational','Sensorimotor','Concrete operations','Formal operations'],
 'B covers ages 2–7: the preoperational stage, marked by symbolic thought.', {fig:'f_stages'});
Q('m5-stages','f','In the figure, which stage is hidden behind label C?',
 ['Concrete operations','Preoperational','Formal operations','Sensorimotor'],
 'C covers ages 7–12: concrete operations, when logic is applied to concrete events.', {fig:'f_stages'});
Q('m5-stages','f','In the figure, which stage is hidden behind label D?',
 ['Formal operations','Concrete operations','Preoperational','Sensorimotor'],
 'D covers 12 years onward: formal operations, when problems are solved by testing hypothetical solutions.', {fig:'f_stages'});
Q('m5-stages','f','In the conservation table, row D rolls one clay ball into a sausage. Which type of conservation is hidden at D?',
 ['Mass','Liquid quantity','Number','Area'],
 'Reshaping a clay ball tests conservation of mass: the amount of clay doesn\'t change.', {fig:'f_conserv'});
Q('m5-stages','f','In the conservation table, row B pushes one row of pennies closer together. Which type of conservation is hidden at B?',
 ['Number','Length','Mass','Area'],
 'Pushing a row of pennies together tests conservation of number: the count stays the same.', {fig:'f_conserv'});
TF('m5-stages','t','Late formal thought relies mainly on assimilation.', false,
 'Late formal thought tests reasoning against experience and relies on accommodation. Early formal thought relies on assimilation.');
TF('m5-stages','t','Conservation, not symbolism, is the test that marks the concrete operations stage.', true,
 'Passing conservation tasks marks concrete operations; symbolism marks the preoperational stage.');
TF('m5-stages','a','A 3-year-old who pretends a wooden block is a car is passing the test for the concrete operations stage.', false,
 'Using an object to represent another is symbolism, the preoperational test. Concrete operations is marked by conservation.');
TF('m5-stages','a','A 15-year-old who daydreams about fixing every world problem, with no thought for practical limits, is showing early formal thought.', true,
 'Unconstrained, idealistic thinking is early formal thought. Late formal thought tests ideas against experience.');

Q('m5-stages','f','In the figure, which stage is hidden behind label A?',
 ['Sensorimotor','Preoperational','Concrete operations','Formal operations'],
 'A covers birth to 2 years: the sensorimotor stage, when the world is learned through senses and actions.', {fig:'f_stages'});
TF('m5-stages','a','A 9-year-old who counts on her fingers to subtract is showing symbolism, not a concrete operation.', false,
 'Doing math on fingers is a concrete operation, a reversible mental action on real objects. Symbolism is the preoperational test.');

/* ---- m5-vyg ---- */
Q('m5-vyg','a','A second grader can add two-digit numbers on her own, can add three-digit numbers when her tutor guides her, and can\'t do algebra even with help. Adding two-digit numbers alone marks her',
 ['lower limit','upper limit','Zone of Proximal Development','scaffolding'],
 'What a child can do working independently is the lower limit. The upper limit is the most she can take on with an able instructor.');
Q('m5-vyg','a','For the same second grader, three-digit addition with her tutor\'s guidance is the hardest work she can handle. That level marks her',
 ['upper limit','lower limit','scaffolding','Zone of Proximal Development'],
 'The most responsibility she can accept with help is the upper limit. The lower limit is what she does alone.');
Q('m5-vyg','a','For the same second grader, the whole range of tasks between what she can do alone and what she can do with her tutor is her',
 ['Zone of Proximal Development','lower limit','upper limit','scaffolding'],
 'The ZPD is the range of tasks too hard to master alone but masterable with guidance. The lower and upper limits are its two boundaries.');
Q('m5-vyg','a','A swim instructor holds a child fully at first, then supports only her hand, then lets go as her strokes improve. This illustrates',
 ['scaffolding','the Zone of Proximal Development','the lower limit','the upper limit'],
 'Matching the amount of help to the learner\'s needs is scaffolding. The ZPD is the range of tasks the help targets, not the method.');
Q('m5-vyg','e','Which example best shows scaffolding?',
 ['A parent walks a child through laundry, then gives fewer hints as she masters each step','A tutor drops all hints after week one, whether or not the child is ready','A coach gives more hints each week as the swimmer gets stronger','A child rereads passages alone that she mastered weeks ago at school'],
 'Scaffolding matches help to the learner\'s needs, so help shrinks as she masters each step. Dropping hints regardless of readiness, or adding hints as skill grows, ignores her needs; rereading mastered passages alone is her lower limit.');
Q('m5-vyg','r','Vygotsky\'s psychological development framework is known as',
 ['Cultural-Historical Activity Theory','the constructivist theory of knowing','the Zone of Proximal Development'],
 'Vygotsky created Cultural-Historical Activity Theory. The constructivist theory of knowing is Piaget\'s; the ZPD is one concept within Vygotsky\'s theory.');
Q('m5-vyg','c','Which statement correctly contrasts scaffolding and the ZPD?',
 ['The ZPD is a range of tasks; scaffolding is the method of helping within it','Scaffolding is a range of tasks; the ZPD is the method of helping within it','The ZPD is what a child does alone; scaffolding is what she does with help','Scaffolding is what a child does alone; the ZPD is what she does with help'],
 'The ZPD is the range of tasks masterable only with guidance; scaffolding is the teaching method that matches help to need.');
Q('m5-vyg','c','The lower and upper limits of the ZPD reflect which levels, respectively?',
 ['Working independently; accepting more with an instructor\'s help','Accepting more with an instructor\'s help; working independently','Working independently; tasks too hard even with help','Tasks too hard even with help; working independently'],
 'The lower limit is independent problem solving; the upper limit is what the child can accept with help from an able instructor.');
Q('m5-vyg','f','In the figure, callout A points into the "what I can do with help" ring. What does it name?',
 ['Zone of Proximal Development','Lower limit','Upper limit','Scaffolding'],
 'The ring between "what I can do" and "what I can\'t do" is the ZPD: tasks masterable only with help.', {fig:'f_zpd'});
Q('m5-vyg','a','A teacher pairs a struggling reader with a stronger classmate on passages she can\'t yet read alone but can manage with his help. Which concept is the teacher targeting?',
 ['Zone of Proximal Development','Lower limit','Cultural-Historical Activity Theory','Inner speech'],
 'Tasks too hard alone but doable with a more skilled child\'s guidance fall in the ZPD. The lower limit is what she reads alone.');
TF('m5-vyg','t','Vygotsky held that across the lifespan, learners need more and more instructor direction.', false,
 'Vygotsky held the opposite: across the lifespan we move toward less instructor direction.');
TF('m5-vyg','a','The math problems a child can solve entirely on her own mark the upper limit of her ZPD.', false,
 'Working independently marks the lower limit. The upper limit is what she can take on with an able instructor\'s help.');

TF('m5-vyg','t','Cultural-Historical Activity Theory was developed by Piaget, not Vygotsky.', false,
 'It is Vygotsky\'s framework. Piaget is the father of the constructivist theory of knowing.');

/* ---- m5-phys ---- */
Q('m5-phys','a','A 12-year-old girl has her first menstrual period. This event is called',
 ['menarche','spermarche','a rise in LH-RF','a secondary sex characteristic'],
 'The start of the menstrual cycle is menarche. Spermarche is a male\'s first ejaculation.');
Q('m5-phys','a','A 13-year-old boy has his first ejaculation. This event is called',
 ['spermarche','menarche','a secondary sex characteristic','puberty'],
 'A male\'s first ejaculation is spermarche. Menarche is the start of the menstrual cycle.');
Q('m5-phys','a','During puberty, a boy\'s voice deepens and he grows underarm hair. These changes are',
 ['secondary sex characteristics','primary sex characteristics','spermarche','menarche'],
 'Body changes from rising hormones that aren\'t directly about reproduction are secondary sex characteristics.');
TF('m5-phys','a','A boy beginning to produce viable sperm is developing a secondary sex characteristic.', false,
 'Producing sperm is directly reproductive, so it is a primary sex characteristic.');
Q('m5-phys','c','Which statement correctly contrasts primary and secondary sex characteristics?',
 ['Primary are directly reproductive; secondary are not','Secondary are directly reproductive; primary are not','Primary are triggered by LH-RF; secondary by FSH-RF','Secondary are triggered by LH-RF; primary by FSH-RF'],
 'Primary characteristics (ova and sperm) are directly tied to reproduction; secondary characteristics are other hormone-driven changes.');
Q('m5-phys','r','Which sequence describes the hormone cascade that starts puberty?',
 ['Hypothalamus raises LH-RF and FSH-RF, which trigger the pituitary','Pituitary raises LH-RF and FSH-RF, which trigger the hypothalamus','Gonads raise LH-RF and FSH-RF, which trigger the hypothalamus','Adrenal glands raise LH-RF and FSH-RF, which trigger the gonads'],
 'The hypothalamus raises the releasing factors, which trigger the pituitary to stimulate the thyroid, adrenals, and gonads.');
Q('m5-phys','r','In Western cultures, puberty begins on average at about',
 ['10–11 for females and 11–12 for males','11–12 for females and 10–11 for males','10–11 for both females and males'],
 'Females start at about 10–11 and males at about 11–12.');
TF('m5-phys','t','Adolescence is getting shorter because puberty now starts later than in the past.', false,
 'Adolescence is lengthening: puberty starts earlier and the transition to adulthood comes later.');
TF('m5-phys','a','A 12-year-old growing underarm hair is developing a primary sex characteristic.', false,
 'Underarm hair is a secondary sex characteristic. Primary characteristics are directly reproductive, like producing ova or sperm.');
TF('m5-phys','t','In the U.S., markers of adulthood such as financial independence and marriage are happening later than in the past.', true,
 'These transitions are happening later, which is part of why adolescence is lengthening.');

Q('m5-phys','r','Which gland do LH-RF and FSH-RF directly trigger at puberty?',
 ['Pituitary','Thyroid','Adrenal','Gonads'],
 'The releasing factors trigger the pituitary, which then stimulates the thyroid, adrenal glands, and gonads.');
TF('m5-phys','a','A girl\'s first menstrual period, menarche, is an example of a secondary sex characteristic.', false,
 'Menarche belongs to the primary sex characteristics, which are directly tied to reproduction.');

/* ---- m5-brain ---- */
Q('m5-brain','a','A 15-year-old knows street racing is dangerous but does it anyway for the thrill. Which explanation fits Steinberg\'s account?',
 ['Reward-seeking changes come before prefrontal control develops','Prefrontal control develops before reward-seeking changes come','Reward seeking and prefrontal control develop at the same time','Prefrontal control develops early, and then reward seeking fades'],
 'Dopamine-driven sensation seeking rises early, while prefrontal cognitive control matures later. The gap drives risk-taking.');
Q('m5-brain','r','Which brain change comes first in adolescence?',
 ['Dopaminergic changes that raise sensation seeking','Prefrontal changes that raise self-regulation','Prefrontal changes that raise sensation seeking','Dopaminergic changes that raise self-regulation'],
 'Early adolescence brings dopaminergic changes (sensation seeking, reward motivation); the prefrontal cortex matures later (self-regulation, future orientation).');
Q('m5-brain','r','Because of the timing gap between brain systems, risk-taking is greatest in',
 ['middle adolescence','early adolescence','late adolescence'],
 'Thrill seeking is high while control is still developing, so risk-taking is greatest in middle adolescence.');
Q('m5-brain','r','In Steinberg\'s image of "a powerful engine before the braking system is in place," the braking system is',
 ['prefrontal cognitive control','the dopaminergic reward system','metacognition'],
 'The brakes are the prefrontal cortex\'s cognitive control; the engine is dopamine-driven reward seeking.');
Q('m5-brain','r','According to Steinberg, who is most prone to risky behaviors?',
 ['Adolescents','Children','Adults'],
 'The engine-before-brakes gap makes adolescents more prone to risky behavior than either children or adults.');
TF('m5-brain','t','During adolescence, thinking shifts from concrete to abstract.', true,
 'Thinking shifts from concrete to more abstract and complex, improving attention, memory, and metacognition.');
TF('m5-brain','a','A 19-year-old who now weighs future consequences before acting is benefiting from his maturing prefrontal cortex.', true,
 'The prefrontal cortex matures later in adolescence, raising self-regulation and future orientation; the dopaminergic changes come early.');
TF('m5-brain','a','A 13-year-old\'s sudden surge in thrill seeking is driven mainly by changes in his dopaminergic system rather than his prefrontal cortex.', true,
 'Early dopaminergic changes raise sensation seeking; the prefrontal cortex matures later and adds self-regulation.');

/* ---- m5-social ---- */
Q('m5-social','r','How do peers relate to the role of parents during adolescence?',
 ['Peers supplement parents rather than replace them','Peers take over the monitoring role parents once had','Peers matter more only when parents are absent','Peers outweigh parents in early adolescence, then fade'],
 'Peers grow more important but supplement, not replace, parents; family relationships stay important.');
Q('m5-social','a','A teenager used to want everyone at school to like her. Now she keeps a few close friends who share her goals. Her social comparison has shifted toward',
 ['quality of friendships, typical of late adolescence','quantity of friendships, typical of late adolescence','quality of friendships, typical of early adolescence','quantity of friendships, typical of early adolescence'],
 'Early and mid-adolescence seek general approval; late adolescence values quality over quantity and similar goals.');
Q('m5-social','f','In Marcia\'s grid, which status is hidden at A?',
 ['Foreclosure','Identity achievement','Moratorium','Identity diffusion'],
 'A has high commitment and low exploration ("I\'ve made a choice without thinking"): foreclosure.', {fig:'f_marcia'});
Q('m5-social','f','In Marcia\'s grid, which status is hidden at D?',
 ['Moratorium','Identity diffusion','Foreclosure','Identity achievement'],
 'D has high exploration and low commitment ("I\'m thinking about what I should do"): moratorium.', {fig:'f_marcia'});
Q('m5-social','a','Jordan has spent two years trying out pre-med, music, and teaching, and hasn\'t committed to any of them. Which identity status is this?',
 ['Moratorium','Identity diffusion','Foreclosure','Identity achievement'],
 'Actively exploring without committing is moratorium. Identity diffusion is neither exploring nor committing.');
Q('m5-social','a','Sam plans to take over the family business because his parents always expected it. He never considered anything else. Which identity status is this?',
 ['Foreclosure','Identity achievement','Moratorium','Identity diffusion'],
 'Committing without exploring is foreclosure. Identity achievement requires exploring first.');
Q('m5-social','a','Ana says she doesn\'t know what she wants to do with her life and isn\'t looking into it. Which identity status is this?',
 ['Identity diffusion','Moratorium','Foreclosure','Identity achievement'],
 'Low exploration and low commitment is identity diffusion. Moratorium would mean she is actively exploring.');
Q('m5-social','a','After job-shadowing in several fields, Lee commits to becoming a nurse. Which identity status is this?',
 ['Identity achievement','Foreclosure','Moratorium','Identity diffusion'],
 'Exploring first and then committing is identity achievement. Foreclosure commits without exploring.');
Q('m5-social','c','In Marcia\'s model, how actively a teen has tried out options is one axis, and how firmly she holds to an identity is the other. These axes are, respectively,',
 ['exploration; commitment','commitment; exploration','commitment; comparison','comparison; exploration'],
 'Exploration (crisis) is trying out options; commitment (investment) is holding to an identity. Comparison is not one of Marcia\'s axes.');
Q('m5-social','r','Compared with male teens, female teens have rates of',
 ['anxiety about 2× and depression 1.5–3× as high','anxiety 1.5–3× and depression about 2× as high','anxiety about 2× and depression about 2× as high','anxiety 1.5–3× and depression 1.5–3× as high'],
 'Female teens have about twice the anxiety and 1.5 to 3 times the depression of male teens (APA, 2013).');
Q('m5-social','s','Furman and Shaffer (2003) found that teens\' positive and negative emotions are tied most to',
 ['romantic relationships','friendships','family relationships','school'],
 'Teens\' emotions are more tied to romantic relationships, or the lack of them, than to friendships, family, or school.');
TF('m5-social','t','As teens spend more time with peers, parents\' distal supervision and monitoring become more important.', true,
 'Monitoring from a distance matters more as teens seek autonomy and spend time away from parents.');
TF('m5-social','t','Co-rumination among depressed teens tends to reduce negative affect.', false,
 'Co-ruminating worsens negative affect and stress and downplays positive affect.');
TF('m5-social','s','Teen romantic relationships tend to form within mixed-sex, not same-sex, peer groups.', true,
 'Same-sex childhood groups expand into mixed-sex groups, where romances tend to form.');

TF('m5-social','a','A teen who mostly wants to know whether her classmates like her shows the social comparison pattern typical of late adolescence.', false,
 'Seeking general approval is typical of early and mid-adolescence. Late adolescence values a few close friends with similar goals.');

/* ---- m5-theories ---- */
Q('m5-theories','a','A 70-year-old needs a replacement heart valve after his original one gradually stops working properly. Which theory of aging does this best illustrate?',
 ['Wear and tear','Cross-linking','Somatic DNA damage','Endocrine'],
 'Vital parts wearing out, like knees, hips, and heart valves, is wear and tear theory.');
Q('m5-theories','a','As a man ages, his hair grays and he loses muscle strength and mass. Which theory of aging does this best illustrate?',
 ['Endocrine','Immunological','Longevity','Cross-linking'],
 'Hormones acting as biological clocks, with gray hair and muscle loss as evidence, is endocrine theory.');
Q('m5-theories','a','A woman notices she is aging almost exactly the way her mother and grandmother did. Which theory of aging does this support?',
 ['Longevity','Endocrine','Immunological','Somatic DNA damage'],
 'Longevity theory says aging follows genes switching on and off in sequence; aging like a parent is its evidence.');
Q('m5-theories','a','An 80-year-old is sick far more often each winter than she was as a teenager. Which theory of aging does this illustrate?',
 ['Immunological','Endocrine','Longevity','Wear and tear'],
 'Immunological theory says immune effectiveness peaks at puberty and then declines, raising vulnerability to infection.');
Q('m5-theories','a','Proteins in a patient\'s tissues bond to one another and build up, damaging the tissue and slowing bodily processes. Which theory of aging does this illustrate?',
 ['Cross-linking','Free radicals','Somatic DNA damage','Wear and tear'],
 'An accumulation of cross-linked proteins that damages tissue is cross-linking theory. Free radicals theory is about oxidative damage.');
Q('m5-theories','a','Repair enzymes correct most of the defects that arise in a cell each day, but uncorrected ones accumulate faster than they can be fixed. Which theory of aging does this illustrate?',
 ['Somatic DNA damage','Cross-linking','Free radicals','Longevity'],
 'Damage accumulating faster than repair mechanisms can correct it is somatic DNA damage theory.');
Q('m5-theories','a','Byproducts of aerobic metabolism cause oxidative damage that builds up in cells and tissues over decades. Which theory of aging does this illustrate?',
 ['Free radicals','Cross-linking','Somatic DNA damage','Wear and tear'],
 'Cumulative oxidative damage from aerobic metabolism is free radicals theory.');
Q('m5-theories','a','Small mammals with a very fast resting metabolism tend to die young. Which theory of aging does this support?',
 ['Rate of living','Endocrine','Cross-linking','Wear and tear'],
 'Rate of living theory says the greater the rate of oxygen basal metabolism, the shorter the life span.');
Q('m5-theories','c','Which theory of aging belongs to the programmed category?',
 ['Immunological','Wear and tear','Cross-linking','Rate of living'],
 'Immunological theory is programmed, along with longevity and endocrine. The other three are damage or error theories.');
Q('m5-theories','c','Which theory of aging belongs to the damage or error category?',
 ['Cross-linking','Longevity','Endocrine','Immunological'],
 'Cross-linking is a damage or error theory. Longevity, endocrine, and immunological are programmed.');
Q('m5-theories','c','Longevity theory and wear and tear theory belong to which categories, respectively?',
 ['Programmed; damage or error','Damage or error; programmed','Programmed; programmed','Damage or error; damage or error'],
 'Longevity (genes switching on and off) is programmed; wear and tear (parts wearing out) is damage or error.');
TF('m5-theories','a','A man whose hair grays as his hormone levels fall is showing evidence for a damage or error theory of aging.', false,
 'Graying with falling hormones is evidence for endocrine theory, which is programmed: hormones act as biological clocks.');
TF('m5-theories','t','Cross-linking theory is a damage or error theory of aging.', true,
 'Accumulated cross-linked proteins damage tissue, which makes it a damage or error theory.');
TF('m5-theories','t','Immunological theory is a programmed theory of aging.', true,
 'Immunological theory is listed under the programmed theories, with longevity and endocrine. Cross-linking, free radicals, and the rest are damage or error.');

Q('m5-theories','c','Cross-linking theory and free radicals theory attribute aging to which causes, respectively?',
 ['Proteins bonding to each other; oxidative damage','Oxidative damage; proteins bonding to each other','Oxidative damage; unrepaired DNA damage','Unrepaired DNA damage; proteins bonding to each other'],
 'Cross-linking blames proteins that bond to each other and accumulate; free radicals blames oxidative damage from aerobic metabolism.');
TF('m5-theories','t','Rate of living theory says the faster an organism\'s oxygen basal metabolism, the longer its life span.', false,
 'It is the reverse: the greater the rate of oxygen basal metabolism, the shorter the life span.');

/* ---- m5-aging ---- */
Q('m5-aging','a','A 72-year-old sometimes forgets a neighbor\'s name but recalls it later, and she pays her bills on time. Which description fits?',
 ['Normal aging, from hippocampal atrophy','Abnormal aging, from hippocampal atrophy','Normal aging, from prefrontal decline','Abnormal aging, from prefrontal decline'],
 'Trouble recalling names is normal aging, linked to natural hippocampal atrophy. Abnormal aging shows prefrontal cortex problems.');
Q('m5-aging','a','A 78-year-old misses several bill payments, falls for a phone scam, and gets lost driving home from the store. Which description fits?',
 ['Abnormal aging, from prefrontal decline','Normal aging, from prefrontal decline','Abnormal aging, from hippocampal atrophy','Normal aging, from hippocampal atrophy'],
 'Trouble with everyday tasks, poor judgment, and getting lost are abnormal aging, governed by the prefrontal cortex.');
Q('m5-aging','a','An 80-year-old tells his grandson the same fishing story four times in one visit. This is',
 ['perseveration','bradykinesia','disorientation','communication problems'],
 'Repeating an activity without the appropriate stimulus is perseveration. Bradykinesia is slow, rigid gait.');
Q('m5-aging','a','A 76-year-old now takes smaller steps and walks rigidly. This sign of abnormal aging is',
 ['bradykinesia','perseveration','disorientation','judgment problems'],
 'Slower, abnormal gait with smaller, rigid steps is bradykinesia. Perseveration is repeating an activity.');
Q('m5-aging','a','A 70-year-old scores poorly on an objective cognitive screen. Before concluding this reflects abnormal aging, what should his PCP do?',
 ['Rule out biological causes like hearing loss or depression','Order a second, more detailed cognitive screen right away','Begin treatment for abnormal aging based on the screen'],
 'Biological causes such as hearing loss, infection, sleep apnea, or depression are ruled out as part of the workup. A second screen or treatment based on one score skips that step.');
Q('m5-aging','r','Which is a sign of abnormal rather than normal aging?',
 ['Losing track of what day it is','Walking into a room and forgetting why','Taking longer to multitask','Misplacing items around the house'],
 'Disorientation to day, time, or place is abnormal. The other three are normal aging.');
Q('m5-aging','a','A 75-year-old is slower than her grandson on a reaction-time game but beats him on a vocabulary test. This pattern reflects',
 ['declining fluid but maintained crystallized intelligence','declining crystallized but maintained fluid intelligence','declining fluid and crystallized intelligence'],
 'Reaction time is fluid intelligence, which declines; vocabulary is crystallized intelligence, which draws on experience.', {tb:1});
Q('m5-aging','a','An 80-year-old drops casual acquaintances to spend more time with her closest family. Socioemotional selectivity theory says her social goals have shifted toward',
 ['emotion regulation','information gathering','information gathering and emotion regulation equally'],
 'With age, social goals shift from information gathering to emotion regulation, so networks shrink to close others.', {tb:1});
TF('m5-aging','a','A 70-year-old who walks into a room and forgets why she went in is most likely showing abnormal aging.', false,
 'Forgetting why you entered a room is normal aging, linked to hippocampal atrophy. Abnormal aging shows prefrontal problems.');
TF('m5-aging','t','A 79-year-old with normal hearing who can no longer follow a dinner-table conversation is showing a sign of abnormal aging.', true,
 'Communication problems that aren\'t due to hearing loss are listed among the signs of abnormal aging.');
TF('m5-aging','t','Perseveration, such as telling the same story over and over, is a sign of normal aging.', false,
 'Perseveration is listed among the signs of abnormal aging, not normal aging.');
