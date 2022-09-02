import { Box, Card, Grid, Typography, Button, useTheme } from '@mui/material';

import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

function Block4() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const chart1Options: ApexOptions = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    theme: {
      mode: theme.palette.mode === 'dark' ? 'light' : 'dark'
    },
    grid: {
      padding: {
        right: 6,
        left: 6
      }
    },
    stroke: {
      colors: [theme.colors.primary.main],
      curve: 'smooth',
      width: 3
    },
    colors: [theme.colors.primary.main],
    markers: {
      size: 0
    },
    tooltip: {
      fixed: {
        enabled: true
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function () {
            return 'Orders:';
          }
        }
      },
      marker: {
        show: false
      }
    },
    yaxis: {
      show: false
    },
    legend: {
      show: false
    }
  };
  const chart1Data = [
    {
      name: 'Daily visitors',
      data: [47, 38, 56, 24, 45, 54, 38, 47, 38, 56, 24, 56, 24, 65]
    }
  ];

  const chart2Options: ApexOptions = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    grid: {
      padding: {
        right: 6,
        left: 6
      }
    },
    theme: {
      mode: theme.palette.mode === 'dark' ? 'light' : 'dark'
    },
    stroke: {
      colors: [theme.colors.alpha.trueWhite[100]],
      curve: 'smooth',
      width: 3
    },
    colors: [theme.colors.alpha.trueWhite[100]],
    markers: {
      size: 0
    },
    tooltip: {
      fixed: {
        enabled: true
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function () {
            return 'Revenue: $';
          }
        }
      },
      marker: {
        show: false
      }
    },
    legend: {
      show: false
    }
  };
  const chart2Data = [
    {
      name: 'Revenue',
      data: [45, 56, 24, 56, 54, 38, 47, 38, 56, 24, 38, 47, 24, 65]
    }
  ];

  const chart3Data = [
    {
      name: 'Sales',
      data: [45, 56, 24, 54, 38, 47, 38, 56, 24, 38, 56, 47, 24, 65]
    }
  ];

  const chart4Data = [
    {
      name: 'Tests',
      data: [24, 54, 38, 47, 56, 47, 45, 56, 38, 56, 24, 38, 24, 65]
    }
  ];

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6} lg={3}>
        <Card
          sx={{
            p: 3
          }}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Box>
              <Typography gutterBottom variant="h1">
                789
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  fontSize: `${theme.typography.pxToRem(17)}`
                }}
              >
                {t('Total Orders')}
              </Typography>
            </Box>
            <Button
              variant="outlined"
              size="small"
              sx={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                py: 0.6,
                fontSize: `${theme.typography.pxToRem(11)}`
              }}
            >
              {t('View all')}
            </Button>
          </Box>
          <Box>
            <Chart
              options={chart1Options}
              series={chart1Data}
              type="line"
              height={100}
            />
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Card
          sx={{
            p: 3,
            background: `${theme.colors.gradients.blue4}`
          }}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Box>
              <Typography
                gutterBottom
                variant="h1"
                sx={{
                  color: `${theme.colors.alpha.trueWhite[100]}`
                }}
              >
                576
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  color: `${theme.colors.alpha.trueWhite[70]}`,
                  fontSize: `${theme.typography.pxToRem(17)}`
                }}
              >
                {t('Total Visitors')}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Chart
              options={chart2Options}
              series={chart2Data}
              type="line"
              height={100}
            />
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Card
          sx={{
            p: 3,
            background: `${theme.colors.error.main}`
          }}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Box>
              <Typography
                gutterBottom
                variant="h1"
                sx={{
                  color: `${theme.colors.alpha.trueWhite[100]}`
                }}
              >
                183,954
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  color: `${theme.colors.alpha.trueWhite[70]}`,
                  fontSize: `${theme.typography.pxToRem(17)}`
                }}
              >
                {t('Total Deliveries')}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Chart
              options={chart2Options}
              series={chart3Data}
              type="line"
              height={100}
            />
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Card
          sx={{
            p: 3,
            background: `${theme.colors.gradients.blue5}`
          }}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Box>
              <Typography
                gutterBottom
                variant="h1"
                sx={{
                  color: `${theme.colors.alpha.trueWhite[100]}`
                }}
              >
                $13,253
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  color: `${theme.colors.alpha.trueWhite[70]}`,
                  fontSize: `${theme.typography.pxToRem(17)}`
                }}
              >
                {t('Total Budget')}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Chart
              options={chart2Options}
              series={chart4Data}
              type="line"
              height={100}
            />
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block4;
