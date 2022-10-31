export interface GeneralPreferences {
  id: number;
  language: string;
  dateFormat: string;
  currency: string;
  businessType: string;
  timeZone: string;

  autoAssignWorkOrders: boolean;

  autoAssignRequests: boolean;

  disableClosedWorkOrdersNotif: boolean;

  askFeedBackOnWOClosed: boolean;

  laborCostInTotalCost: boolean;

  woUpdateForRequesters: boolean;
}
