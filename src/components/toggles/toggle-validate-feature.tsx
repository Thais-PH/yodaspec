import { Toggle } from '@/components/ui/toggle'
import { Check } from 'lucide-react'

function ToggleValidateFeature ({ isChecked, onChange }: Readonly<{ isChecked?: boolean, onChange?: (checked: boolean) => void }>): React.ReactElement {
  return (
    <Toggle className='w-8 h-8' variant='outline' onPressedChange={onChange} pressed={isChecked}>
      <Check className='w-4 h-4' />
    </Toggle>
  )
}

export default ToggleValidateFeature
