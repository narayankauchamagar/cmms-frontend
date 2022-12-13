import { Audit } from './audit';
import User, { users } from './user';
import Request, { requests } from './request';
import Team, { teams } from './team';
import Asset, { assets } from './asset';
import File, { files } from './file';
import Location, { locations } from './location';
import Category, { categories } from './category';
import { UserMiniDTO } from '../user';
import { CustomerMiniDTO, customers } from './customer';

interface WorkOrderBase extends Audit {
  dueDate: string;
  status: string;
  priority: string;
  estimatedDuration: number;
  description: string;
  title: string;
  requiredSignature: boolean;
  location: Location;
  team: Team;
  primaryUser: User;
  assignedTo: UserMiniDTO[];
  files: File[];
  image: File | null;
  customers: CustomerMiniDTO[];
  asset: Asset;
}
export default interface WorkOrder extends WorkOrderBase {
  category: Category | null;
  id: number;
  completedBy: User;
  completedOn: string;
  archived: boolean;
  parentRequest: Request;
  signature: File;
  //parentPreventiveMaintenance:
}

export const workOrders: WorkOrder[] = [
  {
    completedBy: users[0],
    completedOn: 'string',
    category: categories[0],
    archived: true,
    parentRequest: requests[0],
    files,
    dueDate: 'string',
    status: 'string',
    priority: 'HIGH',
    estimatedDuration: 7,
    image: null,
    description: 'description',
    requiredSignature: true,
    location: locations[0],
    team: teams[0],
    primaryUser: users[0],
    assignedTo: users,
    asset: assets[0],
    //parentPreventiveMaintenance:
    title: 'Work Order1',
    id: 54,
    createdAt: 'fghb',
    createdBy: 1,
    updatedAt: 'string',
    updatedBy: 1,
    customers,
    signature: null
  }
];
