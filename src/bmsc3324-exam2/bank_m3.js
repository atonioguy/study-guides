/* ============ MODULE 3 ============ */
/* Q(topic, kind, stem, [KEY, wrong, wrong, wrong], explanation, extras)
   kinds: r recall, a example->term, e term->example, f figure, c contrast, s study, t true/false */

/* ---- m3-sp ---- */
Q('m3-sp','r','The direct effect of a stimulus on receptor cells, before any interpretation, is called',
 ['sensation','perception','transduction','psychophysics'],
 'Sensation is the receptors being stimulated. Perception is the interpretation that comes after it.');
Q('m3-sp','r','The mental organization and interpretation of sensory experience is called',
 ['perception','sensation','psychophysics','a threshold'],
 'Perception is how we organize and interpret what we sense, which is why it differs more between people than sensation does.');
Q('m3-sp','a','Two friends hear the same song at the same volume. One finds it soothing, the other finds it grating. The difference between them lies mainly in',
 ['perception','sensation','the stimulus','the absolute threshold'],
 'The stimulus and the receptor response are about the same for both; the interpretation is what differs. That is perception.');
Q('m3-sp','c','Which statement correctly contrasts sensation and perception?',
 ['People sense stimuli similarly but perceive them differently','People sense and perceive stimuli in nearly identical ways','Sensation is interpretation; perception is receptor stimulation','Sensation requires a threshold; perception does not'],
 'Sensation is the receptor response, which is similar across people. Perception is the interpretation, which varies.');
Q('m3-sp','r','Some type of physical energy to which we can respond is called a',
 ['stimulus','transducer','threshold','sensation'],
 'A stimulus is the physical energy every perception starts from. A transducer is what converts it.');
Q('m3-sp','r','Any mechanism that converts energy from one form to another, such as a sense receptor, is a',
 ['transducer','stimulus','threshold','papilla'],
 'Each sense receptor is a transducer: it turns physical energy into a neural signal.');
Q('m3-sp','e','Which example best describes a sense receptor acting as a transducer?',
 ['Light energy becomes a neural signal in the eye','A listener decides that a song sounds sad and slow','Two close shades of green look identical to a viewer','A faint tone is detected on half of all trials'],
 'A transducer converts one form of energy to another. Deciding a song sounds sad is perception.');
Q('m3-sp','r','The study of the relationship between the physical attributes of stimuli and the psychological experiences they produce is',
 ['psychophysics','perception','transduction','sensation'],
 'Psychophysics links physical stimulus properties to experience; it is the field that measures thresholds.');
Q('m3-sp','r','The minimal intensity a stimulus must reach to activate the sensory process is its',
 ['threshold','saturation','brightness','hue'],
 'Below the threshold the sensory process is not activated. The other options are properties of light.');
Q('m3-sp','r','The absolute threshold is operationally defined as the stimulus intensity a person can detect',
 ['50 percent of the time','100 percent of the time','75 percent of the time','25 percent of the time'],
 'Because there is no absolute measure of sensitivity, the absolute threshold is set at detection 50 percent of the time.');
Q('m3-sp','a','In a hearing test, a tone is made softer until the listener reports hearing it on only half of the trials. The tester has found the listener\'s',
 ['absolute threshold','difference threshold','frequency threshold','perceptual threshold'],
 'The intensity detected 50 percent of the time is the absolute threshold. A difference threshold compares two stimuli.');
Q('m3-sp','a','A coffee taster can tell that one cup has slightly more sugar than another, but not when the gap between them is any smaller. That limit is the',
 ['difference threshold','absolute threshold','psychophysics','saturation'],
 'The smallest detectable difference between two stimuli is the difference threshold.');
Q('m3-sp','c','How does a difference threshold differ from an absolute threshold?',
 ['It is about telling two stimuli apart, not detecting one at all','It is the strength a stimulus needs to start any sensation','It measures detection 50 percent of the time; the other does not','It is measured for vision; the other is measured for hearing'],
 'Absolute threshold: can you detect the stimulus at all. Difference threshold: can you tell two stimuli apart.');
Q('m3-sp','f','In the figure, which concept do panel A (the candle flame) and panel B (the two shades of green) illustrate, in that order?',
 ['Absolute threshold, difference threshold','Psychophysics, difference threshold','Sensation, perception','Brightness, saturation'],
 'Seeing a faint flame at all is the absolute threshold; telling two hues apart is the difference threshold.', {fig:'f_thresh'});
TF('m3-sp','t','The absolute threshold is the stimulus intensity a person can detect 75 percent of the time.', false,
 'False. It is the intensity detected 50 percent of the time.');
