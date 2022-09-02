import { FC, ReactNode } from 'react';
import { Box, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
import Header from './Header';

import ThemeSettings from 'src/components/ThemeSettings';

interface BoxedSidebarLayoutProps {
  children?: ReactNode;
}

const BoxedSidebarLayout: FC<BoxedSidebarLayoutProps> = () => {
  const theme = useTheme();

  return (
    <>
      <Sidebar />
      <Box
        sx={{
          position: 'relative',
          zIndex: 5,
          flex: 1,
          display: 'flex',

          '.MuiDrawer-pw': {
            '& .MuiDrawer-paper': {
              width: `calc(400px + ${theme.spacing(3)})`,
              background: 'none',
              border: 0,
              pl: 0
            }
          },

          '.MuiDrawer-hd': {
            '& .MuiDrawer-paper': {
              background: 'none',
              border: 0,
              width: `calc(360px + ${theme.spacing(4)})`,
              pl: 0
            }
          },

          '.MuiDrawer-fm': {
            '& .MuiDrawer-paper': {
              borderRadius: theme.general.borderRadius,
              width: `calc(400px - ${theme.spacing(3)})`,
              height: `calc(100% - 80px - ${theme.spacing(6)})`,
              m: 3
            }
          },

          '.Mui-FixedWrapper': {
            height: `calc(100vh - ${theme.spacing(17)})`,
            minHeight: `calc(100vh - ${theme.spacing(17)})`,
            margin: theme.spacing(4),
            background: theme.colors.alpha.white[100],
            borderRadius: theme.general.borderRadius,
            overflow: 'hidden',
            border: theme.colors.alpha.black[30] + ' solid 1px',

            '.Mui-FixedWrapperContent': {
              overflow: 'auto',
              height: `calc(100vh - ${theme.spacing(17.5)})`
            },

            '.MuiDrawer-root.MuiDrawer-docked': {
              position: 'relative',

              '.MuiPaper-root': {
                height: `calc(100vh - ${theme.spacing(17)})`,
                minHeight: `calc(100vh - ${theme.spacing(17)})`,
                position: 'absolute',
                top: 0,
                left: 0
              }
            }
          },

          '.footer-wrapper': {
            margin: 0,
            background: 'transparent',
            boxShadow: 'none'
          },

          '.MuiPageTitle-wrapper': {
            pt: theme.spacing(3),
            pb: theme.spacing(6)
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            width: `calc(100% - ${theme.sidebar.width} - ${theme.spacing(4)})`,
            [theme.breakpoints.up('lg')]: {
              ml: `calc(${theme.sidebar.width} + ${theme.spacing(4)})`
            }
          }}
        >
          <Box flexGrow={1}>
            <Box>
              <Header />
              <Outlet />
            </Box>
          </Box>
          <ThemeSettings />
        </Box>
      </Box>
    </>
  );
};

export default BoxedSidebarLayout;
