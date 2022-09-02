import {
  Box,
  Divider,
  Avatar,
  Card,
  Typography,
  IconButton,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import Text from 'src/components/Text';
import EmojiObjectsTwoToneIcon from '@mui/icons-material/EmojiObjectsTwoTone';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';

function Block9() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

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
    <Card
      sx={{
        overflow: 'visible'
      }}
      variant="outlined"
    >
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
          <Typography variant="h4">{t('Users overview')}</Typography>
        </Box>
        <IconButton size="small" color="primary">
          <AddTwoToneIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box
        px={3}
        pt={3}
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Box>
          <Typography
            fontWeight="bold"
            gutterBottom
            sx={{
              fontSize: `${theme.typography.pxToRem(12)}`
            }}
            component="h6"
            variant="caption"
          >
            {t('New accounts')}
          </Typography>
          <Typography
            gutterBottom
            sx={{
              py: 0.5
            }}
            variant="h2"
          >
            $8,489
          </Typography>
          <Box display="flex" alignItems="center">
            <Text flex color="error">
              <ArrowUpwardTwoToneIcon fontSize="small" />
            </Text>
            <Typography
              sx={{
                pl: 0.2
              }}
              variant="subtitle2"
            >
              <Text color="success">15.4%</Text> {t('increase this month')}
            </Typography>
          </Box>
        </Box>
        <Avatar
          sx={{
            width: 54,
            height: 54,
            background: `${theme.colors.primary.main}`,
            color: `${theme.palette.getContrastText(theme.colors.primary.dark)}`
          }}
        >
          <EmojiObjectsTwoToneIcon />
        </Avatar>
      </Box>
      <Chart options={Box3Options} series={Box3Data} type="area" height={209} />
    </Card>
  );
}

export default Block9;
