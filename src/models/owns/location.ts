import { Audit } from './audit';

export default interface Location extends Audit {
  id: string | number;
  name: string;
  address: string;
}
