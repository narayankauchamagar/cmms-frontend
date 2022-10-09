import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const GeneralSettings = Loader(
  lazy(() => import('src/content/own/Settings/General'))
);
const WorkOrderSettings = Loader(
  lazy(() => import('src/content/own/Settings/WorkOrder'))
);
const RequestSettings = Loader(
  lazy(() => import('src/content/own/Settings/Request'))
);
const RolesSettings = Loader(
  lazy(() => import('src/content/own/Settings/Roles'))
);

const UserProfile = Loader(lazy(() => import('src/content/own/UserProfile')));
const CompanyProfile = Loader(
  lazy(() => import('src/content/own/CompanyProfile'))
);
const WorkOrderCategories = Loader(
  lazy(() => import('src/content/own/Categories/WorkOrder'))
);
const AssetStatusCategories = Loader(
  lazy(() => import('src/content/own/Categories/AssetStatus'))
);
const PurchaseOrderCategories = Loader(
  lazy(() => import('src/content/own/Categories/PurchaseOrder'))
);
const MeterCategories = Loader(
  lazy(() => import('src/content/own/Categories/Meter'))
);
const TimeCategories = Loader(
  lazy(() => import('src/content/own/Categories/Timer'))
);
const SubscriptionPlans = Loader(
  lazy(() => import('src/content/own/Subscription/Plans'))
);
const Files = Loader(lazy(() => import('src/content/own/Files')));
const PurchaseOrders = Loader(
  lazy(() => import('src/content/own/PurchaseOrders'))
);
const Locations = Loader(lazy(() => import('src/content/own/Locations')));

const VendorsAndCustomers = Loader(
  lazy(() => import('src/content/own/VendorsAndCustomers'))
);
const Assets = Loader(lazy(() => import('src/content/own/Assets')));
const ShowAsset = Loader(lazy(() => import('src/content/own/Assets/Show')));
const Inventory = Loader(lazy(() => import('src/content/own/Inventory')));

const PeopleAndTeams = Loader(
  lazy(() => import('src/content/own/PeopleAndTeams'))
);

const appRoutes = [
  {
    path: 'settings',
    children: [
      {
        path: '',
        element: <GeneralSettings />
      },
      {
        path: 'work-order',
        element: <WorkOrderSettings />
      },
      {
        path: 'request',
        element: <RequestSettings />
      },
      {
        path: 'roles',
        element: <RolesSettings />
      }
    ]
  },
  {
    path: 'account',
    children: [
      {
        path: 'profile',
        element: <UserProfile />
      },
      {
        path: 'company-profile',
        element: <CompanyProfile />
      }
    ]
  },
  {
    path: 'subscription',
    children: [
      {
        path: 'plans',
        element: <SubscriptionPlans />
      }
    ]
  },
  {
    path: 'files',
    element: <Files />
  },
  {
    path: 'purchase-orders',
    element: <PurchaseOrders />
  },
  {
    path: 'locations',
    element: <Locations />
  },
  {
    path: 'inventory',
    children: [
      {
        path: 'parts',
        children: [
          { path: '', element: <Inventory /> },
          { path: ':partId', element: <Inventory /> }
        ]
      },
      {
        path: 'sets',
        children: [
          { path: '', element: <Inventory /> },
          { path: ':setId', element: <Inventory /> }
        ]
      }
    ]
  },
  {
    path: 'assets',
    children: [
      { path: '', element: <Assets /> },
      {
        path: ':assetId',
        children: [
          { path: 'work-orders', element: <ShowAsset /> },
          { path: 'details', element: <ShowAsset /> },
          { path: 'parts', element: <ShowAsset /> }
        ]
      }
    ]
  },
  {
    path: 'categories',
    children: [
      {
        path: '',
        element: <WorkOrderCategories />
      },
      {
        path: 'asset-status',
        element: <AssetStatusCategories />
      },
      {
        path: 'purchase-order',
        element: <PurchaseOrderCategories />
      },
      {
        path: 'meter',
        element: <MeterCategories />
      },
      {
        path: 'time',
        element: <TimeCategories />
      }
    ]
  },
  {
    path: 'vendors-customers',
    children: [
      {
        path: '',
        element: <VendorsAndCustomers />
      },
      {
        path: 'customers',
        element: <VendorsAndCustomers />
      }
    ]
  },
  {
    path: 'people-teams',
    children: [
      {
        path: '',
        element: <PeopleAndTeams />
      },
      {
        path: 'teams',
        element: <PeopleAndTeams />
      }
    ]
  }
];

export default appRoutes;
