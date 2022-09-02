import {
  Box,
  Card,
  Typography,
  alpha,
  LinearProgress,
  IconButton,
  Avatar,
  Tooltip,
  linearProgressClasses,
  Grid,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import Text from 'src/components/Text';

import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import PointOfSaleTwoToneIcon from '@mui/icons-material/PointOfSaleTwoTone';
import { Link as RouterLink } from 'react-router-dom';
import LoopTwoToneIcon from '@mui/icons-material/LoopTwoTone';

const CardWrapper = styled(Card)(
  ({ theme }) => `
      background: ${alpha(theme.colors.alpha.black[10], 0.05)};
  `
);

const LinearProgressError = styled(LinearProgress)(
  ({ theme }) => `
        height: 16px;
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

const LinearProgressInfo = styled(LinearProgress)(
  ({ theme }) => `
        height: 16px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.info.main, 0.1)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.info.main};
        }
    `
);

const LinearProgressSuccess = styled(LinearProgress)(
  ({ theme }) => `
        height: 16px;
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

function Block6() {
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
    fill: {
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 0.9,
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
      <Box pt={4}>
        <Typography
          variant="h4"
          textAlign="center"
          sx={{
            textTransform: 'uppercase'
          }}
        >
          {t('Inventory')}
        </Typography>
      </Box>
      <CardWrapper
        elevation={0}
        sx={{
          textAlign: 'center',
          p: 3,
          mx: 5,
          my: 4
        }}
      >
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <Text color="warning">
              <PersonTwoToneIcon fontSize="large" />
            </Text>
            <Typography
              variant="h3"
              sx={{
                pt: 1
              }}
            >
              2,345
            </Typography>
            <Typography variant="subtitle2">{t('users')}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Text color="success">
              <PointOfSaleTwoToneIcon fontSize="large" />
            </Text>
            <Typography
              variant="h3"
              sx={{
                pt: 1
              }}
            >
              $3,586
            </Typography>
            <Typography variant="subtitle2">{t('sales')}</Typography>
          </Grid>
        </Grid>
      </CardWrapper>
      <Box pb={2}>
        <Typography
          variant="h4"
          textAlign="center"
          sx={{
            textTransform: 'uppercase'
          }}
        >
          {t('Activity')}
        </Typography>
      </Box>
      <Box px={5} py={1} display="flex" alignItems="center">
        <Box>
          <Tooltip arrow title="Remy Sharp">
            <Avatar
              sx={{
                width: 46,
                height: 46
              }}
              component={RouterLink}
              to="#"
              alt="Remy Sharp"
              src="/static/images/avatars/1.jpg"
            />
          </Tooltip>
        </Box>
        <Box
          sx={{
            width: '100%',
            px: 2
          }}
        >
          <LinearProgressError variant="determinate" value={34} />
        </Box>
        <Box>
          <Typography
            variant="h4"
            sx={{
              color: `${theme.colors.error.main}`
            }}
          >
            $2,835
          </Typography>
        </Box>
      </Box>
      <Box px={5} py={1} display="flex" alignItems="center">
        <Box>
          <Tooltip arrow title="Cindy Baker">
            <Avatar
              component={RouterLink}
              sx={{
                width: 46,
                height: 46
              }}
              to="#"
              alt="Cindy Baker"
              src="/static/images/avatars/3.jpg"
            />
          </Tooltip>
        </Box>
        <Box
          sx={{
            width: '100%',
            px: 2
          }}
        >
          <LinearProgressSuccess variant="determinate" value={34} />
        </Box>
        <Box>
          <Typography
            variant="h4"
            sx={{
              color: `${theme.colors.success.main}`
            }}
          >
            $5,542
          </Typography>
        </Box>
      </Box>
      <Box px={5} py={1} display="flex" alignItems="center">
        <Box>
          <Tooltip arrow title="Travis Howard">
            <Avatar
              sx={{
                width: 46,
                height: 46
              }}
              component={RouterLink}
              to="#"
              alt="Travis Howard"
              src="/static/images/avatars/2.jpg"
            />
          </Tooltip>
        </Box>
        <Box
          sx={{
            width: '100%',
            px: 2
          }}
        >
          <LinearProgressInfo variant="determinate" value={72} />
        </Box>
        <Box>
          <Typography
            variant="h4"
            sx={{
              color: `${theme.colors.info.main}`
            }}
          >
            $1,375
          </Typography>
        </Box>
      </Box>
      <Chart options={Box1Options} series={Box1Data} type="area" height={150} />
      <Box
        p={1}
        sx={{
          textAlign: 'center'
        }}
      >
        <Tooltip placement="top" arrow title={t('Refresh view')}>
          <IconButton color="error">
            <LoopTwoToneIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Card>
  );
}

export default Block6;
