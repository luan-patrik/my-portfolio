'use client'

import {
  CommandIcon,
  GithubIcon,
  HomeIcon,
  LinkedinIcon,
  MailIcon,
  MessageSquareIcon,
  PhoneIcon,
  RocketIcon,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Icon } from '../Icon'
import { Button } from '../ui/button'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '../ui/command'

const MobileNavbar = () => {
  const [open, setOpen] = useState<boolean>(false)

  const openDialogMenu = () => {
    setOpen((open) => !open)
  }

  const onClose = () => {
    setOpen(false)
  }

  return (
    <div className='block sm:hidden'>
      <Button
        variant='ghost'
        className='h-auto p-2'
        title='Abrir menu'
        aria-label='Abrir menu'
        onClick={openDialogMenu}
      >
        <CommandIcon
          className='h-[1.2rem] w-[1.2rem]'
          aria-hidden='true'
          focusable='false'
        />
        <span className='sr-only'>Abrir menu</span>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandList>
          <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
          <CommandGroup heading='Navegue'>
            <Link href='/' onClick={onClose} aria-label='Início'>
              <CommandItem className='p-2'>
                <HomeIcon
                  className='pointer-events-none mr-2 h-[1.2rem] w-[1.2rem]'
                  aria-hidden='true'
                  focusable='false'
                />
                Início
              </CommandItem>
            </Link>
            <Link href='/sobre' onClick={onClose} aria-label='Sobre'>
              <CommandItem>
                <MessageSquareIcon
                  className='pointer-events-none mr-2 h-[1.2rem] w-[1.2rem]'
                  aria-hidden='true'
                  focusable='false'
                />
                Sobre
              </CommandItem>
            </Link>
            <Link href='/projetos' onClick={onClose} aria-label='Projetos'>
              <CommandItem>
                <RocketIcon
                  className='pointer-events-none mr-2 h-[1.2rem] w-[1.2rem]'
                  aria-hidden='true'
                  focusable='false'
                />
                Projetos
              </CommandItem>
            </Link>
            <Link href='/contato' onClick={onClose} aria-label='Contato'>
              <CommandItem>
                <PhoneIcon
                  className='pointer-events-none mr-2 h-[1.2rem] w-[1.2rem]'
                  aria-hidden='true'
                  focusable='false'
                />
                Contato
              </CommandItem>
            </Link>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading='Entre em contato'>
            <Link
              href='mailto:contato.luanpatrik@gmail.com'
              target='_blank'
              onClick={onClose}
              aria-label='Email'
            >
              <CommandItem>
                <MailIcon
                  className='pointer-events-none mr-2 h-[1.2rem] w-[1.2rem]'
                  aria-hidden='true'
                  focusable='false'
                />
                contato.luanpatrik@gmail.com
              </CommandItem>
            </Link>
            <Link
              href='https://wa.me/5551998913374'
              target='_blank'
              onClick={onClose}
              aria-label='WhatsApp'
            >
              <CommandItem>
                <Icon.whatsapp
                  className='pointer-events-none mr-2 h-[1.2rem] w-[1.2rem]'
                  aria-hidden='true'
                  focusable='false'
                />
                {'(51) 9 9891-3374'}
              </CommandItem>
            </Link>
            <Link
              href='https://github.com/Luan-Patrik'
              target='_blank'
              onClick={onClose}
              aria-label='GitHub'
            >
              <CommandItem>
                <GithubIcon
                  className='pointer-events-none mr-2 h-[1.2rem] w-[1.2rem]'
                  aria-hidden='true'
                  focusable='false'
                />
                github.com/luan-patrik
              </CommandItem>
            </Link>
            <Link
              href='https://www.linkedin.com/in/luanpatrik'
              target='_blank'
              onClick={onClose}
              aria-label='LinkedIn'
            >
              <CommandItem>
                <LinkedinIcon
                  className='pointer-events-none mr-2 h-[1.2rem] w-[1.2rem]'
                  aria-hidden='true'
                  focusable='false'
                />
                linkedin.com/in/luanpatrik
              </CommandItem>
            </Link>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  )
}

export default MobileNavbar
