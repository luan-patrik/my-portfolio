import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'
import { LinkComponent } from './ui/link'
import { GithubIcon, LinkedinIcon } from 'lucide-react'

const Contact = () => {
  return (
    <div className="flex items-center gap-2">
      <LinkComponent
        href="https://github.com/Luan-Patrik"
        title="GitHub"
        target="_blank"
        className={cn(buttonVariants({ size: 'icon', variant: 'outline' }))}
      >
        <GithubIcon size={24} />
        <span className="sr-only">GitHub</span>
      </LinkComponent>
      <LinkComponent
        href="https://www.linkedin.com/in/luan-patrik-a4b05b223/"
        title="LinkedIn"
        target="_blank"
        className={cn(buttonVariants({ size: 'icon', variant: 'outline' }))}
      >
        <LinkedinIcon size={24} />
        <span className="sr-only">LinkedIn</span>
      </LinkComponent>
    </div>
  )
}

export default Contact
