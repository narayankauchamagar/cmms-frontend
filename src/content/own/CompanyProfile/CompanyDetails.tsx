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
import wait from '../../../utils/wait';
import { useState } from 'react';
import { phoneRegExp } from '../../../utils/validators';
import CustomDialog from '../components/CustomDialog';

function CompanyDetails() {
  const { t }: { t: any } = useTranslation();
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const handleOpenEditModal = () => setOpenEditModal(true);
  const handleCloseEditModal = () => setOpenEditModal(false);

  const companyDetails = {
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

  const renderEditModal = () => (
    <CustomDialog
      onClose={handleCloseEditModal}
      open={openEditModal}
      title="Edit company"
      subtitle="Fill in the fields below"
    >
      <Formik
        initialValues={{
          firstName: companyDetails.firstName.value,
          lastName: companyDetails.lastName.value,
          phone: companyDetails.phone.value,
          jobTitle: companyDetails.jobTitle.value
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
  return (
    <Grid container spacing={2}>
      {renderEditModal()}
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
                {t('Company Details')}
              </Typography>
              <Typography variant="subtitle2">
                {t('Manage informations related to your company')}
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
                {Object.keys(companyDetails).map((key) => {
                  if (key !== 'settings')
                    return renderKeyAndValue(
                      companyDetails[key].title,
                      companyDetails[key].value
                    );
                })}
              </Grid>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default CompanyDetails;
