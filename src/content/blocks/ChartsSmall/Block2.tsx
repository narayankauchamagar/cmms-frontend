import {
  Box,
  Card,
  Grid,
  Typography,
  Avatar,
  styled,
  useTheme
} from '@mui/material';
import Label from 'src/components/Label';

import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';
import Text from 'src/components/Text';

const ChartOverlay = styled(Box)(
  () => `
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: .2;
    z-index: 5;

    & > div {
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
    }
  `
);

const BoxAbsoluteOverlay = styled(Card)(
  () => `
    position: relative;
  `
);

const CardContentOverlay = styled(Box)(
  ({ theme }) => `
    position: relative;
    z-index: 6;
    padding: ${theme.spacing(4, 0)};
  `
);

const AvatarWarning = styled(Avatar)(
  ({ theme }) => `
        background-color: ${theme.colors.warning.main};
        color: ${theme.palette.getContrastText(theme.colors.warning.dark)};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
  `
);

const AvatarPrimary = styled(Avatar)(
  ({ theme }) => `
        background-color: ${theme.colors.primary.main};
        color: ${theme.palette.getContrastText(theme.colors.primary.dark)};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
  `
);

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
        background-color: ${theme.colors.success.main};
        color: ${theme.palette.getContrastText(theme.colors.success.dark)};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
  `
);

function Block2() {
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
    colors: [theme.colors.warning.main],
    dataLabels: {
      enabled: false
    },
    theme: {
      mode: theme.palette.mode
    },
    stroke: {
      show: true,
      colors: [theme.colors.warning.main],
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
    }
  };
  const Box1Data = [
    {
      name: 'Sales',
      data: [32, 52, 45, 32, 54, 56, 28, 25, 36, 62]
    }
  ];

  const Box2Options: ApexOptions = {
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
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 5,
        columnWidth: '80%'
      }
    },
    colors: [theme.colors.primary.light, theme.colors.info.light],
    dataLabels: {
      enabled: false
    },
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
      'Last Year',
      'Last Decade'
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
    }
  };
  const Box2Data = [
    {
      name: 'Net Profit',
      data: [2.3, 3.1, 4.0, 3.8, 5.1, 3.6, 4.0, 3.8, 5.1, 3.6]
    },
    {
      name: 'Net Loss',
      data: [2.1, 2.1, 3.0, 2.8, 4.0, 3.8, 5.1, 3.6, 4.1, 2.6, 1.2]
    }
  ];

  const Box3Options: ApexOptions = {
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
      width: 3
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
      show: false
    }
  };
  const Box3Data = [
    {
      name: 'Total Sales',
      data: [2.3, 3.1, 4.0, 3.8, 5.1, 3.6, 4.0, 3.8, 5.1, 3.6]
    }
  ];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <BoxAbsoluteOverlay>
          <CardContentOverlay
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <AvatarWarning>
              <NotificationsActiveTwoToneIcon />
            </AvatarWarning>
            <Typography
              variant="h1"
              sx={{
                py: 2,
                fontSize: `${theme.typography.pxToRem(40)}`
              }}
            >
              86.453
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{
                fontSize: `${theme.typography.pxToRem(15)}`
              }}
            >
              {t('Laptops sales')}
            </Typography>
            <Typography fontWeight="bold" variant="h4">
              <Text color="success">+145%</Text>
            </Typography>
          </CardContentOverlay>
          <ChartOverlay>
            <Chart
              options={Box1Options}
              series={Box1Data}
              type="area"
              height={200}
            />
          </ChartOverlay>
        </BoxAbsoluteOverlay>
      </Grid>
      <Grid item xs={12} md={4}>
        <BoxAbsoluteOverlay>
          <CardContentOverlay
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <AvatarPrimary>
              <MonetizationOnTwoToneIcon />
            </AvatarPrimary>
            <Typography
              variant="h1"
              sx={{
                py: 2,
                fontSize: `${theme.typography.pxToRem(40)}`
              }}
            >
              285.483
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{
                fontSize: `${theme.typography.pxToRem(15)}`
              }}
            >
              {t('Total sales')}
            </Typography>
            <Typography noWrap fontWeight="bold" variant="h4">
              Down by <Text color="error">23%</Text> last quarter
            </Typography>
          </CardContentOverlay>
          <ChartOverlay>
            <Chart
              options={Box2Options}
              series={Box2Data}
              type="bar"
              height={200}
            />
          </ChartOverlay>
        </BoxAbsoluteOverlay>
      </Grid>
      <Grid item xs={12} md={4}>
        <BoxAbsoluteOverlay>
          <CardContentOverlay
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <AvatarSuccess>
              <AssignmentIndTwoToneIcon />
            </AvatarSuccess>
            <Typography
              variant="h1"
              sx={{
                py: 2,
                fontSize: `${theme.typography.pxToRem(40)}`
              }}
            >
              5843
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{
                fontSize: `${theme.typography.pxToRem(15)}`
              }}
            >
              {t('New accounts')}
            </Typography>
            <Typography fontWeight="bold" variant="h4">
              <Label color="error">24% down</Label>
            </Typography>
          </CardContentOverlay>
          <ChartOverlay>
            <Chart
              options={Box3Options}
              series={Box3Data}
              type="area"
              height={200}
            />
          </ChartOverlay>
        </BoxAbsoluteOverlay>
      </Grid>
    </Grid>
  );
}

export default Block2;
