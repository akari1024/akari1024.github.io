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
subtitle: Quantitative models, from markets to molecules
summary: A quantitative stock model for a Singapore investment firm, and a machine-learning screen for pesticide toxicity.

I interned at Effissimo Capital Management, an investment firm in Singapore, where I built and tested a quantitative model that used company valuation metrics to predict Japanese stock prices. The strategy yielded 23.2% in annual gains in testing.

Later, in an independent project, I turned to machine learning for a health question: I retrained a published random-forest model to predict how strongly 33 common pesticides bind the human androgen receptor.

fact: Effissimo Capital Mgmt. | Intern · quantitative stock model, 23.2% annual gains · Jun 2023
fact: Independent research | Pesticide–androgen receptor binding · 2023–25
photo: pesticide-figure.png | Predicted binding, 33 pesticides | the ranking chart from the pesticide project


# 2 · Auris
label: the ears · Stele
subtitle: Engineering operations at Stele
summary: I run the operating cadence for Stele’s engineering team.

Stele is building a lifelong record of the human body: an app that brings data from the wearables people already own into a single timeline, and Stele Fusion, a pair of earbuds that measure EEG alongside heart rate, temperature, and motion.

As technical project manager, I run the engineering team’s operating cadence: standups, a weekly progress, plan, and problems report, and a live view of every project’s owner, status, and next deadline. I also onboard new engineers and track the team’s key technical milestones.

! Shameless plug: the waitlist is open. If you want to be first in line when the product launches, the button below is for you.

fact: Stele Inc. | Technical project manager · Jul 2026–present
// when preorders open, change this line to something like:  link: Preorder Stele Fusion | https://...
link: Join the waitlist | https://www.stele.health/#waitlist
link: Stele website | https://www.stele.health/
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
subtitle: Building things
summary: Head of hardware for a competitive robotics program.

I did FIRST robotics for four years across two schools, starting with FRC in ninth grade. At Phillips Academy Andover, I went from social media manager to head of hardware to co-president of the FRC and FTC teams.

As head of hardware, I led mechanical design and fabrication and trained more than 20 beginners in CAD, machining, tool safety, and assembly. I also recruited seven girls to the team. As co-president, I ran meetings, delegated work across the board, and prepared the team for two regional competitions, where we won the Think, Judges', and Quality Awards. Along the way, I organized fundraisers that raised over $300 for educational opportunities for underprivileged students in Lawrence.

fact: Andover Robotics (FRC/FTC) | Co-president · head of hardware · 2022–25
photo: robot.jpg | Andover Robotics | the robot, or you machining | 50% 0%
photo: cad.png | CAD | a CAD screenshot


# 8 · Liber
label: the book · wrist rehabilitation
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
link: Join the waitlist | https://www.stele.health/#waitlist


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

`;
