import { FC, ReactNode, useContext } from 'react';
import { Box, Drawer, useTheme, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';
import BottomBar from './BottomBar';
import { SidebarContext } from 'src/contexts/SidebarContext';
import SidebarMenu from 'src/layouts/BoxedSidebarLayout/Sidebar/SidebarMenu';
import ThemeSettings from './ThemeSettings';
import Scrollbar from 'src/components/Scrollbar';
import Logo from 'src/components/LogoSign';
import SidebarTopSection from 'src/layouts/AccentHeaderLayout/Sidebar/SidebarTopSection';

interface BottomNavigationLayoutProps {
  children?: ReactNode;
}

const MainWrapper = styled(Box)(
  () => `
      flex: 1;
      display: flex;
      height: 100%;

      .footer-wrapper {
        overflow: hidden;
        height: 0;
        box-shadow: none;
        border: 0;
      }
`
);

const MainContent = styled(Box)(
  ({ theme }) => `
        margin-bottom: ${theme.header.height};
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
`
);

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar.width};
        min-width: ${theme.sidebar.width};
        color: ${theme.sidebar.textColor};
        background: ${theme.sidebar.background};
        box-shadow: ${theme.sidebar.boxShadow};
        position: relative;
        z-index: 5;
        height: 100%;
        @media (min-width: ${theme.breakpoints.values.lg}px) {
          height: calc(100% - ${theme.header.height});
          margin-top: ${theme.header.height};
        }
`
);

const TopSection = styled(Box)(
  ({ theme }) => `
        margin: ${theme.spacing(2, 2)};
`
);

const BottomNavigationLayout: FC<BottomNavigationLayoutProps> = () => {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();
  const theme = useTheme();

  return (
    <>
      <MainWrapper>
        <MainContent
          sx={{
            '.MuiDrawer-hd': {
              '& .MuiDrawer-paper': {
                top: 0,
                width: `calc(320px + ${theme.spacing(4)})`,
                position: 'fixed'
              }
            },
            '.MuiDrawer-fm': {
              '& .MuiDrawer-paper': {
                top: 0,
                position: 'fixed'
              }
            },
            '.Mui-FixedWrapper': {
              '.MuiDrawer-root.MuiDrawer-docked': {
                '.MuiPaper-root': {
                  left: 0,
                  top: 0
                }
              }
            }
          }}
        >
          <Scrollbar>
            <Outlet />
          </Scrollbar>
          <ThemeSettings />
        </MainContent>
        <BottomBar />
      </MainWrapper>
      <Drawer
        sx={{
          display: { lg: 'none', xs: 'inline-block' }
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
};

export default BottomNavigationLayout;
