export type TaskType =
  | 'subtask'
  | 'number'
  | 'text'
  | 'inspection'
  | 'multiple'
  | 'meter';
export interface TaskBase {
  id: number;
  label: string;
  type: TaskType;
  options?: string[];
  user?: number;
  asset?: number;
  meter?: number;
}
export interface Task {
  id: number;
  value?: string | number;
  notes: string;
  taskBase: TaskBase;
}
export const tasks: Task[] = [
  {
    id: 74,
    taskBase: {
      id: 12,
      label: 'Clean air filter & check its condition',
      type: 'subtask'
    },
    value: 'OPEN',
    notes: ''
  },
  {
    id: 75,
    taskBase: {
      id: 11,
      label: 'Check nothing',
      type: 'subtask'
    },
    value: 'OPEN',
    notes: ''
  }
];
