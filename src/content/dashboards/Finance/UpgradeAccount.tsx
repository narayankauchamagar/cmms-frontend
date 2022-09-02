import {
  Button,
  Card,
  styled,
  useTheme,
  CardActionArea,
  Divider,
  Box,
  Grid,
  Typography,
  IconButton,
  alpha
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';

const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
      background-color: ${theme.colors.secondary.lighter};
      color:  ${theme.colors.primary.main};
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      border-radius: 100px;
      
      &:hover {
          background-color: ${alpha(theme.colors.secondary.light, 0.3)};
      }
`
);

const CardWrapper = styled(Card)(
  ({ theme }) => `
  transition: ${theme.transitions.create(['box-shadow'])};
  position: relative;
  z-index: 5;

  &:hover {
      z-index: 6;
      box-shadow: 
          0 0.56875rem 3.3rem ${alpha(theme.colors.alpha.black[100], 0.05)},
          0 0.9975rem 2.4rem ${alpha(theme.colors.alpha.black[100], 0.07)},
          0 0.35rem 1rem ${alpha(theme.colors.alpha.black[100], 0.1)},
          0 0.225rem 0.8rem ${alpha(theme.colors.alpha.black[100], 0.15)};
  }
`
);

const CardActionAreaWrapper = styled(CardActionArea)(
  () => `

      .MuiTouchRipple-root {
        opacity: .2;
      }

      .MuiCardActionArea-focusHighlight {
        background: transparent;
      }

      &:hover {
        .MuiCardActionArea-focusHighlight {
          opacity: 0;
        }
      }
`
);

const DividerError = styled(Divider)(
  ({ theme }) => `
    width: 50px;
    background: ${theme.colors.error.main};
    height: 6px;
    border-radius: 50px;
`
);

function UpgradeAccount() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const chart3Options: ApexOptions = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    theme: {
      mode: theme.palette.mode === 'dark' ? 'light' : 'dark'
    },
    stroke: {
      colors: [theme.colors.success.main],
      width: 3
    },
    colors: [theme.colors.success.main],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 5,
        columnWidth: '60%'
      }
    },
    markers: {
      size: 0
    },
    tooltip: {
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function () {
            return '$';
          }
        }
      },
      marker: {
        show: false
      }
    },
    legend: {
      show: false
    }
  };
  const chart3Data = [
    {
      name: 'Growth',
      data: [0, 10, 22, 46, 47, 26, 24, 45]
    }
  ];

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={9}>
        <Card
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 4.5
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{
                pb: 1
              }}
            >
              {t('Upgrade Your Account to PRO')}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                pb: 2
              }}
            >
              {t('You get a lot more features when upgrading to a PRO plan.')}
            </Typography>
            <Typography
              variant="h4"
              fontWeight="normal"
              sx={{
                pb: 4
              }}
              color="primary"
              component="p"
            >
              {t('Manage your finances in style!')}
            </Typography>
            <Button variant="contained" color="secondary">
              {t('Get started today')}
            </Button>
          </Box>
          <Box
            component="span"
            sx={{
              display: { xs: 'none', md: 'inline-block' }
            }}
          >
            <img
              src="/static/images/placeholders/illustrations/4.svg"
              alt="..."
            />
          </Box>
          <Box
            component="span"
            sx={{
              display: { xs: 'none', sm: 'inline-block' }
            }}
          >
            <IconButtonWrapper>
              <ChevronRightIcon fontSize="large" />
            </IconButtonWrapper>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} lg={3}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card
              sx={{
                overflow: 'visible',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Box py={1} px={2.5}>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 'bold'
                  }}
                >
                  {t('Growth')}
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    pt: 1
                  }}
                >
                  $753
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    lineHeight: 1,
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  color="error"
                >
                  <span>32,54%</span>
                  <KeyboardArrowUpTwoToneIcon fontSize="small" />
                </Typography>
              </Box>
              <Box flexGrow={1} pt={3}>
                <Chart
                  options={chart3Options}
                  series={chart3Data}
                  type="bar"
                  height={99}
                />
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <CardWrapper>
              <CardActionAreaWrapper
                sx={{
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: `${theme.typography.pxToRem(40)}`
                    }}
                  >
                    18
                  </Typography>
                  <DividerError
                    sx={{
                      my: 2
                    }}
                  />
                  <Typography
                    variant="h3"
                    fontWeight="bold"
                    sx={{
                      fontSize: `${theme.typography.pxToRem(14)}`,
                      textTransform: 'uppercase'
                    }}
                  >
                    {t('Requests sent')}
                  </Typography>
                </Box>
                <ChevronRightTwoToneIcon fontSize="large" />
              </CardActionAreaWrapper>
            </CardWrapper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default UpgradeAccount;
