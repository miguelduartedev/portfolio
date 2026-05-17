import { motion } from "motion/react"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navLinks = [
  { name: "Welcome", href: "#welcome" },
  { name: "About Me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-surface/70 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <div className="font-display text-2xl font-bold tracking-tighter text-primary">
          Miguel.dev
        </div>

        {/* Desktop Nav */}
        <div className="hidden space-x-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-sm font-medium text-on-surface-variant transition-colors hover:text-on-surface"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:miguelduarte.contact@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-primary px-6 py-2 font-display text-xs font-bold uppercase tracking-widest text-on-primary transition-all hover:bg-primary-container active:scale-95 md:block"
          >
            Get in Touch
          </a>

          {/* Mobile Toggle */}
          <button
            className="text-on-surface md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-0 top-full w-full border-b border-white/5 bg-surface p-6 md:hidden"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-lg text-on-surface-variant hover:text-on-surface"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="mailto:miguelduarte.contact@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-primary py-4 text-center font-display font-bold text-on-primary"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
