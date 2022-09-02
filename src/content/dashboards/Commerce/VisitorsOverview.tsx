import { Card, Box, Grid, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

function VisitorsOverview() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

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
      },
      zoom: {
        enabled: false
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
        columnWidth: '20%'
      }
    },
    labels: [
      'Monday',
      'Tueday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
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
      name: 'Visitors',
      type: 'column',
      data: [434, 827, 123, 367, 818, 833, 860]
    },
    {
      name: 'Revenue',
      type: 'line',
      data: [434, 108, 912, 767, 855, 840, 756]
    }
  ];

  const data = {
    visitors: '23.584',
    conversion: '7.23%',
    revenue: '$18.12'
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box
        sx={{
          p: 3
        }}
      >
        <Chart
          options={chartOptions}
          series={chartData}
          type="line"
          height={250}
        />
        <Box
          sx={{
            px: { lg: 4 },
            pt: 3,
            pb: 2,
            height: '100%',
            flex: 1,
            textAlign: 'center'
          }}
        >
          <Grid spacing={3} container>
            <Grid item md={4}>
              <Typography variant="caption" gutterBottom>
                {t('Visitors')}
              </Typography>
              <Typography variant="h3">{data.visitors}</Typography>
            </Grid>
            <Grid item md={4}>
              <Typography variant="caption" gutterBottom>
                {t('Conversion')}
              </Typography>
              <Typography variant="h3">{data.conversion}</Typography>
            </Grid>
            <Grid item md={4}>
              <Typography variant="caption" gutterBottom>
                {t('Revenue/Visitor')}
              </Typography>
              <Typography variant="h3">{data.revenue}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Card>
  );
}

export default VisitorsOverview;
