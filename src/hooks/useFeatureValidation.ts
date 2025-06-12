import { useState } from 'react'
import { IFeature } from '@/types/interfaces'
import { useSelection } from '@/hooks/useSelection'

interface IUseFeatureValidation {
  handleToggleTempValidation: (feature: IFeature) => void
  handleToggleTempSelectedValidation: (features: IFeature[]) => void
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

  return {
    handleToggleTempValidation,
    handleToggleTempSelectedValidation,
    tempValidateFeatures
  }
}
