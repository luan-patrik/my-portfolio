'use client'

import { ReactNode } from 'react'
import { motion, AnimatePresence, MotionConfig, useCycle } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'
import { LinkComponent } from '../ui/link'
import { Locale } from '@/i18n.config'
import { NavigationLinks } from './NavigationLinks'

interface AnimateNavMobileProps {
  children: ReactNode
}

const AnimateNavMobile = ({
  dictionary,
  lang,
}: {
  dictionary: {
    openMenuMobile: string
    closeMenuMobile: string
    home: string
    about: string
    projects: string
  }
  lang: Locale
}) => {
  const [mobileNav, toggleMobileNav] = useCycle<boolean>(false, true)

  return (
    <div className="block sm:hidden">
      <motion.button
        onClick={() => toggleMobileNav()}
        animate={mobileNav ? 'open' : 'closed'}
        aria-expanded={mobileNav}
        title={
          mobileNav
            ? dictionary['closeMenuMobile']
            : dictionary['openMenuMobile']
        }
        className={cn(
          buttonVariants({ size: 'icon', variant: 'outline' }),
          'relative z-50 shadow-md shadow-foreground/10',
        )}
      >
        {mobileNav ? (
          <>
            <X className="h-[1.2rem] w-[1.2rem] scale-100" />
            <span className="sr-only">{dictionary['closeMenuMobile']}</span>
          </>
        ) : (
          <>
            <Menu className="h-[1.2rem] w-[1.2rem] scale-100" />
            <span className="sr-only">{dictionary['openMenuMobile']}</span>
          </>
        )}
      </motion.button>
      <AnimatePresence>
        {mobileNav && (
          <MotionConfig
            transition={{
              type: 'spring',
              bounce: 0.099,
            }}
          >
            <motion.div
              key="mobile-nav"
              variants={{
                open: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    when: 'beforeChildren',
                  },
                },
                closed: {
                  opacity: 0,
                  x: '-100%',
                  transition: {
                    when: 'afterChildren',
                  },
                },
              }}
              initial="closed"
              animate="open"
              exit="closed"
              className="brightness-120 fixed inset-0 flex-col justify-start bg-ring sm:hidden"
            >
              <motion.div
                variants={{
                  open: {
                    y: '0%',
                    opacity: 1,
                  },
                  closed: {
                    y: '25%',
                    opacity: 0,
                  },
                }}
                className="container mt-14"
              >
                <ul className="flex flex-col space-y-2 sm:hidden">
                  <NavigationLinks
                    onClose={() => toggleMobileNav(0)}
                    dictionary={dictionary}
                    lang={lang}
                  />
                </ul>
              </motion.div>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AnimateNavMobile
