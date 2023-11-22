import Image from 'next/image'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'

const Home = async ({ lang }: { lang: Locale }) => {
  const { page } = await getDictionary(lang)

  return (
    <section className="container">
      <div className="flex min-h-[calc(100svh_-_5.6rem)] items-center justify-center">
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-6">
          <div className="flex flex-col gap-4 lg:w-fit lg:gap-2">
            <div>
              <h1 className="text-base font-normal md:text-xl">
                {page['home'].presentation}
              </h1>
              <h2 className="text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl">
                <p>FRONT-END</p>
                <p>DEVELOPER</p>
              </h2>
              <p
                className="lg:3/4 max-w-2xl text-base font-normal leading-6 md:text-xl"
                dangerouslySetInnerHTML={{ __html: page['home'].description }}
              ></p>
            </div>
            <Link
              className={cn(buttonVariants({ variant: 'outline' }), 'w-full')}
              href="https://docs.google.com/document/d/19lMJ5p95hjIOqwnNSe9lVGC9SEXp6yeQwTVfvQeMzEk/edit"
              target="_blank"
            >
              {page['home'].curriculum}
            </Link>
          </div>
          <div>
            <Image
              src="/assets/photo.svg"
              className="h-auto w-auto"
              priority
              width={700}
              height={300}
              alt="Foto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
