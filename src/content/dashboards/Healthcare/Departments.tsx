import {
  Button,
  Card,
  CardHeader,
  CardActions,
  Typography,
  Divider,
  styled,
  Grid,
  useTheme,
  Box
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

const BoxChartWrapper = styled(Box)(
  ({ theme }) => `
    display: flex;
    align-items: center;
    margin-top: ${theme.spacing(1)};
    justify-content: center;
    flex-direction: column;
`
);

function Departments() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const beds = {
    datasets: [
      {
        backgroundColor: [
          theme.palette.warning.main,
          theme.palette.warning.light
        ]
      }
    ],
    labels: [t('Free Beds'), t('Occupied Beds')]
  };

  const chartOptions: ApexOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '45%'
        }
      }
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0
        }
      },
      hover: {
        filter: {
          type: 'none',
          value: 0
        }
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0
        }
      }
    },
    colors: [theme.colors.warning.main, theme.colors.warning.light],
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + '';
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        color: theme.colors.alpha.black[50],
        opacity: 0.5
      }
    },
    fill: {
      opacity: 1
    },
    labels: beds.labels,
    legend: {
      labels: {
        colors: theme.colors.alpha.trueWhite[100]
      },
      show: false
    },
    stroke: {
      width: 0
    },
    theme: {
      mode: theme.palette.mode
    }
  };

  const chartSeries1 = [45, 55];
  const chartSeries2 = [15, 85];
  const chartSeries3 = [37, 63];
  const chartSeries4 = [29, 71];

  return (
    <Card
      sx={{
        height: '100%'
      }}
    >
      <CardHeader title={t('Departments')} />
      <Divider />
      <Box py={3}>
        <Grid container spacing={0} justifyContent="center" alignItems="center">
          <Grid
            display="flex"
            alignItems="center"
            justifyContent="center"
            xs={12}
            sm={4}
            item
          >
            <Box
              sx={{
                maxWidth: 150
              }}
            >
              <Typography align="center" variant="h4" lineHeight="1.5">
                {t('Obstetrics and Gynaecology')}
              </Typography>
            </Box>
          </Grid>
          <Grid
            xs={12}
            sm={4}
            sx={{
              position: 'relative'
            }}
            item
          >
            <Box
              component="span"
              sx={{
                display: { xs: 'none', sm: 'inline-block' }
              }}
            >
              <Divider orientation="vertical" flexItem absolute />
            </Box>
            <BoxChartWrapper>
              <Typography align="center" variant="subtitle2" gutterBottom>
                {t('Available Beds')}
              </Typography>
              <Box>
                <Chart
                  height={140}
                  options={chartOptions}
                  series={chartSeries1}
                  type="donut"
                />
              </Box>
            </BoxChartWrapper>
          </Grid>
          <Grid
            xs={12}
            sm={4}
            sx={{
              position: 'relative'
            }}
            item
          >
            <Box
              component="span"
              sx={{
                display: { xs: 'none', sm: 'inline-block' }
              }}
            >
              <Divider orientation="vertical" flexItem absolute />
            </Box>
            <BoxChartWrapper>
              <Typography align="center" variant="subtitle2" gutterBottom>
                {t('Free Doctors')}
              </Typography>
              <Box>
                <Chart
                  height={140}
                  options={chartOptions}
                  series={chartSeries2}
                  type="donut"
                />
              </Box>
            </BoxChartWrapper>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box py={3}>
        <Grid container spacing={0} justifyContent="center" alignItems="center">
          <Grid
            display="flex"
            alignItems="center"
            justifyContent="center"
            xs={12}
            sm={4}
            item
          >
            <Box
              sx={{
                maxWidth: 150
              }}
            >
              <Typography align="center" variant="h4" lineHeight="1.5">
                {t('Medical Gastroenterology')}
              </Typography>
            </Box>
          </Grid>
          <Grid
            xs={12}
            sm={4}
            sx={{
              position: 'relative'
            }}
            item
          >
            <Box
              component="span"
              sx={{
                display: { xs: 'none', sm: 'inline-block' }
              }}
            >
              <Divider orientation="vertical" flexItem absolute />
            </Box>
            <BoxChartWrapper>
              <Typography align="center" variant="subtitle2" gutterBottom>
                {t('Available Beds')}
              </Typography>
              <Box>
                <Chart
                  height={140}
                  options={chartOptions}
                  series={chartSeries3}
                  type="donut"
                />
              </Box>
            </BoxChartWrapper>
          </Grid>
          <Grid
            xs={12}
            sm={4}
            sx={{
              position: 'relative'
            }}
            item
          >
            <Box
              component="span"
              sx={{
                display: { xs: 'none', sm: 'inline-block' }
              }}
            >
              <Divider orientation="vertical" flexItem absolute />
            </Box>
            <BoxChartWrapper>
              <Typography align="center" variant="subtitle2" gutterBottom>
                {t('Free Doctors')}
              </Typography>
              <Box>
                <Chart
                  height={140}
                  options={chartOptions}
                  series={chartSeries4}
                  type="donut"
                />
              </Box>
            </BoxChartWrapper>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <CardActions
        sx={{
          justifyContent: 'center',
          py: 2
        }}
      >
        <Button
          variant="contained"
          size="small"
          endIcon={<ArrowForwardTwoToneIcon fontSize="small" />}
        >
          {t('View all departments')}
        </Button>
      </CardActions>
    </Card>
  );
}

export default Departments;
