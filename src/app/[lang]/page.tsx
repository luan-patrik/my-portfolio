import Home from '@/components/Home'
import { Locale } from '@/i18n.config'
import Image from 'next/image'

export default function HomePage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  return <Home lang={lang} />
}
