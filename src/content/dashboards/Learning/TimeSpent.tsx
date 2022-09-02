import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
  Box,
  styled,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Label from 'src/components/Label';
import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.lighter};
      color: ${theme.colors.success.main};
      width: ${theme.spacing(5)};
      height: ${theme.spacing(5)};
`
);

function TimeSpent() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const chartOptions: ApexOptions = {
    stroke: {
      curve: 'smooth',
      width: [0, 5]
    },
    theme: {
      mode: theme.palette.mode
    },
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      }
    },
    markers: {
      hover: {
        sizeOffset: 1
      },
      shape: 'circle',
      size: 8,
      strokeWidth: 4,
      strokeOpacity: 1,
      strokeColors: theme.colors.alpha.white[100],
      colors: [theme.colors.success.main]
    },
    colors: [theme.colors.secondary.main, theme.colors.success.main],
    fill: {
      opacity: 1
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 12,
        columnWidth: '30%'
      }
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
    dataLabels: {
      enabled: false
    },
    grid: {
      strokeDashArray: 5,
      borderColor: theme.palette.divider
    },
    legend: {
      show: false
    },
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: theme.palette.text.secondary
        }
      }
    },
    yaxis: {
      tickAmount: 6,
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: theme.palette.text.secondary
        }
      }
    }
  };

  const chartData = [
    {
      name: 'Time spent in current session',
      type: 'column',
      data: [1008, 940, 1010, 821, 1035, 1030, 957, 926, 993, 1021, 997, 879]
    },
    {
      name: 'Time spent in past sessions',
      type: 'line',
      data: [648, 745, 897, 743, 635, 842, 811, 696, 878, 987, 747, 731]
    }
  ];

  return (
    <Card
      sx={{
        p: 2
      }}
    >
      <CardHeader
        avatar={
          <AvatarSuccess>
            <CalendarTodayTwoToneIcon fontSize="small" />
          </AvatarSuccess>
        }
        action={
          <Box
            display="flex"
            alignItems="flex-start"
            sx={{
              p: 1
            }}
          >
            <Label color="error">
              <ArrowDownwardTwoToneIcon fontSize="small" />
              <b>12.31%</b>
            </Label>
            <Box
              sx={{
                pl: 1.5
              }}
            >
              <Typography align="center" variant="h4">
                23h 40min
              </Typography>
              <Typography
                align="center"
                variant="subtitle2"
                color="text.secondary"
              >
                {t('total spent')}
              </Typography>
            </Box>
          </Box>
        }
        title={t('Time Spent')}
        titleTypographyProps={{ variant: 'h4' }}
      />
      <CardContent
        sx={{
          px: { xs: 4, md: 6, lg: 10 }
        }}
      >
        <Chart
          options={chartOptions}
          series={chartData}
          type="line"
          height={306}
        />
      </CardContent>
    </Card>
  );
}

export default TimeSpent;
