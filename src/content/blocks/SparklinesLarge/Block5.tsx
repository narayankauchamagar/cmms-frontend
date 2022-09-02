import {
  Box,
  IconButton,
  Card,
  Typography,
  Divider,
  Stack,
  LinearProgress,
  alpha,
  styled,
  useTheme,
  linearProgressClasses
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';

const LinearProgress1 = styled(LinearProgress)(
  ({ theme }) => `
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            height: 26px;
            background-color: ${alpha(theme.colors.success.main, 0.06)};
            box-shadow: inset 0 1px 2px ${alpha(
              theme.colors.success.dark,
              0.2
            )};
        }
        
        & .${linearProgressClasses.bar} {
            height: 12px;
            margin-top: 7px;
            border-radius: ${theme.general.borderRadiusLg};
            background: ${theme.colors.gradients.green2};
        }
    `
);

const LinearProgress2 = styled(LinearProgress)(
  ({ theme }) => `
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            height: 26px;
            background-color: ${alpha(theme.colors.error.main, 0.06)};
            box-shadow: inset 0 1px 2px ${alpha(theme.colors.error.dark, 0.2)};
        }
        
        & .${linearProgressClasses.bar} {
            height: 12px;
            margin-top: 7px;
            border-radius: ${theme.general.borderRadiusLg};
            background: ${theme.colors.gradients.orange2};
        }
    `
);

const LinearProgress3 = styled(LinearProgress)(
  ({ theme }) => `
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            height: 26px;
            background-color: ${alpha(theme.colors.primary.main, 0.06)};
            box-shadow: inset 0 1px 2px ${alpha(
              theme.colors.primary.dark,
              0.2
            )};
        }
        
        & .${linearProgressClasses.bar} {
            height: 12px;
            margin-top: 7px;
            border-radius: ${theme.general.borderRadiusLg};
            background: ${theme.colors.gradients.purple3};
        }
    `
);

function Block5() {
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
      'Last Year',
      'Last Decade'
    ],
    stroke: {
      colors: [theme.colors.primary.main],
      curve: 'smooth',
      width: 4
    },
    theme: {
      mode: theme.palette.mode
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
        show: true
      },
      y: {
        title: {
          formatter: function () {
            return 'Sales:';
          }
        }
      },
      marker: {
        show: true
      }
    },
    colors: [theme.colors.primary.main]
  };
  const Box1Data = [
    {
      name: 'Sales',
      data: [465, 546, 234, 576, 554, 338, 427, 348, 586, 254, 348]
    }
  ];

  return (
    <Card>
      <Box
        p={3}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography gutterBottom variant="h4">
            {t('Weekly Sales')}
          </Typography>
          <Typography variant="subtitle2">
            {t('Reports for what we sold this week')}
          </Typography>
        </Box>
        <IconButton size="small" color="secondary">
          <MoreVertTwoToneIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box
        p={3}
        sx={{
          background: `${theme.colors.alpha.black[5]}`
        }}
      >
        <Chart
          options={Box1Options}
          series={Box1Data}
          type="line"
          height={80}
        />
      </Box>
      <Divider />
      <Box py={2}>
        <Stack
          sx={{
            textAlign: 'center'
          }}
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          justifyContent="space-evenly"
          alignItems="center"
          spacing={0}
        >
          <Box p={3} flexGrow={1}>
            <Typography variant="h3">76%</Typography>
            <LinearProgress1
              sx={{
                my: 1
              }}
              variant="determinate"
              value={76}
            />
            <Typography gutterBottom variant="subtitle2">
              {t('Sales')}
            </Typography>
          </Box>
          <Box p={3} flexGrow={1}>
            <Typography
              sx={{
                color: `${theme.colors.error.main}`
              }}
              variant="h3"
            >
              43%
            </Typography>
            <LinearProgress2
              sx={{
                my: 1
              }}
              variant="determinate"
              value={43}
            />
            <Typography gutterBottom variant="subtitle2">
              {t('Profiles')}
            </Typography>
          </Box>
          <Box p={3} flexGrow={1}>
            <Typography variant="h3">59%</Typography>
            <LinearProgress3
              sx={{
                my: 1
              }}
              variant="determinate"
              value={59}
            />
            <Typography gutterBottom variant="subtitle2">
              {t('Tickets')}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Card>
  );
}

export default Block5;
