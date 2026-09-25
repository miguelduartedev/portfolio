import { motion } from "motion/react"
import { useTranslation } from "react-i18next"

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="welcome"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Background Decorative Glows */}
      <div className="absolute -right-20 top-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-[120px]" />
      <div className="absolute -left-20 bottom-1/4 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center px-6 md:grid-cols-12 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:col-span-7"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-outline-variant/30 bg-surface-container-highest px-3 py-1">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
              {t("hero.eyebrow")}
            </span>
          </div>

          <h1 className="mb-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
            {t("hero.titleLine1")} <br />
            <span className="gradient-text">{t("hero.titleAccent")}</span>{" "}
            {t("hero.titleConnector")} <br />
            {t("hero.titleLine3")}
          </h1>

          <p className="mb-10 max-w-xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
            {t("hero.intro")}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#about"
              className="rounded-xl bg-primary px-8 py-4 font-display text-lg font-semibold text-on-primary shadow-lg transition-all hover:shadow-primary/30 active:scale-95 cursor-pointer"
            >
              {t("hero.readBio")}
            </a>
            <a
              href="#skills"
              className="rounded-xl border border-outline-variant px-8 py-4 font-display text-lg font-semibold text-on-surface transition-all hover:bg-white/5 active:scale-95 cursor-pointer"
            >
              {t("hero.skillsCta")}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 hidden md:col-span-5 md:block"
        >
          <img
            src={`/illustration.svg`}
            alt={t("hero.illustrationAlt")}
            className="h-full w-full object-contain transition-all duration-500 scale-115 hover:scale-120"
          />
        </motion.div>
      </div>
    </section>
  )
}
