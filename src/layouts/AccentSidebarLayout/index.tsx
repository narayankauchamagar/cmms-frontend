import { FC, ReactNode } from 'react';
import { Box, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import ThemeSettings from 'src/components/ThemeSettings';

import Sidebar from './Sidebar';
import Header from './Header';

interface AccentSidebarLayoutProps {
  children?: ReactNode;
}

const AccentSidebarLayout: FC<AccentSidebarLayoutProps> = () => {
  const theme = useTheme();

  return (
    <>
      <Header />
      <Sidebar />
      <Box
        sx={{
          position: 'relative',
          zIndex: 5,
          flex: 1,
          display: 'flex',
          pt: `${theme.header.height}`,
          [theme.breakpoints.up('lg')]: {
            pl: `${theme.sidebar.width}`
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            width: '100%'
          }}
        >
          <Box flexGrow={1}>
            <Outlet />
          </Box>
        </Box>
        <ThemeSettings />
      </Box>
    </>
  );
};

export default AccentSidebarLayout;
