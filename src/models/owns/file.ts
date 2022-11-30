import { Audit } from './audit';

export type FileType = 'IMAGE' | 'OTHER';
export default interface File extends Audit {
  name: string;
  id: string | number;
  url: string;
  type: FileType;
}

export const files: File[] = [
  {
    name: 'File1',
    id: 54,
    url: 'https://google.com',
    createdAt: 'fghb',
    createdBy: 'vvty',
    updatedAt: 'string',
    updatedBy: 'string',
    type: 'OTHER'
  }
];
