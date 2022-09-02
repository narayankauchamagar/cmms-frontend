import {
  Box,
  Card,
  Grid,
  Typography,
  IconButton,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import AccessAlarmTwoToneIcon from '@mui/icons-material/AccessAlarmTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveTwoTone';
import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';
import Label from 'src/components/Label';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';

const CardBorderBottom = styled(Card)(
  () => `
    border-bottom: transparent 5px solid;
  `
);

const CardBorderTop = styled(Card)(
  () => `
    border-top: transparent 5px solid;
  `
);

function Block1() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const chart1Options: ApexOptions = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    theme: {
      mode: theme.palette.mode === 'dark' ? 'light' : 'dark'
    },
    stroke: {
      colors: [theme.colors.warning.main],
      curve: 'smooth',
      width: 3
    },
    colors: [theme.colors.warning.main],
    markers: {
      size: 0
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
        show: false
      },
      y: {
        title: {
          formatter: function () {
            return 'Users:';
          }
        }
      },
      marker: {
        show: true
      }
    },
    yaxis: {
      show: false
    },
    legend: {
      show: false
    }
  };
  const chart1Data = [
    {
      name: 'Daily visitors',
      data: [47, 38, 56, 24, 45, 54, 38, 47, 38, 56, 24, 56, 24, 65]
    }
  ];

  const chart2Options: ApexOptions = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    theme: {
      mode: theme.palette.mode === 'dark' ? 'light' : 'dark'
    },
    stroke: {
      colors: [theme.colors.error.main],
      curve: 'smooth',
      width: 3
    },
    colors: [theme.colors.error.main],
    markers: {
      size: 0
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
        show: false
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
    legend: {
      show: false
    }
  };
  const chart2Data = [
    {
      name: 'Revenue',
      data: [45, 56, 24, 56, 54, 38, 47, 38, 56, 24, 38, 47, 24, 65]
    }
  ];

  const chart3Options: ApexOptions = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    theme: {
      mode: theme.palette.mode === 'dark' ? 'light' : 'dark'
    },
    stroke: {
      colors: [theme.colors.success.main],
      curve: 'smooth',
      width: 3
    },
    colors: [theme.colors.success.main],
    markers: {
      size: 0
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
        show: false
      },
      y: {
        title: {
          formatter: function () {
            return 'Orders:';
          }
        }
      },
      marker: {
        show: true
      }
    },
    legend: {
      show: false
    }
  };
  const chart3Data = [
    {
      name: 'Sales',
      data: [45, 56, 24, 54, 38, 47, 38, 56, 24, 38, 56, 47, 24, 65]
    }
  ];

  const chart4Options: ApexOptions = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    theme: {
      mode: theme.palette.mode === 'dark' ? 'light' : 'dark'
    },
    stroke: {
      colors: [theme.colors.info.main],
      curve: 'smooth',
      width: 3
    },
    colors: [theme.colors.info.main],
    markers: {
      size: 0
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
        show: false
      },
      y: {
        title: {
          formatter: function () {
            return 'Bugfixes:';
          }
        }
      },
      marker: {
        show: true
      }
    },
    legend: {
      show: false
    }
  };
  const chart4Data = [
    {
      name: 'Tests',
      data: [24, 54, 38, 47, 56, 47, 45, 56, 38, 56, 24, 38, 24, 65]
    }
  ];

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6} lg={3}>
        <CardBorderBottom
          sx={{
            borderBottomColor: `${theme.colors.warning.main}`,
            px: 3,
            pt: 3,
            pb: 2
          }}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Typography
              sx={{
                color: `${theme.colors.warning.main}`
              }}
            >
              <AccessAlarmTwoToneIcon fontSize="large" />
            </Typography>
            <Label color="info">{t('New')}</Label>
          </Box>
          <Box mt={2}>
            <Typography
              component="span"
              sx={{
                lineHeight: 1,
                pr: 0.6
              }}
              variant="h3"
            >
              2,356
            </Typography>
            <Typography component="span" variant="subtitle2">
              {t('users')}
            </Typography>
          </Box>
          <Box>
            <Chart
              options={chart1Options}
              series={chart1Data}
              type="line"
              height={90}
            />
          </Box>
        </CardBorderBottom>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <CardBorderBottom
          sx={{
            borderBottomColor: `${theme.colors.error.main}`,
            px: 3,
            pt: 3,
            pb: 2
          }}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Typography
              sx={{
                color: `${theme.colors.error.main}`
              }}
            >
              <ArchiveTwoToneIcon fontSize="large" />
            </Typography>
            <Label color="black">
              <Typography
                sx={{
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  fontSize: `${theme.typography.pxToRem(11)}`
                }}
              >
                {t('Hot')}
              </Typography>
            </Label>
          </Box>
          <Box mt={2}>
            <Typography
              component="span"
              sx={{
                lineHeight: 1,
                pr: 0.6
              }}
              variant="h3"
            >
              $9,685
            </Typography>
            <Typography component="span" variant="subtitle2">
              {t('revenue')}
            </Typography>
          </Box>
          <Box>
            <Chart
              options={chart2Options}
              series={chart2Data}
              type="line"
              height={90}
            />
          </Box>
        </CardBorderBottom>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <CardBorderTop
          sx={{
            borderTopColor: `${theme.colors.success.main}`,
            px: 3,
            pt: 3,
            pb: 2
          }}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Typography
              sx={{
                color: `${theme.colors.warning.main}`
              }}
            >
              <BallotTwoToneIcon fontSize="large" />
            </Typography>
            <IconButton size="small">
              <MoreHorizTwoToneIcon />
            </IconButton>
          </Box>
          <Box mt={2}>
            <Typography
              component="span"
              sx={{
                lineHeight: 1,
                pr: 0.6
              }}
              variant="h3"
            >
              2,356
            </Typography>
            <Typography component="span" variant="subtitle2">
              {t('users')}
            </Typography>
          </Box>
          <Box>
            <Chart
              options={chart3Options}
              series={chart3Data}
              type="line"
              height={90}
            />
          </Box>
        </CardBorderTop>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <CardBorderTop
          sx={{
            borderTopColor: `${theme.colors.info.main}`,
            px: 3,
            pt: 3,
            pb: 2
          }}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Typography
              sx={{
                color: `${theme.colors.info.main}`
              }}
            >
              <AccountTreeTwoToneIcon fontSize="large" />
            </Typography>
            <IconButton size="small" color="info">
              <MoreHorizTwoToneIcon />
            </IconButton>
          </Box>
          <Box mt={2}>
            <Typography
              component="span"
              sx={{
                lineHeight: 1,
                pr: 0.6
              }}
              variant="h3"
            >
              563
            </Typography>
            <Typography component="span" variant="subtitle2">
              {t('bugfixes')}
            </Typography>
          </Box>
          <Box>
            <Chart
              options={chart4Options}
              series={chart4Data}
              type="line"
              height={90}
            />
          </Box>
        </CardBorderTop>
      </Grid>
    </Grid>
  );
}

export default Block1;
