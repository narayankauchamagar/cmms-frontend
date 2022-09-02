import { useTranslation } from 'react-i18next';
import { SetStateAction, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Grid,
  Container,
  Card,
  Avatar,
  ListItem,
  ListItemText,
  List,
  ListItemAvatar,
  Typography,
  Divider,
  Button,
  Tabs,
  Tab,
  Tooltip,
  styled
} from '@mui/material';

import Text from 'src/components/Text';
import LaunchTwoToneIcon from '@mui/icons-material/LaunchTwoTone';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import { DE } from 'country-flag-icons/react/3x2';
import { US } from 'country-flag-icons/react/3x2';
import { ES } from 'country-flag-icons/react/3x2';
import { FR } from 'country-flag-icons/react/3x2';
import { CN } from 'country-flag-icons/react/3x2';
import { AE } from 'country-flag-icons/react/3x2';
import ActiveReferrals from 'src/content/dashboards/Analytics/ActiveReferrals';
import MonthlyGoalsTarget from 'src/content/dashboards/Fitness/MonthlyGoalsTarget';
import Transfers from 'src/content/dashboards/Banking/Transfers';
import RecentTransactions from 'src/content/dashboards/Commerce/RecentTransactions';
import Thermostat from 'src/content/dashboards/Automation/Thermostat';
import AccountSecurity from 'src/content/dashboards/Crypto/AccountSecurity';
import AppointmentsAlt from 'src/content/dashboards/Healthcare/AppointmentsAlt';
import UnresolvedTickets from 'src/content/dashboards/Helpdesk/UnresolvedTickets';
import ResourcesAlarm from 'src/content/dashboards/Monitoring/ResourcesAlarm';
import Performance from 'src/content/dashboards/Tasks/Performance';

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
    background: ${theme.colors.success.light};
    width: ${theme.spacing(4)};
    height: ${theme.spacing(4)};
`
);

const BoxRtl = styled(Box)(
  ({ theme }) => `
    background: ${theme.colors.alpha.white[100]};
`
);

const CardImageWrapper = styled(Card)(
  () => `
    display: flex;
    position: relative;
    z-index: 6;

    img {
      width: 100%;
      height: auto;
    }
`
);

const CardImg = styled(Card)(
  ({ theme }) => `
    position: absolute;
    border-radius: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${theme.colors.alpha.black[10]};
    transition: ${theme.transitions.create(['border'])};

    &:hover {
      border-color: ${theme.colors.primary.main};
    }
`
);

const TypographyH1Primary = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(36)};
`
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);

const BoxHighlights = styled(Box)(
  () => `
    position: relative;
    z-index: 5;
`
);

const BlowWrapper = styled(Box)(
  ({ theme }) => `
    position: relative;
    margin-top: ${theme.spacing(5)};
`
);

const Blob1 = styled(Box)(
  ({ theme }) => `
  background: ${theme.palette.background.default};
  width: 260px;
    height: 260px;
    position: absolute;
    z-index: 5;
    top: -${theme.spacing(9)};
    right: -${theme.spacing(7)};
    border-radius: 30% 70% 82% 18% / 26% 22% 78% 74%;
`
);

const Blob2 = styled(Box)(
  ({ theme }) => `
    background: ${theme.palette.background.default};
    width: 140px;
    bottom: -${theme.spacing(5)};
    left: -${theme.spacing(5)};
    position: absolute;
    z-index: 5;
    height: 140px;
    border-radius: 77% 23% 30% 70% / 81% 47% 53% 19% ;
`
);

const ScreenshotWrapper = styled(Card)(
  ({ theme }) => `
    perspective: 700px;
    display: flex;
    overflow: visible;
    background: ${theme.palette.background.default};
`
);

const Screenshot = styled('img')(
  ({ theme }) => `
    width: 100%;
    height: auto;
    transform: rotateY(-35deg);
    border-radius: ${theme.general.borderRadius};
`
);

const TypographyHeading = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(36)};
`
);

const TypographySubHeading = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);

const TypographyFeature = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
    color: ${theme.colors.primary.main};
    font-weight: bold;
    margin-bottom: -${theme.spacing(1)};
    display: block;
`
);

const AvatarWrapperSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.lighter};
      color:  ${theme.colors.success.main};
`
);
const TabsContainerWrapper = styled(Box)(
  ({ theme }) => `

  .MuiTabs-root {
    height: 54px;
    min-height: 54px;

    .MuiTabs-flexContainer {
      justify-content: center;
    }
  }

  .MuiTabs-indicator {
    min-height: 54px;
    height: 54px;
    box-shadow: none;
    border-radius: 50px;
    border: 0;
    background: ${theme.colors.primary.main};
  }

  .MuiTab-root {
    &.MuiButtonBase-root {
        position: relative;
        height: 54px;
        min-height: 54px;
        border-radius: 50px;
        font-size: ${theme.typography.pxToRem(16)};
        color: ${theme.colors.primary.main};
        padding: 0 ${theme.spacing(4)};

        .MuiTouchRipple-root {
          opacity: 0;
        }

        &:hover {
          color: ${theme.colors.alpha.black[100]};
        }
    }

    &.Mui-selected {
        color: ${theme.colors.alpha.white[100]};

        &:hover {
          color: ${theme.colors.alpha.white[100]};
        }
    }
}
`
);

const BoxLayouts = styled(Box)(
  ({ theme }) => `
      background: ${theme.colors.gradients.blue1};
      padding: ${theme.spacing(16, 0)};
      margin: ${theme.spacing(10, 0, 0)};
      position: relative;

      .typo-heading,
      .typo-feature {
        color: ${theme.colors.alpha.trueWhite[100]};
      }

      .typo-subheading {
        color: ${theme.colors.alpha.trueWhite[70]};
      }
