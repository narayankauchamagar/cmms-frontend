import { GeneralPreferences } from './generalPreferences';
import { WorkOrderConfiguration } from './workOrderConfiguration';
import { WorkOrderRequestConfiguration } from './workOrderRequestConfiguration';

export default interface CompanySettings {
  generalPreferences: GeneralPreferences;
  workOrderConfiguration: WorkOrderConfiguration;
  WorkOrderRequestConfiguration: WorkOrderRequestConfiguration;
}
