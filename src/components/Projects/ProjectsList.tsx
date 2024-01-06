'use client'

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'
import Project from './Project'

const ProjectsList = () => {
  return (
    <section className='container flex min-h-[calc(100svh_-_92px)] items-center justify-center '>
      <Carousel
        className='mx-auto w-full max-w-5xl pt-10 sm:px-10 sm:pt-0'
        opts={{ loop: true }}
      >
        <CarouselContent>
          <Project />
        </CarouselContent>
        <CarouselPrevious className='right-12 sm:left-0' />
        <CarouselNext className='right-0' />
      </Carousel>
    </section>
  )
}

export default ProjectsList
