import {
  Grid,
  Box,
  Button,
  LinearProgress,
  Card,
  Typography,
  alpha,
  Avatar,
  styled,
  useTheme,
  linearProgressClasses
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import SubscriptionsTwoToneIcon from '@mui/icons-material/SubscriptionsTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import AssessmentTwoToneIcon from '@mui/icons-material/AssessmentTwoTone';
import Label from 'src/components/Label';

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
            background: ${theme.colors.gradients.orange1};
        }
    `
);

const LinearProgressWhite = styled(LinearProgress)(
  ({ theme }) => `
        height: 10px;
        border-radius: ${theme.general.borderRadiusSm};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.alpha.trueWhite[100], 0.1)};
            box-shadow: inset 0 1px 2px ${alpha(
              theme.colors.alpha.trueWhite[100],
              0.2
            )};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusSm};
            background: ${theme.colors.alpha.trueWhite[100]};
        }
    `
);

const LinearProgressError = styled(LinearProgress)(
  ({ theme }) => `
        height: 10px;
        border-radius: ${theme.general.borderRadiusSm};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.error.main, 0.1)};
            box-shadow: inset 0 1px 2px ${alpha(theme.colors.error.dark, 0.2)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusSm};
            background: ${theme.colors.error.main};
        }
    `
);

const AvatarError = styled(Avatar)(
  ({ theme }) => `
        background-color: ${theme.colors.error.main};
        color: ${theme.palette.getContrastText(theme.colors.error.main)};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
        box-shadow: ${theme.colors.shadows.error};
  `
);

const AvatarPrimary = styled(Avatar)(
  ({ theme }) => `
        background-color: ${theme.colors.primary.main};
        color: ${theme.palette.getContrastText(theme.colors.primary.main)};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
        box-shadow: ${theme.colors.shadows.primary};
  `
);

const AvatarWarning = styled(Avatar)(
  ({ theme }) => `
        background-color: ${theme.colors.warning.main};
        color:  ${theme.palette.warning.contrastText};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
        box-shadow: ${theme.colors.shadows.warning};
  `
);

const ButtonWrapper = styled(Button)(
  ({ theme }) => `
    transform: translateY(0px);
    border-radius: 50px;
    box-shadow: 0 .113rem .4rem ${alpha(
      theme.colors.alpha.black[100],
      0.1
    )}, 0 .126rem .225rem ${alpha(theme.colors.alpha.black[100], 0.08)};
    transition: ${theme.transitions.create(['transform', 'box-shadow'])};
    font-weight: normal;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 .413rem .6rem ${alpha(
          theme.colors.alpha.black[100],
          0.2
        )}, 0 .126rem .2rem ${alpha(theme.colors.alpha.black[100], 0.08)};
    }
    
    &:active {
        transform: translateY(-2px);
        box-shadow: none;
    }
  `
);

function Block10() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            p: 3
          }}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <AvatarWarning variant="rounded">
              <AssessmentTwoToneIcon />
            </AvatarWarning>
            <Label color="warning">
              <b>+56.43%</b>
            </Label>
          </Box>
          <Typography
            sx={{
              mt: 3,
              mb: 2
            }}
            variant="h3"
          >
            {t('The Ultimate UI Design System at your fingertips!')}
          </Typography>
          <Typography variant="subtitle2">
            {t(
              'High performance React template built with lots of powerful components across multiple product niches for fast & perfect apps development processes'
            )}
            .
          </Typography>
          <LinearProgressWrapper
            sx={{
              my: 3
            }}
            variant="determinate"
            value={67.5}
          />
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <ButtonWrapper
              sx={{
                background: `${theme.colors.warning.main}`,
                color: `${theme.palette.getContrastText(
                  theme.colors.warning.dark
                )}`,

                '&:hover': {
                  background: `${theme.colors.warning.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.warning.dark
                  )}`
                }
              }}
              size="small"
              variant="contained"
            >
              {t('View project')}
            </ButtonWrapper>
            <Typography
              sx={{
                color: `${theme.colors.info.main}`
              }}
              variant="subtitle2"
            >
              {t('In progress')}
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            p: 3
          }}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <AvatarError variant="rounded">
              <SubscriptionsTwoToneIcon />
            </AvatarError>
            <Label color="error">
              <b>-22.44%</b>
            </Label>
          </Box>
          <Typography
            sx={{
              mt: 3,
              mb: 2
            }}
            variant="h3"
          >
            {t('The Ultimate UI Design System at your fingertips!')}
          </Typography>
          <Typography variant="subtitle2">
            {t(
              'High performance React template built with lots of powerful components across multiple product niches for fast & perfect apps development processes'
            )}
            .
          </Typography>
          <LinearProgressError
            sx={{
              my: 3
            }}
            variant="determinate"
            value={67.5}
          />
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <ButtonWrapper
              sx={{
                background: `${theme.colors.error.main}`,
                color: `${theme.palette.getContrastText(
                  theme.colors.error.dark
                )}`,

                '&:hover': {
                  background: `${theme.colors.error.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.error.dark
                  )}`
                }
              }}
              size="small"
              variant="contained"
            >
              {t('View project')}
            </ButtonWrapper>
            <Typography
              sx={{
                color: `${theme.colors.error.main}`
              }}
              variant="subtitle2"
            >
              {t('Overdue')}
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            background: `${theme.colors.gradients.blue2}`,
            p: 3
          }}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <AvatarPrimary variant="rounded">
              <MonetizationOnTwoToneIcon />
            </AvatarPrimary>
            <Label color="black">
              <b>+22.54%</b>
            </Label>
          </Box>
          <Typography
            sx={{
              color: `${theme.colors.alpha.trueWhite[100]}`,
              mt: 3,
              mb: 2
            }}
            variant="h3"
          >
            {t('The Ultimate UI Design System at your fingertips!')}
          </Typography>
          <Typography
            sx={{
              color: `${theme.colors.alpha.trueWhite[70]}`
            }}
            variant="subtitle2"
          >
            {t(
              'High performance React template built with lots of powerful components across multiple product niches for fast & perfect apps development processes'
            )}
            .
          </Typography>
          <LinearProgressWhite
            sx={{
              my: 3
            }}
            variant="determinate"
            value={34.5}
          />
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <ButtonWrapper
              sx={{
                background: `${theme.colors.primary.main}`,
                color: `${theme.palette.getContrastText(
                  theme.colors.primary.dark
                )}`,

                '&:hover': {
                  background: `${theme.colors.primary.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.primary.dark
                  )}`
                }
              }}
              size="small"
              variant="contained"
            >
              {t('View project')}
            </ButtonWrapper>
            <Typography
              sx={{
                color: `${theme.colors.alpha.trueWhite[70]}`
              }}
              variant="subtitle2"
            >
              Finished
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Block10;
