import { Metadata } from 'next'
import { Github, Linkedin, Instagram } from 'lucide-react'
import { Container } from '../components/Container'
import { SocialLinks } from '../components/Links'

export const metadata: Metadata = {
  title: 'Luan | Sobre',
  description: 'Sobre Luan Patrik',
}

export default function About() {
  return (
    <Container>
      <div className="flex min-h-[calc(100vh_-_4.5rem)] mt-[4.5rem]">
        <div className="flex justify-center flex-col items-center lg:gap-x-6 mx-auto max-w-5xl my-5 font-normal text-lg">
          <p className="">
            Gostaria de me apresentar. Meu nome é Luan Patrik, tenho 18 anos e
            estudo desenvolvimento web há cerca de 1 ano. Sou um jovem motivado
            que está em busca de sua primeira oportunidade profissional. Tenho
            um espírito determinado e uma vontade incansável de aprender. Embora
            ainda esteja no início de minha carreira, possuo uma sólida base de
            conhecimentos adquirida durante meus estudos em{' '}
            <strong>HTML</strong>, <strong>JavaScript</strong>,{' '}
            <strong>CSS</strong>, <strong>React</strong>,{' '}
            <strong>Next.js</strong> e também estou aprendendo sobre{' '}
            <strong>APIs</strong>. Tenho habilidade para trabalhar em equipe e
            uma atitude positiva. Estou pronto para enfrentar os desafios que
            surgirem e me adaptar rapidamente a novas situações.
          </p>
          <p className="mt-5">Atenciosamente, Luan Patrik</p>
          <div className="flex">
            <SocialLinks
              href="https://github.com/Luan-Patrik"
              title="Github"
              target="_blank"
            >
              <Github size={24}/>
            </SocialLinks>
            <SocialLinks
              href="https://instagram.com/"
              title="Instagram"
              target="_blank"
            >
              <Instagram size={24}/>
            </SocialLinks>
            <SocialLinks
              href="https://www.linkedin.com/in/luan-patrik-a4b05b223/"
              title="Linkedin"
              target="_blank"
            >
              <Linkedin size={24}/>
            </SocialLinks>
          </div>
        </div>
      </div>
    </Container>
  )
}
