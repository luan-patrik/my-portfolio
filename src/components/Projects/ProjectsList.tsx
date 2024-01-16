import { useGetProjects } from '@/hooks/use-get-projects'
import { revalidateTag } from 'next/cache'
import Project from './Project'

const ProjectsList = async () => {
  const posts = await useGetProjects()

  if (!posts) return

  revalidateTag('projects')

  return (
    <section className='container flex min-h-[calc(100svh_-_92px)] items-center justify-center'>
      <div className='grid max-w-5xl grid-cols-1 place-content-center gap-4 md:grid-cols-2'>
        {posts.map((post) => (
          <Project key={post.id} {...post} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsList
