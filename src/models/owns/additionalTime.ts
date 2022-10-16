import { Audit } from './audit';
import User, { users } from './user';
import Category, { categories } from './category';

export default interface AdditionalTime extends Audit {
  assignedTo: User;
  id: number;
  hourlyRate: number;
  includeToTotalTime: boolean;
  startedAt: string;
  timeCategory: Category;
}

export const additionalTimes: AdditionalTime[] = [
  {
    assignedTo: users[0],
    id: 54,
    hourlyRate: 22,
    includeToTotalTime: false,
    startedAt: 'fdtyg',
    timeCategory: categories[0],
    createdAt: 'fghb',
    createdBy: 'vvty',
    updatedAt: 'string',
    updatedBy: 'string'
  }
];