TF('m3-sp','t','Perception is the direct effect of a stimulus on receptor cells.', false,
 'False. That is sensation. Perception is the organization and interpretation of it.');

/* ---- m3-eye ---- */
Q('m3-eye','r','The three properties of light are',
 ['brightness, hue, and saturation','brightness, pitch, and wavelength','hue, pitch, and intensity','saturation, wavelength, and intensity'],
 'Brightness (photons), hue (wavelength), and saturation (white mixed in).');
Q('m3-eye','r','Brightness is measured by',
 ['the number of photons seen at one time','the wavelength in nanometers','the amount of white in the light','the size of the pupil'],
 'Brightness is intensity: photons per moment. Wavelength sets hue; white content sets saturation.');
Q('m3-eye','r','The color we perceive, determined by the light\'s wavelength, is its',
 ['hue','saturation','brightness','intensity'],
 'Hue is set by wavelength. Saturation is how much white is mixed in.');
Q('m3-eye','a','A paint store adds white to a deep red until it becomes pale pink. The property of the color that has decreased is',
 ['saturation','hue','brightness','wavelength'],
 'More white means less saturation. The hue (red) is unchanged.');
Q('m3-eye','c','Two lights have the same wavelength but one contains much more white. They differ in',
 ['saturation','hue','wavelength','visual range'],
 'Same wavelength means same hue; more white means lower saturation.');
Q('m3-eye','f','Moving from left to right across the visible spectrum in the figure changes which property of light?',
 ['Hue','Saturation','Brightness','Intensity'],
 'The spectrum runs by wavelength, and wavelength determines hue.', {fig:'o_spectrum'});
Q('m3-eye','r','Which sense is rated as the most valued by surveyed adults?',
 ['Vision','Hearing','Touch','Smell'],
 'Vision is described as probably our most important sense and the most valued.');
Q('m3-eye','r','The thin layer of tissue at the back of the eye that records images is the',
 ['retina','fovea','lens','iris'],
 'The retina records the image. The fovea is one area within it.');
Q('m3-eye','r','Rods are the photoreceptors that',
 ['let us see in dim light','let us perceive color','focus images on the retina','carry signals to the brain'],
 'Rods (about 120 million) handle dim light. Cones handle color.');
Q('m3-eye','a','Walking into a dark movie theater, you can make out shapes but not colors. The photoreceptors doing most of the work are',
 ['rods','cones','hair cells','ganglion cells'],
 'Rods allow vision in dim light; cones, which give color, need more light.');
Q('m3-eye','c','How do rods and cones differ?',
 ['Rods work in dim light; cones aid color perception','Rods aid color perception; cones work in dim light','Rods are in the lens; cones are in the retina','Rods number about 6 million; cones about 120 million'],
 'Rods: dim light, about 120 million. Cones: color, about 6 million.');
Q('m3-eye','r','The area of the retina with the densest concentration of cones is the',
 ['fovea','blind spot','optic disc','lens'],
 'The fovea has the most cones. The blind spot has no photoreceptors.');
Q('m3-eye','r','The structure that carries visual messages to the brain is the',
 ['optic nerve','retina','ciliary muscle','fovea'],
 'The optic nerve carries visual messages; where it leaves the eye is the blind spot.');
Q('m3-eye','r','The blind spot exists because',
 ['the optic nerve exits there, leaving no photoreceptors','the fovea packs too many cones there to process','the lens cannot focus incoming light on that area','the iris blocks incoming light from reaching that area'],
 'Where the optic nerve exits, the retina has no photoreceptors.');
Q('m3-eye','c','Which pairing of retinal areas is correct?',
 ['Fovea: densest cones; blind spot: no photoreceptors','Fovea: densest cones; blind spot: densest cones','Fovea: no photoreceptors; blind spot: no photoreceptors','Fovea: no photoreceptors; blind spot: densest cones'],
 'The fovea is packed with cones; the blind spot, where the optic nerve leaves, has none.');
Q('m3-eye','r','The pupil is',
 ['the opening of the iris','the colored part of the eye','the fluid behind the lens','the muscle that shapes the lens'],
 'The pupil is the opening; the iris is the colored structure around it.');
Q('m3-eye','a','When you step into bright sunlight, the opening at the front of your eye shrinks. The structure that reflexively makes this happen is the',
 ['iris','pupil','lens','cornea'],
 'The iris opens and closes the pupil. The pupil is the opening that changes size.');
Q('m3-eye','r','The structure behind the iris that changes shape to focus visual images is the',
 ['lens','cornea','retina','pupil'],
 'The lens changes shape to focus; ciliary muscles control that shape.');
Q('m3-eye','r','Small muscles attached to the lens that control its shape and focusing are the',
 ['ciliary muscles','iris muscles','optic muscles','vestibular muscles'],
 'The ciliary muscles change the lens\'s shape.');
