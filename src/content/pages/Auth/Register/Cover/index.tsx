import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Card,
  Container,
  Divider,
  Link,
  ListItemText,
  ListItem,
  List,
  ListItemIcon,
  IconButton,
  Typography,
  styled
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import useAuth from 'src/hooks/useAuth';
import Auth0Register from '../RegisterAuth0';
import FirebaseAuthRegister from '../RegisterFirebaseAuth';
import JWTRegister from '../RegisterJWT';
import AmplifyRegister from '../RegisterAmplify';
import { useTranslation } from 'react-i18next';
import CheckCircleOutlineTwoToneIcon from '@mui/icons-material/CheckCircleOutlineTwoTone';
import Scrollbar from 'src/components/Scrollbar';
import Logo from 'src/components/LogoSign';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import ChevronLeftTwoToneIcon from '@mui/icons-material/ChevronLeftTwoTone';

const icons = {
  Auth0: '/static/images/logo/auth0.svg',
  FirebaseAuth: '/static/images/logo/firebase.svg',
  JWT: '/static/images/logo/jwt.svg',
  Amplify: '/static/images/logo/amplify.svg'
};

const Content = styled(Box)(
  () => `
    display: flex;
    flex: 1;
    width: 100%;
`
);

const MainContent = styled(Box)(
  ({ theme }) => `
    @media (min-width: ${theme.breakpoints.values.md}px) {
      padding: 0 0 0 500px;
    }
    width: 100%;
    display: flex;
    align-items: center;
`
);

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 500px;
  background: ${theme.colors.gradients.blue3};
`
);

const SidebarContent = styled(Box)(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing(6)};
`
);

const CardImg = styled(Card)(
  ({ theme }) => `
    border-radius: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 11px solid ${theme.colors.alpha.trueWhite[10]};
    transition: ${theme.transitions.create(['border'])};
    width: ${theme.spacing(16)};
    height: ${theme.spacing(16)};
    margin-bottom: ${theme.spacing(3)};
`
);

const SwipeIndicator = styled(IconButton)(
  ({ theme }) => `
        color: ${theme.colors.alpha.trueWhite[50]};
        width: ${theme.spacing(6)};
        height: ${theme.spacing(6)};
        border-radius: 100px;
        transition: ${theme.transitions.create(['background', 'color'])};

        &:hover {
          color: ${theme.colors.alpha.trueWhite[100]};
          background: ${theme.colors.alpha.trueWhite[10]};
        }
`
);

const LogoWrapper = styled(Box)(
  ({ theme }) => `
    position: fixed;
    left: ${theme.spacing(4)};
    top: ${theme.spacing(4)};
`
);

const TypographyPrimary = styled(Typography)(
  ({ theme }) => `
      color: ${theme.colors.alpha.trueWhite[100]};
`
);

const TypographySecondary = styled(Typography)(
  ({ theme }) => `
      color: ${theme.colors.alpha.trueWhite[70]};
`
);

const DividerWrapper = styled(Divider)(
  ({ theme }) => `
      background: ${theme.colors.alpha.trueWhite[10]};
`
);

const ListItemTextWrapper = styled(ListItemText)(
  ({ theme }) => `
      color: ${theme.colors.alpha.trueWhite[70]};
`
);
const ListItemIconWrapper = styled(ListItemIcon)(
  ({ theme }) => `
      color: ${theme.colors.success.main};
      min-width: 32px;
`
);

const SwiperWrapper = styled(Box)(
  ({ theme }) => `
      .swiper-pagination {
        .swiper-pagination-bullet {
          background: ${theme.colors.alpha.trueWhite[30]};
          opacity: 1;
          transform: scale(1);

          &.swiper-pagination-bullet-active {
            background: ${theme.colors.alpha.trueWhite[100]};
            width: 16px;
            border-radius: 6px;
          }
        }
      }
`
);

