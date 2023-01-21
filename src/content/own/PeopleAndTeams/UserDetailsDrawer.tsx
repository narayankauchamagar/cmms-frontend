import { ChangeEvent, useState } from 'react';
import {
  alpha,
  Avatar,
  Box,
  CardContent,
  Divider,
  styled,
  Tab,
  Tabs,
  Typography,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Scrollbar from 'src/components/Scrollbar';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import { OwnUser } from '../../../models/user';

const AvatarPrimary = styled(Avatar)(
  ({ theme }) => `
    background: ${theme.colors.primary.lighter};
    color: ${theme.colors.primary.main};
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
`
);

const TabsContainerWrapper = styled(CardContent)(
  ({ theme }) => `
        background-color: ${theme.colors.alpha.black[5]};

        .MuiTabs-flexContainer {
            justify-content: center;
        }
  `
);

interface PropsType {
  user: OwnUser;
}

function UserDetailsDrawer({ user }: PropsType) {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const [currentTab, setCurrentTab] = useState<string>('overview');

  const tabs = [
    { value: 'overview', label: t('Overview') },
    { value: 'activity', label: t('Activity') }
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };
  const fieldsToRender = (
    user: OwnUser
  ): { label: string; value: string | number }[] => [
    {
      label: t('id'),
      value: user.id
    },
    {
      label: t('First Name'),
      value: user.firstName
    },
    {
      label: t('Last Name'),
      value: user.lastName
    },
    {
      label: t('Email'),
      value: user.email
    },
    {
      label: t('Phone'),
      value: user.phone
    },
    {
      label: t('Job Title'),
      value: user.jobTitle
    },
    {
      label: t('Role'),
      value: user.role.name
    },
    {
      label: t('Hourly Rate'),
      value: user.rate
    }
  ];

  //////////////////////////////////////////////////////////////////////////////////////////////
  const chart3Options: ApexOptions = {
    stroke: {
      curve: 'smooth',
      width: [0, 5]
    },
    theme: {
      mode: theme.palette.mode
    },
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      }
    },
    colors: [alpha(theme.colors.primary.main, 0.4), theme.colors.primary.main],
    fill: {
      opacity: 1
    },
    labels: [
      '01 Aug 2021',
      '02 Aug 2021',
      '03 Aug 2021',
      '04 Aug 2021',
      '05 Aug 2021',
      '06 Aug 2021',
      '07 Aug 2021',
      '08 Aug 2021',
      '09 Aug 2021',
      '10 Aug 2021',
      '11 Aug 2021',
      '12 Aug 2021'
    ],
    xaxis: {
      type: 'datetime'
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      strokeDashArray: 5,
      borderColor: theme.palette.divider
    },
    legend: {
      show: false
    }
  };

  const chart3Data = [
    {
      name: 'Income',
      type: 'column',
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    },
    {
      name: 'Expenses',
      type: 'line',
      data: [231, 442, 335, 227, 433, 222, 117, 316, 242, 252, 162, 176]
    }
  ];
  //////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <Box
      sx={{
        height: '100%',
        width: { xs: 340, lg: 400 }
      }}
    >
      <Scrollbar>
        <Box
          sx={{
            textAlign: 'center',
            mt: 1
          }}
        >
          <Typography component="span" variant="subtitle2">
            User Details
          </Typography>
        </Box>
        <Divider sx={{ my: 1 }} />

        <Box
          sx={{
            textAlign: 'center'
          }}
        >
          <AvatarPrimary
            sx={{
              mx: 'auto',
              my: 2
            }}
            variant="rounded"
          >
            <Typography variant="h1">
              {Array.from(user.firstName)[0].toUpperCase()}
            </Typography>
          </AvatarPrimary>
          <Typography variant="h3" noWrap gutterBottom>
            {`${user.firstName} ${user.lastName}`}
          </Typography>
        </Box>
        <Divider sx={{ my: 3 }} />

        <TabsContainerWrapper>
          <Tabs
            onChange={handleTabsChange}
            value={currentTab}
            variant="scrollable"
            scrollButtons="auto"
            textColor="primary"
            indicatorColor="primary"
          >
            {tabs.map((tab) => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </Tabs>
        </TabsContainerWrapper>

        <Divider sx={{ my: 1 }} />

        {currentTab === 'overview' && (
          <>
            {fieldsToRender(user).map(({ label, value }) =>
              value ? (
                <>
                  <Box mt={1} px={3}>
                    <Typography component="span" variant="subtitle2">
                      {label}
                    </Typography>
                    <Typography variant="h5">{value}</Typography>
                  </Box>
                  <Divider sx={{ my: 1 }} />
                </>
              ) : null
            )}
          </>
        )}

        {currentTab === 'activity' && (
          <Box sx={{ mt: 3, px: 3, textAlign: 'center' }}>
            <Typography variant="subtitle2">
              {t('Work orders completed in last 14 days')}
            </Typography>
            <Typography variant="h2">{t('0')}</Typography>
            <Typography variant="subtitle2" color="green">
              {t(
                'You have not completed any work orders in the last two weeks'
              )}
            </Typography>

            {/* ////////////////////////////////////////////////////////////////////////// */}
            <Box flexGrow={1} px={2} pb={2}>
              <Chart
                options={chart3Options}
                series={chart3Data}
                type="line"
                height={'100%'}
              />
            </Box>
            {/* ////////////////////////////////////////////////////////////////////////// */}
          </Box>
        )}
      </Scrollbar>
    </Box>
  );
}

export default UserDetailsDrawer;
