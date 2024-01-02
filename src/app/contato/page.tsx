import Contact from '@/components/Contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato | Luan Patrik - Desenvolvedor Front-End.',
  description: 'Aqui você vai encontrar todos os meios de contato comigo.',
  alternates: {
    canonical: `/contato`,
  },
}
export default function ContactPage() {
  return <Contact />
}
