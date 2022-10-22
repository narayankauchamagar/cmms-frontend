import { Audit } from './audit';
import User, { users } from './user';
import Asset, { assets } from './asset';
import Location, { locations } from './location';
import Reading, { readings } from './reading';
import File, { files } from './file';

export default interface Request extends Audit {
  title: string;
  id: number;
  description: string;
  priority: string;
  image: File;
  files: File[];
  status: string;
}

export const requests: Request[] = [
  {
    title: 'Request 1',
    id: 54,
    image: files[0],
    files: [],
    status: 'OPEN',
    description: 'jvjhbh',
    priority: 'HIGH',
    createdAt: 'fghb',
    createdBy: 'vvty',
    updatedAt: 'string',
    updatedBy: 'string'
  }
];
