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
        'relative text-sm font-medium after:absolute after:bottom-0 after:left-0 after:w-0 after:rounded-full after:bg-foreground after:py-[0.05rem] after:transition-all after:duration-300',
        className,
      )}
      {...props}
    />
  )
}

export { LinkComponent }
