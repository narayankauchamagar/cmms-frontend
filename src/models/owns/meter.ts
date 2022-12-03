import { Audit } from './audit';
import { users } from './user';
import { AssetMiniDTO, assets } from './asset';
import { LocationMiniDTO, locations } from './location';
import { UserMiniDTO } from '../user';
import File from './file';

export default interface Meter extends Audit {
  name: string;
  id: number;
  unit: string;
  updateFrequency: number;
  category: string;
  image: File | null;
  users: UserMiniDTO[];
  location?: LocationMiniDTO;
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
    image: null,
    createdAt: 'fghb',
    createdBy: 1,
    updatedAt: 'string',
    updatedBy: 1,
    nextReading: '23/05/2022'
  }
];
