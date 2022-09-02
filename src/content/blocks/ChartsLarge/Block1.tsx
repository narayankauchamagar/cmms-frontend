import {
  CardContent,
  Box,
  CardHeader,
  Card,
  Stack,
  Typography,
  Divider,
  IconButton,
  useTheme
} from '@mui/material';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import { useTranslation } from 'react-i18next';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import Gauge from 'src/components/Gauge';

function Block1() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const data = {
    percentageLocal: 63,
    percentageExternal: 37
  };

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
    colors: [theme.colors.primary.main, theme.colors.primary.light],

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
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    markers: {
      hover: {
        sizeOffset: 2
      },
      shape: 'circle',
      size: 7,
      strokeWidth: 2,
      strokeOpacity: 1,
      strokeColors: theme.colors.alpha.white[100],
      colors: theme.colors.success.main
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
      min: 0,
      axisBorder: {
        show: false
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
    }
  };
  const Box2Data = [
    {
      name: 'Current Period',
      data: [1008, 940, 1010, 821, 1035, 1030, 957, 926, 993, 1021, 997, 879]
    },
    {
      name: 'Previous Period',
      data: [648, 745, 897, 743, 635, 842, 811, 696, 878, 987, 747, 731]
    }
  ];

  return (
    <Card>
      <CardHeader
        sx={{ p: 3 }}
        titleTypographyProps={{
          component: 'h5',
          variant: 'h6',
          fontWeight: 'bold',
          sx: {
            textTransform: 'uppercase',
            textAlign: 'center'
          }
        }}
        action={
          <IconButton size="small" color="secondary">
            <MoreVertTwoToneIcon />
          </IconButton>
        }
        title={t('Visitors Locations')}
      />
      <CardContent>
        <Chart
          options={Box2Options}
          series={Box2Data}
          type="bar"
          height={364}
        />
        <Stack
          sx={{
            mt: 4
          }}
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          justifyContent="space-evenly"
          alignItems="center"
          spacing={0}
        >
          <Box>
            <Typography
              component="h6"
              variant="caption"
              fontWeight="bold"
              textAlign="center"
              sx={{
                pb: 2,
                color: `${theme.colors.success.main}`
              }}
            >
              {t('Local Visitors')}
            </Typography>
            <Gauge
              circleRatio={1}
              value={data.percentageLocal}
              strokeWidth={8}
              text={`${data.percentageLocal}%`}
              color="success"
              size="large"
            />
          </Box>
          <Box>
            <Typography
              component="h6"
              variant="caption"
              fontWeight="bold"
              textAlign="center"
              sx={{
                pb: 2,
                color: `${theme.colors.error.main}`
              }}
            >
              {t('External Visitors')}
            </Typography>
            <Gauge
              circleRatio={1}
              value={data.percentageExternal}
              strokeWidth={8}
              text={`${data.percentageExternal}%`}
              color="error"
              size="large"
            />
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default Block1;
