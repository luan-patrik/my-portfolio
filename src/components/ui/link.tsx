import { cn } from '@/lib/utils'
import Link, { type LinkProps } from 'next/link'

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
        'relative',
        className,
      )}
      {...props}
    />
  )
}

export { LinkComponent }

