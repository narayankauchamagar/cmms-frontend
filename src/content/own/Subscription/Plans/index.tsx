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
import { useContext, useEffect, useState } from 'react';
import PlanFeatures from './PlanFeatures';
import * as Yup from 'yup';
import CustomDialog from '../../components/CustomDialog';
import { Field, Formik } from 'formik';
import valid from 'card-validator';
import { TitleContext } from '../../../../contexts/TitleContext';
import { useDispatch, useSelector } from '../../../../store';
import { getSubscriptionPlans } from '../../../../slices/subscriptionPlan';
import useAuth from '../../../../hooks/useAuth';
import PermissionErrorMessage from '../../components/PermissionErrorMessage';
import { CustomSnackBarContext } from '../../../../contexts/CustomSnackBarContext';
import { SubscriptionPlan } from '../../../../models/owns/subscriptionPlan';
import { useNavigate } from 'react-router-dom';
import { CompanySettingsContext } from '../../../../contexts/CompanySettingsContext';

function SubscriptionPlans() {
  const { t }: { t: any } = useTranslation();
  const { company, user, patchSubscription } = useAuth();
  const subscription = company.subscription;
  const theme = useTheme();
  const [usersCount, setUsersCount] = useState<number>(3);
  const [openCheckout, setOpenCheckout] = useState<boolean>(false);
  const handleCloseCheckoutModal = () => setOpenCheckout(false);
  const handleOpenCheckoutModal = () => setOpenCheckout(true);
  const [period, setPeriod] = useState<string>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string>('STARTER');
  const [selectedPlanObject, setSelectedPlanObject] =
    useState<SubscriptionPlan>();
  const { subscriptionPlans } = useSelector((state) => state.subscriptionPlans);
  const { setTitle } = useContext(TitleContext);
  const { showSnackBar } = useContext(CustomSnackBarContext);
  const { getFormattedCurrency } = useContext(CompanySettingsContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setTitle(t('plans'));
    if (user.ownsCompany) dispatch(getSubscriptionPlans());
  }, []);
  const periods = [
    { name: t('monthly'), value: 'monthly' },
    { name: t('annually'), value: 'annually' }
  ];

  useEffect(() => {
    setSelectedPlanObject(
      subscriptionPlans.find((plan) => plan.code == selectedPlan)
    );
  }, [selectedPlan, subscriptionPlans]);

  const getCost = () => {
    const selectedPlanData = subscriptionPlans.find(
      (plan) => plan.code == selectedPlan
    );
    return selectedPlanData
      ? selectedPlanData[
          period == 'monthly' ? 'monthlyCostPerUser' : 'yearlyCostPerUser'
        ] * usersCount
      : 0;
  };
  const monthOptions = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12'
  ];

  const getYearOptions = (): number[] => {
    const currentYear = new Date().getFullYear();
    let yearOptions = [];
    for (let i = 0; i < 10; i++) {
      yearOptions.push(currentYear + i);
    }
    return yearOptions;
  };
  const onSubcriptionPatchSuccess = () => {
    showSnackBar(t('subscription_change_success'), 'success');
    handleCloseCheckoutModal();
    navigate('/app/work-orders');
  };
  const onSubcriptionPatchFailure = () => {
    showSnackBar(t("The Subscription couldn't be changed"), 'error');
  };
  const renderCheckoutModal = () => (
    <CustomDialog
      onClose={handleCloseCheckoutModal}
      open={openCheckout}
      title={t('checkout')}
      subtitle={t('checkout_description')}
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
              t('invalid_credit_card'), //validation message
              (value) => valid.number(value?.toString()).isValid
            ) // return true false based on validation
            .required(t('required_credit_card')),
          expirationMonth: Yup.string()
            .test(
              'test-expirationMonth', // this is used internally by yup
              t('invalid_expiration_month'), //validation message
              (value) => valid.expirationMonth(value).isValid
            ) // return true false based on validation
            .required(t('required_expiration_month')),
          expirationYear: Yup.string()
            .test(
              'test-expirationYear', // this is used internally by yup
              t('invalid_expiration_year'), //validation message
              (value) => valid.expirationYear(value).isValid
            ) // return true false based on validation
            .required(t('required_expiration_year')),
          cvv: Yup.string()
            .test(
              'test-cvv', // this is used internally by yup
              t('invalid_cvv'), //validation message
              (value) => valid.cvv(value?.toString()).isValid
            ) // return true false based on validation
            .required(t('required_cvv')),
          cardholder: Yup.string()
            .min(5)
            .required(t('required_cardholder_name'))
        })}
        onSubmit={async (
          _values,
          { resetForm, setErrors, setStatus, setSubmitting }
        ) => {
          // console.log(_values);
          setSubmitting(true);
          return patchSubscription({
            usersCount,
            monthly: period === 'monthly',
            subscriptionPlan: selectedPlanObject
          })
            .then(onSubcriptionPatchSuccess)
            .catch(onSubcriptionPatchFailure)
            .finally(() => setSubmitting(false));
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
                        label={t('card')}
                        type="number"
                        inputProps={{
                          min: '0'
                        }}
                        name="card"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.card}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Typography variant="h6" gutterBottom>
                        {t('expiration_month')}
                      </Typography>
                      <Field
                        as={Select}
                        fullWidth
                        name="expirationMonth"
                        onChange={handleChange}
                        value={values.expirationMonth}
                      >
                        {monthOptions.map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Field>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Typography variant="h6" gutterBottom>
                        {t('expiration_year')}
                      </Typography>
                      <Field
                        as={Select}
                        fullWidth
                        name="expirationYear"
                        onChange={handleChange}
                        value={values.expirationYear}
                      >
                        {getYearOptions().map((option, index) => (
                          <MenuItem key={index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Field>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        error={Boolean(touched.cvv && errors.cvv)}
                        fullWidth
                        helperText={touched.cvv && errors.cvv}
                        label={t('CVV')}
                        type="number"
                        inputProps={{
                          min: '0'
                        }}
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
                        label={t('cardholder_name')}
                        name="cardholder"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.cardholder}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} lg={6}>
                      <Typography variant={'h4'}>{t('seats')}</Typography>
                      <Typography variant="h6">{usersCount}</Typography>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Typography variant={'h4'}>
                        {t('cost_per_seat')}
                      </Typography>
                      {period === 'monthly' ? (
                        <Typography variant="h6">
                          {getFormattedCurrency(
                            selectedPlanObject.monthlyCostPerUser
                          )}{' '}
                          {t('per_month')}
                        </Typography>
                      ) : (
                        <Typography variant="h6">
                          {getFormattedCurrency(
                            selectedPlanObject.yearlyCostPerUser
                          )}{' '}
                          {t('per_year')}
                        </Typography>
                      )}
                    </Grid>
                    <Grid item xs={12} lg={12}>
                      <Typography variant={'h4'}>{t('total_cost')}</Typography>
                      <Typography variant="h6">{getCost()} $</Typography>
                    </Grid>
                    <Grid item xs={12} lg={12}>
                      <Typography variant={'h4'}>
                        {t('your_payment_secure')}
                      </Typography>
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
                {t('cancel')}
              </Button>
              <Button
                type="submit"
                startIcon={
                  isSubmitting ? <CircularProgress size="1rem" /> : null
                }
                disabled={isSubmitting}
                variant="contained"
              >
                {t('save')}
              </Button>
            </DialogActions>
          </form>
        )}
      </Formik>
    </CustomDialog>
  );
  if (user.ownsCompany)
    return (
      <>
        <Helmet>
          <title>{t('plan')}</title>
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
                  {t('current_plan')}
                </Typography>
                <Typography variant="h6">
                  {subscription.subscriptionPlan.name}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <PersonTwoToneIcon />
                <Typography variant="h6">
                  {subscription.usersCount} {t(`Users`)}
                </Typography>
              </Stack>
            </Card>
            <Grid item xs={12}>
              <Card sx={{ p: 2, mt: 2 }}>
                <Box>
                  <Box>
                    <Typography variant="h4" gutterBottom>
                      {t('number_users_who_will_use_grash')}
                    </Typography>
                    <Typography variant="subtitle2">
                      {t('pay_only_for_roles')}
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
                      {t('users_count_display', { count: usersCount })}
                    </Typography>
                  </Stack>
                </Box>
                <Box>
                  <Typography variant="h4">
                    {t('how_will_you_be_billed')}
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
                    {t('which_plan_fits_you')}
                  </Typography>
                  <Typography variant="h6">
                    {t('checkout_our')}{' '}
                    <Link href="/pricing">{t('pricing_page')}</Link>{' '}
                    {t('for_more_details')}
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
                      {subscriptionPlans.map((plan) => (
                        <Grid item xs={12} md={4} key={plan.id}>
                          <FormControlLabel
                            sx={{
                              border: 2,
                              borderColor:
                                plan.code === selectedPlan
                                  ? theme.colors.primary.main
                                  : theme.colors.alpha.black[30],
                              p: 2,
                              backgroundColor:
                                plan.code === selectedPlan
                                  ? theme.colors.primary.lighter
                                  : null
                            }}
                            value={plan.code}
                            control={<Radio />}
                            label={
                              <Box>
                                <Typography variant="h6" fontWeight="bold">
                                  {plan.name}
                                </Typography>
                                <Typography variant="subtitle1">
                                  <b>
                                    {period == 'monthly'
                                      ? plan.monthlyCostPerUser
                                      : plan.yearlyCostPerUser}{' '}
                                    USD
                                  </b>{' '}
                                  {period == 'monthly'
                                    ? t('per_user_month')
                                    : t('per_user_year')}
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
                    {t('features')}
                  </Typography>
                  <PlanFeatures plan={selectedPlan.toLowerCase()} />
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
                    {t('you_will_be_charged')}{' '}
                    <b>{getFormattedCurrency(getCost())}</b>{' '}
                    {period == 'monthly'
                      ? t('monthly_adverb')
                      : t('yearly_adverb')}
                  </Typography>
                  <Button
                    onClick={handleOpenCheckoutModal}
                    size="large"
                    variant="contained"
                    disabled={!selectedPlan}
                  >
                    {t('proceed_to_payment')}
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  else return <PermissionErrorMessage message={'no_access_page'} />;
}

export default SubscriptionPlans;
