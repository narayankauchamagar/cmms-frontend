import {
  Button,
  Card,
  CardContent,
  Box,
  Typography,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import UpdateTwoToneIcon from '@mui/icons-material/UpdateTwoTone';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

const IconWrapper = styled('div')(
  ({ theme }) => `
      color:  ${theme.colors.primary.light};
      display: flex;
      align-items: center;
      justify-content: flex-end;
      
      .MuiSvgIcon-fontSizeMedium {
        font-size: ${theme.typography.pxToRem(55)};
      }
`
);

const CardWrapper = styled(Card)(
  () => `
        position: relative;
        min-height: 380px;
        padding: 0;
        overflow: hidden;
`
);

const ChartWrapper = styled('div')(
  ({ theme }) => `
        position: absolute;
        bottom: ${theme.spacing(3)};
        left: 0;
        bottom: 0;
        right: 0;
        height: 200px;
`
);

const TypographyWrapper = styled(Typography)(
  ({ theme }) => `
      font-size: ${theme.typography.pxToRem(45)};
`
);

const BottomWrapper = styled(Box)(
  ({ theme }) => `
      position: absolute;
      bottom: ${theme.spacing(2)};
      left: 0;
      right: 0;
      padding: 0 ${theme.spacing(3)};
`
);

function UpdatedTickets() {
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
    colors: [theme.colors.secondary.main],
    dataLabels: {
      enabled: false
    },
    theme: {
      mode: theme.palette.mode
    },
    stroke: {
      show: true,
      colors: [theme.colors.secondary.main],
      curve: 'straight',
      width: 2
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
    },
    fill: {
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.3,
        inverseColors: false,
        opacityFrom: 0.6,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    grid: {
      padding: {
        right: 1,
        left: 1
      }
    },
    markers: {
      size: 0,
      hover: {
        size: 0
      }
    },
    tooltip: {
      fixed: {
        enabled: true,
        position: 'topRight',
        offsetX: -15,
        offsetY: -15
      },
      theme: theme.palette.mode === 'dark' ? 'light' : 'dark',
      onDatasetHover: {
        highlightDataSeries: false
      },
      x: {
        show: false
      },
      marker: {
        show: false
      }
    }
  };
  const chartData = [
    {
      name: 'Updated Tickets',
      data: [28, 31, 26, 32, 27, 22, 37, 13, 30, 10, 16, 21]
    }
  ];

  return (
    <CardWrapper>
      <CardContent
        sx={{
          p: 3
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            pb: 2
          }}
        >
          <Typography
            variant="h3"
            sx={{
              width: 80,
              lineHeight: 1.4
            }}
          >
            {t('Updated Tickets')}
          </Typography>
          <IconWrapper>
            <UpdateTwoToneIcon />
          </IconWrapper>
        </Box>
        <Button variant="contained" size="small">
          {t('View tickets')}
        </Button>
      </CardContent>
      <BottomWrapper
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pt: 2
        }}
      >
        <TypographyWrapper variant="h1">51</TypographyWrapper>
        <Box>
          <Typography align="right" variant="subtitle1" noWrap>
            {t('Previous Period')}
          </Typography>
          <Typography align="right" variant="h3">
            39
          </Typography>
        </Box>
      </BottomWrapper>
      <ChartWrapper>
        <Chart
          options={chartOptions}
          series={chartData}
          type="area"
          height={'100%'}
        />
      </ChartWrapper>
    </CardWrapper>
  );
}

export default UpdatedTickets;
