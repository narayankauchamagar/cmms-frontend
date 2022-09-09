import { Audit } from './audit';

export default interface File extends Audit {
  name: string;
  id: number;
}
