import {
  Box,
  Divider,
  Grid,
  Tab,
  Tabs,
  Typography,
  useTheme
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import Meter from '../../../models/owns/meter';
import * as Yup from 'yup';
import wait from '../../../utils/wait';
import Form from '../components/form';
import { IField } from '../type';

interface MeterDetailsProps {
  meter: Meter;
  handleUpdate: (id: number) => void;
}
export default function MeterDetails(props: MeterDetailsProps) {
  const { meter, handleUpdate } = props;
  const { t }: { t: any } = useTranslation();
  const [currentTab, setCurrentTab] = useState<string>('details');
  const theme = useTheme();
  const tabs = [
    { value: 'details', label: t('Details') },
    { value: 'history', label: t('History') }
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };
  const renderField = (label, value) => {
    if (value)
      return (
        <Grid item xs={12} lg={6}>
          <Typography variant="h6" sx={{ color: theme.colors.alpha.black[70] }}>
            {label}
          </Typography>
          <Typography variant="h6">{value}</Typography>
        </Grid>
      );
  };
  const fieldsToRender = (meter: Meter): { label: string; value: any }[] => [
    {
      label: t('Location Name'),
      value: meter.location?.name
    },
    {
      label: t('Asset Name'),
      value: meter.asset.name
    },
    {
      label: t('Reading Frequency'),
      value: `Every ${meter.updateFrequency} day`
    },
    {
      label: t('Assigned To'),
      value: meter.users.reduce(
        (acc, user, index) =>
          acc + `${index !== 0 ? ',' : ''} ${user.firstName} ${user.lastName}`,
        ''
      )
    }
  ];
  const fields: Array<IField> = [
    {
      name: 'reading',
      type: 'text',
      label: t('Reading'),
      placeholder: t('Enter Meter value'),
      required: true
    }
  ];
  const shape = {
    reading: Yup.string().required(t('Reading value is required'))
  };
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="stretch"
      spacing={2}
      padding={4}
    >
      <Grid
        item
        xs={12}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="h2">{meter?.name}</Typography>
        </Box>
        <Box>
          <EditTwoToneIcon
            onClick={() => handleUpdate(meter.id)}
            style={{ cursor: 'pointer', marginRight: 10 }}
            color="primary"
          />
          <DeleteTwoToneIcon style={{ cursor: 'pointer' }} color="error" />
        </Box>
      </Grid>
      <Divider />
      <Grid item xs={12}>
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
      </Grid>
      <Grid item xs={12}>
        {currentTab === 'details' && (
          <Box>
            <Form
              fields={fields}
              validation={Yup.object().shape(shape)}
              submitText={t('Add Reading')}
              values={{ reading: 0 }}
              onSubmit={async (values) => {
                try {
                  await wait(2000);
                } catch (err) {
                  console.error(err);
                }
              }}
            />
            <Typography sx={{ mt: 2, mb: 1 }} variant="h4">
              Meter details
            </Typography>
            <Grid container spacing={2}>
              {fieldsToRender(meter).map((field) =>
                renderField(field.label, field.value)
              )}
            </Grid>
          </Box>
        )}
      </Grid>
    </Grid>
  );
}
