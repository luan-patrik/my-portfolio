import { cn } from '@/lib/utils'
import { LinkComponent } from '../ui/link'
import { buttonVariants } from '../ui/button'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

interface NavigationLinks {
  lang: Locale
  onClose?: () => void
  dictionary: {
    home: string
    about: string
    projects: string
  }
}

export const NavigationLinks = ({
  lang,
  onClose,
  dictionary,
}: NavigationLinks) => {
  return (
    <>
      <li>
        <LinkComponent
          className={cn(
            buttonVariants({ variant: 'outline', size: 'default' }),
            'w-full shadow-md shadow-foreground/10 sm:w-28',
          )}
          onClick={onClose}
          href={`/${lang}`}
          title={dictionary['home']}
        >
          {dictionary['home']}
        </LinkComponent>
      </li>
      <li>
        <LinkComponent
          className={cn(
            buttonVariants({ variant: 'outline', size: 'default' }),
            'w-full shadow-md shadow-foreground/10 sm:w-28',
          )}
          onClick={onClose}
          href={`/${lang}/about`}
          title={dictionary['about']}
        >
          {dictionary['about']}
        </LinkComponent>
      </li>
      <li>
        <LinkComponent
          className={cn(
            buttonVariants({ variant: 'outline', size: 'default' }),
            'w-full shadow-md shadow-foreground/10 sm:w-28',
          )}
          onClick={onClose}
          href={`/${lang}/projects`}
          title={dictionary['projects']}
        >
          {dictionary['projects']}
        </LinkComponent>
      </li>
    </>
  )
}
