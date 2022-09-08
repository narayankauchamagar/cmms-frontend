import { Helmet } from 'react-helmet-async';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import {
  Box,
  Button,
  Card,
  FormControlLabel,
  Grid,
  Link,
  Radio,
  RadioGroup,
  Slider,
  Stack,
  Typography,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import PlanFeatures from './PlanFeatures';

function SubscriptionPlans() {
  const { t }: { t: any } = useTranslation();
  const plan = { id: 'dsds4', name: 'Starter', users: 2, code: 'starter' };
  const theme = useTheme();
  const [usersCount, setUsersCount] = useState<number>(3);
  const [period, setPeriod] = useState<string>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string>('starter');
  const periods = [
    { name: 'Monthly', value: 'monthly' },
    { name: 'Annually', value: 'annually' }
  ];
  const plans = [
    { name: 'Starter', value: 'starter', monthly: 10 },
    { name: 'Professional', value: 'professional', monthly: 20 },
    { name: 'Business', value: 'business', monthly: 40 }
  ];
  const getCost = () => {
    const monthlyCost = plans.find(
      (plan) => plan.value == selectedPlan
    ).monthly;
    return period == 'monthly' ? monthlyCost : monthlyCost * 12;
  };
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
                  value={period}
                  onChange={(event) => {
                    setPeriod(event.target.value);
                  }}
                  name="period"
                >
                  <Grid container>
                    <Grid item xs={12} md={6}>
                      <Grid container spacing={1}>
                        {periods.map((item) => (
                          <Grid item xs={12} md={6} key={item.value}>
                            <FormControlLabel
                              sx={{
                                border: 2,
                                borderColor:
                                  item.value === period
                                    ? theme.colors.primary.main
                                    : theme.colors.alpha.black[30],
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
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                </RadioGroup>
              </Box>
              <Box>
                <Typography variant="h4" gutterBottom>
                  {t('Which plan fits you best?')}
                </Typography>
                <Typography variant="h6">
                  Check out our <Link href="/pricing">Pricing Page</Link> for
                  more details
                </Typography>
                <RadioGroup
                  sx={{ p: 2, my: 1 }}
                  value={selectedPlan}
                  onChange={(event) => {
                    setSelectedPlan(event.target.value);
                  }}
                  name="plans"
                >
                  <Grid container spacing={1}>
                    {plans.map((item) => (
                      <Grid item xs={12} md={4} key={item.value}>
                        <FormControlLabel
                          sx={{
                            border: 2,
                            borderColor:
                              item.value === selectedPlan
                                ? theme.colors.primary.main
                                : theme.colors.alpha.black[30],
                            p: 2,
                            backgroundColor:
                              item.value === selectedPlan
                                ? theme.colors.primary.lighter
                                : null
                          }}
                          value={item.value}
                          control={<Radio />}
                          label={
                            <Box>
                              <Typography variant="h6" fontWeight="bold">
                                {item.name}
                              </Typography>
                              <Typography variant="subtitle1">
                                <b>
                                  {period == 'monthly'
                                    ? item.monthly
                                    : item.monthly * 12}{' '}
                                  USD
                                </b>{' '}
                                {period == 'monthly'
                                  ? t('per user/month')
                                  : t('per user/year')}
                              </Typography>
                            </Box>
                          }
                        />
                      </Grid>
                    ))}
                  </Grid>
                </RadioGroup>
              </Box>
              <Box>
                <PlanFeatures plan={selectedPlan} />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  my: 3
                }}
              >
                <Typography sx={{ my: 2 }} variant="h4" gutterBottom>
                  {t('You will be charged')} <b>${getCost()}</b>{' '}
                  {period == 'monthly' ? t('monthly') : t('yearly')}
                </Typography>
                <Button size="large" variant="contained">
                  {t('Proceed to Payment')}
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default SubscriptionPlans;