`
);

const BoxLayoutsImage = styled(Box)(
  () => `
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: .5;
`
);

const BoxLayoutsContent = styled(Container)(
  ({ theme }) => `
      z-index: 5;
      position: relative;
      color: ${theme.colors.alpha.trueWhite[100]};
`
);

const BoxWave = styled(Box)(
  ({ theme }) => `
    position: absolute;
    top: -10px;
    left: 0;
    width: 100%;
    z-index: 5;

    svg path {
	    fill: ${theme.colors.alpha.white[100]};
	}
`
);

const BoxWaveAlt = styled(Box)(
  ({ theme }) => `
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    z-index: 2;

    svg path {
	    fill: ${theme.colors.alpha.white[100]};
	}
`
);

const LayoutImgButton = styled(RouterLink)(
  ({ theme }) => `
    overflow: hidden;
    border-radius: ${theme.general.borderRadiusXl};
    display: block;
    position: relative;
    box-shadow: 0 0rem 14rem 0 rgb(0 0 0 / 20%), 0 0.8rem 2.3rem rgb(0 0 0 / 3%), 0 0.2rem 0.7rem rgb(0 0 0 / 15%);

    .MuiTypography-root {
      position: absolute;
      right: ${theme.spacing(3)};
      bottom: ${theme.spacing(3)};
      color: ${theme.colors.alpha.trueWhite[100]};;
      background: rgba(0,0,0,.8);
      padding: ${theme.spacing(2, 4.5)};
      border-radius: ${theme.general.borderRadiusXl};
      z-index: 5;
    }

    img {
      width: 100%;
      height: auto;
      display: block;
      opacity: 1;
      transition: opacity .2s;
    }

    &:hover {
      img {
        opacity: .8;
      }
    }
