import { cn } from '@/lib/utils'
import Link, { type LinkProps } from 'next/link'
import { buttonVariants } from './button'

interface LinkComponentProps {
  target?: string
}

function LinkComponent({
  className,
  href,
  target,
  ...props
}: React.HTMLAttributes<HTMLAnchorElement> & LinkProps & LinkComponentProps) {
  return (
    <Link
      href={href}
      target={target}
      className={cn(
        'cursor-pointer rounded-md text-sm font-medium transition-colors hover:text-primary',
        className,
      )}
      {...props}
    />
  )
}

export { LinkComponent }
