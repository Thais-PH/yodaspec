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
  _id: string
  title: string
  description: string
  isValidate: boolean
  isTempValidate?: boolean
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
