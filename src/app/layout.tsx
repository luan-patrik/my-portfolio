import { Poppins } from 'next/font/google'
import { Navbar } from './components/navbar/Navbar'
import './globals.css'
import Providers from './Providers'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata = {
  title: 'Luan DEV',
  description: 'Portfolio desenvolvedor frontend',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body
        className={`bg-neutral-100 dark:bg-neutral-900 text-neutral-950 dark:text-neutral-50 ${poppins.className}`}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
