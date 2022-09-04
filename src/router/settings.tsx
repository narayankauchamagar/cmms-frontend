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
  lazy(() => import('src/content/own/Settings/general'))
);
const WorkOrderSettings = Loader(
  lazy(() => import('src/content/own/Settings/WorkOrder'))
);
const RolesSettings = Loader(
  lazy(() => import('src/content/own/Settings/Roles'))
);

const settingsRoutes = [
  {
    path: '',
    element: <GeneralSettings />
  },
  {
    path: 'work-order',
    element: <WorkOrderSettings />
  },
  ,
  {
    path: 'roles',
    element: <RolesSettings />
  }
];

export default settingsRoutes;
