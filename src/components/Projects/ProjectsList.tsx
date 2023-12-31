import Project from '@/components/Projects/Project'
import { projectsData } from '@/lib/data'

const ProjectsList = async () => {
  const projectList = await projectsData()

  return (
    <section className='container'>
      <div className='flex min-h-[calc(100svh_-_5.6rem)] flex-col justify-center gap-6'>
        {projectList.map((project, i) => (
          <Project
            key={i}
            title={project.title}
            description={project.description}
            website={project.website}
            repository={project.repository}
            img={project.img}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsList
