import { cn } from '@/lib/utils'
import { LinkComponent } from '../ui/link'
import { buttonVariants } from '../ui/button'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

interface NavigationLinks {
  lang: Locale
}

export const NavigationLinks = async ({ lang }: NavigationLinks) => {
  const { navigation } = await getDictionary(lang)

  return (
    <>
      <li>
        <LinkComponent
          className={cn(
            buttonVariants({ variant: 'outline', size: 'default' }),
            'w-full shadow-md shadow-foreground/10 sm:w-28',
          )}
          href={`/${lang}`}
          title={navigation['home']}
        >
          {navigation['home']}
        </LinkComponent>
      </li>
      <li>
        <LinkComponent
          className={cn(
            buttonVariants({ variant: 'outline', size: 'default' }),
            'w-full shadow-md shadow-foreground/10 sm:w-28',
          )}
          href={`/${lang}/about`}
          title={navigation['about']}
        >
          {navigation['about']}
        </LinkComponent>
      </li>
      <li>
        <LinkComponent
          className={cn(
            buttonVariants({ variant: 'outline', size: 'default' }),
            'w-full shadow-md shadow-foreground/10 sm:w-28',
          )}
          href={`/${lang}/curriculum`}
          title={navigation['curriculum']}
        >
          {navigation['curriculum']}
        </LinkComponent>
      </li>
    </>
  )
}
