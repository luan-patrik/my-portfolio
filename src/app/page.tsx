import Image from 'next/image'
import { Container } from './components/Container'

export default function Home() {
  return (
    <Container>
      <div className="flex min-h-[calc(100vh_-_4.5rem)] mt-[4.5rem]">
        <div className="flex justify-center max-lg:flex-col max-lg:gap-y-16 items-center lg:gap-x-6 mx-auto my-5">
          <div className="lg:w-fit flex">
            <div>
              <h1 className="text-base md:text-xl font-normal">
                Oi, sou Luan Patrik
              </h1>
              <div className="font-extrabold 2xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl text-5xl">
                <h2>FRONTEND</h2>
                <h2>DEVELOPER</h2>
              </div>
              <p className="max-w-2xl lg:3/4 text-base md:text-xl font-normal leading-6">
                Tenho 18 anos, sou um jovem motivado que está em busca da
                primeira oportunidade profissional. Com um espírito determinado
                e uma vontade de aprender.
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/photo.svg"
              priority
              alt="Foto"
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>
    </Container>
  )
}
