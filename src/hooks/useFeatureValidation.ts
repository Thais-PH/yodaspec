import { useState } from 'react'
import { IFeature } from '@/types/interfaces'
import { useSelection } from '@/hooks/useSelection'

interface IUseFeatureValidation {
  handleToggleTempValidation: (feature: IFeature) => void
  handleToggleTempSelectedValidation: (features: IFeature[]) => void
  handleFeatureDelete: () => void
  handleFeatureValidate: () => void
  tempValidateFeatures: IFeature[]
}

export function useFeatureValidation (features: IFeature[]): IUseFeatureValidation {
  const {
    resetSelection
  } = useSelection<IFeature>({
    items: features,
    idGetter: (feature) => feature._id ?? feature.title
  })

  const [tempValidateFeatures, setTempValidateFeatures] = useState<IFeature[]>([])

  const handleToggleTempValidation = (feature: IFeature): void => {
    const isAlreadyTempValidated = tempValidateFeatures.some(f => (f._id ?? f.title) === (feature._id ?? feature.title))

    const newTempValidateFeatures = isAlreadyTempValidated
      ? tempValidateFeatures.filter(f => (f._id ?? f.title) !== (feature._id ?? feature.title))
      : [...tempValidateFeatures, feature]

    setTempValidateFeatures(newTempValidateFeatures)
  }

  const handleToggleTempSelectedValidation = (features: IFeature[]): void => {
    const newTempValidateFeatures = features.filter(
      feature => !tempValidateFeatures.some(
        tempFeature => (tempFeature._id ?? tempFeature.title) === (feature._id ?? feature.title)
      )
    )
    setTempValidateFeatures([...tempValidateFeatures, ...newTempValidateFeatures])
    resetSelection()
  }

  const handleFeatureDelete = (): void => {
    // TODO Suppression en BDD + Step6
  }

  const handleFeatureValidate = (): void => {
    // TODO Validation en BDD + Step6

  }

  return {
    handleToggleTempValidation,
    handleToggleTempSelectedValidation,
    handleFeatureDelete,
    handleFeatureValidate,
    tempValidateFeatures
  }
}
