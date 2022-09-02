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
            height: 26px;
            background-color: ${alpha(theme.colors.success.main, 0.06)};
            box-shadow: inset 0 1px 2px ${alpha(
              theme.colors.success.dark,
              0.2
            )};
        }
        
        & .${linearProgressClasses.bar} {
            height: 12px;
            margin-top: 7px;
            border-radius: ${theme.general.borderRadiusSm};
            background: ${theme.colors.gradients.green2};
        }
    `
);

const LinearProgress2 = styled(LinearProgress)(
  ({ theme }) => `
        border-radius: ${theme.general.borderRadiusSm};

        &.${linearProgressClasses.colorPrimary} {
            height: 26px;
            background-color: ${alpha(theme.colors.error.main, 0.06)};
            box-shadow: inset 0 1px 2px ${alpha(theme.colors.error.dark, 0.2)};
        }
        
        & .${linearProgressClasses.bar} {
            height: 12px;
            margin-top: 7px;
            border-radius: ${theme.general.borderRadiusSm};
            background: ${theme.colors.gradients.orange2};
        }
    `
);

const LinearProgress3 = styled(LinearProgress)(
  ({ theme }) => `
        border-radius: ${theme.general.borderRadiusSm};

        &.${linearProgressClasses.colorPrimary} {
            height: 26px;
            background-color: ${alpha(theme.colors.primary.main, 0.06)};
            box-shadow: inset 0 1px 2px ${alpha(
              theme.colors.primary.dark,
              0.2
            )};
        }
        
        & .${linearProgressClasses.bar} {
            height: 12px;
            margin-top: 7px;
            border-radius: ${theme.general.borderRadiusSm};
            background: ${theme.colors.gradients.purple3};
        }
    `
);

function Block8() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card>
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
          <Typography variant="h3">76%</Typography>
          <LinearProgress1
            sx={{
              my: 1
            }}
            variant="determinate"
            value={76}
          />
          <Typography gutterBottom variant="subtitle2">
            {t('Sales')}
          </Typography>
        </Box>
        <Box p={3} flexGrow={1}>
          <Typography
            sx={{
              color: `${theme.colors.error.main}`
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
          <Typography gutterBottom variant="subtitle2">
            {t('Profiles')}
          </Typography>
        </Box>
        <Box p={3} flexGrow={1}>
          <Typography variant="h3">59%</Typography>
          <LinearProgress3
            sx={{
              my: 1
            }}
            variant="determinate"
            value={59}
          />
          <Typography gutterBottom variant="subtitle2">
            {t('Tickets')}
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
}

export default Block8;