Q('m3-eye','c','Which structure-function pairing is correct?',
 ['Ciliary muscles: change lens shape; iris: opens and closes pupil','Ciliary muscles: change lens shape; iris: changes lens shape','Ciliary muscles: open and close pupil; iris: opens and closes pupil','Ciliary muscles: open and close pupil; iris: changes lens shape'],
 'Ciliary muscles act on the lens; the iris acts on the pupil.');
Q('m3-eye','r','Aqueous humor is the',
 ['watery fluid between the cornea and the lens','thick fluid behind the lens that keeps the eye round','thin tissue at the back of the eye that records images','fluid inside the cochlea that carries sound waves'],
 'Aqueous humor sits in front of the lens; vitreous humor fills the space behind it.');
Q('m3-eye','r','The thick fluid behind the lens that keeps the eye spherical is the',
 ['vitreous humor','aqueous humor','olfactory mucosa','endolymph'],
 'Vitreous humor is behind the lens and holds the eye\'s shape.');
Q('m3-eye','c','How does aqueous humor differ from vitreous humor?',
 ['Aqueous is watery, in front of the lens; vitreous is thick, behind it','Aqueous is thick, in front of the lens; vitreous is watery, behind it','Aqueous is watery, behind the lens; vitreous is thick, in front of it','Aqueous is thick, behind the lens; vitreous is watery, in front of it'],
 'Aqueous: watery, between cornea and lens. Vitreous: thick, behind the lens, keeps the eye round.');
TF('m3-eye','t','The ciliary muscles, not the iris, change the shape of the lens to focus images.', true,
 'True. The iris opens and closes the pupil; the ciliary muscles shape the lens.');
TF('m3-eye','t','More white in a light means lower saturation.', true,
 'True. Saturation is the amount of white present: whiter means less saturated.');
TF('m3-eye','t','The fovea is the part of the retina with no photoreceptors.', false,
 'False. That is the blind spot. The fovea has the densest cones.');


/* ---- m3-color ---- */
Q('m3-color','r','The trichromatic theory proposes that',
 ['red, green, and blue can create all other colors','three opposing color pairs code every color we see','color depends on rods rather than on cones','the iris filters incoming light into three colors'],
 'Trichromatic: three colors combine. Opponent-process: three opposing pairs.');
Q('m3-color','r','In the opponent-process theory, which three pairs work in opposition?',
 ['Black/white, red/green, blue/yellow','Black/white, red/blue, green/yellow','Red/yellow, blue/green, black/white','Red/green, blue/white, black/yellow'],
 'The three pairs are black/white, red/green, and blue/yellow.');
Q('m3-color','a','You can picture a reddish yellow (orange), but never a greenish red. Which theory explains this?',
 ['Opponent-process theory','Trichromatic theory','Place theory','Frequency theory'],
 'Red and green are an opposing pair, so they cannot be perceived together.');
Q('m3-color','c','Which observation supports the opponent-process theory over the trichromatic theory?',
 ['No one sees a bluish yellow','Mixing red, green, and blue light makes white','The retina contains cones','Hue depends on wavelength'],
 'Blue and yellow are an opposing pair, so they cancel. Mixing three colors is the trichromatic idea.');
Q('m3-color','e','Which claim belongs to the trichromatic theory?',
 ['Any color can be made by mixing red, green, and blue','Red, green, and blue cancel each other out in pairs','Colors are coded as differences within pairs','Blue and yellow cannot be seen together'],
 'The trichromatic theory is about red, green, and blue combining. Canceling pairs, coding by differences within pairs, and no bluish yellow describe opponent-process.');
Q('m3-color','f','The figure shows three cone types (S, M, L) feeding into three channels that produce black-white, red-green, and blue-yellow. Which theory does it illustrate?',
 ['Opponent-process theory','Trichromatic theory','Place theory','Frequency theory'],
 'Three opposing pairs as outputs is the opponent-process theory.', {fig:'f_opponent'});
TF('m3-color','t','The opponent-process theory explains why we never see a greenish red.', true,
 'True. Red and green work in opposition, so they are never perceived together.');
TF('m3-color','t','The trichromatic theory proposes three opposing color pairs.', false,
 'False. That is opponent-process. Trichromatic says red, green, and blue combine to make all colors.');

/* ---- m3-ear ---- */
Q('m3-ear','r','The outer ear is made up of the',
 ['pinna and auditory canal','tympanic membrane and ossicles','oval window and cochlea','cochlea and semicircular canals'],
 'Outer: pinna and auditory canal. Middle: eardrum and ossicles. Inner: oval window and cochlea.');
