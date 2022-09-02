import { Box } from '@mui/material';
import HeaderNotifications from './Notifications';
import LanguageSwitcher from './LanguageSwitcher';
import Chat from './Chat';

function HeaderButtons() {
  return (
    <Box>
      <HeaderNotifications />
      <LanguageSwitcher />
      <Chat />
    </Box>
  );
}

export default HeaderButtons;
