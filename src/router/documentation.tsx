import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Docs

const Introduction = Loader(
  lazy(() => import('src/content/docs/Introduction'))
);
const Authentication = Loader(
  lazy(() => import('src/content/docs/Authentication'))
);
const Changelog = Loader(lazy(() => import('src/content/docs/Changelog')));
const ContactSupport = Loader(
  lazy(() => import('src/content/docs/ContactSupport'))
);
const Dependencies = Loader(
  lazy(() => import('src/content/docs/Dependencies'))
);
const Installation = Loader(
  lazy(() => import('src/content/docs/Installation'))
);
const Internationalization = Loader(
  lazy(() => import('src/content/docs/Internationalization'))
);
const Routing = Loader(lazy(() => import('src/content/docs/Routing')));
const RtlLayout = Loader(lazy(() => import('src/content/docs/RtlLayout')));
const ApiRequests = Loader(lazy(() => import('src/content/docs/ApiRequests')));
const ThemesCustomization = Loader(
  lazy(() => import('src/content/docs/ThemesCustomization'))
);

const documentationRoutes = [
  {
    path: '',
    element: <Navigate to="introduction" replace />
  },
  {
    path: 'introduction',
    element: <Introduction />
  },
  {
    path: 'authentication',
    element: <Authentication />
  },
  {
    path: 'changelog',
    element: <Changelog />
  },
  {
    path: 'contact-support',
    element: <ContactSupport />
  },
  {
    path: 'dependencies',
    element: <Dependencies />
  },
  {
    path: 'installation',
    element: <Installation />
  },
  {
    path: 'internationalization',
    element: <Internationalization />
  },
  {
    path: 'routing',
    element: <Routing />
  },
  {
    path: 'rtl-layout',
    element: <RtlLayout />
  },
  {
    path: 'api-requests',
    element: <ApiRequests />
  },
  {
    path: 'themes-customization',
    element: <ThemesCustomization />
  }
];

export default documentationRoutes;
