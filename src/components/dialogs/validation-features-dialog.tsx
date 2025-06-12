'use client'

import { Check, Loader2, Undo } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogClose } from '../ui/dialog'
import { IFeature } from '@/types/interfaces'
import { Button } from '../ui/button'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface ValidationFeaturesDialogProps {
  tempValidateFeatures: IFeature[]
  validateFeatures: (features: IFeature[]) => Promise<void>
  projectId: string
}

function ValidationFeaturesDialog ({
  projectId,
  tempValidateFeatures,
  validateFeatures
}: Readonly<ValidationFeaturesDialogProps>): React.ReactNode {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    try {
      setIsLoading(true)
      await validateFeatures(tempValidateFeatures)
      toast.success('Fonctionnalités validées avec succès')
      router.push(`/project/${projectId}/step6`)
    } catch (error) {
      console.error('Error validating features:', error)
      toast.error('Erreur lors de la validation des fonctionnalités')
    } finally {
      setIsLoading(false)
    }
  }

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

        <form onSubmit={(e) => { void handleSubmit(e) }}>
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

          <div className='mt-8 flex flex-col items-stretch sm:flex-row gap-4 justify-end'>
            <DialogClose
              className='flex cursor-pointer h-auto w-full gap-2 items-center disabled:opacity-50 px-6 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors'
              disabled={isLoading}
            >
              <Undo className='h-5 w-5' />
              Annuler
            </DialogClose>
            <Button
              type='submit'
              className='flex items-center h-auto disabled:opacity-50 text-nowrap cursor-pointer gap-2 px-6 py-2.5 bg-primary hover:bg-primary-10 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white rounded-lg transition-colors'
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className='w-5 h-5 mr-2 animate-spin' /> : <Check className='h-5 w-5' />}
              Confirmer et passer à l'étape suivante
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default ValidationFeaturesDialog
