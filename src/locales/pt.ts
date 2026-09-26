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
    titleAccent: "experiências\ndigitais",
    titleConnector: "com",
    titleLine3: "precisão técnica.",
    intro:
      "Olá! Sou o Miguel, programador e criador de aplicações web rápidas, acessíveis e visualmente apelativas no panorama tecnológico europeu.",
    readBio: "Conhecer o meu percurso",
    skillsCta: "Experiência e competências",
    illustrationAlt: "Ilustração sobre desenvolvimento frontend",
  },
  about: {
    imageAlt: "Retrato do Miguel",
    yearsExperience: "Anos de experiência",
    eyebrow: "O percurso",
    title: "Do sul aos países nórdicos",
    paragraph1:
      "Nascido e criado em Lisboa, Portugal, eu era o miúdo geek que tinha jeito para tecnologia. Arranjava os computadores de familiares e amigos, fazia GIFs e temas para o Tumblr e criava pixel art para concursos do Habbo Hotel.",
    paragraph2:
      "Também sempre fui muito curioso (e continuo a ser!). Assim que tive acesso à internet, passei muito tempo a conhecer outros países. Os países nórdicos, em particular, sempre me fascinaram. Desde as primeiras fotografias de Lofoten, que descobri aos 10 anos, até ao dia em que lá estive, muitos anos depois, sempre soube que queria mudar-me para norte. 😄",
    paragraph3:
      "Fora do trabalho, gosto de viajar (cerca de 30 países até agora), fazer caminhadas, fotografar (embora esteja longe de ser especialista), editar fotografia e vídeo, explorar geografia e mapas, ir ao cinema, ver séries e anime, jogar videojogos e ler sobre política e economia.",
    locationLabel: "Localização",
    locationValue: "Helsínquia, Finlândia (disponível para relocalização)",
    educationLabel: "Formação",
    educationValue:
      "Licenciatura em Tecnologias da Informação, University of Lisbon",
  },
  skills: {
    eyebrow: "Tecnologias e percurso",
    title: "Bases técnicas",
    cards: {
      react: "Experiência sólida com Hooks, Context e muito mais.",
      typescript: "Tipagem rigorosa para bases de código robustas.",
      styling: "Estilos modernos para frontend e sistemas de UI.",
      nextjs: "SSR e geração estática otimizados.",
    },
    timeline: {
      savantiq: {
        role: "Programador Frontend / Full Stack",
        company: "Savantiq • Helsínquia (Híbrido)",
        description:
          "Entrei como o quarto elemento da equipa e assumi o desenvolvimento frontend de um produto B2B em fase inicial, criado com React, TypeScript e Next.js, trabalhando de forma transversal entre produto e engenharia. Fui o principal responsável por UI/UX até à contratação de um designer dedicado, conciliando o design do produto com a criação de fluxos complexos, componentes reutilizáveis e interfaces orientadas por dados. Contribuí também para o desenvolvimento backend com Python e Django REST Framework, integrações de API, testes automatizados e CI/CD.",
      },
      digipool: {
        role: "Programador e Web Designer (Consultor, Contrato de Zero Horas)",
        company: "Digipool Group • Helsínquia (Remoto)",
        description:
          "Desenvolvi e desenhei uma ferramenta que permitia comparar tarifários e ofertas de vários operadores de telecomunicações finlandeses. Trabalhei diretamente com o cliente ao longo de todo o projeto para transformar requisitos em soluções funcionais de UI/UX e desenvolvimento web.",
      },
      talkdesk: {
        role: "Programador Web Frontend II",
        company: "Talkdesk • Lisboa (Remoto)",
        description:
          "Desenvolvi e mantive aplicações web e componentes reutilizáveis no sistema de design em Storybook da Talkdesk, em estreita colaboração com as equipas de design e backend. Liderei melhorias de frontend na filtragem de recursos, em UI/UX e em SEO, com foco na usabilidade, manutenibilidade e desempenho. Contribuí ainda para a adoção de tecnologias como Next.js e Redux Toolkit e promovi código limpo, testes e práticas de frontend escaláveis.",
      },
    },
  },
  projects: {
    eyebrow: "Projetos selecionados",
    title: "Projetos pessoais",
    explore: "Explorar projeto",
    previous: "Mostrar projetos anteriores",
    next: "Mostrar projetos seguintes",
    items: {
      interactiveMaps:
        "Interactive Maps é uma ferramenta à medida para criar mapas, desenvolvida a partir da minha paixão por cartografia, geografia e geopolítica.",
      euroData:
        "Uma ferramenta interativa para explorar dados europeus e comparar regiões através de estatísticas do Eurostat, mapas e indicadores-chave.",
      swimCity:
        "Uma aplicação móvel para encontrar locais de natação em Helsínquia, com dados da água em tempo real, mapas interativos, favoritos e informações sobre as praias.",
      localDrop:
        "Uma ferramenta local de partilha de ficheiros, criada com Go e JavaScript puro para transferências rápidas e com baixo consumo de memória.",
      apiBatcher:
        "Pedidos GET agrupados com interceptores personalizados para reduzir chamadas de rede e melhorar o desempenho de carregamento.",
    },
  },
  contact: {
    eyebrow: "Vamos conversar",
    titleLine1: "À procura do próximo",
    titleAccent: "talento para a sua equipa de engenharia?",
    getInTouch: "Entrar em contacto",
    resume: "Currículo",
  },
  footer: {
    tagline: "MIGUEL.DEV — A CONSTRUIR A WEB",
    copyright: "© 2026 Miguel. Criado com rigor na Europa.",
    backToTop: "Voltar ao início",
  },
} as const satisfies TranslationResource

export default pt
