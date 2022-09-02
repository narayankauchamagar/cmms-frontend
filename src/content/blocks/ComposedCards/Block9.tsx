import { ChangeEvent, useState } from 'react';
import {
  Box,
  Grid,
  Card,
  Tooltip,
  Avatar,
  AvatarGroup,
  CardMedia,
  CardActionArea,
  LinearProgress,
  Typography,
  Tabs,
  IconButton,
  Divider,
  TextField,
  Button,
  Link,
  InputAdornment,
  Tab,
  Checkbox,
  FormControlLabel,
  alpha,
  styled,
  useTheme
} from '@mui/material';
import Text from 'src/components/Text';

import { useTranslation } from 'react-i18next';
import Label from 'src/components/Label';
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';
import BusinessCenterTwoToneIcon from '@mui/icons-material/BusinessCenterTwoTone';

import { Link as RouterLink } from 'react-router-dom';

const TabsWrapper = styled(Tabs)(
  ({ theme }) => `
        overflow: visible !important;

        .MuiTabs-scroller {
            overflow: visible !important;
        }

        .MuiButtonBase-root {
            text-transform: uppercase;
            font-size: ${theme.typography.pxToRem(12)};

            &:last-child {
                margin-right: 0;
            }
        }
    `
);

const BoxComposed = styled(Box)(
  () => `
    position: relative;
  `
);

const BoxComposedContent = styled(Box)(
  ({ theme }) => `
    position: relative;
    z-index: 7;

    .MuiTypography-root {
        color: ${theme.palette.primary.contrastText};

        & + .MuiTypography-root {
            color: ${alpha(theme.palette.primary.contrastText, 0.7)};
        }
    }
    
  `
);

const BoxComposedImage = styled(Box)(
  () => `
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
    filter: grayscale(80%);
    background-size: cover;
    height: 100%;
    width: 100%;
    border-radius: inherit;
  `
);

const BoxComposedBg = styled(Box)(
  () => `
    position: absolute;
    left: 0;
    top: 0;
    z-index: 6;
    height: 100%;
    width: 100%;
    border-radius: inherit;
  `
);

