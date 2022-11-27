import { Audit } from './audit';
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
