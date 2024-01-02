import Link from 'next/link'
import { ChangeTheme } from '../ChangeTheme'
import { NavigationLinks } from './NavigationLinks'

const Header = () => {
  return (
    <header className='container sticky inset-x-0 flex min-h-[3.75rem] items-center bg-background'>
      <Link
        href='/'
        className='rounded-md p-2 font-bold uppercase transition-colors hover:bg-accent'
      >
        Luan Patrik
      </Link>
      <NavigationLinks />
      <ChangeTheme />
    </header>
  )
}

export default Header
