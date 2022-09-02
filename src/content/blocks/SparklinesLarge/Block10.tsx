import {
  Button,
  Card,
  Box,
  CardActions,
  Typography,
  Avatar,
  ToggleButton,
  ToggleButtonGroup,
  Stack,
  Divider,
  styled,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Text from 'src/components/Text';
import Label from 'src/components/Label';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import TrendingDownTwoToneIcon from '@mui/icons-material/TrendingDownTwoTone';
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';
import TrendingFlatTwoToneIcon from '@mui/icons-material/TrendingFlatTwoTone';
import ViewStreamTwoToneIcon from '@mui/icons-material/ViewStreamTwoTone';
import GridViewTwoToneIcon from '@mui/icons-material/GridViewTwoTone';

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
          background: ${theme.colors.alpha.trueWhite[100]};
          margin-right: ${theme.spacing(1)};
  `
);

function Block10() {
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
      'Tueday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    stroke: {
      curve: 'smooth',
      colors: [theme.colors.primary.main],
      width: 2
    },
    yaxis: {
      show: false
    },
    colors: [theme.colors.primary.main],
    grid: {
      padding: {
        top: 10,
        right: 5,
        bottom: 10,
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
            return 'Price: $';
          }
        }
      },
      marker: {
        show: false
      }
    }
  };

  const Box1Data = [
    {
      name: 'Bitcoin',
      data: [55.701, 57.598, 48.607, 46.439, 58.755, 46.978, 58.16]
    }
  ];

  const Box2Data = [
    {
      name: 'Ethereum',
      data: [1.854, 1.873, 1.992, 2.009, 1.909, 1.942, 1.884]
    }
  ];

  const Box3Data = [
    {
      name: 'Cardano',
      data: [13, 16, 14, 18, 8, 11, 20]
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
            {t('Crypto Watchlist')}
          </Typography>
          <Typography variant="subtitle2">
            {t('List of all crypto assets you are following')}
          </Typography>
        </Box>
        <ToggleButtonGroup size="small" exclusive>
          <ToggleButton value="1">
            <ViewStreamTwoToneIcon fontSize="small" />
          </ToggleButton>
          <ToggleButton value="2">
            <GridViewTwoToneIcon fontSize="small" />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Divider />
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="stretch"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={0}
      >
        <Box
          sx={{
            width: '100%',
            p: 3
          }}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <AvatarWrapper>
                <img
                  alt="BTC"
                  src="/static/images/placeholders/logo/bitcoin.png"
                />
              </AvatarWrapper>
              <Box>
                <Typography variant="h4" noWrap>
                  Bitcoin
                </Typography>
                <Typography variant="subtitle1" noWrap>
                  BTC
                </Typography>
              </Box>
            </Box>
            <Label color="secondary">24h</Label>
          </Box>
          <Box
            mt={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  pr: 1
                }}
              >
                $56,475.99
              </Typography>
              <Text color="success">
                <b>+12.5%</b>
              </Text>
            </Box>
            <TrendingUpTwoToneIcon
              sx={{
                color: `${theme.colors.success.main}`
              }}
            />
          </Box>
          <Box pt={2}>
            <Chart
              options={Box1Options}
              series={Box1Data}
              type="line"
              height={100}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: '100%',
            p: 3
          }}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <AvatarWrapper>
                <img
                  alt="ETH"
                  src="/static/images/placeholders/logo/ethereum.png"
                />
              </AvatarWrapper>
              <Box>
                <Typography variant="h4" noWrap>
                  Ethereum
                </Typography>
                <Typography variant="subtitle1" noWrap>
                  ETH
                </Typography>
              </Box>
            </Box>
            <Label color="secondary">24h</Label>
          </Box>
          <Box
            mt={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  pr: 1
                }}
              >
                $1,968.00
              </Typography>
              <Text color="error">
                <b>-3.24%</b>
              </Text>
            </Box>
            <TrendingDownTwoToneIcon
              sx={{
                color: `${theme.colors.error.main}`
              }}
            />
          </Box>
          <Box pt={2}>
            <Chart
              options={Box1Options}
              series={Box2Data}
              type="line"
              height={100}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: '100%',
            p: 3
          }}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <AvatarWrapper>
                <img
                  alt="ADA"
                  src="/static/images/placeholders/logo/cardano.png"
                />
              </AvatarWrapper>
              <Box>
                <Typography variant="h4" noWrap>
                  Cardano
                </Typography>
                <Typography variant="subtitle1" noWrap>
                  ADA
                </Typography>
              </Box>
            </Box>
            <Label color="secondary">24h</Label>
          </Box>
          <Box
            mt={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  pr: 1
                }}
              >
                $23.00
              </Typography>
              <Text color="error">
                <b>-0.33%</b>
              </Text>
            </Box>
            <TrendingFlatTwoToneIcon
              sx={{
                color: `${theme.colors.warning.main}`
              }}
            />
          </Box>
          <Box pt={2}>
            <Chart
              options={Box1Options}
              series={Box3Data}
              type="line"
              height={100}
            />
          </Box>
        </Box>
      </Stack>
      <Divider />
      <CardActions
        disableSpacing
        sx={{
          p: 3,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Button
          sx={{
            textTransform: 'uppercase',
            fontSize: `${theme.typography.pxToRem(13)}`
          }}
          variant="outlined"
        >
          {t('Discover more assets')}
        </Button>
      </CardActions>
    </Card>
  );
}

export default Block10;
