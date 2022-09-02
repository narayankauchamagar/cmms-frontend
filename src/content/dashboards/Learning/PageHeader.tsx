import { useRef, useState } from 'react';
import {
  Typography,
  Card,
  Avatar,
  Box,
  Grid,
  Button,
  Menu,
  Stack,
  CircularProgress,
  circularProgressClasses,
  MenuItem,
  Divider,
  useTheme,
  styled
} from '@mui/material';

import useAuth from 'src/hooks/useAuth';
import { useTranslation } from 'react-i18next';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

const RootWrapper = styled(Box)(
  ({ theme }) => `
        margin-top: ${theme.spacing(0)};
        background: ${theme.colors.gradients.purple1};
        padding: ${theme.spacing(3)};
        border-radius: ${theme.general.borderRadius};
        @media (min-width: ${theme.breakpoints.values.lg}px) {
          height: ${theme.spacing(38)};
          margin-bottom: ${theme.spacing(13)};
        }
`
);

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
        background: ${theme.colors.alpha.trueWhite[100]};
        color: ${theme.colors.success.main};
        width: ${theme.spacing(3)};
        height: ${theme.spacing(3)};
`
);

const TypographyPrimary = styled(Typography)(
  ({ theme }) => `
      color: ${theme.colors.alpha.trueWhite[100]};
`
);

const TypographySecondary = styled(Typography)(
  ({ theme }) => `
      color: ${theme.colors.alpha.trueWhite[70]};
`
);

const TypographyWrapper = styled(Typography)(
  ({ theme }) => `
    @media (min-width: ${theme.breakpoints.values.md}px) {
      max-width: 120px;
    }
      margin: ${theme.spacing(2)} auto 0;
`
);

const ButtonPeriod = styled(Button)(
  ({ theme }) => `
      border: 0;
        background: ${theme.colors.alpha.trueWhite[10]};
        color: ${theme.colors.alpha.trueWhite[100]};

      .MuiSvgIcon-root {
        color: ${theme.colors.alpha.trueWhite[50]};
      }

      &:hover {
        background: ${theme.colors.alpha.trueWhite[30]};
      }
