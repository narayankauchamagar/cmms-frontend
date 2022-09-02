import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Applications

const FileManager = Loader(
  lazy(() => import('src/content/applications/FileManager'))
);
const Messenger = Loader(
  lazy(() => import('src/content/applications/Messenger'))
);
const Calendar = Loader(
  lazy(() => import('src/content/applications/Calendar'))
);
const JobsPlatform = Loader(
  lazy(() => import('src/content/applications/JobsPlatform'))
);
const ProjectsBoard = Loader(
  lazy(() => import('src/content/applications/ProjectsBoard'))
);
const Mailbox = Loader(lazy(() => import('src/content/applications/Mailbox')));

const applicationsRoutes = [
  {
    path: '',
    element: <Navigate to="calendar" replace />
  },
  {
    path: 'calendar',
    element: <Calendar />
  },
  {
    path: 'file-manager',
    element: <FileManager />
  },
  {
    path: 'jobs-platform',
    element: <JobsPlatform />
  },
  {
    path: 'projects-board',
    element: <ProjectsBoard />
  },
  {
    path: 'messenger',
    element: <Messenger />
  },
  {
    path: 'mailbox',
    children: [
      {
        path: '',
        element: <Navigate to="inbox" replace />
      },
      {
        path: 'tag/:labelTag',
        element: <Mailbox />
      },
      {
        path: 'tag/:labelTag/:mailboxCategory',
        element: <Mailbox />
      },
      {
        path: ':categoryTag',
        element: <Mailbox />
      },
      {
        path: ':categoryTag/:mailboxCategory',
        element: <Mailbox />
      }
    ]
  }
];

export default applicationsRoutes;
