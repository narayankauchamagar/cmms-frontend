import { randomInt } from './generators';
import { Task, TaskBase } from '../models/owns/tasks';

export const formatSelectMultiple = (
  array: { label: string; value: string }[] | undefined
) => {
  return array
    ? array.map(({ value }) => {
        return { id: Number(value) };
      })
    : [];
};

export const formatSelect = (
  object: { label: string; value: string } | undefined
): { id: number } | null => {
  return object?.value ? { id: Number(object.value) } : null;
};

export const formatAssetValues = (values) => {
  values.primaryUser = formatSelect(values.primaryUser);
  values.location = formatSelect(values.location);
  values.category = formatSelect(values.category);
  values.parentAsset = formatSelect(values.parentAsset);
  values.customers = formatSelectMultiple(values.customers);
  values.vendors = formatSelectMultiple(values.vendors);
  values.assignedTo = formatSelectMultiple(values.assignedTo);
  values.teams = formatSelectMultiple(values.teams);
  values.parts = formatSelectMultiple(values.parts);
  return values;
};

export const getPriorityLabel = (str: string, t: any) => {
  switch (str) {
    case 'NONE':
      return t('None');
    case 'LOW':
      return t('Low');
    case 'MEDIUM':
      return t('Medium');
    case 'HIGH':
      return t('High');
    default:
      break;
  }
};

export const getStatusLabel = (str: string, t: any) => {
  switch (str) {
    case 'OPEN':
      return t('Open');
    case 'IN_PROGRESS':
      return t('In Progress');
    case 'ON_HOLD':
      return t('On Hold');
    case 'COMPLETE':
      return t('Complete');
    default:
      break;
  }
};
export const getHHMMSSFromDuration = (duration: number | undefined) => {
  const date = new Date(0);
  date.setSeconds(duration ?? 0); // specify value for SECONDS here
  return date.toISOString().substring(11, 19);
};

export const getTaskFromTaskBase = (taskBase: TaskBase): Task => {
  return { taskBase, id: randomInt(), notes: '', value: '' };
};
