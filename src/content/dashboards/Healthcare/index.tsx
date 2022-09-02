import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';

import { Box, Drawer, Grid, useTheme, IconButton, styled } from '@mui/material';
import Scrollbar from 'src/components/Scrollbar';
import Footer from 'src/components/Footer';

import HealthcareSidebar from './HealthcareSidebar';
import AccountVerification from './AccountVerification';
import Appointments from './Appointments';
import PrescriptionRequests from './PrescriptionRequests';
import Consultations from './Consultations';
import Cancelled from './Cancelled';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';

const DrawerWrapper = styled(Drawer)(
  ({ theme }) => `
    width: 400px;
    flex-shrink: 0;
    position: relative;
    z-index: 3;

    & > .MuiPaper-root {
        width: 400px;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 3;
        background: ${theme.colors.alpha.white[100]};
    }
`
);

const DrawerWrapperMobile = styled(Drawer)(
  () => `
    width: 360px;
    flex-shrink: 0;

  & > .MuiPaper-root {
        width: 360px;
        z-index: 3;
  }
`
);

const MainContentWrapper = styled(Box)(
  () => `
  flex-grow: 1;
`
);

const IconButtonToggle = styled(IconButton)(
  ({ theme }) => `
  width: ${theme.spacing(6)};
  height: ${theme.spacing(6)};
`
);

function DashboardHealthcare() {
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const sidebarContent = (
    <Scrollbar>
      <HealthcareSidebar />
    </Scrollbar>
  );

  return (
    <>
      <Helmet>
        <title>Healthcare Dashboard - Doctor Overview</title>
      </Helmet>
      <Box display="flex">
        <MainContentWrapper>
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
            <Grid item xs={12}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box mt={3}>
                  <PageHeader />
                </Box>
                <IconButtonToggle
                  sx={{
                    display: { lg: 'none', xs: 'flex' }
                  }}
                  color="primary"
                  onClick={handleDrawerToggle}
                  size="small"
                >
                  <MenuTwoToneIcon />
                </IconButtonToggle>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <AccountVerification />
            </Grid>
            <Grid item xs={12}>
              <Appointments />
            </Grid>
            <Grid item xs={12}>
              <PrescriptionRequests />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Consultations />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Cancelled />
            </Grid>
          </Grid>
          <Footer />
        </MainContentWrapper>
        <DrawerWrapperMobile
          sx={{
            display: { lg: 'none', xs: 'inline-block' }
          }}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'left' : 'right'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
        >
          {sidebarContent}
        </DrawerWrapperMobile>
        <DrawerWrapper
          className="MuiDrawer-pw"
          sx={{
            display: { xs: 'none', lg: 'inline-block' }
          }}
          variant="permanent"
          anchor={theme.direction === 'rtl' ? 'left' : 'right'}
          open
        >
          {sidebarContent}
        </DrawerWrapper>
      </Box>
    </>
  );
}

export default DashboardHealthcare;
