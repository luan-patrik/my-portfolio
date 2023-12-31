import { ChangeTheme } from '../ChangeTheme'
import MobileNavbar from './MobileNavbar'
import { NavigationLinks } from './NavigationLinks'

const Navbar = async () => {
  return (
    <nav className='sticky inset-x-0 top-0 z-30 border-b border-muted bg-background py-2'>
      <div className='container flex h-full items-center justify-between sm:justify-center sm:gap-10'>
        <ul className='hidden gap-10 sm:flex'>
          <NavigationLinks />
        </ul>
        <MobileNavbar />
        <ChangeTheme />
      </div>
    </nav>
  )
}

export default Navbar
