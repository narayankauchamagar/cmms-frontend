import { Box } from '@mui/material';
import HeaderNotifications from './Notifications';
import LanguageSwitcher from './LanguageSwitcher';

function HeaderButtons() {
  return (
    <Box>
      <HeaderNotifications />
      <LanguageSwitcher />
    </Box>
  );
}

export default HeaderButtons;
