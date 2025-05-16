import { getProjectById } from '@/lib/db/services/project-service'
import { redirect } from 'next/navigation'

async function ProjectHome (props: Readonly<{ params: Promise<{ projectId: string }> }>): Promise<React.ReactNode> {
  const { projectId } = await props.params

  const project = await getProjectById(projectId)

  if (project === null) {
    return redirect('/')
  }

  return (
    <div>
      <h1>Project {project.title}</h1>
      <p>{project.description}</p>
    </div>
  )
}

export default ProjectHome
