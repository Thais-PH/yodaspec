import StepBackButton from '@/components/buttons/step-back-button'
import { IFeature, IStep5PageProps } from '@/types/interfaces'
import BlockManualValidation from '@/components/blocks/block-manual-validation'
import { getFeaturesByProjectId } from '@/db/services/feature-service'
import { validateFeatures, deleteFeatures } from '@/actions/feature-actions'
async function Step5 ({ params }: Readonly<IStep5PageProps>): Promise<React.ReactNode> {
  const { projectId } = await params
  const features: IFeature[] = await getFeaturesByProjectId(projectId)

  return (
    <div className='flex flex-col gap-6 w-full'>
      <StepBackButton />
      <h1 className='text-3xl font-extrabold text-center dark:text-white text-black'>
        Validation de vos Spécifications
      </h1>
      <BlockManualValidation projectId={projectId} validateFeatures={validateFeatures} deleteFeatures={deleteFeatures} features={features} />
    </div>
  )
}

export default Step5
