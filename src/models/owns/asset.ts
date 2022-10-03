import { Audit } from './audit';

export default interface Asset extends Audit {
  id: number;
  name: string;
}
