'use client'

import { useState, useEffect, ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

type ProvidersProps = {
  children: ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider defaultTheme='system' enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  )
}

export default Providers
