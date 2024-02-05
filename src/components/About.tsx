'use client'

import { BentoGridContent, BentoGridDescription } from './ui/bento-grid'

export const About = () => {
  return (
    <BentoGridContent>
      <BentoGridDescription className='col-span-1'>
        <strong>“</strong>Meu nome é Luan Patrik, tenho 19 anos. Minha jornada
        na programação começou quando iniciei na criação de servidores de SAMP
        usando a linguagem <strong>PAWN</strong>. Desde então me apaixonei pela
        área. Em 2021 conheci o desenvolvimento web através de um amigo e desde
        então comecei a estudar sobre em busca construir uma base sólida de
        conhecimentos e informações, durante meus estudos na área eu aprendi
        muito sobre as principais linguagens e frameworks, são elas{' '}
        <strong>HTML</strong>, <strong>JavaScript</strong>, <strong>CSS</strong>
        , <strong>Tailwind</strong>, <strong>React</strong>,{' '}
        <strong>Next.js</strong>, <strong>Prisma</strong>,{' '}
        <strong>MongoDB</strong> e <strong>APIs</strong>. Estou constantemente
        estudando para aprimorar e conhecer novas funcionalidades e linguagens
        para evoluir profissionalmente e pessoalmente<strong>”</strong>.
      </BentoGridDescription>
    </BentoGridContent>
  )
}
