import { projectsData } from '@/lib/data'
import Project from '@/components/Projects/Project'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

const ProjectsList = async ({ lang }: { lang: Locale }) => {
  const { page } = await getDictionary(lang)
  const projectList = await projectsData({ lang })

  return (
    <section className="container">
      <div className="flex min-h-[calc(100svh_-_5.6rem)] flex-col justify-center gap-6">
        {projectList.map((project, i) => (
          <Project
            key={i}
            title={project.title}
            description={project.description}
            website={project.website}
            repository={project.repository}
            img={project.img}
            dictionary={page.projects}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsList
