import {
  Divider,
  Box,
  Stack,
  Card,
  alpha,
  Typography,
  linearProgressClasses,
  LinearProgress,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';

const LinearProgress1 = styled(LinearProgress)(
  ({ theme }) => `
        border-radius: ${theme.general.borderRadiusSm};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.alpha.trueWhite[100], 0.12)};
            box-shadow: inset 0 1px 2px ${alpha(
              theme.colors.alpha.trueWhite[100],
              0.08
            )};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusSm};
            background: ${theme.colors.gradients.green1};
        }
    `
);

const LinearProgress2 = styled(LinearProgress)(
  ({ theme }) => `
        border-radius: ${theme.general.borderRadiusSm};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.alpha.trueWhite[100], 0.12)};
            box-shadow: inset 0 1px 2px ${alpha(
              theme.colors.alpha.trueWhite[100],
              0.08
            )};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusSm};
            background: ${theme.colors.gradients.orange3};
        }
    `
);

const LinearProgress3 = styled(LinearProgress)(
  ({ theme }) => `
        border-radius: ${theme.general.borderRadiusSm};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.alpha.trueWhite[100], 0.12)};
            box-shadow: inset 0 1px 2px ${alpha(
              theme.colors.alpha.trueWhite[100],
              0.08
            )};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusSm};
            background: ${theme.colors.gradients.orange1};
        }
    `
);

function Block9() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      sx={{
        background: `${theme.colors.gradients.black2}`
      }}
    >
      <Stack
        sx={{
          textAlign: 'center'
        }}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
      >
        <Box p={3} flexGrow={1}>
          <Typography
            variant="h3"
            sx={{
              color: `${theme.colors.alpha.trueWhite[100]}`
            }}
          >
            76%
          </Typography>
          <LinearProgress1
            sx={{
              my: 1
            }}
            variant="determinate"
            value={76}
          />
          <Typography
            fontWeight="bold"
            gutterBottom
            variant="subtitle2"
            sx={{
              color: `${theme.colors.alpha.trueWhite[70]}`
            }}
          >
            {t('Sales')}
          </Typography>
        </Box>
        <Box p={3} flexGrow={1}>
          <Typography
            sx={{
              color: `${theme.colors.warning.main}`
            }}
            variant="h3"
          >
            43%
          </Typography>
          <LinearProgress2
            sx={{
              my: 1
            }}
            variant="determinate"
            value={43}
          />
          <Typography
            fontWeight="bold"
            gutterBottom
            variant="subtitle2"
            sx={{
              color: `${theme.colors.alpha.trueWhite[70]}`
            }}
          >
            {t('Profiles')}
          </Typography>
        </Box>
        <Box p={3} flexGrow={1}>
          <Typography
            variant="h3"
            sx={{
              color: `${theme.colors.alpha.trueWhite[100]}`
            }}
          >
            59%
          </Typography>
          <LinearProgress3
            sx={{
              my: 1
            }}
            variant="determinate"
            value={59}
          />
          <Typography
            fontWeight="bold"
            gutterBottom
            variant="subtitle2"
            sx={{
              color: `${theme.colors.alpha.trueWhite[70]}`
            }}
          >
            {t('Tickets')}
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
}

export default Block9;
