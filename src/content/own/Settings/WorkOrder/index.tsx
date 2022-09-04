import {
  Box,
  Button,
  Divider,
  Grid,
  MenuItem,
  Select,
  Tab,
  Tabs,
  Typography,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import SettingsLayout from '../SettingsLayout';
import wait from '../../../../utils/wait';
import { ChangeEvent, useState } from 'react';
import * as Yup from 'yup';
import { Field, Formik } from 'formik';

function WorkOrderSettings() {
  const { t }: { t: any } = useTranslation();
  const [currentTab, setCurrentTab] = useState<string>('create');
  const theme = useTheme();
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

  const renderFields = (
    fields: { label: string; name: string }[],
    values: any
  ) => {
    return fields.map((field, index) => (
      <Grid
        style={
          index % 2 === 0
            ? { backgroundColor: theme.colors.alpha.black[10] }
            : undefined
        }
        key={field.name}
        item
        xs={12}
        md={12}
        lg={12}
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          padding={0.5}
        >
          <Typography variant="h6">{field.label}</Typography>
          <Field style={{backgroundColor: 'white'}} as={Select} value={values[field.name]} name={field.name}>
            <MenuItem value="optional">Optional</MenuItem>
            <MenuItem value="required">Required</MenuItem>
            <MenuItem value="hidden">Hidden</MenuItem>
          </Field>
        </Box>
      </Grid>
    ));
  };
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
  const renderForm = (initialValues, onSubmit, fields) => {
    return (
      <Box>
        <Typography variant="h5" sx={{ mb: 2 }}>
          {t('You can mark fields as Optional, Hidden or Required')}
        </Typography>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
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
              <Grid container spacing={1}>
                {renderFields(fields, values)}
                <Button sx={{ mt: 3 }} type="submit" variant="contained">
                  {t('Save')}
                </Button>
              </Grid>
            </form>
          )}
        </Formik>
      </Box>
    );
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
                renderForm(
                  initialCreateValues,
                  onCreateSubmit,
                  createFields
                )}
              {currentTab === 'complete' &&
                renderForm(
                  initialCompleteValues,
                  onCompleteSubmit,
                  completeFields
                )}
            </Box>
          </Box>
        </Box>
      </Grid>
    </SettingsLayout>
  );
}

export default WorkOrderSettings;
