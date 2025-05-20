import StepBackButton from '@/components/buttons/step-back-button'
import FeaturesList from '@/components/lists/features-list'

function Step5 (): React.ReactNode {
  return (
    <div className='flex flex-col gap-6 w-full'>
      <StepBackButton />
      <h1 className='text-3xl font-extrabold text-center dark:text-white text-black'>
        Validation de vos Spécifications
      </h1>
      <FeaturesList />
    </div>
  )
}

export default Step5
