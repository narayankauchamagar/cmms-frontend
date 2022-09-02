import { Card, Box, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Label from 'src/components/Label';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

function Cancelled() {
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
      colors: [theme.colors.success.main]
    },
    colors: [theme.colors.primary.main, theme.colors.success.main],
    fill: {
      opacity: 1
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 8,
        columnWidth: '30%'
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
      show: false
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
      show: false,
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
      name: 'Completed',
      type: 'column',
      data: [34, 27, 23, 67, 18, 33, 60]
    },
    {
      name: 'Cancelled',
      type: 'line',
      data: [4, 18, 12, 67, 55, 40, 56]
    }
  ];

  return (
    <Card
      sx={{
        px: 3,
        pb: 3
      }}
    >
      <Chart
        options={chartOptions}
        series={chartData}
        type="line"
        height={244}
      />
      <Box
        display="flex"
        alignItems="center"
        sx={{
          py: 2
        }}
        justifyContent="center"
      >
        <Typography
          variant="h3"
          align="center"
          sx={{
            mr: 1
          }}
        >
          {t('Cancelled')}
        </Typography>
        <Label color="error">
          <b>-5%</b>
        </Label>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography
          variant="h1"
          align="center"
          lineHeight={1}
          sx={{
            mr: 1
          }}
        >
          3
        </Typography>
        <Typography variant="subtitle2" fontWeight="bold">
          {t('Today')}
        </Typography>
      </Box>
    </Card>
  );
}

export default Cancelled;
