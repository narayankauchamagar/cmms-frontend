import { UserShowDTO } from '../user';
import { Audit } from './audit';
import { CustomerShowDTO } from './customer';
import { VendorShowDTO } from './vendor';
import { TeamShowDTO } from './team';

export default interface Location extends Audit {
  id: number;
  name: string;
  address: string;
  longitude: number;
  latitude: number;
  vendors: VendorShowDTO[];
  customers: CustomerShowDTO[];
  workers: UserShowDTO[];
  teams: TeamShowDTO[];
}

export const locations: Location[] = [
  {
    name: 'Location 1',
    id: 54,
    address: 'Add1',
    createdAt: 'fghb',
    createdBy: 'vvty',
    updatedAt: 'string',
    updatedBy: 'string',
    vendors: [],
    customers: [],
    workers: [],
    longitude: 40.744509157650334,
    latitude: -74.06030716227161,
    teams: []
  },
  {
    name: 'Location 2',
    id: 53,
    address: 'Add1',
    createdAt: 'fghb',
    createdBy: 'vvty',
    updatedAt: 'string',
    updatedBy: 'string',
    vendors: [],
    customers: [],
    workers: [],
    longitude: 40.744509157650334,
    latitude: -74.06030716227161,
    teams: []
  }
];
