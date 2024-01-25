'use client'

import { cn } from '@/lib/utils'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode, forwardRef } from 'react'

interface ActiveLinkProps extends LinkProps {
  children: ReactNode
  className?: string
}

const ActiveLink = forwardRef<HTMLAnchorElement, ActiveLinkProps>(
  ({ className, ...props }, ref) => {
    const pathname = usePathname()

    return (
      <Link
        {...props}
        ref={ref}
        className={cn(
          'relative inline-block cursor-pointer rounded-md p-2 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors after:absolute after:bottom-2 after:left-0 after:right-0 after:mx-auto after:h-[1.8px] after:w-[1.8px] after:rounded-full after:bg-muted-foreground after:transition-all hover:bg-accent',
          pathname === props.href.toString() &&
            'text-foreground after:w-5 after:bg-foreground',
        )}
      />
    )
  },
)

ActiveLink.displayName = 'ActiveLink'

export { ActiveLink }
