import { Toggle } from '@/components/ui/toggle'
import { Check } from 'lucide-react'

function ToggleValidateFeature ({ isChecked, onChange }: Readonly<{ isChecked: boolean, onChange?: () => void }>): React.ReactElement {
  return (
    <Toggle
      className={`w-8 h-8 transition-all duration-150 border-2 ${
        isChecked
          ? 'text-white border-primary hover:bg-primary-10 dark:hover:bg-primary-10'
          : 'dark:hover:bg-primary hover:bg-surface-tonal-light-10'
      }`}
      variant='outline'
      pressed={isChecked}
      onPressedChange={onChange}
    >
      <Check className='size-4' />
    </Toggle>
  )
}

export default ToggleValidateFeature
