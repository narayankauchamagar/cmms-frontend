import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import {
  Box,
  Drawer,
  Grid,
  Divider,
  IconButton,
  styled,
  useTheme
} from '@mui/material';
import Scrollbar from 'src/components/Scrollbar';

import FileManagerSidebar from './FileManagerSidebar';
import QuickAccess from './QuickAccess';
import TeamFolders from './TeamFolders';
import AllFolders from './AllFolders';

import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';

const DrawerWrapper = styled(Drawer)(
  ({ theme }) => `
    width: 400px;
    flex-shrink: 0;
    z-index: 3;

    & > .MuiPaper-root {
        width: 400px;
        height: calc(100% - ${theme.header.height});
        position: absolute;
        top: ${theme.header.height};
        right: 0;
        z-index: 3;
        background: ${theme.colors.gradients.blue3};
        color: ${theme.colors.alpha.white[100]};
    }
`
);

const DrawerWrapperMobile = styled(Drawer)(
  ({ theme }) => `
    width: 340px;
    flex-shrink: 0;

  & > .MuiPaper-root {
        width: 340px;
        z-index: 3;
        background: ${theme.colors.gradients.blue3};
        color: ${theme.colors.alpha.white[100]};
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

function ApplicationsFileManager() {
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const sidebarContent = (
    <Scrollbar>
      <FileManagerSidebar />
    </Scrollbar>
  );

  return (
    <>
      <Helmet>
        <title>File Manager - Applications</title>
      </Helmet>
      <Box
        sx={{
          width: { xs: '100%', lg: 'calc(100% - 400px)' }
        }}
      >
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
                <Box my={4}>
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
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <QuickAccess />
            </Grid>
            <Grid item xs={12}>
              <TeamFolders />
            </Grid>
            <Grid item xs={12}>
              <AllFolders />
            </Grid>
          </Grid>
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
          className="MuiDrawer-fm"
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

export default ApplicationsFileManager;
