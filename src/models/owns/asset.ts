import { UserMiniDTO } from '../user';
import { Audit } from './audit';
import { PartMiniDTO } from './part';
import { TeamMiniDTO, teams } from './team';
import { VendorMiniDTO, vendors } from './vendor';
import Location, { locations } from './location';
import { CustomerMiniDTO, customers } from './customer';
import { users } from './user';

export default interface Asset extends Audit {
  id: number;
  name: string;
  description: string;
}

export interface AssetDTO extends Audit {
  id: number;
  name: string;
  image: string;
  location: Location;
  area: string;
  model: string;
  serialNumber: string;
  barCode: string;
  category: string;
  description: string;
  primaryUser: UserMiniDTO;
  assignedTo: UserMiniDTO[];
  teams: TeamMiniDTO[];
  vendors: VendorMiniDTO[];
  customers: CustomerMiniDTO[];
  parentAsset: string;
  openWorkOrders: number;
  additionalInfos: string;
  hasChildren?: boolean;
  warrantyExpirationDate?: string;
  inServiceDate?: string;
  parts: PartMiniDTO[];
}
export interface AssetRow extends AssetDTO {
  hierarchy: number[];
  childrenFetched?: boolean;
}
export interface AssetMiniDTO {
  id: number;
  name: string;
}
export const assets: Asset[] = [
  {
    id: 212,
    name: 'cgvg',
    createdAt: 'dfggj',
    description: 'bjhb',
    createdBy: 'ghu',
    updatedAt: 'ghfgj',
    updatedBy: 'ghfgj'
  },
  {
    id: 44,
    name: 'fcgvc',
    createdAt: 'dfggj',
    createdBy: 'ghu',
    description: 'fchg',
    updatedAt: 'ghfgj',
    updatedBy: 'ghfgj'
  }
];

export const assetDTOS: AssetDTO[] = [
  {
    id: 212,
    name: 'Name',
    image: 'Image',
    location: locations[1],
    area: 'Area',
    model: 'Model',
    serialNumber: 'fdsf',
    barCode: 'Barcode',
    category: 'Category',
    description: 'desc',
    primaryUser: users[0],
    assignedTo: users,
    teams,
    additionalInfos: '',
    vendors,
    customers,
    parentAsset: 'string',
    openWorkOrders: 2,
    createdAt: 'dfggj',
    createdBy: 'ghu',
    updatedAt: 'ghfgj',
    updatedBy: 'ghfgj',
    parts: []
  },
  {
    id: 211,
    name: 'Name',
    image: 'Image',
    location: locations[1],
    area: 'Area',
    model: 'Model',
    serialNumber: 'fdsf',
    barCode: 'Barcode',
    category: 'Category',
    description: 'desc',
    primaryUser: users[0],
    assignedTo: users,
    teams,
    additionalInfos: '',
    vendors,
    customers,
    parentAsset: 'string',
    openWorkOrders: 2,
    createdAt: 'dfggj',
    createdBy: 'ghu',
    updatedAt: 'ghfgj',
    updatedBy: 'ghfgj',
    parts: []
  }
];
