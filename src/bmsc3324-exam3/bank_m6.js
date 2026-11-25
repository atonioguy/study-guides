/* ============ MODULE 6 ============ */

/* ---- m6-neuro ---- */
Q('m6-neuro','r','How are specific emotions organized in the brain?',
 ['As networks of activation across many regions','As networks confined to one deep brain structure','As distributed cortical networks that generate them'],
 'Emotions involve networks of activation; circuits span nearly the whole brain. No single structure holds an emotion, and basic emotions come from circuits below the cortex.');
TF('m6-neuro','a','Finding the amygdala, prefrontal cortex, and brainstem all active during fear supports the idea of networks of activation.', true,
 'Many regions activating during one emotion is exactly what networks of activation predict.');
TF('m6-neuro','t','Basic emotions are generated mainly by circuits in the cerebral cortex.', false,
 'Basic emotions come mainly from circuits deep in the brain, below the cerebral cortex.');
TF('m6-neuro','t','Human affective neuroscience relies mainly on invasive techniques.', false,
 'Invasive methods are used in animal research. Humans are studied with noninvasive EEG and fMRI and with lesion cases.');

/* ---- m6-systems ---- */
Q('m6-systems','a','A drug blocks dopamine signaling. Which emotional system would be most directly blunted?',
 ['Desire','Liking','Fear','Love'],
 'The desire (reward-seeking) system is activated by dopamine. Liking is sensitive to opioids instead.');
Q('m6-systems','a','A drug that blocks opioid receptors makes sweet foods less pleasant to eat, though people crave them as much as before. Which emotional system is affected?',
 ['Liking','Desire','Rage','Grief'],
 'Liking (reward enjoyment) is sensitive to opioids. Wanting, the desire system, runs on dopamine.');
Q('m6-systems','r','The fear system runs from',
 ['the amygdala to the periaqueductal gray','the periaqueductal gray to the dorsomedial thalamus','the preoptic areas to the stria terminalis nucleus'],
 'Fear runs from the amygdala to the PAG. PAG to the dorsomedial thalamus is grief; preoptic to stria terminalis is love.');
Q('m6-systems','r','The grief system runs from',
 ['the periaqueductal gray to the dorsomedial thalamus','the amygdala to the periaqueductal gray','the preoptic areas to the stria terminalis nucleus'],
 'Grief runs from the PAG to the dorsomedial thalamus, ventral septum, and dorsal preoptic region. Amygdala to PAG is fear.');
Q('m6-systems','r','The love (care and attachment) system runs from',
 ['the preoptic areas to the stria terminalis nucleus','the periaqueductal gray to the dorsomedial thalamus','the amygdala to the periaqueductal gray'],
 'Love runs from the preoptic areas to the stria terminalis nucleus. PAG to dorsomedial thalamus is grief.');
TF('m6-systems','t','The rage system is activated by oxytocin, not Substance P.', false,
 'Rage is activated by Substance P, testosterone, and arginine-vasopressin. Oxytocin activates the love system.');
Q('m6-systems','r','Which chemicals are tied to the fear system?',
 ['Glutamate and cholecystokinin','Substance P and testosterone','Oxytocin and arginine-vasopressin','Dopamine and endogenous opioids'],
 'Fear is sensitive to glutamate and cholecystokinin. Substance P and testosterone go with rage; oxytocin and vasopressin with love.');
Q('m6-systems','r','Substance P, testosterone, and arginine-vasopressin activate which emotional system?',
 ['Rage','Love','Fear','Grief'],
 'These three activate rage. Love shares arginine-vasopressin but is defined by oxytocin and opioids.');
Q('m6-systems','r','Oxytocin, arginine-vasopressin, and endogenous opioids activate which emotional system?',
 ['Love','Rage','Liking','Grief'],
 'This trio activates love (care and attachment). Rage shares vasopressin but uses Substance P and testosterone.');
