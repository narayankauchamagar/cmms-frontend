import {
  Card,
  Box,
  Typography,
  Avatar,
  Grid,
  useTheme,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import DirectionsRunTwoToneIcon from '@mui/icons-material/DirectionsRunTwoTone';
import PoolTwoToneIcon from '@mui/icons-material/PoolTwoTone';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

const AvatarInfo = styled(Avatar)(
  ({ theme }) => `
    background-color: ${theme.colors.info.lighter};
    color: ${theme.colors.info.main};
    width: ${theme.spacing(5)};
    height: ${theme.spacing(5)};
`
);

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
    background-color: ${theme.colors.success.lighter};
    color: ${theme.colors.success.main};
    width: ${theme.spacing(5)};
    height: ${theme.spacing(5)};
`
);

const AvatarError = styled(Avatar)(
  ({ theme }) => `
    background-color: ${theme.colors.error.lighter};
    color: ${theme.colors.error.main};
    width: ${theme.spacing(5)};
    height: ${theme.spacing(5)};
`
);

function Parameters() {
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
    labels: [
      'Monday',
      'Tueday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        colorStops: [
          {
            offset: 0,
            color: theme.colors.error.main,
            opacity: 1
          },
          {
            offset: 35,
            color: theme.colors.warning.main,
            opacity: 1
          },
          {
            offset: 70,
            color: theme.colors.info.main,
            opacity: 1
          },
          {
            offset: 100,
            color: theme.colors.success.main,
            opacity: 1
          }
        ]
      }
    },
    stroke: {
      curve: 'stepline',
      colors: [theme.colors.primary.main],
      width: 3
    },
    yaxis: {
      show: false
    },
    colors: [theme.colors.primary.main],
    grid: {
      padding: {
        top: 10,
        right: 5,
        bottom: 10,
        left: 5
      }
    },
    tooltip: {
      followCursor: true,
      x: {
        show: true
      },
      y: {
        formatter: (value) => {
          return value + ' % of target';
        }
      }
    }
  };

  const chart1Data = [
    {
      name: 'Heart rate',
      data: [22, 15, 19, 7, 13, 1, 18]
    }
  ];

  const chart2Data = [
    {
      name: 'Running',
      data: [14, 18, 16, 1, 3, 17, 6]
    }
  ];

  const chart3Data = [
    {
      name: 'Swimming',
      data: [171, 73, 129, 141, 70, 147, 130]
    }
  ];

  return (
    <Grid container spacing={4}>
      <Grid item sm={6} md={4} xs={12}>
        <Card
          sx={{
            p: 2,
            overflow: 'visible'
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <AvatarSuccess
                sx={{
                  mr: 1
                }}
              >
                <FavoriteTwoToneIcon />
              </AvatarSuccess>
              <Typography variant="h4">{t('Heart Rate')}</Typography>
            </Box>
            <Box>
              <Typography align="right" lineHeight={1} variant="h3">
                65
              </Typography>
              <Typography
                align="right"
                variant="subtitle1"
                color="text.secondary"
              >
                {t('bpm')}
              </Typography>
            </Box>
          </Box>
          <Chart
            options={chartOptions}
            series={chart1Data}
            type="line"
            height={100}
          />
        </Card>
      </Grid>
      <Grid item sm={6} md={4} xs={12}>
        <Card
          sx={{
            p: 2,
            overflow: 'visible'
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <AvatarError
                sx={{
                  mr: 1
                }}
              >
                <DirectionsRunTwoToneIcon />
              </AvatarError>
              <Typography variant="h4">{t('Running')}</Typography>
            </Box>
            <Box>
              <Typography align="right" lineHeight={1} variant="h3">
                15
              </Typography>
              <Typography
                align="right"
                variant="subtitle1"
                color="text.secondary"
              >
                {t('km/h')}
              </Typography>
            </Box>
          </Box>
          <Chart
            options={chartOptions}
            series={chart2Data}
            type="line"
            height={100}
          />
        </Card>
      </Grid>
      <Grid item md={4} xs={12}>
        <Card
          sx={{
            p: 2,
            overflow: 'visible'
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <AvatarInfo
                sx={{
                  mr: 1
                }}
              >
                <PoolTwoToneIcon />
              </AvatarInfo>
              <Typography variant="h4">{t('Swimming')}</Typography>
            </Box>
            <Box>
              <Typography align="right" lineHeight={1} variant="h3">
                12
              </Typography>
              <Typography
                align="right"
                variant="subtitle1"
                color="text.secondary"
              >
                {t('miles')}
              </Typography>
            </Box>
          </Box>
          <Chart
            options={chartOptions}
            series={chart3Data}
            type="line"
            height={100}
          />
        </Card>
      </Grid>
    </Grid>
  );
}

export default Parameters;
