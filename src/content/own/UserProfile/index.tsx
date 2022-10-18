import { useCallback, useContext, useEffect, useState } from 'react';

import { Helmet } from 'react-helmet-async';

import { Grid } from '@mui/material';
import useRefMounted from 'src/hooks/useRefMounted';
import { useTranslation } from 'react-i18next';
import type { UserResponseDTO } from 'src/models/user';
import ProfileCover from './ProfileCover';
import RecentActivity from './RecentActivity';
import MyCards from './MyCards';
import ProfileDetails from './ProfileDetails';
import axios from 'src/utils/axios';
import { TitleContext } from '../../../contexts/TitleContext';
import useAuth from '../../../hooks/useAuth';

function ManagementUsersView() {
  const isMountedRef = useRefMounted();
  const { user } = useAuth();
  // @ts-ignore
  const { t }: { t: any } = useTranslation();
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle(t('Profile'));
  }, []);

  if (!user) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{user.firstName} - Profile Details</title>
      </Helmet>
      <Grid
        sx={{
          px: 4
        }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
      >
        <Grid item xs={12} md={8}>
          <ProfileCover user={user} />
        </Grid>
        <Grid item xs={12} md={4}>
          <RecentActivity />
        </Grid>
        <Grid item xs={12}>
          <ProfileDetails />
        </Grid>
        <Grid item xs={12} md={12}>
          <MyCards />
        </Grid>
      </Grid>
    </>
  );
}

export default ManagementUsersView;
