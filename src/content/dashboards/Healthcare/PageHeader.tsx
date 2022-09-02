import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

function PageHeader() {
  const { t }: { t: any } = useTranslation();

  return (
    <>
      <Typography
        variant="h2"
        component="h3"
        sx={{
          py: 1
        }}
      >
        {t('Welcome')}, Dr. Williams!
      </Typography>
      <Typography variant="h4" color="text.secondary" fontWeight="normal">
        {t('Since your last login there were')} <b>3</b>{' '}
        {t('new patients appointments and ')} <b>10</b>{' '}
        {t('new prescription requests.')}
      </Typography>
    </>
  );
}

export default PageHeader;
