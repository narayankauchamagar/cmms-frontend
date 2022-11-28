import { useContext, useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';

import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControlLabel,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { useDispatch } from '../../../../store';
import { addRole } from '../../../../slices/role';
import { CustomSnackBarContext } from '../../../../contexts/CustomSnackBarContext';

// const roles = [
//   { label: 'Free', value: 'free' },
//   { label: 'Paid', value: 'paid' }
// ];

interface PageHeaderProps {
  rolesNumber: number;
  formatValues: (values) => any;
}

function PageHeader({ rolesNumber, formatValues }: PageHeaderProps) {
  const { t }: { t: any } = useTranslation();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { showSnackBar } = useContext(CustomSnackBarContext);

  const handleCreateRoleOpen = () => {
    setOpen(true);
  };

  const handleCreateRoleClose = () => {
    setOpen(false);
  };
  const onCreationSuccess = () => {
    handleCreateRoleClose();
    showSnackBar(t('The Role has been created successfully'), 'success');
  };
  const onCreationFailure = (err) =>
    showSnackBar(t("The Role couldn't be created"), 'error');

  return (
    <>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h3" component="h3" gutterBottom>
            {t('Roles Management')}
          </Typography>
          <Typography variant="subtitle2">
            {t(`${rolesNumber} roles`)}
          </Typography>
        </Grid>

        <Grid item>
          <Button
            sx={{
              mt: { xs: 2, sm: 0 }
            }}
            onClick={handleCreateRoleOpen}
            variant="contained"
            startIcon={<AddTwoToneIcon fontSize="small" />}
          >
            {t('Create role')}
          </Button>
        </Grid>
      </Grid>

      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleCreateRoleClose}
      >
        <DialogTitle
          sx={{
            p: 3
          }}
        >
          <Typography variant="h4" gutterBottom>
            {t('Add new role')}
          </Typography>
          <Typography variant="subtitle2">
            {t('Fill in the fields below to create and add a new role')}
          </Typography>
        </DialogTitle>
        <Formik
          initialValues={{
            name: '',
            description: '',
            externalId: '',
            submit: null
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string()
              .max(255)
              .required(t('The name field is required')),
            description: Yup.string().max(255).nullable(),
            externalId: Yup.string().max(255).nullable()
          })}
          onSubmit={async (
            _values,
            { resetForm, setErrors, setStatus, setSubmitting }
          ) => {
            setSubmitting(true);
            const formattedValues = formatValues(_values);
            return dispatch(addRole(formattedValues))
              .then(onCreationSuccess)
              .catch(onCreationFailure)
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
                          error={Boolean(
                            touched.description && errors.description
                          )}
                          fullWidth
                          helperText={touched.description && errors.description}
                          label={t('Description')}
                          name="description"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.description}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          error={Boolean(
                            touched.externalId && errors.externalId
                          )}
                          fullWidth
                          helperText={touched.externalId && errors.externalId}
                          label={t('External ID')}
                          name="externalId"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.externalId}
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      flexDirection="column"
                    >
                      <Box>
                        <Typography variant="h2" sx={{ pb: 1 }}>
                          {t('Permissions')}
                        </Typography>
                        <Typography variant="subtitle2">
                          {t(
                            'This role can do everything an Administrator can do in Grash, but you can customize some important permissions below.'
                          )}
                        </Typography>
                      </Box>

                      <Divider flexItem sx={{ m: 4 }} />

                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                        mb={3}
                      >
                        <Typography variant="h4" sx={{ pb: 1 }}>
                          {t('Create/Edit')}
                        </Typography>
                        <FormControlLabel
                          onChange={handleChange}
                          name={'createPeopleTeams'}
                          control={<Checkbox />}
                          label="People & teams"
                        />
                        <FormControlLabel
                          onChange={handleChange}
                          name={'createCategories'}
                          control={<Checkbox />}
                          label="Categories"
                        />
                      </Box>

                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                        mb={3}
                      >
                        <Typography variant="h4" sx={{ pb: 1 }}>
                          {t('Delete')}
                        </Typography>
                        <FormControlLabel
                          onChange={handleChange}
                          name={'deleteWorkOrders'}
                          control={<Checkbox />}
                          label="Work Orders"
                        />
                        <FormControlLabel
                          onChange={handleChange}
                          name={'deletePreventiveMaintenanceTrigger'}
                          control={<Checkbox />}
                          label="Preventative Maintenance Trigger"
                        />
                        <FormControlLabel
                          onChange={handleChange}
                          name={'deleteLocations'}
                          control={<Checkbox />}
                          label="Locations"
                        />
                        <FormControlLabel
                          onChange={handleChange}
                          name={'deleteAssets'}
                          control={<Checkbox />}
                          label="Assets"
                        />
                        <FormControlLabel
                          onChange={handleChange}
                          name={'deletePartsAndSets'}
                          control={<Checkbox />}
                          label="Parts and Sets of Parts"
                        />
                        <FormControlLabel
                          onChange={handleChange}
                          name={'deletePurchaseOrders'}
                          control={<Checkbox />}
                          label="Purchase Order"
                        />
                        <FormControlLabel
                          onChange={handleChange}
                          name={'deleteMeters'}
                          control={<Checkbox />}
                          label="Meters"
                        />
                        <FormControlLabel
                          onChange={handleChange}
                          name={'deleteVendorsCustomers'}
                          control={<Checkbox />}
                          label="Vendors & Customers"
                        />
                        <FormControlLabel
                          onChange={handleChange}
                          name={'deleteCategories'}
                          control={<Checkbox />}
                          label="Categories"
                        />
                        <FormControlLabel
                          onChange={handleChange}
                          name={'deleteFiles'}
                          control={<Checkbox />}
                          label="Files"
                        />
                        <FormControlLabel
                          onChange={handleChange}
                          name={'deletePeopleTeams'}
                          control={<Checkbox />}
                          label="People and Teams"
                        />
                      </Box>

                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                      >
                        <Typography variant="h4" sx={{ pb: 1 }}>
                          {t('Access')}
                        </Typography>
                        <FormControlLabel
                          onChange={handleChange}
                          name={'accessSettings'}
                          control={<Checkbox />}
                          label="Settings"
                        />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions
                sx={{
                  p: 3
                }}
              >
                <Button color="secondary" onClick={handleCreateRoleClose}>
                  {t('Cancel')}
                </Button>
                <Button
                  type="submit"
                  startIcon={
                    isSubmitting ? <CircularProgress size="1rem" /> : null
                  }
                  disabled={Boolean(errors.submit) || isSubmitting}
                  variant="contained"
                >
                  {t('Add new role')}
                </Button>
              </DialogActions>
            </form>
          )}
        </Formik>
      </Dialog>
    </>
  );
}

export default PageHeader;
