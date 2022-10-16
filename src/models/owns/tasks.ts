export interface Task {
  id: number;
  label: string;
  type: 'basic' | 'number';
  value: string | number;
  notes: string;
}
