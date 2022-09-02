import {
  Box,
  Stack,
  Card,
  Typography,
  Divider,
  Button,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import Text from 'src/components/Text';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import SubscriptionsTwoToneIcon from '@mui/icons-material/SubscriptionsTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import PieChartTwoToneIcon from '@mui/icons-material/PieChartTwoTone';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

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
    theme: {
      mode: theme.palette.mode
    },
    stroke: {
      colors: [theme.colors.primary.main],
      curve: 'smooth',
      width: 4
    },
    grid: {
      padding: {
        right: 5,
        left: 5
      }
    },
    tooltip: {
      fixed: {
        enabled: true
      },
      x: {
        show: true
      },
      y: {
        title: {
          formatter: function () {
            return 'Visitors:';
          }
        }
      },
      marker: {
        show: true
      }
    },
    colors: [theme.colors.primary.main]
  };
  const Box1Data = [
    {
      name: 'Revenue',
      data: [465, 546, 234, 576, 554, 338, 427, 348, 586, 254, 348]
    }
  ];

  return (
    <Card>
      <Box p={3}>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="stretch"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={0}
        >
          <Box
            p={1}
            sx={{
              textAlign: 'center'
            }}
          >
            <Text color="warning">
              <MonetizationOnTwoToneIcon fontSize="large" />
            </Text>
            <Typography variant="h3">$9,658</Typography>
            <Typography variant="subtitle2">{t('revenue')}</Typography>
          </Box>
          <Box
            p={1}
            sx={{
              textAlign: 'center'
            }}
          >
            <Text color="success">
              <PersonTwoToneIcon fontSize="large" />
            </Text>
            <Typography variant="h3">23,594</Typography>
            <Typography variant="subtitle2">{t('users')}</Typography>
          </Box>
          <Box
            p={1}
            sx={{
              textAlign: 'center'
            }}
          >
            <Text color="info">
              <SubscriptionsTwoToneIcon fontSize="large" />
            </Text>
            <Typography variant="h3">1,064</Typography>
            <Typography variant="subtitle2">{t('orders')}</Typography>
          </Box>
        </Stack>
      </Box>
      <Divider />
      <Box
        p={2}
        sx={{
          textAlign: 'center'
        }}
      >
        <Button variant="outlined" startIcon={<PieChartTwoToneIcon />}>
          {t('Generate reports')}
        </Button>
      </Box>
      <Divider />
      <Box
        px={2}
        py={3}
        sx={{
          background: `${theme.colors.alpha.black[5]}`
        }}
      >
        <Chart
          options={Box1Options}
          series={Box1Data}
          type="line"
          height={80}
        />
      </Box>
    </Card>
  );
}

export default Block1;
