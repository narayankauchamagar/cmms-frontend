import { Fragment } from 'react';

import {
  Box,
  Card,
  Typography,
  IconButton,
  CircularProgress,
  Button,
  ListItemAvatar,
  ListItemText,
  Divider,
  List,
  ListItem,
  Avatar,
  Tooltip,
  circularProgressClasses,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import Scrollbar from 'src/components/Scrollbar';
import Text from 'src/components/Text';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import FiberManualRecordTwoToneIcon from '@mui/icons-material/FiberManualRecordTwoTone';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';
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

function Block3() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const items = [
    {
      id: 1,
      username: 'Shanelle Wynn',
      jobtitle: 'UI Engineer, Apple Inc.',
      progress: 76,
      arrow: '',
      value: '685'
    },
    {
      id: 2,
      username: 'Akeem Griffith',
      jobtitle: 'Manager, Google Inc.',
      progress: 48,
      arrow: 'up',
      value: '3,685'
    },
    {
      id: 3,
      username: 'Abigayle Hicks',
      jobtitle: 'Project Manager, Spotify',
      progress: 38,
      arrow: '',
      value: '765'
    },
    {
      id: 4,
      username: 'Reece Corbett',
      jobtitle: 'Senior Designer, Amazon Inc.',
      progress: 85,
      arrow: '',
      value: '43,548'
    },
    {
      id: 5,
      username: 'Zain Baptista',
      jobtitle: 'Senior Accountant, Microsoft',
      progress: 29,
      arrow: 'up',
      value: '1,584'
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
      width: 3
    },
    legend: {
      show: false
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
      'Last 10 Years'
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
      name: 'Top grossing products',
      data: [2.1, 2.1, 3.0, 2.8, 4.0, 3.8, 5.1, 3.6, 4.1, 2.6, 1.2]
    }
  ];

  return (
    <Card
      sx={{
        position: 'relative'
      }}
    >
      <CardActions>
        <Tooltip arrow placement="top" title={t('Add new product')}>
          <IconButton
            color="primary"
            sx={{
              backgroundColor: `${theme.colors.primary.main}`,
              color: `${theme.palette.getContrastText(
                theme.colors.primary.main
              )}`,
              '&:hover': {
                backgroundColor: `${theme.colors.primary.dark}`
              },
              '.MuiSvgIcon-root': {
                transition: `${theme.transitions.create(['color'])}`
              }
            }}
          >
            <AddCircleTwoToneIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
      <Box pt={3} px={3}>
        <Typography
          variant="h3"
          sx={{
            pb: 4
          }}
        >
          {t('Top Grossing Products')}
        </Typography>
        <Typography
          fontWeight="bold"
          gutterBottom
          sx={{
            fontSize: `${theme.typography.pxToRem(14)}`
          }}
          component="h6"
          variant="caption"
        >
          {t('Monthly sales')}
        </Typography>
        <Box display="flex" alignItems="center">
          <Text flex color="warning">
            <FiberManualRecordTwoToneIcon />
          </Text>
          <Typography
            sx={{
              px: 0.5
            }}
            variant="h1"
          >
            $8,489
          </Typography>
          <Text color="success">
            <b>+54</b>
          </Text>
        </Box>
      </Box>
      <Chart options={Box1Options} series={Box1Data} type="area" height={185} />
      <Typography
        fontWeight="bold"
        sx={{
          py: 1,
          px: 2,
          fontSize: `${theme.typography.pxToRem(13)}`
        }}
        component="h6"
        variant="caption"
      >
        {t('Top Sellers')}
      </Typography>
      <Box
        sx={{
          height: 300
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
                      display: 'flex',
                      mr: 0.5
                    }}
                  >
                    <Box display="inline-flex" position="relative">
                      <CircularProgress
                        variant="determinate"
                        sx={{
                          color: (theme) => theme.colors.alpha.black[10]
                        }}
                        size={46}
                        thickness={2}
                        value={100}
                      />
                      <CircularProgress
                        size={48}
                        sx={{
                          animationDuration: '550ms',
                          position: 'absolute',
                          left: -1,
                          top: -1,
                          [`& .${circularProgressClasses.circle}`]: {
                            strokeLinecap: 'round'
                          }
                        }}
                        thickness={4}
                        variant="determinate"
                        value={item.progress}
                      />
                    </Box>
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
                  <Typography variant="subtitle1">${item.value}</Typography>
                  {item.arrow ? (
                    <Avatar
                      variant="rounded"
                      sx={{
                        ml: 1,
                        width: 28,
                        height: 28,
                        p: 0,
                        background: `${theme.colors.error.lighter}`,
                        color: `${theme.colors.error.main}`
                      }}
                    >
                      <KeyboardArrowDownTwoToneIcon />
                    </Avatar>
                  ) : (
                    <Avatar
                      variant="rounded"
                      sx={{
                        ml: 1,
                        width: 28,
                        height: 28,
                        p: 0,
                        background: `${theme.colors.success.lighter}`,
                        color: `${theme.colors.success.main}`
                      }}
                    >
                      <KeyboardArrowUpTwoToneIcon />
                    </Avatar>
                  )}
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
          {t('All products')}
        </Button>
      </Box>
    </Card>
  );
}

export default Block3;
