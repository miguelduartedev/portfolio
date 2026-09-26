import type { TranslationResource } from "./en"

const nb = {
  nav: {
    welcome: "Hjem",
    about: "Om meg",
    skills: "Kompetanse",
    projects: "Prosjekter",
    getInTouch: "Ta kontakt",
    openMenu: "Åpne navigasjonsmenyen",
    closeMenu: "Lukk navigasjonsmenyen",
  },
  language: {
    selectorLabel: "Velg språk",
  },
  hero: {
    eyebrow: "Frontend- og fullstackutvikler",
    titleLine1: "Skaper digitale",
    titleAccent: "opplevelser",
    titleConnector: "med",
    titleLine3: "teknisk presisjon.",
    intro:
      "Hei! Jeg heter Miguel og er utvikler. Jeg bygger raske, tilgjengelige og visuelt gjennomførte webapplikasjoner i det europeiske teknologimiljøet.",
    readBio: "Les mer om meg",
    skillsCta: "Erfaring og kompetanse",
    illustrationAlt: "Illustrasjon av frontendutvikling",
  },
  about: {
    imageAlt: "Portrett av Miguel",
    yearsExperience: "Års erfaring",
    eyebrow: "Historien",
    title: "Fra Sør-Europa til Norden",
    paragraph1:
      "Jeg er født og oppvokst i Lisboa, Portugal, og var den teknologinteresserte ungen som alltid hadde teken på datamaskiner. Jeg fikset datamaskiner for familie og venner, lagde GIF-er og maler til Tumblr og pikselgrafikk til konkurranser i Habbo Hotel.",
    paragraph2:
      "Jeg har også alltid vært veldig nysgjerrig (og er det fortsatt!). Da jeg fikk tilgang til internett, brukte jeg mye tid på å lære om ulike land. Norden fascinerte meg spesielt. Fra jeg oppdaget bilder av Lofoten som tiåring til jeg sto der selv mange år senere, har jeg alltid visst at jeg ville flytte nordover. 😄",
    paragraph3:
      "På fritiden liker jeg å reise (rundt 30 land så langt), gå tur, fotografere (selv om jeg langt fra er ekspert), redigere bilder og video, utforske geografi og kart, gå på kino, se serier og anime, spille videospill og lese om politikk og økonomi.",
    locationLabel: "Sted",
    locationValue: "Helsinki, Finland (åpen for å flytte)",
    educationLabel: "Utdanning",
    educationValue:
      "Bachelorgrad i informasjonsteknologi, University of Lisbon",
  },
  skills: {
    eyebrow: "Teknologi og erfaring",
    title: "Teknisk kompetanse",
    cards: {
      react: "Solid erfaring med Hooks, Context og mer.",
      typescript: "Streng typing for robuste kodebaser.",
      styling: "Moderne frontend-styling og UI-systemer.",
      nextjs: "Optimalisert SSR og statisk generering.",
    },
    timeline: {
      savantiq: {
        role: "Frontend- og fullstackutvikler",
        company: "Savantiq • Helsinki (hybrid)",
        description:
          "Jeg begynte som selskapets fjerde medarbeider og tok ansvar for frontendutviklingen av et B2B-produkt i en tidlig fase, bygget med React, TypeScript og Next.js. Jeg jobbet bredt med både produkt og utvikling og hadde hovedansvaret for UI/UX før en egen designer ble ansatt. Jeg formet produktdesignet og bygget komplekse arbeidsflyter, gjenbrukbare komponenter og datadrevne grensesnitt. Jeg bidro også til backendutvikling med Python og Django REST Framework, API-integrasjoner, automatiserte tester og CI/CD.",
      },
      digipool: {
        role: "Webutvikler og webdesigner (konsulent, nulltimerskontrakt)",
        company: "Digipool Group • Helsinki (fjernarbeid)",
        description:
          "Jeg utviklet og utformet et sammenligningsverktøy for teleoperatører, der abonnementer og tilbud fra flere finske operatører kunne sammenlignes. Gjennom hele prosjektet jobbet jeg direkte med kunden for å omsette krav til funksjonelle løsninger innen UI/UX og webutvikling.",
      },
      talkdesk: {
        role: "Frontendutvikler II",
        company: "Talkdesk • Lisboa (fjernarbeid)",
        description:
          "Jeg bygget og vedlikeholdt brukerrettede webapplikasjoner og gjenbrukbare komponenter i Talkdesks Storybook-baserte designsystem, i tett samarbeid med design- og backendteam. Jeg ledet frontendforbedringer innen ressursfiltrering, UI/UX og SEO med vekt på brukervennlighet, vedlikeholdbarhet og ytelse. Jeg bidro også til innføringen av blant annet Next.js og Redux Toolkit og fremmet ren kode, testing og skalerbare metoder for frontendutvikling.",
      },
    },
  },
  projects: {
    eyebrow: "Utvalgte prosjekter",
    title: "Egne prosjekter",
    explore: "Utforsk prosjektet",
    previous: "Vis forrige prosjekt",
    next: "Vis neste prosjekt",
    items: {
      interactiveMaps:
        "Interactive Maps er et skreddersydd kartverktøy jeg bygget ut fra interessen min for kart, geografi og geopolitikk.",
      euroData:
        "En interaktiv tjeneste for å utforske europeiske data og sammenligne regioner ved hjelp av Eurostat-statistikk, kart og nøkkelindikatorer.",
      swimCity:
        "En mobilapp for å finne badeplasser i Helsinki, med oppdaterte data om vannforhold, interaktive kart, favoritter og informasjon om strendene.",
      localDrop:
        "Et lokalt fildelingsverktøy bygget med Go og vanilla JavaScript for raske overføringer med lavt minneforbruk.",
      apiBatcher:
        "Grupperer GET-forespørsler med tilpassede interceptorer for å redusere nettverkskall og forbedre lastetiden.",
    },
  },
  contact: {
    eyebrow: "Ta kontakt",
    titleLine1: "Leter du etter teamets",
    titleAccent: "neste utvikler?",
    getInTouch: "Ta kontakt",
    resume: "CV",
  },
  footer: {
    tagline: "MIGUEL.DEV — BYGGER FOR NETTET",
    copyright: "© 2026 Miguel. Bygget med presisjon i Europa.",
    backToTop: "Til toppen",
  },
} as const satisfies TranslationResource

export default nb
