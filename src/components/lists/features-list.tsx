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
      <div className='flex justify-between mx-4'>
        <p>Nombre de spécifications ({features.length})</p>
        <span className='flex gap-8'>
          <Check />
          <Trash2 />
        </span>
      </div>
      <FeaturesTable features={features} />
      <div className='flex justify-end'>
        <Button variant='secondary' className='cursor-pointer bg-blue-700 hover:bg-blue-600 transition-all duration-300'>
          Valider les fonctionnalités
        </Button>
      </div>
    </div>
  )
}

export default FeaturesList
