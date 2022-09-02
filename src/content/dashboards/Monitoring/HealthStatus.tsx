import {
  Button,
  Card,
  CardHeader,
  Typography,
  Box,
  List,
  ListItemText,
  ListItem,
  IconButton,
  Avatar,
  alpha,
  Grid,
  Divider,
  useTheme,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import RefreshTwoToneIcon from '@mui/icons-material/RefreshTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import Text from 'src/components/Text';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import RotateLeftTwoToneIcon from '@mui/icons-material/RotateLeftTwoTone';

const BoxChartWrapperText = styled(Box)(
  () => `
    position: relative;
    width: 210px;
    height: 210px;
    
    .ChartText {
      position: absolute;
      z-index: 7;
      height: 40px;
      width: 40px;
      top: 50%;
      left: 50%;
      margin: -31px 0 0 -19px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
`
);

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.lighter};
      color: ${theme.colors.success.main};
      width: ${theme.spacing(4)};
      height: ${theme.spacing(4)};
      margin-right: ${theme.spacing(1)};
`
);

const AvatarError = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.error.lighter};
      color: ${theme.colors.error.main};
      width: ${theme.spacing(4)};
      height: ${theme.spacing(4)};
      margin-right: ${theme.spacing(1)};
`
);

const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
    color: ${theme.colors.alpha.black[70]};
    border-radius: 100px;
    transition: ${theme.transitions.create(['all'])};
    
    :hover {
      background-color: ${theme.colors.secondary.lighter};
      color: ${theme.colors.alpha.black[100]};
    }
`
);

function HealthStatus() {
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
          size: '45%'
        }
      }
    },
    states: {
      hover: {
        filter: {
          type: 'lighten',
          value: 0.1
        }
      },
      active: {
        filter: {
          type: 'none'
        }
      }
    },
    colors: [
      theme.colors.success.main,
      alpha(theme.colors.secondary.main, 0.3)
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
    legend: {
      show: false
    },
    stroke: {
      width: 0
    },
    theme: {
      mode: theme.palette.mode
    },
    tooltip: {
      enabled: false
    }
  };

  const chartSeries = [82, 18];

  return (
    <Card
      sx={{
        height: '100%'
      }}
    >
      <CardHeader
        action={<Button>{t('Check status')}</Button>}
        title={t('Health Status')}
      />
      <Box
        sx={{
          p: 2
        }}
      >
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} sm={4}>
            <BoxChartWrapperText>
              <div className="ChartText">
                <IconButtonWrapper>
                  <RefreshTwoToneIcon />
                </IconButtonWrapper>
              </div>
              <Chart
                height={'100%'}
                width={'100%'}
                options={chartOptions}
                series={chartSeries}
                type="donut"
              />
            </BoxChartWrapperText>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Box
              sx={{
                mt: `-${theme.spacing(2)}`
              }}
              display="flex"
              alignItems="flex-start"
              flexGrow={1}
              flexDirection="column"
            >
              <Box
                sx={{
                  pb: 1
                }}
              >
                <Typography
                  color="text.primary"
                  variant="h1"
                  lineHeight={1}
                  sx={{
                    pr: 0.5,
                    display: 'inline-flex',
                    fontSize: `${theme.typography.pxToRem(50)}`
                  }}
                >
                  82
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="h2"
                  lineHeight={1}
                  sx={{
                    pr: 2,
                    display: 'inline-flex'
                  }}
                >
                  /100
                </Typography>
              </Box>
              <List
                disablePadding
                sx={{
                  width: '100%'
                }}
              >
                <ListItem
                  disableGutters
                  sx={{
                    py: 0.2
                  }}
                >
                  <ListItemText
                    primary={t('High accuracy test run')}
                    primaryTypographyProps={{ variant: 'subtitle2' }}
                  />
                  <Box display="flex" alignItems="center">
                    <Text color="success">
                      <b>{t('Ok')}</b>
                    </Text>
                    <AvatarSuccess
                      sx={{
                        ml: 1
                      }}
                    >
                      <CheckTwoToneIcon />
                    </AvatarSuccess>
                  </Box>
                </ListItem>
                <ListItem
                  disableGutters
                  sx={{
                    py: 0.2
                  }}
                >
                  <ListItemText
                    primary={t('Storage capacity')}
                    primaryTypographyProps={{ variant: 'subtitle2' }}
                  />
                  <Box display="flex" alignItems="center">
                    <Text color="success">
                      <b>{t('Ok')}</b>
                    </Text>
                    <AvatarSuccess
                      sx={{
                        ml: 1
                      }}
                    >
                      <CheckTwoToneIcon />
                    </AvatarSuccess>
                  </Box>
                </ListItem>
                <ListItem
                  disableGutters
                  sx={{
                    py: 0.2
                  }}
                >
                  <ListItemText
                    primary={t('Performance test')}
                    primaryTypographyProps={{ variant: 'subtitle2' }}
                  />
                  <Box display="flex" alignItems="center">
                    <Text color="error">
                      <b>{t('Failed')}</b>
                    </Text>
                    <AvatarError
                      sx={{
                        ml: 1
                      }}
                    >
                      <CloseTwoToneIcon />
                    </AvatarError>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box
        py={2}
        sx={{
          textAlign: 'center'
        }}
      >
        <Button
          sx={{
            px: 2.5,
            borderRadius: 10,
            transform: 'translateY(0px)',
            transition: `${theme.transitions.create(['all'])}`,
            boxShadow: `${theme.colors.shadows.primary}`,

            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: `${theme.colors.shadows.primary}`
            },
            '&:active': {
              boxShadow: 'none'
            }
          }}
          variant="contained"
          startIcon={<RotateLeftTwoToneIcon />}
        >
          {t('Check again')}
        </Button>
      </Box>
    </Card>
  );
}

export default HealthStatus;