function RegisterCover() {
  const { method } = useAuth() as any;
  const { t }: { t: any } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Register - Cover</title>
      </Helmet>
      <Content>
        <SidebarWrapper
          sx={{
            display: { xs: 'none', md: 'inline-block' }
          }}
        >
          <Scrollbar>
            <SidebarContent>
              <Box mb={2} display="flex" justifyContent="center">
                <SwipeIndicator className="MuiSwipe-root MuiSwipe-left">
                  <ChevronLeftTwoToneIcon fontSize="large" />
                </SwipeIndicator>
                <SwipeIndicator className="MuiSwipe-root MuiSwipe-right">
                  <ChevronRightTwoToneIcon fontSize="large" />
                </SwipeIndicator>
              </Box>
              <TypographyPrimary
                align="center"
                variant="h3"
                sx={{
                  mb: 4,
                  px: 8
                }}
              >
                {t('Multiple authentication methods available')}
              </TypographyPrimary>
              <SwiperWrapper>
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  loop
                  navigation={{
                    nextEl: '.MuiSwipe-right',
                    prevEl: '.MuiSwipe-left'
                  }}
                  // @ts-ignore
                  modules={[Navigation, Pagination]}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true
                  }}
                >
                  <SwiperSlide>
                    <Box textAlign="center">
                      <CardImg>
                        <img
                          height={80}
                          alt="JSON Web Token"
                          src={icons['Auth0']}
                        />
                      </CardImg>
                      <TypographyPrimary
                        align="center"
                        variant="h3"
                        sx={{
                          mb: 2
                        }}
                      >
                        Auth0
                      </TypographyPrimary>
                      <TypographySecondary
                        align="center"
                        variant="subtitle2"
                        sx={{
                          mb: 5
                        }}
                      >
                        Auth0 is an easy to implement, adaptable authentication
                        and authorization platform.
                      </TypographySecondary>
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box textAlign="center">
                      <CardImg>
                        <img
                          height={80}
                          alt="AWS Amplify"
                          src={icons['Amplify']}
                        />
                      </CardImg>
                      <TypographyPrimary
                        align="center"
                        variant="h3"
                        sx={{
                          mb: 2
                        }}
                      >
                        AWS Amplify
                      </TypographyPrimary>
                      <TypographySecondary
                        align="center"
                        variant="subtitle2"
                        sx={{
                          mb: 5
                        }}
                      >
                        Build scalable mobile and web apps fast, with endless
                        flexibility.
                      </TypographySecondary>
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box textAlign="center">
                      <CardImg>
                        <img
                          height={80}
                          alt="JSON Web Token"
                          src={icons['JWT']}
                        />
                      </CardImg>
                      <TypographyPrimary
                        align="center"
                        variant="h3"
                        sx={{
                          mb: 2
                        }}
                      >
                        JSON Web Token
                      </TypographyPrimary>
                      <TypographySecondary
                        align="center"
                        variant="subtitle2"
                        sx={{
                          mb: 5
                        }}
                      >
                        JSON Web Tokens are an open method for representing
                        claims securely between two parties.
                      </TypographySecondary>
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box textAlign="center">
                      <CardImg>
                        <img
                          height={80}
                          alt="Firebase"
                          src={icons['FirebaseAuth']}
                        />
                      </CardImg>
                      <TypographyPrimary
                        align="center"
                        variant="h3"
                        sx={{
                          mb: 2
                        }}
                      >
                        Firebase
                      </TypographyPrimary>
                      <TypographySecondary
                        align="center"
                        variant="subtitle2"
                        sx={{
                          mb: 5
                        }}
                      >
                        Firebase helps teams from startups to global enterprises
                        build &amp; run successful apps.
                      </TypographySecondary>
                    </Box>
                  </SwiperSlide>
                </Swiper>
              </SwiperWrapper>

              <DividerWrapper
                sx={{
                  mt: 3,
                  mb: 4
                }}
              />
              <Box>
                <TypographyPrimary
                  variant="h3"
                  sx={{
                    mb: 3
                  }}
                >
                  {t('Start your free trial today')}
                </TypographyPrimary>

                <List
                  dense
                  sx={{
                    mb: 3
                  }}
                >
                  <ListItem disableGutters>
                    <ListItemIconWrapper>
                      <CheckCircleOutlineTwoToneIcon />
                    </ListItemIconWrapper>
                    <ListItemTextWrapper
                      primaryTypographyProps={{ variant: 'h6' }}
                      primary={t('premium features included')}
                    />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIconWrapper>
                      <CheckCircleOutlineTwoToneIcon />
                    </ListItemIconWrapper>
                    <ListItemTextWrapper
                      primaryTypographyProps={{ variant: 'h6' }}
                      primary={t('no credit card required')}
                    />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIconWrapper>
                      <CheckCircleOutlineTwoToneIcon />
                    </ListItemIconWrapper>
                    <ListItemTextWrapper
                      primaryTypographyProps={{ variant: 'h6' }}
                      primary={t('modern development solutions')}
                    />
                  </ListItem>
                </List>
              </Box>
            </SidebarContent>
          </Scrollbar>
        </SidebarWrapper>
        <MainContent>
          <LogoWrapper
            sx={{
              display: { xs: 'none', sm: 'inline-block' }
            }}
          >
            <Logo />
          </LogoWrapper>
          <Container maxWidth="sm">
            <Card
              sx={{
                p: 4,
                my: 4
              }}
            >
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  sx={{
                    mb: 1
                  }}
                >
                  {t('Create account')}
                </Typography>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  fontWeight="normal"
                  sx={{
                    mb: 3
                  }}
                >
                  {t('Fill in the fields below to sign up for an account.')}
                </Typography>
              </Box>
              {method === 'Auth0' && <Auth0Register />}
              {method === 'FirebaseAuth' && <FirebaseAuthRegister />}
              {method === 'JWT' && <JWTRegister />}
              {method === 'Amplify' && <AmplifyRegister />}
              <Box mt={4}>
                <Typography
                  component="span"
                  variant="subtitle2"
                  color="text.primary"
                  fontWeight="bold"
                >
                  {t('Already have an account?')}
                </Typography>{' '}
                <Box display={{ xs: 'block', md: 'inline-block' }}>
                  <Link component={RouterLink} to="/account/login">
                    <b>{t('Sign in here')}</b>
                  </Link>
                </Box>
              </Box>
            </Card>
          </Container>
        </MainContent>
      </Content>
    </>
  );
}

export default RegisterCover;
