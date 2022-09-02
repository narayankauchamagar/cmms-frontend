import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import { Grid } from '@mui/material';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import GrossSales from './GrossSales';
import Customers from './Customers';
import Orders from './Orders';
import Refunds from './Refunds';
import VisitorsOverview from './VisitorsOverview';
import RecentTransactions from './RecentTransactions';
import FullReport from './FullReport';
import SalesByCategory from './SalesByCategory';
import TopProducts from './TopProducts';
import MonthlyComparison from './MonthlyComparison';
import MonthlyGoals from './MonthlyGoals';
import SalesByCountry from './SalesByCountry';
import Traffic from './Traffic';

function DashboardCommerce() {
  return (
    <>
      <Helmet>
        <title>Commerce Dashboard</title>
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
              <GrossSales />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <Customers />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <Orders />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <Refunds />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} lg={7} xs={12}>
          <VisitorsOverview />
        </Grid>
        <Grid item md={6} lg={5} xs={12}>
          <RecentTransactions />
        </Grid>
        <Grid item lg={5} xs={12}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item lg={12} md={6} xs={12}>
              <FullReport />
            </Grid>
            <Grid item lg={12} md={6} xs={12}>
              <SalesByCategory />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={7} xs={12}>
          <TopProducts />
        </Grid>
        <Grid item md={6} lg={7} xs={12}>
          <MonthlyComparison />
        </Grid>
        <Grid item md={6} lg={5} xs={12}>
          <MonthlyGoals />
        </Grid>
        <Grid item md={6} lg={5} xs={12}>
          <SalesByCountry />
        </Grid>
        <Grid item md={6} lg={7} xs={12}>
          <Traffic />
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}

export default DashboardCommerce;
