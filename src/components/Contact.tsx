import FormContact from './FormContact'
import { SocialCard } from './Social'
import SocialLinks from './SocialLinks'

const Contact = () => {
  return (
    <section className='container'>
      <div className='flex min-h-[calc(100svh_-_92px)] flex-col items-center justify-center'>
        <FormContact />
        <div className='flex w-screen items-center justify-center gap-2 overflow-x-hidden py-4'>
          <hr className='h-1 w-screen' />
          <span className='uppercase'>OU</span>
          <hr className='h-1 w-screen' />
        </div>
        <SocialCard>
          <SocialLinks />
        </SocialCard>
      </div>
    </section>
  )
}

export default Contact
