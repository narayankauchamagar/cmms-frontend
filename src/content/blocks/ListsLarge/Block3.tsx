import {
  Box,
  Card,
  CardHeader,
  Typography,
  CircularProgress,
  Button,
  ListItemAvatar,
  ListItemText,
  Link,
  alpha,
  Divider,
  List,
  ListItem,
  Avatar,
  useTheme,
  circularProgressClasses
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import Scrollbar from 'src/components/Scrollbar';
import Text from 'src/components/Text';
import EmojiObjectsTwoToneIcon from '@mui/icons-material/EmojiObjectsTwoTone';
import Label from 'src/components/Label';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';

function Block3() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const items = [
    {
      id: 1,
      username: 'Shanelle Wynn',
      sales: '87',
      progress: 76,
      arrow: '',
      value: '685'
    },
    {
      id: 2,
      username: 'Akeem Griffith',
      sales: '36',
      progress: 48,
      arrow: 'up',
      value: '3,685'
    },
    {
      id: 3,
      username: 'Abigayle Hicks',
      sales: '23',
      progress: 38,
      arrow: '',
      value: '765'
    },
    {
      id: 4,
      username: 'Reece Corbett',
      sales: '76',
      progress: 85,
      arrow: '',
      value: '43,548'
    },
    {
      id: 5,
      username: 'Zain Baptista',
      sales: '38',
      progress: 29,
      arrow: 'up',
      value: '1,584'
    }
  ];

  const Box2Options: ApexOptions = {
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
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 5,
        columnWidth: '50%'
      }
    },
    colors: [theme.colors.primary.main, theme.colors.error.light],
    dataLabels: {
      enabled: false
    },
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
  const Box2Data = [
    {
      name: 'Net Profit',
      data: [2.3, 3.1, 4.0, 3.8, 5.1, 3.6, 4.0, 3.8, 5.1, 3.6]
    },
    {
      name: 'Net Loss',
      data: [2.1, 2.1, 3.0, 2.8, 4.0, 3.8, 5.1, 3.6, 4.1, 2.6, 1.2]
    }
  ];

  return (
    <Card>
      <CardHeader
        sx={{
          p: 2
        }}
        titleTypographyProps={{
          component: 'h4',
          variant: 'h3'
        }}
        action={
          <Button size="small" variant="text">
            {'View all'}
          </Button>
        }
        title={t('Top sellers')}
      />
      <Divider />
      <Box
        sx={{
          background: `${alpha(theme.colors.alpha.black[10], 0.05)}`
        }}
      >
        <Box
          p={3}
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
              background: `${theme.colors.alpha.white[100]}`,
              color: `${theme.colors.primary.main}`
            }}
          >
            <EmojiObjectsTwoToneIcon />
          </Avatar>
        </Box>
        <Box px={2}>
          <Chart
            options={Box2Options}
            series={Box2Data}
            type="bar"
            height={148}
          />
        </Box>
      </Box>
      <Divider />
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
          height: 263
        }}
      >
        <Scrollbar>
          <List disablePadding>
            {items.map((item) => (
              <ListItem
                key={item.id}
                sx={{
                  py: 1.5,
                  px: 2
                }}
              >
                <ListItemAvatar
                  sx={{
                    display: 'flex',
                    mr: 1.5
                  }}
                >
                  <Box display="inline-flex" position="relative">
                    <Box
                      sx={{
                        animationDuration: '550ms',
                        position: 'absolute',
                        left: 11,
                        top: 11
                      }}
                    >
                      {item.arrow ? (
                        <Avatar
                          sx={{
                            width: 34,
                            height: 34,
                            p: 0,
                            background: `${theme.colors.error.lighter}`,
                            color: `${theme.colors.error.main}`
                          }}
                        >
                          <ArrowDownwardTwoToneIcon fontSize="small" />
                        </Avatar>
                      ) : (
                        <Avatar
                          sx={{
                            width: 34,
                            height: 34,
                            p: 0,
                            background: `${theme.colors.success.lighter}`,
                            color: `${theme.colors.success.main}`
                          }}
                        >
                          <ArrowUpwardTwoToneIcon fontSize="small" />
                        </Avatar>
                      )}
                    </Box>
                    <CircularProgress
                      variant="determinate"
                      sx={{
                        color: (theme) =>
                          item.arrow
                            ? theme.colors.error.lighter
                            : theme.colors.success.lighter
                      }}
                      size={56}
                      thickness={3}
                      value={100}
                    />
                    <CircularProgress
                      size={56}
                      sx={{
                        animationDuration: '550ms',
                        position: 'absolute',
                        left: 0,
                        color: (theme) =>
                          item.arrow
                            ? theme.colors.error.main
                            : theme.colors.success.main,
                        top: 0,
                        [`& .${circularProgressClasses.circle}`]: {
                          strokeLinecap: 'round'
                        }
                      }}
                      thickness={3}
                      variant="determinate"
                      value={item.progress}
                    />
                  </Box>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Link color="inherit" href="#" variant="h4">
                      {item.username}
                    </Link>
                  }
                  primaryTypographyProps={{
                    variant: 'h5',
                    noWrap: true
                  }}
                  secondary={
                    <>
                      <Box mt={0.5}>
                        <Label color="secondary">
                          <b>{item.sales}</b>
                        </Label>{' '}
                        {t('confirmed sales')}
                      </Box>
                    </>
                  }
                  secondaryTypographyProps={{
                    variant: 'subtitle2',
                    noWrap: true
                  }}
                />
                <Typography variant="subtitle2" fontWeight="bold">
                  ${item.value}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Scrollbar>
      </Box>
    </Card>
  );
}

export default Block3;
