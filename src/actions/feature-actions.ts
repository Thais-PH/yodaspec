import { IFeature } from '@/types/interfaces'
import Feature from '@/db/models/features'
import { connect, disconnect } from '@/lib/db'

const validateFeatures = async (features: IFeature[]): Promise<void> => {
  'use server'
  await connect()
  console.log('Validating features:', features)
  await Feature.updateMany(
    { _id: { $in: features.map(feature => feature._id) } },
    { $set: { isValidate: true } }
  )
  await disconnect()
}

const deleteFeatures = async (features: IFeature[]): Promise<void> => {
  'use server'
  await connect()
  await Feature.deleteMany({ _id: { $in: features.map(feature => feature._id) } })
  await disconnect()
}

export {
  validateFeatures,
  deleteFeatures
}
