import type { TranslationResource } from "./en"

const sv = {
  nav: {
    welcome: "Start",
    about: "Om mig",
    skills: "Kompetenser",
    projects: "Projekt",
    getInTouch: "Kontakta mig",
    openMenu: "Öppna navigeringsmenyn",
    closeMenu: "Stäng navigeringsmenyn",
  },
  language: {
    selectorLabel: "Välj språk",
  },
  hero: {
    eyebrow: "Frontend- och fullstackutvecklare",
    titleLine1: "Skapar digitala",
    titleAccent: "upplevelser",
    titleConnector: "med",
    titleLine3: "teknisk precision.",
    intro:
      "Hej! Jag heter Miguel och är utvecklare. Jag bygger snabba, tillgängliga och visuellt tilltalande webbapplikationer i det europeiska tekniklandskapet.",
    readBio: "Läs mer om mig",
    skillsCta: "Erfarenhet och kompetens",
    illustrationAlt: "Illustration av frontendutveckling",
  },
  about: {
    imageAlt: "Porträtt av Miguel",
    yearsExperience: "Års erfarenhet",
    eyebrow: "Min berättelse",
    title: "Från södra Europa till Norden",
    paragraph1:
      "Jag är född och uppvuxen i Lissabon, Portugal, och var tekniknörden som alltid hade koll på datorer. Jag lagade släktingars och vänners datorer, skapade GIF:ar och mallar för Tumblr och gjorde pixelgrafik till tävlingar i Habbo Hotel.",
    paragraph2:
      "Jag har också alltid varit väldigt nyfiken (och är det fortfarande!). När jag väl fick tillgång till internet ägnade jag mycket tid åt att lära mig om olika länder. Norden fascinerade mig särskilt. Från att jag som tioåring såg bilder av Lofoten till att jag många år senare stod där själv har jag alltid vetat att jag ville flytta norrut. 😄",
    paragraph3:
      "På fritiden tycker jag om att resa (ungefär 30 länder hittills), vandra, fotografera (även om jag långt ifrån är expert), redigera foto och video, utforska geografi och kartor, gå på bio, se serier och anime, spela tv-spel och läsa om politik och ekonomi.",
    locationLabel: "Plats",
    locationValue: "Helsingfors, Finland (kan tänka mig att flytta)",
    educationLabel: "Utbildning",
    educationValue:
      "Kandidatexamen i informationsteknik, University of Lisbon",
  },
  skills: {
    eyebrow: "Teknik och erfarenhet",
    title: "Teknisk kompetens",
    cards: {
      react: "Gedigen kunskap om Hooks, Context med mera.",
      typescript: "Strikt typning för robusta kodbaser.",
      styling: "Modern frontenddesign och moderna UI-system.",
      nextjs: "Optimerad SSR och statisk generering.",
    },
    timeline: {
      savantiq: {
        role: "Frontend- och fullstackutvecklare",
        company: "Savantiq • Helsingfors (hybrid)",
        description:
          "Jag började som företagets fjärde medarbetare och tog ansvar för frontendutvecklingen av en B2B-produkt i ett tidigt skede, byggd med React, TypeScript och Next.js. Jag arbetade brett med både produktutveckling och teknik och hade huvudansvaret för UI/UX innan en dedikerad designer anställdes. Jag formade produktdesignen och byggde komplexa flöden, återanvändbara komponenter och datadrivna gränssnitt. Jag bidrog även till backendutvecklingen med Python och Django REST Framework, API-integrationer, automatiserade tester och CI/CD.",
      },
      digipool: {
        role: "Webbutvecklare och webbdesigner (konsult, nolltimmarsavtal)",
        company: "Digipool Group • Helsingfors (distans)",
        description:
          "Jag utvecklade och utformade ett jämförelseverktyg för teleoperatörer där abonnemang och erbjudanden från flera finska operatörer kunde jämföras. Under hela projektet arbetade jag direkt med kunden för att omvandla krav till fungerande lösningar inom UI/UX och webbutveckling.",
      },
      talkdesk: {
        role: "Frontendutvecklare II",
        company: "Talkdesk • Lissabon (distans)",
        description:
          "Jag byggde och underhöll användarnära webbapplikationer och återanvändbara komponenter i Talkdesks designsystem baserat på Storybook, i nära samarbete med design- och backendteam. Jag ledde förbättringar av resursfiltrering, UI/UX och SEO med fokus på användbarhet, underhållbarhet och prestanda. Jag bidrog även till införandet av bland annat Next.js och Redux Toolkit och främjade ren kod, testning och skalbara arbetssätt för frontendutveckling.",
      },
    },
  },
  projects: {
    eyebrow: "Utvalda projekt",
    title: "Egna projekt",
    explore: "Utforska projektet",
    previous: "Visa föregående projekt",
    next: "Visa nästa projekt",
    items: {
      interactiveMaps:
        "Interactive Maps är ett specialbyggt kartverktyg som jag skapade ur mitt intresse för kartor, geografi och geopolitik.",
      euroData:
        "En interaktiv tjänst för att utforska europeisk data och jämföra regioner med hjälp av Eurostat-statistik, kartor och nyckelindikatorer.",
      swimCity:
        "En mobilapp för att hitta badplatser i Helsingfors, med aktuella uppgifter om badvattnet, interaktiva kartor, favoriter och information om stränderna.",
      localDrop:
        "Ett lokalt fildelningsverktyg byggt med Go och vanilla JavaScript för snabba överföringar med låg minnesanvändning.",
      apiBatcher:
        "Samlar GET-anrop i batchar med anpassade interceptorer för att minska nätverkstrafiken och förbättra laddningsprestandan.",
    },
  },
  contact: {
    eyebrow: "Hör av dig",
    titleLine1: "Letar du efter nästa",
    titleAccent: "utvecklare till teamet?",
    getInTouch: "Kontakta mig",
    resume: "CV",
  },
  footer: {
    tagline: "MIGUEL.DEV — FORMAR WEBBEN",
    copyright: "© 2026 Miguel. Byggt med precision i Europa.",
    backToTop: "Till toppen",
  },
} as const satisfies TranslationResource

export default sv
