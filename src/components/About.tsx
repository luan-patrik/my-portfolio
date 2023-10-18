import { Github, Linkedin, Instagram } from 'lucide-react'
import { cn } from '@/lib/utils'
import { LinkComponent } from '@/components/ui/link'
import { buttonVariants } from '@/components/ui/button'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

const About = async ({ lang }: { lang: Locale }) => {
  const { page } = await getDictionary(lang)

  return (
    <div className="container">
      <div className="flex min-h-[calc(100vh_-_3.5rem)]">
        <div className="mx-auto my-5 flex max-w-5xl flex-col items-center justify-center gap-2 text-lg font-normal lg:gap-x-6">
          <p dangerouslySetInnerHTML={{ __html: page.about.description }}></p>
          <p>{page['about'].author}</p>
          <div className="flex gap-2">
            <LinkComponent
              href="https://github.com/Luan-Patrik"
              title="GitHub"
              target="_blank"
              className={cn(
                buttonVariants({ size: 'icon', variant: 'outline' }),
              )}
            >
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </LinkComponent>
            <LinkComponent
              href="https://www.linkedin.com/in/luan-patrik-a4b05b223/"
              title="LinkedIn"
              target="_blank"
              className={cn(
                buttonVariants({ size: 'icon', variant: 'outline' }),
              )}
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </LinkComponent>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
