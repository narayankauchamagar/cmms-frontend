import { MouseEvent, useState } from 'react';
import {
  CardContent,
  Box,
  CardHeader,
  Card,
  Typography,
  Divider,
  alpha,
  ToggleButton,
  ToggleButtonGroup,
  LinearProgress,
  Grid,
  IconButton,
  styled,
  useTheme,
  linearProgressClasses
} from '@mui/material';
import Text from 'src/components/Text';
import { useTranslation } from 'react-i18next';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

const CardWrapper = styled(Card)(
  ({ theme }) => `
      background: ${alpha(theme.colors.alpha.black[10], 0.05)};
      box-shadow: none;
      border-radius: 0;
  `
);

const LinearProgressError = styled(LinearProgress)(
  ({ theme }) => `
        height: 10px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.error.main, 0.1)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.error.main};
        }
    `
);

const LinearProgressSuccess = styled(LinearProgress)(
  ({ theme }) => `
        height: 10px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.success.main, 0.1)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.success.main};
        }
    `
);

function Block3() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const [tabs, setTab] = useState<string | null>('watch_list_columns');

  const handleViewOrientation = (
    _event: MouseEvent<HTMLElement>,
    newValue: string | null
  ) => {
    setTab(newValue);
  };

  const Box3Options: ApexOptions = {
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
      axisBorder: {
        show: false
      },
      labels: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: true,
      labels: {
        show: true
      }
    },
    grid: {
      strokeDashArray: 5,
      borderColor: theme.colors.alpha.black[10]
    }
  };
  const Box3Data = [
    {
      name: 'Net Profit',
      data: [2.3, 3.1, 4.0, 3.8, 5.1, 3.6, 4.0, 3.8, 5.1, 3.6]
    },
    {
      name: 'Net Loss',
      data: [2.1, 2.1, 3.0, 2.8, 4.0, 3.8, 5.1, 3.6, 4.1, 2.6]
    }
  ];

  return (
    <Card>
      <CardHeader
        sx={{
          p: 3
        }}
        disableTypography
        action={
          <IconButton size="small" color="secondary">
            <MoreVertTwoToneIcon />
          </IconButton>
        }
        title={
          <>
            <Typography variant="h4">{t('Sales Statistics')}</Typography>
          </>
        }
      />
      <Divider />
      <CardContent
        sx={{
          py: 0,
          pl: 1
        }}
      >
        <Chart
          options={Box3Options}
          series={Box3Data}
          type="area"
          height={273}
        />
      </CardContent>
      <CardWrapper
        sx={{
          p: 3,
          textAlign: 'center'
        }}
      >
        <ToggleButtonGroup
          value={tabs}
          exclusive
          onChange={handleViewOrientation}
        >
          <ToggleButton
            sx={{
              textTransform: 'none',
              py: 0.6,
              px: 1.8
            }}
            disableRipple
            value="watch_list_columns"
          >
            {t('Last week')}
          </ToggleButton>
          <ToggleButton
            sx={{
              textTransform: 'none',
              py: 0.6,
              px: 1.8
            }}
            disableRipple
            value="watch_list_rows"
          >
            {t('Last month')}
          </ToggleButton>
        </ToggleButtonGroup>
      </CardWrapper>
      <CardContent
        sx={{
          p: 3
        }}
      >
        <Typography variant="h4" gutterBottom>
          {t('Performance')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Portfolio performance for selected period.')}
        </Typography>
      </CardContent>
      <Divider />
      <CardContent
        sx={{
          p: 3
        }}
      >
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h4">{t('Orders')}</Typography>
              <Typography variant="h6" fontWeight="bold">
                <Text color="error">678</Text>
              </Typography>
            </Box>
            <LinearProgressError
              sx={{
                my: 1
              }}
              variant="determinate"
              value={34}
            />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="body2" color="text.secondary">
                {t('Target')}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                100%
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h4">{t('Customers')}</Typography>
              <Typography variant="h6" fontWeight="bold">
                <Text color="error">853</Text>
              </Typography>
            </Box>
            <LinearProgressSuccess
              sx={{
                my: 1
              }}
              variant="determinate"
              value={78}
            />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="body2" color="text.secondary">
                {t('Target')}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                100%
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Block3;
