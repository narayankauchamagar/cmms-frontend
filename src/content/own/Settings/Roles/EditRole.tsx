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
import { Formik } from 'formik';
import * as Yup from 'yup';
import { editRole } from '../../../../slices/role';
import { PermissionEntity, Role } from '../../../../models/owns/role';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { CustomSnackBarContext } from '../../../../contexts/CustomSnackBarContext';
import { useDispatch } from '../../../../store';

interface EditRoleProps {
  role: Role;
  formatValues: (values, defaultPermissions: boolean) => any;
  open: boolean;
  onClose: () => void;
}
function EditRole({ role, open, onClose, formatValues }: EditRoleProps) {
  const { t }: { t: any } = useTranslation();
  const dispatch = useDispatch();
  const { showSnackBar } = useContext(CustomSnackBarContext);
  const onEditSuccess = () => {
    onClose();
    showSnackBar(t('The changes have been saved'), 'success');
  };
  const onEditFailure = (err) =>
    showSnackBar(t("The Role couldn't be edited"), 'error');

  return (
    <Dialog fullWidth maxWidth="md" open={open} onClose={onClose}>
      <DialogTitle
        sx={{
          p: 3
        }}
      >
        <Typography variant="h4" gutterBottom>
          {t('Edit role')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Fill in the fields below to edit the role')}
        </Typography>
      </DialogTitle>
      <Formik
        initialValues={{
          ...role,
          createPeopleTeams: role?.createPermissions.includes(
            PermissionEntity.PEOPLE_AND_TEAMS
          ),
          createCategories: role?.createPermissions.includes(
            PermissionEntity.CATEGORIES
          ),
          deleteWorkOrders: role?.deleteOtherPermissions.includes(
            PermissionEntity.WORK_ORDERS
          ),
          deletePreventiveMaintenanceTrigger:
            role?.deleteOtherPermissions.includes(
              PermissionEntity.PREVENTIVE_MAINTENANCES
            ),
          deleteLocations: role?.deleteOtherPermissions.includes(
            PermissionEntity.LOCATIONS
          ),
          deleteAssets: role?.deleteOtherPermissions.includes(
            PermissionEntity.ASSETS
          ),
          deletePartsAndSets: role?.deleteOtherPermissions.includes(
            PermissionEntity.PARTS_AND_MULTIPARTS
          ),
          deletePurchaseOrders: role?.deleteOtherPermissions.includes(
            PermissionEntity.PURCHASE_ORDERS
          ),
          deleteMeters: role?.deleteOtherPermissions.includes(
            PermissionEntity.METERS
          ),
          deleteVendorsCustomers: role?.deleteOtherPermissions.includes(
            PermissionEntity.VENDORS_AND_CUSTOMERS
          ),
          deleteCategories: role?.deleteOtherPermissions.includes(
            PermissionEntity.CATEGORIES
          ),
          deleteFiles: role?.deleteOtherPermissions.includes(
            PermissionEntity.FILES
          ),
          deletePeopleTeams: role?.deleteOtherPermissions.includes(
            PermissionEntity.PEOPLE_AND_TEAMS
          ),
          accessSettings: role?.viewPermissions.includes(
            PermissionEntity.SETTINGS
          ),
          submit: null
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().max(255).required(t('The name field is required')),
          description: Yup.string().max(255).nullable(),
          externalId: Yup.string().max(255).nullable()
        })}
        onSubmit={async (
          _values,
          { resetForm, setErrors, setStatus, setSubmitting }
        ) => {
          const formattedValues = formatValues({ ...role, ..._values }, false);
          setSubmitting(true);
          return dispatch(editRole(role.id, formattedValues))
            .then(onEditSuccess)
            .catch(onEditFailure)
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
                        label={t('name')}
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
                        error={Boolean(touched.externalId && errors.externalId)}
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
                        control={
                          <Checkbox checked={values.createPeopleTeams} />
                        }
                        label="People & teams"
                      />
                      <FormControlLabel
                        onChange={handleChange}
                        name={'createCategories'}
                        control={<Checkbox checked={values.createCategories} />}
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
                        {t('to_delete')}
                      </Typography>
                      <FormControlLabel
                        onChange={handleChange}
                        name={'deleteWorkOrders'}
                        control={<Checkbox checked={values.deleteWorkOrders} />}
                        label="Work Orders"
                      />
                      <FormControlLabel
                        onChange={handleChange}
                        name={'deletePreventiveMaintenanceTrigger'}
                        control={
                          <Checkbox
                            checked={values.deletePreventiveMaintenanceTrigger}
                          />
                        }
                        label="Preventative Maintenance Trigger"
                      />
                      <FormControlLabel
                        onChange={handleChange}
                        name={'deleteLocations'}
                        control={<Checkbox checked={values.deleteLocations} />}
                        label="Locations"
                      />
                      <FormControlLabel
                        onChange={handleChange}
                        name={'deleteAssets'}
                        control={<Checkbox checked={values.deleteAssets} />}
                        label="Assets"
                      />
                      <FormControlLabel
                        onChange={handleChange}
                        name={'deletePartsAndSets'}
                        control={
                          <Checkbox checked={values.deletePartsAndSets} />
                        }
                        label="Parts and Sets of Parts"
                      />
                      <FormControlLabel
                        onChange={handleChange}
                        name={'deletePurchaseOrders'}
                        control={
                          <Checkbox checked={values.deletePurchaseOrders} />
                        }
                        label="Purchase Order"
                      />
                      <FormControlLabel
                        onChange={handleChange}
                        name={'deleteMeters'}
                        control={<Checkbox checked={values.deleteMeters} />}
                        label="Meters"
                      />
                      <FormControlLabel
                        onChange={handleChange}
                        name={'deleteVendorsCustomers'}
                        control={
                          <Checkbox checked={values.deleteVendorsCustomers} />
                        }
                        label="Vendors & Customers"
                      />
                      <FormControlLabel
                        onChange={handleChange}
                        name={'deleteCategories'}
                        control={<Checkbox checked={values.deleteCategories} />}
                        label="Categories"
                      />
                      <FormControlLabel
                        onChange={handleChange}
                        name={'deleteFiles'}
                        control={<Checkbox checked={values.deleteFiles} />}
                        label="Files"
                      />
                      <FormControlLabel
                        onChange={handleChange}
                        name={'deletePeopleTeams'}
                        control={
                          <Checkbox checked={values.deletePeopleTeams} />
                        }
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
                        control={<Checkbox checked={values.accessSettings} />}
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
              <Button color="secondary" onClick={onClose}>
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
                {t('save')}
              </Button>
            </DialogActions>
          </form>
        )}
      </Formik>
    </Dialog>
  );
}
export default EditRole;
