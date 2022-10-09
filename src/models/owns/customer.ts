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
  address1: string;
  address2: string;
  address3: string;
  currency: string;
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
    address1: 'Add 1',
    address2: '-',
    address3: 'Add 3',
    currency: 'MAD, dirham'
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
    address1: 'Add 1',
    address2: '-',
    address3: '-',
    currency: 'Euro'
  }
];
