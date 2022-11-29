import { AssetMiniDTO, assets } from './asset';
import { Audit } from './audit';
import File, { files } from './file';
import WorkOrder, { workOrders } from './workOrder';
import { LocationMiniDTO, locations } from './location';
import { users } from './user';
import { UserMiniDTO } from '../user';
import Team, { teams } from './team';

export default interface Request extends Audit {
  title: string;
  id: number;
  description: string;
  workOrder: WorkOrder;
  cancelled: boolean;
  priority: string;
  image: File;
  asset: AssetMiniDTO;
  location: LocationMiniDTO;
  assignedTo: UserMiniDTO;
  dueDate: string;
  category: string;
  team: Team;
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
    asset: assets[0],
    location: locations[0],
    assignedTo: users[0],
    dueDate: 'dsds',
    category: 'fdfs',
    team: teams[0],
    description: 'jvjhbh',
    priority: 'HIGH',
    createdAt: 'fghb',
    createdBy: 'vvty',
    updatedAt: 'string',
    updatedBy: 'string'
  }
];
