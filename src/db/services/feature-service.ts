import { disconnect, connect } from '@/lib/db'
import { IFeature } from '@/types/interfaces'
import Feature from '../models/features'
import { Model } from 'mongoose'

const getFeatures = async (): Promise<IFeature[]> => {
  await connect()
  try {
    const _features = await (Feature as Model<IFeature>).find().lean().exec()
    const features = JSON.parse(JSON.stringify(_features))
    return features
  } catch (error) {
    console.error(error)
    return []
  } finally {
    await disconnect()
  }
}

const getFeaturesByProjectId = async (projectId: string): Promise<IFeature[]> => {
  await connect()
  try {
    const _features = await (Feature as Model<IFeature>).find({ idProject: projectId }).lean().exec()
    const features = JSON.parse(JSON.stringify(_features))
    return features
  } catch (error) {
    console.error(error)
    return []
  } finally {
    await disconnect()
  }
}

export {
  getFeatures,
  getFeaturesByProjectId
}
