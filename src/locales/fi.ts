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
    eyebrow: "Frontend-/full stack -kehittäjä",
    titleLine1: "Rakennan digitaalisia",
    titleAccent: "kokemuksia",
    titleConnector: "teknisellä",
    titleLine3: "tarkkuudella.",
    intro:
      "Hei! Olen Miguel, kehittäjä, joka rakentaa suorituskykyisiä, saavutettavia ja visuaalisesti näyttäviä verkkosovelluksia eurooppalaisessa teknologiakentässä.",
    readBio: "Lue tarinani",
    skillsCta: "Kokemus ja osaaminen",
    illustrationAlt: "Frontend-kehitystä kuvaava kuvitus",
  },
  about: {
    imageAlt: "Miguelin muotokuva",
    yearsExperience: "Vuotta kokemusta",
    eyebrow: "Tarina",
    title: "Etelästä Pohjoismaihin",
    paragraph1:
      "Synnyin ja kasvoin Lisbonissa, Portugalissa, ja olin se teknologiasta innostunut lapsi, joka osasi auttaa tietokoneiden kanssa. Korjasin sukulaisten ja ystävien tietokoneita, tein GIF-kuvia ja teemoja Tumblriin sekä pikselitaidetta Habbo Hotelin kilpailuihin.",
    paragraph2:
      "Olen myös aina ollut hyvin utelias (ja olen edelleen!). Kun pääsin internetiin, käytin paljon aikaa eri maihin tutustumiseen. Erityisesti Pohjoismaat kiehtoivat minua. Löysin kuvia Lofotenista kymmenvuotiaana ja seisoin siellä itse vuosia myöhemmin — tiesin aina haluavani muuttaa pohjoiseen. 😄",
    paragraph3:
      "Työn ulkopuolella kiinnostuksenkohteitani ovat matkustaminen (noin 30 maata tähän mennessä), vaellus, valokuvaus (vaikka en missään nimessä ole asiantuntija), kuvien ja videoiden editointi, maantiede ja kartat, elokuvissa käyminen, sarjat ja anime, videopelit sekä politiikan ja talouden seuraaminen.",
    locationLabel: "Sijainti",
    locationValue: "Helsinki, FI (Valmis muuttamaan)",
    educationLabel: "Koulutus",
    educationValue:
      "Tietotekniikan kandidaatin tutkinto, University of Lisbon",
  },
  skills: {
    eyebrow: "Teknologiat ja kokemus",
    title: "Tekninen perusta",
    cards: {
      react: "Vahva osaaminen Hookseista, Contextista ja muusta.",
      typescript: "Tiukka tyypitys kestävien koodipohjien tueksi.",
      styling: "Moderni frontend-tyylittely ja UI-järjestelmät.",
      nextjs: "Optimoitu SSR ja staattinen generointi.",
    },
    timeline: {
      savantiq: {
        role: "Frontend-/full stack -kehittäjä",
        company: "Savantiq • Helsinki (Hybridi)",
        description:
          "Liityin yrityksen neljänneksi työntekijäksi ja otin vastuulleni Reactilla, TypeScriptillä ja Next.js:llä rakennetun varhaisen vaiheen B2B-tuotteen frontend-kehityksen. Työskentelin laaja-alaisesti tuote- ja kehitystehtävissä sekä vastasin pääosin UI/UX-työstä ennen oman suunnittelijan palkkaamista. Muotoilin tuoteratkaisuja ja rakensin monimutkaisia työnkulkuja, uudelleenkäytettäviä komponentteja ja datalähtöisiä käyttöliittymiä. Osallistuin myös backend-kehitykseen Pythonilla ja Django REST Frameworkilla sekä API-integraatioihin, automaattiseen testaukseen ja CI/CD-työhön.",
      },
      digipool: {
        role: "Web-kehittäjä ja web-suunnittelija (Konsultti, Nollatuntisopimus)",
        company: "Digipool Group • Helsinki (Etätyö)",
        description:
          "Kehitin ja suunnittelin teleoperaattoreiden vertailutyökalun, jolla voi vertailla useiden suomalaisten operaattoreiden liittymiä ja tarjouksia. Työskentelin koko projektin ajan suoraan asiakkaan kanssa ja muutin vaatimukset toimiviksi UI/UX- ja web-kehitysratkaisuiksi.",
      },
      talkdesk: {
        role: "Frontend-web-kehittäjä II",
        company: "Talkdesk • Lisbon (Etätyö)",
        description:
          "Rakensin ja ylläpidin käyttäjille suunnattuja verkkosovelluksia ja uudelleenkäytettäviä komponentteja Talkdeskin Storybook-designjärjestelmässä tiiviissä yhteistyössä suunnittelu- ja backend-tiimien kanssa. Johdin frontend-parannuksia resurssien suodatuksessa, UI/UX:ssa ja SEO:ssa painottaen käytettävyyttä, ylläpidettävyyttä ja suorituskykyä. Edistin myös Next.js:n ja Redux Toolkitin kaltaisten teknologioiden käyttöönottoa sekä puhdasta koodia, testausta ja skaalautuvia frontend-käytäntöjä.",
      },
    },
  },
  projects: {
    eyebrow: "Valikoidut työt",
    title: "Omat projektit",
    explore: "Tutustu projektiin",
    previous: "Näytä edelliset projektit",
    next: "Näytä seuraavat projektit",
    items: {
      interactiveMaps:
        "Interactive Maps on räätälöity karttojen luontityökalu, jonka rakensin kiinnostuksesta karttoihin, maantieteeseen ja geopolitiikkaan.",
      euroData:
        "Interaktiivinen eurooppalainen datatyökalu alueiden vertailuun Eurostat-tilastojen, karttojen ja keskeisten indikaattorien avulla.",
      swimCity:
        "Mobiilisovellus Helsingin uimapaikkojen löytämiseen. Se tarjoaa ajantasaiset vesitiedot, interaktiiviset kartat, suosikit ja rantojen tiedot.",
      localDrop:
        "Go:lla ja puhtaalla JavaScriptillä rakennettu paikallinen tiedostonjakotyökalu nopeisiin ja muistitehokkaisiin siirtoihin.",
      apiBatcher:
        "Ryhmitellyt GET-pyynnöt ja mukautetut interceptorit vähentävät verkkokutsuja ja parantavat latauskykyä.",
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
    tagline: "MIGUEL.DEV — VERKON ARKKITEHTUURIA",
    copyright: "© 2026 Miguel. Rakennettu tarkasti Euroopassa.",
    backToTop: "Takaisin alkuun",
  },
} as const satisfies TranslationResource

export default fi
