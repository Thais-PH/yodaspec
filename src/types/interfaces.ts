export interface IProject {
  _id?: string
  title: string
  description: string
  createdAt?: Date
  updatedAt?: Date
  // step5: {
  //   features: IFeature[]
  // }
}

export interface IFeature {
  _id?: string
  title: string
  description: string
  isValidate: boolean
  isTempValidate?: boolean
}
