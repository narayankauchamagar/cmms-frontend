import { useState, useEffect, useCallback } from 'react';
import axios from 'src/utils/axios';

import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import Footer from 'src/components/Footer';
import Statistics from './Statistics';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import { Grid } from '@mui/material';
import useRefMounted from 'src/hooks/useRefMounted';
import type { Invoice } from 'src/models/invoice';

import Results from './Results';

function ManagementInvoices() {
  const isMountedRef = useRefMounted();
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  const getInvoices = useCallback(async () => {
    try {
      const response = await axios.get<{ invoices: Invoice[] }>(
        '/api/invoices'
      );

      if (isMountedRef.current) {
        setInvoices(response.data.invoices);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getInvoices();
  }, [getInvoices]);

  return (
    <>
      <Helmet>
        <title>Invoices - Management</title>
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
          <Statistics />
        </Grid>
        <Grid item xs={12}>
          <Results invoices={invoices} />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default ManagementInvoices;
