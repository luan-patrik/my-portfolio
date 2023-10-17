import { ReactNode } from 'react'
import Image, { StaticImageData } from 'next/image'
import { ExternalLink, Github } from 'lucide-react'
import { LinkComponent } from './ui/link'

interface RepositoryProps {
  title: string
  description: ReactNode
  img: StaticImageData
  website: string
  repository: string
}

const Project = ({
  title,
  img,
  website,
  repository,
  description,
}: RepositoryProps) => {
  return (
    <div className="group mb-3 last:mb-0 sm:mb-8">
      <section className="relative mx-auto max-w-[50rem] overflow-hidden rounded-md border border-foreground bg-muted sm:pr-8 sm:group-even:pl-8">
        <div className="flex h-full flex-col gap-2 px-5 py-4 sm:max-w-[50%] sm:py-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem] ">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p className="text-sm leading-relaxed text-foreground/90">
            {description}
          </p>
          <div className="flex justify-between text-sm">
            <LinkComponent
              tabIndex={0}
              href={website}
              target="_blank"
              className="flex items-center gap-2"
            >
              Site <ExternalLink size={14} />
            </LinkComponent>

            <LinkComponent
              tabIndex={0}
              href={repository}
              target="_blank"
              className="flex items-center gap-2"
            >
              Repositório <Github size={14} />
            </LinkComponent>
          </div>
        </div>
        <Image
          src={img}
          quality={100}
          width={1920}
          height={1080}
          alt={`Imagem de ${title}`}
          className="absolute -right-28 top-8 hidden w-[28.25rem] rounded-t-md shadow-md transition group-even:-left-40 group-even:right-[initial] group-hover:translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 sm:block"
          style={{
            objectFit: 'cover',
          }}
        />
      </section>
    </div>
  )
}

export default Project
