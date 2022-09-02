import PageHeader from './PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Helmet } from 'react-helmet-async';

import Block1 from './Block1';
import Block2 from './Block2';
import Block3 from './Block3';
import Block4 from './Block4';
import Block5 from './Block5';
import Block6 from './Block6';
import Block7 from './Block7';
import Block8 from './Block8';
import Block9 from './Block9';
import { Grid } from '@mui/material';

function DataDisplayComposedCards() {
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
        <Grid item lg={8} xs={12}>
          <Block1 />
        </Grid>
        <Grid item lg={4} xs={12}>
          <Block2 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block3 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block4 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block5 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block6 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block7 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block8 />
        </Grid>
        <Grid item xs={12}>
          <Block9 />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default DataDisplayComposedCards;
