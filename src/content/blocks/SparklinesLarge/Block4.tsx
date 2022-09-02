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
import SubscriptionsTwoToneIcon from '@mui/icons-material/SubscriptionsTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import PieChartTwoToneIcon from '@mui/icons-material/PieChartTwoTone';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';

function Block4() {
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
      colors: [theme.colors.error.main],
      curve: 'smooth',
      width: 3
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
            return 'Transactions:';
          }
        }
      },
      marker: {
        show: true
      }
    },
    colors: [theme.colors.error.main]
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
          spacing={0}
        >
          <Box
            sx={{
              textAlign: 'center'
            }}
          >
            <Text color="warning">
              <MonetizationOnTwoToneIcon fontSize="large" />
            </Text>
            <Typography
              sx={{
                pt: 1
              }}
              variant="h4"
            >
              $9,658
            </Typography>
            <Typography variant="subtitle2">{t('revenue')}</Typography>
          </Box>
          <Box
            sx={{
              textAlign: 'center'
            }}
          >
            <Text color="error">
              <PersonTwoToneIcon fontSize="large" />
            </Text>
            <Typography
              sx={{
                pt: 1
              }}
              variant="h4"
            >
              6,598
            </Typography>
            <Typography variant="subtitle2">{t('new members')}</Typography>
          </Box>
          <Box
            sx={{
              textAlign: 'center'
            }}
          >
            <Text color="info">
              <SubscriptionsTwoToneIcon fontSize="large" />
            </Text>
            <Typography
              sx={{
                pt: 1
              }}
              variant="h4"
            >
              1,064
            </Typography>
            <Typography variant="subtitle2">{t('orders')}</Typography>
          </Box>
        </Stack>
      </Box>
      <Box px={3} pb={3}>
        <Chart
          options={Box1Options}
          series={Box1Data}
          type="line"
          height={80}
        />
      </Box>
      <Divider />
      <Box
        p={1.5}
        sx={{
          background: `${theme.colors.alpha.black[5]}`
        }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: `${theme.colors.success.main}`
          }}
        >
          <ArrowUpwardTwoToneIcon />
          <span>+24.65%</span>
        </Typography>
        <Typography
          component="span"
          sx={{
            pl: 1
          }}
          variant="subtitle2"
        >
          {t('new subscription sign-ups')}
        </Typography>
      </Box>
      <Divider />
      <Box
        p={3}
        sx={{
          textAlign: 'center'
        }}
      >
        <Button
          sx={{
            px: 2.5,
            borderRadius: 10,
            transform: 'scale(1)',
            transition: `${theme.transitions.create(['all'])}`,
            boxShadow: `${theme.colors.shadows.error}`,

            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: `${theme.colors.shadows.error}`
            },
            '&:active': {
              boxShadow: 'none'
            }
          }}
          variant="contained"
          color="error"
          startIcon={<PieChartTwoToneIcon />}
        >
          {t('Download report')}
        </Button>
      </Box>
    </Card>
  );
}

export default Block4;
