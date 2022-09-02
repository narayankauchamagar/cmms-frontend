import { useRef, useState } from 'react';
import {
  Button,
  Card,
  Box,
  CardContent,
  CardHeader,
  Typography,
  Divider,
  Menu,
  MenuItem,
  useTheme,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

const DotSuccess = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    background: ${theme.colors.success.main};
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);

const DotPrimary = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    background: ${theme.colors.primary.main};
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);

function OverallStatus() {
  const { t }: { t: any } = useTranslation();
  const actionRef1 = useRef<any>(null);
  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);
  const theme = useTheme();

  const periods = [
    {
      value: 'today',
      text: t('Today')
    },
    {
      value: 'yesterday',
      text: t('Yesterday')
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

  const [period, setPeriod] = useState<string>(periods[2].text);

  const statusSeries = [
    {
      name: 'Patients',
      data: [1401, 565, 1105, 696, 1469, 1250, 1341, 1231, 505, 783, 998, 738]
    },
    {
      name: 'Consultations',
      type: 'line',
      data: [1103, 626, 924, 560, 1130, 1081, 971, 1156, 522, 975, 1054, 1421]
    }
  ];

  const StatusOptions: ApexOptions = {
    stroke: {
      width: [3, 5]
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
    markers: {
      hover: {
        sizeOffset: 2
      },
      shape: 'circle',
      size: 6,
      strokeWidth: 3,
      strokeOpacity: 1,
      strokeColors: theme.colors.alpha.white[100],
      colors: [theme.colors.primary.main, theme.colors.success.main]
    },
    colors: [theme.colors.primary.main, theme.colors.success.main],
    fill: {
      opacity: 1
    },
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    dataLabels: {
      enabled: false
    },
    grid: {
      strokeDashArray: 5,
      borderColor: theme.palette.divider
    },
    legend: {
      show: false
    },
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: theme.palette.text.secondary
        }
      }
    },
    yaxis: {
      tickAmount: 6,
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false
      }
    }
  };

  return (
    <Card
      sx={{
        height: '100%'
      }}
    >
      <CardHeader
        action={
          <>
            <Button
              size="small"
              variant="outlined"
              ref={actionRef1}
              onClick={() => setOpenMenuPeriod(true)}
              endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
            >
              {period}
            </Button>
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
          </>
        }
        title={t('Overall Status')}
      />
      <Divider />
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="flex-end">
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: 'flex',
              alignItems: 'center',
              mr: 2
            }}
          >
            <DotPrimary />
            {t('patients')}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <DotSuccess />
            {t('consultations')}
          </Typography>
        </Box>
        <Box>
          <Chart
            options={StatusOptions}
            series={statusSeries}
            type="line"
            height={243}
          />
        </Box>
      </CardContent>
    </Card>
  );
}

export default OverallStatus;
