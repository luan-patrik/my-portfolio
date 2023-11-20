'use client'

import { usePathname } from 'next/navigation'
import { Globe } from 'lucide-react'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Button } from './ui/button'

const ChangeLocale = ({
  dictionary,
}: {
  dictionary: { title: string; en: string; pt: string }
}) => {
  const pathname = usePathname()
  const redirectPathname = (locale: string) => {
    if (!pathname) return '/'
    const segments = pathname.split('/')
    segments[1] = locale

    return segments.join('/')
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          title={dictionary['title']}
          className="z-50"
        >
          <Globe className="h-[1.2rem] w-[1.2rem] scale-100" />
          <span className="sr-only">{dictionary['title']}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href={redirectPathname('en')} title={dictionary['en']}>
            {dictionary['en']}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={redirectPathname('pt')} title={dictionary['pt']}>
            {dictionary['pt']}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ChangeLocale
