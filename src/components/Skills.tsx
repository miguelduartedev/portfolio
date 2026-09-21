import { motion } from "motion/react"
import { Layers, Terminal, Brush, Zap } from "lucide-react"

const skills = [
  {
    name: "React",
    icon: Layers,
    color: "text-primary",
    desc: "Expertise in Hooks, Context, etc.",
  },
  {
    name: "TypeScript",
    icon: Terminal,
    color: "text-secondary",
    desc: "Strict typing for bulletproof codebases.",
  },
  {
    name: "MUI, Tailwind, etc.",
    icon: Brush,
    color: "text-primary",
    desc: "Modern frontend styling and UI systems.",
  },
  {
    name: "Next.js",
    icon: Zap,
    color: "text-secondary",
    desc: "Optimized SSR & Static Generation.",
  },
]

const timeline = [
  {
    date: "2023 — 2026",
    role: "Frontend / Full Stack Developer",
    company: "Savantiq • Helsinki (Hybrid)",
    desc: "Joined as the fourth employee and took ownership of frontend development for an early-stage B2B product built with React, TypeScript and Next.js, while working as a generalist across product and engineering. Acted as the primary UI/UX contributor before a dedicated designer was hired, shaping product designs alongside building complex workflows, reusable components and data-driven interfaces, while also contributing to backend development with Python and Django REST Framework, API integrations, automated testing and CI/CD.",
    color: "bg-primary shadow-primary/50",
  },
  {
    date: "2023",
    role: "Web Developer & Web Designer (Consultant, Zero-Hour-Contract)",
    company: "Digipool Group • Helsinki (Remote)",
    desc: "Developed and designed a telecommunications provider comparison tool for comparing plans and offerings across multiple Finnish telecom providers, working directly with the client to translate requirements into functional UI/UX and web development solutions throughout the project.",
    color: "bg-secondary shadow-secondary/50",
  },
  {
    date: "2019 — 2023",
    role: "Frontend Web Developer II",
    company: "Talkdesk • Lisbon (Remote)",
    desc: "Built and maintained user-facing web applications and reusable components within Talkdesk’s Storybook design system, collaborating closely with design and backend teams. Led frontend improvements across resource filtering, UI/UX and SEO, with a focus on usability, maintainability and performance, while contributing to the adoption of technologies including Next.js and Redux Toolkit and promoting clean code, testing and scalable frontend practices.",
    color: "bg-outline-variant",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-20 text-center">
          <h2 className="mb-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            Stack & Story
          </h2>
          <h3 className="font-display text-3xl font-bold md:text-4xl">
            Technical Foundations
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
                {skill.desc}
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
                  {item.role}
                </h4>
                <p className="mb-4 font-mono text-sm text-on-surface-variant">
                  {item.company}
                </p>
                <p className="text-on-surface-variant">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
