'use client'

import { Check, Pencil, Trash2 } from 'lucide-react'

const iconComponents = {
  Pencil: <Pencil className='w-5 h-5 hover:text-blue-500 transition-all duration-300' />,
  Trash: <Trash2 className='w-5 h-5 hover:text-blue-500 transition-all duration-300' />,
  Check: <Check className='w-5 h-5 hover:text-blue-500 transition-all duration-300' />
}

function ActionTableButton ({ onClick, icon }: Readonly<{ onClick?: () => void, icon: string }>): React.ReactNode {
  return (
    <button className='cursor-pointer mt-1 mx-4' onClick={onClick}>
      {icon in iconComponents ? iconComponents[icon as keyof typeof iconComponents] : null}
    </button>
  )
}

export default ActionTableButton
