import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const GeneralSettings = Loader(lazy(() => import('src/content/own/Settings/General')));
const WorkOrderSettings = Loader(lazy(() => import('src/content/own/Settings/WorkOrder')));

const settingsRoutes = [
  {
    path: '',
    element: <GeneralSettings />
  },
  {
    path: 'work-order',
    element: <WorkOrderSettings />
  },
];

export default settingsRoutes;
