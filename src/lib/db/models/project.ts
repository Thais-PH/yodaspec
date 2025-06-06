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
  }
// step5: {
//     features: [
//       {
//         relatedTo: {
//           type: Schema.Types.ObjectId,
//           ref: 'Feature'
//         }
//       }
//     ]
//   }
}, {
  timestamps: true
})

const Project = mongoose.models.Project !== undefined
  ? mongoose.models.Project
  : mongoose
    . model<IProject>('Project', ProjectSchema)

export default Project
