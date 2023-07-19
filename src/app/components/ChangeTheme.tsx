'use client'

import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDown, Moon, Sun } from 'lucide-react'

const options = [
  {
    icon: <Moon size={18} />,
    text: 'Dark',
  },
  {
    icon: <Sun size={18} />,
    text: 'Light',
  },
]

import { useTheme } from 'next-themes'

// const getStoredTheme = () => {
//   const storedTheme = localStorage.getItem('theme')
//   const isValidTheme = options.some((option) => option.text === storedTheme)
//   return isValidTheme ? storedTheme! : 'Light'
// }

export const ChangeTheme = () => {
  // const [value, setValue] = useState(() => getStoredTheme())
  // const currentTheme = getStoredTheme()
  // localStorage.setItem('theme', currentTheme)

  // useEffect(() => {
  //   if (value === 'Dark') {
  //     document.documentElement.classList.add('dark')
  //   } else if (value === 'Light') {
  //     document.documentElement.classList.remove('dark')
  //   }
  // }, [value])

  // type ComponentProps = 'Dark' | 'Light'

  // const handleThemeToggle = (newValue: ComponentProps) => {
  //   setValue(newValue)
  //   localStorage.setItem('theme', newValue)

  //   if (newValue === 'Dark') {
  //     document.documentElement.classList.add('dark')
  //   } else if (newValue === 'Light') {
  //     document.documentElement.classList.remove('dark')
  //   }
  // }

  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const currentTheme = theme

  return (
    <div>
      <Menu
        as="div"
        className="inline-block text-left text-base font-normal mx-0.5 select-none max-sm:px-4"
      >
        <div>
          <Menu.Button
            tabIndex={0}
            className="flex items-center justify-center rounded-md px-4 py-2 leading-none gap-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition focus:bg-neutral-200 dark:focus:bg-neutral-800"
          >
            {options
              .filter((option) => option.text.toLowerCase() === currentTheme)
              .map((option, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span>{option.icon}</span>
                  <span
                    aria-label={currentTheme}
                    className="text-sm hidden sm:block"
                  >
                    {currentTheme!.charAt(0).toUpperCase() +
                      currentTheme!.slice(1)}
                  </span>
                </div>
              ))}
            <ChevronDown aria-hidden="true" size={18} />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="mt-2 absolute origin-top rounded-md p-2 gap-2 flex flex-col bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-600 z-40">
            {options.map((option, i) => (
              <Menu.Item
                key={i}
                as="div"
                className="cursor-pointer rounded-md flex justify-center"
                onClick={() =>
                  (option.text === 'Dark' && setTheme('dark')) ||
                  (option.text === 'Light' && setTheme('light'))
                }
              >
                {({ active }) => (
                  <div
                    className={`${
                      active && 'outline outline-2'
                    } flex items-center gap-2 py-2 px-6 rounded-md`}
                  >
                    {option.icon}
                    {option.text}
                  </div>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
