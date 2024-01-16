import Projects from '@/components/projects/Projects'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projetos | Luan Patrik - Desenvolvedor Front-End.',
  description: 'Aqui você vai encontrar todos os meus projetos.',
  alternates: {
    canonical: `/projetos`,
  },
}

export default function ProjectsPage() {
  return <Projects />
}
