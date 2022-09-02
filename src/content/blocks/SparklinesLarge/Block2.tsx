import {
  Divider,
  Box,
  Stack,
  Card,
  Typography,
  Button,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import Text from 'src/components/Text';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

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
      colors: [theme.colors.success.main],
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
            return 'Revenue: $';
          }
        }
      },
      marker: {
        show: true
      }
    },
    colors: [theme.colors.success.main]
  };
  const Box1Data = [
    {
      name: 'Revenue',
      data: [36, 24, 43, 67, 44, 28, 43, 27, 59, 31, 38]
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
          <Box p={2} display="flex" alignItems="flex-start">
            <Text color="primary">
              <MonetizationOnTwoToneIcon fontSize="large" />
            </Text>
            <Box ml={1}>
              <Typography variant="h3">$14,264</Typography>
              <Typography noWrap variant="subtitle2">
                {t('total value')}
              </Typography>
            </Box>
          </Box>
          <Box p={2} display="flex" alignItems="flex-start">
            <Text color="error">
              <PersonTwoToneIcon fontSize="large" />
            </Text>
            <Box ml={1}>
              <Typography variant="h3">6,598</Typography>
              <Typography noWrap variant="subtitle2">
                {t('new members')}
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Box>
      <Divider />
      <Box
        p={3}
        sx={{
          textAlign: 'center',
          background: `${theme.colors.alpha.black[5]}`
        }}
      >
        <Button
          variant="contained"
          color="success"
          endIcon={<ArrowForwardTwoToneIcon />}
        >
          {t('View recent sales')}
        </Button>
      </Box>
      <Divider />
      <Box p={3}>
        <Chart
          options={Box1Options}
          series={Box1Data}
          type="line"
          height={86}
        />
      </Box>
    </Card>
  );
}

export default Block2;
