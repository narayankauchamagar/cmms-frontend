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
}
export interface AssetHierarchy extends AssetDTO {
  hierarchy: number[];
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
    parentAsset: 'string',
    openWorkOrders: 2,
    createdAt: 'dfggj',
    createdBy: 'ghu',
    updatedAt: 'ghfgj',
    updatedBy: 'ghfgj'
  }
];

export const assetsHierarchy: AssetHierarchy[] = [
  { ...assetDTOS[0], hierarchy: [1] },
  { ...assetDTOS[1], hierarchy: [1, 10] },
  { ...assetDTOS[2], hierarchy: [1, 10, assetDTOS[2].id] },
  { ...assetDTOS[3], hierarchy: [1, 10, assetDTOS[3].id] }
];
