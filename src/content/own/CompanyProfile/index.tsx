import { useState } from 'react';

import { Helmet } from 'react-helmet-async';

import { Box, Grid } from '@mui/material';
import CompanyCover from './CompanyCover';
import CompanyDetails from './CompanyDetails';
import { Company } from '../../../models/owns/company';
import CompanyPlan from './CompanyPlan';

function CompanyProfile() {
  const [company, setCompany] = useState<Company | null>({
    name: 'Maxtron',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    id: 'dsds',
    address: 'address',
    phone: '425785752',
    website: 'www.google.com',
    plan: { id: 'dsds4', name: 'Starter' }
  });
  if (!company) {
    return null;
  }
  return (
    <>
      <Helmet>
        <title>{company.name} - Company Details</title>
      </Helmet>
      <Box
        sx={{
          mt: 3
        }}
      >
        <Grid
          sx={{
            px: 4
          }}
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={1}
        >
          <Grid item xs={12}>
            <CompanyCover image={company.logo} />
          </Grid>
          <Grid item xs={12}>
            <CompanyDetails company={company} />
          </Grid>
          <Grid item xs={12}>
            <CompanyPlan plan={company.plan} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default CompanyProfile;
