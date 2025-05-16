'use client'
import { ArrowLeft } from 'lucide-react'
import { Button } from '../ui/button'

function StepBackButton (): React.ReactNode {
  return (
    <div className='w-full flex'>
      <Button variant='ghost' onClick={() => window.history.back()} className='flex cursor-pointer gap-2'>
        <ArrowLeft className='w-4 h-4' />
        Retour
      </Button>
    </div>
  )
}

export default StepBackButton
