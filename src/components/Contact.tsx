import FormContact from './FormContact'
import { SocialCard } from './Social'
import SocialLinks from './SocialLinks'

const Contact = () => {
  return (
    <section className='overflow-x-hidden'>
      <div className='container'>
        <div className='flex min-h-[calc(100svh_-_92px)] flex-col items-center justify-center gap-4'>
          <FormContact />
          <div className='flex w-screen items-center justify-center gap-2 overflow-x-hidden'>
            <hr className='h-[1px] w-screen bg-accent' />
            <span className='uppercase'>OU</span>
            <hr className='h-[1px] w-screen bg-accent' />
          </div>
          <SocialCard>
            <SocialLinks />
          </SocialCard>
        </div>
      </div>
    </section>
  )
}

export default Contact
