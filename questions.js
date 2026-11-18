const QUESTIONS = [
  {
    "domain": "foundations",
    "chapter": 1,
    "question": "What does the principle ALARA require of the imaging team when a child needs a radiation-based study?",
    "options": {
      "A": "Repeat the study at a lower setting until the radiologist is satisfied with the image appearance",
      "B": "Use the smallest exposure that still answers the clinical question, and only when the study is justified",
      "C": "Apply a lead shield over every organ in the field and accept any resulting loss of anatomy",
      "D": "Use the standard adult protocol for every child so that image quality is never compromised by dose reduction"
    },
    "answer": "B",
    "explanation": "ALARA means as low as reasonably achievable: justify the exam, optimize the protocol for the child's size, and avoid repeats and extra phases. Using an adult protocol ignores size-based adjustment. Blanket shielding can hide anatomy and create artifact, and repeating studies adds dose rather than removing it.",
    "id": 1
  },
  {
    "domain": "foundations",
    "chapter": 1,
    "question": "A 3 week old infant has bilious vomiting. Why does the request need to state the age and the clinical concern clearly?",
    "options": {
      "A": "Age and presentation set the likely emergency, here malrotation with volvulus, plus the urgency and best test",
      "B": "A vague request allows the technologist to choose any protocol because pediatric protocols are all interchangeable",
      "C": "The scanner cannot be started until the clinical question has been entered into the dose tracking software",
      "D": "Radiology departments only accept requests that include a patient's weight and the name of the referring ward"
    },
    "answer": "A",
    "explanation": "Pediatric disease is age dependent, and a precise story tells the team which emergency must be excluded and how fast. Weight and ward details do not set the pathway, dose software does not require the question to start, and pediatric protocols are not interchangeable because size and age change both technique and diagnosis.",
    "id": 2
  },
  {
    "domain": "foundations",
    "chapter": 1,
    "question": "Which modality is the first-line tool for many infant brain, renal, pelvic, and abdominal questions because it is real time and uses no ionizing radiation?",
    "options": {
      "A": "Nuclear medicine, because a radioactive tracer shows function with no dose to the child at all",
      "B": "Ultrasound, using the open fontanelle in infant brain studies and the absence of ionizing radiation",
      "C": "Computed tomography, because it is fast and gives the most complete cross-sectional anatomy in infants",
      "D": "Plain radiography, because a single projection reliably shows soft tissue organs in small children"
    },
    "answer": "B",
    "explanation": "Ultrasound is real time, repeatable, and radiation free, which makes it first line for many pediatric questions. CT is fast but uses ionizing radiation. Radiography is poor for deep soft tissue organs because structures overlap. Nuclear medicine gives functional information but does deliver a radiation dose.",
    "id": 3
  },
  {
    "domain": "foundations",
    "chapter": 1,
    "question": "A 6 year old with a long, noisy brain MRI keeps moving and sequences are degraded. Which approach should the team consider first?",
    "options": {
      "A": "Cancel MRI permanently and substitute a CT, since CT never requires the child to stay still during acquisition",
      "B": "Accept the motion degraded images and issue a final report with all findings described as definite",
      "C": "Child life preparation, a parent nearby, and a shortened protocol before moving to sedation or anesthesia",
      "D": "Proceed directly to deep sedation without airway monitoring so the examination can be finished quickly in the scanner"
    },
    "answer": "C",
    "explanation": "Cooperation is part of image quality, and the least invasive measures such as preparation, support, and shorter sequences come first. Sedation requires trained monitoring and carries airway risk. CT also suffers from motion and uses radiation, and reporting degraded images as definite is unsafe.",
    "id": 4
  },
  {
    "domain": "foundations",
    "chapter": 1,
    "question": "Which type of imaging uses continuous or pulsed x-rays to show motion such as swallowing or bladder reflux, and can deliver a larger dose if it runs long?",
    "options": {
      "A": "Computed tomography, which produces only static images and cannot show any moving contrast column at all in children",
      "B": "Fluoroscopy, which should use pulsed exposure, a limited field, and recorded fluoroscopy time to control dose",
      "C": "MRI, which uses radio waves and a magnetic field that deliver a cumulative dose in long studies",
      "D": "Ultrasound, which uses high-frequency sound and so has a dose that must be recorded on every study"
    },
    "answer": "B",
    "explanation": "Fluoroscopy shows dynamic function and guides contrast, and dose control comes from pulsed mode, collimation, and recorded time. Ultrasound and MRI do not use ionizing radiation. CT gives cross-sectional images and is not the standard tool for watching a contrast column move in real time.",
    "id": 5
  },
  {
    "domain": "foundations",
    "chapter": 1,
    "question": "A radiologist notices an unexpected malpositioned endotracheal tube while reading a routine chest radiograph. What is the most appropriate action?",
    "options": {
      "A": "Finish the report first and let the routine report delivery process notify the team within the day",
      "B": "Recommend a follow-up radiograph in several weeks to see whether the tube position changes",
      "C": "Telephone the care team immediately as a critical result, then complete the written report",
      "D": "Describe the tube position as a likely normal variant because infants have a short trachea"
    },
    "answer": "C",
    "explanation": "Findings that could change immediate treatment, such as a malpositioned tube, a large pneumothorax, or volvulus, need direct communication before the report is finalized. Waiting for routine delivery delays care, a weeks-later follow-up is inappropriate for a tube, and a malpositioned tube is not a normal variant.",
    "id": 6
  },
  {
    "domain": "foundations",
    "chapter": 1,
    "question": "In the repeatable interpretation method, what should be checked immediately after reading the age, clinical question, and prior imaging?",
    "options": {
      "A": "The recommended follow-up test, so the next study is chosen before anything is described",
      "B": "The final impression, so that the diagnosis can be written before the findings are described in the report",
      "C": "The technical quality of the image, including labeling, exposure, field of view, and projection",
      "D": "The patient's insurance authorization, because a diagnostic answer depends on payment status"
    },
    "answer": "C",
    "explanation": "A diagnostic answer cannot be built on a non-diagnostic image, so technical quality is checked before findings are described. Writing the impression first reverses the method, choosing follow-up comes last after description and explanation, and insurance status has no bearing on interpretation.",
    "id": 7
  },
  {
    "domain": "foundations",
    "chapter": 1,
    "question": "What is the main reason the Image Gently campaign encourages teams to review a child's prior imaging before adding another radiation study?",
    "options": {
      "A": "Earlier exposures count in the child's cumulative history and prior studies may already answer the question",
      "B": "Radiation from earlier studies wears off after several weeks, so prior exposure has no relevance to dose planning",
      "C": "Prior studies are needed only to bill the department correctly for the repeated examination",
      "D": "Old images always show the same findings so a new study is never required in any child"
    },
    "answer": "A",
    "explanation": "Image Gently stresses child-sized protocols and counting prior exposure, and old studies can sometimes avoid a repeat. Billing is not the purpose, exposure is not erased by time, and new symptoms or interval change can absolutely require a new study.",
    "id": 8
  },
  {
    "domain": "foundations",
    "chapter": 1,
    "question": "Compared with an adult, why can a pediatric extremity radiograph be misleading for an inexperienced reader?",
    "options": {
      "A": "Children have no growth plates until adolescence so any lucent line must be a fracture",
      "B": "Open growth plates and developing ossification centers can mimic fractures when the reader expects an adult skeleton",
      "C": "Pediatric radiographs always use contrast, which creates false lucent lines near the joints",
      "D": "Children's bones are denser so every fracture line is hidden behind overlapping cortical bone"
    },
    "answer": "B",
    "explanation": "Growth plates and secondary ossification centers are normal lucent lines or fragments that can resemble injury. Children's bones are not denser in a way that hides fractures, radiographs do not use contrast, and growth plates are present throughout childhood until fusion in adolescence.",
    "id": 9
  },
  {
    "domain": "foundations",
    "chapter": 1,
    "question": "A stable adolescent needs evaluation of a suspected joint abnormality, and the clinician asks why MRI is often preferred over CT. What is the best answer?",
    "options": {
      "A": "MRI shows bone cortex better than any other test so soft tissue evaluation is never needed",
      "B": "MRI is always faster than CT and never requires a cooperative patient or any safety screening",
      "C": "MRI delivers a lower radiation dose than ultrasound and is therefore the only acceptable pediatric choice",
      "D": "MRI gives excellent soft tissue and joint contrast without ionizing radiation, though it needs time and safety screening"
    },
    "answer": "D",
    "explanation": "MRI excels in soft tissue and joint contrast with no ionizing radiation, but it is slower, noisy, and needs screening for implants. It is generally slower than CT, it uses no radiation at all so the dose comparison is wrong, and cortical bone detail is not its main strength.",
    "id": 10
  },
  {
    "domain": "foundations",
    "chapter": 2,
    "question": "A hemodynamically stable 7 year old has right lower quadrant pain and fever. Which imaging test is usually chosen first?",
    "options": {
      "A": "Contrast-enhanced abdominal CT immediately, because it is the most sensitive test and ultrasound is unreliable",
      "B": "Abdominal MRI under general anesthesia, because ultrasound is unsafe when appendicitis is suspected in children",
      "C": "Graded-compression ultrasound of the right lower quadrant, with CT reserved for inconclusive results and high clinical risk",
      "D": "Upper gastrointestinal contrast study, because it demonstrates the appendix directly in a young child"
    },
    "answer": "C",
    "explanation": "Ultrasound is the usual first test for suspected pediatric appendicitis because it avoids radiation and can be repeated. CT is a second step when ultrasound is inconclusive and risk stays high. MRI under anesthesia is not a first step, and an upper GI study evaluates malrotation rather than the appendix.",
    "id": 11
  },
  {
    "domain": "foundations",
    "chapter": 2,
    "question": "Before ordering any test in a stable child, which question best summarizes the third step of the choosing method?",
    "options": {
      "A": "What will the result change in management, and is a normal result reassuring enough to rely on",
      "B": "Which scanner in the department has the shortest waiting list for the requested examination this week",
      "C": "Which test provides the most images so that nothing could possibly be missed in the report",
      "D": "Which test the family has heard of most often and would most readily accept for the child"
    },
    "answer": "A",
    "explanation": "The third step asks whether the result will alter treatment and whether a normal result is trustworthy, otherwise a more sensitive test should be chosen. Scanner availability, family familiarity, and number of images are not diagnostic reasoning and do not justify an examination.",
    "id": 12
  },
  {
    "domain": "foundations",
    "chapter": 2,
    "question": "A 14 day old infant has bilious vomiting. Which pathway is most appropriate?",
    "options": {
      "A": "Reassurance and discharge, since vomiting in the newborn period is almost always attributable to feeding technique and overfeeding",
      "B": "Outpatient renal ultrasound within the week to exclude a congenital kidney difference as the cause",
      "C": "Urgent evaluation for malrotation with volvulus, with radiography and prompt upper gastrointestinal contrast study or ultrasound",
      "D": "Brain MRI first, because bilious vomiting in a newborn is most often caused by raised intracranial pressure"
    },
    "answer": "C",
    "explanation": "Bilious vomiting in a young infant is malrotation with volvulus until proven otherwise, a minutes-to-hours problem. Discharge risks bowel loss. A renal study does not explain bilious vomiting, and neuroimaging is not the first test for this presentation.",
    "id": 13
  },
  {
    "domain": "foundations",
    "chapter": 2,
    "question": "A 2 year old has a first uncomplicated febrile seizure and has returned to baseline neurologically. What is the usual imaging approach?",
    "options": {
      "A": "No emergency neuroimaging, since the test follows clinical risk and the examination is normal",
      "B": "Emergency CT of the head, because every seizure in a young child requires immediate cross-sectional imaging",
      "C": "Brain MRI under sedation the same day to exclude hidden structural disease in all febrile seizures",
      "D": "Skull radiographs, because they reliably exclude intracranial hemorrhage after a brief seizure in a child"
    },
    "answer": "A",
    "explanation": "A first uncomplicated febrile seizure with a return to baseline usually needs no emergency imaging. Imaging decisions change with trauma, focal findings, prolonged seizure, or known disease. CT adds radiation without benefit here, same-day sedated MRI is unnecessary, and skull films do not exclude hemorrhage.",
    "id": 14
  },
  {
    "domain": "foundations",
    "chapter": 2,
    "question": "Which situation is the best example of ultrasound being a poor choice despite its lack of radiation?",
    "options": {
      "A": "A suspected complex fracture or brainstem abnormality, where ultrasound cannot see the structures well",
      "B": "A child with suspected gallbladder disease who has fasted before the examination",
      "C": "An infant with a superficial soft tissue mass that can be reached with the probe",
      "D": "A child with suspected renal obstruction who needs a safe, radiation-free, and repeatable first examination at the bedside"
    },
    "answer": "A",
    "explanation": "Ultrasound may miss deep pelvic disease, small lung lesions, complex fractures, and brainstem abnormalities, so a negative result there does not exclude disease. Gallbladder, superficial masses, and renal obstruction are all classic ultrasound questions.",
    "id": 15
  },
  {
    "domain": "foundations",
    "chapter": 2,
    "question": "A child with high clinical suspicion for a problem has a negative ultrasound. What is the best next step?",
    "options": {
      "A": "Close the case, because a negative ultrasound always erases a convincing clinical history",
      "B": "Order the same ultrasound again with color Doppler turned on, since color flow always adds diagnostic sensitivity",
      "C": "Repeat the same ultrasound daily until a finding finally appears in the image",
      "D": "Choose a test that can actually answer the question, rather than repeating a study that cannot"
    },
    "answer": "D",
    "explanation": "A negative ultrasound does not erase a convincing history, and delay by repeating an inadequate test is harmful. Daily repeats add cost without new information, closing the case ignores clinical risk, and Doppler color can create false flow or hide real flow problems.",
    "id": 16
  },
  {
    "domain": "foundations",
    "chapter": 2,
    "question": "A school-age child has a first febrile urinary tract infection. What is the usual initial imaging test?",
    "options": {
      "A": "Voiding contrast study on the first day, regardless of age, sex, or the number of infections",
      "B": "Abdominal CT with contrast to display the renal parenchyma in every child with fever",
      "C": "Renal and bladder ultrasound to look for obstruction, abscess, stones, and anatomy that would change treatment",
      "D": "Nuclear medicine skeletal scintigraphy to look for hidden bone infection in every child who presents with fever"
    },
    "answer": "C",
    "explanation": "Renal and bladder ultrasound is the usual first test to exclude obstruction and structural causes. A voiding study is considered later for reflux depending on age, recurrence, and local guidance. A bone scan answers a different question, and CT adds radiation without being first line.",
    "id": 17
  },
  {
    "domain": "foundations",
    "chapter": 2,
    "question": "Which request is best written, according to the chapter's guidance on clinical requests?",
    "options": {
      "A": "The single phrase abdominal pain, because the radiologist will determine the rest independently",
      "B": "A short clinical story giving age, symptoms, key examination findings, relevant laboratory results, prior studies, and the question",
      "C": "A one-line menu of tests ticked from a list with no accompanying history or explanation",
      "D": "A request listing only the patient's identification number and the preferred scanner location"
    },
    "answer": "B",
    "explanation": "A short clinical story helps the radiologist choose the protocol and spares the child a repeat. Menu-style ticks, vague phrases like abdominal pain, and administrative details give no information about risk, urgency, or the question being asked.",
    "id": 18
  },
  {
    "domain": "foundations",
    "chapter": 2,
    "question": "A sexually active adolescent presents with pelvic pain. Which consideration separates this pathway from that of a young child with right lower quadrant pain?",
    "options": {
      "A": "Appendix ultrasound is never appropriate in any patient who is older than twelve years",
      "B": "Pelvic pain in adolescents is always musculoskeletal so radiography of the pelvis is first line",
      "C": "Imaging should be delayed until the child is no longer sexually active, to protect the ovaries",
      "D": "Pregnancy status and ovarian or tubal disease must be considered before choosing the test"
    },
    "answer": "D",
    "explanation": "Pregnancy, ovarian torsion or cyst, and tubal disease alter the differential and the test in an adolescent. Appendix ultrasound remains reasonable at any age, pelvic pain is not always musculoskeletal, and delaying evaluation of a possible emergency is not appropriate.",
    "id": 19
  },
  {
    "domain": "foundations",
    "chapter": 2,
    "question": "Why does stability matter as the first step in choosing an imaging test?",
    "options": {
      "A": "An unstable child needs a focused, fast pathway, while a stable child allows the least risky adequate test",
      "B": "Stable children should be scanned with CT because speed is never a concern for them",
      "C": "Unstable children should always be imaged with MRI, because it uses no ionizing radiation and gives superb detail",
      "D": "Stability determines only whether a parent may stay in the examination room during imaging"
    },
    "answer": "A",
    "explanation": "Stability decides whether time can be spent choosing the safest test or whether speed must dominate. Parent presence is a separate issue, MRI is slow and a poor fit for an unstable child, and CT is not the default for a stable child who can have a lower-risk test.",
    "id": 20
  },
  {
    "domain": "foundations",
    "chapter": 3,
    "question": "A parent asks whether a single chest radiograph carries the same radiation as a CT scan. What is the best response?",
    "options": {
      "A": "A chest radiograph usually gives a much smaller dose than CT, and either is used only when justified",
      "B": "A chest radiograph gives a larger dose than CT because the beam is not modulated to body size",
      "C": "Neither study uses ionizing radiation, so no justification or dose consideration is required for a child",
      "D": "Both studies deliver an identical dose, so the choice between them depends only on the scanner's availability"
    },
    "answer": "A",
    "explanation": "Plain chest radiographs deliver far less radiation than CT. The doses are not identical, radiography is not larger than CT, and both use ionizing radiation, so each needs justification and optimization.",
    "id": 21
  },
  {
    "domain": "foundations",
    "chapter": 3,
    "question": "What are the three components of ALARA described for pediatric radiation protection?",
    "options": {
      "A": "Documentation of the dose, referral to a physicist, and cancellation of the study if any risk exists",
      "B": "Sedation of the child, shielding of every radiosensitive organ, and prescription of a contrast agent for every study",
      "C": "Selection of the newest scanner, use of the highest setting, and addition of a second phase",
      "D": "Justification of the test, optimization of protocol and field of view, and management of dose by avoiding repeats"
    },
    "answer": "D",
    "explanation": "ALARA starts with justification, then optimization of protocol and field, then dose management by avoiding repeated imaging, extra phases, and overlap. Sedation and shielding are not the framework, high settings and added phases increase dose, and cancellation of every risky study is not the principle.",
    "id": 22
  },
  {
    "domain": "foundations",
    "chapter": 3,
    "question": "CT scanners report volume CT dose index and dose length product. How should these numbers be interpreted?",
    "options": {
      "A": "They represent the dose to the gonads only and are unrelated to the examined body region",
      "B": "They help compare protocols and detect errors, but they are not a patient's exact effective dose",
      "C": "They are the exact effective dose received by this child and measure individual cancer risk precisely",
      "D": "They are meaningless values that have no use in comparing protocols between departments or scanners"
    },
    "answer": "B",
    "explanation": "CTDIvol and DLP are scanner output metrics useful for protocol comparison and error detection. Effective dose is an estimate for populations, not a precise description of one child's risk. They are useful rather than meaningless, and they do not specify gonadal dose alone.",
    "id": 23
  },
  {
    "domain": "foundations",
    "chapter": 3,
    "question": "What is the best summary of the role of lead shielding in pediatric imaging today?",
    "options": {
      "A": "It is required for ultrasound and MRI because those studies expose the child to scatter radiation",
      "B": "It must always be placed over the entire child because it fully eliminates radiation to every tissue",
      "C": "It can hide anatomy and create artifact, so use should follow the protocol and question, not ritual",
      "D": "It should never be used under any circumstances because it increases the dose to the child"
    },
    "answer": "C",
    "explanation": "Shields can reduce dose to some tissues but also obscure anatomy, create artifact, and give false reassurance, and modern scanners use automatic exposure control. They do not eliminate all radiation, are not never useful in all cases, and are irrelevant to ultrasound and MRI, which use no ionizing radiation.",
    "id": 24
  },
  {
    "domain": "foundations",
    "chapter": 3,
    "question": "Which statement about sedation versus general anesthesia in children is most accurate?",
    "options": {
      "A": "General anesthesia is safer than sedation in every child and requires no fasting or airway assessment",
      "B": "Sedation and anesthesia are identical states, and neither carries any risk in an otherwise healthy child",
      "C": "Sedation is only risky in adolescents because infants naturally protect their airway during sleep",
      "D": "General anesthesia is deeper and anesthesia-managed, and both states carry airway, aspiration, and blood pressure risks"
    },
    "answer": "D",
    "explanation": "General anesthesia is deeper and managed by anesthesia professionals, but both states carry risks including respiratory arrest, aspiration, and low blood pressure, higher in infants and ill children. They are not identical, neither is risk free, and infants are at greater rather than lower airway risk.",
    "id": 25
  },
  {
    "domain": "foundations",
    "chapter": 3,
    "question": "A child woke up after MRI sedation and opened their eyes. What is the most appropriate statement about recovery?",
    "options": {
      "A": "Recovery is complete only when the child is able to eat a full meal in the recovery area",
      "B": "Recovery is the family's responsibility and does not require monitoring after the examination ends",
      "C": "Opening the eyes proves recovery, so the child can leave the department immediately",
      "D": "Recovery requires safe breathing, oxygen saturation, hemodynamics, and alertness, with the ability to maintain the airway"
    },
    "answer": "D",
    "explanation": "Recovery is part of the procedure: breathing, saturation, heart rate, blood pressure, and level of alertness must be safe and the airway maintained. Opening the eyes alone is insufficient, a full meal is not a required endpoint, and monitoring cannot be delegated to the family.",
    "id": 26
  },
  {
    "domain": "foundations",
    "chapter": 3,
    "question": "A child needs CT for suspected abscess. Which statement best reflects safe use of iodinated contrast?",
    "options": {
      "A": "Contrast avoids any risk of allergic reaction when given slowly through a small intravenous line",
      "B": "Contrast is safe in every child, so kidney function and prior reactions need not be reviewed",
      "C": "The team should know why contrast is given and whether a noncontrast study would answer the question",
      "D": "Contrast should be given to every CT study because the order itself already implies the need for enhancement"
    },
    "answer": "C",
    "explanation": "Iodinated contrast adds allergic and kidney risk, so it needs a reason, and a noncontrast study may suffice. A CT order does not automatically require contrast, kidney function and prior reactions must be considered, and slow injection does not prevent reactions.",
    "id": 27
  },
  {
    "domain": "foundations",
    "chapter": 3,
    "question": "Which statement about gadolinium for pediatric MRI is correct?",
    "options": {
      "A": "All gadolinium agents have identical physicochemical properties and safety profiles, so any agent may be chosen freely",
      "B": "The smallest useful dose should be used, and history of reaction, renal disease, and lifetime repeat studies matter",
      "C": "Gadolinium is a radiation-based contrast so its dose must be limited by the ALARA principle alone",
      "D": "Gadolinium should be given for every brain MRI because it improves every sequence equally"
    },
    "answer": "B",
    "explanation": "Gadolinium dose is minimized and agent properties differ, with renal disease, prior reactions, pregnancy, and repeated examinations considered. Gadolinium is not radiation based, agents are not identical, and enhancement helps only some tumors, infections, and inflammatory disease.",
    "id": 28
  },
  {
    "domain": "foundations",
    "chapter": 3,
    "question": "A child develops facial swelling, wheezing, and low blood pressure after contrast. How should this be classified and handled?",
    "options": {
      "A": "A mild reaction that needs only reassurance, because flushing and warmth are expected",
      "B": "A serious reaction needing immediate rescue equipment, a call for help, and documentation",
      "C": "An expected effect of premedication that needs no treatment or documentation in the record",
      "D": "A delayed kidney injury that needs only observation and hydration over the following week"
    },
    "answer": "B",
    "explanation": "Throat or facial swelling, wheezing, and hypotension are serious anaphylactoid features requiring rescue equipment, help, and documentation. Mild reactions are flushing, nausea, or brief warmth. Kidney injury is delayed and unrelated to these immediate signs, and premedication is not a cause of such reactions.",
    "id": 29
  },
  {
    "domain": "foundations",
    "chapter": 3,
    "question": "Which statement about premedication for contrast reactions is most accurate?",
    "options": {
      "A": "It is not a universal solution and should follow local policy and the child's actual risk",
      "B": "It is required for every ultrasound study using a microbubble agent without exception",
      "C": "It completely prevents every contrast reaction and should be given to all children before contrast",
      "D": "It should replace the need for resuscitation equipment in the radiology department"
    },
    "answer": "A",
    "explanation": "Premedication does not remove risk and depends on local policy and the child's actual history. It does not prevent every reaction, is not required for all ultrasound contrast, and cannot replace trained staff and rescue equipment.",
    "id": 30
  },
  {
    "domain": "foundations",
    "chapter": 4,
    "question": "A 9 month old has a lucent line across the distal femur on a radiograph after a fall. What is the most likely explanation if the line lies at the expected site and matches the other side?",
    "options": {
      "A": "A skin fold artifact caused by soft tissue overlying the femur on a rotated projection",
      "B": "A normal growth plate, a cartilaginous line where new bone forms and which can mimic a fracture",
      "C": "A transverse metaphyseal fracture, because any lucent line across a long bone in an infant is an injury",
      "D": "A bone cyst, because lucent lines in the femur of infants represent benign cystic lesions"
    },
    "answer": "B",
    "explanation": "Growth plates are lucent cartilaginous lines in an expected location, symmetric with the opposite side. A fracture would cross the plate, alter alignment, or come with soft tissue swelling. A skin fold would not follow the physis, and a bone cyst would be a focal lesion rather than a symmetric line.",
    "id": 31
  },
  {
    "domain": "foundations",
    "chapter": 4,
    "question": "A 4 month old has a widened mediastinal contour with a lobulated right-sided density but no airway compression and normal clinical state. What is the best interpretation?",
    "options": {
      "A": "A lymphoma of the anterior mediastinum, because any infant mass must be treated as malignant",
      "B": "A pneumothorax, because the sail sign always represents air displacing the lung",
      "C": "A normal thymus, which is large in infants and can project to one side with a sail sign",
      "D": "A teratoma, because a lobulated contour in the mediastinum always indicates calcification"
    },
    "answer": "C",
    "explanation": "The thymus is large and lobulated in infants and shrinks with age, and the sail sign is a normal appearance. Airway compression, calcification, or a clinically unwell child would suggest a true mass. A pneumothorax shows a visceral pleural line with absent lung markings, and teratoma typically contains calcification or fat.",
    "id": 32
  },
  {
    "domain": "foundations",
    "chapter": 4,
    "question": "A crying infant has a few gas-filled bowel loops on a radiograph and no vomiting. What is the best next step?",
    "options": {
      "A": "Review prior films and correlate with the clinical course, since swallowed air during crying can mimic obstruction",
      "B": "Proceed to emergency laparotomy because any dilated bowel loop in an infant means obstruction",
      "C": "Diagnose pneumatosis intestinalis, because bowel gas in a crying child is always intramural gas",
      "D": "Order a CT of the abdomen with oral contrast at once, since radiographs cannot assess gas patterns"
    },
    "answer": "A",
    "explanation": "Gas and fluid change with feeding and crying, and true obstruction shows dilated loops proximal to a transition with a supporting clinical course. Surgery and CT without clinical support are unjustified. Pneumatosis is intramural gas in a sick infant and not a general consequence of crying.",
    "id": 33
  },
  {
    "domain": "foundations",
    "chapter": 4,
    "question": "A child has a small, smooth, rounded bone fragment near the elbow without soft tissue swelling. What is the best interpretation?",
    "options": {
      "A": "An accessory ossification center, a normal variant matching a known pattern and age references",
      "B": "An avulsion fracture, because any bone fragment near a joint represents acute injury",
      "C": "A foreign body, because bone density next to a joint is never normal in children",
      "D": "A loose body from osteochondritis dissecans, because fragments near the elbow are always pathological"
    },
    "answer": "A",
    "explanation": "Accessory ossification centers have smooth rounded margins and match known locations, unlike an avulsion with a sharp displaced edge and overlying swelling. Osteochondritis is a focal articular defect with a loose body, and a foreign body would be radiopaque outside the expected anatomy.",
    "id": 34
  },
  {
    "domain": "foundations",
    "chapter": 4,
    "question": "Which statement best describes plagiocephaly in an infant who sleeps with the head turned to one side?",
    "options": {
      "A": "A sign of hydrocephalus because the head shape changes whenever pressure inside rises",
      "B": "Premature closure of a suture that always requires urgent neurosurgical decompression to prevent damage",
      "C": "Positional skull flattening, which does not carry the meaning of a closed suture raising pressure",
      "D": "A normal finding with no relevance, because flattened areas never occur outside craniosynostosis"
    },
    "answer": "C",
    "explanation": "Plagiocephaly is positional flattening from head position, distinct from craniosynostosis with a fused suture. Premature closure is a different problem, hydrocephalus enlarges the head and widens sutures rather than flattening one area, and flattening can be real and is simply not a closed suture.",
    "id": 35
  },
  {
    "domain": "foundations",
    "chapter": 4,
    "question": "A finding on one poorly positioned radiograph disappears on a technically correct repeat view. What does this suggest?",
    "options": {
      "A": "A contrast reaction, since any change between two images is due to contrast media",
      "B": "A false negative on the second image, because the first image is always more reliable",
      "C": "A technical imitator such as rotation, skin fold, or projection effect, not a proven diagnosis",
      "D": "A subtle fracture that healed within minutes, since any finding that vanishes implies rapid recovery"
    },
    "answer": "C",
    "explanation": "A finding present only on one poor view is likely technical, so it should not be treated as a proven diagnosis. Fractures do not heal in minutes, the correct view is not the less reliable one, and no contrast is involved in plain radiography.",
    "id": 36
  },
  {
    "domain": "foundations",
    "chapter": 4,
    "question": "On ultrasound, a tendon appears dark when the probe is angled across its fibers. What is this artifact called?",
    "options": {
      "A": "Streak artifact, which results from metal or dense contrast and appears on cross-sectional CT",
      "B": "Posterior acoustic enhancement, which occurs behind a fluid-filled structure and brightens deeper tissue",
      "C": "Anisotropy, which disappears when the probe is aligned perpendicular to the tendon fibers",
      "D": "Acoustic shadowing, which occurs behind a stone or gas and hides the deeper tissue"
    },
    "answer": "C",
    "explanation": "Anisotropy makes a tendon look hypoechoic when the beam is not perpendicular to its fibers, and a sonographer re-angles the probe to confirm. Posterior enhancement lies behind fluid, shadowing is behind stone or gas, and streak artifact belongs to CT.",
    "id": 37
  },
  {
    "domain": "foundations",
    "chapter": 4,
    "question": "On a CT of a small child, a lesion changes shape between slices. Which technique best separates a true lesion from partial volume averaging?",
    "options": {
      "A": "Convert the study to a fluoroscopic examination so that the changing lesion shape can be observed in motion",
      "B": "Repeat the CT at a higher dose to make the artifact become more obvious",
      "C": "Review coronal and sagittal reconstructions of the same acquisition to see the lesion in other planes",
      "D": "Add oral contrast, which always eliminates averaging of dense structures within the slice"
    },
    "answer": "C",
    "explanation": "Partial volume effect averages tissue within a slice, and reformats in other planes help show whether a lesion is real. Repeating at higher dose adds radiation without answering the question, fluoroscopy is not a substitute, and oral contrast does not remove averaging.",
    "id": 38
  },
  {
    "domain": "foundations",
    "chapter": 4,
    "question": "When a finding could be a normal variant, which question is part of the practical checklist?",
    "options": {
      "A": "Does the referring clinician prefer a particular diagnosis before the images are described",
      "B": "Has the scanner manufacturer published that this finding is always a normal finding",
      "C": "Would calling it a variant be faster than comparing it with the prior imaging and the opposite side",
      "D": "Does it sit in the expected location and shape for this age and follow a known variant pattern"
    },
    "answer": "D",
    "explanation": "The checklist asks about expected location and shape for age, known pattern, technical explanation, and clinical support, with comparison to the other side and prior imaging when uncertain. Clinician preference, manufacturer claims, and speed are not diagnostic criteria.",
    "id": 39
  },
  {
    "domain": "foundations",
    "chapter": 4,
    "question": "What is the safe approach to reporting a normal variant?",
    "options": {
      "A": "Describe every unusual shape as disease so that nothing is missed in the follow-up",
      "B": "Name the variant, explain its expected behavior, and state features that would make it concerning",
      "C": "Omit any mention of the finding entirely, since normal variants never deserve a place in the final report",
      "D": "Call a real injury a variant whenever the child looks well to avoid parental anxiety"
    },
    "answer": "B",
    "explanation": "Naming the variant and its expected behavior prevents fear and unnecessary tests while preserving vigilance. Calling everything disease causes extra testing and surgery, silent omission loses useful information, and labeling real injury as a variant causes a much worse harm.",
    "id": 40
  },
  {
    "domain": "neuroradiology",
    "chapter": 5,
    "question": "Why can head ultrasound be performed in a premature infant without sedation or radiation?",
    "options": {
      "A": "The skull is fully ossified, which improves sound transmission and gives sharper brain detail",
      "B": "The open anterior fontanelle acts as an acoustic window, allowing bedside repeatable imaging of the brain",
      "C": "The brain is imaged through the orbit, which allows examination without any positioning",
      "D": "Sedation is unnecessary only because premature infants are too weak to move at all during the bedside examination"
    },
    "answer": "B",
    "explanation": "The anterior fontanelle, and sometimes the mastoid region, gives access for ultrasound, so it can be done at the bedside and repeated safely. A fully ossified skull blocks sound, the orbit is not the standard window, and infants can move so cooperation still matters.",
    "id": 41
  },
  {
    "domain": "neuroradiology",
    "chapter": 5,
    "question": "Which finding in a premature infant is a normal low-echogenicity structure that is vulnerable to hemorrhage?",
    "options": {
      "A": "The cisterna magna in the posterior fossa, which varies in size across normal infants",
      "B": "The germinal matrix beside the lateral ventricle, which gradually involutes as the infant matures",
      "C": "The cavum septum pellucidum between the frontal horns, which usually closes during infancy",
      "D": "The choroid plexus within the ventricle, which is normally echogenic and fills the ventricle symmetrically"
    },
    "answer": "B",
    "explanation": "The germinal matrix is a fragile low-echogenicity region beside the ventricles in premature infants. The choroid plexus is echogenic and can be mistaken for hemorrhage, the cavum is a midline fluid space, and the cisterna magna is a posterior fossa cistern.",
    "id": 42
  },
  {
    "domain": "neuroradiology",
    "chapter": 5,
    "question": "Which sequence is most helpful for identifying acute brain injury in a newborn?",
    "options": {
      "A": "T2-weighted imaging alone, because acute injury never produces restricted diffusion",
      "B": "Magnetic resonance spectroscopy alone, because it fully replaces all structural and diffusion-weighted imaging in sick neonates",
      "C": "Diffusion-weighted imaging, which highlights acute ischemic injury, with susceptibility sequences added for blood",
      "D": "Contrast-enhanced angiography only, because all neonatal brain injury is vascular occlusion"
    },
    "answer": "C",
    "explanation": "Diffusion-weighted imaging identifies acute injury, susceptibility sequences detect blood, and vascular sequences show thrombosis or stroke when suspected. T2 alone is insufficient, spectroscopy supplements rather than replaces anatomy, and not all neonatal injury is vascular.",
    "id": 43
  },
  {
    "domain": "neuroradiology",
    "chapter": 5,
    "question": "An 8 month old with a rapidly growing head circumference has prominent subarachnoid spaces and normal development. Which diagnosis fits best?",
    "options": {
      "A": "Holoprosencephaly, where incomplete separation of the forebrain produces a single central ventricle",
      "B": "Communicating hydrocephalus, where raised pressure enlarges the ventricles and the child is usually unwell",
      "C": "Benign enlargement of the subarachnoid spaces, with normally formed brain and usually normal development",
      "D": "Cerebral atrophy, where loss of brain tissue enlarges the extra-axial spaces with developmental regression"
    },
    "answer": "C",
    "explanation": "Benign enlargement of the subarachnoid spaces shows prominent fluid spaces over a normal brain with normal development. Hydrocephalus enlarges the ventricles from pressure, atrophy is tissue loss, and holoprosencephaly is a major structural forebrain malformation.",
    "id": 44
  },
  {
    "domain": "neuroradiology",
    "chapter": 5,
    "question": "A term newborn needs imaging after a suspected large hemorrhage and is unstable. Which modality is the most appropriate first choice?",
    "options": {
      "A": "Plain skull radiography, because it identifies intracranial blood directly in newborns at lower cost",
      "B": "MRI with long sequences under sedation, because it has the highest tissue contrast in every clinical setting",
      "C": "CT, because it is fast and effective in an emergency despite its radiation and lower soft tissue contrast",
      "D": "Nuclear medicine brain scan, because it shows structural hemorrhage with high spatial detail"
    },
    "answer": "C",
    "explanation": "CT is fast and suited to emergencies such as large hemorrhage, accepting radiation and lower soft tissue contrast. A long sedated MRI is inappropriate in an unstable infant, nuclear medicine does not show structural hemorrhage, and skull films do not show brain blood.",
    "id": 45
  },
  {
    "domain": "neuroradiology",
    "chapter": 5,
    "question": "What is the expected direction of normal myelination on MRI?",
    "options": {
      "A": "It occurs uniformly across the whole brain at the same time in the early neonatal period",
      "B": "It begins in the peripheral cortex and progresses inward toward the brainstem and deep periventricular structures",
      "C": "It begins in the brainstem and deep structures and progresses toward the cortex in a predictable pattern",
      "D": "It is complete at birth, so any unmyelinated white matter must indicate a leukodystrophy"
    },
    "answer": "C",
    "explanation": "Myelination follows a predictable sequence from brainstem and deep structures toward the cortex, which allows distinction of delayed myelination from leukodystrophy or injury. It is not cortex first, not uniform, and not complete at birth.",
    "id": 46
  },
  {
    "domain": "neuroradiology",
    "chapter": 5,
    "question": "In a premature infant, a small inferior cerebellar vermis is seen without other abnormality. What is the best interpretation?",
    "options": {
      "A": "Definite cerebellar atrophy, since vermis size cannot change with maturation in premature infants",
      "B": "Definite Dandy-Walker malformation, since any small vermis in infancy confirms the diagnosis",
      "C": "Chiari II malformation, since a small vermis always implies tonsillar descent through the foramen",
      "D": "Possibly normal for gestational age, since true malformation shows brainstem or fourth ventricle abnormality or a compressive cyst"
    },
    "answer": "D",
    "explanation": "The posterior fossa changes with age and gestation, and a small vermis can be normal in a premature infant. True malformations come with an abnormal brainstem, distorted fourth ventricle, or a large compressive cyst. Dandy-Walker, Chiari II, and atrophy need additional features.",
    "id": 47
  },
  {
    "domain": "neuroradiology",
    "chapter": 5,
    "question": "When is MRI most clearly needed after an unexpected head ultrasound pattern in an infant?",
    "options": {
      "A": "Never, since ultrasound is able to display the whole brain including convexity and posterior fossa",
      "B": "Only for infants over two years of age whose fontanelle has closed and cannot be examined",
      "C": "When subtle malformation, white-matter injury, or posterior fossa disease must be assessed once the infant is stable",
      "D": "Only if the infant is sedated, because MRI cannot be performed in a sleeping infant"
    },
    "answer": "C",
    "explanation": "Ultrasound can miss the convexity, posterior fossa, and cortical detail, so MRI is better for subtle malformations and white-matter injury. It does not display the whole brain, and MRI is useful in infants not only after the fontanelle closes.",
    "id": 48
  },
  {
    "domain": "neuroradiology",
    "chapter": 5,
    "question": "Which statement about the cavum septum pellucidum is correct?",
    "options": {
      "A": "It is a normal fluid space between the frontal horns that usually closes during infancy",
      "B": "It is always a sign of a malformation syndrome that requires genetic testing immediately",
      "C": "It is a posterior fossa cyst that compresses the cerebellum and requires neurosurgery",
      "D": "It represents a fluid collection in the subarachnoid space that signals hydrocephalus"
    },
    "answer": "A",
    "explanation": "A cavum septum pellucidum is a normal midline fluid space that usually closes, and a small persistent cavum can be a variant. A large cyst with abnormal midline development may signal a malformation. It is not posterior fossa and not subarachnoid fluid.",
    "id": 49
  },
  {
    "domain": "neuroradiology",
    "chapter": 5,
    "question": "What should be established first when reading a neonatal brain study?",
    "options": {
      "A": "The adult normal appearance of the same sequence, used as the main reference standard",
      "B": "The signal intensity of the white matter only, since cortical appearance varies far too much between preterm infants",
      "C": "The preferred scanner vendor, because acquisition protocols differ too much between the various manufacturers",
      "D": "The infant's corrected gestational age and expected pattern, with birth history and current neurologic examination"
    },
    "answer": "D",
    "explanation": "The first job is to establish age and the expected developing pattern, since a finding normal at 28 weeks may be abnormal at term. Adult scans are the wrong baseline, white matter alone is insufficient, and vendor preference is irrelevant.",
    "id": 50
  },
  {
    "domain": "neuroradiology",
    "chapter": 6,
    "question": "A newborn has an open lumbosacral defect with exposed neural tissue. Which term applies, and which brain malformation is commonly associated?",
    "options": {
      "A": "Myelomeningocele, commonly associated with Chiari II malformation and often hydrocephalus",
      "B": "Lipomyelomeningocele, commonly associated with lissencephaly and a thick smooth cortex",
      "C": "Spinal lipoma, commonly associated with Dandy-Walker malformation and elevated tentorium",
      "D": "Meningocele, commonly associated with agenesis of the corpus callosum and a single ventricle"
    },
    "answer": "A",
    "explanation": "A myelomeningocele is an open neural tube defect with exposed neural tissue, and it is commonly associated with Chiari II malformation. A meningocele contains meninges and fluid without the cord, a lipomyelomeningocele contains fat that tethers the cord, and neither is linked to callosal agenesis or lissencephaly.",
    "id": 51
  },
  {
    "domain": "neuroradiology",
    "chapter": 6,
    "question": "Which imaging features characterize Chiari II malformation?",
    "options": {
      "A": "Low and elongated fourth ventricle, tonsil and vermis descent below the foramen magnum, and a beaked tectum",
      "B": "Parallel separated lateral ventricles and radially arranged gyri around a high-riding and dilated third ventricle",
      "C": "Cleft lined by gray matter extending from the ventricle to the cerebral surface",
      "D": "Large posterior fossa cyst, elevated tentorium, and vermian hypoplasia with a normal brainstem"
    },
    "answer": "A",
    "explanation": "Chiari II shows descent of tonsils and vermis, a low elongated fourth ventricle, and a beak-like tectum, usually with myelomeningocele. The posterior fossa cyst with elevated tentorium describes the Dandy-Walker continuum, parallel ventricles describe callosal agenesis, and the gray-matter-lined cleft is schizencephaly.",
    "id": 52
  },
  {
    "domain": "neuroradiology",
    "chapter": 6,
    "question": "What is the typical imaging appearance of agenesis of the corpus callosum?",
    "options": {
      "A": "A cleft lined by gray matter running from the ventricle to the cortical surface",
      "B": "A single central ventricle with fused thalami and absent separation of the two cerebral hemispheres anteriorly",
      "C": "Parallel, separated lateral ventricles with radial arrangement of the gyri along the medial surface",
      "D": "A thick smooth cortex with too few gyri across the cerebral hemispheres"
    },
    "answer": "C",
    "explanation": "Absence of the callosal bridge leaves parallel separated lateral ventricles and radially oriented gyri. A single ventricle with fused deep structures is holoprosencephaly, a thick smooth cortex is lissencephaly, and a gray-matter-lined cleft is schizencephaly.",
    "id": 53
  },
  {
    "domain": "neuroradiology",
    "chapter": 6,
    "question": "A child with seizures has a gray-matter-lined cleft extending from the lateral ventricle to the brain surface. What is the diagnosis?",
    "options": {
      "A": "Schizencephaly, an abnormal formation that may be open or closed and is lined by gray matter",
      "B": "Lissencephaly, a thick smooth cortex with an abnormally small number of gyri and shallow sulci throughout",
      "C": "Porencephalic cyst, a tissue loss cavity that is usually not lined by gray matter",
      "D": "Polymicrogyria, a cortex with too many small folds but no cleft extending to the ventricle"
    },
    "answer": "A",
    "explanation": "Schizencephaly is a cleft lined by gray matter from ventricle to surface. A porencephalic cyst reflects tissue loss, usually without gray matter lining, lissencephaly is a smooth thick cortex, and polymicrogyria has excess small folds without a full-thickness cleft.",
    "id": 54
  },
  {
    "domain": "neuroradiology",
    "chapter": 6,
    "question": "Which malformation shows gray-matter nodules located beside the ventricles?",
    "options": {
      "A": "Agenesis of the corpus callosum, with parallel ventricles and radial gyral pattern",
      "B": "Holoprosencephaly, an incomplete forebrain separation with a single ventricle in severe forms",
      "C": "Periventricular heterotopia, a neuronal migration disorder that may cause seizures",
      "D": "Dandy-Walker continuum, with posterior fossa fluid and vermian hypoplasia"
    },
    "answer": "C",
    "explanation": "Heterotopia appears as gray-matter nodules in an abnormal location, often beside the ventricles, from failed neuronal migration. Holoprosencephaly, callosal agenesis, and Dandy-Walker are structural disorders of the forebrain, commissure, and posterior fossa without periventricular nodules.",
    "id": 55
  },
  {
    "domain": "neuroradiology",
    "chapter": 6,
    "question": "A fetus has a single ventricle with fused deep gray structures and a midline facial anomaly. What is the most likely diagnosis?",
    "options": {
      "A": "Chiari I malformation, with tonsillar descent through the foramen magnum and a possible syrinx",
      "B": "Holoprosencephaly, an incomplete separation of the forebrain with severity from mild to severe",
      "C": "Dandy-Walker continuum, with a large fluid collection in the posterior fossa and elevated tentorium",
      "D": "Lissencephaly, a smooth thick cortex with seizures and developmental delay"
    },
    "answer": "B",
    "explanation": "Holoprosencephaly is incomplete forebrain separation, severe forms show a single ventricle and fused deep structures, and the face may be affected. Chiari I is a tonsillar descent, lissencephaly is a cortical malformation, and Dandy-Walker involves the posterior fossa.",
    "id": 56
  },
  {
    "domain": "neuroradiology",
    "chapter": 6,
    "question": "In which condition are the cerebellar tonsils defined as descending through the foramen magnum, with symptoms and a syrinx weighing more than the measurement?",
    "options": {
      "A": "Chiari I malformation, assessed for degree of descent, crowding of CSF spaces, syrinx, and hydrocephalus",
      "B": "Chiari II malformation, which always accompanies myelomeningocele and a beaked tectum",
      "C": "Enlarged cisterna magna, which has a normal vermis and a normal fourth ventricle",
      "D": "Dandy-Walker malformation, which has a large posterior fossa cyst, an elevated tentorium, and a hypoplastic vermis"
    },
    "answer": "A",
    "explanation": "Chiari I is defined by tonsillar descent, with syrinx and symptoms mattering more than the number. Chiari II involves the vermis, a low fourth ventricle, and myelomeningocele, Dandy-Walker alters the fourth ventricle and vermis, and an enlarged cisterna magna leaves the cerebellar anatomy normal.",
    "id": 57
  },
  {
    "domain": "neuroradiology",
    "chapter": 6,
    "question": "An infant has a sacral dimple and a hair tuft over the lower back. What is the best first imaging test?",
    "options": {
      "A": "Plain radiography of the lumbar spine, because it directly shows the conus and filum",
      "B": "Brain MRI only, since spinal markers always reflect a cortical malformation of the brain",
      "C": "Spinal CT with intrathecal contrast, because ultrasound cannot show the cord in any infant",
      "D": "Spinal ultrasound, since the posterior elements are not fully ossified in a young infant"
    },
    "answer": "D",
    "explanation": "Ultrasound can screen a young infant for occult dysraphism through the unossified posterior elements, and MRI is used for defining a tethering lesion, syrinx, or complex malformation. CT with intrathecal contrast is excessive, radiographs do not show the cord, and a brain MRI does not evaluate the spinal cord.",
    "id": 58
  },
  {
    "domain": "neuroradiology",
    "chapter": 6,
    "question": "A low conus medullaris is seen in a young infant. When does it indicate tethering?",
    "options": {
      "A": "Always, because any conus below the first lumbar level must be treated surgically",
      "B": "Never, because a low conus medullaris is always a normal variant in every infant regardless of other findings",
      "C": "When accompanied by other findings such as a thickened filum, lipoma, or abnormal cord motion",
      "D": "Only if the infant has a skin dimple, because tethering cannot be diagnosed on imaging"
    },
    "answer": "C",
    "explanation": "A low conus can be normal in early development and may rise as the child grows, so tethering needs additional findings such as a thickened filum, lipoma, or abnormal cord motion. A low conus alone is not always tethering, but it is also not always benign when accompanied by other findings.",
    "id": 59
  },
  {
    "domain": "neuroradiology",
    "chapter": 6,
    "question": "How should a malformation report be structured for the care team?",
    "options": {
      "A": "As a prediction of the child's exact developmental outcome based solely on the appearance",
      "B": "As a short note stating that the findings are congenital with no recommendation for follow-up",
      "C": "As a clear anatomical map of present and missing structures, fluid collections, brainstem distortion, and hydrocephalus",
      "D": "As a list of syndrome names without any anatomical description so that nothing is mislabeled"
    },
    "answer": "C",
    "explanation": "A report should describe the anatomy, state whether the finding is isolated or part of a syndrome, mention hydrocephalus, brainstem compression, and airway or feeding risk, and recommend genetic or developmental follow-up. A list of scary labels is not enough, imaging cannot predict exact outcome, and follow-up is often appropriate.",
    "id": 60
  },
  {
    "domain": "neuroradiology",
    "chapter": 7,
    "question": "A term infant with prolonged partial hypoxia during labor has MRI at several days of life. Which injury pattern is most expected?",
    "options": {
      "A": "Isolated cerebellar hemisphere hemorrhage compressing the fourth ventricle and obstructing outflow",
      "B": "Parasagittal watershed injury between the anterior, middle, and posterior cerebral artery territories",
      "C": "Selective injury confined to the basal ganglia and thalami on both sides",
      "D": "Germinal matrix hemorrhage with extension into the lateral ventricles at the level of the caudothalamic groove"
    },
    "answer": "B",
    "explanation": "Partial, prolonged insults in term infants injure the watershed zones between arterial territories. Selective basal ganglia and thalamic injury is typical of a sudden severe insult instead. Germinal matrix hemorrhage is a preterm lesion, and cerebellar hemorrhage is a separate complication of prematurity.",
    "id": 61
  },
  {
    "domain": "neuroradiology",
    "chapter": 7,
    "question": "A 28-week premature infant has a focal echogenic area at the caudothalamic groove on day 3 ultrasound, with no blood in the ventricle. What is the diagnosis?",
    "options": {
      "A": "Periventricular leukomalacia with early cystic change in the deep white matter",
      "B": "Choroid plexus cyst, a benign incidental finding that needs no follow-up",
      "C": "Subependymal germinal matrix hemorrhage confined to the matrix without ventricular extension",
      "D": "Cerebellar hemorrhage from posterior fossa venous infarction in a premature infant with apnea and bradycardia"
    },
    "answer": "C",
    "explanation": "The germinal matrix lies beside the lateral ventricles and bleeds first in premature infants, giving an echogenic focus at the caudothalamic groove. Leukomalacia involves white matter away from the groove and evolves to cysts later. A choroid plexus cyst lies within the ventricle, and cerebellar hemorrhage is in the posterior fossa.",
    "id": 62
  },
  {
    "domain": "neuroradiology",
    "chapter": 7,
    "question": "Which MRI technique can show acute cellular swelling in an encephalopathic term neonate before conventional sequences show a clear change?",
    "options": {
      "A": "Diffusion-weighted imaging showing restricted diffusion in the injured tissue",
      "B": "Contrast-enhanced T1 imaging showing leptomeningeal enhancement over the brain surface",
      "C": "Susceptibility-weighted imaging showing blood products within the injured regions",
      "D": "Late T2-weighted imaging showing established high signal in the deep gray nuclei"
    },
    "answer": "A",
    "explanation": "Diffusion restriction reflects acute cytotoxic swelling and appears early. Susceptibility imaging detects blood, which is not the early marker of swelling. High T2 signal in the deep nuclei appears later, and leptomeningeal enhancement points to meningitis, not hypoxic-ischemic injury.",
    "id": 63
  },
  {
    "domain": "neuroradiology",
    "chapter": 7,
    "question": "On follow-up ultrasound of an infant with intraventricular hemorrhage, what is most important to document beyond restating the clot appearance?",
    "options": {
      "A": "Ventricular size measurements and whether enlargement is progressing toward hydrocephalus",
      "B": "The exact numeric grade, because management depends only on the grade assigned",
      "C": "Whether the anterior fontanelle appears open or bulging, as a stand-in for measured intracranial pressure",
      "D": "Only the echogenicity of the clot, which determines timing of cooling therapy"
    },
    "answer": "A",
    "explanation": "Ventricular size can change even when the clot looks the same, and the neurosurgical team needs a clear statement of progressive hydrocephalus. The grade matters less than the whole picture. Clot echogenicity does not drive cooling decisions, and fontanelle patency does not measure pressure.",
    "id": 64
  },
  {
    "domain": "neuroradiology",
    "chapter": 7,
    "question": "A premature infant has apnea and bradycardia, and the routine head ultrasound looks normal, yet cerebellar hemorrhage is suspected. What is the best next step?",
    "options": {
      "A": "MRI or dedicated posterior fossa sonographic views, such as imaging through the mastoid window",
      "B": "Repeat the same anterior fontanelle coronal and sagittal views in one week",
      "C": "Skull radiographs to look for sutural widening from raised pressure",
      "D": "Contrast-enhanced head CT used routinely as first-line imaging in every premature infant with apnea"
    },
    "answer": "A",
    "explanation": "The posterior fossa is hard to see through the anterior fontanelle, so cerebellar hemorrhage is easily missed on routine views. MRI or dedicated posterior views solve this. Repeating the same views repeats the blind spot, skull films cannot show hemorrhage, and routine CT adds radiation without being the targeted solution.",
    "id": 65
  },
  {
    "domain": "neuroradiology",
    "chapter": 7,
    "question": "A term infant has seizures on day 2. Diffusion-weighted MRI shows restricted diffusion confined to the left middle cerebral artery territory. What is the most likely diagnosis?",
    "options": {
      "A": "Herpes simplex encephalitis predominantly involving the temporal lobes on both sides",
      "B": "Parasagittal watershed injury from prolonged partial hypoxia in both hemispheres",
      "C": "Perinatal arterial ischemic infarct in a single middle cerebral artery territory",
      "D": "Sinovenous thrombosis with bilateral thalamic venous infarction and hemorrhage"
    },
    "answer": "C",
    "explanation": "An infarct restricted to one large arterial territory with early diffusion restriction fits perinatal arterial stroke. Venous thrombosis would show a filling defect and often bilateral or deep involvement. Herpes encephalitis follows a temporal and frontal pattern, and watershed injury lies between territories on both sides.",
    "id": 66
  },
  {
    "domain": "neuroradiology",
    "chapter": 7,
    "question": "A neonate with seizures has susceptibility signal near a dural sinus. Which finding confirms sinovenous thrombosis?",
    "options": {
      "A": "Wedge-shaped restricted diffusion limited to a single arterial vascular territory",
      "B": "Loss of gray-white differentiation on early noncontrast head CT",
      "C": "A venographic filling defect in the affected dural venous sinus or vein",
      "D": "Echogenic focus at the caudothalamic groove on cranial ultrasound"
    },
    "answer": "C",
    "explanation": "Venography shows the thrombus as a filling defect, confirming a venous cause. Restricted diffusion in an arterial territory describes arterial stroke. A caudothalamic echogenic focus is germinal matrix hemorrhage, and loss of gray-white distinction describes diffuse injury, not a sinus thrombus.",
    "id": 67
  },
  {
    "domain": "neuroradiology",
    "chapter": 7,
    "question": "Which report term is broader than hypoxic-ischemic encephalopathy and suitable when the mechanism of newborn brain injury is uncertain?",
    "options": {
      "A": "Perinatal brain injury, covering many mechanisms beyond hypoxia and ischemia alone",
      "B": "Periventricular leukomalacia, which describes injury limited to preterm periventricular white matter",
      "C": "Intraventricular hemorrhage, which simply describes blood within the ventricles of the infant",
      "D": "Germinal matrix hemorrhage, which describes bleeding at the caudothalamic groove in premature infants"
    },
    "answer": "A",
    "explanation": "Perinatal injury includes infection, metabolic disease, stroke, and hemorrhage as well as hypoxia-ischemia. Intraventricular hemorrhage names only blood in the ventricles. Leukomalacia and germinal matrix hemorrhage are specific preterm lesions, not broader umbrella terms.",
    "id": 68
  },
  {
    "domain": "neuroradiology",
    "chapter": 7,
    "question": "Which condition can produce deep gray nuclear swelling and restricted diffusion similar to hypoxic-ischemic injury, so the clinical story must be used?",
    "options": {
      "A": "Normal myelination of the posterior limb of the internal capsule in a term infant",
      "B": "Uncomplicated periventricular echogenicity in a preterm infant that resolves on follow-up",
      "C": "Isolated grade one germinal matrix hemorrhage in a premature infant with a stable examination",
      "D": "Metabolic disease or infection with bilateral deep gray swelling and restricted diffusion"
    },
    "answer": "D",
    "explanation": "Metabolic disease, infection, and stroke can all mimic a hypoxic-ischemic pattern, which is why cord gas results, seizure history, and the perinatal timeline matter. A small matrix hemorrhage, transient periventricular echogenicity, and normal myelination do not cause deep gray restricted diffusion.",
    "id": 69
  },
  {
    "domain": "neuroradiology",
    "chapter": 7,
    "question": "A term infant has a severe sudden perinatal insult. Which MRI finding is most typical at around one week?",
    "options": {
      "A": "Blood confined to the germinal matrix with a smooth caudothalamic echogenic focus",
      "B": "Wedge-shaped cortical loss in a single large vessel territory with ex vacuo ventricular dilation",
      "C": "A filling defect in the superior sagittal sinus with surrounding venous hemorrhage",
      "D": "Swelling and restricted diffusion in the basal ganglia and thalami, with later high T2 signal"
    },
    "answer": "D",
    "explanation": "Sudden severe insult injures the metabolically active deep gray nuclei, with swelling and restricted diffusion early and high T2 signal later. A single territory wedge describes arterial stroke, matrix hemorrhage is preterm, and a sinus filling defect describes venous thrombosis.",
    "id": 70
  },
  {
    "domain": "neuroradiology",
    "chapter": 8,
    "question": "A child with fever, altered mental state, and focal seizures has MRI showing temporal and inferior frontal swelling with restricted diffusion. What is the most likely diagnosis?",
    "options": {
      "A": "Congenital cytomegalovirus infection with periventricular calcification and white matter change",
      "B": "Acute disseminated encephalomyelitis with multiple large poorly defined white matter lesions",
      "C": "Herpes simplex encephalitis involving the temporal and inferior frontal lobes",
      "D": "Pyogenic abscess with a smooth enhancing rim surrounded by vasogenic edema"
    },
    "answer": "C",
    "explanation": "Temporal and inferior frontal swelling with early diffusion restriction is the classic herpes pattern, and treatment should not wait for a perfect image. ADEM produces multifocal lesions after a viral illness. An abscess has a ring of enhancement, and congenital cytomegalovirus is a perinatal disease with periventricular calcification.",
    "id": 71
  },
  {
    "domain": "neuroradiology",
    "chapter": 8,
    "question": "A toddler with meningitis has a subdural collection showing thick marginal enhancement and restricted diffusion within the fluid. What is the best description?",
    "options": {
      "A": "Subdural empyema, a pus collection with enhancing margins and internal restricted diffusion",
      "B": "Chronic subdural hematoma, a collection with layered blood products and no marginal enhancement",
      "C": "Subdural hygroma, a simple fluid collection that follows cerebrospinal fluid signal",
      "D": "Ventriculitis, with ependymal enhancement and debris within the lateral ventricles"
    },
    "answer": "A",
    "explanation": "Pus restricts diffusion and the inflamed membranes enhance, so this is empyema. A hygroma follows CSF without restriction or enhancement. A chronic hematoma shows blood products without marginal enhancement, and ventriculitis lies in the ventricles, not the subdural space.",
    "id": 72
  },
  {
    "domain": "neuroradiology",
    "chapter": 8,
    "question": "A child with a ventricular shunt has fever, and imaging shows ventricular debris, septations, and a fluid level. What is the most likely complication?",
    "options": {
      "A": "Ventriculitis, with the catheter tract and any trapped ventricle needing review",
      "B": "Acute bacterial meningitis with subtle leptomeningeal enhancement and normal ventricles",
      "C": "Acute disseminated encephalomyelitis with bilateral brainstem and white matter lesions",
      "D": "Sinovenous thrombosis with a filling defect in the superior sagittal sinus"
    },
    "answer": "A",
    "explanation": "Debris, septations, and fluid levels in the ventricles of a child with a drain or shunt indicate ventriculitis. Meningitis may be subtle and does not give intraventricular debris. Venous thrombosis and ADEM have different imaging patterns and no link to hardware.",
    "id": 73
  },
  {
    "domain": "neuroradiology",
    "chapter": 8,
    "question": "A child with frontal sinusitis develops a frontal lobe lesion next to the sinus with ring enhancement and surrounding edema. What route of spread is suggested?",
    "options": {
      "A": "Direct spread from the adjacent infected sinus, forming a cerebral abscess",
      "B": "Postinfectious immune-mediated inflammation producing multifocal white matter lesions",
      "C": "Spread through the cerebrospinal fluid producing diffuse leptomeningeal enhancement",
      "D": "Hematogenous seeding from distant embolic disease producing many small cortical lesions"
    },
    "answer": "A",
    "explanation": "A lesion beside an infected sinus suggests direct extension. Many small cortical lesions would suggest embolic or hematogenous disease. CSF spread gives diffuse meningeal enhancement, and an immune-mediated process like ADEM produces multifocal white matter change.",
    "id": 74
  },
  {
    "domain": "neuroradiology",
    "chapter": 8,
    "question": "An unstable child with suspected bacterial meningitis and a focal neurologic deficit needs rapid imaging. What is the usual first study and its limitation?",
    "options": {
      "A": "Head CT, which shows hydrocephalus, edema, infarction, or hemorrhage but may be normal early",
      "B": "Skull radiography, which shows meningeal inflammation in the first hours",
      "C": "Contrast MRI of the spine, which excludes meningitis if it is normal",
      "D": "Cranial ultrasound through the mastoid window, which is the standard first test for any age group"
    },
    "answer": "A",
    "explanation": "CT is fast and shows complications such as hydrocephalus and hemorrhage, though it may be normal early, so a normal CT does not exclude infection. Spinal MRI does not exclude cranial meningitis. Skull films and a mastoid ultrasound cannot show meningeal disease.",
    "id": 75
  },
  {
    "domain": "neuroradiology",
    "chapter": 8,
    "question": "Which finding on imaging best separates a cerebral abscess from a tumor of similar size?",
    "options": {
      "A": "Location in the frontal lobe, since tumors do not occur adjacent to the sinuses",
      "B": "Absence of any enhancement at all, since abscesses never enhance after contrast administration",
      "C": "Presence of surrounding vasogenic edema alone, since tumors never produce edema around a mass of similar size",
      "D": "Restricted diffusion within the cavity along with a ring of enhancement and the clinical infection history"
    },
    "answer": "D",
    "explanation": "An abscess typically has restricted diffusion within the pus and a ring of enhancement, and the clinical history helps. Edema occurs with tumors too. Location is not exclusive, and abscess walls do enhance.",
    "id": 76
  },
  {
    "domain": "neuroradiology",
    "chapter": 8,
    "question": "A child develops multiple large, poorly defined brain and spinal cord lesions two weeks after a viral illness. Which diagnosis is most likely?",
    "options": {
      "A": "Acute disseminated encephalomyelitis, though infection must be excluded with history and laboratory testing",
      "B": "Herpes simplex encephalitis confined to the temporal lobes and inferior frontal lobes",
      "C": "Congenital toxoplasmosis with scattered periventricular calcifications throughout the brain parenchyma and hydrocephalus",
      "D": "Bacterial ventriculitis with ependymal enhancement and intraventricular debris"
    },
    "answer": "A",
    "explanation": "ADEM causes multifocal brain and cord lesions after a viral illness or vaccination, and clinical and laboratory data exclude infection. Herpes is a focal temporal process. Congenital toxoplasmosis is a perinatal infection with calcification, and ventriculitis is confined to the ventricles.",
    "id": 77
  },
  {
    "domain": "neuroradiology",
    "chapter": 8,
    "question": "A newborn has periventricular calcification, white matter change, and microcephaly. Which congenital infection most often shows a periventricular distribution?",
    "options": {
      "A": "Herpes simplex, which characteristically produces temporal and inferior frontal injury rather than periventricular calcification",
      "B": "Group B streptococcal meningitis, which characteristically produces leptomeningeal enhancement and complications rather than calcification",
      "C": "Cytomegalovirus, which commonly affects the periventricular region of the developing brain",
      "D": "Toxoplasmosis, which characteristically produces scattered calcifications rather than a periventricular predominance"
    },
    "answer": "C",
    "explanation": "Cytomegalovirus often affects the periventricular region, while toxoplasmosis shows scattered calcifications. Herpes favors the temporal and inferior frontal lobes, and bacterial meningitis shows meningeal enhancement and complications, not calcification.",
    "id": 78
  },
  {
    "domain": "neuroradiology",
    "chapter": 8,
    "question": "A teenager has new psychiatric symptoms and seizures, and the MRI is normal. What is the correct interpretation?",
    "options": {
      "A": "A normal MRI excludes autoimmune encephalitis and strongly supports a primary psychiatric diagnosis alone",
      "B": "A normal MRI confirms herpes encephalitis, which spares the conventional sequences",
      "C": "A normal MRI indicates acute disseminated encephalomyelitis in its earliest stage",
      "D": "A normal MRI does not exclude an immune-mediated encephalitis such as NMDAR antibody disease"
    },
    "answer": "D",
    "explanation": "Some children with MOG or NMDAR antibody disease have normal early MRI, so a normal scan does not rule it out and follow-up and antibody testing matter. A normal MRI does not exclude autoimmune disease, and neither herpes nor ADEM is confirmed by it.",
    "id": 79
  },
  {
    "domain": "neuroradiology",
    "chapter": 8,
    "question": "Which imaging pattern suggests ventricular obstruction in a child with intracranial infection?",
    "options": {
      "A": "Hydrocephalus or a trapped ventricle with localized fluid enlargement",
      "B": "Multiple calcifications in the basal ganglia with a normal ventricular system",
      "C": "Symmetric loss of gray-white differentiation with normal ventricular size",
      "D": "Isolated thickening of the scalp with a normal brain and normal ventricles"
    },
    "answer": "A",
    "explanation": "Hydrocephalus and trapped fluid signal obstruction of CSF pathways after infection. Diffuse loss of gray-white differentiation with normal ventricles suggests global injury. Scalp thickening and basal ganglia calcifications do not describe CSF obstruction.",
    "id": 80
  },
  {
    "domain": "neuroradiology",
    "chapter": 9,
    "question": "A 5-year-old has headache and vomiting. MRI shows a cerebellar vermian mass filling the fourth ventricle with restricted diffusion and enhancement. What is the most likely diagnosis?",
    "options": {
      "A": "Ependymoma, a plastic mass arising from the floor of the fourth ventricle",
      "B": "Pilocytic astrocytoma, a cystic cerebellar mass with an enhancing mural nodule and usually favorable behavior",
      "C": "Medulloblastoma, which requires spinal imaging and staging for cerebrospinal fluid spread",
      "D": "Diffuse midline glioma, an infiltrative expansile lesion of the brainstem"
    },
    "answer": "C",
    "explanation": "A vermian mass filling the fourth ventricle with restricted diffusion is medulloblastoma, and CSF spread makes spinal staging necessary. Pilocytic astrocytoma is cystic with a mural nodule. Ependymoma arises from the floor and squeezes through the ventricular openings, and diffuse midline glioma expands the brainstem diffusely.",
    "id": 81
  },
  {
    "domain": "neuroradiology",
    "chapter": 9,
    "question": "A child has a cerebellar hemispheric cystic mass with an enhancing mural nodule and hydrocephalus. What is the most likely diagnosis?",
    "options": {
      "A": "Pilocytic astrocytoma, which has a characteristic appearance but still requires tissue confirmation",
      "B": "Craniopharyngioma, which occurs in the sellar and suprasellar region",
      "C": "Germ cell tumor, which occurs in the pineal or suprasellar region",
      "D": "Medulloblastoma, which usually restricts diffusion, arises in the vermis, and fills the fourth ventricle"
    },
    "answer": "A",
    "explanation": "A cystic cerebellar mass with an enhancing mural nodule is the classic pilocytic astrocytoma pattern. Medulloblastoma is usually a solid vermian mass with restricted diffusion. Craniopharyngioma and germ cell tumors are midline sellar, suprasellar, or pineal lesions.",
    "id": 82
  },
  {
    "domain": "neuroradiology",
    "chapter": 9,
    "question": "What are the first two questions that narrow the differential of a pediatric brain tumor?",
    "options": {
      "A": "Where the mass is located in the brain and how old the child is",
      "B": "Which molecular subtype it is and which genetic syndrome the family has",
      "C": "Whether it calcifies and whether the lesion appears cystic on ultrasound",
      "D": "Whether contrast enhances it and whether surgery is possible in the child"
    },
    "answer": "A",
    "explanation": "Location and age narrow the differential before contrast or surgery. Molecular subtype cannot be assigned from conventional MRI. Enhancement, calcification, and cysts are part of the later description of the mass.",
    "id": 83
  },
  {
    "domain": "neuroradiology",
    "chapter": 9,
    "question": "A 3-year-old has an irregular posterior fossa mass arising from the floor of the fourth ventricle and extending through its openings. What is the likely tumor?",
    "options": {
      "A": "Craniopharyngioma, which characteristically occurs in the suprasellar region with calcification",
      "B": "Ependymoma, which can extend through the foramina and has CSF dissemination as a staging concern",
      "C": "Medulloblastoma, which characteristically arises in the vermis, fills the fourth ventricle, and restricts diffusion",
      "D": "Pilocytic astrocytoma, which characteristically forms a cyst with a mural nodule"
    },
    "answer": "B",
    "explanation": "Ependymoma squeezes through the fluid pathways as a plastic mass from the ventricular floor. Medulloblastoma arises in the vermis, pilocytic astrocytoma is a cyst plus nodule, and craniopharyngioma is suprasellar.",
    "id": 84
  },
  {
    "domain": "neuroradiology",
    "chapter": 9,
    "question": "A child with visual loss and endocrine dysfunction has a suprasellar mass with cysts, calcification, and solid components. What is the likely diagnosis?",
    "options": {
      "A": "Medulloblastoma metastasis with spread along the cerebrospinal fluid pathways",
      "B": "Craniopharyngioma, compressing the optic pathways and pituitary region",
      "C": "Intramedullary spinal ependymoma with an associated syrinx and cord expansion",
      "D": "Pineal germ cell tumor with fat, blood, and calcification in the pineal region"
    },
    "answer": "B",
    "explanation": "Cystic, calcified suprasellar masses with visual and endocrine symptoms fit craniopharyngioma. A germ cell tumor is more typically pineal, medulloblastoma is a posterior fossa tumor, and spinal ependymoma is an intramedullary spinal lesion.",
    "id": 85
  },
  {
    "domain": "neuroradiology",
    "chapter": 9,
    "question": "A child presents with hydrocephalus and a pineal region mass. Staging should include which additional step?",
    "options": {
      "A": "Spine imaging and CSF assessment, because germ cell tumors can spread along the CSF",
      "B": "Chest CT angiography, because these tumors usually arise from the aortic arch",
      "C": "Facial bone CT, because pineal tumors usually spread through the sinuses",
      "D": "Orbital imaging, because pineal tumors usually arise in the optic nerve and spread along it"
    },
    "answer": "A",
    "explanation": "Germ cell tumors in the pineal or suprasellar region can spread along the CSF, so staging includes the spine and CSF. They do not usually involve the orbit, aortic arch, or sinuses.",
    "id": 86
  },
  {
    "domain": "neuroradiology",
    "chapter": 9,
    "question": "Why is acute hydrocephalus from a small posterior fossa tumor an emergency?",
    "options": {
      "A": "It is a normal expected finding that resolves without any treatment or imaging",
      "B": "It can cause dangerous pressure effects regardless of how small the obstructing tumor appears",
      "C": "It always means the tumor is malignant and requires immediate radiation planning before any imaging",
      "D": "It always means the tumor has spread to the spine and cannot be resected"
    },
    "answer": "B",
    "explanation": "Blockage of CSF flow can produce acute pressure even when the tumor looks small, so the report must state whether acute pressure is present. Hydrocephalus does not prove malignancy or spinal spread, and it is not a benign finding.",
    "id": 87
  },
  {
    "domain": "neuroradiology",
    "chapter": 9,
    "question": "A child has a spinal cord mass that expands the cord and produces a syrinx. Which compartment and tumors are most likely?",
    "options": {
      "A": "Extramedullary tumors, such as nerve sheath tumors arising from the nerve roots",
      "B": "Extradural tumors that arise from bone marrow within the vertebral bodies and compress the cord",
      "C": "Intramedullary tumors, such as ependymoma or astrocytoma, within the spinal cord",
      "D": "Leptomeningeal disease from spinal canal infection with no cord expansion"
    },
    "answer": "C",
    "explanation": "A mass that expands the cord and causes a syrinx is intramedullary, and ependymoma and astrocytoma are the important possibilities. Extradural tumors lie outside the dura, and nerve root or meningeal tumors are extramedullary. Infection would not typically create a primary cord mass.",
    "id": 88
  },
  {
    "domain": "neuroradiology",
    "chapter": 9,
    "question": "A child with a diagnosed medulloblastoma has a negative spine MRI. How should this be interpreted?",
    "options": {
      "A": "It excludes CSF dissemination permanently, so no further staging or clinical review is ever needed",
      "B": "It does not replace clinical staging, and new back pain or weakness still needs prompt review",
      "C": "It excludes hydrocephalus, so ventricular size no longer needs to be reported",
      "D": "It proves the tumor is benign, so follow-up imaging is unnecessary afterward"
    },
    "answer": "B",
    "explanation": "A negative spine image does not replace clinical staging, and symptoms such as back pain, bowel or bladder change, or weakness need review for cord compression or spread. It cannot prove permanent absence of dissemination, benign biology, or normal ventricles.",
    "id": 89
  },
  {
    "domain": "neuroradiology",
    "chapter": 9,
    "question": "Which statement about diffuse midline glioma on conventional MRI is most accurate?",
    "options": {
      "A": "It always has a sharp border and a clear cleavage plane from the surrounding brainstem tissue",
      "B": "It always arises only in the pineal region with calcification and fat",
      "C": "It always presents as a cystic cerebellar mass with an enhancing mural nodule",
      "D": "It can be diffuse and infiltrative, and MRI cannot identify every molecular subtype"
    },
    "answer": "D",
    "explanation": "Diffuse midline glioma infiltrates the brainstem, thalamus, or spinal cord without a clear border, and the report should not claim molecular certainty. Sharp borders are not typical, the cystic nodule pattern is pilocytic astrocytoma, and pineal calcification describes germ cell tumors.",
    "id": 90
  },
  {
    "domain": "head_neck",
    "chapter": 10,
    "question": "A 3-year-old has fever, drooling, muffled voice, and stridor. What is the priority before further imaging?",
    "options": {
      "A": "Lateral neck radiograph with the child supine, to confirm the diagnosis before intervention",
      "B": "MRI of the neck under sedation, to define soft tissues before the team assembles",
      "C": "Contrast-enhanced computed tomography of the neck with the child supine, so the collection is defined before airway planning",
      "D": "Airway stabilization with specialist involvement, avoiding forcing the child to lie flat or wait for a prolonged study"
    },
    "answer": "D",
    "explanation": "Stridor, drooling, and a muffled voice suggest obstruction, so the airway comes first and the child should not be laid flat or sent for a long study. Immediate CT, supine radiography, or sedated MRI each delay or endanger an unstable airway.",
    "id": 91
  },
  {
    "domain": "head_neck",
    "chapter": 10,
    "question": "A child holds the neck extended, has fever, and refuses to swallow. CT shows a low-density collection between the pharynx and prevertebral fascia. What is the diagnosis?",
    "options": {
      "A": "Infectious cervical lymphadenitis, with an enlarged node of preserved shape",
      "B": "Retropharyngeal abscess, with the collection relation to the airway and vessels described",
      "C": "Ludwig angina, with submandibular and sublingual space involvement and gas",
      "D": "Peritonsillar abscess, usually diagnosed clinically as a collection in the tonsillar fossa with uvular deviation"
    },
    "answer": "B",
    "explanation": "A collection between the pharynx and the prevertebral fascia is a retropharyngeal abscess. Peritonsillar abscess is in the tonsillar region, Ludwig angina involves the submandibular and sublingual spaces, and lymphadenitis is a node, not a space collection.",
    "id": 92
  },
  {
    "domain": "head_neck",
    "chapter": 10,
    "question": "A toddler had a choking episode. The chest radiograph looks normal, but one lung stays hyperinflated on expiratory view. What is the best next step?",
    "options": {
      "A": "Routine follow-up radiograph in several weeks, since the finding is almost always benign",
      "B": "Reassurance and discharge home, since a normal inspiratory radiograph excludes an aspirated foreign body in the airway",
      "C": "Neck ultrasound, since foreign bodies in the airway are readily seen sonographically",
      "D": "Urgent airway assessment for a nonradiopaque foreign body, since a normal radiograph does not exclude it"
    },
    "answer": "D",
    "explanation": "Many aspirated objects are not radiopaque, and unilateral air trapping or mediastinal shift on inspiratory and expiratory views should prompt urgent airway assessment. A normal film does not exclude a foreign body, waiting delays treatment, and ultrasound does not image the airway.",
    "id": 93
  },
  {
    "domain": "head_neck",
    "chapter": 10,
    "question": "A child with barking cough and stridor has a frontal neck radiograph showing symmetric subglottic narrowing. What is this finding called and what is the diagnosis?",
    "options": {
      "A": "Scimitar sign, indicating partial anomalous pulmonary venous return into the vena cava",
      "B": "Spinnaker sail sign, indicating a normal anterior mediastinal thymus in infancy",
      "C": "Thumb sign, indicating epiglottitis with a swollen epiglottis blocking the airway",
      "D": "Steeple sign, indicating croup with symmetric subglottic narrowing"
    },
    "answer": "D",
    "explanation": "Symmetric subglottic narrowing is the steeple sign of croup. The thumb sign describes a swollen epiglottis and is clinical, the scimitar sign belongs to chest anomalies, and the sail sign describes the normal thymus.",
    "id": 94
  },
  {
    "domain": "head_neck",
    "chapter": 10,
    "question": "Which statement about suspected epiglottitis is most accurate?",
    "options": {
      "A": "Contrast CT with the child supine is mandatory before the airway is secured by anesthesia",
      "B": "The diagnosis is clinical and airway management must not be delayed for imaging",
      "C": "MRI is required before any decision about the airway can be made",
      "D": "A normal lateral radiograph excludes the diagnosis and permits discharge"
    },
    "answer": "B",
    "explanation": "Epiglottitis is diagnosed clinically, and airway management should not wait for imaging. Supine CT or MRI delays airway control, and a normal film does not exclude disease.",
    "id": 95
  },
  {
    "domain": "head_neck",
    "chapter": 10,
    "question": "A child with ethmoid sinusitis develops proptosis, painful eye movement, and reduced visual acuity. Which diagnosis is most concerning?",
    "options": {
      "A": "Preseptal cellulitis, confined in front of the orbital septum without proptosis",
      "B": "Postseptal orbital cellulitis, with possible abscess or intracranial extension",
      "C": "Retinoblastoma, with intraocular calcification in a young child",
      "D": "Venous malformation, with slow enlargement across several spaces"
    },
    "answer": "B",
    "explanation": "Proptosis, painful eye movement, and reduced acuity point to postseptal disease, which can threaten vision or spread intracranially. Preseptal cellulitis spares the orbit, retinoblastoma has calcification and no sinus infection, and venous malformations enlarge slowly.",
    "id": 96
  },
  {
    "domain": "head_neck",
    "chapter": 10,
    "question": "A young child has leukocoria, and CT or ultrasound shows a calcified intraocular mass. What is the most likely diagnosis?",
    "options": {
      "A": "Lymphatic malformation, with fluid levels and slow growth after minor trauma",
      "B": "Retinoblastoma, which often shows calcification in a young child",
      "C": "Orbital cellulitis, with fat stranding and sinus opacification near the lamina papyracea",
      "D": "Rhabdomyosarcoma of the orbit, an extraconal soft tissue mass without calcification"
    },
    "answer": "B",
    "explanation": "Intraocular calcification in a young child is typical of retinoblastoma. Rhabdomyosarcoma is a soft tissue orbital mass, cellulitis is infectious with sinus involvement, and lymphatic malformations are fluid-filled and slow.",
    "id": 97
  },
  {
    "domain": "head_neck",
    "chapter": 10,
    "question": "A child has a midline neck mass that moves with swallowing and tongue protrusion. What is the most likely diagnosis?",
    "options": {
      "A": "Reactive cervical lymph node, usually a lateral firm mass with fever",
      "B": "Venous malformation, usually a compressible lesion crossing several spaces",
      "C": "Branchial cleft cyst, usually a lateral neck mass anterior to the sternocleidomastoid",
      "D": "Thyroglossal duct cyst, a midline neck mass in a young child"
    },
    "answer": "D",
    "explanation": "A midline neck mass in a young child is classically a thyroglossal duct cyst. Branchial cleft cysts and lymph nodes are lateral, and venous malformations are compressible and cross spaces.",
    "id": 98
  },
  {
    "domain": "head_neck",
    "chapter": 10,
    "question": "A neck node is hard, fixed, enlarging despite treatment, and accompanied by weight loss. What should be considered?",
    "options": {
      "A": "Repeat the same antibiotics, because failure of treatment always means a resistant organism is present",
      "B": "Drainage of an abscess, because a fixed node always represents pus",
      "C": "Oncologic assessment, because this pattern is not typical of simple infectious lymphadenitis",
      "D": "Reassurance, because fixed nodes in children are usually reactive and benign"
    },
    "answer": "C",
    "explanation": "A hard, fixed, enlarging node with systemic symptoms needs oncologic consideration. Simple infectious nodes are mobile and respond to treatment. Fixation does not mean pus, and failure of antibiotics does not by itself mean resistance.",
    "id": 99
  },
  {
    "domain": "head_neck",
    "chapter": 10,
    "question": "A child has a slowly enlarging neck lesion crossing multiple spaces that became painful after minor trauma. Which diagnosis fits?",
    "options": {
      "A": "Retropharyngeal abscess that remains limited to the prevertebral space",
      "B": "Peritonsillar abscess that remains limited to the tonsillar fossa",
      "C": "Venous or lymphatic malformation that bled or became infected, evaluated by MRI",
      "D": "Thyroglossal duct cyst that stays strictly midline at the hyoid bone and moves with swallowing"
    },
    "answer": "C",
    "explanation": "Venous and lymphatic malformations enlarge slowly, cross spaces, and can bleed or become infected after minor trauma, and MRI defines them. A thyroglossal cyst is midline and fixed to the hyoid. The abscesses named stay in their own spaces.",
    "id": 100
  },
  {
    "domain": "chest_cardiac",
    "chapter": 11,
    "question": "A newborn has left chest bowel gas, a scaphoid abdomen, and rightward mediastinal shift. What is the most likely diagnosis?",
    "options": {
      "A": "Congenital lobar overinflation, an expanded lobe causing air trapping and shift",
      "B": "Congenital pulmonary airway malformation, a cystic or solid lung lesion causing mass effect and mediastinal shift",
      "C": "Bronchopulmonary sequestration, a lung segment with abnormal systemic arterial supply",
      "D": "Congenital diaphragmatic hernia, with abdominal organs herniated through a defect into the left chest"
    },
    "answer": "D",
    "explanation": "Bowel gas in the chest, a scaphoid abdomen, and mediastinal shift indicate diaphragmatic hernia, more often on the left. Airway malformation, sequestration, and lobar overinflation are lung lesions, not herniation of abdominal contents.",
    "id": 101
  },
  {
    "domain": "chest_cardiac",
    "chapter": 11,
    "question": "A child has recurrent pneumonia in the same lung region. CT shows a lesion fed by an abnormal systemic artery. What is the diagnosis?",
    "options": {
      "A": "Congenital pulmonary airway malformation, an airway and lung tissue developmental abnormality with cysts and mass effect",
      "B": "Scimitar syndrome, partial anomalous venous return from the right lung to the vena cava",
      "C": "Pulmonary arteriovenous malformation, a direct artery to vein connection without capillaries",
      "D": "Bronchopulmonary sequestration, lung tissue without normal bronchial communication and with systemic arterial supply"
    },
    "answer": "D",
    "explanation": "The anomalous systemic artery is the key feature of sequestration, and recurrent infection in one area should prompt a search for it. An airway malformation lacks that arterial supply, a pulmonary AVM connects pulmonary artery to vein, and scimitar syndrome involves venous drainage.",
    "id": 102
  },
  {
    "domain": "chest_cardiac",
    "chapter": 11,
    "question": "A toddler has stridor and dysphagia, and radiography shows a right-sided aortic arch with tracheal narrowing. What is the best next study?",
    "options": {
      "A": "Ultrasound of the neck, since it shows the whole vascular ring",
      "B": "Repeat plain radiographs, since radiography fully defines the ring",
      "C": "CT angiography or MRI, to define the vascular ring encircling the trachea and esophagus",
      "D": "Barium swallow alone, since it replaces cross-sectional imaging completely in every vascular ring"
    },
    "answer": "C",
    "explanation": "Plain films may suggest a ring, but CT angiography or MRI is usually needed to define it. Repeating radiographs adds nothing, and neck ultrasound cannot show the intrathoracic ring.",
    "id": 103
  },
  {
    "domain": "chest_cardiac",
    "chapter": 11,
    "question": "A child has a small right lung and a curved tubular structure descending toward the diaphragm on the chest radiograph. What is the diagnosis?",
    "options": {
      "A": "Scimitar syndrome, with part of the right lung draining to the inferior vena cava",
      "B": "Congenital diaphragmatic hernia, with bowel loops displacing the heart and lung into the right chest",
      "C": "Pulmonary arteriovenous malformation, with a feeding artery and a draining vein",
      "D": "Vascular ring, with a right aortic arch narrowing the trachea and esophagus"
    },
    "answer": "A",
    "explanation": "A curved draining vein with a small right lung is the scimitar sign and can cause right heart volume overload or recurrent infection. Diaphragmatic hernia shows bowel gas in the chest, a pulmonary AVM is a focal nodule, and a vascular ring causes airway narrowing.",
    "id": 104
  },
  {
    "domain": "chest_cardiac",
    "chapter": 11,
    "question": "A cyanotic child has low oxygen saturation, and contrast imaging shows a feeding pulmonary artery and draining vein with no capillary bed. What is the lesion?",
    "options": {
      "A": "Pulmonary arteriovenous malformation, which can cause hypoxemia and paradoxical embolism",
      "B": "Congenital pulmonary airway malformation, which causes cysts and recurrent infection",
      "C": "Bronchopulmonary sequestration, which receives an anomalous systemic arterial blood supply",
      "D": "Scimitar syndrome, which causes a small right lung with volume overload"
    },
    "answer": "A",
    "explanation": "A direct pulmonary artery to vein connection is a pulmonary AVM, causing hypoxemia and paradoxical embolism. Sequestration has systemic arterial supply, airway malformations are cystic parenchymal lesions, and scimitar syndrome is anomalous venous return.",
    "id": 105
  },
  {
    "domain": "chest_cardiac",
    "chapter": 11,
    "question": "A supine infant chest radiograph shows an apparently enlarged heart. Which step best avoids a false diagnosis of cardiomegaly?",
    "options": {
      "A": "Assume the thymus caused it, because the thymus always enlarges the cardiac silhouette",
      "B": "Repeat the film in the correct position, because supine projection and a high diaphragm enlarge the heart",
      "C": "Order an immediate echocardiogram, because every supine enlargement of the cardiac silhouette means true cardiomegaly",
      "D": "Ignore the finding, because supine projection never changes the apparent heart size"
    },
    "answer": "B",
    "explanation": "The heart appears larger in a supine infant because of projection and a high diaphragm, so repeating the film in a proper position can avoid a false diagnosis. Echocardiography is not automatic, the thymus does not always cause this, and projection does change apparent size.",
    "id": 106
  },
  {
    "domain": "chest_cardiac",
    "chapter": 11,
    "question": "Which feature describes the normal infant thymus on a chest radiograph?",
    "options": {
      "A": "A soft anterior mediastinal structure with a sail shape or wavy border, without tracheal narrowing",
      "B": "A firm anterior mediastinal mass that narrows the trachea and displaces the great vessels and adjacent lung",
      "C": "A posterior mediastinal mass with calcification that grows rapidly in size",
      "D": "A middle mediastinal cystic structure that compresses the carina and bronchi"
    },
    "answer": "A",
    "explanation": "The normal thymus is soft, anterior, sail-shaped or wavy, and does not narrow the trachea or compress vessels. A tracheal narrowing mass, a posterior calcified mass, or a middle mediastinal cyst is not normal thymus.",
    "id": 107
  },
  {
    "domain": "chest_cardiac",
    "chapter": 11,
    "question": "Which finding on a newborn chest radiograph taken immediately after delivery is expected and may change within hours?",
    "options": {
      "A": "Persistent lobar consolidation from perinatal pneumonia that never changes over time or with treatment",
      "B": "Fixed cystic lucency from congenital airway malformation that resolves in hours",
      "C": "Diaphragmatic elevation from herniated bowel that clears with normal breathing",
      "D": "Hazy lungs from retained fetal lung fluid that clears through breathing and lymphatic flow"
    },
    "answer": "D",
    "explanation": "Fetal lung fluid causes transient haziness that clears with breathing, lymphatics, and changing pulmonary blood flow, so image timing matters. Pneumonia and cystic malformations do not clear in hours, and diaphragmatic herniation does not resolve spontaneously.",
    "id": 108
  },
  {
    "domain": "chest_cardiac",
    "chapter": 11,
    "question": "A prenatally detected cystic lung lesion is asymptomatic after delivery. What does the postnatal CT mainly define?",
    "options": {
      "A": "Lobe involved, size, cystic components, and effect on the heart and mediastinum for surgical or surveillance planning",
      "B": "Only the gestational age at birth, since this determines lesion behavior entirely",
      "C": "Only whether the lesion contains calcification, since this alone determines the final surgical plan and surveillance interval",
      "D": "Only the thymus size, since this determines whether surveillance is needed at all"
    },
    "answer": "A",
    "explanation": "Postnatal CT defines the involved lobe, cyst size, and mass effect and shows vascular supply to plan surgery or surveillance. It is not limited to calcification, thymus size, or gestational age.",
    "id": 109
  },
  {
    "domain": "chest_cardiac",
    "chapter": 11,
    "question": "Which finding on a chest radiograph of a child with diaphragmatic hernia may cause a complication if not recognized?",
    "options": {
      "A": "A scimitar vein being mistaken for a normal inferior vena cava",
      "B": "A feeding or chest tube entering the chest unexpectedly because the herniated anatomy was missed",
      "C": "A thymus sail sign being mistaken for a normal anterior mediastinal structure on a rotated radiograph",
      "D": "A right aortic arch being mistaken for a left aortic arch with ring"
    },
    "answer": "B",
    "explanation": "When a large defect hides the diaphragm, a tube can enter the chest unexpectedly. The other options describe findings in different conditions and do not follow from missing a hernia.",
    "id": 110
  },
  {
    "domain": "chest_cardiac",
    "chapter": 12,
    "question": "A premature newborn has low lung volumes, diffuse granular opacity, and air bronchograms. What is the most likely diagnosis?",
    "options": {
      "A": "Transient tachypnea of the newborn from delayed clearance of fetal lung fluid",
      "B": "Meconium aspiration with patchy opacities, hyperinflation, and areas of air trapping",
      "C": "Pulmonary hemorrhage with sudden blood-stained secretions and diffuse patchy opacity",
      "D": "Respiratory distress syndrome from surfactant deficiency in premature lungs"
    },
    "answer": "D",
    "explanation": "Low volumes, granular opacity, and air bronchograms in a premature infant indicate surfactant deficiency. Transient tachypnea shows prominent vessels and fissural fluid with mild hyperinflation, meconium aspiration is patchy with air trapping, and pulmonary hemorrhage is nonspecific opacity with bloody secretions.",
    "id": 111
  },
  {
    "domain": "chest_cardiac",
    "chapter": 12,
    "question": "A term infant has early tachypnea, prominent vascular markings, fluid in the fissures, and mild hyperinflation, improving over a short period. What is the diagnosis?",
    "options": {
      "A": "Transient tachypnea of the newborn, associated with delayed clearance of fetal lung fluid",
      "B": "Respiratory distress syndrome, with low volumes and diffuse granular opacity in a premature infant",
      "C": "Neonatal pneumonia, with focal or patchy opacity and possible pleural effusion",
      "D": "Meconium aspiration syndrome, with patchy opacities and marked air trapping"
    },
    "answer": "A",
    "explanation": "Prominent vessels, fissural fluid, and quick improvement fit retained fetal lung fluid, and the diagnosis rests on the clinical course. RDS occurs in premature infants with low volumes, meconium aspiration shows air trapping, and pneumonia is focal or patchy and often does not clear quickly.",
    "id": 112
  },
  {
    "domain": "chest_cardiac",
    "chapter": 12,
    "question": "A ventilated premature infant with RDS suddenly worsens. Which complication should be excluded first?",
    "options": {
      "A": "Pneumothorax or pulmonary interstitial emphysema, or a tube problem, as causes of sudden worsening",
      "B": "Gradual surfactant effect with expected clearing of granular opacity over many hours after administration",
      "C": "Thymic enlargement, which commonly causes sudden deterioration in ventilated infants",
      "D": "Transient tachypnea of the newborn, which only occurs in term infants"
    },
    "answer": "A",
    "explanation": "Sudden worsening in RDS should prompt a search for air leak, interstitial emphysema, infection, or tube malposition. Gradual clearing is expected after surfactant, transient tachypnea does not follow RDS, and the thymus does not cause sudden deterioration.",
    "id": 113
  },
  {
    "domain": "chest_cardiac",
    "chapter": 12,
    "question": "A supine ventilated infant has worsening oxygenation. The radiograph shows a hyperlucent hemithorax with a sharp lung edge and subtle anterior air. What is the finding?",
    "options": {
      "A": "Congenital lobar overinflation, with a hyperlucent lobe and compressed adjacent lung",
      "B": "Pneumomediastinum, with air outlining the mediastinal borders and the thymus",
      "C": "Pneumothorax, where air collects anteriorly in a supine infant and may appear subtle",
      "D": "Pulmonary interstitial emphysema, with small cystic lucencies throughout the lung"
    },
    "answer": "C",
    "explanation": "Air in the pleural space collects anteriorly in a supine infant and may be subtle, and tension pneumothorax is a clinical emergency. Pneumomediastinum outlines the mediastinum, interstitial emphysema is cystic lucencies within the lung, and lobar overinflation is a congenital lesion.",
    "id": 114
  },
  {
    "domain": "chest_cardiac",
    "chapter": 12,
    "question": "Which imaging finding best describes pulmonary interstitial emphysema?",
    "options": {
      "A": "Diffuse low volumes with granular opacity and air bronchograms",
      "B": "Air along the mediastinal borders lifting the thymus away from the cardiac silhouette",
      "C": "Small cystic lucencies within the lung, which can precede a larger pneumothorax",
      "D": "Fluid in the fissures with prominent vascular markings and mild hyperinflation"
    },
    "answer": "C",
    "explanation": "Interstitial emphysema produces small cystic lucencies in the lung and may precede pneumothorax. Air along the mediastinum is pneumomediastinum, granular opacity with bronchograms is RDS, and fissural fluid is transient tachypnea.",
    "id": 115
  },
  {
    "domain": "chest_cardiac",
    "chapter": 12,
    "question": "A term infant born through meconium-stained fluid has patchy opacities with hyperinflation and air trapping. Which complication is important?",
    "options": {
      "A": "Surfactant deficiency, which is the main mechanism behind meconium aspiration injury",
      "B": "Vascular ring compression, which commonly complicates meconium aspiration in newborns",
      "C": "Pneumothorax, which is a complication of meconium aspiration and may need urgent treatment",
      "D": "Delayed fetal fluid clearance, which is the main mechanism behind meconium aspiration injury"
    },
    "answer": "C",
    "explanation": "Air trapping predisposes to pneumothorax in meconium aspiration, and the birth history is critical because it overlaps with pneumonia and RDS. Surfactant deficiency and delayed fluid clearance describe other conditions, and vascular rings are unrelated.",
    "id": 116
  },
  {
    "domain": "chest_cardiac",
    "chapter": 12,
    "question": "Where should the endotracheal tube tip lie on a neonatal chest radiograph?",
    "options": {
      "A": "In the midtrachea, safely above the level of the carina in the chest",
      "B": "In the right mainstem bronchus, so the right lung is ventilated best",
      "C": "In the upper esophagus, so the stomach is decompressed during ventilation",
      "D": "At the carina, so both mainstem bronchi receive air directly"
    },
    "answer": "A",
    "explanation": "The tube should end in the midtrachea above the carina. A tip at or below the carina risks mainstem intubation with one lung ventilated, and an esophageal tube does not ventilate.",
    "id": 117
  },
  {
    "domain": "chest_cardiac",
    "chapter": 12,
    "question": "An umbilical venous catheter should follow which expected course on imaging?",
    "options": {
      "A": "Into the right atrium and across the foramen ovale into the left heart",
      "B": "Through the umbilical vein and liver toward the inferior vena cava",
      "C": "Down the umbilical artery and along the aorta toward the iliac vessels",
      "D": "Into the portal vein and out through a hepatic vein branch"
    },
    "answer": "B",
    "explanation": "A venous catheter passes through the liver toward the inferior vena cava. An arterial catheter descends from the umbilical artery, and portal or left heart position indicates malposition.",
    "id": 118
  },
  {
    "domain": "chest_cardiac",
    "chapter": 12,
    "question": "Group B streptococcal pneumonia in a neonate may resemble which condition on radiography?",
    "options": {
      "A": "Transient tachypnea, so the report should always name Group B streptococcus",
      "B": "Respiratory distress syndrome, so the report should describe the pattern without promising an organism",
      "C": "Congenital diaphragmatic hernia, so the report should name the organism confidently from the image alone",
      "D": "Pulmonary arteriovenous malformation, so the report should name the feeding vessel"
    },
    "answer": "B",
    "explanation": "Group B streptococcal infection can mimic RDS, and the radiologist should not promise an organism from the image but describe pattern, distribution, complications, and line positions. Diaphragmatic hernia and AVM look different.",
    "id": 119
  },
  {
    "domain": "chest_cardiac",
    "chapter": 12,
    "question": "A newborn has sudden bloody secretions and worsening oxygenation, with diffuse patchy opacity. What should the radiologist state?",
    "options": {
      "A": "The pattern is pathognomonic for transient tachypnea, so no clinical correlation is required",
      "B": "The pattern is pathognomonic for pneumothorax, so no clinical correlation is required",
      "C": "The opacity is nonspecific, so clinical picture and laboratory results are needed to support pulmonary hemorrhage",
      "D": "The pattern is pathognomonic for pulmonary hemorrhage, so no clinical correlation or laboratory data are ever required"
    },
    "answer": "C",
    "explanation": "Pulmonary hemorrhage appears as diffuse or patchy opacity that is not specific, so clinical and laboratory data are essential. No imaging pattern here is pathognomonic, and a pneumothorax is air, not opacity.",
    "id": 120
  },
  {
    "domain": "chest_cardiac",
    "chapter": 13,
    "question": "A 6-year-old has fever and cough. Ultrasound shows an echo-free pleural effusion without septations over a consolidated left lower lobe. What is the best interpretation?",
    "options": {
      "A": "Empyema with loculations that requires immediate chest tube drainage and contrast CT of the chest",
      "B": "Necrotizing pneumonia with multiple small cavities that needs surgical resection of the affected lung lobe",
      "C": "Lung abscess with a thick wall and air-fluid level that needs percutaneous catheter placement now",
      "D": "Simple parapneumonic effusion that may resolve with antibiotics alone and does not need drainage"
    },
    "answer": "D",
    "explanation": "A clear effusion without septations beside consolidated lung is a simple parapneumonic effusion, which often clears with antibiotics. Empyema would show septations or loculation and often needs drainage. Necrotizing pneumonia shows multiple small cavities in the lung, and a lung abscess is a thick-walled cavity with an air-fluid level, neither of which is described.",
    "id": 121
  },
  {
    "domain": "chest_cardiac",
    "chapter": 13,
    "question": "Which imaging test best separates pleural fluid from consolidated lung and shows septations in a child with pneumonia?",
    "options": {
      "A": "Contrast-enhanced CT of the chest, which is the routine first test for every child with effusion",
      "B": "A repeat frontal chest radiograph in the decubitus position, which reliably shows internal septations in fluid",
      "C": "MRI of the chest with gadolinium, which is the standard first test for pediatric pleural disease",
      "D": "Ultrasound of the chest, which shows fluid, septations, and the underlying lung without radiation"
    },
    "answer": "D",
    "explanation": "Ultrasound separates fluid from consolidated lung and shows septations without radiation. Contrast CT is reserved for complex cases, suspected necrosis, or procedure planning rather than routine use. A decubitus film shows free layering fluid but cannot reliably show septations, and MRI is not a standard first test for pleural disease.",
    "id": 122
  },
  {
    "domain": "chest_cardiac",
    "chapter": 13,
    "question": "What does the term empyema describe in a child with pneumonia?",
    "options": {
      "A": "Tissue death within the lung that produces many small cavities and sometimes needs surgical intervention",
      "B": "Infected pleural fluid that may form loculations and often needs drainage in addition to antibiotics",
      "C": "A thick-walled lung cavity containing pus, typically with an air-fluid level on the upright film",
      "D": "A thin-walled air collection that forms in the lung after infection or trauma and often resolves"
    },
    "answer": "B",
    "explanation": "Empyema is infected pleural fluid that can loculate and may need drainage. A pneumatocele is a thin-walled air collection, a lung abscess is a thick-walled pus-filled cavity within the lung, and necrotizing pneumonia is lung tissue death with multiple small cavities. All three are parenchymal rather than pleural.",
    "id": 123
  },
  {
    "domain": "chest_cardiac",
    "chapter": 13,
    "question": "A 4-year-old with a known tuberculosis contact has a chest radiograph showing right hilar enlargement and little lung cavitation. What is the typical pattern for childhood tuberculosis?",
    "options": {
      "A": "Extensive upper lobe cavitation with thick walls, which is the usual presentation of primary childhood disease",
      "B": "Tiny diffuse nodules throughout both lungs, which is the usual finding in all childhood cases",
      "C": "A single thin-walled air collection in the lower lobe, which is the usual childhood finding",
      "D": "Enlarged hilar or mediastinal lymph nodes with less extensive lung cavitation than adult postprimary disease"
    },
    "answer": "D",
    "explanation": "Childhood tuberculosis often shows hilar or mediastinal nodal enlargement with less cavitation than adults. Extensive upper lobe cavitation is typical of adult postprimary disease. Miliary nodules occur in disseminated disease but are not the usual primary pattern, and a thin-walled air collection describes a pneumatocele.",
    "id": 124
  },
  {
    "domain": "chest_cardiac",
    "chapter": 13,
    "question": "A child with tuberculosis has innumerable tiny nodules of similar size scattered evenly through both lungs. Which form of disease does this describe?",
    "options": {
      "A": "Ghon complex, with a peripheral lung lesion and associated enlarged regional lymph nodes in one lobe",
      "B": "Cavitary postprimary tuberculosis, with a thick-walled upper lobe cavity and surrounding airspace opacity",
      "C": "Hypersensitivity pneumonitis, with small poorly defined nodules related to repeated inhaled antigen exposure",
      "D": "Miliary tuberculosis from hematogenous spread, producing tiny diffuse nodules throughout both lungs"
    },
    "answer": "D",
    "explanation": "Tiny uniform nodules throughout both lungs describe miliary tuberculosis. A Ghon complex is a peripheral focus with nodal enlargement in one region, and cavitary postprimary disease produces a thick-walled cavity. Hypersensitivity pneumonitis can look similar but is tied to antigen exposure and history rather than a tuberculosis exposure.",
    "id": 125
  },
  {
    "domain": "chest_cardiac",
    "chapter": 13,
    "question": "A teenager with cystic fibrosis has chronic cough. Which combination of chest imaging findings is most typical of the disease?",
    "options": {
      "A": "Lobar consolidation with a pleural effusion and no change in the bronchial airways between repeated bacterial infections",
      "B": "Diffuse reticular opacity with lung volume loss and a normal appearance of the large airways",
      "C": "Hyperinflation, bronchial wall thickening, mucus plugging, and bronchiectasis that progress with repeated infection",
      "D": "Multiple thin-walled cysts with preserved lung volume and no thickening of the bronchial walls"
    },
    "answer": "C",
    "explanation": "Cystic fibrosis causes hyperinflation, bronchial wall thickening, mucus plugging, and bronchiectasis from repeated infection and inflammation. Isolated lobar consolidation with effusion describes bacterial pneumonia. Diffuse reticular opacity with volume loss suggests interstitial fibrosis, and many thin-walled cysts suggest a cystic lung process, not airway disease.",
    "id": 126
  },
  {
    "domain": "chest_cardiac",
    "chapter": 13,
    "question": "An infant has fever, wheeze, and diffuse perihilar opacity on the chest radiograph. Which statement about the radiograph is most accurate?",
    "options": {
      "A": "The pattern leans toward a viral process, but radiographs cannot reliably identify the causative organism",
      "B": "The pattern proves viral infection, so antibiotics are never indicated for any child with perihilar opacity",
      "C": "The pattern proves bacterial infection, because perihilar opacity is specific for pneumococcal pneumonia in infants",
      "D": "The pattern excludes bacterial infection, because bacterial pneumonia never causes perihilar or diffuse opacity at all"
    },
    "answer": "A",
    "explanation": "Viral infection often produces diffuse or perihilar opacity, but the radiograph cannot name the organism and overlap with bacterial disease is common. It does not prove a viral cause, exclude bacterial disease, or specifically point to pneumococcus. Age, immunization, exposure, and symptoms belong in the interpretation.",
    "id": 127
  },
  {
    "domain": "chest_cardiac",
    "chapter": 13,
    "question": "A child with fever, focal chest pain, and a dense lobar opacity on radiography most strongly raises concern for which cause?",
    "options": {
      "A": "Miliary tuberculosis, because lobar consolidation with chest pain reflects hematogenous spread to the lungs",
      "B": "Hypersensitivity pneumonitis, because lobar consolidation with chest pain follows repeated inhaled antigen exposure",
      "C": "Bacterial pneumonia, because focal chest pain with dense lobar consolidation is more typical of bacterial disease",
      "D": "Viral bronchiolitis, because dense lobar consolidation is the characteristic radiographic pattern of viral infection"
    },
    "answer": "C",
    "explanation": "Fever, focal pain, and a dense lobar opacity favor bacterial pneumonia. Viral disease more often gives diffuse or perihilar change, and miliary tuberculosis produces tiny diffuse nodules rather than a lobar opacity. Hypersensitivity pneumonitis causes diffuse opacities or small nodules, not a dense focal lobar process.",
    "id": 128
  },
  {
    "domain": "chest_cardiac",
    "chapter": 13,
    "question": "A child with pneumonia has one hemithorax that looks less lucent and the heart shifted away from that side. What should the radiologist suspect?",
    "options": {
      "A": "A tension pneumothorax, which makes the affected hemithorax more lucent and appear darker than the other side",
      "B": "A large pleural effusion causing mass effect, which pushes the heart and trachea away from the opaque side",
      "C": "Lobar collapse from mucus plugging, which pulls the heart and trachea toward the opaque side",
      "D": "Simple consolidation without volume change, which never shifts the heart or trachea from the midline"
    },
    "answer": "B",
    "explanation": "A large effusion causes decreased lucency with shift of the heart and trachea away from the affected side. Collapse pulls structures toward the opacity, a pneumothorax makes the side darker rather than more opaque, and plain consolidation does not displace mediastinal structures. Checking the trachea, heart, and diaphragm identifies the mass effect.",
    "id": 129
  },
  {
    "domain": "chest_cardiac",
    "chapter": 14,
    "question": "A newborn becomes deeply cyanotic soon after birth and does not improve with oxygen. Echocardiography is urgent. Which lesion is classically associated with a narrow mediastinum on the radiograph?",
    "options": {
      "A": "Total anomalous pulmonary venous return with obstruction, where severe pulmonary edema is characteristic",
      "B": "Tetralogy of Fallot, where a boot-shaped heart and decreased pulmonary vascularity are classic",
      "C": "Transposition of the great arteries, where survival depends on mixing through a septal defect or ductus",
      "D": "Coarctation of the aorta, where rib notching and weak femoral pulses are the usual signs"
    },
    "answer": "C",
    "explanation": "Transposition connects the aorta to the right ventricle and the pulmonary artery to the left ventricle, so survival depends on mixing, and the mediastinum appears narrow. Tetralogy gives a boot-shaped heart with reduced vascularity. Obstructed total anomalous venous return mimics lung disease with edema, and coarctation causes arm hypertension and weak femoral pulses.",
    "id": 130
  },
  {
    "domain": "chest_cardiac",
    "chapter": 14,
    "question": "A cyanotic infant has a boot-shaped heart and decreased pulmonary vascularity on the chest radiograph. What is the most likely diagnosis?",
    "options": {
      "A": "Large ventricular septal defect, with cardiomegaly, increased pulmonary vascular markings, left-to-right shunting, and pulmonary overcirculation in infancy",
      "B": "Patent ductus arteriosus in a premature infant, with pulmonary overcirculation and respiratory difficulty",
      "C": "Atrial septal defect, with a left-to-right shunt that is often asymptomatic throughout childhood",
      "D": "Tetralogy of Fallot, with ventricular septal defect, pulmonary outflow obstruction, overriding aorta, and right ventricular hypertrophy"
    },
    "answer": "D",
    "explanation": "Tetralogy of Fallot combines a ventricular septal defect, pulmonary outflow obstruction, an overriding aorta, and right ventricular hypertrophy, and shows a boot-shaped heart with decreased vascularity. A large ventricular septal defect and a patent ductus cause increased vascularity from left-to-right flow. An atrial septal defect is also a left-to-right shunt and is often silent in childhood.",
    "id": 131
  },
  {
    "domain": "chest_cardiac",
    "chapter": 14,
    "question": "What is the main purpose of using a segmental approach to congenital heart disease?",
    "options": {
      "A": "To classify every lesion as cyanotic or acyanotic using only the heart size on one film",
      "B": "To identify the surgical operation performed from the pattern of rib notching on the radiograph",
      "C": "To replace echocardiography by measuring cardiac pressures directly from the plain chest radiograph alone",
      "D": "To trace venous return, chambers, great arteries, and connections so the report explains the physiology"
    },
    "answer": "D",
    "explanation": "The segmental method follows veins, atria, ventricles, great arteries, and their connections, then assesses pulmonary and systemic flow and mixing, so the report matches the bedside physiology. The radiograph cannot measure pressures or replace echocardiography. Heart size alone cannot classify lesions, and rib notching relates to coarctation rather than identifying an operation.",
    "id": 132
  },
  {
    "domain": "chest_cardiac",
    "chapter": 14,
    "question": "Which test is the usual first-line study for most congenital heart disease in infants and children?",
    "options": {
      "A": "Echocardiography, which defines anatomy, flow, and ventricular function without ionizing radiation",
      "B": "Cardiac MRI with flow measurement, which is the routine first study for every newborn with a murmur",
      "C": "Plain chest radiography, which gives a complete assessment of pulmonary pressure and cardiac anatomy",
      "D": "Cardiac CT angiography, which is the fastest test and routinely chosen before any echocardiogram"
    },
    "answer": "A",
    "explanation": "Echocardiography is the first-line tool for most congenital heart disease because it shows anatomy, flow, and function without radiation. CT and MRI are used for complex anatomy, pulmonary vessels, or surgical planning. The chest radiograph points to a shunt or obstruction but is not a complete assessment of pressure.",
    "id": 133
  },
  {
    "domain": "chest_cardiac",
    "chapter": 14,
    "question": "What does increased pulmonary vascular markings on a chest radiograph most often suggest?",
    "options": {
      "A": "A normal study, since pulmonary vascular markings do not vary with the volume of blood flow",
      "B": "Pulmonary venous drainage to the left atrium, which is always associated with normal vascularity",
      "C": "Reduced pulmonary blood flow, such as from severe pulmonary outflow obstruction in tetralogy of Fallot",
      "D": "Increased pulmonary blood flow, such as from a left-to-right shunt through a septal defect"
    },
    "answer": "D",
    "explanation": "Increased markings suggest increased pulmonary blood flow, typically a left-to-right shunt. Decreased markings suggest reduced flow, as in tetralogy with pulmonary outflow obstruction. Markings do vary with flow, so calling them normal is wrong, and normal pulmonary venous drainage does not explain increased flow.",
    "id": 134
  },
  {
    "domain": "chest_cardiac",
    "chapter": 14,
    "question": "A newborn has weak femoral pulses and heart failure. Which lesion narrows the aortic arch and explains this?",
    "options": {
      "A": "Patent ductus arteriosus, which connects the aorta and pulmonary artery without narrowing the arch",
      "B": "Ventricular septal defect, which is a hole between the ventricles and spares the aortic arch",
      "C": "Atrial septal defect, which causes a left-to-right shunt and is usually silent in childhood",
      "D": "Coarctation of the aorta, defined by echocardiography, CT, or MRI"
    },
    "answer": "D",
    "explanation": "Coarctation narrows the aortic arch and can cause upper-extremity hypertension, weak femoral pulses, or newborn heart failure. A patent ductus connects the aorta and pulmonary artery, a ventricular septal defect is a hole between the ventricles, and an atrial septal defect is an atrial shunt. None narrows the arch.",
    "id": 135
  },
  {
    "domain": "chest_cardiac",
    "chapter": 14,
    "question": "An infant has severe cyanosis and respiratory distress with pulmonary edema, and the radiograph resembles lung disease. Which cardiac lesion should be considered?",
    "options": {
      "A": "Obstructed total anomalous pulmonary venous return, where pulmonary veins drain to the systemic venous system",
      "B": "Small ventricular septal defect, which produces a loud murmur but little physiologic effect",
      "C": "Isolated coarctation of the aorta, which causes weak femoral pulses and upper-extremity hypertension",
      "D": "Small atrial septal defect, which usually produces no symptoms in early infancy and a normal chest radiograph"
    },
    "answer": "A",
    "explanation": "When pulmonary veins drain to the systemic venous system and are obstructed, the infant develops pulmonary edema and critical illness that mimics lung disease. Small septal defects have little physiologic effect and a normal appearance. Coarctation causes pulse and blood pressure differences rather than severe cyanosis with pulmonary edema.",
    "id": 136
  },
  {
    "domain": "chest_cardiac",
    "chapter": 14,
    "question": "In which situation is cardiac MRI or CT preferred over echocardiography alone in congenital heart disease?",
    "options": {
      "A": "When a newborn has a simple small ventricular septal defect with a loud murmur and normal growth",
      "B": "When bedside assessment of a premature infant with a patent ductus arteriosus is first needed",
      "C": "When anatomy is complex, pulmonary arteries and veins need detail, or surgery is being planned",
      "D": "When a screening test is needed in a well child with no symptoms and a normal examination"
    },
    "answer": "C",
    "explanation": "MRI and CT add value when anatomy is complex, when pulmonary vessels need detailed assessment, or when surgery is planned. A simple small defect, a well child, and a premature infant with a ductus are all usually evaluated with echocardiography. Cross-sectional imaging adds radiation or sedation without answering a question echocardiography cannot.",
    "id": 137
  },
  {
    "domain": "chest_cardiac",
    "chapter": 14,
    "question": "What should a radiologist do before calling a finding abnormal on postoperative cardiac imaging?",
    "options": {
      "A": "Identify the operation and the expected connections, since conduits, patches, shunts, and stents change normal anatomy",
      "B": "Ignore expected surgical hardware and report only the size of the heart on the radiograph",
      "C": "Compare the image to a normal unoperated heart, since any difference from normal anatomy is a postoperative complication",
      "D": "Assume every conduit or patch is obstructed until proven patent by a repeat contrast study"
    },
    "answer": "A",
    "explanation": "Postoperative reports must first account for the operation and expected connections, then look for obstruction, leak, aneurysm, thrombosis, and lung or pleural complications. Comparing with a normal heart would label expected surgical anatomy as abnormal. Assuming obstruction is unjustified, and ignoring hardware misses the structures that most often fail.",
    "id": 138
  },
  {
    "domain": "chest_cardiac",
    "chapter": 15,
    "question": "A 12-year-old has facial swelling, distended neck veins, and breathlessness when lying flat. A radiograph shows a large anterior mediastinal opacity. What is the most likely diagnosis?",
    "options": {
      "A": "Lymphoma compressing the trachea and superior vena cava, which is a physiologic emergency",
      "B": "Neuroblastoma arising along the sympathetic chain, which is typically a posterior mediastinal mass in young children",
      "C": "Normal thymus, which is a smooth anterior opacity expected in infants rather than adolescents",
      "D": "Bronchogenic cyst, which is a fluid-filled middle mediastinal lesion closely related to the airway"
    },
    "answer": "A",
    "explanation": "Lymphoma is a common anterior or middle mediastinal mass in older children and can compress the trachea and superior vena cava. Neuroblastoma is posterior and affects younger children, and a bronchogenic cyst is a middle mediastinal fluid-filled lesion. A large normal thymus explains a smooth anterior opacity in an infant, not a symptomatic adolescent.",
    "id": 139
  },
  {
    "domain": "chest_cardiac",
    "chapter": 15,
    "question": "What is the most important first question in a child with a mediastinal mass?",
    "options": {
      "A": "Whether the mass sits behind the heart, which determines the need for a repeat radiograph",
      "B": "Whether the child has had recent immunizations, which determines the likely cause of the mass",
      "C": "Whether the airway or venous return is compromised, which determines urgency and safety of sedation",
      "D": "Whether the mass contains calcification, which determines the final histologic diagnosis before any biopsy"
    },
    "answer": "C",
    "explanation": "The first concern is airway or venous compromise, because a child can look well while lying flat yet be at risk of collapse. Calcification may narrow the differential but does not replace pathology. Position behind the heart and immunization history do not determine immediate safety.",
    "id": 140
  },
  {
    "domain": "chest_cardiac",
    "chapter": 15,
    "question": "Which tumor typically presents as a posterior mediastinal mass near the spine in a young child?",
    "options": {
      "A": "Lymphoma, which is usually anterior or middle and may rapidly compress the airway",
      "B": "Thymic lesion, which is uncommon and arises in the anterior mediastinum of an older child",
      "C": "Neuroblastoma, which may contain calcification and extend toward or into the spinal canal",
      "D": "Mature teratoma, which usually arises in the anterior mediastinum and may contain fat and calcification"
    },
    "answer": "C",
    "explanation": "Neuroblastoma is a posterior mediastinal tumor of young children that may calcify and extend toward the spine. Teratoma and thymic lesions are anterior, and lymphoma is anterior or middle. The report should describe spinal canal extension, airway effect, and vessel relationships.",
    "id": 141
  },
  {
    "domain": "chest_cardiac",
    "chapter": 15,
    "question": "An infant has a smooth, large anterior mediastinal opacity and is otherwise well. What is the most likely explanation?",
    "options": {
      "A": "Foregut duplication cyst, which always produces a smooth anterior opacity with airway compression",
      "B": "Neuroblastoma, which is a smooth anterior opacity in infants and the usual cause",
      "C": "Lymphoma, which is the most common anterior mediastinal mass in infants under one year old",
      "D": "A large normal thymus, which is more likely than a tumor in an infant"
    },
    "answer": "D",
    "explanation": "In an infant a large normal thymus is a more likely explanation for a smooth anterior opacity. Lymphoma is more typical of older children and adolescents, neuroblastoma is posterior, and duplication cysts are fluid-filled lesions that need not be anterior. Clinical context still decides whether further imaging is needed.",
    "id": 142
  },
  {
    "domain": "chest_cardiac",
    "chapter": 15,
    "question": "Which anterior mediastinal tumor can contain fat, fluid, calcification, and solid tissue?",
    "options": {
      "A": "Lymphoma, which characteristically contains fat and fluid and rarely enlarges quickly",
      "B": "Teratoma or another germ cell tumor, where imaging cannot replace pathology even when benign",
      "C": "Neuroblastoma, which is a posterior tumor and contains fat and fluid in nearly all cases",
      "D": "Bronchogenic cyst, which is a middle mediastinal lesion with uniform fluid and no solid tissue"
    },
    "answer": "B",
    "explanation": "Teratomas and other germ cell tumors contain mixed fat, fluid, calcification, and solid tissue, and a mature teratoma may be benign, though pathology is still required. Neuroblastoma is posterior, bronchogenic cysts are fluid-filled, and lymphoma is typically solid and enlarges quickly.",
    "id": 143
  },
  {
    "domain": "chest_cardiac",
    "chapter": 15,
    "question": "A fluid-filled middle mediastinal lesion closely related to the airway is seen on CT. Which diagnosis fits best?",
    "options": {
      "A": "Ganglioneuroma, which is a neural tumor typically found in the posterior mediastinum near the spine",
      "B": "Bronchogenic cyst, which can change appearance when infected or ruptured",
      "C": "Mature teratoma, which arises in the anterior mediastinum and often contains calcification",
      "D": "Large normal thymus, which is a solid anterior structure in infants and not fluid-filled"
    },
    "answer": "B",
    "explanation": "Bronchogenic cysts are fluid-filled middle mediastinal lesions related to the airway, and infection or rupture changes their appearance. Ganglioneuroma is posterior and neural, teratoma is anterior with mixed tissue, and the thymus is solid and anterior.",
    "id": 144
  },
  {
    "domain": "chest_cardiac",
    "chapter": 15,
    "question": "A child with a mediastinal mass needs a tissue diagnosis. What is the safest approach to sedation?",
    "options": {
      "A": "Avoid routine sedation, manage in a controlled setting with airway support, and involve oncology and critical care",
      "B": "Position the child supine and sedate for biopsy first, since stabilization delays the diagnosis",
      "C": "Administer routine sedation in the scanner, because tracheal compression never worsens when the child is lying supine",
      "D": "Cancel all imaging and treat empirically, since cross-sectional imaging always worsens airway compression"
    },
    "answer": "A",
    "explanation": "Sedation and positioning are not routine in a mass that can compress the airway, so management occurs in a controlled setting with airway support and early oncology and critical care input. Supine sedation can precipitate collapse. Cancelling imaging is not indicated, and lying flat is exactly the position that can worsen compression.",
    "id": 145
  },
  {
    "domain": "chest_cardiac",
    "chapter": 15,
    "question": "A young child has a chest wall injury with a normal-looking rib cage but severe internal chest injury. What principle does this illustrate?",
    "options": {
      "A": "Rib fractures never occur in children, so any rib fracture is a normal anatomic variant",
      "B": "Pediatric ribs are more brittle than adult ribs, so internal injury always accompanies a visible rib fracture",
      "C": "Internal injury only occurs when the child is unstable, so a stable child needs no further assessment",
      "D": "The pediatric chest wall is flexible, so severe internal injury can occur without obvious rib fracture"
    },
    "answer": "D",
    "explanation": "A flexible child chest wall can transmit force to the lungs and great vessels without a rib fracture. Ribs are not more brittle, and a rib fracture in a young child may signal significant force. Internal injury can occur even in a child who appears stable.",
    "id": 146
  },
  {
    "domain": "chest_cardiac",
    "chapter": 15,
    "question": "Which finding develops over hours after chest trauma and appears as patchy opacity?",
    "options": {
      "A": "Foregut duplication cyst, which forms within hours and appears as a fluid-filled lesion",
      "B": "Pulmonary contusion, which may be absent on the first radiograph and worsen over the following hours",
      "C": "Pneumothorax, which always appears as a large obvious lucent area on the very first supine chest radiograph",
      "D": "Mediastinal lymphoma, which appears within hours and is caused directly by blunt chest trauma"
    },
    "answer": "B",
    "explanation": "Pulmonary contusion appears as patchy opacity that may develop over hours after trauma. A pneumothorax can be small and subtle in a supine child, so it does not always appear obvious. Lymphoma and duplication cysts are not caused by trauma and do not form within hours.",
    "id": 147
  },
  {
    "domain": "abdomen",
    "chapter": 16,
    "question": "A 3-day-old infant has bilious vomiting and a mildly distended abdomen with a nearly normal radiograph. What is the most important concern?",
    "options": {
      "A": "Hirschsprung disease, which causes functional obstruction from absent ganglion cells in a bowel segment",
      "B": "Malrotation with volvulus, a surgical emergency that a normal plain radiograph does not exclude",
      "C": "Duodenal atresia, which classically shows a double bubble with little distal gas on the radiograph",
      "D": "Meconium ileus, which is thick meconium in the distal ileum and often related to cystic fibrosis"
    },
    "answer": "B",
    "explanation": "Bilious vomiting in a newborn is a surgical emergency until malrotation with volvulus is excluded, and a normal radiograph does not rule it out. Duodenal atresia typically shows a double bubble, meconium ileus shows distal obstruction related to cystic fibrosis, and Hirschsprung disease causes distal functional obstruction.",
    "id": 148
  },
  {
    "domain": "abdomen",
    "chapter": 16,
    "question": "Which radiographic sign classically indicates duodenal atresia?",
    "options": {
      "A": "Pneumatosis intestinalis with portal venous gas in a premature infant with bloody stools",
      "B": "Double bubble sign, with gas in the stomach and proximal duodenum and little distal gas",
      "C": "Multiple dilated loops with meconium pellets and microcolon on a contrast enema",
      "D": "Coiled feeding tube in the upper pouch, with a gasless abdomen below the obstruction"
    },
    "answer": "B",
    "explanation": "Duodenal atresia produces gas in the stomach and proximal duodenum with little distal gas, the double bubble sign. A coiled tube in an upper pouch suggests esophageal atresia, pneumatosis and portal gas suggest necrotizing enterocolitis, and meconium pellets point to distal obstruction.",
    "id": 149
  },
  {
    "domain": "abdomen",
    "chapter": 16,
    "question": "A premature infant has abdominal distention, bloody stools, and pneumatosis intestinalis with portal venous gas. What is the diagnosis?",
    "options": {
      "A": "Malrotation with volvulus, which presents with bilious vomiting and an abnormal duodenojejunal position",
      "B": "Meconium plug syndrome, which causes distal obstruction and often resolves after a contrast enema",
      "C": "Esophageal atresia, which presents with coughing, feeding difficulty, and a tube coiled in the upper pouch",
      "D": "Necrotizing enterocolitis, an inflammatory and ischemic injury of bowel in premature infants"
    },
    "answer": "D",
    "explanation": "Pneumatosis intestinalis, portal venous gas, and bloody stools in a premature infant indicate necrotizing enterocolitis. Malrotation presents with bilious vomiting, meconium plug syndrome causes distal obstruction, and esophageal atresia presents with feeding difficulty and a coiled tube.",
    "id": 150
  },
  {
    "domain": "abdomen",
    "chapter": 16,
    "question": "In a newborn with suspected malrotation and a normal plain radiograph, which study best shows the duodenojejunal junction position?",
    "options": {
      "A": "Contrast enema, which shows the colon caliber and a transition zone but not the duodenum",
      "B": "Upper gastrointestinal contrast study, interpreted by an experienced radiologist with surgical input",
      "C": "Repeated plain radiographs at six-hour intervals, which reliably exclude malrotation when they stay normal",
      "D": "Abdominal CT with intravenous contrast, which is the standard first test for every newborn"
    },
    "answer": "B",
    "explanation": "An upper gastrointestinal contrast study can show an abnormal duodenojejunal junction position in malrotation. A contrast enema evaluates the colon and distal obstruction, and CT is not the standard first test in newborns. Normal plain radiographs, even serial ones, do not exclude malrotation.",
    "id": 151
  },
  {
    "domain": "abdomen",
    "chapter": 16,
    "question": "An ultrasound in a clinically convincing case of volvulus shows no whirlpool sign. What is the best next step?",
    "options": {
      "A": "Wait for a repeat ultrasound the next day, since twisted vessels always appear on the first study",
      "B": "Order a contrast enema first, since it is the definitive test for volvulus around the superior artery",
      "C": "Discharge the infant home, since a negative ultrasound excludes malrotation with volvulus completely and reliably",
      "D": "Do not delay urgent surgical review, since ultrasound is operator dependent and cannot exclude volvulus"
    },
    "answer": "D",
    "explanation": "If the clinical picture is convincing, a negative ultrasound should not delay urgent surgical review, because ultrasound is operator dependent. Discharge or waiting a day risks bowel loss, and a contrast enema evaluates the colon rather than duodenal position.",
    "id": 152
  },
  {
    "domain": "abdomen",
    "chapter": 16,
    "question": "An infant cannot pass a feeding tube into the stomach, and the radiograph shows a coiled tube and a gasless abdomen. What is the likely diagnosis?",
    "options": {
      "A": "Duodenal atresia, which would show a double bubble with gas in stomach and duodenum",
      "B": "Esophageal atresia without a distal fistula, with the tube coiled in the upper pouch",
      "C": "Necrotizing enterocolitis, which occurs mostly in premature infants after feeds with bloody stools",
      "D": "Esophageal atresia with a distal fistula, which would show gas in the stomach and bowel"
    },
    "answer": "B",
    "explanation": "A coiled tube in the upper pouch with no gas below indicates esophageal atresia without a distal fistula. With a distal fistula the stomach contains air. Duodenal atresia shows a double bubble, and necrotizing enterocolitis presents with distention and bloody stools in premature infants.",
    "id": 153
  },
  {
    "domain": "abdomen",
    "chapter": 16,
    "question": "What is the usual meaning of free intraperitoneal air in a premature infant with necrotizing enterocolitis?",
    "options": {
      "A": "Normal gas in the stomach, which is expected in every premature infant after feeding",
      "B": "Pneumoperitoneum from bowel perforation, which usually requires urgent surgical evaluation and communication",
      "C": "Portal venous gas, which is gas in the liver veins and always resolves without any treatment",
      "D": "Pneumatosis intestinalis, which is gas in the bowel wall and carries no need for urgent surgery or communication"
    },
    "answer": "B",
    "explanation": "Free air outside the bowel usually means perforation and requires urgent surgical evaluation. Pneumatosis is gas in the bowel wall and portal gas is gas in the liver veins, which are separate findings, though new portal gas also needs immediate communication. Normal stomach gas does not represent free air.",
    "id": 154
  },
  {
    "domain": "abdomen",
    "chapter": 16,
    "question": "A newborn with failure to pass meconium has multiple dilated loops and thick meconium in the distal ileum. Which underlying disease is most associated?",
    "options": {
      "A": "Prematurity, which is the main risk factor for necrotizing enterocolitis with pneumatosis",
      "B": "Down syndrome, which is classically associated with duodenal atresia and a double bubble",
      "C": "Esophageal atresia, which is associated with feeding difficulty and a coiled tube in the pouch",
      "D": "Cystic fibrosis, which is commonly associated with meconium ileus in newborns"
    },
    "answer": "D",
    "explanation": "Meconium ileus is thick meconium in the distal ileum and is often related to cystic fibrosis. Down syndrome is linked with duodenal atresia, prematurity with necrotizing enterocolitis, and esophageal atresia causes proximal obstruction.",
    "id": 155
  },
  {
    "domain": "abdomen",
    "chapter": 16,
    "question": "A contrast enema in a newborn shows a transition zone between narrow and dilated colon. Which diagnosis is suggested?",
    "options": {
      "A": "Malrotation with volvulus, which is best shown on an upper gastrointestinal contrast study",
      "B": "Hirschsprung disease, with absent ganglion cells in a segment of bowel causing functional obstruction",
      "C": "Meconium ileus, which shows small meconium pellets and thick meconium in the distal ileum",
      "D": "Ileal atresia, which is a structural discontinuity of the bowel with an unused microcolon on contrast enema"
    },
    "answer": "B",
    "explanation": "A transition zone suggests Hirschsprung disease, where absent ganglion cells cause functional obstruction, although biopsy is needed for diagnosis. Ileal atresia is a structural discontinuity, meconium ileus shows pellets, and malrotation is evaluated by the upper gastrointestinal study.",
    "id": 156
  },
  {
    "domain": "abdomen",
    "chapter": 17,
    "question": "A 10-year-old has crampy pain, vomiting, and bloody stool. Ultrasound shows a target-shaped mass with bowel within bowel. What is the diagnosis?",
    "options": {
      "A": "Ovarian torsion, which shows an enlarged ovary with peripheral follicles and reduced flow",
      "B": "Intussusception, where one bowel segment telescopes into another and may be treated by enema",
      "C": "Crohn disease, which shows bowel wall thickening with inflamed surrounding fat and sometimes strictures or fistulas",
      "D": "Acute appendicitis, which shows an enlarged noncompressible appendix with surrounding fat inflammation"
    },
    "answer": "B",
    "explanation": "A target-like mass with bowel within bowel is intussusception, and many cases can be reduced by air or contrast enema. Appendicitis shows a noncompressible appendix, ovarian torsion shows an enlarged ovary, and inflammatory bowel disease shows wall thickening and fat inflammation.",
    "id": 157
  },
  {
    "domain": "abdomen",
    "chapter": 17,
    "question": "What is the usual first-line imaging test for suspected appendicitis in a child?",
    "options": {
      "A": "Plain abdominal radiograph, which reliably shows an inflamed appendix and excludes alternative causes",
      "B": "MRI of the abdomen, which is the standard first test in all children and avoids sedation entirely",
      "C": "Ultrasound, which avoids radiation and can show a noncompressible appendix with surrounding fat inflammation",
      "D": "Contrast CT of the abdomen, which is the routine first test for every child with right lower pain"
    },
    "answer": "C",
    "explanation": "Ultrasound is often the first test because it avoids radiation. CT is used when ultrasound is inconclusive and risk stays high, and MRI is an option in selected centers. A plain radiograph cannot reliably show the appendix.",
    "id": 158
  },
  {
    "domain": "abdomen",
    "chapter": 17,
    "question": "Before attempting an air enema for intussusception, what must be checked?",
    "options": {
      "A": "Documented currant jelly stool, which is required for the diagnosis in every child",
      "B": "Normal appendix size on ultrasound, which is required before any enema reduction is attempted in a child",
      "C": "Signs of perforation, peritonitis, or an unstable child, which make enema reduction unsafe",
      "D": "Absence of a lymph node within the mass, which excludes any need for reduction or surgical review"
    },
    "answer": "C",
    "explanation": "Perforation, peritonitis, or an unstable child make enema reduction unsafe, so these are checked first. Appendix size is irrelevant, a lead point such as a lymph node does not prevent reduction, and the classic triad or currant jelly stool is not always present.",
    "id": 159
  },
  {
    "domain": "abdomen",
    "chapter": 17,
    "question": "An older child has recurrent intussusception. What should be considered?",
    "options": {
      "A": "Ovarian torsion, which presents with recurrent bowel telescoping in older adolescent girls only",
      "B": "A pathological lead point, which is more likely in an older child or recurrent episodes",
      "C": "Appendicitis only, since recurrent episodes never involve any lead point at all",
      "D": "Normal viral lymphoid hyperplasia, which is the usual cause in every single recurrent case"
    },
    "answer": "B",
    "explanation": "Older age or recurrence raises the likelihood of a pathological lead point. Lymphoid hyperplasia is more typical in younger children without one, and appendicitis and ovarian torsion do not cause telescoping.",
    "id": 160
  },
  {
    "domain": "abdomen",
    "chapter": 17,
    "question": "A girl has severe pelvic pain and ultrasound shows an enlarged ovary with peripheral follicles but normal Doppler flow. What is true?",
    "options": {
      "A": "Torsion is a clinical diagnosis only and ultrasound has no role in suspected ovarian torsion",
      "B": "Normal flow does not exclude torsion, since intermittent torsion can preserve flow, so urgent review is needed",
      "C": "Torsion only occurs when Doppler flow is absent, so an enlarged ovary with follicles alone is not concerning",
      "D": "Normal flow excludes torsion completely, so the girl can safely be discharged home without any further assessment"
    },
    "answer": "B",
    "explanation": "Intermittent torsion can preserve flow, so normal Doppler does not exclude torsion when clinical and imaging findings are suspicious. Discharge risks ovarian loss. Torsion can occur with preserved flow, and ultrasound is useful for showing enlargement, follicles, and a twisted pedicle.",
    "id": 161
  },
  {
    "domain": "abdomen",
    "chapter": 17,
    "question": "A boy has acute scrotal pain and Doppler ultrasound shows reduced flow. What is the best action?",
    "options": {
      "A": "State the concern clearly, call the treating team, and do not delay exploration for a perfect image",
      "B": "Reassure the family and discharge, since reduced flow is a common normal variant in postpubertal boys",
      "C": "Wait for a repeat ultrasound in 24 hours, since torsion is confirmed only after a second normal study",
      "D": "Order a CT of the pelvis first, since it is the definitive test for scrotal torsion"
    },
    "answer": "A",
    "explanation": "Testicular torsion is a surgical emergency. Doppler may show reduced or absent flow, but the diagnosis is clinical and exploration should not wait. Delay risks testicular loss, CT adds nothing, and reduced flow is not normal.",
    "id": 162
  },
  {
    "domain": "abdomen",
    "chapter": 17,
    "question": "A child has right lower quadrant pain and a normal ultrasound that did not visualize the full appendix. What is correct?",
    "options": {
      "A": "The study is not negative unless the appendix is fully seen, and CT or MRI may follow",
      "B": "A study that does not show the appendix is negative and excludes appendicitis in every case",
      "C": "The surgical team should disregard the clinical examination whenever the ultrasound is not diagnostic",
      "D": "Ultrasound always shows a retrocecal appendix, so failure to see it proves the appendix is normal"
    },
    "answer": "A",
    "explanation": "A normal appendix should be fully visualized before the study is called negative, and a retrocecal appendix may be hidden. When risk remains high, CT or MRI can follow. The treatment decision combines the image with the surgical examination.",
    "id": 163
  },
  {
    "domain": "abdomen",
    "chapter": 17,
    "question": "Which condition can cause bowel wall thickening, inflamed fat, strictures, or fistulas and may be mapped by MR enterography?",
    "options": {
      "A": "Acute appendicitis, which shows a noncompressible appendix with surrounding fat inflammation on ultrasound",
      "B": "Ovarian torsion, which shows an enlarged ovary with peripheral follicles and requires urgent surgical review",
      "C": "Intussusception, which shows a target sign on ultrasound and is often reduced by an air or contrast enema",
      "D": "Inflammatory bowel disease, with ultrasound useful for the terminal ileum in a stable child"
    },
    "answer": "D",
    "explanation": "Inflammatory bowel disease causes wall thickening, fat inflammation, strictures, or fistulas, and MR enterography is increasingly used. Intussusception shows a target sign, appendicitis a noncompressible appendix, and ovarian torsion an enlarged ovary.",
    "id": 164
  },
  {
    "domain": "abdomen",
    "chapter": 17,
    "question": "A girl has right lower quadrant pain. Which alternative diagnoses should be considered besides appendicitis?",
    "options": {
      "A": "Ovarian pathology, mesenteric lymphadenitis, inflammatory bowel disease, and urinary disease",
      "B": "Only liver disease, since right lower quadrant pain is explained by hepatic conditions",
      "C": "Only testicular torsion, since right lower pain is always scrotal in origin",
      "D": "Only gallbladder disease, since right lower quadrant pain never originates from pelvic organs"
    },
    "answer": "A",
    "explanation": "Right lower quadrant pain suggests appendicitis, but ovarian pathology, mesenteric lymphadenitis, inflammatory bowel disease, and urinary disease can mimic it. Gallbladder and liver disease cause right upper pain, and testicular torsion occurs in boys.",
    "id": 165
  },
  {
    "domain": "abdomen",
    "chapter": 18,
    "question": "A 6-week-old has persistent jaundice and pale stools. Ultrasound shows a small gallbladder and a triangular echogenic area at the porta hepatis. What is the concern?",
    "options": {
      "A": "Biliary atresia, where early surgery improves outcomes, and a hepatobiliary scan and specialist review are needed",
      "B": "Choledochal cyst, which shows cystic dilation of the bile ducts, may cause a palpable mass, needing excision",
      "C": "Hepatic hemangioma, which is a vascular lesion that can cause heart failure in infancy",
      "D": "Physiologic jaundice, which is common in the first days of life and resolves without imaging or follow-up"
    },
    "answer": "A",
    "explanation": "A small gallbladder with a triangular cord sign and pale stools raises concern for biliary atresia, where early surgery improves outcomes. A choledochal cyst shows duct dilation, physiologic jaundice occurs in the first days of life, and a hemangioma is a vascular lesion.",
    "id": 166
  },
  {
    "domain": "abdomen",
    "chapter": 18,
    "question": "Does a normal gallbladder on ultrasound exclude biliary atresia in a jaundiced infant?",
    "options": {
      "A": "No, since normal ultrasound does not exclude it and persistent jaundice needs a timely pathway",
      "B": "Yes, since biliary atresia always produces an absent or very small gallbladder on every ultrasound",
      "C": "Yes, since a normal gallbladder confirms that bile reaches the bowel in every case",
      "D": "Only in infants older than three months, since earlier ultrasound is always unreliable"
    },
    "answer": "A",
    "explanation": "A normal-sized gallbladder does not exclude biliary atresia, and persistent jaundice needs a timely pathway including a hepatobiliary scan. The gallbladder is not always absent, and normal size does not prove bile drainage.",
    "id": 167
  },
  {
    "domain": "abdomen",
    "chapter": 18,
    "question": "Which test can show whether bile reaches the bowel in a jaundiced infant?",
    "options": {
      "A": "Plain abdominal radiograph, which shows bile in the intestine directly",
      "B": "Chest radiograph, which shows the position of the liver and biliary tree",
      "C": "Contrast enema, which shows the colon caliber and any transition zone",
      "D": "Hepatobiliary scan, which shows bile excretion into the bowel"
    },
    "answer": "D",
    "explanation": "A hepatobiliary scan shows whether bile reaches the bowel. A radiograph does not show bile, a contrast enema evaluates the colon, and a chest radiograph cannot assess bile flow.",
    "id": 168
  },
  {
    "domain": "abdomen",
    "chapter": 18,
    "question": "A child has jaundice, pain, and a cystic dilation of the bile ducts on ultrasound. Which study best defines the anatomy?",
    "options": {
      "A": "Plain abdominal radiograph, which shows bile duct caliber and the cyst wall in fine detail",
      "B": "Hepatobiliary scan alone, which is the only test that defines the duct anatomy and cyst wall",
      "C": "Chest radiograph, which shows biliary dilation through the diaphragm in most children with a bile duct cyst",
      "D": "MR cholangiopancreatography, which describes intrahepatic and extrahepatic components of the choledochal cyst"
    },
    "answer": "D",
    "explanation": "Choledochal cysts cause cystic duct dilation, and MR cholangiopancreatography or operative cholangiography defines the anatomy. A chest radiograph and plain film do not show ducts, and a scan shows excretion rather than anatomy.",
    "id": 169
  },
  {
    "domain": "abdomen",
    "chapter": 18,
    "question": "Which risk factors are associated with gallstones in a child?",
    "options": {
      "A": "Only routine vaccination, which is the main recognized trigger of gallstones in young children everywhere",
      "B": "Only high-protein feeding in infancy, which is the sole recognized cause of gallstones in all children",
      "C": "Only advanced age, since gallstones never occur in children of any age under any circumstances at all",
      "D": "Hemolytic disease, obesity, rapid weight loss, or certain medications, though uncommon in young children"
    },
    "answer": "D",
    "explanation": "Gallstones are uncommon in young children but occur with hemolytic disease, obesity, rapid weight loss, or certain medications. Age is not the only factor, and neither feeding nor vaccination is a recognized cause.",
    "id": 170
  },
  {
    "domain": "abdomen",
    "chapter": 18,
    "question": "A benign liver lesion is found incidentally with a central scar and characteristic enhancement. What is the likely diagnosis?",
    "options": {
      "A": "Hepatoblastoma, a malignant tumor of infants that is interpreted alongside raised alpha-fetoprotein levels in the blood",
      "B": "Hepatic adenoma, a tumor type that typically has no central scar and arises with hormone exposure",
      "C": "Hepatic hemangioma, which is a large vascular lesion in infancy that may cause high-output heart failure",
      "D": "Focal nodular hyperplasia, a benign liver lesion that must be distinguished from tumors needing treatment"
    },
    "answer": "D",
    "explanation": "Focal nodular hyperplasia is benign and often has a central scar with characteristic enhancement. Hepatoblastoma is a tumor with raised alpha-fetoprotein, hemangioma is vascular, and adenoma lacks a typical central scar.",
    "id": 171
  },
  {
    "domain": "abdomen",
    "chapter": 18,
    "question": "A trauma patient has a splenic laceration. What should the radiologist report?",
    "options": {
      "A": "Only whether the gallbladder is visible, since it determines spleen management",
      "B": "The injury grade, active contrast extravasation, and any subcapsular hematoma",
      "C": "Only the size of the spleen, since grade and bleeding are not relevant",
      "D": "Only the presence of fluid, since splenic injury cannot be graded on CT"
    },
    "answer": "B",
    "explanation": "Splenic injury should be described with grade, active bleeding, and hematoma. Spleen size alone and fluid alone are incomplete, and the gallbladder is unrelated.",
    "id": 172
  },
  {
    "domain": "abdomen",
    "chapter": 18,
    "question": "A child has abdominal pain and elevated pancreatic enzymes. Which initial imaging is most appropriate?",
    "options": {
      "A": "Plain radiograph only, which reliably shows pancreatic duct dilation and the surrounding peripancreatic fluid",
      "B": "Chest radiograph only, which shows pancreatic necrosis and pseudocyst directly in most children with pancreatitis",
      "C": "Hepatobiliary scan only, which is the only diagnostic test for acute pancreatitis in children",
      "D": "Ultrasound for gallstones, duct dilation, fluid, and enlargement, with CT or MRI for complications"
    },
    "answer": "D",
    "explanation": "Ultrasound looks for gallstones, duct dilation, fluid, and enlargement, and CT or MRI is used for necrosis or pseudocyst. A chest or plain radiograph cannot show these, and a scan does not diagnose pancreatitis.",
    "id": 173
  },
  {
    "domain": "abdomen",
    "chapter": 18,
    "question": "Which finding is associated with portal hypertension on ultrasound?",
    "options": {
      "A": "Enlarged spleen, varices, ascites, and abnormal portal venous flow, assessed with Doppler",
      "B": "Small spleen, absent varices, and increased bile flow in the portal vein, assessed with Doppler",
      "C": "Triangular cord sign at the porta hepatis, which is the classic sign of portal hypertension",
      "D": "Dilated common bile duct, which is the defining feature of portal hypertension in most children"
    },
    "answer": "A",
    "explanation": "Portal hypertension causes splenomegaly, varices, ascites, and abnormal portal flow, with Doppler showing the vein and collaterals. A small spleen is not expected, the triangular cord sign indicates biliary atresia, and a dilated duct suggests biliary obstruction.",
    "id": 174
  },
  {
    "domain": "genitourinary",
    "chapter": 19,
    "question": "A newborn boy has bilateral severe hydronephrosis, a thick-walled distended bladder, and a weak urinary stream. What is the most likely diagnosis?",
    "options": {
      "A": "Bilateral primary vesicoureteral reflux causing mild dilation with a normal, thin-walled bladder and normal urinary stream",
      "B": "Posterior urethral valves causing a bladder outlet obstruction that affects both kidneys and the bladder wall",
      "C": "Bilateral pelviureteric junction obstruction causing dilated renal pelves with a normal bladder that empties well",
      "D": "Prune belly syndrome with absent abdominal wall muscles and an enlarged, thin-walled, poorly contracting bladder only"
    },
    "answer": "B",
    "explanation": "Posterior urethral valves obstruct the outlet in boys and produce bilateral hydronephrosis with a thick-walled bladder. Bilateral reflux alone does not thicken the bladder wall. Pelviureteric junction obstruction leaves the bladder normal. Prune belly syndrome has a typical abdominal wall deficiency and is far less common.",
    "id": 175
  },
  {
    "domain": "genitourinary",
    "chapter": 19,
    "question": "What does the term hydronephrosis, as used in an ultrasound report, mean?",
    "options": {
      "A": "Backward flow of urine from the bladder into the ureter, shown only by a voiding study",
      "B": "Cortical thinning from long-standing scarring that proves permanent loss of function in that kidney",
      "C": "Dilation of the collecting system, which does not by itself prove that an obstruction is present",
      "D": "Dilation of the collecting system that confirms obstruction and requires prompt surgical drainage of the kidney"
    },
    "answer": "C",
    "explanation": "Hydronephrosis only describes dilation and may be transient or physiologic. Obstruction must be established by context and follow-up. Cortical thinning is a separate finding. Backward flow is reflux, a different process.",
    "id": 176
  },
  {
    "domain": "genitourinary",
    "chapter": 19,
    "question": "A prenatal ultrasound shows a mildly dilated renal pelvis. After birth, what is the usual first step?",
    "options": {
      "A": "A contrast computed tomography scan of the abdomen to define the ureter and look for stones",
      "B": "A postnatal ultrasound, timed after the first days of life so neonatal dehydration does not hide dilation",
      "C": "An immediate voiding cystourethrogram in every infant, whatever the degree of dilation or bladder appearance",
      "D": "A technetium renal scan on the first day of life to measure split function in both kidneys"
    },
    "answer": "B",
    "explanation": "Ultrasound is the radiation-free first test, and waiting a few days avoids false reassurance from low urine output. Routine cystography in all infants is not required. A scan on day one is unreliable because of immature renal function. Computed tomography exposes the infant to radiation without need.",
    "id": 177
  },
  {
    "domain": "genitourinary",
    "chapter": 19,
    "question": "A child has a duplex kidney. Which statement describes the Weigert-Meyer rule?",
    "options": {
      "A": "Both ureters insert at the same site, and the upper pole is the one reflux usually damages",
      "B": "The upper-pole moiety always has normal function and drains well, whereas the lower pole is dysplastic",
      "C": "The lower-pole ureter inserts lower and medially and obstructs, while the upper-pole ureter tends to reflux",
      "D": "The upper-pole ureter inserts lower and medially and obstructs, while the lower-pole ureter tends to reflux"
    },
    "answer": "D",
    "explanation": "In a complete duplication the upper-pole ureter ends ectopically, often in a ureterocele, and obstructs; the lower-pole ureter enters laterally and refluxes. The reversed statement has the poles switched. Equal insertion does not describe a complete duplex system. Upper pole function is often poor, not normal.",
    "id": 178
  },
  {
    "domain": "genitourinary",
    "chapter": 19,
    "question": "A balloon-like cystic filling defect is seen at the bladder base on ultrasound, with a dilated upper-pole ureter above it. What is it?",
    "options": {
      "A": "A urachal cyst, a midline cystic structure between the bladder dome and the umbilicus in the abdominal wall",
      "B": "A bladder diverticulum, an outpouching of the bladder wall usually found lateral to the ureteric orifice",
      "C": "A posterior urethral valve leaflet, which is seen only on a voiding study of the urethra in boys",
      "D": "A ureterocele, a cystic dilation of the distal ureter within the bladder, often with an upper-pole moiety"
    },
    "answer": "D",
    "explanation": "A ureterocele appears as a thin-walled cyst projecting into the bladder lumen from the distal ureter, typically draining an upper pole. A diverticulum is an outpouching, not an intravesical cyst. A urachal cyst lies above the bladder in the midline. Valve leaflets are not seen as a bladder base cyst.",
    "id": 179
  },
  {
    "domain": "genitourinary",
    "chapter": 19,
    "question": "A newborn has a solitary left kidney that is enlarged with compensatory hypertrophy. Which finding on ultrasound would be expected?",
    "options": {
      "A": "A horseshoe kidney with an isthmus crossing the midline in front of the aorta and inferior vena cava",
      "B": "An absent right kidney in the renal fossa with a left kidney larger than expected for age",
      "C": "An ectopic right kidney in the pelvis that is small and fully functional, with a normal left kidney",
      "D": "A multicystic dysplastic right kidney with many non-communicating cysts of varying size in the renal fossa"
    },
    "answer": "B",
    "explanation": "Unilateral renal agenesis leaves an empty fossa and the other kidney hypertrophies. An ectopic kidney would be found in the pelvis and the opposite kidney would not be enlarged. A multicystic dysplastic kidney is visible as cysts. A horseshoe kidney shows fusion, not an empty fossa.",
    "id": 180
  },
  {
    "domain": "genitourinary",
    "chapter": 19,
    "question": "Which feature best distinguishes a multicystic dysplastic kidney from severe hydronephrosis on ultrasound?",
    "options": {
      "A": "The kidney is enlarged with preserved cortex and a thin rim of fluid surrounding the renal capsule",
      "B": "The cysts are arranged around a central renal pelvis and communicate with it through dilated calyces",
      "C": "The cysts are all tiny, of identical size, and lie only in the medulla of both kidneys",
      "D": "The cysts do not communicate with a central pelvis, and little or no normal renal parenchyma is seen"
    },
    "answer": "D",
    "explanation": "A multicystic dysplastic kidney is a cluster of non-communicating cysts with no functional tissue. In hydronephrosis the dilated calyces connect to the pelvis and cortex is present. Preserved cortex does not fit dysplasia. Tiny medullary cysts of equal size suggest a different condition.",
    "id": 181
  },
  {
    "domain": "genitourinary",
    "chapter": 19,
    "question": "Which kidney anomaly is most strongly associated with a midline isthmus of tissue crossing in front of the aorta?",
    "options": {
      "A": "Horseshoe kidney, with fused lower poles whose ascent is stopped by the inferior mesenteric artery",
      "B": "Crossed fused renal ectopia, in which one kidney lies on the opposite side and fuses with the other",
      "C": "Pelvic kidney, in which the kidney fails to ascend and remains low near the iliac vessels",
      "D": "Bilateral duplex kidneys with ureteroceles, which cause upper pole obstruction on both sides of the bladder"
    },
    "answer": "A",
    "explanation": "A horseshoe kidney has fused lower poles joined by an isthmus anterior to the great vessels. Crossed fused ectopia places both kidneys on one side. A pelvic kidney is a single low kidney without a midline isthmus. Duplex kidneys do not fuse across the midline.",
    "id": 182
  },
  {
    "domain": "genitourinary",
    "chapter": 19,
    "question": "When is a voiding cystourethrogram most important in a newborn boy with bilateral hydronephrosis?",
    "options": {
      "A": "To look for adrenal hemorrhage and venous thrombosis in the renal vein of the newborn infant",
      "B": "To exclude a solid renal tumor by showing abnormal enhancement of the renal parenchyma on cross-sectional imaging",
      "C": "To confirm posterior urethral valves by showing a dilated posterior urethra with an abrupt caliber change",
      "D": "To measure split renal function and drainage half-time after a diuretic injection into a vein, using nuclear imaging"
    },
    "answer": "C",
    "explanation": "A voiding study shows the dilated posterior urethra above the valve, the diagnostic finding. Split function and drainage are shown by diuretic renography. Tumors and adrenal or venous problems are assessed with ultrasound or cross-sectional imaging, not cystography.",
    "id": 183
  },
  {
    "domain": "genitourinary",
    "chapter": 20,
    "question": "A febrile 8-month-old girl has a first urinary tract infection and responds to antibiotics in two days. What imaging is the usual first test?",
    "options": {
      "A": "Technetium DMSA scan performed during the acute illness to map every area of renal cortical involvement",
      "B": "Voiding cystourethrogram performed immediately to grade reflux in every infant with any first febrile infection",
      "C": "Abdominal computed tomography with contrast to search for a hidden renal abscess or an obstructing ureteric stone",
      "D": "Renal and bladder ultrasound, to look for hydronephrosis, anomalies, and complications of infection"
    },
    "answer": "D",
    "explanation": "Ultrasound is radiation-free and finds obstruction, anomalies, and larger complications. Routine voiding cystography after a first simple infection is not recommended. A DMSA scan during acute illness cannot separate temporary change from scar. Computed tomography adds radiation and is reserved for complicated cases.",
    "id": 184
  },
  {
    "domain": "genitourinary",
    "chapter": 20,
    "question": "A child with pyelonephritis is not improving after 48 hours of appropriate antibiotics, and ultrasound shows a focal hypoechoic wedge. What is the best next step?",
    "options": {
      "A": "Technetium MAG3 renography to measure split renal function and the drainage half-time of the infected kidney",
      "B": "Contrast-enhanced ultrasound or computed tomography, to look for focal nephritis or a developing abscess",
      "C": "Voiding cystourethrogram on the same day to grade reflux before any decision about changing the antibiotic",
      "D": "Repeat urine culture only and continue the same antibiotic for another week without further imaging"
    },
    "answer": "B",
    "explanation": "Failure to improve suggests focal bacterial nephritis or abscess, which contrast-enhanced imaging can show and define. Waiting without imaging risks missing an abscess. Reflux grading does not explain lack of response. MAG3 renography measures drainage, not an infected focus.",
    "id": 185
  },
  {
    "domain": "genitourinary",
    "chapter": 20,
    "question": "What is the best test to show permanent renal scarring after pyelonephritis?",
    "options": {
      "A": "DMSA scintigraphy performed in the first week of infection, when it shows permanent scarring most reliably",
      "B": "DMSA scintigraphy several months after infection, showing persistent photopenic cortical defects once inflammation has settled",
      "C": "Voiding cystourethrogram performed after infection to show scars directly on the surface of the renal cortex and pelvis",
      "D": "MAG3 diuretic renography performed after the infection to measure how quickly the kidney drains and its washout rate"
    },
    "answer": "B",
    "explanation": "DMSA binds functioning proximal tubular cells, and a persistent defect months later indicates scar. Early DMSA cannot tell reversible change from scar. MAG3 evaluates drainage. A voiding study shows reflux, not scar.",
    "id": 186
  },
  {
    "domain": "genitourinary",
    "chapter": 20,
    "question": "A voiding cystourethrogram shows contrast reaching a dilated renal pelvis with blunted calyces. Which reflux grade is this?",
    "options": {
      "A": "Grade I, with contrast limited to a ureter that has a normal caliber and no kidney filling",
      "B": "A normal study, because contrast reaching the kidney is a normal finding in many young infants",
      "C": "A high grade, with a dilated ureter and pelvis and loss of normal calyceal sharpness",
      "D": "Grade II, with contrast reaching the pelvis and calyces without any dilation or calyceal change at all"
    },
    "answer": "C",
    "explanation": "Blunted calyces with a dilated pelvis place the study in a higher reflux grade. Grades I and II have no dilation. Contrast reaching the kidney is never a normal finding.",
    "id": 187
  },
  {
    "domain": "genitourinary",
    "chapter": 20,
    "question": "In a boy with hydronephrosis and a suspected valve, what does a voiding cystourethrogram show in the urethra?",
    "options": {
      "A": "A narrowed anterior urethra with a long stricture at the bulb and a normal posterior urethra",
      "B": "A dilated, elongated posterior urethra with an abrupt caliber change at the level of the valve",
      "C": "A normal urethra with contrast filling only a small, hypertonic bladder with a thickened wall",
      "D": "A urethra of normal caliber with contrast leaking out into the pelvic soft tissues after injury"
    },
    "answer": "B",
    "explanation": "Posterior urethral valves cause dilation above the valve and a caliber change at the valve. An anterior stricture is a different process. A normal urethra excludes the diagnosis. Leakage suggests injury, not valves.",
    "id": 188
  },
  {
    "domain": "genitourinary",
    "chapter": 20,
    "question": "How does diuretic renography help in a dilated kidney?",
    "options": {
      "A": "It shows corticomedullary differentiation and tells the sonographer whether a kidney is enlarged, small, or echogenic",
      "B": "It grades vesicoureteral reflux by following contrast as it travels up the ureter during bladder voiding",
      "C": "It shows renal scars as photopenic defects that persist on delayed images taken many months after the infection",
      "D": "It separates a kidney that drains well after furosemide from a truly obstructed one by washout curve analysis"
    },
    "answer": "D",
    "explanation": "MAG3 with furosemide measures washout and relative function, separating obstruction from a dilated but draining system. Sonography judges size and echotexture. Reflux grading uses cystography. Scar detection is the role of DMSA.",
    "id": 189
  },
  {
    "domain": "genitourinary",
    "chapter": 20,
    "question": "Which factors can make a diuretic renogram falsely suggest obstruction?",
    "options": {
      "A": "Poor hydration, a full bladder, and a dilated system that fills slowly before the diuretic is given",
      "B": "Technically perfect positioning with a bladder catheter and well-timed diuretic administration for the whole test",
      "C": "A normal kidney with brisk drainage and a prompt fall of activity soon after the diuretic is injected",
      "D": "Excessive hydration with a bladder emptied just before the study and a well-timed diuretic injection into the vein"
    },
    "answer": "A",
    "explanation": "Dehydration, a full bladder, and poor timing prolong washout and mimic obstruction. Good hydration, emptied bladder, and a catheter help prevent this error. A normal kidney with prompt washout is not false.",
    "id": 190
  },
  {
    "domain": "genitourinary",
    "chapter": 20,
    "question": "A child with sudden flank pain has an echogenic focus with posterior shadowing in the renal pelvis. What is the most likely diagnosis?",
    "options": {
      "A": "A simple renal cyst, which shows enhanced through transmission and no internal echoes within its fluid",
      "B": "A hemorrhagic renal cyst, which contains internal echoes but does not shadow behind its contents",
      "C": "A renal stone, which may cause hydronephrosis if it moves into and obstructs the ureter",
      "D": "A calcified renal mass, which is found mainly in infants with a congenital infection or tumor"
    },
    "answer": "C",
    "explanation": "A shadowing echogenic focus is classic for a stone. A simple cyst shows enhanced through transmission. A hemorrhagic cyst may have echoes but not shadow. Infantile calcified masses are not the usual explanation.",
    "id": 191
  },
  {
    "domain": "genitourinary",
    "chapter": 20,
    "question": "A teenage girl has cystitis symptoms and a thickened bladder wall on ultrasound with normal kidneys. What does this finding indicate?",
    "options": {
      "A": "Bladder cancer, because wall thickening in a teenager is almost always due to a malignant process or tumor",
      "B": "A definite posterior urethral valve, because wall thickening is specific for outlet obstruction in any girl or boy",
      "C": "Bladder wall thickening from inflammation, nonspecific and best interpreted alongside the urine culture result",
      "D": "A normal variant, because the bladder wall always appears thick in an empty bladder at every age"
    },
    "answer": "C",
    "explanation": "Cystitis can thicken the wall, but the finding is nonspecific and an empty bladder also looks thicker. Posterior urethral valves occur in boys. Bladder cancer is very rare in children.",
    "id": 192
  },
  {
    "domain": "genitourinary",
    "chapter": 21,
    "question": "A healthy 3-year-old has a large palpable abdominal mass. Ultrasound shows a solid intrarenal mass with claw sign of renal tissue. What is the most likely diagnosis?",
    "options": {
      "A": "Neuroblastoma, an adrenal or sympathetic chain mass that encases vessels and often contains calcification at diagnosis",
      "B": "Mesoblastic nephroma, a solid renal mass seen almost exclusively in the first three months of life",
      "C": "Wilms tumor, a renal mass that arises within the kidney and distorts it without crossing the midline",
      "D": "Renal cell carcinoma, a renal mass found mainly in adolescents and often related to a genetic syndrome"
    },
    "answer": "C",
    "explanation": "A well-demarcated intrarenal mass in a healthy toddler with a claw of normal kidney is typical of Wilms tumor. Neuroblastoma arises outside the kidney and encases vessels. Mesoblastic nephroma is a neonatal tumor. Renal cell carcinoma is uncommon at this age.",
    "id": 193
  },
  {
    "domain": "genitourinary",
    "chapter": 21,
    "question": "An infant has a large suprarenal mass with calcification that encases the aorta and displaces the kidney downward. What is the most likely diagnosis?",
    "options": {
      "A": "Adrenocortical carcinoma, which usually presents with virilization or Cushing features in an older child with a large mass",
      "B": "Adrenal hemorrhage, which starts echogenic and then shrinks and becomes cystic over weeks without encasing vessels",
      "C": "Neuroblastoma, which arises from the adrenal gland or sympathetic chain and tends to encase rather than invade vessels",
      "D": "Wilms tumor, which arises from the kidney and typically pushes vessels aside while invading the renal vein"
    },
    "answer": "C",
    "explanation": "Calcification and vessel encasement from an extrarenal mass point to neuroblastoma. Wilms tumor displaces vessels. Adrenal hemorrhage involutes over weeks and does not encase vessels. Adrenocortical carcinoma usually shows hormonal effects.",
    "id": 194
  },
  {
    "domain": "genitourinary",
    "chapter": 21,
    "question": "What is the key imaging feature that distinguishes Wilms tumor from neuroblastoma?",
    "options": {
      "A": "Wilms tumor appears only in infants under one month, while neuroblastoma appears mainly in older adolescents",
      "B": "Wilms tumor is always bilateral and symmetric, while neuroblastoma is always a solitary intrarenal mass",
      "C": "Wilms tumor usually contains calcification and encases vessels, while neuroblastoma arises from the renal parenchyma",
      "D": "Wilms tumor arises within the kidney and displaces vessels, while neuroblastoma encases vessels and often calcifies"
    },
    "answer": "D",
    "explanation": "Wilms tumor is intrarenal with a claw of renal tissue and vessel displacement; neuroblastoma is extrarenal, calcifies, and encases. The reversed statement is wrong. Age ranges given are incorrect. Wilms tumor is usually unilateral.",
    "id": 195
  },
  {
    "domain": "genitourinary",
    "chapter": 21,
    "question": "Which finding should be searched for when staging a newly discovered Wilms tumor?",
    "options": {
      "A": "A cystic mass in the ovary that indicates a germ cell tumor in a girl with pain",
      "B": "Hydroureter and bladder wall thickening that suggest an obstructed collecting system from valves in a boy",
      "C": "Calcified lesions in the liver and bone that are typical of neuroblastoma stage four disease in children",
      "D": "Tumor thrombus extending into the renal vein or inferior vena cava, and the opposite kidney for synchronous tumors"
    },
    "answer": "D",
    "explanation": "Wilms tumor can grow into the renal vein and inferior vena cava, and bilateral disease occurs in a minority of children. Calcified metastases describe neuroblastoma. Ovarian cysts and hydroureter are unrelated to staging.",
    "id": 196
  },
  {
    "domain": "genitourinary",
    "chapter": 21,
    "question": "Metaiodobenzylguanidine scintigraphy is most useful for evaluating which tumor?",
    "options": {
      "A": "Neuroblastoma, because the tumor cells take up the tracer and show primary and metastatic disease",
      "B": "Osteosarcoma, because the tumor cells take up the tracer within bone and also in adjacent soft tissue",
      "C": "Hepatoblastoma, because the tumor cells take up the tracer in the liver and also spread to lung",
      "D": "Wilms tumor, because the tumor cells take up the tracer avidly and show the renal primary and metastases"
    },
    "answer": "A",
    "explanation": "Neuroblastoma cells are catecholamine-derived and take up the tracer, which stages the disease. Wilms tumor, hepatoblastoma, and osteosarcoma do not use this tracer pathway.",
    "id": 197
  },
  {
    "domain": "genitourinary",
    "chapter": 21,
    "question": "A newborn has a solid renal mass on ultrasound. Which tumor is most typical in this age group?",
    "options": {
      "A": "Renal cell carcinoma, a tumor that classically presents in teenagers and young adults with hematuria and family history",
      "B": "Congenital mesoblastic nephroma, a benign renal tumor that usually presents in the first months of life",
      "C": "Rhabdoid tumor of the kidney, a very aggressive tumor that metastasizes to the brain and lungs",
      "D": "Clear cell sarcoma of the kidney, a rare, aggressive tumor that usually presents in older children"
    },
    "answer": "B",
    "explanation": "Mesoblastic nephroma is the most common solid renal tumor in the neonate and is usually cured by surgery. Clear cell sarcoma and rhabdoid tumor occur later and are aggressive. Renal cell carcinoma is a tumor of older children.",
    "id": 198
  },
  {
    "domain": "genitourinary",
    "chapter": 21,
    "question": "A teenager with hematuria has a renal mass with a known family history of a genetic syndrome. Which tumor should be considered?",
    "options": {
      "A": "Renal cell carcinoma, which is less common than Wilms tumor in children but rises in adolescence",
      "B": "Wilms tumor, which most often presents in the teen years with painless hematuria and a small mass",
      "C": "Mesoblastic nephroma, which characteristically presents in a teenager with a large renal mass and hematuria",
      "D": "Neuroblastoma, which characteristically presents in an adolescent as a renal pelvic mass with hematuria"
    },
    "answer": "A",
    "explanation": "Renal cell carcinoma becomes relatively more common in adolescence and can be associated with syndromes. Wilms tumor peaks in early childhood. Mesoblastic nephroma is a tumor of infants. Neuroblastoma arises from the adrenal or sympathetic chain.",
    "id": 199
  },
  {
    "domain": "genitourinary",
    "chapter": 21,
    "question": "A teenage girl has an adnexal mass with fat, calcification, and a Rokitansky nodule. What is the most likely diagnosis?",
    "options": {
      "A": "Pelvic abscess, a complex collection with a thick enhancing wall in a febrile adolescent",
      "B": "Ovarian dysgerminoma, a solid tumor with lobulated enhancing septa that does not contain fat",
      "C": "Mature cystic teratoma, a benign germ cell tumor that contains fat, hair, and sometimes teeth",
      "D": "Hemorrhagic ovarian cyst, a thin-walled cyst with a reticular pattern and no fat or calcification"
    },
    "answer": "C",
    "explanation": "Fat and a Rokitansky nodule are characteristic of mature teratoma. Dysgerminoma is solid with septa and no fat. A hemorrhagic cyst has no fat. A pelvic abscess presents with fever and infection.",
    "id": 200
  },
  {
    "domain": "genitourinary",
    "chapter": 21,
    "question": "A young child has a presacral mass with fat, calcification, and cystic components. What is the most likely diagnosis?",
    "options": {
      "A": "Neuroblastoma, a presacral mass that always has the typical metaiodobenzylguanidine uptake in bone",
      "B": "Rhabdomyosarcoma, a solid pelvic soft tissue tumor that arises from the bladder or vagina",
      "C": "Anterior sacral meningocele, a cystic extension of the dural sac through a bony sacral defect",
      "D": "Sacrococcygeal teratoma, a germ cell tumor that is most often diagnosed in newborns and girls"
    },
    "answer": "D",
    "explanation": "A presacral mass with mixed fat, calcification, and cysts is a sacrococcygeal teratoma. A meningocele is purely cystic and connects to the thecal sac. Rhabdomyosarcoma is solid. Neuroblastoma is possible but lacks fat.",
    "id": 201
  },
  {
    "domain": "genitourinary",
    "chapter": 22,
    "question": "A 9-year-old girl has sudden severe lower abdominal pain and vomiting. Ultrasound shows an enlarged ovary with peripheral follicles and absent flow. What is the diagnosis?",
    "options": {
      "A": "Acute appendicitis, in which a noncompressible blind-ending tubular structure is seen in the right lower quadrant",
      "B": "Ruptured hemorrhagic cyst, in which echogenic free fluid fills the pelvis and the ovary keeps normal flow",
      "C": "Ovarian torsion, in which an enlarged edematous ovary shows peripheral follicles, and flow may be preserved or absent",
      "D": "Pelvic inflammatory disease, in which a tubo-ovarian complex appears in a sexually active teenager with fever and discharge"
    },
    "answer": "C",
    "explanation": "An enlarged ovary with peripheral follicles and acute pain indicates torsion; preserved Doppler flow does not exclude it. A ruptured cyst spares the ovary's flow. Appendicitis is a separate bowel finding. Pelvic inflammatory disease occurs with fever and sexual activity.",
    "id": 202
  },
  {
    "domain": "genitourinary",
    "chapter": 22,
    "question": "Why can normal Doppler flow in the ovary not exclude torsion?",
    "options": {
      "A": "Doppler is unreliable in children because the ovaries are too small to show any vascular signal at all",
      "B": "Torsion only occurs in ovaries that contain a mass, and a normal-looking ovary can never twist",
      "C": "Torsion can be partial or intermittent and the ovary has dual supply, so flow may remain",
      "D": "Venous and arterial flow always stop together at the very first moment that the ovary twists"
    },
    "answer": "C",
    "explanation": "Partial or intermittent torsion and dual blood supply can preserve flow, so clinical findings and enlarged size still count. The statements about small ovaries, masses only, and simultaneous flow loss are not accurate.",
    "id": 203
  },
  {
    "domain": "genitourinary",
    "chapter": 22,
    "question": "What is the usual sonographic appearance of the uterus and ovaries in a prepubertal girl?",
    "options": {
      "A": "A small tubular uterus with a cervix as large as the fundus, and small ovaries with few follicles",
      "B": "A large uterus with a thick endometrial stripe and ovaries that contain a dominant follicle",
      "C": "A uterus that cannot be seen on ultrasound and ovaries that are absent until the start of puberty",
      "D": "A pear-shaped uterus with a fundus larger than the cervix and ovaries with many large follicles"
    },
    "answer": "A",
    "explanation": "Before puberty the uterus is tubular with a cervix equal to or larger than the fundus, and ovaries are small. The pear shape and thick stripe appear at puberty. Both organs can usually be seen.",
    "id": 204
  },
  {
    "domain": "genitourinary",
    "chapter": 22,
    "question": "A teenage girl has fever, pelvic pain, and a complex adnexal mass with a thick wall. What is the likely diagnosis?",
    "options": {
      "A": "Mature cystic teratoma, a mass with fat and calcification that has no fever and no wall enhancement",
      "B": "Tubo-ovarian abscess from pelvic inflammatory disease, a complex adnexal collection with an enhancing thick wall",
      "C": "Simple functional ovarian cyst, a thin-walled anechoic cyst that is usually painless and resolves on its own",
      "D": "Ovarian torsion, an enlarged edematous ovary with sudden severe pain and no fever, without a wall-enhancing collection"
    },
    "answer": "B",
    "explanation": "Fever with a complex thick-walled adnexal mass is tubo-ovarian abscess. A teratoma contains fat. A simple cyst is thin-walled and anechoic. Torsion has sudden severe pain without a collection.",
    "id": 205
  },
  {
    "domain": "genitourinary",
    "chapter": 22,
    "question": "A newborn girl has a large midline pelvic cystic mass with a fluid-debris level. What is the most likely diagnosis?",
    "options": {
      "A": "Sacrococcygeal teratoma, in which a solid and cystic mass lies behind the rectum with fat and calcification",
      "B": "Bladder distension, in which a thin-walled fluid-filled structure empties completely after the baby voids or is catheterized",
      "C": "Hydrometrocolpos, in which a vaginal obstruction fills the vagina and uterus with retained secretions",
      "D": "Ovarian cyst, in which a round thin-walled cyst lies off the midline in the abdomen without any debris"
    },
    "answer": "C",
    "explanation": "A midline fluid-filled mass with debris behind the bladder indicates a distended vagina and uterus from an obstructed outflow tract. A teratoma is behind the rectum. An ovarian cyst lies off midline. A distended bladder empties.",
    "id": 206
  },
  {
    "domain": "genitourinary",
    "chapter": 22,
    "question": "Which anomaly causes cyclic pain with a blind obstructed vagina or uterine horn after menarche?",
    "options": {
      "A": "Complete androgen insensitivity, in which the child has testes and no uterus and has no cyclic pain",
      "B": "Turner syndrome, in which the ovaries are streaks and the uterus is small without menstrual bleeding",
      "C": "Mayer-Rokitansky-Kuster-Hauser syndrome, in which the vagina and uterus are absent and menstrual blood cannot accumulate",
      "D": "Obstructed hemivagina with same-side renal agenesis in uterus didelphys, causing retained menstrual blood"
    },
    "answer": "D",
    "explanation": "Obstructed hemivagina with ipsilateral renal agenesis (the Herlyn-Werner-Wunderlich pattern) retains menstrual blood. Absent uterus, androgen insensitivity, and streak ovaries cannot collect blood, so none cause cyclic pain.",
    "id": 207
  },
  {
    "domain": "genitourinary",
    "chapter": 22,
    "question": "What is the best first imaging test for a child with suspected differences of sex development?",
    "options": {
      "A": "Voiding cystourethrogram, to show the bladder and urethra and thereby exclude all gonadal tissue present",
      "B": "Technetium bone scintigraphy, to show metabolically active gonadal tissue lying within the pelvis of the infant",
      "C": "Computed tomography of the pelvis to show the gonads and the exact internal anatomy of the whole pelvis",
      "D": "Pelvic ultrasound, to show whether a uterus and gonads are present and where the gonads lie"
    },
    "answer": "D",
    "explanation": "Ultrasound is radiation-free and shows the uterus, gonads, and adrenal glands in an infant. Computed tomography adds radiation. A voiding study shows the urethra and a urogenital sinus, not gonads. Bone scans are not useful.",
    "id": 208
  },
  {
    "domain": "genitourinary",
    "chapter": 22,
    "question": "Which finding supports congenital adrenal hyperplasia in a newborn with ambiguous genitalia?",
    "options": {
      "A": "Small adrenal glands with a normal surface, plus testes identified in both inguinal canals and no uterus",
      "B": "Normal adrenal glands, with a uterus that is absent and testes lying within the abdomen on imaging",
      "C": "Adrenal masses with calcification that encase the aorta, with an absent uterus and absent ovaries on ultrasound",
      "D": "Enlarged adrenal glands with a cerebriform surface, plus a uterus identified on pelvic ultrasound"
    },
    "answer": "D",
    "explanation": "Congenital adrenal hyperplasia enlarges the adrenals with a cerebriform pattern in a 46,XX infant who has a uterus. Small adrenals and testes do not fit. Calcified adrenal masses describe neuroblastoma. A normal adrenal with absent uterus fits other conditions.",
    "id": 209
  },
  {
    "domain": "genitourinary",
    "chapter": 22,
    "question": "A girl has a prepubertal pelvic ultrasound showing a uterus with a thick endometrium and multiple large follicles. What should be considered?",
    "options": {
      "A": "Precocious puberty, with a pubertal uterine shape and enlarged ovaries that need clinical and hormonal correlation",
      "B": "Ovarian torsion, because multiple large follicles are the typical sign of a twisted ovary with absent Doppler flow",
      "C": "Congenital absence of the uterus, because a thick endometrium and large follicles exclude the presence of any uterus",
      "D": "Normal prepubertal anatomy, because the endometrium is always thick before puberty in girls and multiple follicles are routine"
    },
    "answer": "A",
    "explanation": "A pubertal uterus with a thick endometrium before the expected age suggests precocious puberty. A thick endometrium is not normal before puberty. Many follicles alone do not mean torsion. A thick endometrium proves a uterus is present.",
    "id": 210
  },
  {
    "domain": "musculoskeletal",
    "chapter": 23,
    "question": "A 2-year-old has a limp and refuses to walk after a minor twist. Radiographs show a subtle spiral line through the tibial shaft. What is the injury?",
    "options": {
      "A": "Toddler fracture, a nondisplaced spiral tibial shaft fracture in a young child who refuses weight bearing",
      "B": "Salter-Harris type III fracture, an injury that crosses the physis and epiphysis and enters the knee joint",
      "C": "Tibial plateau fracture, a high-energy intra-articular injury that usually follows a motor vehicle crash in older teenagers",
      "D": "Osgood-Schlatter disease, an overuse apophysitis at the tibial tubercle that affects active adolescents during growth"
    },
    "answer": "A",
    "explanation": "A subtle spiral tibial shaft fracture in a toddler is the toddler fracture. Tibial plateau fractures need high energy. Osgood-Schlatter is an overuse problem in adolescents. A Salter-Harris injury involves the growth plate and has a different pattern.",
    "id": 211
  },
  {
    "domain": "musculoskeletal",
    "chapter": 23,
    "question": "Which Salter-Harris type involves a fracture through the physis, metaphysis, and epiphysis?",
    "options": {
      "A": "Type IV, in which the fracture runs through all three layers and can disturb later growth",
      "B": "Type I, in which the fracture passes only through the physis and may look normal on a radiograph",
      "C": "Type II, in which the fracture passes through the physis and exits through the metaphysis only",
      "D": "Type V, in which the physis is crushed without a visible fracture line and growth stops later"
    },
    "answer": "A",
    "explanation": "Type IV crosses the metaphysis, physis, and epiphysis, so it enters the joint and may arrest growth. Type I is physeal only. Type II exits through the metaphysis. Type V is a crush injury of the physis.",
    "id": 212
  },
  {
    "domain": "musculoskeletal",
    "chapter": 23,
    "question": "What is the most common Salter-Harris type?",
    "options": {
      "A": "Type I, in which the fracture lies only within the growth plate and spares both bone ends",
      "B": "Type III, in which the fracture crosses the physis and passes up through the epiphysis alone",
      "C": "Type IV, in which the fracture crosses the metaphysis, physis, and epiphysis together in one line",
      "D": "Type II, in which the fracture crosses the physis and extends into the adjacent metaphysis"
    },
    "answer": "D",
    "explanation": "Type II is the most common and has a metaphyseal corner fragment. Type I is physeal only, type III involves the physis and epiphysis, and type IV involves all three layers; each is less frequent.",
    "id": 213
  },
  {
    "domain": "musculoskeletal",
    "chapter": 23,
    "question": "A child falls on an outstretched hand and the radiograph shows a buckled cortex of the distal radius with no cortical break. What is the injury?",
    "options": {
      "A": "A complete transverse fracture, in which both cortices are broken through and the ends may be displaced",
      "B": "A buckle (torus) fracture, an incomplete compression injury of the cortex in the metaphysis",
      "C": "A greenstick fracture, in which the cortex breaks on the tension side and bends on the other",
      "D": "A plastic bowing deformity, in which the bone bends without any visible cortical break or buckling"
    },
    "answer": "B",
    "explanation": "A buckle fracture shows cortical compression without a break through. A greenstick fracture breaks one cortex. Plastic bowing has no cortical buckle. A complete fracture breaks both cortices.",
    "id": 214
  },
  {
    "domain": "musculoskeletal",
    "chapter": 23,
    "question": "Which fracture in an infant is most specific for abusive injury?",
    "options": {
      "A": "A buckle fracture, a compression injury of the distal radius after a fall on an outstretched hand",
      "B": "A clavicular fracture, which commonly occurs during a difficult delivery of a large newborn infant",
      "C": "A classic metaphyseal lesion, a corner or bucket-handle fracture at the end of a long bone",
      "D": "A toddler fracture, a spiral tibial fracture in a child who is learning to walk after a fall"
    },
    "answer": "C",
    "explanation": "Classic metaphyseal lesions are highly specific for abuse. Clavicular fractures occur at birth. Toddler fractures and buckle fractures are common accidental injuries.",
    "id": 215
  },
  {
    "domain": "musculoskeletal",
    "chapter": 23,
    "question": "A 6-year-old falls from monkey bars onto an extended elbow. Which sign on the lateral radiograph suggests an occult supracondylar fracture?",
    "options": {
      "A": "An elevated anterior fat pad and a visible posterior fat pad, indicating a joint effusion from injury",
      "B": "A widened ulnohumeral joint space and sclerosis of the trochlea from a chronic overuse osteochondral injury",
      "C": "A normal anterior humeral line crossing the middle third of the capitellum with no fat pad displacement",
      "D": "A lucent line through the radial neck with obvious displacement of the radial head from the capitellum"
    },
    "answer": "A",
    "explanation": "After elbow trauma a posterior fat pad and a raised anterior fat pad mean effusion, so an occult fracture is likely. A normal anterior humeral line is reassuring. Radial neck displacement and chronic trochlear change describe different problems.",
    "id": 216
  },
  {
    "domain": "musculoskeletal",
    "chapter": 23,
    "question": "A runner in adolescence has shin pain that worsens with exercise, and the radiograph shows periosteal reaction. What is the likely diagnosis?",
    "options": {
      "A": "A stress fracture from repetitive loading, which may be seen early only on magnetic resonance imaging",
      "B": "An acute displaced fracture from a single violent impact that causes immediate deformity and loss of function",
      "C": "A bone tumor that produces a fixed lump and constant pain that does not vary with exercise",
      "D": "A bone infection from bacteria that causes fever, high inflammatory markers, and constant night pain"
    },
    "answer": "A",
    "explanation": "Exercise-related pain with periosteal reaction suggests a stress fracture, and MRI is more sensitive early. An acute fracture follows a single impact. Infection causes fever. A tumor causes constant pain.",
    "id": 217
  },
  {
    "domain": "musculoskeletal",
    "chapter": 23,
    "question": "What is an avulsion fracture in an adolescent athlete?",
    "options": {
      "A": "A fracture caused by a direct blow that crushes the bone into many small pieces, called comminuted",
      "B": "A fragment pulled off at a tendon or ligament attachment, such as the anterior inferior iliac spine",
      "C": "A fracture caused by repeated small stresses that gradually weaken the shaft of a long bone over weeks",
      "D": "A fracture caused by an underlying bone cyst that weakens the cortex and breaks with minimal trauma"
    },
    "answer": "B",
    "explanation": "Avulsion fractures occur at apophyses where a strong muscle pulls off a fragment. Repeated stress describes stress fractures. A crush injury is comminuted. A pathologic fracture occurs through a cyst.",
    "id": 218
  },
  {
    "domain": "musculoskeletal",
    "chapter": 23,
    "question": "Which sign suggests a healing fracture on follow-up radiographs?",
    "options": {
      "A": "Complete disappearance of the fracture line within three days of the original injury in a child",
      "B": "Widening of the fracture gap with loss of all periosteal reaction at the site after several weeks",
      "C": "Periosteal new bone and soft callus bridging the fracture, with the fracture line becoming less distinct",
      "D": "A new lytic lesion with a permeative pattern spreading from the fracture site into the shaft"
    },
    "answer": "C",
    "explanation": "Callus and periosteal bone indicate healing, and the line fades over weeks. Widening without reaction suggests nonunion. A permeative lesion suggests tumor or infection. Complete resolution in three days is not expected.",
    "id": 219
  },
  {
    "domain": "musculoskeletal",
    "chapter": 24,
    "question": "A 14-month-old with bowed legs has widened, frayed, cupped metaphyses and widened physes at the wrists and knees. What is the most likely diagnosis?",
    "options": {
      "A": "Rickets, a mineralization defect of growing bone, usually from vitamin D deficiency, seen at the metaphyses",
      "B": "Osteogenesis imperfecta, a collagen disorder with fragile bones, blue sclerae, and multiple fractures of varying age",
      "C": "Achondroplasia, a skeletal dysplasia with short limbs, a narrow interpediculate distance, and a small foramen magnum",
      "D": "Scurvy, a vitamin C deficiency with dense metaphyseal lines, a ring epiphysis, and subperiosteal hemorrhage in infants"
    },
    "answer": "A",
    "explanation": "Widened, cupped, frayed metaphyses and widened physes are the signs of rickets. Scurvy produces dense lines and a ring epiphysis. Achondroplasia is a dysplasia with a different pattern. Osteogenesis imperfecta shows fragile osteopenic bones and fractures.",
    "id": 220
  },
  {
    "domain": "musculoskeletal",
    "chapter": 24,
    "question": "Which sites show rickets earliest and most clearly on radiographs?",
    "options": {
      "A": "The distal radius, distal ulna, and knees, because these growth plates are the fastest growing",
      "B": "The small bones of the hands and feet, because they grow most slowly in early infancy",
      "C": "The vertebral bodies and sacrum, because axial bones mineralize last in young children",
      "D": "The skull vault and mandible, because intramembranous bone is the first to lose its mineral in early infancy"
    },
    "answer": "A",
    "explanation": "Rickets appears first where growth is fastest, at the wrists and knees. The skull, small tubular bones, and axial skeleton are not the early sites.",
    "id": 221
  },
  {
    "domain": "musculoskeletal",
    "chapter": 24,
    "question": "A child with short limbs and a normal trunk has a narrowing interpediculate distance from the upper to lower lumbar spine. What is the diagnosis?",
    "options": {
      "A": "Thanatophoric dysplasia, a lethal dysplasia with severe platyspondyly, a small thorax, and telephone receiver femora",
      "B": "Spondyloepiphyseal dysplasia, a disorder with a short trunk, epiphyseal changes, and a normal spinal canal width",
      "C": "Morquio syndrome, a mucopolysaccharidosis with platyspondyly, a short trunk, and a hypoplastic odontoid process",
      "D": "Achondroplasia, the commonest nonlethal dysplasia, with rhizomelic shortening and lumbar canal narrowing"
    },
    "answer": "D",
    "explanation": "Failure of the interpediculate distance to widen caudally with rhizomelic shortening is achondroplasia. Morquio and spondyloepiphyseal dysplasia have short trunks. Thanatophoric dysplasia is lethal with a small thorax.",
    "id": 222
  },
  {
    "domain": "musculoskeletal",
    "chapter": 24,
    "question": "A newborn has multiple fractures at different stages of healing, blue sclerae, and wormian bones on skull films. What is the diagnosis?",
    "options": {
      "A": "Nonaccidental trauma, in which unexplained fractures occur without any collagen disorder or any family history",
      "B": "Osteogenesis imperfecta, a collagen disorder with fragile bones and fractures after minimal trauma",
      "C": "Hypophosphatasia, a deficiency of alkaline phosphatase with poor mineralization and skeletal deformity in infants",
      "D": "Achondroplasia, a dysplasia with rhizomelia, a normal trunk, an enlarged head, and a narrow spinal canal"
    },
    "answer": "B",
    "explanation": "Fragile bones, blue sclerae, and wormian bones indicate osteogenesis imperfecta. Hypophosphatasia has low alkaline phosphatase. Achondroplasia lacks fractures. Nonaccidental trauma must be considered, but these findings point to a collagen disorder.",
    "id": 223
  },
  {
    "domain": "musculoskeletal",
    "chapter": 24,
    "question": "A child with sickle cell disease has fever and bone pain. Which condition is most common and what is the best first imaging?",
    "options": {
      "A": "Fracture is the commonest cause of such pain, and bone scintigraphy is the best first imaging test",
      "B": "Osteosarcoma is the commonest cause of such pain, and computed tomography is the best first imaging test",
      "C": "Bone infarction is more common than osteomyelitis, and magnetic resonance imaging helps tell them apart",
      "D": "Osteomyelitis is far more common than infarction, and radiographs reliably separate the two very early on"
    },
    "answer": "C",
    "explanation": "Infarction is more frequent than infection in sickle cell disease and the two overlap clinically. MRI helps distinguish them. Radiographs lag behind. Osteosarcoma and fracture are not the most common causes.",
    "id": 224
  },
  {
    "domain": "musculoskeletal",
    "chapter": 24,
    "question": "Which finding on radiographs suggests acute osteomyelitis in a child with several days of fever and limb pain?",
    "options": {
      "A": "Soft tissue swelling with lost fat planes, then a lucent metaphyseal lesion and periosteal reaction later",
      "B": "A well-marginated lucent lesion with a sclerotic rim and no soft tissue swelling or periosteal reaction",
      "C": "Symmetric dense transverse metaphyseal bands in all long bones from chronic heavy metal exposure in childhood",
      "D": "Immediate dense sclerosis of the whole bone with a normal marrow signal on magnetic resonance imaging"
    },
    "answer": "A",
    "explanation": "Early osteomyelitis shows soft tissue swelling, and bone change lags by a week or more. Immediate sclerosis is not seen. A sclerotic-rimmed lesion without swelling is benign. Dense metaphyseal bands suggest lead or other causes.",
    "id": 225
  },
  {
    "domain": "musculoskeletal",
    "chapter": 24,
    "question": "What is the typical radiographic finding of scurvy in an infant?",
    "options": {
      "A": "Widened, frayed, and cupped metaphyses with widened physes and delayed appearance of the epiphyses in an infant",
      "B": "Rhizomelic limb shortening with a normal trunk and a narrowed interpediculate distance in the lumbar spine",
      "C": "Multiple wormian bones in the skull with blue sclerae and repeated fractures of varying ages in an infant",
      "D": "A dense zone of provisional calcification, a ring epiphysis, and subperiosteal hemorrhage beneath the dense line"
    },
    "answer": "D",
    "explanation": "Scurvy shows a dense white line, a ring epiphysis, and subperiosteal hemorrhage. Widened frayed metaphyses are rickets. Wormian bones with blue sclerae suggest osteogenesis imperfecta. Rhizomelic shortening describes achondroplasia.",
    "id": 226
  },
  {
    "domain": "musculoskeletal",
    "chapter": 24,
    "question": "What is the best description of leukemic involvement of bone in a child?",
    "options": {
      "A": "Diffuse osteopenia with lucent transverse metaphyseal bands and sometimes periosteal reaction or lytic lesions",
      "B": "A single expansile lytic lesion with a fluid-fluid level in the diaphysis of one long bone",
      "C": "Dense sclerosis of all long bones with thickened cortices and narrowed marrow cavities throughout the skeleton",
      "D": "Multiple symmetric epiphyseal fragmentation with flattened femoral heads in a short child with normal bone density"
    },
    "answer": "A",
    "explanation": "Leukemia causes osteopenia, lucent metaphyseal bands, and sometimes periosteal reaction. Dense sclerosis suggests osteopetrosis. A fluid-level lesion suggests an aneurysmal bone cyst. Epiphyseal fragmentation suggests a dysplasia or ischemic condition.",
    "id": 227
  },
  {
    "domain": "musculoskeletal",
    "chapter": 24,
    "question": "Which finding suggests osteopetrosis on a radiograph?",
    "options": {
      "A": "Short ribs with a narrow thorax and trident acetabula in a newborn with early respiratory distress",
      "B": "Diffuse osteopenia with thin cortices and many wormian bones in the skull of an infant with repeated fractures",
      "C": "Widened metaphyses with fraying and cupping at the wrists and knees of a vitamin-deficient toddler with bowed legs",
      "D": "Diffuse dense bones, a bone-within-bone appearance, and Erlenmeyer flask deformity of the distal femora"
    },
    "answer": "D",
    "explanation": "Osteopetrosis produces dense bones, bone-within-bone, and flask-shaped femora. Osteopenia with wormian bones is osteogenesis imperfecta. Fraying and cupping is rickets. Short ribs and trident acetabula describe asphyxiating thoracic dysplasia.",
    "id": 228
  },
  {
    "domain": "musculoskeletal",
    "chapter": 25,
    "question": "A 3-week-old girl born breech has a click on hip examination. Which first imaging test best evaluates the hip?",
    "options": {
      "A": "Ultrasound of the hip, because the femoral head is still cartilage and not yet ossified",
      "B": "CT of the pelvis with three-dimensional reconstruction, to define the socket shape and femoral head",
      "C": "MRI of both hips under sedation, to show the cartilaginous femoral head in detail",
      "D": "Frontal pelvis radiograph with the legs held straight, to measure the acetabular roof and head position"
    },
    "answer": "A",
    "explanation": "Ultrasound shows the unossified cartilaginous head, its coverage by the socket, and stability with stress, so it is the first test. A radiograph shows little because the head is not ossified. MRI needs sedation and is not a screening tool, and CT adds radiation without showing cartilage well.",
    "id": 229
  },
  {
    "domain": "musculoskeletal",
    "chapter": 25,
    "question": "A 7-year-old boy has several weeks of limp and groin pain. The pelvis radiograph is normal. Which diagnosis may MRI reveal?",
    "options": {
      "A": "Developmental dysplasia of the hip, shown as a shallow socket with lateral head displacement",
      "B": "Septic arthritis of the hip, shown as a large complex effusion with thickened synovium",
      "C": "Early Legg-Calve-Perthes disease, shown as marrow edema or loss of normal epiphyseal signal",
      "D": "Slipped capital femoral epiphysis, shown as posterior displacement of the head relative to the femoral neck"
    },
    "answer": "C",
    "explanation": "Perthes disease is avascular necrosis of the femoral epiphysis, and early radiographs may be normal while MRI shows marrow change. Slipped capital femoral epiphysis is a disease of older, often obese adolescents. Dysplasia is a developmental problem seen in infants, and septic arthritis presents with fever and inability to bear weight.",
    "id": 230
  },
  {
    "domain": "musculoskeletal",
    "chapter": 25,
    "question": "A 13-year-old obese boy has knee pain and a limp, and the knee radiograph is normal. What is the best next step?",
    "options": {
      "A": "Examine and image the hip, with frontal and frog-leg or cross-table lateral views",
      "B": "Repeat the knee radiograph in two weeks, looking for a delayed stress fracture or osteochondral lesion",
      "C": "Obtain an ultrasound of the knee joint to search for a small effusion or popliteal cyst",
      "D": "Obtain MRI of the knee to look for a meniscal tear or ligament injury"
    },
    "answer": "A",
    "explanation": "Slipped capital femoral epiphysis can present as referred knee pain, so a normal knee film calls for hip imaging, including a lateral view. Knee MRI would look at the wrong joint. Waiting two weeks delays diagnosis of a slip that can become unstable, and knee ultrasound again targets the wrong joint.",
    "id": 231
  },
  {
    "domain": "musculoskeletal",
    "chapter": 25,
    "question": "Which feature of a hip effusion on ultrasound reliably separates transient synovitis from septic arthritis?",
    "options": {
      "A": "Thickening of the joint capsule always indicates transient synovitis rather than a bacterial infection of the hip",
      "B": "Anechoic fluid with no internal echoes always excludes infection and confirms transient synovitis",
      "C": "A large effusion always indicates infection, while a small effusion always indicates transient synovitis",
      "D": "None, because both can show an effusion and clinical findings and aspiration decide the diagnosis"
    },
    "answer": "D",
    "explanation": "Fluid alone cannot separate the two, and a clear effusion does not exclude infection. Size is not a reliable discriminator, and clear fluid does not rule out infection. Capsular thickening is also not specific, so clinical features such as fever, markers, and weight bearing guide aspiration.",
    "id": 232
  },
  {
    "domain": "musculoskeletal",
    "chapter": 25,
    "question": "On a frontal pelvis radiograph of a child with a slipped capital femoral epiphysis, what does the Klein line show?",
    "options": {
      "A": "A line along the roof of the socket lies above the ossified femoral head",
      "B": "A line along the lateral femoral neck fails to cross any of the femoral head",
      "C": "A line along the pelvic inlet is asymmetric because of the pelvic rotation on the film",
      "D": "A line along the femoral neck crosses the femoral head and shows a normal relationship"
    },
    "answer": "B",
    "explanation": "In a slip, the head lies entirely inside the line drawn along the lateral femoral neck. Crossing part of the head is the normal finding. A line along the acetabular roof is used for dysplasia, and pelvic rotation is a technical problem rather than the Klein line.",
    "id": 233
  },
  {
    "domain": "musculoskeletal",
    "chapter": 25,
    "question": "A child with a growth plate fracture crossing the metaphysis, plate, and epiphysis is classified as which Salter-Harris type?",
    "options": {
      "A": "Type V, a crush injury to the physis with little visible displacement",
      "B": "Type III, a fracture through the physis that exits through the epiphysis into the adjacent joint space",
      "C": "Type II, a fracture through the physis that exits through the metaphysis",
      "D": "Type IV, a fracture crossing the metaphysis, the physis, and the epiphysis"
    },
    "answer": "D",
    "explanation": "Type IV crosses all three parts. Type II exits the metaphysis only, and Type III exits the epiphysis only. Type V is a crush injury to the plate, usually subtle at first, and it does not describe a fracture line crossing all three parts.",
    "id": 234
  },
  {
    "domain": "musculoskeletal",
    "chapter": 25,
    "question": "A 2-year-old with a healed tibial fracture months earlier now has progressive angulation. Which complication should be considered?",
    "options": {
      "A": "A physeal bony bar tethering part of the growth plate, mapped with CT or MRI",
      "B": "Developmental dysplasia of the hip, which would cause new leg length inequality and a limp",
      "C": "Chronic recurrent multifocal osteomyelitis, which would cause multiple relapsing lesions across several bones",
      "D": "Physiologic bowing, which would be symmetric and tend to straighten spontaneously with age"
    },
    "answer": "A",
    "explanation": "A bony bar tethers part of the plate while the rest grows, producing progressive angulation, and CT or MRI maps it. Physiologic bowing is symmetric and corrects. Dysplasia is a hip disorder of infancy, and multifocal osteomyelitis would present with pain and multiple lesions rather than angulation after a fracture.",
    "id": 235
  },
  {
    "domain": "musculoskeletal",
    "chapter": 25,
    "question": "A toddler has progressive bowing with irregularity and depression of the medial proximal tibial metaphysis. What is the most likely diagnosis?",
    "options": {
      "A": "Physiologic genu varum, which is symmetric and improves without any focal tibial abnormality",
      "B": "Slipped capital femoral epiphysis, which causes posterior displacement of the femoral head at the hip",
      "C": "Tibia vara (Blount disease), a growth disturbance of the medial proximal tibial growth plate",
      "D": "Rickets, which causes widened and frayed growth plates at the wrists and knees"
    },
    "answer": "C",
    "explanation": "Blount disease produces bowing that worsens, with medial proximal tibial depression. Rickets gives widened, frayed plates more diffusely. Physiologic bowing has a normal-appearing tibia, and a slip affects the hip rather than the tibia.",
    "id": 236
  },
  {
    "domain": "musculoskeletal",
    "chapter": 25,
    "question": "Why is a screening hip ultrasound often delayed until about two to six weeks of age in a well newborn?",
    "options": {
      "A": "Early ligament laxity from maternal hormones can make a normal hip appear falsely unstable",
      "B": "The femoral head does not appear on ultrasound until roughly three months of age",
      "C": "Radiation exposure from early imaging is the main reason that ultrasound is delayed until after the first month",
      "D": "Treatment with a harness cannot be started before the infant reaches six weeks of age"
    },
    "answer": "A",
    "explanation": "Maternal hormones loosen ligaments early, and most such hips tighten on their own, so early scanning overcalls. The cartilaginous head is visible on ultrasound from birth, ultrasound uses no radiation, and a clinically dislocated hip should not wait for treatment at all.",
    "id": 237
  },
  {
    "domain": "musculoskeletal",
    "chapter": 26,
    "question": "A 4-year-old has fever, a swollen knee, and refusal to walk. Radiographs are normal. Which statement is most accurate?",
    "options": {
      "A": "Normal early radiographs do not exclude osteomyelitis, and MRI is more sensitive for early marrow edema",
      "B": "Periosteal reaction must be present on the first radiograph before bone infection can reasonably be considered",
      "C": "Ultrasound can exclude osteomyelitis completely because it shows the bone marrow directly with high sensitivity",
      "D": "A normal radiograph effectively excludes bone infection, so follow-up imaging can be postponed for several weeks"
    },
    "answer": "A",
    "explanation": "Radiographs often lag by weeks, and MRI detects early marrow edema, abscess, and joint involvement. Normal films do not exclude infection. Ultrasound shows fluid beside bone but not marrow, and periosteal reaction appears later rather than being a prerequisite.",
    "id": 238
  },
  {
    "domain": "musculoskeletal",
    "chapter": 26,
    "question": "Which finding on imaging of a child with chronic osteomyelitis represents dead bone surrounded by inflammation?",
    "options": {
      "A": "A sequestrum, a fragment of necrotic bone within a surrounding zone of inflammation",
      "B": "A Brodie-type involucrum, new periosteal bone that is laid down around the infected segment",
      "C": "A physeal bridge, a bony bar tethering part of the growth plate after injury",
      "D": "A fallen-fragment sign, a cortical piece lying in the dependent part of a cystic lesion"
    },
    "answer": "A",
    "explanation": "A sequestrum is dead bone surrounded by inflammation, and a sinus tract may drain to the skin. An involucrum is the reactive new bone shell rather than dead bone. A physeal bridge follows plate injury, and the fallen fragment sign belongs to a fractured unicameral bone cyst.",
    "id": 239
  },
  {
    "domain": "musculoskeletal",
    "chapter": 26,
    "question": "A child holds the hip flexed, refuses to walk, and has fever. What is the most urgent management concern?",
    "options": {
      "A": "Juvenile idiopathic arthritis, needing an MRI with contrast to grade the synovial thickening",
      "B": "Transient synovitis, needing observation and anti-inflammatory medication with outpatient follow-up in one week",
      "C": "Legg-Calve-Perthes disease, needing a protective brace and repeat radiographs in several months",
      "D": "Septic arthritis of the hip, needing prompt aspiration or drainage and antibiotics to preserve the joint"
    },
    "answer": "D",
    "explanation": "Fever, a painful flexed hip, and refusal to walk suggest septic arthritis, where delay damages cartilage and growth plate. Transient synovitis is a diagnosis of exclusion. Juvenile arthritis is chronic, and Perthes disease is not an acute febrile illness.",
    "id": 240
  },
  {
    "domain": "musculoskeletal",
    "chapter": 26,
    "question": "A 9-year-old has months of morning stiffness and a swollen wrist with growth asymmetry. Which diagnosis best fits?",
    "options": {
      "A": "Juvenile idiopathic arthritis, with effusion, synovial thickening, and possible growth disturbance",
      "B": "Septic arthritis, with abrupt painful swelling and a rapidly enlarging complex joint effusion",
      "C": "Langerhans cell histiocytosis, with a solitary punched-out lytic lesion in the skull or femur",
      "D": "Acute hematogenous osteomyelitis, with high fever, focal bone tenderness, and early marrow edema on MRI"
    },
    "answer": "A",
    "explanation": "Chronic stiffness with synovitis and growth disturbance fits juvenile idiopathic arthritis, and contrast MRI shows active inflammation. Osteomyelitis and septic arthritis are acute and febrile. Langerhans cell histiocytosis causes lytic bone lesions rather than diffuse synovitis.",
    "id": 241
  },
  {
    "domain": "musculoskeletal",
    "chapter": 26,
    "question": "Which imaging modality best shows active synovial inflammation in juvenile idiopathic arthritis?",
    "options": {
      "A": "Bone scintigraphy, which gives exact synovial thickness and cartilage loss measurements",
      "B": "Plain radiography, which shows early synovitis before erosions develop in the joint",
      "C": "Fluoroscopic arthrography, which shows enhancing synovium after intravenous contrast injection",
      "D": "MRI with contrast, which shows enhancing synovial thickening and effusion"
    },
    "answer": "D",
    "explanation": "Contrast MRI shows active inflammation. Radiographs show only late erosions, premature plate closure, or growth change. Scintigraphy is nonspecific and cannot measure synovium, and arthrography is not the standard way to show synovial enhancement.",
    "id": 242
  },
  {
    "domain": "musculoskeletal",
    "chapter": 26,
    "question": "A child has multiple bone lesions and a relapsing course, and cultures are negative. What condition should be considered?",
    "options": {
      "A": "Osteochondroma, which presents as a bony projection with a cartilage cap and no marrow edema",
      "B": "Acute bacterial osteomyelitis, which would typically involve a single bone and respond to antibiotics",
      "C": "Unicameral bone cyst, which presents as a single fluid-filled lesion with a fracture",
      "D": "Chronic recurrent multifocal osteomyelitis, an inflammatory bone disease that can mimic infection"
    },
    "answer": "D",
    "explanation": "Multiple lesions with relapses and negative cultures suggest chronic recurrent multifocal osteomyelitis, so lesions should not all be called infectious. Acute bacterial osteomyelitis is typically single and positive. A unicameral cyst and an osteochondroma are solitary benign tumors rather than relapsing inflammation.",
    "id": 243
  },
  {
    "domain": "musculoskeletal",
    "chapter": 26,
    "question": "Which diagnosis is a lytic bone lesion that can look like infection or tumor and often needs biopsy?",
    "options": {
      "A": "Langerhans cell histiocytosis, including eosinophilic granuloma as one of its expressions",
      "B": "Juvenile idiopathic arthritis, which is a primary synovial disease and rarely lytic",
      "C": "Transient synovitis, which is a self-limited inflammation of the joint lining after viral illness",
      "D": "Septic arthritis, which is joint infection and shows effusion rather than a primary lytic lesion"
    },
    "answer": "A",
    "explanation": "Langerhans cell histiocytosis causes lytic lesions that can mimic infection or tumor, and eosinophilic granuloma is one expression. Juvenile arthritis, septic arthritis, and transient synovitis are joint diseases and do not primarily present as lytic bone lesions.",
    "id": 244
  },
  {
    "domain": "musculoskeletal",
    "chapter": 26,
    "question": "What should the radiologist describe in a report of suspected osteomyelitis?",
    "options": {
      "A": "The bone, the adjacent soft tissue, and any collection such as an abscess",
      "B": "Only the bone, because the soft tissue never contributes to the surgical decision",
      "C": "The exact age of the infection in days, based on one radiograph",
      "D": "The likely organism, which can be determined from the imaging appearance alone"
    },
    "answer": "A",
    "explanation": "A good report covers bone, adjacent soft tissue, and collections that may need drainage. Ignoring soft tissue misses abscess. Imaging cannot identify the organism, and the age of an infection in days cannot be reliably read from a single film.",
    "id": 245
  },
  {
    "domain": "musculoskeletal",
    "chapter": 26,
    "question": "In septic arthritis, which structures should the report specifically address because infection can injure them?",
    "options": {
      "A": "The paranasal sinuses and mastoid air cells, which commonly share the same infection",
      "B": "The renal collecting system and bladder wall, which are often infected at the same time",
      "C": "The posterior ribs and the skull sutures, which are common abuse locations",
      "D": "The physis and the joint cartilage, along with any subluxation of the joint"
    },
    "answer": "D",
    "explanation": "Infection can damage growth plate and cartilage, so physeal involvement and subluxation should be reported. Sinuses, ribs, skull sutures, and the urinary tract are unrelated to joint infection and are not part of the standard assessment.",
    "id": 246
  },
  {
    "domain": "musculoskeletal",
    "chapter": 27,
    "question": "A 14-year-old has knee pain and a metaphyseal lesion with bone formation, destruction, and aggressive periosteal reaction. What is the most likely diagnosis?",
    "options": {
      "A": "Unicameral bone cyst, a fluid-filled lesion with a thin cortex and possible fallen fragment",
      "B": "Nonossifying fibroma, a well-defined lucent metaphyseal lesion with a sclerotic rim and no periosteal reaction",
      "C": "Osteosarcoma, with MRI used to define its extent and relationship to the growth plate",
      "D": "Osteochondroma, a bony projection that is continuous with the cortex and marrow of the host bone"
    },
    "answer": "C",
    "explanation": "Aggressive bone formation, destruction, and periosteal reaction in the metaphysis of an adolescent indicate osteosarcoma. A nonossifying fibroma is benign with a sclerotic rim. A unicameral cyst is fluid-filled, and an osteochondroma is a bony projection with a cartilage cap.",
    "id": 247
  },
  {
    "domain": "musculoskeletal",
    "chapter": 27,
    "question": "An 8-year-old has a diaphyseal lesion with a large soft-tissue mass, and it mimics osteomyelitis. What is the likely diagnosis?",
    "options": {
      "A": "Osteosarcoma, which characteristically arises in the epiphysis of a young child and calcifies",
      "B": "Langerhans cell histiocytosis, which always heals spontaneously and never needs tissue diagnosis",
      "C": "Ewing sarcoma, which requires biopsy and staging of the primary site and metastases",
      "D": "Nonossifying fibroma, which usually appears as an incidental lucent lesion with a sclerotic rim"
    },
    "answer": "C",
    "explanation": "Ewing sarcoma favors the diaphysis, can have a large soft-tissue mass, and mimics infection, so biopsy and staging are needed. Osteosarcoma is typically metaphyseal in adolescents. Nonossifying fibroma is benign, and Langerhans disease often needs biopsy, so it is not always self-limited.",
    "id": 248
  },
  {
    "domain": "musculoskeletal",
    "chapter": 27,
    "question": "A 10-year-old has an incidental lucent metaphyseal lesion with a sclerotic rim. What is the best interpretation?",
    "options": {
      "A": "Osteosarcoma, a malignant metaphyseal tumor with aggressive periosteal reaction and bone formation",
      "B": "Osteomyelitis, an infection with marrow edema, periosteal reaction, and a possible sequestrum",
      "C": "Ewing sarcoma, a malignant diaphyseal tumor with a wide zone of transition and soft-tissue mass",
      "D": "Nonossifying fibroma, a common benign lesion that is often found incidentally and may heal"
    },
    "answer": "D",
    "explanation": "A well-defined metaphyseal lucency with a sclerotic rim and no aggressive features is a nonossifying fibroma. The other options are malignant or infectious and would show a wide zone of transition, cortical destruction, or periosteal reaction.",
    "id": 249
  },
  {
    "domain": "musculoskeletal",
    "chapter": 27,
    "question": "Which finding suggests a fractured unicameral bone cyst?",
    "options": {
      "A": "A sunburst periosteal reaction, with bone spicules radiating perpendicular to the cortical surface",
      "B": "A wide zone of transition, with permeative destruction and a large associated soft-tissue mass",
      "C": "A fallen-fragment sign, with a cortical piece lying in the dependent part of the cyst",
      "D": "A cartilage-capped bony projection, with continuity of marrow between the lesion and the host bone"
    },
    "answer": "C",
    "explanation": "The fallen-fragment sign is a cortical fragment sinking into the cyst fluid after a fracture. Sunburst reaction and wide transition suggest malignancy, and a cartilage-capped projection is an osteochondroma.",
    "id": 250
  },
  {
    "domain": "musculoskeletal",
    "chapter": 27,
    "question": "What defines an osteochondroma?",
    "options": {
      "A": "A bony projection with a cartilage cap, which can cause pain or mechanical irritation",
      "B": "A lucent metaphyseal lesion with a sclerotic rim, typically found incidentally and often healing later",
      "C": "A fluid-filled lucent lesion in the metaphysis that may present with a pathologic fracture",
      "D": "A diaphyseal malignant tumor with a large soft-tissue mass that may mimic bone infection"
    },
    "answer": "A",
    "explanation": "An osteochondroma is a cartilage-capped bony projection. The fluid-filled lesion is a unicameral cyst, the sclerotic-rim lesion is a nonossifying fibroma, and the diaphyseal mass is Ewing sarcoma.",
    "id": 251
  },
  {
    "domain": "musculoskeletal",
    "chapter": 27,
    "question": "A child has multiple osteochondromas and growth deformity with compression of adjacent structures. What condition is this?",
    "options": {
      "A": "Metastatic Ewing sarcoma, which produces multiple destructive lesions and large soft-tissue masses",
      "B": "Multifocal osteomyelitis, which would cause fever and relapsing destructive bone lesions",
      "C": "Hereditary multiple exostoses, which can affect growth and cause compression",
      "D": "Multiple nonossifying fibromas, which are lucent lesions that never cause deformity or compression"
    },
    "answer": "C",
    "explanation": "Multiple osteochondromas define hereditary multiple exostoses and can affect growth and cause compression. Multifocal osteomyelitis is inflammatory, nonossifying fibromas are incidental lucencies, and metastatic Ewing sarcoma would be destructive.",
    "id": 252
  },
  {
    "domain": "musculoskeletal",
    "chapter": 27,
    "question": "Which imaging features of a bone lesion most strongly suggest malignancy or infection rather than a benign process?",
    "options": {
      "A": "A bony projection with a cartilage cap that points away from the nearby joint",
      "B": "A narrow zone of transition with a thin sclerotic rim, a well-defined margin, and no cortical breakthrough seen",
      "C": "A lesion found incidentally in the metaphysis that has no pain or growth",
      "D": "A wide zone of transition, cortical destruction, aggressive periosteal reaction, or soft-tissue extension"
    },
    "answer": "D",
    "explanation": "A wide transition, cortical destruction, aggressive periosteal reaction, or soft-tissue extension are concerning. A narrow transition with a sclerotic rim and incidental discovery are benign features, and an osteochondroma is a benign cartilage-capped lesion.",
    "id": 253
  },
  {
    "domain": "musculoskeletal",
    "chapter": 27,
    "question": "Which clinical features raise urgency when evaluating a pediatric bone lesion?",
    "options": {
      "A": "Pain that wakes the child, rapid growth, or a palpable mass",
      "B": "A family history of a similar benign lesion with no change since diagnosis in either person",
      "C": "Incidental discovery on a radiograph taken after a minor ankle sprain without symptoms",
      "D": "Pain only after exercise that resolves completely with rest and has been stable for years"
    },
    "answer": "A",
    "explanation": "Night pain, rapid growth, and a palpable mass raise concern for malignancy or infection. Stable exercise-related pain, incidental discovery, and a stable family history suggest a benign lesion.",
    "id": 254
  },
  {
    "domain": "musculoskeletal",
    "chapter": 27,
    "question": "A newborn has a soft bluish mass that is present at birth and grows with the child. Which classification fits best?",
    "options": {
      "A": "Infantile hemangioma, a tumor that grows early in infancy and then involutes over later years",
      "B": "A venous or lymphatic malformation, present at birth and growing proportionally with the child",
      "C": "Osteosarcoma, a malignant tumor with rapid growth and aggressive bone formation in adolescents",
      "D": "Ewing sarcoma, a malignant tumor with a large soft-tissue mass and diaphyseal location"
    },
    "answer": "B",
    "explanation": "Venous and lymphatic malformations are present at birth and grow with the child. Infantile hemangioma is a tumor that grows early then involutes. Osteosarcoma and Ewing sarcoma are bone malignancies and do not explain a congenital vascular mass.",
    "id": 255
  },
  {
    "domain": "emergency_trauma",
    "chapter": 28,
    "question": "A 4-month-old has a new femur fracture, and the caregiver gives no clear mechanism. What is the best next step?",
    "options": {
      "A": "Reassurance and a splint, because a single long-bone fracture in an infant is almost always accidental",
      "B": "A whole-body bone scan as the required first test, followed by discharge if the scan is normal",
      "C": "A skeletal survey and pediatric child protection consultation, since the infant is not yet walking",
      "D": "A repeat radiograph of the femur in one week, with no other imaging or consultation"
    },
    "answer": "C",
    "explanation": "A fracture in a nonambulatory infant without a clear mechanism needs a skeletal survey and child protection consultation. Assuming an accident, using only a bone scan, or waiting a week all risk missing additional injuries.",
    "id": 256
  },
  {
    "domain": "emergency_trauma",
    "chapter": 28,
    "question": "Which fractures are highly specific for abuse in a young nonwalking child?",
    "options": {
      "A": "Buckle fractures of the distal radius in a child after a witnessed fall onto an outstretched hand",
      "B": "Toddler's fractures of the tibia in a child who has recently begun to walk",
      "C": "Metaphyseal corner fractures, rib fractures, and fractures in different stages of healing",
      "D": "Supracondylar humerus fractures in a child after a witnessed fall from a playground climbing frame"
    },
    "answer": "C",
    "explanation": "Metaphyseal corner fractures, rib fractures, and fractures of differing healing stages are highly specific. Buckle fractures, supracondylar fractures from falls, and toddler's fractures in walkers have accidental mechanisms.",
    "id": 257
  },
  {
    "domain": "emergency_trauma",
    "chapter": 28,
    "question": "What is the radiologist's role in suspected child abuse?",
    "options": {
      "A": "Decide which caregiver caused the injury, and state that conclusion about intent directly in the final report",
      "B": "Question the family in the imaging department to obtain a detailed and complete history of the events",
      "C": "Limit the report to a single sentence stating whether abuse occurred or did not occur",
      "D": "Describe injuries, judge whether the stated mechanism fits, and find other injuries, without assigning intent"
    },
    "answer": "D",
    "explanation": "The radiologist describes findings, assesses fit with the mechanism, and communicates to the child protection team. Determining intent, interrogating the family, or giving a one-sentence verdict is outside the role.",
    "id": 258
  },
  {
    "domain": "emergency_trauma",
    "chapter": 28,
    "question": "A normal skeletal survey in a child with a concerning injury pattern means what?",
    "options": {
      "A": "Abuse is excluded and the child protection evaluation can end immediately without any further steps or follow-up",
      "B": "The survey was technically inadequate and must always be repeated on the same day",
      "C": "Only an accidental mechanism is possible and no additional imaging is ever required",
      "D": "Abuse is not excluded, since internal, head, or soft-tissue injury may occur without a bone finding"
    },
    "answer": "D",
    "explanation": "A normal radiograph does not exclude abuse because injuries may be internal or soft tissue. Ending the evaluation early is unsafe, repeating on the same day is not required, and further imaging may still be indicated.",
    "id": 259
  },
  {
    "domain": "emergency_trauma",
    "chapter": 28,
    "question": "Which group is a skeletal survey usually performed in when abuse is suspected?",
    "options": {
      "A": "Only adolescents with a reported history of a sports injury to the limbs",
      "B": "Only children with a skull fracture who are already admitted to intensive care",
      "C": "All school-age children with any bruise, regardless of history or examination findings",
      "D": "Children younger than 2 years, and sometimes older children based on clinical findings"
    },
    "answer": "D",
    "explanation": "The survey is usually done in children younger than 2 years and sometimes in older children by clinical findings. The other groups are not standard indications.",
    "id": 260
  },
  {
    "domain": "emergency_trauma",
    "chapter": 28,
    "question": "What is the best way to find fractures that were not visible on the first study?",
    "options": {
      "A": "A single repeat chest radiograph at the same visit, taken in a different projection",
      "B": "A bone density scan at six months after the first study, to look for metabolic disease",
      "C": "A routine brain MRI performed on every child at three weeks of age, regardless of symptoms",
      "D": "A follow-up skeletal survey, which can reveal healing fractures not seen initially"
    },
    "answer": "D",
    "explanation": "A follow-up survey reveals healing fractures that were not visible at first. A repeat chest film, routine brain MRI, or bone density scan do not serve this purpose.",
    "id": 261
  },
  {
    "domain": "emergency_trauma",
    "chapter": 28,
    "question": "An infant is lethargic with seizures and apnea. Which first imaging study is urgent?",
    "options": {
      "A": "Skull radiographs only, since they show subdural hemorrhage reliably in infants with suspected trauma",
      "B": "Brain MRI first, because it is always faster than CT in an unstable infant with seizures",
      "C": "Noncontrast head CT, with MRI later to define extent of injury and age of blood",
      "D": "Cranial ultrasound alone in all ages, because the anterior fontanelle never closes in infancy"
    },
    "answer": "C",
    "explanation": "Emergency head CT is the initial study for altered consciousness, seizures, or apnea, and MRI follows for extent and blood age. MRI first delays care, skull films miss hemorrhage, and ultrasound is not sufficient.",
    "id": 262
  },
  {
    "domain": "emergency_trauma",
    "chapter": 28,
    "question": "Which study evaluates hidden abdominal injury in a stable child with high clinical concern?",
    "options": {
      "A": "Skeletal survey, which shows solid-organ and bowel injury directly",
      "B": "Bone scan, which shows bowel wall hematoma and free fluid",
      "C": "Contrast-enhanced CT, which shows liver, spleen, pancreatic, and bowel injury",
      "D": "Plain abdominal radiograph, which excludes solid-organ injury if no free air is seen"
    },
    "answer": "C",
    "explanation": "Contrast CT depicts solid-organ and bowel injury in a stable child. A plain film cannot exclude solid-organ injury, a skeletal survey shows bones, and a bone scan does not show bowel.",
    "id": 263
  },
  {
    "domain": "emergency_trauma",
    "chapter": 28,
    "question": "Which conditions can mimic abuse and should be considered without being used as an automatic excuse?",
    "options": {
      "A": "Osteogenesis imperfecta, metabolic bone disease, birth trauma, and certain hematologic disorders",
      "B": "Hydronephrosis, vesicoureteral reflux, posterior urethral valves, and renal agenesis",
      "C": "Appendicitis, pyloric stenosis, intussusception, and malrotation with volvulus causing abdominal pain and vomiting",
      "D": "Croup, bronchiolitis, bacterial pneumonia, and congenital lobar overinflation of the lung"
    },
    "answer": "A",
    "explanation": "Osteogenesis imperfecta, metabolic bone disease, birth trauma, and hematologic disorders can cause fractures or bleeding. The other groups are gastrointestinal, respiratory, and urinary conditions that do not mimic fractures.",
    "id": 264
  },
  {
    "domain": "emergency_trauma",
    "chapter": 29,
    "question": "A hemodynamically unstable child after a motor vehicle collision needs the fastest bedside look for free intraperitoneal blood. Which test fits best?",
    "options": {
      "A": "Focused assessment with sonography for trauma at the bedside during resuscitation, without moving the child",
      "B": "Plain abdominal radiograph series with decubitus views to look for free intraperitoneal fluid levels",
      "C": "Contrast-enhanced abdominal CT in the scanner after the child has been fully stabilized and safely transported",
      "D": "Delayed magnetic resonance imaging of the abdomen once sedation can be arranged by the anesthesia team"
    },
    "answer": "A",
    "explanation": "Bedside ultrasound (FAST) detects free fluid quickly without delaying resuscitation. CT requires a stable child and transport, and is not the first test in an unstable patient. Radiographs are insensitive for free fluid, and MRI is far too slow and sedation-dependent for this setting.",
    "id": 265
  },
  {
    "domain": "emergency_trauma",
    "chapter": 29,
    "question": "A stable 7-year-old has blunt abdominal trauma from a bicycle handlebar and a liver laceration is suspected. Which study best defines the injury?",
    "options": {
      "A": "Abdominal radiographs in two projections to show the hepatic shadow and any displaced bowel",
      "B": "Intravenous contrast-enhanced CT of the abdomen and pelvis using a pediatric low-dose protocol",
      "C": "Upper gastrointestinal contrast study to look for extravasation from the injured liver surface",
      "D": "Noncontrast CT of the abdomen because contrast adds no information about solid-organ injury"
    },
    "answer": "B",
    "explanation": "Contrast-enhanced CT shows lacerations, hematoma, active extravasation, and pseudoaneurysm, which guide grading and management. Noncontrast CT misses vascular injury and enhancement defects. Radiographs cannot show parenchymal injury, and an upper GI study evaluates the lumen, not the liver.",
    "id": 266
  },
  {
    "domain": "emergency_trauma",
    "chapter": 29,
    "question": "A child is brought in with multiple fractures of different ages and an unexplained story. Which imaging approach is most appropriate to look for nonaccidental trauma in an infant?",
    "options": {
      "A": "A single babygram radiograph of the whole infant on one large cassette for speed and low dose",
      "B": "A dedicated skeletal survey with separate coned views of each body part, repeated at follow-up if negative",
      "C": "Whole-body CT with intravenous contrast, because it shows every fracture more clearly than any plain radiograph",
      "D": "Bone scintigraphy used alone, because it is more specific for healing rib fractures than radiographs do"
    },
    "answer": "B",
    "explanation": "A dedicated skeletal survey with separate coned views is the standard for suspected abuse in young children, and a follow-up survey can reveal fractures initially occult. A babygram is not diagnostic quality. Whole-body CT delivers excess dose and misses classic metaphyseal lesions, and scintigraphy alone is not the standard first test.",
    "id": 267
  },
  {
    "domain": "emergency_trauma",
    "chapter": 29,
    "question": "A toddler with an unexplained subdural collection and retinal findings is evaluated. Which additional imaging is most useful to complete the workup?",
    "options": {
      "A": "Cervical spine flexion and extension radiographs to prove a ligamentous injury is the cause",
      "B": "Repeat head CT every day to watch the subdural collection until it has completely resolved",
      "C": "Skeletal survey to search for occult fractures that would support an inflicted mechanism",
      "D": "Abdominal radiograph series to look for swallowed foreign bodies that could explain the findings"
    },
    "answer": "C",
    "explanation": "Intracranial injury with retinal hemorrhage raises concern for abusive head trauma, and a skeletal survey finds other fractures that support it. Daily repeat CT adds dose without answering the question. A foreign body search and flexion-extension views do not address occult skeletal injury.",
    "id": 268
  },
  {
    "domain": "emergency_trauma",
    "chapter": 29,
    "question": "A 3-year-old fell from a low height and now refuses to bear weight. Radiographs show a spiral tibial fracture without soft-tissue swelling. What is the most likely diagnosis?",
    "options": {
      "A": "Classic metaphyseal lesion of the proximal tibia, typical of inflicted injury in young infants",
      "B": "Toddler's fracture, a nondisplaced spiral fracture of the distal tibial shaft after minor trauma",
      "C": "Osteomyelitis of the tibial shaft with periosteal reaction, soft-tissue swelling, and a subperiosteal abscess",
      "D": "Osteosarcoma of the distal tibia with a sunburst periosteal reaction and an adjacent soft-tissue mass"
    },
    "answer": "B",
    "explanation": "A subtle oblique or spiral tibial shaft fracture in a toddler after minor trauma is the toddler's fracture, a common accidental injury. Classic metaphyseal lesions are corner or bucket-handle fractures in infants. Osteomyelitis would show soft-tissue swelling and periosteal change, and osteosarcoma would show an aggressive mass.",
    "id": 269
  },
  {
    "domain": "emergency_trauma",
    "chapter": 29,
    "question": "A child falls on an outstretched arm and the elbow radiograph shows a posterior fat pad but no visible fracture. What is the most appropriate interpretation?",
    "options": {
      "A": "Isolated soft-tissue contusion with no need for immobilization or any follow-up imaging",
      "B": "Septic arthritis of the elbow requiring immediate joint aspiration before any other diagnostic step is taken",
      "C": "Occult elbow fracture, most often supracondylar, until proven otherwise and managed accordingly",
      "D": "Normal variant, since a posterior fat pad is seen in every healthy child's elbow"
    },
    "answer": "C",
    "explanation": "A posterior fat pad after trauma indicates joint effusion, usually from an occult fracture such as supracondylar, so the child is immobilized and followed. A posterior fat pad is not a normal finding in extended view. Contusion alone does not explain the effusion, and infection is not suggested by a traumatic history.",
    "id": 270
  },
  {
    "domain": "emergency_trauma",
    "chapter": 29,
    "question": "A 5-year-old has a plain radiograph showing buckling of the distal radial cortex after a fall. How should this injury be classified?",
    "options": {
      "A": "Torus fracture, a stable buckle injury of the metaphysis that is usually managed with simple immobilization",
      "B": "Greenstick fracture with a complete break of one cortex and an intact cortex on the opposite side",
      "C": "Bowing deformity of the radius from plastic deformation without any visible cortical buckling or discrete fracture line",
      "D": "Salter-Harris type three fracture crossing the physis and entering the epiphysis and joint"
    },
    "answer": "A",
    "explanation": "Cortical buckling of the metaphysis is a torus (buckle) fracture, which is stable. A Salter-Harris III crosses the physis into the epiphysis. A greenstick fracture breaks one cortex fully, and plastic bowing shows curvature without a cortical buckle.",
    "id": 271
  },
  {
    "domain": "emergency_trauma",
    "chapter": 29,
    "question": "A child with blunt chest trauma has a normal initial chest radiograph but severe chest pain and low oxygen saturation. What injury should be suspected?",
    "options": {
      "A": "Pulmonary contusion, often subtle at first and worsening over hours without rib fractures",
      "B": "Rib fractures that are always visible on the first film, since the child chest wall is rigid",
      "C": "Simple chest wall bruising that never causes hypoxia and needs no further evaluation or imaging",
      "D": "Pneumothorax that must be absent because the initial film shows no air outside the lung"
    },
    "answer": "A",
    "explanation": "The pliable pediatric chest wall transmits force to the lung, so contusion can occur without rib fracture and may appear or worsen over hours. A normal first film does not exclude it, and persistent hypoxia is a reason to consider CT. A child's ribs are flexible rather than rigid, and bruising alone does not explain low oxygen saturation.",
    "id": 272
  },
  {
    "domain": "emergency_trauma",
    "chapter": 29,
    "question": "A child in a motor vehicle collision wearing a lap belt has abdominal bruising and back pain. Radiographs show a horizontal fracture through a lumbar vertebral body. Which injury pattern should be sought?",
    "options": {
      "A": "Isolated vertebral compression with no expected abdominal organ involvement or free fluid",
      "B": "Splenic laceration as the only associated injury expected with a lap belt mechanism",
      "C": "Pulmonary contusion as the expected companion injury of a lumbar flexion-distraction fracture in a child",
      "D": "Associated hollow viscus and mesenteric injury along with the flexion-distraction vertebral fracture"
    },
    "answer": "D",
    "explanation": "A lap-belt flexion-distraction (Chance) fracture is associated with bowel and mesenteric injury, so CT should look for free fluid and bowel wall abnormality. It is not an isolated compression injury. Splenic injury is not the hallmark association, and pulmonary contusion is a chest, not lumbar, pattern.",
    "id": 273
  },
  {
    "domain": "oncology_interventional",
    "chapter": 30,
    "question": "A 3-year-old with an abdominal mass crossing the midline has calcifications on radiograph and elevated urine catecholamines. What is the most likely diagnosis?",
    "options": {
      "A": "Hepatoblastoma, which arises within the liver and is associated with elevated alpha-fetoprotein",
      "B": "Rhabdomyosarcoma of the retroperitoneum, which rarely produces catecholamine metabolites in urine",
      "C": "Neuroblastoma, which encases vessels rather than displacing them and often contains calcification",
      "D": "Wilms tumor, which typically displaces vessels and arises from the kidney without calcification"
    },
    "answer": "C",
    "explanation": "Neuroblastoma commonly calcifies, encases vessels, crosses the midline, and elevates catecholamine metabolites. Wilms tumor displaces vessels and rarely calcifies. Hepatoblastoma is liver-based with raised alpha-fetoprotein, and rhabdomyosarcoma does not produce catecholamines.",
    "id": 274
  },
  {
    "domain": "oncology_interventional",
    "chapter": 30,
    "question": "Which imaging pair best stages a neuroblastoma for distant disease?",
    "options": {
      "A": "Gallium scintigraphy combined with a skeletal survey of all long bones",
      "B": "Chest radiograph alone because lung metastases are the dominant pattern",
      "C": "Metaiodobenzylguanidine scintigraphy together with cross-sectional imaging for the primary tumor",
      "D": "Positron emission tomography without any anatomic correlation to the primary mass or its vascular relationships"
    },
    "answer": "C",
    "explanation": "MIBG scans show soft-tissue and bone disease in MIBG-avid neuroblastoma, and CT or MRI define the primary and its vascular relationships. Gallium and a skeletal survey are outdated. Chest radiograph misses most disease, and PET without anatomic correlation is inadequate.",
    "id": 275
  },
  {
    "domain": "oncology_interventional",
    "chapter": 30,
    "question": "A 4-year-old has a large flank mass and imaging shows a renal mass with a claw sign and tumor extension into the renal vein. What is the best interpretation?",
    "options": {
      "A": "Renal vein thrombosis from dehydration, because venous involvement excludes any underlying solid renal tumor",
      "B": "Multilocular cystic nephroma, because the mass is cystic with thin enhancing internal septa",
      "C": "Wilms tumor, with attention to renal vein and vena cava involvement and the contralateral kidney",
      "D": "Neuroblastoma, because any large abdominal mass in this age group should be assumed to be neuroblastoma"
    },
    "answer": "C",
    "explanation": "The claw sign shows the mass arises from the kidney, which supports Wilms tumor, and staging must assess venous extension and the other kidney. Neuroblastoma arises outside the kidney. Cystic nephroma is a different cystic lesion, and tumor thrombus is not simple bland thrombosis.",
    "id": 276
  },
  {
    "domain": "oncology_interventional",
    "chapter": 30,
    "question": "A child treated for lymphoma has a residual mediastinal mass on follow-up CT. What is the most useful next imaging step to separate residual tumor from fibrosis?",
    "options": {
      "A": "Repeat plain chest radiograph in six months to check for a change in size",
      "B": "Ultrasound of the neck to measure superficial lymph nodes only",
      "C": "Barium swallow to evaluate esophageal displacement from the residual mass",
      "D": "FDG PET/CT to assess metabolic activity within the residual mass"
    },
    "answer": "D",
    "explanation": "FDG PET/CT shows whether residual tissue is metabolically active tumor or inactive scar, so it guides further treatment. A radiograph in six months delays the answer. A barium swallow and neck ultrasound do not characterize mediastinal residual disease.",
    "id": 277
  },
  {
    "domain": "oncology_interventional",
    "chapter": 30,
    "question": "A child receiving chemotherapy develops fever and neutropenia and has nodules with a halo sign on chest CT. Which diagnosis should be considered first?",
    "options": {
      "A": "Bacterial lobar pneumonia, because a halo sign is classic for community-acquired pneumococcus",
      "B": "Metastatic osteosarcoma, because nodules in a child with cancer are always metastases",
      "C": "Radiation pneumonitis, because the nodules are confined to the irradiated lung fields",
      "D": "Invasive fungal infection such as aspergillosis in an immunocompromised child"
    },
    "answer": "D",
    "explanation": "Nodules with a halo in a neutropenic child suggest angioinvasive fungal infection, which needs prompt antifungal therapy. Metastases are not always the cause and rarely have a halo in this setting. Radiation pneumonitis follows a radiation field, and lobar pneumonia has consolidation, not halo nodules.",
    "id": 278
  },
  {
    "domain": "oncology_interventional",
    "chapter": 30,
    "question": "Which finding on follow-up MRI of a treated brain tumor most strongly suggests recurrent tumor rather than treatment effect?",
    "options": {
      "A": "Stable T2 hyperintensity in the radiation field that does not enhance or expand",
      "B": "Mild early enhancement that resolves on the next scan without any change in size",
      "C": "Progressive enlarging enhancing mass with increased perfusion and restricted diffusion over serial studies",
      "D": "Low perfusion with decreasing enhancement many months after radiation therapy was completed, with stable lesion size"
    },
    "answer": "C",
    "explanation": "A growing enhancing lesion with elevated perfusion and restricted diffusion favors recurrence. Stable nonenhancing T2 change, transient enhancement that resolves, and falling perfusion all favor treatment effect.",
    "id": 279
  },
  {
    "domain": "oncology_interventional",
    "chapter": 30,
    "question": "A child with acute lymphoblastic leukemia on steroids has new hip pain and groin radiographs are normal. What complication should be excluded with MRI?",
    "options": {
      "A": "Legg-Calve-Perthes disease, because it occurs only in children under two years of age",
      "B": "Osteonecrosis of the femoral head, a known complication of corticosteroid and chemotherapy treatment",
      "C": "Slipped capital femoral epiphysis, because it occurs only in children who never received steroids",
      "D": "Transient synovitis, because steroids prevent any osteonecrosis in the growing hip and cause only brief pain"
    },
    "answer": "B",
    "explanation": "Osteonecrosis is a recognized steroid-related complication, and MRI detects it before radiographs change. SCFE is not excluded by steroids but is a different diagnosis. Transient synovitis would not explain persistent pain, and Perthes disease is typically seen at older ages than two.",
    "id": 280
  },
  {
    "domain": "oncology_interventional",
    "chapter": 30,
    "question": "A child who received chest radiation years ago has a new thyroid nodule on ultrasound. Which statement best describes this follow-up concern?",
    "options": {
      "A": "Radiation to the neck and chest raises the lifetime risk of thyroid nodules, so surveillance is warranted",
      "B": "Thyroid nodules after prior radiation are always benign and never need any further imaging or assessment later",
      "C": "Ultrasound cannot be used for thyroid surveillance because it does not show thyroid tissue well",
      "D": "Thyroid cancer occurs only in children who never received any radiation to the neck or chest"
    },
    "answer": "A",
    "explanation": "Prior neck and chest radiation increases thyroid nodule and malignancy risk, so ultrasound surveillance is part of long-term follow-up. The claims that nodules are always benign, that cancer occurs without radiation, or that ultrasound cannot image the thyroid are all false.",
    "id": 281
  },
  {
    "domain": "oncology_interventional",
    "chapter": 30,
    "question": "Which radiotherapy late effect is best evaluated with echocardiography or cardiac MRI in survivors of childhood cancer?",
    "options": {
      "A": "Bladder fibrosis causing hydronephrosis in a previously irradiated pelvis after treatment of pelvic sarcoma",
      "B": "Scoliosis caused by unilateral vertebral growth inhibition within a previously irradiated spinal field",
      "C": "Isolated hypothyroidism, because it is the only cardiac late effect expected after childhood cancer treatment",
      "D": "Cardiomyopathy and valvular disease after anthracycline chemotherapy or chest radiation exposure in childhood"
    },
    "answer": "D",
    "explanation": "Anthracyclines and chest radiation can cause cardiomyopathy and valve disease, which echocardiography and cardiac MRI track. Hypothyroidism, scoliosis, and bladder fibrosis are other late effects but do not need cardiac imaging.",
    "id": 282
  },
  {
    "domain": "oncology_interventional",
    "chapter": 31,
    "question": "A 4-year-old needs a percutaneous biopsy of a deep abdominal mass. Which preparation is most important before the procedure?",
    "options": {
      "A": "Check coagulation status, plan sedation or anesthesia, and choose image guidance suited to the lesion",
      "B": "Give the child a full meal an hour before so that sedation works more reliably",
      "C": "Skip laboratory tests because bleeding risk is identical in every pediatric patient and lesion",
      "D": "Plan the biopsy without imaging guidance because palpation is accurate for deep abdominal masses in young children"
    },
    "answer": "A",
    "explanation": "Coagulation review, appropriate sedation or anesthesia, and image guidance reduce complications. Feeding before sedation raises aspiration risk. Skipping labs ignores bleeding risk, and deep masses cannot be reliably targeted by palpation.",
    "id": 283
  },
  {
    "domain": "oncology_interventional",
    "chapter": 31,
    "question": "A child needs drainage of a localized abscess in the abdomen. Which technique is generally preferred?",
    "options": {
      "A": "Blind needle puncture through the abdominal wall without any imaging guidance at the bedside",
      "B": "Repeated courses of oral antibiotics alone without any attempt at drainage of the collection",
      "C": "Immediate open laparotomy for every abscess regardless of its size, location, or accessibility",
      "D": "Image-guided percutaneous catheter drainage with ultrasound or CT, with fluid sent for culture"
    },
    "answer": "D",
    "explanation": "Image-guided catheter drainage with culture is the standard for accessible collections. Blind puncture risks injury. Antibiotics alone rarely clear a drainable collection, and laparotomy is not required for every abscess.",
    "id": 284
  },
  {
    "domain": "oncology_interventional",
    "chapter": 31,
    "question": "Which imaging modality is generally preferred to guide procedures in small children because it avoids radiation?",
    "options": {
      "A": "Plain radiographs repeated every few seconds during the whole procedure",
      "B": "CT fluoroscopy for every procedure because it gives real-time guidance with no dose",
      "C": "Nuclear medicine imaging because it provides high-resolution anatomic detail",
      "D": "Ultrasound, which shows needle position in real time without ionizing radiation"
    },
    "answer": "D",
    "explanation": "Ultrasound gives real-time needle guidance without radiation. CT fluoroscopy and repeated radiographs deliver dose, and nuclear medicine lacks the anatomic resolution needed for needle guidance.",
    "id": 285
  },
  {
    "domain": "oncology_interventional",
    "chapter": 31,
    "question": "A neonate needs central venous access. Which approach best reduces complications?",
    "options": {
      "A": "Blind insertion guided only by surface landmarks, without confirming the tip location afterward on any imaging study",
      "B": "Ultrasound-guided access with attention to vessel size, and catheter tip position confirmed on imaging afterward",
      "C": "Skipping a postprocedure radiograph because catheter tip position never changes after the line is placed",
      "D": "Choosing the largest catheter available regardless of the vessel diameter or the neonate's weight"
    },
    "answer": "B",
    "explanation": "Ultrasound guidance and tip confirmation reduce malposition and vessel injury. Blind insertion, oversized catheters, and skipped confirmation all increase complications.",
    "id": 286
  },
  {
    "domain": "oncology_interventional",
    "chapter": 31,
    "question": "A child has a vascular malformation and pain. Which treatment is performed by interventional radiology?",
    "options": {
      "A": "Prolonged antibiotics for all malformations, because infection is the underlying cause of every lesion",
      "B": "Sclerotherapy or embolization for selected venous and lymphatic malformations or bleeding vascular lesions",
      "C": "Radiation therapy as first-line treatment for every vascular anomaly seen in infants and children",
      "D": "Open surgical resection, performed only after every percutaneous option has already been tried and has failed"
    },
    "answer": "B",
    "explanation": "Sclerotherapy and embolization are core interventional treatments for selected malformations. Surgery is an alternative, not a prerequisite. Antibiotics do not treat malformations, and radiation is not first line.",
    "id": 287
  },
  {
    "domain": "oncology_interventional",
    "chapter": 31,
    "question": "A toddler swallowed a coin that now sits in the esophagus. What is the best next step?",
    "options": {
      "A": "A barium meal to see whether the coin moves on its own before deciding on removal",
      "B": "Urgent removal, since an esophageal coin can cause obstruction and wall injury within a few hours",
      "C": "An MRI to better characterize the metal composition of the coin before any intervention",
      "D": "Observation for one week, because esophageal coins always pass into the stomach without any help at all"
    },
    "answer": "B",
    "explanation": "An esophageal coin should be removed promptly to prevent obstruction and injury. Observation for a week is unsafe. Barium and MRI delay care and add no useful information.",
    "id": 288
  },
  {
    "domain": "oncology_interventional",
    "chapter": 31,
    "question": "A child swallowed two button magnets that remain in the stomach and bowel. Which statement is correct?",
    "options": {
      "A": "MRI should be done at once to locate the magnets safely and show their orientation",
      "B": "Multiple magnets can attract across bowel walls and cause perforation, so urgent evaluation is needed",
      "C": "The child can be discharged after a single radiograph with no further plan or return precautions",
      "D": "Magnets always pass harmlessly and need no repeat radiographs, monitoring, or specialist surgical involvement"
    },
    "answer": "B",
    "explanation": "Magnets can pull across bowel loops and cause necrosis and perforation, so urgent management is needed. They do not always pass harmlessly. MRI is contraindicated with ferromagnetic foreign bodies, and discharge is unsafe.",
    "id": 289
  },
  {
    "domain": "oncology_interventional",
    "chapter": 31,
    "question": "After a lung biopsy in a child, sudden dyspnea and chest pain occur. What complication should be excluded first?",
    "options": {
      "A": "Pneumothorax, found on chest radiograph or ultrasound performed immediately after the procedure",
      "B": "Renal colic, because dehydration and stone formation commonly occur after any needle biopsy",
      "C": "Appendicitis, because inflammation of the appendix often follows a percutaneous lung biopsy in children",
      "D": "Cholecystitis, because gallstones are commonly triggered by chest procedures in young children"
    },
    "answer": "A",
    "explanation": "Pneumothorax is the most common complication of lung biopsy and is found by radiograph or ultrasound. Appendicitis, renal colic, and cholecystitis are unrelated to a lung puncture.",
    "id": 290
  },
  {
    "domain": "oncology_interventional",
    "chapter": 31,
    "question": "Why is postprocedure imaging or monitoring important after a drain placement?",
    "options": {
      "A": "It replaces bedside clinical observation and laboratory testing entirely during the recovery period after the procedure",
      "B": "It confirms drain position and detects bleeding, leak, or residual collection needing repeat intervention",
      "C": "It is done only to increase the radiation dose for departmental quality purposes and audit",
      "D": "It is unnecessary, because drains never move or become blocked after being placed in a child"
    },
    "answer": "B",
    "explanation": "Follow-up confirms position and detects complications that need action. Drains can migrate, imaging is not meant to add dose, and it supplements, not replaces, clinical observation.",
    "id": 291
  },
  {
    "domain": "exam_review",
    "chapter": 32,
    "question": "Which report structure best serves the clinician making the next decision?",
    "options": {
      "A": "A report that repeats the clinical history verbatim and offers no interpretation of the images",
      "B": "A report that lists only the technique and protocol and omits any impression or recommendation",
      "C": "A clear impression stating the diagnosis or differential and the recommended next step, supported by key findings",
      "D": "A comprehensive inventory of every normal anatomic structure visualized, concluding without any diagnostic impression or recommendation"
    },
    "answer": "C",
    "explanation": "The impression should state the answer and the next step. Long normal lists, a missing impression, and repeated history do not help decisions.",
    "id": 292
  },
  {
    "domain": "exam_review",
    "chapter": 32,
    "question": "A radiologist finds a pneumothorax on a postprocedure film. What is the most appropriate communication?",
    "options": {
      "A": "Send an email at the end of the week to the clinic coordinator or front desk",
      "B": "Include the finding only within the routine final report and wait for the clinician to read it eventually",
      "C": "Mention it only if the clinician later calls and asks specifically about that study",
      "D": "Direct, timely communication to the responsible clinician, with documentation of who was told and when"
    },
    "answer": "D",
    "explanation": "Critical findings need direct documented communication. Routine reports, delayed emails, and silence risk harm.",
    "id": 293
  },
  {
    "domain": "exam_review",
    "chapter": 32,
    "question": "Which report phrase best reduces ambiguity?",
    "options": {
      "A": "Findings most consistent with appendicitis; recommend surgical consultation",
      "B": "Cannot exclude any possible abnormality in the right lower quadrant",
      "C": "Nonspecific changes may or may not represent a real pathologic process",
      "D": "Possible findings of uncertain significance, correlate clinically as needed"
    },
    "answer": "A",
    "explanation": "A specific diagnosis with a recommendation is clear. Vague hedging phrases leave the clinician without direction.",
    "id": 294
  },
  {
    "domain": "exam_review",
    "chapter": 32,
    "question": "What is the principle behind ALARA in pediatric imaging?",
    "options": {
      "A": "Use the highest possible dose to guarantee the best picture quality in every child examined, regardless of size",
      "B": "Use ionizing radiation for every child to maximize the detection of subtle disease in all cases",
      "C": "Use identical adult settings for all patients to standardize image quality across the department",
      "D": "Use the lowest radiation dose that still answers the clinical question with adequate image quality"
    },
    "answer": "D",
    "explanation": "ALARA means as low as reasonably achievable while keeping diagnostic quality. Highest dose, routine radiation, and adult settings ignore this.",
    "id": 295
  },
  {
    "domain": "exam_review",
    "chapter": 32,
    "question": "A child had a CT with an unexpectedly high dose. What is the best quality response?",
    "options": {
      "A": "Ignore the event, because a single scan with a high dose has no effect on the child",
      "B": "Review the protocol and technique, record the dose, and adjust practice to prevent recurrence in future patients",
      "C": "Blame the individual technologist for the unexpected error and take no corrective action on protocols or equipment",
      "D": "Repeat the study in order to compare dose values between the first and second acquisitions"
    },
    "answer": "B",
    "explanation": "Review and correction prevent recurrence. Ignoring, repeating, or blame-only responses do not improve safety.",
    "id": 296
  },
  {
    "domain": "exam_review",
    "chapter": 32,
    "question": "Which practice improves report quality across a department?",
    "options": {
      "A": "Peer review and structured templates, with feedback to radiologists on discrepancies found in their reports",
      "B": "Reviewing only the reports that describe normal findings, since abnormal studies are always correct",
      "C": "Allowing every radiologist to use a unique, undocumented report format of personal choosing in all circumstances",
      "D": "Skipping any review of reports in order to increase reporting speed and shorten turnaround time"
    },
    "answer": "A",
    "explanation": "Peer review and templates standardize quality and teach from errors. Unique formats, skipped review, and normal-only review do not.",
    "id": 297
  },
  {
    "domain": "exam_review",
    "chapter": 32,
    "question": "An exam asks for the best next test in a child with suspected intussusception. What is the answer?",
    "options": {
      "A": "Barium enema as the first diagnostic test, because it is always preferred over ultrasound",
      "B": "CT of the abdomen with intravenous contrast as the first test, because it is the most thorough",
      "C": "Plain abdominal radiograph alone, because it can confirm the diagnosis in nearly all children",
      "D": "Ultrasound, which is highly sensitive, shows the target sign, and uses no ionizing radiation"
    },
    "answer": "D",
    "explanation": "Ultrasound is the preferred first test for intussusception. CT adds dose, barium enema is not first line, and radiographs alone are insensitive.",
    "id": 298
  },
  {
    "domain": "exam_review",
    "chapter": 32,
    "question": "Which exam strategy helps with unfamiliar pediatric imaging questions?",
    "options": {
      "A": "Ignore the patient's age entirely, because imaging findings are the same in infants, children, and adolescents",
      "B": "Identify the age, the key finding, and the most likely diagnosis, then choose the lowest-radiation next step",
      "C": "Choose CT for every imaging question, because it is considered the most thorough modality",
      "D": "Always select the longest answer option, because it is usually the most complete"
    },
    "answer": "B",
    "explanation": "Age, finding, and radiation-aware next step guide answers. Always choosing CT, the longest option, or ignoring age are poor strategies.",
    "id": 299
  },
  {
    "domain": "exam_review",
    "chapter": 32,
    "question": "What should a critical result communication include?",
    "options": {
      "A": "A general statement that the study is abnormal, without naming the specific finding or the patient",
      "B": "The finding, the patient identity, the name of the recipient, the time, and the recommended action",
      "C": "Only a verbal comment made in passing, with no written record made afterward in the chart",
      "D": "The final billing amount and the billing codes associated with the examination and report"
    },
    "answer": "B",
    "explanation": "A complete, documented message ensures action. Verbal-only, billing details, and vague statements are inadequate.",
    "id": 300
  }
];
