import { Audit } from './audit';

export default interface Asset extends Audit {
  id: number;
  name: string;
}

export interface AssetDTO extends Audit {
  id: number;
  name: string;
  image: string;
  location: string;
  area: string;
  model: string;
  barCode: string;
  category: string;
  description: string;
  primaryUser: string;
  users: number;
  teams: number;
  vendors: number;
  parentAsset: string;
  openWorkOrders: number;
}
