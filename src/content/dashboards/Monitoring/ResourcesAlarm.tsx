import { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Alert,
  Collapse,
  IconButton,
  Divider,
  styled,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { formatDistance, subMinutes } from 'date-fns';
import CloseIcon from '@mui/icons-material/Close';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

const CardHeaderWrapper = styled(CardHeader)(
  () => `
    .MuiCardHeader-action {
      align-self: center;
      margin: 0;
    }
`
);

function ResourcesAlarm() {
  const { t }: { t: any } = useTranslation();
  const [open, setOpen] = useState(true);
  const theme = useTheme();

  const chartOptions: ApexOptions = {
    chart: {
      background: 'transparent',
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      curve: 'smooth',
      width: [3, 3]
    },
    theme: {
      mode: theme.palette.mode
    },
    markers: {
      size: 0
    },
    colors: [theme.colors.primary.main, theme.colors.error.main],
    labels: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20'
    ],
    dataLabels: {
      enabled: false
    },
    tooltip: {
      enabled: false
    },
    grid: {
      strokeDashArray: 5,
      borderColor: theme.palette.divider,
      padding: {
        right: 8,
        left: 8,
        bottom: 5,
        top: 5
      }
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

  const chartData = [
    {
      name: 'Previous Period',
      data: [
        32, 32, 32, 18, 18, 18, 24, 14, 24, 28, 28, 28, 31, 31, 31, 21, 21, 21,
        15, 15, 15
      ]
    },
    {
      name: 'Current Period',
      data: [
        22, 40, 37, 14, 34, 13, 31, 30, 15, 29, 25, 39, 21, 26, 19, 16, 20, 36,
        27, 18
      ]
    }
  ];

  return (
    <Card>
      <CardHeaderWrapper
        action={
          <Button variant="contained" size="small">
            {t('Run diagnostics')}
          </Button>
        }
        title={t('Resources Alarm')}
        subheader={
          <>
            {t('Server load snapshot from')}{' '}
            {formatDistance(subMinutes(new Date(), 13), new Date(), {
              addSuffix: true
            })}
          </>
        }
      />
      <Divider />
      <CardContent>
        <Chart
          options={chartOptions}
          series={chartData}
          type="line"
          height={225}
        />

        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            severity="error"
          >
            {t('Your server is overloaded, fix it as soon as possible!')}
          </Alert>
        </Collapse>
      </CardContent>
    </Card>
  );
}

export default ResourcesAlarm;
