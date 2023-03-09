import { RouteObject } from 'react-router';

import Authenticated from 'src/components/Authenticated';
import BaseLayout from 'src/layouts/BaseLayout';
import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';

import appRoutes from './app';
import accountRoutes from './account';
import baseRoutes from './base';

const router: RouteObject[] = [
  {
    path: 'account',
    children: accountRoutes
  },
  {
    path: '',
    element: <BaseLayout />,
    children: baseRoutes
  },
  {
    path: 'app',
    element: (
      <Authenticated>
        <ExtendedSidebarLayout />
      </Authenticated>
    ),
    children: appRoutes
  }
  // Documentation

  // {
  //   path: 'docs',
  //   element: <DocsLayout />,
  //   children: documentationRoutes
  // },
  //
  // // Boxed Sidebar Layout
  //
  // {
  //   path: 'boxed-sidebar',
  //   element: (
  //     <Authenticated>
  //       <BoxedSidebarLayout />
  //     </Authenticated>
  //   ),
  //   children: [
  //     {
  //       path: '',
  //       element: <Navigate to="dashboards" replace />
  //     },
  //     {
  //       path: 'dashboards',
  //       children: dashboardsRoutes
  //     },
  //     {
  //       path: 'blocks',
  //       children: blocksRoutes
  //     },
  //     {
  //       path: 'applications',
  //       children: applicationsRoutes
  //     },
  //     {
  //       path: 'management',
  //       children: managementRoutes
  //     }
  //   ]
  // },
  //
  // // Accent Sidebar Layout
  //
  // {
  //   path: 'accent-sidebar',
  //   element: (
  //     <Authenticated>
  //       <AccentSidebarLayout />
  //     </Authenticated>
  //   ),
  //   children: [
  //     {
  //       path: '',
  //       element: <Navigate to="dashboards" replace />
  //     },
  //     {
  //       path: 'dashboards',
  //       children: dashboardsRoutes
  //     },
  //     {
  //       path: 'blocks',
  //       children: blocksRoutes
  //     },
  //     {
  //       path: 'applications',
  //       children: applicationsRoutes
  //     },
  //     {
  //       path: 'management',
  //       children: managementRoutes
  //     }
  //   ]
  // },
  //
  // // Collapsed Sidebar Layout
  //
  // {
  //   path: 'collapsed-sidebar',
  //   element: (
  //     <Authenticated>
  //       <CollapsedSidebarLayout />
  //     </Authenticated>
  //   ),
  //   children: [
  //     {
  //       path: '',
  //       element: <Navigate to="dashboards" replace />
  //     },
  //     {
  //       path: 'dashboards',
  //       children: dashboardsRoutes
  //     },
  //     {
  //       path: 'blocks',
  //       children: blocksRoutes
  //     },
  //     {
  //       path: 'applications',
  //       children: applicationsRoutes
  //     },
  //     {
  //       path: 'management',
  //       children: managementRoutes
  //     }
  //   ]
  // },
  //
  // // Bottom Navigation Layout
  //
  // {
  //   path: 'bottom-navigation',
  //   element: (
  //     <Authenticated>
  //       <BottomNavigationLayout />
  //     </Authenticated>
  //   ),
  //   children: [
  //     {
  //       path: '',
  //       element: <Navigate to="dashboards" replace />
  //     },
  //     {
  //       path: 'dashboards',
  //       children: dashboardsRoutes
  //     },
  //     {
  //       path: 'blocks',
  //       children: blocksRoutes
  //     },
  //     {
  //       path: 'applications',
  //       children: applicationsRoutes
  //     },
  //     {
  //       path: 'management',
  //       children: managementRoutes
  //     }
  //   ]
  // },
  //
  // // Top Navigation Layout
  //
  // {
  //   path: 'top-navigation',
  //   element: (
  //     <Authenticated>
  //       <TopNavigationLayout />
  //     </Authenticated>
  //   ),
  //   children: [
  //     {
  //       path: '',
  //       element: <Navigate to="dashboards" replace />
  //     },
  //     {
  //       path: 'dashboards',
  //       children: dashboardsRoutes
  //     },
  //     {
  //       path: 'blocks',
  //       children: blocksRoutes
  //     },
  //     {
  //       path: 'applications',
  //       children: applicationsRoutes
  //     },
  //     {
  //       path: 'management',
  //       children: managementRoutes
  //     }
  //   ]
  // },
  //
  // // Accent Header Layout
  //
  // {
  //   path: 'accent-header',
  //   element: (
  //     <Authenticated>
  //       <AccentHeaderLayout />
  //     </Authenticated>
  //   ),
  //   children: [
  //     {
  //       path: '',
  //       element: <Navigate to="dashboards" replace />
  //     },
  //     {
  //       path: 'dashboards',
  //       children: dashboardsRoutes
  //     },
  //     {
  //       path: 'blocks',
  //       children: blocksRoutes
  //     },
  //     {
  //       path: 'applications',
  //       children: applicationsRoutes
  //     },
  //     {
  //       path: 'management',
  //       children: managementRoutes
  //     }
  //   ]
  // },
  //
  // // Extended Sidebar Layout
  //
  // {
  //   path: 'extended-sidebar',
  //   element: (
  //     <Authenticated>
  //       <ExtendedSidebarLayout />
  //     </Authenticated>
  //   ),
  //   children: [
  //     {
  //       path: 'dashboards',
  //       children: dashboardsRoutes
  //     },
  //     {
  //       path: 'blocks',
  //       children: blocksRoutes
  //     },
  //     {
  //       path: 'applications',
  //       children: applicationsRoutes
  //     },
  //     {
  //       path: 'management',
  //       children: managementRoutes
  //     }
  //   ]
  // }
];

export default router;
