'use client'

import { useState } from 'react'
import { Bot, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavItem } from '../Links'

export const UserMenu = () => {
  const [open, setOpen] = useState(false)

  const handleOpenMenu = () => {
    setOpen((opened) => !opened)
  }

  const handleCloseMenu = () => {
    setOpen(false)
  }

  return (
    <>
      <div className="hidden sm:flex items-center justify-center">
        <NavItem rounded href="/" title="Inicio" label="Inicio" />
        <NavItem rounded href="/about" title="Sobre" label="Sobre" />
        <NavItem rounded href="/curriculum" title="Curriculo" label="Curriculo" />
      </div>

      <div className="flex sm:hidden items-center justify-end">
        <button
          onClick={handleOpenMenu}
          tabIndex={0}
          className='hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md transition focus:bg-neutral-200 dark:focus:bg-neutral-800 p-2'
          title={open ? 'Fechar Menu' : 'Abrir Menu'}
        >
          {open === true ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: '-100%', opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.2 },
            }}
            exit={{
              x: '-100%',
              opacity: 1,
              transition: { duration: 0.2 },
            }}
            className="flex flex-col sm:hidden h-screen sm:h-auto w-1/2 mt-[4.5rem] sm:mt-0 fixed top-0 left-0 dark:bg-neutral-900 bg-neutral-100 -z-10 border-neutral-300 dark:border-neutral-600 border-r"
          >
            <NavItem
              href="/"
              title="Inicio"
              label="Inicio"
              onCloseMenu={handleCloseMenu}
            />
            <NavItem
              href="/about"
              title="Sobre"
              label="Sobre"
              onCloseMenu={handleCloseMenu}
            />
            <NavItem
              href="/curriculum"
              title="Curriculo"
              label="Curriculo"
              onCloseMenu={handleCloseMenu}
            />
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

{
  /* return (
    <div className="relative">
      <motion.nav className="flex flex-col sm:flex-row items-center h-screen w-screen mt-[4.5rem] absolute top-0 right-0 dark:bg-neutral-900 bg-neutral-100"       initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            exit={{background: '#ff0000'}}>
        <NavItem href="/" title="Inicio" label="Inicio" />
        <NavItem href="/about" title="Sobre" label="Sobre" />
        <NavItem href="/curriculum" title="Curriculo" label="Curriculo" />
      </motion.nav>
    </div>
  ) */
}
