'use client'

import { ChangeTheme } from '../ChangeTheme'
import { Container } from '../Container'
import { UserMenu } from './UserMenu'

export const Navbar = () => {
  return (
    <header className="fixed top-0 w-full md:shadow-sm right-0 left-0 z-50">
      <div className="py-4 border-neutral-300 dark:border-neutral-600 border-b bg-neutral-100 dark:bg-neutral-900">
        <Container>
          <div className="flex items-center justify-between sm:justify-center">
            <UserMenu />
            <ChangeTheme />
          </div>
        </Container>
      </div>
    </header>
  )
}
