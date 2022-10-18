import { Container, Typography, Grid } from '@mui/material';

import { Helmet } from 'react-helmet-async';
import PageHeader from 'src/components/PageHeaderDocs';
import { Prism } from 'react-syntax-highlighter';
import a11yDark from 'react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark';

function Authentication() {
  const switchAuth = `// use this for JWT Web Tokens

import AuthContext from 'src/contexts/JWTAuthContext';

// use this for Firebase

import AuthContext from 'src/contexts/FirebaseAuthContext';

// use this for Amplify

import AuthContext from 'src/contexts/AmplifyAuthContext';

// use this for Auth0

import AuthContext from 'src/contexts/Auth0Context';`;

  const switchAuthApp = `// use this for JWT Web Tokens
  
import { AuthProvider } from './contexts/JWTAuthContext';

// use this for Firebase

import { AuthProvider } from './contexts/FirebaseAuthContext';

// use this for Amplify

import { AuthProvider } from './contexts/AmplifyAuthContext';

// use this for Auth0

import { AuthProvider } from './contexts/Auth0Context';`;

  const retrieveUserData = `import useAuth from 'src/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

function HeaderUserbox() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async (): Promise<void> => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      My name is: {user.firstName}

      My avatar is: <img src={user.firstName} alt={user.firstName} />

      <Button color="primary" onClick={handleLogout}>
        Sign out
      </Button>
    </>
  )
}`;

  return (
    <>
      <Helmet>
        <title>
          Authentication - Tokyo White React Typescript Admin Dashboard
        </title>
      </Helmet>
      <Container maxWidth={false}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <PageHeader heading="Authentication" subheading="" />
          </Grid>
          <Grid item xs={12}>
            <Typography paragraph>
              Tokyo White React Typescript Admin Dashboard includes four
              separate authentication methods, that are basic examples to give
              you a starting point. The included auth methotds are:{' '}
              <b>JWT Web Tokens</b>, <b>Firebase</b>, <b>Auth0</b> and{' '}
              <b>AWS Amplify</b>
            </Typography>
            <br />
            <Typography
              sx={{
                mb: 2
              }}
              variant="h2"
            >
              Switching between auth methods
            </Typography>
            <Typography paragraph>
              Switching to a different auth method is easy. You just have to
              change an import to point to your designed auth method. By
              default, Tokyo White React Typescript Admin Dashboard comes with
              JWT Web Tokens enabled.
            </Typography>
            <Typography paragraph>
              To switch to a different auth method you need to open{' '}
              <code>\src\hooks\useAuth.ts</code> and import the{' '}
              <code>AuthContext</code> from a different provider, like in the
              example below.
            </Typography>
            <Prism
              showLineNumbers
              wrapLines
              language="javascript"
              style={a11yDark}
            >
              {switchAuth}
            </Prism>
            <br />
            <Typography paragraph>
              Based on the auth method chosen above, you need to also modify{' '}
              <code>src\index.tsx</code> to point to the new auth method. You
              need to import the chosen auth provider just like in the example
              below.
            </Typography>
            <Prism
              showLineNumbers
              wrapLines
              language="javascript"
              style={a11yDark}
            >
              {switchAuthApp}
            </Prism>
            <br />
            <Typography
              sx={{
                mb: 2
              }}
              variant="h2"
            >
              Retrieving user data &amp; auth actions
            </Typography>
            <Typography paragraph>
              Inspect the following file to see how you can retrieve user data
              based on auth method:{' '}
              <code>
                src\layouts\ExtendedSidebarLayout\Header\Userbox\index.tsx
              </code>
              .
            </Typography>
            <Typography paragraph>
              We extracted, in the example below, only the auth related part
              from the Userbox\index.tsx file:
            </Typography>
            <Prism
              showLineNumbers
              wrapLines
              language="javascript"
              style={a11yDark}
            >
              {retrieveUserData}
            </Prism>
            <br />
            <Typography
              sx={{
                mb: 2
              }}
              variant="h2"
            >
              Firebase
            </Typography>
            <Typography paragraph>
              Firebase Authentication aims to make building secure
              authentication systems easy, while improving the sign-in and
              onboarding experience for end users. It provides an end-to-end
              identity solution, supporting email and password accounts, phone
              auth, and Google, Twitter, Facebook, and GitHub login, and more.
            </Typography>
            <Typography paragraph>
              In order to use the Firebase auth method you will need a Firebase
              account and configuration. You can edit the configuration inside{' '}
              <code>src\config.ts</code> which pulls it's variables from{' '}
              <code>/.env</code>. There is a sample .env file available at{' '}
              <code>/env.example</code>. You'll need to populate it with your
              account settings and rename it to .env
            </Typography>

            <br />
            <Typography
              sx={{
                mb: 2
              }}
              variant="h2"
            >
              AWS Amplify
            </Typography>
            <Typography paragraph>
              AWS Amplify is a set of purpose-built tools and services that
              helps front-end web and mobile developers build full-stack
              applications on AWS faster, with the flexibility to leverage the
              breadth of AWS services to further customize an app.
            </Typography>
            <Typography paragraph>
              In order to use the Amplify auth method you will need a Amplify
              account and configuration. You can edit the configuration inside{' '}
              <code>src\config.ts</code> which pulls it's variables from{' '}
              <code>/.env</code>. There is a sample .env file available at{' '}
              <code>/env.example</code>. You'll need to populate it with your
              account settings and rename it to .env
            </Typography>

            <br />
            <Typography
              sx={{
                mb: 2
              }}
              variant="h2"
            >
              Auth0
            </Typography>
            <Typography paragraph>
              Auth0 is an easy to implement, adaptable authentication and
              authorization platform.
            </Typography>
            <Typography paragraph>
              In order to use the Auth0 auth method you will need a Auth0
              account and configuration. You can edit the configuration inside{' '}
              <code>src\config.ts</code> which pulls it's variables from{' '}
              <code>/.env</code>. There is a sample .env file available at{' '}
              <code>/env.example</code>. You'll need to populate it with your
              account settings and rename it to .env
            </Typography>
            <br />
            <Typography
              sx={{
                mb: 2
              }}
              variant="h2"
            >
              JWT Web Tokens
            </Typography>
            <Typography paragraph>
              JSON Web Tokens are an open, industry standard RFC 7519 method for
              representing claims securely between two parties. JWT.IO allows
              you to decode, verify and generate JWT.
            </Typography>
            <Typography paragraph>
              Please note that you will need to integrate a backend service in
              order to use these auth methods in a live production application,
              as encoding/decoding the auth tokens needs to happen on server
              side.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Authentication;