Q('m3-ear','r','The middle ear is made up of the',
 ['tympanic membrane and ossicles','pinna and auditory canal','oval window and cochlea','basilar membrane and hair cells'],
 'The middle ear holds the eardrum and the three ossicles.');
Q('m3-ear','r','In the inner ear, sound waves are turned into neural impulses in the',
 ['cochlea','tympanic membrane','ossicles','auditory canal'],
 'The cochlea is the fluid-filled structure where sound becomes neural impulses.');
Q('m3-ear','r','The tympanic membrane is',
 ['the eardrum, which vibrates','the ear lobe','the shaft into the middle ear','the entry into the inner ear'],
 'The tympanic membrane is the eardrum, part of the middle ear.');
Q('m3-ear','r','The ossicles that pass vibrations to the inner ear are the',
 ['hammer, anvil, and stirrup','pinna, canal, and eardrum','utricle, saccule, and canals','rods, cones, and hair cells'],
 'The ossicles are the hammer, anvil, and stirrup.');
Q('m3-ear','r','The pinna is part of the',
 ['outer ear','middle ear','inner ear','cochlea'],
 'The outer ear is made up of the pinna and the auditory canal.');
Q('m3-ear','r','The auditory canal is',
 ['the shaft into the middle ear','the opening into the inner ear','the membrane that vibrates','the fluid-filled spiral'],
 'The auditory canal leads from the outer ear to the middle ear.');
Q('m3-ear','r','Vibrations enter the inner ear through the',
 ['oval window','tympanic membrane','auditory canal','pinna'],
 'The oval window is the entry to the inner ear; the eardrum is in the middle ear.');
Q('m3-ear','c','Which pairing of structure and region is correct?',
 ['Ossicles: middle ear; cochlea: inner ear','Ossicles: inner ear; cochlea: middle ear','Pinna: middle ear; ossicles: outer ear','Cochlea: outer ear; auditory canal: inner ear'],
 'The ossicles are in the middle ear; the cochlea is in the inner ear.');
Q('m3-ear','a','A patient\'s eardrum and ossicles work normally, but the fluid-filled structure that turns vibration into nerve signals is damaged. The damage is in the',
 ['inner ear','middle ear','outer ear','auditory canal'],
 'The cochlea, where vibration becomes neural impulses, is in the inner ear.');
Q('m3-ear','a','An ear infection keeps the eardrum and the three small bones behind it from moving freely. Which region of the ear is affected?',
 ['Middle ear','Outer ear','Inner ear','Cochlea'],
 'The eardrum and ossicles make up the middle ear.');
Q('m3-ear','c','Put these in the order sound travels: oval window, auditory canal, ossicles, cochlea.',
 ['Auditory canal, ossicles, oval window, cochlea','Ossicles, oval window, cochlea, auditory canal','Oval window, cochlea, auditory canal, ossicles','Cochlea, auditory canal, ossicles, oval window'],
 'Canal (outer) → eardrum and ossicles (middle) → oval window → cochlea (inner).');
TF('m3-ear','t','The oval window is part of the outer ear.', false,
 'False. It is where vibrations enter the inner ear.');
TF('m3-ear','t','The hammer, anvil, and stirrup are the ossicles of the middle ear.', true,
 'True. They pass vibrations from the eardrum to the inner ear.');
TF('m3-ear','t','Sound waves become neural impulses in the cochlea, not at the tympanic membrane.', true,
 'True. The tympanic membrane vibrates; the fluid-filled cochlea is where sound becomes neural impulses.');

/* ---- m3-aud ---- */
Q('m3-aud','r','According to place theory, we distinguish pitch because',
 ['different frequencies displace different regions of the basilar membrane','hair cells fire at a rate that matches the sound\'s frequency','sound reaches one ear slightly before the other','the ossicles vibrate at different speeds'],
 'Place theory is about where on the basilar membrane. Firing rate is frequency theory.');
Q('m3-aud','r','According to frequency theory, perceived pitch depends on',
 ['how often hair cells trigger firing in the auditory nerve','which region of the basilar membrane is displaced','the difference in arrival time between the ears','the size of the tympanic membrane'],
 'Frequency theory: the rate of auditory nerve firing tracks pitch.');
Q('m3-aud','c','A researcher finds that a high tone and a low tone vibrate different spots along the basilar membrane. This supports',
 ['place theory','frequency theory','opponent-process theory','trichromatic theory'],
 'Different locations for different frequencies is place theory.');
Q('m3-aud','c','A researcher finds that the auditory nerve fires faster for higher tones. This supports',
 ['frequency theory','place theory','spatial hearing','trichromatic theory'],
 'Firing rate tied to the tone\'s frequency is frequency theory.');
