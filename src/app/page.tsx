import { About, Contact, Home, ProjectsList, SocialLinks } from '@/components'
import { BentoGrid } from '@/components/ui/bento-grid'

export default function HomePage() {
  return (
    <div className='container left-0 right-0 flex min-h-svh flex-col gap-10 py-16 lg:absolute lg:flex-row lg:gap-20'>
      <Home />

      <div className='flex w-full flex-col lg:overflow-y-auto'>
        <BentoGrid>
          <About />
          <ProjectsList />
          <SocialLinks />
          <Contact />
        </BentoGrid>
      </div>
    </div>
  )
}
