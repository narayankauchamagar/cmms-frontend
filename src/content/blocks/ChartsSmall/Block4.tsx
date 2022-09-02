import {
  Box,
  Card,
  Typography,
  Grid,
  Badge,
  Avatar,
  Divider,
  Button,
  styled,
  useTheme
} from '@mui/material';
import Text from 'src/components/Text';

import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

const DotLegend = styled('span')(
  ({ theme }) => `
      border-radius: 22px;
      width: ${theme.spacing(2)};
      height: ${theme.spacing(2)};
      display: inline-block;
      border: ${theme.colors.alpha.white[100]} solid 3px;
  `
);

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
      width: ${theme.spacing(6)};
      height: ${theme.spacing(6)};
  `
);

function Block4() {
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
      colors: [theme.colors.error.main],
      curve: 'smooth',
      width: 3
    },
    colors: [theme.colors.error.main]
  };
  const Box1Data = [
    {
      name: 'Revenue',
      data: [45, 56, 24, 56, 54, 38, 47, 38, 56, 24, 38]
    }
  ];

  const Box2Options: ApexOptions = {
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
      colors: [theme.colors.success.main],
      curve: 'smooth',
      width: 3
    },
    colors: [theme.colors.success.main]
  };
  const Box2Data = [
    {
      name: 'Blog Posts',
      data: [45, 56, 24, 54, 38, 47, 38, 56, 24, 38, 56]
    }
  ];

  const Box3Options: ApexOptions = {
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
      width: 3
    },
    colors: [theme.colors.primary.main]
  };
  const Box3Data = [
    {
      name: 'Tests',
      data: [24, 54, 38, 47, 56, 47, 45, 56, 38, 56, 24]
    }
  ];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Card>
          <Box display="flex" alignItems="center" p={2}>
            <Badge
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              overlap="circular"
              badgeContent={
                <DotLegend
                  style={{ background: `${theme.colors.error.main}` }}
                />
              }
            >
              <AvatarWrapper
                alt="Spotify"
                src="/static/images/placeholders/logo/spotify.svg"
              />
            </Badge>
            <Box pl={1}>
              <Typography variant="h4" noWrap>
                Spotify
              </Typography>
              <Typography variant="subtitle2" noWrap>
                {t('New customer')}
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box p={3}>
            <Chart
              options={Box1Options}
              series={Box1Data}
              type="line"
              height={80}
            />
          </Box>
          <Divider />
          <Box
            p={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Button variant="outlined" size="small" color="error">
              {t('Delete')}
            </Button>
            <Button variant="contained" size="small" color="primary">
              {t('View details')}
            </Button>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <Box display="flex" alignItems="center" p={2}>
            <AvatarWrapper
              sx={{
                fontSize: `${theme.typography.pxToRem(16)}`,
                background: `${theme.colors.gradients.blue2}`
              }}
            >
              EJ
            </AvatarWrapper>
            <Box pl={1}>
              <Typography variant="h4" noWrap>
                Eric Johnson
              </Typography>
              <Typography variant="subtitle2" noWrap>
                {t('Elite pro author')}
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box p={3}>
            <Chart
              options={Box2Options}
              series={Box2Data}
              type="line"
              height={80}
            />
          </Box>
          <Divider />
          <Box
            p={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Button variant="outlined" size="small" color="error">
              {t('Delete')}
            </Button>
            <Button variant="contained" size="small" color="primary">
              {t('View details')}
            </Button>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <Box display="flex" alignItems="center" p={2}>
            <AvatarWrapper
              alt="Slack"
              src="/static/images/placeholders/logo/slack.svg"
            />
            <Box pl={1}>
              <Typography variant="h4" noWrap>
                Slack
              </Typography>
              <Typography variant="subtitle2" noWrap>
                <Text color="warning">{t('Overdue bills')}</Text>
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box p={3}>
            <Chart
              options={Box3Options}
              series={Box3Data}
              type="line"
              height={80}
            />
          </Box>
          <Divider />
          <Box
            p={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Button variant="outlined" size="small" color="error">
              {t('Delete')}
            </Button>
            <Button variant="contained" size="small" color="primary">
              {t('View details')}
            </Button>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block4;
