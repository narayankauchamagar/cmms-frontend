import { Container, Grid, List, ListItem, Typography } from '@mui/material';

import { Helmet } from 'react-helmet-async';
import PageHeader from 'src/components/PageHeaderDocs';

function Changelog() {
  return (
    <>
      <Helmet>
        <title>Changelog - Tokyo White React Typescript Admin Dashboard</title>
      </Helmet>
      <Container maxWidth={false}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <PageHeader heading="Changelog" subheading="" />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h2"
              sx={{
                mb: 2
              }}
            >
              Version 3.1
            </Typography>
            <Typography
              component="span"
              fontWeight="normal"
              variant="h3"
              color="text.secondary"
            >
              Released on: <b>6 June 2022</b>
            </Typography>
            <br />
            <br />
            <List>
              <ListItem>
                Updated to latest version of MUI (Material-UI) version 5.
              </ListItem>
              <ListItem>
                Updated all dependencies to their newest versions.
              </ListItem>
              <ListItem>Updated react-router to version 6.3</ListItem>
              <ListItem>
                Fixed responsive issues related to login/register pages.
              </ListItem>
              <ListItem>
                Added closable sidebar for chart application example.
              </ListItem>
              <ListItem>
                Various small fixes and optimisations across multiple files.
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h2"
              sx={{
                mb: 2
              }}
            >
              Version 3.0
            </Typography>
            <Typography
              component="span"
              fontWeight="normal"
              variant="h3"
              color="text.secondary"
            >
              Released on: <b>30 November 2021</b>
            </Typography>
            <br />
            <br />
            <List>
              <ListItem>
                Updated to latest version of MUI (Material-UI) version 5.
              </ListItem>
              <ListItem>
                Updated all dependencies to their newest versions.
              </ListItem>
              <ListItem>Added 3 new dashboard pages</ListItem>
              <ListItem>
                Added 1 new layout blueprint (Extended Sidebar) which is now the
                default one.
              </ListItem>
              <ListItem>Small design improvements across most pages.</ListItem>
              <ListItem>
                Added new "Blocks" section with over 250 new components.
              </ListItem>
              <ListItem>
                Replaced Chart.js with ApexCharts. Kept a few Chart.js examples
                if you still want to use it.
              </ListItem>
              <ListItem>Fixed responsive issues.</ListItem>
              <ListItem>
                Replaced depricated MUI hidden component with sx prop
                functionality
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h2"
              sx={{
                mb: 2
              }}
            >
              Version 2.5
            </Typography>
            <Typography
              component="span"
              fontWeight="normal"
              variant="h3"
              color="text.secondary"
            >
              Released on: <b>12 October 2021</b>
            </Typography>
            <br />
            <br />
            <List>
              <ListItem>
                Updated to latest version of MUI (Material-UI) version 5.
              </ListItem>
              <ListItem>
                Updated all dependencies to their newest versions.
              </ListItem>
              <ListItem>Main content area is now always full width.</ListItem>
              <ListItem>Added 5 new layouts blueprints.</ListItem>
              <ListItem>
                Improvements for the default layout (Accent Header Layout).
              </ListItem>
              <ListItem>Added new dashboard for IOT devices.</ListItem>
              <ListItem>
                Fixed various small design bugs on some pages.
              </ListItem>
              <ListItem>
                Template options are now more visible under a separate settings
                button.
              </ListItem>
              <ListItem>Added Noty notifications where needed.</ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h2"
              sx={{
                mb: 2
              }}
            >
              Version 2.0.0
            </Typography>
            <Typography
              component="span"
              fontWeight="normal"
              variant="h3"
              color="text.secondary"
            >
              Released on: <b>3 August 2021</b>
            </Typography>
            <br />
            <br />
            <List>
              <ListItem>
                Updated to latest version of MUI (Material-UI) version 5.
              </ListItem>
              <ListItem>
                Updated all dependencies to their newest versions.
              </ListItem>
              <ListItem>
                Small design improvements, like moving the Logo component to the
                left side of the sidebar.
              </ListItem>
              <ListItem>
                Codebase fixes to suit the latest MUI (Material-UI)
                modifications.
              </ListItem>
              <ListItem>
                Moved the react helmet component from a generic component
                wrapper to a per page implementation.
              </ListItem>
              <ListItem>
                Removed react-ga for Google Analytics tracking
              </ListItem>
              <ListItem>
                Updated to react-router version 6 and improved the router.tsx
                file for better performance and ease of use.
              </ListItem>
              <ListItem>
                Fixed a sidebar menu bug that prevented a collapsable section to
                remain active when a child link was active.
              </ListItem>
              <ListItem>Added a new auth method: AWS Amplify.</ListItem>
              <ListItem>
                Added two new color schemes: Green Fields and Purple Flow.
              </ListItem>
              <ListItem>
                Improved the landing page design and user experience.
              </ListItem>
              <ListItem>
                Removed uuid dependency used for the mocks random id generation.
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h2"
              sx={{
                mb: 2
              }}
            >
              Version 1.5.0
            </Typography>
            <Typography
              component="span"
              fontWeight="normal"
              variant="h3"
              color="text.secondary"
            >
              Released on: <b>9 April 2021</b>
            </Typography>
            <br />
            <br />
            <List>
              <ListItem>
                fix wrong date formatting in{' '}
                <code>src\content\management\Users\single\SecurityTab.tsx</code>
              </ListItem>
              <ListItem>
                Added two new layouts: "Accent Header", "Accent Sidebar"
              </ListItem>
              <ListItem>Fixed pagination active item shadow</ListItem>
              <ListItem>Fixed ref prop for Projects Board card</ListItem>
              <ListItem>Replaced react-helmet with react-helmet-async</ListItem>
              <ListItem>Added react-ga for Google Analytics tracking</ListItem>
              <ListItem>
                Added a global component for all page title sections
              </ListItem>
              <ListItem>
                Changed live preview dummy password to a different value
              </ListItem>
              <ListItem>Added Javascript template version</ListItem>
              <ListItem>Added Sketch design files</ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h2"
              sx={{
                mb: 2
              }}
            >
              Version 1.0.0
            </Typography>
            <Typography
              component="span"
              fontWeight="normal"
              variant="h3"
              color="text.secondary"
            >
              Released on: <b>6 April 2021</b>
            </Typography>
            <br />
            <br />
            <List>
              <ListItem>initial version, first release</ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Changelog;
