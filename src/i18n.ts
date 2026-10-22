import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import en from "./locales/en"
import fi from "./locales/fi"
import nb from "./locales/nb"
import pt from "./locales/pt"
import sv from "./locales/sv"

export const supportedLanguages = ["en", "pt", "sv", "nb", "fi"] as const

export type LanguageCode = (typeof supportedLanguages)[number]

const LANGUAGE_STORAGE_KEY = "portfolio-language"

function isSupportedLanguage(language: string | null): language is LanguageCode {
  return supportedLanguages.includes(language as LanguageCode)
}

function getInitialLanguage(): LanguageCode {
  try {
    const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
    return isSupportedLanguage(savedLanguage) ? savedLanguage : "en"
  } catch {
    return "en"
  }
}

function persistLanguage(language: string) {
  const normalizedLanguage = language.split("-")[0]

  if (!isSupportedLanguage(normalizedLanguage)) {
    return
  }

  document.documentElement.lang = normalizedLanguage

  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, normalizedLanguage)
  } catch {
    // The language still changes when storage is unavailable.
  }
}

const initialLanguage = getInitialLanguage()

document.documentElement.lang = initialLanguage

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    pt: { translation: pt },
    sv: { translation: sv },
    nb: { translation: nb },
    fi: { translation: fi },
  },
  lng: initialLanguage,
  fallbackLng: "en",
  supportedLngs: [...supportedLanguages],
  load: "languageOnly",
  interpolation: {
    escapeValue: false,
  },
})

i18n.on("languageChanged", persistLanguage)

export default i18n
