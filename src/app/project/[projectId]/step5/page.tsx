import { updateProject } from '@/actions/update-project-actions'
import StepBackButton from '@/components/buttons/step-back-button'
import { IFeature, IProject, IStep5PageProps } from '@/types/interfaces'
import BlockManualValidation from '@/components/blocks/block-manual-validation'
import { validateFeatures, deleteFeatures } from '@/actions/feature-actions'
import { getProjectById } from '@/db/services/project-service'
import { redirect } from 'next/navigation'
// import { getFeatures } from '@/db/services/feature-service'
async function Step5 ({ params }: Readonly<IStep5PageProps>): Promise<React.ReactNode> {
  const { projectId } = await params
  const project: IProject | null = await getProjectById(projectId)
  const features: IFeature[] | undefined = project?.step5

  if (project === null || features === undefined || features.length === 0) {
    return redirect('/')
  }

  return (
    <div className='flex flex-col gap-6 w-full'>
      <StepBackButton />
      <h1 className='text-3xl font-extrabold text-center dark:text-white text-black'>
        Validation de vos Spécifications
      </h1>
      <BlockManualValidation projectId={projectId} updateProject={updateProject} validateFeatures={validateFeatures} deleteFeatures={deleteFeatures} features={features} />
    </div>
  )
}

export default Step5
