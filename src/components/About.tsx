import { motion } from "motion/react"
import { useTranslation } from "react-i18next"

const EXPERIENCE_START_DATE = new Date(2019, 9, 21)

function getCompletedYearsSince(
  startDate: Date,
  currentDate: Date = new Date(),
): number {
  let years = currentDate.getFullYear() - startDate.getFullYear()
  const hasNotReachedAnniversary =
    currentDate.getMonth() < startDate.getMonth() ||
    (currentDate.getMonth() === startDate.getMonth() &&
      currentDate.getDate() < startDate.getDate())

  if (hasNotReachedAnniversary) {
    years -= 1
  }

  return Math.max(0, years)
}

function formatExperienceYears(years: number): string {
  const label = years < 10 ? `0${years}` : `${years}`
  return `${label}+`
}

export default function About() {
  const { t } = useTranslation()
  const experienceYearsLabel = formatExperienceYears(
    getCompletedYearsSince(EXPERIENCE_START_DATE),
  )

  return (
    <section id="about" className="bg-surface-container-low py-24 md:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 md:grid-cols-2 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -left-10 -top-10 h-40 w-40 border-l-2 border-t-2 border-primary/20" />
          <img
            src={`/me.webp`}
            alt={t("about.imageAlt")}
            className="relative z-10 aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl"
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-card absolute -bottom-6 -right-6 z-20 rounded-2xl p-6 px-8 shadow-xl"
          >
            <p className="gradient-text font-display text-3xl font-bold">
              {experienceYearsLabel}
            </p>
            <p className="font-display text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              {t("about.yearsExperience")}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
            {t("about.eyebrow")}
          </h2>
          <h3 className="mb-8 font-display text-3xl font-bold leading-tight md:text-4xl">
            {t("about.title")}
          </h3>

          <div className="space-y-6 text-lg leading-relaxed text-on-surface-variant">
            <p>{t("about.paragraph1")}</p>
            <p>{t("about.paragraph2")}</p>
            <p>{t("about.paragraph3")}</p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-outline-variant/30 pt-8">
            <div>
              <h4 className="mb-2 font-display text-[10px] font-bold uppercase tracking-widest text-on-surface">
                {t("about.locationLabel")}
              </h4>
              <p className="font-mono text-primary">{t("about.locationValue")}</p>
            </div>
            <div>
              <h4 className="mb-2 font-display text-[10px] font-bold uppercase tracking-widest text-on-surface">
                {t("about.educationLabel")}
              </h4>
              <p className="font-mono text-primary">{t("about.educationValue")}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
