import { TableCell, TableRow } from '@/components/ui/table'
import ToggleValidateFeature from '../toggles/toggle-validate-feature'
import ActionTableButton from '../buttons/action-table-button'
import { IFeature } from '@/types/interfaces'
import { Checkbox } from '@/components/ui/checkbox'

function FeatureTableItem ({ checked, feature, onCheckedChange }: Readonly<{ checked?: boolean, feature: IFeature, onCheckedChange?: () => void }>): React.ReactNode {
  return (
    <TableRow>
      <TableCell className='w-1/12 pl-8'>
        <Checkbox checked={checked} onCheckedChange={onCheckedChange} />
      </TableCell>
      <TableCell className='w-1/12'>
        <ToggleValidateFeature />
      </TableCell>
      <TableCell className='w-2/12 pl-16'>
        {feature.title}
      </TableCell>
      <TableCell className='w-6/12 pl-4'>
        <p>
          {feature.description.slice(0, 50)}
        </p>
      </TableCell>
      <TableCell className='w-1/12'>
        <ActionTableButton icon='Pencil' />
      </TableCell>
    </TableRow>
  )
}

export default FeatureTableItem
