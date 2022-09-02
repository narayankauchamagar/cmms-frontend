import { Box, Card, Grid, Typography, useTheme } from '@mui/material';

import { useTranslation } from 'react-i18next';
import CountUp from 'react-countup';

function Block2() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            p: 3,
            background: `${theme.colors.gradients.blue1}`
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              color: `${theme.colors.alpha.trueWhite[100]}`
            }}
          >
            {t('Income')}
          </Typography>
          <Box
            pt={1.5}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h2"
              sx={{
                color: `${theme.colors.alpha.trueWhite[100]}`
              }}
            >
              <CountUp
                start={0}
                end={3.21}
                duration={6}
                separator=""
                delay={1}
                decimals={2}
                decimal=","
                prefix="$"
                suffix="M"
              />
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: `${theme.colors.alpha.trueWhite[70]}`
              }}
            >
              +35.2%
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            p: 3,
            background: `${theme.colors.gradients.purple3}`
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              color: `${theme.colors.alpha.trueWhite[100]}`
            }}
          >
            {t('Spendings')}
          </Typography>
          <Box
            pt={1.5}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h2"
              sx={{
                color: `${theme.colors.alpha.trueWhite[100]}`
              }}
            >
              <CountUp
                start={0}
                end={45.347}
                duration={6}
                separator=""
                delay={2}
                decimals={3}
                decimal=","
                prefix="$"
                suffix=""
              />
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: `${theme.colors.alpha.trueWhite[70]}`
              }}
            >
              +3.25%
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            p: 3,
            background: `${theme.colors.gradients.green2}`
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              color: `${theme.colors.alpha.trueWhite[100]}`
            }}
          >
            {t('Earnings')}
          </Typography>
          <Box
            pt={1.5}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h2"
              sx={{
                color: `${theme.colors.alpha.trueWhite[100]}`
              }}
            >
              <CountUp
                start={0}
                end={5876}
                duration={6}
                separator=","
                delay={3}
                decimals={2}
                decimal="."
                prefix="$"
                suffix=""
              />
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: `${theme.colors.alpha.trueWhite[70]}`
              }}
            >
              +75.25%
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            p: 3,
            background: `${theme.colors.gradients.pink2}`
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              color: `${theme.colors.alpha.trueWhite[100]}`
            }}
          >
            {t('Losses')}
          </Typography>
          <Box
            pt={1.5}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h2"
              sx={{
                color: `${theme.colors.alpha.trueWhite[100]}`
              }}
            >
              <CountUp
                start={0}
                end={7.685}
                duration={6}
                separator=""
                delay={4}
                decimals={3}
                decimal=","
                prefix="$"
                suffix=""
              />
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: `${theme.colors.alpha.trueWhite[70]}`
              }}
            >
              +65.35%
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block2;
