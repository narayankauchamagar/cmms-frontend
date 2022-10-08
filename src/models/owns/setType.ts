import { Audit } from './audit';
import Part, { parts } from './part';

export default interface SetType extends Audit {
  id: number;
  name: string;
  parts: Part[];
}
export const sets: SetType[] = [
  {
    id: 212,
    name: 'Set 1',
    createdAt: 'dfggj',
    parts,
    createdBy: 'ghu',
    updatedAt: 'ghfgj',
    updatedBy: 'ghfgj'
  },
  {
    id: 44,
    name: 'Set 2',
    createdAt: 'dfggj',
    parts,
    createdBy: 'ghu',
    updatedAt: 'ghfgj',
    updatedBy: 'ghfgj'
  }
];
