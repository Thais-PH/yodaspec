'use client'
import { Check, Trash2 } from 'lucide-react'
import FeaturesTable from '../tables/features-table'
import { Button } from '../ui/button'
import { IFeature } from '@/types/interfaces'
import { useSelection } from '@/hooks/useSelection'
import { useFeatureValidation } from '@/hooks/useFeatureValidation'
import ValidationFeaturesDialog from '../dialogs/validation-features-dialog'
import { toast } from 'react-toastify'
import { useParams } from 'next/navigation'

function BlockManualValidation ({ features, validateFeatures, deleteFeatures }: Readonly<{ features: IFeature[], validateFeatures: (features: IFeature[]) => Promise<void>, deleteFeatures: (features: IFeature[]) => Promise<void> }>): React.ReactNode {
  const params = useParams()
  const projectId = params.projectId as string

  // Hooks to handle selection in table
  const { isSelected, areAllSelected, toggleItem, toggleAll, getSelectedItems } =
    useSelection<IFeature>({
      items: features,
      idGetter: (feature) => feature._id ?? feature.title
    })

  // Hooks to handle validation of features
  const {
    handleToggleTempSelectedValidation,
    handleToggleTempValidation,
    tempValidateFeatures
  } = useFeatureValidation(features)

  const handleDeleteFeatures = async (): Promise<void> => {
    try {
      await deleteFeatures(getSelectedItems())
      toast.success('Spécifications supprimées avec succès')
    } catch (error) {
      console.error('Error deleting features:', error)
      toast.error('Erreur lors de la suppression des spécifications')
    }
  }

  return (
    <div className='w-full'>
      <div className='flex items-center justify-between p-4 rounded-lg bg-surface-light-20 dark:bg-surface-20 border'>
        <p className='text-sm text-black dark:text-white font-medium'>
          Nombre de spécifications :
          <span className='font-bold'> {features.length}</span>
        </p>
        <div className='flex gap-4 text-black dark:text-white'>
          <Button
            disabled={getSelectedItems().length === 0}
            variant='outline'
            onClick={() => handleToggleTempSelectedValidation(getSelectedItems())}
            className=' hover:text-primary-10 dark:hover:text-primary-10 hover:bg-white dark:hover:bg-surface-20 transition cursor-pointer'
          >
            <Check className='w-5 h-5' />
          </Button>
          <Button
            disabled={getSelectedItems().length === 0}
            onClick={() => { void handleDeleteFeatures() }}
            variant='outline'
            className='cursor-pointer hover:text-red-500 hover:bg-white dark:hover:bg-surface-20 transition'
          >
            <Trash2 className='w-5 h-5' />
          </Button>
        </div>
      </div>

      <FeaturesTable
        features={features}
        isSelected={isSelected}
        areAllSelected={areAllSelected}
        toggleItem={toggleItem}
        toggleAll={toggleAll}
        tempValidateFeatures={tempValidateFeatures}
        handleToggleTempValidation={handleToggleTempValidation}
      />

      <div className='flex justify-end mt-6'>
        <ValidationFeaturesDialog projectId={projectId} validateFeatures={validateFeatures} tempValidateFeatures={tempValidateFeatures} />
      </div>
    </div>
  )
}

export default BlockManualValidation
