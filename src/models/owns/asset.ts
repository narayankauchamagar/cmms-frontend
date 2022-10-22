import { Audit } from './audit';

export default interface Asset extends Audit {
  id: number;
  name: string;
  description: string;
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
  additionalInfos: string;
  hasChildren?: boolean;
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
    location: 'Location',
    area: 'Area',
    model: 'Model',
    barCode: 'Barcode',
    category: 'Category',
    description: 'desc',
    primaryUser: 'user',
    users: 1,
    teams: 4,
    additionalInfos: '',
    vendors: 3,
    parentAsset: 'string',
    openWorkOrders: 2,
    createdAt: 'dfggj',
    createdBy: 'ghu',
    updatedAt: 'ghfgj',
    updatedBy: 'ghfgj'
  },
  {
    id: 211,
    name: 'Name',
    image: 'Image',
    location: 'Location',
    additionalInfos: '',
    area: 'Area',
    model: 'Model',
    barCode: 'Barcode',
    category: 'Category',
    description: 'desc',
    primaryUser: 'user',
    users: 1,
    teams: 4,
    vendors: 3,
    parentAsset: 'string',
    openWorkOrders: 2,
    createdAt: 'dfggj',
    createdBy: 'ghu',
    updatedAt: 'ghfgj',
    updatedBy: 'ghfgj'
  },
  {
    id: 52,
    name: 'Name',
    image: 'Image',
    location: 'Location',
    area: 'Area',
    model: 'Model',
    additionalInfos: '',
    barCode: 'Barcode',
    description: 'bjhb',
    category: 'Category',
    primaryUser: 'user',
    users: 1,
    teams: 4,
    vendors: 3,
    parentAsset: 'string',
    openWorkOrders: 2,
    createdAt: 'dfggj',
    createdBy: 'ghu',
    updatedAt: 'ghfgj',
    updatedBy: 'ghfgj'
  },
  {
    id: 245,
    name: 'Name',
    image: 'Image',
    location: 'Location',
    area: 'Area',
    model: 'Model',
    barCode: 'Barcode',
    category: 'Category',
    description: 'desc',
    primaryUser: 'user',
    users: 1,
    teams: 4,
    vendors: 3,
    additionalInfos: '',
    parentAsset: 'string',
    openWorkOrders: 2,
    createdAt: 'dfggj',
    createdBy: 'ghu',
    updatedAt: 'ghfgj',
    updatedBy: 'ghfgj'
  }
];
