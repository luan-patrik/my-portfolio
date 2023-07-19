'use client'

import { ChangeTheme } from '../ChangeTheme'
import { Container } from '../Container'
import { MenuMobile } from './MenuMobile'
import { UserMenu } from './UserMenu'

export const Navbar = () => {
  return (
    <header className="fixed top-0 w-full bg-transparent md:shadow-sm right-0">
      <div className="py-4 border-neutral-300 dark:border-neutral-600 border-b bg-neutral-100 dark:bg-neutral-900">
        <Container>
          <div className="flex items-center justify-between sm:justify-center sm:flex-row-reverse">
            <ChangeTheme />
            <div className="flex flex-row-reverse items-start justify-between w-full sm:hidden">
              <MenuMobile />
            </div>
            <div className="hidden sm:flex items-center justify-center md:gap-0 gap-3">
              <UserMenu />
            </div>
          </div>
        </Container>
      </div>
    </header>
  )
}
