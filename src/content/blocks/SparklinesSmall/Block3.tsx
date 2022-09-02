import { Box, Card, Grid, Typography, useTheme } from '@mui/material';

import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';

function Block3() {
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
      width: 3
    },
    colors: [theme.colors.warning.main],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 5,
        columnWidth: '60%'
      }
    },
    markers: {
      size: 0
    },
    tooltip: {
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function () {
            return '';
          }
        }
      },
      marker: {
        show: false
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
      name: 'Customers',
      data: [47, 38, 56, 24, 56, 24, 65]
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
      width: 3
    },
    colors: [theme.colors.error.main],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 5,
        columnWidth: '60%'
      }
    },
    markers: {
      size: 0
    },
    tooltip: {
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function () {
            return '';
          }
        }
      },
      marker: {
        show: false
      }
    },
    legend: {
      show: false
    }
  };
  const chart2Data = [
    {
      name: 'Orders',
      data: [0, 10, 22, 46, 47, 26, 24, 45]
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
      width: 3
    },
    colors: [theme.colors.success.main],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 5,
        columnWidth: '60%'
      }
    },
    markers: {
      size: 0
    },
    tooltip: {
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function () {
            return '$';
          }
        }
      },
      marker: {
        show: false
      }
    },
    legend: {
      show: false
    }
  };
  const chart3Data = [
    {
      name: 'Growth',
      data: [0, 10, 22, 46, 47, 26, 24, 45]
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
      width: 3
    },
    colors: [theme.colors.info.main],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 5,
        columnWidth: '60%'
      }
    },
    markers: {
      size: 0
    },
    tooltip: {
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function () {
            return '$';
          }
        }
      },
      marker: {
        show: false
      }
    },
    legend: {
      show: false
    }
  };
  const chart4Data = [
    {
      name: 'Expenses',
      data: [0, 7, 18, 28, 23, 24, 65, 43]
    }
  ];

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6} lg={3}>
        <Card
          sx={{
            overflow: 'visible',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box py={1} px={2.5}>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 'bold'
              }}
            >
              {t('Customers')}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                pt: 1
              }}
            >
              653
            </Typography>
            <Typography
              variant="h5"
              sx={{
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center',
                color: `${theme.colors.success.main}`
              }}
            >
              <span>52,12%</span>
              <KeyboardArrowUpTwoToneIcon fontSize="small" />
            </Typography>
          </Box>
          <Box ml={2} flexGrow={1} pt={3}>
            <Chart
              options={chart1Options}
              series={chart1Data}
              type="bar"
              height={'55%'}
            />
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Card
          sx={{
            overflow: 'visible',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box py={1} px={2.5}>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 'bold'
              }}
            >
              {t('Orders')}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                pt: 1
              }}
            >
              276
            </Typography>
            <Typography
              variant="h5"
              sx={{
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center',
                color: `${theme.colors.success.main}`
              }}
            >
              <span>67,43%</span>
              <KeyboardArrowUpTwoToneIcon fontSize="small" />
            </Typography>
          </Box>
          <Box ml={2} flexGrow={1} pt={3}>
            <Chart
              options={chart2Options}
              series={chart2Data}
              type="area"
              height={'55%'}
            />
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Card
          sx={{
            overflow: 'visible',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box py={1} px={2.5}>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 'bold'
              }}
            >
              {t('Growth')}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                pt: 1
              }}
            >
              $753
            </Typography>
            <Typography
              variant="h5"
              sx={{
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center'
              }}
              color="error"
            >
              <span>32,54%</span>
              <KeyboardArrowUpTwoToneIcon fontSize="small" />
            </Typography>
          </Box>
          <Box ml={2} flexGrow={1} pt={3}>
            <Chart
              options={chart3Options}
              series={chart3Data}
              type="bar"
              height={'55%'}
            />
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Card
          sx={{
            overflow: 'visible',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box py={1} px={2.5}>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 'bold'
              }}
            >
              {t('Expenses')}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                pt: 1
              }}
            >
              $654
            </Typography>
            <Typography
              variant="h5"
              sx={{
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center'
              }}
              color="error"
            >
              <span>21%</span>
              <KeyboardArrowDownTwoToneIcon fontSize="small" />
            </Typography>
          </Box>
          <Box ml={2} flexGrow={1} pt={3}>
            <Chart
              options={chart4Options}
              series={chart4Data}
              type="area"
              height={'55%'}
            />
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block3;
