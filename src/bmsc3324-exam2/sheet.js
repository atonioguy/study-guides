// Topics, mock blueprint (quota per mock), cheat sheet sections.
const TOPICS = {
 'm3-sp':     {m:3, name:'Sensation, perception, thresholds', quota:2},
 'm3-eye':    {m:3, name:'Vision: light and the eye', quota:3},
 'm3-color':  {m:3, name:'Color vision theories', quota:1},
 'm3-ear':    {m:3, name:'Hearing: structure of the ear', quota:2},
 'm3-aud':    {m:3, name:'Pitch theories and spatial hearing', quota:2},
 'm3-chem':   {m:3, name:'Taste and smell', quota:1},
 'm3-touch':  {m:3, name:'Touch and pain', quota:2},
 'm3-vest':   {m:3, name:'Vestibular system and navigation', quota:2},
 'm4-types':  {m:4, name:'Types of learning', quota:2},
 'm4-princ':  {m:4, name:'Three principles of learning', quota:1},
 'm4-mem':    {m:4, name:'Memory systems and the IPM', quota:2},
 'm4-strat':  {m:4, name:'Strategies to improve memory', quota:1},
 'm4-cc':     {m:4, name:'Classical conditioning', quota:2},
 'm4-oc':     {m:4, name:'Operant conditioning', quota:2},
 'm4-obs':    {m:4, name:'Observational learning and learning domains', quota:2},
 'm4-forget': {m:4, name:'Forgetting and amnesia', quota:2},
 'm4-adapt':  {m:4, name:'Adaptive forgetting and the forgetting curve', quota:1},
};
const B = s => `<b class="bt">${s}</b>`;
const TB = '<span class="tbm">textbook</span>';
const FIG = (k, alt) => `<img src="@o_${k}" alt="${alt}">`;

