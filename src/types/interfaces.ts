export interface IProject {
  _id?: string
  title: string
  description: string
  features?: IFeature[]
  // step5?: {
  //   features: IFeature[]
  // }
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
  isValidate: boolean
}

export interface IUseSelectionProps<T> {
  items: T[]
  idGetter: (item: T) => string
}

export interface IUseSelectionReturn<T> {
  isSelected: (item: T) => boolean
  getSelectedItems: () => T[]
  areAllSelected: () => boolean
  resetSelection: () => void
  toggleItem: (item: T) => void
  toggleAll: () => void
}

export interface IStep5PageProps {
  params: { projectId: string }
}
