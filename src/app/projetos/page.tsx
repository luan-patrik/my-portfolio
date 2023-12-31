import ProjectsList from '@/components/Projects/ProjectsList'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Luan DEV | Projetos',
    description: 'Projetos de Luan Patrik',
    alternates: {
      canonical: `/projects`,
    },
  }
}

export default function CurriculumPage() {
  return <ProjectsList />
}
