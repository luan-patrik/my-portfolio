import { ActiveLink } from '../ui/active-link'

interface NavigationLinks {
  onClose?: () => void
}

const NavigationLinks = ({ onClose }: NavigationLinks) => {
  return (
    <nav className='hidden sm:block'>
      <ul className='relative m-0 inline-flex gap-2 p-0'>
        <li>
          <ActiveLink onClick={onClose} href='/' aria-label='Início'>
            Início
          </ActiveLink>
        </li>
        <li>
          <ActiveLink onClick={onClose} href='/sobre' aria-label='Sobre'>
            Sobre
          </ActiveLink>
        </li>
        <li>
          <ActiveLink onClick={onClose} href='/projetos' aria-label='Projetos'>
            Projetos
          </ActiveLink>
        </li>
        <li>
          <ActiveLink onClick={onClose} href='/contato' aria-label='Contato'>
            Contato
          </ActiveLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationLinks
