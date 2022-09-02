import { useRef, useState } from 'react';
import {
  Card,
  Typography,
  MenuItem,
  Menu,
  Button,
  IconButton,
  Box,
  useTheme,
  Tooltip,
  styled
} from '@mui/material';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import { useTranslation } from 'react-i18next';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import ElectricalServicesTwoToneIcon from '@mui/icons-material/ElectricalServicesTwoTone';
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';

const ElectricalServicesTwoToneIconWrapper = styled(
  ElectricalServicesTwoToneIcon
)(
  ({ theme }) => `
    color: ${theme.colors.warning.main};
    margin-right: ${theme.spacing(1)};
`
);

function PowerConsumption() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const powerDaily = [
    {
      name: 'Consumption',
      data: [344, 512, 829, 696, 847, 437, 935, 433]
    }
  ];

  const powerWeekly = [
    {
      name: 'Consumption',
      data: [2662, 2743, 2746, 4756, 4201, 1869, 5694]
    }
  ];

  const powerMonthly = [
    {
      name: 'Consumption',
      data: [
        34471, 37403, 10192, 48243, 37464, 32881, 43357, 40646, 36191, 25000,
        10435, 4128
      ]
    }
  ];

  const locations = [
    {
      value: 'daily',
      text: t('Daily')
    },
    {
      value: 'weekly',
      text: t('Weekly')
    },
    {
      value: 'monthly',
      text: t('Monthly')
    }
  ];

  const DailyPowerOptions: ApexOptions = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    colors: [theme.colors.warning.main, theme.colors.primary.main],
    dataLabels: {
      enabled: false
    },
    theme: {
      mode: theme.palette.mode
    },
    fill: {
      opacity: 1,
      colors: [theme.colors.warning.main, theme.colors.primary.main]
    },
    stroke: {
      show: true,
      colors: [theme.colors.warning.main, theme.colors.primary.main],
      curve: 'smooth',
      width: 3
    },
    legend: {
      show: false
    },
    labels: [
      '12:00 AM',
      '3:00 AM',
      '6:00 AM',
      '9:00 AM',
      '12:00 PM',
      '3:00 PM',
      '6:00 PM',
      '9:00 PM'
    ],
    xaxis: {
      axisBorder: {
        show: false
      },
      labels: {
        show: true
      }
    },
    yaxis: {
      show: true,
      labels: {
        show: true
      }
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },
      strokeDashArray: 5,
      borderColor: theme.colors.alpha.black[10]
    }
  };

  const WeeklyPowerOptions: ApexOptions = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    colors: [theme.colors.info.main, theme.colors.info.main],
    dataLabels: {
      enabled: false
    },
    theme: {
      mode: theme.palette.mode
    },
    fill: {
      opacity: 1,
      colors: [theme.colors.info.main, theme.colors.info.main]
    },
    stroke: {
      show: true,
      colors: [theme.colors.info.main, theme.colors.info.main],
      curve: 'smooth',
      width: 3
    },
    legend: {
      show: false
    },
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    xaxis: {
      axisBorder: {
        show: false
      },
      labels: {
        show: true
      }
    },
    yaxis: {
      show: true,
      labels: {
        show: true
      }
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },
      strokeDashArray: 5,
      borderColor: theme.colors.alpha.black[10]
    }
  };

  const MonthlyPowerOptions: ApexOptions = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    colors: [theme.colors.success.main, theme.colors.success.main],
    dataLabels: {
      enabled: false
    },
    theme: {
      mode: theme.palette.mode
    },
    fill: {
      opacity: 1,
      colors: [theme.colors.success.main, theme.colors.success.main]
    },
    stroke: {
      show: true,
      colors: [theme.colors.success.main, theme.colors.success.main],
      curve: 'smooth',
      width: 3
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
    xaxis: {
      axisBorder: {
        show: false
      },
      labels: {
        show: true
      }
    },
    yaxis: {
      show: true,
      labels: {
        show: true
      }
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },
      strokeDashArray: 5,
      borderColor: theme.colors.alpha.black[10]
    }
  };

  const [location, setLocation] = useState<string>(locations[0].text);
  const actionRef = useRef<any>(null);
  const [openLocation, setOpenMenuLocation] = useState<boolean>(false);

  return (
    <>
      <Box
        mb={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h3">{t('Power consumption')}</Typography>
        <Box>
          <Button
            color="primary"
            variant="outlined"
            ref={actionRef}
            onClick={() => setOpenMenuLocation(true)}
            endIcon={<ExpandMoreTwoToneIcon />}
          >
            {location}
          </Button>
          <Tooltip title={t('Advanced statistics')} arrow>
            <IconButton
              sx={{
                ml: 0.5
              }}
              color="primary"
            >
              <KeyboardArrowRightTwoToneIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          disableScrollLock
          anchorEl={actionRef.current}
          onClose={() => setOpenMenuLocation(false)}
          open={openLocation}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
          {locations.map((_location) => (
            <MenuItem
              key={_location.value}
              onClick={() => {
                setLocation(_location.text);
                setOpenMenuLocation(false);
              }}
            >
              {_location.text}
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Card>
        <Box
          display="flex"
          justifyContent="space-between"
          p={3}
          alignItems="center"
        >
          <Box display="flex" alignItems="center">
            <ElectricalServicesTwoToneIconWrapper />
            <Typography variant="h4">{t('Total energy saving')}</Typography>
          </Box>
          <Typography fontWeight="bold">{t('65% capacity')}</Typography>
        </Box>
        {location === 'Daily' && (
          <Chart
            options={DailyPowerOptions}
            series={powerDaily}
            type="area"
            height={274}
          />
        )}
        {location === 'Weekly' && (
          <Chart
            options={WeeklyPowerOptions}
            series={powerWeekly}
            type="area"
            height={274}
          />
        )}
        {location === 'Monthly' && (
          <Chart
            options={MonthlyPowerOptions}
            series={powerMonthly}
            type="area"
            height={274}
          />
        )}
      </Card>
    </>
  );
}

export default PowerConsumption;
