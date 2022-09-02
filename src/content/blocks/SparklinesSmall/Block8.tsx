import { Box, Card, Typography, Button, useTheme } from '@mui/material';

import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import Text from 'src/components/Text';

function Block8() {
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
    colors: [theme.colors.primary.main],
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
      colors: [theme.colors.primary.main],
      curve: 'smooth',
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
      'Sunday',
      'Last Week',
      'Last Month',
      'Last Year'
    ],
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
    },
    tooltip: {
      fixed: {
        enabled: true,
        position: 'BottomRight',
        offsetX: -20,
        offsetY: 3
      },
      theme: 'dark'
    }
  };
  const Box1Data = [
    {
      name: 'New accounts',
      data: [32, 52, 45, 32, 54, 56, 28, 25, 36, 62]
    }
  ];

  return (
    <Card>
      <Box
        p={3}
        mb={3}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography gutterBottom variant="h3">
            {t('New Accounts')}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: `${theme.typography.pxToRem(16)}`
            }}
          >
            {t('Since your last visit there were ')}{' '}
            <Text color="success">
              <b>23</b>
            </Text>{' '}
            {t('new accounts created')}
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
          {t('View all')}
        </Button>
      </Box>
      <Box>
        <Chart
          options={Box1Options}
          series={Box1Data}
          type="area"
          height={200}
        />
      </Box>
    </Card>
  );
}

export default Block8;
