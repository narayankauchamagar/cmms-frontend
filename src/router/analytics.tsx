import { lazy, Suspense } from 'react';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const WOAnalytics = Loader(
  lazy(() => import('../content/own/Analytics/WorkOrder'))
);

const analyticsRoutes = [
  {
    path: 'work-orders',
    children: [
      { path: 'status', element: <WOAnalytics /> },
      { path: 'analysis', element: <WOAnalytics /> },
      { path: 'aging', element: <WOAnalytics /> },
      { path: 'time-cost', element: <WOAnalytics /> }
    ]
  }
];

export default analyticsRoutes;