const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
      background: transparent;
      transition: ${theme.transitions.create(['all'])};
      color: ${theme.colors.alpha.trueWhite[70]};
      border-radius: 50px;
  
      &:hover {
        background: transparent;
        color: ${theme.colors.alpha.trueWhite[100]};
      }
  `
);

const DividerPrimary = styled(Divider)(
  ({ theme }) => `
      width: 50px;
      background: ${theme.colors.primary.main};
      height: 6px;
      border-radius: 50px;
  `
);

const DividerWarning = styled(Divider)(
  ({ theme }) => `
      width: 50px;
      background: ${theme.colors.warning.main};
      height: 6px;
      border-radius: 50px;
  `
);

const DividerSuccess = styled(Divider)(
  ({ theme }) => `
      width: 50px;
      background: ${theme.colors.success.main};
      height: 6px;
      border-radius: 50px;
  `
);

const CardWrapper = styled(Card)(
  ({ theme }) => `
      background: ${alpha(theme.colors.alpha.black[10], 0.05)};
      box-shadow: none;
  `
);

const ButtonWrapper = styled(Button)(
  ({ theme }) => `
      background: ${theme.colors.alpha.white[100]};
  `
);

const LabelPrimary = styled(Box)(
  ({ theme }) => `
      font-weight: bold;
      border-radius: ${theme.general.borderRadiusSm};
      background: ${theme.colors.primary.main};
      text-transform: uppercase;
      font-size: ${theme.typography.pxToRem(10)};
      padding: ${theme.spacing(0.5, 1.5)};
      color: ${theme.palette.primary.contrastText};
  `
);

const LabelError = styled(Box)(
  ({ theme }) => `
      font-weight: bold;
      border-radius: ${theme.general.borderRadiusSm};
      background: ${theme.colors.error.main};
      text-transform: uppercase;
      font-size: ${theme.typography.pxToRem(10)};
      padding: ${theme.spacing(0.5, 1.5)};
      color: ${theme.palette.error.contrastText};
  `
);

const DividerVertialPrimary = styled(Box)(
  ({ theme }) => `
    height: 60%;
    width: 6px;
    left: -3px;
    border-radius: 50px;
    position: absolute;
    top: 20%;
    background: ${theme.colors.primary.main};
  `
);

const DividerVertialSuccess = styled(Box)(
  ({ theme }) => `
    height: 60%;
    width: 6px;
    left: -3px;
    border-radius: 50px;
    position: absolute;
    top: 20%;
    background: ${theme.colors.success.main};
  `
);

function Block9() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const [currentTab, setCurrentTab] = useState<string>('overview');

  const tabs = [
    { value: 'overview', label: t('Overview') },
    { value: 'signin', label: t('Sign in') },
    { value: 'recent_activity', label: t('Recent activity') }
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  return (
    <Card>
      <Grid container spacing={0}>
        <Grid item xs={12} xl={5}>
          <BoxComposed
            display="flex"
            alignItems="center"
            sx={{
              minHeight: '100%',
              background: `${theme.colors.gradients.pink1}`
            }}
          >
            <BoxComposedBg
              sx={{
                opacity: 0.6,
                background: `${theme.colors.gradients.blue1}`
              }}
            />
            <BoxComposedImage
              sx={{
                opacity: 0.4,
                backgroundImage:
                  'url("/static/images/placeholders/covers/1.jpg")'
              }}
            />
            <BoxComposedContent px={8} pt={8} pb={4}>
              <Box display="flex" alignItems="center">
                <Label color="black">
                  <Typography
                    fontWeight="bold"
                    sx={{
                      px: 1,
                      fontSize: `${theme.typography.pxToRem(10)}`,
                      textTransform: 'uppercase'
                    }}
                  >
                    {t('New release')}
                  </Typography>
                </Label>
                <Tooltip
                  arrow
                  title={t('This is a helper placeholder')}
                  placement="right"
                >
                  <IconButtonWrapper
                    sx={{
                      ml: 0.5
                    }}
                  >
                    <HelpTwoToneIcon fontSize="small" />
                  </IconButtonWrapper>
                </Tooltip>
              </Box>
              <Typography
                lineHeight="1.4"
                sx={{
                  pt: 3,
                  pb: 2,
                  fontSize: `${theme.typography.pxToRem(32)}`
                }}
                variant="h1"
              >
                {t('The Ultimate UI Design System at your fingertips!')}
              </Typography>
              <Typography lineHeight="1.5" fontWeight="normal" variant="h4">
                {t(
                  'High performance React template built with lots of powerful components across multiple product niches for fast & perfect apps development processes'
                )}
                .
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 5
                }}
                endIcon={<ArrowForwardTwoToneIcon />}
                color="warning"
              >
                {t('Browse templates')}
              </Button>

              <Box
                mt={5}
                sx={{
                  textAlign: 'center'
                }}
              >
                <Tooltip arrow placement="top" title="Facebook">
                  <IconButtonWrapper>
                    <FacebookIcon fontSize="small" />
                  </IconButtonWrapper>
                </Tooltip>
                <Tooltip arrow placement="top" title="Twitter">
                  <IconButtonWrapper>
                    <TwitterIcon fontSize="small" />
                  </IconButtonWrapper>
                </Tooltip>
                <Tooltip arrow placement="top" title="Instagram">
                  <IconButtonWrapper>
                    <InstagramIcon fontSize="small" />
                  </IconButtonWrapper>
                </Tooltip>
              </Box>
            </BoxComposedContent>
          </BoxComposed>
        </Grid>
        <Grid item xs={12} xl={7}>
          <Box py={3} px={4}>
            <TabsWrapper
              centered
              onChange={handleTabsChange}
              value={currentTab}
              variant="fullWidth"
              textColor="primary"
              indicatorColor="primary"
            >
              {tabs.map((tab) => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              ))}
            </TabsWrapper>
          </Box>
          <Divider />
          {currentTab === 'overview' && (
            <>
              <Box p={4}>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={4}>
                    <Card
                      variant="outlined"
                      sx={{
                        p: 2
                      }}
                    >
                      <Typography
                        variant="h1"
                        sx={{
                          fontSize: `${theme.typography.pxToRem(40)}`
                        }}
                      >
                        31
                      </Typography>
                      <DividerPrimary
                        sx={{
                          my: 2
                        }}
                      />
                      <Typography
                        variant="caption"
                        fontWeight="bold"
                        sx={{
                          fontSize: `${theme.typography.pxToRem(14)}`
                        }}
                      >
                        Implemented
                        <br />
                        bugfixes
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Card
                      variant="outlined"
                      sx={{
                        p: 2
                      }}
                    >
                      <Typography
                        variant="h1"
                        sx={{
                          fontSize: `${theme.typography.pxToRem(40)}`
                        }}
                      >
                        68
                      </Typography>
                      <DividerSuccess
                        sx={{
                          my: 2
                        }}
                      />
                      <Typography
                        variant="caption"
                        fontWeight="bold"
                        sx={{
                          fontSize: `${theme.typography.pxToRem(14)}`
                        }}
                      >
                        Unresolved
                        <br />
                        tickets
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Card
                      variant="outlined"
                      sx={{
                        p: 2
                      }}
                    >
                      <Typography
                        variant="h1"
                        sx={{
                          fontSize: `${theme.typography.pxToRem(40)}`
                        }}
                      >
                        52
                      </Typography>
                      <DividerWarning
                        sx={{
                          my: 2
                        }}
                      />
                      <Typography
                        variant="caption"
                        fontWeight="bold"
                        sx={{
                          fontSize: `${theme.typography.pxToRem(14)}`
                        }}
                      >
                        Support
                        <br />
                        requests
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item xs={12}>
                    <Card
                      variant="outlined"
                      sx={{
                        p: 2
                      }}
                    >
                      <Text color="error">
                        <AccountBalanceWalletTwoToneIcon fontSize="large" />
                      </Text>
                      <Box mt={1} mb={2}>
                        <Typography component="span" variant="h3">
                          36 359
                        </Typography>{' '}
                        <Typography component="span" variant="subtitle2">
                          clicks
                        </Typography>
                      </Box>
                      <LinearProgress />
                    </Card>
                  </Grid>
                  <Grid item xs={12}>
                    <Box textAlign="center">
                      <Button variant="outlined">
                        {t('View all open tickets')}
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </>
          )}
          {currentTab === 'signin' && (
            <>
              <Box p={4}>
                <CardWrapper
                  sx={{
                    p: 3,
                    textAlign: 'center'
                  }}
                >
                  <Typography
                    sx={{
                      mb: 2
                    }}
                    color="text.secondary"
                    variant="body2"
                  >
                    {t('Sign in with')}
                  </Typography>
                  <Tooltip arrow title={t('Sign in with Google')}>
                    <ButtonWrapper size="large" variant="outlined">
                      <img
                        style={{ height: 28 }}
                        alt="Google"
                        src="/static/images/logo/google.svg"
                      />
                    </ButtonWrapper>
                  </Tooltip>
                  <Tooltip arrow title={t('Sign in with Amplify')}>
                    <ButtonWrapper
                      sx={{
                        mx: 1.5
                      }}
                      size="large"
                      variant="outlined"
                    >
                      <img
                        style={{ height: 28 }}
                        alt="Amplify"
                        src="/static/images/logo/amplify.svg"
                      />
                    </ButtonWrapper>
                  </Tooltip>
                  <Tooltip arrow title={t('Sign in with Auth0')}>
                    <ButtonWrapper size="large" variant="outlined">
                      <img
                        style={{ height: 28 }}
                        alt="Amplify"
                        src="/static/images/logo/auth0.svg"
                      />
                    </ButtonWrapper>
                  </Tooltip>
                </CardWrapper>
                <Typography
                  sx={{
                    py: 3
                  }}
                  color="text.secondary"
                  textAlign="center"
                  variant="body2"
                >
                  {t('or sign in with your credentials')}
                </Typography>
                <TextField
                  sx={{
                    mb: 3
                  }}
                  fullWidth
                  variant="outlined"
                  id="textfield-email"
                  label="Email address"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailTwoToneIcon />
                      </InputAdornment>
                    )
                  }}
                />
                <TextField
                  sx={{
                    mb: 3
                  }}
                  fullWidth
                  variant="outlined"
                  id="textfield-password"
                  label="Password"
                  type="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockTwoToneIcon />
                      </InputAdornment>
                    )
                  }}
                />
                <Box
                  alignItems="center"
                  display="flex"
                  justifyContent="space-between"
                >
                  <FormControlLabel
                    control={<Checkbox name="terms" color="primary" />}
                    label={
                      <>
                        <Typography variant="body2">
                          {t('Keep me signed in')}
                        </Typography>
                      </>
                    }
                  />
                  <Link component="a" href="#">
                    <b>{t('Lost password?')}</b>
                  </Link>
                </Box>
                <Box
                  mt={3}
                  sx={{
                    textAlign: 'center'
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      fontWeight: 'bold'
                    }}
                    size="large"
                  >
                    Sign in
                  </Button>
                </Box>
              </Box>
            </>
          )}
          {currentTab === 'recent_activity' && (
            <>
              <Box p={4}>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Card
                      sx={{
                        overflow: 'visible',
                        position: 'relative',
                        p: 2
                      }}
                      variant="outlined"
                    >
                      <DividerVertialPrimary />
                      <Link
                        color="text.primary"
                        component="a"
                        variant="h4"
                        fontWeight="normal"
                        href="#"
                      >
                        Presentation site design
                      </Link>
                      <Box mt={1.5} display="flex" alignItems="center">
                        <LabelPrimary>{t('On hold')}</LabelPrimary>
                        <Text flex color="error">
                          <AccessTimeTwoToneIcon
                            sx={{
                              ml: 1,
                              mr: 0.5
                            }}
                            fontSize="small"
                          />
                          2:35 pm
                        </Text>
                      </Box>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card
                      sx={{
                        overflow: 'visible',
                        position: 'relative',
                        p: 2
                      }}
                      variant="outlined"
                    >
                      <DividerVertialSuccess />
                      <Link
                        color="text.primary"
                        component="a"
                        variant="h4"
                        fontWeight="normal"
                        href="#"
                      >
                        Create UI mockups
                      </Link>
                      <Box mt={1.5} display="flex" alignItems="center">
                        <LabelError>{t('Delayed')}</LabelError>
                        <Text flex color="secondary">
                          <AccessTimeTwoToneIcon
                            sx={{
                              ml: 1,
                              mr: 0.5
                            }}
                            fontSize="small"
                          />
                          09:40 pm
                        </Text>
                      </Box>
                    </Card>
                  </Grid>
                </Grid>

                <Timeline
                  sx={{
                    p: 0,
                    mx: 1,
                    mt: 4,
                    mb: 0
                  }}
                >
                  <TimelineItem
                    sx={{
                      p: 0
                    }}
                  >
                    <TimelineSeparator
                      sx={{
                        position: 'relative'
                      }}
                    >
                      <TimelineDot
                        sx={{
                          marginTop: 0,
                          left: `-${theme.spacing(2.1)} !important`,
                          top: `-${theme.spacing(0.5)}`
                        }}
                        color="success"
                      >
                        <BusinessCenterTwoToneIcon />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent
                      sx={{
                        pl: 3,
                        pb: 4
                      }}
                    >
                      <Typography variant="h5" gutterBottom>
                        Java exam day
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Bill Clinton's presidential scandal makes it online.
                      </Typography>
                      <Box display="flex" mt={1} alignItems="flex-start">
                        <AvatarGroup max={4}>
                          <Tooltip arrow title="Remy Sharp">
                            <Avatar
                              component={RouterLink}
                              sx={{
                                width: 32,
                                height: 32
                              }}
                              to="#"
                              alt="Remy Sharp"
                              src="/static/images/avatars/1.jpg"
                            />
                          </Tooltip>
                          <Tooltip arrow title="Travis Howard">
                            <Avatar
                              component={RouterLink}
                              sx={{
                                width: 32,
                                height: 32
                              }}
                              to="#"
                              alt="Travis Howard"
                              src="/static/images/avatars/2.jpg"
                            />
                          </Tooltip>
                          <Tooltip arrow title="Cindy Baker">
                            <Avatar
                              component={RouterLink}
                              sx={{
                                width: 32,
                                height: 32
                              }}
                              to="#"
                              alt="Cindy Baker"
                              src="/static/images/avatars/3.jpg"
                            />
                          </Tooltip>
                          <Tooltip arrow title="Cindy Baker">
                            <Avatar
                              component={RouterLink}
                              sx={{
                                width: 32,
                                height: 32
                              }}
                              to="#"
                              alt="Cindy Baker"
                              src="/static/images/avatars/4.jpg"
                            />
                          </Tooltip>
                          <Tooltip arrow title="Agnes Walker">
                            <Avatar
                              component={RouterLink}
                              sx={{
                                width: 32,
                                height: 32
                              }}
                              to="#"
                              alt="Agnes Walker"
                              src="/static/images/avatars/5.jpg"
                            />
                          </Tooltip>
                        </AvatarGroup>
                      </Box>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem
                    sx={{
                      p: 0
                    }}
                  >
                    <TimelineSeparator
                      sx={{
                        position: 'relative'
                      }}
                    >
                      <TimelineDot
                        sx={{
                          marginTop: 0,
                          left: `-${theme.spacing(2.1)} !important`,
                          top: `-${theme.spacing(0.5)}`
                        }}
                        color="primary"
                      >
                        <AssignmentIndTwoToneIcon />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent
                      sx={{
                        pl: 3,
                        pb: 4
                      }}
                    >
                      <Typography variant="h5" gutterBottom>
                        Business investor meeting
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Mosaic, the first graphical browser, is introduced to
                        the average consumer.
                      </Typography>
                      <Box display="flex" mt={2} alignItems="flex-start">
                        <Card
                          sx={{
                            mr: 2
                          }}
                        >
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="64"
                              image="/static/images/placeholders/fitness/1.jpg"
                              alt="..."
                            />
                          </CardActionArea>
                        </Card>
                        <Card
                          sx={{
                            mr: 2
                          }}
                        >
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="64"
                              image="/static/images/placeholders/fitness/2.jpg"
                              alt="..."
                            />
                          </CardActionArea>
                        </Card>
                        <Card
                          sx={{
                            mr: 2
                          }}
                        >
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="64"
                              image="/static/images/placeholders/fitness/3.jpg"
                              alt="..."
                            />
                          </CardActionArea>
                        </Card>
                      </Box>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem
                    sx={{
                      p: 0
                    }}
                  >
                    <TimelineSeparator
                      sx={{
                        position: 'relative'
                      }}
                    >
                      <TimelineDot
                        sx={{
                          marginTop: 0,
                          top: theme.spacing(1.2)
                        }}
                        variant="outlined"
                        color="error"
                      />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent
                      sx={{
                        pl: 3,
                        pb: 4
                      }}
                    >
                      <Typography variant="h5" gutterBottom>
                        Learning round table gathering
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        First ever iPod launches.
                      </Typography>
                      <Box display="flex" mt={1} alignItems="flex-start">
                        <Button size="small" variant="contained">
                          {t('Submit report')}
                        </Button>
                      </Box>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </Box>
            </>
          )}
        </Grid>
      </Grid>
    </Card>
  );
}

export default Block9;
