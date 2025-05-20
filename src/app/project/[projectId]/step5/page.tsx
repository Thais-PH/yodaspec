import StepBackButton from '@/components/buttons/step-back-button'
import mockFeatures from '@/data/mock-features'
import { IFeature } from '@/types/interfaces'
import BlockManualValidation from '@/components/blocks/block-manual-validation'

function Step5 (): React.ReactNode {
  //   const features: IFeature[] = await getFeatures()
  const features: IFeature[] = mockFeatures

  return (
    <div className='flex flex-col gap-6 w-full'>
      <StepBackButton />
      <h1 className='text-3xl font-extrabold text-center dark:text-white text-black'>
        Validation de vos Spécifications
      </h1>
      <BlockManualValidation features={features} />
    </div>
  )
}

export default Step5
