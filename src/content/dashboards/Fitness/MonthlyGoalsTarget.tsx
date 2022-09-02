import { Card, Box, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import GaugeChart from 'react-gauge-chart';

function MonthlyGoalsTarget() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      sx={{
        px: 4,
        pt: 4,
        pb: 1,
        height: '100%'
      }}
    >
      <Typography
        gutterBottom
        align="center"
        variant="h3"
        sx={{
          fontSize: `${theme.typography.pxToRem(21)}`
        }}
      >
        {t('Monthly Goals Target')}
      </Typography>
      <Typography align="center" variant="subtitle2">
        {t('This si your main goals target indicator')}
      </Typography>
      <Box
        sx={{
          mt: 3,
          mb: 1,
          mx: 'auto',
          maxWidth: '480px'
        }}
      >
        <GaugeChart
          nrOfLevels={24}
          hideText
          cornerRadius={3}
          needleColor={theme.colors.alpha.black[30]}
          needleBaseColor={theme.colors.alpha.black[100]}
          colors={[
            theme.colors.error.main,
            theme.colors.warning.main,
            theme.colors.success.main
          ]}
          arcWidth={0.3}
          percent={0.46}
        />
      </Box>
      <Box
        sx={{
          textAlign: 'center'
        }}
      >
        <Typography component="span" align="center" variant="h4">
          {t('You have reached')}
        </Typography>
        <Typography
          component="span"
          align="center"
          variant="h2"
          sx={{
            px: 1,
            color: `${theme.colors.warning.main}`
          }}
        >
          46%
        </Typography>
        <Typography component="span" align="center" variant="h4">
          {t('of your monthly target!')}
        </Typography>
      </Box>
    </Card>
  );
}

export default MonthlyGoalsTarget;
