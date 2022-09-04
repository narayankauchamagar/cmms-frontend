import {
  Container,
  Grid,
  Typography,
  ListItemText,
  ListItem,
  List,
  Divider
} from '@mui/material';

import { Helmet } from 'react-helmet-async';
import PageHeader from 'src/components/PageHeaderDocs';
import { Prism } from 'react-syntax-highlighter';
import a11yDark from 'react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark';

function Installation() {
  const npmInstall = `// the -g parameter install npm globally on your system

npm install -g npm`;

  const npmDeps = `cd application-folder

npm install`;

  const devBuild = `Compiled successfully!

You can now view tokyo-white-react-admin-dashboard in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.215:3000

Note that the development build is not optimized.
To create a production build, use npm run build.`;

  const devRunBuild = `npm run start`;
  const prodRunBuild = `npm run build`;

  const prodBuildFinish = `The project was built assuming it is hosted at /.
  You can control this with the homepage field in your package.json.
  
  The build folder is ready to be deployed.
  You may serve it with a static server:
  
    serve -s build
  
  Find out more about deployment here:
  
    https://cra.link/deployment`;

  return (
    <>
      <Helmet>
        <title>
          Installation - Tokyo White React Typescript Admin Dashboard
        </title>
      </Helmet>
      <Container maxWidth={false}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <PageHeader heading="Installation" subheading="" />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h2"
              sx={{
                mb: 2
              }}
            >
              Setup
            </Typography>
            <Typography paragraph>
              Follow the instructions below in order to install the project
              dependencies and start a new browser instance.
            </Typography>
            <List>
              <ListItem
                sx={{
                  my: 2
                }}
              >
                <ListItemText
                  primaryTypographyProps={{ variant: 'h4', gutterBottom: true }}
                  secondaryTypographyProps={{ variant: 'subtitle2' }}
                  primary="Install Node.js"
                  secondary="Before proceeding you will need to have Node.js installed on your system. Download and install the latest stable version from https://nodejs.org/"
                />
              </ListItem>
              <Divider component="li" />
              <ListItem
                sx={{
                  my: 2
                }}
              >
                <ListItemText
                  primaryTypographyProps={{ variant: 'h4', gutterBottom: true }}
                  secondaryTypographyProps={{ variant: 'subtitle2' }}
                  primary="Install NPM"
                  secondary={
                    <>
                      You will need to have the last stable version of NPM
                      available. More informations about this package manager
                      can be found at https://www.npmjs.com/
                      <Typography
                        variant="h4"
                        sx={{
                          mt: 2
                        }}
                        gutterBottom
                      >
                        To install NPM run the following in a command line:
                      </Typography>
                      <Prism wrapLines language="javascript" style={a11yDark}>
                        {npmInstall}
                      </Prism>
                    </>
                  }
                />
              </ListItem>
              <Divider component="li" />
              <ListItem
                sx={{
                  my: 2
                }}
              >
                <ListItemText
                  primaryTypographyProps={{ variant: 'h4', gutterBottom: true }}
                  secondaryTypographyProps={{ variant: 'subtitle2' }}
                  primary="Install Project Dependencies"
                  secondary={
                    <>
                      The project dependencies are defined in the package.json
                      file. Run the command below inside the root folder to
                      install the dependencies.
                      <Prism wrapLines language="javascript" style={a11yDark}>
                        {npmDeps}
                      </Prism>
                    </>
                  }
                />
              </ListItem>
            </List>
            <br />
            <Typography
              variant="h2"
              sx={{
                mb: 2
              }}
            >
              Development Server
            </Typography>
            <Typography paragraph>
              After finishing with the dependencies install process, you can
              start a local development server and view the project in your
              browser.
            </Typography>
            <Typography paragraph>
              Inside the project folder run the following command. It takes a
              few minutes to complete the initial development build.
            </Typography>
            <Prism wrapLines language="javascript" style={a11yDark}>
              {devRunBuild}
            </Prism>
            <br />
            <Typography paragraph>
              When finished, a browser window will be opened at
              http://localhost:3000 and the terminal will show a message similar
              to the one below:
            </Typography>
            <Prism wrapLines language="javascript" style={a11yDark}>
              {devBuild}
            </Prism>
            <br />
            <Typography
              variant="h2"
              sx={{
                mb: 2
              }}
            >
              Production Build
            </Typography>
            <Typography paragraph>
              When ready to launch in production your new project, run the
              following command in a command line opened in the project folder:
            </Typography>
            <Prism wrapLines language="javascript" style={a11yDark}>
              {prodRunBuild}
            </Prism>
            <br />
            <Typography paragraph>
              This will create a production-ready build of your project. If the
              build completed successfully, you will see in your terminal window
              a message similar to the one below:
            </Typography>
            <Prism wrapLines language="javascript" style={a11yDark}>
              {prodBuildFinish}
            </Prism>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Installation;
