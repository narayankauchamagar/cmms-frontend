import { Audit } from './audit';

export default interface Part extends Audit {
  id: number;
  name: string;
}
