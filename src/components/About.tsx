import { SocialCard } from './Social'
import SocialLinks from './SocialLinks'

const About = () => {
  const startDate = new Date(2005, 0, 26)
  const currentDate = new Date()
  const millisecondsDiff = currentDate.getTime() - startDate.getTime()
  const daysDiff = millisecondsDiff / (1000 * 60 * 60 * 24) + 1
  const ageInYears = Math.floor(daysDiff / 365.25)

  return (
    <section className='container'>
      <div className='flex min-h-[calc(100svh_-_92px)] flex-col items-center justify-center'>
        <div className='flex max-w-5xl flex-col items-center gap-2 text-base font-normal sm:text-lg'>
          <p>
            <strong>“</strong>Meu nome é Luan Patrik, tenho {ageInYears} anos.
            Minha jornada na programação começou quando iniciei na criação de
            servidores de SAMP usando a linguagem <strong>PAWN</strong>. Desde
            então me apaixonei pela área. Em 2021 conheci o desenvolvimento web
            através de um amigo e desde então comecei a estudar sobre em busca
            construir uma base sólida de conhecimentos e informações, durante
            meus estudos na área eu aprendi muito sobre as principais linguagens
            e frameworks, são elas <strong>HTML</strong>,{' '}
            <strong>JavaScript</strong>, <strong>CSS</strong>,{' '}
            <strong>Tailwind</strong>, <strong>React</strong>,{' '}
            <strong>Next.js</strong>, <strong>Prisma</strong>,{' '}
            <strong>MongoDB</strong> e <strong>APIs</strong>. Estou
            constantemente estudando para aprimorar e conhecer novas
            funcionalidades e linguagens para evoluir profissionalmente e
            pessoalmente<strong>”</strong>.
          </p>
          <p>
            Atenciosamente, <strong>Luan Patrik.</strong>
          </p>
          <SocialCard>
            <SocialLinks />
          </SocialCard>
        </div>
      </div>
    </section>
  )
}

export default About
