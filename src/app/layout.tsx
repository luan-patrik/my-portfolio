import ThemeProvider from '@/components/ThemeProvider'
import { Header } from '@/components/navbar'
import { Toaster } from '@/components/ui/sonner'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { type ReactNode } from 'react'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  style: 'normal',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://luanpatrik.com'),
  robots: { index: true, follow: true },
  title: 'Portfólio | Luan Patrik - Desenvolvedor Front-End.',
  description:
    'Olá! Sou Luan Patrik, desenvolvedor web front-end apaixonado por programação.',
  applicationName: 'Portfólio | Luan Patrik - Desenvolvedor Front-End.',
  creator: 'Luan Patrik',
  keywords:
    'Luan Patrik, portfolio Luan Patrik, dev, Luan Patrik dev, programador, programador frontend, desenvolvedor, desenvolvedor frontend, desenvolvedor, desenvolvimento web, frontend, desenvolvedor react js, desenvolvedor next js, profissional de ti, criação de sites, desenvolvedor de sites',
  authors: { name: 'Luan Patrik', url: 'https://luanpatrik.com' },
  openGraph: {
    type: 'website',
    url: 'https://luanpatrik.com',
    title: 'Portfólio | Luan Patrik - Desenvolvedor Front-End.',
    description:
      'Olá! Sou Luan Patrik, desenvolvedor web front-end apaixonado por programação.',
    images: '/assets/ogp.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://luanpatrik.com',
    title: 'Portfólio | Luan Patrik - Desenvolvedor Front-End.',
    description:
      'Olá! Sou Luan Patrik, desenvolvedor web front-end apaixonado por programação.',
    creator: 'Luan Patrik',
  },
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
          <Header />
          <main className='py-4'>{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