Q('m6-systems','a','A new mother holding her infant feels a rush of warmth and a strong urge to protect him. Which emotional system is most active?',
 ['Love','Desire','Liking','Grief'],
 'Nurturing and protective behavior, with warm feelings and affection, comes from the love (care and attachment) system.');
Q('m6-systems','a','A driver stuck behind a stalled car for twenty minutes starts honking and shouting. Which emotional system is driving this?',
 ['Rage','Fear','Grief','Desire'],
 'Goal frustration triggers rage, which motivates approach and attack.');
Q('m6-systems','a','A toddler left at daycare for the first time screams and sobs in panic when his parent walks out. Which emotional system is most active?',
 ['Grief','Fear','Rage','Love'],
 'Separation distress and panic come from the grief (loneliness and panic) system.');
Q('m6-systems','a','A hiker spots a rattlesnake on the trail, freezes, then backs away. Which emotional system is most active?',
 ['Fear','Rage','Grief','Liking'],
 'Freezing and fleeing to avoid harm is the fear system.');
Q('m6-systems','c','Opioids have which effects on the liking and rage systems, respectively?',
 ['Liking is sensitive to them; rage is inhibited by them','Rage is sensitive to them; liking is inhibited by them','Both liking and rage are sensitive to them','Both liking and rage are inhibited by them'],
 'The liking system is sensitive to opioids, while rage is inhibited by them.');
Q('m6-systems','c','Which statement correctly contrasts the desire and liking systems?',
 ['Desire runs on dopamine; liking runs on opioids','Liking runs on dopamine; desire runs on opioids','Desire runs on opioids; liking runs on oxytocin','Liking runs on oxytocin; desire runs on dopamine'],
 'Desire (reward seeking) is activated by dopamine; liking (reward enjoyment) is sensitive to opioids. Oxytocin belongs to the love system.');
Q('m6-systems','r','Which structure appears in the fear, rage, and grief circuits?',
 ['Periaqueductal gray','Nucleus accumbens','Stria terminalis nucleus','Orbitofrontal cortex'],
 'The midbrain PAG is part of all three. The nucleus accumbens belongs to desire and liking; the stria terminalis nucleus to love.');
Q('m6-systems','a','A patient\'s reward-seeking (desire) circuit stops activating after a brain injury. Which outcome would you most expect?',
 ['Depression','Panic attacks','Separation distress','Freezing'],
 'No desire-system activation leads to depression. Panic attacks and separation distress belong to grief; freezing to fear.');
Q('m6-systems','c','Which statement correctly contrasts rage and aggression?',
 ['Aggression is a consciously chosen intent to harm; rage is an emotion','Rage is a consciously chosen intent to harm; aggression is an emotion','Aggression and rage are the same response at different intensities'],
 'Aggression is a consciously selected behavior meant to harm; rage is an emotional response. They are not the same.');
TF('m6-systems','t','Arginine-vasopressin is involved in both the rage and love systems.', true,
 'Vasopressin appears in both: with Substance P and testosterone in rage, and with oxytocin and opioids in love.');
TF('m6-systems','t','The fear system is activated by Substance P.', false,
 'Substance P activates rage. Fear is sensitive to glutamate and cholecystokinin.');
TF('m6-systems','a','Giving opioids to an animal in a rage state would be expected to intensify its attack.', false,
 'Rage is inhibited by opioids, so they would dampen the attack. Opioids are linked to liking and love instead.');
TF('m6-systems','a','A drug that blocks opioids would be expected to reduce how much someone enjoys a favorite food.', true,
 'Liking (reward enjoyment) is sensitive to opioids; desire (reward seeking) runs on dopamine.');

TF('m6-systems','a','A soccer player who deliberately trips the referee after a bad call is showing rage rather than aggression.', false,
 'A consciously chosen act meant to harm is aggression. Rage is the emotion, which isn\'t the same as choosing to harm.');

