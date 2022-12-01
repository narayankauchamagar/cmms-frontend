import { useTranslation } from 'react-i18next';
import { SetStateAction, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  styled,
  Tab,
  Tabs,
  Tooltip,
  Typography
} from '@mui/material';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import { AE, CN, DE, ES, FR, US } from 'country-flag-icons/react/3x2';

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
    height: 40px;
    width: 80%;
    min-height: 40px;
    align-self: center;

    .MuiTabs-flexContainer {
      justify-content: center;
    }
  }

  .MuiTabs-indicator {
    min-height: 40px;
    height: 40px;
    box-shadow: none;
    border-radius: 50px;
    border: 0;
    background: ${theme.colors.primary.main};
  }

  .MuiTab-root {
    &.MuiButtonBase-root {
        position: relative;
        height: 40px;
        min-height: 40px;
        border-radius: 20px;
        font-size: ${theme.typography.pxToRem(16)};
        color: ${theme.colors.primary.main};
        padding: 0 ${theme.spacing(1.5)};

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

  const [currentTab, setCurrentTab] = useState('work-orders');

  const tabs = [
    { value: 'work-orders', label: t('Work Orders') },
    { value: 'request', label: t('Work Request System') },
    { value: 'mobile', label: t('Mobile App') },
    { value: 'asset', label: t('Asset Management') },
    { value: 'preventative', label: t('Preventative Maintenance') },
    { value: 'part', label: t('Parts Inventory') },
    { value: 'dashboard', label: t('Custom Dashboards') }
    // { value: 'auth', label: t('Custom Dashboards') },
    // { value: 'rtl', label: t('Custom Dashboards') }
  ];

  const featuresConfiguration = {
    'work-orders': {
      title: 'Manage your Work Orders like a Boss',
      descriptions: [
        'Sick of the reams of paperwork and lost Work Orders? All of those lost items directly affect the bottom line and your reputation.',
        'With Grash you can easily and quickly organize all of your Work Orders, PMs and other Tasks throughout your team in a centralized database that can be accessed anywhere on any device.'
      ],
      checks: [
        'View all of your Tasks including WOs, PMs, and Work Requests',
        'Set Task priority so the right work gets done first.',
        'View a calendar of current and upcoming Tasks.',
        'View work assignments with critical information such as Asset information, due date, priority and more.',
        'View critical KPIs such as actual completed work, time spent and planned vs unplanned work.'
      ],
      image: '/static/images/overview/performance.png'
    },
    request: {
      title: 'A streamlined mobile work request system',
      descriptions: [
        'Sick of using the old phone and email system that result in LOST tickets, constant daily interruptions, and duplicated work?',
        'Grash’s maintenance management solution allows anyone you authorize to submit a problem to your maintenance department by simply scanning a QR code (bar code) or visiting a URL and typing in their request through their mobile devices.'
      ],
      checks: [
        'Never lose Work again.',
        'Reduce time spent handling Work Requests by up to 34%.',
        'Reduce time communicating with Requesters by up to 41% (calls, emails, texts).'
      ],
      image: '/static/images/overview/performance.png'
    },
    mobile: {
      title: 'A mobile CMMS app that empowers your maintenance team',
      descriptions: [
        'Through the use of our Android and IOS mobile apps, our clients experience better organization, communication, accountability and productivity by up to 30% throughout their entire maintenance team.',
        'From their handheld device anyone on your maintenance team can:'
      ],
      checks: [
        'View their assigned Work Orders and PMs.',
        'Log their Work Orders within under 60 seconds',
        'Receive instant communications via push and email notifications.',
        'Start new Work Orders while out in the field.',
        'Respond to and log problems while actually working on the problem.',
        'Lookup critical asset information while diagnosing a problem.'
      ],
      image: '/static/images/overview/performance.png'
    },
    asset: {
      title: 'Enterprise Asset Management',
      descriptions: [
        'Frustrated with trying to organize the chaotic mess of company’s equipment, wondering if the equipment has been properly taken care of, not knowing what they cost to maintain and all the other headaches that come with managing assets?',
        'Grash CMMS’s Enterprise Asset Management module can be used for anywhere between 10 to 1,000,000 Assets, allowing you to track exactly what you want, the way you want to, in an easy-to-use and searchable tree structure.'
      ],
      checks: [
        'Know the health of your assets at every point of time and what they are costing you',
        'View complete and detailed Maintenance Logs.',
        'Track only what you want with unlimited custom fields',
        'Organize your assets in a clear parent-to-child hierarchy',
        'Find information quickly and easily with QR Codes (bar codes)',
        'Receive real-time asset data with sensor connectivity.'
      ],
      image: '/static/images/overview/performance.png'
    },
    preventative: {
      title: 'An Effective Preventative Maintenance Program',
      descriptions: [
        'Stop wasting precious hours manually distributing PM checklists and following up with your team to make sure the work is done.',
        'Grash allows you to easily automate PM scheduling so the right work is automatically delivered at the right time to the right technician for the right Asset.'
      ],
      checks: [
        'Automate PM scheduling to be daily, weekly, monthly, yearly, or based on events or meter readings.',
        'Automatic push and email notifications when a PM is created or due.',
        'Our easy-to-use Calendar allows you to view all open work and upcoming PM schedules.',
        'Drag and drop to change due date.',
        'Upon PM completion, the work is automatically logged in the asset’s maintenance log.',
        'Requires little to no training to use'
      ],
      image: '/static/images/overview/performance.png'
    },
    part: {
      title: 'Get Control of your Spare Parts Inventory',
      descriptions: [
        'Not sure what parts you have in stock or where they are being used? Don’t know when your parts will run out or if your technicians will have the necessary parts to do their jobs?',
        'We designed Grash’s parts management to solve those problems and more:'
      ],
      checks: [
        'Get instant push and email notifications when a part’s quantity is low. Keep the right number of parts in stock by receiving instant and automatic push/email notifications when the quantity of a part is below a custom set threshold.',
        'Technicians instantly know if the part is in stock from inside of a Work Order. If the part is not in stock easily check other locations to see if it is available.',
        'Automatic parts usage tracking. As Work Orders or PMs use parts, the inventory will be automatically updated to reflect the parts used.',
        'Know part usage. View Parts Log to see where the part is being used and by whom',
        'Eliminate unused parts. Know when a part has gone stale.',
        'Real Time Reporting. Know what parts are used where and how much they are costing you.',
        'Optimize stock levels. Instantly view forecasting for a part to see how many parts may be used within the next year.',
        'Barcode lookup. Make your inventory easy to track and access with custom QR codes.'
      ],
      image: '/static/images/overview/performance.png'
    },
    dashboard: {
      title: 'Get Control of your Spare Parts Inventory',
      descriptions: [
        'Let’s face it, the first step to improving your operations is to know the good, the bad and the ugly.',
        'With Grash’s Custom Dashboards you can finally start to understand that nefarious “black hole of maintenance” and begin putting data-backed plans into action, resulting in reduced labor costs, decreased downtime and more.',
        'With Grash’s Custom Dashboards you’ll get to …s'
      ],
      checks: [
        'Know where your money is being spent and why',
        'Know which asset is costing the most and why',
        'Create your own custom KPIs.',
        'View reports that are automatically generated and updated based on your metric',
        'View reports that are easily shared via Excel sheets, PDFs or within Grash',
        'And so much more ...'
      ],
      image: '/static/images/overview/performance.png'
    }
  };
  const CheckItem = ({ description }: { description: string }) => {
    return (
      <ListItem>
        <AvatarSuccess
          sx={{
            mr: 2
          }}
        >
          <CheckTwoToneIcon />
        </AvatarSuccess>
        <ListItemText primary={t(description)} />
      </ListItem>
    );
  };

  const Feature = ({
    title,
    descriptions,
    checks,
    image
  }: {
    title: string;
    descriptions: string[];
    checks: string[];
    image: string;
  }) => {
    return (
      <Grid
        sx={{
          mt: 8
        }}
        container
        spacing={4}
      >
        <Grid item xs={12} md={6}>
          <Typography sx={{ mb: 1 }} variant="h2">
            {t(title)}.
          </Typography>
          {descriptions.map((description, index) => (
            <Box key={index}>
              <Typography variant="subtitle2">{t(description)}</Typography>
              <br />
            </Box>
          ))}
          <List
            disablePadding
            sx={{
              mt: 2
            }}
          >
            {checks.map((desc, index) => (
              <CheckItem key={index} description={desc} />
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <BlowWrapper>
            <Blob1 />
            <Blob2 />
            <CardImageWrapper>
              <img src={image} alt="Grash" />
            </CardImageWrapper>
          </BlowWrapper>
        </Grid>
      </Grid>
    );
  };
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
                What
              </TypographyFeature>
              <TypographyHeading
                className="typo-heading"
                sx={{
                  mb: 1
                }}
                variant="h3"
              >
                You'll have
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
                  'Build efficient, reliable workflows that put you in control of maintenance. Generate, assign, and track work orders. Control inventory. And get reliable automated reports that improve visibility and create accountability.'
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
                to="/extended-sidebar/dashboards"
              >
                <Typography variant="h4">{t('Extended Sidebar')}</Typography>
                <img
                  src="/static/images/overview/extended_sidebar.png"
                  alt="Extended Sidebar"
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
            <Box>
              <TypographyHeading
                sx={{
                  mb: 1
                }}
                variant="h3"
              >
                {t('Work')}
              </TypographyHeading>
              <TypographyFeature>{t('Smarter')}</TypographyFeature>
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
                  'Grash makes it incredibly easy for technicians to work efficiently by giving them access to the tools and data they need to get work done — all from the palm of their hand.'
                )}
              </TypographySubHeading>
            </Box>
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
              'Some of the features that make Grash one of the best CMMS availables today'
            )}
          </TypographyH2>
        </Container>
        <TabsContainerWrapper sx={{ justifyContent: 'flex-start' }}>
          <Tabs
            onChange={handleTabsChange}
            value={currentTab}
            variant="scrollable"
            scrollButtons={false}
            textColor="primary"
            indicatorColor="primary"
          >
            {tabs.map((tab) => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </Tabs>
        </TabsContainerWrapper>
        {Object.entries(featuresConfiguration).map(([feature, config]) => {
          return (
            <>
              {currentTab === feature && (
                <Feature
                  title={config.title}
                  descriptions={config.descriptions}
                  checks={config.checks}
                  image={config.image}
                />
              )}
            </>
          );
        })}
        {currentTab === 'auth' && (
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
        {currentTab === 'rtl' && (
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
          {t(
            'Leading the Way to a Better Future for Maintenance and Reliability'
          )}
        </TypographyH1Primary>
        <Container
          sx={{
            mb: 6,
            textAlign: 'center'
          }}
          maxWidth="sm"
        >
          <Button
            component={RouterLink}
            size="large"
            to="/extended-sidebar/dashboards"
            variant="contained"
          >
            {t('Start a Free trial')}
          </Button>
        </Container>
      </Container>
    </BoxHighlights>
  );
}

export default Highlights;
