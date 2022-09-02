import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import Footer from 'src/components/Footer';
import { Grid } from '@mui/material';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import TimeSpent from './TimeSpent';
import TopTrainers from './TopTrainers';
import Leaderboard from './Leaderboard';
import UpcomingConferences from './UpcomingConferences';
import RecentCourses from './RecentCourses';

function DashboardLearning() {
  return (
    <>
      <Helmet>
        <title>Learning Dashboard</title>
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
        <Grid item xs={12}>
          <TimeSpent />
        </Grid>
        <Grid item xs={12} md={6}>
          <TopTrainers />
        </Grid>
        <Grid item xs={12} md={6}>
          <Leaderboard />
        </Grid>
        <Grid item xs={12}>
          <UpcomingConferences />
        </Grid>
        <Grid item xs={12}>
          <RecentCourses />
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}

export default DashboardLearning;
