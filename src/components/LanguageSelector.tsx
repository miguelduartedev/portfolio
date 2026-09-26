import { motion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import type { LanguageCode } from "../i18n"

const languages: ReadonlyArray<{
  code: LanguageCode
  flag: string
  label: string
}> = [
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "pt", flag: "🇵🇹", label: "Português" },
  { code: "sv", flag: "🇸🇪", label: "Svenska" },
  { code: "nb", flag: "🇳🇴", label: "Norsk" },
  { code: "fi", flag: "🇫🇮", label: "Suomi" },
]

export default function LanguageSelector() {
  const { i18n, t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([])
  const resolvedLanguage = i18n.resolvedLanguage?.split("-")[0]
  const selectedIndex = Math.max(
    0,
    languages.findIndex((language) => language.code === resolvedLanguage),
  )
  const selectedLanguage = languages[selectedIndex]

  useEffect(() => {
    if (!isOpen) {
      return
    }

    optionRefs.current[selectedIndex]?.focus()

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener("pointerdown", handlePointerDown)
    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, selectedIndex])

  const closeMenu = () => {
    setIsOpen(false)
    triggerRef.current?.focus()
  }

  const selectLanguage = (language: LanguageCode) => {
    void i18n.changeLanguage(language)
    closeMenu()
  }

  const handleMenuKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const focusedIndex = optionRefs.current.findIndex(
      (option) => option === document.activeElement,
    )

    let nextIndex = focusedIndex

    if (event.key === "ArrowDown") {
      nextIndex = (focusedIndex + 1) % languages.length
    } else if (event.key === "ArrowUp") {
      nextIndex = (focusedIndex - 1 + languages.length) % languages.length
    } else if (event.key === "Home") {
      nextIndex = 0
    } else if (event.key === "End") {
      nextIndex = languages.length - 1
    } else {
      return
    }

    event.preventDefault()
    optionRefs.current[nextIndex]?.focus()
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsOpen(false)
        }
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls="language-menu"
        aria-label={`${t("language.selectorLabel")}: ${selectedLanguage.label}`}
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-outline-variant/60 bg-surface-container/60 text-xl transition-all hover:border-primary hover:bg-surface-container-high focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        onClick={() => setIsOpen((open) => !open)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault()
            setIsOpen(true)
          }
        }}
      >
        <span aria-hidden="true">{selectedLanguage.flag}</span>
      </button>

      {isOpen && (
        <motion.div
          id="language-menu"
          role="menu"
          aria-label={t("language.selectorLabel")}
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.15 }}
          className="absolute right-0 top-full z-60 mt-2 min-w-44 overflow-hidden rounded-2xl border border-white/10 bg-surface-container-high p-2 shadow-2xl backdrop-blur-xl"
          onKeyDown={handleMenuKeyDown}
        >
          {languages.map((language, index) => {
            const isSelected = language.code === selectedLanguage.code

            return (
              <button
                key={language.code}
                ref={(option) => {
                  optionRefs.current[index] = option
                }}
                type="button"
                role="menuitemradio"
                aria-checked={isSelected}
                tabIndex={-1}
                className={`flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-left font-mono text-sm transition-colors focus-visible:outline-2 focus-visible:outline-primary ${
                  isSelected
                    ? "bg-primary/15 text-primary"
                    : "text-on-surface-variant hover:bg-white/5 hover:text-on-surface"
                }`}
                onClick={() => selectLanguage(language.code)}
              >
                <span aria-hidden="true" className="text-lg">
                  {language.flag}
                </span>
                <span>{language.label}</span>
              </button>
            )
          })}
        </motion.div>
      )}
    </div>
  )
}
