import { Container, Typography, Grid } from '@mui/material';

import { Helmet } from 'react-helmet-async';
import PageHeader from 'src/components/PageHeaderDocs';
import { Prism } from 'react-syntax-highlighter';
import a11yDark from 'react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark';

function Routing() {
  const routingExample = `import Guest from 'src/components/Guest';
import Authenticated from 'src/components/Authenticated';
import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';

const Analytics = Loader(lazy(() => import('src/content/dashboards/Analytics')));
const Banking = Loader(lazy(() => import('src/content/dashboards/Banking')));
const Commerce = Loader(lazy(() => import('src/content/dashboards/Commerce')));

const routes: PartialRouteObject[] = [
  {
    path: 'dashboards',
    element: (
      <Authenticated>
        <ExtendedSidebarLayout />
      </Authenticated>
    ),
    children: [
      {
        path: '/',
        element: (
          <Navigate
            to="/dashboards/analytics"
            replace
          />
        )
      },
      {
        path: 'analytics',
        element: <Analytics />
      },
      {
        path: 'banking',
        element: <Banking />
      }
    ]
  }
];

export default routes;`;
  const sidebarExample = `import type { ReactNode } from 'react';

  import AnalyticsTwoToneIcon from '@mui/icons-material/AnalyticsTwoTone';
  
  export interface MenuItem {
    link?: string;
    icon?: ReactNode;
    badge?: string;
    items?: MenuItem[];
    name: string;
  }
  
  export interface MenuItems {
    items: MenuItem[];
    heading: string;
  }
  
  const menuItems: MenuItems[] = [
    {
      heading: 'Dashboards',
      items: [
        {
          name: 'Analytics',
          icon: AnalyticsTwoToneIcon,
          link: '/dashboards/analytics'
        },
        {
          name: 'Healthcare',
          icon: AnalyticsTwoToneIcon,
          link: '/dashboards/healthcare',
          items: [
            {
              name: 'Doctors Page',
              badge: 'Hot',
              link: '/dashboards/healthcare/doctor'
            },
            {
              name: 'Hospital Overview',
              link: '/dashboards/healthcare/hospital'
            }
          ]
        }
      ]
    },
    {
      heading: 'Applications',
      items: [
        {
          name: 'Calendar',
          icon: AnalyticsTwoToneIcon,
          link: '/applications/calendar'
        }
      ]
    }
  ];
  
  export default menuItems;
  `;

  return (
    <>
      <Helmet>
        <title>Routing - Tokyo White React Typescript Admin Dashboard</title>
      </Helmet>
      <Container maxWidth={false}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <PageHeader heading="Routing" subheading="" />
          </Grid>
          <Grid item xs={12}>
            <Typography paragraph>
              The routing in Tokyo React Admin Dashboad uses{' '}
              <code>react-router@6</code> and can be configured inside this
              file: <code>src\router.tsx</code>
            </Typography>
            <Typography paragraph>
              Below you'll find a code snippet extracted from the router.tsx
              file:
            </Typography>
            <Prism
              showLineNumbers
              wrapLines
              language="javascript"
              style={a11yDark}
            >
              {routingExample}
            </Prism>
            <br />
            <Typography
              variant="h2"
              sx={{
                mb: 2
              }}
            >
              Sidebar Navigation
            </Typography>
            <Typography paragraph>
              To modify the current sidebar navigation, edit the following file{' '}
              <code>
                src\layouts\ExtendedSidebarLayout\Sidebar\SidebarMenu\items.ts
              </code>
              . It contains an items array used for building the sidebar menu
              tree. The 'link' parameter represents the entry from{' '}
              <code>router.tsx</code>
            </Typography>
            <Prism
              showLineNumbers
              wrapLines
              language="javascript"
              style={a11yDark}
            >
              {sidebarExample}
            </Prism>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Routing;
