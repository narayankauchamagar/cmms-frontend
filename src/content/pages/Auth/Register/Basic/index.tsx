import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Card,
  Link,
  Tooltip,
  Typography,
  Container,
  Alert,
  styled
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import useAuth from 'src/hooks/useAuth';
import Auth0Register from '../RegisterAuth0';
import FirebaseAuthRegister from '../RegisterFirebaseAuth';
import JWTRegister from '../RegisterJWT';
import AmplifyRegister from '../RegisterAmplify';
import { useTranslation } from 'react-i18next';
import Logo from 'src/components/LogoSign';

const icons = {
  Auth0: '/static/images/logo/auth0.svg',
  FirebaseAuth: '/static/images/logo/firebase.svg',
  JWT: '/static/images/logo/jwt.svg',
  Amplify: '/static/images/logo/amplify.svg'
};

const CardImg = styled(Card)(
  ({ theme }) => `
    width: 90px;
    height: 80px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: ${theme.colors.alpha.white[100]};
    margin: 0 ${theme.spacing(1)};
    border: 1px solid ${theme.colors.alpha.black[10]};
    transition: ${theme.transitions.create(['all'])};

    &:hover {
      border-color: ${theme.colors.primary.main};
    }
`
);
const BottomWrapper = styled(Box)(
  ({ theme }) => `
    padding: ${theme.spacing(3)};
    display: flex;
    align-items: center;
    justify-content: center;
`
);

const MainContent = styled(Box)(
  () => `
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
`
);

const TopWrapper = styled(Box)(
  () => `
  display: flex;
  width: 100%;
  flex: 1;
  padding: 20px;
`
);

function RegisterBasic() {
  const { method } = useAuth() as any;
  const { t }: { t: any } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Register - Basic</title>
      </Helmet>
      <MainContent>
        <TopWrapper>
          <Container maxWidth="sm">
            <Logo />
            <Card
              sx={{
                mt: 3,
                px: 4,
                pt: 5,
                pb: 3
              }}
            >
              <Box>
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
                <Link component={RouterLink} to="/account/login-basic">
                  <b>{t('Sign in here')}</b>
                </Link>
              </Box>
            </Card>
            <BottomWrapper>
              <Box mb={3}>
                <Tooltip arrow placement="top" title="Auth0">
                  <CardImg>
                    <img height={50} alt="Auth0" src={icons['Auth0']} />
                  </CardImg>
                </Tooltip>
                <Tooltip arrow placement="top" title="Firebase">
                  <CardImg>
                    <img
                      height={50}
                      alt="Firebase"
                      src={icons['FirebaseAuth']}
                    />
                  </CardImg>
                </Tooltip>
                <Tooltip arrow placement="top" title="JSON Web Token">
                  <CardImg>
                    <img height={50} alt="JSON Web Token" src={icons['JWT']} />
                  </CardImg>
                </Tooltip>
                <Tooltip arrow placement="top" title="Amplify">
                  <CardImg>
                    <img height={50} alt="Amplify" src={icons['Amplify']} />
                  </CardImg>
                </Tooltip>
              </Box>
            </BottomWrapper>
            <Alert severity="warning">
              {t(
                'Learn how to switch between auth methods by reading the section we’ve prepared in the documentation.'
              )}
            </Alert>
          </Container>
        </TopWrapper>
      </MainContent>
    </>
  );
}

export default RegisterBasic;
