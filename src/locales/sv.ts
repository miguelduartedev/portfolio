import type { TranslationResource } from "./en"

const sv = {
  nav: {
    welcome: "Välkommen",
    about: "Om mig",
    skills: "Kompetens",
    projects: "Projekt",
    getInTouch: "Kontakta mig",
    openMenu: "Öppna navigeringsmenyn",
    closeMenu: "Stäng navigeringsmenyn",
  },
  language: {
    selectorLabel: "Välj språk",
  },
  hero: {
    eyebrow: "Frontend-/fullstackutvecklare",
    titleLine1: "Skapar digitala",
    titleAccent: "upplevelser",
    titleConnector: "med",
    titleLine3: "teknisk precision.",
    intro:
      "Hej! Jag heter Miguel och är utvecklare. Jag bygger snabba, tillgängliga och visuellt starka webbapplikationer på den europeiska techscenen.",
    readBio: "Läs om mig",
    skillsCta: "Erfarenhet och kompetens",
    illustrationAlt: "Illustration av frontendutveckling",
  },
  about: {
    imageAlt: "Porträtt av Miguel",
    yearsExperience: "Års erfarenhet",
    eyebrow: "Berättelsen",
    title: "Från södern till Norden",
    paragraph1:
      "Jag är född och uppvuxen i Lisbon, Portugal, och var den teknikintresserade ungen som alltid hade koll på datorer. Jag lagade släktingars och vänners datorer, skapade GIF:ar och teman för Tumblr och gjorde pixelgrafik till tävlingar i Habbo Hotel.",
    paragraph2:
      "Jag har också alltid varit väldigt nyfiken (och är det fortfarande!). När jag fick tillgång till internet ägnade jag mycket tid åt att lära mig om olika länder. Norden fascinerade mig särskilt. Från att ha upptäckt bilder av Lofoten som tioåring till att många år senare stå där själv visste jag alltid att jag ville flytta norrut. 😄",
    paragraph3:
      "Utanför jobbet tycker jag om att resa (ungefär 30 länder hittills), vandra, fotografera (även om jag långt ifrån är expert), redigera foto och video, geografi och kartor, gå på bio, se serier och anime, spela tv-spel samt läsa om politik och ekonomi.",
    locationLabel: "Plats",
    locationValue: "Helsinki, FI (Öppen för att flytta)",
    educationLabel: "Utbildning",
    educationValue:
      "Kandidatexamen i informationsteknik, University of Lisbon",
  },
  skills: {
    eyebrow: "Teknik och erfarenhet",
    title: "Teknisk grund",
    cards: {
      react: "Gedigen erfarenhet av Hooks, Context och mer.",
      typescript: "Strikt typning för robusta kodbaser.",
      styling: "Modern frontendstyling och UI-system.",
      nextjs: "Optimerad SSR och statisk generering.",
    },
    timeline: {
      savantiq: {
        role: "Frontend-/fullstackutvecklare",
        company: "Savantiq • Helsinki (Hybrid)",
        description:
          "Började som företagets fjärde medarbetare och tog ansvar för frontendutvecklingen av en B2B-produkt i tidigt skede, byggd med React, TypeScript och Next.js. Arbetade brett mellan produkt och teknik och var den huvudsakliga UI/UX-resursen innan en dedikerad designer anställdes. Formade produktdesignen samtidigt som jag byggde komplexa flöden, återanvändbara komponenter och datadrivna gränssnitt. Bidrog även till backendutveckling med Python och Django REST Framework, API-integrationer, automatiserade tester och CI/CD.",
      },
      digipool: {
        role: "Webbutvecklare och webbdesigner (Konsult, Nolltimmarsavtal)",
        company: "Digipool Group • Helsinki (Distans)",
        description:
          "Utvecklade och designade ett jämförelseverktyg för teleoperatörer där abonnemang och erbjudanden från flera finska operatörer kunde jämföras. Arbetade direkt med kunden under hela projektet för att omvandla krav till fungerande lösningar inom UI/UX och webbutveckling.",
      },
      talkdesk: {
        role: "Frontendwebbutvecklare II",
        company: "Talkdesk • Lisbon (Distans)",
        description:
          "Byggde och underhöll användarnära webbapplikationer och återanvändbara komponenter i Talkdesks Storybook-designsystem i nära samarbete med design- och backendteam. Ledde frontendförbättringar inom resursfiltrering, UI/UX och SEO med fokus på användbarhet, underhållbarhet och prestanda. Bidrog till införandet av bland annat Next.js och Redux Toolkit och drev arbetssätt för ren kod, testning och skalbar frontendutveckling.",
      },
    },
  },
  projects: {
    eyebrow: "Utvalda arbeten",
    title: "Personliga projekt",
    explore: "Utforska projektet",
    previous: "Visa föregående projekt",
    next: "Visa nästa projekt",
    items: {
      interactiveMaps:
        "Interactive Maps är ett skräddarsytt verktyg för att skapa kartor, utvecklat ur mitt intresse för kartor, geografi och geopolitik.",
      euroData:
        "En interaktiv europeisk datautforskare för att jämföra regioner med hjälp av Eurostat-statistik, kartor och nyckelindikatorer.",
      swimCity:
        "En mobilapp för att hitta badplatser i Helsinki med aktuell vattendata, interaktiva kartor, favoriter och information om stränder.",
      localDrop:
        "Ett lokalt fildelningsverktyg byggt med Go och ren JavaScript för snabba överföringar med låg minnesanvändning.",
      apiBatcher:
        "Grupperade GET-anrop med anpassade interceptorer som minskar nätverksanrop och förbättrar laddningsprestandan.",
    },
  },
  contact: {
    eyebrow: "Hör av dig",
    titleLine1: "Letar du efter din",
    titleAccent: "nästa utvecklare?",
    getInTouch: "Kontakta mig",
    resume: "CV",
  },
  footer: {
    tagline: "MIGUEL.DEV — ARKITEKTUR FÖR WEBBEN",
    copyright: "© 2026 Miguel. Byggt med precision i Europa.",
    backToTop: "Till toppen",
  },
} as const satisfies TranslationResource

export default sv
