import { useRef, useState, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import {
  Button,
  Card,
  Box,
  CardContent,
  CardHeader,
  Divider,
  Menu,
  MenuItem,
  CardActions,
  Grid,
  Typography,
  styled,
  useTheme,
  Tabs,
  Tab
} from '@mui/material';

const CardActionsWrapper = styled(CardActions)(
  ({ theme }) => `
      background-color: ${theme.colors.alpha.black[5]};
      padding: 0;
      display: block;
`
);

const TabsContainerWrapper = styled(CardContent)(
  ({ theme }) => `
      background-color: ${theme.colors.alpha.black[5]};
`
);

const EmptyResultsWrapper = styled('img')(
  ({ theme }) => `
      max-width: 100%;
      width: auto;
      height: ${theme.spacing(17)};
      margin-top: ${theme.spacing(2)};
`
);

function TrafficSources() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const periods = [
    {
      value: 'today',
      text: t('Today')
    },
    {
      value: 'yesterday',
      text: t('Yesterday')
    },
    {
      value: 'last_month',
      text: t('Last month')
    },
    {
      value: 'last_year',
      text: t('Last year')
    }
  ];

  const data = {
    users: 2.593,
    pagesSession: 2.66,
    newSessions: '82.05%',
    avgSessionDuration: '00:03:56',
    bounceRate: '49.75%',
    sessions: 9.381
  };

  const actionRef1 = useRef<any>(null);
  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);
  const [period, setPeriod] = useState<string>('Select period');

  const [currentTab, setCurrentTab] = useState<string>('referral');

  const tabs = [
    { value: 'direct', label: t('Direct') },
    { value: 'referral', label: t('Referral') },
    { value: 'organic', label: t('Organic') },
    { value: 'social', label: t('Social') }
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  const chartOptions: ApexOptions = {
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
    markers: {
      hover: {
        sizeOffset: 2
      },
      shape: 'circle',
      size: 6,
      strokeWidth: 3,
      strokeOpacity: 1,
      strokeColors: theme.colors.alpha.white[100],
      colors: [theme.colors.error.main]
    },
    colors: [theme.colors.primary.main, theme.colors.error.main],
    fill: {
      opacity: 1
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 8,
        columnWidth: '25%'
      }
    },
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    dataLabels: {
      enabled: false
    },
    grid: {
      strokeDashArray: 5,
      borderColor: theme.palette.divider
    },
    legend: {
      show: false
    },
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: theme.palette.text.secondary
        }
      }
    },
    yaxis: {
      tickAmount: 6,
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: theme.palette.text.secondary
        }
      }
    }
  };

  const chartData = [
    {
      name: 'Past Referrals',
      type: 'column',
      data: [1008, 940, 1010, 821, 1035, 1030, 957, 926, 993, 1021, 997, 879]
    },
    {
      name: 'Current Referrals',
      type: 'line',
      data: [648, 745, 897, 743, 635, 842, 811, 696, 878, 987, 747, 731]
    }
  ];

  return (
    <Card>
      <CardHeader
        action={
          <>
            <Button
              size="small"
              variant="outlined"
              ref={actionRef1}
              onClick={() => setOpenMenuPeriod(true)}
              endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
            >
              {period}
            </Button>
            <Menu
              disableScrollLock
              anchorEl={actionRef1.current}
              onClose={() => setOpenMenuPeriod(false)}
              open={openPeriod}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
            >
              {periods.map((_period) => (
                <MenuItem
                  key={_period.value}
                  onClick={() => {
                    setPeriod(_period.text);
                    setOpenMenuPeriod(false);
                  }}
                >
                  {_period.text}
                </MenuItem>
              ))}
            </Menu>
          </>
        }
        title={t('Traffic Sources')}
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
      <Divider
        sx={{
          display: { xs: 'none', sm: 'flex' }
        }}
      />
      <CardContent>
        {currentTab === 'direct' && (
          <Box
            sx={{
              textAlign: 'center'
            }}
          >
            <EmptyResultsWrapper src="/static/images/placeholders/illustrations/1.svg" />
            <Typography
              align="center"
              variant="h4"
              fontWeight="normal"
              color="text.secondary"
              sx={{
                mt: 3
              }}
              gutterBottom
            >
              There are no charts generated for <b>Direct</b> traffic sources!
            </Typography>
            <Button
              variant="contained"
              sx={{
                my: 3
              }}
            >
              {t('Generate Chart')}
            </Button>
          </Box>
        )}
        {currentTab === 'referral' && (
          <Chart
            options={chartOptions}
            series={chartData}
            type="line"
            height={306}
          />
        )}
        {currentTab === 'organic' && (
          <Box
            sx={{
              textAlign: 'center'
            }}
          >
            <EmptyResultsWrapper src="/static/images/placeholders/illustrations/1.svg" />

            <Typography
              align="center"
              variant="h4"
              fontWeight="normal"
              color="text.secondary"
              sx={{
                mt: 3
              }}
              gutterBottom
            >
              There are no charts generated for <b>Organic</b> traffic sources!
            </Typography>
            <Button
              variant="contained"
              sx={{
                my: 3
              }}
            >
              {t('Generate Chart')}
            </Button>
          </Box>
        )}
        {currentTab === 'social' && (
          <Box
            sx={{
              textAlign: 'center'
            }}
          >
            <EmptyResultsWrapper src="/static/images/placeholders/illustrations/1.svg" />

            <Typography
              align="center"
              variant="h4"
              fontWeight="normal"
              color="text.secondary"
              sx={{
                mt: 3
              }}
              gutterBottom
            >
              There are no charts generated for <b>Social</b> traffic sources!
            </Typography>
            <Button
              variant="contained"
              sx={{
                my: 3
              }}
            >
              {t('Generate Chart')}
            </Button>
          </Box>
        )}
      </CardContent>
      <Divider />
      <CardActionsWrapper>
        <Box>
          <Grid container alignItems="center">
            <Grid
              xs={12}
              sm={6}
              md={4}
              item
              sx={{
                position: 'relative'
              }}
            >
              <Box
                component="span"
                sx={{
                  display: { xs: 'none', sm: 'inline-block' }
                }}
              >
                <Divider orientation="vertical" flexItem absolute />
              </Box>
              <Box
                sx={{
                  p: 3
                }}
              >
                <Box>
                  <Typography align="center" variant="h3" gutterBottom>
                    {data.users}
                  </Typography>
                  <Typography
                    align="center"
                    variant="body1"
                    color="text.secondary"
                  >
                    {t('Users')}
                  </Typography>
                </Box>
              </Box>
              <Divider />
            </Grid>
            <Grid
              xs={12}
              sm={6}
              md={4}
              item
              sx={{
                position: 'relative'
              }}
            >
              <Box
                component="span"
                sx={{
                  display: { xs: 'none', sm: 'inline-block' }
                }}
              >
                <Divider orientation="vertical" flexItem absolute />
              </Box>
              <Box
                sx={{
                  p: 3
                }}
              >
                <Box>
                  <Typography align="center" variant="h3" gutterBottom>
                    {data.sessions}
                  </Typography>
                  <Typography
                    align="center"
                    variant="body1"
                    color="text.secondary"
                  >
                    {t('Sessions')}
                  </Typography>
                </Box>
              </Box>
              <Divider />
            </Grid>
            <Grid
              xs={12}
              sm={6}
              md={4}
              item
              sx={{
                position: 'relative'
              }}
            >
              <Box
                component="span"
                sx={{
                  display: { xs: 'none', sm: 'inline-block' }
                }}
              >
                <Divider orientation="vertical" flexItem absolute />
              </Box>
              <Box
                sx={{
                  p: 3
                }}
              >
                <Box>
                  <Typography align="center" variant="h3" gutterBottom>
                    {data.pagesSession}
                  </Typography>
                  <Typography
                    align="center"
                    variant="body1"
                    color="text.secondary"
                  >
                    {t('pages/session')}
                  </Typography>
                </Box>
              </Box>
              <Divider />
            </Grid>
            <Grid
              xs={12}
              sm={6}
              md={4}
              item
              sx={{
                position: 'relative'
              }}
            >
              <Box
                component="span"
                sx={{
                  display: { xs: 'none', sm: 'inline-block' }
                }}
              >
                <Divider orientation="vertical" flexItem absolute />
              </Box>
              <Box
                sx={{
                  p: 3
                }}
              >
                <Box>
                  <Typography align="center" variant="h3" gutterBottom>
                    {data.avgSessionDuration}
                  </Typography>
                  <Typography
                    align="center"
                    variant="body1"
                    color="text.secondary"
                  >
                    {t('Avg. Session Duration')}
                  </Typography>
                </Box>
              </Box>
              <Divider />
            </Grid>
            <Grid
              xs={12}
              sm={6}
              md={4}
              item
              sx={{
                position: 'relative'
              }}
            >
              <Box
                component="span"
                sx={{
                  display: { xs: 'none', sm: 'inline-block' }
                }}
              >
                <Divider orientation="vertical" flexItem absolute />
              </Box>
              <Box
                sx={{
                  p: 3
                }}
              >
                <Box>
                  <Typography align="center" variant="h3" gutterBottom>
                    {data.newSessions}
                  </Typography>
                  <Typography
                    align="center"
                    variant="body1"
                    color="text.secondary"
                  >
                    {t('% New Sessions')}
                  </Typography>
                </Box>
              </Box>
              <Divider />
            </Grid>
            <Grid
              xs={12}
              sm={6}
              md={4}
              item
              sx={{
                position: 'relative'
              }}
            >
              <Box
                component="span"
                sx={{
                  display: { xs: 'none', sm: 'inline-block' }
                }}
              >
                <Divider orientation="vertical" flexItem absolute />
              </Box>
              <Box
                sx={{
                  p: 3
                }}
              >
                <Box>
                  <Typography align="center" variant="h3" gutterBottom>
                    {data.bounceRate}
                  </Typography>
                  <Typography
                    align="center"
                    variant="body1"
                    color="text.secondary"
                  >
                    {t('Bounce Rate')}
                  </Typography>
                </Box>
              </Box>
              <Divider />
            </Grid>
          </Grid>
        </Box>
      </CardActionsWrapper>
    </Card>
  );
}

export default TrafficSources;
