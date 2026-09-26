import { motion } from "motion/react"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import LanguageSelector from "./LanguageSelector"

const navLinks = [
  { labelKey: "nav.welcome", href: "#welcome" },
  { labelKey: "nav.about", href: "#about" },
  { labelKey: "nav.skills", href: "#skills" },
  { labelKey: "nav.projects", href: "#projects" },
]

export default function Navbar() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-surface/70 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <div className="font-display text-2xl font-bold tracking-tighter text-primary">
          Miguel.dev
        </div>

        {/* Desktop Nav */}
        <div className="hidden space-x-6 lg:flex xl:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.labelKey}
              href={link.href}
              className="font-mono text-sm font-medium text-on-surface-variant transition-colors hover:text-on-surface"
            >
              {t(link.labelKey)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <a
            href="mailto:miguelduarte.contact@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-primary px-6 py-2 font-display text-xs font-bold uppercase tracking-widest text-on-primary transition-all hover:bg-primary-container active:scale-95 lg:block"
          >
            {t("nav.getInTouch")}
          </a>

          <LanguageSelector />

          {/* Mobile Toggle */}
          <button
            type="button"
            aria-label={t(isOpen ? "nav.closeMenu" : "nav.openMenu")}
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            className="cursor-pointer text-on-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          id="mobile-navigation"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-0 top-full w-full border-b border-white/5 bg-surface p-6 lg:hidden"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.labelKey}
                href={link.href}
                className="rounded-lg font-mono text-lg text-on-surface-variant hover:text-on-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                onClick={() => setIsOpen(false)}
              >
                {t(link.labelKey)}
              </a>
            ))}
            <a
              href="mailto:miguelduarte.contact@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-primary py-4 text-center font-display font-bold text-on-primary"
              onClick={() => setIsOpen(false)}
            >
              {t("nav.getInTouch")}
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
