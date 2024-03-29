import Image from 'next/image'
import { Dialog, DialogContent } from '../ui/dialog'

interface ModalImageVisualizationProps {
  open: boolean
  openDialogMenu: () => void
  id: string
  src: string
  title: string
}

export const ModalImageVisualization = ({
  open,
  openDialogMenu,
  id,
  src,
  title,
}: ModalImageVisualizationProps) => {
  return (
    <div className='fixed'>
      <Dialog modal open={open} onOpenChange={openDialogMenu}>
        <DialogContent className='max-w-7xl rounded-md p-0'>
          <Image
            key={id}
            src={src}
            alt={title}
            priority
            quality={100}
            width={1920}
            height={1080}
            className='aspect-video rounded-md object-contain'
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}
