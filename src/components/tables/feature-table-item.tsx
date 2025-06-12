import { TableCell, TableRow } from '@/components/ui/table'
import ToggleValidateFeature from '../toggles/toggle-validate-feature'
import { IFeature, IProject } from '@/types/interfaces'
import { Checkbox } from '@/components/ui/checkbox'
import UpdateProjectDialog from '../dialogs/update-project'

function FeatureTableItem ({ checked, feature, onCheckedChange, isTempValidate, handleToggleTempValidation, updateProject }: Readonly<{ checked?: boolean, feature: IFeature, onCheckedChange?: () => void, isTempValidate?: boolean, handleToggleTempValidation?: () => void, updateProject: (project: IProject) => Promise<void> }>): React.ReactNode {
  return (
    <TableRow
      className={`transition hover:bg-surface-light-20 dark:hover:bg-surface-20 ${
        (isTempValidate ?? false) ? '!border-l-3 border-b-0 border-primary' : ''
      }`}
    >
      <TableCell className='pl-8'>
        <Checkbox className='cursor-pointer' checked={checked} onCheckedChange={onCheckedChange} />
      </TableCell>
      <TableCell>
        <ToggleValidateFeature
          isChecked={isTempValidate ?? false}
          onChange={handleToggleTempValidation}
        />
      </TableCell>
      <TableCell className='pl-8 font-medium text-black dark:text-white'>
        {feature.title}
      </TableCell>
      <TableCell className='pl-4 text-sm text-black dark:text-white'>
        {feature.description.slice(0, 80)}...
      </TableCell>
      <TableCell>
        <UpdateProjectDialog updateProject={updateProject} feature={feature} />
      </TableCell>
    </TableRow>
  )
}

export default FeatureTableItem
