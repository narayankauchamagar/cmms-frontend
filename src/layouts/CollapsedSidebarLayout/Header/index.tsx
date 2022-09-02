import { useContext } from 'react';

import { Box, IconButton, Tooltip, styled } from '@mui/material';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { SidebarContext } from 'src/contexts/SidebarContext';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

import HeaderMenu from './Menu';
import HeaderButtons from './Buttons';
import HeaderUserbox from './Userbox';
import Logo from 'src/components/Logo';

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
        height: ${theme.header.height};
        color: ${theme.header.textColor};
        padding: ${theme.spacing(0, 2)};
        right: 0;
        top: 0;
        z-index: 6;
        background-color: ${theme.header.background};
        box-shadow: ${theme.header.boxShadow};
        position: fixed;
        justify-content: space-between;
        width: 100%;
        @media (min-width: ${theme.breakpoints.values.md}px) {
            left: ${theme.spacing(12)};
            width: auto;
        }
`
);

function Header() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);

  return (
    <HeaderWrapper display="flex" alignItems="center">
      <Box display="flex" alignItems="center">
        <Box
          component="span"
          sx={{
            display: { md: 'none', xs: 'inline-block' }
          }}
        >
          <Logo />
        </Box>
        <Box
          component="span"
          sx={{
            display: { xs: 'none', md: 'inline-block' }
          }}
        >
          <HeaderMenu />
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
        <HeaderButtons />
        <HeaderUserbox />
        <Box
          component="span"
          sx={{
            display: { md: 'none', xs: 'inline-block' }
          }}
        >
          <Tooltip arrow title="Toggle Menu">
            <IconButton color="primary" onClick={toggleSidebar}>
              {!sidebarToggle ? <MenuTwoToneIcon /> : <CloseTwoToneIcon />}
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </HeaderWrapper>
  );
}

export default Header;
