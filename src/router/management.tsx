import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Management

const Users = Loader(lazy(() => import('../content/management/Users')));
const SingleUser = Loader(
  lazy(() => import('../content/management/Users/single'))
);
const Projects = Loader(lazy(() => import('../content/management/Projects')));
const Invoices = Loader(lazy(() => import('../content/management/Invoices')));
const SingleInvoice = Loader(
  lazy(() => import('../content/management/Invoices/single'))
);
const Products = Loader(lazy(() => import('../content/management/Products')));
const CreateProduct = Loader(
  lazy(() => import('../content/management/Products/create'))
);
const SingleProduct = Loader(
  lazy(() => import('../content/management/Products/single'))
);
const Shop = Loader(lazy(() => import('../content/management/Products/shop')));

const managementRoutes = [
  {
    path: '',
    element: <Navigate to="users" replace />
  },
  {
    path: 'users',
    children: [
      {
        path: '',
        element: <Navigate to="list" replace />
      },
      {
        path: 'list',
        element: <Users />
      },
      {
        path: 'single',
        children: [
          {
            path: '',
            element: <Navigate to="1" replace />
          },
          {
            path: ':userId',
            element: <SingleUser />
          }
        ]
      }
    ]
  },
  {
    path: 'projects',
    children: [
      {
        path: '',
        element: <Navigate to="list" replace />
      },
      {
        path: 'list',
        element: <Projects />
      }
    ]
  },
  {
    path: 'commerce',
    children: [
      {
        path: '',
        element: <Navigate to="shop" replace />
      },
      {
        path: 'shop',
        element: <Shop />
      },
      {
        path: 'products',
        children: [
          {
            path: '',
            element: <Navigate to="list" replace />
          },
          {
            path: 'list',
            element: <Products />
          },
          {
            path: 'create',
            element: <CreateProduct />
          },
          {
            path: 'single',
            children: [
              {
                path: '',
                element: <Navigate to="1" replace />
              },
              {
                path: ':productId',
                element: <SingleProduct />
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: 'invoices',
    children: [
      {
        path: '',
        element: <Navigate to="list" replace />
      },
      {
        path: 'list',
        element: <Invoices />
      },
      {
        path: 'single',
        children: [
          {
            path: '',
            element: <Navigate to="1" replace />
          },
          {
            path: ':invoiceId',
            element: <SingleInvoice />
          }
        ]
      }
    ]
  }
];

export default managementRoutes;
