import { useState, ChangeEvent } from 'react';
import {
  Card,
  Box,
  CardContent,
  CardHeader,
  Typography,
  Button,
  Divider,
  Avatar,
  Switch,
  styled,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Label from 'src/components/Label';
import AttachMoneyTwoToneIcon from '@mui/icons-material/AttachMoneyTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

const AvatarLabelInfo = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.info.lighter};
      color: ${theme.colors.info.main};
      width: ${theme.spacing(6)};
      height: ${theme.spacing(6)};
`
);

const AvatarLabelWarning = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.warning.lighter};
      color: ${theme.colors.warning.main};
      width: ${theme.spacing(6)};
      height: ${theme.spacing(6)};
`
);

function Investments() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const data = {
    amount: '$54,348.55',
    amountIncrease: '$12,475.44',
    amountPercent: '+ 3.24%',
    wallet: '$5,348.73',
    shares: '$785.00'
  };

  const [state, setState] = useState({
    interest: true
  });

  const interestActivate = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked
    });
  };

  const chartOptions: ApexOptions = {
    chart: {
      background: 'transparent',
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      curve: 'smooth',
      width: [3, 3]
    },
    theme: {
      mode: theme.palette.mode
    },
    markers: {
      hover: {
        sizeOffset: 3
      },
      shape: 'circle',
      size: 6,
      strokeWidth: 3,
      strokeOpacity: 1,
      strokeColors: theme.colors.alpha.white[100],
      colors: [theme.colors.primary.main, theme.colors.error.main]
    },
    colors: [theme.colors.primary.main, theme.colors.error.main],
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
      borderColor: theme.palette.divider,
      padding: {
        right: 8,
        left: 8,
        bottom: 5,
        top: 5
      }
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
      show: false
    }
  };

  const chartData = [
    {
      name: 'Previous Period',
      data: [1008, 940, 1010, 821, 1035, 1030, 957, 926, 993, 1021, 997, 879]
    },
    {
      name: 'Current Period',
      data: [648, 745, 897, 743, 635, 842, 811, 696, 878, 987, 747, 731]
    }
  ];

  return (
    <Card>
      <CardHeader title={t('Investments')} />
      <Divider />
      <CardContent
        sx={{
          p: 4
        }}
      >
        <Box
          display="flex"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Box>
            <Typography
              variant="h1"
              sx={{
                mb: 1
              }}
            >
              {data.amount}
            </Typography>
            <Box display="flex" alignItems="center">
              <Label color="success">{data.amountIncrease}</Label>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{
                  ml: 1
                }}
              >
                {data.amountPercent}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              textAlign: 'center'
            }}
          >
            <Typography variant="subtitle2">{t('Interest')}</Typography>
            <Switch
              checked={state.interest}
              onChange={interestActivate}
              color="primary"
              name="interest"
            />
          </Box>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          flexWrap="wrap"
          sx={{
            pt: 5,
            pb: 4
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            sx={{
              mr: 5
            }}
          >
            <AvatarLabelInfo
              sx={{
                mr: 1
              }}
              variant="rounded"
            >
              <AttachMoneyTwoToneIcon />
            </AvatarLabelInfo>
            <Box>
              <Typography variant="subtitle2" noWrap>
                {t('USD Wallet')}
              </Typography>
              <Typography variant="h5">{data.wallet}</Typography>
            </Box>
          </Box>

          <Box display="flex" alignItems="center">
            <AvatarLabelWarning
              sx={{
                mr: 1
              }}
              variant="rounded"
            >
              <MonetizationOnTwoToneIcon />
            </AvatarLabelWarning>
            <Box>
              <Typography variant="subtitle2" noWrap>
                {t('Shares')}
              </Typography>
              <Typography variant="h5">{data.shares}</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            px: 1
          }}
        >
          <Chart
            options={chartOptions}
            series={chartData}
            type="line"
            height={240}
          />
        </Box>
        <Divider
          sx={{
            my: 3
          }}
        />
        <Box
          sx={{
            textAlign: 'center'
          }}
        >
          <Button size="small">{t('View all investments')}</Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Investments;
