import { Metadata } from 'next'
import { Locale } from '@/i18n.config'
import Curriculum from '@/components/Curriculum'
import { getDictionary } from '@/lib/dictionary'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const { metadata } = await getDictionary(params.lang)

  return {
    title: metadata['curriculum'].title,
    description: metadata['curriculum'].description,
  }
}

export default function CurriculumPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  return <Curriculum lang={lang} />
}
