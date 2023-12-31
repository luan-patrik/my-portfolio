import ThemeProvider from '@/components/ThemeProvider'
import Navbar from '@/components/navbar/Navbar'
import { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { type ReactNode } from 'react'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  preload: true,
})

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://luanpatrik.com/'),
    title: 'Portfólio de Luan Patrik, desenvolvedor front-end.',
    description: '',
    icons: {
      icon: '/assets/favicon.svg',
    },
    alternates: {
      canonical: `/`,
    },
    verification: {
      google:
        'google-site-verification=bjgaBSk4ZpLX2jHnL0_Mi6LPJni88O6kVvYvdQKKVIs',
    },
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='pt-BR' className={nunito.className} suppressHydrationWarning>
      <body className='bg-background text-foreground'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          enableColorScheme
          disableTransitionOnChange
        >
          <Navbar />
          <main className='py-4'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