Q('m3-aud','r','Spatial hearing is the ability to',
 ['locate where a sound is coming from','tell two pitches apart','detect a sound half the time','turn vibration into neural signals'],
 'Spatial hearing locates sound: front or behind, above or below.');
Q('m3-aud','r','Interaural time differences (ITD) rely on the fact that',
 ['a sound on the left reaches the left ear slightly before the right','a sound on the left vibrates more of the basilar membrane','hair cells fire faster for sounds on the left','the left ear is more sensitive than the right'],
 'ITD is the difference in arrival time between the two ears.');
Q('m3-aud','a','A car horn sounds to your right, and you turn right before you even think about it. The cue telling you the horn reached your right ear a fraction of a second sooner is',
 ['interaural time differences','interaural level differences','frequency theory','place theory'],
 'A difference in arrival time between the ears is ITD.');
Q('m3-aud','r','Spatial hearing is based on interaural time differences (ITD) and',
 ['interaural level differences (ILD)','the difference threshold','basilar membrane place coding','the opponent process'],
 'The two cues for locating sound are ITD and ILD.');
TF('m3-aud','t','Place theory says pitch depends on how often hair cells fire.', false,
 'False. That is frequency theory. Place theory says different frequencies move different regions of the basilar membrane.');

/* ---- m3-chem ---- */
Q('m3-chem','r','Taste and smell are called the chemical senses because',
 ['both respond to chemical substances in the environment','both rely on photoreceptors to detect incoming molecules','both send their signals through the cochlea first','both depend on interaural differences to locate sources'],
 'Both respond to chemicals in the environment.');
Q('m3-chem','r','The receptors for taste located on the tongue are',
 ['taste buds','papillae','olfactory mucosa','hair cells'],
 'Taste buds are the receptors. Papillae are the bumps that hold them.');
Q('m3-chem','r','The bumps on the tongue that hold taste receptors are called',
 ['papillae','taste buds','ossicles','mucosa'],
 'Papillae are the bumps; the receptors on them are taste buds.');
Q('m3-chem','c','How do papillae and taste buds relate?',
 ['Papillae are bumps that hold the taste receptors; taste buds are the receptors','Papillae and taste buds are two names for the same taste receptors','Papillae detect smell in the nose; taste buds detect taste on the tongue','Papillae line the nasal cavity; taste buds line the surface of the tongue'],
 'Papillae are the visible bumps; taste buds are the receptors on them.');
Q('m3-chem','r','Our pleasure and displeasure for the basic tastes are',
 ['hard-wired in the brain','learned through classical conditioning','set by the olfactory mucosa','developed through habituation'],
 'The likes and dislikes for the basic tastes are hard-wired.');
Q('m3-chem','r','Receptor cells for smell are found in the',
 ['olfactory mucosa','papillae','taste buds','tympanic membrane'],
 'The olfactory mucosa lines the nasal cavity and holds smell receptors.');
Q('m3-chem','a','With a stuffy nose, someone eating chocolate can barely tell it from any other sweet. This shows that',
 ['smell contributes to how food tastes','smell depends on the papillae','sweet receptors sit in the nose','congestion blocks the taste buds'],
 'Plugging the nose makes chocolate hard to distinguish: smell contributes to taste.');
Q('m3-chem','f','The four labels on the tongue figure are the basic tastes our receptors distinguish. Our pleasure and displeasure for these tastes are',
 ['hard-wired in the brain','set by the papillae on the tongue','learned through classical conditioning','shaped by the olfactory mucosa'],
 'Pleasure and displeasure for the basic tastes are hard-wired in the brain, not learned.', {fig:'o_tongue'});
TF('m3-chem','t','Human taste receptors distinguish five basic tastes.', false,
 'False. They distinguish four: sweet, salty, sour, and bitter.');
TF('m3-chem','t','Papillae are bumps that hold the taste receptors rather than being the receptors themselves.', true,
 'True. Papillae are the bumps; taste buds are the receptors.');

/* ---- m3-touch ---- */
Q('m3-touch','r','Touch and pain are both part of the',
 ['somatosensory system','vestibular system','olfactory system','limbic system'],
 'The somatosensory system tells the brain about the body\'s physiological state; touch and pain belong to it.');
Q('m3-touch','r','Sensing the physiological state of your own body is called',
 ['interoception','exteroception','proprioception','nociception'],
 'Interoception is inward-facing. Exteroception senses the external world.');
Q('m3-touch','r','Our sense of the properties of the immediate external world is called',
 ['exteroception','interoception','kinesthesis','orthostasis'],
 'Exteroception senses the outside world (Craig, 2002).');
