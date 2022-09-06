import { Box, Divider, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SettingsLayout from '../SettingsLayout';
import wait from '../../../../utils/wait';
import FieldsConfigurationForm from '../FieldsConfigurationForm';

function WorkOrderSettings() {
  const { t }: { t: any } = useTranslation();

  const fields = [
    { label: t('Asset'), name: 'asset' },
    {
      label: t('Location'),
      name: 'location'
    },
    { label: t('Worker Assigned'), name: 'worker' },
    { label: t('Due date'), name: 'dueDate' },
    { label: t('Category'), name: 'category' },
    { label: t('Team'), name: 'team' }
  ];

  const initialValues = {
    asset: 'optional',
    location: 'optional',
    worker: 'optional',
    dueDate: 'optional',
    category: 'optional',
    team: 'optional'
  };
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
    <SettingsLayout tabIndex={2}>
      <Grid item xs={12}>
        <Box p={4}>
          <Box>
            <Box p={3}>
              <FieldsConfigurationForm
                initialValues={initialValues}
                onSubmit={onSubmit}
                fields={fields}
              />
            </Box>
          </Box>
        </Box>
      </Grid>
    </SettingsLayout>
  );
}

export default WorkOrderSettings;
