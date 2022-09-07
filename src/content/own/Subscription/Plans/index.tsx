import { Helmet } from 'react-helmet-async';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import { Card, Grid, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function Subscription() {
  const { t }: { t: any } = useTranslation();
  const navigate = useNavigate();
  const plan = { id: 'dsds4', name: 'Starter', users: 2 };

  return (
    <>
      <Helmet>
        <title>{t('Plan')}</title>
      </Helmet>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={0}
      >
        <Grid item xs={12} sx={{ p: 4 }}>
          <Card
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Stack direction="row" spacing={1}>
              <Typography variant="h6" fontWeight="bold">
                {t('Current Plan')}
              </Typography>
              <Typography variant="h6">{plan.name}</Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <PersonTwoToneIcon />
              <Typography variant="h6">
                {plan.users} {t(`Users`)}
              </Typography>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Subscription;
