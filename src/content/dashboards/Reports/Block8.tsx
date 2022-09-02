import { Fragment } from 'react';

import {
  Box,
  ListItemAvatar,
  ListItemText,
  Divider,
  List,
  ListItem,
  Card,
  Typography,
  IconButton,
  Button,
  Avatar,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import Scrollbar from 'src/components/Scrollbar';
import Text from 'src/components/Text';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

const CardActions = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(1.5)};
    top: ${theme.spacing(1.5)};
    z-index: 7;
  `
);

const ListWrapper = styled(List)(
  () => `
    .MuiDivider-root:first-of-type {
        display: none;
    }
  `
);

function Block8() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const items = [
    {
      id: 1,
      username: 'Shanelle Wynn',
      jobtitle: 'UI Engineer, Apple Inc.',
      avatar: '/static/images/avatars/1.jpg'
    },
    {
      id: 2,
      username: 'Akeem Griffith',
      jobtitle: 'Manager, Google Inc.',
      avatar: '/static/images/avatars/2.jpg'
    },
    {
      id: 3,
      username: 'Abigayle Hicks',
      jobtitle: 'Project Manager, Spotify',
      avatar: '/static/images/avatars/3.jpg'
    },
    {
      id: 4,
      username: 'Reece Corbett',
      jobtitle: 'Senior Designer, Amazon Inc.',
      avatar: '/static/images/avatars/4.jpg'
    },
    {
      id: 5,
      username: 'Zain Baptista',
      jobtitle: 'Senior Accountant, Microsoft',
      avatar: '/static/images/avatars/5.jpg'
    }
  ];

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
    colors: [theme.colors.info.main],
    dataLabels: {
      enabled: false
    },
    theme: {
      mode: theme.palette.mode
    },
    stroke: {
      show: true,
      colors: [theme.colors.info.main],
      width: 2
    },
    legend: {
      show: false
    },
    fill: {
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.3,
        inverseColors: false,
        opacityFrom: 0.8,
        opacityTo: 0,
        stops: [0, 100]
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
      },
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      show: false,
      min: 0
    }
  };
  const Box1Data = [
    {
      name: 'Weekly Sales',
      data: [32, 52, 45, 32, 54, 56, 28, 25, 36, 62]
    }
  ];

  return (
    <Card
      sx={{
        position: 'relative'
      }}
    >
      <CardActions>
        <IconButton size="small" color="primary">
          <MoreVertTwoToneIcon />
        </IconButton>
      </CardActions>
      <Box p={3}>
        <Typography
          variant="h3"
          sx={{
            fontSize: `${theme.typography.pxToRem(19)}`
          }}
        >
          {t('Weekly Sales')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Reports for what we sold this week')}.
        </Typography>
      </Box>
      <Chart options={Box1Options} series={Box1Data} type="area" height={119} />
      <Box
        sx={{
          height: 237
        }}
      >
        <Scrollbar>
          <ListWrapper disablePadding>
            {items.map((item) => (
              <Fragment key={item.id}>
                <Divider />
                <ListItem
                  sx={{
                    py: 2,
                    px: 2.5
                  }}
                >
                  <ListItemAvatar
                    sx={{
                      mr: 0
                    }}
                  >
                    <Avatar alt={item.username} src={item.avatar} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={<Text color="black">{item.username}</Text>}
                    primaryTypographyProps={{
                      variant: 'h5',
                      noWrap: true
                    }}
                    secondary={item.jobtitle}
                    secondaryTypographyProps={{
                      variant: 'subtitle2',
                      noWrap: true
                    }}
                  />
                  <Button
                    variant="text"
                    color="secondary"
                    sx={{
                      backgroundColor: `${theme.colors.secondary.lighter}`,
                      '&:hover': {
                        backgroundColor: `${theme.colors.secondary.main}`,
                        color: `${theme.palette.getContrastText(
                          theme.colors.secondary.main
                        )}`
                      }
                    }}
                  >
                    {t('View')}
                  </Button>
                </ListItem>
              </Fragment>
            ))}
          </ListWrapper>
        </Scrollbar>
      </Box>
      <Divider />
      <Box
        p={3}
        sx={{
          textAlign: 'center'
        }}
      >
        <Button
          variant="contained"
          endIcon={<ArrowForwardTwoToneIcon />}
          size="small"
        >
          {t('View all employees')}
        </Button>
      </Box>
    </Card>
  );
}

export default Block8;
