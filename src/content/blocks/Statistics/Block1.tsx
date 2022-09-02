import { Box, Card, Grid, Typography, alpha, useTheme } from '@mui/material';

import { useTranslation } from 'react-i18next';
import CountUp from 'react-countup';

function Block1() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            p: 2,
            boxShadow: `
                    0 0.47rem 2.2rem ${alpha(theme.colors.success.main, 0.04)}, 
                    0 0.94rem 1.4rem ${alpha(theme.colors.success.main, 0.04)}, 
                    0 0.25rem 0.54rem ${alpha(
                      theme.colors.success.main,
                      0.06
                    )}, 
                    0 0.13rem 0.19rem ${alpha(theme.colors.success.main, 0.04)}`
          }}
        >
          <Typography variant="subtitle2">{t('Expenses')}</Typography>
          <Box
            pt={1.5}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h2"
              sx={{
                color: `${theme.colors.success.main}`
              }}
            >
              <CountUp
                start={0}
                end={4.658}
                duration={6}
                separator=""
                delay={1}
                decimals={3}
                decimal=","
                prefix="$"
                suffix=""
              />
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: `${theme.colors.success.main}`
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
            p: 2,
            boxShadow: `
                    0 0.47rem 2.2rem ${alpha(theme.colors.warning.main, 0.04)}, 
                    0 0.94rem 1.4rem ${alpha(theme.colors.warning.main, 0.04)}, 
                    0 0.25rem 0.54rem ${alpha(
                      theme.colors.warning.main,
                      0.06
                    )}, 
                    0 0.13rem 0.19rem ${alpha(theme.colors.warning.main, 0.04)}`
          }}
        >
          <Typography variant="subtitle2">{t('Expenses')}</Typography>
          <Box
            pt={1.5}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h2"
              sx={{
                color: `${theme.colors.warning.main}`
              }}
            >
              <CountUp
                start={0}
                end={18.564}
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
                color: `${theme.colors.warning.main}`
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
            p: 2,
            boxShadow: `
                    0 0.47rem 2.2rem ${alpha(theme.colors.info.main, 0.04)}, 
                    0 0.94rem 1.4rem ${alpha(theme.colors.info.main, 0.04)}, 
                    0 0.25rem 0.54rem ${alpha(theme.colors.info.main, 0.06)}, 
                    0 0.13rem 0.19rem ${alpha(theme.colors.info.main, 0.04)}`
          }}
        >
          <Typography variant="subtitle2">{t('Income')}</Typography>
          <Box
            pt={1.5}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h2"
              sx={{
                color: `${theme.colors.info.main}`
              }}
            >
              <CountUp
                start={0}
                end={56.484}
                duration={6}
                separator=""
                delay={3}
                decimals={3}
                decimal=","
                prefix="$"
                suffix=""
              />
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: `${theme.colors.info.main}`
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
            p: 2,
            boxShadow: `
                    0 0.47rem 2.2rem ${alpha(theme.colors.error.main, 0.04)}, 
                    0 0.94rem 1.4rem ${alpha(theme.colors.error.main, 0.04)}, 
                    0 0.25rem 0.54rem ${alpha(theme.colors.error.main, 0.06)}, 
                    0 0.13rem 0.19rem ${alpha(theme.colors.error.main, 0.04)}`
          }}
        >
          <Typography variant="subtitle2">{t('Visitors')}</Typography>
          <Box
            pt={1.5}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h2"
              sx={{
                color: `${theme.colors.error.main}`
              }}
            >
              <CountUp
                start={0}
                end={5849}
                duration={6}
                separator=""
                delay={4}
                decimals={0}
                decimal=","
                prefix=""
                suffix=""
              />
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: `${theme.colors.error.main}`
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

export default Block1;
