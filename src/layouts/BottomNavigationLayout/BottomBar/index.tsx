import { useContext } from 'react';

import { Box, Card, Tooltip, IconButton, alpha, styled } from '@mui/material';
import { SidebarContext } from 'src/contexts/SidebarContext';
import Logo from './Logo';
import NavigationMenu from './NavigationMenu';
import LanguageSwitcher from './LanguageSwitcher';
import Notifications from './Notifications';
import Userbox from './Userbox';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

const BottomBarWrapper = styled(Card)(
  ({ theme }) => `
    height: ${theme.header.height};
    bottom: 0;
    color: ${theme.header.textColor};
    padding: 0;
    right: 0;
    z-index: 6;
    background: ${alpha(theme.colors.primary.main, 0.85)};
    backdrop-filter: blur(5px);
    box-shadow: none;
    position: fixed;
    justify-content: space-between;
    width: calc(100% - ${theme.spacing(4)});
    display: flex;
    align-items: stretch;
    border-radius: 0;
    border-top-left-radius: 40px;
`
);

const BoxLogoWrapper = styled(Box)(
  ({ theme }) => `
  justify-content: center;
  align-items: center;
  display: flex;
  width: ${theme.spacing(14)};
`
);

const MenuWrapper = styled(Box)(
  ({ theme }) => `
  flex-grow: 1;
  border-top-left-radius: 40px;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: ${theme.spacing(0, 3)};
  background: ${alpha(theme.colors.alpha.black[100], 0.1)};
`
);

const NavigationMenuWrapper = styled(Box)(
  () => `
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`
);

const IconButtonPrimary = styled(IconButton)(
  ({ theme }) => `
    display: inline-flex;
    width: 58px;
    border-radius: ${theme.general.borderRadiusLg};
    height: 58px;
    justify-content: center;
    font-size: ${theme.typography.pxToRem(13)};
    padding: 0;
    position: relative;

    .MuiSvgIcon-root {
      transition: ${theme.transitions.create(['color'])};
      font-size: ${theme.typography.pxToRem(28)};
      color: ${theme.colors.alpha.trueWhite[50]};
    }

    &.active,
    &:hover {
      background-color: ${theme.colors.alpha.black[10]};

      .MuiSvgIcon-root {
        color: ${theme.colors.alpha.trueWhite[100]};
      }
    }
`
);

function BottomBar() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);

  return (
    <BottomBarWrapper>
      <BoxLogoWrapper>
        <Logo />
      </BoxLogoWrapper>
      <MenuWrapper>
        <Box
          sx={{
            flexGrow: { xs: 1, md: 0 }
          }}
        >
          <Notifications />
        </Box>
        <NavigationMenuWrapper
          sx={{
            display: { xs: 'none', md: 'inline-block' }
          }}
        >
          <NavigationMenu />
        </NavigationMenuWrapper>
        <Box>
          <LanguageSwitcher />
          <Userbox />
          <Box
            component="span"
            sx={{
              display: { md: 'none', xs: 'inline-block' }
            }}
          >
            <Tooltip arrow title="Toggle Menu">
              <IconButtonPrimary color="primary" onClick={toggleSidebar}>
                {!sidebarToggle ? <MenuTwoToneIcon /> : <CloseTwoToneIcon />}
              </IconButtonPrimary>
            </Tooltip>
          </Box>
        </Box>
      </MenuWrapper>
    </BottomBarWrapper>
  );
}

export default BottomBar;
