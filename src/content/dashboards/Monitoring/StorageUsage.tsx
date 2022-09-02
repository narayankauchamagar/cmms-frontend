import { Card, Typography, useTheme, alpha } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

function StorageUsage() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const data = {
    series: [
      {
        bg: alpha(theme.colors.primary.main, 0.2),
        data: 40,
        title: t('Free')
      },
      {
        bg: alpha(theme.colors.primary.main, 0.9),
        data: 25,
        title: t('Used')
      },
      {
        bg: alpha(theme.colors.primary.main, 0.5),
        data: 35,
        title: t('Available')
      }
    ]
  };

  const chartOptions: ApexOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    states: {
      normal: {
        filter: {
          type: 'none'
        }
      },
      hover: {
        filter: {
          type: 'none'
        }
      },
      active: {
        filter: {
          type: 'none'
        }
      }
    },
    colors: data.series.map((chart) => chart.bg),
    labels: data.series.map((chart) => chart.title),
    plotOptions: {
      radialBar: {
        track: {
          background: theme.colors.alpha.black[5]
        },
        hollow: {
          size: '35%'
        }
      }
    },
    theme: {
      mode: theme.palette.mode
    }
  };

  const chartSeries = data.series.map((chart) => chart.data);

  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Chart
        height={300}
        options={chartOptions}
        series={chartSeries}
        type="radialBar"
      />
      <Typography variant="h1">
        {t('Storage')}
        <br />
        {t('Usage')}
      </Typography>
    </Card>
  );
}

export default StorageUsage;
