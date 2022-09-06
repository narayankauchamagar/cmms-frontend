import { Box, Divider, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SettingsLayout from '../SettingsLayout';
import wait from '../../../../utils/wait';
import FieldsConfigurationForm from '../FieldsConfigurationForm';

function WorkOrderSettings() {
  const { t }: { t: any } = useTranslation();

  const createFields = [
    { label: t('Description'), name: 'description' },
    {
      label: t('Priority'),
      name: 'priority'
    },
    { label: t('Images'), name: 'images' }
  ];

  const initialCreateValues = {
    description: 'optional',
    priority: 'optional',
    images: 'optional'
  };
  const onCreateSubmit = async (
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
    <SettingsLayout tabIndex={2}>
      <Grid item xs={12}>
        <Box p={4}>
          <Box>
            <Divider sx={{ mt: 1 }} />
            <Box p={3}>
              <FieldsConfigurationForm
              initialValues={initialCreateValues}
              onSubmit={onCreateSubmit}
              fields={createFields} />
            </Box>
          </Box>
        </Box>
      </Grid>
    </SettingsLayout>
  );
}

export default WorkOrderSettings;
