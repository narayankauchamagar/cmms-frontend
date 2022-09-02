import { useState, useEffect, useCallback } from 'react';

import { Helmet } from 'react-helmet-async';
import Footer from 'src/components/Footer';
import PageHeader from './PageHeader';
import Sidebar from './Sidebar';

import { styled, Box, Grid, IconButton, Drawer, useTheme } from '@mui/material';
import axios from 'src/utils/axios';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';

import useRefMounted from 'src/hooks/useRefMounted';
import type { Product } from 'src/models/product';

import Results from './Results';
import Scrollbar from 'src/components/Scrollbar';

const DrawerWrapperMobile = styled(Drawer)(
  () => `
    width: 340px;
    flex-shrink: 0;

  & > .MuiPaper-root {
        width: 340px;
        z-index: 3;
  }
`
);

const IconButtonToggle = styled(IconButton)(
  ({ theme }) => `
  width: ${theme.spacing(6)};
  height: ${theme.spacing(6)};
`
);

function ManagementProductsShop() {
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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
        <title>Products Platform - Applications</title>
      </Helmet>

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
        <Grid display="flex" alignItems="center" item xs={12}>
          <IconButtonToggle
            sx={{
              mr: 1,
              display: { md: 'none', xs: 'flex' }
            }}
            color="primary"
            onClick={handleDrawerToggle}
            size="small"
          >
            <MenuTwoToneIcon />
          </IconButtonToggle>
          <Box flex={1} mt={3}>
            <PageHeader />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: { xs: 'none', md: 'block' }
          }}
        >
          <Sidebar />
        </Grid>
        <Grid item xs={12} md={9}>
          {products && <Results products={products} />}
        </Grid>
      </Grid>
      <DrawerWrapperMobile
        sx={{
          display: { md: 'none', xs: 'flex' }
        }}
        variant="temporary"
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        <Scrollbar>
          <Sidebar />
        </Scrollbar>
      </DrawerWrapperMobile>
      <Footer />
    </>
  );
}

export default ManagementProductsShop;
