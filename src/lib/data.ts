type ExtendedProjects = {
  id: number
  title: string
  description: string
  website: string
  repository: string
  img: string
}

export const projectsData = () => {
  const projects: ExtendedProjects[] = [
    {
      id: 1,
      title: 'Game Set',
      description:
        'Aplicativo desenvolvido em Next.js que oferece aos usuários uma plataforma simples para guardar as configurações de seus jogos. Possui uma interface intuitiva e de fácil utilização. A interface é intuitiva e fácil de usar, e a experiência foi otimizada para dispositivos móveis, garantindo acesso de qualquer dispositivo.',
      website: 'https://game-set-zeta.vercel.app',
      repository: 'https://github.com/Luan-Patrik/game-set',
      img: '/assets/projects/game-set.webp',
    },
    {
      id: 2,
      title: 'News Today',
      description:
        'Aplicativo desenvolvido em Next.js que oferece aos usuários uma plataforma simplificada para publicação de conteúdo. Com uma interface intuitiva, o NewsToday torna a leitura de notícias mais eficiente e agradável. A interface é intuitiva e fácil de usar, e a experiência foi otimizada para dispositivos móveis, garantindo acesso de qualquer dispositivo.',
      website: 'https://newstoday01.vercel.app',
      repository: 'https://github.com/Luan-Patrik/News-Today',
      img: '/assets/projects/news-today.webp',
    },
    {
      id: 3,
      title: 'Smart Fit',
      description:
        'O Desafio SmartFit foi desenvolvido em Next.js e oferece aos usuários uma plataforma simples para filtrar unidades, verificando se estão abertas ou fechadas. A interface é intuitiva e fácil de usar, e a experiência foi otimizada para dispositivos móveis, garantindo acesso de qualquer dispositivo.',
      website: 'https://front-end-challenge-smartfit.vercel.app',
      repository: 'https://github.com/Luan-Patrik/front-end-challenge-smartfit',
      img: '/assets/projects/smart-fit.webp',
    },
    {
      id: 4,
      title: 'Amor Animal',
      description:
        'Site desenvolvido com Next.js para divulgar animais perdidos e abandonados, e para sensibilizar as pessoas sobre a importância da adoção. O site apresenta os animais que estão para adoção e precisando do seu carinho. A interface é intuitiva e fácil de usar, e a experiência foi otimizada para dispositivos móveis, garantindo acesso de qualquer dispositivo.',
      website: 'https://amor-animal.vercel.app',
      repository: 'https://github.com/Luan-Patrik/amor-animal',
      img: '/assets/projects/amor-animal.webp',
    },
  ]

  return projects
}
