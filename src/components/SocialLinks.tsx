import { cn } from '@/lib/utils'
import { GithubIcon, LinkedinIcon } from 'lucide-react'
import { Icon } from './Icon'
import { buttonVariants } from './ui/button'
import { LinkComponent } from './ui/link'

interface SocialLinksProps {
  className?: string
}

const SocialLinks = ({ className }: SocialLinksProps) => {
  return (
    <>
      <LinkComponent
        href='https://github.com/luan-patrik'
        title='GitHub'
        target='_blank'
        className={cn(
          buttonVariants({ size: 'icon', variant: 'outline' }),
          className,
        )}
      >
        <GithubIcon aria-hidden='true' focusable='false' size={24} />
        <span className='sr-only'>GitHub</span>
      </LinkComponent>
      <LinkComponent
        href='https://www.linkedin.com/in/luanpatrik'
        title='LinkedIn'
        target='_blank'
        className={cn(
          buttonVariants({ size: 'icon', variant: 'outline' }),
          className,
        )}
      >
        <LinkedinIcon aria-hidden='true' focusable='false' size={24} />
        <span className='sr-only'>LinkedIn</span>
      </LinkComponent>
      <LinkComponent
        href='https://wa.me/5551998913374'
        title='WhatsApp'
        target='_blank'
        className={cn(
          buttonVariants({ size: 'icon', variant: 'outline' }),
          className,
        )}
      >
        <Icon.whatsapp aria-hidden='true' focusable='false' size={24} />
        <span className='sr-only'>WhatsApp</span>
      </LinkComponent>
    </>
  )
}

export default SocialLinks
