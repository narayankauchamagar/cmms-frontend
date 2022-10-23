export interface Vendor {
  id: number;
  companyName: string;
  address: string;
  phone: string;
  website: string;
  name: string;
  email: string;
  vendorType: string;
  description: string;
  rate: number;
}

export interface VendorMiniDTO {
  companyName: string;
  id: number;
}
export const vendors: Vendor[] = [
  {
    id: 2,
    companyName: 'string',
    address: 'string',
    phone: 'string',
    website: 'string',
    name: 'string',
    email: 'string',
    vendorType: 'string',
    description: 'string',
    rate: 2
  }
];
