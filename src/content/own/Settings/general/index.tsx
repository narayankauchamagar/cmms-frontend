import { Box, Divider, Grid, MenuItem, Select, Switch, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SettingsLayout from '../SettingsLayout';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import wait from '../../../../utils/wait';

function SwitchOption(props: {
  title: string;
  description: string;
  name: string;
  handleChange: any;
  values: any;
}) {
  const { name, title, description, handleChange, values } = props;
  return (
    <Grid item xs={12} sx={{ mb: 2 }}>
      <Box display="flex" flexDirection="row" alignItems="center">
        <Field
          onChange={handleChange}
          checked={values[name]}
          as={Switch}
          name={name}
        />
        <Box display="flex" flexDirection="column">
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 0.5 }}>
            {title}
          </Typography>
          <Typography variant="h6" fontStyle="italic">
            {description}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}
function DashboardTasks() {
  const { t }: { t: any } = useTranslation();
  const switches = [
    {
      title: t('Auto-assign Work Orders'),
      description:t(
        'Automatically assign new work orders to the person that creates them'),
      name: 'autoAssignWorkOrder'
    },
    {
      title: t('Auto-assign requests'),
      description: t('Automatically assign new work orders to the person who approve the request'),
      name: 'autoAssignRequests'
    },
    {
      title: t('Disable closed Work Order notifications'),
      description: t('Disable notifications when closed Work Orders are updated'),
      name: 'disableClosedNotification'
    },
    {
      title: t('Ask for feedback when Work Order is closed'),
      description: t('Users are asked to give feedback on the job done'),
      name: 'askClosedFeedback'
    },
    {
      title: t('Include labor cost in the total cost'),
      description: t('Add labor costs to the total when a user logs time and has an hourly rate stored'),
      name: 'includeLaborCost'
    },
    {
      title: t('Enable work order updates for Requesters'),
      description: t('Users get updates for the work orders they requested'),
      name: 'enableRequesterUpdate'
    }
  ];
  const onSubmit = async (
    _values,
    { resetForm, setErrors, setStatus, setSubmitting }
  ) => {
    try {
      await wait(1000);
      resetForm();
      setStatus({ success: true });
      setSubmitting(false);
    } catch (err) {
      console.error(err);
      setStatus({ success: false });
      setErrors({ submit: err.message });
      setSubmitting(false);
    }
  };
  return (
    <SettingsLayout tabIndex={0}>
      <Grid item xs={12}>
        <Box p={4}>
          <Formik
            initialValues={{
              language: 'fr',
              dateFormat: 'MM/DD/YY',
              currency: 'MAD',
              businessType: 'PAM',
              autoAssignWorkOrder: true,
              disableClosedNotification: false,
              askClosedFeedback: false,
              includeLaborCost: true,
              enableRequesterUpdate: true,
            }}
            validationSchema={Yup.object().shape({
              language: Yup.string(),
              dateFormat: Yup.string(),
              currency: Yup.string(),
              businessType: Yup.string(),
              autoAssignWorkOrder: Yup.bool(),
              autoAssignRequests: Yup.bool(),
              disableClosedNotification: Yup.bool(),
              askClosedFeedback: Yup.bool(),
              includeLaborCost: Yup.bool(),
              enableRequesterUpdate: Yup.bool(),
            })}
            onSubmit={onSubmit}
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
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="h6" sx={{ mb: 0.5 }}>
                          {t('Language')}
                        </Typography>
                        <Field
                          onChange={handleChange}
                          value={values.language}
                          as={Select}
                          name="language"
                        >
                          <MenuItem value="en">English</MenuItem>
                          <MenuItem value="fr">Français</MenuItem>
                        </Field>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h6" sx={{ mb: 0.5 }}>
                          {t('Date format')}
                        </Typography>
                        <Field
                          onChange={handleChange}
                          value={values.dateFormat}
                          as={Select}
                          name="dateFormat"
                        >
                          <MenuItem value="MM/DD/YY">MM/DD/YY</MenuItem>
                          <MenuItem value="DD/MM/YY">DD/MM/YY</MenuItem>
                        </Field>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h6" sx={{ mb: 0.5 }}>
                          {t('Currency')}
                        </Typography>
                        <Field
                          onChange={handleChange}
                          value={values.currency}
                          as={Select}
                          name="currency"
                        >
                          <MenuItem value="MAD">MAD - Dirham - DH</MenuItem>
                          <MenuItem value="EUR">EUR - Euro - €</MenuItem>
                          <MenuItem value="USD">
                            USD - United States Dollar - $
                          </MenuItem>
                        </Field>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h6" sx={{ mb: 0.5 }}>
                          {t('Business type')}
                        </Typography>
                        <Field
                          onChange={handleChange}
                          value={values.businessType}
                          as={Select}
                          name="businessType"
                        >
                          <MenuItem value="PAM">
                            {t('Physical asset management')}
                          </MenuItem>
                        </Field>
                      </Grid>
                    </Grid>
                    <Divider sx={{ mt: 3 }} />
                    <Grid container spacing={2} sx={{ mt: 1 }}></Grid>
                    {switches.map((element) => (
                      <SwitchOption
                        key={element.name}
                        title={element.title}
                        description={element.description}
                        values={values}
                        name={element.name}
                        handleChange={handleChange}
                      />
                    ))}
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </Box>
      </Grid>
    </SettingsLayout>
  );
}

export default DashboardTasks;
