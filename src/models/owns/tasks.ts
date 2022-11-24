export type TaskType =
  | 'SUBTASK'
  | 'NUMBER'
  | 'TEXT'
  | 'INSPECTION'
  | 'MULTIPLE'
  | 'METER';
export interface TaskBase {
  id: number;
  label: string;
  taskType: TaskType;
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
      taskType: 'SUBTASK'
    },
    value: 'OPEN',
    notes: ''
  },
  {
    id: 75,
    taskBase: {
      id: 11,
      label: 'Check nothing',
      taskType: 'SUBTASK'
    },
    value: 'OPEN',
    notes: ''
  }
];
