import { ChangeEvent, useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Divider,
  Button,
  Tabs,
  Tab,
  Avatar,
  Box,
  styled,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import HourglassTopTwoToneIcon from '@mui/icons-material/HourglassTopTwoTone';
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';
import VpnLockTwoToneIcon from '@mui/icons-material/VpnLockTwoTone';
import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';

const TabsContainerWrapper = styled(CardContent)(
  ({ theme }) => `
      background-color: ${theme.colors.alpha.black[5]};
`
);

const AvatarPending = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.warning.lighter};
      color: ${theme.colors.warning.main};
      width: ${theme.spacing(10)};
      height: ${theme.spacing(10)};
      margin: 0 auto ${theme.spacing(2)};

      .MuiSvgIcon-root {
        font-size: ${theme.typography.pxToRem(42)};
      }
`
);

const AvatarError = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.error.lighter};
      color: ${theme.colors.error.main};
      width: ${theme.spacing(10)};
      height: ${theme.spacing(10)};
      margin: 0 auto ${theme.spacing(2)};

      .MuiSvgIcon-root {
        font-size: ${theme.typography.pxToRem(42)};
      }
`
);

function Activity() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const [currentTab, setCurrentTab] = useState<string>('daily');

  const tabs = [
    { value: 'daily', label: t('Daily') },
    { value: 'weekly', label: t('Weekly') },
    { value: 'monthly', label: t('Monthly') }
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  const chartOptions: ApexOptions = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
      width: [3, 3],
      dashArray: [0, 5],
      colors: [theme.colors.error.main, theme.colors.primary.main]
    },
    fill: {
      opacity: [1, 0.2]
    },
    theme: {
      mode: theme.palette.mode
    },
    markers: {
      hover: {
        sizeOffset: 1
      },
      shape: 'circle',
      size: 5,
      strokeWidth: 2,
      strokeOpacity: 1,
      strokeColors: theme.colors.alpha.white[100],
      colors: [theme.colors.error.main, theme.colors.primary.main]
    },
    colors: [theme.colors.error.main, theme.colors.primary.main],
    labels: [
      '12:00 AM',
      '3:00 AM',
      '6:00 AM',
      '9:00 AM',
      '12:00 PM',
      '3:00 PM',
      '6:00 PM',
      '9:00 PM',
      '12:00 PM'
    ],
    dataLabels: {
      enabled: false
    },
    legend: {
      labels: {
        useSeriesColors: true
      },
      itemMargin: {
        horizontal: 15,
        vertical: 15
      },
      show: true
    },
    xaxis: {
      axisBorder: {
        show: false
      },
      labels: {
        show: true
      }
    },
    yaxis: {
      show: true,
      labels: {
        show: true
      }
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },
      strokeDashArray: 5,
      borderColor: theme.colors.alpha.black[10]
    }
  };

  const chartData = [
    {
      type: 'line',
      name: 'Previous Period',
      data: [344, 512, 829, 696, 847, 437, 935, 433, 962]
    },
    {
      type: 'area',
      name: 'Current Period',
      data: [740, 367, 372, 478, 459, 630, 894, 556, 369]
    }
  ];

  return (
    <Card
      sx={{
        height: '100%'
      }}
    >
      <CardHeader
        title={
          <>
            {t('Activity')}{' '}
            <Typography
              variant="body2"
              component="span"
              fontWeight="bold"
              color="text.secondary"
            >
              ({t('burned calories')})
            </Typography>
          </>
        }
      />
      <Divider />
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
      <Divider />
      <Box p={2}>
        {currentTab === 'daily' && (
          <>
            <Chart
              options={chartOptions}
              series={chartData}
              type="line"
              height={322}
            />
            <Divider />
            <Box
              mt={2}
              sx={{
                textAlign: 'center'
              }}
            >
              <Button
                size="small"
                variant="outlined"
                sx={{
                  borderWidth: '2px',
                  '&:hover': {
                    borderWidth: '2px'
                  }
                }}
              >
                {t('View more activity charts')}
              </Button>
            </Box>
          </>
        )}
        {currentTab === 'weekly' && (
          <Box
            sx={{
              py: { xs: 2, md: 6, lg: 8 },
              textAlign: 'center'
            }}
          >
            <AvatarPending>
              <HourglassTopTwoToneIcon />
            </AvatarPending>
            <Typography variant="h2">{t('No reports, yet')}!</Typography>
            <Typography
              variant="h4"
              sx={{
                pt: 1,
                pb: 3
              }}
              fontWeight="normal"
              color="text.secondary"
            >
              {t('There is not enough data to generate the weekly report, yet')}
              !
            </Typography>
            <Button
              size="small"
              color="warning"
              variant="outlined"
              startIcon={<AdminPanelSettingsTwoToneIcon />}
              sx={{
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px'
                }
              }}
            >
              {t('Update settings')}
            </Button>
          </Box>
        )}
        {currentTab === 'monthly' && (
          <Box
            sx={{
              py: { xs: 2, md: 6, lg: 8 },
              textAlign: 'center'
            }}
          >
            <AvatarError>
              <VpnLockTwoToneIcon />
            </AvatarError>
            <Typography variant="h2">{t('Not available')}!</Typography>
            <Typography
              variant="h4"
              sx={{
                pt: 1,
                pb: 3
              }}
              fontWeight="normal"
              color="text.secondary"
            >
              {t('Share the share health data, in app settings')}!
            </Typography>
            <Button
              size="small"
              color="error"
              variant="outlined"
              startIcon={<VpnKeyTwoToneIcon />}
              sx={{
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px'
                }
              }}
            >
              {t('Modify privacy settings')}
            </Button>
          </Box>
        )}
      </Box>
    </Card>
  );
}

export default Activity;
