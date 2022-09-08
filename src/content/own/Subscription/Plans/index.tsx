import { Helmet } from 'react-helmet-async';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import {
  Box,
  Card,
  Divider,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Slider,
  Stack,
  styled,
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
  const [period, setPeriod] = useState<string>('monthly');
  const periods = [
    { name: 'Monthly', value: 'monthly' },
    { name: 'Annually', value: 'annually' }
  ];

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
              <Box>
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
                      <b>{t('Technical')}</b> and{' '}
                      <b>{t('Limited Technical')}</b> users, and use unlimited{' '}
                      <b>{t('Requester')}</b>, <b>{t('View-Only')}</b> for free
                    </Typography>
                  </Box>
                </Box>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ my: 3 }}
                  alignItems={'center'}
                >
                  <Slider
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
              </Box>
              <Box>
                <Typography variant="h4">
                  {t('How would you like to be billed?')}
                </Typography>
                <RadioGroup
                  sx={{ p: 2, my: 1 }}
                  defaultValue={period}
                  onChange={(event) => {
                    setPeriod(event.target.value);
                  }}
                  name="period"
                >
                  <Stack direction="row" spacing={2}>
                    {periods.map((item) => (
                      <FormControlLabel
                        key={item.value}
                        sx={{
                          border: 2,
                          borderColor: theme.colors.primary.main,
                          p: 2,
                          backgroundColor:
                            item.value === period
                              ? theme.colors.primary.lighter
                              : null
                        }}
                        value={item.value}
                        control={<Radio />}
                        label={
                          <Typography variant="h6" fontWeight="bold">
                            {item.name}
                          </Typography>
                        }
                      />
                    ))}
                  </Stack>
                </RadioGroup>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Subscription;
