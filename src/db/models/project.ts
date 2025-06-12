import { IProject } from '@/types/interfaces'
import mongoose, { Schema } from 'mongoose'

const ProjectSchema = new Schema<IProject>({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  step5: [{ type: Schema.Types.Mixed }]
}, {
  timestamps: true
})

const Project = mongoose.models.Project
  ? (mongoose.models.Project as mongoose.Model<IProject>)
  : mongoose.model<IProject>('Project', ProjectSchema)

export default Project
