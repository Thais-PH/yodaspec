import { connect } from '@/lib/db'
import { IProject } from '@/types/interfaces'
import { Model } from 'mongoose'
import Project from '../models/project'

const getProjects = async (): Promise<IProject[]> => {
  await connect()
  try {
    const projects = await (Project as Model<IProject>).find().lean().exec()
    return projects
  } catch (error) {
    console.error(error)
    return []
  }
}

export {
  getProjects
}
