import { projectsData } from '@/lib/data'
import Project from '@/components/Project'
import { Locale } from '@/i18n.config'

const Curriculum = ({ lang }: { lang: Locale }) => {
  return (
    <div className="container">
      <div className="flex min-h-[calc(100vh_-_3.5rem)] flex-col justify-center">
        {projectsData.map((project, i) => (
          <div key={i}>
            <Project
              key={i}
              title={project.title}
              description={project.description}
              website={project.website}
              repository={project.repository}
              img={project.img}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Curriculum
