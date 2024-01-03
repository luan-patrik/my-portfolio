'use client'

import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

interface SocialCardProps extends HTMLAttributes<HTMLDivElement> {}

const SocialCard = forwardRef<HTMLDivElement, SocialCardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-center gap-2', className)}
        {...props}
      />
    )
  },
)

SocialCard.displayName = 'SocialCard'

export { SocialCard }
