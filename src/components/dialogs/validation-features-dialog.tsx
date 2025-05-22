import { Check, Undo } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogClose } from '../ui/dialog'
import { IFeature } from '@/types/interfaces'

interface ValidationFeaturesDialogProps {
  tempValidateFeatures: IFeature[]
  // onConfirm: () => void
  // onUndo: () => void
}

function ValidationFeaturesDialog ({
  tempValidateFeatures
  // onConfirm,
  // onUndo
}: Readonly<ValidationFeaturesDialogProps>): React.ReactNode {
  return (
    <Dialog>
      <DialogTrigger
        className={`bg-primary hover:bg-primary-10 dark:bg-indigo-600 dark:hover:bg-indigo-700 cursor-pointer transition text-white font-semibold shadow px-6 py-2 rounded-lg ${
          tempValidateFeatures.length === 0 ? 'opacity-50' : ''
        }`}
        disabled={tempValidateFeatures.length === 0}
      >
        Valider les fonctionnalités
      </DialogTrigger>
      <DialogContent className='max-w-full min-w-fit bg-surface-light dark:bg-surface border-surface-light-20 dark:border-surface-20'>
        <DialogHeader>
          <DialogTitle className='text-xl font-bold'>
            Validation de vos fonctionnalités
          </DialogTitle>
          <DialogDescription className='text-gray-600'>
            Vérifiez la liste des fonctionnalités que vous souhaitez valider
          </DialogDescription>
        </DialogHeader>

        <div className='mt-6 space-y-4'>
          {tempValidateFeatures.map((feature) => (
            <div
              key={feature._id ?? feature.title}
              className='flex items-center gap-3 p-4 bg-surface-light-10 dark:bg-surface-10 rounded-lg shadow-sm border border-surface-light-10 dark:border-surface-30'
            >
              <Check className='h-5 w-5 text-primary' />
              <span className='font-medium text-black dark:text-white'>{feature.title}</span>
            </div>
          ))}
        </div>

        <div className='mt-8 flex flex-col sm:flex-row gap-4 justify-end'>
          <DialogClose
            className='flex items-center cursor-pointer gap-2 px-6 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors'
          >
            <Undo className='h-5 w-5' />
            Annuler
          </DialogClose>
          <button
            // onClick={onConfirm}
            className='flex items-center text-nowrap cursor-pointer gap-2 px-6 py-2.5 bg-primary hover:bg-primary-10 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white rounded-lg transition-colors'
          >
            <Check className='h-5 w-5' />
            Confirmer et passer à l'étape suivante
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ValidationFeaturesDialog
