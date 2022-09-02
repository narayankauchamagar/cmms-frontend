import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import { Grid } from '@mui/material';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import Transfers from './Transfers';
import Bills from './Bills';
import Requests from './Requests';
import Payments from './Payments';
import MainAccount from './MainAccount';
import SecondaryAccounts from './SecondaryAccounts';
import Investments from './Investments';
import TransactionsStatistics from './TransactionsStatistics';

function DashboardBanking() {
  return (
    <>
      <Helmet>
        <title>Banking Dashboard</title>
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
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item lg={3} sm={6} xs={12}>
              <Transfers />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <Bills />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <Requests />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <Payments />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={8} xs={12}>
          <MainAccount />
        </Grid>
        <Grid item md={4} xs={12}>
          <SecondaryAccounts />
        </Grid>
        <Grid item lg={5} md={6} xs={12}>
          <Investments />
        </Grid>
        <Grid item lg={7} md={6} xs={12}>
          <TransactionsStatistics />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default DashboardBanking;
