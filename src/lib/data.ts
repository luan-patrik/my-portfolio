import { Locale } from '@/i18n.config'
import { getDictionary } from './dictionary'

type ExtendedProjects = {
  title: string
  description: string
  website: string
  repository: string
  img: string
}

export const projectsData = async ({ lang }: { lang: Locale }) => {
  const { page } = await getDictionary(lang)

  const projects: ExtendedProjects[] = [
    {
      title: 'Game Set',
      description: `${page['projects'].projects.GameSet.description}`,
      website: 'https://game-set-zeta.vercel.app',
      repository: 'https://github.com/Luan-Patrik/game-set',
      img: '/assets/projects/game-set.webp',
    },
    {
      title: 'News Today',
      description: `${page['projects'].projects.NewsToday.description}`,
      website: 'https://newstoday01.vercel.app',
      repository: 'https://github.com/Luan-Patrik/News-Today',
      img: '/assets/projects/news-today.webp',
    },
    {
      title: 'Smart Fit',
      description: `${page['projects'].projects.SmartFit.description}`,
      website: 'https://front-end-challenge-smartfit.vercel.app',
      repository: 'https://github.com/Luan-Patrik/front-end-challenge-smartfit',
      img: '/assets/projects/smart-fit.webp',
    },
  ]

  return projects
}
