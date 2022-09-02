import {
  Box,
  Card,
  Typography,
  Link,
  Grid,
  Tooltip,
  Avatar,
  alpha,
  CardActionArea,
  IconButton,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import Text from 'src/components/Text';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import PeopleOutlineTwoToneIcon from '@mui/icons-material/PeopleOutlineTwoTone';
import DashboardCustomizeTwoToneIcon from '@mui/icons-material/DashboardCustomizeTwoTone';
import ContactSupportTwoToneIcon from '@mui/icons-material/ContactSupportTwoTone';

const CardActions = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(1.5)};
    top: ${theme.spacing(1.5)};
    z-index: 7;
  `
);

const LabelWrapper = styled(Box)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(13)};
    font-weight: bold;
    text-transform: uppercase;
    border-radius: ${theme.general.borderRadiusSm};
    padding: ${theme.spacing(0.9, 1.5, 0.7)};
    line-height: 1;
  `
);

const CardWrapper = styled(Box)(
  ({ theme }) => `
      background: ${alpha(theme.colors.primary.main, 0.05)};
  `
);

const CardActionAreaWrapper = styled(CardActionArea)(
  ({ theme }) => `
        text-align: center;
        background: ${alpha(theme.colors.primary.main, 0.03)};

        .MuiTouchRipple-root {
          opacity: .2;
        }
  
        .MuiCardActionArea-focusHighlight {
          background: ${theme.colors.primary.main};
        }
  
        &:hover {
          .MuiCardActionArea-focusHighlight {
            opacity: .05;
          }
        }
  `
);

