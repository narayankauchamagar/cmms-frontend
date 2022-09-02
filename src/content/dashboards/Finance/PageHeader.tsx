import { Typography } from '@mui/material';
import useAuth from 'src/hooks/useAuth';
import { useTranslation } from 'react-i18next';

function PageHeader() {
  const { t }: { t: any } = useTranslation();
  const { user } = useAuth();

  return (
    <>
      <Typography variant="h3" component="h3" gutterBottom>
        {t('Finance Dashboard')}
      </Typography>
      <Typography variant="subtitle2">
        {user.name},{' '}
        {t('This could be your beautiful finance administration panel.')}
      </Typography>
    </>
  );
}

export default PageHeader;
