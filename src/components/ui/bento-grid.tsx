'use client'

import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

interface BentoGridProps extends HTMLAttributes<HTMLDivElement> {}

const BentoGrid = forwardRef<HTMLDivElement, BentoGridProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          'mx-auto grid max-w-7xl auto-rows-[minmax(8rem,_auto)] gap-10 py-4 grid-cols-4',
          className,
        )}
        {...props}
        ref={ref}
      />
    )
  },
)

BentoGrid.displayName = 'BentoGrid'

interface BentoGridContentProps extends HTMLAttributes<HTMLElement> {}

const BentoGridContent = forwardRef<HTMLElement, BentoGridContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <section
        className={cn(
          'row-span-1 flex flex-col gap-4 rounded-2xl border bg-background p-4 shadow-input transition duration-200 hover:shadow-md dark:shadow-none',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

BentoGridContent.displayName = 'BentoGridContent'

interface BentoGridHeaderProps extends HTMLAttributes<HTMLHeadingElement> {}

const BentoGridHeader = forwardRef<HTMLHeadingElement, BentoGridHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <h2
        className={cn('mb-2 mt-2 font-sans font-bold', className)}
        ref={ref}
        {...props}
      />
    )
  },
)

BentoGridHeader.displayName = 'BentoGridHeader'

interface BentoGridDescriptionProps
  extends HTMLAttributes<HTMLParagraphElement> {}

const BentoGridDescription = forwardRef<
  HTMLDivElement,
  BentoGridDescriptionProps
>(({ className, ...props }, ref) => {
  return (
    <p
      className={cn('text-sm font-normal leading-relaxed', className)}
      ref={ref}
      {...props}
    />
  )
})

BentoGridDescription.displayName = 'BentoGridDescription'

export { BentoGrid, BentoGridContent, BentoGridDescription, BentoGridHeader }
