import { Audit } from './audit';

export default interface Location extends Audit {
  id: number;
  name: string;
  address: string;
  coordinates?: { lat: number; lng: number };
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
    coordinates: {
      lat: 40.744509157650334,
      lng: -74.06030716227161
    }
  },
  {
    name: 'Location 2',
    id: 53,
    address: 'Add1',
    createdAt: 'fghb',
    createdBy: 'vvty',
    updatedAt: 'string',
    updatedBy: 'string',
    coordinates: {
      lat: 45.744509157650334,
      lng: -74.06030716227161
    }
  }
];
