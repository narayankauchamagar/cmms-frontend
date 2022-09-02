import { useRef, useState } from 'react';
import {
  Button,
  Card,
  Box,
  CardContent,
  CardHeader,
  Menu,
  MenuItem,
  Typography,
  Divider,
  styled,
  useTheme,
  Grid
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';

import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

const DotPrimaryLight = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    background: ${theme.colors.primary.lighter};
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

function TransactionsStatistics() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const chartOptions: ApexOptions = {
    chart: {
      background: 'transparent',
      type: 'bar',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 7,
        columnWidth: '50%'
      }
    },
    colors: [theme.colors.primary.main, theme.colors.primary.lighter],
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 1
    },
    theme: {
      mode: theme.palette.mode
    },
    stroke: {
      show: true,
      width: 3,
      colors: ['transparent']
    },
    legend: {
      show: false
    },
    xaxis: {
      labels: {
        style: {
          colors: theme.palette.text.secondary
        }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: true
      },
      categories: [
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
      ]
    },
    yaxis: {
      labels: {
        style: {
          colors: theme.palette.text.secondary
        }
      }
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return '$ ' + val + 'k';
        }
      }
    },
    grid: {
      strokeDashArray: 6,
      borderColor: theme.palette.divider
    }
  };

  const chartData = [
    {
      name: 'Net Profit',
      data: [1769, 791, 1093, 189, 869, 1065, 980, 1419, 380, 1146, 797, 659]
    },
    {
      name: 'Revenue',
      data: [1083, 649, 312, 1538, 1404, 630, 1714, 853, 1765, 1067, 696, 538]
    }
  ];

  const periods = [
    {
      value: 'current_year',
      text: t('Current Year')
    },
    {
      value: 'last_year',
      text: t('Last Year')
    },
    {
      value: 'all_time',
      text: t('All time')
    }
  ];

  const data = {
    bills: '$684.00',
    income: '$3,200.00',
    expenses: '$1596.85',
    taxes: '$785.00'
  };
  const actionRef1 = useRef<any>(null);
  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);
  const [period, setPeriod] = useState<string>(periods[0].text);

  return (
    <Card>
      <CardHeader title={t('Transactions Statistics')} />
      <Divider />
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Button
            size="small"
            variant="outlined"
            ref={actionRef1}
            onClick={() => setOpenMenuPeriod(true)}
            endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
          >
            {period}
          </Button>
          <Box display="flex" alignItems="center">
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
              {t('income')}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <DotPrimaryLight />
              {t('expenses')}
            </Typography>
          </Box>
        </Box>
        <Menu
          disableScrollLock
          anchorEl={actionRef1.current}
          onClose={() => setOpenMenuPeriod(false)}
          open={openPeriod}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
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

        <Box
          sx={{
            pt: 3,
            px: { lg: 2 }
          }}
        >
          <Chart
            options={chartOptions}
            series={chartData}
            type="bar"
            height={288}
          />
        </Box>

        <Box
          sx={{
            py: 2,
            textAlign: 'center'
          }}
        >
          <Grid spacing={4} container>
            <Grid item sm={6}>
              <Typography variant="subtitle2" gutterBottom>
                {t('Income')}
              </Typography>
              <Typography variant="h3">{data.income}</Typography>
            </Grid>
            <Grid item sm={6}>
              <Typography variant="subtitle2" gutterBottom>
                {t('Expenses')}
              </Typography>
              <Typography variant="h3">{data.expenses}</Typography>
            </Grid>
            <Grid item sm={6}>
              <Typography variant="subtitle2" gutterBottom>
                {t('Taxes')}
              </Typography>
              <Typography variant="h3">{data.taxes}</Typography>
            </Grid>
            <Grid item sm={6}>
              <Typography variant="subtitle2" gutterBottom>
                {t('Bills')}
              </Typography>
              <Typography variant="h3">{data.bills}</Typography>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}

export default TransactionsStatistics;
