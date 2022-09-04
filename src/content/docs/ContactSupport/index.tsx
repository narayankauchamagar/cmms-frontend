import { Container, Typography, Grid } from '@mui/material';

import { Helmet } from 'react-helmet-async';
import PageHeader from 'src/components/PageHeaderDocs';

function ContactSupport() {
  return (
    <>
      <Helmet>
        <title>
          Contact Support - Tokyo White React Typescript Admin Dashboard
        </title>
      </Helmet>
      <Container maxWidth={false}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <PageHeader heading="Contact Support" subheading="" />
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{
                mb: 2
              }}
              variant="h2"
            >
              Support Tickets
            </Typography>
            <Typography paragraph>
              If you need help you can open a support ticket by sending an email
              to <code>support@bloomui.freshdesk.com</code>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ContactSupport;
