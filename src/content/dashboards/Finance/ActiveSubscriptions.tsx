import { Button, Card, Box, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Label from 'src/components/Label';

function ActiveSubscriptions() {
  const { t }: { t: any } = useTranslation();

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pb: 3
        }}
      >
        <Typography variant="h3">{t('Active Subscriptions')}</Typography>
        <Button size="small">{t('View all subscriptions')}</Button>
      </Box>
      <Grid container spacing={3}>
        <Grid item md={3} sm={6} xs={12}>
          <Card
            sx={{
              p: 2
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center">
                <img
                  alt="Spotify"
                  src="/static/images/placeholders/logo/spotify.svg"
                />
                <Typography
                  variant="h5"
                  sx={{
                    pl: 1
                  }}
                  noWrap
                >
                  Spotify
                </Typography>
              </Box>
              <Box
                sx={{
                  fontWeight: 'normal'
                }}
              >
                <Label color="warning">
                  {t('due in')}&nbsp;<b>17 {t('days')}</b>
                </Label>
              </Box>
            </Box>
            <Box
              sx={{
                pt: 4
              }}
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Typography
                sx={{
                  pr: 1.5
                }}
                variant="h3"
              >
                $32.00
              </Typography>
              <Button size="small" variant="outlined">
                {t('Pay')}
              </Button>
            </Box>
          </Card>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Card
            sx={{
              p: 2
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center">
                <img
                  alt="Slack"
                  src="/static/images/placeholders/logo/slack.svg"
                />
                <Typography
                  variant="h5"
                  sx={{
                    pl: 1
                  }}
                  noWrap
                >
                  Slack
                </Typography>
              </Box>
              <Box
                sx={{
                  fontWeight: 'normal'
                }}
              >
                <Label color="success">{t('just paid')}</Label>
              </Box>
            </Box>
            <Box
              sx={{
                pt: 4
              }}
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Typography
                sx={{
                  pr: 1.5
                }}
                variant="h3"
              >
                $9.99
              </Typography>
              <Button size="small" variant="outlined" color="secondary">
                {t('View')}
              </Button>
            </Box>
          </Card>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Card
            sx={{
              p: 2
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center">
                <img
                  height={28}
                  alt="Google"
                  src="/static/images/logo/google.svg"
                />
                <Typography
                  variant="h5"
                  sx={{
                    pl: 1
                  }}
                  noWrap
                >
                  Google
                </Typography>
              </Box>
              <Box
                sx={{
                  fontWeight: 'normal'
                }}
              >
                <Label color="error">
                  {t('due in')}&nbsp;<b>3 {t('days')}</b>
                </Label>
              </Box>
            </Box>
            <Box
              sx={{
                pt: 4
              }}
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Typography
                sx={{
                  pr: 1.5
                }}
                variant="h3"
              >
                $8,695.00
              </Typography>
              <Button size="small" variant="outlined">
                {t('Pay')}
              </Button>
            </Box>
          </Card>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Card
            sx={{
              p: 2
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center">
                <img
                  height={28}
                  alt="Airbnb"
                  src="/static/images/placeholders/logo/airbnb.svg"
                />
                <Typography
                  variant="h5"
                  sx={{
                    pl: 1
                  }}
                  noWrap
                >
                  Airbnb
                </Typography>
              </Box>
              <Box
                sx={{
                  fontWeight: 'normal'
                }}
              >
                <Label color="success">
                  {t('due in')}&nbsp;<b>8 {t('months')}</b>
                </Label>
              </Box>
            </Box>
            <Box
              sx={{
                pt: 4
              }}
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Typography
                sx={{
                  pr: 1.5
                }}
                variant="h3"
              >
                $499.00
              </Typography>
              <Button size="small" variant="outlined">
                {t('View')}
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default ActiveSubscriptions;
