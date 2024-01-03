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
import { LinkComponent } from '../ui/link'

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
      <Button variant='ghost' className='h-auto p-2' onClick={openDialogMenu}>
        <CommandIcon
          className='h-[1.2rem] w-[1.2rem]'
          aria-hidden='true'
          focusable='false'
        />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandList>
          <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
          <CommandGroup heading='Navegue'>
            <LinkComponent href='/' onClick={onClose}>
              <CommandItem className='p-2'>
                <HomeIcon
                  className='pointer-events-none mr-2 h-[1.2rem] w-[1.2rem]'
                  aria-hidden='true'
                  focusable='false'
                />
                Início
              </CommandItem>
            </LinkComponent>
            <LinkComponent href='/sobre' onClick={onClose}>
              <CommandItem>
                <MessageSquareIcon
                  className='pointer-events-none mr-2 h-[1.2rem] w-[1.2rem]'
                  aria-hidden='true'
                  focusable='false'
                />
                Sobre
              </CommandItem>
            </LinkComponent>
            <LinkComponent href='/projetos' onClick={onClose}>
              <CommandItem>
                <RocketIcon
                  className='pointer-events-none mr-2 h-[1.2rem] w-[1.2rem]'
                  aria-hidden='true'
                  focusable='false'
                />
                Projetos
              </CommandItem>
            </LinkComponent>
            <LinkComponent href='/contato' onClick={onClose}>
              <CommandItem>
                <PhoneIcon
                  className='pointer-events-none mr-2 h-[1.2rem] w-[1.2rem]'
                  aria-hidden='true'
                  focusable='false'
                />
                Contato
              </CommandItem>
            </LinkComponent>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading='Entre em contato'>
            <LinkComponent
              href='mailto:contato.luanpatrik@gmail.com'
              target='_blank'
              onClick={onClose}
            >
              <CommandItem>
                <MailIcon
                  className='pointer-events-none mr-2 h-[1.2rem] w-[1.2rem]'
                  aria-hidden='true'
                  focusable='false'
                />
                contato.luanpatrik@gmail.com
              </CommandItem>
            </LinkComponent>
            <LinkComponent
              href='https://wa.me/5551998913374'
              target='_blank'
              onClick={onClose}
            >
              <CommandItem>
                <Icon.whatsapp
                  className='pointer-events-none mr-2 h-[1.2rem] w-[1.2rem]'
                  aria-hidden='true'
                  focusable='false'
                />
                {'(51) 9 9891-3374'}
              </CommandItem>
            </LinkComponent>
            <LinkComponent
              href='https://github.com/Luan-Patrik'
              target='_blank'
              onClick={onClose}
            >
              <CommandItem>
                <GithubIcon
                  className='pointer-events-none mr-2 h-[1.2rem] w-[1.2rem]'
                  aria-hidden='true'
                  focusable='false'
                />
                github.com/luan-patrik
              </CommandItem>
            </LinkComponent>
            <LinkComponent
              href='https://www.linkedin.com/in/luanpatrik'
              target='_blank'
              onClick={onClose}
            >
              <CommandItem>
                <LinkedinIcon
                  className='pointer-events-none mr-2 h-[1.2rem] w-[1.2rem]'
                  aria-hidden='true'
                  focusable='false'
                />
                linkedin.com/in/luanpatrik
              </CommandItem>
            </LinkComponent>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  )
}

export default MobileNavbar
