// ============================================================
//  ALL THE TEXT ON YOUR SITE LIVES IN THIS FILE.
//
//  How to edit:
//  - Change any text below, save, then refresh the page.
//  - Blank lines separate paragraphs.
//  - Lines that start with a word and a colon (label:, summary:, fact:, photo:, link:, paper:)
//    are settings. Everything else in a section becomes the card's paragraphs.
//  - Lines starting with // are notes to yourself and are ignored.
//  - The number in each "# 1 · Cerebrum" heading decides which body part the section
//    belongs to (1 brain, 2 ears, 3 tongue, 4 heart, 5 spine, 6 stomach, 7 hands,
//    8 the book in her hand, 9 legs, 10 feet, 11 cells). You can rename "Cerebrum" to
//    anything; keep the number. (The dog on the leash is decoration only.)
//  - Wrap a word in *asterisks* to italicize it.
//  - Start a paragraph with ! to turn it into a highlighted callout box (a short lead-in like
//    "Shameless plug:" at the start of it gets picked out in pink).
//  - Only rule: don't type a backtick ` anywhere in the text.
//  - The Projects, Skills, and Contact tabs are the sections near the bottom of this file
//    (# PROJECT · ..., # SKILLS, # CONTACT); each has its own notes there.
//  - Photos, papers, and links that are missing are hidden on the live site. To see the
//    "photo needed" placeholders while you work, add ?draft to the end of the address.
//
//  Settings you can use in a section:
//    label:    the small gray line under the name on the diagram
//    subtitle: the line under the big name on the card
//    summary:  the one-line pink summary at the top of the card
//    fact:     Left side | Right side          (one per line, shown in the table at the bottom)
//    photo:    filename.jpg | Caption | what you still need to send | which part shows
//              (files go in the assets folder; the filename must match EXACTLY, including .JPG vs .jpg.
//              Photos are cropped to a 4:3 frame. The 4th part picks the part that shows: top, bottom,
//              left, right, center, or a position like "50% 20%" (left-right, then up-down). Leave it
//              empty for center.
//              EASIEST WAY: open the site with ?draft on the end of the address, click a card, drag the
//              photo inside its frame until it looks right, press "copy line", and paste that line over
//              the photo line here.
//              A 5th part can be a web address: clicking the photo then opens it in a new tab, e.g.
//              photo: stele-site.png | stele.health | note | | https://www.stele.health/
//              (the 4th part can be left empty like that; links are off while in ?draft mode).)
//    link:     Button label | https://...      (leave the URL empty to show a "link needed" placeholder)
//    paper:    Title | small note | filename.pdf or https://... | what you still need to send
//              (a PDF in the assets folder, or a web link, opens in the built-in reader)
// ============================================================

