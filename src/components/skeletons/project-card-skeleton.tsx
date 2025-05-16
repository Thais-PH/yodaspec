import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ProjectCardSkeleton (): React.ReactNode {
  return (
    <Card className='w-[240px]'>
      <CardHeader>
        <CardTitle>
          <Skeleton className='h-6 w-[200px]' />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Skeleton className='h-4 w-[200px]' />
      </CardContent>
    </Card>
  )
}

function ProjectsListSkeleton ({ count = 4 }: Readonly<{ count?: number }>): React.ReactNode {
  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>Projets</h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {
        Array.from({ length: count }).map((_, index) => (
          <ProjectCardSkeleton key={index} />
        ))
        }
      </div>
    </div>
  )
}

export {
  ProjectCardSkeleton,
  ProjectsListSkeleton
}
