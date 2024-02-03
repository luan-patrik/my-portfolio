import { useGetProjects } from '@/hooks/use-get-projects'
import { cn } from '@/lib/utils'
import { revalidateTag } from 'next/cache'
import { CardTitle, HoverEffect } from '../ui/card-hover-effect'

export const ProjectsList = async () => {
  const posts = await useGetProjects()

  revalidateTag('projects')

  return (
    <div className='flex h-auto flex-col'>
      <CardTitle>Projetos</CardTitle>
      <div
        className={cn(
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2',
        )}
      >
        {posts &&
          posts.map((post) => (
            <HoverEffect key={post.id} length={posts.length} items={[post]} />
          ))}
      </div>
    </div>
  )
}
