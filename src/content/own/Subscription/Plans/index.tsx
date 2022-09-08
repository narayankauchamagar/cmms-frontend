import { Helmet } from 'react-helmet-async';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import {
  Box,
  Card,
  Grid,
  Slider,
  Stack,
  Typography,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function Subscription() {
  const { t }: { t: any } = useTranslation();
  const plan = { id: 'dsds4', name: 'Starter', users: 2 };
  const theme = useTheme();
  const [usersCount, setUsersCount] = useState<number>(3);

  return (
    <>
      <Helmet>
        <title>{t('Plan')}</title>
      </Helmet>
      <Grid
        container
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
        padding={4}
      >
        <Grid item xs={12}>
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
          <Grid item xs={12}>
            <Card sx={{ p: 2, mt: 2 }}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box>
                  <Typography variant="h4" gutterBottom>
                    {t('Number of users who will use Grash')}
                  </Typography>
                  <Typography variant="subtitle2">
                    {t('Pay only for')} <b>{t('Admin')}</b>,{' '}
                    <b>{t('Technical')}</b> and <b>{t('Limited Technical')}</b>{' '}
                    users, and use unlimited <b>{t('Requester')}</b>,{' '}
                    <b>{t('View-Only')}</b> for free
                  </Typography>
                </Box>
              </Box>
              <Stack direction="row" spacing={2}>
                <Slider
                  sx={{ mt: 3 }}
                  size="medium"
                  value={usersCount}
                  min={0}
                  step={1}
                  max={150}
                  onChange={(_, value) => setUsersCount(value as number)}
                />
                <Typography
                  sx={{
                    p: 1,
                    backgroundColor: theme.colors.alpha.black[5],
                    border: 0.5,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderRadius: 1
                  }}
                  fontWeight={'bold'}
                  variant="h6"
                >
                  {usersCount}&nbsp;Users
                </Typography>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Subscription;
