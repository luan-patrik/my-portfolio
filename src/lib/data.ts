type ExtendedProjects = {
  title: string
  description: string
  website: string
  repository: string
  img: string
}

export const projectsData = async () => {
  const projects: ExtendedProjects[] = [
    {
      title: 'Game Set',
      description:
        'Aplicativo desenvolvido em Next.js que oferece aos usuários uma plataforma simples para guardar as configurações de seus jogos. Possui uma interface intuitiva e de fácil utilização. A experiência é otimizada para dispositivos móveis, garantindo fácil acesso em qualquer lugar.',
      website: 'https://game-set-zeta.vercel.app',
      repository: 'https://github.com/Luan-Patrik/game-set',
      img: '/assets/projects/game-set.webp',
    },
    {
      title: 'News Today',
      description:
        'Aplicativo desenvolvido em Next.js que oferece aos usuários uma plataforma simplificada para publicação de conteúdo. Com uma interface intuitiva, o NewsToday torna a leitura de notícias mais eficiente e agradável. A experiência é otimizada para dispositivos móveis, garantindo fácil acesso em qualquer lugar.',
      website: 'https://newstoday01.vercel.app',
      repository: 'https://github.com/Luan-Patrik/News-Today',
      img: '/assets/projects/news-today.webp',
    },
    {
      title: 'Smart Fit',
      description:
        'O Desafio SmartFit foi desenvolvido em Next.js e oferece aos usuários uma plataforma simples para filtrar unidades, verificando se estão abertas ou fechadas. A interface é intuitiva e fácil de usar, e a experiência foi otimizada para dispositivos móveis, garantindo acesso conveniente de qualquer lugar.',
      website: 'https://front-end-challenge-smartfit.vercel.app',
      repository: 'https://github.com/Luan-Patrik/front-end-challenge-smartfit',
      img: '/assets/projects/smart-fit.webp',
    },
  ]

  return projects
}
