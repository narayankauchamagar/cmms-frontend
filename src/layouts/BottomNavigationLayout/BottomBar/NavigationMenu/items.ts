import type { ReactNode } from 'react';

import AnalyticsTwoToneIcon from '@mui/icons-material/AnalyticsTwoTone';
import HealthAndSafetyTwoToneIcon from '@mui/icons-material/HealthAndSafetyTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import SupportTwoToneIcon from '@mui/icons-material/SupportTwoTone';
import BackupTableTwoToneIcon from '@mui/icons-material/BackupTableTwoTone';
import SmartToyTwoToneIcon from '@mui/icons-material/SmartToyTwoTone';

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
    heading: '',
    items: [
      {
        name: 'Blueprints',
        icon: BackupTableTwoToneIcon,
        badge: 'v3',
        link: '',
        items: [
          {
            name: 'Extended sidebar',
            link: '/extended-sidebar/dashboards'
          },
          {
            name: 'Accent header',
            link: '/accent-header/dashboards',
            badge: ''
          },
          {
            name: 'Accent sidebar',
            link: '/accent-sidebar/dashboards'
          },
          {
            name: 'Boxed sidebar',
            link: '/boxed-sidebar/dashboards'
          },
          {
            name: 'Collapsed sidebar',
            link: '/collapsed-sidebar/dashboards'
          },
          {
            name: 'Bottom navigation',
            link: '/bottom-navigation/dashboards'
          },
          {
            name: 'Top navigation',
            link: '/top-navigation/dashboards'
          }
        ]
      },
      {
        name: 'Dashboards',
        icon: SmartToyTwoToneIcon,
        link: '/bottom-navigation/dashboards',
        items: [
          {
            name: 'Reports',
            link: 'dashboards/reports',
            badge: ''
          },
          {
            name: 'Expenses',
            link: 'dashboards/expenses',
            badge: ''
          },
          {
            name: 'Products',
            link: 'dashboards/products'
          },
          {
            name: 'Statistics',
            link: 'dashboards/statistics'
          },
          {
            name: 'Automation',
            link: 'dashboards/automation'
          },
          {
            name: 'Analytics',
            link: 'dashboards/analytics'
          },
          {
            name: 'Banking',
            link: 'dashboards/banking'
          },
          {
            name: 'Commerce',
            link: 'dashboards/commerce'
          },
          {
            name: 'Crypto',
            link: 'dashboards/crypto'
          },
          {
            name: 'Finance',
            link: 'dashboards/finance'
          },
          {
            name: 'Fitness',
            link: 'dashboards/fitness'
          },
          {
            name: 'Doctors',
            link: 'dashboards/healthcare/doctor'
          },
          {
            name: 'Hospital',
            link: 'dashboards/healthcare/hospital'
          },
          {
            name: 'Helpdesk',
            link: 'dashboards/helpdesk'
          },
          {
            name: 'Learning',
            link: 'dashboards/learning'
          },
          {
            name: 'Monitoring',
            link: 'dashboards/monitoring'
          },
          {
            name: 'Tasks',
            link: 'dashboards/tasks'
          }
        ]
      },
      {
        name: 'Data Display',
        icon: HealthAndSafetyTwoToneIcon,
        badge: '',
        link: '/bottom-navigation/blocks',
        items: [
          {
            name: 'Charts large',
            link: 'blocks/charts-large'
          },
          {
            name: 'Charts small',
            link: 'blocks/charts-small'
          },
          {
            name: 'Composed cards',
            link: 'blocks/composed-cards'
          },
          {
            name: 'Grids',
            link: 'blocks/grids'
          },
          {
            name: 'Icon cards',
            link: 'blocks/icon-cards'
          },
          {
            name: 'Image cards',
            link: 'blocks/image-cards'
          },
          {
            name: 'Lists large',
            link: 'blocks/lists-large'
          },
          {
            name: 'Lists small',
            link: 'blocks/lists-small'
          },
          {
            name: 'Navigation',
            link: 'blocks/navigation'
          },
          {
            name: 'Profile cards',
            link: 'blocks/profile-cards'
          },
          {
            name: 'Progress circular',
            link: 'blocks/progress-circular'
          },
          {
            name: 'Progress horizontal',
            link: 'blocks/progress-horizontal'
          },
          {
            name: 'Sparklines large',
            link: 'blocks/sparklines-large'
          },
          {
            name: 'Sparklines small',
            link: 'blocks/sparklines-small'
          },
          {
            name: 'Statistics',
            link: 'blocks/statistics'
          }
        ]
      },
      {
        name: 'Applications',
        icon: AnalyticsTwoToneIcon,
        link: '/bottom-navigation/applications',
        items: [
          {
            name: 'Calendar',
            link: 'applications/calendar'
          },
          {
            name: 'File Manager',
            link: 'applications/file-manager'
          },
          {
            name: 'Jobs Platform',
            link: 'applications/jobs-platform'
          },
          {
            name: 'Mailbox',
            link: 'applications/mailbox/inbox'
          },
          {
            name: 'Messenger',
            link: 'applications/messenger'
          },
          {
            name: 'Projects Board',
            link: 'applications/projects-board'
          }
        ]
      },
      {
        name: 'Projects',
        icon: AccountTreeTwoToneIcon,
        link: '/bottom-navigation/management/projects/list'
      },
      {
        name: 'Overview',
        link: '/overview',
        icon: DesignServicesTwoToneIcon
      },
      {
        name: 'Documentation',
        icon: SupportTwoToneIcon,
        link: '/docs'
      }
    ]
  }
];

export default menuItems;
