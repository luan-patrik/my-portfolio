import Link from 'next/link'
import { ChangeTheme } from '../ChangeTheme'
import { NavigationLinks } from './NavigationLinks'

const Header = () => {
  return (
    <header className='container flex min-h-[3.75rem] items-center outline outline-accent outline-1'>
      <Link
        href='/'
        className='p-2 font-bold uppercase transition-colors hover:bg-accent'
      >
        Luan Patrik
      </Link>
      <NavigationLinks />
      <ChangeTheme />
    </header>
  )
}

export default Header
