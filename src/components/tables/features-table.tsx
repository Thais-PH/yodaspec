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
    <div className=' border mt-4 mb-8'>
      <Table>
        <TableHeader>
          <TableRow className='bg-[#121212]'>
            <TableHead className='w-1/12 pl-8'>
              <Checkbox onCheckedChange={handleGlobalCheckboxChange} checked={areAllSelected()} />
            </TableHead>
            <TableHead className='w-1/12'>Validation</TableHead>
            <TableHead className='w-4/12 pl-16'>Nom de la fonctionnalité</TableHead>
            <TableHead className='w-5/12 pl-4'>Description</TableHead>
            <TableHead className='w-1/12' />
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            features.map((feature, key) => (
              <FeatureTableItem feature={feature} key={key} checked={isSelected(feature)} onCheckedChange={() => handleCheckboxChange(feature)} />
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default FeaturesTable
