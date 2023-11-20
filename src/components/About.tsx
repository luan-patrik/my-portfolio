import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Contact from './Contact'

const About = async ({ lang }: { lang: Locale }) => {
  const { page } = await getDictionary(lang)

  return (
    <div className="container">
      <div className="flex min-h-[calc(100vh_-_5.5rem)] items-center justify-center">
        <div className="flex max-w-5xl flex-col items-center gap-2 text-base font-normal sm:text-lg">
          <p dangerouslySetInnerHTML={{ __html: page.about.description }}></p>
          <p>{page['about'].author}</p>
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default About
