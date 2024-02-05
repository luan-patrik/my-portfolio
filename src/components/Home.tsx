import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from './ui/button'

export const Home = () => {
  return (
    <section className='flex-1 lg:sticky lg:inset-y-20 lg:h-full lg:w-full'>
      <div className='flex flex-col items-center gap-4'>
        <div>
          <h1 className='text-base font-normal md:text-xl'>
            Oi, sou Luan Patrik 👋
          </h1>
          <h2 className='text-center text-2xl font-extrabold sm:text-3xl md:text-4xl'>
            DESENVOLVEDOR <br className='block sm:hidden lg:block' />
            FRONT-END
          </h2>
        </div>
        <Link
          className={cn(buttonVariants({ variant: 'outline' }), 'w-full')}
          href='https://docs.google.com/document/d/19lMJ5p95hjIOqwnNSe9lVGC9SEXp6yeQwTVfvQeMzEk/edit'
          target='_blank'
        >
          Baixar CV
        </Link>
      </div>
    </section>
  )
}
