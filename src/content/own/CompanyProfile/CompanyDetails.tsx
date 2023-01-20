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
  Link,
  TextField,
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import Text from 'src/components/Text';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { phoneRegExp, websiteRegExp } from '../../../utils/validators';
import CustomDialog from '../components/CustomDialog';
import { Company } from '../../../models/owns/company';
import useAuth from '../../../hooks/useAuth';

interface CompanyDetailsProps {
  company: Company;
}
function CompanyDetails(props: CompanyDetailsProps) {
  const { company } = props;
  const { patchCompany, user } = useAuth();
  const { t }: { t: any } = useTranslation();
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const handleOpenEditModal = () => setOpenEditModal(true);
  const handleCloseEditModal = () => setOpenEditModal(false);

  const companyDetails = {
    name: { value: company.name, title: t(' Name') },
    address: { value: company.address, title: t('Address') },
    website: { value: company.website, title: 'Website', isLink: true },
    phone: { value: company.phone, title: 'Phone' }
  };

  const KeyAndValue = ({
    label,
    value,
    isLink
  }: {
    label: string;
    value: string;
    isLink: boolean;
  }) => {
    return (
      <>
        <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
          <Box pr={3} pb={2}>
            {t(label)}:
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          {isLink && value ? (
            <Link
              href={
                value
                  ? value.startsWith('https://') || value.startsWith('http://')
                    ? value
                    : `https://${value}`
                  : null
              }
              target="_blank"
              rel="noreferrer"
            >
              {value}
            </Link>
          ) : (
            <Text color="black">
              <b>{value ?? 'N/A'}</b>
            </Text>
          )}
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
          name: companyDetails.name.value,
          address: companyDetails.address.value,
          phone: companyDetails.phone.value,
          website: companyDetails.website.value
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().max(100).required(t('The name field is required')),
          address: Yup.string()
            .max(100)
            .required(t('The address field is required')),
          phone: Yup.string().matches(
            phoneRegExp,
            t('The phone number is invalid')
          ),
          website: Yup.string().matches(websiteRegExp, t('Invalid website'))
        })}
        onSubmit={async (
          _values,
          { resetForm, setErrors, setStatus, setSubmitting }
        ) => {
          setSubmitting(true);
          return patchCompany(_values)
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
                        error={Boolean(touched.name && errors.name)}
                        fullWidth
                        helperText={touched.name && errors.name}
                        label={t('Name')}
                        name="name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.name}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        error={Boolean(touched.address && errors.address)}
                        fullWidth
                        helperText={touched.address && errors.address}
                        label={t('Address')}
                        name="address"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.address}
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
                        error={Boolean(touched.website && errors.website)}
                        fullWidth
                        helperText={touched.website && errors.website}
                        label={t('Website')}
                        name="website"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.website}
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
                {t('save')}
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
            {user.ownsCompany && (
              <Box>
                <Button
                  onClick={handleOpenEditModal}
                  variant="text"
                  startIcon={<EditTwoToneIcon />}
                >
                  {t('edit')}
                </Button>
              </Box>
            )}
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
                    return (
                      <KeyAndValue
                        label={companyDetails[key].title}
                        value={companyDetails[key].value}
                        isLink={companyDetails[key].isLink}
                      />
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
