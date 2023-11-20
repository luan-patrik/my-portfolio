import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import { ReactNode } from 'react'
import { LinkComponent } from '../ui/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '../ui/button'
import { getPlaiceholder } from 'plaiceholder'
import path from 'node:path'
import fs from 'node:fs/promises'

interface RepositoryProps {
  title: string
  description: ReactNode
  img: string
  website: string
  repository: string
  dictionary: { website: string; repository: string }
}

const Project = async ({
  title,
  img,
  website,
  repository,
  description,
  dictionary,
}: RepositoryProps) => {
  const buffer = await fs.readFile(path.join('./public', img))

  const { base64 } = await getPlaiceholder(buffer)

  return (
    <section className="group relative mx-auto max-w-5xl overflow-hidden rounded-md border border-foreground bg-muted">
      <div className="flex h-full flex-col gap-2 px-5 py-4 sm:max-w-[50%] sm:py-10 sm:pr-2 sm:pt-10">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="hidden text-ellipsis text-sm leading-relaxed text-foreground/90 sm:block md:text-base">
          {description}
        </p>
        <Image
          src={img}
          quality={100}
          width={452}
          height={255}
          placeholder="blur"
          blurDataURL={base64}
          alt={`Imagem de ${title}`}
          className="bottom-0 w-full rounded-md border border-ring shadow-md transition sm:absolute sm:-right-28 sm:w-96 sm:rounded-b-none sm:group-hover:translate-x-3 sm:group-hover:translate-y-3 sm:group-hover:-rotate-2 sm:group-hover:scale-[1.04] md:w-[28.25rem]"
          style={{
            objectFit: 'cover',
          }}
        />
        <div className="flex flex-col justify-between gap-2 text-sm min-[380px]:flex-row">
          <LinkComponent
            href={website}
            target="_blank"
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'flex w-full items-center justify-center gap-2 border-ring',
            )}
          >
            {dictionary.website} <ExternalLink size={14} />
          </LinkComponent>

          <LinkComponent
            href={repository}
            target="_blank"
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'flex w-full items-center justify-center gap-2 border-ring',
            )}
          >
            {dictionary.repository} <Github size={14} />
          </LinkComponent>
        </div>
      </div>
    </section>
  )
}

export default Project
