'use client'

import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { LinkComponent } from '../ui/link'

interface NavigationLinks {
  onClose?: () => void
}

export const NavigationLinks = ({ onClose }: NavigationLinks) => {
  const pathname = usePathname()

  return (
    <nav className='flex-1 text-center'>
      <ul className='relative m-0 inline-flex gap-2 p-0'>
        <li>
          <LinkComponent
            className={cn(
              'relative inline-block cursor-pointer rounded-md p-3 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors after:absolute after:bottom-2 after:left-0 after:right-0 after:mx-auto after:h-[1.8px] after:w-[1.8px] after:rounded-full after:bg-muted-foreground after:transition-all hover:bg-accent',
              pathname === '/' &&
                'text-foreground after:w-5 after:bg-foreground',
            )}
            onClick={onClose}
            href='/'
            title='Início'
          >
            Início
          </LinkComponent>
        </li>
        <li>
          <LinkComponent
            className={cn(
              'relative inline-block cursor-pointer rounded-md p-3 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors after:absolute after:bottom-2 after:left-0 after:right-0 after:mx-auto after:h-[1.8px] after:w-[1.8px] after:rounded-full after:bg-muted-foreground after:transition-all hover:bg-accent',
              pathname === '/sobre' &&
                'text-foreground after:w-5 after:bg-foreground',
            )}
            onClick={onClose}
            href='/sobre'
            title='Sobre'
          >
            Sobre
          </LinkComponent>
        </li>
        <li>
          <LinkComponent
            className={cn(
              'relative inline-block cursor-pointer rounded-md p-3 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors after:absolute after:bottom-2 after:left-0 after:right-0 after:mx-auto after:h-[1.8px] after:w-[1.8px] after:rounded-full after:bg-muted-foreground after:transition-all hover:bg-accent',
              pathname === '/projetos' &&
                'text-foreground after:w-5 after:bg-foreground',
            )}
            onClick={onClose}
            href='/projetos'
            title='Projetos'
          >
            Projetos
          </LinkComponent>
        </li>
        <li>
          <LinkComponent
            className={cn(
              'relative inline-block cursor-pointer rounded-md p-3 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors after:absolute after:bottom-2 after:left-0 after:right-0 after:mx-auto after:h-[1.8px] after:w-[1.8px] after:rounded-full after:bg-muted-foreground after:transition-all hover:bg-accent',
              pathname === '/contato' &&
                'text-foreground after:w-5 after:bg-foreground',
            )}
            onClick={onClose}
            href='/contato'
            title='Contato'
          >
            Contato
          </LinkComponent>
        </li>
      </ul>
    </nav>
  )
}
