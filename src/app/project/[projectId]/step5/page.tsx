import UpdateProjectDialog from '@/components/dialogs/update-project'
import { updateProject } from '@/actions/update-project-actions'

async function Step5 (): Promise<React.ReactNode> {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-[32px] row-start-2 items-center'>
        <UpdateProjectDialog updateProject={updateProject} />
      </main>
    </div>
  )
}

export default Step5
