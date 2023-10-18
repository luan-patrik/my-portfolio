import Image from 'next/image'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

const Home = async ({ lang }: { lang: Locale }) => {
  const { page } = await getDictionary(lang)

  return (
    <div className="container">
      <div className="flex min-h-[calc(100vh_-_3.5rem)]">
        <div className="mx-auto my-5 flex items-center justify-center max-lg:flex-col max-lg:gap-y-16 lg:gap-x-6">
          <div className="flex lg:w-fit">
            <div>
              <h1 className="text-base font-normal md:text-xl">
                {page['home'].presentation}
              </h1>
              <h2 className="text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl">
                <p>FRONT-END</p>
                <p>DEVELOPER</p>
              </h2>
              <p className="lg:3/4 max-w-2xl text-base font-normal leading-6 md:text-xl">
                {page['home'].description}
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/assets/photo.svg"
              priority
              width={700}
              height={300}
              alt="Foto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
