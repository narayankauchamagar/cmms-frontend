import { lazy, Suspense } from 'react';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const WOStatusAnalytics = Loader(
  lazy(() => import('../content/own/Analytics/WorkOrder/Status'))
);

const analyticsRoutes = [
  {
    path: 'work-orders',
    children: [{ path: 'status', element: <WOStatusAnalytics /> }]
  }
];

export default analyticsRoutes;
