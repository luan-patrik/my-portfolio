'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavigationLinks {
  onClose?: () => void
}

const NavigationLinks = ({ onClose }: NavigationLinks) => {
  const pathname = usePathname()

  return (
    <nav className='hidden sm:block'>
      <ul className='relative m-0 inline-flex gap-2 p-0'>
        <li>
          <Link
            className={cn(
              'relative inline-block cursor-pointer rounded-md p-2 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors after:absolute after:bottom-2 after:left-0 after:right-0 after:mx-auto after:h-[1.8px] after:w-[1.8px] after:rounded-full after:bg-muted-foreground after:transition-all hover:bg-accent',
              pathname === '/' &&
                'text-foreground after:w-5 after:bg-foreground',
            )}
            onClick={onClose}
            href='/'
            aria-label='Início'
          >
            Início
          </Link>
        </li>
        <li>
          <Link
            className={cn(
              'relative inline-block cursor-pointer rounded-md p-2 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors after:absolute after:bottom-2 after:left-0 after:right-0 after:mx-auto after:h-[1.8px] after:w-[1.8px] after:rounded-full after:bg-muted-foreground after:transition-all hover:bg-accent',
              pathname === '/sobre' &&
                'text-foreground after:w-5 after:bg-foreground',
            )}
            onClick={onClose}
            href='/sobre'
            aria-label='Sobre'
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link
            className={cn(
              'relative inline-block cursor-pointer rounded-md p-2 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors after:absolute after:bottom-2 after:left-0 after:right-0 after:mx-auto after:h-[1.8px] after:w-[1.8px] after:rounded-full after:bg-muted-foreground after:transition-all hover:bg-accent',
              pathname === '/projetos' &&
                'text-foreground after:w-5 after:bg-foreground',
            )}
            onClick={onClose}
            href='/projetos'
            aria-label='Projetos'
          >
            Projetos
          </Link>
        </li>
        <li>
          <Link
            className={cn(
              'relative inline-block cursor-pointer rounded-md p-2 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors after:absolute after:bottom-2 after:left-0 after:right-0 after:mx-auto after:h-[1.8px] after:w-[1.8px] after:rounded-full after:bg-muted-foreground after:transition-all hover:bg-accent',
              pathname === '/contato' &&
                'text-foreground after:w-5 after:bg-foreground',
            )}
            onClick={onClose}
            href='/contato'
            aria-label='Contato'
          >
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationLinks
