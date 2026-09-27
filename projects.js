/* ==========================================================================
   HOUSE OF EIGHT — YOUR WORK
   This is the only file you need to edit to add, remove or reorder projects.

   1. Put your images / videos inside the  assets/work/  folder.
   2. Copy one { ... } block below, paste it, and change the text + file names.
   3. Save, refresh the page. The first project is shown as the big card.

   Fields (only title is required — leave anything else out if you don't have it):
     category     small gold label on the card      e.g. 'Reel · Brand film'
     title        project name
     summary      one line shown on the card
     description  a few sentences shown when someone opens the project
     cover        image shown on the card           e.g. 'assets/work/aether-cover.jpg'
     youtube      paste any YouTube link — it plays in the popup and its thumbnail becomes the cover
     drive        a Google Drive video link (the file's own share link plays in the popup)
     video        an .mp4 file played in the popup  e.g. 'assets/work/aether.mp4'
     gallery      more images shown in the popup    ['assets/work/a1.jpg','assets/work/a2.jpg']
     link         a link to the full project        e.g. YouTube, Instagram, Behance, Drive
     linkLabel    text for that button              e.g. 'Watch on YouTube'
     scope        what you did (shows as 4 boxes)   ['Concept','Edit','Colour','Sound']
     disciplines  which of the 8 disciplines it appears under   ['Short-form video','Motion graphics']
     client       who it was made for                           'Dindigul Thalappakatti'
     duration     shown on the thumbnail                        '0:36'
     vertical     true for 9:16 reels, false for 16:9 (.mp4 files are treated as vertical)
     hidden       true = keep it in the file but don't show it on the site

   Every block is separated by a comma:   { ... },  { ... },  { ... }

   PROJECTS          = the big "Selected work" section (keep it to your best 3-5)
   DISCIPLINE_WORK   = extra work that only shows inside a discipline (e.g. all your reels)
   Any project in either list shows under a discipline if that discipline is in its "disciplines" list.
   ========================================================================== */

const PROJECTS = [
  {
    category: 'Tutorial · Dindigul Thalappakatti',
    title: 'Table Set-up Tutorial',
    summary: 'A step-by-step table set-up guide for Dindigul Thalappakatti.',
    description: 'A tutorial video that walks through setting up a table for Dindigul Thalappakatti, one step at a time.',
    cover: 'assets/work/table-setup-tutorial.jpg',
    drive: 'https://drive.google.com/file/d/1v0uP2q91xcm_SX3ra3k3WX_YvJnP-18s/view?usp=drive_link',
    linkLabel: 'Watch the tutorial',
    scope: []
  },
  {
    category: 'Documentary',
    title: 'Streets of Malleswaram',
    summary: 'A short documentary on the streets of Malleswaram, Bengaluru.',
    description: 'A short documentary that walks the streets of Malleswaram, one of Bengaluru’s oldest neighbourhoods, taking in its temple towers, markets and everyday street life, and the people who give the area its character.',
    cover: 'assets/work/streets-of-malleswaram.jpg',
    youtube: 'https://www.youtube.com/watch?v=oSz030pkNXw',
    disciplines: ['Documentary & visual stories'],
    scope: []
  },
  {
    category: 'Short film · Romantic thriller',
    title: 'Ennam Pol Vazhkai',
    summary: 'எண்ணம் போல் வாழ்க்கை: a Tamil romantic thriller. Pre-production and production crew.',
    description: 'A Tamil romantic thriller short film directed by Roby Jayson and released by King Pictures. I was part of the pre-production and production team and a key member of the crew, from planning the shoot through to filming. The film went on to win at several film festivals, including Indian Film House and the Indo French International Film Festival.',
    cover: 'assets/work/ennam-pol-vazhkai.jpg',
    youtube: 'https://www.youtube.com/watch?v=6UJDK0bspKc',
    disciplines: ['Documentary & visual stories'],
    scope: ['Pre-production', 'Production team', 'Key crew member']
  },

  // EXAMPLE — this one is hidden. Fill it in and delete the "hidden: true" line to show it.
  {
    hidden: true,
    category: 'Reel · Motion graphics',
    title: 'My New Project',
    summary: 'One line about it.',
    description: 'What the brief was, what you made, and how it turned out.',
    cover: 'assets/work/my-new-project-cover.jpg',
    video: 'assets/work/my-new-project.mp4',
    gallery: ['assets/work/my-new-project-1.jpg', 'assets/work/my-new-project-2.jpg'],
    link: 'https://www.instagram.com/p/xxxx',
    linkLabel: 'View on Instagram',
    scope: ['Concept', '2D animation', 'Edit', 'Sound design']
  }
];


