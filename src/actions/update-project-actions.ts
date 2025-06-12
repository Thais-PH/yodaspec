import Project from '@/lib/db/models/project'
import { IProject } from '@/types/interfaces'
import { connect, disconnect } from '@/lib/db'
import { revalidatePath } from 'next/cache'

const updateProject = async (project: IProject): Promise<void> => {
  'use server'
  await connect()
  const _project = new Project(project)
  await _project.Project.findByIdAndUpdate()
  revalidatePath('/')
  await disconnect()
}

export {
  updateProject
}
