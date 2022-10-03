import { Audit } from './audit';

export default interface Location extends Audit {
  id: number;
  name: string;
  address: string;
}
