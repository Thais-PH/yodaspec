import { TableCell, TableRow } from '@/components/ui/table'
import ToggleValidateFeature from '../toggles/toggle-validate-feature'
import ActionTableButton from '../buttons/action-table-button'
import { IFeature } from '@/types/interfaces'
import { Checkbox } from '@/components/ui/checkbox'
import { useState } from 'react'

function FeatureTableItem ({ checked, feature, onCheckedChange }: Readonly<{ checked?: boolean, feature: IFeature, onCheckedChange?: () => void }>): React.ReactNode {
  const [isTempValidate, setIsTempValidate] = useState(false)

  return (
    <TableRow
      className={`transition hover:bg-surface-light-20 dark:hover:bg-surface-20 ${
        isTempValidate ? '!border-l-3 border-b-0 border-primary' : ''
      }`}
    >
      <TableCell className='pl-8'>
        <Checkbox checked={checked} onCheckedChange={onCheckedChange} />
      </TableCell>
      <TableCell>
        <ToggleValidateFeature
          isChecked={isTempValidate}
          onChange={setIsTempValidate}
        />
      </TableCell>
      <TableCell className='pl-8 font-medium text-black dark:text-white'>
        {feature.title}
      </TableCell>
      <TableCell className='pl-4 text-sm text-black dark:text-white'>
        {feature.description.slice(0, 80)}...
      </TableCell>
      <TableCell>
        <ActionTableButton icon='Pencil' />
      </TableCell>
    </TableRow>
  )
}

export default FeatureTableItem
