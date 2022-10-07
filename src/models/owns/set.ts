import { Audit } from './audit';

export default interface Set extends Audit {
  id: number;
  name: string;
  cost: number;
  parts: number;
}
export const sets: Set[] = [
  {
    id: 212,
    name: 'cgvg',
    createdAt: 'dfggj',
    cost: 52,
    parts: 45,
    createdBy: 'ghu',
    updatedAt: 'ghfgj',
    updatedBy: 'ghfgj'
  },
  {
    id: 44,
    name: 'cgvg',
    createdAt: 'dfggj',
    cost: 52,
    parts: 45,
    createdBy: 'ghu',
    updatedAt: 'ghfgj',
    updatedBy: 'ghfgj'
  }
];
