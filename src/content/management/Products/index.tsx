import { useState, useEffect, useCallback } from 'react';
import axios from 'src/utils/axios';

import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import { Grid } from '@mui/material';
import useRefMounted from 'src/hooks/useRefMounted';
import type { Product } from 'src/models/product';

import Results from './Results';

function ManagementProducts() {
  const isMountedRef = useRefMounted();
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = useCallback(async () => {
    try {
      const response = await axios.get<{ products: Product[] }>(
        '/api/products'
      );

      if (isMountedRef.current) {
        setProducts(response.data.products);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <>
      <Helmet>
        <title>Products - Management</title>
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
          <Results products={products} />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default ManagementProducts;
