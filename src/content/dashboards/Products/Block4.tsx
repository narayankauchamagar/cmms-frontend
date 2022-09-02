import {
  Link,
  Avatar,
  Box,
  Typography,
  ListItemAvatar,
  Card,
  Grid,
  ListItemText,
  ListItem,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import ReviewsTwoToneIcon from '@mui/icons-material/ReviewsTwoTone';
import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone';
import EngineeringTwoToneIcon from '@mui/icons-material/EngineeringTwoTone';
import DraftsTwoToneIcon from '@mui/icons-material/DraftsTwoTone';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
        background-color: ${theme.colors.success.main};
        color: ${theme.palette.getContrastText(theme.colors.success.dark)};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
        box-shadow: ${theme.colors.shadows.success};
  `
);

const AvatarWarning = styled(Avatar)(
  ({ theme }) => `
        background-color: ${theme.colors.warning.main};
        color: ${theme.palette.getContrastText(theme.colors.warning.dark)};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
        box-shadow: ${theme.colors.shadows.warning};
  `
);

const AvatarError = styled(Avatar)(
  ({ theme }) => `
        background-color: ${theme.colors.error.main};
        color: ${theme.palette.getContrastText(theme.colors.error.dark)};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
        box-shadow: ${theme.colors.shadows.error};
  `
);

const AvatarPrimary = styled(Avatar)(
  ({ theme }) => `
        background-color: ${theme.colors.primary.main};
        color: ${theme.palette.getContrastText(theme.colors.primary.dark)};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
        box-shadow: ${theme.colors.shadows.primary};
  `
);

function Block4() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const chart2Options: ApexOptions = {
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
      colors: [theme.colors.error.main],
      width: 3
    },
    colors: [theme.colors.error.main],
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
            return '';
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
  const chart2Data = [
    {
      name: 'Orders',
      data: [0, 10, 22, 46, 47, 26, 24, 45]
    }
  ];

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
      <Grid item xs={12} md={6}>
        <Card>
          <Box p={3}>
            <Typography variant="h4">{t('Positive Reviews')}</Typography>
            <ListItem
              disableGutters
              sx={{
                mt: 2,
                mb: 1
              }}
              component="div"
            >
              <ListItemAvatar>
                <AvatarPrimary variant="rounded">
                  <ReviewsTwoToneIcon fontSize="large" />
                </AvatarPrimary>
              </ListItemAvatar>
              <ListItemText
                primary="98.54%"
                primaryTypographyProps={{
                  variant: 'h1',
                  sx: {
                    fontSize: `${theme.typography.pxToRem(35)}`,
                    ml: 2
                  }
                }}
              />
            </ListItem>
            <ListItem
              disableGutters
              sx={{
                pb: 0,
                minHeight: 70
              }}
              component="div"
            >
              <ListItemText
                primary={
                  <>
                    <Link fontWeight="bold" href="#">
                      {t('See reviews')}
                    </Link>
                    <Box
                      component="span"
                      sx={{
                        pl: 0.5
                      }}
                    >
                      {t('that were left by past customers from USA')}.
                    </Box>
                  </>
                }
                primaryTypographyProps={{ variant: 'subtitle2' }}
              />
            </ListItem>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <Box p={3}>
            <Typography variant="h4">{t('Bounce Rate')}</Typography>
            <ListItem
              disableGutters
              sx={{
                mt: 2,
                mb: 1
              }}
              component="div"
            >
              <ListItemAvatar>
                <AvatarWarning variant="rounded">
                  <PublicTwoToneIcon fontSize="large" />
                </AvatarWarning>
              </ListItemAvatar>
              <ListItemText
                primary="32.87%"
                primaryTypographyProps={{
                  variant: 'h1',
                  sx: {
                    fontSize: `${theme.typography.pxToRem(30)}`,
                    ml: 2
                  }
                }}
              />
            </ListItem>
            <ListItem
              disableGutters
              sx={{
                pb: 0,
                minHeight: 70
              }}
              component="div"
            >
              <ListItemText
                primary={
                  <>
                    <Link fontWeight="bold" href="#">
                      {t('See visits')}
                    </Link>
                    <Box
                      component="span"
                      sx={{
                        pl: 0.5
                      }}
                    >
                      {t('that had a higher than expected bounce rate')}.
                    </Box>
                  </>
                }
                primaryTypographyProps={{ variant: 'subtitle2' }}
              />
            </ListItem>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <Box p={3}>
            <Typography variant="h4">{t('Active Referrals')}</Typography>
            <ListItem
              disableGutters
              sx={{
                mt: 2,
                mb: 1
              }}
              component="div"
            >
              <ListItemAvatar>
                <AvatarError variant="rounded">
                  <EngineeringTwoToneIcon fontSize="large" />
                </AvatarError>
              </ListItemAvatar>
              <ListItemText
                primary="194"
                primaryTypographyProps={{
                  variant: 'h1',
                  sx: {
                    fontSize: `${theme.typography.pxToRem(30)}`,
                    ml: 2
                  }
                }}
              />
            </ListItem>
            <ListItem
              disableGutters
              sx={{
                pb: 0,
                minHeight: 70
              }}
              component="div"
            >
              <ListItemText
                primary={
                  <>
                    <Link fontWeight="bold" href="#">
                      {t('See referring')}
                    </Link>
                    <Box
                      component="span"
                      sx={{
                        pl: 0.5
                      }}
                    >
                      {t('domains that sent most visits last month')}.
                    </Box>
                  </>
                }
                primaryTypographyProps={{ variant: 'subtitle2' }}
              />
            </ListItem>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <Box p={3}>
            <Typography variant="h4">{t('Opened Invites')}</Typography>
            <ListItem
              disableGutters
              sx={{
                mt: 2,
                mb: 1
              }}
              component="div"
            >
              <ListItemAvatar>
                <AvatarSuccess variant="rounded">
                  <DraftsTwoToneIcon fontSize="large" />
                </AvatarSuccess>
              </ListItemAvatar>
              <ListItemText
                primary="29.93%"
                primaryTypographyProps={{
                  variant: 'h1',
                  sx: {
                    fontSize: `${theme.typography.pxToRem(30)}`,
                    ml: 2
                  }
                }}
              />
            </ListItem>
            <ListItem
              disableGutters
              sx={{
                pb: 0,
                minHeight: 70
              }}
              component="div"
            >
              <ListItemText
                primary={
                  <>
                    <Link fontWeight="bold" href="#">
                      {t('See clients')}
                    </Link>
                    <Box
                      component="span"
                      sx={{
                        pl: 0.5
                      }}
                    >
                      {t('that accepted your invitation to connect')}.
                    </Box>
                  </>
                }
                primaryTypographyProps={{ variant: 'subtitle2' }}
              />
            </ListItem>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
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
              {t('Orders')}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                pt: 1
              }}
            >
              276
            </Typography>
            <Typography
              variant="h5"
              sx={{
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center',
                color: `${theme.colors.success.main}`
              }}
            >
              <span>67,43%</span>
              <KeyboardArrowUpTwoToneIcon fontSize="small" />
            </Typography>
          </Box>
          <Box ml={2} flexGrow={1} pt={3}>
            <Chart
              options={chart2Options}
              series={chart2Data}
              type="area"
              height={'55%'}
            />
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
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
          <Box ml={2} flexGrow={1} pt={3}>
            <Chart
              options={chart3Options}
              series={chart3Data}
              type="bar"
              height={'55%'}
            />
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block4;
