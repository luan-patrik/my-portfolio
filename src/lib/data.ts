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
      img: '/assets/projects/Tabnews/Tabnews-Clone-Dark.png',
    },
  ]

  return projects
}
