import { IFeature } from '@/types/interfaces'
import mongoose, { Schema } from 'mongoose'

const FeatureSchema = new Schema<IFeature>({
  idProject: {
    type: String,
    ref: 'Projects',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  isValidate: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: true
})

const Feature = mongoose.models.Feature ?? mongoose.model<IFeature>('Feature', FeatureSchema)

export default Feature
