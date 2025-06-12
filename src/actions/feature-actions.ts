import { IFeature } from '@/types/interfaces'
import { connect, disconnect } from '@/lib/db'
import Project from '@/db/models/project'
import { revalidatePath } from 'next/cache'

const validateFeatures = async (projectId: string, features: IFeature[]): Promise<void> => {
  'use server'
  await connect()
  console.log('Validating features:', features)

  await Project.updateMany(
    { _id: projectId },
    { $set: { step5: features.map(feature => ({ ...feature, isValidate: true })) } }
  )
  await disconnect()
}

const deleteFeatures = async (features: IFeature[], projectId: string): Promise<void> => {
  'use server'
  await connect()
  await Project.updateOne(
    { _id: projectId },
    { $pull: { step5: { title: { $in: features.map(f => f.title) } } } }
  )
  revalidatePath(`/project/${projectId}/step5`)
  await disconnect()
}

export {
  validateFeatures,
  deleteFeatures
}
