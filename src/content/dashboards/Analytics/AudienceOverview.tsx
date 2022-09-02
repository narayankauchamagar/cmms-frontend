import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';

import {
  Button,
  Card,
  Box,
  CardContent,
  CardHeader,
  Menu,
  MenuItem,
  CardActions,
  Grid,
  Typography,
  Divider,
  styled,
  useTheme
} from '@mui/material';

import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

const CardActionsWrapper = styled(CardActions)(
  ({ theme }) => `
      background-color: ${theme.colors.alpha.black[5]};
      padding: 0;
      display: block;
`
);

function AudienceOverview() {
  const { t }: { t: any } = useTranslation();

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
  const audiences = [
    {
      value: 'users',
      text: t('Users')
    },
    {
      value: 'new_users',
      text: t('New users')
    },
    {
      value: 'page_views',
      text: t('Page views')
    },
    {
      value: 'avg_session_duration',
      text: t('Avg. session duration')
    },
    {
      value: 'bounce_rate',
      text: t('Bounce rate')
    },
    {
      value: 'sessions',
      text: t('Sessions')
    }
  ];

  const actionRef1 = useRef<any>(null);
  const actionRef2 = useRef<any>(null);
  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);
  const [openAudience, setOpenMenuAudience] = useState<boolean>(false);
  const [period, setPeriod] = useState<string>(periods[3].text);
  const [audience, setAudience] = useState<string>(audiences[1].text);
  const theme = useTheme();

  const ChartSparklineOptions: ApexOptions = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      },
      zoom: {
        enabled: false
      }
    },
    colors: [theme.colors.primary.main],
    dataLabels: {
      enabled: false
    },
    theme: {
      mode: theme.palette.mode
    },
    fill: {
      opacity: 1,
      colors: [theme.colors.primary.main],
      type: 'solid'
    },
    grid: {
      padding: {
        top: 2
      }
    },
    stroke: {
      show: true,
      colors: [theme.colors.primary.main],
      width: 2
    },
    legend: {
      show: false
    },
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    tooltip: {
      enabled: false
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: false
    }
  };

  const ChartAudienceOptions: ApexOptions = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    colors: [theme.colors.primary.main],
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 1
    },
    grid: {
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },
      strokeDashArray: 5,
      borderColor: theme.colors.alpha.black[10]
    },
    legend: {
      show: false
    },
    markers: {
      hover: {
        sizeOffset: 2
      },
      shape: 'circle',
      size: 6,
      strokeWidth: 3,
      strokeOpacity: 1,
      strokeColors: [theme.colors.primary.main],
      colors: [theme.colors.alpha.white[100]]
    },
    stroke: {
      curve: 'smooth',
      lineCap: 'butt',
      width: 3
    },
    theme: {
      mode: theme.palette.mode
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
      tickAmount: 3,
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

  const data = {
    users: 14.586,
    newUsers: 12.847,
    pageViews: 67.492,
    avgSessionDuration: '00:05:21',
    bounceRate: '65.37%',
    sessions: 25.694
  };

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
        title={t('Audience Overview')}
      />
      <Divider />
      <CardContent>
        <Button
          size="small"
          variant="outlined"
          ref={actionRef2}
          onClick={() => setOpenMenuAudience(true)}
          endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
        >
          {audience}
        </Button>
        <Menu
          disableScrollLock
          anchorEl={actionRef2.current}
          onClose={() => setOpenMenuAudience(false)}
          open={openAudience}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
        >
          {audiences.map((_audience) => (
            <MenuItem
              key={_audience.value}
              onClick={() => {
                setAudience(_audience.text);
                setOpenMenuAudience(false);
              }}
            >
              {_audience.text}
            </MenuItem>
          ))}
        </Menu>
        <Box mt={2}>
          <Chart
            options={ChartAudienceOptions}
            series={[
              {
                name: 'New Users',
                data: [
                  324, 315, 578, 576, 227, 459, 473, 282, 214, 623, 477, 401
                ]
              }
            ]}
            type="line"
            height={230}
          />
        </Box>
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
                  <Typography variant="subtitle2" gutterBottom>
                    {t('Users')}
                  </Typography>
                  <Typography variant="h3">{data.users}</Typography>
                </Box>

                <Chart
                  options={ChartSparklineOptions}
                  series={[
                    {
                      name: 'Users',
                      data: [
                        467, 696, 495, 477, 422, 585, 691, 294, 508, 304, 499,
                        390
                      ]
                    }
                  ]}
                  type="line"
                  height={55}
                />
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
                  <Typography variant="subtitle2" gutterBottom>
                    {t('New Users')}
                  </Typography>
                  <Typography variant="h3">{data.newUsers}</Typography>
                </Box>
                <Chart
                  options={ChartSparklineOptions}
                  series={[
                    {
                      name: 'New Users',
                      data: [
                        581, 203, 462, 518, 329, 395, 375, 447, 303, 423, 405,
                        589
                      ]
                    }
                  ]}
                  type="line"
                  height={55}
                />
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
                  <Typography variant="subtitle2" gutterBottom>
                    {t('Page Views')}
                  </Typography>
                  <Typography variant="h3">{data.pageViews}</Typography>
                </Box>

                <Chart
                  options={ChartSparklineOptions}
                  series={[
                    {
                      name: 'Page Views',
                      data: [
                        353, 380, 325, 246, 682, 605, 672, 271, 386, 630, 577,
                        511
                      ]
                    }
                  ]}
                  type="line"
                  height={55}
                />
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
                  <Typography variant="subtitle2" gutterBottom>
                    {t('Avg. Session Duration')}
                  </Typography>
                  <Typography variant="h3">
                    {data.avgSessionDuration}
                  </Typography>
                </Box>

                <Chart
                  options={ChartSparklineOptions}
                  series={[
                    {
                      name: 'Avg. Session Duration',
                      data: [
                        508, 420, 336, 278, 627, 475, 575, 307, 441, 249, 413,
                        574
                      ]
                    }
                  ]}
                  type="line"
                  height={55}
                />
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
                  <Typography variant="subtitle2" gutterBottom>
                    {t('Bounce Rate')}
                  </Typography>
                  <Typography variant="h3">{data.bounceRate}</Typography>
                </Box>

                <Chart
                  options={ChartSparklineOptions}
                  series={[
                    {
                      name: 'Bounce Rate',
                      data: [
                        534, 345, 622, 332, 567, 250, 494, 270, 313, 470, 329,
                        287
                      ]
                    }
                  ]}
                  type="line"
                  height={55}
                />
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
                  <Typography variant="subtitle2" gutterBottom>
                    {t('Sessions')}
                  </Typography>
                  <Typography variant="h3">{data.sessions}</Typography>
                </Box>

                <Chart
                  options={ChartSparklineOptions}
                  series={[
                    {
                      name: 'Sessions',
                      data: [
                        610, 234, 374, 423, 207, 507, 699, 304, 285, 257, 350,
                        227
                      ]
                    }
                  ]}
                  type="line"
                  height={55}
                />
              </Box>
              <Divider />
            </Grid>
          </Grid>
        </Box>
      </CardActionsWrapper>
    </Card>
  );
}

export default AudienceOverview;