/* ---- m6-basic ---- */
Q('m6-basic','a','A commuter finds the bridge on her only route home closed for repairs. Which basic emotion is she most likely feeling?',
 ['Anger','Fear','Disgust','Sadness'],
 'Anger is shown when a goal is blocked. Fear responds to threat; sadness to loss.');
Q('m6-basic','a','A man sniffs a carton of milk that has gone sour and recoils. Which basic emotion is this?',
 ['Disgust','Fear','Surprise','Anger'],
 'Disgust is the response to toxic or spoiled substances.');
Q('m6-basic','a','A book slams to the floor in a silent library, and everyone\'s head snaps up to look. Which basic emotion is this?',
 ['Surprise','Fear','Anger','Disgust'],
 'Surprise is the reaction to an unexpected stimulus, and it activates attention and curiosity.');
Q('m6-basic','a','After her dog dies, a woman calls her closest friends and asks them to come over. Which basic emotion is motivating her?',
 ['Sadness','Fear','Anger','Surprise'],
 'Sadness follows losing something valuable and motivates seeking help and comfort.');
Q('m6-basic','r','Which qualities make Ekman\'s six emotions "basic"?',
 ['Universal, automatic, and not reducible to simpler emotions','Learned early, automatic, and built from simpler emotions','Universal, deliberate, and built from simpler emotions','Learned early, deliberate, and not reducible to simpler emotions'],
 'Basic emotions are expressed universally, produced automatically, and can\'t be broken into simpler emotions.');
Q('m6-basic','c','Which two emotions appear on Plutchik\'s list of primary emotions but not on Ekman\'s?',
 ['Acceptance and anticipation','Embarrassment and ambivalence','Anger and fear','Anticipation and disappointment'],
 'Plutchik adds acceptance and anticipation (interest). Anger and fear are on both lists; embarrassment, ambivalence, and disappointment are complex emotions.');
Q('m6-basic','r','Whether an emotion is positive or negative is called its',
 ['valence','arousal','intensity'],
 'Valence is positivity or negativity. Arousal, the strength of the trigger, sets intensity in Plutchik\'s model.');
Q('m6-basic','r','Which is a complex (secondary) emotion?',
 ['Embarrassment','Anticipation','Acceptance','Surprise'],
 'Embarrassment is complex, built on basic emotions. Anticipation and acceptance are Plutchik primaries, and surprise is basic on both lists.');
Q('m6-basic','f','In Plutchik\'s wheel, annoyance, anger, and rage sit along one petal. What changes from one to the next, and what drives it?',
 ['Intensity, driven by degree of arousal','Valence, driven by degree of arousal','Intensity, driven by cultural display rules','Valence, driven by cultural display rules'],
 'Plutchik\'s emotions vary in intensity with arousal (the strength of the trigger). Valence is whether an emotion is positive or negative, not how strong it is.', {fig:'o_wheel'});
Q('m6-basic','a','A jack-in-the-box pops open, and a toddler\'s eyes widen as she leans in to study it. Which basic emotion is she showing?',
 ['Surprise','Fear','Happiness','Disgust'],
 'Surprise, the reaction to the unexpected, activates attention and curiosity, which is why she leans in.');
TF('m6-basic','t','Ekman proposed six basic emotions, and Plutchik proposed eight primary emotions.', true,
 'Ekman proposed six basic emotions; Plutchik proposed eight primary emotions, adding acceptance and anticipation.');
TF('m6-basic','t','Basic emotions are the foundation of complex emotions such as embarrassment, not the other way around.', true,
 'Complex (secondary) emotions are built on basic emotions.');
TF('m6-basic','t','Positive emotions, unlike negative emotions, are each described as a "call to action."', false,
 'Negative emotions are the ones described as a "call to action," tied to survival and deserving respect.');
TF('m6-basic','t','Complex emotions such as embarrassment have a valence.', true,
 'All emotions are either positive or negative; that positivity or negativity is valence.');

