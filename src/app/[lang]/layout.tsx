import { Inter } from 'next/font/google'
import { type ReactNode } from 'react'
import { Locale, i18n } from '@/i18n.config'
import ThemeProvider from '@/components/ThemeProvider'
import Navbar from '@/components/navbar/Navbar'
import './../globals.css'
import { getDictionary } from '@/lib/dictionary'
import { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  preload: true,
})

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const { metadata } = await getDictionary(params.lang)

  return {
    metadataBase: new URL('https://luanpatrik.com'),
    title: metadata['home'].title,
    description: metadata['home'].description,
    icons: {
      icon: '/assets/favicon.ico/',
    },
    alternates: {
      canonical: `/${params.lang}`,
      languages: {
        pt: '/pt',
        en: '/en',
      },
    },
    verification: {
      google:
        'google-site-verification=bjgaBSk4ZpLX2jHnL0_Mi6LPJni88O6kVvYvdQKKVIs',
    },
  }
}

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode
  params: { lang: Locale }
}) {
  return (
    <html
      lang={params.lang}
      className={`${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          enableColorScheme
          disableTransitionOnChange
        >
          <Navbar lang={params.lang} />
          <main className="py-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
