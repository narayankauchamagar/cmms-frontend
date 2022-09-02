import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Dashboards

const Automation = Loader(
  lazy(() => import('src/content/dashboards/Automation'))
);
const Analytics = Loader(
  lazy(() => import('src/content/dashboards/Analytics'))
);
const Reports = Loader(lazy(() => import('src/content/dashboards/Reports')));
const Banking = Loader(lazy(() => import('src/content/dashboards/Banking')));
const Commerce = Loader(lazy(() => import('src/content/dashboards/Commerce')));
const Expenses = Loader(lazy(() => import('src/content/dashboards/Expenses')));
const Crypto = Loader(lazy(() => import('src/content/dashboards/Crypto')));
const Finance = Loader(lazy(() => import('src/content/dashboards/Finance')));
const Fitness = Loader(lazy(() => import('src/content/dashboards/Fitness')));
const HealthcareDoctor = Loader(
  lazy(() => import('src/content/dashboards/Healthcare'))
);
const HealthcareHospital = Loader(
  lazy(() => import('src/content/dashboards/Healthcare/HospitalView'))
);
const Helpdesk = Loader(lazy(() => import('src/content/dashboards/Helpdesk')));
const Learning = Loader(lazy(() => import('src/content/dashboards/Learning')));
const Monitoring = Loader(
  lazy(() => import('src/content/dashboards/Monitoring'))
);
const Products = Loader(lazy(() => import('src/content/dashboards/Products')));
const Statistics = Loader(
  lazy(() => import('src/content/dashboards/Statistics'))
);
const Tasks = Loader(lazy(() => import('src/content/dashboards/Tasks')));

const dashboardsRoutes = [
  {
    path: '',
    element: <Analytics />
  },
  {
    path: 'automation',
    element: <Automation />
  },
  {
    path: 'analytics',
    element: <Analytics />
  },
  {
    path: 'reports',
    element: <Reports />
  },
  {
    path: 'banking',
    element: <Banking />
  },
  {
    path: 'commerce',
    element: <Commerce />
  },
  {
    path: 'expenses',
    element: <Expenses />
  },
  {
    path: 'crypto',
    element: <Crypto />
  },
  {
    path: 'finance',
    element: <Finance />
  },
  {
    path: 'fitness',
    element: <Fitness />
  },
  {
    path: 'healthcare',
    children: [
      {
        path: '',
        element: <Navigate to="hospital" replace />
      },
      {
        path: 'hospital',
        element: <HealthcareHospital />
      },
      {
        path: 'doctor',
        element: <HealthcareDoctor />
      }
    ]
  },
  {
    path: 'helpdesk',
    element: <Helpdesk />
  },
  {
    path: 'learning',
    element: <Learning />
  },
  {
    path: 'monitoring',
    element: <Monitoring />
  },
  {
    path: 'products',
    element: <Products />
  },
  {
    path: 'statistics',
    element: <Statistics />
  },
  {
    path: 'tasks',
    element: <Tasks />
  }
];

export default dashboardsRoutes;
