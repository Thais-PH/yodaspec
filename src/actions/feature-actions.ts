import { IFeature } from '@/types/interfaces'
import Feature from '@/db/models/features'
import { connect, disconnect } from '@/lib/db'

const validateFeatures = async (features: IFeature[]): Promise<void> => {
  'use server'
  await connect()
  console.log('Validating features:', features)
  try {
    await Feature.updateMany(
      { _id: { $in: features.map(feature => feature._id) } },
      { $set: { isValidate: true } }
    )
  } catch (error) {
    console.error('Error validating features:', error)
  } finally {
    await disconnect()
  }
}

export {
  validateFeatures
}
