import { Grid, styled, Typography } from '@mui/material';

import { useTranslation } from 'react-i18next';

function VendorsAndCustomers() {
  const { t }: { t: any } = useTranslation();

  return (
    <>
      <Grid
        sx={{
          p: 4
        }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={4}
      >
        <Grid item xs={12}>
          <Typography variant="h1">Vendors & Customers</Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default VendorsAndCustomers;
