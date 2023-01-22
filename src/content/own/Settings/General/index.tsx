import {
  Box,
  Divider,
  Grid,
  MenuItem,
  Select,
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import SettingsLayout from '../SettingsLayout';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import CustomSwitch from '../../components/form/CustomSwitch';
import useAuth from '../../../../hooks/useAuth';
import internationalization from '../../../../i18n/i18n';
import { useDispatch, useSelector } from '../../../../store';
import { getCurrencies } from '../../../../slices/currency';
import { useEffect } from 'react';

function GeneralSettings() {
  const { t }: { t: any } = useTranslation();
  const switchLanguage = ({ lng }: { lng: any }) => {
    internationalization.changeLanguage(lng);
  };
  const { patchGeneralPreferences, companySettings } = useAuth();
  const { generalPreferences } = companySettings;
  const dispatch = useDispatch();
  const { currencies } = useSelector((state) => state.currencies);

  useEffect(() => {
    dispatch(getCurrencies());
  }, []);

  const switches = [
    {
      title: t('Auto-assign Work Orders'),
      description: t(
        'Automatically assign new work orders to the person that creates them'
      ),
      name: 'autoAssignWorkOrders'
    },
    {
      title: t('Auto-assign requests'),
      description: t(
        'Automatically assign new work orders to the person who approve the request'
      ),
      name: 'autoAssignRequests'
    },
    {
      title: t('Disable closed Work Order notifications'),
      description: t(
        'Disable notifications when closed Work Orders are updated'
      ),
      name: 'disableClosedWorkOrdersNotif'
    },
    {
      title: t('Ask for feedback when Work Order is closed'),
      description: t('Users are asked to give feedback on the job done'),
      name: 'askFeedBackOnWOClosed'
    },
    {
      title: t('Include labor cost in the total cost'),
      description: t(
        'Add labor costs to the total when a user logs time and has an hourly rate stored'
      ),
      name: 'laborCostInTotalCost'
    },
    {
      title: t('Enable work order updates for Requesters'),
      description: t('Users get updates for the work orders they requested'),
      name: 'woUpdateForRequesters'
    }
  ];
  const onSubmit = async (
    _values,
    { resetForm, setErrors, setStatus, setSubmitting }
  ) => {};
  return (
    <SettingsLayout tabIndex={0}>
      <Grid item xs={12}>
        <Box p={4}>
          <Formik
            initialValues={generalPreferences}
            validationSchema={Yup.object().shape({
              language: Yup.string(),
              dateFormat: Yup.string(),
              currency: Yup.string(),
              businessType: Yup.string(),
              autoAssignWorkOrders: Yup.bool(),
              autoAssignRequests: Yup.bool(),
              disableClosedWorkOrdersNotif: Yup.bool(),
              askFeedBackOnWOClosed: Yup.bool(),
              laborCostInTotalCost: Yup.bool(),
              woUpdateForRequesters: Yup.bool()
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
                          onChange={(event) => {
                            patchGeneralPreferences({
                              language: event.target.value
                            });
                            switchLanguage({
                              lng: event.target.value.toLowerCase()
                            });
                          }}
                          value={generalPreferences.language}
                          as={Select}
                          name="language"
                        >
                          <MenuItem value="EN">English</MenuItem>
                          <MenuItem value="FR">Français</MenuItem>
                        </Field>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h6" sx={{ mb: 0.5 }}>
                          {t('Date format')}
                        </Typography>
                        <Field
                          onChange={(event) =>
                            patchGeneralPreferences({
                              dateFormat: event.target.value
                            })
                          }
                          value={generalPreferences.dateFormat}
                          as={Select}
                          name="dateFormat"
                        >
                          <MenuItem value="MMDDYY">MM/DD/YY</MenuItem>
                          <MenuItem value="DDMMYY">DD/MM/YY</MenuItem>
                        </Field>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h6" sx={{ mb: 0.5 }}>
                          {t('currency')}
                        </Typography>
                        <Field
                          onChange={(event) =>
                            patchGeneralPreferences({
                              currency: currencies.find(
                                (currency) =>
                                  currency.id === Number(event.target.value)
                              )
                            })
                          }
                          value={generalPreferences.currency?.id}
                          as={Select}
                          name="currency"
                        >
                          {currencies.map((currency) => (
                            <MenuItem
                              key={currency.id}
                              value={currency.id}
                            >{`${currency.name} - ${currency.code}`}</MenuItem>
                          ))}
                        </Field>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h6" sx={{ mb: 0.5 }}>
                          {t('Business type')}
                        </Typography>
                        <Field
                          onChange={(event) =>
                            patchGeneralPreferences({
                              businessType: event.target.value
                            })
                          }
                          value={generalPreferences.businessType}
                          as={Select}
                          name="businessType"
                        >
                          <MenuItem value="GENERAL_ASSET_MANAGEMENT">
                            {t('General asset management')}
                          </MenuItem>
                          <MenuItem value="PHYSICAL_ASSET_MANAGEMENT">
                            {t('Physical asset management')}
                          </MenuItem>
                        </Field>
                      </Grid>
                    </Grid>
                    <Divider sx={{ mt: 3 }} />
                    <Grid container spacing={2} sx={{ mt: 1 }}>
                      {switches.map((element) => (
                        <CustomSwitch
                          key={element.name}
                          title={element.title}
                          description={element.description}
                          checked={values[element.name]}
                          name={element.name}
                          handleChange={(event) => {
                            handleChange(event);
                            patchGeneralPreferences({
                              [element.name]: event.target.checked
                            });
                          }}
                        />
                      ))}
                    </Grid>
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

export default GeneralSettings;
