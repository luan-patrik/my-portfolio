import { Skeleton } from '@/components/ui/skeleton'
import { Children } from 'react'

export default function Loading() {
  return (
    <div className='container flex min-h-[calc(100svh_-_92px)] items-center justify-center'>
      <div className='grid max-w-5xl flex-1 grid-cols-1 place-content-center gap-4 md:grid-cols-2'>
        {Children.toArray(
          Array.from({ length: 4 }).map(() => (
            <div className='flex h-full w-full flex-col justify-between space-y-4 overflow-hidden rounded-md border p-2'>
              <div className='space-y-4'>
                <Skeleton className='h-8 w-1/3' />
                <div className='space-y-2'>
                  <Skeleton className='h-4 w-full' />
                  <Skeleton className='h-4 w-full' />
                  <Skeleton className='h-4 w-full' />
                  <Skeleton className='h-4 w-full' />
                  <Skeleton className='h-4 w-full' />
                </div>
              </div>
              <div className='space-y-4'>
                <div className='flex flex-col gap-2 sm:flex-row md:flex-col lg:flex-row'>
                  <Skeleton className='h-8 w-full' />
                  <Skeleton className='h-8 w-full' />
                </div>
                <Skeleton className='aspect-video h-auto w-full' />
              </div>
            </div>
          )),
        )}
      </div>
    </div>
  )
}
