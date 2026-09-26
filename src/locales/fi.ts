import type { TranslationResource } from "./en"

const fi = {
  nav: {
    welcome: "Etusivu",
    about: "Minusta",
    skills: "Osaaminen",
    projects: "Projektit",
    getInTouch: "Ota yhteyttä",
    openMenu: "Avaa navigointivalikko",
    closeMenu: "Sulje navigointivalikko",
  },
  language: {
    selectorLabel: "Valitse kieli",
  },
  hero: {
    eyebrow: "Frontend- ja full stack -kehittäjä",
    titleLine1: "Rakennan digitaalisia",
    titleAccent: "kokemuksia",
    titleConnector: "teknisellä",
    titleLine3: "tarkkuudella.",
    intro:
      "Hei! Olen Miguel. Rakennan suorituskykyisiä, saavutettavia ja visuaalisesti vaikuttavia verkkosovelluksia eurooppalaisella teknologiakentällä.",
    readBio: "Tutustu tarinaani",
    skillsCta: "Kokemus ja osaaminen",
    illustrationAlt: "Frontend-kehitystä kuvaava kuvitus",
  },
  about: {
    imageAlt: "Miguelin muotokuva",
    yearsExperience: "Vuotta kokemusta",
    eyebrow: "Tarina",
    title: "Etelä-Euroopasta Pohjolaan",
    paragraph1:
      "Synnyin ja kasvoin Lissabonissa, Portugalissa, ja olin se teknologiasta innostunut lapsi, joka pärjäsi tietokoneiden kanssa. Korjasin sukulaisten ja kavereiden tietokoneita, tein GIF-animaatioita ja Tumblr-pohjia sekä pikselitaidetta Habbo Hotelin kilpailuihin.",
    paragraph2:
      "Olen myös aina ollut hyvin utelias (ja olen edelleen!). Kun sain internetyhteyden, käytin paljon aikaa eri maihin tutustumiseen. Erityisesti Pohjoismaat kiehtoivat minua. Näin kuvia Lofooteista jo kymmenvuotiaana ja seisoin siellä itse vuosia myöhemmin — tiesin aina haluavani muuttaa pohjoiseen. 😄",
    paragraph3:
      "Vapaa-ajallani matkustan (noin 30 maata tähän mennessä), vaellan, valokuvaan (vaikka en olekaan asiantuntija), editoin kuvia ja videoita, tutkin maantiedettä ja karttoja, käyn elokuvissa, katson sarjoja ja animea, pelaan videopelejä sekä seuraan politiikkaa ja taloutta.",
    locationLabel: "Sijainti",
    locationValue: "Helsinki, Suomi (valmis muuttamaan)",
    educationLabel: "Koulutus",
    educationValue:
      "Tietotekniikan kandidaatin tutkinto, University of Lisbon",
  },
  skills: {
    eyebrow: "Teknologiat ja kokemus",
    title: "Tekninen osaaminen",
    cards: {
      react: "Vahva Hooks-, Context- ja muu React-osaaminen.",
      typescript: "Tiukka tyypitys luotettavien koodipohjien perustana.",
      styling: "Modernit frontend-tyylit ja UI-järjestelmät.",
      nextjs: "Optimoitu SSR ja staattinen generointi.",
    },
    timeline: {
      savantiq: {
        role: "Frontend- ja full stack -kehittäjä",
        company: "Savantiq • Helsinki (hybridi)",
        description:
          "Liityin yrityksen neljänneksi työntekijäksi ja otin vastuun Reactilla, TypeScriptillä ja Next.js:llä rakennetun varhaisen vaiheen B2B-tuotteen frontend-kehityksestä. Työskentelin monipuolisesti tuote- ja ohjelmistokehityksen parissa ja vastasin pääosin UI/UX:stä ennen oman suunnittelijan palkkaamista. Suunnittelin tuotetta ja rakensin monimutkaisia työnkulkuja, uudelleenkäytettäviä komponentteja ja datalähtöisiä käyttöliittymiä. Osallistuin myös backend-kehitykseen Pythonilla ja Django REST Frameworkilla sekä API-integraatioihin, automaattiseen testaukseen ja CI/CD-työhön.",
      },
      digipool: {
        role: "Web-kehittäjä ja -suunnittelija (konsultti, nollatuntisopimus)",
        company: "Digipool Group • Helsinki (etätyö)",
        description:
          "Kehitin ja suunnittelin teleoperaattoreiden vertailutyökalun, jonka avulla pystyi vertailemaan useiden suomalaisten operaattoreiden liittymiä ja tarjouksia. Työskentelin koko projektin ajan suoraan asiakkaan kanssa ja jalostin vaatimukset toimiviksi UI/UX- ja web-kehitysratkaisuiksi.",
      },
      talkdesk: {
        role: "Frontend-kehittäjä II",
        company: "Talkdesk • Lissabon (etätyö)",
        description:
          "Rakensin ja ylläpidin käyttäjille suunnattuja verkkosovelluksia ja uudelleenkäytettäviä komponentteja Talkdeskin Storybook-pohjaisessa designjärjestelmässä tiiviissä yhteistyössä suunnittelu- ja backend-tiimien kanssa. Johdin frontend-parannuksia resurssien suodatuksessa, UI/UX:ssa ja SEO:ssa painottaen käytettävyyttä, ylläpidettävyyttä ja suorituskykyä. Edistin myös Next.js:n ja Redux Toolkitin kaltaisten teknologioiden käyttöönottoa sekä puhdasta koodia, testausta ja skaalautuvia frontend-käytäntöjä.",
      },
    },
  },
  projects: {
    eyebrow: "Valikoituja töitä",
    title: "Omat projektit",
    explore: "Tutustu projektiin",
    previous: "Näytä edelliset projektit",
    next: "Näytä seuraavat projektit",
    items: {
      interactiveMaps:
        "Interactive Maps on räätälöity karttatyökalu, jonka rakensin kiinnostuksesta karttoihin, maantieteeseen ja geopolitiikkaan.",
      euroData:
        "Interaktiivinen työkalu Euroopan alueiden vertailuun Eurostat-tilastojen, karttojen ja keskeisten indikaattorien avulla.",
      swimCity:
        "Mobiilisovellus Helsingin uimapaikkojen löytämiseen. Se tarjoaa ajantasaiset vesitiedot, interaktiiviset kartat, suosikit ja rantojen tiedot.",
      localDrop:
        "Go:lla ja vanilla JavaScriptillä rakennettu paikallinen tiedostonjakotyökalu nopeisiin ja muistitehokkaisiin siirtoihin.",
      apiBatcher:
        "Ryhmitellyt GET-pyynnöt ja mukautetut interceptorit vähentävät verkkokutsuja ja parantavat latausnopeutta.",
    },
  },
  contact: {
    eyebrow: "Otetaan yhteyttä",
    titleLine1: "Etsitkö seuraavaa",
    titleAccent: "osaajaa kehitystiimiisi?",
    getInTouch: "Ota yhteyttä",
    resume: "Ansioluettelo",
  },
  footer: {
    tagline: "MIGUEL.DEV — VERKON RAKENTAJA",
    copyright: "© 2026 Miguel. Rakennettu huolella Euroopassa.",
    backToTop: "Takaisin alkuun",
  },
} as const satisfies TranslationResource

export default fi
