import { Audit } from './audit';
import User, { users } from './user';
import Request, { requests } from './request';
import PurchaseOrder, { purchaseOrders } from './purchaseOrder';
import Part, { parts } from './part';
import Team, { teams } from './team';
import Asset, { assets } from './asset';
import File, { files } from './file';
import Location, { locations } from './location';

interface WorkOrderBase extends Audit {
  dueDate: string;
  status: string;
  priority: string;
  estimatedDuration: number;
  description: string;
  title: string;
  requiredSignature: boolean;
  parts: Part[];
  location: Location;
  team: Team;
  primaryUser: User;
  assignedTo: User[];
  asset: Asset;
}
export default interface WorkOrder extends WorkOrderBase {
  id: number;
  completedBy: User;
  completedOn: string;
  archived: boolean;
  parentRequest: Request;
  purchaseOrder: PurchaseOrder;
  files: File[];
  //parentPreventiveMaintenance:
  address: string;
}

export const workOrders: WorkOrder[] = [
  {
    completedBy: users[0],
    completedOn: 'string',
    archived: true,
    parentRequest: requests[0],
    purchaseOrder: purchaseOrders[0],
    files,
    dueDate: 'string',
    status: 'string',
    priority: 'string',
    estimatedDuration: 7,
    description: 'string',
    requiredSignature: true,
    parts,
    location: locations[0],
    team: teams[0],
    primaryUser: users[0],
    assignedTo: users,
    asset: assets[0],
    //parentPreventiveMaintenance:
    title: 'Work Order1',
    id: 54,
    address: 'Add1',
    createdAt: 'fghb',
    createdBy: 'vvty',
    updatedAt: 'string',
    updatedBy: 'string'
  }
];
