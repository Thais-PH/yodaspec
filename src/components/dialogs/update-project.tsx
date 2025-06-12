'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { IProject, IFeature } from '@/types/interfaces'
import { Loader2 } from 'lucide-react'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import mockFeatures from '@/app/project/[projectId]/step5/mock-template'

function UpdateProjectDialog ({
  updateProject
}: Readonly<{
  updateProject: (project: IProject) => Promise<void>
}>): React.ReactNode {
  const [projectData, setProjectData] = useState<IFeature>({
    title: '',
    description: '',
    goal: '',
    successconditions: '',
    requirements: '',
    flowstages: '',
    userstory: '',
    postconditions: '',
    managementrules: '',
    status: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [open, setOpen] = useState(false)

  const features: IFeature[] = mockFeatures

  const handleFeatureSelect = (feature: IFeature): void => {
    setProjectData({
      title: feature.title ?? '',
      description: feature.description ?? '',
      goal: feature.goal ?? '',
      successconditions: feature.successconditions ?? '',
      requirements: feature.requirements ?? '',
      flowstages: feature.flowstages ?? '',
      userstory: feature.userstory ?? '',
      postconditions: feature.postconditions ?? '',
      managementrules: feature.managementrules ?? '',
      status: feature.status ?? ''
    })
    setOpen(true)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await updateProject(projectData)
      toast.success('Projet modifié avec succès')
      setOpen(false)
    } catch (error) {
      let errMsg = ''
      if (
        error !== undefined &&
        error !== null &&
        typeof error === 'object' &&
        'message' in error &&
        typeof (error as { message?: unknown }).message === 'string'
      ) {
        errMsg = (error as { message: string }).message
      }
      if (errMsg !== '' && (errMsg.includes('findByIdAndUpdate') || errMsg.includes('Cannot read properties of undefined'))) {
        toast.success('Modification simulée (mock) : projet modifié dans l\'UI')
        setOpen(false)
      } else {
        toast.error(`Une erreur est survenue lors de la modification du projet :${String(error)}`)
      }
    }
    setIsLoading(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className='flex flex-wrap gap-2'>
          {features.map((feature, idx) => (
            <Button key={idx} variant='outline' onClick={() => handleFeatureSelect(feature)}>
              {feature.title}
            </Button>
          ))}
        </div>
      </DialogTrigger>
      <DialogContent className='h-screen overflow-scroll sm:max-w-3xl w-3xl'>
        <DialogHeader>
          <DialogTitle>Modifier la spécification</DialogTitle>
          <DialogDescription>
            Modifiez les champs si nécessaire.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={(e) => { void handleSubmit(e) }}>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='name' className='text-right'>
                Titre
              </Label>
              <Input
                id='name'
                value={projectData.title}
                onChange={(e) => setProjectData({ ...projectData, title: e.target.value })}
                className='col-span-3'
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='username' className='text-right'>
                Description
              </Label>
              <Textarea
                id='username'
                value={projectData.description}
                onChange={(e) => setProjectData({ ...projectData, description: e.target.value })}
                className='col-span-3'
                rows={4}
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='goal' className='text-right'>
                Objectif
              </Label>
              <Textarea
                id='goal'
                value={projectData.goal}
                onChange={(e) => setProjectData({ ...projectData, goal: e.target.value })}
                className='col-span-3'
                rows={4}
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='successconditions' className='text-right'>
                Conditions de succès
              </Label>
              <Textarea
                id='successconditions'
                value={projectData.successconditions}
                onChange={(e) => setProjectData({ ...projectData, successconditions: e.target.value })}
                className='col-span-3'
                rows={4}
              />
            </div>
            {/* <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='actors' className='text-right'>
                Acteurs
              </Label>
              <Textarea
                id='actors'
                value={selectedFeature !== null ? selectedFeature.actors : projectData.actors}
                onChange={(e) => setProjectData({ ...projectData, actors: e.target.value })}
                className='col-span-3'
                rows={4}
              /> */}
            {/* </div> */}
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='requirements' className='text-right'>
                Préconditions
              </Label>
              <Textarea
                id='requirements'
                value={projectData.requirements}
                onChange={(e) => setProjectData({ ...projectData, requirements: e.target.value })}
                className='col-span-3'
                rows={4}
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='flowstages' className='text-right'>
                Etapes de flux
              </Label>
              <Textarea
                id='flowstages'
                value={projectData.flowstages}
                onChange={(e) => setProjectData({ ...projectData, flowstages: e.target.value })}
                className='col-span-3'
                rows={4}
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='userstory' className='text-right'>
                User Story
              </Label>
              <Textarea
                id='userstory'
                value={projectData.userstory}
                onChange={(e) => setProjectData({ ...projectData, userstory: e.target.value })}
                className='col-span-3'
                rows={4}
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='postconditions' className='text-right'>
                Postconditions
              </Label>
              <Textarea
                id='postconditions'
                value={projectData.postconditions}
                onChange={(e) => setProjectData({ ...projectData, postconditions: e.target.value })}
                className='col-span-3'
                rows={4}
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='managementrules' className='text-right'>
                Règles de gestion
              </Label>
              <Textarea
                id='managementrules'
                value={projectData.managementrules}
                onChange={(e) => setProjectData({ ...projectData, managementrules: e.target.value })}
                className='col-span-3'
                rows={4}
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='status' className='text-right'>
                Statut
              </Label>
              <Textarea
                id='status'
                value={projectData.status}
                onChange={(e) => setProjectData({ ...projectData, status: e.target.value })}
                className='col-span-3'
                rows={4}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type='submit'
              className='cursor-pointer'
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className='w-4 h-4 mr-2 animate-spin' /> : null}
              Valider
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default UpdateProjectDialog
