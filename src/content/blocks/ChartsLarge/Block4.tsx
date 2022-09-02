import {
  CardContent,
  Box,
  CardHeader,
  Card,
  Grid,
  Typography,
  alpha,
  LinearProgress,
  Divider,
  Button,
  styled,
  linearProgressClasses,
  useTheme
} from '@mui/material';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import { useTranslation } from 'react-i18next';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';

const LinearProgressPrimary = styled(LinearProgress)(
  ({ theme }) => `
        height: 6px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.primary.main, 0.3)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.primary.main};
        }
    `
);

const LinearProgressError = styled(LinearProgress)(
  ({ theme }) => `
        height: 6px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.error.main, 0.3)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.error.main};
        }
    `
);

const LinearProgressWarning = styled(LinearProgress)(
  ({ theme }) => `
        height: 6px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.warning.main, 0.3)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.warning.main};
        }
    `
);

const LinearProgressSuccess = styled(LinearProgress)(
  ({ theme }) => `
        height: 6px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.success.main, 0.3)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.success.main};
        }
    `
);

function Block4() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const Box2Options: ApexOptions = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 5,
        columnWidth: '50%'
      }
    },
    colors: [
      alpha(theme.colors.primary.main, 0.4),
      alpha(theme.colors.primary.main, 0.6),
      alpha(theme.colors.primary.main, 0.8),
      alpha(theme.colors.primary.main, 1)
    ],

    theme: {
      mode: theme.palette.mode
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    legend: {
      show: false
    },
    labels: ['2018', '2019', '2020', '2021', '2022'],
    xaxis: {
      labels: {
        show: true
      },
      axisTicks: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      strokeDashArray: 5,
      borderColor: theme.palette.divider
    },
    yaxis: {
      show: false,
      min: 0
    }
  };
  const Box2Data = [
    {
      name: 'Orders',
      data: [1008, 940, 1010, 821, 1035]
    },
    {
      name: 'Sales',
      data: [648, 745, 897, 743, 635]
    },
    {
      name: 'Users',
      data: [1030, 897, 463, 856, 285]
    },
    {
      name: 'Customers',
      data: [675, 386, 283, 897, 498]
    }
  ];

  return (
    <Card>
      <CardHeader
        sx={{
          p: 3
        }}
        action={
          <Button
            size="small"
            variant="outlined"
            endIcon={<ExpandMoreTwoToneIcon />}
          >
            {t('Actions')}
          </Button>
        }
        title={t('Users list')}
      />
      <Divider />
      <CardContent
        sx={{
          p: 2
        }}
      >
        <Box
          sx={{
            mb: 2
          }}
        >
          <Chart
            options={Box2Options}
            series={Box2Data}
            type="bar"
            height={340}
          />
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography
              component="div"
              color="text.primary"
              variant="h4"
              sx={{
                pb: 1
              }}
            >
              {t('Orders')}
            </Typography>
            <LinearProgressPrimary variant="determinate" value={35.76} />
            <Box
              display="flex"
              sx={{
                mt: 0.5
              }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography component="div" variant="subtitle1">
                0
              </Typography>
              <Typography component="div" variant="subtitle1">
                100%
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              component="div"
              color="text.primary"
              variant="h4"
              sx={{
                pb: 1
              }}
            >
              {t('Sales')}
            </Typography>
            <LinearProgressSuccess variant="determinate" value={83.12} />
            <Box
              display="flex"
              sx={{
                mt: 0.5
              }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography component="div" variant="subtitle1">
                0
              </Typography>
              <Typography component="div" variant="subtitle1">
                100%
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              component="div"
              color="text.primary"
              variant="h4"
              sx={{
                pb: 1
              }}
            >
              {t('Users')}
            </Typography>
            <LinearProgressWarning variant="determinate" value={17.98} />
            <Box
              display="flex"
              sx={{
                mt: 0.5
              }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography component="div" variant="subtitle1">
                0
              </Typography>
              <Typography component="div" variant="subtitle1">
                100%
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              component="div"
              color="text.primary"
              variant="h4"
              sx={{
                pb: 1
              }}
            >
              {t('Customers')}
            </Typography>
            <LinearProgressError variant="determinate" value={65.34} />
            <Box
              display="flex"
              sx={{
                mt: 0.5
              }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography component="div" variant="subtitle1">
                0
              </Typography>
              <Typography component="div" variant="subtitle1">
                100%
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Block4;
