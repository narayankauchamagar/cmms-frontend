import {
  CardContent,
  CardHeader,
  Card,
  Grid,
  Typography,
  IconButton,
  useTheme
} from '@mui/material';
import Text from 'src/components/Text';

import { useTranslation } from 'react-i18next';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import FiberManualRecordTwoToneIcon from '@mui/icons-material/FiberManualRecordTwoTone';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';

function Block1() {
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
        columnWidth: '60%'
      }
    },
    colors: [theme.colors.primary.dark, theme.colors.info.main],
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
        <Card
          sx={{
            overflow: 'visible'
          }}
        >
          <CardHeader
            sx={{
              p: 3
            }}
            titleTypographyProps={{
              component: 'h5',
              variant: 'caption',
              fontWeight: 'bold'
            }}
            action={
              <IconButton size="small" color="secondary">
                <MoreVertTwoToneIcon />
              </IconButton>
            }
            title={t('Monthly sales')}
          />
          <CardContent
            sx={{
              pt: 0,
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Text flex color="warning">
              <FiberManualRecordTwoToneIcon />
            </Text>
            <Typography
              sx={{
                px: 1
              }}
              variant="h1"
            >
              $8,489
            </Typography>
            <Typography fontWeight="bold" variant="h4">
              <Text color="success">+54</Text>
            </Typography>
          </CardContent>
          <Chart
            options={Box1Options}
            series={Box1Data}
            type="area"
            height={150}
          />
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            overflow: 'visible'
          }}
        >
          <CardHeader
            sx={{
              p: 3
            }}
            titleTypographyProps={{
              component: 'h5',
              variant: 'caption',
              fontWeight: 'bold'
            }}
            action={
              <IconButton size="small" color="secondary">
                <MoreVertTwoToneIcon />
              </IconButton>
            }
            title={t('Last 10 orders')}
          />
          <CardContent
            sx={{
              pt: 0,
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Text flex color="success">
              <ArrowUpwardTwoToneIcon />
            </Text>
            <Typography
              sx={{
                px: 1
              }}
              variant="h1"
            >
              $1,598
            </Typography>
            <Typography fontWeight="bold" variant="h4">
              <Text color="error">-20%</Text>
            </Typography>
          </CardContent>
          <Chart
            options={Box2Options}
            series={Box2Data}
            type="bar"
            height={150}
          />
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            overflow: 'visible'
          }}
        >
          <CardHeader
            sx={{
              p: 3
            }}
            titleTypographyProps={{
              component: 'h5',
              variant: 'caption',
              fontWeight: 'bold'
            }}
            action={
              <IconButton size="small" color="secondary">
                <MoreVertTwoToneIcon />
              </IconButton>
            }
            title={'2022 ' + t('Total sales')}
          />
          <CardContent
            sx={{
              pt: 0,
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Text flex color="error">
              <KeyboardArrowDownTwoToneIcon />
            </Text>
            <Typography
              sx={{
                px: 1
              }}
              variant="h1"
            >
              $9,324
            </Typography>
            <Typography fontWeight="bold" variant="h4">
              <Text color="info">+546</Text>
            </Typography>
          </CardContent>
          <Chart
            options={Box3Options}
            series={Box3Data}
            type="area"
            height={150}
          />
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block1;
