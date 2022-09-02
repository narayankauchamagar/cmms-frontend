import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import { Grid } from '@mui/material';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import Block1 from 'src/content/blocks/SparklinesLarge/Block7';
import Block2 from './Block2';
import Block3 from 'src/content/blocks/ProgressCircular/Block8';
import Block4 from 'src/content/blocks/ListsLarge/Block3';
import Block5 from 'src/content/blocks/ListsLarge/Block4';
import Block6 from 'src/content/blocks/ListsLarge/Block9';
import Block7 from 'src/content/blocks/ListsLarge/Block10';
import Block8 from 'src/content/blocks/ChartsSmall/Block6';

function DashboardExpenses() {
  return (
    <>
      <Helmet>
        <title>Expenses Dashboard</title>
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
          <Block1 />
        </Grid>
        <Grid item xs={12}>
          <Block2 />
        </Grid>
        <Grid item xs={12}>
          <Block3 />
        </Grid>
        <Grid item xs={12} md={6}>
          <Block4 />
        </Grid>
        <Grid item xs={12} md={6}>
          <Block5 />
        </Grid>
        <Grid item xs={12} md={6}>
          <Block6 />
        </Grid>
        <Grid item xs={12} md={6}>
          <Block7 />
        </Grid>
        <Grid item xs={12}>
          <Block8 />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default DashboardExpenses;
