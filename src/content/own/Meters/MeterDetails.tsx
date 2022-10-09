import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tab,
  Tabs,
  Typography,
  useTheme
} from '@mui/material';
import Location from '../../../models/owns/location';
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import Asset, { assets } from '../../../models/owns/asset';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import Meter, { meters } from '../../../models/owns/meter';
import FloorPlan from '../../../models/owns/floorPlan';
import Form from '../components/form';
import * as Yup from 'yup';
import wait from '../../../utils/wait';
import { IField } from '../type';
import SetType from '../../../models/owns/setType';
import { files } from 'src/models/owns/file';

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
    return (
      <Grid item xs={12} lg={6}>
        <Typography variant="h6" sx={{ color: theme.colors.alpha.black[70] }}>
          {label}
        </Typography>
        <Typography variant="h6">{value}</Typography>
      </Grid>
    );
  };
  const firstFieldsToRender = (
    meter: Meter
  ): { label: string; value: any }[] => [
    {
      label: t('Name'),
      value: meter.name
    },
    {
      label: t('ID'),
      value: meter.id
    }
  ];

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
          <Typography variant="h6">{meter?.asset.name}</Typography>
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
            <Typography sx={{ mb: 1 }} variant="h4">
              Meter details
            </Typography>
            <Grid container spacing={2}>
              {firstFieldsToRender(meter).map((field) =>
                renderField(field.label, field.value)
              )}
            </Grid>
          </Box>
        )}
      </Grid>
    </Grid>
  );
}
