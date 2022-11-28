import { Audit } from './audit';
import File, { files } from './file';
import WorkOrder, { workOrders } from './workOrder';

export default interface Request extends Audit {
  title: string;
  id: number;
  description: string;
  workOrder: WorkOrder;
  cancelled: boolean;
  priority: string;
  image: File;
  files: File[];
}

export const requests: Request[] = [
  {
    title: 'Request 1',
    id: 54,
    image: files[0],
    cancelled: true,
    workOrder: workOrders[0],
    files: [],
    description: 'jvjhbh',
    priority: 'HIGH',
    createdAt: 'fghb',
    createdBy: 'vvty',
    updatedAt: 'string',
    updatedBy: 'string'
  }
];
