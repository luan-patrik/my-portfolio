import { cn } from '@/lib/utils'
import { GithubIcon, LinkedinIcon } from 'lucide-react'
import { Icon } from './Icon'
import { buttonVariants } from './ui/button'
import { LinkComponent } from './ui/link'

const SocialLinks = () => {
  return (
    <div className='flex items-center gap-2'>
      <LinkComponent
        href='https://github.com/luan-patrik'
        title='GitHub'
        target='_blank'
        className={cn(buttonVariants({ size: 'icon', variant: 'outline' }))}
      >
        <GithubIcon aria-hidden='true' focusable='false' size={24} />
        <span className='sr-only'>GitHub</span>
      </LinkComponent>
      <LinkComponent
        href='https://www.linkedin.com/in/luanpatrik'
        title='LinkedIn'
        target='_blank'
        className={cn(buttonVariants({ size: 'icon', variant: 'outline' }))}
      >
        <LinkedinIcon aria-hidden='true' focusable='false' size={24} />
        <span className='sr-only'>LinkedIn</span>
      </LinkComponent>
      <LinkComponent
        href='https://wa.me/5551998913374'
        title='WhatsApp'
        target='_blank'
        className={cn(buttonVariants({ size: 'icon', variant: 'outline' }))}
      >
        <Icon.whatsapp aria-hidden='true' focusable='false' size={24} />
        <span className='sr-only'>WhatsApp</span>
      </LinkComponent>
    </div>
  )
}

export default SocialLinks
