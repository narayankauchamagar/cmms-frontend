import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const GeneralSettings = Loader(lazy(() => import('src/content/own/Settings/general')));

const settingsRoutes = [
  {
    path: '',
    element: <GeneralSettings />
  },
];

export default settingsRoutes;
