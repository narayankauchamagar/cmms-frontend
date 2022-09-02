import {
  Box,
  Card,
  Grid,
  Typography,
  Button,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

const ButtonWrapper = styled(Button)(
  ({ theme }) => `
    transform: translateY(0px);
    transition: ${theme.transitions.create(['all'])};

    &:active,
    &:hover {
        transform: translateY(-2px);
    }
  `
);

function Block6() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const Box1Options: ApexOptions = {
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
    colors: [theme.colors.success.main],
    dataLabels: {
      enabled: false
    },
    theme: {
      mode: theme.palette.mode
    },
    fill: {
      opacity: 1,
      colors: [theme.colors.success.lighter],
      type: 'solid'
    },
    grid: {
      padding: {
        top: 5
      }
    },
    stroke: {
      show: true,
      colors: [theme.colors.success.main],
      width: 2
    },
    legend: {
      show: false
    },
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
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
      show: false,
      min: 2
    }
  };
  const Box1Data = [
    {
      name: 'Deploys',
      data: [5, 3, 4, 3, 5, 3, 4]
    }
  ];

  const Box2Options: ApexOptions = {
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
    colors: [theme.colors.error.main],
    dataLabels: {
      enabled: false
    },
    theme: {
      mode: theme.palette.mode
    },
    fill: {
      opacity: 1,
      colors: [theme.colors.error.lighter],
      type: 'solid'
    },
    grid: {
      padding: {
        top: 5
      }
    },
    stroke: {
      show: true,
      colors: [theme.colors.error.main],
      width: 2
    },
    legend: {
      show: false
    },
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
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
      show: false,
      min: 0
    }
  };
  const Box2Data = [
    {
      name: 'Servers',
      data: [3, 1, 4, 7, 5, 6, 4]
    }
  ];

  const Box3Options: ApexOptions = {
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
    colors: [theme.colors.warning.main],
    dataLabels: {
      enabled: false
    },
    theme: {
      mode: theme.palette.mode
    },
    fill: {
      opacity: 1,
      colors: [theme.colors.warning.lighter],
      type: 'solid'
    },
    grid: {
      padding: {
        top: 5
      }
    },
    stroke: {
      show: true,
      colors: [theme.colors.warning.main],
      width: 2
    },
    legend: {
      show: false
    },
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
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
      show: false,
      min: 2
    }
  };
  const Box3Data = [
    {
      name: 'Customers',
      data: [234, 315, 408, 387, 512, 363, 405]
    }
  ];

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Card>
          <Box
            px={2}
            pt={2}
            pb={1.5}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h4">{t('Bandwidth allocation')}</Typography>
            <ButtonWrapper
              sx={{
                background: `${theme.colors.secondary.lighter}`,
                color: `${theme.colors.secondary.main}`,

                '&:hover': {
                  background: `${theme.colors.secondary.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.secondary.main
                  )}`
                }
              }}
              size="small"
              variant="contained"
            >
              {t('View all')}
            </ButtonWrapper>
          </Box>
          <Box p={2}>
            <Typography
              sx={{
                color: `${theme.colors.success.main}`,
                fontSize: `${theme.typography.pxToRem(40)}`
              }}
              gutterBottom
              variant="h1"
            >
              12,54k
            </Typography>
            <Typography variant="subtitle2">
              {t('Successful deployments')}
            </Typography>
          </Box>
          <Box>
            <Chart
              options={Box1Options}
              series={Box1Data}
              type="area"
              height={150}
            />
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <Box
            px={2}
            pt={2}
            pb={1.5}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h4">{t('Production servers')}</Typography>
            <ButtonWrapper
              sx={{
                background: `${theme.colors.secondary.lighter}`,
                color: `${theme.colors.secondary.main}`,

                '&:hover': {
                  background: `${theme.colors.secondary.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.secondary.main
                  )}`
                }
              }}
              size="small"
              variant="contained"
            >
              {t('View all')}
            </ButtonWrapper>
          </Box>
          <Box p={2}>
            <Typography
              sx={{
                color: `${theme.colors.error.main}`,
                fontSize: `${theme.typography.pxToRem(40)}`
              }}
              gutterBottom
              variant="h1"
            >
              +35.6%
            </Typography>
            <Typography variant="subtitle2">
              {t('Returning clients reports')}
            </Typography>
          </Box>
          <Box>
            <Chart
              options={Box2Options}
              series={Box2Data}
              type="area"
              height={150}
            />
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <Box
            px={2}
            pt={2}
            pb={1.5}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h4">{t('Returning customers')}</Typography>
            <ButtonWrapper
              sx={{
                background: `${theme.colors.secondary.lighter}`,
                color: `${theme.colors.secondary.main}`,

                '&:hover': {
                  background: `${theme.colors.secondary.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.secondary.main
                  )}`
                }
              }}
              size="small"
              variant="contained"
            >
              {t('View all')}
            </ButtonWrapper>
          </Box>
          <Box p={2}>
            <Typography
              sx={{
                color: `${theme.colors.warning.main}`,
                fontSize: `${theme.typography.pxToRem(40)}`
              }}
              gutterBottom
              variant="h1"
            >
              +12,45%
            </Typography>
            <Typography variant="subtitle2">
              {t('Pending services integrations')}
            </Typography>
          </Box>
          <Box>
            <Chart
              options={Box3Options}
              series={Box3Data}
              type="area"
              height={150}
            />
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block6;
