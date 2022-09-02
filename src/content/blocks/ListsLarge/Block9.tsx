import {
  Box,
  ListItemAvatar,
  ListItemText,
  Divider,
  IconButton,
  List,
  Card,
  Tooltip,
  alpha,
  LinearProgress,
  Typography,
  Avatar,
  styled,
  ListItemButton,
  useTheme,
  linearProgressClasses
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import Text from 'src/components/Text';

const LinearProgressError = styled(LinearProgress)(
  ({ theme }) => `
        height: 6px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background: ${alpha(theme.colors.alpha.black[100], 0.1)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background: ${theme.colors.gradients.purple3};
        }
    `
);

const LinearProgressWarning = styled(LinearProgress)(
  ({ theme }) => `
        height: 6px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background: ${alpha(theme.colors.alpha.black[100], 0.1)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background: ${theme.colors.gradients.orange1};
        }
    `
);

const LinearProgressSuccess = styled(LinearProgress)(
  ({ theme }) => `
        height: 6px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background: ${alpha(theme.colors.alpha.black[100], 0.1)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background: ${theme.colors.gradients.green1};
        }
    `
);

const ListItemButtonWrapper = styled(ListItemButton)(
  ({ theme }) => `
    transition: ${theme.transitions.create(['transform', 'box-shadow'])};
    transform: scale(1);
    background: ${theme.colors.alpha.white[100]};
    position: relative;
    z-index: 5;

    &:hover {
        border-radius: ${theme.general.borderRadius};
        background: ${theme.colors.alpha.white[100]};
        z-index: 6;
        box-shadow: 
            0 0.56875rem 3.3rem ${alpha(theme.colors.alpha.black[100], 0.05)},
            0 0.9975rem 2.4rem ${alpha(theme.colors.alpha.black[100], 0.07)},
            0 0.35rem 1rem ${alpha(theme.colors.alpha.black[100], 0.1)},
            0 0.225rem 0.8rem ${alpha(theme.colors.alpha.black[100], 0.15)};
        transform: scale(1.08);
    }
  `
);

function Block9() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      sx={{
        overflow: 'visible'
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={2}
      >
        <Box>
          <Typography
            variant="caption"
            fontWeight="bold"
            sx={{
              fontSize: `${theme.typography.pxToRem(12)}`
            }}
          >
            {t('Status')}
          </Typography>
          <Typography variant="h4">{t('Team Performance')}</Typography>
        </Box>
        <IconButton
          size="small"
          color="primary"
          sx={{
            alignSelf: 'center',
            backgroundColor: `${theme.colors.primary.lighter}`,
            transition: `${theme.transitions.create(['all'])}`,

            '&:hover': {
              backgroundColor: `${theme.colors.primary.main}`,
              color: `${theme.palette.getContrastText(
                theme.colors.primary.main
              )}`
            }
          }}
        >
          <MoreVertTwoToneIcon fontSize="small" />
        </IconButton>
      </Box>
      <List disablePadding>
        <Divider />
        <ListItemButtonWrapper
          sx={{
            display: { xs: 'block', sm: 'flex' },
            py: 2,
            px: 2.5
          }}
        >
          <ListItemAvatar
            sx={{
              minWidth: 'auto',
              mr: 2,
              mb: { xs: 2, sm: 0 }
            }}
          >
            <Tooltip
              arrow
              placement="top"
              title={t('Task assigned to') + ' Gary Albright'}
            >
              <Avatar
                sx={{
                  fontSize: `${theme.typography.pxToRem(15)}`,
                  background: `${theme.colors.warning.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.warning.dark
                  )}`,
                  width: 56,
                  height: 56
                }}
              >
                GA
              </Avatar>
            </Tooltip>
          </ListItemAvatar>
          <ListItemText
            disableTypography
            primary={
              <Typography color="text.primary" variant="h5">
                Presentation UI
              </Typography>
            }
            secondary={
              <>
                <LinearProgressSuccess
                  sx={{
                    mt: 1,
                    mb: 0.5
                  }}
                  variant="determinate"
                  value={73}
                />
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                    sx={{
                      fontSize: `${theme.typography.pxToRem(12)}`
                    }}
                    variant="subtitle2"
                  >
                    <Text color="success">{t('Completed')}</Text>
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: `${theme.typography.pxToRem(12)}`
                    }}
                    variant="subtitle2"
                  >
                    15<sup>th</sup> Sep
                  </Typography>
                </Box>
              </>
            }
          />
        </ListItemButtonWrapper>
        <ListItemButtonWrapper
          sx={{
            display: { xs: 'block', sm: 'flex' },
            py: 2,
            px: 2.5
          }}
        >
          <ListItemAvatar
            sx={{
              minWidth: 'auto',
              mr: 2,
              mb: { xs: 2, sm: 0 }
            }}
          >
            <Tooltip
              arrow
              placement="top"
              title={t('Task assigned to') + ' Therry Hefaistos'}
            >
              <Avatar
                sx={{
                  fontSize: `${theme.typography.pxToRem(15)}`,
                  background: `${theme.colors.gradients.blue1}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.warning.dark
                  )}`,
                  width: 56,
                  height: 56
                }}
              >
                TH
              </Avatar>
            </Tooltip>
          </ListItemAvatar>
          <ListItemText
            disableTypography
            primary={
              <Typography color="text.primary" variant="h5">
                Review Comps.
              </Typography>
            }
            secondary={
              <>
                <LinearProgressSuccess
                  sx={{
                    mt: 1,
                    mb: 0.5
                  }}
                  variant="determinate"
                  value={29}
                />
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                    sx={{
                      fontSize: `${theme.typography.pxToRem(12)}`
                    }}
                    variant="subtitle2"
                  >
                    <Text color="info">{t('In progress')}</Text>
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: `${theme.typography.pxToRem(12)}`
                    }}
                    variant="subtitle2"
                  >
                    12<sup>th</sup> Aug
                  </Typography>
                </Box>
              </>
            }
          />
        </ListItemButtonWrapper>
        <ListItemButtonWrapper
          sx={{
            display: { xs: 'block', sm: 'flex' },
            py: 2,
            px: 2.5
          }}
        >
          <ListItemAvatar
            sx={{
              minWidth: 'auto',
              mr: 2,
              mb: { xs: 2, sm: 0 }
            }}
          >
            <Tooltip
              arrow
              placement="top"
              title={t('Task assigned to') + ' EA Department'}
            >
              <Avatar
                sx={{
                  fontSize: `${theme.typography.pxToRem(15)}`,
                  background: `${theme.colors.error.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.error.main
                  )}`,
                  width: 56,
                  height: 56
                }}
              >
                EA
              </Avatar>
            </Tooltip>
          </ListItemAvatar>
          <ListItemText
            disableTypography
            primary={
              <Typography color="text.primary" variant="h5">
                Build React UI
              </Typography>
            }
            secondary={
              <>
                <LinearProgressError
                  sx={{
                    mt: 1,
                    mb: 0.5
                  }}
                  variant="determinate"
                  value={87}
                />
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                    sx={{
                      fontSize: `${theme.typography.pxToRem(12)}`
                    }}
                    variant="subtitle2"
                  >
                    <Text color="warning">{t('Delayed')}</Text>
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: `${theme.typography.pxToRem(12)}`
                    }}
                    variant="subtitle2"
                  >
                    22<sup>th</sup> Sep
                  </Typography>
                </Box>
              </>
            }
          />
        </ListItemButtonWrapper>
        <ListItemButtonWrapper
          sx={{
            display: { xs: 'block', sm: 'flex' },
            py: 2,
            px: 2.5
          }}
        >
          <ListItemAvatar
            sx={{
              minWidth: 'auto',
              mr: 2,
              mb: { xs: 2, sm: 0 }
            }}
          >
            <Tooltip
              arrow
              placement="top"
              title={t('Task assigned to') + ' Herocle Patrocle'}
            >
              <Avatar
                sx={{
                  fontSize: `${theme.typography.pxToRem(15)}`,
                  background: `${theme.colors.gradients.black2}`,
                  color: `${theme.colors.alpha.trueWhite[100]}`,
                  width: 56,
                  height: 56
                }}
              >
                HS
              </Avatar>
            </Tooltip>
          </ListItemAvatar>
          <ListItemText
            disableTypography
            primary={
              <Typography color="text.primary" variant="h5">
                Newsletters
              </Typography>
            }
            secondary={
              <>
                <LinearProgressWarning
                  sx={{
                    mt: 1,
                    mb: 0.5
                  }}
                  variant="determinate"
                  value={54}
                />
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                    sx={{
                      fontSize: `${theme.typography.pxToRem(12)}`
                    }}
                    variant="subtitle2"
                  >
                    <Text color="error">{t('Overdue')}</Text>
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: `${theme.typography.pxToRem(12)}`
                    }}
                    variant="subtitle2"
                  >
                    16<sup>th</sup> Oct
                  </Typography>
                </Box>
              </>
            }
          />
        </ListItemButtonWrapper>
      </List>
    </Card>
  );
}

export default Block9;
