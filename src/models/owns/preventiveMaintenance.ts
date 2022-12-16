import { WorkOrderBase } from './workOrderBase';
import Schedule from './schedule';

export default interface PreventiveMaintenance extends WorkOrderBase {
  schedule: Schedule;
}
