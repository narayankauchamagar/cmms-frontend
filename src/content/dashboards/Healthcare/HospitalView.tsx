import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeaderHospital';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import { Typography, useTheme, Box, Grid, alpha, Card } from '@mui/material';
import NotificationImportantTwoToneIcon from '@mui/icons-material/NotificationImportantTwoTone';

import OverallStatus from './OverallStatus';
import AppointmentsAlt from './AppointmentsAlt';
import Surgeries from './Surgeries';
import Doctors from './Doctors';
import Departments from './Departments';
import RecentPatients from './RecentPatients';
import Notifications from './Notifications';
import UpcomingConsults from './UpcomingConsults';

function DashboardHospitalView() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Healthcare Dashboard - Hospital Management</title>
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
        spacing={3}
      >
        <Grid item xs={12}>
          <Card
            variant="outlined"
            sx={{
              background: alpha(theme.colors.info.main, 0.08),
              display: 'flex',
              alignItems: 'flex-start',
              p: 2
            }}
          >
            <NotificationImportantTwoToneIcon
              sx={{
                mr: 1,
                color: theme.colors.info.main,
                fontSize: theme.typography.pxToRem(22)
              }}
            />
            <Box>
              <Typography
                variant="h4"
                sx={{
                  pt: 0.2
                }}
                gutterBottom
              >
                Notifications
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: theme.typography.pxToRem(13)
                }}
              >
                This is an example for showing a notification box inside a page.
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item lg={8} xs={12}>
          <OverallStatus />
        </Grid>
        <Grid item lg={4} xs={12}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item lg={12} md={6} xs={12}>
              <AppointmentsAlt />
            </Grid>
            <Grid item lg={12} md={6} xs={12}>
              <Surgeries />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} lg={5} xs={12}>
          <Doctors />
        </Grid>
        <Grid item md={6} lg={7} xs={12}>
          <Departments />
        </Grid>
        <Grid item xs={12}>
          <RecentPatients />
        </Grid>
        <Grid item md={6} lg={7} xs={12}>
          <Notifications />
        </Grid>
        <Grid item md={6} lg={5} xs={12}>
          <UpcomingConsults />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default DashboardHospitalView;
