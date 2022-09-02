import {
  Box,
  Typography,
  Divider,
  LinearProgress,
  Avatar,
  useTheme,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Text from 'src/components/Text';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

const BoxChartWrapperText = styled(Box)(
  ({ theme }) => `
    position: relative;
    width: 220px;
    height: 220px;
    
    .ChartText {
      color: ${theme.colors.alpha.black[100]};
      font-weight: bold;
      position: absolute;
      height: 100px;
      width: 100px;
      font-size: ${theme.typography.pxToRem(23)};
      top: 50%;
      left: 50%;
      margin: -65px 0 0 -50px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
`
);

const LinearProgressWrapper = styled(LinearProgress)(
  ({ theme }) => `
      flex-grow: 1;
      height: 10px;
      
      &.MuiLinearProgress-root {
        background-color: ${theme.colors.alpha.black[10]};
      }
      
      .MuiLinearProgress-bar {
        border-radius: ${theme.general.borderRadiusXl};
      }
`
);

const AvatarUnhappy = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.alpha.white[100]};
      font-size: ${theme.typography.pxToRem(26)};
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      border: 3px solid ${theme.colors.error.main};
      color: ${theme.colors.error.main};
      margin-right: ${theme.spacing(2)};
`
);
const AvatarOk = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.alpha.white[100]};
      font-size: ${theme.typography.pxToRem(26)};
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      border: 3px solid ${theme.colors.warning.main};
      color: ${theme.colors.warning.main};
      margin-right: ${theme.spacing(2)};
`
);
const AvatarHappy = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.alpha.white[100]};
      font-size: ${theme.typography.pxToRem(26)};
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      border: 3px solid ${theme.colors.success.main};
      color: ${theme.colors.success.main};
      margin-right: ${theme.spacing(2)};
`
);

function HelpdeskSidebar() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const chartOptions: ApexOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '65%'
        }
      }
    },
    colors: [
      theme.palette.error.main,
      theme.palette.warning.main,
      theme.palette.success.main
    ],
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + '%';
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        color: theme.colors.alpha.black[50],
        opacity: 0.5
      }
    },
    fill: {
      opacity: 1
    },
    labels: [t('Bad'), t('Ok'), t('Great')],
    legend: {
      labels: {
        colors: theme.colors.alpha.trueWhite[100]
      },
      show: false
    },
    stroke: {
      width: 0
    },
    theme: {
      mode: theme.palette.mode
    }
  };

  const chartSeries = [25, 41, 34];

  return (
    <Box p={{ xs: 2, md: 4 }}>
      <Typography variant="h4" gutterBottom>
        {t('Customer Satisfaction')}
      </Typography>
      <Typography variant="subtitle2">
        {t('See how satisfied are customers with this helpdesk')}
      </Typography>

      <BoxChartWrapperText
        sx={{
          mt: 2,
          mb: 0
        }}
      >
        <div className="ChartText">
          <span>89%</span>
          <Typography variant="subtitle1">{t('very satisfied')}</Typography>
        </div>
        <Chart
          height={'100%'}
          width={'100%'}
          options={chartOptions}
          series={chartSeries}
          type="donut"
        />
      </BoxChartWrapperText>

      <Box
        display="flex"
        alignItems="center"
        sx={{
          my: 1
        }}
      >
        <AvatarUnhappy variant="rounded">🙁</AvatarUnhappy>
        <Box>
          <Typography variant="h5">
            <Text color="error">{t('Bad, bad, bad')}</Text>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            <b>5</b> {t('customers are unhappy')}
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        sx={{
          my: 1
        }}
      >
        <AvatarOk variant="rounded">😐</AvatarOk>
        <Box>
          <Typography variant="h5">
            <Text color="warning">{t("Meh, it's ok!")}</Text>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            <b>232</b> {t('customers could use some improvements')}
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        sx={{
          my: 1
        }}
      >
        <AvatarHappy variant="rounded">😀</AvatarHappy>
        <Box>
          <Typography variant="h5">
            <Text color="success">{t('Everything is super!')}</Text>
          </Typography>
        </Box>
      </Box>

      <Divider
        sx={{
          my: 4
        }}
      />

      <Typography variant="h4" gutterBottom>
        {t('Tickets by Channel')}
      </Typography>

      <Box py={2}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h5">
            {t('Website')}{' '}
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="span"
            >
              (23)
            </Typography>
          </Typography>
          <Typography variant="h5">20%</Typography>
        </Box>
        <LinearProgressWrapper
          value={20}
          color="primary"
          variant="determinate"
        />
      </Box>
      <Box py={2}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h5">
            {t('Email')}{' '}
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="span"
            >
              (23)
            </Typography>
          </Typography>
          <Typography variant="h5">65%</Typography>
        </Box>
        <LinearProgressWrapper
          value={65}
          color="primary"
          variant="determinate"
        />
      </Box>
      <Box pt={2}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h5">
            {t('Social Accounts')}{' '}
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="span"
            >
              (23)
            </Typography>
          </Typography>
          <Typography variant="h5">15%</Typography>
        </Box>
        <LinearProgressWrapper
          value={15}
          color="primary"
          variant="determinate"
        />
      </Box>

      <Divider
        sx={{
          my: 4
        }}
      />

      <Typography variant="h4" gutterBottom>
        {t('Tickets by Topics')}
      </Typography>

      <Box py={2}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h5">
            {t('Shipment')}{' '}
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="span"
            >
              (15)
            </Typography>
          </Typography>
          <Typography variant="h5">20%</Typography>
        </Box>
        <LinearProgressWrapper
          value={20}
          color="primary"
          variant="determinate"
        />
      </Box>
      <Box py={2}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h5">
            {t('Troubleshooting')}{' '}
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="span"
            >
              (12)
            </Typography>
          </Typography>
          <Typography variant="h5">52%</Typography>
        </Box>
        <LinearProgressWrapper
          value={52}
          color="primary"
          variant="determinate"
        />
      </Box>
      <Box pt={2}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h5">
            {t('eCommerce Issues')}{' '}
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="span"
            >
              (66)
            </Typography>
          </Typography>
          <Typography variant="h5">28%</Typography>
        </Box>
        <LinearProgressWrapper
          value={28}
          color="primary"
          variant="determinate"
        />
      </Box>
    </Box>
  );
}

export default HelpdeskSidebar;
