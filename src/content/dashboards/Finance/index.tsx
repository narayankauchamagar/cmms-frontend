import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid } from '@mui/material';
import Footer from 'src/components/Footer';

import RecentTransactions from './RecentTransactions';
import MyCards from './MyCards';
import UpgradeAccount from './UpgradeAccount';
import Budget from './Budget';
import AllExpenses from './AllExpenses';
import ActiveSubscriptions from './ActiveSubscriptions';

function DashboardFinance() {
  return (
    <>
      <Helmet>
        <title>Finance Dashboard</title>
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
        <Grid item lg={7} md={6} xs={12}>
          <RecentTransactions />
        </Grid>
        <Grid item lg={5} md={6} xs={12}>
          <MyCards />
        </Grid>
        <Grid item xs={12}>
          <UpgradeAccount />
        </Grid>
        <Grid item xs={12}>
          <ActiveSubscriptions />
        </Grid>
        <Grid item md={6} lg={5} xs={12}>
          <Budget />
        </Grid>
        <Grid item md={6} lg={7} xs={12}>
          <AllExpenses />
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}

export default DashboardFinance;
