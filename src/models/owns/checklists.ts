import { Task, tasks } from './tasks';

export interface Checklist {
  id: number;
  name: string;
  tasks: Task[];
}
export const checklists = [
  { id: 44, name: 'Checklist1', tasks },
  { id: 11, name: 'Checklist2', tasks }
];
