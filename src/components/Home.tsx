import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { ChangeTheme } from './ChangeTheme'
import { Icon } from './Icon'
import { buttonVariants } from './ui/button'

export const Home = () => {
  return (
    <section className='flex-1 pt-4 lg:sticky lg:top-16 lg:h-full lg:w-full lg:min-w-96 lg:py-4'>
      <Image
        src={'/assets/photo.webp'}
        width={180}
        height={180}
        alt='Avatar ilustrativo de Luan Patrik'
        quality={100}
        priority
        className='select-none rounded-full border-2 object-cover shadow-lg'
      />
      <div className='flex flex-col items-start gap-4'>
        <h1 className='text-4xl font-bold'>Luan Patrik</h1>
        <h2 className='text-xl font-light'>
          Desenvolvedor <span className='whitespace-nowrap'>Front-End</span>
        </h2>
        <p className='inline-flex items-center gap-2 text-xl font-light'>
          Brasil <Icon.flag className='size-6' />
        </p>
        <div className='flex w-full flex-col items-center gap-4 sm:flex-row'>
          <Link
            className={cn(buttonVariants({ variant: 'outline' }), 'w-full')}
            href='https://docs.google.com/document/d/19lMJ5p95hjIOqwnNSe9lVGC9SEXp6yeQwTVfvQeMzEk/edit'
            target='_blank'
          >
            Baixar CV
          </Link>
          <ChangeTheme />
        </div>
      </div>
    </section>
  )
}
