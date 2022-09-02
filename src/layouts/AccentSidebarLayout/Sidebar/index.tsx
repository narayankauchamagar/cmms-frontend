import { useContext } from 'react';
import Scrollbar from 'src/components/Scrollbar';
import { SidebarContext } from 'src/contexts/SidebarContext';
import SidebarTopSection from './SidebarTopSection';

import { Box, Drawer, styled, useTheme } from '@mui/material';

import SidebarMenu from './SidebarMenu';
import Logo from 'src/components/LogoSign';

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar.width};
        min-width: ${theme.sidebar.width};
        color: ${theme.sidebar.textColor};
        background: ${theme.sidebar.background};
        box-shadow: ${theme.sidebar.boxShadow};
        position: relative;
        z-index: 7;
        height: 100%;
`
);

const TopSection = styled(Box)(
  ({ theme }) => `
        margin: ${theme.spacing(2, 3)};
`
);

function Sidebar() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();
  const theme = useTheme();

  return (
    <>
      <SidebarWrapper
        sx={{
          display: {
            xs: 'none',
            lg: 'inline-block'
          },
          position: 'fixed',
          left: 0,
          top: 0
        }}
      >
        <Scrollbar>
          <TopSection>
            <Box
              sx={{
                width: 52,
                mt: 2,
                mb: 3
              }}
            >
              <Logo />
            </Box>
            <SidebarTopSection />
          </TopSection>
          <SidebarMenu />
        </Scrollbar>
      </SidebarWrapper>
      <Drawer
        sx={{
          boxShadow: `${theme.sidebar.boxShadow}`
        }}
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={sidebarToggle}
        onClose={closeSidebar}
        variant="temporary"
        elevation={9}
      >
        <SidebarWrapper>
          <Scrollbar>
            <TopSection>
              <Box
                sx={{
                  width: 52,
                  ml: 1,
                  mt: 1,
                  mb: 3
                }}
              >
                <Logo />
              </Box>
              <SidebarTopSection />
            </TopSection>
            <SidebarMenu />
          </Scrollbar>
        </SidebarWrapper>
      </Drawer>
    </>
  );
}

export default Sidebar;
