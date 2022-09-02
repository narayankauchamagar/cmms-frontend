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

const CardActions = styled(Box)(
  ({ theme }) => `
    position: absolute;
    top: ${theme.spacing(2)};
    right: ${theme.spacing(2)};
    z-index: 7;
  `
);

const CardBorderBottom = styled(Card)(
  () => `
    border-bottom: transparent 5px solid;
    position: relative;
  `
);

function Block5() {
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
    stroke: {
      colors: [theme.colors.error.main],
      curve: 'smooth',
      width: 3
    },
    colors: [theme.colors.error.main],
    markers: {
      size: 0
    },
    grid: {
      padding: {
        right: 5,
        left: 5
      }
    },
    tooltip: {
      enabled: false
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
      data: [47, 38, 56, 24, 45, 54]
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
    theme: {
      mode: theme.palette.mode === 'dark' ? 'light' : 'dark'
    },
    stroke: {
      colors: [theme.colors.success.main],
      curve: 'smooth',
      width: 3
    },
    colors: [theme.colors.success.main],
    markers: {
      size: 0
    },
    grid: {
      padding: {
        right: 5,
        left: 5
      }
    },
    tooltip: {
      enabled: false
    },
    legend: {
      show: false
    }
  };
  const chart2Data = [
    {
      name: 'Revenue',
      data: [45, 56, 24, 56, 54, 38]
    }
  ];

  const chart3Options: ApexOptions = {
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
    stroke: {
      colors: [theme.colors.warning.main],
      curve: 'smooth',
      width: 3
    },
    colors: [theme.colors.warning.main],
    markers: {
      size: 0
    },
    grid: {
      padding: {
        right: 5,
        left: 5
      }
    },
    tooltip: {
      enabled: false
    },
    legend: {
      show: false
    }
  };
  const chart3Data = [
    {
      name: 'Sales',
      data: [45, 56, 24, 54, 38, 47]
    }
  ];

  const chart4Options: ApexOptions = {
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
    stroke: {
      colors: [theme.colors.info.main],
      curve: 'smooth',
      width: 3
    },
    colors: [theme.colors.info.main],
    markers: {
      size: 0
    },
    grid: {
      padding: {
        right: 5,
        left: 5
      }
    },
    tooltip: {
      enabled: false
    },
    legend: {
      show: false
    }
  };
  const chart4Data = [
    {
      name: 'Tests',
      data: [24, 54, 38, 47, 56, 47]
    }
  ];

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6} lg={3}>
        <CardBorderBottom
          sx={{
            borderBottomColor: `${theme.colors.error.main}`,
            py: 3,
            px: 4
          }}
        >
          <CardActions>
            <Button
              sx={{
                background: `${theme.colors.error.lighter}`,
                color: `${theme.colors.error.main}`,
                borderRadius: 10,
                textTransform: 'uppercase',
                fontSize: `${theme.typography.pxToRem(11)}`,

                '&:hover': {
                  background: `${theme.colors.error.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.error.main
                  )}`
                }
              }}
            >
              {t('View all')}
            </Button>
          </CardActions>
          <Typography gutterBottom variant="h2">
            <small>$</small>869
          </Typography>
          <Typography variant="subtitle2">{t('sales last month')}</Typography>
          <Box mt={2}>
            <Chart
              options={chart1Options}
              series={chart1Data}
              type="line"
              height={90}
            />
          </Box>
        </CardBorderBottom>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <CardBorderBottom
          sx={{
            borderBottomColor: `${theme.colors.success.main}`,
            py: 3,
            px: 4
          }}
        >
          <CardActions>
            <Button
              sx={{
                background: `${theme.colors.success.lighter}`,
                color: `${theme.colors.success.main}`,
                borderRadius: 10,
                textTransform: 'uppercase',
                fontSize: `${theme.typography.pxToRem(11)}`,

                '&:hover': {
                  background: `${theme.colors.success.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.success.dark
                  )}`
                }
              }}
            >
              {t('View all')}
            </Button>
          </CardActions>
          <Typography gutterBottom variant="h2">
            <small>$</small>98,548
          </Typography>
          <Typography variant="subtitle2">{t('sales this quarter')}</Typography>
          <Box mt={2}>
            <Chart
              options={chart2Options}
              series={chart2Data}
              type="line"
              height={90}
            />
          </Box>
        </CardBorderBottom>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <CardBorderBottom
          sx={{
            borderBottomColor: `${theme.colors.warning.main}`,
            py: 3,
            px: 4
          }}
        >
          <CardActions>
            <Button
              sx={{
                background: `${theme.colors.warning.lighter}`,
                color: `${theme.colors.warning.main}`,
                borderRadius: 10,
                textTransform: 'uppercase',
                fontSize: `${theme.typography.pxToRem(11)}`,

                '&:hover': {
                  background: `${theme.colors.warning.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.warning.dark
                  )}`
                }
              }}
            >
              {t('View all')}
            </Button>
          </CardActions>
          <Typography gutterBottom variant="h2">
            <small>$</small>465.39
          </Typography>
          <Typography variant="subtitle2">{t('sales made today')}</Typography>
          <Box mt={2}>
            <Chart
              options={chart3Options}
              series={chart3Data}
              type="line"
              height={90}
            />
          </Box>
        </CardBorderBottom>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <CardBorderBottom
          sx={{
            borderBottomColor: `${theme.colors.info.main}`,
            py: 3,
            px: 4
          }}
        >
          <CardActions>
            <Button
              sx={{
                background: `${theme.colors.info.lighter}`,
                color: `${theme.colors.info.main}`,
                borderRadius: 10,
                textTransform: 'uppercase',
                fontSize: `${theme.typography.pxToRem(11)}`,

                '&:hover': {
                  background: `${theme.colors.info.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.info.dark
                  )}`
                }
              }}
            >
              {t('View all')}
            </Button>
          </CardActions>
          <Typography gutterBottom variant="h2">
            <small>$</small>4,658
          </Typography>
          <Typography variant="subtitle2">{t('lifetime sales')}</Typography>
          <Box mt={2}>
            <Chart
              options={chart4Options}
              series={chart4Data}
              type="line"
              height={90}
            />
          </Box>
        </CardBorderBottom>
      </Grid>
    </Grid>
  );
}

export default Block5;
