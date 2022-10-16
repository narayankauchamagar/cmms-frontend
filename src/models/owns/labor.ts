import { Audit } from './audit';
import User, { users } from './user';
import Category, { categories } from './category';

export default interface Labor extends Audit {
  user: User;
  laborCost: { cost: number };
  id: number;
}

export const labors: Labor[] = [
  {
    user: users[0],
    laborCost: { cost: 57 },
    id: 54,
    createdAt: 'fghb',
    createdBy: 'vvty',
    updatedAt: 'string',
    updatedBy: 'string'
  },
  {
    user: users[1],
    laborCost: { cost: 54 },
    id: 57,
    createdAt: 'fghb',
    createdBy: 'vvty',
    updatedAt: 'string',
    updatedBy: 'string'
  }
];
