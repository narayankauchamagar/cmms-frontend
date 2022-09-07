import { useCallback, useEffect, useState } from 'react';

import { Helmet } from 'react-helmet-async';

import { Box, Grid } from '@mui/material';
import useRefMounted from 'src/hooks/useRefMounted';
import { useTranslation } from 'react-i18next';
import type { User } from 'src/models/user';
import ProfileCover from './ProfileCover';
import CompanyDetails from './CompanyDetails';
import axios from 'src/utils/axios';

function ManagementUsersView() {
  const isMountedRef = useRefMounted();
  const [company, setCompany] = useState<User | null>(null);
  // @ts-ignore
  const userId = '1';
  const { t }: { t: any } = useTranslation();

  const getUser = useCallback(async () => {
    try {
      const response = await axios.get<{ user: User }>('/api/user', {
        params: {
          userId
        }
      });
      if (isMountedRef.current) {
        setCompany(response.data.user);
      }
    } catch (err) {
      console.error(err);
    }
  }, [userId, isMountedRef]);

  useEffect(() => {
    getUser();
  }, [getUser]);

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
            <ProfileCover user={company} />
          </Grid>
          <Grid item xs={12}>
            <CompanyDetails />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default ManagementUsersView;
