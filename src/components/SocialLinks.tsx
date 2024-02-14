import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Children } from 'react'
import { Icon } from './Icon'
import { buttonVariants } from './ui/button'

export const SocialLinks = () => {
  const links = [
    {
      href: 'https://wa.me/5551998913374',
      display: '+55 (51) 9 9891-3374',
      label: 'WhatsApp',
      icon: <Icon.whatsapp className='size-8' />,
    },
    {
      href: 'https://www.linkedin.com/in/luanpatrik',
      display: 'linkedin.com/in/luanpatrik',
      label: 'LinkedIn',
      icon: <Icon.linkedin className='size-8' />,
    },
    {
      href: 'mailto:contato.luanpatrik@gmail.com',
      display: 'contato.luanpatrik@gmail.com',
      label: 'Email',
      icon: <Icon.email className='size-8' />,
    },
    {
      href: 'https://github.com/luan-patrik',
      display: 'github.com/luan-patrik',
      label: 'GitHub',
      icon: <Icon.github className='size-8' />,
    },
  ]

  return (
    <>
      {Children.toArray(
        links.map((link) => (
          <Link
            href={link.href}
            target='_blank'
            className={cn(
              buttonVariants({ size: 'social', variant: 'social' }),
            )}
          >
            <div className='flex items-center gap-2'>
              {link.icon} {link.label}
            </div>
            <p className='w-full break-words text-xs font-normal'>
              {link.display}
            </p>
          </Link>
        )),
      )}
    </>
  )
}
