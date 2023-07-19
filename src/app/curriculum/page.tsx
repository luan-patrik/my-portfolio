import { Metadata } from 'next'
import { Container } from '../components/Container'
import { ListRepositories } from './components/ListRepositories'

export const metadata: Metadata = {
  title: 'Luan | Curriculo',
  description: 'Curriculo de Luan Patrik',
}

export default function Curriculum() {
  return (
    <Container>
      <ListRepositories />
    </Container>
  )
}
