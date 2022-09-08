import { Helmet } from 'react-helmet-async';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import {
  Box,
  Button,
  Card,
  CircularProgress,
  DialogActions,
  DialogContent,
  FormControlLabel,
  Grid,
  Link,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Slider,
  Stack,
  TextField,
  Typography,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import PlanFeatures from './PlanFeatures';
import * as Yup from 'yup';
import wait from '../../../../utils/wait';
import CustomDialog from '../../components/CustomDialog';
import { Field, Formik } from 'formik';
import valid from 'card-validator';

function SubscriptionPlans() {
  const { t }: { t: any } = useTranslation();
  const plan = { id: 'dsds4', name: 'Starter', users: 2, code: 'starter' };
  const theme = useTheme();
  const [usersCount, setUsersCount] = useState<number>(3);
  const [openCheckout, setOpenCheckout] = useState<boolean>(false);
  const handleCloseCheckoutModal = () => setOpenCheckout(false);
  const handleOpenCheckoutModal = () => setOpenCheckout(true);
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
    const monthlyCost =
      plans.find((plan) => plan.value == selectedPlan).monthly * usersCount;
    return period == 'monthly' ? monthlyCost : monthlyCost * 12;
  };
  const renderCheckoutModal = () => (
    <CustomDialog
      onClose={handleCloseCheckoutModal}
      open={openCheckout}
      title="Checkout"
      subtitle="Fill in the fields below"
      maxWidth="md"
    >
      <Formik
        initialValues={{
          card: '',
          expirationMonth: '01',
          expirationYear: '2022',
          cvv: '',
          cardholder: ''
        }}
        validationSchema={Yup.object().shape({
          card: Yup.string()
            .test(
              'test-number', // this is used internally by yup
              t('Credit Card number is invalid'), //validation message
              (value) => valid.number(value).isValid
            ) // return true false based on validation
            .required(t('The card field is required')),
          expirationMonth: Yup.string()
            .test(
              'test-expirationMonth', // this is used internally by yup
              t('Expiration month is invalid'), //validation message
              (value) => valid.expirationMonth(value).isValid
            ) // return true false based on validation
            .required(t('The Expiration month is required')),
          expirationYear: Yup.string()
            .test(
              'test-expirationYear', // this is used internally by yup
              t('Expiration year is invalid'), //validation message
              (value) => valid.expirationYear(value).isValid
            ) // return true false based on validation
            .required(t('The Expiration year is required')),
          cvv: Yup.string()
            .test(
              'test-cvv', // this is used internally by yup
              t('CVV is invalid'), //validation message
              (value) => valid.expirationYear(value).isValid
            ) // return true false based on validation
            .required(t('The CVV is required')),
          cardholder: Yup.string()
            .min(5)
            .required(t('The cardholder name is required'))
        })}
        onSubmit={async (
          _values,
          { resetForm, setErrors, setStatus, setSubmitting }
        ) => {
          console.log(_values);
          try {
            await wait(1000);
            resetForm();
            setStatus({ success: true });
            setSubmitting(false);
          } catch (err) {
            console.error(err);
            setStatus({ success: false });
            setSubmitting(false);
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values
        }) => (
          <form onSubmit={handleSubmit}>
            <DialogContent
              dividers
              sx={{
                p: 3
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} lg={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        error={Boolean(touched.card && errors.card)}
                        fullWidth
                        helperText={touched.card && errors.card}
                        label={t('Card')}
                        type="number"
                        name="card"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.card}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Typography variant="h6" gutterBottom>
                        {t('Expiration Month')}
                      </Typography>
                      <Field
                        as={Select}
                        fullWidth
                        name="expirationMonth"
                        onChange={handleChange}
                        value={values.expirationMonth}
                      >
                        <MenuItem value="01">01</MenuItem>
                      </Field>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Typography variant="h6" gutterBottom>
                        {t('Expiration Year')}
                      </Typography>
                      <Field
                        as={Select}
                        fullWidth
                        name="expirationYear"
                        onChange={handleChange}
                        value={values.expirationYear}
                      >
                        <MenuItem value="2022">2022</MenuItem>
                      </Field>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        error={Boolean(touched.cvv && errors.cvv)}
                        fullWidth
                        helperText={touched.cvv && errors.cvv}
                        label={t('CVV')}
                        type="number"
                        name="cvv"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.cvv}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        error={Boolean(touched.cardholder && errors.cardholder)}
                        fullWidth
                        helperText={touched.cardholder && errors.cardholder}
                        label={t('Cardholder name')}
                        name="cardholder"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.cardholder}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions
              sx={{
                p: 3
              }}
            >
              <Button color="secondary" onClick={handleCloseCheckoutModal}>
                {t('Cancel')}
              </Button>
              <Button
                type="submit"
                startIcon={
                  isSubmitting ? <CircularProgress size="1rem" /> : null
                }
                disabled={isSubmitting}
                variant="contained"
              >
                {t('Save')}
              </Button>
            </DialogActions>
          </form>
        )}
      </Formik>
    </CustomDialog>
  );

  return (
    <>
      <Helmet>
        <title>{t('Plan')}</title>
      </Helmet>
      {renderCheckoutModal()}
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
                <Typography variant="h4" gutterBottom>
                  Features
                </Typography>
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
                <Button
                  onClick={handleOpenCheckoutModal}
                  size="large"
                  variant="contained"
                >
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
