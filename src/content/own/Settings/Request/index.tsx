import { Box, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SettingsLayout from '../SettingsLayout';
import FieldsConfigurationForm from '../FieldsConfigurationForm';

function WorkOrderSettings() {
  const { t }: { t: any } = useTranslation();

  const fields = [
    { label: t('Asset'), name: 'asset' },
    {
      label: t('Location'),
      name: 'location'
    },
    { label: t('Worker Assigned'), name: 'assignedTo' },
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
  return (
    <SettingsLayout tabIndex={2}>
      <Grid item xs={12}>
        <Box p={4}>
          <Box>
            <Box p={3}>
              <FieldsConfigurationForm
                initialValues={initialValues}
                fields={fields.map((field) => {
                  return { ...field, type: 'request' };
                })}
              />
            </Box>
          </Box>
        </Box>
      </Grid>
    </SettingsLayout>
  );
}

export default WorkOrderSettings;
