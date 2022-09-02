import { Box, Card, alpha, Typography, Button, useTheme } from '@mui/material';

import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

function Block7() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const chartOptions: ApexOptions = {
    chart: {
      background: 'transparent',
      type: 'bar',
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
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 5,
        columnWidth: '70%'
      }
    },
    colors: [
      theme.colors.error.main,
      alpha(theme.colors.error.main, 0.5),
      alpha(theme.colors.error.main, 0.3)
    ],
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 1
    },
    theme: {
      mode: theme.palette.mode
    },
    stroke: {
      show: true,
      width: 3,
      colors: ['transparent']
    },
    legend: {
      show: false
    },
    labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      categories: [
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct'
      ]
    },
    yaxis: {
      show: false,
      title: {
        text: '$ (thousands)'
      },
      min: 0
    },
    tooltip: {
      x: {
        show: false
      },
      marker: {
        show: false
      },
      y: {
        formatter: function (val) {
          return '$ ' + val + 'k';
        }
      },
      theme: 'dark'
    }
  };
  const chartData = [
    {
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    },
    {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    },
    {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }
  ];

  return (
    <Card
      sx={{
        overflow: 'visible'
      }}
    >
      <Box
        p={3}
        mb={3}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography gutterBottom variant="h3">
            {t('Weekly Sales')}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: `${theme.typography.pxToRem(16)}`
            }}
          >
            {t('Reports for what we sold this week')}
          </Typography>
        </Box>
        <Button
          sx={{
            background: `${theme.colors.primary.lighter}`,
            color: `${theme.colors.primary.main}`,

            '&:hover': {
              background: `${theme.colors.primary.main}`,
              color: `${theme.palette.getContrastText(
                theme.colors.primary.main
              )}`
            }
          }}
          size="small"
          variant="contained"
        >
          {t('Advanced reports')}
        </Button>
      </Box>
      <Box>
        <Chart
          options={chartOptions}
          series={chartData}
          type="bar"
          height={200}
        />
      </Box>
    </Card>
  );
}

export default Block7;
