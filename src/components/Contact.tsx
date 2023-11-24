import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'
import { LinkComponent } from './ui/link'
import { GithubIcon, LinkedinIcon } from 'lucide-react'
import { Icon } from './Icon'

const Contact = () => {
  return (
    <div className="flex items-center gap-2">
      <LinkComponent
        href="https://github.com/Luan-Patrik"
        title="GitHub"
        target="_blank"
        className={cn(buttonVariants({ size: 'icon', variant: 'outline' }))}
      >
        <GithubIcon aria-hidden="true" focusable="false" size={24} />
        <span className="sr-only">GitHub</span>
      </LinkComponent>
      <LinkComponent
        href="https://www.linkedin.com/in/luanpatrik"
        title="LinkedIn"
        target="_blank"
        className={cn(buttonVariants({ size: 'icon', variant: 'outline' }))}
      >
        <LinkedinIcon aria-hidden="true" focusable="false" size={24} />
        <span className="sr-only">LinkedIn</span>
      </LinkComponent>
      <LinkComponent
        href="https://api.whatsapp.com/send?phone=5551998913374"
        title="WhatsApp"
        target="_blank"
        className={cn(buttonVariants({ size: 'icon', variant: 'outline' }))}
      >
        <Icon.whatsapp aria-hidden="true" focusable="false" size={24} />
        <span className="sr-only">WhatsApp</span>
      </LinkComponent>
    </div>
  )
}

export default Contact
