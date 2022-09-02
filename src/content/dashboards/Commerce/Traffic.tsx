import {
  Button,
  Card,
  Box,
  CardHeader,
  Grid,
  Typography,
  Divider,
  useTheme,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import Label from 'src/components/Label';
import TrendingUp from '@mui/icons-material/TrendingUp';
import TrendingDown from '@mui/icons-material/TrendingDown';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

const ArrowTrendingUpWrapper = styled(TrendingUp)(
  ({ theme }) => `
      color:  ${theme.palette.success.main};
`
);

const ArrowTrendingDownWrapper = styled(TrendingDown)(
  ({ theme }) => `
      color:  ${theme.palette.error.main};
`
);

function Traffic() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const chartOptions: ApexOptions = {
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
    fill: {
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.6,
        inverseColors: false,
        opacityFrom: 0.9,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    colors: [theme.colors.primary.main],
    dataLabels: {
      enabled: false
    },
    theme: {
      mode: theme.palette.mode
    },
    stroke: {
      show: true,
      colors: [theme.colors.primary.main],
      width: 3
    },
    legend: {
      show: false
    },
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
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
      show: false
    },
    grid: {
      padding: {
        right: 5,
        left: 5
      }
    },
    tooltip: {
      x: {
        show: true
      },
      y: {
        title: {
          formatter: function () {
            return 'Store Visits:';
          }
        }
      },
      marker: {
        show: true
      }
    }
  };
  const chartData = [
    {
      name: 'Store Visits',
      data: [357, 666, 615, 300, 544, 539, 861, 542, 327, 471, 817, 928]
    }
  ];

  return (
    <Card
      sx={{
        height: '100%'
      }}
    >
      <CardHeader
        action={
          <Button
            size="small"
            endIcon={<ArrowForwardTwoToneIcon fontSize="small" />}
          >
            {t('More')}
          </Button>
        }
        title={t('Traffic')}
      />
      <Divider />
      <Grid spacing={0} container>
        <Grid xs={12} md={5} item display="flex" alignItems="center">
          <Grid
            container
            sx={{
              p: 3
            }}
            spacing={4}
          >
            <Grid xs={12} sm={6} md={12} item>
              <Typography
                variant="caption"
                noWrap
                sx={{
                  mb: 1.2
                }}
                component="div"
              >
                {t('Total Store Visits')}
              </Typography>
              <Typography variant="h1" gutterBottom>
                57.483
              </Typography>
              <Box
                sx={{
                  mt: 0.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start'
                }}
              >
                <Label color="success">694 (10.23%)</Label>
                <ArrowTrendingUpWrapper
                  sx={{
                    ml: 0.7
                  }}
                  fontSize="small"
                />
              </Box>
            </Grid>
            <Divider
              sx={{
                my: 3
              }}
            />
            <Grid xs={12} sm={6} md={12} item>
              <Typography
                variant="caption"
                sx={{
                  mb: 1.2
                }}
                noWrap
                component="div"
              >
                {t('Average Daily Visitors')}
              </Typography>
              <Typography variant="h1" gutterBottom>
                7.492
              </Typography>
              <Box
                sx={{
                  mt: 0.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start'
                }}
              >
                <Label color="error">-583 (8.64%)</Label>
                <ArrowTrendingDownWrapper
                  sx={{
                    ml: 0.7
                  }}
                  fontSize="small"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} md={7} item>
          <Box mr={2}>
            <Chart
              options={chartOptions}
              series={chartData}
              type="area"
              height={300}
            />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Traffic;
