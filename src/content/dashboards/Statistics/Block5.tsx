import { Box, Card, Grid, Typography, useTheme } from '@mui/material';

import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';

function Block5() {
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
            return '$';
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
      name: 'Bitcoin',
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
  const chart2Data = [
    {
      name: 'Cardano',
      data: [38, 44, 56, 47, 26, 24, 45]
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
      name: 'Ethereum',
      data: [38, 43, 24, 56, 35, 56, 65]
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
      name: 'Ripple',
      data: [33, 56, 24, 23, 24, 65, 43]
    }
  ];

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 2.5
          }}
        >
          <Box>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 'bold'
              }}
            >
              Bitcoin
            </Typography>
            <Typography
              variant="h5"
              sx={{
                pb: 1,
                pt: 0.5,
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center',
                color: `${theme.colors.success.main}`
              }}
            >
              <span>54%</span>
              <KeyboardArrowUpTwoToneIcon fontSize="small" />
            </Typography>
            <Typography variant="h3">$8,583</Typography>
          </Box>
          <Box ml={2} flexGrow={1}>
            <Chart
              options={chart1Options}
              series={chart1Data}
              type="line"
              height={80}
            />
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 2.5
          }}
        >
          <Box>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 'bold'
              }}
            >
              Cardano
            </Typography>
            <Typography
              variant="h5"
              sx={{
                pb: 1,
                pt: 0.5,
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center',
                color: `${theme.colors.success.main}`
              }}
            >
              <span>21,59%</span>
              <KeyboardArrowUpTwoToneIcon fontSize="small" />
            </Typography>
            <Typography variant="h3">$2,19</Typography>
          </Box>
          <Box ml={2} flexGrow={1}>
            <Chart
              options={chart2Options}
              series={chart2Data}
              type="line"
              height={80}
            />
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 2.5
          }}
        >
          <Box>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 'bold'
              }}
            >
              Ethereum
            </Typography>
            <Typography
              variant="h5"
              sx={{
                pb: 1,
                pt: 0.5,
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center'
              }}
              color="error"
            >
              <span>7,42%</span>
              <KeyboardArrowUpTwoToneIcon fontSize="small" />
            </Typography>
            <Typography variant="h3">$4,635</Typography>
          </Box>
          <Box ml={2} flexGrow={1}>
            <Chart
              options={chart3Options}
              series={chart3Data}
              type="line"
              height={80}
            />
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 2.5
          }}
        >
          <Box>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 'bold'
              }}
            >
              Ripple
            </Typography>
            <Typography
              variant="h5"
              sx={{
                pb: 1,
                pt: 0.5,
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center'
              }}
              color="error"
            >
              <span>21%</span>
              <KeyboardArrowDownTwoToneIcon fontSize="small" />
            </Typography>
            <Typography variant="h3">$1,23</Typography>
          </Box>
          <Box ml={2} flexGrow={1}>
            <Chart
              options={chart4Options}
              series={chart4Data}
              type="line"
              height={80}
            />
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block5;
