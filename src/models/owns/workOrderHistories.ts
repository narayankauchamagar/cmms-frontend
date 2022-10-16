import User, { users } from './user';

export default interface WorkOrderHistory {
  id: number;
  user: User;
  description: string;
  date: string;
}

export const workOrderHistories: WorkOrderHistory[] = [
  {
    id: 75,
    user: users[1],
    description: 'fhgskd',
    date: 'fdsdfvac'
  },
  {
    id: 421,
    user: users[0],
    description: 'gjhgaf fahgdhabf fagk',
    date: 'fdsdfvac'
  }
];
