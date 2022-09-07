import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
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
import wait from '../../../utils/wait';
import { useState } from 'react';
import { phoneRegExp } from '../../../utils/validators';
import CustomDialog from '../components/CustomDialog';

function ProfileDetails() {
  const { t }: { t: any } = useTranslation();
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const handleOpenEditModal = () => setOpenEditModal(true);
  const handleCloseEditModal = () => setOpenEditModal(false);

  const [openPasswordModal, setOpenPasswordModal] = useState<boolean>(false);
  const handleOpenPasswordModal = () => setOpenPasswordModal(true);
  const handleClosePasswordModal = () => setOpenPasswordModal(false);
  const user = {
    firstName: { value: 'firstName', title: t('First Name') },
    lastName: { value: 'lastName', title: t('Last Name') },
    phone: { value: '55386865', title: t('Phone') },
    jobTitle: { value: 'Carrier', title: t('Job Title') },
    settings: {
      isNotified: { value: true, title: t('Email notifications') },
      emailForWorkOrders: {
        value: false,
        title: t('Email Updates for Work Orders and Messages')
      },
      emailForRequest: {
        value: true,
        title: t('Email Updates for Requested Work Orders')
      },
      dailyEmailSummary: { value: false, title: t('Daily Summary Emails') },
      purchaseOrderEmail: { value: true, title: t('Purchase Order Emails') }
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
            <b>{value}</b>
          </Text>
        </Grid>
      </>
    );
  };
  const renderKeyAndSwitch = (key: string, value: boolean) => {
    return (
      <>
        <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
          <Box pr={3} pb={2}>
            {t(key)}:
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Switch defaultChecked={value} />
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
          firstName: user.firstName.value,
          lastName: user.lastName.value,
          phone: user.phone.value,
          jobTitle: user.jobTitle.value
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
            setErrors({ firstName: err.message });
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
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        }}
        validationSchema={Yup.object().shape({
          currentPassword: Yup.string()
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
                <Grid item xs={12} lg={12}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        error={Boolean(
                          touched.currentPassword && errors.currentPassword
                        )}
                        fullWidth
                        helperText={
                          touched.currentPassword && errors.currentPassword
                        }
                        label={t('Current password')}
                        type="password"
                        name="currentPassword"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.currentPassword}
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
    <Grid container spacing={3}>
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
                {Object.keys(user).map((key) => {
                  if (key !== 'settings')
                    return renderKeyAndValue(user[key].title, user[key].value);
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
                {Object.keys(user.settings).map((key) =>
                  renderKeyAndSwitch(
                    user.settings[key].title,
                    user.settings[key].value
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
