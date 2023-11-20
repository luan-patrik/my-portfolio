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
      title: 'Tabnews - Clone',
      description: `${page['projects'].projects.Tabnews.description}`,
      website: 'https://tab-news-clone-yvi9.vercel.app',
      repository: 'https://github.com/Luan-Patrik/TabNews-Clone',
      img: '/assets/projects/Tabnews-Clone.png',
    },
    {
      title: 'Game Set',
      description: `${page['projects'].projects.GameSet.description}`,
      website: 'https://game-set-zeta.vercel.app',
      repository: 'https://github.com/Luan-Patrik/game-set',
      img: '/assets/projects/Game-Set.png',
    },
    {
      title: 'Smart Fit',
      description: `${page['projects'].projects.SmarFit.description}`,
      website: 'https://front-end-challenge-smartfit.vercel.app',
      repository: 'https://github.com/Luan-Patrik/front-end-challenge-smartfit',
      img: '/assets/projects/Smart-Fit.png',
    },
  ]

  return projects
}
