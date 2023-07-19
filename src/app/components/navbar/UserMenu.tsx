'use client'

import { NavItem } from '../../components/Links'

export const UserMenu = () => {
  return (
    <div className="relative">
      <nav className="flex flex-row items-center">
        <NavItem href="/" title="Inicio" label="Inicio" />
        <NavItem href="/about" title="Sobre" label="Sobre" />
        <NavItem href="/curriculum" title="Curriculo" label="Curriculo" />
      </nav>
    </div>
  )
}
