import { motion } from "motion/react"
import { Mail, Github, Linkedin, FileText } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card relative overflow-hidden rounded-[48px] p-12 text-center md:p-24"
        >
          {/* Internal Glows */}
          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-secondary/10 blur-[100px]" />

          <h2 className="mb-8 font-display text-xs font-bold uppercase tracking-[0.3em] text-on-surface-variant">
            Let's Connect
          </h2>

          <h3 className="mb-12 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Looking for your <br />
            <span className="gradient-text">next engineering hire?</span>
          </h3>

          <div className="mb-16 flex justify-center">
            <a
              href="mailto:miguelduarte.contact@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl bg-primary px-12 py-5 font-display text-xl font-bold text-on-primary shadow-2xl transition-all hover:shadow-primary/40 active:scale-95 cursor-pointer"
            >
              <Mail className="h-6 w-6" /> Get in Touch
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {[
              {
                icon: Github,
                label: "GITHUB",
                href: "https://github.com/miguelduartedev/",
                isExternal: true,
              },
              {
                icon: Linkedin,
                label: "LINKEDIN",
                href: "https://www.linkedin.com/in/luis-miguel-duarte-conceicao/",
                isExternal: true,
              },
              {
                icon: FileText,
                label: "RESUME",
                href: "https://flowcv.com/resume/ufj2gfikvl",
                isExternal: true,
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.isExternal ? "_blank" : undefined}
                rel={social.isExternal ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 font-mono text-sm text-on-surface-variant transition-colors hover:text-primary"
              >
                <social.icon className="h-4 w-4" /> {social.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
