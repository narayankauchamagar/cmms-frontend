import { Audit } from './audit';

export enum NotificationType {
  INFO = 'INFO',
  ASSET = 'ASSET',
  REQUEST = 'REQUEST',
  WORK_ORDER = 'WORK_ORDER',
  PREVENTIVE_MAINTENANCE = 'PREVENTIVE_MAINTENANCE',
  PART = 'PART',
  METER = 'METER',
  LOCATION = 'LOCATION',
  LABOR = 'LABOR',
  TEAM = 'TEAM'
}

export default interface Notification extends Audit {
  message: string;
  id: number;
  seen: boolean;
  notificationType: NotificationType;
  resourceId: number;
}
