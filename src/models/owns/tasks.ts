export type TaskType =
  | 'subtask'
  | 'number'
  | 'text'
  | 'inspection'
  | 'multiple'
  | 'meter';
export interface Task {
  id: number;
  label: string;
  type: TaskType;
  value?: string | number;
  notes: string;
}
export const tasks: Task[] = [
  {
    id: 74,
    label: 'Clean air filter & check its condition',
    type: 'subtask',
    value: 'OPEN',
    notes: ''
  },
  { id: 75, label: 'Clean', type: 'subtask', value: 'OPEN', notes: '' },
  {
    id: 77,
    label: 'Clean air filter & check its condition',
    type: 'number',
    value: 0,
    notes: ''
  }
];
