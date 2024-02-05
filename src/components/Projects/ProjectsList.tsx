import { useGetProjects } from '@/hooks/use-get-projects'
import { revalidateTag } from 'next/cache'
import { BentoGridContent } from '../ui/bento-grid'
import { HoverEffect } from '../ui/card-hover-effect'

export const ProjectsList = async () => {
  const posts = await useGetProjects()

  revalidateTag('projects')

  return (
    <BentoGridContent className='col-span-2 lg:row-start-2'>
      <div className='grid grid-cols-1 xl:grid-cols-2'>
        {posts &&
          posts.map((post) => (
            <HoverEffect key={post.id} length={posts.length} items={[post]} />
          ))}
      </div>
    </BentoGridContent>
  )
}
