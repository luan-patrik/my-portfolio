import { cn } from '@/lib/utils'
import { GithubIcon, LinkedinIcon } from 'lucide-react'
import Link from 'next/link'
import { Icon } from './Icon'
import { buttonVariants } from './ui/button'

interface SocialLinksProps {
  className?: string
}

const SocialLinks = ({ className }: SocialLinksProps) => {
  return (
    <>
      <Link
        href='https://github.com/luan-patrik'
        title='GitHub'
        aria-label='GitHub'
        target='_blank'
        className={cn(
          buttonVariants({ size: 'icon', variant: 'outline' }),
          className,
        )}
      >
        <GithubIcon aria-hidden='true' focusable='false' size={24} />
        <span className='sr-only'>GitHub</span>
      </Link>
      <Link
        href='https://www.linkedin.com/in/luanpatrik'
        title='LinkedIn'
        aria-label='LinkedIn'
        target='_blank'
        className={cn(
          buttonVariants({ size: 'icon', variant: 'outline' }),
          className,
        )}
      >
        <LinkedinIcon aria-hidden='true' focusable='false' size={24} />
        <span className='sr-only'>LinkedIn</span>
      </Link>
      <Link
        href='https://wa.me/5551998913374'
        title='WhatsApp'
        aria-label='WhatsApp'
        target='_blank'
        className={cn(
          buttonVariants({ size: 'icon', variant: 'outline' }),
          className,
        )}
      >
        <Icon.whatsapp aria-hidden='true' focusable='false' size={24} />
        <span className='sr-only'>WhatsApp</span>
      </Link>
    </>
  )
}

export default SocialLinks
