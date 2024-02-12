'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export const ChangeTheme = () => {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          title='Mudar tema'
          aria-label='Mudar tema'
          className='h-auto w-full p-2'
        >
          <Sun
            aria-hidden='true'
            focusable='false'
            className='block size-4 dark:hidden'
          />
          <Moon
            aria-hidden='true'
            focusable='false'
            className='hidden size-4 dark:block'
          />
          <span className='ml-2'>Trocar tema</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => {
            setTheme('light')
          }}
          aria-label='Claro'
        >
          Claro
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme('dark')
          }}
          aria-label='Escuro'
        >
          Escuro
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme('system')
          }}
          aria-label='Sistema'
        >
          Sistema
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
