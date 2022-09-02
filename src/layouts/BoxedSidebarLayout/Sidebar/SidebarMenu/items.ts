import type { ReactNode } from 'react';

import AnalyticsTwoToneIcon from '@mui/icons-material/AnalyticsTwoTone';
import HealthAndSafetyTwoToneIcon from '@mui/icons-material/HealthAndSafetyTwoTone';
import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
import ErrorTwoToneIcon from '@mui/icons-material/ErrorTwoTone';
import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import SupportTwoToneIcon from '@mui/icons-material/SupportTwoTone';
import ReceiptTwoToneIcon from '@mui/icons-material/ReceiptTwoTone';
import BackupTableTwoToneIcon from '@mui/icons-material/BackupTableTwoTone';
import SmartToyTwoToneIcon from '@mui/icons-material/SmartToyTwoTone';

export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  badge?: string;
  badgeTooltip?: string;

  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: 'General',
    items: [
      {
        name: 'Blueprints',
        icon: BackupTableTwoToneIcon,
        link: '',
        items: [
          {
            name: 'Extended sidebar',
            link: '/extended-sidebar/dashboards',
            badge: 'v3.0',
            badgeTooltip: 'Added in version 3.1'
          },
          {
            name: 'Accent header',
            link: '/accent-header/dashboards',
            badge: '',
            badgeTooltip: 'Updated'
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
        link: '/boxed-sidebar/dashboards',
        items: [
          {
            name: 'Reports',
            link: 'dashboards/reports'
          },
          {
            name: 'Expenses',
            link: 'dashboards/expenses',
            badge: '',
            badgeTooltip: 'This is a dot tooltip example'
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
            name: 'Healthcare',
            link: '/boxed-sidebar/dashboards/healthcare',
            items: [
              {
                name: 'Doctors',
                link: 'dashboards/healthcare/doctor'
              },
              {
                name: 'Hospital',
                link: 'dashboards/healthcare/hospital'
              }
            ]
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
        badgeTooltip: 'Tokyo contains over 250 data display blocks',
        link: '/boxed-sidebar/blocks',
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
        link: '/boxed-sidebar/applications',
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
      }
    ]
  },
  {
    heading: 'Management',
    items: [
      {
        name: 'Users',
        icon: AssignmentIndTwoToneIcon,
        link: '/boxed-sidebar/management/users',
        items: [
          {
            name: 'List',
            link: 'management/users/list'
          },
          {
            name: 'User Profile',
            link: 'management/users/single'
          }
        ]
      },
      {
        name: 'Projects',
        icon: AccountTreeTwoToneIcon,
        link: '/boxed-sidebar/management/projects/list'
      },
      {
        name: 'Commerce',
        icon: StorefrontTwoToneIcon,
        link: '/boxed-sidebar/management/commerce',
        items: [
          {
            name: 'Shop',
            link: 'management/commerce/shop'
          },
          {
            name: 'List',
            link: 'management/commerce/products/list'
          },
          {
            name: 'Details',
            link: 'management/commerce/products/single/1'
          },
          {
            name: 'Create',
            link: 'management/commerce/products/create'
          }
        ]
      },
      {
        name: 'Invoices',
        icon: ReceiptTwoToneIcon,
        link: '/boxed-sidebar/management/invoices',
        items: [
          {
            name: 'List',
            link: 'management/invoices/list'
          },
          {
            name: 'Details',
            link: 'management/invoices/single'
          }
        ]
      }
    ]
  },
  {
    heading: 'Extra Pages',
    items: [
      {
        name: 'Auth Pages',
        icon: VpnKeyTwoToneIcon,
        link: '/auth',
        items: [
          {
            name: 'Login',
            items: [
              {
                name: 'Basic',
                link: '/account/login-basic'
              },
              {
                name: 'Cover',
                link: '/account/login-cover'
              }
            ]
          },
          {
            name: 'Register',
            items: [
              {
                name: 'Basic',
                link: '/account/register-basic'
              },
              {
                name: 'Cover',
                link: '/account/register-cover'
              },
              {
                name: 'Wizard',
                link: '/account/register-wizard'
              }
            ]
          },
          {
            name: 'Recover Password',
            link: '/account/recover-password'
          }
        ]
      },
      {
        name: 'Status',
        icon: ErrorTwoToneIcon,
        link: '/status',
        items: [
          {
            name: 'Error 404',
            link: '/status/404'
          },
          {
            name: 'Error 500',
            link: '/status/500'
          },
          {
            name: 'Maintenance',
            link: '/status/maintenance'
          },
          {
            name: 'Coming Soon',
            link: '/status/coming-soon'
          }
        ]
      }
    ]
  },
  {
    heading: 'Foundation',
    items: [
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
