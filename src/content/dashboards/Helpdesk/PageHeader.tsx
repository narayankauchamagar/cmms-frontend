import { Box, Typography, Avatar, styled } from '@mui/material';
import useAuth from 'src/hooks/useAuth';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import LiveHelpTwoToneIcon from '@mui/icons-material/LiveHelpTwoTone';

const AvatarPrimary = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.primary.main};
      color: ${theme.palette.getContrastText(theme.colors.primary.main)};
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      box-shadow: ${theme.colors.shadows.primary};
      margin-right: ${theme.spacing(2)};
`
);

function PageHeader() {
  const { t }: { t: any } = useTranslation();
  const { user } = useAuth();

  return (
    <Box display={{ sm: 'block', md: 'flex' }} alignItems="center">
      <AvatarPrimary
        sx={{
          mb: { xs: 2, md: 0 }
        }}
        variant="rounded"
      >
        <LiveHelpTwoToneIcon fontSize="large" />
      </AvatarPrimary>
      <Box>
        <Typography variant="h3" component="h3" gutterBottom>
          {t('Helpdesk')}
        </Typography>
        <Typography variant="subtitle2">
          {user.name}, {t('this is your helpdesk dashboard overview for today')}
          , <b>{format(new Date(), 'MMMM dd yyyy')}</b>
        </Typography>
      </Box>
    </Box>
  );
}

export default PageHeader;
