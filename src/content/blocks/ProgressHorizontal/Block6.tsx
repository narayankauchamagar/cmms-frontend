import {
  Box,
  Divider,
  Button,
  LinearProgress,
  List,
  ListItem,
  Card,
  Typography,
  Avatar,
  Tooltip,
  alpha,
  styled,
  useTheme,
  linearProgressClasses
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import Scrollbar from 'src/components/Scrollbar';
import AssessmentTwoToneIcon from '@mui/icons-material/AssessmentTwoTone';

const LinearProgressInfo = styled(LinearProgress)(
  ({ theme }) => `
        height: 14px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.alpha.black[100], 0.07)};
            box-shadow: inset 0 1px 2px ${alpha(
              theme.colors.alpha.black[100],
              0.15
            )};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.info.main};
        }
    `
);
const LinearProgressPrimary = styled(LinearProgress)(
  ({ theme }) => `
        height: 14px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.alpha.black[100], 0.07)};
            box-shadow: inset 0 1px 2px ${alpha(
              theme.colors.alpha.black[100],
              0.15
            )};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.primary.main};
        }
    `
);
const LinearProgressSuccess = styled(LinearProgress)(
  ({ theme }) => `
        height: 14px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.alpha.black[100], 0.07)};
            box-shadow: inset 0 1px 2px ${alpha(
              theme.colors.alpha.black[100],
              0.15
            )};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.success.main};
        }
    `
);
const LinearProgressWarning = styled(LinearProgress)(
  ({ theme }) => `
        height: 14px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.alpha.black[100], 0.07)};
            box-shadow: inset 0 1px 2px ${alpha(
              theme.colors.alpha.black[100],
              0.15
            )};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.warning.main};
        }
    `
);
const LinearProgressError = styled(LinearProgress)(
  ({ theme }) => `
        height: 14px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.alpha.black[100], 0.07)};
            box-shadow: inset 0 1px 2px ${alpha(
              theme.colors.alpha.black[100],
              0.15
            )};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.error.main};
        }
    `
);

const CardWrapper = styled(Card)(
  ({ theme }) => `
      background: ${alpha(theme.colors.alpha.black[10], 0.02)};
      border-radius: 0;
  `
);

const ListWrapper = styled(List)(
  () => `
      .MuiListItem-root:last-of-type + .MuiDivider-root {
          display: none;
      }
  `
);

const LabelWrapper = styled(Box)(
  ({ theme }) => `
    display: inline-block;
    background: ${theme.palette.secondary.main};
    color: ${theme.palette.secondary.contrastText};
    text-transform: uppercase;
    font-size: ${theme.typography.pxToRem(10)};
    font-weight: bold;
    line-height: 23px;
    height: 22px;
    padding: ${theme.spacing(0, 2)};
    border-radius: ${theme.general.borderRadius};
  `
);

function Block6() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card variant="outlined">
      <Box
        sx={{
          background: `${theme.colors.alpha.black[5]}`
        }}
        p={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography gutterBottom variant="caption" fontWeight="bold">
            {t('Progress')}
          </Typography>
          <Typography variant="h4">{t('Users Analytics')}</Typography>
        </Box>
        <LabelWrapper>{t('Pending')}</LabelWrapper>
      </Box>
      <Divider />
      <Box
        sx={{
          height: 316
        }}
      >
        <Scrollbar>
          <ListWrapper disablePadding>
            <ListItem
              sx={{
                display: { xs: 'block', md: 'flex' },
                py: 1,
                px: 2
              }}
            >
              <Box py={1} flex={1} display="flex" alignItems="center">
                <Box>
                  <Tooltip arrow placement="top" title="Travis Howard">
                    <Avatar
                      sx={{
                        width: 46,
                        height: 46
                      }}
                      component={RouterLink}
                      to="#"
                      alt="Travis Howard"
                      src="/static/images/avatars/1.jpg"
                    />
                  </Tooltip>
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    px: 2.5
                  }}
                >
                  <LinearProgressInfo variant="determinate" value={35} />
                </Box>
                <Box
                  sx={{
                    textAlign: 'right'
                  }}
                >
                  <Typography variant="caption" fontWeight="bold">
                    {t('Total')}
                  </Typography>
                  <Typography variant="h4">$1,375</Typography>
                </Box>
              </Box>
            </ListItem>
            <Divider />
            <ListItem
              sx={{
                display: { xs: 'block', md: 'flex' },
                py: 1,
                px: 2
              }}
            >
              <Box py={1} flex={1} display="flex" alignItems="center">
                <Box>
                  <Tooltip arrow placement="top" title="Chad Wright">
                    <Avatar
                      sx={{
                        width: 46,
                        height: 46
                      }}
                      component={RouterLink}
                      to="#"
                      alt="Chad Wright"
                      src="/static/images/avatars/2.jpg"
                    />
                  </Tooltip>
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    px: 2.5
                  }}
                >
                  <LinearProgressSuccess variant="determinate" value={45} />
                </Box>
                <Box
                  sx={{
                    textAlign: 'right'
                  }}
                >
                  <Typography variant="caption" fontWeight="bold">
                    {t('Total')}
                  </Typography>
                  <Typography variant="h4">$786</Typography>
                </Box>
              </Box>
            </ListItem>
            <Divider />
            <ListItem
              sx={{
                display: { xs: 'block', md: 'flex' },
                py: 1,
                px: 2
              }}
            >
              <Box py={1} flex={1} display="flex" alignItems="center">
                <Box>
                  <Tooltip arrow placement="top" title="Alaina Henry">
                    <Avatar
                      sx={{
                        width: 46,
                        height: 46
                      }}
                      component={RouterLink}
                      to="#"
                      alt="Alaina Henry"
                      src="/static/images/avatars/3.jpg"
                    />
                  </Tooltip>
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    px: 2.5
                  }}
                >
                  <LinearProgressWarning variant="determinate" value={25} />
                </Box>
                <Box
                  sx={{
                    textAlign: 'right'
                  }}
                >
                  <Typography variant="caption" fontWeight="bold">
                    {t('Total')}
                  </Typography>
                  <Typography variant="h4">$5,695</Typography>
                </Box>
              </Box>
            </ListItem>
            <Divider />
            <ListItem
              sx={{
                display: { xs: 'block', md: 'flex' },
                py: 1,
                px: 2
              }}
            >
              <Box py={1} flex={1} display="flex" alignItems="center">
                <Box>
                  <Tooltip arrow placement="top" title="Vlad Jacobson">
                    <Avatar
                      sx={{
                        width: 46,
                        height: 46
                      }}
                      component={RouterLink}
                      to="#"
                      alt="Vlad Jacobson"
                      src="/static/images/avatars/4.jpg"
                    />
                  </Tooltip>
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    px: 2.5
                  }}
                >
                  <LinearProgressPrimary variant="determinate" value={65} />
                </Box>
                <Box
                  sx={{
                    textAlign: 'right'
                  }}
                >
                  <Typography variant="caption" fontWeight="bold">
                    {t('Total')}
                  </Typography>
                  <Typography variant="h4">$2,685</Typography>
                </Box>
              </Box>
            </ListItem>
            <Divider />
            <ListItem
              sx={{
                display: { xs: 'block', md: 'flex' },
                py: 1,
                px: 2
              }}
            >
              <Box py={1} flex={1} display="flex" alignItems="center">
                <Box>
                  <Tooltip arrow placement="top" title="Cerys Mckinney">
                    <Avatar
                      sx={{
                        width: 46,
                        height: 46
                      }}
                      component={RouterLink}
                      to="#"
                      alt="Cerys Mckinney"
                      src="/static/images/avatars/5.jpg"
                    />
                  </Tooltip>
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    px: 2.5
                  }}
                >
                  <LinearProgressError variant="determinate" value={85} />
                </Box>
                <Box
                  sx={{
                    textAlign: 'right'
                  }}
                >
                  <Typography variant="caption" fontWeight="bold">
                    {t('Total')}
                  </Typography>
                  <Typography variant="h4">$8,684</Typography>
                </Box>
              </Box>
            </ListItem>
            <Divider />
          </ListWrapper>
        </Scrollbar>
      </Box>
      <Divider />
      <CardWrapper
        elevation={0}
        sx={{
          textAlign: 'center',
          p: 2
        }}
      >
        <Button size="large" startIcon={<AssessmentTwoToneIcon />}>
          {t('Generate reports')}
        </Button>
      </CardWrapper>
    </Card>
  );
}

export default Block6;
