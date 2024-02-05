import { About, Contact, Home, ProjectsList } from '@/components'
import { BentoGrid } from '@/components/ui/bento-grid'

export default function HomePage() {
  return (
    <div className='container relative flex flex-col py-20 lg:flex-row lg:gap-20'>
      <Home />
      <div className='flex min-h-screen w-full flex-col  lg:overflow-y-auto'>
        <BentoGrid>
          <About />
          <ProjectsList />
          <Contact />
        </BentoGrid>
      </div>
    </div>
  )
}
