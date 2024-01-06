import Image from 'next/image'
import { Dialog, DialogContent } from '../ui/dialog'

interface ModalImageVisualizationProps {
  open: boolean
  openDialogMenu: () => void
  id: number
  src: string
  title: string
}

const ModalImageVisualization = ({
  open,
  openDialogMenu,
  id,
  src,
  title,
}: ModalImageVisualizationProps) => {
  return (
    <div className='container'>
      <Dialog modal open={open} onOpenChange={openDialogMenu}>
        <DialogContent className='max-w-7xl rounded-md p-0 sm:p-2'>
          <Image
            key={id}
            src={src}
            quality={100}
            priority
            alt={title}
            width={1920}
            height={1080}
            className='rounded-md object-contain'
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ModalImageVisualization
