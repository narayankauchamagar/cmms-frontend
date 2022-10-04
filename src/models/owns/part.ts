import { Audit } from './audit';

export default interface Part extends Audit {
  id: number;
  name: string;
  cost: number;
  number: number;
}
export const parts: Part[] = [
  {
    id: 212,
    name: 'cgvg',
    createdAt: 'dfggj',
    cost: 52,
    number: 9,
    createdBy: 'ghu',
    updatedAt: 'ghfgj',
    updatedBy: 'ghfgj'
  },
  {
    id: 44,
    name: 'fcgvc',
    createdAt: 'dfggj',
    cost: 40,
    number: 7,
    createdBy: 'ghu',
    updatedAt: 'ghfgj',
    updatedBy: 'ghfgj'
  }
];
