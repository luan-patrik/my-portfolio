'use client'

import { cn } from '@/lib/utils'
import { AnimatePresence, MotionConfig, motion, useCycle } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import SocialLinks from '../SocialLinks'
import { buttonVariants } from '../ui/button'
import { NavigationLinks } from './NavigationLinks'

const AnimateNavMobile = () => {
  const [mobileNav, toggleMobileNav] = useCycle<boolean>(false, true)

  return (
    <div className='block sm:hidden'>
      <motion.button
        onClick={() => toggleMobileNav()}
        animate={mobileNav ? 'open' : 'closed'}
        aria-expanded={mobileNav}
        title={mobileNav ? 'Fechar menu' : 'Abrir menu'}
        className={cn(
          buttonVariants({ size: 'icon', variant: 'outline' }),
          'relative z-50',
        )}
      >
        {mobileNav ? (
          <>
            <X
              className='h-[1.2rem] w-[1.2rem] scale-100'
              aria-hidden='true'
              focusable='false'
            />
            <span className='sr-only'>Fechar menu</span>
          </>
        ) : (
          <>
            <Menu
              className='h-[1.2rem] w-[1.2rem] scale-100'
              aria-hidden='true'
              focusable='false'
            />
            <span className='sr-only'>Abrir menu</span>
          </>
        )}
      </motion.button>
      <AnimatePresence>
        {mobileNav && (
          <MotionConfig
            transition={{
              bounce: 0.099,
            }}
          >
            <motion.div
              key='mobile-nav'
              variants={{
                open: {
                  opacity: 1,
                  y: '0%',
                  transition: {
                    when: 'beforeChildren',
                  },
                },
                closed: {
                  opacity: 0,
                  y: '100%',
                  transition: {
                    when: 'afterChildren',
                  },
                },
              }}
              initial='closed'
              animate='open'
              exit='closed'
              className='fixed bottom-0 left-0 right-0 h-1/2 w-full flex-col rounded-t-md bg-background py-10  ring-2 ring-ring sm:hidden'
            >
              <motion.div
                variants={{
                  open: {
                    y: '0%',
                    opacity: 1,
                  },
                  closed: {
                    y: '100%',
                    opacity: 0,
                  },
                }}
                className='container grid grid-cols-1 grid-rows-2 place-content-between'
              >
                <ul className='flex flex-col space-y-2 sm:hidden'>
                  <NavigationLinks onClose={() => toggleMobileNav(0)} />
                </ul>
                <div className='flex justify-center'>
                  <SocialLinks />
                </div>
              </motion.div>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AnimateNavMobile
