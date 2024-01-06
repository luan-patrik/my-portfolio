'use client'

import { projectsData } from '@/lib/data'
import { ExternalLinkIcon, GithubIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '../ui/button'
import { CarouselItem } from '../ui/carousel'
import ModalImageVisualization from './ModalImageVisualization'

const Project = () => {
  const data = projectsData()
  const [openImageId, setOpenImageId] = useState<number | null>(null)

  return (
    <>
      {data.map((item) => (
        <CarouselItem key={item.id}>
          <div className='flex h-full w-full flex-col gap-4 overflow-hidden rounded-md border bg-accent p-2 md:min-h-[24rem] md:flex-row'>
            <div className='flex flex-1 flex-col justify-between gap-4'>
              <h2 className='text-xl font-bold uppercase'>{item.title}</h2>
              <p className='leading-relaxed'>{item.description}</p>
              <div className='flex flex-col gap-2 sm:flex-row'>
                <Button
                  asChild
                  variant='outline'
                  size='sm'
                  aria-label='Ver site'
                  className='flex w-full items-center gap-2 text-sm font-medium'
                >
                  <Link href={item.website}>
                    Site
                    <ExternalLinkIcon
                      aria-hidden='true'
                      focusable='false'
                      className='h-[1rem] w-[1rem]'
                    />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant='outline'
                  size='sm'
                  aria-label='Ver repositório'
                  className='flex w-full items-center gap-2 text-sm font-medium'
                >
                  <Link href={item.repository}>
                    Repositório
                    <GithubIcon
                      aria-hidden='true'
                      focusable='false'
                      className='h-[1rem] w-[1rem]'
                    />
                  </Link>
                </Button>
              </div>
            </div>
            <div className='relative md:flex-1'>
              <Image
                src={item.img}
                onClick={() => setOpenImageId(item.id)}
                alt={item.title}
                priority
                width={1920}
                height={1080}
                className='-bottom-2 -right-2 cursor-zoom-in rounded-md object-contain md:absolute md:rounded-b-none md:rounded-tl-md md:rounded-tr-none'
              />
            </div>
          </div>
          {item.id === openImageId ? (
            <ModalImageVisualization
              key={item.id}
              id={item.id}
              open={openImageId !== null}
              openDialogMenu={() => setOpenImageId(null)}
              src={item.img}
              title={item.title}
            />
          ) : null}
        </CarouselItem>
      ))}
    </>
  )
}

export default Project
