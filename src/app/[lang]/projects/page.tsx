import { Metadata } from 'next'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import ProjectsList from '@/components/Projects/ProjectsList'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const { metadata } = await getDictionary(params.lang)

  return {
    title: metadata['projects'].title,
    description: metadata['projects'].description,
    alternates: {
      canonical: '/projects',
      languages: {
        pt: '/pt/projects',
        en: '/en/projects',
      },
    },
  }
}

export default function CurriculumPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  return <ProjectsList lang={lang} />
}