TF('m6-basic','t','Acceptance and anticipation are on Ekman\'s list of basic emotions.', false,
 'Those two are on Plutchik\'s list of eight primary emotions but not on Ekman\'s six.');
Q('m6-basic','a','After finishing her last final, a student sits in the sun with nothing left to worry about and feels content. Which basic emotion is she most likely feeling?',
 ['Happiness','Surprise','Sadness','Anger'],
 'Happiness is the pleasant state that signals all is well. Surprise is a reaction to the unexpected, sadness follows a loss, and anger follows a blocked goal.');

/* ---- m6-surv ---- */
Q('m6-surv','f','In the survival-issues figure, the third row reads threat → "danger" → [C] → escape → safety. Which emotion is hidden at C?',
 ['Fear','Anger','Surprise','Disgust'],
 'A threat appraised as danger produces fear, which leads to escape and safety.', {fig:'f_survival'});
Q('m6-surv','f','In the survival-issues figure, the obstacle row reads obstacle → "enemy" → [G] → attack → destroy obstacle. Which emotion is hidden at G?',
 ['Anger','Fear','Disgust','Sadness'],
 'An obstacle appraised as an enemy produces anger, which leads to attack and destroying the obstacle.', {fig:'f_survival'});
Q('m6-surv','f','In the survival-issues figure, the loss row reads loss of valued object → "abandonment" → [E] → cry → reattach to lost object. Which emotion is hidden at E?',
 ['Sadness','Fear','Surprise','Anger'],
 'Loss appraised as abandonment produces sadness, which leads to crying and reattaching.', {fig:'f_survival'});
Q('m6-surv','a','A jogger backs slowly away from a growling dog. Which of Plutchik\'s survival behaviors is this?',
 ['Protection','Destruction','Rejection','Orientation'],
 'Withdrawal and retreat is protection, activated by fear. Destruction is activated by anger.');
Q('m6-surv','a','A child bites into a moldy strawberry and immediately spits it out. Which of Plutchik\'s survival behaviors is this?',
 ['Rejection','Protection','Reintegration','Orientation'],
 'Riddance of harmful material is rejection, activated by disgust.');
Q('m6-surv','a','Something unfamiliar brushes a swimmer\'s leg, and she stops to look down and figure out what it is. Which of Plutchik\'s survival behaviors is this?',
 ['Orientation','Protection','Rejection','Destruction'],
 'Reacting to contact with an unfamiliar object is orientation, activated by surprise.');
Q('m6-surv','r','In Plutchik\'s model, destruction (eliminating a barrier to meeting needs) is activated by',
 ['anger and rage','fear and terror','sadness and grief','curiosity and play'],
 'Destruction is activated by anger and rage. Fear and terror activate protection.');
Q('m6-surv','r','In Plutchik\'s model, reintegration is activated by',
 ['sadness and grief','anger and rage','fear and terror','surprise'],
 'Reintegration, the reaction to loss, is activated by sadness and grief.');

/* ---- m6-comm ---- */
Q('m6-comm','a','At the edge of a visual cliff, a toddler looks back at his mother. She smiles, and he crawls across. This is an example of',
 ['social referencing','cultural display rules','the intrapersonal function','the socio-cultural function'],
 'Using a caregiver\'s emotional expression to decide how to act is social referencing, shown in the visual cliff experiments.');
Q('m6-comm','a','A girl is taught to smile and say thank you even when she dislikes a birthday gift from her grandmother. She is learning',
 ['cultural display rules','social referencing','the intrapersonal function','the interpersonal function'],
 'Rules learned early about how to modify emotional expression for the situation are cultural display rules.');
Q('m6-comm','a','A hiker jumps back from a snake on the trail before she has consciously registered what it is. Which communicative function of emotion does this show?',
 ['Intrapersonal','Interpersonal','Socio-cultural'],
 'Emotion as a rapid, within-person information system that lets us act with minimal thinking is the intrapersonal function.');
