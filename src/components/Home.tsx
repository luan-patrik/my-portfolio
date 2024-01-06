import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from './ui/button'

const Home = () => {
  const startDate = new Date(2021, 0, 1)
  const currentDate = new Date()
  const millisecondsDiff = currentDate.getTime() - startDate.getTime()
  const daysDiff = millisecondsDiff / (1000 * 60 * 60 * 24) + 1
  const years = Math.floor(daysDiff / 365.25)

  return (
    <section className='container'>
      <div className='flex min-h-[calc(100svh_-_92px)] items-center justify-center'>
        <div className='flex h-full flex-col items-center gap-4 lg:flex-row lg:gap-6'>
          <div className='flex flex-col gap-4 lg:w-fit lg:gap-2'>
            <div>
              <h1 className='text-base font-normal md:text-xl'>
                Oi, sou Luan Patrik 👋
              </h1>
              <h2 className='xs:text-3xl text-2xl font-extrabold sm:text-4xl md:text-5xl 2xl:text-7xl'>
                DESENVOLVEDOR
                <br />
                FRONT-END
              </h2>
              <p className='lg:3/4 max-w-2xl text-base font-normal leading-6 md:text-xl'>
                Estou estudando há {years} anos. Durante essa jornada, criei
                projetos desafiadores que me proporcionaram grande aprendizado e
                desenvolvimento de minhas habilidades e conhecimentos em{' '}
                <strong>HTML</strong>, <strong>JavaScript</strong>,{' '}
                <strong>CSS</strong>, <strong>Tailwind</strong>,{' '}
                <strong>React</strong>, <strong>Next.js</strong>,{' '}
                <strong>Prisma</strong>, <strong>MongoDB</strong> e{' '}
                <strong>APIs</strong>.
              </p>
            </div>
            <Link
              className={cn(buttonVariants({ variant: 'outline' }), 'w-full')}
              href='https://docs.google.com/document/d/19lMJ5p95hjIOqwnNSe9lVGC9SEXp6yeQwTVfvQeMzEk/edit'
              target='_blank'
            >
              Baixar CV
            </Link>
          </div>
          <div>
            <Image
              src='/assets/photo.svg'
              className='h-auto w-auto'
              priority
              width={700}
              height={300}
              alt='Foto'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
