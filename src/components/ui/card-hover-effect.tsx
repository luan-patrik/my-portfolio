'use client'

import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { ImageIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { ModalImageVisualization } from '../Projects'
import { Button, buttonVariants } from './button'

export const HoverEffect = ({
  items,
  length,
}: {
  items: {
    id: string
    name: string
    description: string[]
    website: string
    repository: string
    image: string
  }[]
  length: number
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<string | null>(null)
  const [open, setOpen] = useState<boolean>(false)

  const handleOpenImage = () => {
    setOpen((opened) => !opened)
    setHoveredIndex(null)
  }

  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className={cn(
            'group relative block h-full w-full p-2',
            length % 2 === 1 && 'last:md:col-span-full last:xl:col-span-full',
          )}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.span
                className='absolute inset-0 block h-full w-full rounded-md bg-highlight/50'
                layoutId='hoverBackground'
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className='flex-1'>
              <CardTitle className='inline-flex items-center justify-between uppercase'>
                {item.name}
                <Button
                  onClick={handleOpenImage}
                  variant={'ghost'}
                  size={'icon'}
                  title={`Abrir imagem do projeto ${item.name}`}
                >
                  <ImageIcon
                    className='size-6'
                    aria-hidden='true'
                    focusable='false'
                  />
                  <span className='sr-only'>
                    Abrir imagem do projeto {item.name}
                  </span>
                </Button>
              </CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </div>
            <CardFooter>
              <Link
                href={item.website}
                className={cn(buttonVariants({ variant: 'outline' }), 'flex-1')}
              >
                Site
              </Link>
              <Link
                href={item.repository}
                className={cn(buttonVariants({ variant: 'outline' }), 'flex-1')}
              >
                Repositório
              </Link>
            </CardFooter>
          </Card>
          <>
            {open ? (
              <ModalImageVisualization
                id={item.id}
                openDialogMenu={handleOpenImage}
                open={open}
                src={item.image}
                title={item.name}
              />
            ) : null}
          </>
        </div>
      ))}
    </>
  )
}

export const Card = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'relative z-50 h-full w-full overflow-hidden rounded-md border bg-background p-4 group-hover:border-muted',
        className,
      )}
    >
      <div className='relative z-50 h-full w-full'>
        <div className='flex h-full flex-col gap-4 p-4'>{children}</div>
      </div>
    </div>
  )
}
export const CardTitle = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <h4
      className={cn(
        'w-full text-2xl font-bold tracking-wide text-foreground',
        className,
      )}
    >
      {children}
    </h4>
  )
}
export const CardDescription = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <p className={cn('text-sm leading-relaxed tracking-wide', className)}>
      {children}
    </p>
  )
}

export const CardFooter = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'flex w-full flex-col justify-end gap-2 sm:flex-row',
        className,
      )}
    >
      {children}
    </div>
  )
}