/* ==========================================================================
   WORK SHOWN INSIDE THE 8 DISCIPLINES
   Discipline names must match the ones on the site:
   'Short-form video', 'Social content', 'Motion graphics', 'Graphic design',
   'AI creative', 'Social media management', 'Digital campaigns',
   'Documentary & visual stories'

   Extra fields for this list:
     group    sub-heading inside a discipline, e.g. 'Social media' or 'Print & brand collateral'
     aspect   thumbnail shape for images: '1/1' square, '4/5' Instagram portrait, 'a4', '5/2' wide, '14/9' spread, '7/9' page
     badge    small label on the thumbnail instead of a duration, e.g. '7 posts'
   ========================================================================== */

const DISCIPLINE_WORK = [

  // ---------- GRAPHIC DESIGN ----------
  {
    disciplines: ['Graphic design'],
    group: 'Social media',
    category: 'Social media · Ugadi campaign',
    client: 'Indium Bloom',
    title: 'Plots of Gold',
    summary: 'A seven-post Ugadi carousel for villa plots off Mysore Road.',
    description: 'A seven-post Ugadi festive campaign for Indium Bloom’s villa plots at Hejjala, off Mysore Road. One “Plots of Gold” system runs through every post (gold lettering, a glowing location pin over green land and the festive offer of up to 30g gold), while each post leads with a single reason to buy: green living in Hejjala, a 130-acre township, Phase 2 now launched, BMRDA and RERA approval, 10 minutes from Challaghatta Metro, and the 1,850-acre Kumbalgodu forest with two lakes.',
    cover: 'assets/work/design/plots-of-gold-1.jpg',
    gallery: ['assets/work/design/plots-of-gold-1.jpg','assets/work/design/plots-of-gold-2.jpg','assets/work/design/plots-of-gold-3.jpg','assets/work/design/plots-of-gold-4.jpg','assets/work/design/plots-of-gold-5.jpg','assets/work/design/plots-of-gold-6.jpg','assets/work/design/plots-of-gold-7.jpg'],
    aspect: '1/1',
    badge: '7 posts',
    scope: ['Campaign layout', 'Social post series', 'Festive offer design', 'Typography']
  },
  {
    disciplines: ['Graphic design'],
    group: 'Social media',
    category: 'Social media · Awareness day',
    client: 'Sriyah Insurance Brokers × Namma Cover',
    title: 'National Fire Service Week',
    summary: 'A tribute post honouring firefighters, April 14–20.',
    description: 'An awareness post for Sriyah Insurance Brokers and Namma Cover marking National Fire Service Week (April 14–20). A fire-lit scene of firefighters walking toward the flames carries a short tribute to their courage, with the closing line, “Your service, sacrifice, and spirit inspire us all”, picked out in yellow.',
    cover: 'assets/work/design/sriyah-fire-service-week.jpg',
    gallery: ['assets/work/design/sriyah-fire-service-week.jpg'],
    aspect: '4/5',
    scope: []
  },
  {
    disciplines: ['Graphic design'],
    group: 'Social media',
    category: 'Social media · Festive greeting',
    client: 'Sriyah Insurance Brokers × Namma Cover',
    title: 'Eid-ul-Fitr Mubarak',
    summary: 'A warm Eid greeting in ivory and gold.',
    description: 'An Eid-ul-Fitr greeting for Sriyah Insurance Brokers and Namma Cover. A soft ivory palette, a mosque silhouette, glowing lanterns and an open Quran on a prayer rug frame a gold calligraphic headline and a three-line wish for delight, love and contentment.',
    cover: 'assets/work/design/sriyah-eid-ul-fitr.jpg',
    gallery: ['assets/work/design/sriyah-eid-ul-fitr.jpg'],
    aspect: '4/5',
    scope: []
  },
  {
    disciplines: ['Graphic design'],
    group: 'Print & brand collateral',
    category: 'Print · Poster system',
    client: 'GS Global',
    title: 'GS Global Poster Series',
    summary: 'An A4 announcement poster and four reusable brand templates.',
    description: 'An A4 poster system for GS Global Group. The lead poster announces IPS Kamaraj joining as senior advisor, quoted by CA Ganapathi Subramanian. Four matching templates reuse the brand’s blue gradients, fingerprint arcs and sticker shapes in different layouts, so the team can turn out new on-brand posters quickly.',
    cover: 'assets/work/design/gs-global-advisor-announcement.jpg',
    gallery: ['assets/work/design/gs-global-advisor-announcement.jpg','assets/work/design/gs-global-template-1.jpg','assets/work/design/gs-global-template-2.jpg','assets/work/design/gs-global-template-3.jpg','assets/work/design/gs-global-template-4.jpg'],
    aspect: 'a4',
    badge: '5 designs',
    scope: ['Poster design', 'Template system', 'Print-ready A4']
  },
  {
    disciplines: ['Graphic design'],
    group: 'Print & brand collateral',
    category: 'Print · Custom die-cut',
    client: 'Indium Blossom',
    title: 'Custom Handover Key',
    summary: 'An oversized ceremonial key for property handovers.',
    description: 'A custom die-cut handover key for Indium Blossom at Indium Lake Forest, off Mysore Road. Designed at 30 × 12 inches in the brand’s deep maroon with gold wordmark detailing, it gives homeowners a ceremonial key to hold up in their handover photos.',
    cover: 'assets/work/design/handover-key.png',
    gallery: ['assets/work/design/handover-key.png'],
    aspect: '5/2',
    scope: ['Die-cut shape', 'Print design', 'Brand application']
  },

  {
    disciplines: ['Graphic design'],
    group: 'College magazine',
    category: 'College magazine · Story layout',
    client: 'Kids magazine (college project)',
    title: 'A Trip Through the Memory Lane',
    summary: 'A three-spread story for young readers, set in bright, playful type.',
    description: 'A three-spread story layout from a kids’ magazine made by our college team for readers aged 5 to 13. Ten-year-old Joakim finds an old photo album in the attic and drifts through his father’s memories: the Maratha Mandir theatre, Juhu Beach, the family’s first car and Cartoon Network. The text sits inside hand-drawn shapes on sunny yellow, key words pop out in coloured, textured letters, and a glossary on the last page helps children with new words.',
    cover: 'assets/work/design/magazine/memory-lane-1.jpg',
    gallery: ['assets/work/design/magazine/memory-lane-1.jpg','assets/work/design/magazine/memory-lane-2.jpg','assets/work/design/magazine/memory-lane-3.jpg'],
    aspect: '14/9',
    badge: '3 spreads',
    scope: ['Story layout', 'Playful typography', 'Glossary page', 'Team project']
  },
  {
    disciplines: ['Graphic design'],
    group: 'College magazine',
    category: 'College magazine · Story layout',
    client: 'Kids magazine (college project)',
    title: 'The Cat Story',
    summary: 'A write-along story children trace with a pencil.',
    description: 'A three-page write-along story about a mother cat and her kittens. Each page gives children handwriting guidelines to trace the story with a pencil, framed by colourful cartoon cats, so reading and writing practice feel like play for 5 to 13-year-olds.',
    cover: 'assets/work/design/magazine/cat-story-1.jpg',
    gallery: ['assets/work/design/magazine/cat-story-1.jpg','assets/work/design/magazine/cat-story-2.jpg','assets/work/design/magazine/cat-story-3.jpg'],
    aspect: '7/9',
    badge: '3 pages',
    scope: ['Story layout', 'Handwriting practice pages', 'Illustration placement', 'Team project']
  },
  {
    disciplines: ['Graphic design'],
    group: 'College magazine',
    category: 'College magazine · Activity pages',
    client: 'Kids magazine (college project)',
    title: 'Draw, Colour & Make',
    summary: 'Hands-on pages: finish the fox, colour and cut out a tiger mask.',
    description: 'Activity pages that get children drawing and making. “Draw the Fox” asks them to finish the other half of a fox’s face, and a two-page “Make a Mask” spread gives them a tiger mask to colour and cut out, alongside fun tiger facts told by a friendly cartoon tree.',
    cover: 'assets/work/design/magazine/create-your-mask.jpg',
    gallery: ['assets/work/design/magazine/draw-the-fox.jpg','assets/work/design/magazine/make-a-mask.jpg','assets/work/design/magazine/create-your-mask.jpg'],
    aspect: '7/9',
    badge: '3 pages',
    scope: ['Activity page design', 'Kids’ illustration layout', 'Team project']
  },
  {
    disciplines: ['Graphic design'],
    group: 'College magazine',
    category: 'College magazine · Ads',
    client: 'Kids magazine (college project)',
    title: 'Kids Magazine Ads',
    summary: 'Bright, full-page ads for an art class and a summer camp.',
    description: 'Full-page ads designed for the magazine, made colourful and easy for children to read. A dripping-paint “Kids Art Class” ad lists drawing, watercolour, acrylic, glass and portrait painting for ages 3+, and a “Kids Summer Camp 2022” poster invites children to make new friends over a weekend of fun activities.',
    cover: 'assets/work/design/magazine/kids-art-class-ad.jpg',
    gallery: ['assets/work/design/magazine/kids-art-class-ad.jpg','assets/work/design/magazine/summer-camp-ad.jpg'],
    aspect: '7/9',
    badge: '2 ads',
    scope: ['Ad design', 'Colour & layout', 'Team project']
  },

  // ---------- DOCUMENTARY & VISUAL STORIES ----------
  {
    disciplines: ['Documentary & visual stories'],
    category: 'Short film · Drama thriller',
    client: 'Eeram Production',
    title: 'Vanth',
    summary: 'A Tamil drama-thriller short film. Pre-production, key grip and promotion.',
    description: 'A Tamil drama-thriller short film directed by Roby Jayson for Eeram Production. I worked in the pre-production team, served as key grip on set, and helped promote the film around its release.',
    youtube: 'https://youtu.be/RA--Ok5uAg4',
    scope: ['Pre-production', 'Key grip', 'Film promotion']
  },
  {
    disciplines: ['Motion graphics'],
    category: 'Reel · Menu launch',
    client: 'Dindigul Thalappakatti',
    title: 'Introducing Mixed Platter 1',
    summary: 'A fast-cut launch reel for the first mixed barbeque platter.',
    description: 'A fast-paced launch reel for Dindigul Thalappakatti’s Mixed Platter 1. Quick cuts and punchy animated labels move across the board one dish at a time, from spicy BBQ fish to peri peri drumstick BBQ and pepper chicken barbeque, then land on the Grillz 2 Thrillz end card: a BBQ feast for two, starting at ₹479.',
    cover: 'assets/work/motion/mixed-platter-1.jpg',
    video: 'assets/work/motion/mixed-platter-1.mp4',
    duration: '0:29',
    scope: ['Fast-paced edit', 'Animated dish labels', 'Motion graphics', 'End card animation']
  },
  {
    disciplines: ['Motion graphics'],
    category: 'Reel · Grillz 2 Thrillz',
    client: 'Dindigul Thalappakatti',
    title: 'BBQ Platter',
    summary: 'Smoky close-ups and bold type for the Grillz 2 Thrillz barbeque platter.',
    description: 'A reel for the Grillz 2 Thrillz barbeque platter. A bold kinetic “BBQ Platter” title slides in over the food, then close-ups travel across the board as animated labels name the peri-peri red chicken and tandoori chicken. The reel closes on an ember-lit Grillz 2 Thrillz card: a BBQ feast for two from ₹479.',
    cover: 'assets/work/motion/bbq-platter.jpg',
    video: 'assets/work/motion/bbq-platter.mp4',
    duration: '0:29',
    scope: ['Kinetic type', 'Animated labels', 'Edit', 'Ember end card']
  },
  {
    disciplines: ['Motion graphics'],
    category: 'Reel · #TapforHealth',
    client: 'Aster Health',
    title: 'Just Tap',
    summary: 'Real reasons to tap the Aster Health app, told by the Aster team.',
    description: 'Part of Aster Health’s #TapforHealth campaign. Members of the Aster team speak straight to camera about the everyday reasons to tap the Aster Health app, and the edit closes on an animated phone that reveals the Aster Health logo and a prompt to download the app.',
    cover: 'assets/work/motion/just-tap-aster-health.jpg',
    video: 'assets/work/motion/just-tap-aster-health.mp4',
    duration: '0:18',
    scope: ['Edit', 'Phone reveal animation', 'Campaign graphics', 'App end card']
  },
  {
    disciplines: ['Motion graphics'],
    category: 'Reel · Menu launch',
    client: 'Dindigul Thalappakatti',
    title: 'Introducing Mixed Platter 2',
    summary: 'The follow-up platter, cut just as fast.',
    description: 'The follow-up to Mixed Platter 1, built in the same fast-paced style. Rapid cuts and light flashes reveal the barbeque boneless and achari paneer tikka on the board, with animated labels keeping pace with the edit, before closing on the Grillz 2 Thrillz feast-for-two card from ₹479.',
    cover: 'assets/work/motion/mixed-platter-2.jpg',
    video: 'assets/work/motion/mixed-platter-2.mp4',
    duration: '0:31',
    scope: ['Fast-paced edit', 'Light-flash transitions', 'Animated dish labels', 'End card animation']
  },
  {
    disciplines: ['Motion graphics'],
    category: 'Reel · Menu launch',
    client: 'Dindigul Thalappakatti',
    title: 'Introducing Tikka Platter',
    summary: 'Served, basted and grilled: the Tikka Platter in 20 seconds.',
    description: 'A launch reel for the Tikka Platter. The board is served to the table under an animated “Introducing Tikka Platter” title, then close-ups follow the peri-peri drumstick BBQ and achari paneer tikka as they are basted and plated, before the reel ends on the Grillz 2 Thrillz title card, starting at ₹479.',
    cover: 'assets/work/motion/tikka-platter.jpg',
    video: 'assets/work/motion/tikka-platter.mp4',
    duration: '0:20',
    scope: ['Edit', 'Title animation', 'Animated dish labels', 'End card animation']
  },
  {
    disciplines: ['Motion graphics'],
    category: 'Motion design · Women’s Day',
    client: 'Aster Health',
    title: 'Let’s Talk About Health',
    summary: 'A Women’s Day film on the health issues that matter most to women.',
    description: 'A Women’s Day motion piece for Aster Health, built on a concept I developed around women’s health. One by one, animated icons inside a beaded ring introduce the issues women face most, each with a short message: heart disease, breast cancer, mental health, reproductive health and osteoporosis. It closes with Aster wishing everyone a happy Women’s Day and celebrating women who stay healthy and fit, today and every day.',
    cover: 'assets/work/motion/aster-womens-day.jpg',
    video: 'assets/work/motion/aster-womens-day.mp4',
    duration: '0:38',
    scope: ['Concept', 'Icon animation', 'Motion design', 'Typography']
  },
  {
    disciplines: ['Short-form video', 'Motion graphics'],
    category: 'Reel · Ramadan launch',
    client: 'Dindigul Thalappakatti',
    title: 'Daawat-e-Iftar Box',
    summary: 'Launch reel for the Ramadan iftar box, dish by dish.',
    description: 'An introductory reel for Dindigul Thalappakatti’s Daawat-e-Iftar box, made for Ramadan. Close-up food shots fill the box one item at a time (Thalappakatti kuska, parotta, mutton kola urundai, chicken 65 and gulab jamun), each named with an animated title, before the reel closes on the festive packaging and the ₹329 Ramadan special price. Edited and animated in After Effects.',
    cover: 'assets/work/short-form/dawat-e-iftar-box.jpg',
    video: 'assets/work/short-form/dawat-e-iftar-box.mp4',
    duration: '0:36',
    scope: ['Edit', 'Animated food titles', 'Motion in After Effects', '9:16 reel delivery']
  },
  {
    disciplines: ['Short-form video', 'Motion graphics'],
    category: 'Teaser · Outlet opening',
    client: 'Dindigul Thalappakatti',
    title: 'Mogappair Opening Teaser',
    summary: 'Announcing the new Mogappair outlet and party hall in Chennai.',
    description: 'A vertical teaser for the opening of Dindigul Thalappakatti’s new outlet and party hall in Mogappair, Chennai. Built in After Effects on a vintage paper texture, it reveals the new storefront under the line “A new look, that’s just as Legendary!” and closes on the brand card: 100+ outlets, 6 countries, 1 legendary choice.',
    cover: 'assets/work/short-form/mogappair-opening-teaser.jpg',
    video: 'assets/work/short-form/mogappair-opening-teaser.mp4',
    duration: '0:41',
    scope: ['After Effects animation', 'Storefront reveal', 'Kinetic type', 'Brand end card']
  },
  {
    disciplines: ['Short-form video', 'Motion graphics'],
    category: 'Reel · School life',
    client: 'Brigade School',
    title: 'Inside Our Classes',
    summary: 'Grade 5 classroom activities, told in one reel.',
    description: 'A reel for Brigade School showing what happens inside its classrooms. Grade 5 Social Science students make islands and turtles out of coconut and invent their own symbolic languages, brought together with animated title cards and moving photo collages made in After Effects.',
    cover: 'assets/work/short-form/brigade-school-class-activities.jpg',
    video: 'assets/work/short-form/brigade-school-class-activities.mp4',
    duration: '0:57',
    scope: ['Edit', 'Photo collage animation', 'Title cards', 'After Effects']
  },
  {
    disciplines: ['Short-form video'],
    category: 'Reel · Team outing',
    client: 'Dindigul Thalappakatti',
    title: 'Team Trip',
    summary: 'A recap of the Dindigul Thalappakatti team trip.',
    description: 'A recap reel of a Dindigul Thalappakatti team outing. It follows the day from the garland welcome, through outdoor games and a jeep ride, to the “One Dream, One Team” session and the final group photo. Cut to music and finished in After Effects.',
    cover: 'assets/work/short-form/thalappakatti-trip.jpg',
    video: 'assets/work/short-form/thalappakatti-trip.mp4',
    duration: '1:11',
    scope: ['Edit', 'Music cut', 'Titles in After Effects', '9:16 reel delivery']
  }
];