`
);

const icons = {
  Auth0: '/static/images/logo/auth0.svg',
  FirebaseAuth: '/static/images/logo/firebase.svg',
  JWT: '/static/images/logo/jwt.svg',
  Amplify: '/static/images/logo/amplify.svg'
};

function Highlights() {
  const { t }: { t: any } = useTranslation();

  const [currentTab, setCurrentTab] = useState('performance');

  const tabs = [
    { value: 'performance', label: t('Performance') },
    { value: 'auth_services', label: t('Auth Services') },
    { value: 'rtl_languages', label: t('RTL & Languages') }
  ];

  const handleTabsChange = (_event: any, value: SetStateAction<string>) => {
    setCurrentTab(value);
  };

  return (
    <BoxHighlights>
      <BoxLayouts>
        <BoxWave>
          <svg
            viewBox="0 0 1440 172"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H1440V52.1874C1440 52.1874 873.5 172 720 172C566.5 172 0 52.1874 0 52.1874V0Z"
              fill="white"
            />
          </svg>
        </BoxWave>
        <BoxLayoutsImage
          sx={{
            backgroundImage: 'url("/static/images/placeholders/covers/7.jpg")'
          }}
        />
        <BoxLayoutsContent maxWidth="lg">
          <Grid
            justifyContent="center"
            alignItems="center"
            spacing={6}
            container
          >
            <Grid item xs={12} md={6}>
              <TypographyFeature
                className="typo-feature"
                sx={{
                  mt: { lg: 10 }
                }}
              >
                7
              </TypographyFeature>
              <TypographyHeading
                className="typo-heading"
                sx={{
                  mb: 1
                }}
                variant="h3"
              >
                Layout Blueprints
              </TypographyHeading>
              <TypographySubHeading
                className="typo-subheading"
                sx={{
                  lineHeight: 1.5
                }}
                variant="h4"
                color="text.secondary"
                fontWeight="normal"
              >
                {t(
                  "Version 3.1 represents our biggest Tokyo update. We've added a brand new layout with 100% reworked and improved components. Check out the live preview to see them in action."
                )}
              </TypographySubHeading>
            </Grid>
            <Grid item xs={12} md={6}>
              <LayoutImgButton
                target="_blank"
                rel="noopener"
                to="/accent-header/dashboards"
              >
                <Typography variant="h4">{t('Accent Header')}</Typography>
                <img
                  src="/static/images/overview/accent_header.png"
                  alt="Accent Header"
                />
              </LayoutImgButton>
            </Grid>
            <Grid item xs={12} md={6}>
              <LayoutImgButton
                target="_blank"
                rel="noopener"
                to="/extended-sidebar/dashboards"
              >
                <Typography variant="h4">{t('Extended Sidebar')}</Typography>
                <img
                  src="/static/images/overview/extended_sidebar.png"
                  alt="Extended Sidebar"
                />
              </LayoutImgButton>
            </Grid>
            <Grid item xs={12} md={6}>
              <LayoutImgButton
                target="_blank"
                rel="noopener"
                to="/accent-sidebar/dashboards"
              >
                <Typography variant="h4">{t('Accent Sidebar')}</Typography>
                <img
                  src="/static/images/overview/accent_sidebar.png"
                  alt="Accent Sidebar"
                />
              </LayoutImgButton>
            </Grid>
            <Grid item xs={12} md={6}>
              <LayoutImgButton
                target="_blank"
                rel="noopener"
                to="/boxed-sidebar/dashboards"
              >
                <Typography variant="h4">{t('Boxed Sidebar')}</Typography>
                <img
                  src="/static/images/overview/boxed_sidebar.png"
                  alt="Boxed Sidebar"
                />
              </LayoutImgButton>
            </Grid>
            <Grid item xs={12} md={6}>
              <LayoutImgButton
                target="_blank"
                rel="noopener"
                to="/collapsed-sidebar/dashboards"
              >
                <Typography variant="h4">{t('Collapsed Sidebar')}</Typography>
                <img
                  src="/static/images/overview/collapsed_sidebar.png"
                  alt="Collapsed Sidebar"
                />
              </LayoutImgButton>
            </Grid>
            <Grid item xs={12} md={6}>
              <LayoutImgButton
                target="_blank"
                rel="noopener"
                to="/top-navigation/dashboards"
              >
                <Typography variant="h4">{t('Top Navigation')}</Typography>
                <img
                  src="/static/images/overview/top_navigation.png"
                  alt="Top Navigation"
                />
              </LayoutImgButton>
            </Grid>
            <Grid item xs={12} md={6}>
              <LayoutImgButton
                target="_blank"
                rel="noopener"
                to="/bottom-navigation/dashboards"
              >
                <Typography variant="h4">{t('Bottom Navigation')}</Typography>
                <img
                  src="/static/images/overview/bottom_navigation.png"
                  alt="Bottom Navigation"
                />
              </LayoutImgButton>
            </Grid>
          </Grid>
        </BoxLayoutsContent>
        <BoxWaveAlt>
          <svg
            viewBox="0 0 1440 172"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1440 172H0V119.813C0 119.813 566.5 0 720 0C873.5 0 1440 119.813 1440 119.813V172Z"
              fill="white"
            />
          </svg>
        </BoxWaveAlt>
      </BoxLayouts>
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 8, md: 10 }
        }}
      >
        <Grid
          spacing={0}
          direction={{ xs: 'column-reverse', md: 'row' }}
          justifyContent="center"
          container
        >
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                top: { xs: -50, md: 0 },
                left: { xs: -150, md: -45 },
                minHeight: { xs: 530, md: 1130 },
                transform: { xs: 'scale(.5)', md: 'none' },
                position: 'relative'
              }}
            >
              <Button
                size="large"
                component={RouterLink}
                to="/extended-sidebar/dashboards/banking"
                variant="contained"
                sx={{
                  position: 'absolute',
                  display: { xs: 'none', lg: 'block' },
                  right: { xs: 0, md: -80, lg: 50 },
                  bottom: 150
                }}
              >
                View more components
              </Button>
              <Box
                sx={{
                  position: 'absolute',
                  width: 500,
                  top: -50,
                  left: -30,
                  transform:
                    'translate(0px, 120px) perspective(5200px) rotate(90deg) rotateY(-45deg) rotateZ(-45deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <Box
                  sx={{
                    animation: '2.1s 2.1s infinite alternate ease-in-out float'
                  }}
                >
                  <ResourcesAlarm />
                </Box>
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  width: 300,
                  top: -180,
                  left: 210,
                  transform:
                    'translate(0px, 120px) perspective(5200px) rotate(90deg) rotateY(-45deg) rotateZ(-45deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <Box
                  sx={{
                    animation: '2.8s 1.2s infinite alternate ease-in-out float'
                  }}
                >
                  <ActiveReferrals />
                </Box>
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  width: 330,
                  top: 635,
                  left: 970,
                  transform:
                    'translate(0px, 20px) perspective(5200px) rotate(90deg) rotateY(-45deg) rotateZ(-45deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <Box
                  sx={{
                    animation: '2.1s 1.5s infinite alternate ease-in-out float'
                  }}
                >
                  <UnresolvedTickets />
                </Box>
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  width: 280,
                  top: 350,
                  left: -65,
                  transform:
                    'translate(0px, 20px) perspective(5200px) rotate(90deg) rotateY(-45deg) rotateZ(-45deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <Box
                  sx={{
                    animation: '3.5s 2.4s infinite alternate ease-in-out float'
                  }}
                >
                  <Transfers />
                </Box>
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  width: 420,
                  top: 290,
                  left: 116,
                  transform:
                    'translate(0px, 20px) perspective(5200px) rotate(90deg) rotateY(-45deg) rotateZ(-45deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <Box
                  sx={{
                    animation: '1.5s 1s infinite alternate ease-in-out float'
                  }}
                >
                  <Thermostat />
                </Box>
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  width: 500,
                  top: 210,
                  left: 930,
                  transform:
                    'translate(0px, 20px) perspective(5200px) rotate(90deg) rotateY(-45deg) rotateZ(-45deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <Box
                  sx={{
                    animation: '2.5s 3s infinite alternate ease-in-out float'
                  }}
                >
                  <RecentTransactions />
                </Box>
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  width: 400,
                  top: 480,
                  left: 700,
                  transform:
                    'translate(0px, 20px) perspective(5200px) rotate(90deg) rotateY(-45deg) rotateZ(-45deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <Box
                  sx={{
                    animation: '2.5s 3s infinite alternate ease-in-out float'
                  }}
                >
                  <AppointmentsAlt />
                </Box>
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  width: 400,
                  top: 545,
                  left: 515,
                  transform:
                    'translate(0px, 20px) perspective(5200px) rotate(90deg) rotateY(-45deg) rotateZ(-45deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <Box
                  sx={{
                    animation: '3s infinite alternate ease-in-out float'
                  }}
                >
                  <MonthlyGoalsTarget />
                </Box>
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  width: 330,
                  top: 213,
                  left: 477,
                  transform:
                    'translate(0px, 20px) perspective(5200px) rotate(90deg) rotateY(-45deg) rotateZ(-45deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <Box
                  sx={{
                    animation: '2s 2s infinite alternate ease-in-out float'
                  }}
                >
                  <AccountSecurity />
                </Box>
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  width: 330,
                  top: 400,
                  left: -315,
                  transform:
                    'translate(0px, 20px) perspective(5200px) rotate(90deg) rotateY(-45deg) rotateZ(-45deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <Box
                  sx={{
                    animation: '2s 2s infinite alternate ease-in-out float'
                  }}
                >
                  <Performance />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <TypographyFeature>500+</TypographyFeature>
              <TypographyHeading
                sx={{
                  mb: 1
                }}
                variant="h3"
              >
                {t('Multi-Purpose Components')}
              </TypographyHeading>
              <TypographySubHeading
                sx={{
                  lineHeight: 1.5,
                  pr: 8
                }}
                variant="h4"
                color="text.secondary"
                fontWeight="normal"
              >
                {t(
                  'With Tokyo you can build apps for any purpose, from commerce to health or learning. We’ve got you covered!'
                )}
              </TypographySubHeading>
            </Box>
          </Grid>
        </Grid>
        <Grid
          spacing={6}
          sx={{
            mt: 4,
            justifyContent: { lg: 'center' }
          }}
          container
        >
          <Grid item md={4}>
            <Box>
              <TypographyFeature>17</TypographyFeature>
              <TypographyHeading
                sx={{
                  mb: 1
                }}
                variant="h3"
              >
                {t('Dashboard Pages')}
              </TypographyHeading>
              <TypographySubHeading
                sx={{
                  maxWidth: 500,
                  lineHeight: 1.5,
                  mb: 3
                }}
                variant="h4"
                color="text.secondary"
                fontWeight="normal"
              >
                {t(
                  'Tokyo comes integrated with 13 dashboards split across multiple popular product niches'
                )}
                :
              </TypographySubHeading>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Button
                    fullWidth
                    target="_blank"
                    rel="noopener"
                    startIcon={<LaunchTwoToneIcon />}
                    component={RouterLink}
                    to="/extended-sidebar/dashboards/reports"
                    variant="outlined"
                  >
                    {t('Reports')}
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    fullWidth
                    target="_blank"
                    rel="noopener"
                    startIcon={<LaunchTwoToneIcon />}
                    component={RouterLink}
                    to="/extended-sidebar/dashboards/expenses"
                    variant="outlined"
                  >
                    {t('Expenses')}
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    fullWidth
                    target="_blank"
                    rel="noopener"
                    startIcon={<LaunchTwoToneIcon />}
                    component={RouterLink}
                    to="/extended-sidebar/dashboards/products"
                    variant="outlined"
                  >
                    {t('Products')}
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    fullWidth
                    target="_blank"
                    rel="noopener"
                    startIcon={<LaunchTwoToneIcon />}
                    component={RouterLink}
                    to="/extended-sidebar/dashboards/statistics"
                    variant="outlined"
                  >
                    {t('Statistics')}
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    fullWidth
                    target="_blank"
                    rel="noopener"
                    startIcon={<LaunchTwoToneIcon />}
                    component={RouterLink}
                    to="/extended-sidebar/dashboards/automation"
                    variant="outlined"
                  >
                    {t('Automation')}
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    fullWidth
                    target="_blank"
                    rel="noopener"
                    startIcon={<LaunchTwoToneIcon />}
                    component={RouterLink}
                    to="/extended-sidebar/dashboards/analytics"
                    variant="outlined"
                  >
                    {t('Analytics')}
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    fullWidth
                    target="_blank"
                    rel="noopener"
                    startIcon={<LaunchTwoToneIcon />}
                    component={RouterLink}
                    to="/extended-sidebar/dashboards/banking"
                    variant="outlined"
                  >
                    {t('Banking')}
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    fullWidth
                    target="_blank"
                    rel="noopener"
                    startIcon={<LaunchTwoToneIcon />}
                    component={RouterLink}
                    to="/extended-sidebar/dashboards/commerce"
                    variant="outlined"
                  >
                    {t('Commerce')}
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    fullWidth
                    target="_blank"
                    rel="noopener"
                    startIcon={<LaunchTwoToneIcon />}
                    component={RouterLink}
                    to="/extended-sidebar/dashboards/crypto"
                    variant="outlined"
                  >
                    {t('Crypto')}
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    fullWidth
                    target="_blank"
                    rel="noopener"
                    startIcon={<LaunchTwoToneIcon />}
                    component={RouterLink}
                    to="/extended-sidebar/dashboards/finance"
                    variant="outlined"
                  >
                    {t('Finance')}
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    fullWidth
                    target="_blank"
                    rel="noopener"
                    startIcon={<LaunchTwoToneIcon />}
                    component={RouterLink}
                    to="/extended-sidebar/dashboards/fitness"
                    variant="outlined"
                  >
                    {t('Fitness')}
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    fullWidth
                    target="_blank"
                    rel="noopener"
                    startIcon={<LaunchTwoToneIcon />}
                    component={RouterLink}
                    to="/extended-sidebar/dashboards/healthcare/doctor"
                    variant="outlined"
                  >
                    {t('Doctor')}
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    fullWidth
                    target="_blank"
                    rel="noopener"
                    startIcon={<LaunchTwoToneIcon />}
                    component={RouterLink}
                    to="/extended-sidebar/dashboards/healthcare/hospital"
                    variant="outlined"
                  >
                    {t('Hospital')}
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    fullWidth
                    target="_blank"
                    rel="noopener"
                    startIcon={<LaunchTwoToneIcon />}
                    component={RouterLink}
                    to="/extended-sidebar/dashboards/helpdesk"
                    variant="outlined"
                  >
                    {t('Helpdesk')}
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    fullWidth
                    target="_blank"
                    rel="noopener"
                    startIcon={<LaunchTwoToneIcon />}
                    component={RouterLink}
                    to="/extended-sidebar/dashboards/learning"
                    variant="outlined"
                  >
                    {t('Learning')}
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    fullWidth
                    target="_blank"
                    rel="noopener"
                    startIcon={<LaunchTwoToneIcon />}
                    component={RouterLink}
                    to="/extended-sidebar/dashboards/monitoring"
                    variant="outlined"
                  >
                    {t('Monitoring')}
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    fullWidth
                    target="_blank"
                    rel="noopener"
                    startIcon={<LaunchTwoToneIcon />}
                    component={RouterLink}
                    to="/extended-sidebar/dashboards/tasks"
                    variant="outlined"
                  >
                    {t('Tasks')}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={8}>
            <Box
              sx={{
                position: 'relative'
              }}
            >
              <TypographyFeature>6</TypographyFeature>
              <TypographyHeading
                sx={{
                  mb: 1
                }}
                variant="h3"
              >
                {t('Applications')}
              </TypographyHeading>
              <TypographySubHeading
                sx={{
                  maxWidth: 500,
                  lineHeight: 1.5,
                  pr: 8
                }}
                variant="h4"
                color="text.secondary"
                fontWeight="normal"
              >
                {t(
                  'Use these as standalone apps or included in a bigger project. You choose!'
                )}
              </TypographySubHeading>
              <Typography
                variant="subtitle1"
                sx={{
                  py: 2
                }}
                component="p"
              >
                <Text color="warning">
                  <b>
                    {t(
                      'Includes redux state management, working forms with validation, working filtering and more'
                    )}
                  </b>
                </Text>
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={12} lg={6}>
                  <Card
                    sx={{
                      mt: 2
                    }}
                  >
                    <List disablePadding>
                      <ListItem
                        sx={{
                          py: 2
                        }}
                      >
                        <ListItemAvatar>
                          <AvatarWrapperSuccess>
                            <CheckTwoToneIcon />
                          </AvatarWrapperSuccess>
                        </ListItemAvatar>
                        <ListItemText
                          primary={t('Jobs Platform')}
                          primaryTypographyProps={{
                            variant: 'h4',
                            color: 'textPrimary',
                            gutterBottom: true
                          }}
                          secondary={t('API calls examples included')}
                          secondaryTypographyProps={{
                            variant: 'subtitle2',
                            noWrap: true
                          }}
                        />
                        <Button
                          size="small"
                          target="_blank"
                          rel="noopener"
                          startIcon={<LaunchTwoToneIcon />}
                          component={RouterLink}
                          to="/extended-sidebar/applications/jobs-platform"
                        >
                          {t('View')}
                        </Button>
                      </ListItem>
                      <Divider />
                      <ListItem
                        sx={{
                          py: 2
                        }}
                      >
                        <ListItemAvatar>
                          <AvatarWrapperSuccess>
                            <CheckTwoToneIcon />
                          </AvatarWrapperSuccess>
                        </ListItemAvatar>
                        <ListItemText
                          primary={t('Projects Board')}
                          primaryTypographyProps={{
                            variant: 'h4',
                            color: 'textPrimary',
                            gutterBottom: true
                          }}
                          secondary={t(
                            'editable fields, drag & drop functionality'
                          )}
                          secondaryTypographyProps={{
                            variant: 'subtitle2',
                            noWrap: true
                          }}
                        />
                        <Button
                          size="small"
                          target="_blank"
                          rel="noopener"
                          startIcon={<LaunchTwoToneIcon />}
                          component={RouterLink}
                          to="/extended-sidebar/applications/projects-board"
                        >
                          {t('View')}
                        </Button>
                      </ListItem>
                      <Divider />
                      <ListItem
                        sx={{
                          py: 2
                        }}
                      >
                        <ListItemAvatar>
                          <AvatarWrapperSuccess>
                            <CheckTwoToneIcon />
                          </AvatarWrapperSuccess>
                        </ListItemAvatar>
                        <ListItemText
                          primary={t('Mailbox')}
                          primaryTypographyProps={{
                            variant: 'h4',
                            color: 'textPrimary',
                            gutterBottom: true
                          }}
                          secondary={t('redux, tags & filtering')}
                          secondaryTypographyProps={{
                            variant: 'subtitle2',
                            noWrap: true
                          }}
                        />
                        <Button
                          size="small"
                          target="_blank"
                          rel="noopener"
                          startIcon={<LaunchTwoToneIcon />}
                          component={RouterLink}
                          to="/extended-sidebar/applications/mailbox"
                        >
                          {t('View')}
                        </Button>
                      </ListItem>
                    </List>
                  </Card>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Card
                    sx={{
                      mt: 2
                    }}
                  >
                    <List disablePadding>
                      <ListItem
                        sx={{
                          py: 2
                        }}
                      >
                        <ListItemAvatar>
                          <AvatarWrapperSuccess>
                            <CheckTwoToneIcon />
                          </AvatarWrapperSuccess>
                        </ListItemAvatar>
                        <ListItemText
                          primary={t('File Manager')}
                          primaryTypographyProps={{
                            variant: 'h4',
                            color: 'textPrimary',
                            gutterBottom: true
                          }}
                          secondary={t('file details drawer sidebar')}
                          secondaryTypographyProps={{
                            variant: 'subtitle2',
                            noWrap: true
                          }}
                        />
                        <Button
                          size="small"
                          target="_blank"
                          rel="noopener"
                          startIcon={<LaunchTwoToneIcon />}
                          component={RouterLink}
                          to="/extended-sidebar/applications/file-manager"
                        >
                          {t('View')}
                        </Button>
                      </ListItem>
                      <Divider />
                      <ListItem
                        sx={{
                          py: 2
                        }}
                      >
                        <ListItemAvatar>
                          <AvatarWrapperSuccess>
                            <CheckTwoToneIcon />
                          </AvatarWrapperSuccess>
                        </ListItemAvatar>
                        <ListItemText
                          primary={t('Messenger')}
                          primaryTypographyProps={{
                            variant: 'h4',
                            color: 'textPrimary',
                            gutterBottom: true
                          }}
                          secondary={t('beautiful functional design')}
                          secondaryTypographyProps={{
                            variant: 'subtitle2',
                            noWrap: true
                          }}
                        />
                        <Button
                          size="small"
                          target="_blank"
                          rel="noopener"
                          startIcon={<LaunchTwoToneIcon />}
                          component={RouterLink}
                          to="/extended-sidebar/applications/messenger"
                        >
                          {t('View')}
                        </Button>
                      </ListItem>
                      <Divider />
                      <ListItem
                        sx={{
                          py: 2
                        }}
                      >
                        <ListItemAvatar>
                          <AvatarWrapperSuccess>
                            <CheckTwoToneIcon />
                          </AvatarWrapperSuccess>
                        </ListItemAvatar>
                        <ListItemText
                          primary={t('Calendar')}
                          primaryTypographyProps={{
                            variant: 'h4',
                            color: 'textPrimary',
                            gutterBottom: true
                          }}
                          secondary={t('working redux state management')}
                          secondaryTypographyProps={{
                            variant: 'subtitle2',
                            noWrap: true
                          }}
                        />
                        <Button
                          size="small"
                          target="_blank"
                          rel="noopener"
                          startIcon={<LaunchTwoToneIcon />}
                          component={RouterLink}
                          to="/extended-sidebar/applications/calendar"
                        >
                          {t('View')}
                        </Button>
                      </ListItem>
                    </List>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          direction={{ xs: 'column-reverse', md: 'row' }}
          sx={{
            mt: 12,
            mb: 12
          }}
          spacing={4}
        >
          <Grid item md={6} lg={7}>
            <Box
              sx={{
                transform: { xs: 'scale(.9)', md: 'scale(.85)', lg: 'none' },
                left: { xs: '50px', md: '-180px', lg: '-45px' },
                minHeight: 600,
                position: 'relative'
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: -150,
                  left: -50,
                  transform:
                    'translate(0px, 120px) perspective(5200px) rotate(87deg) rotateY(330deg) rotateZ(285deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <Box
                  sx={{
                    animation: '2.1s 2.1s infinite alternate ease-in-out float'
                  }}
                >
                  <Card
                    sx={{
                      padding: '15px',
                      background: '#f2f5f9'
                    }}
                  >
                    <img
                      src="/static/images/overview/management_screen_1.png"
                      alt="Management Section 1"
                    />
                  </Card>
                </Box>
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  top: 30,
                  left: 180,
                  transform:
                    'translate(0px, 120px) perspective(5200px) rotate(87deg) rotateY(330deg) rotateZ(285deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <Box
                  sx={{
                    animation: '1.5s 1s infinite alternate ease-in-out float'
                  }}
                >
                  <Card
                    sx={{
                      padding: '15px',
                      background: '#f2f5f9'
                    }}
                  >
                    <img
                      src="/static/images/overview/management_screen_3.png"
                      alt="Management Section 3"
                    />
                  </Card>
                </Box>
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  top: 120,
                  left: -60,
                  transform:
                    'translate(0px, 120px) perspective(5200px) rotate(87deg) rotateY(330deg) rotateZ(285deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <Box
                  sx={{
                    animation: '2.8s 1.2s infinite alternate ease-in-out float'
                  }}
                >
                  <Card
                    sx={{
                      padding: '15px',
                      background: '#f2f5f9'
                    }}
                  >
                    <img
                      src="/static/images/overview/management_screen_2.png"
                      alt="Management Section 2"
                    />
                  </Card>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} lg={5}>
            <TypographyFeature>7</TypographyFeature>
            <TypographyHeading
              sx={{
                mb: 1
              }}
              variant="h3"
            >
              Pre-Built <br />
              Management Sections
            </TypographyHeading>
            <TypographySubHeading
              sx={{
                maxWidth: 500,
                lineHeight: 1.5,
                pr: 8,
                mb: 4
              }}
              variant="h4"
              color="text.secondary"
              fontWeight="normal"
            >
              {t(
                'Integrated forms with validation, API calls examples, working filters and search functionality!'
              )}
            </TypographySubHeading>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  target="_blank"
                  rel="noopener"
                  startIcon={<LaunchTwoToneIcon />}
                  component={RouterLink}
                  to="/extended-sidebar/management/users"
                  variant="outlined"
                >
                  {t('Users')}
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  target="_blank"
                  rel="noopener"
                  startIcon={<LaunchTwoToneIcon />}
                  component={RouterLink}
                  to="/extended-sidebar/management/users/single/2"
                  variant="outlined"
                >
                  {t('Profile')}
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  target="_blank"
                  rel="noopener"
                  startIcon={<LaunchTwoToneIcon />}
                  component={RouterLink}
                  to="/extended-sidebar/management/projects/list"
                  variant="outlined"
                >
                  {t('Projects')}
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  target="_blank"
                  rel="noopener"
                  startIcon={<LaunchTwoToneIcon />}
                  component={RouterLink}
                  to="/extended-sidebar/management/commerce/products/single/1"
                  variant="outlined"
                >
                  {t('View Product')}
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  target="_blank"
                  rel="noopener"
                  startIcon={<LaunchTwoToneIcon />}
                  component={RouterLink}
                  to="/extended-sidebar/management/commerce/products/create"
                  variant="outlined"
                >
                  {t('Create Product')}
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  target="_blank"
                  rel="noopener"
                  startIcon={<LaunchTwoToneIcon />}
                  component={RouterLink}
                  to="/extended-sidebar/management/commerce/shop"
                  variant="outlined"
                >
                  {t('Shop')}
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  target="_blank"
                  rel="noopener"
                  startIcon={<LaunchTwoToneIcon />}
                  component={RouterLink}
                  to="/extended-sidebar/management/invoices/list"
                  variant="outlined"
                >
                  {t('Invoices')}
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  target="_blank"
                  rel="noopener"
                  startIcon={<LaunchTwoToneIcon />}
                  component={RouterLink}
                  to="/extended-sidebar/management/invoices/single/1"
                  variant="outlined"
                >
                  {t('Single Invoice')}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <TypographyH1Primary
          id="key-features"
          textAlign="center"
          sx={{
            mt: 8,
            mb: 2
          }}
          variant="h1"
        >
          {t('Key Features')}
        </TypographyH1Primary>
        <Container maxWidth="sm">
          <TypographyH2
            sx={{
              pb: 4,
              lineHeight: 1.5
            }}
            textAlign="center"
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
            {t(
              'Some of the features that make Tokyo one of the best admin templates available today'
            )}
          </TypographyH2>
        </Container>

        <TabsContainerWrapper>
          <Tabs
            onChange={handleTabsChange}
            value={currentTab}
            variant="scrollable"
            textColor="primary"
            indicatorColor="primary"
          >
            {tabs.map((tab) => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </Tabs>
        </TabsContainerWrapper>
        {currentTab === 'performance' && (
          <Grid
            sx={{
              mt: 8
            }}
            container
            spacing={4}
          >
            <Grid item xs={12} md={6}>
              <Typography sx={{ mb: 1 }} variant="h2">
                {t('Beautiful design is little without performance')}.
              </Typography>
              <Typography variant="subtitle2">
                {t(
                  "We've built Tokyo using modern industry standards all packed under MUI (Material-UI) components"
                )}
                .
              </Typography>
              <List
                disablePadding
                sx={{
                  mt: 2
                }}
              >
                <ListItem>
                  <AvatarSuccess
                    sx={{
                      mr: 2
                    }}
                  >
                    <CheckTwoToneIcon />
                  </AvatarSuccess>
                  <ListItemText
                    primary={t(
                      '96+ Google Lighthouse performance score across all app pages.'
                    )}
                  />
                </ListItem>
                <ListItem>
                  <AvatarSuccess
                    sx={{
                      mr: 2
                    }}
                  >
                    <CheckTwoToneIcon />
                  </AvatarSuccess>
                  <ListItemText
                    primary={t(
                      'Perfectly responsive. Go ahead, browse the live preview and resize any page.'
                    )}
                  />
                </ListItem>
                <ListItem>
                  <AvatarSuccess
                    sx={{
                      mr: 2
                    }}
                  >
                    <CheckTwoToneIcon />
                  </AvatarSuccess>
                  <ListItemText
                    primary={t(
                      'Progressive Web App Optimized. You can view Tokyo offline on any screen size.'
                    )}
                  />
                </ListItem>
                <ListItem>
                  <AvatarSuccess
                    sx={{
                      mr: 2
                    }}
                  >
                    <CheckTwoToneIcon />
                  </AvatarSuccess>
                  <ListItemText
                    primary={t(
                      'Google Lighthouse Best Practices and SEO scrores over 95 for all pages.'
                    )}
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <BlowWrapper>
                <Blob1 />
                <Blob2 />
                <CardImageWrapper>
                  <img
                    src="/static/images/overview/performance.png"
                    alt="Tokyo Performance"
                  />
                </CardImageWrapper>
              </BlowWrapper>
            </Grid>
          </Grid>
        )}
        {currentTab === 'auth_services' && (
          <>
            <Typography
              textAlign="center"
              sx={{
                mt: 14,
                mb: 2
              }}
              variant="h2"
            >
              {t('Integrated Auth Services')}
            </Typography>
            <Container
              sx={{
                position: 'relative',
                pb: 4
              }}
              maxWidth="sm"
            >
              <Tooltip arrow placement="top" title="Auth0">
                <CardImg
                  sx={{
                    width: 80,
                    height: 80,
                    top: -110,
                    left: -30
                  }}
                >
                  <img width={40} alt="Auth0" src={icons['Auth0']} />
                </CardImg>
              </Tooltip>
              <Tooltip arrow placement="top" title="Firebase">
                <CardImg
                  sx={{
                    width: 120,
                    height: 120,
                    top: -40,
                    left: -190
                  }}
                >
                  <img width={50} alt="Firebase" src={icons['FirebaseAuth']} />
                </CardImg>
              </Tooltip>
              <Tooltip arrow placement="top" title="JSON Web Token">
                <CardImg
                  sx={{
                    width: 130,
                    height: 130,
                    top: -50,
                    right: -160
                  }}
                >
                  <img width={80} alt="JSON Web Token" src={icons['JWT']} />
                </CardImg>
              </Tooltip>
              <Tooltip arrow placement="top" title="AWS Amplify">
                <CardImg
                  sx={{
                    width: 90,
                    height: 90,
                    top: -120,
                    right: 20
                  }}
                >
                  <img width={50} alt="Amplify" src={icons['Amplify']} />
                </CardImg>
              </Tooltip>
              <TypographyH2
                sx={{
                  pb: 4,
                  lineHeight: 1.5
                }}
                textAlign="center"
                variant="h4"
                color="text.secondary"
                fontWeight="normal"
              >
                {t(
                  'Easily switch between multiple integrated auth methods based on your app needs'
                )}
                .
              </TypographyH2>
            </Container>

            <Grid
              container
              sx={{
                textAlign: 'center'
              }}
              spacing={4}
            >
              <Grid item xs={12} md={4}>
                <AvatarSuccess
                  sx={{
                    mx: 'auto',
                    width: 50,
                    height: 50
                  }}
                >
                  <CheckTwoToneIcon />
                </AvatarSuccess>
                <Typography
                  variant="h3"
                  sx={{
                    py: 2
                  }}
                >
                  {t('Multiple Auth Methods')}
                </Typography>
                <Typography variant="subtitle2">
                  {t(
                    'Firebase, AWS Amplify, JWT Tokens and Auth0 are available in this release'
                  )}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <AvatarSuccess
                  sx={{
                    mx: 'auto',
                    width: 50,
                    height: 50
                  }}
                >
                  <CheckTwoToneIcon />
                </AvatarSuccess>
                <Typography
                  variant="h3"
                  sx={{
                    py: 2
                  }}
                >
                  {t('Status Pages')}
                </Typography>
                <Typography variant="subtitle2">
                  {t(
                    'Multiple status pages included 500, 404 Error Pages, Coming Soon, Maintenance'
                  )}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <AvatarSuccess
                  sx={{
                    mx: 'auto',
                    width: 50,
                    height: 50
                  }}
                >
                  <CheckTwoToneIcon />
                </AvatarSuccess>
                <Typography
                  variant="h3"
                  sx={{
                    py: 2
                  }}
                >
                  {t('Auth Pages')}
                </Typography>
                <Typography variant="subtitle2">
                  {t(
                    'Login/Register Pages, Wizards, Recover Password with confirmation'
                  )}
                </Typography>
              </Grid>
            </Grid>
          </>
        )}
        {currentTab === 'rtl_languages' && (
          <BoxRtl
            sx={{
              pt: 10
            }}
          >
            <Container maxWidth="lg">
              <Grid container spacing={8}>
                <Grid
                  item
                  xs={12}
                  md={5}
                  sx={{
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Box>
                    <TypographyH1Primary variant="h1">
                      {t('Right-To-Left Layouts & Translation-Ready')}
                    </TypographyH1Primary>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        py: 2
                      }}
                    >
                      {t(
                        "Follow our documentation files to find out how to switch to a RTL layout. It's easy!"
                      )}
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        my: 2
                      }}
                    >
                      {t('Languages already integrated')}:
                    </Typography>
                    <Box
                      sx={{
                        svg: {
                          width: 44,
                          mr: 1
                        }
                      }}
                    >
                      <US title="USA" />
                      <DE title="Germany" />
                      <ES title="Spain" />
                      <FR title="France" />
                      <CN title="China" />
                      <AE title="United Arab Emirates" />
                    </Box>
                    <Typography
                      sx={{
                        pt: 1
                      }}
                      variant="subtitle1"
                    >
                      {t(
                        'You can add and define translations for any language required. '
                      )}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                  <ScreenshotWrapper>
                    <Screenshot
                      src="/static/images/overview/rtl-preview.jpg"
                      alt="RTL Preview"
                    />
                  </ScreenshotWrapper>
                </Grid>
              </Grid>
            </Container>
          </BoxRtl>
        )}
      </Container>

      <Container
        sx={{
          pt: { xs: 6, md: 12 },
          pb: { xs: 5, md: 15 }
        }}
        maxWidth="md"
      >
        <TypographyH1Primary
          textAlign="center"
          sx={{
            mb: 2
          }}
          variant="h1"
        >
          {t('Design Source Files')}
        </TypographyH1Primary>
        <Container
          sx={{
            mb: 6,
            textAlign: 'center'
          }}
          maxWidth="sm"
        >
          <TypographyH2
            sx={{
              pb: 4,
              lineHeight: 1.5
            }}
            textAlign="center"
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
            {t(
              'Start working on your project directly from one of the included starter kits or use the Figma/Sketch files to create a prototype first'
            )}
          </TypographyH2>
          <TypographyH2
            sx={{
              pb: 4,
              lineHeight: 1.5
            }}
            textAlign="center"
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
            <Text color="error">
              {t('Only available with certain pricing plans!')}
            </Text>
          </TypographyH2>

          <Button
            component="a"
            target="_blank"
            size="large"
            href="https://www.figma.com/file/XVw1wWOvmpn3UljELShZi3/Tokyo-Admin-Dashboard"
            rel="noopener"
            variant="outlined"
          >
            {t('View Figma Preview')}
          </Button>
        </Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                overflow: 'visible'
              }}
            >
              <AvatarSuccess
                sx={{
                  width: 60,
                  height: 60,
                  mx: 'auto',
                  position: 'relative',
                  top: -28
                }}
              >
                <CheckTwoToneIcon />
              </AvatarSuccess>
              <Box
                px={4}
                pb={4}
                display={{ xs: 'block', md: 'flex' }}
                alignItems="flex-start"
              >
                <img
                  src="/static/images/overview/figma.svg"
                  style={{ width: 60 }}
                  alt="Figma Design Files"
                />
                <Box
                  sx={{
                    pl: { xs: 0, md: 3 }
                  }}
                >
                  <Typography variant="h3">
                    Figma {t('Design Files')}
                  </Typography>
                  <Typography
                    sx={{
                      pt: 1
                    }}
                    variant="subtitle2"
                  >
                    {t(
                      'Complete with reusable components, all pages and sections are available in the Figma ecosystem.'
                    )}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                mt: { xs: 5, md: 0 },
                overflow: 'visible'
              }}
            >
              <AvatarSuccess
                sx={{
                  width: 60,
                  height: 60,
                  mx: 'auto',
                  position: 'relative',
                  top: -28
                }}
              >
                <CheckTwoToneIcon />
              </AvatarSuccess>
              <Box
                px={4}
                pb={4}
                display={{ xs: 'block', md: 'flex' }}
                alignItems="flex-start"
              >
                <img
                  src="/static/images/overview/sketch.svg"
                  style={{ width: 60 }}
                  alt="Sketch Design Files"
                />
                <Box
                  sx={{
                    pl: { xs: 0, md: 3 }
                  }}
                >
                  <Typography variant="h3">
                    Sketch {t('Design Files')}
                  </Typography>
                  <Typography
                    sx={{
                      pt: 1
                    }}
                    variant="subtitle2"
                  >
                    {t(
                      'Besid Figma files, Tokyo also has included Sketch design files for certain pricing plans.'
                    )}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </BoxHighlights>
  );
}

export default Highlights;
