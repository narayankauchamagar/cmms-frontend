import { Audit } from './audit';
import User, { users } from './user';
import Category, { categories } from './category';

export default interface AdditionalTime extends Audit {
  assignedTo: User | null;
  id: number;
  hourlyRate: number;
  includeToTotalTime: boolean;
  startedAt: string;
  timeCategory: Category;
  hours: number;
  primaryTime: boolean;
  status: 'RUNNING' | 'STOPPED';
  minutes: number;
  duration: number;
}

export const additionalTimes: AdditionalTime[] = [
  {
    assignedTo: users[0],
    id: 54,
    hourlyRate: 22,
    includeToTotalTime: false,
    hours: 5,
    minutes: 4,
    startedAt: 'fdtyg',
    timeCategory: categories[0],
    primaryTime: false,
    duration: 4,
    createdAt: 'fghb',
    status: 'STOPPED',
    createdBy: 'vvty',
    updatedAt: 'string',
    updatedBy: 'string'
  }
];
