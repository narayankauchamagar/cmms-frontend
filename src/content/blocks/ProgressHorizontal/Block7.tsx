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

const LinearProgressWrapper = styled(LinearProgress)(
  ({ theme }) => `
        height: 10px;
        border-radius: ${theme.general.borderRadiusSm};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.primary.main, 0.1)};
            box-shadow: inset 0 1px 2px ${alpha(
              theme.colors.primary.dark,
              0.2
            )};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusSm};
            background: ${theme.colors.gradients.purple1};
        }
    `
);

function Block7() {
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
        <Box p={3} flexGrow={1}>
          <Typography variant="h4" textAlign="center">
            {t('Project management')}
          </Typography>
          <Stack
            sx={{
              mt: 2.5,
              textAlign: 'center'
            }}
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
          >
            <Box>
              <Typography gutterBottom variant="subtitle2">
                {t('Projects')}
              </Typography>
              <Typography variant="h3">381</Typography>
            </Box>
            <Box>
              <Typography gutterBottom variant="subtitle2">
                {t('Reviews')}
              </Typography>
              <Typography
                sx={{
                  color: `${theme.colors.error.main}`
                }}
                variant="h3"
              >
                198
              </Typography>
            </Box>
            <Box>
              <Typography gutterBottom variant="subtitle2">
                {t('Revenue')}
              </Typography>
              <Typography variant="h3">$685</Typography>
            </Box>
          </Stack>
        </Box>
        <Box p={3} flexGrow={1}>
          <Typography variant="h4" textAlign="center">
            {t('Current progress')}
          </Typography>
          <Box
            display="flex"
            sx={{
              pt: 2.5
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="subtitle2">Orders</Typography>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              color="text.primary"
            >
              765
            </Typography>
          </Box>
          <LinearProgressWrapper
            sx={{
              my: 0.5
            }}
            variant="determinate"
            value={67.5}
          />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="subtitle1">0</Typography>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              color="text.primary"
            >
              100%
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Card>
  );
}

export default Block7;