Q('m3-touch','a','You notice your heart pounding and your stomach churning before a presentation. Sensing these internal body states is',
 ['interoception','exteroception','kinesthesis','cutaneous sensing'],
 'Sensing your own body\'s physiological state is interoception.');
Q('m3-touch','c','Feeling that a doorknob is cold and rough, and feeling that you are hungry, are examples of, respectively,',
 ['exteroception and interoception','proprioception and interoception','proprioception and kinesthesis','nociception and proprioception'],
 'The doorknob is the external world (exteroception); hunger is the body\'s state (interoception).');
Q('m3-touch','r','Which list gives the four somatosensory modalities?',
 ['Cutaneous senses, proprioception, kinesthesis, nociception','Cutaneous senses, interoception, kinesthesis, orthostasis','Exteroception, proprioception, transduction, nociception','Cutaneous senses, proprioception, orthostasis, interoception'],
 'The four modalities: skin, body position, body movement, pain.');
Q('m3-touch','r','The cutaneous senses are the senses of the',
 ['skin','joints','inner ear','internal organs'],
 'Cutaneous means skin.');
Q('m3-touch','r','Proprioception refers to sensing',
 ['body position','body movement','pain and discomfort','the external world'],
 'Proprioception is body position; kinesthesis is body movement.');
Q('m3-touch','r','Kinesthesis, as one of the four somatosensory modalities, refers to sensing',
 ['body movement','body position','pain and discomfort','skin temperature'],
 'Kinesthesis is body movement; proprioception is body position.');
Q('m3-touch','r','Nociception refers to sensing',
 ['pain and discomfort','body position','body movement','skin pressure'],
 'Nociception is the pain modality.');
Q('m3-touch','a','With your eyes closed, you can tell that your arm is raised above your head and not resting at your side. The modality that tells you where your arm is located is',
 ['proprioception','kinesthesis','nociception','exteroception'],
 'Knowing the arm\'s position is proprioception. Kinesthesis would be sensing it moving.');
Q('m3-touch','a','Stepping on a tack sends a sharp warning signal. Which somatosensory modality is responsible?',
 ['Nociception','Proprioception','Kinesthesis','Cutaneous sense of pressure'],
 'Pain and discomfort are nociception.');
Q('m3-touch','a','A dancer can feel her leg swinging through an arc during a kick. The modality that registers this motion is',
 ['kinesthesis','proprioception','nociception','interoception'],
 'Sensing body movement is kinesthesis.');
Q('m3-touch','r','The process by which skin receptors convert stimulation into electrical nerve impulses is',
 ['transduction','perception','habituation','nociception'],
 'Transduction converts the stimulus into nerve impulses.');
Q('m3-touch','c','How does transduction relate to a transducer?',
 ['Transduction is the conversion; a transducer is the mechanism that does it','Transduction is the stimulus; a transducer is the sensation it causes','Transduction is perception; a transducer is the sensation it interprets','Transduction is a threshold; a transducer is the receptor it activates'],
 'A transducer (a receptor) carries out transduction (energy conversion).');
Q('m3-touch','r','Pain is defined as an unpleasant sensory and emotional experience associated with',
 ['actual or potential tissue damage','a mismatch of vestibular and visual cues','a stimulus below threshold','the loss of a secure base'],
 'Pain is tied to actual or potential tissue damage.');
Q('m3-touch','s','Aron Ralston amputated his own trapped arm and still walked, talked, and thought clearly afterward. The point of this case is that',
 ['the brain modulates pain through motivation, attention, emotion, and context','pain receptors in a trapped limb gradually lose their sensitivity over time','pain depends mainly on how much tissue is damaged, not on the situation','nociception is a modality that matters little to survival in emergencies'],
 'His case shows the brain can "stop" pain; the experience is subjective and shaped by motivation, attention, emotion, and context.');
Q('m3-touch','s','In Harlow\'s (1958) study, infant rhesus monkeys under stress clung to the',
 ['soft cloth surrogate with no milk','wire surrogate with a milk dispenser','surrogate that provided the most food','experimenter who fed them'],
 'They clung to the cloth surrogate and visited the wire one only to eat.');
Q('m3-touch','s','What did Harlow\'s surrogate-mother study show?',
 ['Comfort and a secure base were valued over nourishment','Infants bonded to whichever surrogate fed them milk','Infants preferred whichever surrogate was warmer','Infants bonded to the surrogate they saw first'],
 'The need for comfort and a "secure base" outweighed physical nourishment.');
Q('m3-touch','f','What does this photo from Harlow\'s study show?',
 ['Comfort comes from the cloth mother, food from the wire one','It prefers whichever surrogate happens to provide milk','It treats the wire mother as its secure base under stress','It avoids both surrogates whenever it becomes frightened'],
 'Infants used the cloth mother for comfort and the wire mother only for food.', {fig:'o_harlow'});