Q('m6-comm','a','A manager\'s angry glare across the meeting room makes her team stop talking and back off. Which communicative function of emotion does this show?',
 ['Interpersonal','Intrapersonal','Socio-cultural'],
 'Expressions between people that signal intent and steer others\' behavior are the interpersonal function.');
Q('m6-comm','a','Infants in nearly every society smile at their caretakers as early as 6 weeks. Which communicative function of emotion does this illustrate?',
 ['Socio-cultural','Intrapersonal','Interpersonal'],
 'Emotional patterns within and across cultures, like near-universal early smiling, fall under the socio-cultural function.');
Q('m6-comm','c','Expressions of anger and distress tend to evoke which reactions in others, respectively?',
 ['Fear; sympathy','Sympathy; fear','Fear; fear','Sympathy; sympathy'],
 'Anger evokes fear in others, while distress evokes sympathy.');
Q('m6-comm','e','Which example shows the socio-cultural function of emotion?',
 ['A child learns that in her community, adults hide anger in public','A hiker leaps back from a snake before thinking about it','A friend at a community event sees your sad face and offers comfort','A toddler checks his mother\'s face before crossing a ledge'],
 'Learning what one\'s group expects us to do with emotions is socio-cultural. Leaping back is intrapersonal; the friend offering comfort and the toddler checking his mother are interpersonal.');
TF('m6-comm','t','Social referencing is the set of rules learned early in life for modifying emotional expressions.', false,
 'Those are cultural display rules. Social referencing is what the visual cliff experiments demonstrate.');
TF('m6-comm','a','A driver who swerves away from a deer before consciously registering it shows the intrapersonal function of emotion.', true,
 'Within the individual, emotions are rapid information-processing systems that let us act with minimal thinking.');
TF('m6-comm','a','A coworker backing away after seeing your angry face shows the intrapersonal, not the interpersonal, function of emotion.', false,
 'An expression steering someone else\'s behavior is the interpersonal function. Intrapersonal works within one person.');
TF('m6-comm','t','Display rules fall under the socio-cultural function of emotion.', true,
 'Display rules are how culture tells us to manage emotional expression, part of the socio-cultural function.');
TF('m6-comm','s','The visual cliff experiments demonstrate social referencing, not cultural display rules.', true,
 'The visual cliff shows social referencing. Cultural display rules are learned rules for modifying emotional expressions.');

/* ---- m6-drive ---- */
Q('m6-drive','a','After hours without food, a hiker grabs the first snack she sees, eats it without offering any to her friends, and complains that dinner is taking forever. This illustrates',
 ['narrowing of attention','homeostasis','a set point','valence'],
 'As a drive intensifies, attention narrows toward reward and our own needs, and we become impatient and less altruistic.');
Q('m6-drive','a','During a run, your body temperature rises, and you sweat until it returns to normal. This process of keeping systems stable is',
 ['homeostasis','narrowing of attention','a set point','a drive state'],
 'Comparing to a set point and restoring to it is homeostasis. The set point is the ideal level itself.');
Q('m6-drive','a','In that same example, the normal body temperature your body returns to is the',
 ['set point','homeostasis','drive state','narrowing of attention'],
 'The set point is the ideal level that homeostasis compares against and restores.');
Q('m6-drive','r','Homeostasis is maintained by which two factors?',
 ['Comparison to a set point and restoration to it','Narrowing of attention and restoration to a set point','Narrowing of attention and a collapsed time perspective'],
 'Homeostasis compares to a set point and restores to it. Narrowing of attention and a collapsing time perspective describe what intensifying drives do to attention.');
Q('m6-drive','r','As a drive state intensifies, narrowing of attention shifts us toward',
 ['rewards, impatience, and selfishness','punishments, patience, and altruism','rewards, patience, and altruism','punishments, impatience, and selfishness'],
 'Attention moves toward rewards and away from punishment, time perspective collapses (impatience), and focus shifts to our own needs.');
