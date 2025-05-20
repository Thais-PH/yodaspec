'use client'

import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'
import { IFeature } from '@/types/interfaces'
import FeatureTableItem from './feature-table-item'
import { useSelection } from '@/hooks/useSelection'

function FeaturesTable ({ features = [] }: Readonly<{ features: IFeature[] }>): React.ReactNode {
  const {
    isSelected,
    areAllSelected,
    toggleItem,
    toggleAll
  } = useSelection<IFeature>({
    items: features,
    idGetter: (feature) => feature._id
  })

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
            />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default FeaturesTable