TF('m3-touch','t','Proprioception refers to body position.', true,
 'True. Body movement is kinesthesis.');
TF('m3-touch','t','Exteroception is sensing the physiological state of one\'s own body.', false,
 'False. That is interoception. Exteroception senses the immediate external world.');
TF('m3-touch','t','How much pain a person feels can be shaped by motivation, attention, emotion, and context.', true,
 'True. The Ralston case illustrates this.');

/* ---- m3-vest ---- */
Q('m3-vest','r','The vestibular system mainly functions to',
 ['detect head motion and position relative to gravity','convert incoming sound waves into neural impulses','sense pain, pressure, and temperature in the skin','encode specific locations within the hippocampus'],
 'The vestibular system detects head motion and position to maintain balance.');
Q('m3-vest','r','Orthostasis refers to',
 ['equilibrium during positional changes','sensing the movement of the body','sensing pain and tissue discomfort','a stable cognitive map of space'],
 'Orthostasis is staying balanced while changing position.');
Q('m3-vest','a','You stand up quickly from a chair without losing your balance. The vestibular function involved is',
 ['orthostasis','nociception','exteroception','transduction'],
 'Equilibrium during a positional change is orthostasis.');
Q('m3-vest','r','The vestibular sense conveys',
 ['balance in relation to gravity and acceleration','the physiological state of the body','pain signaling actual or potential tissue damage','the pitch and loudness of incoming sounds'],
 'The vestibular sense is balance relative to gravity and acceleration.');
Q('m3-vest','r','Where are the vestibular receptors located?',
 ['In the inner ear next to the cochlea','In the middle ear next to the ossicles','In the hippocampus next to place cells','In the skin next to cutaneous receptors'],
 'They lie in the inner ear beside the cochlea.');
Q('m3-vest','r','The vestibular receptors in the inner ear detect',
 ['head turns, straight-line motion, and head tilt','sound frequency and loudness in the cochlea','light intensity and wavelength at the retina','skin pressure and temperature across the body'],
 'They detect rotational motion (head turns), linear motion, and tilts of the head relative to gravity, and turn them into neural signals.');
Q('m3-vest','r','The receptor cells of the semicircular canals are called',
 ['hair cells','rod cells','place cells','grid cells'],
 'Hair cells are the canals\' receptor cells, in the middle of the tubes.');
Q('m3-vest','r','Vestibular efferents are fibers that',
 ['project from the brain out to the vestibular receptors','carry signals from the receptors to the brain','connect the cochlea to the ossicles','link place cells to grid cells'],
 'Efferents go from the brain to the receptor organs and are thought to control their sensitivity.');
Q('m3-vest','r','Vestibular efferents are thought to',
 ['control the sensitivity of the vestibular receptors','encode the heading direction of the head in space','convert incoming sound waves into neural impulses','store the cognitive map used for navigation'],
 'They are thought to set how sensitive the receptors are.');
Q('m3-vest','r','Place cells, which encode specific locations, are found in the',
 ['hippocampus','entorhinal cortex','anterior-dorsal thalamus','cochlea'],
 'Place cells: hippocampus. Grid cells: entorhinal cortex. Head direction cells: thalamus.');
Q('m3-vest','r','Grid cells encode spatial maps in a tessellated pattern and are located in the',
 ['entorhinal cortex','hippocampus','anterior-dorsal thalamus','vestibular nerve'],
 'Grid cells are in the entorhinal cortex.');
Q('m3-vest','r','Head direction cells, which encode heading independent of location, are located in the',
 ['anterior-dorsal thalamus','hippocampus','entorhinal cortex','semicircular canals'],
 'Head direction cells are in the anterior-dorsal thalamus.');
Q('m3-vest','a','A rat stands in the same corner of a maze facing north, then facing south. One set of cells changes its firing with the direction it faces, not with the corner it is in. Those are',
 ['head direction cells','place cells','grid cells','hair cells'],
 'Firing tied to heading, not location, is the signature of head direction cells.');
Q('m3-vest','a','A neuron fires every time a mouse reaches one particular spot in its cage, wherever it is facing. This is most likely a',
 ['place cell','grid cell','head direction cell','hair cell'],
 'Place cells encode specific locations.');
Q('m3-vest','c','Which cell type encodes space as a repeating tessellated pattern rather than a single spot?',
 ['Grid cells','Place cells','Head direction cells','Hair cells'],
 'Grid cells form a tessellated map; place cells mark specific locations.');