window.CONTENT = String.raw`

# PAGE
kicker: the anatomy of
title: Akari Imai
meta: Duke University, class of 2030 | BME + MechE | Durham, NC
hint: hover to examine, click to dissect ↓

// password screen: visitors must type this on every load of the site, refreshes included.
// Leave it empty to turn the gate off.
// A link with ?key=THEPASSWORD on the end (e.g. https://akari1024.github.io/?key=0000) skips the prompt.
// This is a soft gate only: anyone who reads the site's files can find the password.
password: 0000
// the password screen shows this photo in a round frame with "This site is guarded by NAME."
// Put the dog's name after the | (with it empty, it says "a toy poodle").
guard: IMG_9374.jpeg |
// the sentence under your name on the password screen. Leave it empty to go back to
// "This site is guarded by NAME. If you were sent here, you have the password."
gatetext: This site is guarded by a toy poodle (the password is 0000).

// contact details
email: akari.imai@duke.edu
linkedin: https://www.linkedin.com/in/akari-i-7083242a9/
// drop a PDF named resume.pdf into the assets folder and put "resume.pdf" here
resume: Akari_Imai_Resume.pdf
github:

// the photo at the bottom of the page
photo: me.jpg | Fig. 3 | a photo of you | 50% 13%

Fig. 1. Akari Imai, anterior view. Japanese, raised in Singapore, and educated at Phillips Academy Andover. Now a first-year at Duke University studying biomedical and mechanical engineering, and technical project manager at Stele. Fig. 2. Cellular detail, ×400. Fig. 3. The specimen, photographed.


# 1 · Cerebrum
label: the brain · quantitative models
more: pesticides, effissimo
subtitle: Quantitative models, from markets to molecules
summary: A quantitative stock model for a Singapore investment firm, and a machine-learning screen for pesticide toxicity.

I interned at Effissimo Capital Management, an investment firm in Singapore, where I built and tested a quantitative model that used company valuation metrics to predict Japanese stock prices. The strategy yielded 23.2% in annual gains in testing.

Later, in an independent project, I turned to machine learning for a health question: I retrained a published random-forest model to predict how strongly 33 common pesticides bind the human androgen receptor.

fact: Effissimo Capital Mgmt. | Intern · quantitative stock model, 23.2% annual gains · Jun 2023
fact: Independent research | Pesticide–androgen receptor binding · 2023–25
photo: pesticide-figure.png | Predicted binding, 33 pesticides | the ranking chart from the pesticide project


# 2 · Auris
label: the ears · Stele
more: stele
subtitle: Engineering operations at Stele
summary: I run the operating cadence for Stele’s engineering team.

Stele is building a lifelong record of the human body: an app that brings data from the wearables people already own into a single timeline, and Stele Fusion, a pair of earbuds that measure EEG alongside heart rate, temperature, and motion.

As technical project manager, I run the engineering team’s operating cadence: standups, a weekly progress, plan, and problems report, and a live view of every project’s owner, status, and next deadline. I also onboard new engineers and track the team’s key technical milestones.

! Shameless plug: the waitlist is open. If you want to be first in line when the product launches, the button below is for you.

fact: Stele Inc. | Technical project manager · Jul 2026–present
// when preorders open, change this line to something like:  link: Preorder Stele Fusion | https://...
link: Join the waitlist | https://www.stele.health/#waitlist
photo: stele-work.jpg | Stele | you at work or with the team
photo: stele-earbuds.jpg | Stele Fusion | the Stele Fusion earbuds
photo: stele-site.png | stele.health | a screenshot of the Stele website | | https://www.stele.health/


# 3 · Lingua
label: the tongue · languages
subtitle: English, Japanese, and Chinese
summary: Trilingual in English, Japanese, and Chinese, and co-president of the Andover Japanese Connection.

I’m Japanese, grew up in Singapore, and went to high school in Massachusetts, so I’ve always moved between languages and cultures.

At Andover, I co-led the Andover Japanese Connection, reviving a club that had been inactive for several years. We rebuilt it into a space for cultural events, interactive lessons, and homework help for students taking Japanese, grew it to more than 30 members, and raised over $400 for victims of natural disasters in Japan.

In 2026, I spent six months as a visiting researcher at Yokohama National University, working day to day in Japanese alongside my lab.

fact: Languages | English · 日本語 · 中文
fact: Andover Japanese Connection | Co-president · Dec 2023–May 2025
link: Blog: A Place I Thought I Knew | https://dukegapyear.duke.edu/2026/08/13/a-place-i-thought-i-knew/
photo: takopa.jpg | Yokohama National University | the takoyaki welcome party with your lab


# 4 · Cor
label: the heart · teaching
more: fll
subtitle: Teaching and mentoring
summary: Years of teaching, from Lego robotics to English tutoring.

I co-founded a FIRST Lego League robotics program at Washington Square Academy and built it from the ground up: writing the curriculum, running weekly sessions, and mentoring more than ten students a week through robot design, programming, and their innovation projects. The team placed in the top ten at regionals and qualified for the state competition.

At the Cormier Youth Center, I mentored elementary and middle school FLL teams and helped host and judge local scrimmages. One of my mentee teams won first place for the Innovation Project Award at the Newton regional.

In Tokyo, I volunteered with KIDSDOOR, a nonprofit that supports students from low-income families. I tutored about ten different Japanese middle and high school students in English one-on-one.

fact: FIRST Lego League, Washington Square Academy | Co-founder and coach · 2022–24
fact: Cormier Youth Center | FLL mentor and scrimmage judge
fact: KIDSDOOR, Tokyo | English tutor · Jan–Apr 2026
link: KIDSDOOR | https://kidsdoor.net/
photo: fll.jpg | FIRST Lego League | FLL team, robot, or trophy (no kids’ faces unless parents agreed)


# 5 · Columna vertebralis
label: the spine · surgical robotics
more: spinal-drill, gravity-compensation
subtitle: Surgical robotics research
summary: First-author research on robotic spinal drills, presented at IEEE ISIE 2026.

At Yokohama National University, I studied a haptic spinal drill with automated bone-penetration detection. Using surface electromyography (sEMG), I measured whether the feature reduces the physical strain on the surgeon operating it. I first-authored the resulting paper and presented it at IEEE ISIE 2026 in Nagoya.

Earlier, at Keio University, I worked on gravity compensation for haptic drill robots used in spinal surgery, which led to a first-author manuscript submitted to the IEEJ Journal of Industry Applications.

fact: Yokohama National Univ. | Visiting researcher · Jan–Jul 2026
fact: IEEE ISIE 2026 | First author · presented in Nagoya
fact: Keio University | Research intern · summer 2024
paper: Electromyographic Evaluation of Automated Penetration Detection in Spinal Drilling | first author · IEEE ISIE 2026 | isie-2026.pdf |
link: Gravity compensation paper (YNU repository) | https://ynu.repo.nii.ac.jp/records/2001367
// add the IEEE Xplore link here once the ISIE proceedings are online:
link: IEEE Xplore |
photo: isie-talk.jpeg | IEEE ISIE 2026, Nagoya | you presenting at ISIE in Nagoya | 50% 21%
photo: drill-setup.jpg | Haptic drill setup | the drill setup in the lab


# 6 · Ventriculus
label: the stomach · culinary training
subtitle: Classical French technique
summary: Trained in French cuisine at Le Cordon Bleu.

I completed the Basic Cuisine program at Le Cordon Bleu Malaysia in Kuala Lumpur and graduated with an honorable mention. Each day paired a three-hour chef demonstration with a three-hour practical, covering knife work, sauces, pastry, and butchery, from whole fish to half a lamb.

The kitchen taught me to stay calm and precise under pressure. Cooking is also how I take care of people: I bake for my family most weekends.

fact: Le Cordon Bleu Malaysia | Basic Cuisine certificate · honorable mention
link: Blog: Under Pressure, Lessons from Culinary School | https://dukegapyear.duke.edu/2026/03/22/under-pressure-lessons-from-culinary-school/
photo: dish-1.jpeg | Le Cordon Bleu Malaysia | your best plated dish | 50% 32%
photo: dish-2.jpeg | Plated | another dish, or something you baked | 50% 46%
photo: chef-whites.jpg | Favorite chef! | you in chef whites | 50% 0%


# 7 · Manus
label: the hands · building
more: robotics
subtitle: Building things
summary: Head of hardware for a competitive robotics program.

I did FIRST robotics for four years across two schools, starting with FRC in ninth grade. At Phillips Academy Andover, I went from social media manager to head of hardware to co-president of the FRC and FTC teams.

As head of hardware, I led mechanical design and fabrication and trained more than 20 beginners in CAD, machining, tool safety, and assembly. I also recruited seven girls to the team. As co-president, I ran meetings, delegated work across the board, and prepared the team for two regional competitions, where we won the Think, Judges', and Quality Awards. Along the way, I organized fundraisers that raised over $300 for educational opportunities for underprivileged students in Lawrence.

fact: Andover Robotics (FRC/FTC) | Co-president · head of hardware · 2022–25
photo: robot.jpg | Andover Robotics | the robot, or you machining | 50% 0%
photo: cad.png | CAD | a CAD screenshot


# 8 · Liber
label: the book · wrist rehabilitation
more: eit-book
subtitle: An 80-page book on wrist rehabilitation
summary: Author of an 80-page book on wrist rehabilitation and electrical impedance tomography.

My interest in surgery started with my own hand. After an operation to repair a torn ligament in my little finger, my surgeon walked me through the photos, and I wanted to understand both the clinical and the engineering side of recovery.

That became an independent writing project: an 80-page book on wrist anatomy, common injuries, physical therapy, wearable health technology, and how electrical impedance tomography could support rehabilitation at home, written so that younger students can follow it. I hold a conditional acceptance to Duke-NUS Medical School for the MD.

fact: Independent writing project | Electrical Impedance Tomography in Wrist Rehabilitation · 80+ pages
// this opens the Google Doc in the built-in reader. It only works for visitors once the doc's
// sharing is set to "Anyone with the link can view".
paper: Electrical Impedance Tomography in Wrist Rehabilitation | 80-page book · independent project | https://docs.google.com/document/d/1_YkNgDY76VPKcRwH2CprpCdm2fl4S6g_1rPrfamrwPk/preview |
photo: xray.jpg | The finger | optional: the finger X-ray


# 9 · Crura
label: the legs · athletics
subtitle: Basketball and high jump
summary: Championship basketball player and two-time All-NEPSAC high jumper.

I’ve played competitive basketball for most of my life, winning Singapore’s U16 and U18 Division 1 championships, the U16 3x3 national championship, and the 2025 Asia Pacific Cup. At Andover, I was also a high jumper and a two-time All-NEPSAC selection.

Basketball has been a constant wherever I’ve lived, from Sunday games with a neighborhood team in Tokyo to pickup games in Mongolia.

fact: Basketball | Singapore U16 + U18 D1 champion · U16 3x3 national champion · 2025 Asia Pacific Cup
fact: High jump | 2x All-NEPSAC, 1x ALL-NEPSAC Honorable Mention
photo: basketball.jpg | Basketball | a game photo | 50% 6%
photo: highjump.jpg | High jump | a mid-jump photo


# 11 · Cellulae
label: fig. 2, ×400 · cell biology
more: cycloxaprid
subtitle: Cell toxicology
summary: Independent wet-lab research on pesticide toxicity.

At Andover, I ran an independent toxicology study, exposing 4T1 mouse mammary cancer cells to a neonicotinoid pesticide and measuring its effects on cell viability and DNA fragmentation through DNA laddering.

fact: Phillips Academy Andover | Independent research · Dec 2024–May 2025
paper: Assessment of Cycloxaprid Toxicity: Oxidative Stress and Cell Death Mechanisms in 4T1 Epithelial Mouse Mammary Cells | independent research manuscript · March 2025 | Akari_Imai_Bio600_IP_Manuscript.pdf |
photo: gel.JPG | DNA laddering | your DNA laddering gel | 50% 37%
photo: cells.jpg | 4T1 cells | cells under the microscope


# 10 · Pedes
label: the feet · a gap year
subtitle: A gap year across five countries
summary: Culinary school, research, and travel across five countries.

Before starting at Duke, I spent a gap year in five countries: training at Le Cordon Bleu in Kuala Lumpur, playing basketball in Singapore, conducting research in Yokohama while tutoring in Tokyo, and traveling through Mongolia and Cambodia.

In Mongolia, I rode horseback across the steppe, stayed with a nomadic family, bought four pet goats (one of them, Tapi, is pictured below), and crossed the Gobi by road. In the middle of nowhere, I ended up playing pickup basketball with a group of Mongolian kids; we didn’t share a word of language, and it didn’t matter. In Cambodia, I visited the floating villages and the temples of Angkor.

fact: Gap year | Malaysia · Singapore · Japan · Mongolia · Cambodia · 2025–26
link: Blog: Under Pressure (culinary school) | https://dukegapyear.duke.edu/2026/03/22/under-pressure-lessons-from-culinary-school/
link: Blog: A Place I Thought I Knew (Japan) | https://dukegapyear.duke.edu/2026/08/13/a-place-i-thought-i-knew/
photo: gobi.JPG | Mongolia | the Gobi, or you on horseback
photo: mongolia2.jpg | Pickup basketball, Mongolia | you with the kids from the pickup game
photo: mongolia3.jpg | Tapi the goat | you and Tapi | 50% 60%
photo: cambodia.JPG | Cambodia | the floating village or Angkor Wat


// ============================================================
//  RECRUITER VIEW (the "recruiter view" button). Keep this short: it reads like a résumé.
//    tagline:      one line under your name
//    experience:   Organization | Role | Dates          (one row each, in order)
//    education:    School | Degree or note | Dates
//    publication:  Title | small note | filename.pdf or https://...   (a "read" button on the right)
//    other:        one line of everything else, separated by ·
//  Each "# WORK · Title" section below is one box under Selected work.
//    tags:   small caps line under the title
//    span:   half (two boxes side by side) or full (one box across the whole width)
//    then paragraphs, and link: / paper: lines for buttons
// ============================================================

# RECRUITER
tagline: BME + MechE @ Duke ’30. Technical project manager @ Stele. First-author surgical robotics research, presented at IEEE ISIE 2026.
experience: Stele Inc. | Technical project manager | Jul 2026 – Present
experience: Yokohama National University | Visiting researcher, surgical robotics | Jan – Jul 2026
experience: Keio University | Research intern, haptic drill robots | Jun – Jul 2024
experience: Effissimo Capital Management | Intern · quantitative stock model, 23.2% annual gains | Jun 2023
education: Duke University | B.S. Biomedical Engineering + Mechanical Engineering | 2026 – 2030
education: Phillips Academy Andover | | 2022 – 2025
education: Le Cordon Bleu Malaysia | Basic Cuisine certificate, honorable mention | 2025
publication: Electromyographic Evaluation of Automated Penetration Detection in Spinal Drilling | first author · IEEE ISIE 2026 | isie-2026.pdf
publication: Impact of Gravity Compensation on Penetration Detection of Haptic Drill Robot | first author · submitted to IEEJ · YNU repository | https://ynu.repo.nii.ac.jp/records/2001367
publication: Electrical Impedance Tomography in Wrist Rehabilitation | 80-page book · independent project | https://docs.google.com/document/d/1_YkNgDY76VPKcRwH2CprpCdm2fl4S6g_1rPrfamrwPk/preview
other: Conditional acceptance, Duke-NUS Medical School (MD) · Co-founded a FIRST Lego League program (state qualifier) and mentored FLL teams at Cormier Youth Center · Co-president, Andover Japanese Connection · Volunteer English tutor, KIDSDOOR Tokyo · Singapore U16 and U18 Division 1 basketball champion · 2x All-NEPSAC high jump · English, Japanese, Chinese


# WORK · Stele
tags: engineering operations · wearable EEG
span: half

Stele is building a lifelong record of the human body: an app that unifies data from the wearables people already own, and in-ear EEG earbuds. I run the engineering team’s operating cadence: standups, weekly progress reports, and a live view of every project’s owner, status, and deadline.

link: stele.health | https://www.stele.health/


# WORK · Andover Robotics
tags: FRC + FTC · head of hardware
span: half

Four years of FIRST robotics across two schools. At Phillips Academy Andover, progressed from social media manager to head of hardware to co-president of the FRC and FTC teams: led mechanical design and fabrication, trained 20+ beginners in CAD and machining, recruited seven girls to the team, and prepared the team for two regional competitions (Think, Judges', and Quality Awards).


# WORK · Haptic spinal drill research
tags: surgical robotics · sEMG · Keio University + Yokohama National University
span: full

At Yokohama National University, I evaluated a haptic spinal drill with automated bone-penetration detection, using surface electromyography to measure whether the feature reduces the surgeon’s physical strain. I first-authored the paper and presented it at IEEE ISIE 2026 in Nagoya. Earlier, at Keio University, I worked on gravity compensation for the same class of drill robot, which led to a first-author manuscript submitted to the IEEJ Journal of Industry Applications.

paper: ISIE 2026 paper | IEEE ISIE 2026 | isie-2026.pdf |
link: Gravity compensation paper (YNU repository) | https://ynu.repo.nii.ac.jp/records/2001367


// ============================================================
//  PROJECTS TAB. Every "# PROJECT · Title" section is written out in full on the Projects tab, in
//  this order, under a numbered key that jumps to each one. Paragraphs are the description. Every
//  setting below is optional and only shows when filled in, so leave out anything you don't have:
//    tags:        small caps line under the title, e.g. "surgical robotics · sEMG"
//    when:        dates (shown in the list and under the title)
//    role:        what you were on the project
//    tools:       technologies / tools, separated by ·
//    work:        one line per thing you personally did (bulleted under "What I worked on")
//    feature:     one important feature per line (bulleted under "Features")
//    covers:      one line per topic, for writing projects (bulleted under "What it covers")
//    decision:    one technical or design decision per line (bulleted under "Decisions")
//    challenge:   one challenge per line (bulleted under "Challenges")
//    outcome:     the result / impact; one line, or several outcome: lines for several paragraphs
//    summary:     optional one-line pink summary at the top, like the body-part cards
//    link: / paper: / photo: / fact:   exactly as in the body-part sections
//    slug:        short word for the project's address, e.g. slug: stele gives
//                 https://akari1024.github.io/#project/stele (opens the tab scrolled to it)
//    short:       a two-or-three-word name for the little key that stays at the top while scrolling,
//                 and for the "read more · NAME" buttons on the plate's popups
//  On the plate, a body-part section can point at projects with  more: slug, slug  (see # 2 · Auris):
//  its popup then shows only the first paragraph and a "read more · NAME" button that jumps to the
//  project. A popup without more: gets a plain "read more" that unfolds the rest of the card.
//  Everything below comes from your résumé, your papers, and the sections above; nothing new.
//  Lines starting with // are notes to yourself; some mark details only you can fill in.
// ============================================================

# PROJECTS
kicker: the projects of
Nine things I have built, studied, or run, written out in full below. Use the key to jump to one.


# PROJECT · Stele Fusion: engineering operations
slug: stele
short: Stele
tags: engineering operations · wearable EEG · startup
when: Jul 2026 – present
role: Technical project manager intern, Stele Inc.
// tools: (add what you actually run the cadence with)

Stele is building a lifelong record of the human body: an app that brings data from the wearables people already own into a single timeline, and Stele Fusion, in-ear earbuds that measure EEG alongside heart rate, temperature, and motion.

As technical project manager, I run the engineering team’s operating cadence so that day-to-day tracking stays off the technical lead’s plate.

work: Coordinate 8 engineers across the ML, hardware, and app teams through weekly reports and standups
work: Keep one live view of every project’s owner, status, and next deadline, and chase the blockers it surfaces
work: Onboarded 5 engineers
work: Contributed to an invention that is now under a provisional patent application
// challenge: (what has been hard about it)
outcome: A weekly progress, plan, and problems loop that the whole engineering team reports into, and a single place to see where every project stands.
link: Join the waitlist | https://www.stele.health/#waitlist
photo: stele-earbuds.jpg | Stele Fusion | the Stele Fusion earbuds
photo: stele-site.png | stele.health | a screenshot of the Stele website | | https://www.stele.health/


# PROJECT · sEMG evaluation of a haptic spinal drill
slug: spinal-drill
short: sEMG drill study
tags: surgical robotics · surface electromyography · first-author paper
when: Jan – Jul 2026 · Yokohama National University
role: Visiting researcher, Institute of Multidisciplinary Sciences · first author
tools: Surface electromyography (sEMG) · orthopedic haptic drill with automated bone-penetration detection · Excel

Drilling through the spine requires precise penetration detection: the drill has to stop the moment it breaks through bone to protect the spinal cord. Surgeons usually rely on tactile feedback, which adds physical and mental strain over a long operation and contributes to musculoskeletal disorders.

I evaluated a haptic drill with an automated penetration-detection system from the surgeon’s side. Using surface electromyography, I recorded activity in the posterior deltoid and the extensor carpi radialis brevis while drilling with and without the feature, and with a commercially available spinal drill for comparison.

work: Recorded surface EMG from the posterior deltoid and the extensor carpi radialis brevis across three drilling conditions
work: Compared raw EMG traces and normalized RMS values with and without penetration detection
work: First-authored the paper and presented it at IEEE ISIE 2026 in Nagoya, as the conference’s youngest participant
challenge: Single-operator trials so far: between-subject statistics and multi-hour sessions are the next step
outcome: Automated penetration detection cut muscular demand in the posterior deltoid and the extensor carpi radialis brevis by 11.96 and 3.96 %MVC (percent of maximum voluntary contraction), which points to less surgeon fatigue over a long procedure.
fact: Co-authors | Akito Morishima, Shunya Takano, Tomoyuki Shimono, Mitsuru Yagi, Masaya Nakamura
paper: Electromyographic Evaluation of Automated Penetration Detection in Spinal Drilling | first author · IEEE ISIE 2026 | isie-2026.pdf |
// add the IEEE Xplore link here once the ISIE proceedings are online:
link: IEEE Xplore |
photo: isie-talk.jpeg | IEEE ISIE 2026, Nagoya | you presenting at ISIE in Nagoya | 50% 21%
photo: drill-setup.jpg | Haptic drill setup | the drill setup in the lab


# PROJECT · Gravity compensation for a haptic drill robot
slug: gravity-compensation
short: Gravity compensation
tags: surgical robotics · haptics · first-author manuscript
when: Jun – Jul 2024 · Keio University
role: Student researcher, Frontier Research & Education Collaborative Square · first author
tools: C++ · Excel · haptic drill robot for spinal surgery · accelerometer-based slope estimation

A haptic drill robot detects the moment its bit breaks through bone and stops. Detection depends on the force the robot senses at the bit, and at a tilt part of that force is just the drill’s own weight, so accuracy fell sharply at 45° and 90°.

At Keio University I added gravity compensation to the robot: the drilling slope is estimated from an accelerometer, and the weight’s contribution is removed before the penetration check.

decision: Estimate the drilling slope from an accelerometer, then compensate for gravity before the penetration check
outcome: Penetration detection accuracy rose to 100% at all three drilling angles, up from 42.9% at 45° and 14.3% at 90°.
outcome: I first-authored the resulting manuscript, being submitted to the IEEJ Journal of Industry Applications and deposited in the Yokohama National University repository.
link: Read the manuscript (YNU repository) | https://ynu.repo.nii.ac.jp/records/2001367


# PROJECT · Electrical Impedance Tomography in Wrist Rehabilitation
slug: eit-book
short: EIT book
tags: writing · rehabilitation · 80+ pages
role: Author
// when: (add when you wrote it)

My interest in surgery started with my own hand. After an operation to repair a torn ligament in my little finger, I wanted to understand both the clinical and the engineering side of recovery.

That became an independent writing project: an 80-page book written so that younger students can follow it.

covers: Wrist anatomy and common injuries
covers: Physical therapy
covers: Wearable health technology
covers: How electrical impedance tomography could support rehabilitation at home
// this opens the Google Doc in the built-in reader once its sharing is "Anyone with the link can view".
paper: Electrical Impedance Tomography in Wrist Rehabilitation | 80-page book · independent project | https://docs.google.com/document/d/1_YkNgDY76VPKcRwH2CprpCdm2fl4S6g_1rPrfamrwPk/preview |


# PROJECT · Andover Robotics (FRC and FTC)
slug: robotics
short: Andover Robotics
tags: robotics · hardware · leadership
when: 2022 – 2025 · Phillips Academy Andover
role: Social media manager → head of hardware → co-president
tools: Fusion 360 · Onshape · machining · hardware assembly

Four years of FIRST robotics across two schools, starting with FRC in ninth grade. At Phillips Academy Andover I went from social media manager to head of hardware to co-president of the FRC and FTC teams.

work: Led mechanical design and fabrication as head of hardware
work: Trained more than 20 beginners in CAD, machining, tool safety, and assembly
work: Recruited seven girls to the team
work: Ran meetings, delegated work across the board, and prepared the team for two regional competitions
work: Organized fundraisers that raised over $300 for educational opportunities for underprivileged students in Lawrence
outcome: Think, Judges’, and Quality Awards at regional competitions.
photo: robot.jpg | Andover Robotics | the robot, or you machining | 50% 0%
photo: cad.png | CAD | a CAD screenshot


# PROJECT · Pesticide–androgen receptor binding screen
slug: pesticides
short: Pesticide screen
tags: machine learning · toxicology · sole-author paper
when: Nov 2023 – Jun 2025 · independent research
role: Independent researcher, supervised by Mackenzie Simper (WashU MD student) · sole author
tools: Python · random-forest binding-affinity model (Reker et al.) · ChEMBL bioactivity data · SMILES via ChEBI

Earlier studies had looked at how pesticides affect sex hormones, but very few at the androgen receptor. Lab binding experiments are slow and expensive, so I retrained a published random-forest model that predicts how strongly a molecule binds a target from its structure.

work: Retrained the model on ChEMBL data for two targets: the human androgen receptor and the testis-specific androgen-binding protein
work: Curated 33 pesticides from the literature, converting the missing ones to SMILES, and screened them against 1,440 background compounds
work: Wrote the paper as sole author
outcome: Acetamiprid, an insecticide thought to be non-toxic, and three banned organochlorines (heptachlor, mirex, and trans-nonachlor) were predicted to bind the androgen receptor above average. These are predictions, so the natural next step is a binding assay on the top hits.
photo: pesticide-figure.png | Predicted binding, 33 pesticides | the ranking chart from the pesticide paper


# PROJECT · Cycloxaprid toxicity in 4T1 mammary cells
slug: cycloxaprid
short: Cycloxaprid
tags: wet lab · toxicology · independent research
when: Dec 2024 – May 2025 · Phillips Academy Andover
role: Independent researcher, Biology 600 Independent Research Laboratory
tools: Cell culture · live and dead cell counts · DNA laddering

Cycloxaprid is a newer neonicotinoid insecticide expected to spread through agriculture because it works against resistant pests, and it had not been assessed for carcinogenic properties. I exposed 4T1 mouse mammary cells to a range of cycloxaprid concentrations and measured cell viability and DNA damage.

work: Cultured 4T1 cells and exposed them to a concentration series of cycloxaprid
work: Counted live and dead cells at each concentration
work: Ran a DNA laddering assay to look for fragmentation
outcome: Contrary to the starting hypothesis of uncontrolled growth, cycloxaprid caused dose-dependent cell death and a 28.6% increase in DNA degradation across concentrations, with fragmentation and smearing consistent with apoptosis and necrosis: cytotoxic rather than carcinogenic. Written up as a 24-page manuscript.
paper: Assessment of Cycloxaprid Toxicity: Oxidative Stress and Cell Death Mechanisms in 4T1 Epithelial Mouse Mammary Cells | independent research manuscript · March 2025 | Akari_Imai_Bio600_IP_Manuscript.pdf |
photo: gel.JPG | DNA laddering | your DNA laddering gel | 50% 37%
photo: cells.jpg | 4T1 cells | cells under the microscope


# PROJECT · Quantitative Japanese stock model
slug: effissimo
short: Stock model
tags: quantitative modeling · finance
when: Jun 2023 · Effissimo Capital Management, Singapore
role: Intern
tools: Excel

At Effissimo Capital Management, an investment firm in Singapore, I designed, built, and back-tested a quantitative model that used company valuation metrics to predict Japanese stock prices.

outcome: In back-testing, the strategy returned 23.2% annualized, 14.4 percentage points above the TOPIX 500 benchmark.


# PROJECT · FIRST Lego League program
slug: fll
short: FIRST Lego League
tags: teaching · robotics · program building
when: Aug 2022 – Dec 2024 · Washington Square Academy
role: Co-founder and coach

I co-founded a competitive FIRST Lego League program at Washington Square Academy and built it from the ground up: writing the curriculum, running weekly sessions, and mentoring more than ten students a week through robot design, programming, and their innovation projects.

work: Wrote the program’s curriculum, which more than 30 elementary and middle schoolers went through
work: Ran weekly sessions and mentored more than ten students a week
outcome: The team placed in the top ten at regionals and qualified for the state competition.


// ============================================================
//  SKILLS TAB. One line per category: category: Name | skill · skill · skill
//  Only what's on your résumé (and the work above) is here; add or reorder freely.
//  A paragraph under # SKILLS shows as a short intro line.
//  Each skill connects to projects: put the projects' slug: names in [brackets] after it, e.g.
//  Python [pesticides, effissimo]. Hovering (or tapping) the skill then shows those projects with a
//  jump to each one's page. A skill without brackets is matched automatically to any project whose
//  tools: or tags: line contains that exact word. A skill with no match is plain text.
// ============================================================

# SKILLS
kicker: the skills of
Grouped by what I have used them for. Hover or tap a skill to see where.

category: Programming | Python [pesticides] · Java · C++ [gravity-compensation]
category: CAD and fabrication | Fusion 360 [robotics] · Onshape [robotics] · machining [robotics] · hardware assembly [robotics]
category: Lab and measurement | Cell culture [cycloxaprid] · DNA laddering [cycloxaprid] · Surface electromyography (sEMG) [spinal-drill]
category: Data and modeling | Excel [spinal-drill, gravity-compensation, effissimo] · quantitative modeling [effissimo] · random-forest screening in Python [pesticides]
category: Engineering operations | Standups [stele] · weekly progress / plan / problems reporting [stele] · project tracking [stele] · engineer onboarding [stele]
category: Spoken languages | English · Japanese [spinal-drill] · Chinese
// Not linked yet because only you know where you used them: Java, English, Chinese.
// Add the project after each, e.g.  Java [robotics]  or  Excel [effissimo]  and they light up.


// ============================================================
//  CONTACT TAB. The buttons use the email / linkedin / resume / github lines at the top of this file.
//    headline:  big line at the top
//    blurb:     one or two sentences under it
//    cta:       label of the main button (it copies your email and opens a mail draft)
//    note:      small line under the buttons, e.g. what you're looking for and when (optional)
// ============================================================

# CONTACT
headline: Get in touch
blurb: Email is the fastest way to reach me. For anything about Stele, engineering operations, surgical robotics, or research, I’d love to hear from you.
cta: Email me
// note: Open to summer 2027 internships in ...

`;
