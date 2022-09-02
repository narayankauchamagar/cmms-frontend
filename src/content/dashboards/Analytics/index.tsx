import PageHeader from './PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Helmet } from 'react-helmet-async';

import AudienceOverview from './AudienceOverview';
import Conversions from './Conversions';
import TopLandingPages from './TopLandingPages';
import ActiveReferrals from './ActiveReferrals';
import PendingInvitations from './PendingInvitations';
import BounceRate from './BounceRate';
import ConversionsAlt from './ConversionsAlt';
import SessionsByCountry from './SessionsByCountry';
import TrafficSources from './TrafficSources';
import { Grid } from '@mui/material';

function DashboardAnalytics() {
  return (
    <>
      <Helmet>
        <title>Analytics Dashboard</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Grid
        sx={{
          px: 4
        }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={4}
      >
        <Grid item lg={8} md={6} xs={12}>
          <Grid
            container
            spacing={4}
            direction="row"
            justifyContent="center"
            alignItems="stretch"
          >
            <Grid item sm={6} xs={12}>
              <ActiveReferrals />
            </Grid>
            <Grid item sm={6} xs={12}>
              <PendingInvitations />
            </Grid>
            <Grid item sm={6} xs={12}>
              <BounceRate />
            </Grid>
            <Grid item sm={6} xs={12}>
              <ConversionsAlt />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <SessionsByCountry />
        </Grid>
        <Grid item xs={12}>
          <AudienceOverview />
        </Grid>
        <Grid item md={5} xs={12}>
          <Conversions />
        </Grid>
        <Grid item md={7} xs={12}>
          <TopLandingPages />
        </Grid>
        <Grid item xs={12}>
          <TrafficSources />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default DashboardAnalytics;
