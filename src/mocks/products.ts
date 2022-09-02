import { mock } from 'src/utils/axios';
import type { Product } from 'src/models/product';

let products: Product[] = [
  {
    id: '1',
    name: 'Amazon Dot Echo 3',
    price: 99,
    sale_price: 79,
    stock: 56,
    rating: 4.8,
    images: [
      '/static/images/placeholders/products/1.png',
      '/static/images/placeholders/fitness/1.jpg',
      '/static/images/placeholders/fitness/2.jpg',
      '/static/images/placeholders/fitness/3.jpg',
      '/static/images/placeholders/fitness/4.jpg'
    ],
    orders: 34,
    summary:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
    description: `
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
    
    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    `,
    categories: ['Electronics', 'IOT Devices']
  },
  {
    id: '2',
    name: 'Autodesk 3D Printer PRO',
    price: 399,
    sale_price: 0,
    stock: 99,
    rating: 4.9,
    images: [
      '/static/images/placeholders/products/2.png',
      '/static/images/placeholders/fitness/1.jpg',
      '/static/images/placeholders/fitness/2.jpg',
      '/static/images/placeholders/fitness/3.jpg',
      '/static/images/placeholders/fitness/4.jpg'
    ],
    orders: 75,
    summary:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit',
    description: `
    <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>

<p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>

<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
    `,
    categories: ['3D Printers']
  },
  {
    id: '3',
    name: 'Apple iPhone 12 PRO',
    price: 899,
    sale_price: 749,
    stock: 68,
    rating: 5,
    images: [
      '/static/images/placeholders/products/3.png',
      '/static/images/placeholders/fitness/1.jpg',
      '/static/images/placeholders/fitness/2.jpg',
      '/static/images/placeholders/fitness/3.jpg',
      '/static/images/placeholders/fitness/4.jpg'
    ],
    orders: 75,
    summary:
      'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis',
    description: `
    <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>

<p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>

<p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
    `,
    categories: ['Phones', 'Apple']
  },
  {
    id: '4',
    name: 'GoPro Action Camera 3',
    price: 299,
    sale_price: 289,
    stock: 35,
    rating: 4.5,
    images: [
      '/static/images/placeholders/products/4.png',
      '/static/images/placeholders/fitness/1.jpg',
      '/static/images/placeholders/fitness/2.jpg',
      '/static/images/placeholders/fitness/3.jpg',
      '/static/images/placeholders/fitness/4.jpg'
    ],
    orders: 19,
    summary:
      'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus',
    description: `
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    `,
    categories: ['Video Cameras']
  },
  {
    id: '5',
    name: 'Apple Watch 42mm Gen. 4',
    price: 199,
    sale_price: 0,
    stock: 99,
    rating: 4.9,
    images: [
      '/static/images/placeholders/products/5.png',
      '/static/images/placeholders/fitness/1.jpg',
      '/static/images/placeholders/fitness/2.jpg',
      '/static/images/placeholders/fitness/3.jpg',
      '/static/images/placeholders/fitness/4.jpg'
    ],
    orders: 98,
    summary:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum',
    description: `
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>

<p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>

<p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
    `,
    categories: ['Apple', 'Watches']
  },
  {
    id: '6',
    name: 'Sonos Pro WIFI Speaker',
    price: 1199,
    sale_price: 1099,
    stock: 83,
    rating: 4.6,
    images: [
      '/static/images/placeholders/products/6.png',
      '/static/images/placeholders/fitness/1.jpg',
      '/static/images/placeholders/fitness/2.jpg',
      '/static/images/placeholders/fitness/3.jpg',
      '/static/images/placeholders/fitness/4.jpg'
    ],
    orders: 185,
    summary:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque',
    description: `
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>

<p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
    `,
    categories: ['Speakers']
  },
  {
    id: '7',
    name: 'Automatic Coffee Machine',
    price: 499,
    sale_price: 0,
    stock: 99,
    rating: 4.4,
    images: [
      '/static/images/placeholders/products/7.png',
      '/static/images/placeholders/fitness/1.jpg',
      '/static/images/placeholders/fitness/2.jpg',
      '/static/images/placeholders/fitness/3.jpg',
      '/static/images/placeholders/fitness/4.jpg'
    ],
    orders: 26,
    summary:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque',
    description: `
    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

<p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
    `,
    categories: ['Electronics', 'Coffee Machines']
  },
  {
    id: '8',
    name: 'Apple Macbook PRO 16" 2021',
    price: 1999,
    sale_price: 0,
    stock: 38,
    rating: 4.9,
    images: [
      '/static/images/placeholders/products/8.png',
      '/static/images/placeholders/fitness/1.jpg',
      '/static/images/placeholders/fitness/2.jpg',
      '/static/images/placeholders/fitness/3.jpg',
      '/static/images/placeholders/fitness/4.jpg'
    ],
    orders: 9,
    summary:
      'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur',
    description: `
    <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>

<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>

<p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
    `,
    categories: ['Apple', 'Laptops', 'Computers']
  },
  {
    id: '9',
    name: 'Apple TV Gen. 5',
    price: 129,
    sale_price: 99,
    stock: 4,
    rating: 4.3,
    images: [
      '/static/images/placeholders/products/9.png',
      '/static/images/placeholders/fitness/1.jpg',
      '/static/images/placeholders/fitness/2.jpg',
      '/static/images/placeholders/fitness/3.jpg',
      '/static/images/placeholders/fitness/4.jpg'
    ],
    orders: 73,
    summary:
      'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores',
    description: `
    <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>

<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
    `,
    categories: ['Apple', 'TV', 'WIFI']
  },
  {
    id: '10',
    name: 'Apple iPad PRO 2022',
    price: 999,
    sale_price: 849,
    stock: 2,
    rating: 4.1,
    images: [
      '/static/images/placeholders/products/10.png',
      '/static/images/placeholders/fitness/1.jpg',
      '/static/images/placeholders/fitness/2.jpg',
      '/static/images/placeholders/fitness/3.jpg',
      '/static/images/placeholders/fitness/4.jpg'
    ],
    orders: 94,
    summary:
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
    description: `
    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

<p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>

<p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
    `,
    categories: ['Apple', 'Tablets', 'Electronics']
  }
];

mock.onGet('/api/products').reply(() => {
  return [200, { products }];
});

mock.onGet('/api/product').reply((config) => {
  const { productId } = config.params;
  const product = products.find((_product) => _product.id === productId);

  return [200, { product }];
});
