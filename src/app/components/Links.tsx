'use client'

import { HTMLAttributeAnchorTarget, ReactNode } from 'react'
import Link from 'next/link'

type NavItemProps = {
  href: string
  title: string
  label: string
  rounded?: boolean
  onCloseMenu?: () => void
}

type SocialLinksProps = {
  href: string
  title: string
  target: HTMLAttributeAnchorTarget
  children: ReactNode
}

type RepositoriesLinksProps = {
  repositorie: string
  target: HTMLAttributeAnchorTarget
  children: ReactNode
}

type SiteInProductionProps = {
  href: string
  target: HTMLAttributeAnchorTarget
  children: ReactNode
}

export const NavItem = ({
  href,
  title,
  label,
  onCloseMenu,
  rounded,
}: NavItemProps) => {
  return (
    <Link
      tabIndex={0}
      href={href}
      title={title}
      onClick={onCloseMenu}
      className={`px-4 py-2 my-0.5 sm:my-0 sm:mx-0.5 font-normal text-base cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800 ${
        rounded ? 'rounded-md' : ''
      } transition focus:bg-neutral-200 dark:focus:bg-neutral-800`}
    >
      {label}
    </Link>
  )
}

export const SocialLinks = ({
  href,
  title,
  target,
  children,
}: SocialLinksProps) => {
  return (
    <Link
      tabIndex={0}
      href={href}
      title={title}
      target={target}
      className="p-2 mx-0.5 font-normal text-base cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md transition focus:bg-neutral-200 dark:focus:bg-neutral-800"
    >
      {children}
    </Link>
  )
}

export const RepositoriesLinks = ({
  repositorie,
  target,
  children,
}: RepositoriesLinksProps) => {
  return (
    <Link
      tabIndex={0}
      href={repositorie}
      target={target}
      className="inline-flex mt-2 items-center gap-2 text-xs sm:text-sm hover:border-neutral-800 hover:dark:border-neutral-200 transition border-b border-transparent "
    >
      {children}
    </Link>
  )
}

export const SiteInProduction = ({
  href,
  target,
  children,
}: SiteInProductionProps) => {
  return (
    <Link
      tabIndex={0}
      href={href}
      target={target}
      className="inline-flex mt-2 items-center gap-2 text-xs sm:text-sm hover:border-neutral-800 hover:dark:border-neutral-200 transition border-b border-transparent"
    >
      {children}
    </Link>
  )
}
