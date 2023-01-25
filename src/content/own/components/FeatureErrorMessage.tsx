import { Button, Card, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import useAuth from '../../../hooks/useAuth';
import { Link as RouterLink } from 'react-router-dom';

export default function FeatureErrorMessage({ message }: { message: string }) {
  const { t }: { t: any } = useTranslation();
  const { user } = useAuth();
  return (
    <Card
      sx={{
        height: 500,
        p: 4,
        m: 4,
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Stack spacing={4}>
        <Typography variant="h4">{t(message)}</Typography>
        {user.ownsCompany && (
          <Button
            component={RouterLink}
            to={'/app/subscription/plans'}
            variant="contained"
            size="large"
          >
            {t('upgrade_now')}
          </Button>
        )}
      </Stack>
    </Card>
  );
}
