import {
  Grid,
  Card,
  Typography,
  Box,
  alpha,
  LinearProgress,
  styled,
  useTheme,
  linearProgressClasses
} from '@mui/material';

import { useTranslation } from 'react-i18next';

const LinearProgressError = styled(LinearProgress)(
  ({ theme }) => `
        height: 8px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${theme.colors.alpha.trueWhite[30]};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.error.main};
        }
    `
);

const LinearProgressInfo = styled(LinearProgress)(
  ({ theme }) => `
        height: 8px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.alpha.trueWhite[100], 0.2)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.info.main};
        }
    `
);

const LinearProgressSuccess = styled(LinearProgress)(
  ({ theme }) => `
        height: 8px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${theme.colors.success.main};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.alpha.black[10]};
        }
    `
);

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

function Block3() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6} lg={3}>
        <Card
          sx={{
            pt: 2.5,
            pb: 2,
            px: 2.5,
            flexGrow: 1
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            flex={1}
            mb={1}
            sx={{
              width: '100%'
            }}
          >
            <Typography
              sx={{
                color: `${theme.colors.primary.main}`,
                pr: 1.5
              }}
              variant="h3"
            >
              54%
            </Typography>
            <Box flex={1}>
              <LinearProgressPrimary variant="determinate" value={68} />
            </Box>
          </Box>
          <Typography variant="subtitle2" noWrap>
            {t('Expenses target')}
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Card
          sx={{
            pt: 2.5,
            pb: 2,
            px: 2.5,
            flexGrow: 1
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            flex={1}
            mb={1}
            sx={{
              width: '100%'
            }}
          >
            <Typography
              sx={{
                color: `${theme.colors.success.main}`,
                pr: 1.5
              }}
              variant="h3"
            >
              68%
            </Typography>
            <Box flex={1}>
              <LinearProgressSuccess value={54} />
            </Box>
          </Box>
          <Typography variant="subtitle2" noWrap>
            {t('Sales target')}
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Card
          sx={{
            pt: 2.5,
            pb: 2,
            px: 2.5,
            flexGrow: 1,
            background: `${theme.colors.gradients.orange1}`
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            flex={1}
            mb={1}
            sx={{
              width: '100%'
            }}
          >
            <Typography
              sx={{
                color: `${theme.colors.error.main}`,
                pr: 1.5
              }}
              variant="h3"
            >
              32%
            </Typography>
            <Box flex={1}>
              <LinearProgressError value={32} />
            </Box>
          </Box>
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            sx={{
              color: `${theme.colors.alpha.trueWhite[100]}`
            }}
            noWrap
          >
            {t('Income target')}
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Card
          sx={{
            pt: 2.5,
            pb: 2,
            px: 2.5,
            flexGrow: 1,
            background: `${theme.colors.gradients.blue3}`
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            flex={1}
            mb={1}
            sx={{
              width: '100%'
            }}
          >
            <Typography
              sx={{
                color: `${theme.colors.info.main}`,
                pr: 1.5
              }}
              variant="h3"
            >
              71%
            </Typography>
            <Box flex={1}>
              <LinearProgressInfo variant="determinate" value={71} />
            </Box>
          </Box>
          <Typography
            variant="subtitle2"
            sx={{
              color: `${theme.colors.alpha.trueWhite[70]}`
            }}
            noWrap
          >
            {t('Spendings target')}
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block3;
