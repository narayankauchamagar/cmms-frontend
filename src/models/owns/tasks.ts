export interface Task {
  id: number;
  label: string;
  type: 'basic' | 'number';
  value?: string | number;
  notes: string;
}
export const tasks: Task[] = [
  {
    id: 74,
    label: 'Clean air filter & check its condition',
    type: 'basic',
    value: 'OPEN',
    notes: ''
  },
  { id: 75, label: 'Clean', type: 'basic', value: 'OPEN', notes: '' },
  {
    id: 77,
    label: 'Clean air filter & check its condition',
    type: 'number',
    value: 0,
    notes: ''
  }
];
