import About from '@/components/About'
import { type Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Luan DEV | Sobre',
    description: 'Sobre Luan Patrik',
    alternates: {
      canonical: `/sobre`,
    },
  }
}

export default function AboutPage() {
  return <About />
}
