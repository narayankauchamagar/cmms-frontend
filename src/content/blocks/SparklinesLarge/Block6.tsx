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

const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
      background: ${theme.colors.alpha.trueWhite[10]};
      transition: ${theme.transitions.create(['all'])};
      color: ${theme.colors.alpha.trueWhite[70]};
  
      &:hover {
        background: ${alpha(theme.colors.alpha.trueWhite[100], 0.2)};
        color: ${theme.colors.alpha.trueWhite[100]};
      }
  `
);

const LinearProgress1 = styled(LinearProgress)(
  ({ theme }) => `
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            height: 12px;
            background-color: ${alpha(theme.colors.alpha.trueWhite[100], 0.1)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background: ${theme.colors.gradients.green2};
        }
    `
);

const LinearProgress2 = styled(LinearProgress)(
  ({ theme }) => `
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            height: 12px;
            background-color: ${alpha(theme.colors.alpha.trueWhite[100], 0.1)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background: ${theme.colors.gradients.orange2};
        }
    `
);

const LinearProgress3 = styled(LinearProgress)(
  ({ theme }) => `
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            height: 12px;
            background-color: ${alpha(theme.colors.alpha.trueWhite[100], 0.1)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background: ${theme.colors.gradients.orange3};
        }
    `
);

function Block6() {
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
    theme: {
      mode: 'dark'
    },
    stroke: {
      colors: [theme.colors.alpha.trueWhite[100]],
      curve: 'smooth',
      width: 4
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
    colors: [theme.colors.success.main]
  };
  const Box1Data = [
    {
      name: 'Sales',
      data: [465, 546, 234, 576, 554, 338, 427, 348, 586, 254, 348]
    }
  ];

  return (
    <Card
      sx={{
        background: `${theme.colors.gradients.blue1}`
      }}
    >
      <Box
        p={3}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography
            gutterBottom
            variant="h4"
            sx={{
              color: `${theme.colors.alpha.trueWhite[100]}`
            }}
          >
            {t('Event Tickets')}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: `${theme.colors.alpha.trueWhite[70]}`
            }}
          >
            {t('See tickets sales progression')}
          </Typography>
        </Box>
        <IconButtonWrapper size="small" color="primary">
          <MoreVertTwoToneIcon />
        </IconButtonWrapper>
      </Box>
      <Divider
        sx={{
          background: `${theme.colors.alpha.trueWhite[10]}`
        }}
      />
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
          height={94}
        />
      </Box>
      <Divider
        sx={{
          background: `${theme.colors.alpha.trueWhite[10]}`
        }}
      />
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
            <Typography
              variant="h3"
              sx={{
                color: `${theme.colors.alpha.trueWhite[100]}`
              }}
            >
              76%
            </Typography>
            <LinearProgress1
              sx={{
                my: 1
              }}
              variant="determinate"
              value={76}
            />
            <Typography
              gutterBottom
              variant="subtitle2"
              sx={{
                color: `${theme.colors.alpha.trueWhite[70]}`
              }}
            >
              {t('Sales')}
            </Typography>
          </Box>
          <Box p={3} flexGrow={1}>
            <Typography
              sx={{
                color: `${theme.colors.success.main}`
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
            <Typography
              gutterBottom
              variant="subtitle2"
              sx={{
                color: `${theme.colors.alpha.trueWhite[70]}`
              }}
            >
              {t('Profiles')}
            </Typography>
          </Box>
          <Box p={3} flexGrow={1}>
            <Typography
              variant="h3"
              sx={{
                color: `${theme.colors.alpha.trueWhite[100]}`
              }}
            >
              59%
            </Typography>
            <LinearProgress3
              sx={{
                my: 1
              }}
              variant="determinate"
              value={59}
            />
            <Typography
              gutterBottom
              variant="subtitle2"
              sx={{
                color: `${theme.colors.alpha.trueWhite[70]}`
              }}
            >
              {t('Tickets')}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Card>
  );
}

export default Block6;
