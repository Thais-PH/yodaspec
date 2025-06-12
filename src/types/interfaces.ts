export interface IProject {
  _id?: string
  title: string
  description: string
  createdAt?: Date
  updatedAt?: Date
}

export interface IFeature {
  _id?: string
  title: string
  description: string
  goal: string
  successconditions: string
  actors?: object[]
  requirements: string
  flowstages: string
  userstory: string
  postconditions: string
  managementrules: string
  status: string
}