const SHEET = {
'm3-sp': `
<p>Every perception starts with a ${B('stimulus')}: some type of physical energy we can respond to.</p>
<dl>
<dt>${B('Sensation')}</dt><dd>The direct effect of a stimulus on receptor cells. We all sense stimuli about the same way.</dd>
<dt>${B('Perception')}</dt><dd>Our mental organization and interpretation of that sensory experience. Everyone perceives the same stimulus a little differently.</dd>
<dt>${B('Transducer')}</dt><dd>A mechanism that converts energy from one form to another. Every sense receptor is one.</dd>
</dl>
<h4>Sensory thresholds</h4>
<dl>
<dt>${B('Threshold')}</dt><dd>The minimal intensity a stimulus has to reach before the sensory process starts.</dd>
<dt>${B('Psychophysics')}</dt><dd>Study of how the physical attributes of stimuli relate to the psychological experiences they produce.</dd>
<dt>${B('Absolute threshold')}</dt><dd>The intensity you can detect <b>50 percent</b> of the time. An operational definition, because there is no absolute measure of sensitivity. <span class="mut">Figure: a candle flame seen 30 miles away, but not 31.</span></dd>
<dt>${B('Difference threshold')}</dt><dd>The smallest difference between two stimuli that can be detected. <span class="mut">Figure: two shades of green told apart, and a pair that can't be.</span></dd>
</dl>
${FIG('thresh','Absolute vs difference threshold')}
<p class="mix"><b>Easy to confuse:</b> sensation is the receptor's response; perception is the interpretation. Absolute threshold = can you detect it at all (50% of the time); difference threshold = can you tell two apart.</p>`,

'm3-eye': `
<p>${B('Vision')} is rated our most valued sense. We see things because they reflect light; the human range is about 400 to 750 nm. Some animals also see infrared.</p>
${FIG('spectrum','Visible light spectrum')}
<h4>Three properties of light</h4>
<dl>
<dt>${B('Brightness')}</dt><dd>Intensity: the number of photons seen at one time.</dd>
<dt>${B('Hue')}</dt><dd>The color we perceive, set by wavelength (nm).</dd>
<dt>${B('Saturation')}</dt><dd>How colorful light looks: the amount of white mixed in. Whiter = less saturated.</dd>
</dl>
<h4>Structures of the eye</h4>
<p>Light is focused on the retina, and the image lands inverted.</p>
<dl>
<dt>${B('Retina')}</dt><dd>Thin tissue at the back of the eye that records images. Its photoreceptors:
<ul><li>${B('Rods')}: about 120 million; let us see in dim light.</li>
<li>${B('Cones')}: about 6 million; color perception.</li></ul></dd>
<dt>${B('Fovea')}</dt><dd>The spot on the retina with the densest cones.</dd>
<dt>${B('Optic nerve')}</dt><dd>Carries visual messages to the brain.</dd>
<dt>${B('Blind spot')}</dt><dd>Where the optic nerve leaves the eye: a small patch of retina with no photoreceptors.</dd>
<dt>${B('Pupil')}</dt><dd>The opening in the iris; changes size with light.</dd>
<dt>${B('Iris')}</dt><dd>The colored structure; reflexively opens and closes the pupil.</dd>
<dt>${B('Lens')}</dt><dd>Behind the iris; changes shape to focus the image.</dd>
<dt>${B('Ciliary muscles')}</dt><dd>Small muscles attached to the lens that control its shape and focus.</dd>
<dt>${B('Aqueous humor')}</dt><dd>Watery fluid between the cornea (clear outer shell) and the lens.</dd>
<dt>${B('Vitreous humor')}</dt><dd>Thick fluid behind the lens that keeps the eye round.</dd>
</dl>
${FIG('eye','Eye anatomy')}
<p class="mix"><b>Easy to confuse:</b> fovea = most cones; blind spot = no photoreceptors. Rods = dim light; cones = color. Iris moves the pupil; ciliary muscles shape the lens. Aqueous humor is in front of the lens, vitreous behind it.</p>`,

'm3-color': `
<dl>
<dt>${B('Trichromatic theory')}</dt><dd>Red, green, and blue can combine to create every other color.</dd>
<dt>${B('Opponent-process theory')}</dt><dd>Three pairs, black/white, red/green, blue/yellow, with the two members of each pair working against each other. Colors are coded as the difference within each pair. This is why we never see a bluish yellow or a greenish red.</dd>
</dl>
${FIG('opponent','Opponent-process channels')}
<p class="mix"><b>Easy to confuse:</b> trichromatic = three colors that mix; opponent-process = three pairs that cancel. "No greenish red" points to opponent-process.</p>`,

'm3-ear': `
<p>Most sounds are rhythmic pressure changes in the air. The ear has three regions:</p>
<dl>
<dt>${B('Outer ear')}</dt><dd>${B('Pinna')} (the ear lobe; the textbook and the figure treat it as the whole visible outer ear, with the lobule labeled separately) and the ${B('auditory canal')} (the shaft into the middle ear).</dd>
<dt>${B('Middle ear')}</dt><dd>${B('Tympanic membrane')} (the eardrum, which vibrates) and the ${B('ossicles')}, which pass the vibration through the ${B('hammer, anvil, and stirrup')} to the inner ear.</dd>
<dt>${B('Inner ear')}</dt><dd>Vibrations enter through the ${B('oval window')} into the fluid-filled ${B('cochlea')}, where sound waves become neural impulses.</dd>
</dl>
${FIG('ear','Ear anatomy')}
<p class="steps">Pinna → auditory canal → tympanic membrane → hammer, anvil, stirrup → oval window → cochlea</p>
<p class="mix"><b>Easy to confuse:</b> tympanic membrane (eardrum, middle ear) vs oval window (doorway into the inner ear). The cochlea is where sound becomes a neural signal, not the eardrum.</p>`,

'm3-aud': `
<h4>Two theories of pitch</h4>
<dl>
<dt>${B('Place theory')}</dt><dd>Different sound frequencies move different regions of the ${B('basilar membrane')} (between the tympanic canal and the cochlear duct).</dd>
<dt>${B('Frequency theory')}</dt><dd>Pitch depends on how often hair cells trigger firing in the auditory nerve.</dd>
</dl>
<h4>Locating sound</h4>
<dl>
<dt>${B('Spatial hearing')}</dt><dd>Locating a sound in space: in front or behind, above or below. Two cues:</dd>
<dt>${B('Interaural time differences (ITD)')}</dt><dd>A sound on the left reaches the left ear slightly before the right ear.</dd>
<dt>${B('Interaural level differences (ILD)')}</dt><dd>The second cue. The notes describe it as telling apart the sound's frequency; the textbook describes it as the sound being louder at the nearer ear. <span class="mut">Know the name and that it pairs with ITD.</span></dd>
</dl>
<p class="mix"><b>Easy to confuse:</b> place theory = <i>where</i> on the basilar membrane; frequency theory = <i>how often</i> the nerve fires. ITD = arrival time.</p>`,

'm3-chem': `
<p>Taste and smell are the <b>chemical senses</b>: both respond to chemicals in the environment. Together they help an omnivore pick healthy food and avoid poisons.</p>
<dl>
<dt>${B('Taste buds')}</dt><dd>Taste receptors on the tongue. They distinguish four tastes: <b>sweet, salty, sour, bitter</b>. Pleasure and displeasure for these are hard-wired in the brain.</dd>
<dt>${B('Papillae')}</dt><dd>The bumps on the tongue that hold the taste receptors.</dd>
</dl>
${FIG('tongue','Four tastes')}
<dl>
<dt>${B('Olfactory mucosa')}</dt><dd>The membrane lining the nasal cavity that holds the smell receptor cells. Smell isn't life or death, but taste depends on it: plug your nose and chocolate is hard to tell from other sweets.</dd>
</dl>
${FIG('nose','Nasal cavity: olfactory region')}
<p class="mix"><b>Easy to confuse:</b> papillae are the bumps; taste buds are the receptors on them. The figure labels the top of the nasal cavity the olfactory region.</p>`,

'm3-touch': `
<p>Touch and pain belong to the ${B('somatosensory system')}, which tells the brain about the physiological state of the body.</p>
<dl>
<dt>${B('Interoception')}</dt><dd>Sensing the state of your own body.</dd>
<dt>${B('Exteroception')}</dt><dd>Sensing the properties of the immediate external world (Craig, 2002).</dd>
</dl>
<h4>Four modalities</h4>
<ol>
<li>${B('Cutaneous senses')}: senses of the skin</li>
<li>${B('Proprioception')}: body position</li>
<li>${B('Kinesthesis')}: body movement</li>
<li>${B('Nociception')}: pain, discomfort</li>
</ol>
<p>Specific receptors convert skin stimulation into electrical nerve impulses: ${B('transduction')}.</p>
${FIG('somato','Somatosensory cortex map')}
<h4>Affective touch: Harlow (1958)</h4>
<p>Infant rhesus monkeys got two surrogate mothers: wire mesh with milk, and soft cloth with no milk. They clung to the cloth mother under stress and went to the wire one only to eat. Comfort and a "secure base" mattered more than food. Infants who never had the cloth mother developed digestive problems (internal anxiety and stress).</p>
${FIG('harlow','Harlow surrogate study')}
${FIG('harlow2','Wire and cloth surrogates')}
<h4>Modulation of pain</h4>
<p>${B('Pain')}: an unpleasant sensory and emotional experience tied to actual or potential tissue damage. Needed for survival, but the brain can "stop" it. Aron Ralston (2003, Blue John Canyon, Utah) cut off his own trapped forearm and still walked and thought clearly. Pain is subjective and shaped by <b>motivation, attention, emotion, and context</b>.</p>
<p class="mix"><b>Easy to confuse:</b> interoception (inside the body) vs exteroception (outside world). Proprioception = position; kinesthesis = movement; nociception = pain. Transduction is the process; a transducer is the thing doing it.</p>`,

'm3-vest': `
<p>The vestibular system detects head motion and position relative to gravity to keep balance. It controls visual gaze, posture, ${B('orthostasis')} (equilibrium during position changes), spatial orientation, and navigation.</p>
<dl>
<dt>${B('Vestibular sense')}</dt><dd>Balance, relative to gravity and acceleration.</dd>
<dt>${B('Kinesthetic sense')}</dt><dd>Listed here as the position of body parts and what muscles and joints are doing. <span class="mut">This conflicts with the touch section (kinesthesis = movement, proprioception = position). Go with the touch-section definitions.</span></dd>
</dl>
<h4>Vestibular receptors</h4>
<p>In the inner ear next to the cochlea. They sense head turns, straight-line motion, and tilt, and turn that into neural signals. Five in each ear:</p>
<dl>
<dt>${B('Semicircular canals')}</dt><dd>Three (horizontal, anterior, posterior). Respond to head motion and keep head position relative to gravity in all directions. <span class="mut">Textbook: the canals sense head rotation; together with the utricle and saccule they handle position relative to gravity.</span></dd>
<dt>Utricle and saccule ${TB}</dt><dd>The other two receptors: otolith organs that sense linear acceleration.</dd>
<dt>${B('Hair cells')}</dt><dd>The canals' receptor cells, in the middle of the tubes.</dd>
<dt>${B('Vestibular efferents')}</dt><dd>Fibers running from the brain out to the receptors; thought to control receptor sensitivity. Main neurotransmitter: acetylcholine.</dd>
</dl>
${FIG('vestib','Vestibular receptors')}
<h4>Navigation: the brain's GPS</h4>
<dl>
<dt>${B('Place cells')}</dt><dd>Hippocampus: encode specific locations.</dd>
<dt>${B('Grid cells')}</dt><dd>Entorhinal cortex: encode spatial maps in a tessellated pattern.</dd>
<dt>${B('Head direction cells')}</dt><dd>Anterior-dorsal thalamus: encode heading direction, regardless of location.</dd>
</dl>
<p>A cognitive map is built by exploring, then used to navigate (driving to school, a dark house). <b>Motion sickness</b> comes from a mismatch between vestibular, visual, and proprioceptive cues (Yates, Miller, &amp; Lucot, 1998).</p>
<p class="mix"><b>Easy to confuse:</b> place cells = where (hippocampus); grid cells = map pattern (entorhinal); head direction cells = which way you face (thalamus). Semicircular canals are balance, the cochlea is hearing, even though they sit side by side.</p>`,

'm4-types': `
<dl>
<dt>${B('Procedural learning')}</dt><dd>Experience changes how we perceive and do things, building procedural knowledge and skills. <span class="mut">Learning to cook, ride a bike, type.</span></dd>
<dt>${B('Implicit learning')}</dt><dd>Picking up information without intending to, in a way that is hard to put into words. It produces ${B('implicit memories')}: long-term memories that don't need conscious thought to encode. <span class="mut">Writing forward with one hand and backward with the other.</span></dd>
</dl>
<h4>Learning by repeated exposure</h4>
<dl>
<dt>${B('Non-associative learning')}</dt><dd>A single stimulus, repeated, changes behavior.
<ul><li>${B('Habituation')}: the response <b>decreases</b> with exposure. <span class="mut">You stop noticing the smell of a friend's apartment.</span></li>
<li>${B('Sensitization')}: the response returns or <b>increases</b>. <span class="mut">A shrill laugh gets more grating.</span></li></ul></dd>
</dl>
<p class="mix"><b>Easy to confuse:</b> habituation (response fades) vs extinction (a conditioned response fades when the CS appears without the UCS). Non-associative = one stimulus, no pairing.</p>`,

'm4-princ': `
<ol>
<li>${B('Metacognition')}: monitoring, controlling, and evaluating your own learning and memory; knowing what you know and what you don't. It develops over time.</li>
<li>${B('Transfer-appropriate processing')}: memory is best when the test uses the same mental processes as the original learning. <span class="mut">Why students sit in the same seat on exam day.</span></li>
<li>${B('Forgetting')}: failure to recall what was learned. Not the enemy of learning. Can come from encoding error, storage error, decay, or retrieval failure.</li>
</ol>
<p class="mix"><b>Easy to confuse:</b> metacognition is knowing <i>about</i> your knowledge; transfer-appropriate processing is about matching test conditions to study conditions.</p>`,

'm4-mem': `
<p>${B('Memory')}: encoding, storing, and retrieving information. One word for several abilities:</p>
<dl>
<dt>${B('Working memory')}</dt><dd>Short-term: holding information briefly while you work with it.</dd>
<dt>${B('Episodic memory')}</dt><dd>Remembering the salient events of your own life.</dd>
<dt>${B('Semantic memory')}</dt><dd>General knowledge of facts: words, concepts, numbers.</dd>
</dl>
<p>The ${B('Information Processing Model (IPM)')} explains how raw input enters memory, is perceived, and is recalled when needed.</p>
${FIG('ipm','Information processing model')}
<table><tr><th>Store</th><th>Capacity</th><th>Duration</th></tr>
<tr><td>Sensory memory</td><td>3–7 units</td><td>0.5 to 3 seconds</td></tr>
<tr><td>Working memory</td><td>7–9 chunks</td><td>5 to 15 seconds without rehearsal</td></tr>
<tr><td>Long-term memory</td><td>Infinite</td><td>Permanent</td></tr></table>
<p class="steps">Stimuli → sensory memory → (attention) → working memory ⇄ (encode / retrieve) ⇄ long-term memory. Maintenance and elaborative rehearsal loop back into working memory.</p>
<h4>Three processes of remembering an episode</h4>
<ol>
<li>${B('Encoding')}: perceiving it and relating it to past knowledge.</li>
<li>${B('Storing')}: maintaining it over time.</li>
<li>${B('Retrieving')}: accessing it when needed.</li>
</ol>
<p>A failure at any stage leads to forgetting or to false memories.</p>
<p class="mix"><b>Easy to confuse:</b> episodic = your own life events; semantic = general facts. Encoding links new info to old knowledge; storing keeps it; retrieving pulls it back.</p>`,

'm4-strat': `
<p>The key is better encoding plus techniques that make retrieval reliable.</p>
<dl>
<dt>${B('Rehearsal')}</dt><dd>Rereading, repeating, reading aloud.</dd>
<dt>${B('Elaboration')}</dt><dd>Relating new information to what you already know.</dd>
<dt>${B('Visualization')}</dt><dd>Forming mental images; mind mapping.</dd>
<dt>${B('Associations')}</dt><dd>Linking the pieces of information that need remembering to each other.</dd>
<dt>${B('Mnemonics')}</dt><dd>Acronyms or silly sentences for complex steps.</dd>
<dt>${B('Teaching')}</dt><dd>Explaining it, to yourself or others, in your own words.</dd>
<dt>${B('Testing yourself')}</dt><dd>Writing and answering questions to check what you know.</dd>
</dl>
${FIG('ways','Ways to improve memory')}
<p class="mix"><b>Easy to confuse:</b> elaboration links new info to <i>old knowledge</i>; associations link new pieces <i>to each other</i>. Rehearsal is repetition; teaching is putting it in your own words.</p>`,

'm4-cc': `
<p>${B('Learning')}: a relatively permanent change in behavior that results from experience.</p>
<dl>
<dt>${B('Classical conditioning')}</dt><dd>A neutral stimulus is paired with a stimulus (UCS) that already produces a response (UCR). After conditioning, the once-neutral stimulus (now the CS) produces a response by itself: the conditioned response (CR). Works best on automatic processes like salivation; a passive form of learning.</dd>
</dl>
${FIG('pavlov','Classical conditioning with food and whistle')}
<table><tr><th>Stage</th><th>Stimulus</th><th>Response</th></tr>
<tr><td>Before</td><td>Food = UCS</td><td>Salivation = UCR</td></tr>
<tr><td>Before</td><td>Whistle = neutral stimulus</td><td>No salivation</td></tr>
<tr><td>During</td><td>Whistle + food</td><td>Salivation (UCR)</td></tr>
<tr><td>After</td><td>Whistle = CS</td><td>Salivation = CR</td></tr></table>
<dl>
<dt>${B('Acquisition')}</dt><dd>The stage when the organism learns to associate the CS with the UCS.</dd>
<dt>${B('Trial')}</dt><dd>Each pairing of the two stimuli.</dd>
<dt>${B('Reinforce')}</dt><dd>What the trials do to the CS–UCS association: strengthen it.</dd>
<dt>${B('Extinction')}</dt><dd>The CR is eliminated by presenting the CS again and again without the UCS. The response isn't totally lost: relearning is faster.</dd>
<dt>${B('Spontaneous recovery')}</dt><dd>The CR reappears after extinction.</dd>
</dl>
<p class="mix"><b>Easy to confuse:</b> the whistle is a <i>neutral</i> stimulus before conditioning and the <i>CS</i> after. Salivation to food is the UCR; salivation to the whistle is the CR. Extinction (CR fades) vs spontaneous recovery (CR comes back).</p>`,

'm4-oc': `
<dl>
<dt>${B('Operant conditioning')}</dt><dd>Changes the rate of a response based on its consequences. The organism has to "operate" on its environment; the learner is active.</dd>
<dt>${B('Law of Effect')}</dt><dd>Behavior is strengthened by a positive consequence and weakened by a negative one.</dd>
</dl>
${FIG('reinf','Reinforcement and punishment grid')}
<table><tr><th></th><th>Behavior increases</th><th>Behavior decreases</th></tr>
<tr><td>Stimulus added</td><td>${B('Positive reinforcement')}<br><span class="mut">Cookie for good behavior</span></td><td>${B('Positive punishment')}<br><span class="mut">Grounding a teen for missing curfew</span></td></tr>
<tr><td>Stimulus removed</td><td>${B('Negative reinforcement')}<br><span class="mut">Manager stops nagging the employee</span></td><td>${B('Negative punishment')}<br><span class="mut">Dog isn't petted when it paws for attention</span></td></tr></table>
<dl>
<dt>${B('Reinforcement')}</dt><dd>A process that increases the rate or probability of the response it follows.</dd>
<dt>${B('Punishment')}</dt><dd>A stimulus that decreases the rate of the response it follows.</dd>
<dt>${B('Shaping')}</dt><dd>Reinforcing responses that get closer and closer to the target behavior, step by step. <span class="mut">Teaching adults with cognitive delay to brush their teeth.</span></dd>
<dt>${B('Primary reinforcer')}</dt><dd>Works without any prior learning. <span class="mut">Food when hungry.</span></dd>
<dt>${B('Secondary reinforcer')}</dt><dd>Works because of a learned association; a conditioned reinforcer. <span class="mut">Money for working.</span></dd>
</dl>
<p>Extinction and spontaneous recovery work as in classical conditioning: withhold the reinforcer and the response dies out; bring it back and the response returns.</p>
<h4>Making punishment work</h4>
<ul><li>Deliver it immediately; a delay slows learning.</li><li>Be consistent.</li><li>It may suppress all behavior, not just the target.</li><li>Introduce alternatives to the punished response.</li><li>Make it fit the crime.</li></ul>
<h4>Limits of punishment</h4>
<ul><li>Suppression is temporary.</li><li>It can teach aggressive behavior.</li><li>It can create anxiety in the learner.</li></ul>
${FIG('dog','Anxious dog body language')}
<h4>Classical vs operant</h4>
<p><b>Similar:</b> both produce a desired response, both need an acquisition stage (learning trials), and both can go extinct and recover spontaneously.</p>
${FIG('cvo','Classical vs operant table')}
<table><tr><th></th><th>Classical</th><th>Operant</th></tr>
<tr><td>Nature of response</td><td>Involuntary (reflexive)</td><td>Voluntary</td></tr>
<tr><td>Timing of stimulus</td><td>Precedes the response</td><td>After the response</td></tr>
<tr><td>Timing of response</td><td>After the stimulus</td><td>Before the stimulus</td></tr>
<tr><td>Role of learner</td><td>Passive</td><td>Active</td></tr></table>
<p class="mix"><b>Easy to confuse:</b> positive/negative = added/removed, not good/bad. Negative reinforcement still <i>increases</i> behavior; it is not punishment. Exception: in the Law of Effect, positive/negative consequence means good/bad. Reinforce (strengthening a CS–UCS pairing) vs reinforcement (consequence that increases a behavior).</p>`,

'm4-obs': `
<p>Most of our knowledge, skills, and attitudes (KSAs) come through ${B('observational learning')}: learning by watching others. <span class="mut">Learning to play kickball.</span></p>
<dl>
<dt>${B('Social Learning Theory')}</dt><dd>Bandura (1977): people learn new behaviors by observing salient others.</dd>
<dt>${B('Social models')}</dt><dd>Those salient others: higher status or authority than the learner. <span class="mut">Parent, older sibling, superhero, mentor.</span></dd>
</dl>
<p class="steps">Four parts: <b>attention</b> → <b>retention</b> → <b>initiation (production)</b> → <b>motivation</b></p>
${FIG('obs','Observational learning model')}
<p>Unlike conditioning, observational learning covers most human learning: language, procedures like tying a necktie, coursework, OSCEs in medical school ("see one, do one"), and changing habits, attitudes, or beliefs.</p>
<h4>Three learning domains (Kerr, 2020)</h4>
<dl>
<dt>${B('Cognitive domain')}</dt><dd>Declarative knowledge: facts, concepts, theories. <b>Easiest</b> to teach and learn, because people are motivated to be correct.</dd>
<dt>${B('Psychomotor domain')}</dt><dd>Physical skills: fine and gross motor movements, procedures, protocols.</dd>
<dt>${B('Affective domain')}</dt><dd>Attitudes, values, beliefs, intentions, motivations, emotions. <b>Hardest</b>: tied to personal experience, formed early, shaped by parenting.</dd>
</dl>
${FIG('domains','Three learning domains')}
<p class="mix"><b>Easy to confuse:</b> observational learning is the process; Social Learning Theory is Bandura's theory built on it. Procedures and protocols are psychomotor, not cognitive.</p>`,

'm4-forget': `
<p>Forgetting can be normal (affected by age), pathological, or adaptive. With normal aging, memory tasks take longer. ${B('Declarative memories')} tend to decay with age; ${B('procedural memory')} does not.</p>
<h4>Five causes of normal forgetting</h4>
<dl>
<dt>${B('Decay of memory trace')}</dt><dd>Memories fade over time. Usually short-term memory is lost; long-term memory is more permanent.</dd>
<dt>${B('Interfering material')}</dt><dd>What you do before or after learning affects memory.
<ul><li>${B('Retroactive')}: backward. A <b>later</b> event interferes with an earlier one.</li>
<li>${B('Proactive')}: forward. An <b>earlier</b> event interferes with learning a later one.</li></ul></dd>
<dt>${B('Retrieval failure')}</dt><dd>The memory is there but out of reach; you need a retrieval cue. <span class="mut">Tip-of-the-tongue.</span></dd>
<dt>${B('Motivated forgetting')}</dt><dd>Forgetting long-term memories because we don't want them; deliberate suppression.</dd>
<dt>${B('Organic factors')}</dt><dd>Biological pathology, illness, or accidents causing organic amnesia. Three types:
<ul><li>${B('Disease/trauma')}: brain-cell deterioration, poor blood flow, stroke, Alzheimer's.</li>
<li>${B('Retrograde')}: loss of memory from <b>before</b> the event. <span class="mut">Can't remember your name or address.</span></li>
<li>${B('Anterograde')}: old memories are intact but new information <b>after</b> the damage can't be processed. <span class="mut">Surgically removed hippocampus.</span></li></ul></dd>
</dl>
${FIG('impede','Five impediments to remembering')}
<p class="mix"><b>Easy to confuse:</b> there are three lists. Principle 3: encoding error, storage error, decay, retrieval failure. Normal forgetting: decay, interference, retrieval failure, motivated, organic. The Box 1 figure: encoding failures, decay, inadequate retrieval cues, interference, trying not to remember. Retroactive = new blocks old; proactive = old blocks new. Retrograde = lose the past; anterograde = can't form new.</p>`,

'm4-adapt': `
<p>Forgetting makes the mind more efficient; the price is the occasional memory failure.</p>
<p><b>Shereshevsky ("S")</b>, a mnemonist studied by Alexander Luria: never forgot anything. A constant flood of details and associations made everyday life debilitating.</p>
<h4>Why forgetting is adaptive</h4>
<ul><li>Remembering everything is overwhelming and distracting (evolutionary advantage).</li><li>Remembering everything is inefficient and wasteful.</li><li>The brain needs room for new information.</li><li>Forgetting fits the information processing model.</li></ul>
<h4>Ebbinghaus (1880s)</h4>
<p>Forgetting happens at an exponential rate from the moment of learning. About <b>70%</b> of new information is gone within 24 hours, about <b>90%</b> within a week.</p>
${FIG('ebb','Forgetting curve')}
<h4>Slowing forgetting</h4>
<ul><li>Use the memory strategies (keep information in working memory longer).</li><li>Space learning across smaller units of time.</li><li>Break up study to get more primacy and recency effects.</li></ul>
<p class="mix"><b>Easy to confuse:</b> the steepest loss is right after learning, not at the end of the week.</p>`,
};
