import { Table, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'
import { IFeature } from '@/types/interfaces'
import FeaturesTableBody from './features-table-body'

function FeaturesTable ({ features = [] }: Readonly<{ features: IFeature[] }>): React.ReactNode {
  return (
    <div className=' border mt-4 mb-8'>
      <Table>
        <TableHeader>
          <TableRow className='bg-[#121212]'>
            <TableHead className='w-1/12 pl-8'>
              <Checkbox />
            </TableHead>
            <TableHead className='w-1/12'>Validation</TableHead>
            <TableHead className='w-4/12 pl-16'>Nom de la fonctionnalité</TableHead>
            <TableHead className='w-5/12 pl-4'>Description</TableHead>
            <TableHead className='w-1/12' />
          </TableRow>
        </TableHeader>
        <FeaturesTableBody features={features} />
      </Table>
    </div>
  )
}

export default FeaturesTable
