'use client'

import Image from 'next/image'
import { Book, ExternalLink } from 'lucide-react'
import { RepositoriesLinks, SiteInProduction } from '@/app/components/Links'

type RepositorieProps = {
  title: string
  img: string
  href: string
  repositorie: string
  label: string
}

export const Repositorie = ({
  title,
  img,
  href,
  repositorie,
  label,
}: RepositorieProps) => {
  return (
    <div className="flex justify-between flex-col bg-neutral-200 dark:bg-neutral-800 p-4 rounded-md">
      <div className="">
        <div className="text-base font-semibold">{title}</div>
        <Image
          src={img}
          width={350}
          height={350}
          quality={100}
          loading="lazy"
          alt={title}
          className="rounded-md my-5"
        />
        <div className="text-xs sm:text-sm">{label}</div>
      </div>
      <div className="flex justify-between">
        <SiteInProduction href={href} target="_blank">
          Site <ExternalLink size={14} />
        </SiteInProduction>
        <RepositoriesLinks repositorie={repositorie} target="_blank">
          Repositório <Book size={14} />
        </RepositoriesLinks>
      </div>
    </div>
  )
}
