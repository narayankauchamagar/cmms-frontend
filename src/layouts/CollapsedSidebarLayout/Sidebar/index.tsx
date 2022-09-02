import { useContext } from 'react';
import Scrollbar from 'src/components/Scrollbar';
import { SidebarContext } from 'src/contexts/SidebarContext';
import Logo from 'src/components/LogoSign';

import { Box, Drawer, styled, useTheme } from '@mui/material';

import SidebarMenu from './SidebarMenu';

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        width: ${theme.spacing(12)};
        color: ${theme.sidebar.textColor};
        background: ${theme.sidebar.background};
        box-shadow: ${theme.sidebar.boxShadow};
        height: 100%;
        
        @media (min-width: ${theme.breakpoints.values.md}px) {
          top: 0;
          left: 0;
          position: fixed;
          z-index: 10;
          border-top-right-radius: ${theme.general.borderRadius};
          border-bottom-right-radius: ${theme.general.borderRadius};
        }
`
);

const TopSection = styled(Box)(
  ({ theme }) => `
        display: flex;
        height: 80px;
        align-items: center;
        margin: ${theme.spacing(0, 2)};
        border-bottom: ${theme.sidebar.dividerBg} solid 1px;
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
          display: { xs: 'none', md: 'inline-block' }
        }}
      >
        <TopSection>
          <Logo />
        </TopSection>
        <Box
          sx={{
            height: 'calc(100% - 80px)'
          }}
        >
          <Scrollbar>
            <SidebarMenu />
          </Scrollbar>
        </Box>
      </SidebarWrapper>
      <Drawer
        sx={{
          display: { md: 'none', xs: 'inline-block' }
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
              <Logo />
            </TopSection>
            <SidebarMenu />
          </Scrollbar>
        </SidebarWrapper>
      </Drawer>
    </>
  );
}

export default Sidebar;
