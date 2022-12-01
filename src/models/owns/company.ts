import { SubscriptionPlan } from './subscriptionPlan';
import CompanySettings from './companySettings';

export interface Company {
  id: string;
  logo: string;
  name: string;
  address: string;
  website: string;
  phone: string;
  subscription: { usersCount: number; subscriptionPlan: SubscriptionPlan };
  companySettings: CompanySettings;
}
