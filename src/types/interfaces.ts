export interface IProject {
  _id?: string
  title: string
  description: string
  features?: IFeature[]
  createdAt?: Date
  updatedAt?: Date
  // step5: {
  //   features: IFeature[]
  // }
}

export interface IFeature {
  _id?: string
  idProject: string
  title: string
  description: string
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
