import { FormContact } from './FormContact'
import { BentoGridContent } from './ui/bento-grid'
import { CardTitle } from './ui/card-hover-effect'

export const Contact = () => {
  return (
    <BentoGridContent className='col-span-4'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <CardTitle>Contato</CardTitle>
        <FormContact />
      </div>
    </BentoGridContent>
  )
}
