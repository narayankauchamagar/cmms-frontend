import { ChangeEvent, useCallback, useEffect, useState } from 'react';

import { Helmet } from 'react-helmet-async';
import Footer from 'src/components/Footer';

import { Box, Grid, styled, Tabs } from '@mui/material';
import useRefMounted from 'src/hooks/useRefMounted';
import { useTranslation } from 'react-i18next';
import type { User } from 'src/models/user';
import ProfileCover from './ProfileCover';
import RecentActivity from './RecentActivity';
import MyCards from './MyCards';
import ProfileDetails from './ProfileDetails';
import axios from 'src/utils/axios';

function ManagementUsersView() {
  const isMountedRef = useRefMounted();
  const [user, setUser] = useState<User | null>(null);
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
        setUser(response.data.user);
      }
    } catch (err) {
      console.error(err);
    }
  }, [userId, isMountedRef]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  if (!user) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{user.name} - Profile Details</title>
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