`
);

function PageHeader() {
  const { t }: { t: any } = useTranslation();
  const { user } = useAuth();
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
    colors: [theme.colors.alpha.trueWhite[70]],
    dataLabels: {
      enabled: false
    },
    theme: {
      mode: theme.palette.mode
    },
    fill: {
      colors: [theme.colors.alpha.trueWhite[100]],
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 85, 100]
      }
    },
    grid: {
      padding: {
        top: 2
      }
    },
    stroke: {
      show: true,
      colors: [theme.colors.alpha.trueWhite[100]],
      width: 1
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
    tooltip: {
      enabled: false
    },
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
      min: 2
    }
  };
  const chartData1 = [
    {
      name: 'Time spent learning last week',
      data: [38, 16, 28, 20, 13, 22, 35, 26, 24, 33, 27, 32]
    }
  ];

  const chartData2 = [
    {
      name: 'Time spent learning all semester',
      data: [21, 26, 24, 38, 36, 13, 34, 23, 25, 14, 32, 20]
    }
  ];

  const data = {
    percentage: 44,
    certificates: 4,
    points: 262,
    courses: 8,
    discussions: 42
  };

  const periods = [
    {
      value: 'this_week',
      text: t('This week')
    },
    {
      value: 'last_month',
      text: t('Last month')
    },
    {
      value: 'last_year',
      text: t('Last year')
    }
  ];

  const actionRef1 = useRef<any>(null);
  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);
  const [period, setPeriod] = useState<string>(periods[0].text);

  return (
    <RootWrapper>
      <Box display="flex" alignItems="center" justifyContent="flex-end">
        <ButtonPeriod
          variant="contained"
          color="secondary"
          ref={actionRef1}
          onClick={() => setOpenMenuPeriod(true)}
          endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
        >
          {period}
        </ButtonPeriod>
        <Menu
          disableScrollLock
          anchorEl={actionRef1.current}
          onClose={() => setOpenMenuPeriod(false)}
          open={openPeriod}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
          {periods.map((_period) => (
            <MenuItem
              key={_period.value}
              onClick={() => {
                setPeriod(_period.text);
                setOpenMenuPeriod(false);
              }}
            >
              {_period.text}
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Grid container alignItems="center">
        <Grid item>
          <Box display="inline-flex" mr={2} position="relative">
            <Box
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                top: 0
              }}
            >
              <Avatar
                sx={{
                  width: 134,
                  height: 134
                }}
                src={user.avatar}
              />
            </Box>
            <CircularProgress
              variant="determinate"
              sx={{
                color: theme.colors.alpha.trueWhite[30]
              }}
              size={134}
              thickness={3}
              value={100}
            />
            <CircularProgress
              size={134}
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                color: theme.colors.alpha.trueWhite[100],
                top: 0,
                [`& .${circularProgressClasses.circle}`]: {
                  strokeLinecap: 'round'
                }
              }}
              thickness={3}
              variant="determinate"
              value={68}
            />
          </Box>
        </Grid>
        <Grid
          item
          sx={{
            flexGrow: 1
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="flex-start">
              <AvatarWrapper
                sx={{
                  mr: 1.5,
                  mt: 0.8
                }}
              >
                <ArrowUpwardTwoToneIcon fontSize="small" />
              </AvatarWrapper>
              <Box>
                <TypographyPrimary
                  sx={{
                    fontSize: `${theme.typography.pxToRem(35)}`
                  }}
                  variant="h1"
                >
                  {data.points}
                </TypographyPrimary>
                <TypographySecondary
                  variant="h3"
                  fontWeight="normal"
                  sx={{
                    pb: 2,
                    fontSize: `${theme.typography.pxToRem(21)}`
                  }}
                >
                  {t('learning points earned')}
                </TypographySecondary>
                <TypographyPrimary
                  variant="h3"
                  sx={{
                    fontSize: `${theme.typography.pxToRem(24)}`
                  }}
                >
                  {user.name}, {t('you did a great job last week!')}
                </TypographyPrimary>
              </Box>
            </Box>
            <Stack
              sx={{
                pt: 3
              }}
              direction="row"
              divider={
                <Divider
                  sx={{
                    background: `${theme.colors.alpha.trueWhite[10]}`
                  }}
                  orientation="vertical"
                  flexItem
                />
              }
              justifyContent="space-evenly"
              alignItems="center"
              spacing={4}
            >
              <Box
                sx={{
                  maxWidth: 130
                }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    mt: 2,
                    mb: 0.5
                  }}
                >
                  <Box>
                    <TypographyPrimary variant="h4" gutterBottom>
                      3.5h
                    </TypographyPrimary>
                    <TypographySecondary variant="h5" fontWeight="normal">
                      {t('last week')}
                    </TypographySecondary>
                  </Box>
                  <AvatarWrapper>
                    <ArrowUpwardTwoToneIcon fontSize="small" />
                  </AvatarWrapper>
                </Box>
                <Chart
                  options={chartOptions}
                  series={chartData1}
                  type="area"
                  height={50}
                />
              </Box>
              <Box
                sx={{
                  maxWidth: 130
                }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    mt: 2,
                    mb: 0.5
                  }}
                >
                  <Box>
                    <TypographyPrimary variant="h4" gutterBottom>
                      317h
                    </TypographyPrimary>
                    <TypographySecondary variant="h5" fontWeight="normal">
                      {t('all semester')}
                    </TypographySecondary>
                  </Box>
                  <AvatarWrapper>
                    <ArrowUpwardTwoToneIcon fontSize="small" />
                  </AvatarWrapper>
                </Box>
                <Chart
                  options={chartOptions}
                  series={chartData2}
                  type="area"
                  height={50}
                />
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        alignItems="center"
        sx={{
          mt: 3
        }}
      >
        <Grid xs={12} sm={6} lg={3} item>
          <Card
            sx={{
              p: 3
            }}
          >
            <Typography
              align="center"
              variant="h1"
              sx={{
                fontSize: `${theme.typography.pxToRem(45)}`
              }}
            >
              {data.certificates}
            </Typography>
            <TypographyWrapper
              align="center"
              sx={{
                fontSize: `${theme.typography.pxToRem(21)}`
              }}
              variant="h3"
              fontWeight="normal"
              color="text.secondary"
            >
              {t('certificates earned')}
            </TypographyWrapper>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} lg={3} item>
          <Card
            sx={{
              p: 3
            }}
          >
            <Typography
              align="center"
              variant="h1"
              sx={{
                fontSize: `${theme.typography.pxToRem(45)}`
              }}
            >
              {data.points}
            </Typography>
            <TypographyWrapper
              align="center"
              variant="h3"
              fontWeight="normal"
              color="text.secondary"
              sx={{
                fontSize: `${theme.typography.pxToRem(21)}`
              }}
            >
              {t('reward points')}
            </TypographyWrapper>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} lg={3} item>
          <Card
            sx={{
              p: 3
            }}
          >
            <Typography
              align="center"
              variant="h1"
              sx={{
                fontSize: `${theme.typography.pxToRem(45)}`
              }}
            >
              {data.courses}
            </Typography>
            <TypographyWrapper
              align="center"
              sx={{
                fontSize: `${theme.typography.pxToRem(21)}`
              }}
              variant="h3"
              fontWeight="normal"
              color="text.secondary"
            >
              {t('courses completed')}
            </TypographyWrapper>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} lg={3} item>
          <Card
            sx={{
              p: 3
            }}
          >
            <Typography
              align="center"
              variant="h1"
              sx={{
                fontSize: `${theme.typography.pxToRem(45)}`
              }}
            >
              {data.discussions}
            </Typography>
            <TypographyWrapper
              sx={{
                fontSize: `${theme.typography.pxToRem(21)}`
              }}
              align="center"
              variant="h3"
              fontWeight="normal"
              color="text.secondary"
            >
              {t('forum discussions')}
            </TypographyWrapper>
          </Card>
        </Grid>
      </Grid>
    </RootWrapper>
  );
}

export default PageHeader;
