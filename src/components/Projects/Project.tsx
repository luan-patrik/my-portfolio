'use client'

import { cn } from '@/lib/utils'
import { ExternalLinkIcon, GithubIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { buttonVariants } from '../ui/button'
import ModalImageVisualization from './ModalImageVisualization'

interface ProjectProps {
  id: string
  name: string
  description: string[]
  website: string
  repository: string
  image: string
}

const Project = ({
  id,
  name,
  description,
  website,
  repository,
  image,
}: ProjectProps) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const handleOpenImage = () => {
    setModalOpen((open) => !open)
  }

  return (
    <>
      <div
        key={id}
        className='flex h-full flex-col justify-between space-y-4 rounded-md border p-2'
      >
        <div className='space-y-4'>
          <h2 className='after:content relative w-fit text-xl font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-[60px] after:rounded-full after:bg-foreground'>
            {name}
          </h2>
          <p className='text-sm sm:text-base'>{description}</p>
        </div>
        <div className='space-y-4'>
          <div className='flex flex-col gap-2 sm:flex-row md:flex-col lg:flex-row'>
            <Link
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'h-auto flex-1 gap-2 p-2',
              )}
              href={website}
              target='_blank'
            >
              Site
              <ExternalLinkIcon
                aria-hidden='true'
                focusable='false'
                className='h-4 w-4'
              />
            </Link>
            <Link
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'h-auto flex-1 gap-2 p-2',
              )}
              href={repository}
              target='_blank'
            >
              Repositório
              <GithubIcon
                aria-hidden='true'
                focusable='false'
                className='h-4 w-4'
              />
            </Link>
          </div>
          <Image
            src={image}
            onClick={handleOpenImage}
            alt={`Imagem do projeto ${name}`}
            priority
            width={1920}
            height={1080}
            className='aspect-video cursor-zoom-in rounded-md border object-contain'
          />
        </div>
      </div>
      {modalOpen ? (
        <ModalImageVisualization
          id={id}
          src={image}
          title={`Imagem do projeto ${name}`}
          open={modalOpen}
          openDialogMenu={handleOpenImage}
        />
      ) : null}
    </>
  )
}

export default Project
