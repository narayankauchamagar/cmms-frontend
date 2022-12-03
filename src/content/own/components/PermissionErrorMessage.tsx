import { Card, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function PermissionErrorMessage({
  message
}: {
  message: string;
}) {
  const { t }: { t: any } = useTranslation();
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
      <Typography variant="h4">{t(message)}</Typography>
    </Card>
  );
}
