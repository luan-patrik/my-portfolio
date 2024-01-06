import Link from 'next/link'
import { ChangeTheme } from '../ChangeTheme'
import { MobileNavbar, NavigationLinks } from './index'

const Header = () => {
  return (
    <header className='container sticky inset-x-0 flex min-h-[3.75rem] items-center justify-between bg-background'>
      <Link
        href='/'
        className='hidden rounded-md p-2 font-bold uppercase transition-colors hover:bg-accent sm:block'
        title='Voltar para o início'
        aria-label='Início'
      >
        Luan Patrik
      </Link>
      <NavigationLinks />
      <MobileNavbar />
      <ChangeTheme />
    </header>
  )
}

export default Header
