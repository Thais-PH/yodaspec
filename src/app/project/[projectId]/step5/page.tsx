import StepBackButton from '@/components/buttons/step-back-button'
import { IFeature } from '@/types/interfaces'
import BlockManualValidation from '@/components/blocks/block-manual-validation'
import { getFeatures } from '@/db/services/feature-service'
import { validateFeatures } from '@/actions/feature-actions'

async function Step5 (): Promise<React.ReactNode> {
  const features: IFeature[] = await getFeatures()

  return (
    <div className='flex flex-col gap-6 w-full'>
      <StepBackButton />
      <h1 className='text-3xl font-extrabold text-center dark:text-white text-black'>
        Validation de vos Spécifications
      </h1>
      <BlockManualValidation validateFeatures={validateFeatures} features={features} />
    </div>
  )
}

export default Step5
