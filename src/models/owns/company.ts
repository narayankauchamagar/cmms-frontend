import CompanySettings from './companySettings';
import OwnSubscription from './ownSubscription';

export interface Company {
  id: string;
  logo: string;
  name: string;
  address: string;
  website: string;
  phone: string;
  subscription: OwnSubscription;
  companySettings: CompanySettings;
}
