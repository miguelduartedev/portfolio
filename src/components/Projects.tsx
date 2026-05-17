import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Interactive Maps",
    tags: ["React", "Next.JS", "Redux TK"],
    desc: "Interactive Maps is a custom map making tool that I've worked on out of passion for Maps, Geography and Geopolitics.",
    image: "/portfolio/interactivemaps.png",
    href: "https://interactive-maps.vercel.app/",
    color: "hover:border-primary/20 hover:text-primary",
  },
  {
    title: "Photographer porfolio",
    tags: ["JavaScript", "HTML", "CSS"],
    desc: "Portfolio website for a designer and photographer based in Lisbon (no longer currently active).",
    image: "/portfolio/ricardosousa.png",
    href: "",
    color: "hover:border-secondary/20 hover:text-secondary",
  },
  {
    title: "API Request Batcher",
    tags: ["TypeScript", "Axios", "Jest"],
    desc: "Batched GET requests with custom interceptors to reduce network calls and improve load performance.",
    image: "/portfolio/placeholder.jpg",
    href: "https://github.com/miguelduartedev/api-request-batching",
    color: "hover:border-primary/20 hover:text-primary",
  },
  {
    title: "Task Manager API",
    tags: ["Node.js", "Express.js", "MongoDB"],
    desc: "Task API with secure auth, CRUD, avatar uploads, and query-based sorting and pagination.",
    image: "/portfolio/placeholder.jpg",
    href: "https://github.com/miguelduartedev/Task-Manager-API",
    color: "hover:border-secondary/20 hover:text-secondary",
  },
]

type Project = (typeof projects)[number]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardClassName = `group relative block h-full overflow-hidden rounded-[32px] border border-white/5 bg-surface-container-highest transition-all duration-500 hover:-translate-y-2 ${project.color}`
  const hasHref = project.href.trim().length > 0

  const cardContent = (
    <>
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-8">
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-outline-variant bg-surface-variant/50 px-3 py-1 font-mono text-[10px] text-on-surface-variant"
            >
              {tag}
            </span>
          ))}
        </div>
        <h4 className="mb-3 font-display text-2xl font-bold transition-colors">
          {project.title}
        </h4>
        <p className="mb-6 line-clamp-2 text-on-surface-variant">
          {project.desc}
        </p>
        {hasHref && (
          <div className="inline-flex items-center gap-2 font-mono text-sm transition-all group-hover:opacity-80">
            EXPLORE PROJECT{" "}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        )}
      </div>
    </>
  )

  if (!hasHref) {
    return <article className={cardClassName}>{cardContent}</article>
  }

  return (
    <a
      href={project.href}
      target={project.href.startsWith("http") ? "_blank" : undefined}
      rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={cardClassName}
    >
      {cardContent}
    </a>
  )
}

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  })

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  return (
    <section
      id="projects"
      className="bg-surface-container-low/50 py-24 md:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div className="w-full">
            <h2 className="mb-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Selected Work
            </h2>
            <h3 className="max-w-md font-display text-3xl font-bold md:text-4xl">
              Personal projects
            </h3>
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              aria-label="Show previous projects"
              onClick={scrollPrev}
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-outline-variant text-on-surface-variant transition-all hover:border-primary hover:text-primary"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Show next projects"
              onClick={scrollNext}
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-outline-variant text-on-surface-variant transition-all hover:border-primary hover:text-primary"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="-mx-4 flex touch-pan-y">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="min-w-0 flex-[0_0_100%] px-4 md:flex-[0_0_50%]"
              >
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
