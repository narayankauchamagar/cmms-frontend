import {
  Box,
  Card,
  Stack,
  Typography,
  Divider,
  Avatar,
  Badge,
  Tooltip,
  IconButton,
  Grid,
  styled,
  useTheme
} from '@mui/material';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import { useTranslation } from 'react-i18next';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import Gauge from 'src/components/Gauge';
import { formatDistance, subMinutes } from 'date-fns';

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
      width: ${theme.spacing(5)};
      height: ${theme.spacing(5)};
  `
);

const DotLegend = styled('span')(
  ({ theme }) => `
      border-radius: 22px;
      width: ${theme.spacing(1.5)};
      height: ${theme.spacing(1.5)};
      display: inline-block;
      margin-right: ${theme.spacing(0.5)};
      border: ${theme.colors.alpha.white[100]} solid 2px;
  `
);

const CardWrapper = styled(Card)(
  ({ theme }) => `
          background: ${theme.colors.gradients.blue3};
  `
);

const CardWhite = styled(Card)(
  ({ theme }) => `
          background: ${
            theme.palette.mode === 'dark'
              ? theme.colors.alpha.trueWhite[10]
              : theme.colors.alpha.trueWhite[100]
          };
          padding: ${theme.spacing(3)};
  `
);

function Block6() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const chart3Options: ApexOptions = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      }
    },
    colors: [theme.colors.warning.main],
    markers: {
      hover: {
        sizeOffset: 2
      },
      shape: 'circle',
      size: 7,
      strokeWidth: 2,
      strokeOpacity: 1,
      strokeColors: theme.colors.warning.main,
      colors: theme.colors.warning.main
    },
    labels: [
      'Day 1',
      'Day 2',
      'Day 3',
      'Day 4',
      'Day 5',
      'Day 6',
      'Day 7',
      'Day 8',
      'Day 9',
      'Day 10'
    ],
    theme: {
      mode: 'dark'
    },
    stroke: {
      colors: [theme.colors.warning.main],
      width: 5
    },
    grid: {
      strokeDashArray: 5,
      borderColor: theme.colors.alpha.trueWhite[10]
    },
    tooltip: {
      fixed: {
        enabled: true
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function () {
            return 'Visitors: ';
          }
        }
      }
    },
    legend: {
      show: false
    },
    yaxis: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      labels: {
        show: false
      },
      axisTicks: {
        show: false
      }
    }
  };
  const chart3Data = [
    {
      data: [22, 40, 37, 14, 34, 13, 31, 30, 15, 29]
    }
  ];

  const data = {
    percentageLocal: 63,
    percentageExternal: 37
  };

  return (
    <CardWrapper>
      <Box
        sx={{
          pt: 3,
          px: 2
        }}
      >
        <Chart
          options={chart3Options}
          series={chart3Data}
          type="line"
          height={270}
        />
      </Box>
      <Stack
        sx={{
          py: 4
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
        spacing={0}
      >
        <Box>
          <Typography
            component="h6"
            variant="caption"
            fontWeight="bold"
            textAlign="center"
            sx={{
              pb: 2,
              color: `${theme.colors.alpha.trueWhite[70]}`
            }}
          >
            {t('Returning Users')}
          </Typography>
          <Gauge
            circleRatio={1}
            value={data.percentageLocal}
            strokeWidth={8}
            text={`${data.percentageLocal}%`}
            color="trueWhite"
            size="large"
          />
        </Box>
        <Box>
          <Typography
            component="h6"
            variant="caption"
            fontWeight="bold"
            textAlign="center"
            sx={{
              pb: 2,
              color: `${theme.colors.alpha.trueWhite[70]}`
            }}
          >
            {t('New Customers')}
          </Typography>
          <Gauge
            circleRatio={1}
            value={data.percentageExternal}
            strokeWidth={8}
            text={`${data.percentageExternal}%`}
            color="trueWhite"
            size="large"
          />
        </Box>
      </Stack>
      <Box p={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <CardWhite>
              <Box
                mb={3}
                display="flex"
                alignItems="flex-start"
                justifyContent="space-between"
              >
                <Box display="flex" alignItems="center">
                  <Badge
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right'
                    }}
                    overlap="circular"
                    badgeContent={
                      <Tooltip
                        arrow
                        placement="top"
                        title={
                          t('Online since') +
                          ' ' +
                          formatDistance(
                            subMinutes(new Date(), 37),
                            new Date(),
                            {
                              addSuffix: true
                            }
                          )
                        }
                      >
                        <DotLegend
                          style={{
                            background: `${theme.colors.success.main}`
                          }}
                        />
                      </Tooltip>
                    }
                  >
                    <AvatarWrapper
                      alt="Leonardo Delgado"
                      src="/static/images/avatars/3.jpg"
                    />
                  </Badge>
                  <Box
                    sx={{
                      ml: 1
                    }}
                  >
                    <Typography
                      variant="caption"
                      gutterBottom
                      fontWeight="bold"
                      noWrap
                    >
                      {t('Customer')}
                    </Typography>
                    <Typography variant="h4" noWrap>
                      Leonardo D.
                    </Typography>
                  </Box>
                </Box>
                <IconButton size="small" color="secondary">
                  <MoreHorizTwoToneIcon />
                </IconButton>
              </Box>
              <Typography variant="h3" component="span">
                1865
              </Typography>
              <Typography variant="h6" component="span" color="text.secondary">
                {' '}
                {t('purchases')}
              </Typography>
            </CardWhite>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardWhite>
              <Box
                mb={3}
                display="flex"
                alignItems="flex-start"
                justifyContent="space-between"
              >
                <Box display="flex" alignItems="center">
                  <Badge
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right'
                    }}
                    overlap="circular"
                    badgeContent={
                      <Tooltip
                        arrow
                        placement="top"
                        title={
                          t('Online since') +
                          ' ' +
                          formatDistance(
                            subMinutes(new Date(), 37),
                            new Date(),
                            {
                              addSuffix: true
                            }
                          )
                        }
                      >
                        <DotLegend
                          style={{
                            background: `${theme.colors.success.main}`
                          }}
                        />
                      </Tooltip>
                    }
                  >
                    <AvatarWrapper
                      alt="Brynn Kayghton"
                      src="/static/images/avatars/5.jpg"
                    />
                  </Badge>
                  <Box
                    sx={{
                      ml: 1
                    }}
                  >
                    <Typography
                      variant="caption"
                      gutterBottom
                      fontWeight="bold"
                      noWrap
                    >
                      {t('Client')}
                    </Typography>
                    <Typography variant="h4" noWrap>
                      Brynn K.
                    </Typography>
                  </Box>
                </Box>
                <IconButton size="small" color="secondary">
                  <MoreHorizTwoToneIcon />
                </IconButton>
              </Box>
              <Typography variant="h3" component="span">
                76
              </Typography>
              <Typography variant="h6" component="span" color="text.secondary">
                {' '}
                {t('visits today')}
              </Typography>
            </CardWhite>
          </Grid>
        </Grid>
      </Box>
    </CardWrapper>
  );
}

export default Block6;
