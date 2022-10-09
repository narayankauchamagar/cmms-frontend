import { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import wait from 'src/utils/wait';

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
  Typography,
  Zoom
} from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { useSnackbar } from 'notistack';

// const roles = [
//   { label: 'Free', value: 'free' },
//   { label: 'Paid', value: 'paid' }
// ];

interface PageHeaderProps {
  rolesNumber: number;
}

function PageHeader({ rolesNumber }: PageHeaderProps) {
  const { t }: { t: any } = useTranslation();
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleCreateRoleOpen = () => {
    setOpen(true);
  };

  const handleCreateRoleClose = () => {
    setOpen(false);
  };

  const handleCreateRoleSuccess = () => {
    enqueueSnackbar(t('The role was created successfully'), {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      TransitionComponent: Zoom
    });

    setOpen(false);
  };

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
            description: Yup.string().max(255),
            externalId: Yup.string()
              .max(255)
              .required(t('The external ID field is required'))
          })}
          onSubmit={async (
            _values,
            { resetForm, setErrors, setStatus, setSubmitting }
          ) => {
            try {
              await wait(1000);
              resetForm();
              setStatus({ success: true });
              setSubmitting(false);
              handleCreateRoleSuccess();
            } catch (err) {
              console.error(err);
              setStatus({ success: false });
              setErrors({ submit: err.message });
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
                          control={<Checkbox checked />}
                          label="People & teams"
                        />
                        <FormControlLabel
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
                          control={<Checkbox checked />}
                          label="Work Orders"
                        />
                        <FormControlLabel
                          control={<Checkbox checked />}
                          label="Preventative Maintenance Trigger"
                        />
                        <FormControlLabel
                          control={<Checkbox checked />}
                          label="Locations"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Assets"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Parts and sets of part"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Purchase Orders"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Meters"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Vendors & Customers"
                        />
                        <FormControlLabel
                          control={<Checkbox checked />}
                          label="Categories"
                        />
                        <FormControlLabel
                          control={<Checkbox checked />}
                          label="Delete Files"
                        />
                        <FormControlLabel
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
                          control={<Checkbox />}
                          label="Setting"
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
