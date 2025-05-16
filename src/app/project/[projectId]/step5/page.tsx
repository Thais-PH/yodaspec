import StepBackButton from '@/components/buttons/step-back-button'
import FeaturesList from '@/components/lists/features-list'

function Step5 (): React.ReactNode {
  return (
    <div className='flex flex-col gap-4 w-full'>
      <StepBackButton />
      <h1 className='text-2xl mb-16 text-center font-bold'>Validation de vos Spécifications</h1>
      <FeaturesList />
    </div>
  )
}

export default Step5
