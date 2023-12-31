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
    <>
      <li className='relative'>
        <LinkComponent
          className={cn(
            pathname === '/' &&
              'text-muted-foreground after:w-1/2 after:bg-muted-foreground',
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
          onClick={onClose}
          className={cn(pathname === '/sobre' && 'after:w-1/2')}
          href='/sobre'
          title='Sobre'
        >
          Sobre
        </LinkComponent>
      </li>
      <li>
        <LinkComponent
          className={cn(pathname === '/projetos' && 'after:w-1/2')}
          onClick={onClose}
          href='/projetos'
          title='Projetos'
        >
          Projetos
        </LinkComponent>
      </li>
    </>
  )
}
