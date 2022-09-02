import {
  Box,
  Grid,
  Card,
  Typography,
  Divider,
  Button,
  alpha,
  IconButton,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import PieChartTwoToneIcon from '@mui/icons-material/PieChartTwoTone';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import CountUp from 'react-countup';

const CardBorderBottom = styled(Card)(
  ({ theme }) => `
    border-bottom: transparent 5px solid;
    overflow: visible;
    box-shadow: 0 1rem 3rem ${alpha(theme.colors.alpha.black[100], 0.6)};

    transition: ${theme.transitions.create(['transform', 'border-radius'])};
    transform: scale(1);
    transform-origin: center;

    &:hover {
        border-radius: ${theme.general.borderRadiusLg};
        transform: scale(1.05);
    }
  `
);

const CardActions = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(2)};
    top: ${theme.spacing(2)};
    z-index: 7;
  `
);

const BoxComposed = styled(Box)(
  () => `
    position: relative;
  `
);

const BoxComposedContent = styled(Box)(
  () => `
    position: relative;
    z-index: 7;
  `
);

const BoxComposedImage = styled(Box)(
  () => `
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
    filter: grayscale(80%);
    background-size: cover;
    height: 100%;
    width: 100%;
    border-radius: inherit;
  `
);

const BoxComposedBg = styled(Box)(
  () => `
    position: absolute;
    left: 0;
    top: 0;
    z-index: 6;
    height: 100%;
    width: 100%;
    border-radius: inherit;
  `
);

function Block7() {
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
    colors: [theme.colors.success.main],
    dataLabels: {
      enabled: false
    },
    theme: {
      mode: theme.palette.mode
    },
    stroke: {
      show: true,
      colors: [theme.colors.success.main],
      curve: 'smooth',
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
      show: false,
      min: 0
    }
  };
  const Box1Data = [
    {
      name: 'Orders',
      data: [32, 52, 45, 32, 54, 56, 28, 25, 36, 62]
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
    colors: [theme.colors.error.main],
    dataLabels: {
      enabled: false
    },
    theme: {
      mode: theme.palette.mode
    },
    stroke: {
      show: true,
      colors: [theme.colors.error.main],
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
  const Box2Data = [
    {
      name: 'Refunds',
      data: [2.3, 3.1, 4.0, 3.8, 5.1, 3.6, 4.0, 3.8, 5.1, 3.6]
    }
  ];

  const chart3Options: ApexOptions = {
    stroke: {
      curve: 'smooth',
      width: [0, 5]
    },
    theme: {
      mode: theme.palette.mode
    },
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      }
    },
    colors: [alpha(theme.colors.primary.main, 0.4), theme.colors.primary.main],
    fill: {
      opacity: 1
    },
    labels: [
      '01 Aug 2021',
      '02 Aug 2021',
      '03 Aug 2021',
      '04 Aug 2021',
      '05 Aug 2021',
      '06 Aug 2021',
      '07 Aug 2021',
      '08 Aug 2021',
      '09 Aug 2021',
      '10 Aug 2021',
      '11 Aug 2021',
      '12 Aug 2021'
    ],
    xaxis: {
      type: 'datetime'
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      strokeDashArray: 5,
      borderColor: theme.palette.divider
    },
    legend: {
      show: false
    }
  };

  const chart3Data = [
    {
      name: 'Income',
      type: 'column',
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    },
    {
      name: 'Expenses',
      type: 'line',
      data: [231, 442, 335, 227, 433, 222, 117, 316, 242, 252, 162, 176]
    }
  ];

  return (
    <Card>
      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          lg={5}
          sx={{
            display: 'flex'
          }}
        >
          <BoxComposed
            display="flex"
            alignItems="center"
            sx={{
              width: '100%',
              position: 'relative',
              minHeight: '100%',
              background: `${theme.colors.gradients.orange2}`
            }}
          >
            <BoxComposedBg
              sx={{
                opacity: 0.6,
                background: `${theme.colors.gradients.blue1}`
              }}
            />
            <BoxComposedBg
              sx={{
                opacity: 0.4,
                background: `${theme.colors.gradients.black2}`
              }}
            />
            <BoxComposedImage
              sx={{
                opacity: 0.4,
                backgroundImage:
                  'url("/static/images/placeholders/covers/1.jpg")'
              }}
            />
            <BoxComposedContent
              display="flex"
              flexGrow={1}
              alignItems="center"
              flexDirection="column"
              p={{ xs: 4, xl: 8 }}
            >
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <CardBorderBottom
                    sx={{
                      borderBottomColor: `${theme.colors.success.main}`
                    }}
                  >
                    <Box p={3}>
                      <Typography
                        gutterBottom
                        variant="h1"
                        sx={{
                          color: `${theme.colors.success.main}`,
                          fontSize: `${theme.typography.pxToRem(30)}`
                        }}
                      >
                        <CountUp
                          start={0}
                          end={32.865}
                          duration={3}
                          separator=""
                          delay={3}
                          decimals={3}
                          decimal=","
                          prefix="$"
                          suffix=""
                        />
                      </Typography>
                      <Typography variant="h3">{t('Income')}</Typography>
                    </Box>
                    <CardActions>
                      <IconButton size="small" color="primary">
                        <MoreHorizTwoToneIcon />
                      </IconButton>
                    </CardActions>
                    <Chart
                      options={Box1Options}
                      series={Box1Data}
                      type="area"
                      height={100}
                    />
                  </CardBorderBottom>
                </Grid>
                <Grid item xs={12}>
                  <CardBorderBottom
                    sx={{
                      borderBottomColor: `${theme.colors.error.main}`
                    }}
                  >
                    <Box p={3}>
                      <Typography
                        gutterBottom
                        variant="h1"
                        sx={{
                          color: `${theme.colors.error.main}`,
                          fontSize: `${theme.typography.pxToRem(30)}`
                        }}
                      >
                        <CountUp
                          start={0}
                          end={71.684}
                          duration={4}
                          separator=""
                          delay={3}
                          decimals={3}
                          decimal=","
                          prefix="$"
                          suffix=""
                        />
                      </Typography>
                      <Typography variant="h3">{t('Expenses')}</Typography>
                    </Box>
                    <CardActions>
                      <IconButton size="small" color="primary">
                        <MoreHorizTwoToneIcon />
                      </IconButton>
                    </CardActions>
                    <Chart
                      options={Box2Options}
                      series={Box2Data}
                      type="area"
                      height={100}
                    />
                  </CardBorderBottom>
                </Grid>
              </Grid>
            </BoxComposedContent>
          </BoxComposed>
        </Grid>
        <Grid
          item
          xs={12}
          lg={7}
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box p={3}>
            <Box>
              <Typography gutterBottom variant="h3">
                {t('Monthly Financial Status')}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  fontSize: `${theme.typography.pxToRem(15)}`
                }}
              >
                {t("Check how you're doing financially for current month")}
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box flexGrow={1} px={2} pb={2}>
            <Chart
              options={chart3Options}
              series={chart3Data}
              type="line"
              height={'100%'}
            />
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
              size="large"
              sx={{
                px: 2,
                transform: 'translateY(0px)',
                transition: `${theme.transitions.create(['all'])}`,
                boxShadow: `${theme.colors.shadows.primary}`,
                fontSize: `${theme.typography.pxToRem(14)}`,

                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: `${theme.colors.shadows.primary}`
                },
                '&:active': {
                  boxShadow: 'none'
                }
              }}
              variant="contained"
              startIcon={<PieChartTwoToneIcon />}
            >
              {t('Download report')}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Block7;
