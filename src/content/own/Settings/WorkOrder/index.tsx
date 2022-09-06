import { Box, Divider, Grid, Tab, Tabs } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SettingsLayout from '../SettingsLayout';
import wait from '../../../../utils/wait';
import { ChangeEvent, useState } from 'react';
import FieldsConfigurationForm from '../FieldsConfigurationForm';

function WorkOrderSettings() {
  const { t }: { t: any } = useTranslation();
  const [currentTab, setCurrentTab] = useState<string>('create');
  const tabs = [
    { value: 'create', label: t('Creating a Work Order') },
    { value: 'complete', label: t('Completing a Work Order') }
  ];
  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  const createFields = [
    { label: t('Description'), name: 'description' },
    {
      label: t('Priority'),
      name: 'priority'
    },
    { label: t('Images'), name: 'images' }
  ];

  const completeFields = [
    { label: t('Files'), name: 'files' },
    {
      label: t('Tasks'),
      name: 'tasks'
    },
    { label: t('Time'), name: 'time' },
    { label: t('Parts'), name: 'parts' },
    { label: t('Cost'), name: 'cost' },
  ];

  const initialCreateValues = {
    description: 'optional',
    priority: 'optional',
    images: 'optional'
  };
  const initialCompleteValues = {
    files: 'optional',
    tasks: 'optional',
    time: 'optional',
    parts: 'optional',
    cost: 'optional',

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
  const onCompleteSubmit = async (
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
    <SettingsLayout tabIndex={1}>
      <Grid item xs={12}>
        <Box p={4}>
          <Box>
            <Tabs
              onChange={handleTabsChange}
              value={currentTab}
              variant="scrollable"
              scrollButtons="auto"
              textColor="primary"
              indicatorColor="primary"
            >
              {tabs.map((tab) => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              ))}
            </Tabs>
            <Divider sx={{ mt: 1 }} />
            <Box p={3}>
              {currentTab === 'create' &&
              <FieldsConfigurationForm
                initialValues={initialCreateValues}
                onSubmit={onCreateSubmit}
                fields={createFields} />}
              {currentTab === 'complete' &&
              <FieldsConfigurationForm
                initialValues={initialCompleteValues}
                onSubmit={onCompleteSubmit}
                fields={completeFields} />}
            </Box>
          </Box>
        </Box>
      </Grid>
    </SettingsLayout>
  );
}

export default WorkOrderSettings;
