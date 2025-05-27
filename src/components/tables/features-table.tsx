'use client'

import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'
import { IFeature } from '@/types/interfaces'
import FeatureTableItem from './feature-table-item'

function FeaturesTable ({
  features = [],
  isSelected,
  areAllSelected,
  toggleItem,
  toggleAll,
  tempValidateFeatures,
  handleToggleTempValidation
}: Readonly<{
  features: IFeature[]
  tempValidateFeatures: IFeature[]
  isSelected: (item: IFeature) => boolean
  areAllSelected: () => boolean
  toggleItem: (item: IFeature) => void
  toggleAll: () => void
  handleToggleTempValidation: (feature: IFeature) => void
}>): React.ReactNode {
  const handleGlobalCheckboxChange = (): void => {
    toggleAll()
  }

  const handleCheckboxChange = (feature: IFeature): void => {
    toggleItem(feature)
  }

  return (
    <div className='border rounded-xl overflow-hidden mt-6 mb-10 shadow-sm'>
      <Table>
        <TableHeader>
          <TableRow className='bg-surface-light-20 dark:bg-surface-20 border-b border-surface-light-30 dark:border-surface-30 hover:bg-surface-light-20 dark:hover:bg-surface-20'>
            <TableHead className='pl-8'>
              <Checkbox
                className='cursor-pointer'
                onCheckedChange={handleGlobalCheckboxChange}
                checked={areAllSelected()}
              />
            </TableHead>
            <TableHead>Validation</TableHead>
            <TableHead className='pl-8'>Nom de la fonctionnalité</TableHead>
            <TableHead className='pl-4'>Description</TableHead>
            <TableHead className='pl-4'>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature, key) => (
            <FeatureTableItem
              key={key}
              feature={feature}
              checked={isSelected(feature)}
              onCheckedChange={() => handleCheckboxChange(feature)}
              isTempValidate={tempValidateFeatures.some(
                (tempFeature) =>
                  (tempFeature._id ?? tempFeature.title) ===
                  (feature._id ?? feature.title)
              )}
              handleToggleTempValidation={() =>
                handleToggleTempValidation(feature)}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default FeaturesTable
