export interface Customer {
  id: number;
  name: string;
  address: string;
  phone: string;
  website: string;
  email: string;
  customerType: string;
  description: string;
  rate: number;
  billingAddress: string;
  billingAddress2: string;
  billingName: string;
  billingCurrency: string;
}
export interface CustomerMiniDTO {
  name: string;
  id: number;
}
export const customers: Customer[] = [
  {
    id: 1,
    name: 'Customer 1',
    address: 'casa, maroc',
    phone: '+00212611223344',
    website: 'https://web-site.com',
    email: 'john.doe@gmail.com',
    customerType: 'Plumbing',
    description: 'Describe...',
    rate: 10,
    billingAddress: 'Add 1',
    billingAddress2: '-',
    billingName: 'Add 3',
    billingCurrency: 'MAD, dirham'
  },
  {
    id: 2,
    name: 'Customer 2',
    address: 'casa, maroc',
    phone: '+00212611223344',
    website: 'https://web-site.com',
    email: 'john.doe@gmail.com',
    customerType: 'Electrical',
    description: 'Describe 2...',
    rate: 15,
    billingAddress: 'Add 1',
    billingAddress2: '-',
    billingName: '-',
    billingCurrency: 'Euro'
  }
];
