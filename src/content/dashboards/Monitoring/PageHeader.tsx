import { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LoadingButton from '@mui/lab/LoadingButton';

function PageHeader() {
  const { t }: { t: any } = useTranslation();

  const [pending, setPending] = useState(false);
  function handleClick() {
    setPending(true);
  }

  return (
    <Box
      display="flex"
      alignItems={{ xs: 'stretch', md: 'center' }}
      flexDirection={{ xs: 'column', md: 'row' }}
      justifyContent="space-between"
    >
      <Box>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            pb: 1
          }}
        >
          {t('Monitoring')}
        </Typography>
        <Typography variant="h4" color="text.secondary" fontWeight="normal">
          {t(
            'This dashboard shows a live status for all your servers and database clusters!'
          )}
        </Typography>
      </Box>
      <Box mt={{ xs: 3, md: 0 }}>
        <LoadingButton
          sx={{
            mt: { xs: 2, md: 0 }
          }}
          onClick={handleClick}
          loading={pending}
          variant="contained"
          color="primary"
        >
          {t('Refresh view')}
        </LoadingButton>
      </Box>
    </Box>
  );
}

export default PageHeader;
