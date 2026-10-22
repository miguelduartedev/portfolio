import { motion } from "motion/react"
import { Layers, Terminal, Brush, Zap } from "lucide-react"
import { useTranslation } from "react-i18next"

const skills = [
  {
    name: "React",
    icon: Layers,
    color: "text-primary",
    descKey: "skills.cards.react",
  },
  {
    name: "TypeScript",
    icon: Terminal,
    color: "text-secondary",
    descKey: "skills.cards.typescript",
  },
  {
    name: "MUI, Tailwind, etc.",
    icon: Brush,
    color: "text-primary",
    descKey: "skills.cards.styling",
  },
  {
    name: "Next.js",
    icon: Zap,
    color: "text-secondary",
    descKey: "skills.cards.nextjs",
  },
]

const timeline = [
  {
    date: "2023 — 2026",
    roleKey: "skills.timeline.savantiq.role",
    companyKey: "skills.timeline.savantiq.company",
    descKey: "skills.timeline.savantiq.description",
    color: "bg-primary shadow-primary/50",
  },
  {
    date: "2023",
    roleKey: "skills.timeline.digipool.role",
    companyKey: "skills.timeline.digipool.company",
    descKey: "skills.timeline.digipool.description",
    color: "bg-secondary shadow-secondary/50",
  },
  {
    date: "2019 — 2023",
    roleKey: "skills.timeline.talkdesk.role",
    companyKey: "skills.timeline.talkdesk.company",
    descKey: "skills.timeline.talkdesk.description",
    color: "bg-outline-variant",
  },
]

export default function Skills() {
  const { t } = useTranslation()

  return (
    <section id="skills" className="py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-20 text-center">
          <h2 className="mb-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            {t("skills.eyebrow")}
          </h2>
          <h3 className="font-display text-3xl font-bold md:text-4xl">
            {t("skills.title")}
          </h3>
        </div>

        {/* Skills Bento Grid */}
        <div className="mb-32 grid grid-cols-2 gap-6 md:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card group rounded-[32px] p-8 transition-all hover:border-primary/40 cursor-pointer"
            >
              <skill.icon
                className={`mb-6 h-10 w-10 ${skill.color} transition-transform group-hover:scale-110`}
              />
              <h4 className="mb-2 font-display text-xl font-bold">
                {skill.name}
              </h4>
              <p className="font-mono text-xs text-on-surface-variant">
                {t(skill.descKey)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mx-auto max-w-4xl space-y-12">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="group relative flex gap-8 md:gap-12"
            >
              <div className="hidden pt-2 text-right md:block md:w-32">
                <span className="font-mono text-sm text-primary">
                  {item.date}
                </span>
              </div>
              <div className="relative">
                <div
                  className={`z-10 h-4 w-4 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-transform group-hover:scale-150 ${item.color}`}
                />
                {index !== timeline.length - 1 && (
                  <div className="absolute left-1/2 top-4 h-[calc(100%+48px)] w-px -translate-x-1/2 bg-outline-variant/30" />
                )}
              </div>
              <div className="flex-1 border-b border-outline-variant/10 pb-12 last:border-0 last:pb-0">
                <h4 className="mb-1 font-display text-xl font-bold">
                  {t(item.roleKey)}
                </h4>
                <p className="mb-4 font-mono text-sm text-on-surface-variant">
                  {t(item.companyKey)}
                </p>
                <p className="text-on-surface-variant">{t(item.descKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
