import { cn } from '@/lib/utils'
import Link, { type LinkProps } from 'next/link'
import { HTMLAttributeAnchorTarget, HTMLAttributes, forwardRef } from 'react'

interface LinkComponentProps
  extends HTMLAttributes<HTMLAnchorElement>,
    LinkProps {
  target?: HTMLAttributeAnchorTarget
}

const LinkComponent = forwardRef<HTMLAnchorElement, LinkComponentProps>(
  ({ className, href, target, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        href={href}
        target={target}
        className={cn(className)}
        {...props}
      />
    )
  },
)

LinkComponent.displayName = 'LinkComponent'

export { LinkComponent }
