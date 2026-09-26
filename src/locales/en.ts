const en = {
  nav: {
    welcome: "Welcome",
    about: "About Me",
    skills: "Skills",
    projects: "Projects",
    getInTouch: "Get in Touch",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
  },
  language: {
    selectorLabel: "Choose language",
  },
  hero: {
    eyebrow: "Front-end / Full-stack Developer",
    titleLine1: "Crafting digital",
    titleAccent: "experiences",
    titleConnector: "with",
    titleLine3: "technical precision.",
    intro:
      "Hi! I am Miguel, a developer building high-performance, accessible, and visually stunning web applications across the European tech landscape.",
    readBio: "Read Bio",
    skillsCta: "Experience & Skills",
    illustrationAlt: "Frontend development illustration",
  },
  about: {
    imageAlt: "Portrait of Miguel",
    yearsExperience: "Years of Experience",
    eyebrow: "The Narrative",
    title: "From the South to the Nordics",
    paragraph1:
      "Born and raised in Lisbon, Portugal, I was the geeky kid who was good with technology. I fixed relatives' and friends' computers, made GIFs and templates for Tumblr, and created pixel art for Habbo Hotel competitions.",
    paragraph2:
      "I was also very curious (and still am!). Once I had access to the internet, I spent a lot of time learning about different countries. The Nordics, in particular, always fascinated me. From discovering photos of Lofoten as a 10-year-old to standing there in person years later, I always knew I wanted to move north. 😄",
    paragraph3:
      "Outside of work, my interests include traveling (around 30 countries so far), hiking, photography (though I’m by no means an expert), photo and video editing, geography and maps, going to the cinema, watching TV shows and anime, playing video games, and reading about politics and economics.",
    locationLabel: "Location",
    locationValue: "Helsinki, FI (Open to Relocation)",
    educationLabel: "Education",
    educationValue:
      "Bachelor’s degree in Information Technology, University of Lisbon",
  },
  skills: {
    eyebrow: "Stack & Story",
    title: "Technical Foundations",
    cards: {
      react: "Expertise in Hooks, Context, and more.",
      typescript: "Strict typing for bulletproof codebases.",
      styling: "Modern frontend styling and UI systems.",
      nextjs: "Optimized SSR and static generation.",
    },
    timeline: {
      savantiq: {
        role: "Frontend / Full Stack Developer",
        company: "Savantiq • Helsinki (Hybrid)",
        description:
          "Joined as the fourth employee and took ownership of frontend development for an early-stage B2B product built with React, TypeScript and Next.js, while working as a generalist across product and engineering. Acted as the primary UI/UX contributor before a dedicated designer was hired, shaping product designs alongside building complex workflows, reusable components and data-driven interfaces, while also contributing to backend development with Python and Django REST Framework, API integrations, automated testing and CI/CD.",
      },
      digipool: {
        role: "Web Developer & Web Designer (Consultant, Zero-Hour Contract)",
        company: "Digipool Group • Helsinki (Remote)",
        description:
          "Developed and designed a telecommunications provider comparison tool for comparing plans and offerings across multiple Finnish telecom providers, working directly with the client to translate requirements into functional UI/UX and web development solutions throughout the project.",
      },
      talkdesk: {
        role: "Frontend Web Developer II",
        company: "Talkdesk • Lisbon (Remote)",
        description:
          "Built and maintained user-facing web applications and reusable components within Talkdesk’s Storybook design system, collaborating closely with design and backend teams. Led frontend improvements across resource filtering, UI/UX and SEO, with a focus on usability, maintainability and performance, while contributing to the adoption of technologies including Next.js and Redux Toolkit and promoting clean code, testing and scalable frontend practices.",
      },
    },
  },
  projects: {
    eyebrow: "Selected Work",
    title: "Personal projects",
    explore: "Explore project",
    previous: "Show previous projects",
    next: "Show next projects",
    items: {
      interactiveMaps:
        "Interactive Maps is a custom map-making tool I built out of a passion for maps, geography and geopolitics.",
      euroData:
        "An interactive European data explorer for comparing regions through Eurostat statistics, maps and key indicators.",
      swimCity:
        "A mobile app for finding Helsinki swimming spots with live water data, interactive maps, favourites and beach details.",
      localDrop:
        "A local file-sharing tool built with Go and vanilla JavaScript for fast, low-memory transfers.",
      apiBatcher:
        "Batched GET requests with custom interceptors to reduce network calls and improve load performance.",
    },
  },
  contact: {
    eyebrow: "Let's Connect",
    titleLine1: "Looking for your",
    titleAccent: "next engineering hire?",
    getInTouch: "Get in Touch",
    resume: "Resume",
  },
  footer: {
    tagline: "MIGUEL.DEV — ARCHITECTING THE WEB",
    copyright: "© 2026 Miguel. Built with precision in Europe.",
    backToTop: "Back to top",
  },
} as const

type DeepStringValues<T> = {
  readonly [Key in keyof T]: T[Key] extends string
    ? string
    : DeepStringValues<T[Key]>
}

export type TranslationResource = DeepStringValues<typeof en>

export default en
