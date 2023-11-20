import { ChangeTheme } from '../ChangeTheme'
import ChangeLocale from '../ChangeLocale'
import { Locale } from '@/i18n.config'
import { NavigationLinks } from './NavigationLinks'
import MobileNavbar from './MobileNavbar'
import { getDictionary } from '@/lib/dictionary'

const Navbar = async ({ lang }: { lang: Locale }) => {
  const { navigation, themes, locales } = await getDictionary(lang)

  return (
    <nav className="sticky inset-x-0 top-0 z-30 border-b border-muted bg-background py-2">
      <div className="container flex h-full items-center justify-between sm:justify-center sm:gap-10">
        <ul className="hidden gap-10 sm:flex">
          <NavigationLinks dictionary={navigation} lang={lang} />
        </ul>
        <MobileNavbar dictionary={navigation} lang={lang} />
        <ChangeTheme dictionary={themes} />
        <ChangeLocale dictionary={locales} />
      </div>
    </nav>
  )
}

export default Navbar
