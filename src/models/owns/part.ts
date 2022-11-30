import { Audit } from './audit';
import { UserMiniDTO } from '../user';
import { VendorMiniDTO } from './vendor';
import { CustomerMiniDTO } from './customer';
import { TeamMiniDTO } from './team';
import File from './file';

export default interface Part extends Audit {
  files: File[];
  id: number;
  name: string;
  cost: number;
  quantity: number;
  minQuantity: number;
  barcode: string;
  area: string;
  category: string;
  nonStock: boolean;
  image: File | null;
  description: string;
  assignedTo: UserMiniDTO[];
  vendors: VendorMiniDTO[];
  customers: CustomerMiniDTO[];
  teams: TeamMiniDTO[];
  openWorkOrders: number;
}
export interface PartMiniDTO {
  name: string;
  id: number;
  cost: number;
  description: string;
}
export const parts: Part[] = [
  {
    id: 212,
    name: 'Foil Tape',
    createdAt: 'dfggj',
    cost: 52,
    quantity: 9,
    barcode: 'dfsad',
    files: [],
    area: 'fafcax',
    nonStock: false,
    category: 'facacaa ',
    description: 'string',
    assignedTo: [],
    image: null,
    minQuantity: 4,
    vendors: [],
    customers: [],
    teams: [],
    openWorkOrders: 2,
    createdBy: 'ghu',
    updatedAt: 'ghfgj',
    updatedBy: 'ghfgj'
  },
  {
    id: 44,
    name: 'HVAC Filter',
    createdAt: 'dfggj',
    cost: 52,
    quantity: 9,
    minQuantity: 4,
    barcode: 'dfsad',
    nonStock: true,
    area: 'fafcax',
    category: 'facacaa ',
    files: [],
    image: null,
    description: 'string',
    assignedTo: [],
    vendors: [],
    customers: [],
    teams: [],
    openWorkOrders: 2,
    createdBy: 'ghu',
    updatedAt: 'ghfgj',
    updatedBy: 'ghfgj'
  }
];
