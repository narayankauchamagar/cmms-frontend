import { SubscriptionPlan } from './subscriptionPlan';

export interface Company {
  id: string;
  logo: string;
  name: string;
  address: string;
  website: string;
  phone: string;
  plan: SubscriptionPlan;
}
