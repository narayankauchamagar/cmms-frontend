import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  DialogActions,
  DialogContent,
  Divider,
  Grid,
  Switch,
  TextField,
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import Text from 'src/components/Text';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useContext, useEffect, useState } from 'react';
import { phoneRegExp } from '../../../utils/validators';
import CustomDialog from '../components/CustomDialog';
import useAuth from '../../../hooks/useAuth';
import { CustomSnackBarContext } from '../../../contexts/CustomSnackBarContext';

function ProfileDetails() {
  const { t }: { t: any } = useTranslation();
  const {
    user,
    userSettings,
    fetchUserSettings,
    patchUserSettings,
    patchUser,
    updatePassword
  } = useAuth();
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const handleOpenEditModal = () => setOpenEditModal(true);
  const handleCloseEditModal = () => setOpenEditModal(false);
  const { showSnackBar } = useContext(CustomSnackBarContext);
  const [openPasswordModal, setOpenPasswordModal] = useState<boolean>(false);
  const handleOpenPasswordModal = () => setOpenPasswordModal(true);
  const handleClosePasswordModal = () => setOpenPasswordModal(false);

  useEffect(() => {
    fetchUserSettings();
  }, []);

  const userConfig = {
    firstName: { value: user.firstName, title: t('First Name') },
    lastName: { value: user.lastName, title: t('Last Name') },
    phone: { value: user.phone, title: t('Phone') },
    jobTitle: { value: user.jobTitle, title: t('Job Title') },
    settings: {
      emailNotified: {
        value: userSettings?.emailNotified,
        title: t('Email notifications')
      },
      emailUpdatesForWorkOrders: {
        value: userSettings?.emailUpdatesForWorkOrders,
        title: t('Email Updates for Work Orders and Messages')
      },
      emailUpdatesForRequests: {
        value: userSettings?.emailUpdatesForRequests,
        title: t('Email Updates for Requested Work Orders')
      },
      // dailyEmailSummary: { value: userSettings?., title: t('Daily Summary Emails') },
      emailUpdatesForPurchaseOrders: {
        value: userSettings?.emailUpdatesForPurchaseOrders,
        title: t('Purchase Order Emails')
      }
    }
  };

  const renderKeyAndValue = (key: string, value: string) => {
    return (
      <>
        <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
          <Box pr={3} pb={2}>
            {t(key)}:
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Text color="black">
            <b>{value ?? t('N/A')}</b>
          </Text>
        </Grid>
      </>
    );
  };
  const renderKeyAndSwitch = (key: string, value: boolean, setting: string) => {
    return (
      <>
        <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
          <Box pr={3} pb={2}>
            {t(key)}:
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Switch
            checked={value}
            onChange={(event) => {
              patchUserSettings({
                ...userSettings,
                [setting]: event.target.value === 'on'
              });
            }}
          />
        </Grid>
      </>
    );
  };
  const renderEditModal = () => (
    <CustomDialog
      onClose={handleCloseEditModal}
      open={openEditModal}
      title="Edit profile"
      subtitle="Fill in the fields below"
    >
      <Formik
        initialValues={{
          firstName: userConfig.firstName.value,
          lastName: userConfig.lastName.value,
          phone: userConfig.phone.value,
          jobTitle: userConfig.jobTitle.value
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string()
            .max(100)
            .required(t('The First Name field is required')),
          lastName: Yup.string()
            .max(100)
            .required(t('The Last Name field is required')),
          phone: Yup.string().matches(
            phoneRegExp,
            'The phone number is invalid'
          ),
          jobTitle: Yup.string()
            .max(100)
            .required(t('The Job title field is required'))
            .nullable()
        })}
        onSubmit={async (
          _values,
          { resetForm, setErrors, setStatus, setSubmitting }
        ) => {
          setSubmitting(true);
          return patchUser(_values)
            .then(handleCloseEditModal)
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
                <Grid item xs={12} lg={12}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        error={Boolean(touched.firstName && errors.firstName)}
                        fullWidth
                        helperText={touched.firstName && errors.firstName}
                        label={t('First Name')}
                        name="firstName"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.firstName}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        error={Boolean(touched.lastName && errors.lastName)}
                        fullWidth
                        helperText={touched.lastName && errors.lastName}
                        label={t('Last Name')}
                        name="lastName"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.lastName}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        error={Boolean(touched.phone && errors.phone)}
                        fullWidth
                        helperText={touched.phone && errors.phone}
                        label={t('Phone number')}
                        name="phone"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.phone}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        error={Boolean(touched.jobTitle && errors.jobTitle)}
                        fullWidth
                        helperText={touched.jobTitle && errors.jobTitle}
                        label={t('Job Title')}
                        name="jobTitle"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.jobTitle}
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
              <Button color="secondary" onClick={handleCloseEditModal}>
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
  const renderPasswordModal = () => (
    <CustomDialog
      onClose={handleClosePasswordModal}
      open={openPasswordModal}
      title="Change password"
      subtitle="Fill in the fields below"
    >
      <Formik
        initialValues={{
          oldPassword: '',
          newPassword: '',
          confirmPassword: ''
        }}
        validationSchema={Yup.object().shape({
          oldPassword: Yup.string()
            .required(t('Please provide the current password.'))
            .min(8, t('Password is too short - should be 8 chars minimum.')),
          newPassword: Yup.string()
            .required(t('No password provided.'))
            .min(8, t('Password is too short - should be 8 chars minimum.')),
          confirmPassword: Yup.string().oneOf(
            [Yup.ref('newPassword'), null],
            t('Passwords must match')
          )
        })}
        onSubmit={async (
          _values,
          { resetForm, setErrors, setStatus, setSubmitting }
        ) => {
          setSubmitting(true);
          return updatePassword(_values)
            .then(() => {
              handleClosePasswordModal();
              showSnackBar(t('Password changed successfully'), 'success');
            })
            .catch((err) => showSnackBar(t('Wrong password provided'), 'error'))
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
                <Grid item xs={12} lg={12}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        error={Boolean(
                          touched.oldPassword && errors.oldPassword
                        )}
                        fullWidth
                        helperText={touched.oldPassword && errors.oldPassword}
                        label={t('Current password')}
                        type="password"
                        name="oldPassword"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.oldPassword}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        error={Boolean(
                          touched.newPassword && errors.newPassword
                        )}
                        fullWidth
                        helperText={touched.newPassword && errors.newPassword}
                        label={t('New password')}
                        type="password"
                        name="newPassword"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.newPassword}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        error={Boolean(
                          touched.confirmPassword && errors.confirmPassword
                        )}
                        fullWidth
                        helperText={
                          touched.confirmPassword && errors.confirmPassword
                        }
                        type="password"
                        label={t('Confirm password')}
                        name="confirmPassword"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.confirmPassword}
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
              <Button color="secondary" onClick={handleClosePasswordModal}>
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
    <Grid container spacing={2}>
      {renderEditModal()}
      {renderPasswordModal()}
      <Grid item xs={12}>
        <Card>
          <Box
            p={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h4" gutterBottom>
                {t('Personal Details')}
              </Typography>
              <Typography variant="subtitle2">
                {t('Manage informations related to your personal details')}
              </Typography>
            </Box>
            <Box>
              <Button
                onClick={handleOpenEditModal}
                variant="text"
                startIcon={<EditTwoToneIcon />}
              >
                {t('Edit')}
              </Button>
              <Button
                onClick={handleOpenPasswordModal}
                variant="text"
                startIcon={<LockTwoToneIcon />}
              >
                {t('Change password')}
              </Button>
            </Box>
          </Box>
          <Divider />
          <CardContent
            sx={{
              p: 4
            }}
          >
            <Typography variant="subtitle2">
              <Grid container spacing={0}>
                {Object.keys(userConfig).map((key) => {
                  if (key !== 'settings')
                    return renderKeyAndValue(
                      userConfig[key].title,
                      userConfig[key].value
                    );
                })}
              </Grid>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <Box
            p={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h4" gutterBottom>
                {t('Notifications Settings')}
              </Typography>
              <Typography variant="subtitle2">
                {t('Manage details related to your notifications')}
              </Typography>
            </Box>
          </Box>
          <Divider />
          <CardContent
            sx={{
              p: 4
            }}
          >
            <Typography variant="subtitle2">
              <Grid container spacing={0}>
                {Object.keys(userConfig.settings).map((key) =>
                  renderKeyAndSwitch(
                    userConfig.settings[key].title,
                    userConfig.settings[key].value,
                    key
                  )
                )}
              </Grid>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ProfileDetails;
