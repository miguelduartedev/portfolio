import type { TranslationResource } from "./en"

const pt = {
  nav: {
    welcome: "Início",
    about: "Sobre mim",
    skills: "Competências",
    projects: "Projetos",
    getInTouch: "Entrar em contacto",
    openMenu: "Abrir menu de navegação",
    closeMenu: "Fechar menu de navegação",
  },
  language: {
    selectorLabel: "Escolher idioma",
  },
  hero: {
    eyebrow: "Programador Frontend / Full Stack",
    titleLine1: "A criar",
    titleAccent: "experiências digitais",
    titleConnector: "com",
    titleLine3: "precisão técnica.",
    intro:
      "Olá! Sou o Miguel, um programador que cria aplicações web rápidas, acessíveis e visualmente marcantes no panorama tecnológico europeu.",
    readBio: "Conhecer o meu percurso",
    skillsCta: "Experiência e competências",
    illustrationAlt: "Ilustração de desenvolvimento frontend",
  },
  about: {
    imageAlt: "Retrato do Miguel",
    yearsExperience: "Anos de experiência",
    eyebrow: "O percurso",
    title: "Do sul aos países nórdicos",
    paragraph1:
      "Nascido e criado em Lisbon, Portugal, eu era o miúdo geek que tinha jeito para tecnologia. Arranjava os computadores de familiares e amigos, fazia GIFs e temas para o Tumblr e criava pixel art para concursos do Habbo Hotel.",
    paragraph2:
      "Também sempre fui muito curioso (e continuo a ser!). Assim que tive acesso à internet, passei muito tempo a aprender sobre diferentes países. Os países nórdicos, em particular, sempre me fascinaram. Desde descobrir fotografias de Lofoten aos 10 anos até lá estar pessoalmente muitos anos depois, sempre soube que queria mudar-me para norte. 😄",
    paragraph3:
      "Fora do trabalho, interesso-me por viajar (cerca de 30 países até agora), caminhadas, fotografia (embora esteja longe de ser especialista), edição de fotografia e vídeo, geografia e mapas, cinema, séries e anime, videojogos, política e economia.",
    locationLabel: "Localização",
    locationValue: "Helsinki, FI (Disponível para relocalização)",
    educationLabel: "Formação",
    educationValue:
      "Licenciatura em Tecnologias de Informação, University of Lisbon",
  },
  skills: {
    eyebrow: "Tecnologias e percurso",
    title: "Bases técnicas",
    cards: {
      react: "Experiência com Hooks, Context e muito mais.",
      typescript: "Tipagem rigorosa para bases de código robustas.",
      styling: "Estilização frontend moderna e sistemas de UI.",
      nextjs: "SSR e geração estática otimizados.",
    },
    timeline: {
      savantiq: {
        role: "Programador Frontend / Full Stack",
        company: "Savantiq • Helsinki (Híbrido)",
        description:
          "Entrei como o quarto colaborador e assumi a responsabilidade pelo desenvolvimento frontend de um produto B2B em fase inicial, criado com React, TypeScript e Next.js, trabalhando de forma generalista entre produto e engenharia. Fui o principal responsável por UI/UX antes da contratação de um designer dedicado, contribuindo para o design do produto e desenvolvendo fluxos complexos, componentes reutilizáveis e interfaces orientadas por dados. Contribuí também para o backend com Python e Django REST Framework, integrações de API, testes automatizados e CI/CD.",
      },
      digipool: {
        role: "Programador e Web Designer (Consultor, Contrato de Zero Horas)",
        company: "Digipool Group • Helsinki (Remoto)",
        description:
          "Desenvolvi e desenhei uma ferramenta de comparação de operadores de telecomunicações, destinada a comparar planos e ofertas de vários operadores finlandeses. Trabalhei diretamente com o cliente para transformar requisitos em soluções funcionais de UI/UX e desenvolvimento web ao longo de todo o projeto.",
      },
      talkdesk: {
        role: "Programador Web Frontend II",
        company: "Talkdesk • Lisbon (Remoto)",
        description:
          "Desenvolvi e mantive aplicações web e componentes reutilizáveis no design system Storybook da Talkdesk, em estreita colaboração com equipas de design e backend. Liderei melhorias de frontend em filtragem de recursos, UI/UX e SEO, com foco em usabilidade, manutenção e desempenho. Contribuí ainda para a adoção de tecnologias como Next.js e Redux Toolkit e promovi código limpo, testes e práticas de frontend escaláveis.",
      },
    },
  },
  projects: {
    eyebrow: "Trabalho selecionado",
    title: "Projetos pessoais",
    explore: "Explorar projeto",
    previous: "Mostrar projetos anteriores",
    next: "Mostrar projetos seguintes",
    items: {
      interactiveMaps:
        "Interactive Maps é uma ferramenta personalizada para criar mapas, desenvolvida a partir da minha paixão por mapas, geografia e geopolítica.",
      euroData:
        "Um explorador interativo de dados europeus para comparar regiões através de estatísticas do Eurostat, mapas e indicadores-chave.",
      swimCity:
        "Uma aplicação móvel para encontrar locais de natação em Helsinki, com dados da água em tempo real, mapas interativos, favoritos e detalhes das praias.",
      localDrop:
        "Uma ferramenta local de partilha de ficheiros, criada com Go e JavaScript puro para transferências rápidas e com baixo consumo de memória.",
      apiBatcher:
        "Pedidos GET agrupados com interceptores personalizados para reduzir chamadas de rede e melhorar o desempenho de carregamento.",
    },
  },
  contact: {
    eyebrow: "Vamos conversar",
    titleLine1: "À procura da sua",
    titleAccent: "próxima contratação em engenharia?",
    getInTouch: "Entrar em contacto",
    resume: "Currículo",
  },
  footer: {
    tagline: "MIGUEL.DEV — A ARQUITETAR A WEB",
    copyright: "© 2026 Miguel. Criado com precisão na Europa.",
    backToTop: "Voltar ao início",
  },
} as const satisfies TranslationResource

export default pt
