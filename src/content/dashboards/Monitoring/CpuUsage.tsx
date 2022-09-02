import { Card, Typography, Divider, Box, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import GaugeChart from 'react-gauge-chart';
import Text from 'src/components/Text';

function CpuUsage() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      sx={{
        py: 2,
        display: 'flex',
        alignItems: 'center',
        height: '100%'
      }}
    >
      <Box
        sx={{
          width: '100%'
        }}
      >
        <Typography
          align="center"
          variant="h3"
          sx={{
            mb: 2
          }}
        >
          {t('CPU Usage')}
        </Typography>
        <Typography
          align="center"
          variant="h3"
          fontWeight="normal"
          color="text.secondary"
          gutterBottom
        >
          {t('Today')}
        </Typography>
        <GaugeChart
          style={{ width: '90%', margin: '0 auto' }}
          nrOfLevels={16}
          hideText
          colors={[
            theme.colors.error.main,
            theme.colors.warning.main,
            theme.colors.success.main
          ]}
          needleColor={theme.colors.alpha.black[100]}
          needleBaseColor={theme.colors.alpha.black[100]}
          arcWidth={0.25}
          arcPadding={0.02}
          cornerRadius={3}
          percent={0.59}
        />
        <Typography align="center" variant="h1">
          59%
        </Typography>
        <Divider
          sx={{
            mx: 3,
            mt: 2,
            mb: 4
          }}
        />
        <Typography
          align="center"
          variant="h3"
          fontWeight="normal"
          color="text.secondary"
          gutterBottom
        >
          {t('Yesterday')}
        </Typography>

        <GaugeChart
          style={{ width: '80%', margin: '0 auto' }}
          nrOfLevels={16}
          hideText
          colors={[
            theme.colors.primary.main,
            theme.colors.primary.light,
            theme.colors.primary.lighter
          ]}
          needleColor={theme.colors.alpha.black[100]}
          needleBaseColor={theme.colors.alpha.black[100]}
          arcWidth={0.2}
          arcPadding={0.02}
          cornerRadius={3}
          percent={0.47}
        />

        <Typography align="center" variant="h2">
          47% <Text color="success">({t('good')})</Text>
        </Typography>
      </Box>
    </Card>
  );
}

export default CpuUsage;
