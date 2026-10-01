export interface BrandColor {
  name: string;
  category: 'primary' | 'neutral' | 'atmosphere';
  hex: string;
  rgb: string;
  hsl: string;
  cmyk: string;
  wcagContrastLight: string;
  wcagContrastDark: string;
  role: string;
  usageDo: string;
  usageDont: string;
}

export interface TypeScaleItem {
  level: string;
  element: string;
  fontFamily: string;
  sizeDesktop: string;
  sizeMobile: string;
  lineHeight: string;
  tracking: string;
  weight: string;
  usage: string;
}

export interface LogoRule {
  title: string;
  rule: string;
  detail: string;
}

export const BRAND_IDENTITY = {
  name: 'Tussen Ons',
  category: 'Interactieve gesprekservaring voor twee mensen',
  tagline: 'De juiste vraag. Op het juiste moment.',
  emotionalPromise: 'Voor gesprekken die anders misschien nooit waren begonnen.',
  brandConcept: 'Het gaat om wat er tussen jullie gebeurt.',
  phoneRole: 'De telefoon brengt jullie samen en verdwijnt daarna naar de achtergrond.',
  internalPhilosophy: 'We optimaliseren niet voor schermtijd. We optimaliseren voor gesprekstijd.',
  kpi: 'Conversation Minutes (Gespreksminuten)',
  culturalInsight: 'We weten steeds meer óver elkaar, maar vragen steeds minder áán elkaar.',
  privacyPromise: 'Wat tussen jullie wordt gezegd, blijft tussen jullie. Tussen Ons hoeft niet te weten wat jullie antwoorden. De app begeleidt het gesprek, niet jullie relatie.',

  coreValues: [
    {
      name: 'Nieuwsgierigheid',
      meaning: 'Er valt altijd iets te ontdekken',
      description: 'Niet omdat er iets mis is dat gerepareerd moet worden, maar omdat ieder mens oneindig veel ongeopende verhalen in zich draagt.',
    },
    {
      name: 'Aandacht',
      meaning: 'De ander krijgt echt ruimte',
      description: 'Geen gehaast geswipe of oppervlakkige afvinklijstjes, maar de rust om écht te horen wat iemand tussen de regels door zegt.',
    },
    {
      name: 'Speelsheid',
      meaning: 'Een goed gesprek hoeft niet zwaar te zijn',
      description: 'Echte diepgang ontstaat bijna altijd vanuit ontspanning, een gedeelde lach en een vleugje ongedwongen brutaliteit.',
    },
    {
      name: 'Oprechtheid',
      meaning: 'Geen perfecte antwoorden nodig',
      description: 'Geen scoreboards, geen psychologische analyses of adviezen. Gewoon menselijk, kwetsbaar contact zonder oordeel.',
    },
    {
      name: 'Privacy',
      meaning: 'Het gesprek is van jullie',
      description: 'Geen opgeslagen antwoorden, geen microfoonluisteraars en geen datahandel. Wat er gezegd wordt, blijft in de kamer.',
    },
  ],

  // 100% Gelijk aan de actuele App Kleuren
  colorPalette: [
    {
      name: 'Crimson Berry (Hoofdkleur)',
      category: 'primary',
      hex: '#BD3A53',
      rgb: '189, 58, 83',
      hsl: '349°, 53%, 48%',
      cmyk: '15%, 88%, 58%, 8%',
      wcagContrastLight: '5.2:1 (WCAG AA op warm ivoor)',
      wcagContrastDark: '6.1:1 (op donker)',
      role: 'De actieve merkkleur uit de app. Warm, gepassioneerd, intiem en vol karakter.',
      usageDo: 'Actieknoppen (Volgende →, Verder →), actieve selectieranden en merksymboliek.',
      usageDont: 'Nooit vervangen door bruinige roesttinten of neonroze.',
    },
    {
      name: 'Warm Ivory Canvas',
      category: 'neutral',
      hex: '#FAF5F0',
      rgb: '250, 245, 240',
      hsl: '30°, 45%, 96%',
      cmyk: '2%, 3%, 5%, 0%',
      wcagContrastLight: '1.05:1',
      wcagContrastDark: '14.5:1 (met Warm Charcoal)',
      role: 'Zacht, tactiel ivoor dat rust geeft aan de ogen.',
      usageDo: 'Hoofdachtergrond voor alle pagina’s en schermen.',
      usageDont: 'Vermijd hard, koud steriel ziekenhuiswit (#FFFFFF) als grote achtergrond.',
    },
    {
      name: 'Deep Warm Charcoal (Tekst)',
      category: 'neutral',
      hex: '#201A18',
      rgb: '32, 26, 24',
      hsl: '15°, 14%, 11%',
      cmyk: '65%, 65%, 65%, 75%',
      wcagContrastLight: '14.5:1 (AAA op Warm Ivory)',
      wcagContrastDark: '1.1:1',
      role: 'Diepe leestekst voor titels en vragen.',
      usageDo: 'Headlines, vraagtitels en hoofdnavigatie.',
      usageDont: 'Nooit hard puur zwart (#000000) gebruiken.',
    },
    {
      name: 'Soft Rose Glow (Achtergrond Gloed)',
      category: 'atmosphere',
      hex: '#F7D8D3',
      rgb: '247, 216, 211',
      hsl: '9°, 64%, 90%',
      cmyk: '2%, 18%, 13%, 0%',
      wcagContrastLight: '1.2:1',
      wcagContrastDark: '12.0:1',
      role: 'De zachte, diffuse gloed in de hoeken van de app.',
      usageDo: 'Achtergrond gradiënten, zachte belichting en icon containers (#FAF0ED).',
      usageDont: 'Niet gebruiken als tekstkleur op lichte ondergrond.',
    },
    {
      name: 'Muted Warm Gray',
      category: 'neutral',
      hex: '#6E625D',
      rgb: '110, 98, 93',
      hsl: '20°, 8%, 41%',
      cmyk: '45%, 45%, 48%, 20%',
      wcagContrastLight: '5.1:1 (AA op Warm Ivory)',
      wcagContrastDark: '3.2:1',
      role: 'Subtiele ondersteunende toelichtingen en ondertitels.',
      usageDo: 'Uitlegteksten, categoriekiezers en secundaire labels.',
      usageDont: 'Niet gebruiken voor kleine micro-labels onder 11px.',
    },
    {
      name: 'Delicate Border Cream',
      category: 'neutral',
      hex: '#EFE6DE',
      rgb: '239, 230, 222',
      hsl: '28°, 35%, 90%',
      cmyk: '5%, 6%, 10%, 0%',
      wcagContrastLight: '1.15:1',
      wcagContrastDark: '13.0:1',
      role: 'Verfijnde, subtiele haarlijnkaders voor witte kaarten.',
      usageDo: 'Card borders, dividers en tab-omlijstingen.',
      usageDont: 'Geen zware donkere lijnen trekken.',
    },
  ] as BrandColor[],

  // Typografisch Systeem
  typography: {
    fontFamilies: {
      display: {
        name: 'Fraunces & Instrument Serif',
        type: 'Editorial Serif',
        weights: '300, 400, 500, Italic',
        purpose: 'Emotionele lading, titels, vragen en merkstatements.',
      },
      body: {
        name: 'Plus Jakarta Sans',
        type: 'Modern Geometric Sans-Serif',
        weights: '400, 500, 600, 700',
        purpose: 'Leesbaarheid, snelle interacties, knoppen en navigatie.',
      },
    },
    typeScale: [
      {
        level: 'Hero Display',
        element: 'h1',
        fontFamily: 'Fraunces / Instrument Serif',
        sizeDesktop: '72px – 76px',
        sizeMobile: '38px – 44px',
        lineHeight: '1.08',
        tracking: '-0.025em (tight)',
        weight: '400 (Regular / Italic accent)',
        usage: 'Primaire paginatitel op landingspagina en hoofdstatements.',
      },
      {
        level: 'Editorial Section Title',
        element: 'h2',
        fontFamily: 'Fraunces',
        sizeDesktop: '44px – 52px',
        sizeMobile: '28px – 34px',
        lineHeight: '1.15',
        tracking: '-0.02em',
        weight: '400 (Regular)',
        usage: 'Sectietitels, hoofdvragen en filosofische stellingen.',
      },
      {
        level: 'Card & Question Title',
        element: 'h3',
        fontFamily: 'Fraunces',
        sizeDesktop: '24px – 32px',
        sizeMobile: '20px – 24px',
        lineHeight: '1.25',
        tracking: '-0.015em',
        weight: '400 – 500',
        usage: 'Vragenkaarten in de simulator, bento-grid titels en pack-namen.',
      },
      {
        level: 'Body Prose',
        element: 'p, span',
        fontFamily: 'Plus Jakarta Sans',
        sizeDesktop: '15px – 16px',
        sizeMobile: '14px – 15px',
        lineHeight: '1.65',
        tracking: 'normal',
        weight: '400 (Regular)',
        usage: 'Lopende artikelen, toelichtingen, uitleg en privacy-instructies.',
      },
      {
        level: 'Interactive Controls & Tabs',
        element: 'button, a.cta',
        fontFamily: 'Plus Jakarta Sans',
        sizeDesktop: '13px – 14px',
        sizeMobile: '12px – 13px',
        lineHeight: '1.0',
        tracking: '0.01em',
        weight: '600 (SemiBold)',
        usage: 'Knoppen, navigatielinks, tabs en actieknoppen.',
      },
      {
        level: 'Unboxed Metadata / Eyebrow',
        element: 'span.kicker',
        fontFamily: 'Plus Jakarta Sans',
        sizeDesktop: '11px – 12px',
        sizeMobile: '10px – 11px',
        lineHeight: '1.2',
        tracking: '0.08em (uppercase)',
        weight: '700 (Bold)',
        usage: 'Categorielabels (STILTE & VERBINDING, GEZELSCHAP).',
      },
    ] as TypeScaleItem[],
  },

  // Logo-richtlijnen
  logoGuidelines: {
    concept: 'Het logo bestaat uit twee zorgvuldig gezette woorden in een verfijnde serif met een bewuste, ademende witruimte ertussen. Deze fysieke afstand tussen "Tussen" en "Ons" weerspiegelt de letterlijke ruimte tussen twee mensen waar het gesprek plaatsvindt.',
    iconConcept: 'Het 4-puntige vonk-icoon in een zacht roze kader (#FAF0ED) dat de vonk van het gesprek symboliseert.',
    rules: [
      {
        title: 'Clear Space (Veiligheidsmarge)',
        rule: 'Minimaal 1x de hoogte van de hoofdletter "T" rondom het complete logo vrijhouden van andere teksten of harde randen.',
        detail: 'Hierdoor behoudt het merk zijn serene, ongehaaste uitstraling.',
      },
      {
        title: 'Minimale Afmetingen',
        rule: 'Digitaal: minimaal 120px breed voor de volledige woordmerk lockup (of 24px voor het beeldmerk-icoon). Print: minimaal 28mm breed.',
        detail: 'Onder deze formaten verliest de letterspatiëring haar tactiele verfijning.',
      },
      {
        title: 'Contrast & Achtergrond',
        rule: 'Plaats het donkere logo (#201A18) uitsluitend op lichte achtergronden (#FAF5F0, #FFFFFF). Gebruik de lichte variant (#FAF5F0) op donkere vlakken.',
        detail: 'Zorg altijd voor minimaal 4.5:1 contrast.',
      },
    ] as LogoRule[],
    donts: [
      'Het logo niet horizontaal of verticaal vervormen (rek/stretch).',
      'Geen harde zwarte slagschaduwen of neon gloed toevoegen.',
      'De spatie tussen "Tussen" en "Ons" niet dichttrekken tot een gewone spatie.',
      'Het logo niet inkleuren in niet-goedgekeurde kleuren.',
    ],
  },

  // Tone of Voice
  toneOfVoice: {
    definition: 'Tussen Ons klinkt als een sociaal intelligente, warme vriend die precies weet wanneer een vraag geopend moet worden en wanneer hij stil moet zijn.',
    pillars: [
      {
        name: 'Warm & Menselijk',
        explanation: 'Geen koude formuleringen of afstandelijke tech-taal. We spreken van mens tot mens, met warmte en respect.',
        example: '„Wie zit er tegenover je?” in plaats van „Selecteer doelgroep configuratie”.',
      },
      {
        name: 'Kort & Onbevangen',
        explanation: 'Eén rake zin heeft meer effect dan een alinea vol context. De vraag geeft het vonkje; jullie maken het vuur.',
        example: '„Wat zou jij doen als niemand iets van je verwachtte?” in plaats van een lang psychologisch intro.',
      },
      {
        name: 'Nieuwsgierig zonder oordeel',
        explanation: 'We gaan ervan uit dat er altijd iets moois te ontdekken valt. Er is niets stuk dat gerepareerd moet worden.',
        example: '„Er valt nog genoeg te ontdekken” in plaats van „Verbeter jullie communicatieproblemen”.',
      },
      {
        name: 'Een tikkeltje speels',
        explanation: 'Luchtig waar het kan, ondeugend waar gepast. Humor en ontspanning zijn de beste poortwachters voor diepgang.',
        example: '„We weten allebei waarom we hier zijn.” of „Kijk elkaar 10 seconden aan. Wie lacht als eerste?”.',
      },
      {
        name: 'Nooit betweterig of analyserend',
        explanation: 'We geven geen rapportcijfers, relatiescores of adviezen. De privacy en autonomie liggen volledig bij het koppel.',
        example: '„Wat tussen jullie wordt gezegd, blijft tussen jullie.”',
      },
    ],
    bannedPhrases: [
      'Optimaliseer jullie relatie',
      'Vergroot emotionele intimiteit',
      'Ontdek jullie hechtingspatroon',
      'Verbeter jullie communicatieve vaardigheden',
      'AI-powered relationship intelligence',
      'Upgrade naar Pro voor maximale relatiesucces',
      'Geavanceerde relatie-analytics',
    ],
    favoredPhrases: [
      'Betere gesprekken beginnen soms met een goede vraag.',
      'De juiste vraag. Op het juiste moment.',
      'Voor gesprekken die anders misschien nooit waren begonnen.',
      'Het gaat om wat er tussen jullie gebeurt.',
      'Wat tussen jullie wordt gezegd, blijft tussen jullie.',
      'Niet meer schermtijd. Meer gesprekstijd.',
      'Met wie praat jij vandaag?',
      'Geen regels, geen puntentelling. Alleen echte aandacht.',
    ],
    touchpointExamples: {
      firstDate: {
        title: 'Eerste Date & Nieuwe Ontmoetingen',
        tone: 'Licht, nieuwsgierig, ontwapenend.',
        example: '„Wat is iets dat mensen vaak over jou aannemen, maar totaal niet klopt?”',
      },
      dateNight: {
        title: 'Date Night & Vaste Partners',
        tone: 'Aandachtig, herinnerend, verdiepend.',
        example: '„Waarover verander je de laatste tijd langzaam maar zeker van gedachten?”',
      },
      microcopy: {
        title: 'Microcopy & Knoppen',
        tone: 'Actief, helder, natuurlijk Nederlands.',
        example: '„Zet op je beginscherm”, „Verder →”, „Volgende →”, „Zelf samenstellen”.',
      },
      privacy: {
        title: 'Privacy & Data',
        tone: 'Discreet, direct, betrouwbaar.',
        example: '„100% privé tussen jullie. Geen antwoorden worden opgeslagen.”',
      },
    },
  },
};
