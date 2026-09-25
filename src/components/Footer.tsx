import { useTranslation } from "react-i18next"

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="w-full border-t border-outline-variant/30 bg-surface-container-lowest py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row md:px-12">
        <div className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface">
          {t("footer.tagline")}
        </div>

        <div className="text-center font-sans text-sm text-secondary">
          {t("footer.copyright")}
        </div>

        <div className="flex gap-8 font-mono text-[10px] font-bold uppercase">
          <a
            href="#welcome"
            className="text-on-surface-variant transition-colors hover:text-primary"
          >
            {t("footer.backToTop")}
          </a>
        </div>
      </div>
    </footer>
  )
}