Q('m3-vest','s','Motion sickness is generally thought to come from',
 ['a mismatch among vestibular, visual, and proprioceptive cues','damage to the semicircular canals from rapid motion','overactive place cells in the hippocampus during travel','excess acetylcholine released by vestibular efferents'],
 'A sensory mismatch among vestibular, visual, and proprioceptive signals (Yates, Miller, & Lucot, 1998).');
Q('m3-vest','a','Reading in the back seat of a moving car, your eyes say you are still while your inner ear says you are moving. You start to feel queasy. This is explained by',
 ['a mismatch in sensory cues','a damaged cochlea','habituation to motion','a failure of orthostasis'],
 'Motion sickness comes from a mismatch between vestibular, visual, and proprioceptive cues.');
TF('m3-vest','t','Place cells are found in the entorhinal cortex.', false,
 'False. Place cells are in the hippocampus; grid cells are in the entorhinal cortex.');
TF('m3-vest','t','Head direction cells encode heading regardless of the animal\'s location.', true,
 'True. They track heading, independent of spatial location.');
TF('m3-vest','t','Vestibular efferents carry signals from the brain out to the vestibular receptors.', true,
 'True. Efferents project from the brain to the receptor organs and are thought to control their sensitivity.');

/* ---- added for coverage ---- */
Q('m3-sp','a','A smoke detector\'s sensor responds to particles in the air before anyone notices a smell. In people, the comparable first step, receptors responding to a stimulus, is',
 ['sensation','perception','psychophysics','a difference threshold'],
 'Receptor cells responding to a stimulus is sensation; interpreting it is perception.');
Q('m3-sp','a','A lab measures the faintest light, the softest sound, and the smallest weight change people can detect. This research belongs to',
 ['psychophysics','perception','transduction','metacognition'],
 'Psychophysics relates physical stimulus attributes to experience, including thresholds.');
Q('m3-eye','a','Two flashlights shine the same color, but one sends out far more photons at once. The flashlights differ in',
 ['brightness','hue','saturation','wavelength'],
 'Brightness is intensity: the number of photons seen at one time.');
Q('m3-ear','c','Which structure is part of the outer ear?',
 ['Pinna','Anvil','Oval window','Cochlea'],
 'The pinna is outer ear. The anvil is middle ear; the oval window and cochlea are inner ear.');
Q('m3-ear','a','A tiny bone in the middle ear is fractured, so vibration from the eardrum no longer reaches the inner ear. The broken bone is one of the',
 ['hammer, anvil, and stirrup','semicircular canals','papillae','vestibular efferents'],
 'The hammer, anvil, and stirrup (the ossicles) carry vibration to the inner ear.');
Q('m3-aud','a','A researcher argues that we hear a tone as high because nerve fibers fire many times per second for it. Which theory is she defending?',
 ['Frequency theory','Place theory','Opponent-process theory','Spatial hearing theory'],
 'Firing rate as the code for pitch is frequency theory.');
Q('m3-chem','a','A patient loses smell after an infection damages the membrane lining her nasal cavity. The damaged tissue is the',
 ['olfactory mucosa','papillae','taste buds','tympanic membrane'],
 'The olfactory mucosa lines the nasal cavity and holds the smell receptors.');
Q('m3-touch','a','A patient can feel pressure, temperature, and pain normally across her skin. Which system is working as it should?',
 ['Somatosensory system','Vestibular system','Olfactory system','Auditory system'],
 'Pressure, temperature, and pain come from somatosensory receptors.');
Q('m3-touch','a','Running a hand over sandpaper, you feel its roughness through receptors in your skin. Which modality is this?',
 ['Cutaneous senses','Kinesthesis','Nociception','Proprioception'],
 'Senses of the skin are the cutaneous senses.');
Q('m3-touch','a','Pressure on a fingertip activates receptors that convert it into electrical nerve impulses. That conversion is',
 ['transduction','perception','habituation','proprioception'],
 'Converting skin stimulation into nerve impulses is transduction.');
Q('m3-vest','c','Which function belongs to the vestibular system rather than the somatosensory system?',
 ['Orthostasis','Nociception','Cutaneous sensing','Interoception'],
 'Equilibrium during positional changes (orthostasis) is a vestibular function.');
Q('m3-vest','a','A figure skater spins rapidly and stops without falling over. The sense that keeps her balanced relative to gravity and acceleration is the',
 ['vestibular sense','cutaneous sense','nociceptive sense','olfactory sense'],
 'Balance in relation to gravity and acceleration is the vestibular sense.');
Q('m3-vest','a','Recording from a rat\'s entorhinal cortex, a researcher finds cells that fire at points spaced in a regular repeating pattern across the floor. These are',
 ['grid cells','place cells','head direction cells','hair cells'],
 'Grid cells, in the entorhinal cortex, map space in a tessellated pattern.');
