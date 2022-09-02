import {
  Divider,
  Box,
  Card,
  Typography,
  LinearProgress,
  alpha,
  Grid,
  Button,
  IconButton,
  styled,
  useTheme,
  linearProgressClasses
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import CountUp from 'react-countup';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

const LinearProgressError = styled(LinearProgress)(
  ({ theme }) => `
        height: 10px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.error.main, 0.1)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.error.main};
        }
    `
);

const LinearProgressSuccess = styled(LinearProgress)(
  ({ theme }) => `
        height: 10px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.success.main, 0.1)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.success.main};
        }
    `
);

const LinearProgressWarning = styled(LinearProgress)(
  ({ theme }) => `
        height: 10px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.warning.main, 0.1)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.warning.main};
        }
    `
);

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
    colors: [theme.colors.success.main],
    dataLabels: {
      enabled: false
    },
    theme: {
      mode: theme.palette.mode
    },
    stroke: {
      show: true,
      colors: [theme.colors.success.main],
      width: 2
    },
    legend: {
      show: false
    },
    fill: {
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.2,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0,
        stops: [0, 100]
      }
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
      show: false
    }
  };
  const Box1Data = [
    {
      name: 'Total Sales',
      data: [2.3, 3.1, 4.0, 3.8, 5.1, 3.6, 4.0, 3.8, 5.1, 3.6]
    }
  ];

  return (
    <Card>
      <Box
        p={3}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography
            gutterBottom
            sx={{
              fontSize: `${theme.typography.pxToRem(16)}`
            }}
            variant="h4"
          >
            {t('Weekly sales')}
          </Typography>
          <Typography variant="subtitle2">
            {t('Reports for what we sold this week')}
          </Typography>
        </Box>
        <IconButton color="primary">
          <MoreVertTwoToneIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box px={5} pt={5}>
        <Typography
          component="h3"
          fontWeight="bold"
          sx={{
            mb: 4,
            fontSize: `${theme.typography.pxToRem(45)}`
          }}
        >
          <CountUp
            start={0}
            end={487.385}
            duration={4}
            separator=""
            delay={3}
            decimals={3}
            decimal=","
            prefix="$"
            suffix=""
          />
        </Typography>

        <Grid container spacing={6}>
          <Grid item xs={12} md={4} sm={6}>
            <Typography variant="h3">14%</Typography>
            <LinearProgressError
              sx={{
                my: 1
              }}
              variant="determinate"
              value={12}
            />
            <Typography variant="body2" color="text.secondary">
              {t('Cars')}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
            <Typography variant="h3">46%</Typography>
            <LinearProgressSuccess
              sx={{
                my: 1
              }}
              variant="determinate"
              value={46}
            />
            <Typography variant="body2" color="text.secondary">
              {t('Outdoor')}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sm={12}>
            <Typography variant="h3">40%</Typography>
            <LinearProgressWarning
              sx={{
                my: 1
              }}
              variant="determinate"
              value={40}
            />
            <Typography variant="body2" color="text.secondary">
              {t('Electronics')}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Chart options={Box1Options} series={Box1Data} type="area" height={300} />
      <Box
        p={3}
        sx={{
          textAlign: 'center'
        }}
      >
        <Button variant="outlined" endIcon={<ArrowForwardTwoToneIcon />}>
          {t('View complete report')}
        </Button>
      </Box>
    </Card>
  );
}

export default Block8;
