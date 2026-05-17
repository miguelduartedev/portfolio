export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/30 bg-surface-container-lowest py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row md:px-12">
        <div className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface">
          MIGUEL.DEV — ARCHITECTING THE WEB
        </div>

        <div className="text-center font-sans text-sm text-secondary">
          © 2026 Miguel. Built with precision in Europe.
        </div>

        <div className="flex gap-8 font-mono text-[10px] font-bold uppercase">
          <a
            href="#welcome"
            className="text-on-surface-variant transition-colors hover:text-primary"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
