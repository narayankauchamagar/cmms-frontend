import {
  Box,
  Divider,
  Button,
  Card,
  Typography,
  IconButton,
  Stack,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import Text from 'src/components/Text';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';

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
    colors: [theme.colors.warning.main],
    dataLabels: {
      enabled: false
    },
    theme: {
      mode: theme.palette.mode
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

  return (
    <Card variant="outlined">
      <Box
        sx={{
          background: `${theme.colors.alpha.black[5]}`
        }}
        p={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography gutterBottom variant="caption" fontWeight="bold">
            {t('Statistics')}
          </Typography>
          <Typography variant="h4">{t('Last quarter report')}</Typography>
        </Box>
        <IconButton size="small">
          <MoreHorizTwoToneIcon />
        </IconButton>
      </Box>
      <Divider />
      <Stack
        sx={{
          mt: 3
        }}
        direction="row"
        justifyContent="space-evenly"
        alignItems="stretch"
        spacing={0}
      >
        <Box
          py={1}
          px={4}
          sx={{
            textAlign: 'center'
          }}
        >
          <Text color="info">
            <MonetizationOnTwoToneIcon fontSize="large" />
          </Text>
          <Typography variant="h3">$9,658</Typography>
          <Typography variant="subtitle2">{t('revenue')}</Typography>
        </Box>
        <Box
          py={1}
          px={4}
          sx={{
            textAlign: 'center'
          }}
        >
          <Text color="error">
            <PersonTwoToneIcon fontSize="large" />
          </Text>
          <Typography variant="h3">23,594</Typography>
          <Typography variant="subtitle2">{t('users')}</Typography>
        </Box>
      </Stack>
      <Chart options={Box1Options} series={Box1Data} type="area" height={100} />
      <Box
        sx={{
          textAlign: 'center',
          pt: 2,
          pb: 3
        }}
      >
        <Button
          variant="outlined"
          sx={{
            borderWidth: '2px',
            '&:hover': {
              borderWidth: '2px'
            }
          }}
          endIcon={<ChevronRightTwoToneIcon />}
        >
          {t('View complete report')}
        </Button>
      </Box>
    </Card>
  );
}

export default Block8;
