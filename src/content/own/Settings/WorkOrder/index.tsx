import { Box, Divider, Grid, Tab, Tabs } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SettingsLayout from '../SettingsLayout';
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
    { label: t('Images'), name: 'images' },
    { label: t('Asset'), name: 'asset' },
    { label: t('Primary User'), name: 'primaryUser' },
    { label: t('Additional Workers'), name: 'assignedTo' },
    { label: t('Team'), name: 'team' },
    { label: t('Location'), name: 'location' },
    { label: t('Due date'), name: 'dueDate' },
    { label: t('Category'), name: 'category' },
    { label: t('Purchase Order'), name: 'purchaseOrder' },
    { label: t('Files'), name: 'files' },
    { label: t('Signature'), name: 'signature' }
  ];

  const completeFields = [
    { label: t('Files'), name: 'completeFiles' },
    {
      label: t('Tasks'),
      name: 'completeTasks'
    },
    { label: t('Time'), name: 'completeTime' },
    { label: t('Parts'), name: 'completeParts' },
    { label: t('Cost'), name: 'completeCost' }
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
    cost: 'optional'
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
              {currentTab === 'create' && (
                <FieldsConfigurationForm
                  initialValues={initialCreateValues}
                  fields={createFields.map((field) => {
                    return { ...field, type: 'workOrder' };
                  })}
                />
              )}
              {currentTab === 'complete' && (
                <FieldsConfigurationForm
                  initialValues={initialCompleteValues}
                  fields={completeFields.map((field) => {
                    return { ...field, type: 'workOrder' };
                  })}
                />
              )}
            </Box>
          </Box>
        </Box>
      </Grid>
    </SettingsLayout>
  );
}

export default WorkOrderSettings;
