import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import { Grid } from '@mui/material';
import Block1 from './Block1';
import Block2 from './Block2';
import Block3 from './Block3';
import Block4 from 'src/content/blocks/SparklinesLarge/Block6';
import Block5 from './Block5';
import Block6 from 'src/content/blocks/Grids/Block5';
import Block7 from 'src/content/blocks/IconCards/Block4';

function DashboardStatistics() {
  return (
    <>
      <Helmet>
        <title>Statistics Dashboard</title>
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
        <Grid item xs={12} md={7}>
          <Block1 />
        </Grid>
        <Grid item xs={12} md={5}>
          <Block2 />
        </Grid>
        <Grid item xs={12} md={6}>
          <Block3 />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12}>
              <Block4 />
            </Grid>
            <Grid item xs={12}>
              <Block5 />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Block6 />
        </Grid>
        <Grid item xs={12}>
          <Block7 />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default DashboardStatistics;
