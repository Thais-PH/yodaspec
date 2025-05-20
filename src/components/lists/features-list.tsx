import { Check, Trash2 } from 'lucide-react'
import FeaturesTable from '../tables/features-table'
import { Button } from '../ui/button'
import { IFeature } from '@/types/interfaces'
import mockFeatures from '@/data/mock-features'

async function FeaturesList (): Promise<React.ReactNode> {
  //   const features: IFeature[] = await getFeatures()
  const features: IFeature[] = mockFeatures

  return (
    <div className='w-full'>
      <div className='flex items-center justify-between p-4 rounded-lg bg-surface-light-20 dark:bg-surface-20 border'>
        <p className='text-sm text-black dark:text-white font-medium'>Nombre de spécifications : <span className='font-bold'>{features.length}</span></p>
        <div className='flex gap-4 text-black dark:text-white'>
          <Check className='w-5 h-5 cursor-pointer hover:text-indigo-800 dark:hover:text-indigo-200 transition' />
          <Trash2 className='w-5 h-5 cursor-pointer hover:text-red-500 transition' />
        </div>
      </div>

      <FeaturesTable features={features} />

      <div className='flex justify-end mt-6'>
        <Button className='bg-indigo-600 hover:bg-indigo-700 cursor-pointer transition text-white font-semibold shadow px-6 py-2 rounded-lg'>
          Valider les fonctionnalités
        </Button>
      </div>
    </div>
  )
}

export default FeaturesList
