import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import { Grid } from '@mui/material';
import Block1 from './Block1';
import Block2 from './Block2';
import Block3 from 'src/content/blocks/ChartsLarge/Block5';
import Block4 from './Block4';
import Block5 from 'src/content/blocks/ChartsSmall/Block5';
import Block6 from './Block6';

function DashboardProducts() {
  return (
    <>
      <Helmet>
        <title>Products Dashboard</title>
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
        <Grid item xs={12} xl={6}>
          <Block3 />
        </Grid>
        <Grid item xs={12} xl={6}>
          <Block4 />
        </Grid>
        <Grid item xs={12}>
          <Block5 />
        </Grid>
        <Grid item xs={12}>
          <Block6 />
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}

export default DashboardProducts;
