import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import { Grid } from '@mui/material';

import ResourcesAlarm from './ResourcesAlarm';
import HealthStatus from './HealthStatus';
import DatacenterClusters from './DatacenterClusters';
import VirtualServers from './VirtualServers';
import ActiveServers from './ActiveServers';
import DataCenters from './DataCenters';
import CpuUsage from './CpuUsage';
import StorageUsage from './StorageUsage';
import MemoryUsage from './MemoryUsage';

function DashboardMonitoring() {
  return (
    <>
      <Helmet>
        <title>Monitoring Dashboard</title>
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
        <Grid item xs={12} md={6}>
          <ResourcesAlarm />
        </Grid>
        <Grid item xs={12} md={6}>
          <HealthStatus />
        </Grid>
        <Grid item xs={12}>
          <DatacenterClusters />
        </Grid>
        <Grid item xs={12}>
          <VirtualServers />
        </Grid>
        <Grid item xs={12}>
          <ActiveServers />
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <DataCenters />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CpuUsage />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12} sm={6} md={12}>
              <StorageUsage />
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
              <MemoryUsage />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}

export default DashboardMonitoring;
