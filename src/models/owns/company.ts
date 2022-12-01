import { SubscriptionPlan } from './subscriptionPlan';
import CompanySettings from './companySettings';

export interface Company {
  id: string;
  logo: string;
  name: string;
  address: string;
  website: string;
  phone: string;
  subscription: { subscriptionPlan: SubscriptionPlan };
  companySettings: CompanySettings;
}
