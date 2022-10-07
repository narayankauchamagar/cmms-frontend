import { Audit } from './audit';

export default interface Part extends Audit {
  id: number;
  name: string;
  cost: number;
  quantity: number;
  barCode: string;
  area: string;
  category: string;
  description: string;
  location: string;
  users: number;
  vendors: number;
  openWorkOrders: number;
}
export const parts: Part[] = [
  {
    id: 212,
    name: 'Foil Tape',
    createdAt: 'dfggj',
    cost: 52,
    quantity: 9,
    barCode: 'dfsad',
    area: 'fafcax',
    category: 'facacaa ',
    description: 'string',
    location: 'string',
    users: 24,
    vendors: 4,
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
    barCode: 'dfsad',
    area: 'fafcax',
    category: 'facacaa ',
    description: 'string',
    location: 'string',
    users: 24,
    vendors: 4,
    openWorkOrders: 2,
    createdBy: 'ghu',
    updatedAt: 'ghfgj',
    updatedBy: 'ghfgj'
  }
];
