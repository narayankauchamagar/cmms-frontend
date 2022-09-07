import { useState } from 'react';

import { Helmet } from 'react-helmet-async';

import { Box, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CompanyCover from './CompanyCover';
import CompanyDetails from './CompanyDetails';
import { Company } from '../../../models/owns/company';

function CompanyProfile() {
  const [company, setCompany] = useState<Company | null>({
    name: 'Maxtron',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    id: 'dsds'
  });
  if (!company) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{company.name} - Profile Details</title>
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
            <CompanyCover company={company} />
          </Grid>
          <Grid item xs={12}>
            <CompanyDetails />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default CompanyProfile;
