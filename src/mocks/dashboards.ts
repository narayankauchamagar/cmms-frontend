import { mock } from 'src/utils/axios';
import { Product } from 'src/models/dashboards';

mock.onGet('/api/products/top').reply(() => {
  const products: Product[] = [
    {
      id: '1',
      image: '/static/images/placeholders/products/1.png',
      name: 'Apple Macbook PRO 16',
      orders: 321,
      inventory: 99,
      currency: '$',
      revenue: 6748,
      revenuePercent: 59
    },
    {
      id: '2',
      image: '/static/images/placeholders/products/2.png',
      name: 'Apple TV Gen. 5 2021 ',
      orders: 756,
      inventory: 76,
      currency: '$',
      revenue: 3956,
      revenuePercent: 34
    },
    {
      id: '3',
      image: '/static/images/placeholders/products/3.png',
      name: 'iPhone 12 PRO Max 512MB',
      orders: 34,
      inventory: 5,
      currency: '$',
      revenue: 2869,
      revenuePercent: 25
    }
  ];

  return [200, { products }];
});