Q('m6-drive','e','Which example shows narrowing of attention?',
 ['A starving shopper grabs the last loaf, while the family waiting behind her goes without','A runner sweats after a hard race until her body cools back to its normal temperature','A thirsty hiker drinks from her bottle until the dry-mouth feeling fades and she stops','A shopper who already ate lunch gets hungry smelling fresh bread at the store entrance'],
 'Focusing on your own reward and ignoring others\' needs is narrowing of attention. Sweating and drinking restore a set point (homeostasis); the bread smell is an external cue to a drive.');
Q('m6-drive','e','Which example is a drive state rather than a basic emotion?',
 ['Feeling parched after a long hike in the heat','Recoiling from the smell of rotten meat','Startling when a door slams behind you','Crying after a close friend moves away'],
 'Thirst is a drive state, like hunger and sexual appetite. Recoiling is disgust, startling is surprise, and crying after a loss is sadness.');
TF('m6-drive','t','A hungry student who cannot focus in class is back to normal within minutes of eating lunch, as expected once a drive is met.', true,
 'Unmet drives disrupt thoughts, mood, and behavior, but recovery is quick once the drive is met.');
TF('m6-drive','a','Feeling hungry at the smell of fries right after a full meal shows that drive states respond to external cues.', true,
 'Drive states respond to external cues, like food smells, as well as internal ones like abdominal pain.');
TF('m6-drive','a','Shivering in the cold is an automatic mechanism that helps restore body temperature toward its set point.', true,
 'Some homeostatic mechanisms are automatic; others, like putting on a coat, need deliberate action.');
TF('m6-drive','t','Drive states, like emotions, have valence and facilitate approach or avoidance.', true,
 'Like emotions, drive states are positive or negative and push us toward or away from things.');
TF('m6-drive','t','As a drive state intensifies, our time perspective stretches toward the future.', false,
 'It collapses toward the present, which makes us impatient.');

/* ---- m6-motiv ---- */
Q('m6-motiv','r','What is the correct order of the pathway for learning as permanent behavior change?',
 ['Awareness/education → intent/motivation → behavioral change','Intent/motivation → awareness/education → behavioral change','Awareness/education → behavioral change → intent/motivation','Behavioral change → intent/motivation → awareness/education'],
 'Awareness comes first, then the intent to change, then the behavior change itself.');
Q('m6-motiv','a','Ms. Ortiz\'s PCP hands her printed material on smoking and lung recovery. This step targets',
 ['awareness/education','intent/motivation','behavioral change'],
 'Providing information is the awareness/education step, the first stage of the pathway.');
Q('m6-motiv','a','After reading the material, Ms. Ortiz decides she wants to quit but hasn\'t stopped smoking yet. Which stage is she in?',
 ['Intent/motivation','Awareness/education','Behavioral change'],
 'Wanting to change without having changed yet is intent/motivation, between awareness and behavior change.');
Q('m6-motiv','a','A nurse quits smoking because it conflicts with her values; her coworker quits for a cash bonus. Who is more likely to show lasting change?',
 ['The nurse, because her motivation is internal','The coworker, because his motivation is external','The coworker, because money is a concrete reward'],
 'Internal motivation, such as personal values, leads to more behavior change than external motivation like money.');
Q('m6-motiv','r','The acquisition of knowledge, skills, and abilities through experience, study, or direct instruction is',
 ['learning','motivation','awareness','behavioral change'],
 'That is learning, which results in behavior change. Motivation as a drive state facilitates it.');
TF('m6-motiv','a','An employee who exercises to earn a gym bonus is more likely to keep it up than one who exercises because she values her health.', false,
 'Internal motivation (personal values) leads to more behavior change than external motivation like a bonus.');
TF('m6-motiv','t','In the behavior change pathway, intent/motivation comes before awareness/education.', false,
 'Awareness/education comes first, then intent/motivation, then behavioral change.');
