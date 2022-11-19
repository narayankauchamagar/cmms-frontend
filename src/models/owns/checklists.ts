import { Task, tasks } from './tasks';

export interface Checklist {
  id: number;
  name: string;
  category: string;
  tasks: Task[];
}
export const checklists = [
  { id: 44, name: 'Checklist1', tasks, category: 'SSd' },
  { id: 11, name: 'Checklist2', tasks, category: 'FSdd' }
];
