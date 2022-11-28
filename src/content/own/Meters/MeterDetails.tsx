import {
  Box,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Tab,
  Tabs,
  Typography,
  useTheme
} from '@mui/material';
import { ChangeEvent, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import Meter from '../../../models/owns/meter';
import * as Yup from 'yup';
import Form from '../components/form';
import { IField } from '../type';
import { useDispatch, useSelector } from '../../../store';
import { createReading, getReadings } from '../../../slices/reading';
import { CompanySettingsContext } from '../../../contexts/CompanySettingsContext';

interface MeterDetailsProps {
  meter: Meter;
  handleOpenUpdate: () => void;
  handleOpenDelete: () => void;
}
export default function MeterDetails(props: MeterDetailsProps) {
  const { meter, handleOpenUpdate, handleOpenDelete } = props;
  const { t }: { t: any } = useTranslation();
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState<string>('details');
  const { getFormattedDate } = useContext(CompanySettingsContext);
  const theme = useTheme();
  const { metersReadings } = useSelector((state) => state.readings);
  const currentMeterReadings = metersReadings[meter?.id] ?? [];
  const tabs = [
    { value: 'details', label: t('Details') },
    { value: 'history', label: t('History') }
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
    if (value === 'history' && !currentMeterReadings.length)
      dispatch(getReadings(meter.id));
  };
  const BasicField = ({
    label,
    value
  }: {
    label: string | number;
    value: string | number;
  }) => {
    return value ? (
      <Grid item xs={12} lg={6}>
        <Typography variant="h6" sx={{ color: theme.colors.alpha.black[70] }}>
          {label}
        </Typography>
        <Typography variant="h6">{value}</Typography>
      </Grid>
    ) : null;
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
      name: 'value',
      type: 'number',
      label: t('Reading'),
      placeholder: t('Enter Meter value'),
      required: true
    }
  ];
  const shape = {
    value: Yup.number().required(t('Reading value is required'))
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
          <IconButton onClick={handleOpenUpdate} style={{ marginRight: 10 }}>
            <EditTwoToneIcon color="primary" />
          </IconButton>
          <IconButton onClick={handleOpenDelete}>
            <DeleteTwoToneIcon color="error" />
          </IconButton>
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
              values={{ value: 0 }}
              onSubmit={async (values) => {
                return dispatch(createReading(meter.id, values));
              }}
            />
            <Typography sx={{ mt: 2, mb: 1 }} variant="h4">
              Meter details
            </Typography>
            <Grid container spacing={2}>
              {fieldsToRender(meter).map((field) => (
                <BasicField
                  key={field.label}
                  label={field.label}
                  value={field.value}
                />
              ))}
            </Grid>
          </Box>
        )}
        {currentTab === 'history' && (
          <List>
            {currentMeterReadings.map((reading) => (
              <ListItem key={reading.id} divider>
                <ListItemText
                  primary={`${reading.value} ${meter.unit}`}
                  secondary={getFormattedDate(reading.createdAt)}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Grid>
    </Grid>
  );
}
