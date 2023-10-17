'use client'

import { ReactNode } from 'react'
import { motion, AnimatePresence, MotionConfig, useCycle } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'
import { LinkComponent } from '../ui/link'
import { Locale } from '@/i18n.config'

interface AnimateNavMobileProps {
  children: ReactNode
}

const AnimateNavMobile = ({
  dictionary,
  lang,
}: {
  dictionary: {
    home: string
    about: string
    curriculum: string
  }
  lang: Locale
}) => {
  const [mobileNav, toggleMobileNav] = useCycle<boolean>(false, true)

  return (
    <div className="block sm:hidden">
      <motion.button
        onClick={() => toggleMobileNav()}
        animate={mobileNav ? 'open' : 'closed'}
        className={cn(
          buttonVariants({ size: 'icon', variant: 'outline' }),
          'relative z-50 shadow-md shadow-foreground/10',
        )}
      >
        {mobileNav ? (
          <X className="h-[1.2rem] w-[1.2rem] scale-100" />
        ) : (
          <Menu className="h-[1.2rem] w-[1.2rem] scale-100" />
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
                  <li>
                    <LinkComponent
                      className={cn(
                        buttonVariants({ variant: 'outline', size: 'default' }),
                        'w-full shadow-md shadow-foreground/10',
                      )}
                      onClick={() => toggleMobileNav(0)}
                      href={`/${lang}`}
                      title={dictionary.home}
                    >
                      {dictionary.home}
                    </LinkComponent>
                  </li>
                  <li>
                    <LinkComponent
                      className={cn(
                        buttonVariants({ variant: 'outline', size: 'default' }),
                        'w-full shadow-md shadow-foreground/10',
                      )}
                      onClick={() => toggleMobileNav(0)}
                      href={`/${lang}/about`}
                      title={dictionary.about}
                    >
                      {dictionary.about}
                    </LinkComponent>
                  </li>
                  <li>
                    <LinkComponent
                      className={cn(
                        buttonVariants({ variant: 'outline', size: 'default' }),
                        'w-full shadow-md shadow-foreground/10',
                      )}
                      onClick={() => toggleMobileNav(0)}
                      href={`/${lang}/curriculum`}
                      title={dictionary.curriculum}
                    >
                      {dictionary.curriculum}
                    </LinkComponent>
                  </li>
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
