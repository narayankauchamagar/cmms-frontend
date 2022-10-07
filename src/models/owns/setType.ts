import { Audit } from './audit';

export default interface SetType extends Audit {
  id: number;
  name: string;
  cost: number;
  parts: number;
}
export const sets: SetType[] = [
  {
    id: 212,
    name: 'Set 1',
    createdAt: 'dfggj',
    cost: 52,
    parts: 45,
    createdBy: 'ghu',
    updatedAt: 'ghfgj',
    updatedBy: 'ghfgj'
  },
  {
    id: 44,
    name: 'Set 2',
    createdAt: 'dfggj',
    cost: 52,
    parts: 45,
    createdBy: 'ghu',
    updatedAt: 'ghfgj',
    updatedBy: 'ghfgj'
  }
];
