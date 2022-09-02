import {
  Stack,
  Card,
  Typography,
  Box,
  Divider,
  alpha,
  LinearProgress,
  styled,
  useTheme,
  linearProgressClasses
} from '@mui/material';

import { useTranslation } from 'react-i18next';

const LinearProgressPrimary = styled(LinearProgress)(
  ({ theme }) => `
        height: 8px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.primary.main, 0.1)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.primary.main};
        }
    `
);

const LinearProgressError = styled(LinearProgress)(
  ({ theme }) => `
        height: 8px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.error.main, 0.1)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.error.main};
        }
    `
);

function Block5() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        divider={<Divider orientation="vertical" flexItem />}
        justifyContent="space-between"
        alignItems="stretch"
        spacing={0}
      >
        <Box p={2.5} flexGrow={1}>
          <Box
            mb={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography color="text.primary" variant="h4" gutterBottom>
                {t('Deliveries')}
              </Typography>
              <Typography variant="subtitle2" noWrap>
                {t('Total deliveries to date')}
              </Typography>
            </Box>
            <Typography
              variant="h2"
              sx={{
                color: `${theme.colors.error.main}`
              }}
            >
              23,594
            </Typography>
          </Box>
          <LinearProgressError variant="determinate" value={66.43} />
          <Box
            display="flex"
            sx={{
              mt: 0.6
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              sx={{
                color: `${theme.colors.alpha.black[50]}`
              }}
              variant="subtitle2"
            >
              {t('Target')}
            </Typography>
            <Typography
              sx={{
                color: `${theme.colors.alpha.black[50]}`
              }}
              variant="subtitle2"
            >
              100%
            </Typography>
          </Box>
        </Box>
        <Box p={2.5} flexGrow={1}>
          <Box
            mb={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography color="text.primary" variant="h4" gutterBottom>
                {t('Orders')}
              </Typography>
              <Typography variant="subtitle2" noWrap>
                {t('Total orders to date')}
              </Typography>
            </Box>
            <Typography
              variant="h2"
              sx={{
                color: `${theme.colors.error.main}`
              }}
            >
              $12,346
            </Typography>
          </Box>
          <LinearProgressPrimary variant="determinate" value={44.32} />
          <Box
            display="flex"
            sx={{
              mt: 0.6
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              sx={{
                color: `${theme.colors.alpha.black[50]}`
              }}
              variant="subtitle2"
            >
              {t('Target')}
            </Typography>
            <Typography
              sx={{
                color: `${theme.colors.alpha.black[50]}`
              }}
              variant="subtitle2"
            >
              100%
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Card>
  );
}

export default Block5;
