import About from '@/components/About'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre | Luan Patrik - Desenvolvedor Front-End.',
  description: 'Aqui você vai saber mais sobre mim e minha jornada.',
  alternates: {
    canonical: '/sobre',
  },
}

export default function AboutPage() {
  return <About />
}
