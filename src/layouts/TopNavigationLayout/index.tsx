import { FC, ReactNode, useContext } from 'react';
import {
  Box,
  Drawer,
  alpha,
  Card,
  Container,
  styled,
  useTheme
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import Scrollbar from 'src/components/Scrollbar';
import { SidebarContext } from 'src/contexts/SidebarContext';
import SidebarMenu from 'src/layouts/AccentHeaderLayout/Sidebar/SidebarMenu';
import SidebarTopSection from 'src/layouts/AccentHeaderLayout/Sidebar/SidebarTopSection';
import ThemeSettings from 'src/components/ThemeSettings';
import Logo from 'src/components/LogoSign';

interface TopNavigationLayoutProps {
  children?: ReactNode;
}

const MainWrapper = styled(Box)(
  ({ theme }) => `
  padding: ${theme.spacing(0, 0, 4)};

  .MuiDrawer-fm .MuiPaper-root {
    top: 0;
    height: 100%;
  }

  .Mui-FixedWrapper .MuiPaper-root {
    top: 0;
    left: 0;
  }
  .MuiDrawer-hd .MuiPaper-root {
    top: 0;
    height: 100%;
  }

  .footer-wrapper {
    box-shadow: 0px 0px 2px ${theme.colors.alpha.black[30]};
}
`
);

const MainContent = styled(Container)(
  ({ theme }) => `
        margin-top: ${theme.spacing(-45)};
        position: relative;
        z-index: 55;
`
);

const CardWrapper = styled(Card)(
  ({ theme }) => `
        min-height: 100vh;
        backdrop-filter: blur(5px);
        border-radius: ${theme.general.borderRadiusXl};
        background: ${alpha(theme.colors.alpha.white[100], 0.9)};
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

const TopNavigationLayout: FC<TopNavigationLayoutProps> = () => {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();
  const theme = useTheme();

  return (
    <>
      <MainWrapper>
        <TopBar />
        <MainContent maxWidth="xl">
          <Box mx={8}>
            <CardWrapper>
              <Outlet />
            </CardWrapper>
          </Box>
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
          <ThemeSettings />
        </MainContent>
      </MainWrapper>
    </>
  );
};

export default TopNavigationLayout;
