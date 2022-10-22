import { Audit } from './audit';
import User, { users } from './user';
import Asset, { AssetMiniDTO, assets } from './asset';
import Location, { LocationMiniDTO, locations } from './location';
import { UserMiniDTO } from '../user';

export default interface Meter extends Audit {
  name: string;
  id: number;
  unit: string;
  updateFrequency: number;
  category: string;
  users: UserMiniDTO[];
  location: LocationMiniDTO;
  asset: AssetMiniDTO;
  nextReading: string;
}

export const meters: Meter[] = [
  {
    name: 'Tension',
    id: 54,
    category: 'jvjhbh',
    unit: 'V',
    updateFrequency: 7,
    users: users,
    location: locations[0],
    asset: assets[0],
    createdAt: 'fghb',
    createdBy: 'vvty',
    updatedAt: 'string',
    updatedBy: 'string',
    nextReading: '23/05/2022'
  }
];