const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
        transform: translateY(0px);
        transition: ${theme.transitions.create(['color', 'transform'])};

        .MuiSvgIcon-root {
            transform: scale(1);
            transition: ${theme.transitions.create(['transform'])};
        }

        &:hover {
            transform: translateY(-2px);
    
            .MuiSvgIcon-root {
                transform: scale(1.3);
            }
        }
  `
);

function Block12() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card variant="outlined">
      <CardWrapper
        sx={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          pt: 3,
          px: 3,
          pb: 7
        }}
      >
        <CardActions>
          <IconButton size="small" color="primary">
            <MoreHorizTwoToneIcon />
          </IconButton>
        </CardActions>
        <Avatar
          sx={{
            width: `${theme.spacing(14)}`,
            height: `${theme.spacing(14)}`,
            mb: 1.5,
            border: `${theme.colors.alpha.white[100]} solid 4px`,
            boxShadow: `0 2rem 8rem 0 ${alpha(
              theme.colors.alpha.black[100],
              0.05
            )}, 
                            0 0.6rem 1.6rem ${alpha(
                              theme.colors.alpha.black[100],
                              0.15
                            )}, 
                            0 0.2rem 0.2rem ${alpha(
                              theme.colors.alpha.black[100],
                              0.1
                            )}`
          }}
          src="/static/images/avatars/3.jpg"
        />
        <Link
          href="#"
          color="text.primary"
          underline="none"
          sx={{
            transition: `${theme.transitions.create(['color'])}`,
            fontSize: `${theme.typography.pxToRem(17)}`,

            '&:hover': {
              color: `${theme.colors.primary.main}`
            }
          }}
          variant="h4"
        >
          Shania O'Brien
        </Link>
        <Box mt={1} mb={1.5}>
          <LabelWrapper
            sx={{
              background: `${theme.colors.error.main}`,
              color: `${theme.palette.getContrastText(theme.colors.error.dark)}`
            }}
          >
            {t('Offline')}
          </LabelWrapper>
        </Box>
        <Typography variant="subtitle2">
          {t(
            'High performance React template built with lots of powerful components across multiple product niches for fast & perfect apps development processes'
          )}
          .
        </Typography>
      </CardWrapper>
      <Box p={3}>
        <Box
          sx={{
            textAlign: 'center',
            mt: `-${theme.spacing(7)}`,
            mb: 3
          }}
        >
          <Tooltip arrow placement="top" title="Facebook">
            <IconButtonWrapper
              sx={{
                boxShadow: `${theme.colors.shadows.primary}`,
                background: `${theme.colors.primary.main}`,
                color: `${theme.palette.getContrastText(
                  theme.colors.primary.main
                )}`,

                '&:hover': {
                  background: `${theme.colors.primary.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.primary.main
                  )}`
                },
                borderRadius: 50,
                width: theme.spacing(8),
                height: theme.spacing(8)
              }}
              color="primary"
              size="large"
            >
              <FacebookIcon fontSize="small" />
            </IconButtonWrapper>
          </Tooltip>
          <Tooltip arrow placement="top" title="Twitter">
            <IconButtonWrapper
              sx={{
                boxShadow: `${theme.colors.shadows.primary}`,
                background: `${theme.colors.primary.main}`,
                color: `${theme.palette.getContrastText(
                  theme.colors.primary.main
                )}`,

                '&:hover': {
                  background: `${theme.colors.primary.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.primary.main
                  )}`
                },
                borderRadius: 50,
                mx: 1.5,
                width: theme.spacing(8),
                height: theme.spacing(8)
              }}
              color="primary"
              size="large"
            >
              <TwitterIcon fontSize="small" />
            </IconButtonWrapper>
          </Tooltip>
          <Tooltip arrow placement="top" title="Instagram">
            <IconButtonWrapper
              sx={{
                boxShadow: `${theme.colors.shadows.primary}`,
                background: `${theme.colors.primary.main}`,
                color: `${theme.palette.getContrastText(
                  theme.colors.primary.main
                )}`,

                '&:hover': {
                  background: `${theme.colors.primary.main}`,
                  color: `${theme.palette.getContrastText(
                    theme.colors.primary.main
                  )}`
                },
                borderRadius: 50,
                width: theme.spacing(8),
                height: theme.spacing(8)
              }}
              color="primary"
              size="large"
            >
              <InstagramIcon fontSize="small" />
            </IconButtonWrapper>
          </Tooltip>
        </Box>
        <Box p={2}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined">
                <CardActionAreaWrapper
                  sx={{
                    p: 2
                  }}
                >
                  <Text color="warning">
                    <AccountTreeTwoToneIcon
                      sx={{
                        mb: 1
                      }}
                    />
                  </Text>
                  <Typography variant="h4">{t('Projects')}</Typography>
                  <Typography variant="subtitle2" noWrap>
                    {t('Newest tasks')}
                  </Typography>
                </CardActionAreaWrapper>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined">
                <CardActionAreaWrapper
                  sx={{
                    p: 2
                  }}
                >
                  <Text color="success">
                    <ContactSupportTwoToneIcon
                      sx={{
                        mb: 1
                      }}
                    />
                  </Text>
                  <Typography variant="h4">{t('Helpdesk')}</Typography>
                  <Typography variant="subtitle2" noWrap>
                    {t('Tickets overview')}
                  </Typography>
                </CardActionAreaWrapper>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined">
                <CardActionAreaWrapper
                  sx={{
                    p: 2
                  }}
                >
                  <Text color="primary">
                    <DashboardCustomizeTwoToneIcon
                      sx={{
                        mb: 1
                      }}
                    />
                  </Text>
                  <Typography variant="h4">{t('Dashboard')}</Typography>
                  <Typography variant="subtitle2" noWrap>
                    {t('Daily operations')}
                  </Typography>
                </CardActionAreaWrapper>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined">
                <CardActionAreaWrapper
                  sx={{
                    p: 2
                  }}
                >
                  <Text color="error">
                    <PeopleOutlineTwoToneIcon
                      sx={{
                        mb: 1
                      }}
                    />
                  </Text>
                  <Typography variant="h4">{t('Customers')}</Typography>
                  <Typography variant="subtitle2" noWrap>
                    {t('Manage data')}
                  </Typography>
                </CardActionAreaWrapper>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Card>
  );
}

export default Block12;
