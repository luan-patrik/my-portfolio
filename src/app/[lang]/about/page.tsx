import { type Metadata } from 'next'
import About from '@/components/About'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const { metadata } = await getDictionary(params.lang)

  return {
    title: metadata['about'].title,
    description: metadata['about'].description,
    alternates: {
      canonical: `/about`,
      languages: {
        pt: 'https://luanpatrik.com/pt/about',
        en: 'https://luanpatrik.com/en/about',
      },
    },
  }
}

export default function AboutPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  return <About lang={lang} />
}
