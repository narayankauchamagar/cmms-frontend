import { UserMiniDTO } from '../user';
import { Audit } from './audit';
import { CustomerMiniDTO } from './customer';
import { VendorShowDTO } from './vendor';
import { TeamMiniDTO } from './team';

export default interface Location extends Audit {
  id: number;
  name: string;
  address: string;
  longitude: number;
  latitude: number;
  vendors: VendorShowDTO[];
  customers: CustomerMiniDTO[];
  workers: UserMiniDTO[];
  teams: TeamMiniDTO[];
}
export interface LocationMiniDTO {
  id: number;
  name: string;
  address: string;
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
