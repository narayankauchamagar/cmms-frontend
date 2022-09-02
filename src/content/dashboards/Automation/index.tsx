import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import { Grid, Tooltip, Box, Typography, IconButton } from '@mui/material';
import Weather from './Weather';
import Devices from './Devices';
import Scenes from './Scenes';
import VideoCameras from './VideoCameras';
import PowerConsumption from './PowerConsumption';
import Users from './Users';
import Search from './Search';
import Sensors from './Sensors';
import Thermostat from './Thermostat';
import EnergySaving from './EnergySaving';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

function DashboardAutomation() {
  const { t }: { t: any } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Automation Dashboard</title>
      </Helmet>
      <Box p={4}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
          columns={12}
        >
          <Grid item xs={12} lg={8}>
            <Weather />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Search />
              </Grid>
              <Grid item xs={12} md={6} lg={12}>
                <Users />
              </Grid>
              <Grid item xs={12} md={6} lg={12}>
                <Scenes />
              </Grid>
              <Grid item xs={12} xl={12}>
                <EnergySaving />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Devices />
          </Grid>
          <Grid item xs={12} lg={6}>
            <PowerConsumption />
          </Grid>
          <Grid item xs={12} lg={8}>
            <Box
              mb={2}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h3">Control panel</Typography>
              <Tooltip arrow placement="top" title={t('Add another sensor')}>
                <IconButton size="large" color="primary">
                  <AddTwoToneIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
            <Grid container spacing={4}>
              <Grid item xs={12} md={5}>
                <Sensors />
              </Grid>
              <Grid item xs={12} md={7}>
                <Thermostat />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <VideoCameras />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default DashboardAutomation;
