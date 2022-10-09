import { Audit } from './audit';
import User, { users } from './user';
import Asset, { assets } from './asset';
import Location, { locations } from './location';
import Reading, { readings } from './reading';

export default interface Meter extends Audit {
  name: string;
  id: number;
  unit: string;
  updateFrequency: number;
  category: string;
  workers: User[];
  location: Location;
  readings: Reading[];
  asset: Asset;
  nextReading: string;
}

export const meters: Meter[] = [
  {
    name: 'Tension',
    id: 54,
    category: 'jvjhbh',
    unit: 'V',
    readings,
    updateFrequency: 7,
    workers: users,
    location: locations[0],
    asset: assets[0],
    createdAt: 'fghb',
    createdBy: 'vvty',
    updatedAt: 'string',
    updatedBy: 'string',
    nextReading: '23/05/2022'
  }
];
